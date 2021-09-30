import { AkairoClient, CommandHandler, ListenerHandler } from "discord-akairo";
import { Intents, Snowflake } from "discord.js";
import { join } from "path"

export class MyClient extends AkairoClient {
    commandHandler: CommandHandler;
    listenerHandler: ListenerHandler;
    buttons: Array<Snowflake>;

    constructor() {
        super(
            {
                ownerID: '570243143958528010'
            },
            {
                intents: [ Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES ]
            }
        );

        this.commandHandler = new CommandHandler(this, {
            prefix: '!!',
            commandUtil: true,
            directory: join(__dirname, 'commands')
        })

        this.listenerHandler = new ListenerHandler(this, {
            directory: join(__dirname, 'listeners')
        })

        this.commandHandler.useListenerHandler(this.listenerHandler)
        this.listenerHandler.loadAll()
        this.commandHandler.loadAll()

        this.buttons = new Array()
    }
}