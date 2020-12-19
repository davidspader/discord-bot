const execute = (client, msg, args) => {
    const queue = client.queues.get(msg.guild.id);
    if (!queue) {
        return msg.reply("No music is playing");
    }
    const volume = Number(args.join(" "));
    if (isNaN(volume) || volume < 0 || volume > 10) {
        return msg.reply("The value must be between 0 and 10");
    }
    queue.dispatcher.setVolume(volume / 10);
    queue.volume = volume;
    client.queues.set(msg.guild.id, queue);
};

module.exports = {
    name: "volume",
    help: "Adjusts the volume",
    execute,
};