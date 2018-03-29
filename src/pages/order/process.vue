<template>
	<div class="process">
		<div 
			v-for="step in steps" 
			:key="step.index"
			:class="['step', currentStep >= step.index ? 'over' : '']"
		>
			<i>{{step.index}}</i>
			<span>{{step.name}}</span>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			steps: {
				type: Array,
				required: true
			},
			currentStep: {
				type: Number,
				default: 1
			}
		},
		data() {
			return {

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

	.process {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 1.64rem;
		background-color: #fff;
		padding: .4rem 0;
		@include flex('space-around');
		.step {
			flex-grow: 1;
			@include flex;
			flex-direction: column;
			font-size: 20px;
			position: relative;
			&:not(:first-child) {
				&:before {
					content: '';
				}
			}
			&:not(:last-child) {
				&:after {
					content: '';
				}
			}
			&:before,
			&:after {
				width: 40%;
				height: 4px;
				position: absolute;
				top: 30%;
				z-index: 1;
				transform: translateY(-50%);
				background: #ccc;
			}
			&:before {
				left: 0;
			}
			&:after {
				right: 0;
			}
			&.over {
				i {
					background-image: url('/src/images/order/steps-over-icon.png');
				}
				span {
					color: #f7aa2b;
				}
				&:before,
				&:after {
					background-color: #f7aa2b;
				}
			}
			i {
				flex-grow: 0;
				flex-shrink: 0;
				height: .4rem;
				width: .4rem;
				font-style: normal;
				background-image: url('/src/images/order/steps-icon.png');
				background-repeat: no-repeat;
				background-position: center;
				background-size: cover;
				text-align: center;
				color: #fff;
				@include flex;
			}
			span {
				margin-top: .05rem;
			}
		}
	}
</style>

