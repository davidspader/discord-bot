const execute = (client, msg, args) => {
    const queue = client.queues.get(msg.guild.id);
    if (!queue) {
        return msg.reply("No music is playing");
    }
    queue.dispatcher.resume();
};

module.exports = {
    name: "resume",
    help: "resumes the play of music",
    execute,
};