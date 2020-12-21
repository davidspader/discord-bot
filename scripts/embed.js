module.exports = (discord, client, msg, commandName, output) => {
    const embed = new discord.MessageEmbed()
        .setColor('#f2a30b')
        .setTitle(process.env.PREFIX + commandName)
        .setAuthor(client.user.username, client.user.displayAvatarURL())
        .setDescription(output)
        .setTimestamp()
        .setFooter(client.user.username, client.user.displayAvatarURL());

    msg.reply(embed);
};