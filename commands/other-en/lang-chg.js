module.exports = ({
  name: "lang-en",
  code: `
$deletecommand
  $setServerVar[lang;1]
  $onlyIf[$getServerVar[lang]==0;]
  $description[**You have changed your bot settings! Now language: \`English\`**]
  $color[8e24aa]
  `
});
