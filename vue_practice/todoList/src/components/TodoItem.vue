<template>
  <div v-for="(item, index) in todos" class="card mt-2" :key="item.id">
    <div class="card-body d-flex align-items-center" @click="moveToPage(item.id)">
      <div class="form-check flex-grow-1">
        <input
          class="form-check-input"
          type="checkbox"
          :checked="item.completed"
          @change.stop="toggleTodo(index)"
          @click.stop
        />
        <label
          :class="{ todo: item.completed }"
          :style="item.completed ? todoStyle : {}"
          class="form-check-label"
          >{{ item.subject }}
        </label>
      </div>
      <!-- ./form-check -->
      <div class="">
        <BaseButton class="btn-danger" @click.stop="deleteTodo(index)"
          >삭제</BaseButton>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import BaseButton from "@/components/ui/BaseButton.vue";
export default {
  name: "TodoItem",
  components: {
    BaseButton,
  },
  props: {
    todos: {
      type: Array,
      required: true,
    },
  },
  emits: ["toggle-todo", "delete-todo"],
  setup(props, { emit }) {
    const router = useRouter();
    const moveToPage = (todoId) => {
      router.push({
        name: "TodoItemDetail",
        params: {
          id: todoId,
        },
      });
    };

    const toggleTodo = (idx) => {
      emit("toggle-todo", idx); //앞이 이름, 뒷값이 넘길값
    };

    const deleteTodo = (idx) => {
      emit("delete-todo", idx);
    };

    const todoStyle = {
      color: "gray",
      textDecoration: "line-through",
    };
    //-----------------------------------
    return {
      toggleTodo,
      deleteTodo,
      moveToPage,
      router,
      todoStyle,
    };
  },
};
</script>

<style scoped>
.todo {
  color: gray;
  text-decoration: line-through;
}
.form-check{
   cursor: pointer;
}
label{
   cursor: pointer;
}
</style>