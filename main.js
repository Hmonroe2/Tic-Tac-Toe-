var mainGame = document.querySelector(".main-game")
var whosTurn = document.querySelector(".whos")
var gameBoxes = document.querySelectorAll("td")



mainGame.addEventListener('click', identifyBox)



var player1 = new Player('hunter')
var player2 = new Player('kristin')
var game = new Game(player1, player2)

function identifyBox(event) {
  event.preventDefault()
  if (game.turn === player1) {
    event.target.innerText = '❌'
    player1.currentPicks.push(parseInt(event.target.dataset.box))
    game.determineWinner()
  }
  if (game.turn === player2) {
    event.target.innerText = '⭕'
    player2.currentPicks.push(parseInt(event.target.dataset.box))
    game.determineWinner()
  }
  game.determinePlayerTurn()
}

function resetGame(){
  for(var i = 0; i < gameBoxes.length; i++){
    gameBoxes[i].innerText = " "
  }
  game.resetPlayerData()
}
