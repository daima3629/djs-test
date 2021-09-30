import { Listener } from "discord-akairo";
import { Interaction } from "discord.js";
import { myclient } from "../index"

class HandleButton extends Listener {
    constructor() {
        super('interactionCreate', {
            event: 'interactionCreate',
            emitter: 'client'
        })
    }

    exec(interaction: Interaction) {
        if (!interaction.isButton()) return;
        if (interaction.guild == null) return;
        if ()
    }
}

module.exports = HandleButton;