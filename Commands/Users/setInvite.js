module.exports = ({
name: "setInvite", 
code: `
  $color[GREEN]
  $description[Ok <@$authorID>, from now on the invitation of this server for Global Chat will be configured to $message[1] (We recommend that the invitation never expire)]
  $wait[1s]
  $setServerVar[chatinvite;$message[1]]
  $onlyIf[$checkContains[$message[1];discord.gg/]!=false;{description: ¡Hey! The link you indicated is not an invitation from the server.}{color: ff0000}]
  $argsCheck[>1;{description: ¡Hey! You must indicate the invitation after the trigger (preferably permanent)}{color: ff0000}]
  $onlyBotPerms[manageserver;managemessages;sendmessages;viewchannel;managechannels;{description: ¡Hey! You must give me more permissions to be able to do that.}{color: ff0000}]
  $onlyPerms[admin;{description: ¡Hey! You must be a server administrator to use this command.}{color: ff0000}]
  $suppressErrors
` 
})