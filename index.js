//declare global data
let win = 0;
let lose = 0;
let remainingAttempt = 5;

//finding element
const form = document.querySelector("form");
const input = form.querySelector("input");
const button = form.querySelector("button");
const result = document.querySelector(".result");
const remaining = document.querySelector(".remaining");
const winning = document.querySelector(".winning");
const lost = document.querySelector(".lost");
const end=document.querySelector(".end");


form.addEventListener("submit", (e) => {
    e.preventDefault();
    let value = Number(input.value);
    checkResult(value);
    remainingAttempt--;
    remaining.innerHTML = `Remaining : ${remainingAttempt} Times!!!`;
    if (remainingAttempt === 0) {
        input.disabled=true;
        button.disabled=true;
        end.innerHTML=`Thanks for playing this game.Reload page and play again`
    }
})

//generating random number
let randomNumber = () => {
    return Math.floor(Math.random() * 5 + 1);
}
//check result
let checkResult = (value) => {
    let number = randomNumber();
    if (value === number) {
        win++;
        winning.innerHTML = `You win :${win}`;
        result.innerHTML = ``
    }
    else {
        lose++;
        lost.innerHTML = `You lost :${lose}`;
        result.innerHTML = `Number was=${number}`
    }

}

