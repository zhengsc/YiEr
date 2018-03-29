import Vue from 'vue'
import VueRouter from 'vue-router'
// import Index from './component/index/index.vue'
// import Server from './component/server/server.vue'
// import Grarantee from './component/grarantee/grarantee.vue'
// import Myself from './component/myself/myself.vue'

const Index = () => import('./pages/index/index.vue')
const Server = () => import('./pages/server/server.vue')
const Product = () => import('./pages/product/product.vue')
const Myself = () => import('./pages/myself/myself.vue')
const ProductDetail = () => import('./pages/product/detail.vue')
const babyList = () => import('./pages/myself/babyList.vue')
const Read = () => import('./pages/read/read.vue')

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
	}
]

let router = new VueRouter({
	mode: 'history',
	routes
})



export default router