<template>
  <form @submit.prevent="$emit('addEl', nom, qte, photo)" class="mx-auto mt-5" style="width: 40%;">
    <h3 class="text-center mb-4">Formulaire d'ajout d'un produit</h3>
    <div class="mb-3">
      <label for="nom" class="form-label">Nom:</label>
      <input type="text" v-model="nom" class="form-control" id="nom" required>
    </div>
    <div class="mb-3">
      <label for="qte" class="form-label">Quantité:</label>
      <input type="number" v-model="qte" class="form-control" id="qte" required>
    </div>
    <div class="mb-3">
      <label for="photo" class="form-label">Image URL:</label>
      <input type="text" v-model="photo" class="form-control" id="photo">
    </div>
    <div class="d-flex justify-content-center mb-3"> 
      <button type="submit" class="btn btn-success">Valider</button>
    </div>
  </form>
</template>

  
<script setup>
let nom = "";
let qte = "";
let photo = "";
</script>
  