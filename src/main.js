import { createApp } from 'vue';
import App from "./App.vue";
import store from './store/store';
import router from "./router/index";
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js' 

createApp(App).use(router).use(store).mount("#app");