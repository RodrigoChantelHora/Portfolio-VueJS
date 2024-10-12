import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import '@/assets/js/bootstrap/bootstrap.bundle';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Importações do FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Importar os ícones
import { faUserSecret, faBars, faDatabase, faArrowUpRightFromSquare, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';
import {
    faGithub,
    faLinkedin,
    faInstagram,
    faWhatsapp,
    faHtml5,
    faCss3Alt,
    faPhp,
    faBootstrap,
    faSquareJs,
    faLaravel,
    faVuejs
} from '@fortawesome/free-brands-svg-icons';

// Adicionar os ícones à biblioteca
library.add(
    faUserSecret,
    faBars, faGithub,
    faLinkedin,
    faInstagram,
    faWhatsapp,
    faHtml5,
    faCss3Alt,
    faPhp,
    faBootstrap,
    faSquareJs,
    faLaravel,
    faDatabase,
    faVuejs,
    faArrowUpRightFromSquare,
    faEnvelope,
    faUser
);

const app = createApp(App);

// Registrar o componente FontAwesomeIcon globalmente
app.component('font-awesome-icon', FontAwesomeIcon);

app.use(router);

app.mount('#app');