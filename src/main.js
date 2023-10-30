import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';
import Axios from 'axios';
import store from './stores/indexAuth';

//import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.css'; // Importa los estilos CSS de Bootstrap
import 'bootstrap'; // Importa el archivo JavaScript de Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import router from './router';
import '@fortawesome/fontawesome-free/css/all.min.css'
import VueSweetAlert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
/* add icons to the library */
library.add(faUserSecret)


const app = createApp(App)

app.config.globalProperties.$axios = Axios;



app.use(createPinia())
app.use(router)
app.use(store);
app.component('font-awesome-icon', FontAwesomeIcon);

app.use(VueSweetAlert2).mount('#app')


