<template>
    <div class="container-sm mt-3">
      <h2>할일 목록</h2>
      <input 
        type="text" 
        class="form-control flex-grow-1" 
        placeholder="Search" 
        v-model="searchText"
      />
      <!-- -------------------------------------------------------- -->
      <TodoForm @add-todo="addTodo" />
      <div style="color:red">{{ error }}</div>
      <!-- -------------------------------------------------------- -->
      <div v-if="!filteredTodos.length && searchText">조건에 만족하는 값이 없습니다.</div>
  
      <TodoList 
        :todos="filteredTodos" 
        @toggle-todo="toggleTodo" 
        @delete-todo="deleteTodo" 
      />
  
    </div>
  </template>
  
  <script>
  import { ref, computed } from 'vue';
  import TodoForm from '@/TodoForm.vue';
  import TodoList from '@/TodoList.vue';
  import axios from 'axios';
  
  export default {
    components: {
      TodoForm,
      TodoList
    },
    setup() {
      const todos = ref([])
      // { id: 1, subject: 'react 정리' },
      // { id: 2, subject: 'vue 정리' }
      //-----------------------------------
      const searchText = ref('')
      const error = ref('')    
      /* const addTodo = (todo) => {//add-todo로 넘긴값 todo로 받음
        error.value = '';  
        axios.post('http://localhost:3000/todos', {//위치, 작업
          subject:todo.subject,
          completed:todo.completed
        }).then(res =>{ //ok사인떨어지면
          todos.value.push(res.data)
        }).catch(err=>[
          error.value = err
        ])
      } */
      
      //Async Await
      const addTodo = async(todo) => {
        error.value = '';
        try{
          const res = await axios.post('http://localhost:3000/todos',{
            subject:todo.subject,
            completed:todo.completed
          })
          todos.value.push(res.data)      
        }catch(err){
          error.value = err
        }
        //getTodos()
      }
  
      const getTodos = async(params)=>{
        try{
          const res = await axios.get('http://localhost:3000/todos');//넘어오는 값없음 접속만
          todos.value = res.data; //뿌려주는 값에 받아온 데이터 넣기
          
        }catch(err){
          error.value = err
        }
      }
      getTodos()


      const deleteTodo = async(idx) => {
        
        error.value='';
        const id = todos.value[idx].id
        try{
          const res = await axios.delete('http://localhost:3000/todos/' + id)
          todos.value.splice(idx, 1)
        }catch(err){
          error.value = err
        }
      }
  
      const toggleTodo = async(idx) => {
        error.value='';
        const id = todos.value[idx].id
        try{
          await axios.patch('http://localhost:3000/todos/' + id,{
            completed: !todos.value[idx].completed
          })
        }catch(err){
          error.value = err
        }
        todos.value[idx].completed = !todos.value[idx].completed;
      }
  

      const filteredTodos = computed(() => {
        if (searchText.value) {
          return todos.value.filter(todo => {
            return todo.subject.includes(searchText.value)
          })
        } else {
          return todos.value
        }
      })
      
      //-----------------------------------
      return {
        todos,
        addTodo,
        deleteTodo,
        toggleTodo,
        searchText,
        filteredTodos,
        error
      }//return
  
    }//setup
  }
  </script>
  
  <style></style>