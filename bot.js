const Discord = require('discord.js');

const client = new Discord.Client();
const broadcast = client.createVoiceBroadcast();
process.setMaxListeners(9999);
function makeintoaArray(array) {
    var newarray = [];
    for (i = 0; i < array.length; i++) {
        newarray.push(array[i]);
    }

    return newarray;
}

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
        var splitmessage = message.content.split(" ");
        if (!message.guild) return;
        if (splitmessage[0] === '/r') {
            //r 1d20+5+1d20-5

            var whatToSay = '';
            var calculate = makeintoaArray(splitmessage[1]);
            var totalvalue = 0;
            while (calculate.length != 0) {
                var total = 0;
                var value1 = 0;
                var value2 = 0;
                var whattotest;
                if (true === Number.isInteger(parseInt(calculate[0]))) {
                    while (Number.isInteger(parseInt(calculate[0]))) {

                        value1 += calculate.shift();
                    }

                }

                whattotest = calculate.shift();

                while (Number.isInteger(parseInt(calculate[0]))) {

                    value2 = value2 + calculate.shift();
                }


                if (whattotest == 'd') {


                    total = roll(parseInt(value1), parseInt(value2));
                    totalvalue = totalvalue + total;
                    whatToSay = whatToSay + ' + ' + total;
                }
                if (whattotest == '+') {
                    console.log(calculate[0]);

                    totalvalue = parseInt(totalvalue) + parseInt(value2);

                    whatToSay = whatToSay + ' + ' + parseInt(value2);

                }
                if (whattotest == '-') {
                    totalvalue = totalvalue - parseInt(value2);
                    whatToSay = whatToSay + ' - ' + parseInt(value2);
                }

            }
            var theRest = '';
            for (i = 0; i < splitmessage.length - 2; i++) {
                theRest = theRest + ' ' + splitmessage[i + 2];
            }
            message.reply(whatToSay + ' = ' + totalvalue + ' ' + theRest);
        }

        if (splitmessage[0] === '/StopDogging') {
            Music(message, 'bark', 19);
        }

        if (splitmessage[0] === '/Rammus') {
            Music(message, 'Rammus', 1);
        }

        if (splitmessage[0] === '/JapRammus') {
            Music(message, 'JapRammus', 1);
        }

        if (splitmessage[0] === '/Ok') {
            Music(message, 'Ok', 1);
        }


        if (splitmessage[0] == '/Awoo') {
            Music(message, 'Awoo', 9)
        }

        if (splitmessage[0] == '/AHH') {
            Music(message, 'AHH', 1);
        }

        if (splitmessage[0] == '/Anime') {
            Music(message, 'Anime', 19);
        }
        if (splitmessage[0] == '/Free') {
            Music(message, 'Free', 1);
        }

        if (splitmessage[0] == '/ZaWorld') {
            Music(message, 'ZaWorld', 1);
        }
        if (splitmessage[0] == '/OneTrueDog') {
            Music(message, 'OneTrueDog', 1);
        }
        if (splitmessage[0] == '/Human') {
            Music(message, 'Human', 8);
        }
        if (splitmessage[0] == '/Engrish') {
            Music(message, 'Engrish', 16);
        }
        if (splitmessage[0] == '/Lose') {
            Music(message, 'Lose', 3);
        }
        if (splitmessage[0] == '/Win') {
            Music(message, 'Win', 1);
        }
        if(splitmessage[0] == '/Megumin'){
            Music(message, 'Megumin', 58);
        }
        if(splitmessage[0] == '/Help'){
            Music(message, 'Help', 1);
        }
        if (splitmessage[0] == '/Quack') {
            if (message.member.voiceChannel) {
                message.member.voiceChannel.join()
                    .then(connection => { // Connection is an instance of VoiceConnection
                        var RandomValue = Math.floor(Math.random() * 19)
                        var music = './music/quack/bark7.mp3';
                        broadcast.playFile(music);
                        broadcast.setVolume(.4);
                        const dispatcher = connection.playBroadcast(broadcast);
                        broadcast.on('end', () => {
                            message.member.voiceChannel.leave();
                        })
                        console.log(music)

                    })
            } else {
                message.reply('You need to join a voice channel first!');
            }
        }

        if (splitmessage[0] == '/Smiling') {
            if (message.member.voiceChannel) {
                message.member.voiceChannel.join()
                    .then(connection => { // Connection is an instance of VoiceConnection
                        var RandomValue = Math.floor(Math.random() * 19)
                        var music = './music/Skyrim/bark8.mp3';
                        broadcast.playFile(music);
                        broadcast.setVolume(.4);
                        const dispatcher = connection.playBroadcast(broadcast);
                        broadcast.on('end', () => {
                            message.member.voiceChannel.leave();
                        })
                        console.log(music)

                    })
            } else {
                message.reply('You need to join a voice channel first!');
            }
        }

        function Music(object, Where, value) {
            if (object.member.voiceChannel) {
                object.member.voiceChannel.join()
                    .then(connection => { // Connection is an instance of VoiceConnection
                        var RandomValue = Math.floor(Math.random() * value)
                        var music = './music/' + Where + '/' + Where + '' + RandomValue + '.mp3';
                        broadcast.playFile(music);
                        const dispatcher = connection.playBroadcast(broadcast);
                        broadcast.setVolume(.4);
                        broadcast.on('end', () => {
                            object.member.voiceChannel.leave();
                        })
                        console.log(music)

                    })
            } else {
                message.reply('You need to join a voice channel first!');
            }
        }
        function doggingVoice(object) {
            if (object.member.voiceChannel) {
                object.member.voiceChannel.join()
                    .then(connection => { // Connection is an instance of VoiceConnection
                        var RandomValue = Math.floor(Math.random() * 19)
                        var music = './music/bark/bark' + RandomValue + '.mp3';
                        broadcast.playFile(music);
                        const dispatcher = connection.playBroadcast(broadcast);
                        broadcast.setVolume(.4);
                        broadcast.on('end', () => {
                            object.member.voiceChannel.leave();
                        })
                        console.log(music)
                    })
            } else {
                message.reply('You need to join a voice channel first!');
            }
        }

    }

)


var roll = function (howMany, maxAmount) {
    var total = 0;

    for (i = 0; i < howMany; i++) {
        var value = Math.floor(Math.random() * Math.floor(maxAmount)) + 1;
        total = total + value;

    };
    return total;

}



client.login('');

