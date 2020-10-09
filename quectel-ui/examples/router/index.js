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
    name: 'tagsList',
    component: () => import(/* webpackChunkName: "about" */ '../views/tagsList.vue')
  },
  {
    path: '/Drawer',
    name: 'Drawer',
    component: () => import(/* webpackChunkName: "about" */ '../views/Drawer.vue')
  },
  {
    path: '/noData',
    name: 'noData',
    component: () => import(/* webpackChunkName: "about" */ '../views/noData.vue')
  },
  {
    path: '/charts',
    name: 'charts',
    component: () => import(/* webpackChunkName: "charts" */ '../views/charts.vue')
  },
  {
    path: '/button',
    name: 'button',
    component: () => import(/* webpackChunkName: "button" */ '../views/button.vue')
  },
  {
    path: '/progress',
    name: 'progress',
    component: () => import(/* webpackChunkName: "progress" */ '../views/progress.vue')
  }, {
    path: '/pictureCrop',
    name: 'pictureCrop',
    component: () => import(/* webpackChunkName: "pictureCrop" */ '../views/pictureCrop.vue')
  }, {
    path: '/calendar',
    name: 'calendar',
    component: () => import(/* webpackChunkName: "calendar" */ '../views/calendar.vue')
  }, {
    path: '/timeLine',
    name: 'timeLine',
    component: () => import(/* webpackChunkName: "timeLine" */ '../views/timeLine.vue')
  }, {
    path: '/steps',
    name: 'steps',
    component: () => import(/* webpackChunkName: "steps" */ '../views/steps.vue')
  }, {
    path: '/treeView',
    name: 'treeView',
    component: () => import(/* webpackChunkName: "treeView" */ '../views/treeView.vue')
  }, {
    path: '/Tooltip',
    name: 'Tooltip',
    component: () => import(/* webpackChunkName: "Tooltip" */ '../views/Tooltip.vue')
  }, {
    path: '/Picture',
    name: 'Picture',
    component: () => import(/* webpackChunkName: "Picture" */ '../views/Picture.vue')
  }, {
    path: '/Waves',
    name: 'Waves',
    component: () => import(/* webpackChunkName: "Waves" */ '../views/Waves.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  scrollBehavior: () => ({ y: 0 }),
  routes: routes
})

export default router
