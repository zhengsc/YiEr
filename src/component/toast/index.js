import Vue from 'Vue'
import toast from './index.vue'

let toastList = []

let extend = (origin, obj) => {
	for(let i of obj) {
		if(origin.hasOwnProperty(i)) {
			origin[i] = obj[i]
		}
	}
}

let ToastConstructor = Vue.extend(toast)

let showNextToast = () => {
	let opt = toastList[0]
	if(!opt) return ;
	let instance = new ToastConstructor()

	if(typeof opt === 'string') {
		instance.content = opt
	} else {
		extend(instance.$data, opt)
	}

	instance.close = () => {
		instance.show = false
		toastList.shift()
		showNextToast()
	}
	
	document.body.appendChild(instance.$mount().$el)
	
}

let Toast = (option) => {
	toastList.push(option)

	if(toastList.length == 1) {
		showNextToast()
	}
}

export default Toast