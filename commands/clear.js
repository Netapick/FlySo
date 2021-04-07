module.exports = {
    name: 'clear',
    permissions: ["ADMINISTRATOR", "MANAGE_MESSAGES", "CONNECT"],
    description: "Suppression de messages",

    async execute(message, args) {

        /* //Autorisation role Officier (/!\ changer le has ! /!\)
        //530756545680506900 offi      631068644830478356 SM
        if(message.member.roles.cache.has('530756545680506900')){
           
        } else {
            message.channel.send('Accès interdit !').catch(console.error);
        } */

        if(!args[0]) return message.reply("Précisez le nombre de message à supprimer ! ex: **clear 10*");
        if(isNaN(args[0])) return message.reply("Précisez le nombre de message à supprimer !");

        //Messages d'erreurs
        if(args[0] > 100) return message.reply("Impossible de supprimer plus de 100 messages !");
        if(args[0] < 2) return message.reply("Impossible de supprimer moins de 2 messages !");
        //Suppression messages
        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
        });
        
        
        
        }
}