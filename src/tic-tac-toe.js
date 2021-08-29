class TicTacToe {
    constructor() {
        this.currentPlayer = 'x';
        this.winner = null;
        this.fieldSize = 3;
        this.field = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];
        
   }

    getCurrentPlayerSymbol() {
        return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {

        if (this.getFieldValue(rowIndex, columnIndex) !== null) {return}

        this.field[rowIndex][columnIndex] = this.currentPlayer;
        
        //check current row
        let hereTheWinner = true;

        for (let i = 0; i < this.fieldSize; i++) {
            if (this.getFieldValue(rowIndex, i) !== this.currentPlayer) { hereTheWinner = false }
        }

        if (hereTheWinner === true) { this.winner = this.currentPlayer }
        else {//check current column
            let hereTheWinner = true;
            for (let i = 0; i < this.fieldSize; i++) {
                if (this.getFieldValue(i, columnIndex) !== this.currentPlayer) { hereTheWinner = false }
            }

            if (hereTheWinner === true) { this.winner = this.currentPlayer }

            // check diagonals
            else if (rowIndex === columnIndex
                || columnIndex === this.fieldSize - 1 && rowIndex === 0
                || rowIndex === this.fieldSize - 1 && columnIndex === 0) {

                let hereTheWinner = true;

                for (let i = 0; i < this.fieldSize; i++) {
                    if (this.getFieldValue(i, i) !== this.currentPlayer) { hereTheWinner = false }
                }
                if (hereTheWinner === true) { this.winner = this.currentPlayer }
                else {
                    let hereTheWinner = true;
                    if (this.getFieldValue(1, 1) !== this.currentPlayer
                        || this.getFieldValue(this.fieldSize - 1, 0) !== this.currentPlayer
                        || this.getFieldValue(0, this.fieldSize - 1) !== this.currentPlayer) { hereTheWinner = false }

                    if (hereTheWinner === true) { this.winner = this.currentPlayer }
                }


            }

        }
        this.currentPlayer = this.currentPlayer === 'x' ? 'o' : 'x';
    }

    isFinished() {
      if (this.isDraw() || this.getWinner() !== null) {
            return true;
        }
        return false;
    }

    getWinner() {
        return this.winner;
    }

    noMoreTurns() {
        for (let i = 0; i < this.fieldSize; i++) {
            if (this.field[i].includes(null)) { return false }
        }
        return true;
    }

    isDraw() {
        if (this.noMoreTurns() && this.winner === null) { return true }
        return false
    }

    getFieldValue(rowIndex, colIndex) {
        if (rowIndex > this.fieldSize || colIndex > this.fieldSize) {
            return null
        }
        else { return this.field[rowIndex][colIndex] }
    }
}

module.exports = TicTacToe;
