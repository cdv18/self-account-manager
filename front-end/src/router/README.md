# Router Configuration

## Cấu trúc Router

Router được tổ chức theo module để dễ quản lý:

```
src/router/
├── router.js          # File router chính
└── modules/           # Các module router
    ├── auth.js        # Routes xác thực
    ├── dashboard.js   # Routes dashboard
    ├── user.js        # Routes quản lý user
    └── account.js     # Routes quản lý account
```

## Cách sử dụng

### 1. Thêm route mới vào module

**Ví dụ thêm route vào `auth.js`:**

```javascript
export default [
  // ... existing routes
  {
    path: '/verify-email',
    name: 'VerifyEmail',
    component: () => import('../../views/auth/VerifyEmail.vue'),
    meta: {
      title: 'Xác thực email',
      guest: true,
      layout: 'AuthLayout'
    }
  }
]
```

### 2. Tạo module router mới

**Tạo file `src/router/modules/settings.js`:**

```javascript
export default [
  {
    path: '/settings',
    name: 'Settings',
    component: () => import('../../views/settings/Settings.vue'),
    meta: {
      title: 'Cài đặt',
      requiresAuth: true,
      layout: 'DashboardLayout'
    }
  }
]
```

**Import vào `router.js`:**

```javascript
import settingsRoutes from './modules/settings.js'

const routes = [
  // ...
  ...settingsRoutes,
  // ...
]
```

### 3. Meta Fields

- `title`: Tiêu đề trang (tự động set document.title)
- `requiresAuth`: Yêu cầu đăng nhập
- `guest`: Chỉ cho user chưa đăng nhập
- `layout`: Layout sử dụng
- `transition`: Animation transition
- `hideFooter`: Ẩn footer

### 4. Navigation Guards

**Kiểm tra authentication:**
```javascript
// Tự động redirect đến /login nếu chưa đăng nhập
meta: { requiresAuth: true }

// Tự động redirect đến /dashboard nếu đã đăng nhập
meta: { guest: true }
```

### 5. Sử dụng trong component

**Navigation programmatic:**
```vue
<script>
import { useRouter } from 'vue-router'

export default {
  setup() {
    const router = useRouter()
    
    const goToLogin = () => {
      router.push('/login')
    }
    
    const goBack = () => {
      router.go(-1)
    }
    
    return { goToLogin, goBack }
  }
}
</script>
```

**Template navigation:**
```vue
<template>
  <router-link to="/dashboard">Dashboard</router-link>
  <router-link :to="{ name: 'UserDetail', params: { id: 123 }}">
    User Detail
  </router-link>
</template>
```

### 6. Route Parameters

**Định nghĩa route với params:**
```javascript
{
  path: '/users/:id',
  name: 'UserDetail',
  component: () => import('../../views/users/UserDetail.vue')
}
```

**Sử dụng trong component:**
```vue
<script>
import { useRoute } from 'vue-router'

export default {
  setup() {
    const route = useRoute()
    
    const userId = route.params.id
    
    return { userId }
  }
}
</script>
```

### 7. Query Parameters

**Navigation với query:**
```javascript
router.push({
  path: '/users',
  query: { page: 1, search: 'john' }
})
```

**Đọc query:**
```javascript
const route = useRoute()
const page = route.query.page
const search = route.query.search
```

## Cấu trúc Views cần tạo

```
src/views/
├── Home.vue
├── NotFound.vue
├── auth/
│   ├── Login.vue
│   ├── Register.vue
│   ├── ForgotPassword.vue
│   ├── ResetPassword.vue
│   └── Logout.vue
├── dashboard/
│   ├── Dashboard.vue
│   ├── Analytics.vue
│   └── Reports.vue
├── users/
│   ├── UserList.vue
│   ├── CreateUser.vue
│   ├── UserDetail.vue
│   ├── EditUser.vue
│   └── Profile.vue
└── accounts/
    ├── AccountList.vue
    ├── CreateAccount.vue
    ├── AccountDetail.vue
    ├── EditAccount.vue
    └── Categories.vue
```

## Chạy ứng dụng

```bash
# Development
npm run dev

# Build
npm run build

# Preview build
npm run preview
```

Router sẽ hoạt động tại: http://localhost:5173
