const Discord = require('discord.js');
const client = new Discord.Client();
const config = require ('./config');
const {ping} = require ('./commandes/ping');
const {pileouface} = require('./commandes/pileouface');
const { aleatoire } = require('./commandes/aleatoire');
const{calcul} = require('./commandes/calcul');
const{help} = require('./commandes/help');



//Prefix a mettre avant une commande
const prefix = '!';

client.on("ready", () => {
  //Message dans la console lorsque l on lance l api sur discord
    console.log("Bienvenue sur le bot");
});

//Le BOT envoie un message dans un interval donné
setInterval(function(){
     var temps = client.channels.cache.get("833720643010822154"); //Selectionne dans quel channel le message doit être envoyé
     temps.send("⚠️ Pour avoir des informations sur les commandes du BOT entrer `!help` 👍");
     console.log("La commande est envoyé sur discord");
},50000);


client.on('message', message => {
  // Si message d un bot l api s arrete
    if(message.author.bot) return;
    
    //Si le message commence par le prefix ! 
     if(message.content.startsWith(prefix)) {
        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const command = args.shift().toLocaleLowerCase();

        //Si l utilisateur utilise la commande ping
        if(command == "ping"){
            ping(message);
        }

        //Si l utilisateur utilise la commande pileouface
        if(command == "pileouface"){
            pileouface(message);
        }

        //Si l utilisateur utilise la commande aleatoire
        if(command == "aleatoire"){
            aleatoire(message);
        }

        //Si l utilisateur utilise la commande meteo
        if(command == "meteo"){
            meteo(message);
        }

        //Si l utilisateur utilise la commande calcul
        if(command == "calcul"){
            calcul(message, args);
        }

        //Si l utilisateur utilise la commande help
        if(command == "help"){
            help(message); 
        }

        

        
   



     }});

//Va chercher la cle token dans le fichier config.json
client.login(config.token);