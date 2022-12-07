<template>
   <div id="app">
     <Navigation />
      <div id="container">
         <div class="contnets">
            <div class="location">
               <span>Grove UI Framework</span>
               <span>{{currentFolderN}}</span>
               <span>{{currentPageN}}</span>
               <i class="ico_frame_down ico_16"></i>
            </div>        
            <router-view/>
         </div>
      </div>
  </div>
</template>
<script>
   import Navigation from './components/Navigation.vue';
   import Colors from './components/GuideLine/Colors.vue';
   import Icons from './components/UIelements/Icons.vue';   
   export default {
      name: 'App',  
      data() {
         return {
            currentFolderN:'',
            currentPageN:''
         }
      },
      computed:{
         pageN(){
            return this.currentPageN = this.$route.name
         },
         folderN(){
            var folder = this.$route.path.split('/')[1];
            return this.currentFolderN =folder.charAt(0).toUpperCase() + folder.slice(1)
         }
      }, 
      watch:{
         pageN(){},
         folderN(){}
      },
      components: {
         Navigation,
         Icons,
         Colors
      }
   }
</script>

<style>
@import './assets/css/reset.css';
@import './assets/css/common.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
