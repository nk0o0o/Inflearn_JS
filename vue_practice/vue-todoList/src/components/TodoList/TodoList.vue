<template>
   <div class="todo_list">
      <ul>
         <li class="item" v-for="todoItem in todoItems" v-bind:key="todoItem.index">
            <input type="checkbox" class="item_check">            
            <p class="item_text">{{ todoItem }}</p>
            <button type="button" class="btn_clearItem" v-on:click="removeTodo(todoItem, index)"></button>
         </li>
      </ul>
   </div>
</template>
<script>
   export default {
      name: 'List',
      data() {
         return {
            todoItems: []
         }
      },
      created: function() {
         if (localStorage.length > 0) {
            for (var i = 0; i < localStorage.length; i ++) {
               if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
                  this.todoItems.push(localStorage.key(i));
               }
            }
         }
      },
      methods:{
         removeTodo: function(todoItem, index) {
            localStorage.removeItem(todoItem);
            this.todoItems.splice(index, 1);
         }
      }
   }
</script>
<style scoped>
.todo_list{}
.todo_list li{position:relative;background-color: #fff; height: 36px;border-radius: 8px;padding: 8px 12px;display: flex;align-items: center;}
.todo_list li .item_text{
   font-size: 12px;
   margin-left: 8px;
   user-select: none;
}
.todo_list li .btn_clearItem{
   position: absolute;
   top: 50%;
   right: 8px;
   transform: translateY(-50%);
   display: block;
   padding: 8px;
   background-color: transparent;
   cursor: pointer;
}
.todo_list li .btn_clearItem::before{content: ''; display: block; width: 16px; height: 4px; background-color: tomato;border-radius: 4px;}
.todo_list li .btn_clearItem:active:before{background-color: red;}
</style>
