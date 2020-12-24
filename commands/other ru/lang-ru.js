module.exports = {
  name: "lang-ru",
  code: `
$deletecommand
  $setServerVar[lang;0]
  $onlyIf[$getServerVar[lang]==1;]
  $description[**Вы изменили настройки бота! Теперь язык: \`Русский\`**]
  $color[8e24aa]
  `
};
