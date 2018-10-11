const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "+";

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    console.log('')
    console.log('')
    console.log('╔[════════════════════════════════════════════════════════════════]╗')
    console.log(`[Start] ${new Date()}`);
    console.log('╚[═════════════════════════════════════════════════════════════════]╝')
    console.log('')
    console.log('╔[════════════════════════════════════]╗');
    console.log(`Logged i as * [ " ${client.user.username} " ]`);
    console.log('')
    console.log('Informatins :')
    console.log('')
    console.log(`servers! [ " ${client.guilds.size} " ]`);
    console.log(`Users! [ " ${client.users.size} " ]`);
    console.log(`channels! [ " ${client.channels.size} " ]`);
    console.log('╚[════════════════════════════════════]╝')
    console.log('')
    console.log('╔[════════════]╗')
    console.log(' Bot Is Online')
    console.log('╚[════════════]╝')
    console.log('')
    console.log('')
  });

  client.on('message', message => {
    if(message.content.startsWith(prefix + 'id')) {
    var year = message.author.createdAt.getFullYear()
    var month = message.author.createdAt.getMonth()
    var day = message.author.createdAt.getDate()
    let args = message.content.split(' ').slice(1).join(' ');
    if (args == '') {
    var z = message.author;
    }else {
    var z = message.mentions.users.first();
    }
    
    let d = z.createdAt;
    let n = d.toLocaleString();
    let x;
    let y;
    
    if (z.presence.game !== null) {
    y = `${z.presence.game.name}`;
    } else {
    y = "Not Playing... |💤.";
    }
    if (z.bot) {
    var w = 'Bot';
    }else {
    var w = 'Person';
    }
   let embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .addField('**🔱| Name:**',`**<@` + `${z.id}` + `>**`, true)
    .addField('**📠 | ID:**:', "**"+ `${z.id}` +"**",true)
    .addField('**🎮 | Game:**','**'+y+'**' , true)
    .addField('**🤖| Type:**',"**"+ w + "**",true)
    .addField('**📛| Tag:**',"**#" +  `${z.discriminator}**`,true)
    .addField('**📆| Joined discord at:** ' ,year + "-"+ month +"-"+ day)
    .addField("**⌚| Joined server at:**", message.member.joinedAt.toLocaleString())
    .setThumbnail(`${z.avatarURL}`)
    .setFooter(message.author.username, message.author.avatarURL)
    
    message.channel.send({embed});
    
    }
    
});

client.on('message', message => {
    if(message.content.startsWith(prefix + 'bc')) {
      if(!message.member.hasPermissions('ADMINISTRATOR')) return;
    let args = message.content.split(' ').slice(1).join(' ');
    message.channel.send(`**:ballot_box_with_check: Sent.**`).then(m => m.delete(5000));
    message.guild.members.forEach(m => {
    m.send(`${args}\n${m}`);
    if(message.attachments.first()){
   m.sendFile(message.attachments.first().url).catch();
    }
    message.delete();
    })
    }
});


client.on('message', message => {
    if(message.channel.type === 'dm') return;
    let vanieeeeet = '+';
    if(message.content.startsWith(vanieeeeet + 'clear')) {
        if(message.member.hasPermission("MANAGE_MESSAGES")) {
            let embed = new Discord.RichEmbed()
                .setTitle("**Clear operation.**")
                .setDescription("**Cancel. ❎\nClear Chat.✅**")
                .setColor("RANDOM");
                message.channel.sendEmbed(embed)
                .then(msg => {
                    msg.react('✅')
                    msg.react('❎')
 
 
                            let canceloperation = (reacting, man) => reacting.emoji.name === '❎' && man.id === message.author.id;
                            let doOperation = (reacting, man) => reacting.emoji.name === '✅' && man.id === message.author.id;
 
 
                            let cleard = msg.createReactionCollector(doOperation, { time: 10000 });
                            let canceled = msg.createReactionCollector(canceloperation, { time: 10000 });
 
                canceled.on('collect', v => {
                    msg.delete()
                    .then(message.channel.send('**Operation has been canceled successfully. ✅**'))
                        .then(m => {
                            m.delete(5000);
                        });
                });
 
                cleard.on('collect', v => {
                    message.channel.fetchMessages()
                        .then(sce => {
                            message.channel.bulkDelete(sce)
                                .then(message.channel.send('**Chat has been successfully cleard. :white_check_mark:**'))
                                    .then(art => {
                                        art.delete(5000);
                                    });
                        });
                });
                   
                })
        } else {
            return;
        }
    }
});



