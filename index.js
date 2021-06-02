const Discord = require("discord.js");
const request = require('request');
const config = require("./config.json");
const classconfig = require("./class.json");
const client = new Discord.Client();

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
m1.setColor(config.color)
m1.setTitle('คาบที่ **1**')
m1.setDescription('__รายวิชา__ **' + classconfig.m1 + `**
__ครูผู้สอน__ **` + classconfig.tm1 + `**
__เวลา__ : **`+ classconfig.tb1 +` - ` + classconfig.tb2 +` น.**
`)
m1.setTimestamp()
.setAuthor(config.schoolname, config.logoschool, config.schoollink)
.setThumbnail(config.logoschool)
.setFooter('Bot By OpecZ CH', 'https://media.discordapp.net/attachments/816274714921140225/847088447470567424/2.png');


const m2 = new Discord.MessageEmbed()
m2.setColor(config.color)
m2.setTitle('คาบที่ **2**')
m2.setDescription('__รายวิชา__ **' + classconfig.m2 + `**
__ครูผู้สอน__ **` + classconfig.tm2 + `**
__เวลา__ : **`+ classconfig.tb2 +` - ` + classconfig.tb3 +` น.**
`)
m2.setTimestamp()
.setAuthor(config.schoolname, config.logoschool, config.schoollink)
.setThumbnail(config.logoschool)
.setFooter('Bot By OpecZ CH', 'https://media.discordapp.net/attachments/816274714921140225/847088447470567424/2.png');

const m3 = new Discord.MessageEmbed()
m3.setColor(config.color)
m3.setTitle('คาบที่ **3**')
m3.setDescription('__รายวิชา__ **' + classconfig.m3 + `**
__ครูผู้สอน__ **` + classconfig.tm3 + `**
__เวลา__ : **`+ classconfig.tb3 +` - ` + classconfig.tb4 +` น.**
`)
m3.setTimestamp()
.setAuthor(config.schoolname, config.logoschool, config.schoollink)
.setThumbnail(config.logoschool)
.setFooter('Bot By OpecZ CH', 'https://media.discordapp.net/attachments/816274714921140225/847088447470567424/2.png');


const m4 = new Discord.MessageEmbed()
m4.setColor(config.color)
m4.setTitle('คาบที่ **4**')
m4.setDescription('__รายวิชา__ **' + classconfig.m4 + `**
__ครูผู้สอน__ **` + classconfig.tm4 + `**
__เวลา__ : **`+ classconfig.tb4 +` - ` + classconfig.tb5 +` น.**
`)
m4.setTimestamp()
.setAuthor(config.schoolname, config.logoschool, config.schoollink)
.setThumbnail(config.logoschool)
.setFooter('Bot By OpecZ CH', 'https://media.discordapp.net/attachments/816274714921140225/847088447470567424/2.png');


const m5 = new Discord.MessageEmbed()
m5.setColor(config.color)
m5.setTitle('คาบที่ **5**')
m5.setDescription('__รายวิชา__ **' + classconfig.m5 + `**
__ครูผู้สอน__ **` + classconfig.tm5 + `**
__เวลา__ : **`+ classconfig.tb5 +` - ` + classconfig.tb6 +` น.**
`)
m5.setTimestamp()
.setAuthor(config.schoolname, config.logoschool, config.schoollink)
.setThumbnail(config.logoschool)
.setFooter('Bot By OpecZ CH', 'https://media.discordapp.net/attachments/816274714921140225/847088447470567424/2.png');


const m6 = new Discord.MessageEmbed()
m6.setColor(config.color)
m6.setTitle('คาบที่ **6**')
m6.setDescription('__รายวิชา__ **' + classconfig.m6 + `**
__ครูผู้สอน__ **` + classconfig.tm6 + `**
__เวลา__ : **`+ classconfig.tb6 +` - ` + classconfig.tb7 +` น.**
`)
m6.setTimestamp()
.setAuthor(config.schoolname, config.logoschool, config.schoollink)
.setThumbnail(config.logoschool)
.setFooter('Bot By OpecZ CH', 'https://media.discordapp.net/attachments/816274714921140225/847088447470567424/2.png');


