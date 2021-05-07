  
module.exports = {
	name: 'avatar',
	description: 'Mostra a  foto de perfil dos usuarios marcados',
	execute(message) {
		if (!message.mentions.users.size) {
			return message.channel.send(`Avatar de: ${message.author.displayAvatarURL({ dynamic: true })}`);
		}

		const avatarList = message.mentions.users.map(user => {
			return `Avatar de ${user.username}: ${user.displayAvatarURL({ dynamic: true })}`;
		});

		message.channel.send(avatarList);
	},
};