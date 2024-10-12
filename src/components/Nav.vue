
<template>
    <div class="container-fluid">
        <div class='row'>
            <hr class='text-secondary'>
            <div class='col-md-12'>
                <nav>
                    <ul class='nav justify-content-center'>
                        <li id='portfolio' class='nav-item'><RouterLink to="/portfolio" class='nav-link' :class="{ 'text-danger': $route.path === '/portfolio', 'text-white': $route.path !== '/portfolio' }"><font-awesome-icon :icon="['fas', 'bars']" /> Portfólio</RouterLink></li>
                        <li id='about' class='nav-item'><RouterLink to="/" class='nav-link' :class="{ 'text-danger': $route.path === '/', 'text-white': $route.path !== '/' }"><font-awesome-icon :icon="['fas', 'user']" /> Quem eu sou</RouterLink></li>
                        <li id='contact' class='nav-item'><RouterLink to="/contact" class='nav-link' :class="{ 'text-danger': $route.path === '/contact', 'text-white': $route.path !== '/contact' }"><font-awesome-icon :icon="['fas', 'envelope']" /> Contato</RouterLink></li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</template>