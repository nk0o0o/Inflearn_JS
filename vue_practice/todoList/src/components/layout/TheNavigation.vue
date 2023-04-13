<template>
   <nav class="nav nav-pills nav-fill">
      <div class="nav-item">
         <router-link
            class="nav-link"
            :to="{ name: 'Home' }"
         ><i class="ico_24 ico_home"></i>Home</router-link>
      </div>
      <div class="nav-item">
         <router-link
            class="nav-link" 
            :to="{ name: 'TodoList' }"
         ><i class="ico_24 ico_check"></i>TodoList</router-link>
      </div>
   </nav>
</template>

<script>
import BaseButton from "@/components/ui/BaseButton.vue";
export default {
   name: "TheNavigation",
   components: {
      BaseButton,
   },
   //setup() {},
};
</script>
<style scoped>
.nav {
   position: fixed;
   bottom: 0;
   left: 0;
   width: 100%;
   height: 45px;
   background-color: #fff;
   box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
}
.nav-item{
   flex: 1 1 50%;
   width: 50%;
}
.c-Btn {
   border-color: #aaa;
}
.nav-pills .nav-link{
   font-size: 0;
   border-radius: 0;
}
.nav-link{
   display: flex;
   align-items: center;
   justify-content: center;
   height: 100%;
   background-color: transparent;
}
.nav-link i{
   display: inline-block;
}
.nav-link::before{
   height: 70%;  
   background-color: #aaa !important;   
}
.nav-link:focus-visible {
   outline: 0;
   box-shadow: none;
}
.router-link-active{
   position: relative;
   background-color: transparent;
}
.router-link-active::after{
   content: '';
   display: block;
   width: 100%;
   height: 2px;
   position: absolute;
   bottom: 0px;
   background-color: #7633FA;
   
}
.router-link-active::before{
   background-color: #333333 !important;
}
</style>