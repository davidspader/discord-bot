const execute = (client, msg, args) => {
    const queue = client.queues.get(msg.guild.id);
    if (!queue) {
        return output = "No music is playing";
    }
    queue.dispatcher.pause();
    return output = "Music was paused";
};

module.exports = {
    name: "pause",
    help: "Pause the music",
    execute,
};