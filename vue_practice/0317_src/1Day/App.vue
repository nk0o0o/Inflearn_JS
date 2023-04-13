<template>
    <div v-bind:class="nameClass" >
        {{name}}
    </div>
    <input :type="type" :value="name"> <!-- ":" v-vind 축약 -->
    <button @click="updateName">클릭</button><!-- "@" v-on 축약 -->
</template>

<script>
import { ref } from "vue";
export default {
    setup () {
        const name = ref('초기값')
        const type = ref('text')
        const nameClass = ref('')

        const updateName = ()=>{
            name.value = '이벤트 클릭 변경값'
            type.value = 'number'
            nameClass.value = 'name'
        }
        return {
            name,
            type,
            nameClass,
            updateName
        }
    }
}
</script>

<style  scoped>
    .name {
        color: red;
    }
</style>