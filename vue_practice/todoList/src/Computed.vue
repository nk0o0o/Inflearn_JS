<template>
    <div>
<h2>computed</h2>
<p>count:{{ count }}</p>
<p>computed:{{ plusCountComputed }}</p>
<p>computed:{{ plusCountComputed }}</p>
<p>method:{{ plusCountMethod() }}</p>
<p>method:{{ plusCountMethod() }}</p>
<button @click="count++">Add+</button>
    </div>
    <!-- react에서 useCallback 이랑 같은 개념 -->
</template>

<script>
import { ref, computed } from "vue";
export default {
    setup () {
        const count = ref(0)
        const  plusCountComputed = computed(() =>{
            console.log('Computed')
            return count.value + 1
        })
        const plusCountMethod = () =>{
            console.log('method')
            return count.value + 1
        }
        return {
            count,
            plusCountComputed,
            plusCountMethod,
        }
    }
}
</script>

<style lang="scss" scoped>

</style>