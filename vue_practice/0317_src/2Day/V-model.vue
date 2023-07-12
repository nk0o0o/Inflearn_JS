<template>
    <div>
        <input type="text" v-model="username"/>
        <button @click="submit">전송</button>
        <p>사용자 입력값 {{ username }}</p>
    </div>
</template>

<script>
import { ref } from 'vue'
export default {
    setup () {
        const username = ref('');
        function submit(){
            console.log('입력한 사용자 이름: ', username.value)
        }
        return {
            username,
            submit,
        }
    }
}
</script>

<style lang="scss" scoped>

</style>