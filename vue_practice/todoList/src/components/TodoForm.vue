<template>
    <form class="row mt-2" @submit.prevent="onSubmit">
        <div class="col">
            <input v-model="todo" type="text" class="form-control flex-grow-1" placeholder="할일입력">
        </div>
        <div class="col-auto">
            <BaseButton type="submit">저장</BaseButton>
        </div>
    </form>
    <div v-if="hasError" class="text-danger">값을 입력하세요</div>
</template>

<script>
import { ref } from 'vue'
import BaseButton from './ui/BaseButton.vue';
export default {
    name: "TodoForm",
    components: { 
      BaseButton 
    },
    emits: ["add-todo"],
    setup(props, { emit }) {
        //자식에서 이벤트 일어나면 부모한테 emit으로 값 넘기기
        const todo = ref("");
        const hasError = ref(false);
        const onSubmit = () => {
            if (todo.value === "") {
                hasError.value = true;
            }
            else {
                emit("add-todo", {
                    id: Date.now(),
                    subject: todo.value,
                    completed: false,
                });
                hasError.value = false;
                todo.value = "";
            }
        }; //onSubmit()
        return {
            todo,
            hasError,
            onSubmit
        }; //return
    } //setup
    ,
    
}
</script>

<style lang="scss" scoped></style>