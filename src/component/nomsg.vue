<template>
	<div class="nomsg">
		<img src="/src/images/product/nomsg-icon.png" alt="">
		<p>{{msg}}</p>
	</div>
</template>

<script>
	export default {
		props: {
			msg: {
				type: String,
				default: '暂无信息'
			}
		}
	}
</script>

<style lang="scss" scoped>
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

