<script setup>
    import { ref, onMounted } from 'vue';
    import { useRoute } from 'vue-router';
    import projectsList from "@/assets/js/projects.json";
    import Features from './Features.vue';

    const project = ref(null);
    const route = useRoute();

    const loadProjectById = (id) => {
        const foundProject = projectsList.projects.find(p => p.id === parseInt(id));
        if (foundProject) {
            project.value = foundProject;
        } else {
            //caso o projeto não seja encontrado
            console.error("Projeto Não encontrado!");
        }
    }

    //carrega projeto caso encontre (lembre-se)
    onMounted(() => {
        loadProjectById(route.params.id);
    });
</script>

<template>
    <div v-if="project"class="container py-5 text-white">
        <div class="modal fade" id="imgExpand" tabindex="-1" aria-labelledby="imgExpand" aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <img :src="project.details.resume_image" class="" width="100%" alt="Projeto">
            </div>
        </div>
        <div class="modal fade" id="imgExpand1" tabindex="-1" aria-labelledby="imgExpand1" aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <img :src="project.details.example_image_01" class="" width="100%" alt="Projeto">
            </div>
        </div>
        <div class="modal fade" id="imgExpand2" tabindex="-1" aria-labelledby="imgExpand2" aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <img :src="project.details.example_image_02" class="" width="100%" alt="Projeto">
            </div>
        </div>
        <!-- Sessão Principal -->
        <div class="row align-items-center mb-5">
            <div class="col-md-6">
                <h3 class="text-white font-weight-bold mb-4">{{ project.title }} <span v-if="project.source === 1" class="text-success fs-6">Open Source</span></h3>
                <p class="text-justify">{{ project.details.resume }}</p>
                <a href="#video-section" class="btn btn-outline-danger mt-3 me-3">Assista o Vídeo</a>
                <a class="btn mt-3 me-3"
                    :target="project.github_link ? '_blank' : null"
                    :href="project.github_link || '#'"
                    :class="project.github_link ? 'btn-outline-danger': 'btn-outline-secondary'"
                    :style="project.github_link ? '' : 'cursor: not-allowed;'"
                ><font-awesome-icon :icon="['fab', 'github']" /> Github</a>
                <a class="btn mt-3" 
                    :target="project.external_link ? '_blank' : null"
                    :href="project.external_link || '#'"
                    :class="project.external_link ? 'btn-outline-danger': 'btn-outline-secondary'"
                    :style="project.external_link ? '' : 'cursor: not-allowed;'"
                >Ver site</a>
            </div>
            <div class="col-md-6 pt-5 pt-md-0 pt-lg-0">
                <div class="overflow-hidden rounded shadow-lg" data-bs-toggle="modal" data-bs-target="#imgExpand" style="cursor: pointer;">
                    <img :src="project.details.resume_image" class="img-fluid project-image" alt="Projeto">
                </div>
            </div>
        </div>

        <!-- Sessão de Destaque com Ícones -->
        <div class="row text-center text-white my-5">
            <div class="col-md-4">
                <div class="p-4">
                    <i class="fas fa-bullseye fa-3x mb-3"></i>
                    <h4>Objetivo Principal</h4>
                    <p class="text-muted">{{ project.details.principal_objective }}</p>
                </div>
            </div>
            <div class="col-md-4">
                <div class="p-4">
                    <i class="fas fa-lightbulb fa-3x mb-3"></i>
                    <h4>Qualidade</h4>
                    <p class="text-muted">{{ project.details.quality }}</p>
                </div>
            </div>
            <div class="col-md-4">
                <div class="p-4">
                    <i class="fas fa-chart-line fa-3x mb-3"></i>
                    <h4>Resultados</h4>
                    <p class="text-muted">{{ project.details.results }}</p>
                </div>
            </div>
        </div>
        <!-- Sessão de Funcionalidades -->
        <Features v-if="project.details.features">
            <div v-for="(features, index) in project.details.features" :key="index">
                <p class="text-center text-muted">{{ features }}</p>
            </div>
        </Features>

        

        <!-- Sessão de tecnologias -->
        <h3 class="text-center mb-5">Tecnologias</h3>
        <div class="mb-3 d-flex justify-content-evenly pb-5">
            <span v-if="project.technologies.php" class="text-white fs-1" tabindex="0" data-bs-toggle="popover"
                data-bs-trigger="hover focus" data-bs-content="PHP">
                <font-awesome-icon :icon="['fab', 'php']" />
            </span>
            <span v-if="project.technologies.laravel" class="text-white fs-1" tabindex="0"
                data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content="Laravel">
                <font-awesome-icon :icon="['fab', 'laravel']" />
            </span>
            <span v-if="project.technologies.javaScript" class="text-white fs-1" tabindex="0"
                data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content="JavaScript">
                <font-awesome-icon :icon="['fab', 'square-js']" />
            </span>
            <span v-if="project.technologies.vue" class="text-white fs-1" tabindex="0" data-bs-toggle="popover"
                data-bs-trigger="hover focus" data-bs-content="Vue.js 3">
                <font-awesome-icon :icon="['fab', 'vuejs']" />
            </span>
            <span v-if="project.technologies.html" class="text-white fs-1" tabindex="0" data-bs-toggle="popover"
                data-bs-trigger="hover focus" data-bs-content="HTML 5">
                <font-awesome-icon :icon="['fab', 'html5']" />
            </span>
            <span v-if="project.technologies.css" class="text-white fs-1" tabindex="0" data-bs-toggle="popover"
                data-bs-trigger="hover focus" data-bs-content="CSS 3">
                <font-awesome-icon :icon="['fab', 'css3-alt']" />
            </span>
            <span v-if="project.technologies.bootstrap" class="text-white fs-1" tabindex="0"
                data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content="Bootstrap 5.2+">
                <font-awesome-icon :icon="['fab', 'bootstrap']" />
            </span>

            <span v-if="project.technologies.tailwindcss" class="text-white fs-1" tabindex="0"
                data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content="Tailwind Css">
                <img width="20px" src="/images/icons/TailwindCSS.png" alt="">
            </span>
            <span v-if="project.technologies.mysql" class="text-white fs-1" tabindex="0" data-bs-toggle="popover"
                data-bs-trigger="hover focus" data-bs-content="MySql">
                <font-awesome-icon icon='database' />
            </span>
        </div>

        <!-- Sessão de Vídeo -->
        <div id="video-section" class="row mb-5">
            <div class="col-12">
            <h3 class="text-center mb-4">Assista o Vídeo</h3>
            <div class="embed-responsive embed-responsive-16by9 rounded shadow-lg">
                <iframe class="embed-responsive-item" width="100%" height="400px" :src="project.details.video" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            </div>
        </div>

        <!-- Sesão de Imagens Secundárias -->
        <div class="row">
            <div class="col-md-6 mb-4">
                <div class="overflow-hidden rounded shadow-lg" data-bs-toggle="modal" data-bs-target="#imgExpand1" style="cursor: pointer;">
                    <img :src="project.details.example_image_01" class="img-fluid project-image" alt="Projeto">
                </div>
            </div>
            <div class="col-md-6 mb-4">
                <div class="overflow-hidden rounded shadow-lg" data-bs-toggle="modal" data-bs-target="#imgExpand2" style="cursor: pointer;">
                    <img :src="project.details.example_image_02" class="img-fluid project-image" alt="Projeto">
                </div>
            </div>
        </div>
    </div>
  </template>
  
  <style scoped>
    .project-image {
        transition: transform 0.3s ease-in-out;
    }
    
    .project-image:hover {
        transform: scale(1.1);
    }
  </style>
  