const execute = (client, msg, args) => {
    msg.reply("Pong");
}

module.exports = {
    name: "ping",
    help: "Ping Pong",
    execute,
}