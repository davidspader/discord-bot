const execute = (client, msg, args) => {

    if (!msg.member.hasPermission("BAN_MEMBERS")) {
        return output = 'you are not allowed to ban';
    }

    let user = msg.mentions.users.first();
    if (user) {
        try {
            msg.guild.members.cache.get(user.id).ban();
            return output = 'User has been banned';
        } catch (error) {
            return output = 'you are not allowed to ban ' + user;
        }

    } else {
        return output = 'you have to ban @someone';
    }
}

module.exports = {
    name: "ban",
    help: "Ban a user",
    execute,
}