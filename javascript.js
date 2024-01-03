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
        console.log('You win! ' + playerSelection +' beats ' + computerSelection);
        stat = "win";
        
    }else if(playerSelection === computerSelection.toLowerCase()){
        console.log("Let's try again!");
        stat = "try again";
    }else {
        console.log('You lose! '+ computerSelection + ' beats ' + playerSelection);
        stat = "loss";
    }
    console.log(stat)
    return stat;
    
}

function game(){
    let playerScore = 0;
    let computerScore = 0;
    const status = playRound();
    for (let i = 0; i < 3; i++){

        const computerSelection = getComputerChoice().toLowerCase();

        const playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
        
        console.log(playRound(playerSelection, computerSelection));
        
        if (status == "win"){
            playerScore = playerScore + 1;
            return playerScore;
            
        }else if (status == "loss"){
            computerScore = computerScore +1;
            return computerScore;
            
        }
        
    }
    
    

    console.log(playerScore);
    console.log(computerScore);
}


game();

