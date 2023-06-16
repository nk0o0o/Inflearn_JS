<template>
  <div class="container todo_detail">
     <div v-if="loading">Loading</div>
     <!-- ---------------------------------------------- -->
     <form v-else @submit.prevent="onSave">
       <div class="col">
         <label for="formInput">Subject</label>
       </div>
       <div class="row">
         <div class="col-auto">
           <input
             v-model="todo.subject"
             type="text"
             class="form-control flex-grow-1"
             placeholder="할일입력"
             id="formInput"
           />
           <div class="row align-items-center">
             <BaseButton class="col-auto">저장</BaseButton>
             <BaseButton class="col-auto" @click="moveToListPage">취소</BaseButton>
           </div>
         </div>
         <div class="col-auto">
           <div class="row align-items-center">
             <label for="" class="col-auto">상태</label>
             <BaseButton
               :class="todo.completed ? 'btn-success' : 'btn-danger'"
               class="btn btn-primary col-auto"
               type="button"
               @click="toggleTodoStatus"
               >{{ todo.completed ? "Done" : "Todo" }}
             </BaseButton>
           </div>
         </div>
       </div>
     </form>
  </div>
</template>

<script>
import BaseButton from "@/components/ui/BaseButton.vue";
import { useRouter, useRoute } from "vue-router";
import { ref } from "vue";
import axios from "axios";

export default {
  name: "TodoItemDetail",
  components: {
    BaseButton,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const todo = ref(null);
    const loading = ref(true);
    const error = ref("");
    const todoId = route.params.id;
    const getTodo = async (params) => {
      try {
        const res = await axios.get("http://localhost:3000/todos/" + todoId);
        todo.value = res.data;
        loading.value = false;
      } catch (err) {
        error.value = err;
      }
    };
    getTodo();

    const toggleTodoStatus = () => {
      todo.value.completed = !todo.value.completed;
    };

    const moveToListPage = () => {
      router.push({
        name: "TodoList",
      });
    };

    const onSave = async () => {
      error.value = "";
      try {
        const res = await axios.put(`http://localhost:5000/todos/${todoId}`, {
          subject: todo.value.subject,
          completed: todo.value.completed,
        });
      } catch (err) {
        error.value = err;
      }
      moveToListPage();
    };

    return {
      todo,
      loading,
      getTodo,
      moveToListPage,
      onSave,
      toggleTodoStatus,
      error,
    };
  },
};
</script>

<style scoped></style>