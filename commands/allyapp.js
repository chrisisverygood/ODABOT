/*
 * Copyright (c) 2020-2021, Bastian Leicht <mail@bastianleicht.de>
 *
 * PDX-License-Identifier: BSD-2-Clause
 */
const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    if (message.author.bot) return;

    let embed = new Discord.MessageEmbed()
        .setTitle("Want to become an Ally?")
        .setColor(7616450)
        .setDescription("To become an allied representitive you must apply")
        .addField('How to Apply?', 'To Apply for an ally request message <@541551772288811009> .')
        .setFooter(`France : V0.0.1`);
        
    await message.channel.send(embed);
};

module.exports.help = {
    name: "allyapp"
};