module.exports = {
	name: 'ping',
	description: 'Ping!',
	execute(message, args, client) {
		message.channel.send(`🏓 a Latencia da conexão com a API do discord é de ${Math.round(client.ws.ping)}ms`);
	},
};