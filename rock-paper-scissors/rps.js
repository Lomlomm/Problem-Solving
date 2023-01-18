let player_choice=null;
const rock = document.querySelector('#rock')
const rock_audio = document.querySelector('.rock-audio')
rock.addEventListener('click', () => {
    player_choice = 'rock'
    rock_audio.play()
    game(player_choice)
});

const paper = document.querySelector('#paper')
const paper_audio = document.querySelector('.paper-audio')

paper.addEventListener('click', () => {
    player_choice = 'paper'
    paper_audio.play()
    game(player_choice)
});

const scissors = document.querySelector('#scissors')
const scissors_audio = document.querySelector('.scissors-audio')

scissors.addEventListener('click', () => {
    player_choice = 'scissors'
    scissors_audio.play()
    game(player_choice)
});


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
        return "win"; 
    } 
    else if (win == false){
        if (computer_choice === user_choice){
            return "draw"; 
        }
        else{
            return "lose"; 
        }
    }
}
function game(player_choice){
    let status = ""; 
    let computer_choice;
    const div_resultado = document.querySelector('.resultado');
    computer_choice = getComputerChoice();
    let result = document.createElement('h2'); 
    result.classList.add('result');
    
    if(player_choice != null){
        status = playRound(computer_choice, player_choice.toUpperCase())
        if (div_resultado.childNodes.length != 1){
            let result_re = document.querySelector('.result')
            div_resultado.removeChild(result_re)
        }
        if (status === "win"){
            result.textContent = `YOU WIN ${player_choice.toUpperCase()} BEATS ${computer_choice}!`
        }
        else if (status === "lose"){
            result.textContent = `YOU LOSE ${computer_choice} BEATS ${player_choice.toUpperCase()}`
        }
        
        else{
            result.textContent = `IT'S A DRAW`
        }
        
        div_resultado.appendChild(result)

    }
}

        




