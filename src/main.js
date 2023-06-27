import { createApp } from 'vue'
import App from './components/App.vue'
import router from './router/appRouter'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import $ from 'jquery'


createApp(App).use(router).mount('#app')
