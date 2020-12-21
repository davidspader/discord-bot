const discord = require('discord.js');

const name = 'embed';
const help = 'bla bla bla bla embed';

const execute = (client, msg, args) => {
    const embed = new discord.MessageEmbed()
        .setColor('#f2a30b')
        .setTitle(process.env.PREFIX + name)
        .setURL('https://discord.js.org/')
        .setAuthor(client.user.username, client.user.displayAvatarURL())
        .setDescription('**bla bla bla bla embed**\nbla bla bla bla embed\nbla bla bla bla embed\nbla bla bla bla embed\n')
        .setTimestamp()
        .setFooter(client.user.username, client.user.displayAvatarURL());

    msg.reply(embed);
};