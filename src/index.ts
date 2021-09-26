import { AkairoClient, CommandHandler, ListenerHandler } from "discord-akairo";
import { Intents } from "discord.js";
import { config } from "dotenv";
import { join } from "path"

config();

class MyClient extends AkairoClient {
    commandHandler: CommandHandler;
    listenerHandler: ListenerHandler;

    constructor() {
        super(
            {
                ownerID: '214679214698',
                intents: [ Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES ],
            }
        );

        this.commandHandler = new CommandHandler(this, {
            prefix: ['.'],
            blockBots: true,
            blockClient: true,
            allowMention: true,
            defaultCooldown: 500,
            commandUtil: true,
            directory: join(__dirname, 'commands')
        })

        this.listenerHandler = new ListenerHandler(this, {
            directory: join(__dirname, 'listeners')
        })

        this.commandHandler.useListenerHandler(this.listenerHandler)
        this.listenerHandler.loadAll()
        this.commandHandler.loadAll()
    }
}

const client = new MyClient();

client.login(process.env.DISCORD_TOKEN)