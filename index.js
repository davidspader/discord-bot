const discord = require('discord.js');
require('dotenv').config();

const client = new discord.Client();
client.commands = new discord.Collection();
client.queues = new Map();

client.commands = require("./scripts/commandsReader")(client.commands);

const embed = require('./scripts/embed');

client.on("ready", () => {
    client.user.setActivity(process.env.PREFIX + 'help', { type: 'LISTENING' });
    console.log("Connected!");
})

client.on("message", (msg) => {
    if (msg.content.toLowerCase() === 'salve') {
        msg.reply(`salve :call_me:`);
        return;
    }

    if (!msg.content.startsWith(process.env.PREFIX) || msg.author.bot) return;

    const args = msg.content.slice(process.env.PREFIX.length).split(" ");
    const command = args.shift();

    try {
        if (!client.commands.get(command).wait) {
            output = client.commands.get(command).execute(client, msg, args);
            embed(discord, client, msg, command, output);
        } else {
            client.commands.get(command).execute(client, msg, args);
        }

    } catch (e) {
        console.error(e);
        embed(discord, client, msg, command, "Command not found");
    }
})

client.login(process.env.TOKEN);