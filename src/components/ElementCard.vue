<template>
  <div class="card custom-bg" style="width: 15rem; height: 350px;">
    <img :src="element.photo" class="card-img-top img-fluid" alt="Element Photo" style="height: 100%; object-fit: cover;">
    <div class="card-body d-flex justify-content-between align-items-center">
      <div>
        <h5 class="card-title">{{ element.nom }}</h5>
        <p class="card-text">Quantité: {{ element.qte }}</p>
      </div>
      <div>
        <button class="btn btn-success" @click="editElement">
          <i class="fas fa-edit"></i>
        </button>
        <button @click="onS(element.id)" class="btn btn-danger">
          <i class="fas fa-trash-alt"></i>
        </button>
      </div>
    </div>
  </div>
</template>
  
<script setup>
const { element, onS } = defineProps(['element', 'onS']);
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const store = useStore();
const router = useRouter();

const editElement = () => {
  store.dispatch('editElement', element);
  router.push({
    name: 'ModifPage'
  });
};
</script>

<style scoped>
.custom-bg {
  background-color: lightgray;
}
</style>
  