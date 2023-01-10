import React, {useState} from 'react';
import Board from './Board';
import ScoreBoard from './ScoreBoard';

function TicTacToeApp() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [winningSquares, setWinningSquares] = useState([]);
    const [player, setPlayer] = useState('X');
    const [score, setScore] = useState({
        X: 0,
        O: 0
    });

    const winningPositions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];

    const reset = () => {
        setPlayer('X');
        setSquares(Array(9).fill(null));
        setWinningSquares([]);
    }

    const checkWinner = (newSquares) => {
        let i = 0;
        let someoneWon = false;
        let [a, b, c] = [0 , 0, 0];

        while (i < winningPositions.length && !someoneWon) {
            [a, b, c] = winningPositions[i];
            someoneWon = newSquares[a] && newSquares[a] === newSquares[b] && newSquares[a] === newSquares[c];
            i++;
        }

        if (someoneWon)
            endGame(newSquares[a], winningPositions[i-1]);
        else if (!newSquares.includes(null))
            endGame(null, Array.from(Array(10).keys()));
        else 
            setPlayer(player === 'X' ? 'O' : 'X');
    }

    const endGame = (winner, positions) => {
        setPlayer(null);
        if (winner !== null) {
            setScore({
                ...score,
                [winner]: score[winner] + 1
            })
        }
        setWinningSquares(positions);
        setTimeout(reset, 2000);
    }

    const handleClick = square => {
        let newSquares = [...squares];
        newSquares.splice(square, 1, player);
        setSquares(newSquares);
        checkWinner(newSquares);
    }
    
    return(
        <div className="flex flex-col justify-center items-center h-screen bg-sky-500">
            <ScoreBoard scoreO={score.O} scoreX={score.X} />
            <Board winningSquares={winningSquares} player={player} squares={squares} onClick={handleClick} />
        </div>
    );
}

export default TicTacToeApp;