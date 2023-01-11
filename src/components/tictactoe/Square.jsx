import React from 'react';

function Square({player, onClick, value, winner}) {

    const handleClick = () => {
        (player !== null && value === null) && onClick();
    }

    return(
        <div className={`w-28 h-28 m-1.5 ease-in ${(value === 'X') ? "bg-red-500 x-clip-path" : ((value === 'O') ? "bg-blue-500 rounded-full" : "bg-slate-300 square-clip-path rounded-none")} ${winner ? "bg-green-700" : ""}`} onClick={() => handleClick()}>
        </div>
    );
}

export default Square;