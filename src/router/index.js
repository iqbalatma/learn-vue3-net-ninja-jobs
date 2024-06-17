import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Jobs from "@/views/jobs/Jobs.vue";
import JobDetails from "@/views/jobs/JobDetails.vue";
import NotFound from "@/views/NotFound.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: Jobs
  },
  {
    path: '/jobs/:id',
    name: 'jobs.detail',
    component: JobDetails,
    props: true,
  },

  {
    path: '/:catchAll(.*)',
    name: "NotFound",
    component: NotFound
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
