import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
	state: {
		isLogin: false,
		userInfo: {}
	},
	mutations: {
		changeLoginStatus(state) {
			state.isLogin = !state.isLogin
		},
		setUserInfo(state, user) {
			state.userInfo = user
		}
	}
})

export default store