module.exports = {
	name: 'ban',
	description: 'comando para banir membros',
	execute(message) {
		if (!message.mentions.users.size) {
			return message.reply('mencione um usuario para banir');
		}

		const taggedUser = message.mentions.users.first();

		if(message.member.hasPermission("BAN_MEMBERS")) {
            const prekickmember = message.guild.members.cache.get(taggedUser.id)
            prekickmember.ban()
            message.channel.send(`${taggedUser.username} foi banido!`);
        } else {
            message.reply("kkkkkk tu não pode banir")
        }
	},
};