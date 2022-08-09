class Game {
  constructor(player1, player2) {
    this.player1 = player1
    this.player2 = player2
    this.turn = player1
    this.boardCount = 0
    this.winner = null
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

  determinePlayerTurn() {
    this.boardCount++
    if (this.winner === null) {
      if (this.turn === player1) {
        return this.turn = player2
      } else {
        return this.turn = player1
      }
    }
  }

  determineWinner(player) {
    for (var i = 0; i < this.winningCombinations.length; i++) {
      if ((player.currentPicks.includes(this.winningCombinations[i][0])) &&
        (player.currentPicks.includes(this.winningCombinations[i][1])) &&
        (player.currentPicks.includes(this.winningCombinations[i][2]))) {
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
