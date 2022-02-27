const Discord = require("discord.js");
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
const prefix = ">";

client.once("ready", () => {
  console.log("Daan is noob");
});

client.on("message", (message) => {
  //console.log(message);
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();
  //console.log(command);

  if (command === "ping") {
    message.channel.send("pong!");
  }

  if (message.author.username === "Colin Kroket") {
    message.channel.send();
  }
});

client.login("OTQ3MjE2OTE3MzY0NjE3MzE3.YhqCfw.M1IBYUMaCJeclH8-KBKlTNxS6cs");
