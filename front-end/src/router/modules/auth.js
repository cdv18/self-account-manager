// Authentication routes
export default [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/auth/Login.vue'),
    meta: {
      title: 'Đăng nhập',
      guest: true, // Chỉ cho user chưa đăng nhập
      layout: 'AuthLayout'
    }
  },
  {
    path: '/register',
    name: 'Register', 
    component: () => import('@/views/auth/Register.vue'),
    meta: {
      title: 'Đăng ký',
      guest: true,
      layout: 'AuthLayout'
    }
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: () => import('@/views/auth/ForgotPassword.vue'),
    meta: {
      title: 'Quên mật khẩu',
      guest: true,
      layout: 'AuthLayout'
    }
  },
  {
    path: '/reset-password/:token',
    name: 'ResetPassword',
    component: () => import('@/views/auth/ResetPassword.vue'),
    meta: {
      title: 'Đặt lại mật khẩu',
      guest: true,
      layout: 'AuthLayout'
    }
  },
  {
    path: '/logout',
    name: 'Logout',
    component: () => import('@/views/auth/Logout.vue'),
    meta: {
      title: 'Đăng xuất',
      requiresAuth: true
    }
  }
]
