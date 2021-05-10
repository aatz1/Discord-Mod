module.exports = {
    name: 'clear',
    description: 'limpa as 50 ultimas mensagens do chat',
    execute(message, args, client) {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) {
            return message.channel.send("o cara nn pode apagar msg kkkkkkkkk");
        }

        message.channel.bulkDelete(50, true)
        .then((_message) => {
        message.channel
        // do you want to include the current message here?
        // if not it should be ${_message.size - 1}
        .send(`\`${_message.size}\` mensagens foram apagadas :broom:`)
        .then((sent) => {
          setTimeout(() => {
            sent.delete();
          }, 2500);
        });
    });

             

    }
}