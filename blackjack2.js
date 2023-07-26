let player = {
    name: "Valio",
    chips: 145
}

let cards = []
let sum = 0
let hasBlackjack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let newCard = document.getElementById("newCard-btn")




let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips 

function getRandomCard(){
    let randomNumber = Math.floor(Math.random() * 13) + 1 

    if (randomNumber === 1){
        return 11
    }else if (randomNumber >= 11 && randomNumber <= 13){
        return 10
    }else{
        return randomNumber
    }
}


function StartGamefn(){
    isAlive = true

    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard,secondCard]
    sum = firstCard + secondCard

    renderGamefn()
}


function renderGamefn(){
    cardsEl.textContent = "Cards: "
    sumEl.textContent = "Sum: " + sum

    for (let i = 0; i < cards.length; i ++){
        cardsEl.textContent += cards[i] + " "
    }


    if (sum <= 20 ){
        message = "Do you want to draw a new card?"
    }else if (sum === 21){
        message = "You've got Blackjack"
        hasBlackjack = true
    }else{
        message = "Out of the game"
        isAlive = false
    }
    messageEl.textContent = message
}



function newCardfn(){ 
    
    if (isAlive === true && hasBlackjack === false ){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGamefn()
    }

    
    

}

/*

let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"]

for (let i = 0; i < largeCountries.length; i++ ){
    console.log("-" + largeCountries[i])
}

let largeCountries2 = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"]
largeCountries2.unshift("Pakistan","China")

console.log


let dayOfMonth = 13
let weekday = "Friday"

if (dayOfMonth === 13 && weekday === "Friday"){
    console.log("asdasd")
}


let hands = ["rock", "paper","scissor"]

function ranArray(){
    let randomNumberA = Math.floor(Math.random() * 3) + 1 
   
    if (randomNumberA === 1){
        return "rock"
    }else if (randomNumberA === 2){
        return "paper"
    }else if (randomNumberA === 3){
        return "scissor"
    }


}
hands = ranArray()
console.log(hands)
*/