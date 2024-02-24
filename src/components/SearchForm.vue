<template>
  <form class="d-flex justify-content-center align-items-center mb-3" >
    <i class="fas fa-search  "></i>
    <input class="  form-control custom-input" type="search" placeholder="Rechercher un produit" v-model="searchCritere"
      @input="search" aria-label="Search" style="width: 20%;">
  </form>
</template>
  

<script setup>
import {ref, getCurrentInstance } from 'vue';

const searchCritere = ref('');
const { emit } = getCurrentInstance();
const search = () => {
  emit('search', searchCritere.value);
};

</script>
  
<style scoped></style>
  