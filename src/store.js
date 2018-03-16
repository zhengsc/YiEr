import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
	state: {
		isLogin: false,
		userInfo: {}
	},
	mutations: {
		loginIn(state) {
			state.isLogin = true
		},
		loginOut(state) {
			state.isLogin = false
		},
		setUserInfo(state, user) {
			state.userInfo = user
		}
	}
})

export default store