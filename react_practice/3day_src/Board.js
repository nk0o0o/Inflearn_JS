import React from 'react'
import Dice from "./Dice";

export default function Board({color, name, gameHistory}) {

    //순서대로 배열에 있는 값을 출력 -- num = gameHistory[gameHistory.length]
     //배열을 객체로 잡을때 값이 비어있는 경우가 중요!!
    const num = gameHistory[gameHistory.length-1] || 1;
    //합계
    const sum = gameHistory.reduce( (a , b) => a + b, 0 );

    return (
        <div className='board App-board'>
            <h2 className='board-heading'>{name}</h2>
            <Dice color={color} num={num}/>
            <h2 className='board-heading'>총점 :</h2>
            <p>{sum}</p>   
            <div>
                <h2 className='board-heading'>기록</h2>
                {gameHistory.join(', ')} {/* 많이쓰는 메서드 */}
            </div>
        </div>
    )
}
