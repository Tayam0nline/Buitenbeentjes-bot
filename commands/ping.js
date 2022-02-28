module.exports = {
  name: "ping",
  description: "basic ping command which makes the bot send pong back",
  execute(message, args) {
    if (message.member.roles.cache.has("938569064786305064")) {
      message.channel.send("pong!");
    } else {
      message.channel.send(
        "You don't have the permissions to use this command!"
      );
    }
  },
};
