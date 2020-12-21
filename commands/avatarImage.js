const execute = (client, msg, args) => {
    return output = msg.author.avatarURL();
}

module.exports = {
    name: "avatarImage",
    help: "Returns the avatar image link",
    execute,
}