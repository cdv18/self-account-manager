<template>
  <div class="home">
    <h1>Chào mừng đến với Self Account Manager</h1>
    <p>Hệ thống quản lý tài khoản cá nhân</p>
    
    <div class="quick-actions">
      <router-link to="/login" class="btn btn-primary">Đăng nhập</router-link>
      <router-link to="/register" class="btn btn-secondary">Đăng ký</router-link>
      <router-link to="/dashboard" class="btn btn-success">Dashboard</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>

</style>
