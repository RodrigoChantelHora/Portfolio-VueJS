<template>
  <main class="container">
   <div class="row">
        <div class="col-md-12 text-white">
            <h5 class="my-3">SOBRE:</h5>
            <p>
                Sou desenvolvedor especializado em PHP e Laravel, com foco na criação de aplicações robustas e escaláveis. No front-end, utilizo JavaScript com Vue.js 3 para construir interfaces dinâmicas e interativas. Além disso, faço uso do Bootstrap para garantir um design responsivo e moderno em todos os meus projetos.
            </p>
        </div>
        <div class="col-md-12 text-white">
            <h5 class="mb-3 mt-5">Habilidades</h5>
            <span class="text-muted">LINGUAGENS DE PROGRAMAÇÃO & FERRAMENTAS</span>
        </div>
        <div class="col-md-6 mb-3 mt-3 text-white d-flex justify-content-between">
            <a target="_blank" class="text-white fs-1 php-text" href="https://www.php.net" tabindex="0" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content="PHP"><font-awesome-icon :icon="['fab', 'php']" /></a>
            <a target="_blank" class="text-white fs-1 color-hover-danger" href="https://laravel.com" tabindex="0" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content="Laravel"><font-awesome-icon :icon="['fab', 'laravel']" /></a>
            <a target="_blank" class="text-white fs-1 color-hover-warning" href="https://www.mysql.com" tabindex="0" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content="MySql"><font-awesome-icon icon="database" /></a>
            <a target="_blank" class="text-white fs-1 color-hover-warning" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" tabindex="0" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content="JavaScript"><font-awesome-icon :icon="['fab', 'square-js']" /></a>
            <a target="_blank" class="text-white fs-1 color-hover-success" href="https://vuejs.org" tabindex="0" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content="Vuejs"><font-awesome-icon :icon="['fab', 'vuejs']" /></a>
            <!-- <a target="_blank" class="text-white fs-1" href="#" tabindex="0" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content="HTML 5"><font-awesome-icon :icon="['fab', 'html5']" /></a>
            <a target="_blank" class="text-white fs-1" href="#" tabindex="0" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content="CSS 3"><font-awesome-icon :icon="['fab', 'css3-alt']" /></a> -->
            <a target="_blank" class="text-white fs-1 color-hover-purple" href="https://getbootstrap.com" tabindex="0" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content="Bootstrap"><font-awesome-icon :icon="['fab', 'bootstrap']" /></a>
        </div>
        <div class="col-md-12 text-white">
            <h5 class="mb-3 mt-5">FORMAÇÃO ACADÊMICA:</h5>
            <ul>
                <li>
                    FAM Oficial
                    Bacharelado, Ciência da Computação · (agosto de 2021 - agosto de 2025)
                </li>
            </ul>

            <h5 class="mb-3 mt-5">CERTIFICADOS:</h5>
            <ul>
                <li>Introdução ao PHP</li>
                <li>POO PHP - Programação Orientada a Objetos com PHP</li>
                <li>PHP Framework - LARAVEL</li>
                <li>Javascript</li>
                <li>VueJs 2 e 3</li>
                <li>GitHub Tutorial for Beginners</li>
            </ul>

            <h5 class="mb-3 mt-5 mb-4">EXPERIÊNCIA:</h5>
            <div class="d-flex">
                <div class="pt-1">
                    <img width="75px" src="https://media.licdn.com/dms/image/v2/D4D0BAQEeAl30zzFkVg/company-logo_100_100/company-logo_100_100/0/1707062873176?e=1733961600&v=beta&t=eEIOV3c7QkEc3GH3B0mAQ3PJVOF4iqpLQrLeZ9gX5kI" alt="">
                </div>
                <div class="ms-3">
                    <h5>Desenvolvedor Web</h5>
                    <span class="text-secondary">Kristta - Freelance</span><br>
                    <span class="text-secondary">jul de 2023 - mar de 2024 · 9 meses</span><br>
                    <span class="text-secondary">Sergipe, Brasil · Remota</span>
                    <p>Trabalho no desenvolvimento de sites e soluções para pequenas e médias empresas.</p>
                </div>
            </div>
        </div>
   </div>
  </main>
</template>
<script>
    export default {
        name: 'Skills',  // Nome do seu componente
        mounted() {
            // Inicializa os popovers após o componente ser montado
            const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
            const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));
        }
    }
</script>