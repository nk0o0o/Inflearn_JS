import React from 'react'
import{FaTrash} from 'react-icons/fa'
import styles from './TodoItem.module.css'


export default function TodoItem({todo, onRemove, onUpdate}) {
    const {id, text, status} = todo;
    //----------------------------------------------------
    const handleChange = (e)=>{
        const status = e.target.checked? 'completed' : 'active';
        onUpdate({...todo, status})
    }
    const handleRemove = ()=>{
        onRemove(todo)
    }
    //----------------------------------------------------
  return (
    <>
        <li className={styles.todo}>
            <input type="checkbox"
                id={id} 
                className={styles.checkbox}
                onChange={handleChange} 
                checked={ status =='completed'}/>
            <label 
                htmlFor={id}
                className={styles.text}
            >{text}
            </label>
            <span className={styles.icon}>
                <button 
                    onClick={handleRemove}
                    className={styles.button}
                ><FaTrash/></button>
            </span>
            {/* <button onClick={onUpdate}>수정하기</button> */}
        </li>
    </>
  )
}
