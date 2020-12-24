module.exports = {
  name: "clear",
  code: `
$deletecommand
$onlyIf[$getServerVar[lang]==1;]
$clear[$message]
$cooldown[5s;**Try again in please wait %time% to Purge again**]
$onlyPerms[admin;**Only Admin Can Use This**]
$argsCheck[>1;**Enter the correct number**]
$onlyIf[$isNumber[$message]==true;**It is not a number**]
$deletecommand
`
};
