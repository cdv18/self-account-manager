# Cấu hình Path Alias (@)

## Tổng quan

Dự án đã được cấu hình để sử dụng các alias paths giúp import dễ dàng và rõ ràng hơn.

## Các alias đã cấu hình

| Alias | Đường dẫn thực tế | Mô tả |
|-------|------------------|-------|
| `@` | `src/` | Thư mục gốc source |
| `@components` | `src/components/` | Các Vue components |
| `@views` | `src/views/` | Các trang/views |
| `@assets` | `src/assets/` | Tài nguyên (images, css, fonts) |
| `@router` | `src/router/` | Cấu hình routing |
| `@stores` | `src/stores/` | State management (Pinia/Vuex) |
| `@utils` | `src/utils/` | Các utility functions |
| `@api` | `src/api/` | API calls và services |

## Cách sử dụng

### ✅ Trước (relative paths):
```javascript
// ❌ Khó đọc và dễ lỗi
import Header from '../../../components/common/Header.vue'
import { api } from '../../utils/api.js'
import Logo from '../../assets/images/logo.png'
```

### ✅ Sau (alias paths):
```javascript
// ✅ Dễ đọc và dễ maintain
import Header from '@components/common/Header.vue'
import { api } from '@utils/api.js'
import Logo from '@assets/images/logo.png'
```

## Ví dụ sử dụng trong project

### 1. Import components:
```javascript
// Trong file Vue
import BaseButton from '@components/common/BaseButton.vue'
import UserCard from '@components/users/UserCard.vue'
```

### 2. Import views:
```javascript
// Trong router
component: () => import('@views/auth/Login.vue')
component: () => import('@views/dashboard/Dashboard.vue')
```

### 3. Import utilities:
```javascript
// Import helper functions
import { formatDate } from '@utils/date.js'
import { validateEmail } from '@utils/validation.js'
```

### 4. Import API services:
```javascript
// Import API calls
import { getUserList } from '@api/users.js'
import { authService } from '@api/auth.js'
```

### 5. Import assets:
```javascript
// Import images, icons
import Logo from '@assets/images/logo.svg'
import '@assets/scss/main.scss'
```

## Cấu hình files

### 1. vite.config.js
```javascript
resolve: {
  alias: {
    "@": resolve(__dirname, "src"),
    "@components": resolve(__dirname, "src/components"),
    // ... other aliases
  },
}
```

### 2. jsconfig.json (cho VS Code IntelliSense)
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"],
      "@components/*": ["src/components/*"],
      // ... other paths
    }
  }
}
```

## Lợi ích

1. **Dễ đọc**: Import paths ngắn gọn và rõ ràng
2. **Dễ maintain**: Khi di chuyển file không cần sửa nhiều import
3. **Autocomplete**: VS Code hỗ trợ autocomplete với alias
4. **Tránh lỗi**: Giảm lỗi đường dẫn sai do relative path phức tạp
5. **Consistent**: Tất cả import paths đều nhất quán

## Best Practices

### ✅ Nên:
```javascript
import Component from '@components/Component.vue'
import { helper } from '@utils/helper.js'
import '@assets/styles/main.css'
```

### ❌ Không nên:
```javascript
import Component from '../../../components/Component.vue'
import { helper } from '../../utils/helper.js'
import '../../../assets/styles/main.css'
```

## Restart Development Server

Sau khi thay đổi cấu hình alias, cần restart development server:

```bash
# Stop server (Ctrl+C)
# Then restart
npm run dev
```

## Kiểm tra cấu hình

Để kiểm tra alias hoạt động:

1. Tạo file test import với `@`
2. Kiểm tra VS Code có autocomplete không
3. Chạy `npm run dev` không có lỗi
4. Build production `npm run build` thành công
