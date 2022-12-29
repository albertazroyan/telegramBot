import TelegramBot from 'node-telegram-bot-api'
// replace the value below with the Telegram token you receive from @BotFather
const TOKEN = process.env.TELEGRAM_TO_DO_BOT_TOKEN || '5865075175:AAGBFOvED0VqP39S_7W8KW2sU747bBjnveI'

// Create a bot that uses 'polling' to fetch new updates
export const bot = new TelegramBot(TOKEN, { polling: true })
