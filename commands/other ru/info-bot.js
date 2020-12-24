module.exports = {
  name: "info-bot",
  code: `
    $onlyIf[$getServerVar[lang]==0;]
    $title[Info Bot]
    $description[$addField[**Версия:**;**\`0.1\`**;yes]
    $addField[**Пользователей:**;**\`$allMembersCount\`**;yes]
    $addField[**Серверов:**;**\`$serverCount\`**;yes]
    $addField[**Пинг:**;**\`$ping\`**;yes]$addField[**Библиотека:**;**\`dbd.js\`**;yes]
    $addField[**Разработчик:**;**\`MayR1x#7802\`**;yes]]
    $color[8e24aa]
    $deletecommand
    `
};
