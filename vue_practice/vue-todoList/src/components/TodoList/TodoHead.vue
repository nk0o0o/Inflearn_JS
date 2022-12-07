<template>
   <header>
      <h1>Todo it!</h1>
   </header>
</template>

<script>
export default{
   name: 'Head',
   data() {
      return {
         msg: this.name
      }
   }
}
</script>
<style scoped>
   h1{
      font-size: 16px;
      padding: 20px 0 14px;
      text-align: center;
   }
</style>
