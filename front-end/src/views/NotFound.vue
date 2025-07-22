<template>
  <div class="not-found">
    <h1>404</h1>
    <h2>Không tìm thấy trang</h2>
    <p>Trang bạn đang tìm kiếm không tồn tại.</p>
    
    <router-link to="/" class="btn btn-primary">
      Về trang chủ
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>

<style scoped>
.not-found {
  text-align: center;
  padding: 4rem 2rem;
}

.not-found h1 {
  font-size: 6rem;
  color: #dc3545;
  margin: 0;
}

.not-found h2 {
  color: #6c757d;
  margin: 1rem 0;
}

.btn {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  margin-top: 2rem;
  text-decoration: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  transition: all 0.3s;
}

.btn:hover {
  background-color: #0056b3;
  transform: translateY(-2px);
}
</style>
