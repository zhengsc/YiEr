import Alert from './component/dialog/index.js'
import Toast from './component/toast/index.js'

let install = (Vue) => {
	Vue.prototype.$Alert = Alert,
	Vue.prototype.$Toast = Toast
}

export default install