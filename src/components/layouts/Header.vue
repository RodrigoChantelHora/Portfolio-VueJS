<template>
    <header>
        <div id="header" class="container w-sm-100 p-0">
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <a class="navbar-brand indie-flower-regular" href="/">Rodrigo Chantel Hora</a>
                    <button class="navbar-toggler text-white border-0" type="button" data-bs-toggle="collapse" data-bs-target="#socialLinks" aria-controls="socialLinks" aria-expanded="false" aria-label="Toggle navigation">
                        <font-awesome-icon :icon="['fas', 'bars']" />
                    </button>
                    <div class="collapse navbar-collapse" id="socialLinks">
                        <ul class="navbar-nav w-100 justify-content-end me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a target="_blank" class="nav-link" href="https://github.com/RodrigoChantelHora">
                                    <font-awesome-icon :icon="['fab', 'github']" /> <text class="d-md-none d-lg-none">Github</text>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a target="_blank" class="nav-link" href="https://www.linkedin.com/in/rodrigo-chantel/">
                                    <font-awesome-icon :icon="['fab', 'linkedin']" /> <text class="d-md-none d-lg-none">LinkedIn</text>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a target="_blank" class="nav-link" href="https://www.instagram.com/rodrigo.chantel/">
                                    <font-awesome-icon :icon="['fab', 'instagram']" /> <text class="d-md-none d-lg-none">Instagram</text>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a target="_blank" class="nav-link text" href="#" style="transition: color 0.3s ease-in-out;">
                                    <font-awesome-icon :icon="['fab', 'whatsapp']" /> <text class="d-md-none d-lg-none">WhatsApp</text>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </header>
</template>
<style>
.nav-link:hover {
    color: rgba(220, 53, 69, 0.5) !important; /* Cor mais escura no hover */
}
</style>