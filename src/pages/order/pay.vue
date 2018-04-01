<template>
	<div class="pay">
		<div class="pay-option" @click="selectPayType">
			<div class="pay-title">
				<img src="/src/images/order/pay-icon.png" alt="">
				<span>支付方式</span>
			</div>
			<div class="pay-selected">
				<img :src="payType.icon" alt="">
				<span>{{payType.text}}</span>
				<img class="entry-icon" src="/src/images/icon/entry-icon.png" alt="" />
			</div>
		</div>
		<div class="btns">
			<a href="javascript:;" class="price">合计：<span>{{getProductPrice}}</span>元</a>
			<a href="javascript:;" class="submit">支付</a>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				payType: {
					id: 1,
					icon: '/src/images/order/alipay-icon.png',
					text: '支付宝'
				}
			}
		},
		computed: {
			getProductPrice() {
				return (this.$store.state.productPrice / 100).toFixed(2)
			}
		},
		methods: {
			selectPayType() {
				this.$Select({
					title: '支付方式',
					list: [
						{
							text: '支付宝',
							id: 1,
							icon: '/src/images/order/alipay-icon.png',
						},
						{
							text: '微信',
							id: 2,
							icon: '/src/images/order/wxpay-icon.png',
						}
					]
				}).then(item => {
					this.payType = item
				}).catch(() => {
					console.log('关闭')
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	@mixin flex($justify: center, $align: center) {
		display: flex;
		justify-content: $justify;
		align-items: $align;
	}

	.pay {
		position: absolute;
		top: 1.74rem;
		bottom: 0;
		left: 0;
		right: 0;
		.pay-option {
			height: 1rem;
			padding: 0 .24rem;
			margin-top: .1rem;
			font-size: 24px;
			background-color: #fff;
			@include flex(space-between);
			div img {
				margin-right: .2rem;
				flex-shrink: 0;
			}
			div.pay-title {
				width: 50%;
				@include flex(flex-start);
				img {
					width: .44rem;
					height: .44rem;
				}
			}
			div.pay-selected {
				width: 50%;
				@include flex(flex-end);
				img {
					width: .5rem;
					height: .5rem;
					&.entry-icon {
						width: .44rem;
						height: .2rem;
						display: block;
						transform: rotate(-90deg);
						margin-left: .2rem;
						margin-right: 0;
					}
				}
				
			}
		}
		.btns {
			position: absolute;
			left: 0;
			bottom: 0;
			right: 0;
			height: 1rem;
			@include flex;
			a {
				@include flex;
				height: 100%;
				font-size: 24px;
				background-color: #fff;
				&.submit {
					width: 3.14rem;
					color: #fff;
					background-color: #f7aa2b;
				}
				&.price {
					width: 4.36rem;
					padding-left: .48rem;
					justify-content: center;
					span {
						color: #f7aa2b;
					}
				}
			}
		}
	}

</style>
