var mainGame = document.querySelector(".main-game")
var winnerSection = document.querySelector('main-game-box')
var whosTurn = document.querySelector(".whos")
var gameBoxes = document.querySelectorAll("td")
var gameBoard = document.querySelector(".main-game")
var player1WinCount = document.querySelector(".winCount1")
var player2WinCount = document.querySelector(".winCount2")

mainGame.addEventListener('click', identifyBox)
gameBoard.classList.remove("hidden")


var player1 = new Player('Hunter', `🏒 `)
var player2 = new Player('Kristin', `🥅`)
var game = new Game(player1, player2)

function identifyBox(event) {

  if (event.target.textContent.includes('❌') || event.target.textContent.includes('⭕')) {
    return alert(`please click a vaild spot`)
  }
  if (game.turn === player1) {
    event.target.innerText = `❌`
    whosTurn.innerText = `It is ${player2.id} turn!`
    player1.currentPicks.push(parseInt(event.target.dataset.box))
    // game.boardCount++
    game.determinePlayerTurn()
    game.determineWinner()
    game.determineTie()
  } else{
    event.target.innerText = `⭕`
    whosTurn.innerText = `It is ${player1.id} turn!`
    player2.currentPicks.push(parseInt(event.target.dataset.box))
    // game.boardCount++
    game.determinePlayerTurn()
    game.determineWinner()
    game.determineTie()
  }
  displayWinner()

}

function displayWinner() {
  if (game.winner === player1) {
    player1WinCount.innerText = `Wins:${player1.wins}`
    whosTurn.innerText = `${player1.id} is the WINNER !!!`
    gameBoard.classList.add('hidden')
    game.turn = player2
    setTimeout(resetGame, 2000)

  }
  if (game.winner === player2) {
    player2WinCount.innerText = `Wins:${player2.wins}`
    whosTurn.innerText = `${player2.id} is the WINNER !!!`
    gameBoard.classList.add('hidden')
    game.turn = player1
    setTimeout(resetGame, 2000)
  }
  if (game.winner === `tie`) {
    whosTurn.innerText = "It is a tie!"
    setTimeout(resetGame, 2000)
  }
}
// var gameTimeout = setTimeout(resetGame, 2000)

function resetGame() {
  for (var i = 0; i < gameBoxes.length; i++) {
    gameBoxes[i].innerText = " "
  }
  whosTurn.innerText = 'Lets play Tic Tac Toe!!'
  gameBoard.classList.remove('hidden')
  game.resetPlayerData()
}
