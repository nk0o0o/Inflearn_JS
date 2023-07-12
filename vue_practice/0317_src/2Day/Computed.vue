<template>
    <input type="number" v-model="num1"/>
    <input type="number" v-model="num2"/>
    <p>두 수의 합 : {{ sum }}</p>
</template>
<script>
import { ref, computed } from 'vue';
export default {
    setup() {
        const num1 = ref(0);
        const num2 = ref(0);
        const sum = computed(()=>{ //변수 안받아도됨 
            //함수재사용 : 최적화
            return num1.value + num2.value
        })
        return {
            num1,
            num2,
            sum
        }
    }
}
</script>
<style scoped>
</style>