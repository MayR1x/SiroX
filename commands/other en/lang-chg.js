module.exports = {
  name: "lang-eng",
  code: `
  $setServerVar[lang;1]
  $onlyIf[$getServerVar[lang]==0;]
  $description[**You have changed your bot settings! Now language: \`English\`**]
  `
};