client.on('message', msg => {
    if(msg.content.startsWith (prefix + 'server')) {
      if(!msg.channel.guild) return;
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .addField(':globe_with_meridians: **Name : **' , `**[ ${msg.guild.name} ]**`,true)
      .addField(':earth_africa: ** Region:**',`**[ ${msg.guild.region} ]**`,true)
      .addField(':military_medal:** Roles :**',`**[ ${msg.guild.roles.size} ]**`,true)
      .addField(':bust_in_silhouette:** Members :**',`**[ ${msg.guild.memberCount} ]**`,true)
      .addField(':white_check_mark:** Online :**',`**[ ${msg.guild.members.filter(m=>m.presence.status == 'online').size} ]**`,true)
      .addField(':pencil:** TextChannels :**',`**[ ${msg.guild.channels.filter(m => m.type === 'text').size} ]**`,true)
      .addField(':loud_sound:** VoiceChannels :**',`**[ ${msg.guild.channels.filter(m => m.type === 'voice').size} ]**`,true)
      .addField(':crown:** Owner :**',`**[ ${msg.guild.owner} ]**`,true)
      .addField(':id:** ID :**',`**[ ${msg.guild.id} ]**`,true)
      .addField(':date:** Created At : **',msg.guild.createdAt.toLocaleString())
      .addField(':sleeping:**AFKChannel :**',`**${msg.guild.afkChannel || 'None'}**`, true)
      .addField(':upside_down:** Emojis :**', `**${msg.guild.emojis.size}** \`[\` **${msg.guild.emojis.map(m => m).join('**|**')} \`]\`**`, true);
      msg.channel.send({embed:embed});
    }
  });

