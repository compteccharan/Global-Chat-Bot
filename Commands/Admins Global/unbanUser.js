module.exports = ({
name: "unbanUser", 
code: `
  $color[GREEN]
  $description[Okay, from now on <@$findUser[$message]> You can send messages in Global Chat.]

  $forEachChannel[unbanmessage]

  $setGlobalUserVar[userban;No banned;$findUser[$message]]

  $onlyIf[$getGlobalUserVar[userban;$findUser[$message]]!=No banned;:x: ¡Hey <@$authorID>! The user <@$findUser[$message]> ($username[$findUser[$message]]#$discriminator[$findUser[$message]]) is not banned in Global Chat.]
  $onlyIf[$userExists[$findUser[$message]]!=false;:x: ¡Hey <@$authorID>! Indicated use does not exist.]
  $argsCheck[>1;:x: ¡Hey <@$authorID>! You must indicate a user after the trigger.]

  $onlyIf[$getGlobalUserVar[userrole]!=:tools: MODERADOR;]
` 
})