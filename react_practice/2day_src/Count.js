import /* React,  */{ useState } from 'react';

function Count() { // 함수 선언식
    //useState : 리액트가 만들어 놓은 함수
    /* contst [state(=초기값), setstate(=함수)] = useState(initialState) */
    //const usevalue = useState(0)
    //console.log(usevalue)
    
    const [count, setCount] = useState(0)
    let num = 0
    return (
      <div className="Counter">
        <h2>Counter</h2>
        <p className='number'>{count}</p>
        <button onClick={()=>{
            //num++
            //값이 자동으로 바뀌지 않음
            
            //바뀌라고 useState 사용
            /* setCount(count + 1)
                setCount(count + 1) 
                */
            // 반복해도 마지막 하나만 실행
            
            // 반복하려고 콜백 함수 사용
            // setCount((prev)=>{prev + 1})
            setCount(prev=>prev + 1)
            setCount(prev=>prev + 1)
            setCount(prev=>prev + 1)
            setCount(prev=>prev + 1)
            
        }}>Add++</button>
        {/* 콜백처리 ()=>{} 무슨일이 일어나면 일처리를 해!*/}
      </div>
    );
  }
  
  export default Count;