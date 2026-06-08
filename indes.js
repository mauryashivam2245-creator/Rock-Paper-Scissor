let userScore = 0;
let botScore = 0;
let msg = document.querySelector("#msg")
let botScore1 = document.querySelector("#bot-score")
let UserScore1 = document.querySelector("#user-score")
let reset = document.querySelector("#reset")
const choice = document.querySelectorAll('.choice');

const botChoice = () => {
    let option = ["rock", "paper", "scissor"];
    const randChoice = Math.floor(Math.random()*3);
    return option[randChoice];
    // console.log(randChoice);
    
}

const draw = () => {
    // console.log("draw");   
}

const resetGame = () => {
    userScore = 0;
    botScore = 0;
    UserScore1.innerText = userScore;
    botScore1.innerText = botScore;
    msg.innerText = "play your move";
}
reset.addEventListener('click',resetGame)

const playGame = (userId) => {
    const genChoice = botChoice();
    if( genChoice === userId) {
        msg.innerText = "Draw"
    } else if (
        (genChoice === "rock" && userId === "scissor") ||
        (genChoice === "paper" && userId === "rock") ||
        (genChoice === "scissor" && userId === "paper")
    ) {
        msg.innerText = "You win"
        userScore++;
        UserScore1.innerText = userScore;
    }
    else {
        botScore++;
        msg.innerText = "Bot Win"
        botScore1.innerText = botScore;
        
    }
    
}


choice.forEach((choice) => {
    choice.addEventListener('click', () => {
        const userId = choice.getAttribute('id');
        playGame(userId);
    });
});



