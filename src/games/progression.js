import readlineSync from 'readline-sync';
import {getRandomNum} from '../index.js';

const getProgression = (start, step, length) => {
    const progression = [];
    for (let i = 0; i < length; i += 1) {
      const number = start + step * i;
      progression.push(number);
    }
    return progression;
};

const brainProgGame = () => {
	console.log('Welcome to the Brain Games!');
	const userName = readlineSync.question('May I have your name? ');
	console.log(`Hello, ${userName}!`);
	console.log('What number is missing in the progression?');
	for (let i = 0; i < 3; i += 1) {
        const start = getRandomNum(0, 100);
        const length = getRandomNum(5, 10);
        const step = getRandomNum(2, 6);
        const missingItem = getRandomNum(0, length - 1);
        const progression = getProgression(start, step, length);
        const rightAnswer = `${progression[missingItem]}`;
        progression[missingItem] = '..';
        const userAnswer = readlineSync.question(`Question: ${progression}\nYour answer: `);

        if (userAnswer === rightAnswer) {
                console.log('Correct!');
        } else {
                console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`);
                return;
        }
}

console.log(`Congratulations, ${userName}!`);
};

export default brainProgGame;