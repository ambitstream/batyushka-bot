require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const fs = require('fs');
const path = require('path');
const token = process.env.TOKEN;
const port = process.env.PORT;
const url = process.env.APP_URL
const options = {
  webHook: { port }
};

// Functions
const randomNumber = max => Math.random() * max;
const getPhrase = src => src[Math.floor(randomNumber(source.length - 1))] || '';

let source;
fs.readFile(path.join(__dirname, 'bible.txt'), {encoding: 'utf8'}, (err, data) => {
  if (err) throw err;
	source = data.split('\n');
});

if (token) {
	const bot = new TelegramBot(token, options);

	bot.setWebHook(`${url}/bot${token}`);

	bot.on('message', msg => {
		const { id } = msg.chat;
		let phrase;
		while (true) {
			phrase = getPhrase(source);
			if (!phrase.includes('Псалом')) break;
		}
		bot.sendMessage(id, phrase);
	});
} else {
	console.log('No token provided.');
}
