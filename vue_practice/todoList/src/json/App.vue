<template>
  <div class="container-sm">
    <h2>Rest Api</h2>

    <form @submit.prevent="createTodo" class="d-flex mb-3">
      <label for='subject'>할일 : </label>
      <input id="subject" v-model="newTodo.subject" type="text" class="flex-grow-1">
      <button type="submit">추가</button>
    </form>
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Subject</th>
          <th>completed</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="todo in todos" :key="todo.id">
          <td>{{ todo.id }}</td>
          <td>{{ todo.subject }}</td>
          <td>{{ todo.completed ? 'Done' : 'Todo' }}</td>
          <td>
            <button @click="updateTodo(todo)">{{ buttonLabel(todo.completed).value }}</button>
            <button @click="deleteTodo(todo.id)">Delete</button>
          </td>

        </tr>

      </tbody>
    </table>
  </div>
</template>
<script>
import { ref, onMounted, computed } from 'vue';
import axios from 'axios'
export default {
  setup() {
    const todos = ref([])
    const newTodo = ref({ subject: '', completed: false })


    const buttonLabel = (completed) => {
      return computed(()=>(completed ? 'Done' : 'Todo')) 
    }
    // --------------------------------------------------
    const createTodo = async () => {
      const res = await axios.post('http://localhost:5001/todos', newTodo.value) 
       
        todos.value.push(res.data);
        newTodo.value.subject = ''
      }
    // --------------------------------------------------
    const fetchTodos = async() => {
      const res = await axios.get('http://localhost:5001/todos')
      todos.value=res.data
  
    }
    
    // --------------------------------------------------
    const deleteTodo = async(id) => {
    await axios.delete(`http://localhost:5001/todos/${id}`);
    todos.value=todos.value.filter(todo=>todo.id!==id)
    }
    
    // --------------------------------------------------
    const updateTodo = async(todo) => {
      todo.completed=!todo.completed
      await axios.patch(`http://localhost:5001/todos/${todo.id}`,{       
        completed:todo.completed ,
      })
    }
    
    // --------------------------------------------------
    onMounted(fetchTodos)
    return {
      todos, newTodo,
      buttonLabel,
      createTodo,
      deleteTodo,
      updateTodo
    }
  }
}
</script>
<style>
table {
  border-collapse: collapse;
  width: 100%;
}

th,
td {
  border: 1px solid #ccc;
  padding: 8px;

}

th {
  background-color: #f2f2f2;
}
</style>