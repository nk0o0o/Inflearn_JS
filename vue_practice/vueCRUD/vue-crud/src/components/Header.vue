<template>
  <header>
    <router-link to="/" class="logo">logo</router-link>
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
  position: relative;
  padding: 0 8px;
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