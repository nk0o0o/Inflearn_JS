import { useState } from "react";
import Button from "./Button";
import Dice from "./Dice";
import "./App.css"

const randomNumber = () => {
  return Math.ceil(Math.random()*6)//1~6
}

function App() { // 함수 선언식
    //useState(Hook)은 컴포넌트 안에서만 유효
    //자식에서 부모로 값 못올리니깐 이벤트클릭하면 부모에서 이벤트 감지
    const [num, setNum]=useState(1)//초기값
    const [sum, setSum]=useState(0)//초기값
    const [gameHistory, setGameHistory] = useState([])//초기값 기록이니깐 배열로

    const handleRollClick = () => {
        const nextNum = randomNumber()
        setNum(nextNum)//값 찍어줘
        setSum(sum + nextNum);

        //아래는 안됨 번지수만 나타낼거라서
        // gameHistory.push(nextNum)
        // setGameHistory(gameHistory)
        //새로 배열을 만들어줘야함 (슈프레드 연산자)
        setGameHistory([...gameHistory, nextNum])
    }
    const handleClearClick = () => {
      setNum(1)//초기값으로 돌려줘
      setSum(0)
    }
  return (
    <div className="App">
        <div>
            <Button onClick={handleRollClick}>던지기</Button>
            {/* 이벤트 Button컴포넌트에 넘겨줘야함 */}
            {/* ()써서 바로 실행되게 하지않는다 */}
            <Button onClick={handleClearClick}>처음부터</Button>
        </div>
        <Dice color='blue' num={num}/>
        <div>
            <h2>총점 :</h2>
            <p>{sum}</p>   
            <h2>기록</h2>
            {/* {gameHistory} 번지값이라서 값이 업데이트 되지 않음 */}
            {gameHistory.join(', ')} {/* 많이쓰는 메서드 */}
        </div>
    </div>
  );
}

export default App;
