import Vue from 'vue';
import VueRouter from 'vue-router';
import { AboutPage, ContactPage, HomePage } from '@/pages';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },

  {
    path: '/about',
    name: 'about',
    component: AboutPage,
  },

  {
    path: '/contact',
    name: 'contact',
    component: ContactPage,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
