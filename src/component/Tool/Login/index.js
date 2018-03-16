import Vue from 'vue'
import Login from './login.vue'

let loginComp = Vue.extend(Login)

let instance

let remove = () => {
	document.body.removeChild(instance.$el)
	instance.$el.removeEventListener('transitionend', remove)
}

export let showLogin = function() {
	instance = new loginComp().$mount()

	document.body.appendChild(instance.$el)

	instance.showLogin = true
}

export let closeLogin = function() {
	instance.showLogin = false
	instance.$el.addEventListener('transitionend', remove)
}