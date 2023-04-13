import React from 'react'
import "./Buttons.css";

export default function Button({children, onClick, color='', className=''}) { 
  //변수=''은 초기값설정 넘어오지 않는값
  const btnClassName = `btn ${className} ${color}`; //클래스명을 한번에 담아서 넘기기
  return (
    <button onClick={onClick} className={btnClassName}>
      {children}
    </button>
  )
}
