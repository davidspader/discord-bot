const execute = (client, msg, args) => {
    let commands = '**HELP:**\n\n';
    client.commands.forEach((command) => {
        if (command.help) {
            commands += `**${process.env.PREFIX}${command.name}**: ${command.help}\n`;
        }
    })
    return msg.channel.send(commands);
}

module.exports = {
    name: "help",
    help: "Show all commands",
    execute,
}