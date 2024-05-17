import React from "react";
import "../styles/style.css"

const Menu = () => {
    return(
        <div className="Menu">
            <div className="logo">
                <h1 id="xLogo">X</h1>
                <h1 id="oLogo">O</h1>
            </div>

            <div className="playerSelect">
                <div className="selectContainer">

                    <p id="pickMarkText">PICK PLAYER 1&apos;S MARK</p>


                    <div className="optionContainer">
                        <input className="option" type="radio" name="player" value="playerX" />
                        <label htmlFor="playerX">X</label>
                        <input className="option" type="radio" name="player" value="playerY" />
                        <label htmlFor="playerY">Y</label>
                    </div>

                </div>
                <button onClick={() => {console.log("VS CPU CLICKED")}} id="vsComputer" className="landingButton">NEW GAME VS CPU</button>
                <button onClick={() => {console.log("VS PLAYER CLICKED")}} id="vsPlayer" className="landingButton">NEW GAME VS PLAYER</button>
            </div>
        </div>
    )
}

export default Menu