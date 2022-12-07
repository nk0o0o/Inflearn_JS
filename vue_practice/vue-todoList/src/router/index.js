import Vue from 'vue'
import Router from 'vue-router'
import TodoHome from '@/components/TodoList/TodoHome'
import Colors from '@/components/guideline/Colors'
import Icons from '@/components//UIElements/Icons'
import ErrorPage from '@/components/ErrorPage'

Vue.use(Router)

export default new Router({
   base: '/',
   mode: 'history',
   routes: [
      {
         path: '/toDoList',
         name: 'TodoHome',
         component: TodoHome
      },
      {
         path: '/guideLine/colors',
         redirect: '',
         name: 'Colors',
         component: Colors
      },
      {
         path: '/uIElements/icons',
         name: 'Icons',
         component: Icons
      },
      {
         path : "/:pathMatch(.*)",
         name : "not-found",
         component : ErrorPage
     },
   ]
})
