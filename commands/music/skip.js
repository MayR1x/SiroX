module.exports = ({
 name: "skip",
 code: `
$stopSong
$onlyIf[$voiceID!=;{color:RED}{description: Please join a Voice Channel First}]
$onlyIf[$queueLength==0;{color:RED}{description: Queue is empty!!}]
$addCmdReactions[⏹️]
$onlyPerms[kick;{color:RED}{description: Missing permissions! \`KICK_MEMBERS\`}]`
});