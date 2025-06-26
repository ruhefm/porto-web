import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import './assets/main.css'
import App from './App.vue'
import router from '@/router/'
import scroll from '@/assets/scroll.ts';
const app = createApp(App)
app.directive('scroll', scroll); //Enable v-scroll
app.use(router)
app.use(createHead()) // Vueusehead untuk manajemen head
app.mount('#app')