module.exports = ({
    name: "set-prefix",
    code: `
    $onlyIf[$getServerVar[lang]==0;]
	$deletecommand
    $setServerVar[prefix;$message[1]]
    $description[
        **Вы изменили префикс бота на сервера на: \`$message[1]\`** 
    ]
    `
});