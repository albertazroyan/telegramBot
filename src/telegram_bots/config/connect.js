
import TelegramBot from 'node-telegram-bot-api'
// replace the value below with the Telegram token you receive from @BotFather
const TOKEN = process.env.TELEGRAM_TO_DO_BOT_TOKEN || '5865075175:AAGBFOvED0VqP39S_7W8KW2sU747bBjnveI'

// Create a new bot instance using the Telegram token and set it to use 'polling' to fetch new updates
export const bot = new TelegramBot(TOKEN, { polling: true })
