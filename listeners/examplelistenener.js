
const { Listener } = require('discord-akairo');
const { dbFind } = require('../db')
const userSchema = require('../schemas/data-schema')
class MessageListener extends Listener {
    constructor() {
        super('message', {
            emitter: 'client',
            event: 'guildMemberAdd',
            category: 'client'
        });
    }

    exec(msg) {
        const guildMEMBER = msg.guild.member(msg.user.id)
        return dbFind(guildMEMBER.id, 'some text', 'muted', userSchema, 'sustainmute', guildMEMBER, msg)
        guildMEMBER.roles.add('772706883508633601')
        //msg.guild.mgs.user.id()
        //msg.user.roles.add('772706883508633601')
        console.log('GUILD ' + msg.guild)
        console.log('USERID ' + msg.user.id)
    }
}

module.exports = MessageListener;