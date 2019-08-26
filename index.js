const rand = max => Math.floor(Math.random() * Math.floor(max));

const rps = ['rock', 'paper', 'scissors'];

const playerPlay = txt => prompt(txt).toLowerCase();

const computerPlay = () => rps[rand(rps.length)];

const playRound = (computer, player) => {
    if(rps.includes(player)){
        if(computer === player) {
            txt = 'Tie, choose again (Rock, Paper, Scissors?).'
            return playRound(computerPlay(), playerPlay(txt));
        } else if (
            (computer + player === 'rockpaper')
            ||(computer + player === 'paperscissors')
            ||(computer + player === 'scissorsrock')
        ){
            txt = 'Rock, Paper, Scissors?'
            playerScore++;
            return `${player} beats ${computer}. You win!`
        } else {
            txt = 'Rock, Paper, Scissors?'
            computerScore++;
            return `${computer} beats ${player}. You lose!`;
         }
    } else {
        txt = 'Not a correct format, choose between rock, paper or scissors.';
        return playRound(computerPlay(), playerPlay(txt));
    }
   
};

let txt = 'Rock, Paper, Scissors?'
let playerScore = 0;
let computerScore = 0;
let count = 0;

const game = function(){
    if (count < 5){
        playRound(computerPlay(), playerPlay(txt));
        console.log(`${playerScore} : ${computerScore}`);
        count++;
        game();
    } else{
        if(playerScore > computerScore){
            console.log(`player:${playerScore} against computer:${computerScore}\nYou win!`)
        } else {
            console.log(`player:${playerScore} against computer:${computerScore}\nYou lose! --- Try again!`)
        }
    }
}

game();