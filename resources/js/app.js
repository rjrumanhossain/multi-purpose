import './bootstrap';


import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Import your router file

const app = createApp(App);
app.use(router).mount('#app');

//javascript file right now ... without not working for this js 

//thanks for this work
import '../../node_modules/admin-lte/plugins/jquery/jquery.min.js';
import '../../node_modules/admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js';
import '../../node_modules/admin-lte/dist/js/adminlte.min.js';