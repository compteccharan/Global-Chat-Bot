module.exports = ({
name: "help", 
aliases: ["ahh", "docs", "commands"],
code: `
  $color[GREEN]
  $description[**Chat Global is a Discord bot through which you can communicate with more servers that have configured me through a channel!!**

  - **!setChannel:** Establish an interchat channel for the server.
  - **!c/setInvite:**Set an interchat invitation for the server.
  - **!setColor:** Customize the color of your embed for the interchat.
  - **!reset:** Deactivate the channel and the interchat invitation on the server.
  - **!config:** See what interchat configuration is set on the server.

  - **Invite of Aquire:** [Aquire](https://dsc.gg/aquire)
  - **Support:** Join server in repo(https://github.com/compteccharan/Global-Chat-Bot#support-friend)]
  $suppressErrors
` 
})
