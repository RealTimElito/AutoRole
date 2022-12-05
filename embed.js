const Discord = require('discord.js');

module.exports = {
    create(title, color, desc, fields, thumbnail, footer) {
        let embed = new Discord.MessageEmbed();

        embed.setTitle(title);
        embed.setColor(color);
        embed.setDescription(desc);

        if (thumbnail !== null) embed.setThumbnail(thumbnail);

        for (let i = 0; i < fields.length; i++) {
            embed.addField(fields[i].title, fields[i].desc, fields[i].stack);
        }

        if (footer == null) embed.setFooter('|  Created by Tim ELito #0001  |');
        else embed.setFooter(footer, 'https://cdn.discordapp.com/avatars/219541416760705024/ad17ab40b26152e45115693b7ac07f08.png?size=256');

        return embed;
    },
};
