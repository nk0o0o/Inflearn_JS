import { useState, useRef } from "react";
import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";
import './App.css'

function App() { // 함수 선언식
const idRef = useRef(1);
const [data, setData]= useState([])
/* {
    id:1,
    title:'썬레드라인',
    content:'말이 필요없는 영화...',
    emotion: 5,
    create_date:new Date().getTime()
} */

//생성
const onCreate=(title, content, emotion)=>{
    const create_date = new Date().getTime();
    const newReview ={
        title,
        content,
        emotion,
        create_date,
        id: idRef.current
    }
    idRef.current+=1;
    setData([newReview, ...data])//최신글이 먼저
}
//삭제
const onRemove =(targetId)=>{
    const newReviewList = data.filter((item)=>item.id!==targetId)
    setData(newReviewList)
}
//수정
const onEdit = (targetId, newContent) => {
    setData(data.map( list => list.id===targetId? {...list, content:newContent} : list ) )   
}

    return (
        <div className="App">
        <ReviewForm  onCreate={onCreate}/>{/* 입력했으면 나를 불러 */}
        <ReviewList reviewList={data} onRemove={onRemove} onEdit={onEdit}/>
        </div>
    );
}

export default App;
