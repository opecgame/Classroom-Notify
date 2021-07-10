const moment = require(`moment`)
const discord = require(`discord.js`)
const class_ = require(`../config/class.json`)
const teacher_ = require(`../config/teacher.json`)
const link_ = require(`../config/link.json`)
moment.locale(`TH`);
const school_alert = async function(client) {
    console.log(`test connect`)
    let time_old = 0
    let subject = 0
    setInterval(async() => {

        let embed_obj = new discord.MessageEmbed()
            .setAuthor(config.schoolname, config.logoschool, config.schoollink)
            .setThumbnail(config.logoschool)
            .setFooter('Bot By OpecZ CH', 'https://media.discordapp.net/attachments/816274714921140225/847088447470567424/2.png')
            .setColor(`#0BEEF0`).setTimestamp()

        let nowdate = {
            "day": moment().format('d'),
            time: {
                h: moment(new Date()).toObject().hours,
                m: moment(new Date()).toObject().minutes,
                s: moment(new Date()).toObject().seconds
            }
        }
		
        let class_select
        let teacher_select
		let link_select
		
        async function loop_class(class_select, teacher_select, link_select) {

            let time = 0
            if (nowdate.time.h === 14 && nowdate.time.m === 43 && nowdate.time.s === 55) {
                subject = 0
                if (class_select[subject] !== `none`) {
                    await client.channels.fetch(config.sent)
                        .then(async(channel) => {
                            embed_obj.setTitle('คาบที่ **' + (parseInt(subject) + 1) + '**')
							embed_obj.setURL(link_select[subject])
                            embed_obj.setDescription('__รายวิชา__ **' + class_select[subject] + `\n**__ครูผู้สอน__ **` + teacher_select[subject] + `**`)
                            embed_obj.setTimestamp()
                            await channel.send("@everyone", { embed: embed_obj }).then(function(message) {
                                message.react("❤")
                            })
                        })
                } else {}
                time_old = (60 * nowdate.time.h) + nowdate.time.m
                subject = subject + 1
            }
            //set ++
            time = (60 * nowdate.time.h) + nowdate.time.m
			
            if (time === (time_old + 50)) {
                if (subject >= class_select.length) {} else {
                    if (class_select[subject] !== `none`) {
                        await client.channels.fetch(config.sent)
                            .then(async(channel) => {
                                embed_obj.setTitle('คาบที่ **' + (parseInt(subject) + 1) + '**')
								embed_obj.setURL(link_select[subject])
                                embed_obj.setDescription('__รายวิชา__ **' + class_select[subject] + `\n**__ครูผู้สอน__ **` + teacher_select[subject] + `**`)
                                embed_obj.setTimestamp()
                                await channel.send("@everyone", { embed: embed_obj }).then(function(message) {
                                    message.react("❤")
                                })
                            })
                    } else {}
                }
                time_old = (60 * nowdate.time.h) + nowdate.time.m
                subject = subject + 1
            }

        }
		
        if (nowdate.day === `1`) {
            class_select = class_.mo;
            teacher_select = teacher_.mo;
			link_select = link_.mo;
            loop_class(class_select, teacher_select, link_select)
        } else if (nowdate.day === `2`) {
            class_select = class_.tu;
            teacher_select = teacher_.tu;
			link_select = link_.tu;
            loop_class(class_select, teacher_select, link_select)
        } else if (nowdate.day === `3`) {
            class_select = class_.we;
            teacher_select = teacher_.we;
			link_select = link_.we;
            loop_class(class_select, teacher_select, link_select)
        } else if (nowdate.day === `4`) {
            class_select = class_.th;
            teacher_select = teacher_.th;
			link_select = link_.th;
            loop_class(class_select, teacher_select, link_select)
        } else if (nowdate.day === `5`) {
            class_select = class_.fr;
            teacher_select = teacher_.fr;
			link_select = link_.fr;
            loop_class(class_select, teacher_select, link_select)
        } else {
        }
    }, 1000)

}



module.exports = school_alert;