<template>
    <ul>
        <li v-for="(item, idx) in state.items" :key="idx">
            {{ idx + 1 }} : {{ item }}
        </li>
    </ul>
</template>
<script>
import { reactive } from 'vue'
export default {
    setup () {
        const state = reactive({
            items:['사과', '바나나', '체리', '포도']
        })
        return {
            state
        }
    }
}
</script>

<style scoped>

</style>