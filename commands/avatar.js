const Discord = require("discord.js")


module.exports = {
	name: 'avatar',
	description: 'Mostra a  foto de perfil dos usuarios marcados',
	execute(message) {

		

		if (!message.mentions.users.size) {
			const AvatarEmbed1 = new Discord.MessageEmbed()
				.setColor('#00ff08')
				.setTitle(`Avatar de ${message.author.username}`)
				.setURL(`${message.author.displayAvatarURL({ dynamic: true })}`)
				.setImage(`${message.author.displayAvatarURL({ dynamic: true })}`)

			return message.channel.send(AvatarEmbed1)
		} 


		const avatarList = message.mentions.users.map(user => {
			return AvatarEmbed2 = new Discord.MessageEmbed()
				.setColor('#00ff08')
				.setTitle(`Avatar de ${user.username}`)
				.setURL(`${user.displayAvatarURL({ dynamic: true })}`)
				.setImage(`${user.displayAvatarURL({ dynamic: true })}`)
			
		});

		message.channel.send(avatarList)


		
		
		
	}
};