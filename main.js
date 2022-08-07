var mainGame = document.querySelector(".main-game")
var whosTurn = document.querySelector(".whos")
var gameBoxes = document.querySelectorAll("td")
var player1WinCount = document.querySelector(".winCount1")
var player2WinCount = document.querySelector(".winCount2")

mainGame.addEventListener('click', identifyBox)



var player1 = new Player('Hunter')
var player2 = new Player('Kristin')
var game = new Game(player1, player2)

function identifyBox(event) {
  event.preventDefault()
  if (game.turn === player1) {
    event.target.innerText = '❌'
    whosTurn.innerText = `It is ${player2.id} turn!`
    player1.currentPicks.push(parseInt(event.target.dataset.box))
    game.boardCount ++
    game.determineWinner()
    game.determineTie()
  }
  if (game.turn === player2) {
    event.target.innerText = '⭕'
    whosTurn.innerText = `It is ${player1.id} turn!`
    player2.currentPicks.push(parseInt(event.target.dataset.box))
    game.boardCount++
    game.determineWinner()
    game.determineTie()
  }
  displayWinner()
  game.determinePlayerTurn()
  setTimeout(resetGame(), 1000)
}

function displayWinner(){
  if(game.winner === player1){
    player1WinCount.innerText = `Wins:${player1.wins}`
    whosTurn.innerText = `${player1.id} is the WINNER !!!`
  }
  if(game.winner === player2){
    player2WinCount.innerText = `Wins:${player2.wins}`
    whosTurn.innerText = `${player2.id} is the WINNER !!!`
  }
  if(game.winner === `tie`){
    whosTurn.innerText = "It is a tie!"
  }
}






function resetGame(){
  if(game.winner === undefined)
  for(var i = 0; i < gameBoxes.length; i++){
    gameBoxes[i].innerText = " "
  }
  game.resetPlayerData()
}

function changeBanner(){
  whosTurn.innerText = `It is ${player1.id} turn!`
}
