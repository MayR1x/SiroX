const dbd = require("dbd.js");

const bot = new dbd.Bot({
  token: "process.env.TOKEN",
  prefix: "$getServerVar[prefix]"
});

bot.onMessage();
const fs = require("fs");
const { notDeepEqual } = require("assert");
const { time } = require("console");
const folders = fs.readdirSync("./commands/");

for (const files of folders) {
  const folder = fs
    .readdirSync(`./commands/${files}/`)
    .filter(file => file.endsWith(".js"));

  for (const commands of folder) {
    const command = require(`./commands/${files}/${commands}`);
    bot.command({
      name: command.name,
      code: command.code
    });
  }
}

bot.variables({
  lang: 1,
  prefix: "sx.",
  xp: 0,
  level: 1,
  req: 1500,
  score: 0,
  currency: "$",
  cooldown: "1s",
  money: 0,
  language: 1,
  hcbank: 0,
});

bot.status({
  text: "by MayR1x#7802",
  type: "STREAMING",
  time: 12
});
bot.status({
  text: "Write sx.help if you need help",
  type: "STREAMING",
  time: 12
});
bot.status({
  text: "My prefix: sx.",
  type: "STREAMING",
  time: 12
});