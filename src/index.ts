import { MyClient } from "./client"
import { config } from "dotenv";

config();

const client = new MyClient();

module.exports.myclient = client

client.login(process.env.DISCORD_TOKEN)