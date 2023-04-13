<template>
    <div v-for="item, index in todos" 
    class="card mb-2" :key="item.id">
        <div class="card-body d-flex">
            <div class="form-check flex-grow-1">
                <input class="form-check-input" 
                        type="checkbox" 
                        id="flexRadio" 
                        :value="item.completed"
                        @change="toggleTodo(index)">
                
                 <label :class="{ todo: item.completed }" :style="item.completed ? todoStyle : {}" class="form-check-label"
                    for="flexRadio">
                    {{ item.subject }}
                </label>
            </div>
            <!-- ./form-check -->
            <div class="">
                <button type="button" @click="deleteTodo(index)" class="btn btn-sm btn-danger">삭제</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        todos:{
            type: Array,
            required:true
        }
    }, 
    emits: ['toggle-todo', 'delete-todo'],
    setup(props, {emit}) {
        const toggleTodo = (idx)=>{
            emit('toggle-todo', idx)//앞이 이름, 뒷값이 넘길값
        }
        const deleteTodo = (idx)=>{
            emit('delete-todo', idx)
        }
        const todoStyle={
            color: 'gray',
            textDecoration: 'line-through'
        }//todoStyle()
        //-----------------------------------
        return {
            toggleTodo,
            deleteTodo,
            todoStyle
        }
    }
}
</script>

<style scoped>
.todo{
    color: gray;
    text-decoration: line-through;
  }
</style>