import AuthForgotPassword from '../views/AuthForgotPassword';
import AuthNewPassword from '../views/AuthNewPassword';

export const authRoutes = [
  // {
  //   path: '/welcome',
  //   name: 'Welcome',
  //   component: () => import('@/views/AuthWelcome.vue'),
  //   meta: { layout: () => import('@/layouts/TenantLayout.vue') }
  // },
  {
    path: '/auth/sign-up/:step',
    name: 'SignUp',
    props: true,
    component: () => import('@/views/AuthSignUp.vue'),
    meta: { layout: () => import('@/layouts/TenantLayout.vue'), isPublic: true }
  },
  {
    path: '/auth/login',
    name: 'LogIn',
    component: () => import('@/views/AuthLogIn.vue'),
    meta: { layout: () => import('@/layouts/TenantLayout.vue'), isPublic: true }
  },
  {
    path: '/auth/sign-up/success/:slug',
    name: 'SignUpSuccess',
    component: () => import('@/components/auth/SignUpSuccess.vue'),
    meta: { layout: () => import('@/layouts/TenantLayout.vue'), isPublic: true }
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
  }
];
