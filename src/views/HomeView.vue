<template>
   <img class="background-image" src="../assets/tm1d_zvj6_220304.jpg" alt="Background Image">
  <div class="mt-5">
    <SearchForm @search="updateSearchCriteria"></SearchForm>
    <div v-if="listeElement.length === 0">
      Loading...
    </div>
    <div v-else>
      <div v-if="Searchliste.length === 0" class=" my-3 mx-4 d-flex flex-wrap ">
        <ElementCardItem v-for="element in listeElement" :key="element.id" :element="element"
          :onS="onSupprimer" class="mx-2 my-3" />
      </div>
      <div v-else class="d-flex flex-wrap">
        <ElementCardItem v-for="element in Searchliste" :key="element.id" :element="element" 
          :onS="onSupprimer" class="m-2" />
      </div>
    </div>
  </div>
</template>

<script setup>
import SearchForm from '@/components/SearchForm.vue';
import { onMounted, reactive, ref } from "vue";
import Frigo from "@/Frigo";
import ElementCardItem from "@/components/ElementCard.vue";
import Swal from 'sweetalert2';

const listeElement = reactive([]);
const url = "https://webmmi.iut-tlse3.fr/~pecatte/frigo/public/2/produits";

function getElements() {
  const fetchOptions = { method: "GET" };
  fetch(url, fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((frigo) => {
      console.log(frigo)
      listeElement.splice(0, listeElement.length);
      for (let f of frigo) {
        listeElement.push(new Frigo(f.id, f.nom, f.qte, f.photo));
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

onMounted(() => {
  getElements();
});

function onSupprimer(id) {
  const index = listeElement.findIndex(element => element.id === id);

  // Use SweetAlert for confirmation
  Swal.fire({
    title: 'Êtes-vous sûr(e) de supprimer cet élément?',
    text: "Cette action ne peut pas être annulée!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#3085d6',
    confirmButtonText: 'Oui, supprimer!'
  }).then((result) => {
    if (result.isConfirmed) {
      // If confirmed, proceed with delete
      fetch(url + "/" + id, {
        method: "DELETE",
      })
      .then(response => response.json())
      .then(dataJSON => {
        listeElement.splice(index, 1);
        Swal.fire(
          'Supprimé!',
          'Votre élément a été supprimé.',
          'success'
        );
      })
      .catch((error) => {
        console.log(error);
        Swal.fire(
          'Erreur!',
          'Une erreur est survenue lors de la suppression.',
          'error'
        );
      });
    }
  });
}

const motcle = ref("");
const Searchliste = reactive([]);

const updateSearchCriteria = (newCritere) => {
  motcle.value = newCritere;
  searchElements();
};

function searchElements() {
  const fetchOptions = { method: "GET" };
  fetch(url + "?search=" + motcle.value, fetchOptions)
    .then((response) => response.json())
    .then((dataJSON) => {
      Searchliste.splice(0, Searchliste.length);
      for (let f of dataJSON) {
        Searchliste.push(new Frigo(f.id, f.nom, f.qte, f.photo));
      }
    })
    .catch((error) => {
      console.log(error);
    });
}
</script>
<style scoped>
.background-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  background-attachment: fixed;
}

</style>
