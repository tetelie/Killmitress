module.exports =
    {
        name: "avatar",
        description: "Show your avatar.",
        execute(message, args)
        {
            if(args == "")
            {
                url = message.author.avatarURL();
            }else {
                const member = message.mentions.members.first()
                if (member) {
                    url = member.user.avatarURL();
                } else {
                    message.channel.send("Can't found this user.")
                    return;
                }
            }
            message.channel.send(url);
        }
    }