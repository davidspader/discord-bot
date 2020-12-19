const execute = (client, msg, args) => {
    msg.reply(msg.author.avatarURL());
}

module.exports = {
    name: "avatarImage",
    help: "Returns the avatar image link",
    execute,
}