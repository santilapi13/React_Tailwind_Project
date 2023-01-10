function ScoreBoard({scoreX, scoreO}) {
    return(
        <div className="w-80 grid grid-flow-col mb-1.5">
            <div className="text-white text-center text-3xl p-1.5 font-bold bg-red-500">{scoreX}</div>
            <div className="text-white text-center text-3xl p-1.5 font-bold bg-blue-500">{scoreO}</div>
        </div>
    );
}

export default ScoreBoard;