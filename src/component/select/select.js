import Vue from 'vue'
import Select from './select.vue'

let extend = function(obj, opt) {
	for(let i in opt) {
		if(obj.hasOwnProperty(i)) {
			obj[i] = opt[i]
		}
	}
}

let SelectConstructor = Vue.extend(Select)

let instance = null

let SelectFn = function(opt) {
	if(typeof opt !== 'object') {
		throw new Error('opt type must be object')
	}

	if(!instance) {
		instance = new SelectConstructor({
			el: document.createElement('div')
		})
	}

	extend(instance.$data.options, opt)

	instance.$data.show = true
	

	return new Promise((resolve, reject) => {
		instance.select = (item) => {
			instance.$data.show = false
			resolve(item)
		}

		instance.close = () => {
			instance.$data.show = false
			reject()
		}

		document.body.appendChild(instance.$el)
		
	})
}

export default SelectFn