let img = `$replaceText[$userAvatar[$findMember[$message]];webp;png]`;
let userData = {
  xp: `$getUserVar[xp;$mentioned[1;yes]]`,
  requiredXP: `$getUserVar[req;$mentioned[1;yes]]`,
  level: `$getUserVar[level;$mentioned[1;yes]]`,
  status: `$status[$mentioned[1;yes]]`,
  name: `$username[$mentioned[1;yes]]`,
  discriminator: `$discriminator[$mentioned[1;yes]]`
};

module.exports = ({
  name: "rank",
  code: `
  $deletecommand
$djsEval[const Discord = require('discord.js');
const canvacord = require("canvacord");
 
const rank = new canvacord.Rank().setAvatar("${img}").setLevel(${userData.level}, "Level", true).setCurrentXP(${userData.xp}).setRequiredXP(${userData.requiredXP}).setStatus(\`${userData.status}\`).setProgressBar("#FFFFFF", "COLOR").setUsername(\`${userData.name}\`).setDiscriminator(\`${userData.discriminator}\`).setRank(1, "Rank", false).renderEmojis(true);

rank.build()
 .then(data => {
 const attachment = new Discord.MessageAttachment(data, "RankCardMadeByNekonomi.png");
 d.channel.send(attachment);
 });
]
$onlyIf[$isBot[$mentioned[1;yes]]==false;{description: Bots don't have rank on the server!}{color: ff0000}{author: Invalid user.}]
`
});

