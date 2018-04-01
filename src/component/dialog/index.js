import Vue from 'vue'
import Dialog from './index.vue'

let extend = function(obj, opt) {
	for(let i in opt) {
		if(obj.hasOwnProperty(i)) {
			obj[i] = opt[i]
		}
	}
}

let instance = null

let dialogConstructor = Vue.extend(Dialog)

let Alert = function(option) {

	if(!instance) {
		instance = new dialogConstructor({
			el: document.createElement('div')
		})
	}

	if(typeof option === 'string') {
		instance.content = option
	} else {
		extend(instance.$data, option)
	}

	instance.$data.show = true

	return new Promise(function(resolve, reject) {
		instance.success = () => {
			instance.close()
			resolve()
		}
		instance.cancel = () => {
			instance.close()
			reject()
		}

		document.body.appendChild(instance.$el)
	})

}

export default Alert