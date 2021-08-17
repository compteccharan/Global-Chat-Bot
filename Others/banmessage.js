module.exports = ({
name: "banmessage",
type: "awaitedCommand",
code: `
$useChannel[$getServerVar[chatchannel]]
$color[RED]
$description[The user **<@$findUser[$message]> ($username[$findUser[$message]]#$discriminator[$findUser[$message]])** has been banned from Global Chat.]

$onlyIf[isBot[$authorID]!=true;]
$onlyIf[$channelID==$getservervar[chatchannel];]
$suppressErrors`
})