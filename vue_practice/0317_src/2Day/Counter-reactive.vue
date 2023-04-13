<template>
    <button @click="increment">Counter : {{ state.count }}</button>
</template>
<script>
import { reactive } from 'vue';
export default {
    setup() {
        // const counter = ref(0)
        const state = reactive({
            count: 0
        })
        const increment = () => {
            state.count++
            console.log(state)
        }
        return {
            state,
            increment,
        }
    }
}
</script>
<style scoped>
</style>