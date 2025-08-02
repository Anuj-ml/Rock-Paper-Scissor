
let userScore = document.querySelector("#user-score");
let compScore = document.querySelector("#comp-score");
let msg = document.querySelector("#msg");

const choices = document.querySelectorAll(".rps");
// console.log(choices);
let userChoice;
choices.forEach((rps) => {
    // console.log(rps);

    rps.addEventListener("click", (evt) => {
        userChoice=rps.getAttribute("id");
        console.log(`You selected ${userChoice}`);
        getWinner();
    })
});

const compArray = ["rock", "paper", "scissor"];

const compChoice = () => {
    let i=Math.floor(Math.random()*3);
    return compArray[i];
}

const getWinner = () => {
    let comp = compChoice();
    console.log(`Computer selected ${comp}`);
    
    if(comp === userChoice)    {
        msg.innerText = "Draw";
        msg.append("\n\nPlay Again");
        msg.style.backgroundColor = "white";
    }
    else if((comp === "rock" && userChoice === "paper")  ||  (comp === "scissor" && userChoice === "rock")  ||  (comp === "paper" && userChoice === "scissor") )   {
        msg.innerText = "You Won";
        msg.style.backgroundColor = "springgreen";
        console.log("You Won");
        userScore.innerText++;
    }
    else if((comp === "rock" && userChoice === "scissor")  ||  (comp === "paper" && userChoice === "rock")  ||  (comp === "scissor" && userChoice === "paper") )   {
        msg.innerText = "Comp Won";
        msg.style.backgroundColor = "red";
        console.log("Comp Won");
        compScore.innerText++;
    }
    
    setTimeout(() => {
        alert(`Your Choice : ${userChoice}\nComp Choice : ${comp}`);
    }, 0);
}
