<template>
	<div class="location">
		<img src="/src/images/index/location-icon.png" alt="">
		<span>{{location}}</span>
	</div>
</template>

<script>
	export default {
		props: {
			location: {
				type: String,
				required: true
			}
		},
		data() {
			return {

			}
		}
	}
</script>

<style lang="scss" scoped>
	.location {
		position: absolute;
		top: .28rem;
		left: .22rem;
		width: auto;
		height: .82rem;
		display: flex;
		justify-content: center;
		align-items: center;
		background: rgba(135, 106, 80, 0.4);
		border-radius: .4rem;
		padding-left: .1rem;
		padding-right: .3rem;
		color: #fff;
		font-size: 20px;
		img {
			width: .44rem;
			height: .44rem;
			margin-right: .1rem;
		}
	}
</style>

