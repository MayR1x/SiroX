module.exports = ({
  name: "hc-bank",
  code: `
  $onlyIf[$getServerVar[lang]==1;]
  $onlyIf[$getUserVar[hcbank]==lose;]

$title[Breaking into an ATM... Failed:( <a:rejected:741220986367639593>]
$description[$randomText[**the ATM was not badly protected! You had to pay - **;**The security system spotted you breaking in! You had to pay - **] $getServerVar[currency]]
$color[ff0000]
  `
});