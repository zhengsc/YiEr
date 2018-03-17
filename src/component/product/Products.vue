<template>
	<div 
		class="products"
		v-if="list.length > 0"
	>
		<div 
			class="product"
			v-for="product in list"
			:key="product.id"
			@click="goDetail(product.id)"
		>
			<img :src="'/uploads/img/' + product.icon + '_b.png'" alt="" />
			<div class="product-info">
				<h3>{{product.name}}</h3>
				<p v-if="product.status === 1">
					<span class="price">{{product.price / 100}}</span>
					<span>元 / </span>
					<span class="unit">{{productUnit(product.validTimeCount, product.validTimeUnit)}}</span>
				</p>
				<p v-else-if="product.status === 2">
					<span class="ordered">已订购</span>
				</p>
				<p v-else>
					<span class="invalid">已过期</span>
				</p>
			</div>
		</div>
	</div>
	<div class="nomsg" v-else>
		<img src="/src/images/product/nomsg-icon.png" alt="">
		<p>您还没有订购产品</p>
	</div>
</template>

<script>
	export default {
		props: {
			list: {
				type: Array,
				required: true
			}
		},
		data() {
			return {

			}
		},
		methods: {
			productUnit(count, unit) {
				switch(unit) {
					case 0:
						return (count + '天')
						break;
					case 1:
						if(count === 6) {
							return '半年'
						} else {
							return (count + '月')
						}
						break;
					case 2:
						return (count + '年')
						break;
				}
			},
			goDetail(id) {
				this.$router.push(`/product/detail/${id}`)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.product {
		height: 4.8rem;
		font-size: 0;
		border-bottom: 1px solid #e1e1e1;
		&:not(:last-child) {
			margin-bottom: .1rem;
		}
		img {
			width: 100%;
			height: 3.8rem;
		}
		.product-info {
			height: 1rem;
			background: #fff;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0 .2rem;
			h3 {
				font-size: 32px;
				color: #1e1e1e;
			}
			span {
				font-size: 24px;
				color: #b2b2b2;
			}
			.price {
				color: #fa5e2d;
				font-size: 36px;
				margin-right: .1rem;
			}
			.ordered {
				color: rgb(91, 184, 17)
			}
			.invalid {
				color: #fa5e2d;
			}
		}
	}
	.nomsg {
		font-size: 0;
		img {
			display: block;
			width: 3.3rem;
			height: 3.28rem;
			margin: auto;
		}
		p {
			color: rgb(160, 160, 160);
			font-size: 28px;
			text-align: center;
			margin-top: .4rem;
		}
	}
</style>

