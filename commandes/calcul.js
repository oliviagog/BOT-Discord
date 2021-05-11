const Discord = require('discord.js');
const {calculator} = require('./function');


    //fonction calcul
    calcul = (message, args) => {

        //Des conditions afin de faire les calculs
        if(!args[0]) return message.channel.send('Il faut rentrer le premier nombre');
        if(!args[1]) return message.channel.send('Il faut mettre le type d operation (+ - / *)');
        if (!args[2]) return message.channel.send('Il faut rentrer le deuxieme nombre');
        //Je fais des console.log afin de voir ce qui rentre comme valeurs
        console.log(args[0]);
        console.log(args[1]);
        console.log(args[2]);

        message.channel.send(calculator(args[0], args[1], args[2]))
    }

    //Exporte la fonction afin de pouvoir l'utiliser et l'appeler dans les autres fichiers
    module.exports ={
        calcul
    }