const m7 = new Discord.MessageEmbed()
m7.setColor(config.color)
m7.setTitle('คาบที่ **7**')
m7.setDescription('__รายวิชา__ **' + classconfig.m7 + `**
__ครูผู้สอน__ **` + classconfig.tm7 + `**
__เวลา__ : **`+ classconfig.tb7 +` - ` + classconfig.tb8 +` น.**
`)
m7.setTimestamp()
.setAuthor(config.schoolname, config.logoschool, config.schoollink)
.setThumbnail(config.logoschool)
.setFooter('Bot By OpecZ CH', 'https://media.discordapp.net/attachments/816274714921140225/847088447470567424/2.png');


const m8 = new Discord.MessageEmbed()
m8.setColor(config.color)
m8.setTitle('คาบที่ **8**')
m8.setDescription('__รายวิชา__ **' + classconfig.m8 + `**
__ครูผู้สอน__ **` + classconfig.tm8 + `**
__เวลา__ : **`+ classconfig.tb8 +` - ` + classconfig.tb9 +` น.**
`)
m8.setTimestamp()
.setAuthor(config.schoolname, config.logoschool, config.schoollink)
.setThumbnail(config.logoschool)
.setFooter('Bot By OpecZ CH', 'https://media.discordapp.net/attachments/816274714921140225/847088447470567424/2.png');


/************************************************** */

/************************************************** */
const t1 = new Discord.MessageEmbed()
t1.setColor(config.color)
t1.setTitle('คาบที่ **1**')
t1.setDescription('__รายวิชา__ **' + classconfig.t1 + `**
__ครูผู้สอน__ **` + classconfig.tt1 + `**
__เวลา__ : **`+ classconfig.tb1 +` - ` + classconfig.tb2 +` น.**
`)
t1.setTimestamp()
.setAuthor(config.schoolname, config.logoschool, config.schoollink)
.setThumbnail(config.logoschool)
.setFooter('Bot By OpecZ CH', 'https://media.discordapp.net/attachments/816274714921140225/847088447470567424/2.png');


const t2 = new Discord.MessageEmbed()
t2.setColor(config.color)
t2.setTitle('คาบที่ **2**')
t2.setDescription('__รายวิชา__ **' + classconfig.t2 + `**
__ครูผู้สอน__ **` + classconfig.tt2 + `**
__เวลา__ : **`+ classconfig.tb2 +` - ` + classconfig.tb3 +` น.**
`)
t2.setTimestamp()
.setAuthor(config.schoolname, config.logoschool, config.schoollink)
.setThumbnail(config.logoschool)
.setFooter('Bot By OpecZ CH', 'https://media.discordapp.net/attachments/816274714921140225/847088447470567424/2.png');


const t3 = new Discord.MessageEmbed()
t3.setColor(config.color)
t3.setTitle('คาบที่ **3**')
t3.setDescription('__รายวิชา__ **' + classconfig.t3 + `**
__ครูผู้สอน__ **` + classconfig.tt3 + `**
__เวลา__ : **`+ classconfig.tb3 +` - ` + classconfig.tb4 +` น.**
`)
t3.setTimestamp()
.setAuthor(config.schoolname, config.logoschool, config.schoollink)
.setThumbnail(config.logoschool)
.setFooter('Bot By OpecZ CH', 'https://media.discordapp.net/attachments/816274714921140225/847088447470567424/2.png');


const t4 = new Discord.MessageEmbed()
t4.setColor(config.color)
t4.setTitle('คาบที่ **4**')
t4.setDescription('__รายวิชา__ **' + classconfig.t4 + `**
__ครูผู้สอน__ **` + classconfig.tt4 + `**
__เวลา__ : **`+ classconfig.tb4 +` - ` + classconfig.tb5 +` น.**
`)
t4.setTimestamp()
.setAuthor(config.schoolname, config.logoschool, config.schoollink)
.setThumbnail(config.logoschool)
.setFooter('Bot By OpecZ CH', 'https://media.discordapp.net/attachments/816274714921140225/847088447470567424/2.png');


