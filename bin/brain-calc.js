#!/usr/bin/env node

import readlineSync from 'readline-sync';

const getSum = (firstRandomNum, secondRandomNum, randomSign) => {
	switch (randomSign) {
		case '+':
			return firstRandomNum + secondRandomNum;
		case '-':
			return firstRandomNum - secondRandomNum;
		case '*':
			return firstRandomNum * secondRandomNum;
	}
};

const brainCalcGame = () => {
        console.log('Welcome to the Brain Games!');
        const userName = readlineSync.question('May I have your name? ');
        console.log(`Hello, ${userName}!`);
        console.log('What is the result of the expression?');
        for (let i = 0; i < 3; i += 1) {
                const firstRandomNum = Math.floor(Math.random() * 20);
                const secondRandomNum = Math.floor(Math.random() * 20);
		const signsArray = ['+', '-', '*'];
		const randomSign = signsArray[Math.floor(Math.random() * signsArray.length)];
		const userAnswer = readlineSync.question(`Question: ${firstRandomNum} ${randomSign} ${secondRandomNum}\nYour answer: `);
		const rightAnswer = `${getSum(firstRandomNum, secondRandomNum, randomSign)}`;

                if (userAnswer === rightAnswer) {
                        console.log('Correct!');
                } else {
                        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`);
                        return;
                }
        };

        console.log(`Congratulations, ${userName}!`);
};

brainCalcGame();
