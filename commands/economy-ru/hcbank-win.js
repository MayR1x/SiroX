module.exports = ({
  name: "hc-bank",
  code: `
  $onlyIf[$getServerVar[lang]==0;]
  $onlyIf[$getUserVar[hcbank]==lose;]

$title[Взлом Банкомата... Не удалось:( <a:rejected:741220986367639593>]
$description[$randomText[**Банкомат был под не плохой защитой! Соболезную, тебе пришлось выплатить - **;**Система безопасности заметила тебя за взломом! Тебе пришлось выплатить - **] $getServerVar[currency] **Сожалею!**]
$color[ff0000]
  `
})