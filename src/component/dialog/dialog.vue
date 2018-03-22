<template>
	<transition>
		<div v-if="show">
		
		</div>
	</transition>
</template>

<script>
	export default {
		data() {
			return {
				show: false
			}
		}
	}
</script>

<style lang="scss" scoped>
	div {
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		&:after {
			content: '';
			width: 0;
			display: inline-block;
			height: 100%;
			vertical-align: middle;
		}
	}
</style>
