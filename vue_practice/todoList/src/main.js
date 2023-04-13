import { createApp } from 'vue'
import App from './App.vue'
import router from "@/components/router/router.js";
import './assets/reset.css'
import './assets/app.css'

createApp(App)
.use(router)
.mount('#app')
