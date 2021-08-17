module.exports = ({
name: "interchat",
type: "awaitedCommand",
code: `
$useChannel[$getServerVar[chatchannel]]

$description[**$getGlobalUserVar[userrole]** | :inbox_tray: **[JOIN THE SERVER]($getServerVar[chatinvite])** 

<@$authorID>: $message]

$author[$username#$discriminator • $authorID;$authorAvatar]

$footer[$serverName | $membersCount USERNAME;$serverIcon]
$color[$getGlobalUserVar[embedcolor]]

$addTimestamp
$onlyIf[$channelID==$getservervar[chatchannel];]
$onlyIf[isBot[$authorID]!=true;]
$onlyIf[$checkContains[$message;!;!setInvite;!setChannel]!=true;]
$suppressErrors`
})