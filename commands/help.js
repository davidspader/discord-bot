const commands = require("../scripts/commandsReader")(process.env.PREFIX);

module.exports = (client, msg) => {
    let commandList = '';

    for (var command in commands) {
        commandList += command + " ";
    }
    msg.reply(commandList);
}