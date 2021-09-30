import { Listener } from "discord-akairo";
import { Interaction } from "discord.js";
import { MyClient } from "../client";
import { client } from "../index"

class HandleButton extends Listener {
    myClient: MyClient

    constructor() {
        super('interactionCreate', {
            event: 'interactionCreate',
            emitter: 'client'
        })
        this.myClient = client
    }

    exec(interaction: Interaction) {
        if (!interaction.isButton()) return;
        if (interaction.guild == null) return;
        if (this.myClient.buttons.indexOf(interaction.customId) === -1) return;

        interaction.reply({
            content: '応答！！！！',
            ephemeral: true
        });
    }
}

module.exports = HandleButton;