

let score = JSON.parse(localStorage.getItem('score'));
//Or you can write
//let score = JSON.parse(localStorage.getItem('score')) ||
//         {
    //          wins: 0,
    //          loses: 0,
    //          ties: 0;
//          }
//  Falsy OR Truthy

if(!score){
    score = {
        wins: 0,
        loses: 0,
        ties: 0
    };
}


updateScoreElement();  //Updates the code in the body.

function playGame(playerMove){
    const computerMove = pickComputerMove();

    let result = '';

    if(playerMove === 'scissors'){
        if(computerMove === 'rock'){
            result = 'You Lose.';
            score.loses++;
        }else if(computerMove === 'paper'){
            result = 'You Win.';
            score.wins++;
        }else if(computerMove === 'scissors'){
            result = 'Tie.';
            score.ties++;
        }
    }
    
    else if(playerMove === 'rock'){
        if(computerMove === 'rock'){
            result = 'Tie.';
            score.ties++;
        }else if(computerMove === 'paper'){
            result = 'You Lose.';
            score.loses++;
        }else if(computerMove === 'scissors'){
            result = 'You Win';
            score.wins++;
        }
    }
    
    else{
        if(computerMove === 'rock'){
            result = 'You Win.';
            score.wins++;
        }else if(computerMove === 'paper'){
            result = 'Tie.';
            score.ties++;
        }else if(computerMove === 'scissors'){
            result = 'You Lose.';
            score.loses++;
        }
    }           

    localStorage.setItem('score',JSON.stringify(score));

    
    //Displays the result
    document.querySelector('.js-result')
        .innerHTML = result;
        
    //Displays the Move/choice
    document.querySelector('.js-choice')
        .innerHTML = `You 
        <img src="${playerMove}-emoji.png" alt="">
        <img src="${computerMove}-emoji.png" alt="">
        Computer`;

    updateScoreElement();
    
    
}


function resetScore(){
    score.wins = 0;
    score.loses = 0;
    score.ties = 0;
}



function updateScoreElement(){
    document.querySelector('.js-score')
         .innerHTML = `Wins: ${score.wins} Loses: ${score.loses} Ties: ${score.ties}`;

}

function pickComputerMove(){
    const randomNumber = Math.random();
    let computerMove = '';

    if(randomNumber >= 0 && randomNumber < 1/ 3){
        computerMove = 'rock';
    }else if( randomNumber >= 1/3 && randomNumber < 2/3){
        computerMove = 'paper';
    }else{
        computerMove = 'scissors';
    }
    return computerMove;
}  
