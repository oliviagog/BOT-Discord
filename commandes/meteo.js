const weather = require ('weather.js');
const discord = require('discord.js');

meteo = (message, client, args) => {
    weather.find({search: args.join(" "), degreeType: 'C'}, function (error, result){
        // 'C' can be changed to 'F' for farneheit results
        if(error) return message.channel.send(error);
        if(!args[0]) return message.channel.send('Il faut rentrer une ville')

        if(result === undefined || result.length === 0) return message.channel.send('Invalid location');

        var current = result[0].current;
        var location = result[0].location;

     
    }
    )}

