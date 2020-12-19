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
                return msg.reply("Music not found");
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
        return msg.reply("you need to be on a voice channel");
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
};

module.exports = {
    name: "play",
    help: "Plays music from youtube",
    execute,
    playSong,
};