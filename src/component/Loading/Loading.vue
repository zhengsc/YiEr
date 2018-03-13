<template>
	<div v-show="isShowLoading">
		<span>加载中...</span>
	</div>
</template>

<script>
	export default {
		props: {
			isShowLoading: {
				type: Boolean,
				required: true
			}
		},
	}
</script>

<style lang="scss" scoped>
	div {
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		background: rgba(0, 0, 0, 0.4);
		display: flex;
		justify-content: center;
		align-items: center;
		color: #fff;
		font-size: 32px;
	}
</style>

