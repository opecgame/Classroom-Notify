const Discord = require("discord.js");
const request = require('request');
const config = require("./config.json");
const client = new Discord.Client();
const class = require("./class.json");

client.on("ready", () => {
	client.user.setStatus('Online')
	console.log(config.namebot + ` Was start !`);
	client.channels.fetch(config.logsroom)
    .then(channel => {
      const hello = new Discord.MessageEmbed()
      hello.setColor('#5cf000')
      hello.setTitle(config.namebot +' Started !')
      hello.setDescription('Started by Discord.js')
      hello.setTimestamp()
        channel.send({embed: hello});
    })
})

client.on("message", message => {
let t = setInterval(time,config.timesent);


/*********************************************************/
const m1 = new Discord.MessageEmbed()
m1.setColor('#0BEEF0')
m1.setTitle('คาบที่ **1**')
m1.setDescription('__รายวิชา__ **' + clss.m1 + '**')
m1.setTimestamp()
.setAuthor(config.schoolname, config.logoschool, config.schoollink)
.setThumbnail(config.logoschool)
.setFooter('Bot By OpecZ CH', 'https://media.discordapp.net/attachments/816274714921140225/847088447470567424/2.png');
.setURL('')

const m2 = new Discord.MessageEmbed()
m2.setColor('#0BEEF0')
m2.setTitle('คาบที่ **2**')
m2.setDescription('__รายวิชา__ **' + clss.m2 + '**')
m2.setTimestamp()
.setAuthor(config.schoolname, config.logoschool, config.schoollink)
.setThumbnail(config.logoschool)
.setFooter('Bot By OpecZ CH', 'https://media.discordapp.net/attachments/816274714921140225/847088447470567424/2.png');
.setURL('')

const m3 = new Discord.MessageEmbed()
m3.setColor('#0BEEF0')
m3.setTitle('คาบที่ **3**')
m3.setDescription('__รายวิชา__ **' + clss.m3 + '**')
m3.setTimestamp()
.setAuthor(config.schoolname, config.logoschool, config.schoollink)
.setThumbnail(config.logoschool)
.setFooter('Bot By OpecZ CH', 'https://media.discordapp.net/attachments/816274714921140225/847088447470567424/2.png');
.setURL('')

const m4 = new Discord.MessageEmbed()
m4.setColor('#0BEEF0')
m4.setTitle('คาบที่ **4**')
m4.setDescription('__รายวิชา__ **' + clss.m4 + '**')
m4.setTimestamp()
.setAuthor(config.schoolname, config.logoschool, config.schoollink)
.setThumbnail(config.logoschool)
.setFooter('Bot By OpecZ CH', 'https://media.discordapp.net/attachments/816274714921140225/847088447470567424/2.png');
.setURL('')

const m5 = new Discord.MessageEmbed()
m5.setColor('#0BEEF0')
m5.setTitle('คาบที่ **5**')
m5.setDescription('__รายวิชา__ **' + clss.m5 + '**')
m5.setTimestamp()
.setAuthor(config.schoolname, config.logoschool, config.schoollink)
.setThumbnail(config.logoschool)
.setFooter('Bot By OpecZ CH', 'https://media.discordapp.net/attachments/816274714921140225/847088447470567424/2.png');
.setURL('')

const m6 = new Discord.MessageEmbed()
m6.setColor('#0BEEF0')
m6.setTitle('คาบที่ **6**')
m6.setDescription('__รายวิชา__ **' + clss.m6 + '**')
m6.setTimestamp()
.setAuthor(config.schoolname, config.logoschool, config.schoollink)
.setThumbnail(config.logoschool)
.setFooter('Bot By OpecZ CH', 'https://media.discordapp.net/attachments/816274714921140225/847088447470567424/2.png');
.setURL('')

const m7 = new Discord.MessageEmbed()
m7.setColor('#0BEEF0')
m7.setTitle('คาบที่ **7**')
m7.setDescription('__รายวิชา__ **' + clss.m7 + '**')
m7.setTimestamp()
.setAuthor(config.schoolname, config.logoschool, config.schoollink)
.setThumbnail(config.logoschool)
.setFooter('Bot By OpecZ CH', 'https://media.discordapp.net/attachments/816274714921140225/847088447470567424/2.png');
.setURL('')

const m8 = new Discord.MessageEmbed()
m8.setColor('#0BEEF0')
m8.setTitle('คาบที่ **8**')
m8.setDescription('__รายวิชา__ **' + clss.m8 + '**')
m8.setTimestamp()
.setAuthor(config.schoolname, config.logoschool, config.schoollink)
.setThumbnail(config.logoschool)
.setFooter('Bot By OpecZ CH', 'https://media.discordapp.net/attachments/816274714921140225/847088447470567424/2.png');
.setURL('')

/************************************************** */

/************************************************** */
const t1 = new Discord.MessageEmbed()
t1.setColor('#0BEEF0')
t1.setTitle('คาบที่ **1**')
t1.setDescription('__รายวิชา__ **' + clss.t1 + '**')
t1.setTimestamp()
.setAuthor(config.schoolname, config.logoschool, config.schoollink)
.setThumbnail(config.logoschool)
.setFooter('Bot By OpecZ CH', 'https://media.discordapp.net/attachments/816274714921140225/847088447470567424/2.png');
.setURL('')

const t2 = new Discord.MessageEmbed()
t2.setColor('#0BEEF0')
t2.setTitle('คาบที่ **2**')
t2.setDescription('__รายวิชา__ **' + clss.t2 + '**')
t2.setTimestamp()
.setAuthor(config.schoolname, config.logoschool, config.schoollink)
.setThumbnail(config.logoschool)
.setFooter('Bot By OpecZ CH', 'https://media.discordapp.net/attachments/816274714921140225/847088447470567424/2.png');
.setURL('')

const t3 = new Discord.MessageEmbed()
t3.setColor('#0BEEF0')
t3.setTitle('คาบที่ **3**')
t3.setDescription('__รายวิชา__ **' + clss.t3 + '**')
t3.setTimestamp()
.setAuthor(config.schoolname, config.logoschool, config.schoollink)
.setThumbnail(config.logoschool)
.setFooter('Bot By OpecZ CH', 'https://media.discordapp.net/attachments/816274714921140225/847088447470567424/2.png');
.setURL('')

const t4 = new Discord.MessageEmbed()
t4.setColor('#0BEEF0')
t4.setTitle('คาบที่ **4**')
t4.setDescription('__รายวิชา__ **' + clss.t4 + '**')
t4.setTimestamp()
.setAuthor(config.schoolname, config.logoschool, config.schoollink)
.setThumbnail(config.logoschool)
.setFooter('Bot By OpecZ CH', 'https://media.discordapp.net/attachments/816274714921140225/847088447470567424/2.png');
.setURL('')

const t5 = new Discord.MessageEmbed()
t5.setColor('#0BEEF0')
t5.setTitle('คาบที่ **5**')
t5.setDescription('__รายวิชา__ **' + clss.t5 + '**')
t5.setTimestamp()
.setAuthor(config.schoolname, config.logoschool, config.schoollink)
.setThumbnail(config.logoschool)
.setFooter('Bot By OpecZ CH', 'https://media.discordapp.net/attachments/816274714921140225/847088447470567424/2.png');
.setURL('')

const t6 = new Discord.MessageEmbed()
t6.setColor('#0BEEF0')
t6.setTitle('คาบที่ **6**')
t6.setDescription('__รายวิชา__ **' + clss.t6 + '**')
t6.setTimestamp()
.setAuthor(config.schoolname, config.logoschool, config.schoollink)
.setThumbnail(config.logoschool)
.setFooter('Bot By OpecZ CH', 'https://media.discordapp.net/attachments/816274714921140225/847088447470567424/2.png');
.setURL('')

const t7 = new Discord.MessageEmbed()
t7.setColor('#0BEEF0')
t7.setTitle('คาบที่ **7**')
t7.setDescription('__รายวิชา__ **' + clss.t7 + '**')
t7.setTimestamp()
.setAuthor(config.schoolname, config.logoschool, config.schoollink)
.setThumbnail(config.logoschool)
.setFooter('Bot By OpecZ CH', 'https://media.discordapp.net/attachments/816274714921140225/847088447470567424/2.png');
.setURL('')

const t8 = new Discord.MessageEmbed()
t8.setColor('#0BEEF0')
t8.setTitle('คาบที่ **8**')
t8.setDescription('__รายวิชา__ **' + clss.t8 + '**')
t8.setTimestamp()
.setAuthor(config.schoolname, config.logoschool, config.schoollink)
.setThumbnail(config.logoschool)
.setFooter('Bot By OpecZ CH', 'https://media.discordapp.net/attachments/816274714921140225/847088447470567424/2.png');
.setURL('')

/************************************************** */

/************************************************** */
const w1 = new Discord.MessageEmbed()
w1.setColor('#0BEEF0')
w1.setTitle('คาบที่ **1**')
w1.setDescription('__รายวิชา__ **' + clss.w1 + '**')
w1.setTimestamp()
.setAuthor(config.schoolname, config.logoschool, config.schoollink)
.setThumbnail(config.logoschool)
.setFooter('Bot By OpecZ CH', 'https://media.discordapp.net/attachments/816274714921140225/847088447470567424/2.png');
.setURL('')
const w2 = new Discord.MessageEmbed()
w2.setColor('#0BEEF0')
w2.setTitle('คาบที่ **2**')
w2.setDescription('__รายวิชา__ **' + clss.w2 + '**')
w2.setTimestamp()
.setAuthor(config.schoolname, config.logoschool, config.schoollink)
.setThumbnail(config.logoschool)
.setFooter('Bot By OpecZ CH', 'https://media.discordapp.net/attachments/816274714921140225/847088447470567424/2.png');
.setURL('')

const w3 = new Discord.MessageEmbed()
w3.setColor('#0BEEF0')
w3.setTitle('คาบที่ **3**')
w3.setDescription('__รายวิชา__ **' + clss.w3 + '**')
w3.setTimestamp()
.setAuthor(config.schoolname, config.logoschool, config.schoollink)
.setThumbnail(config.logoschool)
.setFooter('Bot By OpecZ CH', 'https://media.discordapp.net/attachments/816274714921140225/847088447470567424/2.png');
.setURL('')

const w4 = new Discord.MessageEmbed()
w4.setColor('#0BEEF0')
w4.setTitle('คาบที่ **4**')
w4.setDescription('__รายวิชา__ **' + clss.w4 + '**')
w4.setTimestamp()
.setAuthor(config.schoolname, config.logoschool, config.schoollink)
.setThumbnail(config.logoschool)
.setFooter('Bot By OpecZ CH', 'https://media.discordapp.net/attachments/816274714921140225/847088447470567424/2.png');
.setURL('')

const w5 = new Discord.MessageEmbed()
w5.setColor('#0BEEF0')
w5.setTitle('คาบที่ **5**')
w5.setDescription('__รายวิชา__ **' + clss.w5 + '**')
w5.setTimestamp()
.setAuthor(config.schoolname, config.logoschool, config.schoollink)
.setThumbnail(config.logoschool)
.setFooter('Bot By OpecZ CH', 'https://media.discordapp.net/attachments/816274714921140225/847088447470567424/2.png');
.setURL('')

const w6 = new Discord.MessageEmbed()
w6.setColor('#0BEEF0')
w6.setTitle('คาบที่ **6**')
w6.setDescription('__รายวิชา__ **' + clss.w6 + '**')
w6.setTimestamp()
.setAuthor(config.schoolname, config.logoschool, config.schoollink)
.setThumbnail(config.logoschool)
.setFooter('Bot By OpecZ CH', 'https://media.discordapp.net/attachments/816274714921140225/847088447470567424/2.png');
.setURL('')

const w7 = new Discord.MessageEmbed()
w7.setColor('#0BEEF0')
w7.setTitle('คาบที่ **7**')
w7.setDescription('__รายวิชา__ **' + clss.w7 + '**')
w7.setTimestamp()
.setAuthor(config.schoolname, config.logoschool, config.schoollink)
.setThumbnail(config.logoschool)
.setFooter('Bot By OpecZ CH', 'https://media.discordapp.net/attachments/816274714921140225/847088447470567424/2.png');
.setURL('')

const w8 = new Discord.MessageEmbed()
w8.setColor('#0BEEF0')
w8.setTitle('คาบที่ **8**')
w8.setDescription('__รายวิชา__ **' + clss.w8 + '**')
w8.setTimestamp()
.setAuthor(config.schoolname, config.logoschool, config.schoollink)
.setThumbnail(config.logoschool)
.setFooter('Bot By OpecZ CH', 'https://media.discordapp.net/attachments/816274714921140225/847088447470567424/2.png');
.setURL('')

const w9 = new Discord.MessageEmbed()
w9.setColor('#0BEEF0')
w9.setTitle('คาบที่ **9**')
w9.setDescription('__รายวิชา__ **' + clss.w9 + '**')
w9.setTimestamp()
.setAuthor(config.schoolname, config.logoschool, config.schoollink)
.setThumbnail(config.logoschool)
.setFooter('Bot By OpecZ CH', 'https://media.discordapp.net/attachments/816274714921140225/847088447470567424/2.png');
.setURL('')


/************************************************** */

/************************************************** */
const th1 = new Discord.MessageEmbed()
th1.setColor('#0BEEF0')
th1.setTitle('คาบที่ **1**')
th1.setDescription('__รายวิชา__ **' + clss.th1 + '**')
th1.setTimestamp()
.setAuthor(config.schoolname, config.logoschool, config.schoollink)
.setThumbnail(config.logoschool)
.setFooter('Bot By OpecZ CH', 'https://media.discordapp.net/attachments/816274714921140225/847088447470567424/2.png');
.setURL('')

const th2 = new Discord.MessageEmbed()
th2.setColor('#0BEEF0')
th2.setTitle('คาบที่ **2**')
th2.setDescription('__รายวิชา__ **' + clss.th2 + '**')
th2.setTimestamp()
.setAuthor(config.schoolname, config.logoschool, config.schoollink)
.setThumbnail(config.logoschool)
.setFooter('Bot By OpecZ CH', 'https://media.discordapp.net/attachments/816274714921140225/847088447470567424/2.png');
.setURL('')

const th3 = new Discord.MessageEmbed()
th3.setColor('#0BEEF0')
th3.setTitle('คาบที่ **3**')
th3.setDescription('__รายวิชา__ **' + clss.th3 + '**')
th3.setTimestamp()
.setAuthor(config.schoolname, config.logoschool, config.schoollink)
.setThumbnail(config.logoschool)
.setFooter('Bot By OpecZ CH', 'https://media.discordapp.net/attachments/816274714921140225/847088447470567424/2.png');
.setURL('')

const th4 = new Discord.MessageEmbed()
th4.setColor('#0BEEF0')
th4.setTitle('คาบที่ **4**')
th4.setDescription('__รายวิชา__ **' + clss.th4 + '**')
th4.setTimestamp()
.setAuthor(config.schoolname, config.logoschool, config.schoollink)
.setThumbnail(config.logoschool)
.setFooter('Bot By OpecZ CH', 'https://media.discordapp.net/attachments/816274714921140225/847088447470567424/2.png');
.setURL('')

const th5 = new Discord.MessageEmbed()
th5.setColor('#0BEEF0')
th5.setTitle('คาบที่ **5**')
th5.setDescription('__รายวิชา__ **' + clss.th5 + '**')
th5.setTimestamp()
.setAuthor(config.schoolname, config.logoschool, config.schoollink)
.setThumbnail(config.logoschool)
.setFooter('Bot By OpecZ CH', 'https://media.discordapp.net/attachments/816274714921140225/847088447470567424/2.png');
.setURL('')

const th6 = new Discord.MessageEmbed()
th6.setColor('#0BEEF0')
th6.setTitle('คาบที่ **6**')
th6.setDescription('__รายวิชา__ **' + clss.th6 + '**')
th6.setTimestamp()
.setAuthor(config.schoolname, config.logoschool, config.schoollink)
.setThumbnail(config.logoschool)
.setFooter('Bot By OpecZ CH', 'https://media.discordapp.net/attachments/816274714921140225/847088447470567424/2.png');
.setURL('')

const th7 = new Discord.MessageEmbed()
th7.setColor('#0BEEF0')
th7.setTitle('คาบที่ **7**')
th7.setDescription('__รายวิชา__ **' + clss.th7 + '**')
th7.setTimestamp()
.setAuthor(config.schoolname, config.logoschool, config.schoollink)
.setThumbnail(config.logoschool)
.setFooter('Bot By OpecZ CH', 'https://media.discordapp.net/attachments/816274714921140225/847088447470567424/2.png');
.setURL('')

const th8 = new Discord.MessageEmbed()
th8.setColor('#0BEEF0')
th8.setTitle('คาบที่ **8**')
th8.setDescription('__รายวิชา__ **' + clss.th8 + '**')
th8.setTimestamp()
.setAuthor(config.schoolname, config.logoschool, config.schoollink)
.setThumbnail(config.logoschool)
.setFooter('Bot By OpecZ CH', 'https://media.discordapp.net/attachments/816274714921140225/847088447470567424/2.png');
.setURL('')

const th9 = new Discord.MessageEmbed()
th9.setColor('#0BEEF0')
th9.setTitle('คาบที่ **9**')
th9.setDescription('__รายวิชา__ **' + clss.th9 + '**')
th9.setTimestamp()
.setAuthor(config.schoolname, config.logoschool, config.schoollink)
.setThumbnail(config.logoschool)
.setFooter('Bot By OpecZ CH', 'https://media.discordapp.net/attachments/816274714921140225/847088447470567424/2.png');
.setURL('')

/************************************************** */

/************************************************** */
const f1 = new Discord.MessageEmbed()
f1.setColor('#0BEEF0')
f1.setTitle('คาบที่ **1**')
f1.setDescription('__รายวิชา__ **' + clss.f1 + '**')
f1.setTimestamp()
.setAuthor(config.schoolname, config.logoschool, config.schoollink)
.setThumbnail(config.logoschool)
.setFooter('Bot By OpecZ CH', 'https://media.discordapp.net/attachments/816274714921140225/847088447470567424/2.png');
.setURL('')

const f2 = new Discord.MessageEmbed()
f2.setColor('#0BEEF0')
f2.setTitle('คาบที่ **2**')
f2.setDescription('__รายวิชา__ **' + clss.f2 + '**')
f2.setTimestamp()
.setAuthor(config.schoolname, config.logoschool, config.schoollink)
.setThumbnail(config.logoschool)
.setFooter('Bot By OpecZ CH', 'https://media.discordapp.net/attachments/816274714921140225/847088447470567424/2.png');
.setURL('')

const f3 = new Discord.MessageEmbed()
f3.setColor('#0BEEF0')
f3.setTitle('คาบที่ **3**')
f3.setDescription('__รายวิชา__ **' + clss.f3 + '**')
f3.setTimestamp()
.setAuthor(config.schoolname, config.logoschool, config.schoollink)
.setThumbnail(config.logoschool)
.setFooter('Bot By OpecZ CH', 'https://media.discordapp.net/attachments/816274714921140225/847088447470567424/2.png');
.setURL('')

const f4 = new Discord.MessageEmbed()
f4.setColor('#0BEEF0')
f4.setTitle('คาบที่ **4**')
f4.setDescription('__รายวิชา__ **' + clss.f4 + '**')
f4.setTimestamp()
.setAuthor(config.schoolname, config.logoschool, config.schoollink)
.setThumbnail(config.logoschool)
.setFooter('Bot By OpecZ CH', 'https://media.discordapp.net/attachments/816274714921140225/847088447470567424/2.png');
.setURL('')

const f5 = new Discord.MessageEmbed()
f5.setColor('#0BEEF0')
f5.setTitle('คาบที่ **5**')
f5.setDescription('__รายวิชา__ **' + clss.f5 + '**')
f5.setTimestamp()
.setAuthor(config.schoolname, config.logoschool, config.schoollink)
.setThumbnail(config.logoschool)
.setFooter('Bot By OpecZ CH', 'https://media.discordapp.net/attachments/816274714921140225/847088447470567424/2.png');
.setURL('')

const f6 = new Discord.MessageEmbed()
f6.setColor('#0BEEF0')
f6.setTitle('คาบที่ **6**')
f6.setDescription('__รายวิชา__ **' + clss.f6 + '**')
f6.setTimestamp()
.setAuthor(config.schoolname, config.logoschool, config.schoollink)
.setThumbnail(config.logoschool)
.setFooter('Bot By OpecZ CH', 'https://media.discordapp.net/attachments/816274714921140225/847088447470567424/2.png');
.setURL('')

const f7 = new Discord.MessageEmbed()
f7.setColor('#0BEEF0')
f7.setTitle('คาบที่ **7**')
f7.setDescription('__รายวิชา__ **' + clss.f7 + '**')
f7.setTimestamp()
.setAuthor(config.schoolname, config.logoschool, config.schoollink)
.setThumbnail(config.logoschool)
.setFooter('Bot By OpecZ CH', 'https://media.discordapp.net/attachments/816274714921140225/847088447470567424/2.png');
.setURL('')
.setURL('')


function time() {

    let d = new Date();
    let s = d.getSeconds();
    let m = d.getMinutes();
    let h = d.getHours();
		let ms = d.getMilliseconds();
    let dd = d.getDay();

	if(h == "5") {
		if(m == "30"){
            if(s == "30"){
				client.channels.fetch(config.sendclass)
					.then(channel => {
						gm.setTimestamp()
						channel.send("@everyone",{embed: gm}).then(function (message) {
                            message.react("❤")
                    });;
					})
			}
		}
	}

    if(h == "07") {
		if(m == "0"){
            if(s == "0"){
				client.channels.fetch(config.sendclass)
					.then(channel => {
						to.setTimestamp()
						channel.send("@everyone",{embed: to}).then(function (message) {
                            message.react("❤")
                    });;
					})
			}
		}
	}

    /****************** Mon ******************************** */
        if(dd == "1"){
            if(h == "8") {
                if(m == "30"){
                    if(s == "0"){
                    client.channels.fetch(config.sendclass)
                        .then(channel => {
                            m1.setTimestamp()
                    channel.send("@everyone",{embed: m1}).then(function (message) {
                        message.react("❤")
                });
                        })
                    }
                }
            }


            if(h == "9") {
                if(m == "20"){
                    if(s == "0"){
                    client.channels.fetch(config.sendclass)
                        .then(channel => {
                            m2.setTimestamp()
                    channel.send("@everyone",{embed: m2}).then(function (message) {
                        message.react("❤")
                });;
                        })
                    }
                }
            }


            if(h == "10") {
                if(m == "10"){
                    if(s == "0"){
                    client.channels.fetch(config.sendclass)
                        .then(channel => {
                            m3.setTimestamp()
                    channel.send("@everyone",{embed: m3}).then(function (message) {
                        message.react("❤")
                });;
                        })
                    }
                }
            }


            if(h == "11") {
                if(m == "0"){
                    if(s == "0"){
                    client.channels.fetch(config.sendclass)
                        .then(channel => {
                            m4.setTimestamp()
                    channel.send("@everyone",{embed: m4}).then(function (message) {
                        message.react("❤")
                });;
                        })
                    }
                }
            }


            if(h == "11") {
                if(m == "50"){
                    if(s == "0"){
                    client.channels.fetch(config.sendclass)
                        .then(channel => {
                            m5.setTimestamp()
                    channel.send("@everyone",{embed: m5}).then(function (message) {
                        message.react("❤")
                });;
                        })
                    }
                }
            }


            if(h == "12") {
                if(m == "40"){
                    if(s == "0"){
                    client.channels.fetch(config.sendclass)
                        .then(channel => {
                            m6.setTimestamp()
                    channel.send("@everyone",{embed: m6}).then(function (message) {
                        message.react("❤")
                });;
                        })
                    }
                }
            }


            if(h == "13") {
                if(m == "30"){
                    if(s == "0"){
                    client.channels.fetch(config.sendclass)
                        .then(channel => {
                            m7.setTimestamp()
                    channel.send("@everyone",{embed: m7}).then(function (message) {
                        message.react("❤")
                });;
                        })
                    }
                }
            }


            if(h == "14") {
                if(m == "20"){
                    if(s == "0"){
                    client.channels.fetch(config.sendclass)
                        .then(channel => {
                            m8.setTimestamp()
                    channel.send("@everyone",{embed: m8}).then(function (message) {
                        message.react("❤")
                });;
                        })
                    }
                }
            }

        }
        /************************************************** */

    /********************** Tue ************************** */
    if(dd == "2"){
        if(h == "8") {
            if(m == "30"){
                if(s == "0"){
                client.channels.fetch(config.sendclass)
                    .then(channel => {
                t1.setTimestamp()
                channel.send("@everyone",{embed: t1}).then(function (message) {
                    message.react("❤")
            });;
                    })
                }
            }
        }


        if(h == "9") {
            if(m == "20"){
                if(s == "0"){
                client.channels.fetch(config.sendclass)
                    .then(channel => {
                        t2.setTimestamp()
                channel.send("@everyone",{embed: t2}).then(function (message) {
                    message.react("❤")
            });;
                    })
                }
            }
        }


        if(h == "10") {
            if(m == "10"){
                if(s == "0"){
                client.channels.fetch(config.sendclass)
                    .then(channel => {
                        t3.setTimestamp()
                channel.send("@everyone",{embed: t3}).then(function (message) {
                    message.react("❤")
            });;
                    })
                }
            }
        }


        if(h == "11") {
            if(m == "0"){
                if(s == "0"){
                client.channels.fetch(config.sendclass)
                    .then(channel => {
                        t4.setTimestamp()
                channel.send("@everyone",{embed: t4}).then(function (message) {
                    message.react("❤")
            });;
                    })
                }
            }
        }


        if(h == "11") {
            if(m == "50"){
                if(s == "0"){
                client.channels.fetch(config.sendclass)
                    .then(channel => {
                        t5.setTimestamp()
                channel.send("@everyone",{embed: t5}).then(function (message) {
                    message.react("❤")
            });;
                    })
                }
            }
        }


        if(h == "12") {
            if(m == "40"){
                if(s == "0"){
                client.channels.fetch(config.sendclass)
                    .then(channel => {
                        t6.setTimestamp()
                channel.send("@everyone",{embed: t6}).then(function (message) {
                    message.react("❤")
            });;
                    })
                }
            }
        }


        if(h == "13") {
            if(m == "30"){
                if(s == "0"){
                client.channels.fetch(config.sendclass)
                    .then(channel => {
                        t7.setTimestamp()
                channel.send("@everyone",{embed: t7}).then(function (message) {
                    message.react("❤")
            });;
                    })
                }
            }
        }


        if(h == "14") {
            if(m == "20"){
                if(s == "0"){
                client.channels.fetch(config.sendclass)
                    .then(channel => {
                        t8.setTimestamp()
                channel.send("@everyone",{embed: t8}).then(function (message) {
                    message.react("❤")
            });;
                    })
                }
            }
        }

    }
    /************************************************** */

    /*********************** Wed *************************** */
    if(dd == "3"){
        if(h == "8") {
            if(m == "30"){
                if(s == "0"){
                client.channels.fetch(config.sendclass)
                    .then(channel => {
                        w1.setTimestamp()
                channel.send("@everyone",{embed: w1}).then(function (message) {
                    message.react("❤")
            });;
                    })
                }
            }
        }


        if(h == "9") {
            if(m == "20"){
                if(s == "0"){
                client.channels.fetch(config.sendclass)
                    .then(channel => {
                        w2.setTimestamp()
                channel.send("@everyone",{embed: w2}).then(function (message) {
                    message.react("❤")
            });;
                    })
                }
            }
        }


        if(h == "10") {
            if(m == "10"){
                if(s == "0"){
                client.channels.fetch(config.sendclass)
                    .then(channel => {
                        w3.setTimestamp()
                channel.send("@everyone",{embed: w3}).then(function (message) {
                    message.react("❤")
            });;
                    })
                }
            }
        }


        if(h == "11") {
            if(m == "0"){
                if(s == "0"){
                client.channels.fetch(config.sendclass)
                    .then(channel => {
                        w4.setTimestamp()
                channel.send("@everyone",{embed: w4}).then(function (message) {
                    message.react("❤")
            });;
                    })
                }
            }
        }


        if(h == "11") {
            if(m == "50"){
                if(s == "0"){
                client.channels.fetch(config.sendclass)
                    .then(channel => {
                        w5.setTimestamp()
                channel.send("@everyone",{embed: w5}).then(function (message) {
                    message.react("❤")
            });;
                    })
                }
            }
        }


        if(h == "12") {
            if(m == "40"){
                if(s == "0"){
                client.channels.fetch(config.sendclass)
                    .then(channel => {
                        w6.setTimestamp()
                channel.send("@everyone",{embed: w6}).then(function (message) {
                    message.react("❤")
            });;
                    })
                }
            }
        }


        if(h == "13") {
            if(m == "30"){
                if(s == "0"){
                client.channels.fetch(config.sendclass)
                    .then(channel => {
                        w7.setTimestamp()
                channel.send("@everyone",{embed: w7}).then(function (message) {
                    message.react("❤")
            });;
                    })
                }
            }
        }


        if(h == "14") {
            if(m == "20"){
                if(s == "0"){
                client.channels.fetch(config.sendclass)
                    .then(channel => {
                        w8.setTimestamp()
                channel.send("@everyone",{embed: w8}).then(function (message) {
                    message.react("❤")
            });;
                    })
                }
            }
        }


        if(h == "15") {
            if(m == "10"){
                if(s == "0"){
                client.channels.fetch(config.sendclass)
                    .then(channel => {
                        w9.setTimestamp()
                channel.send("@everyone",{embed: w9}).then(function (message) {
                    message.react("❤")
            });;
                    })
                }
            }
        }

    }
    /************************************************** */

    /*********************** Thus *************************** */
    if(dd == "4"){
        if(h == "8") {
            if(m == "30"){
                if(s == "0"){
                client.channels.fetch(config.sendclass)
                    .then(channel => {
                        th1.setTimestamp()
                channel.send("@everyone",{embed: th1}).then(function (message) {
                    message.react("❤")
            });;
                    })
                }
            }
        }


        if(h == "9") {
            if(m == "20"){
                if(s == "0"){
                client.channels.fetch(config.sendclass)
                    .then(channel => {
                        th2.setTimestamp()
                channel.send("@everyone",{embed: th2}).then(function (message) {
                    message.react("❤")
            });;
                    })
                }
            }
        }


        if(h == "10") {
            if(m == "10"){
                if(s == "0"){
                client.channels.fetch(config.sendclass)
                    .then(channel => {
                        th3.setTimestamp()
                channel.send("@everyone",{embed: th3}).then(function (message) {
                    message.react("❤")
            });;
                    })
                }
            }
        }


        if(h == "11") {
            if(m == "0"){
                if(s == "0"){
                client.channels.fetch(config.sendclass)
                    .then(channel => {
                        th4.setTimestamp()
                channel.send("@everyone",{embed: th4}).then(function (message) {
                    message.react("❤")
            });;
                    })
                }
            }
        }


        if(h == "11") {
            if(m == "50"){
                if(s == "0"){
                client.channels.fetch(config.sendclass)
                    .then(channel => {
                        th5.setTimestamp()
                channel.send("@everyone",{embed: th5}).then(function (message) {
                    message.react("❤")
            });;
                    })
                }
            }
        }


        if(h == "12") {
            if(m == "40"){
                if(s == "0"){
                client.channels.fetch(config.sendclass)
                    .then(channel => {
                        th6.setTimestamp()
                channel.send("@everyone",{embed: th6}).then(function (message) {
                    message.react("❤")
            });;
                    })
                }
            }
        }


        if(h == "13") {
            if(m == "30"){
                if(s == "0"){
                client.channels.fetch(config.sendclass)
                    .then(channel => {
                        th7.setTimestamp()
                channel.send("@everyone",{embed: th7}).then(function (message) {
                    message.react("❤")
            });;
                    })
                }
            }
        }


        if(h == "14") {
            if(m == "20"){
                if(s == "0"){
                client.channels.fetch(config.sendclass)
                    .then(channel => {
                        th8.setTimestamp()
                channel.send("@everyone",{embed: th8}).then(function (message) {
                    message.react("❤")
            });;
                    })
                }
            }
        }


        if(h == "15") {
            if(m == "10"){
                if(s == "0"){
                client.channels.fetch(config.sendclass)
                    .then(channel => {
                        th9.setTimestamp()
                channel.send("@everyone",{embed: th9}).then(function (message) {
                    message.react("❤")
            });;
                    })
                }
            }
        }
    }
    /************************************************** */

    /************************ Fri ************************** */
    if(dd == "5"){
        if(h == "08") {
            if(m == "30"){
                if(s == "0"){
                client.channels.fetch(config.sendclass)
                    .then(channel => {
                        f1.setTimestamp()
                channel.send("@everyone",{embed: f1}).then(function (message) {
                    message.react("❤")
            });;
                    })
                }
            }
        }


        if(h == "09") {
            if(m == "20"){
                if(s == "0"){
                client.channels.fetch(config.sendclass)
                    .then(channel => {
                        f2.setTimestamp()
                channel.send("@everyone",{embed: f2}).then(function (message) {
                    message.react("❤")
            });;
                    })
                }
            }
        }


        if(h == "10") {
            if(m == "10"){
                if(s == "0"){
                client.channels.fetch(config.sendclass)
                    .then(channel => {
                        f3.setTimestamp()
                channel.send("@everyone",{embed: f3}).then(function (message) {
                    message.react("❤")
            });;
                    })
                }
            }
        }


        if(h == "11") {
            if(m == "0"){
                if(s == "0"){
                client.channels.fetch(config.sendclass)
                    .then(channel => {
                        f4.setTimestamp()
                channel.send("@everyone",{embed: f4}).then(function (message) {
                    message.react("❤")
            });;
                    })
                }
            }
        }


        if(h == "11") {
            if(m == "50"){
                if(s == "0"){
                client.channels.fetch(config.sendclass)
                    .then(channel => {
                        f5.setTimestamp()
                channel.send("@everyone",{embed: f5}).then(function (message) {
                    message.react("❤")
            });;
                    })
                }
            }
        }


        if(h == "12") {
            if(m == "40"){
                if(s == "0"){
                client.channels.fetch(config.sendclass)
                    .then(channel => {
                        f6.setTimestamp()
                channel.send("@everyone",{embed: f6}).then(function (message) {
                    message.react("❤")
            });;
                    })
                }
            }
        }


        if(h == "13") {
            if(m == "30"){
                if(s == "0"){
                client.channels.fetch(config.sendclass)
                    .then(channel => {
                        f7.setTimestamp()
                channel.send("@everyone",{embed: f7}).then(function (message) {
                    message.react("❤")
            });;
                    })
                }
            }
        }

				if(h == "11") {
            if(m == "21"){
                if(s == "0"){
                client.channels.fetch(config.sendclass)
                    .then(channel => {
                        f1.setTimestamp()
                channel.send("@everyone",{embed: f1}).then(function (message) {
                    message.react("❤")
            });;
                    })
								}
            }
        }


    }
    /************************************************** */



	if(message.content == config.prefix + 'reboot-classroom') {
  if(message.author.id == config.adminid) {
    let { MessageEmbed } = require("discord.js");
    let reboots = new MessageEmbed()
    .setTitle(`Reboot System`)
    .setDescription("ทำการเริ่มระบบใหม่อีกครั้ง")
    .setColor("#F8AA2A");
  reboots.setTimestamp();
  message.channel.send(reboots).catch(console.error);
  setTimeout(() => {
    process.kill(process.pid, 'SIGTERM')
  }, 500)
} else {
  let { MessageEmbed } = require("discord.js");
    let reboota = new MessageEmbed()
    .setTitle(`Reboot System`)
    .setDescription('แกไม่มีสิทธิ์')
    .setColor("#ff0000");
  reboota.setTimestamp();
  message.channel.send(reboota).catch(console.error);
}}


	if(h == "0"){
        if(m == "0"){
            if(s == "0"){

				client.channels.fetch(config.logsroom)
    .then(channel => {
      const bye = new Discord.MessageEmbed()
      bye.setColor('#F8AA2A')
      bye.setTitle(config.namebot +' Reboot System')
      bye.setDescription('ทำการเริ่มระบบใหม่อีกครั้ง')
      bye.setTimestamp()
        channel.send({embed: bye});
    })
                setTimeout(() => {process.kill(process.pid, 'SIGTERM')}, 1000)
            }
        }
    }


		if(h == "08"){
							if(m == "20"){
									if(s == "0"){

							client.channels.fetch(config.logsroom)
					.then(channel => {
						const bye = new Discord.MessageEmbed()
						bye.setColor('#F8AA2A')
						bye.setTitle(config.namebot +' Reboot System')
						bye.setDescription('ทำการเริ่มระบบใหม่อีกครั้ง')
						bye.setTimestamp()
							channel.send({embed: bye});
					})
											setTimeout(() => {process.kill(process.pid, 'SIGTERM')}, 1000)
									}
							}
					}


					if(h == "09"){
								if(m == "10"){
										if(s == "0"){

								client.channels.fetch(config.logsroom)
						.then(channel => {
							const bye = new Discord.MessageEmbed()
							bye.setColor('#F8AA2A')
							bye.setTitle(config.namebot +' Reboot System')
							bye.setDescription('ทำการเริ่มระบบใหม่อีกครั้ง')
							bye.setTimestamp()
								channel.send({embed: bye});
						})
												setTimeout(() => {process.kill(process.pid, 'SIGTERM')}, 1000)
										}
								}
						}

						if(h == "10"){
									if(m == "00"){
											if(s == "0"){

									client.channels.fetch(config.logsroom)
							.then(channel => {
								const bye = new Discord.MessageEmbed()
								bye.setColor('#F8AA2A')
								bye.setTitle(config.namebot +' Reboot System')
								bye.setDescription('ทำการเริ่มระบบใหม่อีกครั้ง')
								bye.setTimestamp()
									channel.send({embed: bye});
							})
													setTimeout(() => {process.kill(process.pid, 'SIGTERM')}, 1000)
											}
									}
							}


							if(h == "10"){
										if(m == "50"){
												if(s == "0"){

										client.channels.fetch(config.logsroom)
								.then(channel => {
									const bye = new Discord.MessageEmbed()
									bye.setColor('#F8AA2A')
									bye.setTitle(config.namebot +' Reboot System')
									bye.setDescription('ทำการเริ่มระบบใหม่อีกครั้ง')
									bye.setTimestamp()
										channel.send({embed: bye});
								})
														setTimeout(() => {process.kill(process.pid, 'SIGTERM')}, 1000)
												}
										}
								}

								if(h == "11"){
											if(m == "40"){
													if(s == "0"){

											client.channels.fetch(config.logsroom)
									.then(channel => {
										const bye = new Discord.MessageEmbed()
										bye.setColor('#F8AA2A')
										bye.setTitle(config.namebot +' Reboot System')
										bye.setDescription('ทำการเริ่มระบบใหม่อีกครั้ง')
										bye.setTimestamp()
											channel.send({embed: bye});
									})
															setTimeout(() => {process.kill(process.pid, 'SIGTERM')}, 1000)
													}
											}
									}

									if(h == "12"){
												if(m == "30"){
														if(s == "0"){

												client.channels.fetch(config.logsroom)
										.then(channel => {
											const bye = new Discord.MessageEmbed()
											bye.setColor('#F8AA2A')
											bye.setTitle(config.namebot +' Reboot System')
											bye.setDescription('ทำการเริ่มระบบใหม่อีกครั้ง')
											bye.setTimestamp()
												channel.send({embed: bye});
										})
																setTimeout(() => {process.kill(process.pid, 'SIGTERM')}, 1000)
														}
												}
										}

										if(h == "13"){
													if(m == "20"){
															if(s == "0"){

													client.channels.fetch(config.logsroom)
											.then(channel => {
												const bye = new Discord.MessageEmbed()
												bye.setColor('#F8AA2A')
												bye.setTitle(config.namebot +' Reboot System')
												bye.setDescription('ทำการเริ่มระบบใหม่อีกครั้ง')
												bye.setTimestamp()
													channel.send({embed: bye});
											})
																	setTimeout(() => {process.kill(process.pid, 'SIGTERM')}, 1000)
															}
													}
											}

											if(h == "14"){
														if(m == "10"){
																if(s == "0"){

														client.channels.fetch(config.logsroom)
												.then(channel => {
													const bye = new Discord.MessageEmbed()
													bye.setColor('#F8AA2A')
													bye.setTitle(config.namebot +' Reboot System')
													bye.setDescription('ทำการเริ่มระบบใหม่อีกครั้ง')
													bye.setTimestamp()
														channel.send({embed: bye});
												})
																		setTimeout(() => {process.kill(process.pid, 'SIGTERM')}, 1000)
																}
														}
												}

												if(h == "15"){
															if(m == "00"){
																	if(s == "0"){

															client.channels.fetch(config.logsroom)
													.then(channel => {
														const bye = new Discord.MessageEmbed()
														bye.setColor('#F8AA2A')
														bye.setTitle(config.namebot +' Reboot System')
														bye.setDescription('ทำการเริ่มระบบใหม่อีกครั้ง')
														bye.setTimestamp()
															channel.send({embed: bye});
													})
																			setTimeout(() => {process.kill(process.pid, 'SIGTERM')}, 1000)
																	}
															}
													}

													if(h == "15"){
																if(m == "50"){
																		if(s == "0"){

																client.channels.fetch(config.sentclass)
														.then(channel => {
															const bye = new Discord.MessageEmbed()
															bye.setColor('#F8AA2A')
															bye.setTitle(config.namebot +' Reboot System')
															bye.setDescription('ทำการเริ่มระบบใหม่อีกครั้ง')
															bye.setTimestamp()
																channel.send({embed: bye});
														})
																				setTimeout(() => {process.kill(process.pid, 'SIGTERM')}, 1000)
																		}
																}
														}

		console.log(dd+" "+h+":"+m+":"+s+"."+ms);
	}



}
)
client.login(config.token);
