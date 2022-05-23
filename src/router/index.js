import { createRouter, createWebHistory } from 'vue-router'
import EventList from '../views/EventList.vue'
import AboutPage from '../views/AboutPage.vue'
import EventDetails from '../views/EventDetails.vue'
/* eslint-disable */
const routes = [
  {
    path: '/',
    name: 'EventList',
    component: EventList,
    props: route => ({ page: parseInt(route.query.page) || 1 })
  },
  {
    path: '/about',
    name: 'AboutPage',
    component: AboutPage,
  },
  {
    path: '/event/:id',
    name: 'EventDetails',
    props: true,
    component: EventDetails,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
