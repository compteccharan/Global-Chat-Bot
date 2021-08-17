module.exports = ({
name: "setMod", 
code: `
  $color[GREEN]
  $description[Okay, from now on <@$findUser[$message]> will be a global chat moderator!]
  $setGlobalUserVar[userrole;:tools: MODERADOR;$findUser[$message]]

  $onlyIf[$getGlobalUserVar[userrole;$findUser[$message]]!=:tools: MODERADOR;:x: ¡Hey <@$authorID>! The user <@$findUser[$message]> ($username[$findUser[$message]]#$discriminator[$findUser[$message]]) is already a moderator in the global chat !]
  $onlyIf[$userExists[$findUser[$message]]!=false;:x: ¡Hey <@$authorID>! Indicated user does not exist.]
  $argsCheck[>1;:x: ¡Hey <@$authorID>! You must indicate a user after the trigger.]

  $onlyForIDs[$botOwnerID;]
` 
})