module.exports = {
  name: "$alwaysExecute",
  code: `
$setUserVar[score;$sum[$getUserVar[score;$authorID];$random[0;$multi[$getUserVar[level;$authorID];5]]];$authorID]
$setUserVar[xp;$sum[$getUserVar[xp;$authorID];$random[0;$multi[$getUserVar[level;$authorID];5]]];$authorID]
`
};
