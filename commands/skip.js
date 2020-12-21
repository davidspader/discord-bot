const playSong = require("./play").playSong;

const execute = (client, msg, args) => {
    const queue = client.queues.get(msg.guild.id);
    if (!queue) {
        return output = "No music is playing";
    }
    queue.songs.shift();
    client.queues.set(msg.guild.id, queue);
    playSong(client, msg, queue.songs[0]);
    return output = "Music was skipped";
};

module.exports = {
    name: "skip",
    help: "Skip to the next song",
    execute,
};