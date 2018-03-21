import Alert from './component/dialog/index.js'

let install = (Vue) => {
	Vue.prototype.$Alert = Alert
}

export default install