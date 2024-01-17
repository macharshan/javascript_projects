let randomNumber = Math.round((Math.random()*100)+1)

const div = document.querySelector(`.container`)
const userInput = document.querySelector(`#userInput`)
const submit = document.querySelector(`#submit`)
const guessedNumbers = document.querySelector(`#guessedNumbers`)
const remainingChances = document.querySelector(`#chances`)
const result =document.querySelector(`#result`)
const newGame = document.querySelector(`#newGame`)



let myArray = []
let count = 1


let playGame = true


let p = document.createElement(`p`)

if(playGame){
    submit.addEventListener('click', function (e){
        e.preventDefault();
        const guess = parseInt(userInput.value)
        // console.log(randomNumber);
        validateNumber(guess)
        
    })    
}

function validateNumber(num){
    if(!num || num <= 0 || num > 100 || isNaN(num)){
        result.innerHTML = `please enter a valid number`
        userInput.value =``
    } else {
        compareNumber(num)
    }
}

function compareNumber(num){
    if(num < randomNumber){
        msg(`number is too low`)
        numbersGuessed(num)
    } else if (num > randomNumber){
        msg(`number is too high`)
        numbersGuessed(num)
    } else {
        msg(`you have guessed it right`)
        endGame()
    }
}

function msg(message){
    result.innerHTML = message
}

function numbersGuessed(guess){
    userInput.value =``
    myArray.push(guess)
    guessedNumbers.innerHTML = `${myArray}`
    remainingChances.innerHTML = `${10-count}` 
    count += 1
    gameOver(count)
}


function gameOver(playCount){
    if(playCount == 11){
        msg(`Game over, chances are over and the number is ${randomNumber}`)
        endGame()
    }
}

function endGame(){
    userInput.value = ``
    userInput.setAttribute(`Disabled`,``)
    playGame = false
    newGame.innerHTML = `<button>start new game</button>`
    playAgain()
}
function playAgain(game){
    const newGame = document.querySelector(`#newGame`)
    newGame.addEventListener(`click`,function(e){
        e.preventDefault();
        randomNumber = Math.round((Math.random()*100)+1)
        myArray = []
        count = 1
        result.innerHTML = ``
        guessedNumbers.innerHTML = ``
        remainingChances.innerHTML = `${10}` 
        playGame = true
        userInput.removeAttribute(`disabled`)
        newGame.innerHTML = ``
    })
}