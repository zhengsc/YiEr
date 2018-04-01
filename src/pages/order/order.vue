<template>
	<div class="order">
		<Process :steps="steps" :currentStep="currentStep" />
		
		<transition :name="slide">
			<!-- <keep-alive> -->
				<router-view></router-view>
			<!-- </keep-alive> -->
		</transition>
	</div>
</template>

<script>
	import Process from './process.vue'

	export default {
		data() {
			return {
				slide: '',
				steps: [
					{
						index: 1,
						name: '阅读协议',
						path: ''
					},
					{
						index: 2,
						name: '填写信息',
						path: 'info'
					},
					{
						index: 3,
						name: '付款'
					}
				],
				isAgreeEntrance: false
			}
		},
		computed: {
			currentStep() {
				switch(this.$route.name) {
					case 'OrderInfo':
						return 2; break;
					case 'OrderEntrance':
						return 1; break;
					case 'OrderPay':
						return 3; break;
					default: 
						return 1;
				}
			}
		},
		components: {
			Process,
		},
		methods: {
			changeEntranceStatus(status) {
				this.isAgreeEntrance = status
			},
			nextStep() {
				this.currentStep++
			}
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
	@mixin flex($justify: center, $align: center) {
		display: flex;
		justify-content: $justify;
		align-items: $align;
	}

	.order {
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
	}
	.info-context,
	.agreement-context {
		position: absolute;
		top: 1.74rem;
		left: 0;
		bottom: 0;
		right: 0;
	}
	
</style>
