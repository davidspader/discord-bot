const execute = (client, msg, args) => {
    let output = '';
    client.commands.forEach((command) => {
        if (command.help) {
            output += `**${process.env.PREFIX}${command.name}**: ${command.help}\n`;
        }
    })
    return output;
}

module.exports = {
    name: "help",
    help: "Show all commands",
    execute,
}