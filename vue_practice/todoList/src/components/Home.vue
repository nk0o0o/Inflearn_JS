<template>
   <div class="container todo_home">
      <div class="temp_wrap">
         <div class="temp_day">
            <p>Sunny</p>
         </div>
         <p class="temp_current">
            <span class="temp_current_num">17</span>
            <span class="temp_current_deg">ºC</span>
         </p>
      </div>
      <BaseButton class="btn_start" @click.stop="deleteTodo(index)"
          >Get Started!</BaseButton>
   </div>
</template>

<script>
import BaseButton from '@/components/ui/BaseButton.vue';
export default {
   name:'Home',
   components:{
      BaseButton
   },
   setup () {
      return {}
   }
}
</script>

<style scoped>
.temp_wrap{
   position: absolute;
   width: 100%; height:auto;
   top: 50%; transform: translateY(-50%);		
   -webkit-transform: translateY(-50%);
   
   -webkit-perspective: 1000;
   -webkit-transition: .75s ease-in-out;
   transition: .75s ease-in-out;
   
}
.temp_day{
   margin: 0 auto;
   width: 100%;
   text-align: Center;
   font-size: 45px;
   color: #fff;
}
.temp_day i{
   position:relative;
   top:8px;
}
.temp_day p{
   display: inline-block;
   font-size: 28px;
   max-width: 210px;
   line-height: 60px;
}
.temp_current{
   display: inline-block;
   width: 100%;
   text-align: center;
   color: #fff;
}
.temp_current .temp_current_num{
   font-size: 100px;
   font-weight: bold;
}	
.temp_current .temp_current_deg{
   position: relative;
   top: -40px; left: -5px;
   font-weight: 100;
   font-size: 40px;
   vertical-align: unset;
}
</style>