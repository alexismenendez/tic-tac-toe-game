import React from "react"
import "../styles/style.css"

const Header = () => {
    return(
        <div className="header" id="header">
            <div className="headBtn" id="headerLogo">            
                <h1 id="xLogo">X</h1>
                <h1 id="oLogo">O</h1>
            </div>
            <div className="headBtn" id="playerTurn">Xs Turn</div>
            <div className="headBtn" id="resetContain">
                <button  id="reset">
                    <i className="fa-solid fa-arrow-rotate-left"></i>
                </button>
            </div>
        </div>
    )
}

export default Header