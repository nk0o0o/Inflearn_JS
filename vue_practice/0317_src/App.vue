<template>
    <p :style="{fontSize:fontSize + 'px'}">Vue3</p>
    <button @click="incrementFontSize">글꼴확대</button>
    <button @click="decrementFontSize">글꼴축소</button>
</template>
<script>
import { ref, computed, onUpdated} from 'vue';
export default {
    setup() {
        const fontSize = ref(16)
        const incrementFontSize = () => {
            fontSize.value++
        }
        const decrementFontSize = () => {
            fontSize.value--
        }
        const styles = computed(() => { //useCallback 
            return {
                fontSize:fontSize.value + 'px'
            }
        })
        onUpdated(() => {
            console.log('이벤트 클릭')
        })
        return {
            fontSize,
            incrementFontSize,
            decrementFontSize,
            styles
        }
    }
}
</script>
<style scoped></style>