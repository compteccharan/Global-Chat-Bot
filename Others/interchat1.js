module.exports = ({
name: "$alwaysExecute", 
code: `
  $forEachChannel[interchat]
  $cooldown[7s;{description: ¡Hey! Don't send messages so fast $username.}{color: ff0000}{delete:2s}]
  $deleteCommand
  $onlyIf[$getGlobalUserVar[userban]!=banned;{description: ¡Hey! $username! You cannot send messages in the Global Chat, you are banned. Appeal here: https://discord.gg/H5tVtPAZMD}{color: ff0000}{delete:5s}]
  $onlyIf[$channelID==$getServerVar[chatchannel;$guildID]]
  $onlyIf[$getServerVar[chatinvite]!=Not set;]
  
  $onlyIf[$checkContains[$message;!;!setInvite;!setChannel]!=true;]
  
  
  $suppressErrors
` 
})