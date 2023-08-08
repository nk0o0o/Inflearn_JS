import { createApp } from 'vue'
import router from "@/router.js";
import App from './App.vue'
import "@/assets/css/reset.css";
import 'tailwindcss/tailwind.css';
import "@/assets/css/app.css";

createApp(App).use(router).mount('#app')