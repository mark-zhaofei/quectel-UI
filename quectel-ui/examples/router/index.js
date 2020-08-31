import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/anchor',
    name: 'anchor',
    component: () => import(/* webpackChunkName: "about" */ '../views/anchor.vue')
  },
  {
    path: '/affix',
    name: 'affix',
    component: () => import(/* webpackChunkName: "about" */ '../views/affix.vue')
  },
  {
    path: '/split',
    name: 'split',
    component: () => import(/* webpackChunkName: "about" */ '../views/split.vue')
  },
  {
    path: '/time',
    name: 'time',
    component: () => import(/* webpackChunkName: "about" */ '../views/time.vue')
  },
  {
    path: '/table',
    name: 'table',
    component: () => import(/* webpackChunkName: "about" */ '../views/table.vue')
  },
  {
    path: '/tabs',
    name: 'tabs',
    component: () => import(/* webpackChunkName: "about" */ '../views/tabs.vue')
  },
  {
    path: '/dialog',
    name: 'dialog',
    component: () => import(/* webpackChunkName: "about" */ '../views/dialog.vue')
  },
  {
    path: '/switch',
    name: 'switch',
    component: () => import(/* webpackChunkName: "about" */ '../views/switch.vue')
  },
  {
    path: '/tagsList',
    name: 'switch',
    component: () => import(/* webpackChunkName: "about" */ '../views/tagsList.vue')
  }, {
    path: '/Drawer',
    name: 'Drawer',
    component: () => import(/* webpackChunkName: "about" */ '../views/Drawer.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
