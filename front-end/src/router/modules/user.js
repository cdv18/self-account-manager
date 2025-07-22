// User management routes
export default [
  {
    path: '/users',
    name: 'Users',
    component: () => import('@/views/users/UserList.vue'),
    meta: {
      title: 'Quản lý người dùng',
      requiresAuth: true,
      layout: 'DashboardLayout'
    }
  },
  {
    path: '/users/create',
    name: 'CreateUser',
    component: () => import('@/views/users/CreateUser.vue'),
    meta: {
      title: 'Tạo người dùng',
      requiresAuth: true,
      layout: 'DashboardLayout'
    }
  },
  {
    path: '/users/:id',
    name: 'UserDetail',
    component: () => import('@/views/users/UserDetail.vue'),
    meta: {
      title: 'Chi tiết người dùng',
      requiresAuth: true,
      layout: 'DashboardLayout'
    }
  },
  {
    path: '/users/:id/edit',
    name: 'EditUser',
    component: () => import('@/views/users/EditUser.vue'),
    meta: {
      title: 'Chỉnh sửa người dùng',
      requiresAuth: true,
      layout: 'DashboardLayout'
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('@/views/users/Profile.vue'),
    meta: {
      title: 'Hồ sơ cá nhân',
      requiresAuth: true,
      layout: 'DashboardLayout'
    }
  }
]
