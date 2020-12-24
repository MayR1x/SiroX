module.exports = ({
  name: "set-cur",
  code: `
  $onlyIf[$getServerVar[lang]==1;]
  $setServerVar[currency;$message[1]]
  $description[**You have changed the server currency to: $message[1]**]
  $deletecommand
  $color[8e24aa]
  `
});