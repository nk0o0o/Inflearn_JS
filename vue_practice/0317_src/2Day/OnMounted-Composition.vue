<template>
   <button @click="increment">Counter : {{ counter }}</button>
</template>
<script>
import { ref, onMounted } from 'vue' //react에서 useEffect
export default {
    setup () {
        const counter = ref(0)
        const increment = () => { 
            counter.value++
        }
        onMounted(() => { 
            console.log('마운트됨')
        })
        return {
            counter,
            increment,
        }
    }
}
</script>

<style scoped>

</style>