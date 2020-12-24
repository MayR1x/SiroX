module.exports = ({
	name: "volume",
	code: `
$volume[$message]
$onlyIf[$message!=;{color:RED}{description: error message}]
$onlyIf[$isNumber[$message]==false:{color:RED}{description: err msg}]
$onlyIf[$voiceID!=;{color:RED}{description: Please join a Voice Channel First}]
$onlyIf[$queueLength==0;{color:RED}{description: Queue is empty!!}]
$addCmdReactions[🔊]
$onlyPerms[kick;{color:RED}{description: Missing permissions! \`KICK_MEMBERS\`}]`
});