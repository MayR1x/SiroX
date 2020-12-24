module.exports = {
  name: "info-bot",
  code: `
    $onlyIf[$getServerVar[lang]==1;]
    $title[Info Bot]
    $description[$addField[**Version:**;**\`0.1\`**;yes]
    $addField[**Users:**;**\`$allMembersCount\`**;yes]
    $addField[**Servers:**;**\`$serverCount\`**;yes]
    $addField[**Ping:**;**\`$ping\`**;yes]$addField[Library:;**\`dbd.js\`**;yes]
    $addField[**Developer:**;**\`MayR1x#7802\`**;yes]]
    $color[8e24aa]
    $deletecommand`
};