const t5 = new Discord.MessageEmbed()
t5.setColor(config.color)
t5.setTitle('คาบที่ **5**')
t5.setDescription('__รายวิชา__ **' + classconfig.t5 + `**
__ครูผู้สอน__ **` + classconfig.tt5 + `**
__เวลา__ : **`+ classconfig.tb5 +` - ` + classconfig.tb6 +` น.**
`)
t5.setTimestamp()
.setAuthor(config.schoolname, config.logoschool, config.schoollink)
.setThumbnail(config.logoschool)
.setFooter('Bot By OpecZ CH', 'https://media.discordapp.net/attachments/816274714921140225/847088447470567424/2.png');


const t6 = new Discord.MessageEmbed()
t6.setColor(config.color)
t6.setTitle('คาบที่ **6**')
t6.setDescription('__รายวิชา__ **' + classconfig.t6 + `**
__ครูผู้สอน__ **` + classconfig.tt6 + `**
__เวลา__ : **`+ classconfig.tb6 +` - ` + classconfig.tb7 +` น.**
`)
t6.setTimestamp()
.setAuthor(config.schoolname, config.logoschool, config.schoollink)
.setThumbnail(config.logoschool)
.setFooter('Bot By OpecZ CH', 'https://media.discordapp.net/attachments/816274714921140225/847088447470567424/2.png');


const t7 = new Discord.MessageEmbed()
t7.setColor(config.color)
t7.setTitle('คาบที่ **7**')
t7.setDescription('__รายวิชา__ **' + classconfig.t7 + `**
__ครูผู้สอน__ **` + classconfig.tt7 + `**
__เวลา__ : **`+ classconfig.tb7 +` - ` + classconfig.tb8 +` น.**
`)
t7.setTimestamp()
.setAuthor(config.schoolname, config.logoschool, config.schoollink)
.setThumbnail(config.logoschool)
.setFooter('Bot By OpecZ CH', 'https://media.discordapp.net/attachments/816274714921140225/847088447470567424/2.png');


const t8 = new Discord.MessageEmbed()
t8.setColor(config.color)
t8.setTitle('คาบที่ **8**')
t8.setDescription('__รายวิชา__ **' + classconfig.t8 + `**
__ครูผู้สอน__ **` + classconfig.tt8 + `**
__เวลา__ : **`+ classconfig.tb8 +` - ` + classconfig.tb9 +` น.**
`)
t8.setTimestamp()
.setAuthor(config.schoolname, config.logoschool, config.schoollink)
.setThumbnail(config.logoschool)
.setFooter('Bot By OpecZ CH', 'https://media.discordapp.net/attachments/816274714921140225/847088447470567424/2.png');


/************************************************** */

/************************************************** */
const w1 = new Discord.MessageEmbed()
w1.setColor(config.color)
w1.setTitle('คาบที่ **1**')
w1.setDescription('__รายวิชา__ **' + classconfig.w1 + `**
__ครูผู้สอน__ **` + classconfig.tw1 + `**
__เวลา__ : **`+ classconfig.tb1 +` - ` + classconfig.tb2 +` น.**
`)
w1.setTimestamp()
.setAuthor(config.schoolname, config.logoschool, config.schoollink)
.setThumbnail(config.logoschool)
.setFooter('Bot By OpecZ CH', 'https://media.discordapp.net/attachments/816274714921140225/847088447470567424/2.png');

const w2 = new Discord.MessageEmbed()
w2.setColor(config.color)
w2.setTitle('คาบที่ **2**')
w2.setDescription('__รายวิชา__ **' + classconfig.w2 + `**
__ครูผู้สอน__ **` + classconfig.tw2 + `**
__เวลา__ : **`+ classconfig.tb2 +` - ` + classconfig.tb3 +` น.**
`)
w2.setTimestamp()
.setAuthor(config.schoolname, config.logoschool, config.schoollink)
.setThumbnail(config.logoschool)
.setFooter('Bot By OpecZ CH', 'https://media.discordapp.net/attachments/816274714921140225/847088447470567424/2.png');


