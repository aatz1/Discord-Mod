const path = require('path')


module.exports = {
	name: 'audio',
	description: 'Entra no canal de voz e toca o nome do audio passado como argumento',
	async execute(message, args) {
		const { voice } = message.member
		
		if(!voice.channelID) {
			message.reply('Voce precisa estar em um canal de voz para estourar seus ouvidos')
			return
		} 


		const audioname = args[0]
		
		voice.channel.join().then((connection) => {
			connection.play(path.join(__dirname, `../audios/${audioname}.mp3`))
		})
		
	}
};