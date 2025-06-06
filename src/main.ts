import { createApp } from 'vue'
import './style.css'
import './assets/main.css'
import App from './App.vue'
import router from '@/router/'
import scroll from '@/assets/scroll.ts';
const app = createApp(App)
app.directive('scroll', scroll);
app.use(router)
app.mount('#app')