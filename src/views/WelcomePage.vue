<template>
    <div class="background-container">
      <h3 class="welcome-text"> Bienvenue dans Mon frigo </h3>
      <div class="app-description">
        <p>Découvrez la variété de produits dans votre frigo en explorant la liste disponible.</p>
        <p>Ajoutez de nouveaux éléments à votre frigo en utilisant simplement le formulaire d'ajout.</p>
        <p>Organisez, suivez et simplifiez votre expérience culinaire avec Mon Frigo.</p>
      </div>
    </div>
  </template>
  
  <style scoped>
  .background-container {
    position: relative;
    height: 100vh;
    background-image: url('../assets/tm1d_zvj6_220304.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
  .welcome-text {
    font-size: 2.5em;
    text-align: center;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
    margin-bottom: 20px;
  }
  
  .app-description {
    font-size: 1.2em;
    text-align: center;
    max-width: 80%;
    line-height: 1.5;
    margin-bottom: 20px;
  }
  
  .app-description p {
    margin-bottom: 10px;
  }
  </style>
  