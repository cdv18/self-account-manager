// Dashboard routes
export default [
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('@/views/dashboard/Dashboard.vue'),
    meta: {
      title: 'Bảng điều khiển',
      requiresAuth: true,
      layout: 'DashboardLayout'
    }
  },
  {
    path: '/dashboard/analytics',
    name: 'Analytics',
    component: () => import('@/views/dashboard/Analytics.vue'),
    meta: {
      title: 'Phân tích',
      requiresAuth: true,
      layout: 'DashboardLayout'
    }
  },
  {
    path: '/dashboard/reports',
    name: 'Reports',
    component: () => import('@/views/dashboard/Reports.vue'),
    meta: {
      title: 'Báo cáo',
      requiresAuth: true,
      layout: 'DashboardLayout'
    }
  }
]
