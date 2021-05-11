const Discord = require('discord.js');

    //Fonction ping
    ping = (message) => {
        //Le Bot répond pong
        message.channel.send("pong 🏓");
        console.log("Lancement de la commande ping")
    }

    //Exporte la fonction afin de pouvoir l'utiliser et l'appeler dans les autres fichiers
    module.exports ={
        ping
    }
