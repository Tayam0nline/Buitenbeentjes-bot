const config = require("./config.json");

const Discord = require("discord.js");
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
const prefix = config.prefix;
const fs = require("fs");
client.commands = new Discord.Collection();
const commandFiles = fs
  .readdirSync("./commands/")
  .filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

client.once("ready", () => {
  console.log("Daan is noob");
});

client.on("message", (message) => {
  //console.log(message);
  if (message.author.username == "ColKru") {
    message.channel.send("Hou je mond Colin");
    return;
  }
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();
  //console.log(command);

  if (command === "ping") {
    client.commands.get("ping").execute(message, args);
  } else if (command === "opencode") {
    client.commands.get("opencode").execute(message, args);
  } else if (command === "marco") {
    client.commands.get("marco").execute(message, args);
  } else {
    message.channel.send("Invalid command!");
  }
});

client.login(config.token);
