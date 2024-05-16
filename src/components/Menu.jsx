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
                {/* <btn type="submit" id="vsComputer" class="landingButton">NEW GAME (VS CPU)</btn>
                <btn type="submit" id="vsPlayer" class="landingButton">NEW GAME (VS PLAYER)</btn> */}
            </div>
        </div>
    )
}

export default Menu