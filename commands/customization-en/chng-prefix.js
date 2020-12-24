module.exports = ({
    name: "set-prefix",
    code: `
    $onlyIf[$getServerVar[lang]==1;]
	$deletecommand
    $setServerVar[prefix;$message[1]]
    $description[
        **We have changed the prefix on the server to: \`$message[1]\`** 
    ]
    `
});