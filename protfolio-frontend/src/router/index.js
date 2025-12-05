import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import ProjectDetailsPage from '../pages/ProjectDetailsPage.vue'

const routes = [
  { path: '/', name: 'home', component: HomePage },
  { path: '/projects/:id', name: 'project-details', component: ProjectDetailsPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

