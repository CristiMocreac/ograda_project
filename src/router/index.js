import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Services from '../views/Services.vue';
import Contact from '../views/Contact.vue';
import Projects from '../views/Projects.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/service', component: Services },
  { path: '/contact', component: Contact },
  { path: '/projects', component: Projects },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;