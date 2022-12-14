#!/usr/bin/env node

import readlineSync from 'readline-sync';
import {getRandomNum} from '../index.js';

const brainEvenGame = () => {
	console.log('Welcome to the Brain Games!');
	const userName = readlineSync.question('May I have your name? ');
	console.log(`Hello, ${userName}!`);
	console.log('Answer "yes" if the number is even, otherwise answer "no".');
	for (let i = 0; i < 3; i += 1) {
		const randomNum = getRandomNum();
		const question = readlineSync.question(`Question: ${randomNum}\nYour answer: `);

		if ((randomNum % 2 === 0 && question === 'yes') || (randomNum % 2 !== 0 && question === 'no')) {
			console.log('Correct!');
		} else if ((randomNum % 2 === 0 && question === 'no')) {
			console.log(`"no" is wrong answer ;(. Correct answer was "yes".\nLet's try again, ${userName}!`);
			return;
		} else if (randomNum % 2 !== 0 && question === 'yes') {
			console.log(`"yes" is wrong answer ;(. Correct answer was "no".\nLet's try again, ${userName}!`);
			return;
		} else {
			return;
		}
	}

	console.log(`Congratulations, ${userName}!`);
};

export default brainEvenGame;
