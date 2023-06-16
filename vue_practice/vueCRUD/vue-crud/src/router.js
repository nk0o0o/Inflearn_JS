import { createRouter, createWebHistory } from "vue-router";
import Home from "@/components/Home.vue";
import Read from "@/components/Read.vue";
import Create from "@/components/Create.vue";
import Detail from "@/components/Detail.vue";
import NotFoundPage from "@/components/NotFoundPage.vue";

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/read",
      name: "Read",
      component: Read,
    },
    {
      path: "/create/:contentId?",
      name: "Create",
      props:true,
      component: Create,         
    },
    {
      path: "/detail/:contentId",
      name: "Detail",
      component: Detail,         
    },
    {
      path: "/:catchAll(.*)",
      name: "NotFoundPage",
      component: NotFoundPage,         
    },
  ],
});
export default router;
