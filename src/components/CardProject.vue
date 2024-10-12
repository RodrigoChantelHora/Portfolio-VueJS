    <script setup>
    import projectsList from "@/assets/js/projects.json";

    let projects = projectsList.projects;
</script>

    <template>

        <div v-if="!projects.length" class="col-md-6 col-lg-4 col-xl-3 py-3 d-flex justify-content-center">
            <div class="card bg-dark text-white m-2 shadow border-animate" style="width: 100%;">
                <div class="card-body">
                    <div class="placeholder-glow">
                        <span class="placeholder col-12"></span>
                    </div>
                    <div class="placeholder-glow mt-2">
                        <span class="placeholder col-6"></span>
                        <span class="placeholder col-4"></span>
                    </div>
                    <div class="mt-3">
                        <div class="d-flex justify-content-between align-items-center">
                            <span class="btn btn-danger placeholder col-6"></span>
                            <span class="btn btn-secondary placeholder col-3"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div v-for="(project, index) in projects" :key="index"
            class="col-md-6 col-lg-4 col-xl-3 py-3 d-flex justify-content-center">
            <div class="card bg-dark text-white m-2 shadow border-animate" style="width: 100%;">
                <img :src="project.image" class="card-img-top" alt="Project Image">
                <div class="card-body">
                    <h5 class="card-title">{{ project.title }}</h5>
                    <p class="card-text">{{ project.description.length > 75 ? project.description.slice(0, 75) + '...' : project.description }}</p>
                    <div class="mb-3 d-flex justify-content-evenly">
                        <span v-if="project.technologies.php" class="text-white" tabindex="0" data-bs-toggle="popover"
                            data-bs-trigger="hover focus" data-bs-content="PHP">
                            <font-awesome-icon :icon="['fab', 'php']" />
                        </span>
                        <span v-if="project.technologies.laravel" class="text-white" tabindex="0"
                            data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content="Laravel">
                            <font-awesome-icon :icon="['fab', 'laravel']" />
                        </span>
                        <span v-if="project.technologies.javaScript" class="text-white" tabindex="0"
                            data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content="JavaScript">
                            <font-awesome-icon :icon="['fab', 'square-js']" />
                        </span>
                        <span v-if="project.technologies.vue" class="text-white" tabindex="0" data-bs-toggle="popover"
                            data-bs-trigger="hover focus" data-bs-content="Vue.js 3">
                            <font-awesome-icon :icon="['fab', 'vuejs']" />
                        </span>
                        <span v-if="project.technologies.html" class="text-white" tabindex="0" data-bs-toggle="popover"
                            data-bs-trigger="hover focus" data-bs-content="HTML 5">
                            <font-awesome-icon :icon="['fab', 'html5']" />
                        </span>
                        <span v-if="project.technologies.css" class="text-white" tabindex="0" data-bs-toggle="popover"
                            data-bs-trigger="hover focus" data-bs-content="CSS 3">
                            <font-awesome-icon :icon="['fab', 'css3-alt']" />
                        </span>
                        <span v-if="project.technologies.bootstrap" class="text-white" tabindex="0"
                            data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content="Bootstrap 5.2+">
                            <font-awesome-icon :icon="['fab', 'bootstrap']" />
                        </span>

                        <span v-if="project.technologies.tailwindcss" class="text-white" tabindex="0"
                            data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content="Tailwind Css">
                            <img width="20px" src="/images/icons/TailwindCSS.png" alt="">
                        </span>
                        <span v-if="project.technologies.mysql" class="text-white" tabindex="0" data-bs-toggle="popover"
                            data-bs-trigger="hover focus" data-bs-content="MySql">
                            <font-awesome-icon icon='database' />
                        </span>
                    </div>
                    <div class="w-100 d-flex justify-content-between align-items-center">
                        <RouterLink :to="`/project/${project.id}/#header`" class="btn btn-danger">Ver detalhes
                        </RouterLink>
                        <a v-if="project.external_link" target="_blank" :href="project.external_link"
                            title="Visite o projeto">
                            <font-awesome-icon :icon="['fas', 'arrow-up-right-from-square']" />
                        </a>
                        <a v-else href="#" :style="{ cursor: 'not-allowed' }" class="text-secondary"
                            data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content="Link indisponível">
                            <font-awesome-icon :icon="['fas', 'arrow-up-right-from-square']" />
                        </a>
                    </div>
                </div>
            </div>
        </div>

    </template>

<style scoped>
    .card {
        border: 2px solid transparent !important;
        transition: border-color 0.3s ease !important;
    }

    .border-animate:hover {
        border: 2px solid rgba(220, 53, 69, 0.5) !important;
    }

    .card-title {
        font-weight: bold !important;
        font-size: 1.25rem !important;
    }

    .card-text {
        font-size: 0.95rem !important;
    }

    .nav-link {
        color: white !important;
        transition: color 0.3s !important;
    }

    .nav-link:hover {
        border: 2px solid rgba(220, 53, 69, 0.5) !important;
    }

    .popover {
        background-color: #343a40 !important;
        color: white !important;
    }

    .popover .arrow::after {
        border-bottom-color: #343a40 !important;
    }
</style>
