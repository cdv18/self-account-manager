import { createRouter, createWebHistory } from 'vue-router'

// Import các route modules
// import authRoutes from '@/router/modules/auth.js'
// import dashboardRoutes from '@/router/modules/dashboard.js'
// import userRoutes from '@/router/modules/user.js'
// import accountRoutes from '@/router/modules/account.js'

// Import các components chung
import Home from '@/views/Home.vue'
import NotFound from '@/views/NotFound.vue'
import MainLayout from '@/views/layouts/MainLayout.vue'

// Định nghĩa các routes chính
const routes = [
  {
    path: '/',
    name: 'Home',
    component: MainLayout,
    meta: {
      title: 'Trang chủ'
    }
  },
  
  // Spread các route modules
//   ...authRoutes,
//   ...dashboardRoutes, 
//   ...userRoutes,
//   ...accountRoutes,
  
  // Catch-all route for 404
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
    meta: {
      title: 'Không tìm thấy trang'
    }
  }
]

// Tạo router instance
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  // Cấu hình scroll behavior
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// Navigation guards
router.beforeEach((to, from, next) => {
  // Cập nhật title
  if (to.meta.title) {
    document.title = `${to.meta.title} - Self Account Manager`
  }
  
  // Kiểm tra authentication nếu cần
  if (to.meta.requiresAuth) {
    const token = localStorage.getItem('token')
    if (!token) {
      next('/login')
      return
    }
  }
  
  // Kiểm tra guest routes (chỉ cho user chưa đăng nhập)
  if (to.meta.guest) {
    const token = localStorage.getItem('token')
    if (token) {
      next('/dashboard')
      return
    }
  }
  
  next()
})

router.afterEach((to, from) => {
  // Có thể thêm analytics tracking ở đây
  console.log(`Navigated from ${from.path} to ${to.path}`)
})

export default router