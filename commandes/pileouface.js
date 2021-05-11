const Discord = require('discord.js');

    //Fonction pileouface
    pileouface = (message) => {
        message.reply("Le bot va choisir entre pile ou face")
        console.log("Tu as choisi la commande pileouface, le bot va repondre pile ou face")
        //Le bot va chercher dans le tableau un nombre
        let tableau = [
            "pile","face"
        ]
        let pileface = Math.floor(Math.random()*(tableau.length))
        //Le bot va renvoyer pile ou face
        message.channel.send(tableau[pileface])
    }

    //Exporte la fonction afin de pouvoir l'utiliser et l'appeler dans les autres fichiers
    module.exports ={
        pileouface
    }