const w3 = new Discord.MessageEmbed()
w3.setColor(config.color)
w3.setTitle('คาบที่ **3**')
w3.setDescription('__รายวิชา__ **' + classconfig.w3 + `**
__ครูผู้สอน__ **` + classconfig.tw3 + `**
__เวลา__ : **`+ classconfig.tb3 +` - ` + classconfig.tb4 +` น.**
`)
w3.setTimestamp()
.setAuthor(config.schoolname, config.logoschool, config.schoollink)
.setThumbnail(config.logoschool)
.setFooter('Bot By OpecZ CH', 'https://media.discordapp.net/attachments/816274714921140225/847088447470567424/2.png');


const w4 = new Discord.MessageEmbed()
w4.setColor(config.color)
w4.setTitle('คาบที่ **4**')
w4.setDescription('__รายวิชา__ **' + classconfig.w4 + `**
__ครูผู้สอน__ **` + classconfig.tw4 + `**
__เวลา__ : **`+ classconfig.tb4 +` - ` + classconfig.tb5 +` น.**
`)
w4.setTimestamp()
.setAuthor(config.schoolname, config.logoschool, config.schoollink)
.setThumbnail(config.logoschool)
.setFooter('Bot By OpecZ CH', 'https://media.discordapp.net/attachments/816274714921140225/847088447470567424/2.png');


const w5 = new Discord.MessageEmbed()
w5.setColor(config.color)
w5.setTitle('คาบที่ **5**')
w5.setDescription('__รายวิชา__ **' + classconfig.w5 + `**
__ครูผู้สอน__ **` + classconfig.tw5 + `**
__เวลา__ : **`+ classconfig.tb5 +` - ` + classconfig.tb6 +` น.**
`)
w5.setTimestamp()
.setAuthor(config.schoolname, config.logoschool, config.schoollink)
.setThumbnail(config.logoschool)
.setFooter('Bot By OpecZ CH', 'https://media.discordapp.net/attachments/816274714921140225/847088447470567424/2.png');


const w6 = new Discord.MessageEmbed()
w6.setColor(config.color)
w6.setTitle('คาบที่ **6**')
w6.setDescription('__รายวิชา__ **' + classconfig.w6 + `**
__ครูผู้สอน__ **` + classconfig.tw6 + `**
__เวลา__ : **`+ classconfig.tb6 +` - ` + classconfig.tb7 +` น.**
`)
w6.setTimestamp()
.setAuthor(config.schoolname, config.logoschool, config.schoollink)
.setThumbnail(config.logoschool)
.setFooter('Bot By OpecZ CH', 'https://media.discordapp.net/attachments/816274714921140225/847088447470567424/2.png');


const w7 = new Discord.MessageEmbed()
w7.setColor(config.color)
w7.setTitle('คาบที่ **7**')
w7.setDescription('__รายวิชา__ **' + classconfig.w7 + `**
__ครูผู้สอน__ **` + classconfig.tw7 + `**
__เวลา__ : **`+ classconfig.tb7 +` - ` + classconfig.tb8 +` น.**
`)
w7.setTimestamp()
.setAuthor(config.schoolname, config.logoschool, config.schoollink)
.setThumbnail(config.logoschool)
.setFooter('Bot By OpecZ CH', 'https://media.discordapp.net/attachments/816274714921140225/847088447470567424/2.png');


const w8 = new Discord.MessageEmbed()
w8.setColor(config.color)
w8.setTitle('คาบที่ **8**')
w8.setDescription('__รายวิชา__ **' + classconfig.w8 + `**
__ครูผู้สอน__ **` + classconfig.tw8 + `**
__เวลา__ : **`+ classconfig.tb8 +` - ` + classconfig.tb9 +` น.**
`)
w8.setTimestamp()
.setAuthor(config.schoolname, config.logoschool, config.schoollink)
.setThumbnail(config.logoschool)
.setFooter('Bot By OpecZ CH', 'https://media.discordapp.net/attachments/816274714921140225/847088447470567424/2.png');


