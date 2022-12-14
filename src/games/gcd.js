import readlineSync from 'readline-sync';
import {getRandomNum} from '../index.js';

const getGcd = (x, y) => {
	if (x % y === 0) {
		return y;
	}

	return getGcd(y, x % y);
};

const brainGcdGame = () => {
        console.log('Welcome to the Brain Games!');
        const userName = readlineSync.question('May I have your name? ');
        console.log(`Hello, ${userName}!`);
        console.log('Find the greatest common divisor of given numbers.');
        for (let i = 0; i < 3; i += 1) {
                const firstRandomNum = getRandomNum(0, 10);
                const secondRandomNum = getRandomNum(0, 10);
                const userAnswer = readlineSync.question(`Question: ${firstRandomNum} ${secondRandomNum}\nYour answer: `);
                const rightAnswer = `${getGcd(firstRandomNum, secondRandomNum)}`;

                if (userAnswer === rightAnswer) {
                        console.log('Correct!');
                } else {
                        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`);
                        return;
                }
        };

        console.log(`Congratulations, ${userName}!`);
};

export default brainGcdGame;
