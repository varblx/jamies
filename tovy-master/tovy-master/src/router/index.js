import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ActivityPage from '../views/activityPage.vue'
import Welcome from '../views/Welcome'
import Login from '../views/Login.vue'
import yourActivity from '../views/yourActivity'
import activeNotices from '@/views/activeNotices'
import settings from '@/views/settings'
import err from '@/views/err'
import Ban from '@/views/Ban'
import staff from '@/views/staff'
import profile from '@/views/profile'
import signup from '@/views/signup'
import forbidden from '@/views/forbidden'
import automation from '@/views/automation'
import wall from '@/views/wall'
import audit from '@/views/audit'
import sessions from '@/views/sessions'
import session from '@/views/session'
import notReady from '@/views/notReady'
import tasks from '@/views/tasks' 

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: { layout: 'main' },
    component: Home
  },
  {
    path: '/audit',
    name: 'audit',
    meta: { layout: 'main' },
    component: audit
  },
  {
    path: '/automation',
    name: 'automation',
    meta: { layout: 'main' },
    component: automation
  },
  {
    path: '/sessions',
    name: 'Sessions',
    meta: { layout: 'main' },
    component: sessions
  }, {
    path: '/nr',
    name: 'Not ready',
    meta: { layout: 'default' },
    component: notReady
  }, {
    path: '/session/:id',
    name: 'Session',
    meta: { layout: 'main' },
    component: session
  },
  {
    path: '/wall',
    name: 'Wall',
    meta: { layout: 'main' },
    component: wall
  },
  {
    path: '/welcome',
    name: 'Welcome',
    component: Welcome
  }, {
    path: '*',
    redirect: '/'
  }, {
    path: '/signup',
    name: 'Signup',
    component: signup
  }, {
    path: '/invite/:code',
    name: 'Invite'
  },
  {
    path: '/error',
    name: 'Server Error',
    component: err
  },
  {
    path: '/forbidden',
    name: 'Forbidden',
    component: forbidden
  },
  {
    path: '/settings',
    name: 'Settings',
    meta: { layout: 'main' },
    component: settings
  },
  {
    path: '/profile/:id',
    name: 'Profile',
    meta: { layout: 'main' },
    component: profile
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/activity',
    name: 'activity',
    meta: { layout: 'main' },
    component: ActivityPage
  },
  {
    path: '/youractivity',
    name: 'Your activity',
    meta: { layout: 'main' },
    component: yourActivity
  },
  {
    path: '/reviewa',
    name: 'Revuiew notices',
    meta: { layout: 'main' },
    component: activeNotices
  },
  {
    path: '/staff',
    name: 'Staff',
    meta: { layout: 'main' },
    component: staff
  },
  {
    path: '/ban',
    name: 'ban', 
    meta: { layout: 'main' },
    component: Ban
  },
  {
    path: '/tasks',
    name: 'Tasks',
    meta: { layout: 'main' },
    component: tasks
  }
]

const router = new VueRouter({
  mode: 'history',
  base: '',
  routes
})

export default router
