import React from 'react';
import Square from './Square';

function Board({squares, onClick, player, winningSquares}) {

    const createSquares = (values) => (
        values.map(value => (
            <Square
                //winner={winningSquares.includes(value)} // TODO: Winning animation
                player={player}
                onClick={() => onClick(value)} 
                value={squares[value]}
                key={`square_${value}`}
            />
        ))
    )

    return  (
        <div className="flex flex-col bg-zinc-700">
            <div className="flex">
                {createSquares([0,1,2])}
            </div>
            <div className="flex">
                {createSquares([3,4,5])}
            </div>
            <div className="flex">
                {createSquares([6,7,8])}
            </div>
        </div>
    );
}

export default Board;