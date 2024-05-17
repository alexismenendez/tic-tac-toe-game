import React from "react"
import "../styles/style.css"
import Header from "./Header"

const GameBoard = ({ handleButtonClick }) => {
    return(
        <div>
            <Header handleButtonClick={handleButtonClick}/>
            <div className="board" id="board">
                <div className="cell" data-cell>
                    <p className="xMark">X</p>
                </div>
                <div className="cell" data-cell>
                    <p className="oMark">O</p>
                </div>
                <div className="cell" data-cell></div>
                <div className="cell" data-cell></div>
                <div className="cell" data-cell></div>
                <div className="cell" data-cell></div>
                <div className="cell" data-cell></div>
                <div className="cell" data-cell></div>
                <div className="cell" data-cell></div>
            </div>
        </div>
    )
}

export default GameBoard