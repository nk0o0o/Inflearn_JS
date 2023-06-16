<template>
  <header>
    <router-link to="/" class="logo">logo</router-link>
    <nav>
      <router-link :to="{ name: 'Read' }">목록</router-link>
      <router-link :to="{ name: 'Create' }">글쓰기</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name:"Header",
  setup () {
    

    return {}
  }
}
</script>

<style scoped>
header{
  position: relative;  
}
.logo{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
nav{
  display: flex; 
  align-items: center;
  justify-content: space-between;
  height: 40px;
}

</style>