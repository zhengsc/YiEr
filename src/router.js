import Vue from 'vue'
import VueRouter from 'vue-router'
import Store from './store.js'
// import Index from './component/index/index.vue'
// import Server from './component/server/server.vue'
// import Grarantee from './component/grarantee/grarantee.vue'
// import Myself from './component/myself/myself.vue'

const Index = () => import('./pages/index/index.vue')
const Server = () => import('./pages/server/server.vue')
const Product = () => import('./pages/product/product.vue')
const Myself = () => import('./pages/myself/myself.vue')
const Login = () => import('./component/login/login.vue')
const ProductDetail = () => import('./pages/product/detail.vue')
const babyList = () => import('./pages/myself/babyList.vue')
const Read = () => import('./pages/read/read.vue')
const Order = () => import('./pages/order/order.vue')
const Agreement = () => import('./pages/order/agreement.vue')
const OrderInfo = () => import('./pages/order/info.vue')
const Pay = () => import('./pages/order/pay.vue')

Vue.use(VueRouter)


let routes = [
	{
		path: '/',
		name: 'Index',
		component: Index,
		meta: {
			animation: 0,
			level: 1
		}
	},
	{
		path: '/server',
		name: 'Server',
		component: Server,
		meta: {
			animation: 1,
			level: 1
		}
	},
	{
		path: '/product',
		name: 'Product',
		component: Product,
		meta: {
			animation: 2,
			level: 1
		}
	},
	{
		path: '/myself',
		name: 'Myself',
		component: Myself,
		meta: {
			animation: 3,
			level: 1
		}
	},
	{
		path: '/login',
		name: 'Login',
		component: Login,
		meta: {
			animation: 99,
			level: 2
		}
	},
	{
		path: '/product/detail/:id',
		name: 'ProductDetail',
		component: ProductDetail,
		meta: {
			level: 2,
			animation: 4
		}
	},
	{
		path: '/babyList',
		name: 'BabyList',
		component: babyList,
		meta: {
			login: true,
			level: 2,
			animation: 4
		}
	},
	{
		path: '/read',
		name: 'Read',
		component: Read,
		meta: {
			level: 2,
			animation: 4
		}
	},
	{
		path: '/order',
		name: 'Order',
		component: Order,
		meta: {
			level: 2,
			animation: 5
		},
		children: [
			{
				path: '',
				name: 'OrderEntrance',
				component: Agreement,
				meta: {
					animation: 5
				}
			},
			{
				path: 'info',
				name: 'OrderInfo',
				component: OrderInfo,
				meta: {
					animation: 6
				}
			},
			{
				path: 'pay',
				name: 'OrderPay',
				component: Pay,
				meta: {
					animation: 7
				}
			}
		]
	}
]

let router = new VueRouter({
	mode: 'history',
	routes
})

router.beforeEach((to, from, next) => {
	if(to.meta.login) {
		if(Store.state.isLogin) {
			next()
		} else {
			next({
				path: '/login',
				query: {
					href: encodeURIComponent(to.fullPath)
				}
			})
		}
	} else {
		next()
	}
})

export default router