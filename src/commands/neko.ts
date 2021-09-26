import { Command } from "discord-akairo";
import { Message } from "discord.js";

class Neko extends Command {
    constructor() {
        super('neko', {
            channel: 'guild',
            description: 'just say "にゃーん"'
        })
    }

    exec(message: Message) {
        message.channel.send('にゃーん');
    }
}

module.exports = Neko