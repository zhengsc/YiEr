<template>
	<div class="menu">
		<a href="javascript:;">
			<img src="/src/images/myself/server-icon.png" alt="">
			<p>我的服务</p>
		</a>
		<a href="javascript:;" @click="go2BabyList">
			<img src="/src/images/myself/baby-list-icon.png" alt="">
			<p>我的宝宝</p>
		</a>
		<a href="javascript:;">
			<img src="/src/images/myself/online-icon.png" alt="">
			<p>我的咨询</p>
		</a>
		<a href="javascript:;">
			<img src="/src/images/myself/log-icon.png" alt="">
			<p>服务记录</p>
		</a>
		<a href="javascript:;" class="custom">
			<img src="/src/images/myself/custom-icon.png" alt="">
			<p>客服</p>
		</a>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			go2BabyList() {
				this.$router.push('/babyList')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.menu {
		height: auto;
		a {
			height: 1rem;
			display: flex;
			align-items: center;
			background: #fff;
			&.custom {
				margin-top: .2rem;
			}
			img {
				width: .44rem;
				height: .44rem;
				margin: 0 .28rem;
			}
			p {
				height: 100%;
				font-size: 28px;
				border-bottom: 1px solid #e6e6e6;
				display: flex;
				align-items: center;
				flex-grow: 1;
			}
		}
	}
</style>

