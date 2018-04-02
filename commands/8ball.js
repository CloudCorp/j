const Discord = require('discord.js');
const fs = require('fs');
let ansnum;

module.exports.run = async (bot, message, args) => {



    //if(!ansnum) {
    //    ansnum = 0;
    //}

    if(message == `8ball`) {
        message.channel.send('No arguments found. Please ask a question.');
        return;
    }

    let number = fs.readFileSync('8ball.txt', 'utf8');

    let ansnum = parseInt(number);

    let newNumber = ansnum + 1

    fs.writeFileSync('8ball.txt', `${newNumber}`, 'utf8')


    //ansnum = ansnum + 1

    let rnumber = Math.floor(Math.random() * 7 );

    let responses = ["Yes.", "No.", "Probably.", "Maybe.", "Definitely not.", "Ask again.", "That's a stupid question."];

    let embed = new Discord.RichEmbed()
        .setAuthor(`Question asked by ${message.author.tag}`)
        .setDescription(`Question: ${args.join(" ")}`)
        .setColor("#0a0b0c")
        .addField("Response", responses[rnumber])
        .setFooter(`Total questions answered: ${newNumber}`)
        .setThumbnail(message.author.avatarURL);

    message.channel.send({embed: embed});

}

module.exports.help = {
    name: "8ball"
}