import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

// Components
import Section from './components/Section'
import Home from './components/Home'
import Tests from './components/Tests'
import About from './components/About'

Vue.use(Buefy)
Vue.use(VueRouter);

Vue.config.productionTip = false

const routes = [
  { path: '/', component: Home },
  { path: '/tests', component: Tests },
  { path: '/about', component: About },
  { 
    path: '/tests/:id', 
    name: 'test',
    component: Section 
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
