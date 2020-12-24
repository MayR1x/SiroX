module.exports = {
  name: "$alwaysExecute",
  code: `
GJ! <@$authorID>, you level up to $getUserVar[level;$authorID].
$setUserVar[req;sum$getUserVar[req;$authorID];1500];$authorID]
$setUserVar[xp;0;$authorID]
$setUserVar[level;$sum[$getUserVar[level;$authorID];1];$authorID]
$onlyIf[$getUserVar[req;$authorID]<$getUserVar[xp;$authorID];]
`
};
