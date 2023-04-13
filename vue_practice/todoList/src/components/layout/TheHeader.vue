<template>
   <header>
      <BaseButton
         class="btn_goback ico_32 ico_arr_left" @click="goBack" />
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
}
</style>