const {Telegraf} = require("telegraf");
const TOKEN = '6412145426:AAGDk5GMUElRc1s_kmEAvXI9FX4wEAGNeds'
const bot = new Telegraf(TOKEN);

const web_link ="https://steady-moxie-3c7c65.netlify.app"
bot.start((ctx) =>
  ctx.reply("Welcome :)))))", {
    reply_markup: {
      keyboard: [[{ text: "web app", web_app: { url: web_link } }]],
    },
  })
);

bot.launch();