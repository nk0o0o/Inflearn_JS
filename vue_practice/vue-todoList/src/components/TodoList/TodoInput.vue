<template>
<div class="todo_input">
   <input type="text" placeholder="할일적기" v-model="newTodoItem" v-on:keyup.enter="addTodo">
   <button type="button" v-on:click="addTodo"></button>
</div>
</template>

<script>
   export default {
      name: 'Input',
      data() {
         return {
            newTodoItem: ""
         }
      },
      methods: {
         addTodo: function(){
            localStorage.setItem(this.newTodoItem, this.newTodoItem);
            this.clearInput();
         },
         clearInput: function() {
            this.newTodoItem="";
         }
      }
   }
</script>

<style scoped>
.todo_input{padding: 10px 0;position: relative;}
.todo_input input:focus{
   font-weight: 700;
}
.todo_input input{
   width: 100%;
   border-radius: 8px;
   background-color: #fff;
   height: 40px;
   padding-right: 52px;
   padding-left: 12px;
   font-size: 14px;
}
.todo_input button{
   position: absolute;
   right: 0;
   width: 40px;
   height: 40px;
   padding: 0 16px;
   background-image: linear-gradient(to right, aquamarine , aqua);
   border-top-right-radius: 8px;
   border-bottom-right-radius: 8px;
   cursor: pointer;
}
.todo_input button:active{
   background-image: linear-gradient(to right, rgb(5, 239, 161) , rgb(9, 233, 233));
}
.todo_input button:active::before,.todo_input button:active::after{
   opacity: 1;  
}
.todo_input button::before{
   content: '';
   background-color: #fff;
   display: inline-block;
   height: 4px;
   width: 16px;
   position: absolute;
   top: 50%;
   left: 50%;
   margin-left: -8px;
   opacity: 0.8;
}
.todo_input button::after{
   content: '';
   background-color: #fff;
   display:inline-block;
   height: 4px;
   width: 16px;
   position: absolute;
   margin-left: -8px;
   top: 50%;
   left: 50%;
   transform: rotate(90deg);
   opacity: 0.8;
}
</style>
