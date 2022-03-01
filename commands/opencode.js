module.exports = {
  name: "opencode",
  description: "opencode command that rick rolls anyone that executes it",
  import java.util.Random;
Random rand = new Random();
int n = rand.nextInt(11);
if (n == 1){
    execute(message, args) {
    message.channel.send("https://c.tenor.com/VFFJ8Ei3C2IAAAAM/rickroll-rick.gif"); }
else{
  execute(message, args) {
    message.channel.send("https://github.com/SemPlaatsman/Buitenbeentjes-bot");}
  },
};
