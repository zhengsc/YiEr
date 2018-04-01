<template>
	<div class="product">
		<div class="tab">
			<a 
				href="javascript:;" 
				:class="filter === 'all' ? 'active' : ''"
				@click="changeFilter('all')"
			>产品列表</a>
			<a 
				href="javascript:;" 
				:class="filter === 'order' ? 'active' : ''"
				@click="changeFilter('order')"
			>已购产品</a>
		</div>
		<div class="scroll">
			<Products
				:list="filterList"
			/>
			<Loading 
				:isShowLoading="isShowLoading"
			/>
		</div>
	</div>
</template>

<script>
	import Api from '../../assest/Api.js'
	import Products from './products.vue'
	import Loading from '../../component/loading/loading.vue'

	export default {
		data() {
			return {
				filter: 'all',
				list: [],
				filterList: [],
				isShowLoading: true
			}
		},
		components: {
			Products,
			Loading
		},
		created() {
			this.$http.post(Api.productList, this.Qs.stringify({
				regionId: '110100',
				type: '',
				channel: 'YIERWAP'
			})).then(response => {
				let resp = response.data

				if(resp.success) {
					this.list = resp.data
					this.filterList = resp.data
				}
			}).catch(error => {
				console.log(error)
			}).finally(() => {
				this.isShowLoading = false
			})
		},
		methods: {
			changeFilter(type) {
				if(type === 'all') {
					this.filterList = this.list
				} else {
					this.filterList = this.list.filter(product => product.status === 2)
				}

				this.filter = type
			}
		}
	}
</script>

<style lang="scss" scoped>
	.product {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 1rem;
		overflow: auto;
		-webkit-overflow-scrolling: touch;
		.tab {
			height: .8rem;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			border-bottom: 1px solid #e1e1e1;
			background-color: #fff;
			a {
				height: 80%;
				display: flex;
				justify-content: center;
				align-items: center;
				margin: 0 .3rem;
				font-size: 26px;
				color: #1e1e1e;
				&.active {
					color: #f7aa2b;
					border-bottom: 4px solid #f7aa2b;
				}
			}
		}
		.scroll {
			position: absolute;
			top: .8rem;
			left: 0;
			bottom: 0;
			right: 0;
			overflow: auto;
			background: #efefef;
		}
	}
</style>
