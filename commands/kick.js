module.exports = {
	name: 'kick',
	description: 'comando para explusar membros',
	execute(message) {
		if (!message.mentions.users.size) {
			return message.reply('mencione um usuario para expulsar');
		}

		const taggedUser = message.mentions.users.first();

		if(message.member.hasPermission("KICK_MEMBERS")) {
            const prekickmember = message.guild.members.cache.get(taggedUser.id)
            prekickmember.kick()
            message.channel.send(`${taggedUser.username} foi expulso!`);
        } else {
            message.reply("kkkkkk tu não pode expulsar")
        }
	},
};