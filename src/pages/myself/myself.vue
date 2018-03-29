<template>
	<div class="myself">
		<Info />
		<Menu />
		<!-- <LoginOut v-if=""> -->
	</div>
</template>

<script>
	import Info from './Info.vue'
	import Menu from './menu.vue'

	export default {
		data() {
			return {

			}
		},
		components: {
			Info,
			Menu
		}
	}
</script>

<style lang="scss" scoped>
	.myself {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 1rem;
		overflow: auto;
		background: #efefef;
		-webkit-overflow-scrolling: touch;
	}
</style>
