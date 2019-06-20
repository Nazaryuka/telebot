const admin = require('firebase-admin');
const serviceAccount = require('./ServiceAccountKey.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
    });
const db = admin.firestore();

let token = '819347685:AAHd2QJ-P3y6eb9tURKB-gMOVhRPFqtOvrw';
const TelegramBot = require('../');
const options = {
    webHook: {
        // Port to which you should bind is assigned to $PORT variable
        // See: https://devcenter.heroku.com/articles/dynos#local-environment-variables
        port: process.env.PORT
        // you do NOT need to set up certificates since Heroku provides
        // the SSL certs already (https://<app-name>.herokuapp.com)
        // Also no need to pass IP because on Heroku you need to bind to 0.0.0.0
    }
};
const url = process.env.APP_URL || 'https:/telebot.herokuapp.com:443';
const bot = new TelegramBot(TOKEN, options);


// This informs the Telegram servers of the new webhook.
// Note: we do not need to pass in the cert, as it already provided
bot.setWebHook(`${url}/bot${TOKEN}`);


// Just to ping!
bot.on('message', function onMessage(msg) {
    bot.sendMessage(msg.chat.id, 'I am alive on Heroku!');
});





//const test = {
//     city: "kiev"
//     };
//
//
//
// bot.onText(/н/, function (msg, match) {
//     let userId = msg.from.id;
//     //db.collection('bot').doc(userId).update(test);
//     console.log('new writen');
//     bot.sendMessage(userId, 'Отлично! Я обязательно напомню, если не сдохну :)');
// });

