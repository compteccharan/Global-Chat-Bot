module.exports = ({
name: "setChannel", 
aliases: ["set-channel"],
code: `
  $color[GREEN]

  $description[De acuerdo <@$authorID>, from now on the Global Chat will be configured to <#$findChannel[$message]>, now set an invitation with **!setInvite**]

  $setServerVar[chatchannel;$findChannel[$channelID]]
  $channelCooldown[5s;]
  $onlyIf[$channelExists[$findChannel[$channelID]]==true;]

  $onlyPerms[managechannels;{description::x: You need more permissions to be able to execute this command!}{color: ff0000}]
  $onlyBotPerms[manageserver;managemessages;sendmessages;viewchannel;managechannels;{description: ¡Hey! You must give me more permissions to be able to do that.}{color: ff0000}]
  $onlyPerms[admin;{description: ¡Hey! You must be a server administrator to use this command.}{color: ff0000}]
  $suppressErrors
` 
})