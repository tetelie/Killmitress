const Discord = require('discord.js');
const client = new Discord.Client();
const {prefix, token} = require("../killmitress/config.json");
const fs = require("fs");

client.once('ready', () => {
    console.log("Bot successfully started!");
});

client.commands = new Discord.Collection();
client.login(token);


// Commands
const commandFiles = fs.readdirSync("./commands/").filter(file => file.endsWith(".js"));

for(const file of commandFiles)
{
    const command = require("./commands/"+file);
    client.commands.set(command.name, command);
}

client.on("message", message => {

    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(!client.commands.has(command)) return;

    try{
        client.commands.get(command).execute(message, args);
    }catch (error)
    {
        console.error(error);
        message.reply("An error occured during command execution.")
    }

})



