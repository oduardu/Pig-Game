'use strict';

let allPoints, currentPoints, currentPlayer, playing;

const start = function() {

    allPoints = [0, 0];

    currentPlayer = 0;

    currentPoints = 0;

    playing = true;

    document.querySelector('#score--0').textContent = 0;
    document.getElementById('score--1').textContent = 0;

    
    document.getElementById('current--0').textContent = 0;
    document.getElementById('current--1').textContent = 0;
    
    document.querySelector('.dice').classList.add('hidden');
    
    document.querySelector('.player--0').classList.remove('player--winner');
    document.querySelector('.player--1').classList.remove('player--winner');
    
    document.querySelector('.player--0').classList.add('player--active');
    document.querySelector('.player--1').classList.add('player--active');

}


const changePlayer = function() {

    document.getElementById(
        `current--${currentPlayer}`
    ).textContent = 0;

    currentPoints = 0;

    currentPlayer = currentPlayer === 0 ? 1 : 0;

    document.querySelector('.player--0').classList.toggle('player--active')
    document.querySelector('.player--1').classList.toggle('player--active')

}

document.querySelector('.btn--roll').addEventListener('click', function(){

    if(playing) {

        const roll = Math.trunc(Math.random() * 6 ) + 1;

        document.querySelector('.dice').classList.remove('hidden');
        document.querySelector('.dice').src = `../images/dice-${roll}.png`;

        if(roll == 1){

            changePlayer()

        } else {

            currentPoints += roll;
            
            document.getElementById(
                
                `current--${currentPlayer}`
                
            ).textContent = currentPoints;
            
        }

    }


})

document.querySelector('.btn--new').addEventListener('click', function(){

    start()

})

document.querySelector('.btn--hold').addEventListener('click', function(){

    if(playing) {

        allPoints[currentPlayer] += currentPoints;

        document.getElementById(
            
            `score--${currentPlayer}`
            
        ).textContent = allPoints[currentPlayer]

        if (allPoints[currentPlayer] >= 100){

            playing = false

            document.querySelector('.dice').classList.add('hidden')

            document.querySelector(

                `.player--${currentPlayer}`

            ).classList.add('player--winner')
        
            document.querySelector(
                
                `.player--${currentPlayer}`
                
            ).classList.remove('player--active')
        
        } else {

            changePlayer()

        }
    }

})

start()