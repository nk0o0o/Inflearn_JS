<template>
  <div class="todo_foot">
      <button type="button" class="btn_clear">Clear All</button>
  </div>
</template>

<script>
   export default {
      name: 'Foot',
      data(){

      },
      methods:{
         /* clearAll: function(){
            localStorage.clear()
         } */
      }
   }
</script>

<style>
   .todo_foot{text-align: center;padding: 20px 0;}
   .btn_clear{
      background-color: #fff;
      border-radius: 8px;
      color: tomato;
      width: 120px;
      padding: 20px 0;
      cursor: pointer;
      text-transform: uppercase;
   }
   .btn_clear:active{color: red;font-weight: 700;}
</style>