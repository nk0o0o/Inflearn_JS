<template>
   <div class="app_create">
      <h1>{{ msg }}</h1>
      <h2>Essential Links</h2>
   </div>
</template>

<script>
export default {
   name: 'Create',
   data() {
      console.log(this)
      return {
         msg: this.name
      }
   }
}
</script>
<style scoped>
   h1,
   h2 {
      font-weight: normal;
   }

   ul {
      list-style-type: none;
      padding: 0;
   }

   li {
      display: inline-block;
      margin: 0 10px;
   }

   a {
      color: #42b983;
   }
</style>
