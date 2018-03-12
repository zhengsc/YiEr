<template>
	<div class="score">
		<img src="/src/images/index/score-icon.png" alt="">
		<div>
			<span>健康阳光值</span>
			<span class="score-wrap">
				<i :style="{width: calScore}"></i>
			</span>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			score: {
				type: Number,
				required: true
			}
		},
		data() {
			return {

			}
		},
		computed: {
			calScore() {
				return Math.min(Math.max(Math.ceil(this.score / 9999 * 100), 10), 100) + '%'
			}
		}
	}
</script>

<style lang="scss" scoped>
	.score {
		position: absolute;
		top: .28rem;
		right: 0;
		width: 2.24rem;
		height: .82rem;
		background: rgba(135, 106, 80, 0.4);
		display: flex;
		justify-content: center;
		align-items: center;
		padding-left: .1rem;
		padding-right: 2px;
		border-top-left-radius: .4rem;
		border-bottom-left-radius: .4rem;
		color: #fff;
		img {
			width: .44rem;
			height: .44rem;
			margin-right: .1rem;
		}
		div {
			font-size: 20px;
			.score-wrap {
				display: flex;
				justify-content: flex-end;
				width: 1.2rem;
				height: .3rem;
				border-radius: .3rem;
				border: 1px solid #fff;
				background: #e6e6e6;
				overflow: hidden;
				i {
					display: block;
					height: 100%;
					background: #90e15a;
				}
			}
		}
	}
</style>

