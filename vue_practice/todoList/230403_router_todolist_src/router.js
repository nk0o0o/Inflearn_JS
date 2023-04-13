import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";
import Todos from "@/pages/Todos.vue";
import Todo from "@/pages/Todo.vue";

const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:'/',
            name:'Home',
            component: Home
        },
        {
            path:'/todos',
            name:'Todos',
            component: Todos
        },
        {
            path:'/todo/:id',
            name:'Todo',
            component: Todo
        },
    ]

})
export default router;