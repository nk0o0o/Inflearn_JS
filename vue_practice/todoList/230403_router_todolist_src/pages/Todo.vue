<template>
    <h2>Todo 내용보기</h2>
    <div v-if="loading">
        Loading
    </div>
    <!-- ---------------------------------------------- -->
    <form v-else @submit.prevent="onSave">
        <div class="col">
            <label for="formInput">Subject</label>
        </div>
        <div class="row">
            <div class="col-6">
                <input
                    v-model="todo.subject"
                    type="text"
                    class="form-control flex-grow-1"
                    placeholder="할일입력"
                    id="formInput"
                />
                <div>
                    <button class="btn btn-primary mb-3">저장</button>
                    <button class="btn btn-primary mb-3"
                        @click="moveToListPage"
                    >취소</button>
                </div>
            </div>
            <div class="col-6">
                <div class="form-group">
                    <label for="">상태</label>
                    <button
                        :class="todo.completed?'btn-success':'btn-danger'"
                        class="btn btn-primary mb-3"
                        type="button"
                        @click="toggleTodoStatus"
                    >{{ todo.completed? 'Done' : 'Todo' }}
                    </button>
                </div>
            </div>
        </div>
    </form>

</template>

<script>
import { useRouter, useRoute } from "vue-router";
import axios from 'axios';
import { ref } from 'vue'
export default {
    setup () {
        const route = useRoute();
        const router = useRouter();
        const todo = ref(null);
        const loading = ref(true)
        const error = ref('')    
        const todoId = route.params.id;
        const getTodo = async(params)=>{
            try{
                const res = await axios.get('http://localhost:3000/todos/'+ todoId);
                todo.value = res.data; 
                loading.value = false;
            }catch(err){
                error.value = err
            }
        }
        getTodo()

        const toggleTodoStatus = ()=>{
            todo.value.completed = !todo.value.completed
        }

        const moveToListPage = ()=>{
            router.push({
                name: 'Todos'
            })
        }
        
        const onSave = async() => {
            error.value = '';
            try{
                const res = await axios.put(`http://localhost:3000/todos/${todoId}`,{
                    subject:todo.value.subject,
                    completed:todo.value.completed
                })
            }catch(err){
                error.value = err
            }
            moveToListPage()
        }

        return {
            todo,
            loading,
            getTodo,
            moveToListPage,
            onSave,
            toggleTodoStatus,
            error
        }
    }
}
</script>

<style scoped>

</style>