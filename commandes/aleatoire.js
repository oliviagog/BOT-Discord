const Discord = require('discord.js');

  //Fonction aleatoire
  aleatoire = (message) => {
    //Utilse Math.random pour avoir un résultat aléatoire
    var alea = Math.floor((Math.random() * 100) + 1)
    message.reply("Le nombre aleatoire est " + alea)
  }

    //Exporte la fonction afin de pouvoir l'utiliser et l'appeler dans les autres fichiers
    module.exports ={
        aleatoire
    }
