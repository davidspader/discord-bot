const discord = require('discord.js');
const embed = require('../scripts/embed');

const search = require("yt-search");
const ytdl = require("discord-ytdl-core");

const execute = (client, msg, args) => {
    const arg = args.join(" ");
    try {
        search(arg, (err, result) => {
            if (err) {
                throw err;
            } else if (result && result.videos.length > 0) {
                const song = result.videos[0];
                const queue = client.queues.get(msg.guild.id);
                if (queue) {
                    queue.songs.push(song);
                    client.queues.set(msg.guild.id, queue);
                } else playSong(client, msg, song);
            } else {
                return embed(discord, client, msg, "play", "Music not found");
            }
        });
    } catch (e) {
        console.error(e);
    }
};

const playSong = async(client, msg, song) => {
    let queue = client.queues.get(msg.member.guild.id);
    if (!song) {
        if (queue) {
            queue.connection.disconnect();
            return client.queues.delete(msg.member.guild.id);
        }
    }
    if (!msg.member.voice.channel) {
        return embed(discord, client, msg, "play", "You need to be on a voice channel");
    }
    if (!queue) {
        const conn = await msg.member.voice.channel.join();
        queue = {
            volume: 10,
            connection: conn,
            dispatcher: null,
            songs: [song],
        };
    }
    queue.dispatcher = await queue.connection.play(
        await ytdl(song.url), {
            type: "opus",
        }
    );
    queue.dispatcher.on("finish", () => {
        queue.songs.shift();
        playSong(client, msg, queue.songs[0]);
    });
    client.queues.set(msg.member.guild.id, queue);
    return embed(discord, client, msg, "play", `Playing now: ${song.title}`);
};

module.exports = {
    name: "play",
    help: "Plays music from youtube",
    wait: true,
    execute,
    playSong,
};