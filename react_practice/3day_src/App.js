import { useState } from "react";
import Button from "./Button";
import Board from "./Board";
import "./App.css"

const randomNumber = () => {
  return Math.ceil(Math.random()*6)
}

function App() { 
  const [gameHistory, setGameHistory] = useState([])
  const [gameYourHistory, setGameYourHistory] = useState([])

  const handleRollClick = () => {
      const nextNum = randomNumber();
      const nextYourNum = randomNumber();

      setGameHistory([...gameHistory, nextNum]);
      setGameYourHistory([...gameYourHistory, nextYourNum]);
  }
  const handleClearClick = () => {
    setGameHistory([]);
    setGameYourHistory([]);
  }
  return (
    <div className="App">
      <div>
        <Button onClick={handleRollClick} color='blue' className='App-button'>던지기</Button>
        <Button onClick={handleClearClick} color='red' className='App-button'>처음부터</Button>
      </div>       
      <div className="App-boards">
        <Board 
          color="blue"
          name="나" 
          gameHistory={gameHistory}
        />
        <Board 
          color="red" 
          name="상대" 
          gameHistory={gameYourHistory}
        />
      </div>
    </div>
  );
}

export default App;
