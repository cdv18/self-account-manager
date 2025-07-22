<template>
  <div id="app">
    <router-view> </router-view>
  </div>
</template>

<script>
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";

export default {
  name: "App",
  setup() {
    const route = useRoute();

    // Computed properties
    const isAuthenticated = computed(() => {
      return !!localStorage.getItem("token");
    });

    const showNavigation = computed(() => {
      // Ẩn navigation trên các trang auth
      return !route.meta.layout || route.meta.layout !== "AuthLayout";
    });

    const showFooter = computed(() => {
      return !route.meta.hideFooter;
    });

    // Lifecycle
    onMounted(() => {
      // Có thể thêm logic initialization ở đây
      console.log("App mounted");
    });

    return {
      isAuthenticated,
      showNavigation,
      showFooter,
    };
  },
};
</script>

<style></style>
