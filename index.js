let TelegramBot = require('node-telegram-bot-api');

let token = '819347685:AAHd2QJ-P3y6eb9tURKB-gMOVhRPFqtOvrw';
let bot = new TelegramBot(token, {polling: true});

let notes = [];

bot.onText(/\/н/, function (msg, match) {
    let userId = msg.from.id;

    bot.sendMessage(userId, 'Отлично! Я обязательно напомню, если не сдохну :)');
});

