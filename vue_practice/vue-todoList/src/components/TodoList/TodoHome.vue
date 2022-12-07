<template>
  <div class="todo_home">
      <TodoHead/>
      <TodoInput/>
      <TodoList/>
      <TodoFoot/>
  </div>
</template>

<script>
import TodoHead from "./TodoHead.vue";
import TodoInput from "./TodoInput.vue";
import TodoList from "./TodoList.vue";
import TodoFoot from "./TodoFoot.vue";
export default {
   name:'TodoHome',
   data() {
      return {
         msg: ''
      }
   },
   methods: {
   },
   components:{
      TodoHead,
      TodoList,
      TodoInput,
      TodoFoot
   }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Nerko+One&display=swap');
.todo_home {padding: 0 12px; background-color: #ededed;}
.todo_home *{font-family: 'Nerko One', cursive;}
</style>