const execute = (client, msg, args) => {
    const queue = client.queues.get(msg.guild.id);
    if (!queue) {
        return output = "No music is playing";
    }
    queue.dispatcher.resume();
    return output = "Music was unpaused";
};

module.exports = {
    name: "resume",
    help: "resumes the play of music",
    execute,
};