module.exports = ({
name: "unbanmessage",
type: "awaitedCommand",
code: `
$useChannel[$getServerVar[chatchannel]]
$color[GREEN]
$description[¡The user **<@$findUser[$message]> ($username[$findUser[$message]]#$discriminator[$findUser[$message]])** has been unbanned from Global Chat!]

$onlyIf[isBot[$authorID]!=true;]
$onlyIf[$channelID==$getservervar[chatchannel];]
$suppressErrors`
})