const w9 = new Discord.MessageEmbed()
w9.setColor(config.color)
w9.setTitle('คาบที่ **9**')
w9.setDescription('__รายวิชา__ **' + classconfig.w9 + `**
__ครูผู้สอน__ **` + classconfig.tw9 + `**
__เวลา__ : **`+ classconfig.tb9 +` - ` + classconfig.tb10 +` น.**
`)
w9.setTimestamp()
.setAuthor(config.schoolname, config.logoschool, config.schoollink)
.setThumbnail(config.logoschool)
.setFooter('Bot By OpecZ CH', 'https://media.discordapp.net/attachments/816274714921140225/847088447470567424/2.png');



/************************************************** */

/************************************************** */
const th1 = new Discord.MessageEmbed()
th1.setColor(config.color)
th1.setTitle('คาบที่ **1**')
th1.setDescription('__รายวิชา__ **' + classconfig.th1 + `**
__ครูผู้สอน__ **` + classconfig.tth1 + `**
__เวลา__ : **`+ classconfig.tb1 +` - ` + classconfig.tb2 +` น.**
`)
th1.setTimestamp()
.setAuthor(config.schoolname, config.logoschool, config.schoollink)
.setThumbnail(config.logoschool)
.setFooter('Bot By OpecZ CH', 'https://media.discordapp.net/attachments/816274714921140225/847088447470567424/2.png');


const th2 = new Discord.MessageEmbed()
th2.setColor(config.color)
th2.setTitle('คาบที่ **2**')
th2.setDescription('__รายวิชา__ **' + classconfig.th2 + `**
__ครูผู้สอน__ **` + classconfig.tth2 + `**
__เวลา__ : **`+ classconfig.tb2 +` - ` + classconfig.tb3 +` น.**
`)
th2.setTimestamp()
.setAuthor(config.schoolname, config.logoschool, config.schoollink)
.setThumbnail(config.logoschool)
.setFooter('Bot By OpecZ CH', 'https://media.discordapp.net/attachments/816274714921140225/847088447470567424/2.png');


const th3 = new Discord.MessageEmbed()
th3.setColor(config.color)
th3.setTitle('คาบที่ **3**')
th3.setDescription('__รายวิชา__ **' + classconfig.th3 + `**
__ครูผู้สอน__ **` + classconfig.tth3 + `**
__เวลา__ : **`+ classconfig.tb3 +` - ` + classconfig.tb4 +` น.**
`)
th3.setTimestamp()
.setAuthor(config.schoolname, config.logoschool, config.schoollink)
.setThumbnail(config.logoschool)
.setFooter('Bot By OpecZ CH', 'https://media.discordapp.net/attachments/816274714921140225/847088447470567424/2.png');


const th4 = new Discord.MessageEmbed()
th4.setColor(config.color)
th4.setTitle('คาบที่ **4**')
th4.setDescription('__รายวิชา__ **' + classconfig.th4 + `**
__ครูผู้สอน__ **` + classconfig.tth4 + `**
__เวลา__ : **`+ classconfig.tb4 +` - ` + classconfig.tb5 +` น.**
`)
th4.setTimestamp()
.setAuthor(config.schoolname, config.logoschool, config.schoollink)
.setThumbnail(config.logoschool)
.setFooter('Bot By OpecZ CH', 'https://media.discordapp.net/attachments/816274714921140225/847088447470567424/2.png');


const th5 = new Discord.MessageEmbed()
th5.setColor(config.color)
th5.setTitle('คาบที่ **5**')
th5.setDescription('__รายวิชา__ **' + classconfig.th5 + `**
__ครูผู้สอน__ **` + classconfig.tth5 + `**
__เวลา__ : **`+ classconfig.tb5 +` - ` + classconfig.tb6 +` น.**
`)
th5.setTimestamp()
.setAuthor(config.schoolname, config.logoschool, config.schoollink)
.setThumbnail(config.logoschool)
.setFooter('Bot By OpecZ CH', 'https://media.discordapp.net/attachments/816274714921140225/847088447470567424/2.png');


const th6 = new Discord.MessageEmbed()
th6.setColor(config.color)
th6.setTitle('คาบที่ **6**')
th6.setDescription('__รายวิชา__ **' + classconfig.th6 + `**
__ครูผู้สอน__ **` + classconfig.tth6 + `**
__เวลา__ : **`+ classconfig.tb6 +` - ` + classconfig.tb7 +` น.**
`)
th6.setTimestamp()
.setAuthor(config.schoolname, config.logoschool, config.schoollink)
.setThumbnail(config.logoschool)
.setFooter('Bot By OpecZ CH', 'https://media.discordapp.net/attachments/816274714921140225/847088447470567424/2.png');


