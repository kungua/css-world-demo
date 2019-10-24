import Vue from 'vue'
import VueRouter from 'vue-router'
import InlineTable from '../components/CH0101InlineTable'
import DemoView from '../views/DemoView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: DemoView,
    children: [
      {
        path: 'inline-table',
        name: 'InlineTable',
        component: InlineTable
      },
    ]
  },

]

const router = new VueRouter({
  routes
})

export default router
