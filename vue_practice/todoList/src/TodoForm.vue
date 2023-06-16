<template>
    <form class="row g-3" @submit.prevent="onSubmit">
        <div class="col">
            <input v-model="todo" type="text" class="form-control flex-grow-1" placeholder="할일입력">
        </div>
        <div class="col-auto">
            <button type="submit" class="btn btn-primary mb-3">저장</button>
        </div>
    </form>
    <div v-if="hasError" class="text-danger">값을 입력하세요</div>
</template>

<script>
import { ref } from 'vue'
export default {
    name: 'TodoForm',
    emits:['add-todo'],
    setup(props, {emit}) {//context 속성전달하는 객체 중 emit
        //자식에서 이벤트 일어나면 부모한테 emit으로 값 넘기기
        const todo = ref('');
        const hasError = ref(false);
        const onSubmit = () => {
            if (todo.value === '') {
                hasError.value = true
            } else {
                emit('add-todo', { //add-todo로 넘김 //context.emit으로 쓸 수 있음
                    id: Date.now(),
                    subject: todo.value,
                    completed: false,
                })
                hasError.value = false;
                todo.value = '';
            }

        }//onSubmit()

        return {
            todo,
            hasError,
            onSubmit
        }//return
    }//setup
}
</script>

<style lang="scss" scoped></style>