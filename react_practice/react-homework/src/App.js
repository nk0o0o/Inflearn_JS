import { useState } from "react";
//import Button from "./Button";
import Dice from "./Dice";
import "./App.css"

const randomNumber = () => {
  return Math.ceil(Math.random()*6)//1~6
}

function App() {
   /* const [num, setNum]=useState(1)
   const [sum, setSum]=useState(0)
   const [gameHistory, setGameHistory] = useState([])

   const handleRollClick = () => {
      const nextNum = randomNumber()
      setNum(nextNum)//값 찍어줘
      setSum(sum + nextNum);

      setGameHistory([...gameHistory, nextNum])
   }
   const handleClearClick = () => {
      setNum(1)
      setSum(0)
   } */
function DiceGame() {
   const [num, setNum]=useState(1)
   const [sum, setSum]=useState(0)
   const [gameHistory, setGameHistory] = useState([])
   
   this.handleRollClick = function(){
      const nextNum = randomNumber()
      setNum(nextNum)
      setSum(sum + nextNum);
      
      setGameHistory([...gameHistory, nextNum])
   }
   this.handleClearClick = function() {
      setNum(1)
      setSum(0)
   }
}
const DiceMine = new DiceGame();
const DiceOppnent = new DiceGame();


  return (
    <div className="App">
         <Dice color='blue' 
               num={DiceMine.num} 
               sum={DiceMine.sum} 
               gameHistory={DiceMine.gameHistory} 
               handleClearClick={DiceMine.handleClearClick} 
               handleRollClick={DiceMine.handleRollClick}
         />
         <Dice color='red' 
               num={DiceOppnent.num}
               sum={DiceOppnent.sum}
               gameHistory={DiceOppnent.gameHistory}
               handleClearClick={DiceOppnent.handleClearClick}
               handleRollClick={DiceOppnent.handleRollClick}
         />
    </div>
  );
}

export default App;