client.on('message', message => {
      if (message.author.omar) return;
      if (!message.content.startsWith(prefix)) return;
      var command = message.content.split(" ")[0];
      command = command.slice(prefix.length);
      var args = message.content.split(" ").slice(1);
      if (command == "ban") {
       if(!message.channel.guild) return message.reply('** This command only for servers**');
      if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**لايوجد لديك ` BAN_MEMBERS ` صلاحية**");
    if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**ليس لدي صلاحيات لتبنيد العضو **");
    var user = message.mentions.users.first();
      var reason = message.content.split(" ").slice(2).join(" ");
      if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
      if(!reason) return message.reply ("**اكتب سبب الطرد**");
      if (!message.guild.member(user).banable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");
      const banembed = new Discord.RichEmbed()
      .setAuthor(`BAN!`, user.displayAvatarURL)
      .setColor("RANDOM")
      .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
      .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
      .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
      user.send(reason).then(()=>{
    message.guild.member(user).kick();
      })
    }
    });

    client.on('message', async message => {
        let args = message.content.split(" ");
        if(message.content.startsWith("+mute")) {
          if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send('').then(msg => {
            msg.delete(3500);
            message.delete(3500);
          });
       
          if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return message.channel.send('').then(msg => {
            msg.delete(3500);
            message.delete(3500);
          });
       
          let mention = message.mentions.members.first();//kinggamer حقوق الفا كودز و
          if(!mention) return  message.channel.send('').then(msg => { //kinggamer حقوق الفا كودز و
            msg.delete(3500);
            message.delete(3500);
          });
       
          if(mention.id === message.author.id) return message.channel.send('**:x:You Cannot give mute to your self**').then(msg => {
            msg.delete(3500);
            message.delete(3500); //kinggamer حقوق الفا كودز و
          });
         
          if(mention.hasPermission('ADMINISTRATOR')) return message.channel.send(`**:x: لا يمكن آعطاء ميوت لادارة السيرفر**`); //kinggamer حقوق الفا كودز و
       
          if(message.guild.member(mention).roles.find('name', 'Muted')) return message.channel.send(`**:information_source: ${mention.user.username} Already Muted**`);
       
         
          if(mention.position >= message.guild.member(message.author).positon) return message.channel.send('You Donot Have Permission **Muted_Members** ').then(msg => {
            msg.delete(3500);
            message.delete(3500);
          });
         
          if(mention.positon >= message.guild.member(client.user).positon) return message.channel.send('I Donot Have Permission **Muted_Members**').then(msg => {
            msg.delete(3500);
            message.delete(3500); //kinggamer حقوق الفا كودز و
          });
         
          let duration = args[2];
          if(!duration) message.channel.send(`**:hash: You Can Use ${prefix}mute @user Time Reason**`).then(msg => {
            msg.delete(3500);
            message.delete(3500);
          });
       
          if(isNaN(duration))  message.channel.send('').then(msg => {
            msg.delete(3500);
            message.delete(3500);
          });
       
          let reason = message.content.split(" ").slice(3).join(" ");
          if(!reason) reason = " [ **لم يذكر لماذا** ] ";
       
          let thisEmbed = new Discord.RichEmbed()
          .setAuthor(mention.user.username, mention.user.avatarURL)
          .setTitle('**تم آعطائك ميوت**')
          .addField('**__السيرفر__**',[ message.guild.name ]) //kinggamer حقوق الفا كودز و
          .addField('**__تم آعطائك ميوت بواسطة__**', [ message.author ])
          .addField('**__آلسبب__**',reason)
          .addField('**__وقت الميوت__**',duration)
       
          let role = message.guild.roles.find('name', 'Muted') || message.guild.roles.get(r => r.name === 'Muted');
          if(!role) try {
            message.guild.createRole({
              name: "Muted",
              permissions: 0 //kinggamer حقوق الفا كودز و
            }).then(r => {
              message.guild.channels.forEach(c => {
                c.overwritePermissions(r , {
                  SEND_MESSAGES: false, //kinggamer حقوق الفا كودز و
                  READ_MESSAGES_HISTORY: false,
                  ADD_REACTIONS: false
                });
              });
            }); //kinggamer حقوق الفا كودز و
          } catch(e) {
            console.log(e.stack);
          }
          mention.addRole(role).then(() => {
            mention.send(thisEmbed);
            message.channel.send(`**:white_check_mark: ${mention.user.username}  Muted! :zipper_mouth:  **  `);
            mention.setMute(true); //kinggamer حقوق الفا كودز و
          });
          setTimeout(() => {
            if(duration === 0) return;
            mention.setMute(false);
            mention.removeRole(role)
          },duration * 60000); //kinggamer حقوق الفا كودز و
        }
      });
      client.on('message', async message => {
          let mention = message.mentions.members.first();
      let command = message.content.split(" ")[0];
           command = command.slice(prefix.length);
          let args = message.content.split(" ").slice(1);  //kinggamer حقوق الفا كودز و
      if(command === `unmute`) {2
        if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.sendMessage("**You Donot HavePermission Mute_Members**").then(m => m.delete(5000));
      if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return message.reply("**I donot Have Permission Mute_Members**").then(msg => msg.delete(6000))
       
        let kinggamer = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
           if(!kinggamer) return message.channel.send('').then(msg => {
            msg.delete(3500);
            message.delete(3500); //kinggamer حقوق الفا كودز و
          });
       
        let role = message.guild.roles.find (r => r.name === "Muted");
       
        if(!role || !kinggamer.roles.has(role.id)) return message.channel.sendMessage(`**:information_source:${mention.user.username} لقد تم فك الميوت عنه مسبقا**`)
       
        await kinggamer.removeRole(role) //kinggamer حقوق الفا كودز و
        message.channel.sendMessage(`**:white_check_mark: ${mention.user.username}  Unmuted! **`);
       
        return;
       
        }
       
      });

      client.on("ready", () => {
        var guild;
        while (!guild)
            guild = client.guilds.get("494804224740425728");
        guild.fetchInvites().then((data) => {
            data.forEach((Invite, key, map) => {
                var Inv = Invite.code;
                dat[Inv] = Invite.uses;
            });
        });
    });
     
     
     
    client.on("guildMemberAdd", (member) => {
        let channel = member.guild.channels.get("494804224740425730");
        if (!channel) {
            console.log("!the channel id it's not correct");
            return;
        }
        if (member.id == client.user.id) {
            return;
        }
        console.log('-');
        var guild;
        while (!guild)
            guild = client.guilds.get("494804224740425728");
        guild.fetchInvites().then((data) => {
            data.forEach((Invite, key, map) => {
                var Inv = Invite.code;
                if (dat[Inv])
                    if (dat[Inv] < Invite.uses) {
     channel.send(`**${member},\n لقد تم دعوته بواسطهه .. [ ${invite.inviter} ] 🥂.**`) ;        
     }
                dat[Inv] = Invite.uses;
           
           });
        });
    });

    client.on('message', message => {
        if (message.author.id === client.user.id) return;
                if (message.content.startsWith(prefix + "ping")) {
            message.channel.sendMessage(':ping_pong: Pong! In `' + `${client.ping}` + ' ms`');
        }
    });

    client.on('message', message => {
        if (!message.content.startsWith(prefix)) return;
        var args = message.content.split(' ').slice(1);
        var argresult = args.join(' ');
        if (message.author.id !== "331372785068802049") return;
    
    
        if (message.content.startsWith(prefix + 'setwatch')) {
        client.user.setActivity(argresult, {type: 'WATCHING'})
           console.log('test' + argresult);
          message.channel.sendMessage(`Watching Now: **${argresult}**`)
      }
    
    
        if (message.content.startsWith(prefix + 'setlis')) {
        client.user.setActivity(argresult, {type: 'LISTENING'})
           console.log('test' + argresult);
          message.channel.sendMessage(`LISTENING Now: **${argresult}**`)
      }
    
    
      if (message.content.startsWith(prefix + 'setname')) {
        client.user.setUsername(argresult).then
            message.channel.sendMessage(`Username Changed To **${argresult}**`)
        return message.reply(".");
      }
    
      if (message.content.startsWith(prefix + 'setavatar')) {
        client.user.setAvatar(argresult);
         message.channel.sendMessage(`Avatar Changed Successfully To **${argresult}**`);
      }
    
      if (message.content.startsWith(prefix + 'setstream')) {
        client.user.setGame(argresult, "https://www.twitch.tv/9ivv");
           console.log('test' + argresult);
          message.channel.sendMessage(`Streaming: **${argresult}**`)
      }
      if (message.content.startsWith(prefix + 'setplay')) {
        client.user.setGame(argresult);
           console.log('test' + argresult);
          message.channel.sendMessage(`Playing: **${argresult}**`)
      }
    
     });

    client.on('message', message => {
        if (message.content.startsWith(prefix + "help")) {
 let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('     **bc** ' ,' **رسالة لكل الاعضآء** ')
.addField('     **ping** ' ,' ** سرعة اتصال البوت**')
.addField('     **clear ** ' ,' ** لمسح الشات ** ')
.addField('     **ban** ' ,' **تبنيد العضو** ')
.addField('     **mute** ' ,' **عمل ميوت كتابي للعضو** ')
.addField('     **unmute** ' ,' **فك الميوت عن العضو** ')
.setColor('#7d2dbe');
message.author.sendEmbed(embed) .then(
    message.channel.send('**Sent, Check Your DM. :white_check_mark:**')
)
}
});


client.login(process.env.BOT_TOKEN);
