const Discord = require("discord.js");
const Enmap = require("enmap");
const fs = require("fs");
const client = new Discord.Client();

//load config
const config = JSON.parse(fs.readFileSync('./config/config.json', 'utf8'));
global.config = config;

fs.readdir("./events/", (err, files) => {
    console.log(`\nReading file "Events"\n--------------------------\n`)
    if (err) return console.error(err);
    files.forEach(file => {
        const event = require(`./events/${file}`);
        let eventName = file.split(".")[0];
        console.log(`loaded -> ${eventName}`);
        client.on(eventName, event.bind(null, client));
    });
});

client.commands = new Enmap();


fs.readdir("./commands/", (err, files) => {
    console.log(`\n--------------------------\nReading file "Commands"\n--------------------------\n`)
    if (err) return console.error(err);
    files.forEach(file => {
        if (!file.endsWith(".js")) return;
        let props = require(`./commands/${file}`);
        let commandName = file.split(".")[0];
        console.log(`loaded -> ${commandName}`);
        client.commands.set(commandName, props);
    });
});

client.login(config.token);