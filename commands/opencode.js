module.exports = {
  name: "opencode",
  description: "opencode command that rick rolls anyone that executes it",
  execute(message, args) {
    message.channel.send(
      "https://tenor.com/view/rickroll-roll-rick-never-gonna-give-you-up-never-gonna-gif-22954713"
    );
  },
};