const th7 = new Discord.MessageEmbed()
th7.setColor(config.color)
th7.setTitle('คาบที่ **7**')
th7.setDescription('__รายวิชา__ **' + classconfig.th7 + `**
__ครูผู้สอน__ **` + classconfig.tth7 + `**
__เวลา__ : **`+ classconfig.tb7 +` - ` + classconfig.tb8 +` น.**
`)
th7.setTimestamp()
.setAuthor(config.schoolname, config.logoschool, config.schoollink)
.setThumbnail(config.logoschool)
.setFooter('Bot By OpecZ CH', 'https://media.discordapp.net/attachments/816274714921140225/847088447470567424/2.png');


const th8 = new Discord.MessageEmbed()
th8.setColor(config.color)
th8.setTitle('คาบที่ **8**')
th8.setDescription('__รายวิชา__ **' + classconfig.th8 + `**
__ครูผู้สอน__ **` + classconfig.tth8 + `**
__เวลา__ : **`+ classconfig.tb8 +` - ` + classconfig.tb9 +` น.**
`)
th8.setTimestamp()
.setAuthor(config.schoolname, config.logoschool, config.schoollink)
.setThumbnail(config.logoschool)
.setFooter('Bot By OpecZ CH', 'https://media.discordapp.net/attachments/816274714921140225/847088447470567424/2.png');


const th9 = new Discord.MessageEmbed()
th9.setColor(config.color)
th9.setTitle('คาบที่ **9**')
th9.setDescription('__รายวิชา__ **' + classconfig.th9 + `**
__ครูผู้สอน__ **` + classconfig.tth9 + `**
__เวลา__ : **`+ classconfig.tb9 +` - ` + classconfig.tb10 +` น.**
`)
th9.setTimestamp()
.setAuthor(config.schoolname, config.logoschool, config.schoollink)
.setThumbnail(config.logoschool)
.setFooter('Bot By OpecZ CH', 'https://media.discordapp.net/attachments/816274714921140225/847088447470567424/2.png');


/************************************************** */

/************************************************** */
const f1 = new Discord.MessageEmbed()
f1.setColor(config.color)
f1.setTitle('คาบที่ **1**')
f1.setDescription('__รายวิชา__ **' + classconfig.f1 + `**
__ครูผู้สอน__ **` + classconfig.tf1 + `**
__เวลา__ : **`+ classconfig.tb1 +` - ` + classconfig.tb2 +` น.**
`)
f1.setTimestamp()
.setAuthor(config.schoolname, config.logoschool, config.schoollink)
.setThumbnail(config.logoschool)
.setFooter('Bot By OpecZ CH', 'https://media.discordapp.net/attachments/816274714921140225/847088447470567424/2.png');


const f2 = new Discord.MessageEmbed()
f2.setColor(config.color)
f2.setTitle('คาบที่ **2**')
f2.setDescription('__รายวิชา__ **' + classconfig.f2 + `**
__ครูผู้สอน__ **` + classconfig.tf2 + `**
__เวลา__ : **`+ classconfig.tb2 +` - ` + classconfig.tb3 +` น.**
`)
f2.setTimestamp()
.setAuthor(config.schoolname, config.logoschool, config.schoollink)
.setThumbnail(config.logoschool)
.setFooter('Bot By OpecZ CH', 'https://media.discordapp.net/attachments/816274714921140225/847088447470567424/2.png');


const f3 = new Discord.MessageEmbed()
f3.setColor(config.color)
f3.setTitle('คาบที่ **3**')
f3.setDescription('__รายวิชา__ **' + classconfig.f3 + `**
__ครูผู้สอน__ **` + classconfig.tf3 + `**
__เวลา__ : **`+ classconfig.tb3 +` - ` + classconfig.tb4 +` น.**
`)
f3.setTimestamp()
.setAuthor(config.schoolname, config.logoschool, config.schoollink)
.setThumbnail(config.logoschool)
.setFooter('Bot By OpecZ CH', 'https://media.discordapp.net/attachments/816274714921140225/847088447470567424/2.png');


