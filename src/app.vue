<template>
	<!-- <div> -->
		<div id="body">
				<transition :name="slide">
					<keep-alive>
						<router-view></router-view>
					</keep-alive>
				</transition>
			<transition :name="footerSlide">
				<Footer v-show="showFooter"></Footer>
			</transition>
			
			<!-- <transition :name="loginSlide"> -->
				<Login v-if="isLogin" :show="isLogin" />
			<!-- </transition> -->
		</div>
		
	<!-- </div> -->
</template>

<script>
	import Footer from './component/Footer.vue'
	import Login from './component/Login/Login.vue'

	export default {
		data() {
			return {
				slide: '',
				loginSlide: 'slide-up',
				showFooter: true,
				footerSlide: 'slide-down'
			}
		},
		computed: {
			isLogin() {
				return this.$store.state.isLogin
			}
		},
		components: {
			Footer,
			Login
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
				
				this.showFooter = to.meta.level === 1

				this.footerSlide = to.meta.level < from.meta.level ? 'slide-up' : 'slide-down'

				console.log(to.meta.level + '--' + from.meta.level)
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
	}
</style>
