module.exports = ({
name: "banUser", 
code: `
  $color[GREEN]
  $description[Okay, now <@$finduser[$Message]> You can not send messages in Global Chat.]

  $forEachChannel[banmessage]

  $setGlobalUserVar[userban;banned;$findUser[$message]]

  $onlyIf[$getGlobalUserVar[userban;$findUser[$message]]!=banned;:x: ¡Hey <@$authorID>! The user <@$findUser[$message]> ($username[$findUser[$message]]#$discriminator[$findUser[$message]]) was already banned in global chat.]
  $onlyIf[$userExists[$findUser[$message]]!=false;:x: ¡Hey <@$authorID>! Indicated a user that does not exist.]
  $argsCheck[>1;:x: ¡Hey <@$authorID>! You must indicate a user after the trigger.]

  $onlyIf[$getGlobalUserVar[userrole]!=:tools: MODERADOR;]
` 
})