module.exports = ({
name: "setOwner", 
code: `
  $color[GREEN]
  $description[Okay, from now on <@$findUser[$message]> will be a global chat Owner !]
  $setGlobalUserVar[userrole;:crown: CREADOR;$findUser[$message]]

  $onlyIf[$getGlobalUserVar[userrole;$findUser[$message]]!=:crown: CREADOR;:x: ¡Hey <@$authorID>! The user <@$findUser[$message]> ($username[$findUser[$message]]#$discriminator[$findUser[$message]]) already is a creator in Global Chat.]
  $onlyIf[$userExists[$findUser[$message]]!=false;:x: ¡Hey <@$authorID>! Indicated user does not exist.]
  $argsCheck[>1;:x: ¡Hey <@$authorID>! You must indicate a user after the trigger.]

  $onlyForIDs[$botOwnerID;]
` 
})