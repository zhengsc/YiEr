import Vue from 'vue'
import dialog from './dialog.vue'

let DialogConstructor = Vue.extend(dialog)

let Dialog = function(element) {
	let instance = new DialogConstructor().$mount()

	return new Promise((resolve, reject) => {
		resolve()
	})
}