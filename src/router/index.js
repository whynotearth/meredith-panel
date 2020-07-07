import Vue from 'vue';
import VueRouter from 'vue-router';
import AuthLogin from '../views/AuthLogin.vue';
import AuthSignup from '../views/AuthSignup.vue';
import Settings from '../views/Settings';
import MyAccount from '../views/MyAccount';
import ChangePassword from '../views/MyAccountChangePassword';
import Dashboard from '../views/Dashboard';
import DeveloperTesting from '../views/DeveloperTesting.vue';
import AuthForgotPassword from '../views/AuthForgotPassword';
import AuthNewPassword from '../views/AuthNewPassword';
// import store from '../store';

Vue.use(VueRouter);

const routes = [
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
  {
    path: '/login',
    name: 'AuthLogin',
    component: AuthLogin,
    meta: {
      isPublic: true
    }
  },
  {
    path: '/signup',
    name: 'AuthSignup',
    component: AuthSignup,
    meta: {
      isPublic: true
    }
  },
  {
    path: '/forgot-password',
    name: 'AuthForgotPassword',
    component: AuthForgotPassword,
    meta: {
      isPublic: true
    }
  },
  {
    path: '/new-password',
    name: 'AuthNewPassword',
    component: AuthNewPassword,
    meta: {
      isPublic: true
    }
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
