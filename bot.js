const TelegramBot = require("node-telegram-bot-api");
const TOKEN = "5770186868:AAEjm2M6UUBziafhm5_IiAQj2fwD_WsmHt4";
const translate = require("@vitalets/google-translate-api");
// require("dotenv").config();

const bot = new TelegramBot(TOKEN, { polling: true });

bot.on("message", (msg) => {
  const chatId = msg.chat.id;

  if (msg.text == "/start") {   
    const user = msg.from.first_name
    bot.sendMessage(chatId, `Assalom alaykum, <b>${user}</b> Tarjimon botimizga xush kelibsiz!`, { parse_mode: 'HTML' });
    bot.sendMessage(chatId, `Bu bot sizga istalgan tildan o'zbek tiliga o'girishga yordam beradi.`);
    state = 1;
  } else if (state == 1) {
    let text = msg.text
    async function toTranslate() {
      let response = await translate(text, {
        from: "uz",
        to: "ru",
      });

      await bot.sendMessage(chatId, response.text);
    }
    toTranslate();
  }
});    
