import readlineSync from 'readline-sync';
import {getRandomNum} from '../index.js';

const brainPrimeGame = () => {
	console.log('Welcome to the Brain Games!');
	const userName = readlineSync.question('May I have your name? ');
	console.log(`Hello, ${userName}!`);
	console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
	for (let i = 0; i < 3; i += 1) {
		const randomNum = getRandomNum(2, 11);
		const userAnswer = readlineSync.question(`Question: ${randomNum}\nYour answer: `);
        const isPrime = (randomNum) => {
            for (let i = 2; i <= randomNum / 2; i +=1) {
                if (randomNum % i === 0) {
                    return false;
                }
            }

            return true;
        };

        const rightAnswer = (isPrime(randomNum) ? 'yes' : 'no');

		if (userAnswer === rightAnswer) {
            console.log('Correct!');
        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`);
            return;
        }
	}

    console.log(`Congratulations, ${userName}!`);
};

export default brainPrimeGame;