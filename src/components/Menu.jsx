import React, { useState } from "react";
import "../styles/style.css"

const Menu = ({ handleButtonClick }) => {
    //Sets default choice to X
    const [userChoice, setUserChoice] = useState("X")

    //
    const handleChoiceSelection = (choice) => {
        setUserChoice(choice)
    }

    //Changes the color of the X and O selection background upon user click
    const getButtonColor = (userChoice, option) => {
        if (userChoice === option) {
            return option === 'X' ? "#FD8B49" : "#78BCE3";
        } else {
            return "#2C6E49";
        }
    }

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
                        <label onClick={() => handleChoiceSelection("X")} style={{ backgroundColor: getButtonColor(userChoice, 'X') }} htmlFor="playerX">X</label>
                        <input className="option" type="radio" name="player" value="playerY" />
                        <label onClick={() => handleChoiceSelection("O")} style={{ backgroundColor: getButtonColor(userChoice, 'O') }} htmlFor="playerO">O</label>
                    </div>

                </div>
                <button onClick={() => handleButtonClick("GameBoard")} id="vsComputer" className="landingButton">NEW GAME VS CPU</button>
                <button onClick={() => handleButtonClick("GameBoard")} id="vsPlayer" className="landingButton">NEW GAME VS PLAYER</button>
            </div>
        </div>
    )
}

export default Menu