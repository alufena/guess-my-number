'use strict';

console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';
console.log(document.querySelector('.message').textContent);
document.querySelector('.number').textContent = 13; // não se pode atribuir um elemento inteiro sozinho, porque tal elemento possui muito mais que só o content. por isso o ".textContent" (sem ele dá erro)
document.querySelector('.score').textContent = 10;
console.log(document.querySelector('.guess').value); // retorna "<empty string>" por enquanto
document.querySelector('.guess').value = 2; // põe um valor padrão