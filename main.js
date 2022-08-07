var mainGame = document.querySelector(".main-game")
var whosTurn = document.querySelector(".whos")
var gameBoxes = document.querySelectorAll("td")
var gameBoard = document.querySelector(".main-game")
var player1WinCount = document.querySelector(".winCount1")
var player2WinCount = document.querySelector(".winCount2")

mainGame.addEventListener('click', identifyBox)
gameBoard.classList.remove("hidden")


var player1 = new Player('Hunter', src="assets/avs1.jpeg" )
var player2 = new Player('Kristin')
var game = new Game(player1, player2)

function identifyBox(event) {
  if (game.turn === player1) {
    event.target.innerText = '❌'
    whosTurn.innerText = `It is ${player2.id} turn!`
    player1.currentPicks.push(parseInt(event.target.dataset.box))
    game.boardCount++
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

}

function displayWinner(){
  if(game.winner === player1){
    player1WinCount.innerText = `Wins:${player1.wins}`
    whosTurn.innerText = `${player1.id} is the WINNER !!!`
    gameBoard.classList.add('hidden')

    setTimeout(resetGame, 2000)

  }
  if(game.winner === player2){
    player2WinCount.innerText = `Wins:${player2.wins}`
    whosTurn.innerText = `${player2.id} is the WINNER !!!`
    setTimeout(resetGame, 2000)
  }
  if(game.winner === `tie`){
    whosTurn.innerText = "It is a tie!"
    setTimeout(resetGame, 2000)
  }
}
// var gameTimeout = setTimeout(resetGame, 2000)

function resetGame(){
  for(var i = 0; i < gameBoxes.length; i++){
    gameBoxes[i].innerText = " "
  }
  gameBoard.classList.remove('hidden')
  game.resetPlayerData()
}
