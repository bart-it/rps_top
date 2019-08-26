const rand = max => Math.floor(Math.random() * Math.floor(max));

const rps = ['rock', 'paper', 'scissors'];

const playerPlay = txt => prompt(txt).toLowerCase();

const computerPlay = () => rps[rand(rps.length)];

const playRound = (computer, player) => {
   if(computer === player) {
       return 'Tie';
   } else if (
       (computer + player === 'rockpaper')
       ||(computer + player === 'paperscissors')
       ||(computer + player === 'scissorsrock')
   ){
       return `${player} beats ${computer}. You win!`
   } else return `${computer} beats ${player}. You lose!`;
};

let txt = 'Rock, Paper, Scissors?'

console.log(playRound(computerPlay(), playerPlay(txt)));
