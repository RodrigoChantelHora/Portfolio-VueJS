<script setup>
    import projectsList from "@/assets/js/projects.json";
    import ModalVideo from "../ModalVideo.vue";

    let projects = projectsList.projects;
    let yearsOld = 2024 - 1996;

    const today = new Date();
    const comparisonDate = new Date(today.getFullYear(), 6, 6); //Janeiro é 0 então julho é 6
    
    if(today < comparisonDate){
        yearsOld -= 1;
    }
    
</script>

<template>
    <div class="container">
        <ModalVideo />
        <div class="row text-white py-5">
        <!-- Coluna de texto -->
            <div class="col-md-6 d-flex justify-content-center align-items-center">
                <div>
                <p class="fs-1 p-0 m-0">Sou Rodrigo Chantel<span class="text-danger fs-1 fw-bold">.</span></p>
                <h1>Desenvolvedor Back-end</h1>
                <p class="w-100">
                    <span class="ps-1"><span class="text-danger">{{ projects.length }}</span> projetos -</span>
                    <span class="ps-1"><span class="text-danger">{{ yearsOld }}</span> anos de idade -</span>
                    <span class="ps-1"><span class="text-danger">Sergipe</span> / Aracaju</span>
                </p>
                <p class="ps-1">Ciências da computação no <a :style="{ cursor: 'pointer' }" class="link-danger" target="_blank" href="https://www.vemprafam.com.br">Centro Universitário - FAM</a></p>
                <p class="ps-1 pt-3 pb-4 pb-md-1">
                    <RouterLink to="/contact" class="btn btn-danger px-4">Contate-me</RouterLink>
                    <button type="button" :style="{ cursor: 'not-allowed' }" class="btn btn-secondary text-light px-4 ms-3" data-bs-toggle="modal" >Apresentação</button>
                </p>
                </div>
            </div>
            <!-- Coluna da imagem -->
            <div class="col-md-6 d-flex justify-content-center align-items-center text-center">
                <img class="profile img-fluid" :src="profileImage" alt="Rodrigo Chantel">
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                profileImage: "/images/Rodrigo-profile-ex.webp"
            };
        },
    }
</script>