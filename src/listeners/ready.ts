import { Listener } from "discord-akairo";

class Ready extends Listener {
    constructor() {
        super('ready', {
            event: 'ready',
            emitter: 'client'
        });
    }

    exec() {
        console.log(`Logged in as ${this.client.user?.tag}`);
    }
}

module.exports = Ready;