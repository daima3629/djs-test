import { Command } from "discord-akairo";
import { Message, MessageActionRow, MessageButton } from "discord.js";

class Neko extends Command {
    constructor() {
        super('neko', {
            aliases: ['neko'],
            description: {
                content: 'just say "にゃーん"'
            }
        })
    }

    async exec(message: Message) {
        let button = new MessageButton()
            .setLabel('認証')
            .setStyle(1)
            .setCustomId(message.guild?.id as string)
        message.channel.send({
            content: 'にゃーん',
            components: [new MessageActionRow({
                components: [button]
            })]
        });
    }
}

module.exports = Neko;