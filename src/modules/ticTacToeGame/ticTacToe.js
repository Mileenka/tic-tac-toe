import gameStatus from './gameStatus.js';
import SquareField from './squareField.js';
import winningMessage from '../../components/winningMessage.js';
import playAgainListener from '../../events/playAgainListener.js';
import dom from '../../dom.js';

class TicTacToe {
    squareFields = Array.from({ length: 3 }, () => Array.from({ length: 3 }, () => new SquareField()));

    checkWin() {
        const winLines = [
            [[0, 0], [0, 1], [0, 2]],
            [[1, 0], [1, 1], [1, 2]],
            [[2, 0], [2, 1], [2, 2]],
            [[0, 0], [1, 0], [2, 0]],
            [[0, 1], [1, 1], [2, 1]],
            [[0, 2], [1, 2], [2, 2]],
            [[0, 0], [1, 1], [2, 2]],
            [[2, 0], [1, 1], [0, 2]],
        ];

        for (const line of winLines) {
            const [a, b, c] = line.map(([x, y]) => this.squareFields[x][y].sign);
            if (a && a === b && a === c) {
                gameStatus.gameInProgress = false;
                gameStatus.winner = a.toUpperCase();
                this.afterWin('Congratulations! Winner');
                break;
            } 

            setTimeout(() => {
               if (gameStatus.numOfFieldsUsed === 9 && gameStatus.gameInProgress === true) {
                  this.afterWin('Draw ! Try again !');
                  gameStatus.gameInProgress = false;
               }
            }, 0)
        }
    }

    afterWin(msg) {
        document.getElementById('game-frame').append(winningMessage(msg, gameStatus.winner));
        dom.repeatGame.classList.remove('displayNone');
        playAgainListener();
    }

    playAgain() {
        this.squareFields.forEach((row) => row.forEach((field) => field.restart()));
    }
}

export default TicTacToe;
