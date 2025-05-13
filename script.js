'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 Correct Number!';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.number').textContent = 13; // não se pode atribuir um elemento inteiro sozinho, porque tal elemento possui muito mais que só o content. por isso o ".textContent" (sem ele dá erro)
// document.querySelector('.score').textContent = 10;
// console.log(document.querySelector('.guess').value); // retorna "<empty string>" por enquanto
// document.querySelector('.guess').value = 2; // põe um valor padrão

const secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
    const guess = +document.querySelector('.guess').value;
    console.log(guess, typeof guess);
    if (!guess) {
        document.querySelector('.message').textContent = 'No number';
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'Correct number';
    } else if (guess > secretNumber) {
        if (score > 0) {
            document.querySelector('.message').textContent = 'Too high';
            score--; // score = score - 1;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'Game over';
            document.querySelector('.score').textContent = 0;
        }
    } else if (guess < secretNumber) {
        if (score > 0) {
            document.querySelector('.message').textContent = 'Too low';
            score--; // score = score - 1;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'Game over';
            document.querySelector('.score').textContent = 0;
        }
    }
});
