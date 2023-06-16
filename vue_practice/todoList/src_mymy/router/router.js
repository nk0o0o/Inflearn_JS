import { createRouter, createWebHistory, START_LOCATION } from "vue-router";
import Home from "@/components/Home.vue";
import TodoList from "@/components/TodoList.vue";
import TodoItemDetail from "@/components/TodoItemDetail.vue";
import NotFoundPage from "@/components/NotFoundPage.vue";

const router = createRouter({
   history: createWebHistory(),
   scrollBehavior: () => ({ y: 0 }),
   routes: [
      {
         path: "/",
         name: "Home",
         component: Home,
         meta: { title: "HOME | Todo List" },
         query:false,
      },
      {
         path: "/todolist",
         name: "TodoList",
         component: TodoList,
         meta: { title: "TODO LIST | Todo List" },
      },
      {
         path: "/todo_detail/:id",
         name: "TodoItemDetail",
         component: TodoItemDetail,
         meta: { title: "TODO DETAIL | Todo List" },
      },
      {
         path: "/:catchAll(.*)",
         name: "NotFoundPage",
         component: NotFoundPage,
         meta: { title: "Not Found | Todo List" },
      },
   ],
});
router.afterEach((to, from) => {
   const title = to.meta.title === undefined ? "TODOLIST" : to.meta.title;
   if (title != to.name) {
      document.title = title
   }
   router.beforeEach((to, from, next) => {
      const title = to.meta.title;
      const name = to.name;
      const backBtn = document.querySelector( '.btn_goback' );
      
      if (title && title != to.name) {
         document.title = title;
      }
      if(name == 'Home' || name == 'TodoList' ){
         console.log('ss')
         backBtn.classList.remove('show');
      }else{
         backBtn.classList.add('show');
      }
      next();
   });
});
export default router;
