const Discord = require("discord.js");
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
const prefix = "-";

client.once("ready", () => {
  console.log("Daan is noob");
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.startsWith(prefix)) return;

  if (command === "!ping") {
    await interaction.reply("Pong!");
  }
});

client.login("OTQ3MjE2OTE3MzY0NjE3MzE3.YhqCfw.M1IBYUMaCJeclH8-KBKlTNxS6cs");
