import Vue from 'vue'
import VueRouter from 'vue-router'
// import Index from './component/index/index.vue'
// import Server from './component/server/server.vue'
// import Grarantee from './component/grarantee/grarantee.vue'
// import Myself from './component/myself/myself.vue'

const Index = () => import('./component/index/index.vue')
const Server = () => import('./component/server/server.vue')
const Product = () => import('./component/product/product.vue')
const Myself = () => import('./component/myself/myself.vue')

Vue.use(VueRouter)


let routes = [
	{
		path: '/',
		name: 'Index',
		component: Index
	},
	{
		path: '/index',
		name: 'Index',
		component: Index,
		meta: {
			animation: 0
		}
	},
	{
		path: '/server',
		name: 'Server',
		component: Server,
		meta: {
			animation: 1
		}
	},
	{
		path: '/product',
		name: 'Product',
		component: Product,
		meta: {
			animation: 2
		}
	},
	{
		path: '/myself',
		name: 'Myself',
		component: Myself,
		meta: {
			animation: 3
		}
	},
	{
		path: '*',
		redirect: '/'
	}
]

let router = new VueRouter({
	mode: 'history',
	routes,
	scrollBehavior(to, from, savedPosition) {
		console.log(savedPosition)
	}
})

// router.beforeEach(function(to, from, next) {
// 	if(to.matched.length === 0) {
// 		from.name ? next({name: from.name}) : next('/index')
// 	} else {
// 		next()
// 	}
// })

export default router