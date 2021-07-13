module.exports =
    {
        name: "profile",
        description: "test embed message",
        execute(message, args)
        {

            if(args.length == 0) {

                const exampleEmbed = {
                    color: 0x0099ff,
                    title: message.member.user.tag,
                    author: {
                        name: message.member.user.username,
                        icon_url: message.author.avatarURL(),
                    },
                    description: "ID:" + message.member.user.id,
                    thumbnail: {
                        url: message.author.avatarURL(),
                    },
                    timestamp: new Date(),
                    footer: {
                        text: 'Powered by Killmitress',
                        icon_url: 'https://cdn.discordapp.com/avatars/602939142678118457/a4f196b7180a46c72dc7058742730e54.webp?size=128',
                    },
                };

                message.channel.send({embed: exampleEmbed});

            }else{

                const member = message.mentions.members.first()

                const exampleEmbed = {
                    color: 0x0099ff,
                    title: member.user.tag,
                    author: {
                        name: member.user.username,
                        icon_url: member.user.avatarURL(),
                    },
                    description: "ID:" + member.user.id,
                    thumbnail: {
                        url: member.user.avatarURL(),
                    },
                    timestamp: new Date(),
                    footer: {
                        text: 'Powered by Killmitress',
                        icon_url: 'https://cdn.discordapp.com/avatars/602939142678118457/a4f196b7180a46c72dc7058742730e54.webp?size=128',
                    },
                };

                message.channel.send({embed: exampleEmbed});
            }
        }
    }