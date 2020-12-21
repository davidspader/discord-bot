const execute = (client, msg, args) => {
    const queue = client.queues.get(msg.guild.id);
    if (!queue) {
        return output = "No music is playing";
    }
    const volume = Number(args.join(" "));
    if (isNaN(volume) || volume < 0 || volume > 10) {
        return output = "The value must be between 0 and 10";
    }
    queue.dispatcher.setVolume(volume / 10);
    queue.volume = volume;
    client.queues.set(msg.guild.id, queue);
    return output = "volume changed to " + volume;
};

module.exports = {
    name: "volume",
    help: "Adjusts the volume",
    execute,
};