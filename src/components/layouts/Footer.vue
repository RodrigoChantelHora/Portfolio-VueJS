<template>
    <footer class="text-white bg-dark py-5 mt-5">
        <div class="container">
            <div class="d-flex justify-content-center">
                <!-- GitHub -->
                <a target="_blank" class="nav-link text-white mx-3 d-flex align-items-center" href="https://github.com/RodrigoChantel">
                    <font-awesome-icon class="fs-3" :icon="['fab', 'github']" />
                    <span class="ms-2 d-none d-md-block d-lg-block">GitHub</span>
                </a>
                <!-- LinkedIn -->
                <a target="_blank" class="nav-link text-white mx-3 d-flex align-items-center" href="https://www.linkedin.com/in/rodrigo-chantel/">
                    <font-awesome-icon class="fs-3" :icon="['fab', 'linkedin']" />
                    <span class="ms-2 d-none d-md-block d-lg-block">LinkedIn</span>
                </a>
                <!-- Instagram -->
                <a target="_blank" class="nav-link text-white mx-3 d-flex align-items-center" href="https://www.instagram.com/rodrigo.chantel/">
                    <font-awesome-icon class="fs-3" :icon="['fab', 'instagram']" />
                    <span class="ms-2 d-none d-md-block d-lg-block">Instagram</span>
                </a>
                <!-- WhatsApp -->
                <a target="_blank" class="nav-link text-white mx-3 d-flex align-items-center" href="#">
                    <font-awesome-icon class="fs-3" :icon="['fab', 'whatsapp']" />
                    <span class="ms-2 d-none d-md-block d-lg-block">WhatsApp</span>
                </a>
            </div>
            <div class="text-center mt-4">
                <p class="p-0 m-0">&copy; 2024 Rodrigo Chantel. Todos os direitos reservados.</p>
            </div>
        </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: "Footer",
  };
  </script>
  
  <style scoped>
  .nav-link {
    color: white;
    transition: color 0.3s;
  }
  
  .nav-link:hover {
    color: #ffc107;
  }
  </style>
  