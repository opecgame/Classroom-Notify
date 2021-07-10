const moment = require(`moment`)
const colors = require('colors');
moment.locale(`th`);

module.exports = (client, message) => {
  
  global.prefix = config.prefix
  if (message.author.bot) return;
  if (message.content.indexOf(prefix) !== 0) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  const cmd = client.commands.get(command);
  if (!cmd) return;
  console.log(`[`+`${moment().format()}`.green+`]`+ ` ID:${message.author.id} -> `+`${message.content}`.yellow)
  cmd.run(client, message, args);

};