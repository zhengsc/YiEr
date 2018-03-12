<template>
	<div class="video">
		<div class="title">
			<span>
				<i></i>
				益儿剧场
			</span>
			<button>更多</button>
		</div>
		<div class="body" @click="goVideoList">
			<div>
				<img :src="video.picture" alt="">
				<p class="video-title">{{video.description}}</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			video: {
				type: Object,
				required: true
			}
		},
		data() {
			return {

			}
		},
		methods: {
			goVideoList() {
				this.$router.push(this.video.path)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.video {

		.title {
			height: .83rem;
			padding: 0 .2rem;
			display: flex;
			justify-content: space-between;
			align-items: center;
			border-bottom: 4px solid #ff950c;
			button {
				color: #ff950c;
				font-size: 24px;
			}
		}
		.body {
			height: 4.2rem;
			div {
				height: 100%;
				background: url('/src/images/index/video-icon.png') center center no-repeat;
				background-size: 1.04rem;
				position: relative;
				.video-title {
					position: absolute;
					bottom: 0;
					padding: 0 .32rem;
					color: #fff;
					width: 100%;
					min-height: .8rem;
					background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.3))
				}
				img {
					width: 100%;
					height: 100%
				}
			}
		}
	}
</style>

