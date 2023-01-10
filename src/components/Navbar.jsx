import React, { useState } from "react";
import BurgerButton from "./BurgerButton";
import { Link } from "react-router-dom";

function Navbar() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    if (window.innerWidth < 768) {
      setClicked(!clicked);
    }
  };

  return (
    <>
      <div className="flex bg-zinc-700 p-6 items-center justify-between">
        <h2 className="text-white font-normal text-2xl">
          Learning React<span className="font-bold"> Hooks</span>
        </h2>
        <div className={`z-50 absolute offScreen right-0 mr-auto ml-auto text-center ease-in-out md:static md:m-0 text-white ${clicked ? "w-full block top-1/3 left-0 mt-2" : ""}`}>
          <Link onClick={handleClick} to="/" className={`mr-4 text-xl md:text-base md:text-white md:inline ${clicked ? "text-3xl mt-4" : ""}`}>
            Home
          </Link>
          <Link onClick={handleClick} to="/todo-app" className={`mr-4 text-xl md:text-base md:text-white md:inline ${clicked ? "text-3xl mt-4" : ""}`}>
            To-Do list
          </Link>
          <Link onClick={handleClick} to="/weather-app" className={`mr-4 text-xl md:text-base md:text-white md:inline ${clicked ? "text-3xl mt-4" : ""}`}>
            Weather forecast
          </Link>
          <Link onClick={handleClick} to="/tictactoe-app" className={`mr-4 text-xl md:text-base md:text-white md:inline ${clicked ? "text-3xl mt-4" : ""}`}>
            Tic-Tac-Toe
          </Link>
        </div>
        <div className="md:hidden z-50">
          <BurgerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <div className={`responsive-background ${clicked ? "active" : ""}`}></div>
      </div>
    </>
  );
}

export default Navbar;
