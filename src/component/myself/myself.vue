<template>
	<div class="myself">
		<Info />
		<Menu />
		<!-- <LoginOut v-if=""> -->
	</div>
</template>

<script>
	import Info from './Info.vue'
	import Menu from './Menu.vue'

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
		overflow: auto;
		background: #efefef;
		-webkit-overflow-scrolling: touch;
	}
</style>
