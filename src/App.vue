<script setup>
import { onMounted } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/layouts/Header.vue'
import Presentation from './components/layouts/Presentation.vue';
import Nav from './components/Nav.vue';
import Footer from './components/layouts/Footer.vue';

onMounted(() => {
    // Certifique-se de que o bootstrap foi carregado
    if (typeof bootstrap !== 'undefined') {
        const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
        popoverTriggerList.map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
    } else {
        console.error('Bootstrap não está definido.')
    }
})
</script>

<template>
    <Header />
    <Presentation />
    <Nav />
    <RouterView />
    <Footer />
</template>