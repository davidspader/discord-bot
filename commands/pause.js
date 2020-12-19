const execute = (client, msg, args) => {
    const queue = client.queues.get(msg.guild.id);
    if (!queue) {
        return msg.reply("No music is playing");
    }
    queue.dispatcher.pause();
};

module.exports = {
    name: "pause",
    help: "Pause the music",
    execute,
};