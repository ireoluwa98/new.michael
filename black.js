
let player = {
name:"michael",
chips:"145"
}

 
 let cards = []
let sum = 0
 let hasBlackJack = false
 let isAlive = false 
 let  massage = ""
 let sumEL = document.getElementById("sum-el")
  let cardsEL = document.getElementById("card-el")
  let massageEL = document.getElementById("massage-el")
  
  let playerEL = document.getElementById("player-el")
  playerEL.textContent = player.name + ": $" + player.chips
  console.log(player)

 function startGame() { 
   isAlive = true
   let firstCard = randomCard()
   let lastCard = randomCard()
   let cards = [firstCard, lastCard,]
   let sum = firstCard + lastCard
      renderGame()

      }

     


 function renderGame() {

   cardsEL.textContent = "cards: "
   for (let i = 0; i < cards.length; i++) {
       cardsEL.textContent += cards[i] + " "
   }

   // cardsEL.textContent = "cards:" + cards[0] + " " + cards[1]
     sumEL.textContent = " sum: " + sum
    if (sum <= 20) {
        massage = "do you want to draw a new card? "
     } else if (sum === 21) {
        massage = "you got Blackjack!"
        hasBlackJack = true
     } else if (sum > 21) { 
        massage =  "you are out of the game! "
        isAlive = false
     }
     massageEL.textContent = massage
       }

      function newCard() {
         if (isAlive === true && hasBlackJack === false) {
            let card = randomCard()
            sum += card
            cards.push(card)
            console.log(cards)
            renderGame()
         }
         
      }







      function randomCard() {
         let lolGame = Math.floor( Math.random() * 13 ) + 1

         if (randomCard > 10) {
            return 10
         } else if (randomCard === 2) {
            return lolGame
         }
         return lolGame
         
      }
      console.log(randomCard())  
  

      // for ( let count = 10; count < 21; count += 1 ) {
      //    console.log(count)
      // }
      // for (let i = 0; i<5; i+= 1) {
      //    console.log(play[i])
      // }

      // for ( let i =10; i<101; i+= 10) {
      //    console.log(i)
      // }
      // let play = [
      //    "am fine",
      //    "log life",
      //    'sup hw u',
      //    'happy day',
      // ]

      let cords = [2, 3, 4]

      console.log(cords)
      for ( let i = 0; i < cords.length; i+=1) {
       console.log(cords[i])   
      }



      let player1Time = 300
      let player2Time = 650
      
      function totalRaceTime() {
         if (player1Time < player2Time) {
            return player1Time
         } else if (player2Time < player1Time) {
            return player2Time
         } else {
            return player1Time
         }
      }
      let fastestPlayer = totalRaceTime()
      console.log( fastestPlayer)

      // function randomCard() {
      //     return 5 
      // }
      let randomNumber = Math.random() * 6
      console.log(randomNumber)

      let floorNumber = Math.floor(7.23999999)
      console.log(floorNumber)

      // let lolGame = Math.floor( Math.random() * 6 ) + 1
      // console.log(lolGame)

      function rowDice() {
         let lolGame = Math.floor( Math.random() * 6 ) + 1 
         return lolGame
      }
      console.log(rowDice())


       let hasSlovedChallenge = true
       let hasIntsLeft = true

       if (hasSlovedChallenge === true && hasIntsLeft === true) {
         solution()
       }
       function solution() {
         console.log("showing solution")
       }

       let likeCat = true
       let likeNight = false

       if ( likeCat === true || likeNight === true) {
         witch()
       }
       function witch() {
         console.log("you are a withch")
       }

       let castle = {
         title: "live like a king",
         lessons:"living large",
         creator:"michael wealth",
         lenght:"3 weeks",
         isnotfree:"true",
         tags:["swimming pool"]

       }
       console.log(castle.creator)