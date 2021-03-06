import { Command } from "discord-akairo";
import { Message, MessageActionRow, MessageButton } from "discord.js";
import { MyClient } from "../client"
import { client } from "../index" 

class Neko extends Command {
    client: MyClient

    constructor() {
        super('neko', {
            aliases: ['neko'],
            description: {
                content: 'just say "にゃーん"'
            }
        })

        this.client = client;
    }

    async exec(message: Message) {
        let button = new MessageButton()
            .setLabel('認証')
            .setStyle(1)
            .setCustomId(message.guild?.id as string)
        this.client.buttons.push(button.customId as string);
        message.channel.send({
            content: 'にゃーん',
            components: [new MessageActionRow({
                components: [button]
            })]
        });
    }
}

module.exports = Neko;