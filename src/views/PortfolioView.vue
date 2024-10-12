
<script setup>
  import CardProject from '@/components/CardProject.vue';
</script>

<template>
  <main class="container">

    <div class='row'>
      <h4 class="text-white">Meus Projetos</h4>

      <CardProject />

    </div> 

  </main>
</template>

<script>
import { RouterLink } from 'vue-router';

    export default {
        name: 'Skills',  // Nome do seu componente
        mounted() {
            // Inicializa os popovers após o componente ser montado
            const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
            const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));
        }
    }
</script>

<style>
  .zoom-container {
    width: 300px; /* Defina o tamanho do contêiner */
    overflow: hidden; /* Esconde as partes da imagem que saem do contêiner */
  }

  .zoom-image {
    width: 100%;
    transition: transform 0.3s ease; /* Transição suave para o efeito de zoom */
    transform: scale(0.9);
  }

  .zoom-container:hover .zoom-image {
    transform: scale(1); /* Aumenta o tamanho da imagem em 20% */
  }
</style>