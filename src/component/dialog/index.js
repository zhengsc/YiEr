import Vue from 'vue'
import Dialog from './index.vue'

let extend = function(obj, opt) {
	for(let i in opt) {
		if(obj.hasOwnProperty(i)) {
			obj[i] = opt[i]
		}
	}
}

let dialogConstructor = Vue.extend(Dialog)

let Alert = function(option) {
	let instance = new dialogConstructor().$mount()

	if(typeof option === 'string') {
		instance.content = option
	} else {
		extend(instance.$data, option)
	}

	return new Promise(function(resolve, reject) {
		instance.success = () => {
			instance.show = false
			resolve()
		}
		instance.cancel = () => {
			instance.show = false
			reject()
		}

		document.body.appendChild(instance.$el)
	})

}

export default Alert