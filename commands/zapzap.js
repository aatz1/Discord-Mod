const path = require('path')


module.exports = {
	name: 'zapzap',
	description: 'Entra no canal de voz e toca audio ( zapzap.mp3 )',
	async execute(message) {
		const { voice } = message.member
		
		if(!voice.channelID) {
			message.reply('Voce precisa estar em um canal de voz para estourar seus ouvidos')
			return
		} 
		
		voice.channel.join().then((connection) => {
			connection.play(path.join(__dirname, '../audios/zapzap.mp3'))
			})
		
	}
};