// what will happen when the user clicks?
// how will the target move from square to square in what order
// how will the game display when user strikes the target
// display the score for each player
// set a parameter for goal to connect and strike the target in a defined time
// what happens when the user selects one player or two player game
// if player two goes what happens to player one info
// how will each player advance to the next stage
// once goal is reached display winner

let greeting = function() {
    console.log("Let the games begin");
}
greeting();

const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
const highscore = document.querySelector('.highscore');
const mallet = document.querySelector('.mallet');
const timer = document.querySelector("timer")
let lastHole;
let timeleft = 0;
let score = 0;
// let maxscore = 0;


// window.addEventListener("mousemove",(e) => {
//     mallet.style.left = e.pageX - 10 + "px";
//     mallet.style.top = e.pageY - 50 + "px";
// });


  
function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

let timeUp = false;  // allow for character movement up and down

function pop() {

    const time = randomTime(500, 1500); //sets pop up time
    const hole = randomHole(holes); 
    hole.classList.add('up'); //add the CSS class so selected mole can "pop up"
    setTimeout(() => {
        hole.classList.remove('up'); //sets character to go back down
        if(!timeUp) {
            pop();
        }
    }, time);
}


// keep holes random and from placing character in the same place twice
function randomHole(holes){
    const index  = Math.floor(Math.random() * holes.length);
    const hole = holes[index];

    if (hole === lastHole){
        return randomHole(holes);
    }
    lastHole = hole;
    console.log(lastHole)
    return hole;
}

function startGame() {
    console.log(startGame)
    scoreBoard.textContent = 0;
    timeUp = false;
    score = 0;
    pop();
    setInterval(() => timeUp = true, 30000) // create countdown timer
}

// let timer = 0
// let gameOver = setInterval(() => {
//     timeUp.textContent = timeleft;
//     if (timeleft === 0) {
//         clearInterval(timer);
//     }
// })



function wack(e){
    if(!e.isTrusted) return; 
    console.log(wack)
    score++;          //if hit returned then score increases by 1
    this.parentNode.classList.remove('up'); //this refers to item clicked
    scoreBoard.textContent = score;
}
console.log(wack)

moles.forEach(mole => mole.addEventListener('click', wack))


// let timeRemaing = setInterval(() => {
//     timer.textContent = timeleft;
//     timeleft--;
// }, 400000)

