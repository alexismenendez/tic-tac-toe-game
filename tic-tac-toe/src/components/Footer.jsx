import React from "react"
import "../styles/style.css"

const Footer = () => {
    return(
        <div className="scoreBoard" id="scoreBoard">
            <div className="score" id="xScore">
                <p>X WON</p>
                <p id="xScoreText"></p>
            </div>
            <div className="score" id="ties">
                <p>TIE</p>
                <p id="tiesText"></p>
            </div>
            <div className="score" id="oScore">
                <p>O WON</p>
                <p id="oScoreText"></p>
            </div>
        </div>
    )
}

export default Footer