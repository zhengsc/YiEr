<template>
	<div class="info">
		<img src="/src/images/myself/baby-icon.png" alt="">
		<a href="javascript:;">{{username}}</a>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		computed: {
			username() {
				let userInfo = this.$store.state.userInfo

				try {
					return userInfo.mobile ? userInfo.mobile : '请登录'
				} catch(e) {
					return '请登录'
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.info {
		height: 2.06rem;
		display: flex;
		align-items: center;
		padding: 0 .52rem;
		background: url('/src/images/myself/info-bg.png') no-repeat center center;
		background-size: cover;
		img {
			display: block;
			width: .88rem;
			height: .88rem;
			margin-right: .44rem;
		}
		a {
			font-size: 32px;
			color: #fff;
		}
	}
</style>

