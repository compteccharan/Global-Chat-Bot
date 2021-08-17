module.exports = ({
name: "config", 
aliases: ["info", "information", "configuration"],
code: `
  $color[GREEN]
  $description[- **Channel ID configured:** <#$getServerVar[chatchannel]>
  - **Configured server invitation:** $getServerVar[chatinvite]
  - **Color embed has set:** $getGlobalUserVar[embedcolor]
  - **Your interchat role:** $getGlobalUserVar[userrole]]

  $onlyIf[$getServerVar[chatinvite]!=Not set;{color: ff0000}{description: ¡Hey! At the moment an invitation from this server for Global Chat has not been established, set it with **!setInvite** and try again.}]
  $onlyIf[$getServerVar[chatchannel]!=Not set;{color: ff0000}{description: ¡Hey! At the moment a Global Chat channel has not been established, set it with **!setChannel** and try again.}]
  $suppressErrors
` 
})