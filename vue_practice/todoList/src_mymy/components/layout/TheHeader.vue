<template>
   <header>
      <BaseButton class="btn_goback ico_32 ico_arr_left" @click="goBack" />
      <h1 class="page_title">{{ pageTitle }}</h1>
   </header>
</template>


<script>
import BaseButton from "@/components/ui/BaseButton.vue";
import { useRouter } from "vue-router";

export default {
   name: "App",
   components: { BaseButton },
   props: {
      pageTitle:String,
   },
   setup(props) {
      const router = useRouter();

      const goBack = () => router.back();
      return {
         goBack,
      };
   },
};
</script>

<style scoped>
header{
   z-index: 1;
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   display: flex;
   align-items: center;
   background-color: #7633fa;
}
.back-btn-hidden {
   visibility: hidden;
   opacity: 0;
}
.btn_goback {
   position: absolute;
   display: none;
}
.btn_goback.show {
   display:block;
}
.btn_goback::before{
   background-color: #aaa;
}
.page_title{
   width: 100%;
   text-align: center;
   color: #fff;
   font-weight: 700;
}
</style>