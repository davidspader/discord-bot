const execute = (client, msg, args) => {
    const queue = client.queues.get(msg.guild.id);
    if (!queue) {
        return msg.reply("No music is playing");
    }
    queue.songs = [];
    client.queues.set(msg.guild.id, queue);
    queue.dispatcher.end();
};

module.exports = {
    name: "stop",
    help: "Stop the play of music",
    execute,
};