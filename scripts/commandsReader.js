const fs = require('fs');
const path = require('path');

module.exports = (commands) => {
    const commandFiles = fs.readdirSync(path.join(__dirname, "../commands")).filter((filename) => filename.endsWith(".js"));

    for (var filename of commandFiles) {
        const command = require(`../commands/${filename}`);
        commands.set(command.name, command);
    }

    return commands;
}