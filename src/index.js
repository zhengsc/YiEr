import Vue from 'vue'
import App from './app.vue'
import router from './router.js'
import store from './store.js'
import axios from 'axios'
import Qs from 'qs'

import './index.css'

Vue.prototype.$http = axios
Vue.prototype.Qs = Qs

let div = document.createElement('div')
document.body.appendChild(div)


let app = new Vue({
	router,
	store,
	render: h => h(App),
	
})

app.$mount(div)