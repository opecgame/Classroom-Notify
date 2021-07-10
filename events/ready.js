const fs = require("fs");
const school = require("../function/school_alert")
const Discord = require("discord.js");
module.exports = (client) => {
  school(client)
    client.user.setPresence({ activity: { name: `ตารางเรียน`, type: 'WATCHING' }, status: 'online' });
	client.channels.fetch('845653602147237898')
      .then(channel => {
        const hello = new Discord.MessageEmbed()
        hello.setColor('#5cf000')
        hello.setTitle('TimeTable Started !')
        hello.setDescription('Started by Discord.js')
        hello.setFooter('Version : 1.0')
        hello.setTimestamp()
          channel.send({embed: hello});
      })
    client.setInterval(() => {
        client.user.setPresence({ activity: { name: `ตารางเรียน`, type: 'WATCHING' }, status: 'online' });
    }, 60000)
    console.log(`\n----------------------------\n\n    Logged in ${client.user.tag}\n\n----------------------------\n`);
}
