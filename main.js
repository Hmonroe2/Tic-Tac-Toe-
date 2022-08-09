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


var player1 = new Player('Rick', `<img class="playerToken" src="assets/rick.jpeg" alt="cartoon mugshot of rick">`)
var player2 = new Player('Morty', `<img class="playerToken" src="assets/morty.jpeg" alt="cartoon picture of morty">`)
var game = new Game(player1, player2)


function startGame(event) {
  if (event.target.textContent === '' && event.target.dataset.box) {
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
  } else {
    return alert("Please select an empty spot!")
  }
}

function displayTurn(player) {
  whosTurn.innerText = `IT IS ${player.id}'s TURN!`
}

function displayWinnerBanner(player) {
  whosTurn.innerText = `${player.id} is the WINNER !!!`
}

function unhide(element) {
  element.classList.remove("hidden")
}

function hide(element) {
  element.classList.add("hidden")
}

function displayWinner() {
  if (game.winner === player1) {
    player1WinCount.innerText = `Wins:${player1.wins}`
    game.turn = player2
    displayWinnerBanner(player1)
    unhide(winningRick)
    hide(gameBoard)
    setTimeout(resetGame, 3000)

  }
  if (game.winner === player2) {
    player2WinCount.innerText = `Wins:${player2.wins}`
    game.turn = player1
    displayWinnerBanner(player2)
    unhide(winningMorty)
    hide(gameBoard)
    setTimeout(resetGame, 3000)
  }
  if (game.winner === `tie`) {
    whosTurn.innerText = "It is a draw!"
    setTimeout(resetGame, 2000)
  }
}

function resetGame() {
  for (var i = 0; i < gameBoxes.length; i++) {
    gameBoxes[i].innerText = ""
  }
  whosTurn.innerText = `It is ${game.turn.id}'s turn!`
  hide(winningRick)
  hide(winningMorty)
  unhide(gameBoard)
  game.resetPlayerData()
}
