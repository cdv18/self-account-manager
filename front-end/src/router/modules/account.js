// Account management routes
export default [
  {
    path: '/accounts',
    name: 'Accounts',
    component: () => import('@/views/accounts/AccountList.vue'),
    meta: {
      title: 'Quản lý tài khoản',
      requiresAuth: true,
      layout: 'DashboardLayout'
    }
  },
  {
    path: '/accounts/create',
    name: 'CreateAccount',
    component: () => import('@/views/accounts/CreateAccount.vue'),
    meta: {
      title: 'Tạo tài khoản',
      requiresAuth: true,
      layout: 'DashboardLayout'
    }
  },
  {
    path: '/accounts/:id',
    name: 'AccountDetail',
    component: () => import('@/views/accounts/AccountDetail.vue'),
    meta: {
      title: 'Chi tiết tài khoản',
      requiresAuth: true,
      layout: 'DashboardLayout'
    }
  },
  {
    path: '/accounts/:id/edit',
    name: 'EditAccount',
    component: () => import('@/views/accounts/EditAccount.vue'),
    meta: {
      title: 'Chỉnh sửa tài khoản',
      requiresAuth: true,
      layout: 'DashboardLayout'
    }
  },
  {
    path: '/accounts/categories',
    name: 'AccountCategories',
    component: () => import('@/views/accounts/Categories.vue'),
    meta: {
      title: 'Danh mục tài khoản',
      requiresAuth: true,
      layout: 'DashboardLayout'
    }
  }
]
