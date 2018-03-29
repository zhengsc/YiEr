<template>
	<div class="order">
		<Process :steps="steps" />
		<Agreement :isCheck="isAgreeEntrance" @changeStatus="changeEntranceStatus"/>
		<div class="btn">
			<button @click="nextStep">下一步</button>
		</div>
	</div>
</template>

<script>
	import Process from './process.vue'
	import Agreement from './agreement.vue'

	export default {
		data() {
			return {
				steps: [
					{
						index: 1,
						name: '阅读协议'
					},
					{
						index: 2,
						name: '填写信息'
					},
					{
						index: 3,
						name: '付款'
					}
				],
				isAgreeEntrance: false
			}
		},
		components: {
			Process,
			Agreement
		},
		methods: {
			changeEntranceStatus(status) {
				this.isAgreeEntrance = status
			},
			nextStep(event) {
				if(!this.isAgreeEntrance) {
					console.log('请勾选协议')
					document.querySelector('.agreement').scrollTop = 100000
					return 
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
	.btn {
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		height: 1rem;
		button {
			width: 100%;
			height: 100%;
			background-color: #f7aa2b;
			color: #fff;
			@include flex;
			font-size: 24px;
		}
	}
</style>