const f4 = new Discord.MessageEmbed()
f4.setColor(config.color)
f4.setTitle('คาบที่ **4**')
f4.setDescription('__รายวิชา__ **' + classconfig.f4 + `**
__ครูผู้สอน__ **` + classconfig.tf4 + `**
__เวลา__ : **`+ classconfig.tb4 +` - ` + classconfig.tb5 +` น.**
`)
f4.setTimestamp()
.setAuthor(config.schoolname, config.logoschool, config.schoollink)
.setThumbnail(config.logoschool)
.setFooter('Bot By OpecZ CH', 'https://media.discordapp.net/attachments/816274714921140225/847088447470567424/2.png');


const f5 = new Discord.MessageEmbed()
f5.setColor(config.color)
f5.setTitle('คาบที่ **5**')
f5.setDescription('__รายวิชา__ **' + classconfig.f5 + `**
__ครูผู้สอน__ **` + classconfig.tf5 + `**
__เวลา__ : **`+ classconfig.tb5 +` - ` + classconfig.tb6 +` น.**
`)
f5.setTimestamp()
.setAuthor(config.schoolname, config.logoschool, config.schoollink)
.setThumbnail(config.logoschool)
.setFooter('Bot By OpecZ CH', 'https://media.discordapp.net/attachments/816274714921140225/847088447470567424/2.png');


const f6 = new Discord.MessageEmbed()
f6.setColor(config.color)
f6.setTitle('คาบที่ **6**')
f6.setDescription('__รายวิชา__ **' + classconfig.f6 + `**
__ครูผู้สอน__ **` + classconfig.tf6 + `**
__เวลา__ : **`+ classconfig.tb6 +` - ` + classconfig.tb7 +` น.**
`)
f6.setTimestamp()
.setAuthor(config.schoolname, config.logoschool, config.schoollink)
.setThumbnail(config.logoschool)
.setFooter('Bot By OpecZ CH', 'https://media.discordapp.net/attachments/816274714921140225/847088447470567424/2.png');


const f7 = new Discord.MessageEmbed()
f7.setColor(config.color)
f7.setTitle('คาบที่ **7**')
f7.setDescription('__รายวิชา__ **' + classconfig.f7 + `**
__ครูผู้สอน__ **` + classconfig.tf7 + `**
__เวลา__ : **`+ classconfig.tb7 +` - ` + classconfig.tb8 +` น.**
`)
f7.setTimestamp()
.setAuthor(config.schoolname, config.logoschool, config.schoollink)
.setThumbnail(config.logoschool)
.setFooter('Bot By OpecZ CH', 'https://media.discordapp.net/attachments/816274714921140225/847088447470567424/2.png');

const f8 = new Discord.MessageEmbed()
f8.setColor(config.color)
f8.setTitle('คาบที่ **8**')
f8.setDescription('__รายวิชา__ **' + classconfig.f8 + `**
__ครูผู้สอน__ **` + classconfig.tf8 + `**
__เวลา__ : **`+ classconfig.tb8 +` - ` + classconfig.tb9 +` น.**
`)
f8.setTimestamp()
.setAuthor(config.schoolname, config.logoschool, config.schoollink)
.setThumbnail(config.logoschool)
.setFooter('Bot By OpecZ CH', 'https://media.discordapp.net/attachments/816274714921140225/847088447470567424/2.png');

const f9 = new Discord.MessageEmbed()
f9.setColor(config.color)
f9.setTitle('คาบที่ **9**')
f9.setDescription('__รายวิชา__ **' + classconfig.f9 + `**
__ครูผู้สอน__ **` + classconfig.tf9 + `**
__เวลา__ : **`+ classconfig.tb9 +` - ` + classconfig.tb10 +` น.**
`)
f9.setTimestamp()
.setAuthor(config.schoolname, config.logoschool, config.schoollink)
.setThumbnail(config.logoschool)
.setFooter('Bot By OpecZ CH', 'https://media.discordapp.net/attachments/816274714921140225/847088447470567424/2.png');

