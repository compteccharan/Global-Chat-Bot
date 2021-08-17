module.exports = ({
name: "setColor", 
code: `
  $color[$getGlobalUserVar[embedcolor]]
  $description[Ok <@$authorID>, from now on the color of your embed for Global Chat will be set to **$message[1]**]
  $wait[1s]
  $setGlobalUserVar[embedcolor;$message[1]]
  $onlyIf[isValidHex[$message[1]]!=false;{description: ¡Hey! The hex color you entered is invalid.}{color: ff0000}]
  $argsCheck[>1;{description: ¡Hey! You must indicate the hex number of the color after the trigger.{color: ff0000}]
  $suppressErrors
` 
})