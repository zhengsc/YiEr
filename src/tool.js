import Alert from './component/dialog/index.js'
import Toast from './component/toast/index.js'
import Select from './component/select/select.js'

let install = (Vue) => {
	Vue.prototype.$Alert = Alert,
	Vue.prototype.$Toast = Toast
	Vue.prototype.$Select = Select
}

export default install