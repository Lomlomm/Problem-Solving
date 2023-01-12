function getComputerChoice(){
    let probability = Math.random(); 
    let choice = ""
    if (probability < 0.34){
        choice = "ROCK"; 
    }
    else if(probability < 0.64){
        choice = "PAPER"; 
    }
    else if(probability > 0.64){
        choice = "SCISSORS"; 
    }
    console.log(choice)
    return choice

}

function playRound(computer_choice, user_choice){
    let win = false;
    if (computer_choice === "ROCK" && user_choice == "PAPER"){
        win = true
    } 
    else if (computer_choice === "PAPER" && user_choice == "SCISSORS"){
        win = true
    }
    else if (computer_choice === "SCISSORS" && user_choice == "ROCK"){
        win = true
    }
    if (win == true){
        console.log(`Congrats, you win! ${user_choice} beats ${computer_choice}`)
        return "win"; 
    } 
    else if (win == false){
        if (computer_choice === user_choice){
            console.log(`We have a draw`)
            return "draw"; 
        }
        else{
            console.log(`You lose! ${computer_choice} beats ${user_choice}`)
            return "lose"; 
        }
    }
}
function game(){
    let user_wins = 0, computer_wins = 0, status = ""; 
    let computer_choice;
    let player_choice;
    for(let i = 0; i < 5; i++){
        computer_choice = getComputerChoice();
        player_choice = prompt("Choose between ROCK, PAPER, SCISSORS")
        status = playRound(computer_choice, player_choice.toUpperCase())
        if (status === "win"){
            user_wins += 1;
        }
        else if (status === "lose"){
            computer_wins += 1;
        }
    }
    alert(`YOU WON ${user_wins} TIMES, LOSE ${computer_wins} TIMES, AND GOT A DRAW ${5-(computer_wins+user_wins)} TIMES`)
}

game();