import React from 'react'

function BurgerButton({clicked, handleClick}) {
  return (
    <div>
        <div onClick={handleClick} className={`icon nav-icon-5 ${clicked ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
  )
}

export default BurgerButton