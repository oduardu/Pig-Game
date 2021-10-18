'use strict';

//Players
const firstPlayer = document.querySelector('.player--0')
const secondPlayer = document.querySelector('.player--1')

//"All" points.
const pointsFirstPlayer = document.querySelector('#score--0')
const pointsSecondPlayer = document.getElementById('score--1')

//Current Points (FP = First Player, SP = Second Player)
const currentPointsFP = document.getElementById('current--0')
const currentPointsSP = document.getElementById('current--1')

//Buttons and Dice
const dice = document.querySelector('.dice')
const newButton = document.querySelector('.btn--new')
const rollButton = document.querySelector('.btn--roll')
const holdButton = document.querySelector('.btn--hold')

//VARs
let allPoints;
let currentPoints;
let currentPlayer;
let playing;



const start = function() {

    allPoints = [0, 0];

    currentPoints = 0;

    currentPlayer = 0;

    playing = true;

    pointsFirstPlayer.textContent = 0;
    pointsSecondPlayer.textContent = 0;

    
    currentPointsFP.textContent = 0;
    currentPointsSP.textContent = 0;
    
    dice.classList.add('hidden');
    
    firstPlayer.classList.remove('player--winner');
    secondPlayer.classList.remove('player--winner');
    
    firstPlayer.classList.add('player--active');
    secondPlayer.classList.add('player--active');

}


const changePlayer = function() {
    document.getElementById(`current--${currentPlayer}`).textContent = 0;
    //Reset Points
    currentPoints = 0;

    currentPlayer = currentPlayer === 0 ? 1 : 0;

    firstPlayer.classList.toggle('player--active')
    secondPlayer.classList.toggle('player--active')
}

rollButton.addEventListener('click', function(){

    if(playing) {
        const _dice = Math.trunc(Math.random() * 6 ) + 1;

        dice.classList.remove('hidden');
        dice.src = `../images/dice-${_dice}.png`;

        if(_dice == 1){

            changePlayer()

        } else {

            currentPoints += _dice;
            
            document.getElementById(
                
                `current--${currentPlayer}`
                
            ).textContent = currentPoints;
            
        }

    }


})

newButton.addEventListener('click', function(){
    start();

})

holdButton.addEventListener('click', function(){

    if(playing) {
        allPoints[currentPlayer] += currentPoints;

        document.getElementById(`score--${currentPlayer}`).textContent = allPoints[currentPlayer]

        if (allPoints[currentPlayer] >= 100){
            playing = false

            dice.classList.add('hidden')

            document.querySelector(`.player--${currentPlayer}`).classList.add('player--winner')
        
            document.querySelector(`.player--${currentPlayer}`).classList.remove('player--active')
        
        } else {
            changePlayer()
        }
    }

})

start()