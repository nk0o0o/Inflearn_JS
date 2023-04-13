<template>
    <div>
      <img v-if="showGirl" src="./assets/girl.jpg" alt/>
      <img v-else="showGirl" src="./assets/boy.jpg" alt/>
      <button v-if="showGirl" 
        @click="showGirl=flase" 
        buttonText="소녀">
        소년
    </button>
    <button v-else="showGirl"
        @click="showGirl=true" 
        buttonText="소년">
        소녀
    </button>
    </div>
</template>

<script>
import { ref } from 'vue'
export default {
    setup () {
      
        const showGirl = ref(true);
        const btnText = ref('소년')
        return {
            showGirl,
            btnText 
        }
    }
}
</script>

<style scoped>
 img{
    display: block;
    max-width: 100px;
 }
</style>