<template>
	<div class="info">
		<h3 class="title">被保障人信息</h3>
		<div class="info-title">
			<p>请填写被保障人信息</p>
		</div>
		<div class="info-inputs">
			<div>
				<span>宝宝姓名</span>
				<input type="text" v-model="babyName" placeholder="请输入宝宝姓名" />
			</div>
			<div>
				<span>宝宝身份证号</span>
				<input type="text" v-model="babyCard" placeholder="请输入宝宝身份证号" />
			</div>
		</div>
		<div class="btns">
			<button class="price">￥ {{getProductPrice}}元</button>
			<button class="submit" @click="submit">提交</button>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				babyName: '',
				babyCard: ''
			}
		},
		methods: {
			submit() {
				if(this.babyName && this.babyCard) {
					this.$router.push('/order/pay')
				}
			}
		},
		computed: {
			getProductPrice() {
				return (this.$store.state.productPrice / 100).toFixed(2)
			}
		},
	}
</script>

<style lang="scss" scoped>
	@mixin flex($justify: center, $align: center) {
		display: flex;
		justify-content: $justify;
		align-items: $align;
	}

	.info {
		position: absolute;
		top: 1.74rem;
		bottom: 0;
		left: 0;
		right: 0;
		.title {
			height: .88rem;
			background-color: #fff;
			font-size: 26px;
			border-bottom: 1px solid #ededed;
			@include flex;
		}
		.info-title {
			height: .88rem;
			padding: 0 .24rem;
			background-color: #fff;
			@include flex(flex-start);
			p {
				border-left: 4px solid #f7aa2b;
				color: #f7aa2b;
				padding-left: .3rem;
			}
		}
		.info-inputs {
			background-color: #fff;
			div {
				height: .82rem;
				padding: 0 .24rem;
				border-top: 1px solid #ededed;
				@include flex(space-between);
				input {
					height: .5rem;
					width: 4rem;
					border: 0;
					outline: 0;
					font-size: 24px;
					text-align: right;
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
		button {
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
				color: rgb(244,101,68);
				padding-left: .48rem;
				justify-content: flex-start;
			}
		}
	}
</style>

