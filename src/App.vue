<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
</script>

<template>
  <Navbar></Navbar>
  <div class="content">
    <RouterView />
  </div>
</template>

<style scoped>
.navbar {
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1000;
}

.content {
  margin-top: 100px; 
}
</style>
