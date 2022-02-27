module.exports = {
  name: "ping",
  description: "basic ping command which makes the bot send pong back",
  execute(message, args) {
    message.channel.send("pong!");
  },
};
