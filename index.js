const Discord = require ("discord.js");

const token = "NDM3NjM0MTA1NjU2NzM3Nzkz.Db5Bhw.W24O-r3H2HbflNzfRp6Mv_8BEzM";
const prefix = "sb!";

var fortunes = [
    "Yes",
	"No",
	"Maybe",
	"I don't know"
];

var bot = new Discord.Client();

bot.on("ready", function () {
	bot.user.setPresence({ game: { name: 'sb!help | 2 servers | HackerLand Rewritten', type: 3 } });
	console.log("Ready");
});

bot.on("message", function(message) {
	if(message.author.equals(bot.user)) return;
	
	if(!message.content.startsWith(prefix)) return;
	
	var args = message.content.substring(prefix.length).split(" ");
	
	switch (args[0].toLowerCase()) {
	    case "ping":
		    message.channel.sendMessage("Pong!");
			break;
		case "invite":
		    message.author.sendMessage("https://discordapp.com/oauth2/authorize?client_id=437634105656737793&permissions=8271666176&scope=bot")
			break;
		case "8ball":
		    if (args[1]) message.channel.sendMessage(fortunes[Math.floor(Math.random() * fortunes.length)]);
			else message.channel.sendMessage("I can't read that");
			break;
		case "help":
		   var embed = new Discord.RichEmbed()
		       .setTitle("Welcome to StarBot help page!")
		       .addField("Version", "beta")
			   .addField("General Commands:", "ping, invite, serverinfo", true)
			   .addField("Mini-Games:", "8ball", true)
			   .addField("Prefix:", "`sb!`", true)
			   .setColor(0x3498db)
			   .setFooter("StarBot is here!")
		   message.author.sendEmbed(embed);
		   break;
		case "serverinfo":
			var embed = new Discord.RichEmbed()
			   .addField("Members:", message.guild.memberCount, true)
			   .addField("Name:", message.guild.name, true)
			   .addField("Region:", message.guild.region, true)
			   .addField("Owner", message.guild.owner, true)cker
			   .addField("ID:", message.guild.id, true)
			   .setColor("ff0000")
			   .setThumbnail(message.guild.iconURL)
			message.channel.sendEmbed(embed);
			break;
        default:
		    message.channel.sendMessage("Your command wasn't found :neutral_face:");
	}
});

bot.login(token);
