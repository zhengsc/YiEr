<template>
	<div class="server">
		<h3>服务医生均有10年以上临床经验</h3>
		<OnlineService />
		<PhoneService />
	</div>
</template>

<script>
	import OnlineService from './OnlineService.vue'
	import PhoneService from './PhoneService.vue'

	export default {
		data() {
			return {

			}
		},
		components: {
			OnlineService,
			PhoneService
		}
	}
</script>

<style lang="scss" scoped>
	.server {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 1rem;
		overflow: auto;
		-webkit-overflow-scrolling: touch;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		overflow: hidden;
		background: url('/src/images/server/server-bg.png') no-repeat center center;
		background-size: cover;
		h3 {
			color: #fff;
			font-size: 36px;
		}
	}
</style>

