'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 Correct Number!';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.number').textContent = 13; // não se pode atribuir um elemento inteiro sozinho, porque tal elemento possui muito mais que só o content. por isso o ".textContent" (sem ele dá erro)
// document.querySelector('.score').textContent = 10;
// console.log(document.querySelector('.guess').value); // retorna "<empty string>" por enquanto
// document.querySelector('.guess').value = 2; // põe um valor padrão

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
};

// document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    if (!guess) {
        // input vazio ou com 0
        // document.querySelector('.message').textContent = 'No number';
        displayMessage('No number!');
    } else if (guess === secretNumber) {
        // acerto
        // document.querySelector('.message').textContent = 'Correct number';
        displayMessage('Correct number!');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem'; // atribua-se a uma string sempre que manipular um inline style
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    } else {
        // } else if (guess !== secretNumber) {
        // refactor
        if (score > 1) {
            // document.querySelector('.message').textContent =
            displayMessage(guess > secretNumber ? 'Too high' : 'Too low!');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            // document.querySelector('.message').textContent = 'Game over';
            displayMessage('Game over!');
            document.querySelector('.score').textContent = 0;
        }
    }
    // } else if (guess > secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = 'Too high';
    //         score--; // score = score - 1;
    //         document.querySelector('.score').textContent = highScore;
    //     } else {
    //         document.querySelector('.message').textContent = 'Game over';
    //         document.querySelector('.score').textContent = 0;
    //     }
    // } else if (guess < secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = 'Too low';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = 'Game over';
    //         document.querySelector('.score').textContent = 0;
    //     }
    //  }
});

document.querySelector('.again').addEventListener('click', function () {
    // restaura as condições iniciais
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score; // reseta score
    document.querySelector('.guess').value = ''; // limpa input
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});
