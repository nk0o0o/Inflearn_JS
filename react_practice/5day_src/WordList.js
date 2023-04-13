import React, { useState } from 'react'


export default function WordList({words, onDeleteword}) {
    const [selectSubject,setSelectSubject] = useState(''); //변할때 마다 담아주는 저장소 selectbox 
    const [searchQuery,setSearchQuery] = useState(''); 
    //-------------------------------------------------------------
    //각 과목에 배열로 누적 시키기
    /* const sum = gameHistory.reduce( (a , b) => a + b, 0 ); */
    const wordsBySubject = words.reduce((acc , word) =>{
        acc[word.subject]=[...(acc[word.subject]||[]),word]//기존에 과목배열 있으면 더해주고, 없으면 새 배열 만들어라
        console.log('words.reduce=>', acc[word.subject]) 
        return acc;
    },{});

    //-------------------------------------------------------------
    //셀렉트 박스 만들기
    const subjects = Object.keys(wordsBySubject)//객체의 키값만 배열로 뽑기 --> 뽑은거를 셀렉트 옵션값에 넣으면 필터링할때 유용
    console.log('wordsBySubject',wordsBySubject)
    console.log('Object.key=>', subjects)

    //-------------------------------------------------------------
    //각 과목별로 필터링하기
    const fillterWords= words.filter(word =>{
        if(selectSubject && word.subject !== selectSubject){ //
            return false
        }
        if(searchQuery && !word.command.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase)){//소문자로 바꾸고 searchQuery에 들어 있냐없냐
            return false
        }
        return true//조건에 안걸리는 값 리턴 조건없으면 all
    })
    //-------------------------------------------------------------
    return (
        <>
            <div className="subject">
                <label>
                    과목선택:
                    <select
                        value={selectSubject} onChange={e=>setSelectSubject(e.target.value)} id="">
                        <option value="">All</option>
                        {subjects.map(subject=>(
                            <option key={subject} value={subject}>{subject}</option>
                        ))}
                    </select>
                </label>
            </div>

            {/* 검색 */}
            <div>
                <label></label>
                <input type="text" value={searchQuery} onChange={e=>setSearchQuery(e.target.value)}/>
            </div>

            {fillterWords.map((word, i)=>(
                <>
                {i===0?selectSubject?<h2>{word.subject}</h2>:<h2>{word.subject}</h2>:null}
                <div className='list' key={word.id}>
                    {/* <div className='subject'>{word.subject}</div> */}
                    <div className='command'>{word.command}</div>
                    <div className='def'>{word.definition}</div>
                    <button onClick={()=>onDeleteword(word.id)}>삭제</button>
                </div>
                </>
            ))}
        </>
    )
}
