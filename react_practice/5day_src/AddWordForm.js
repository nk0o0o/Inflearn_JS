import {useRef, useState} from 'react'


export default function AddWordForm({onAddWord}) {
    const [inputWord, setInputWord] = useState({
        subject: "",
        command: "",
        definition: "",
    });
    const { subject, command, definition } = inputWord;
    const inputRef = useRef(null);//딱 정한 위치
    //-----------------------------------------------------
    //submit 이벤트가 발생했을때
    const handleSubmit = (e) => {
        e.preventDefault();//다른 이벤트 막기
        const newWord={ //새로운 단어 id만들어서 담기
            id:Date.now(),
            ...inputWord
        }
        onAddWord(newWord)//새단어 담아서 부모 호출하기
        setInputWord({ //인풋 초기화 하기
            subject:"",
            command:"",
            definition:""
        })
        inputRef.current.focus();//포커스 보내기
    }
    //-----------------------------------------------------
    //인풋 변할때
    const handleChange = (e) => {
        const { name, value } = e.target;//디스트럭쳐링
        setInputWord( ()=>({ ...inputWord, [name]: value }) );
        //...input풀고, name의 값을 value에 넣을거야 
    }

    return (
        <form onSubmit={handleSubmit}> 
            {/*handleSubmit 아무버튼클릭하거나 엔터 클릭하면 자동으로 submit현상 방지 */}
            <table>
                <thead>
                    <tr>
                        <th>과목</th>
                        <th>명령어</th>
                        <th>정의</th>
                        <th><button type='submit'>Add</button></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <input 
                                ref={inputRef}
                                type="text"
                                name="subject" 
                                value={subject}
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <input 
                                type="text" 
                                name="command" 
                                value={command}
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <input 
                                type="text" 
                                name="definition" 
                                value={definition}
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
    )
}
