module.exports = ({
  name: "hc-bank",
  code: `
  $onlyIf[$getServerVar[lang]==1;]
  $onlyIf[$getUserVar[hcbank]==win;]
  
$title[Breaking into an ATM... Successfully!<a:verify:790158410292920331>]
$description[$randomText[**You've managed to hack into a small company's \`ATM\`! Here you go - **;**You found out the \`bank's secret information\`! After the sale you received - **] \`$random[1500;5500]\`$getServerVar[currency]]
$color[8e24aa]
  `
})