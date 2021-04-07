module.exports = {
    name: 'ping',
    description: "commande Ping",
    execute(message, args){
        message.channel.send('Pong!');
    }
}