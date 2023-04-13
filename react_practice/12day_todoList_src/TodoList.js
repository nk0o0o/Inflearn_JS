import {useState} from 'react'
import AddTodo from './AddTodo'
import TodoItem from './TodoItem'
import styles from './TodoList.module.css'

export default function TodoList({filter}) {
    const [todos, setTodos] = useState([
        {id:'1', text : '물먹기', status:'active'},
        {id:'2', text : 'react 공부', status:'active'}
    ])
    //-----------------------------------------------------------
    const filterd = getFilterItems(todos, filter)
    
    //-----------------------------------------------------------
    const handleAdd = (todo)=>{
        setTodos([...todos, todo])
    }
    //-----------------------------------------------------------
    const handleUpdate = updateItem =>{
        setTodos(todos.map((item)=>
            item.id === updateItem.id?updateItem:item
        ))
    }
    //-----------------------------------------------------------
    const handleRemove = (removeItem)=>{
        setTodos(todos.filter((item) => item.id !== removeItem.id ))
    }
    //-----------------------------------------------------------
  return (
    <div className={styles.container}>
        <ul className={styles.list}>
            {filterd.map((item)=>(
                <TodoItem key={item.id} 
                    todo={item}
                    onUpdate={handleUpdate}
                    onRemove={handleRemove}
                />
            ))}
        </ul>
        <AddTodo onAdd={handleAdd}/>
    </div>
  )
}

const getFilterItems = (todos, filter)=>{
    if(filter==='all'){
        return todos;
    }
    return todos.filter(todo=>todo.status === filter)
}