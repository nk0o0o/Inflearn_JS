import { useState, useRef ,useEffect, useMemo, useCallback} from "react";
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
    //-----------------------------------------------
    const getData= async()=>{
        const res = await fetch('https://jsonplaceholder.typicode.com/comments')
        //async , await 써주면 콜백 필요없음
        .then(res => res.json())

        const initData = res.slice(0,20).map(list=>{
        return{
            title:list.email,
            content: list.body,
            emotion:Math.floor(Math.random()*5)+1,
            create_date: new Date().getTime()+1,
            id: idRef.current++
        }
        })
        setData(initData)
    }
    useEffect(() => {
        getData()
    }, []);
    //-----------------------------------------------
    //생성
    const onCreate= useCallback((title, content, emotion)=>{
        const create_date = new Date().getTime();
        const newReview ={
            title,
            content,
            emotion,
            create_date,
            id: idRef.current
        }
        idRef.current+=1;
        setData(data=>[newReview, ...data])// 이전과 새로 추가하는 거 비교해서 다 읽기 (함수형 업데이트)
    },[]) //객체를 리랜더링 시킬때는 콜백문으로 리턴 시켜줘야함 (안하면 마지막꺼만 실행,, 이전불러온거 사라짐)
    //삭제
    const onRemove =useCallback(
        (targetId)=>{
            /* const newReviewList = data.filter((item)=>item.id!==targetId)
            setData(newReviewList) */
            setData(data =>data.filter((item)=>item.id!==targetId))
        },[]
    )
    //수정
    const onEdit = useCallback(
        (targetId, newContent) => {
            setData(data=>data.map( list => list.id===targetId? {...list, content: newContent} : list ) )   
        },[]
    )

    //리뷰분석함수
    const getReviewAnalysis = useMemo( // 함수가 아닌 value 로 리턴됨
        ()=>{
            if(data.length === 0){
                return{
                    //초기값 설정
                    goodCount : 0, 
                    badCount : 0,
                    goodRatio: 0
                }
            }
            console.log(`Review 분석`)
            const goodCount = data.filter(list => list.emotion>=3).length;
            const badCount = data.length - goodCount;
            const goodRatio = (goodCount/data.length) * 100;
            
            return{goodCount,badCount,goodRatio}
        }, [data.length]
    );//data.length가 달라질때만 

    //const {goodCount, badCount, goodRatio} = getReviewAnalysis() //distructuring
    const {goodCount, badCount, goodRatio} = getReviewAnalysis //useMemo로 감싸면 값의 재사용이므로 함수가 아닌 값이 리턴됨 따라서 () 쓰면 안됨

    return (
        <div className="App">
        <ReviewForm  onCreate={onCreate}/>{/* 입력했으면 나를 불러 */}
        <div>전체 Review : {data.length}</div>
        <div>좋은 Review 갯수: {goodCount}</div>
        <div>나쁜 Review 갯수: {badCount}</div>
        <div>좋은 Review 비율: {goodRatio}</div>
        <ReviewList reviewList={data} onRemove={onRemove} onEdit={onEdit}/>
        </div>
    );
}

export default App;
