import {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './AddTodo.module.css'

export default function AddTodo({onAdd}) {
    const [text, setText] = useState('');
    
    const handleChange = (e) => {
        e.preventDefault()
        setText(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if(text.trim().length===0){
            return
        }
        onAdd({id:uuidv4(),text,status:'active'})
        setText('')
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className={styles.form}>
                <input type='text'
                className={styles.input}
                value={text}
                placeholder='할일 추가'
                onChange={handleChange}
                />
                <button className={styles.button}>추가</button>
            </form>
        </div>
    );
}


/* import {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';//as 뒤는 가독성을위한 이름짓기 - id 자동 생성

export default function AddTodo({onAdd}) {
    const [text, setText] = useState('')
    const handleChange =(e)=>{
        e.preventDefault()
        setText(e.target.value)
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(text)
        if(text.trim().length === 0){
            return
        }
        onAdd({id:uuidv4(), text, status:'active'})// == text.id, text.text...생략한거
        setText('')
    }
    return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type='text'
                    value={text}
                    onChange={handleChange}
                    placeholder='할일 추가'/>
            <button onClick={setText}>추가</button>             이걸왜했지?
        </form>
    </div>
    )
}
    */