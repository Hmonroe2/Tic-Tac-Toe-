class Game {
  constructor(player1, player2) {
    this.player1 = player1
    this.player2 = player2
    this.turn = player2
    this.boardCount = 0
    this.winner = null
    this.currentBoard = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    this.winningCombinations = [
      [1, 2, 3],
      [1, 5, 9],
      [1, 4, 7],
      [2, 5, 8],
      [3, 5, 7],
      [3, 6, 9],
      [4, 5, 6],
      [7, 8, 9]
    ]
  }



  //
  // determinePlayerMoves() {
  //   var playerMoves = []
  //   playerMoves.push(this.player1.currentPicks)
  //   checkCurrentBoard()
  //   return playerMoves
  // }
  //
  // checkCurrentBoard() {
  //   for (var i = 0; i < this.currentBoard.length; i++) {
  //     if (this.turn.currentPicks.includes(this.currentBoard[i])) {
  //       this.currentBoard.splice(i, 1)
  //       this.boardCount++
  //     }
  //   }
  // }

  determinePlayerTurn() {
    this.boardCount++
    if (this.winner === null) {
      if (this.turn === player1) {
        return this.turn = player2
        console.log(`this is player 2`)
      } else {
        return this.turn = player1
        console.log(`this is player 1`)
      }
    }
  }

  determineWinner(player) {
    for (var i = 0; i < this.winningCombinations.length; i++) {
      if ((player.currentPicks.includes(this.winningCombinations[i][0])) &&
        (player.currentPicks.includes(this.winningCombinations[i][1])) &&
        (player.currentPicks.includes(this.winningCombinations[i][2]))) {
        console.log(`${player.id} is winner`)
        this.winner = player
        player.wins++
      }
    }
  }

  resetPlayerData() {
    if (this.boardCount === 9 || this.winner === player1 || this.winner === player2) {
      this.winner = null
      player1.currentPicks = []
      player2.currentPicks = []
      this.boardCount = 0
    }
  }
  determineTie() {
    if (this.boardCount === 9 && this.winner === null) {
      this.winner = "tie"
    }
  }
}
