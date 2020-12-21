const execute = (client, msg, args) => {
    const queue = client.queues.get(msg.guild.id);
    if (!queue) {
        return output = "No music is playing";
    }
    queue.songs = [];
    client.queues.set(msg.guild.id, queue);
    queue.dispatcher.end();
    return output = "Music was stopped";
};

module.exports = {
    name: "stop",
    help: "Stop the play of music",
    execute,
};