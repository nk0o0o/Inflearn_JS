import React, { useState, useRef } from 'react'

function ReviewForm({onCreate}) {
    const titleInputRef = useRef();
    const contentInputRef = useRef();
    console.log('review form 호출')
    const [state, setState] = useState({
        title:'',
        content:'',
        emotion:1 //1~5
    })
    const {title, content, emotion}= state;// state.title 이렇게 하기 귀찮으니깐 디스트럭쳐링하기
    //--------------------------------------------------
    const handlechangeState = (e) => {
        const {name, value} = e.target;
        setState({...state, [name]:value})
    }
    const handleSubmit = (e) => {
        if(title.length < 1){
            alert('제목은 1글자 이상 입력하세요')
            titleInputRef.current.focus();
            return;
        }
        if(content.length < 5){
            alert('리뷰내용은 5글자 이상 입력하세요')
            contentInputRef.current.focus();
            return;
        }
        onCreate(title, content, emotion)
        setState({
            title:'',
            content:'',
            emotion:1 
        })
        alert('저장완료')
    }
    //--------------------------------------------------
    return (
        <div className='ReviewForm'>
            <h1>리뷰쓰기</h1>
            <div className="inputBox">
                <input ref={titleInputRef}
                    type="text"
                    name="title"
                    value={title}
                    onChange={handlechangeState}
                />
            </div>
            <div className="textareaBox">
                <textarea ref={contentInputRef}
                    name="content" 
                    value={content} 
                    onChange={handlechangeState}
                ></textarea>
            </div>
            <div className="scoreBox">
                <span>리뷰점수 : </span>
                <select name="emotion"
                    value={emotion}
                    onChange={handlechangeState}
                >
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                </select>
                <button type='submit' onClick={handleSubmit}>리뷰저장</button>
            </div>
        </div>
    )
}


export default React.memo(ReviewForm);