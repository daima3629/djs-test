import { Command } from "discord-akairo";
import { Message } from "discord.js";

class Neko extends Command {
    constructor() {
        super('neko', {
            description: {
                content: 'just say "にゃーん"'
            }
        })
    }

    async exec(message: Message) {
        message.channel.send('にゃーん');
    }
}

module.exports = Neko;