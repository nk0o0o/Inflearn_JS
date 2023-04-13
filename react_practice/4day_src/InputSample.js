import {useRef, useState} from 'react'

export default function InputSample() {
    const [inputs, SetInputs]=useState({
        userName:'',
        nickname:''
    });
    const nameInput = useRef()

    const {userName,nickname}=inputs;//구조분해할당
    const onChange = (e)=>{
        //e.target.value
        //e.target.name
        const {value, name}=e.target;
        SetInputs({...inputs,[name]:value})// []를 왜쓰는지 알아야함 뭐가 들어올지 모를때 사용
        //inputs의 name을 찾아가서 그 name에서 value를 가져와서 바꿔
        //...은 계속 들어오니깐
    }
    const onReset = (e)=>{
        nameInput.current.focus()//reset될때 이름input에 포커스이동
        SetInputs({userName:"",nickname:""})
    }
  return (
    <div>
        {/* 초기화 하려면 text로 제어해야하니깐 value에 text를 담아준다*/}
        <input 
            type="text" 
            placeholder="이름" 
            name='userName' 
            value={userName} 
            onChange={onChange}
            ref={nameInput}
        />
        <input 
            type="text" 
            placeholder="닉네임" 
            name='nickname' 
            value={nickname} 
            onChange={onChange}
        />
      <button onClick={onReset}>초기화</button> 
      <p><b>값:</b> {userName}({nickname})</p>
    </div>
  )
}
