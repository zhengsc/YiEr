import Vue from 'vue'
import Select from './select.vue'

let SelectConstructor = Vue.extend(Select)

let selectWrap = null

let SelectFn = function(opt) {
	if(typeof opt !== 'object') {
		throw new Error('opt type must be object')
	} 

	let instance = new SelectConstructor().$mount()

	instance.$data.options = opt

	return new Promise((resolve, reject) => {
		instance.select = (item) => {
			instance.show = false
			resolve(item)
		}

		instance.close = () => {
			instance.show = false
			reject()
		}

		document.body.appendChild(instance.$el)
		
	})
}

export default SelectFn