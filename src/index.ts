import { MyClient } from "./client"
import { config } from "dotenv";

config();

export const client = new MyClient();

client.login(process.env.DISCORD_TOKEN)