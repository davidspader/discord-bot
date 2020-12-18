const discord = require('discord.js');
require('dotenv').config();

const client = new discord.Client();

const commands = require("./scripts/commandsReader")(process.env.PREFIX);

client.on("ready", () => {
    console.log("Connected!");
})

client.on("message", (msg) => {
    if (msg.content.toLowerCase() === 'salve') {
        msg.reply(`salve :call_me:`);
    }
    if (!msg.author.bot) {
        const args = msg.content.split(" ");
        if (commands[args[0]]) {
            commands[args[0]](client, msg);
        }
    }
})

client.login(process.env.TOKEN);