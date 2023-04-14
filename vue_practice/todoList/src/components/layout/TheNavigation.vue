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
      <button class="btn_add_todo" @click="openModal"><i class="i_plus"></i></button>
   </nav>
</template>

<script>
import BaseButton from "@/components/ui/BaseButton.vue";
import Modal from "@/components/ui/TodoInputModal.vue"
export default {
   name: "TheNavigation",
   components: {
      BaseButton,
      Modal
   },
   setup(_, {emit}) {

      const openModal = () => {
         emit('openModal', true)
      }


      return {
         openModal,


      }//return

   }//setup
};
</script>
<style scoped>
.nav {
   position: fixed;
   bottom: 0;
   left: 0;
   width: 100%;
   background-color: #fff;
   box-shadow: 0 0 24px rgba(0, 0, 0, 0.11);
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
.btn_add_todo{
   z-index: 1;
   position: absolute;
   bottom: 20px;
   left: 50%;
   transform: translateX(-50%);
   display: flex;
   align-items: center;
   justify-content: center;
   width: 50px;
   height: 50px;
   border: 0;
   border-radius: 100%;
   background-color: #7633FA;
   box-shadow: rgba(0, 0, 0, 1) 0px 10px 12px -10px
}
.i_plus {
   position: relative;
   color: #fff;
}
.i_plus:before,.i_plus::after{
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
}
.i_plus:before {
  content: '';
  position: absolute;
  width: 16px;
  height: 2px;
  background-color: currentColor;
}
.i_plus:after {
  content: '';
  position: absolute;
  height: 16px;
  width: 2px;
  background-color: currentColor;  
}
</style>