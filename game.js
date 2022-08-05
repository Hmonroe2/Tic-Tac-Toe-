class Game {
  constructor(player1, player2) {
    this.player1 = player1
    this.player2 = player2
    this.turn = player1
    this.winCount = 0
    this.winner = undefined
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

  determinePlayerTurn() {
    if (this.winner === undefined) {
      if (this.turn === player1) {
        this.turn = player2
      } else
      if (this.turn === player2) {
        this.turn = player1
      }
    }
  }
  
  determineWinner() {
    for (var i = 0; i < this.winningCombinations.length; i++) {
      if ((player1.currentPicks.includes(this.winningCombinations[i][0])) &&
        (player1.currentPicks.includes(this.winningCombinations[i][1])) &&
        (player1.currentPicks.includes(this.winningCombinations[i][2]))) {
        console.log(`player1 is winner`)
        this.winner = player1
        player1.wins++
      }
      if ((player2.currentPicks.includes(this.winningCombinations[i][0])) &&
        (player2.currentPicks.includes(this.winningCombinations[i][1])) &&
        (player2.currentPicks.includes(this.winningCombinations[i][2]))) {
        console.log(`player2 is winner`)
        this.winner = player2
        player2.wins++
      }
    }
  }

  resetPlayerData() {
    this.winner = undefined
    this.turn = player1
    player1.currentPicks = []
    player2.currentPicks = []
  }
}
