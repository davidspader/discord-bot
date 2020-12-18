const discord = require('discord.js');
require('dotenv').config();

const token = process.env.TOKEN;

const client = new discord.Client();

client.on("ready", () => {
    console.log("Connected!");
})

client.on("message", (msg) => {
    console.log("Message received");
})

client.login(token);