import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index'; // Adjust based on your file structure


const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');