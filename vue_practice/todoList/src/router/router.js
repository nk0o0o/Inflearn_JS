import { createRouter, createWebHistory } from "vue-router";
import Home from "@/router/Home.vue";
import Work from "@/router/pages/Work.vue";
import Project from "@/router/pages/Project.vue";
import ProjectDetail from "@/router/pages/ProjectDetail.vue";
import Graphics from "@/router/pages/Graphics.vue";
import Publish from "@/router/pages/Publish.vue";
import NotFound from "@/router/NotFound.vue";

 const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path:'/',
            name : 'home',//안써도됨
            component: Home
        },
        {
            path:'/work', 
            name : 'work', 
            component: Work
        },
        {
            path:'/work/project',
            name : 'project', 
            component: Project,
            children:[{
                path:':id',
                name:'projectDetail',
                component: ProjectDetail
            }]
        },
        {
            path:'/graphics',
            name : 'graphics',//안써도됨
            component: Graphics
        },
        {
            path:'/publish',
            name : 'publish',//안써도됨
            component: Publish
        },
        {
            path:'/:catchAll(.*)',
            name : 'NotFound',//안써도됨
            meta : {isNotFound: true},//안써도됨
            component: NotFound
        },
    ]
})
export default router