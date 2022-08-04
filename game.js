class Game{
  constructor(player1, player2){
    this.player1 = player1
    this. player2 = player2
    this.turn = player1
    this.winCount = 0
    this.winner = undefined
    this.currentBoard = [1,2,3,4,5,6,7,8,9]
    this.winningCombinations = [
    ]

  }
}
