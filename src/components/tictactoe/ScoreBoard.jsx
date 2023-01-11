import { useState, useEffect } from 'react'; 

function ScoreBoard({scoreX, scoreO}) {

    const [winner, setWinner] = useState(null);

    useEffect(() => {
        if (scoreX > 0)
            setWinner('X');
    }, [scoreX]);

    useEffect(() => {
        if (scoreO > 0)
            setWinner('O');
    }, [scoreO]);

    return(
        <div className="w-80 grid grid-flow-col mb-1.5">
            <div className={`text-white text-center text-3xl p-1.5 font-bold bg-red-500 ${winner == 'X' ? "text-green-500" : ""}`}>{scoreX}</div>
            <div className={`text-white text-center text-3xl p-1.5 font-bold bg-blue-500 ${winner == 'O' ? "text-green-500" : ""}`}>{scoreO}</div>
        </div>
    );
}

export default ScoreBoard;