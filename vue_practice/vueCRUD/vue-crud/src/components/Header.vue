<template>
  <header>
    <router-link to="/" class="logo">
      <img src="/src/assets/logo.png" alt="">
    </router-link>
    <nav>
      <router-link :to="{ name: 'Read' }">목록</router-link>
      <router-link @click.native="checkNewCreate" :to="{ name: 'Create'}">글쓰기</router-link>
    </nav>
  </header>
</template>

<script>
import {useRoute, useRouter} from 'vue-router'
export default {
  name:"Header",
  setup () {
    const router = useRouter();
    const route = useRoute();
    const checkNewCreate = (e)=>{
      if (route.params.contentId) {
        router.push({ name: "Create" , CreateState: "editING"});
      }
    }
    return {
      checkNewCreate,
      router
    }
  }
}
</script>

<style scoped>
header{
  z-index: 1;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate3d(-50%, 0, 0);
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  padding: 0 8px;
  background-color: #edf2f7;
}
.logo{
  position: absolute;
  left: 50%;
  top: 0;
  transform: translate(-50%, 0);
  max-width: 40px;
  padding: 4px;
}
.logo img{
  max-width: 100%;
}
nav{
  display: flex; 
  align-items: center;
  justify-content: space-between;
  height: 40px;
}

</style>