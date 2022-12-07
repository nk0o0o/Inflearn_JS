<template>
<nav class="framework_menu">
   <h1 class="ico_framework_logo">UI Framework</h1>
   <dl class="framework_list">
      <dt class="depth1">
         <router-link to="/">Getting Started</router-link>
      </dt>
      <dt class="depth1">Guidelines</dt>
      <dd class="depth2">
         <ul class="depth2_list">
            <li>
               <router-link :to="{ name: 'Colors'}">Colors</router-link>
            </li>
         </ul>
      </dd>
      <dt class="depth1">UI Elements</dt>
      <dd class="depth2">
         <ul class="depth2_list">
            <li>
               <router-link :to="{ name: 'Icons'}">Icons</router-link>
            </li>
         </ul>
      </dd>
      <dt class="depth1">TO DO LIST</dt>
      <dd class="depth2">
         <ul class="depth2_list">
            <li>
               <router-link :to="{ name: 'TodoHome'}">To Do List</router-link>
            </li>
         </ul>
      </dd>
   </dl>
</nav>
</template>
<script>
export default {
   name: 'Navigation',
}
</script>
<style scoped>
.framework_menu {
   overflow-y: auto;
   position: fixed;
   width: 266px;
   height: 100vh;
   padding: 2.4rem;
   background-color: #444B59;
}
.framework_menu::-webkit-scrollbar-track {
   border-radius: 5px;
   background-color: #ddd;
}
.framework_menu::-webkit-scrollbar {
   width: 7px;
   background-color: #ddd;
}
.framework_menu::-webkit-scrollbar-thumb {
   width: 3px;
   margin: 0 auto;
   border-radius: 5px;
   background-color: #999999;
}
.framework_menu h1 {
   height: 44px;
   margin-bottom: 2.4rem;
   padding-left: 56px;
   line-height: 4.4rem;
   font-size: 2.2rem;
   font-weight: 500;
   color: #fff;
}
.framework_menu .ico_framework_logo::before {
   display: none;
}
.framework_menu .framework_list * {
   font-family: "Poppins", sans-serif;
}
.framework_menu .framework_list>dd:last-child {
   border-bottom: 0;
}
.framework_menu .framework_list .depth1 {
   padding: 1.6rem 0 0.8rem 0;
   font-size: 1.6rem;
   font-weight: 500;
   color: #fff;
   line-height: 2.4rem;
}
.framework_menu .framework_list .depth1:first-of-type {
   padding-bottom: 1.6rem;
   border-top: 1px solid #575D6A;
   border-bottom: 1px solid #575D6A;
}
.framework_menu .framework_list .depth1 a {
   display: block;
}
.framework_menu .framework_list .depth2 {
   padding-bottom: 0.8rem;
   border-bottom: 1px solid #575D6A;
}
.framework_menu .framework_list .depth2 .depth2_list li.active a {
   color: #fff;
}
.framework_menu .framework_list .depth2 .depth2_list li a {
   display: block;
   padding-bottom: 0.4rem;
   font-size: 1.4rem;
   font-weight: 500;
   line-height: 2.4rem;
   color: #999999;
}
</style>
