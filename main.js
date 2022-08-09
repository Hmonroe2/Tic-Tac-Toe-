var mainGame = document.querySelector(".main-game")
var winnerSection = document.querySelector('main-game-box')
var whosTurn = document.querySelector(".whos")
var gameBoxes = document.querySelectorAll("td")
var gameBoard = document.querySelector(".main-game")
var player1WinCount = document.querySelector(".winCount1")
var player2WinCount = document.querySelector(".winCount2")
var winningRick = document.querySelector(".winning-rick")
var winningMorty = document.querySelector(".winning-morty")

mainGame.addEventListener('click', startGame)
gameBoard.classList.remove("hidden")


var player1 = new Player('Rick', `<img class="playerToken" src="assets/rick.jpeg" alt="">` )
var player2 = new Player('Morty', `<img class="playerToken" src="assets/morty.jpeg" alt="">`)
var game = new Game(player1, player2)

function displayGameParticipant(){

}

function startGame(event) {
  if (event.target.innerHTML.includes(`${player1.token}`) || event.target.innerHTML.includes(`${player2.token}`)) {
    return alert(`please click a vaild spot`)
  }
  if (game.turn === player1) {
    event.target.innerHTML = `${player1.token}`
    player1.currentPicks.push(parseInt(event.target.dataset.box))
    displayTurn(player2)
    game.determinePlayerTurn()
    game.determineWinner(player1)
    game.determineTie()
  } else {
    event.target.innerHTML = `${player2.token}`
    player2.currentPicks.push(parseInt(event.target.dataset.box))
    displayTurn(player1)
    game.determinePlayerTurn()
    game.determineWinner(player2)
    game.determineTie()
  }
  displayWinner()
}

function displayTurn(player) {
  whosTurn.innerText = `It is ${player.id} turn!`
}

function displayWinnerBanner(player){
  whosTurn.innerText = `${player.id} is the WINNER !!!`
}

function displayWinner() {
  if (game.winner === player1) {
    player1WinCount.innerText = `Wins:${player1.wins}`
    winningRick.classList.remove("hidden")
    whosTurn.innerText = `${player1.id} is the WINNER !!!`
    gameBoard.classList.add('hidden')
    game.turn = player2
    setTimeout(resetGame, 3000)

  }
  if (game.winner === player2) {
    player2WinCount.innerText = `Wins:${player2.wins}`
    winningMorty.classList.remove('hidden')
    whosTurn.innerText = `${player2.id} is the WINNER !!!`
    gameBoard.classList.add('hidden')
    game.turn = player1
    setTimeout(resetGame, 3000)
  }
  if (game.winner === `tie`) {
    whosTurn.innerText = "It is a tie!"
    setTimeout(resetGame, 2000)
  }
}

function resetGame() {
  for (var i = 0; i < gameBoxes.length; i++) {
    gameBoxes[i].innerText = " "
  }
  winningMorty.classList.add("hidden")
  winningRick.classList.add("hidden")
  whosTurn.innerText = 'Lets play Tic Tac Toe!!'
  gameBoard.classList.remove('hidden')
  game.resetPlayerData()
}
