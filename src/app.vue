<template>
	<!-- <div> -->
		<div id="body">
			<transition :name="slide">
				<keep-alive>
					<router-view></router-view>
				</keep-alive>
			</transition>
			<Footer></Footer>
			<!-- <transition :name="loginSlide">
				<Login v-if="isLogin" />
			</transition> -->
			
		</div>
	<!-- </div> -->
</template>

<script>
	import Footer from './component/Footer.vue'

	export default {
		data() {
			return {
				slide: ''
			}
		},
		components: {
			Footer
		},
		watch: {
			'$route'(to, from) {
				if(typeof from.meta.animation !== 'undefined') {
					if(to.meta.animation < from.meta.animation) {
						this.slide = 'slide-right'
					} else {
						this.slide = 'slide-left'
					}
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
		overflow: hidden;
		> div:not(#footer) {
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 1rem;
		}
	}
</style>
