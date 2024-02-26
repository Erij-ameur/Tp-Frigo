<template>
    <div>
      <h3>Modifier Page</h3>
      <form @submit.prevent="onModifier" class="mx-auto mt-5" style="width: 40%;">
        <h3 class="text-center mb-4">Modifier le produit n° {{ id }}</h3>
        <div class="d-flex justify-content-center mb-3">
          <img :src="localPhoto" alt="Element Photo" class="img-fluid rounded border"
            style="width: 400px; height: 300px;">
        </div>
        <div class="mb-3">
          <label for="nom" class="form-label">Nom</label>
          <input type="text" v-model="localNom" class="form-control" id="nom">
        </div>
        <div class="mb-3">
          <label for="qte" class="form-label">Quantité</label>
          <input type="number" v-model="localQte" class="form-control" id="qte">
        </div>
        <div class="mb-3">
          <label for="photo" class="form-label">Photo URL</label>
          <input type="text" v-model="localPhoto" class="form-control" id="photo">
        </div>
        <div class="d-flex justify-content-between mb-3">
          <router-link to="/Home" class="btn btn-secondary">Annuler</router-link>
          <button type="submit" class="btn btn-primary">Modifier</button>
        </div>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { useStore } from 'vuex';
  import Swal from 'sweetalert2';
  
  const store = useStore();
  const router = useRouter();
  const { editingElement } = store.state;
  
  const id = ref(editingElement.id);
  const localNom = ref(editingElement.nom);
  const localQte = ref(editingElement.qte);
  const localPhoto = ref(editingElement.photo);
  
  const onModifier = () => {
  const updatedQte = Math.max(localQte.value, 0);

  // Verify l'URL de l'image
  isValidImageUrl(localPhoto.value)
    .then((isValid) => {
      if (!isValid) {
        Swal.fire({
          icon: 'error',
          title: 'URL de l\'image invalide',
          text: 'Veuillez fournir une URL d\'image valide.',
        });
      } else {
        // confirmation 
        Swal.fire({
          title: 'Êtes-vous sûr(e) ?',
          text: 'Vous êtes sur le point de mettre à jour l\'élément. Confirmer ?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Oui, mettez à jour !',
          cancelButtonText: 'Non, annulez !',
        }).then((result) => {
          if (result.isConfirmed) {
            updateElement(id.value, localNom.value, updatedQte, localPhoto.value);
            router.push('/Home');
          } else {
            Swal.fire('Mise à jour annulée !', '', 'info');
          }
        });
      }
    })
    .catch((error) => {
      console.error('Erreur lors de la vérification de l\'URL de l\'image:', error);
    });
};
  
  function isValidImageUrl(url) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = url;
  });
}

function updateElement(id, nom, qte, photo) {
    const url = `https://webmmi.iut-tlse3.fr/~pecatte/frigo/public/2/produits`;
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    //console.log(id.value)
    //console.log("the body", JSON.stringify({ id, nom, qte, photo }))
    const fetchOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: JSON.stringify({ id, nom, qte, photo }),
    };

    fetch(url, fetchOptions)
        .then(response => response.json())
        .then(data => {
            console.log('Element updated successfully:', data);
        })
        .catch(error => {
            console.error('Error updating element:', error);
        });
};
</script>
  
  
<style></style>
  