<template>
	<div class="index-tool">
		<div class="everyday-read">
			<p>{{text}}</p>
			<button @click="go2Read">更多</button>
		</div>
		<div class="growth">
			<p>
				生长发育：
				<span>{{height}} cm</span>
				<span>{{weight}} kg</span>	
			</p>
			<button @click="showAlert">修改</button>
		</div>
		<div class="ad">
			<img 
				:src="ad.image"
				@click="goAdDetail" 
				alt="" 
			/>
		</div>
		<div class="tool-btn">
			<a href="javascript:;" @click="goAllTool">
				<i></i>
				<span>全部工具</span>
			</a>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			ad: {
				type: Object,
				required: true
			},
			height: {
				type: String,
				default() {
					return '--'
				}
			},
			weight: {
				type: String,
				default() {
					return '--'
				}
			}
		},
		data() {
			return {
				text: '每一次成长都是生命的礼赞，现在就去添加宝宝信息关注宝宝成长吧~',
				
			}
		},
		methods: {
			goAdDetail() {
				this.$router.push(this.ad.href)
			},
			goAllTool() {
				// this.$router.push('/tool')
				// this.$store.commit('changeLoginStatus')

				// this.$store.commit('loginIn')
			},
			go2Read() {
				this.$router.push('/read')
			},
			showAlert() {
				this.$Alert({
					content: 'hello world',
					cancelBtnText: '取消'
				}).then(function() {
					console.log('点击了确认')
				}).catch(function() {
					console.log('点击了取消')
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.index-tool {
		width: 100%;
		height: auto;
		background: #fff;
		padding-top: .3rem;
		border-bottom: 1px solid #e1e1e1;
		div {
			width: 7.1rem;
			height: auto;
			display: flex;
			justify-content: center;
			align-items: center;
			padding: .2rem;
			font-size: 24px;
			margin: auto;
			border: 1px solid rgb(225, 225, 225);
			border-radius: .1rem;
			&.everyday-read {
				flex-direction: column;
				p {
					text-indent: 2em;
				}
				button {
					align-self: flex-end;
				}
			}
			&:not(:first-child) {
				margin-top: .1rem
			}
			&.growth {
				justify-content: space-between;
				height: 1.1rem;
				span:last-child {
					margin-left: .4rem;
				}
			}
			&.ad {
				height: 1.4rem;
				padding: 0;
				overflow: hidden;
				img {
					width: 100%;
					height: 100%;
				}
			}
			&.tool-btn {
				height: .83rem;
				padding: 0;
				border: 0;
				a {
					display: flex;
					justify-content: center;
					align-items: center;
					width: 100%;
					height: 100%;
					i {
						display: block;
						width: .44rem;
						height: .44rem;
						background: url('/src/images/index/tool-icon.png') center center no-repeat;
						background-size: contain;
					}
					span {
						margin-left: .2rem;
						color: #ff950c
					}
				}
			}
			button {
				color: #f7aa2b;
				border: 0;
				outline: 0;
				background: none;
				font-size: 24px;
			}
		}
	}
</style>

