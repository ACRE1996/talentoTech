import {config} from "dotenv"
import env from "env-var"

config()

const PORT = env.get("PORT").asPortNumber()
const DB_PASSWORD = env.get("DB_PASSWORD").required().asPortNumber()

console.log(PORT)
console.log(DB_PASSWORD)