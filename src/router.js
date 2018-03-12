import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from './component/index/index.vue'
import Server from './component/server/server.vue'
import Grarantee from './component/grarantee/grarantee.vue'
import Myself from './component/myself/myself.vue'

Vue.use(VueRouter)


let routes = [
	{
		path: '/index',
		component: Index,
		meta: {
			animation: 0
		}
	},
	{
		path: '/server',
		component: Server,
		meta: {
			animation: 1
		}
	},
	{
		path: '/grarantee',
		component: Grarantee,
		meta: {
			animation: 2
		}
	},
	{
		path: '/myself',
		component: Myself,
		meta: {
			animation: 3
		}
	}
]

let router = new VueRouter({
	routes
})

export default router