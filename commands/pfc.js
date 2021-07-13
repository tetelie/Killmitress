module.exports =
    {
        name: "pfc",
        description: "pierre feuille ciseaux",
        execute(message, args)
        {
            possibilités = ["pierre", "feuille", "ciseaux"];
            message.reply("Vous avez: " + args);
            main = possibilités[getRandomInt(3)];
            test = args.toString().toLowerCase();
            if(possibilités.includes(test))
            {
                if(args == main)
                {
                    message.reply(main + " On a eu pareil!");
                }else{
                    win = false;
                    message.reply("J'ai " + main);
                    if(test == "pierre")
                    {
                        if(main != "feuille")
                        {
                            win = true;
                        }
                    }else if(test == "feuille")
                    {
                        if(main != "ciseaux")
                        {
                            win = true
                        }
                    }else{
                        if(main != "pierre")
                        {
                            win = true
                        }
                    }
                    if(win == true)
                    {
                        message.reply("Bravo, Vous avez gagné!")
                    }else{
                        message.reply("Aîe, Vous avez perdu!")
                    }
                }




            }


        }
    }


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}