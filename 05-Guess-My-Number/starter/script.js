'use strict';

let secret_num = Math.floor(Math.random() * 20);

// Configure what happens once the button is clicked

// document.querySelector('.message').textContent

document.querySelector('.check').addEventListener('click', function () {
        let guess = Number(document.querySelector('.guess').value);
        document.querySelector('.number').textContent = 5;
        if (guess > secret_num) {
            document.querySelector('.message').textContent = "Too high";
        } else if (guess < secret_num) {
            document.querySelector('.message').textContent = "Too low";
        }
        if (guess === secret_num) {
            document.querySelector('.message').textContent = "You Win!";
        }
})
