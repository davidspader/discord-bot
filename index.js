const discord = require('discord.js');
require('dotenv').config();

const client = new discord.Client();

client.on("ready", () => {
    console.log("Connected!");
})

client.on("message", (msg) => {
    let command = msg.content.toLowerCase();
    if (command === 'salve') {
        msg.reply(`salve :call_me:`);
    }
})

client.login(process.env.TOKEN);