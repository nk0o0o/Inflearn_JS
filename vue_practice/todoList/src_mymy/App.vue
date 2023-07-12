<template>
   <TheHeader :pageTitle="pageTitle"/><!-- :backBtn="backBtn" -->
   <div id="wrapper">
      <router-view></router-view>
   </div>
  <!--  <TheNavigation/> -->

   <TodoInputModal 
      @openModal="modal=true;"
      @closeModal="modal = false"
      :modal="modal"
  >Todo 입력 모달</TodoInputModal>

</template>

<script>
import { computed, ref } from "vue";
import { useRoute } from "vue-router";

import TheHeader from '@/components/layout/TheHeader.vue'
import TheNavigation from '@/components/layout/TheNavigation.vue'
import TodoForm from "@/components/TodoForm.vue";
import TodoInputModal from "@/components/ui/TodoInputModal.vue";


export default {
   name:'App',
   components: {
    TheNavigation,
    TheHeader,
    TodoForm,
    TodoInputModal
},
   setup() {
      const modal = ref(false);
      const route = useRoute();
      const pageTitle = computed(() => route.name);      
      return {
         pageTitle,
         modal
      };
   },
};
</script>

<style scoped>
</style>