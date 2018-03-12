import Vue from 'vue'
import App from './app.vue'
import router from './router.js'
import axios from 'axios'

import './index.css'

Vue.prototype.$http = axios

let div = document.createElement('div')
document.body.appendChild(div)


let app = new Vue({
	router,
	render: h => h(App),
	
})

app.$mount(div)
