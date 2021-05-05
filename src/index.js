const Discord = require("discord.js");
const client = new Discord.Client();
const { prefix, token } = require("../config.json")

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
})

client.on('message', msg => {
	if (msg.content === `${prefix} test`) {
		msg.channel.send(`****Online e logado como ${client.user.tag}****`);
	}
});

client.login(token)