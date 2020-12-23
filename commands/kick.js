const execute = (client, msg, args) => {

    if (!msg.member.hasPermission("KICK_MEMBERS")) {
        return output = 'you are not allowed to kick';
    }

    const user = msg.mentions.users.first();
    if (user) {
        try {
            msg.guild.members.cache.get(user.id).kick();
            return output = 'User has been kicked';
        } catch (error) {
            return output = 'you are not allowed to kick ' + user;
        }

    } else {
        return output = 'you have to kick @someone';
    }
}

module.exports = {
    name: "kick",
    help: "Kick a user",
    execute,
}