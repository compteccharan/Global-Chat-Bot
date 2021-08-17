module.exports = ({
name: "removeMod", 
code: `
  $color[GREEN]
  $description[Okay, from now on <@$findUser[$message]> will cease to be a global chat moderator!]
  $setGlobalUserVar[userrole;:busts_in_silhouette: USERNAME;$findUser[$message]]

  $onlyIf[$getGlobalUserVar[userrole;$findUser[$message]]!=:busts_in_silhouette: USERNAME;:x: ¡Hey <@$authorID>! The user <@$findUser[$message]> ($username[$findUser[$message]]#$discriminator[$findUser[$message]])  had no moderator in Global Chat.]
  $onlyIf[$userExists[$findUser[$message]]!=false;:x: ¡Hey <@$authorID>! Indicated a user that does not exist.]
  $argsCheck[>1;:x: ¡Hey <@$authorID>! You must indicate a user after the trigger.]

  $onlyForIDs[$botOwnerID;]
` 
})