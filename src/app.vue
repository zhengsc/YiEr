<template>
	<!-- <div> -->
		<div id="body">
			<transition :name="slide">
				<router-view></router-view>
			</transition>
		<Footer></Footer>
		</div>
	<!-- </div> -->
</template>

<script>
	import Footer from './component/Footer.vue'

	export default {
		data() {
			return {
				slide: 'slide-left'
			}
		},
		components: {
			Footer
		},
		watch: {
			'$route'(to, from) {
				if(to.meta.animation < from.meta.animation) {
					this.slide = 'slide-right'
				} else {
					this.slide = 'slide-left'
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	#body {
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		padding-bottom: 1rem;
	}
</style>
