const gameScreen = document.querySelector('#gameScreen');

const sect1 = document.createElement('div');
const sect2 = document.createElement('div');
const sect3 = document.createElement('div');
const sect4 = document.createElement('div');
sect4.setAttribute('style','display: flex;','','align-items: center;','gap: 2rem;');
sect4.style.display = "flex";
sect4.style.gap = "2rem";
sect4.style.justifyContent = "space-between";
sect4.style.alignItems = "center";


const askToPlay = document.createElement('h1');
const caption = document.createElement('h3');
const comment = document.createElement('h3')

askToPlay.textContent = "Shall we play a game of Rock Paper Scissors?";
askToPlay.setAttribute('style', 'color: #1a2529;');

caption.textContent = "First to 5 Wins!";
caption.setAttribute('style', 'color: brown;');

const btny = document.createElement('button');
const btnn = document.createElement('button');

btny.textContent = "Yes";
btnn.textContent = "Nope";

const btnR = document.createElement('button');
const btnP = document.createElement('button');
const btnS = document.createElement('button');

btnR.textContent = "ROCK";
btnP.textContent = "PAPER";
btnS.textContent = "SCISSORS";

btnn.setAttribute('style', 'color: white;')
btny.setAttribute('style', 'color: white;')

var playerScore = 0;
var computerScore = 0;



btnn.addEventListener('click', () => {
    askToPlay.textContent = 'PLEASE!!!!!!!';
    caption.textContent = "";
    
});
btny.addEventListener('click', () =>{
    playerScore = 0;
    computerScore = 0;
    askToPlay.textContent = playerScore + " : " + computerScore;
    caption.textContent = "YOU \t\t\t ME";
    comment.textContent = "Ready when you are!";
    btnn.remove();
    btny.remove();

    sect4.appendChild(btnR);
    sect4.appendChild(btnP);
    sect4.appendChild(btnS);


});

function getComputerChoice(){
    let x = Math.random() * 100;
    let choice;
    if (x <= 33) {
        choice = "Scissors";
    } 
    else if (x <= 66){
        choice = "Paper";
    }
    else {
        choice = "Rock"
    }
    console.log(choice);
    return choice;
}
function playRound(playerSelection, computerSelection){
    let stat;
    
    if (playerSelection !== "rock" && playerSelection !== "scissors" && playerSelection !== "paper"){
        console.log("blah");
        return;
    }else if ((playerSelection === "rock" && computerSelection === "scissors") || 
    (playerSelection === "paper" && computerSelection === "rock") || 
    (playerSelection === "scissors" && computerSelection === "paper")){
        comment.textContent = 'You win! ' + playerSelection +' beats ' + computerSelection;
        stat = "win";
        
    }else if(playerSelection === computerSelection.toLowerCase()){
        comment.textContent = "It's a draw. Let's try again!";
        stat = "try again";
    }else {
        comment.textContent = 'You lose! '+ computerSelection + ' beats ' + playerSelection
        stat = "loss";
    }
    return stat;
    
}


function game(playerSelection){
    //let playerSelection;

    const computerSelection = getComputerChoice().toLowerCase();
       // const playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
         
    console.log(playRound(playerSelection, computerSelection));
    const status = playRound(playerSelection, computerSelection);
        
    if ( status== "win"){
        playerScore++;  
            
    }else if (status == "loss"){
        computerScore++;            
    };    
    if (playerScore == 5){

        btnR.remove();  
        btnP.remove(); 
        btnS.remove(); 
        comment.textContent = "CONGRATULATIONS!!! You Win!";  
        btny.textContent = "Play again?";
        sect4.appendChild(btny);        
    }else if (computerScore == 5){
        btnR.remove();  
        btnP.remove(); 
        btnS.remove();
        comment.textContent = "Yay!!! I Win, You Lose!!";
        btny.textContent = "Play again?";
        sect4.appendChild(btny);
    };
     
    
    return [playerScore, computerScore];
    
    
};



btnR.addEventListener('click', () =>{
    const playerSelection = 'rock';
    game('rock')
    askToPlay.textContent = playerScore + " : " + computerScore;
    
    
});
        
btnP.addEventListener('click', () =>{
    game('paper')
    askToPlay.textContent = playerScore + " : " + computerScore;
    if (playerScore == 5){

        btnR.remove();  
        btnP.remove(); 
        btnS.remove(); 
        comment.textContent = "CONGRATULATIONS!!! You Win!";  
        btny.textContent = "Play again?";
        sect4.appendChild(btny);
    }else if (computerScore == 5){
        btnR.remove();  
        btnP.remove(); 
        btnS.remove();
        comment.textContent = "Yay!!! I Win, You Lose!!";
        btny.textContent = "Play again?";
        sect4.appendChild(btny);
    };
    
});

btnS.addEventListener('click', () =>{
    game('scissors')
    askToPlay.textContent = playerScore + " : " + computerScore;
    if (playerScore == 5){

        btnR.remove();  
        btnP.remove(); 
        btnS.remove(); 
        comment.textContent = "CONGRATULATIONS!!! You Win!";  
        btny.textContent = "Play again?";
        sect4.appendChild(btny);
    }else if (computerScore == 5){
        btnR.remove();  
        btnP.remove(); 
        btnS.remove();
        comment.textContent = "Yay!!! I Win, You Lose!!";
        btny.textContent = "Play again?";
        sect4.appendChild(btny);
    };

});

sect1.appendChild(askToPlay);
sect2.appendChild(caption);
sect3.appendChild(comment);
sect4.appendChild(btny);
sect4.appendChild(btnn);

gameScreen.appendChild(sect1);
gameScreen.appendChild(sect2);
gameScreen.appendChild(sect3);
gameScreen.appendChild(sect4);



