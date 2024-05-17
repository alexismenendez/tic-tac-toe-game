import React from "react";
import "../styles/style.css"

const Menu = ({ handleButtonClick }) => {
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
                        <label onClick={() => {console.log("xClicked")}} htmlFor="playerX">X</label>
                        <input className="option" type="radio" name="player" value="playerY" />
                        <label onClick={() => {console.log("yClicked")}} htmlFor="playerY">Y</label>
                    </div>

                </div>
                <button onClick={() => handleButtonClick("GameBoard")} id="vsComputer" className="landingButton">NEW GAME VS CPU</button>
                <button onClick={() => handleButtonClick("GameBoard")} id="vsPlayer" className="landingButton">NEW GAME VS PLAYER</button>
            </div>
        </div>
    )
}

export default Menu