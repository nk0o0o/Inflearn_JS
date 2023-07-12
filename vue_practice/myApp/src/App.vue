<template>
  <div class="container-sm">
    <h2>할일 목록</h2>
    <input type="text" class="form-control flex-grow-1" placeholder="Search" v-model="searchText">

    <TodoForm @add-todo="addTodo"/>   
    <TodoList :todos="filteredTodos" @toggle-todo="toggleTodo" @delete-todo="deleteTodo"/>
    <div v-if="!filteredTodos.length && searchText">조건에 만족하는 값이 없습니다.</div>
  </div>
</template>

<script>
import { ref,computed } from 'vue';
import TodoForm from './TodoForm.vue';
import TodoList from './TodoList.vue';

export default {
  components:{
    TodoForm,
    TodoList
  },
  setup() {
    const todos = ref([])
    // { id: 1, subject: 'react 정리' },
    // { id: 2, subject: 'vue 정리' }
    //-----------------------------------
    const searchText = ref('')

    const addTodo = (todo) => {//add-todo로 넘긴값 todo로 받음
        todos.value.push(todo)
    }
    
    const deleteTodo = (idx)=>{
      todos.value.splice(idx, 1)
    }

    const toggleTodo = (idx)=>{
      todos.value[idx].completed=!todos.value[idx].completed;
    }

    const filteredTodos = computed(() => {
      if(searchText.value){
        return todos.value.filter(todo=>{
          return todo.subject.includes(searchText.value)
        })
      }else{
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
    }//return

  }//setup
}
</script>

<style>
</style>