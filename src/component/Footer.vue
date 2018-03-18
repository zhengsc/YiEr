<template>
  <div id="footer" class="footer">
			<router-link to="/" exact>
				<i></i>
				<span>首页</span>
			</router-link>
			<router-link to="/server">
				<i></i>
				<span>健康服务</span>
			</router-link>
			<router-link to="/product">
				<i></i>
				<span>健康管理</span>
			</router-link>
			<router-link to="/myself">
				<i></i>
				<span>我的</span>
			</router-link>
		</div>
</template>

<script>

	export default {
		data() {
			return {

			}
		}
	}
</script>

<style lang="scss" scoped>
	#footer {
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		height: 1rem;
		display: flex;
		justify-content: center;
		align-items: center;
		border-top: 1px solid #909090;
		background: #fff;
		a {
			flex-grow: 1;
			display: flex;
			width: 25%;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			font-size: 22px;
			color: #311f01;
			text-decoration: none;
			i {
				display: block;
				width: .44rem;
				height: .44rem;
				background-size: .44rem;
				background-repeat: no-repeat;
				background-position: center center;
				
			}
			&:nth-child(1) i {
				background-image: url('../images/icon/index.png')
			}
			&:nth-child(2) i {
				background-image: url('../images/icon/server.png')
			}
			&:nth-child(3) i {
				background-image: url('../images/icon/grarantee.png')
			}
			&:nth-child(4) i {
				background-image: url('../images/icon/myself.png')
			}
			&:nth-child(1).router-link-active {
				color: #f58400;
				i {
					background-image: url('../images/icon/index-check.png')
				}
			}
			&:nth-child(2).router-link-active {
				color: #f58400;
				i {
					background-image: url('../images/icon/server-check.png')
				}
			}
			&:nth-child(3).router-link-active {
				color: #f58400;
				i {
					background-image: url('../images/icon/grarantee-check.png')
				}
			}
			&:nth-child(4).router-link-active {
				color: #f58400;
				i {
					background-image: url('../images/icon/myself-check.png')
				}
			}
			span {
				line-height: 1;
				margin-top: .12rem;
				font-size: 22px;
			}
		}
	}
</style>

