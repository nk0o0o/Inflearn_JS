import React, { useRef, useState } from 'react';

export default function ReviewItem({title,content,emotion,create_date, onRemove, id, onEdit}){
    const [isEdit, setIsEdit]=useState(false);//true 수정중인상태
    const [localContent, setLocalContent]= useState(content)
    const localContentRef = useRef();

    const handleRemove =()=>{
        if(window.confirm(`${id}번째 글을 삭제하시겠습니까?`)){
            onRemove(id)
        }
    }
    //수정
    const toggleEdit=()=>{
        setIsEdit(!isEdit)//현재 isEdit의 반대를 계속 넣음
    }
    //수정취소
    const handleQuitEdit =()=>{
        if(window.confirm(`${id}번째 글 수정취소?`)){            
            setIsEdit(false) //나 안할꺼야 다시 삭제, 수정버튼있는 형식으로
        }
    }
    //수정완료
    const handleEdit =()=>{
        if(localContent.lenght < 5){
            alert('리뷰내용은 5글자 이상 입력하세요');
            localContentRef.current.focus();
            return;
        }
        if(window.confirm(`${id}번째 글 수정완료?`)){
            onEdit(id, localContent)//App.js에서 onEdit(targetId, newContent)
            toggleEdit()//false로 바꿔주기
        }
    }
    
    return(
        <div className='ReviewItem'>
            <div className='info'>
                <span>영화제목 : {title}</span> | <span className="emotion">평점{emotion}</span>
            </div>
            <p className='date'>작성 날짜: {new Date(create_date).toLocaleDateString()}</p>
            <p className='content'>리뷰 내용: {
                isEdit?(
                    //수정완료 눌렀을때 : 변한값 localContent, setLocalContent에 담기, 담은 변하는값 보내기
                    <textarea onChange={(e)=>setLocalContent(e.target.value)} value={localContent} ref={localContentRef}
                    ></textarea>
                ):(content)//수정취소눌렀을때 기존 내용 고대로
            
            }</p>
            
            {
                isEdit?(
                    <>
                        <button onClick={handleQuitEdit}>수정취소</button>
                        <button onClick={handleEdit}>수정완료</button>
                    </>
                ):(
                    <>
                        <button className="edit" onClick={toggleEdit}>수정</button>{/* 수정완료/취소 토글로 상태확인*/}
                        <button className="remove" onClick={handleRemove}>삭제</button>
                    </>

                )
            }
        </div>
    )
}