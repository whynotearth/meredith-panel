import Vue from 'vue';
import VueRouter from 'vue-router';
import Settings from '../views/Settings';
import MyAccount from '../views/MyAccount';
import ChangePassword from '../views/MyAccountChangePassword';
import Dashboard from '../views/Dashboard';
import DeveloperTesting from '../views/DeveloperTesting.vue';

import { authRoutes } from './authRoutes';

Vue.use(VueRouter);

const routes = [
  ...authRoutes,
  {
    path: '/test',
    name: 'DeveloperTesting',
    component: DeveloperTesting
  },
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  // settings
  // -----------------------
  {
    path: '/settings',
    name: 'Settings',
    component: Settings
  },
  {
    path: '/settings/my-account',
    name: 'MyAccount',
    component: MyAccount
  },
  {
    path: '/settings/my-account/change-password',
    name: 'ChangePassword',
    component: ChangePassword
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  next();

  // if (!to.meta.isPublic) {
  //   store.dispatch('auth/ping').then(result => {
  //     if (result === 'IS_LOGGED_OUT') {
  //       router.push({ name: 'AuthLogin' }).then(() => {
  //         setTimeout(function() {
  //           window.location.reload();
  //         });
  //       });
  //     }
  //   });
  // }
});

export default router;
