<template>
	<div class="order">
		<Process :steps="steps" :currentStep="currentStep" />
		
		<transition name="slide-left">
			<keep-alive>
				<router-view></router-view>
			</keep-alive>
		</transition>
	</div>
</template>

<script>
	import Process from './process.vue'
	import Agreement from './agreement.vue'
	import Info from './info.vue'

	export default {
		data() {
			return {
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
				isAgreeEntrance: false,
				currentStep: 1
			}
		},
		components: {
			Process,
			// Agreement,
			// Info
		},
		methods: {
			changeEntranceStatus(status) {
				this.isAgreeEntrance = status
			},
			nextStep() {
				this.$router.push(this.steps[++this.currentStep].path)
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
