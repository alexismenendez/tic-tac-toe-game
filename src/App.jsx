import React, { useState } from 'react'
import './App.css'
import "./styles/style.css"
import Header from "./components/Header"
import GameBoard from './components/GameBoard'
import Menu from "./components/Menu"
// import WinLoss from "./components/WinLoss"

const App = () => {

  const [activeComponent, setActiveComponent] = useState("Menu");

  const handleButtonClick = (component) => {
    setActiveComponent(component)
  }

  return (
    <div className='App'>
      {activeComponent === "Menu" && <Menu handleButtonClick={handleButtonClick} />}
      {activeComponent === "GameBoard" && <GameBoard handleButtonClick={handleButtonClick}/>}
    </div>
  )
}

export default App;