import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
import Home from '../components/pages/Home.vue';
import Html from '../components/pages/Html.vue';
import Css from '../components/pages/Css.vue';
import Javascript from '../components/pages/Javascript.vue';
import Angular from '../components/pages/Angular.vue';
import ReactJs from '../components/pages/ReactJs.vue';
import VueJs from '../components/pages/VueJs.vue';



const routes = [
  {path: '/', component: Home },
  {path: '/html', component: Html },
  {path: '/css', component: Css },
  {path: '/javascript', component: Javascript },
  {path: '/angular', component: Angular },
  {path: '/reactjs', component: ReactJs },
  {path: '/vuejs', component: VueJs } 
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router