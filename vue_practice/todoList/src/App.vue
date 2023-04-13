<template>
   <TheHeader :pageTitle="pageTitle"/><!-- :backBtn="backBtn" -->
   <TheNavigation/>
   <slot>
      <router-view></router-view>
   </slot>
</template>

<script>
import { useRoute } from "vue-router";
import { computed } from "vue";

import TheHeader from '@/components/layout/TheHeader.vue'
import TheNavigation from '@/components/layout/TheNavigation.vue'


export default {
   name:'App',
   components: { 
      TheNavigation,
      TheHeader,
   },
   setup() {
      const route = useRoute();
      const pageTitle = computed(() => route.name);      
      return {
         pageTitle,
      };
   },
};
</script>

<style scoped>
</style>