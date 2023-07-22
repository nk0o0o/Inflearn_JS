<template>
  <main class="page_home">
    <textarea id="msg" disabled></textarea>
    <div class="greeting">
      VUE 게시판
    </div>
 </main>
</template>

<script>
import { onMounted } from 'vue'
export default {
  name: "Home",
  setup () {
    const showText = (target, message, index, interval)=>{
      if (index < message.length) { 
        document.querySelector(target).append(message[index++]);
        setTimeout(function () { 
          showText(target, message, index, interval); }, interval
        ); 
        console.log(target)
      } 
    }
    onMounted((to, from) => {
      setTimeout(function() {
        const text = document.querySelector('.greeting').innerHTML.replace(/<br *\/?>/gi,'\n');
        showText("#msg", text, 0, 100); 
      }, 2000);
    })

    return {}
  }
}
</script>

<style scoped>
.page_home {
  position: relative;
}
.page_home .greeting {
  display: none;
}
textarea#msg {
  background: none;
  border: none;
  color: #111;
  font-size: 18px;
  resize: none;
  line-height: 1.25;
  width: 100%;
  font-weight: 700;
  text-align: center;
}
.page_home{
  display: flex;
  align-items: center;
  justify-content: center;
}
.greeting{
  text-align: center;
}
</style>