const f10 = new Discord.MessageEmbed()
f10.setColor(config.color)
f10.setTitle('คาบที่ **10**')
f10.setDescription('__รายวิชา__ **' + classconfig.f10 + `**
__ครูผู้สอน__ **` + classconfig.tf10 + `**
__เวลา__ : **`+ classconfig.tb10 +` - ` + classconfig.tb11 +` น.**
`)
f10.setTimestamp()
.setAuthor(config.schoolname, config.logoschool, config.schoollink)
.setThumbnail(config.logoschool)
.setFooter('Bot By OpecZ CH', 'https://media.discordapp.net/attachments/816274714921140225/847088447470567424/2.png');



function time() {

    let d = new Date();
    let s = d.getSeconds();
    let m = d.getMinutes();
    let h = d.getHours();
		let ms = d.getMilliseconds();
    let dd = d.getDay();

    /****************** Mon ******************************** */
        if(dd == "1"){
            if(h == "8") {
                if(m == "10"){
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
                if(m == "0"){
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


            if(h == "9") {
                if(m == "50"){
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


            if(h == "10") {
                if(m == "40"){
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
                if(m == "30"){
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
                if(m == "20"){
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
                if(m == "10"){
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
                if(m == "0"){
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
            if(m == "10"){
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
            if(m == "0"){
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


        if(h == "9") {
            if(m == "50"){
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


        if(h == "10") {
            if(m == "40"){
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
            if(m == "30"){
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
            if(m == "20"){
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
            if(m == "10"){
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
            if(m == "00"){
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
            if(m == "10"){
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
            if(m == "0"){
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


        if(h == "9") {
            if(m == "50"){
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


        if(h == "10") {
            if(m == "40"){
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
            if(m == "30"){
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
            if(m == "20"){
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
            if(m == "10"){
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
            if(m == "00"){
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


        if(h == "14") {
            if(m == "50"){
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
            if(m == "10"){
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
            if(m == "0"){
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


        if(h == "9") {
            if(m == "50"){
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


        if(h == "10") {
            if(m == "40"){
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
            if(m == "30"){
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
            if(m == "20"){
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
            if(m == "10"){
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
            if(m == "00"){
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
    }
    /************************************************** */

    /************************ Fri ************************** */
    if(dd == "5"){
        if(h == "8") {
            if(m == "10"){
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


        if(h == "9") {
            if(m == "00"){
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


        if(h == "9") {
            if(m == "50"){
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


        if(h == "10") {
            if(m == "40"){
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
            if(m == "30"){
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
            if(m == "20"){
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
            if(m == "10"){
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

        if(h == "14") {
            if(m == "0"){
                if(s == "0"){
                client.channels.fetch(config.sendclass)
                    .then(channel => {
                        f8.setTimestamp()
                channel.send("@everyone",{embed: f8}).then(function (message) {
                    message.react("❤")
            });;
                    })
                }
            }
        }

        if(h == "14") {
            if(m == "50"){
                if(s == "0"){
                client.channels.fetch(config.sendclass)
                    .then(channel => {
                        f9.setTimestamp()
                channel.send("@everyone",{embed: f9}).then(function (message) {
                    message.react("❤")
            });;
                    })
                }
            }
        }

        if(h == "15") {
            if(m == "40"){
                if(s == "0"){
                client.channels.fetch(config.sendclass)
                    .then(channel => {
                        f10.setTimestamp()
                channel.send("@everyone",{embed: f10}).then(function (message) {
                    message.react("❤")
            });;
                    })
                }
            }
        }




    }
    /************************************************** */


	if(message.content == config.prefix + 'reboot-m31') {
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


	if(h == "6"){
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


		if(h == "8"){
			if(m == "8"){
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


					if(h == "8"){
								if(m == "58"){
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

						if(h == "9"){
									if(m == "48"){
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
										if(m == "38"){
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
											if(m == "28"){
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
												if(m == "18"){
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
													if(m == "8"){
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
														if(m == "58"){
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
															if(m == "48"){
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
																if(m == "38"){
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

                                                        if(h == "16"){
                                                            if(m == "28"){
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
