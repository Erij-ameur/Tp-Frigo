<template>
    <AddForm @addEl="handlerAdd"></AddForm>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router';
  import AddForm from '@/components/AddForm.vue';
  import Swal from 'sweetalert2';
  
  const router = useRouter();
  
  const url = "https://webmmi.iut-tlse3.fr/~pecatte/frigo/public/2/produits";
  
  const handlerAdd = (nom, qte, photo) => {
    const updatedQte = Math.max(qte, 0);
  
    // Verify the image URL
    isValidImageUrl(photo)
      .then((isValid) => {
        if (!isValid) {
          Swal.fire({
            icon: 'error',
            title: 'Invalid Image URL',
            text: 'Please provide a valid image URL.',
          });
        } else {
          // Perform the addition
          performAddition(nom, updatedQte, photo);
        }
      })
      .catch((error) => {
        console.error('Error checking image URL:', error);
      });
  };
  
  const performAddition = (nom, qte, photo) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
  
    const requestBody = {
      nom: nom,
      qte: qte,
      photo: photo
    };
  
    const fetchOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(requestBody),
    };
  
    fetch(url, fetchOptions)
      .then(response => response.json())
      .then(dataJSON => {
        console.log(dataJSON);
        showSuccessAlert();
        router.push("/Home");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  
  const showSuccessAlert = () => {
    Swal.fire({
      title: 'Product Added!',
      text: 'Your product has been added successfully.',
      icon: 'success',
      confirmButtonText: 'OK'
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
  </script>
  