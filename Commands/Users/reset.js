module.exports = ({
name: "reset", 
aliases: ["reiniciar"],
code: `
  $color[GREEN]
  $description[Ok $username, [Ok $ username, I have reset the Global Chat values, reconfigure it with **!setChannel** and **!setInvite**
  
  $resetServerVar[chatchannel]
  $resetServerVar[chatinvite]

  $onlyIf[$getServerVar[chatchannel]!=Not set;{color: ff0000}{description: ¡Hey! At the moment there is no channel established for Global Chat. Set it up with **!setChannel**}]]

  $onlyBotPerms[manageserver;managemessages;sendmessages;viewchannel;managechannels;{description: ¡Hey! You must give me more permissions to be able to do that.}{color: ff0000}]
  $onlyPerms[admin;{description: ¡Hey! You must be a server administrator to use this command.}{color: ff0000}]
  $suppressErrors
` 
})