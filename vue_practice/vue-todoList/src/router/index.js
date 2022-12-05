import Vue from 'vue'
import Router from 'vue-router'
import Create from '@/components/Create'
import Read from '@/components/Read'
import Detail from '@/components/Detail'
import Colors from '@/components/guideline/Colors'
import Icons from '@/components//UIElements/Icons'

Vue.use(Router)

export default new Router({
   base: '/',
   mode: 'history',
   routes: [
      {
         path: '/',
         name: 'Read',
         component: Read
      },
      {
         path: '/create/:contentId?',
         name: 'Create',
         component: Create
      },
      {
         path: '/detail/:contentId',
         name: 'Detail',
         component: Detail
      },
      {
         path: '/guideline/colors',
         name: 'Colors',
         component: Colors
      },
      {
         path: '/uIElements/icons',
         name: 'Icons',
         component: Icons
      },
   ]
})
