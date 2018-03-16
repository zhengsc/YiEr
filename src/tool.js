import {showLogin, closeLogin} from './component/Tool/Login/index.js'

let install = (Vue) => {
	Vue.prototype.$showLogin = showLogin
	Vue.prototype.$closeLogin = closeLogin
}

export default install