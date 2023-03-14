
let cards = []
let sum = 0
let hasBlackjack = false
let isAlive = false
let message = ''
let player = {
    name: 'Roberto',
    chips: "100"
}

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips

function startGame(){
    isAlive = true
    cards = []
    let hasBlackjack = false
    cards.push(getRandomCard())
    cards.push(getRandomCard())
    sum = cards[0] + cards[1]
   
    renderGame()
}

function renderGame() {

    cardsEl.textContent = "Cards: "
    for(let i=0; i < cards.length; i++){
        cardsEl.textContent +=  cards[i] + " "
    }   
    sumEl.textContent = "Sum: " + sum    
    if(sum < 21){
        console.log("Do you want draw a newcard ?")
        message = "Do you want draw a newcard ?"
    }else if(sum ===21){
        console.log("Yess! You have got Blackjack!");
        message = "Yess! You have got Blackjack!"
        hasBlackjack = true
    }else{
        console.log("You are out of the game!");
        message = "You are out of the game!"
        isAlive = false
    }
    messageEl.textContent = message

}

function newCard() {
    if (isAlive === true && hasBlackjack === false){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()        
    }

}

function getRandomCard(){
    let randomNumber = Math.floor(Math.random() * 13 + 1)  //floor para cortar a decimal
    
    if (randomNumber > 10){
        return 10
    } else if(randomNumber == 1){
        return 11 
    }else{
        return randomNumber 
    }
    

}


