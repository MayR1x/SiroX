module.exports = {
  name: "set-cur",
  code: `
  $onlyIf[$getServerVar[lang]==0;]
  $setServerVar[currency;$message[1]]
  $description[**Вы изменили валюту сервера на: \`$message[1]\`**]
  $deletecommand
  $color[8e24aa]
  `
};