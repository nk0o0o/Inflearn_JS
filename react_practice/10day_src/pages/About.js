import React from "react";
import { useLocation, useSearchParams } from "react-router-dom";

const About = () => {
    //useLocation
    const location = useLocation();
    console.log('location 위치 : ', location);//.search, .hash, .state....

    //useSearchParams
    const [searchParams, setSearchParams] = useSearchParams();
    console.log(useSearchParams)
    const detail = searchParams.get('detail') //get을 이용해서 값을 가져오기 (지금은 없이 테스트하고 set으로 업뎃할거임)
    const mode = searchParams.get('mode')

    const onToggleDetail =()=>{
        setSearchParams({ mode, detail: detail === 'true' ? false : true }); //setP로 값 변경하기
    }
    const onIncreaseMode =()=>{
        const nextMode = mode === null ? 1 : parseInt(mode) + 1;
        //다 문자로 받아짐, parseInt로정수화시켜야함✨✨✨✨
        setSearchParams({ mode: nextMode, detail });
    }

    return (
      <div>
        <h1>소개</h1>
        <p>리액트 라우터를 사용해 보는 프로젝트입니다.</p>
        <p>쿼리스트링 : {location.search}</p>

        <p>detail: {detail}</p> 
        <p>mode: {mode}</p>
        <button onClick={onToggleDetail}>Toggle detail</button>
        <button onClick={onIncreaseMode}>mode + 1</button>
      </div>
    );
  };
  
  export default About;