<template>
   <button @click="increment">Counter : {{ counter }}</button>
</template>
<script>
export default {
    data(){
        return {
            counter:0,
        }
    },
    methods: {
        increment(){ 
            this.counter++
        }
    },
    mounted(){ 
        console.log('마운트됨')
    }
}
</script>

<style scoped>

</style>