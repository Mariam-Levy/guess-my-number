'use strict';

let score = 20; // score = puntaje | para que el valor comience con un puntaje de 20
let highscore = 0; // highscore = puntuacion mas alto | el record comienza en 0

//Para generar un numero aleatorio entre el 1 y el 20 y a la vez almacenarlos en una variable:
let secretNumber = Math.trunc(Math.random() * 20) + 1; 


document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);


    if(!guess) {  //cuando el ususario no ingreso un numero
        document.querySelector('.message').textContent = 'No Number! ❌';

    } else if (guess === secretNumber) { //cuando el usuario introdujo el numero correcto.
        document.querySelector('.message').textContent = 'Correct Number! ✅'; // arroja el mensaje que el usuario atino el numero
        document.querySelector('.number').textContent = secretNumber; //muestra el numero secreto solo cuando sea el correcto.

        //Manipular CSS desde JS:
        document.querySelector('body').style.backgroundColor = '#80b918';
        document.querySelector('.number').style.width = '30rem';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

    } else if (guess > secretNumber) { // cuando el usuario ingreso un numero muy alto
        if(score > 1) {
            document.querySelector('.message').textContent = 'too high! ⬆'; // muestra el mensaje que el numero fue muy alto
            score = score - 1;  // resta un punto del score
            document.querySelector('.score').textContent = score; // muestra el nuevo valor del score
        } else {
            document.querySelector('.message').textContent = 'You lost the game 😫'; 
            document.querySelector('.score').textContent = 0; // para que el puntaje se muestre en 0, cuando se pierde el juego
            document.querySelector('body').style.backgroundColor = '#d00000'; 
        }
        

    } else if (guess < secretNumber) { // cuando el usuario ingreso un numero muy bajo
        if(score > 1) {
            document.querySelector('.message').textContent = 'too low! ⬇'; // muestra el mensaje que el numero fue muy bajo
            score--;    // resta un punto del score
            document.querySelector('.score').textContent = score; // muestra el nuevo valor del score
        } else {
            document.querySelector('.message').textContent = 'You lost the game 😞';
            document.querySelector('.score').textContent = 0; // cuando se pierde el juego, el puntaje del score seria 0.
            document.querySelector('body').style.backgroundColor = '#d00000';
        }
    }
});


document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1; 
    document.querySelector('.message').textContent = 'Start guessing...'
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?'
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#1f2421';
    document.querySelector('.number').style.width = '15rem';
});

