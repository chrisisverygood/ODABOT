/*
 * Copyright (c) 2020-2021, Bastian Leicht <mail@bastianleicht.de>
 *
 * PDX-License-Identifier: BSD-2-Clause
 */
const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    if (message.author.bot) return;

    let embed = new Discord.MessageEmbed()
        .setTitle("Need Help?")
        .setColor(7616450)
        .setDescription("**Here is a list of commands.**")
        .addFields(
            {name: 'help', value: 'Lists all the commands available'},
            {name: 'TEST', value: 'TEST'},
            {name: 'TEST', value: 'TEST'},
            {name: 'TEST', value: 'TEST'},
            {name: 'TEST', value: 'TEST'},

        )
        .setFooter(`France Administration : V0.0.1`);
    await message.channel.send(embed);
};

module.exports.help = {
    name: "help"
};








