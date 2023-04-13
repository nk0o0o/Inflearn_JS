<template>
    <h2>아이디/이메일 입력</h2>
    <form action="" @submit.prevent="accountList">
        <div>
            <label for="id">ID : </label>
            <input id="id"
            v-model="id" type="text" placeholder="id" required/>
        </div>
        <div>
            <label for="email">Email : </label>
            <input id="email"
            v-model="email" type="email" placeholder="email" required/>
        </div>
        <div>
            <button type="submit">출석확인</button>
        </div>
    </form>
    <ul v-if="list.length">
        <li v-for="(item, idx) in list" :key="idx">
            {{ item.id }}({{ item.email }})
        </li>
    </ul>
    <!-- @submit.prevent
        submit 다른 이벤트 방지 속성
     -->
</template>
<script>
import { ref } from 'vue';
export default {
    setup() {
        const id = ref('')
        const email = ref('')
        const list = ref([])
        function accountList(){
            list.value.push({id:id.value, email:email.value})
            id.value = '';
            email.value = '';
        }
        return {
            id,
            email,
            list,
            accountList
        }
    }
}
</script>
<style scoped>

</style>