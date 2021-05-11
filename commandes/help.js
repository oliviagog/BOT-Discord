const Discord = require('discord.js');

    //Fonction qui permet de donner toutes les commandes à faire
    help = (message) => {

        message.channel.send({embed:{
            color:3447003,
            author:message.author.usernale,  
            title:"Voici toutes les commandes possibles avec ce bot:",
            fields:[
                {
                    name:'`!ping`',
                    value:"Le BOT répond pong lors de cette commande"
                },
                {
                    name:'`!aleatoire`',
                    value:"Le BOT répond un nombre aléatoire entre 1 et 100"
                },
                {
                    name:'`!pileouface`',
                    value:"Le BOT répond soit pile soit face, que la chance soit avec vous !"
                },
                {
                    name:'`!calcul`',
                    value:"Le BOT répond un résultat selon le calcul de l'utilisateur. \n L'utilisateur peut faire une addition `+`,\n L'utilisateur peut faire une soustraction  `-`, \nL'utilisateur peut faire une multiplication  `*`,\n L'utilisateur peut faire une division  `/` \n ⚠️Il faut mettre un espace entre chaque valeur."
                }
            ]   
        }})
   
    }

    //Exporte la fonction afin de pouvoir l'utiliser et l'appeler dans les autres fichiers
    module.exports ={
        help
    }