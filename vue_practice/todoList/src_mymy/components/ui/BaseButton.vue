<template>
   <button class="c-Btn btn">
      <slot></slot>
   </button>
</template>
<script>
   export default {
      name:'BaseButton',
   }
</script>
<style scoped>
   .c-Btn{
      display: flex; 
      align-items: center;
      justify-content: center;
      padding: 0 16px;
      font-size: 14px;
      line-height: 1;
      height: 36px;
      border: 1px solid #333;
      outline: none;
      box-shadow: none;
   }
</style>