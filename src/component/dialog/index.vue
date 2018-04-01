<template>
	<transition name="fade" appear>
		<div v-show="show" class="dialog-wrap" @click="mask">
			<div class="dialog-inner">
				<h3>{{title}}</h3>
				<div class="dialog-content">{{content}}</div>
				<div class="btns">
					<button @click="success">{{confirmBtnText}}</button>
					<button v-if="cancelBtnText" @click="cancel">{{cancelBtnText}}</button>
				</div>
			</div>
		</div>	
	</transition>
</template>

<script>
	export default {
		data() {
			return {
				show: true,
				content: '',
				title: '提示',
				closeWithMask: true,
				confirmBtnText: '确认',
				cancelBtnText: ''
			}
		},
		methods: {
			success() {},
			cancel() {},
			close() {
				this.show = false
			},
			mask() {
				if(this.closeWithMask) {
					this.close()
				}
			}
		}
	}

</script>

<style lang="scss" scoped>
	$themeColor: #f7aa2b;
	$borderColor: #e1e1e1;
	@mixin flex($justify: center, $align: center) {
		display: flex;
		justify-content: $justify;
		align-items: $align;
	}
	.dialog-wrap {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background: rgba(0, 0, 0, 0.4);
		z-index: 99;
		@include flex;
		&.fade-enter-active {
			.dialog-inner {
				transition: all .2s ease-out;
			}
		}
		&.fade-leave-active {
			.dialog-inner {
				transition: all .2s ease-in;
			}
		}
		&.fade-enter,
		&.fade-leave-to {
			.dialog-inner {
				opacity: 0;
				// transform: scale(.7);
				transform: translateY(10%);
			}
			
		}
		&.fade-leave,
		&.fade-active-to {
			.dialog-inner {
				opacity: 1;
				// transform: scale(1);
				transform: translateY(0);
			}
		}
		.dialog-inner {
			width: 75%;
			height: auto;
			border-radius: .1rem;
			overflow: hidden;
		}
		h3 {
			width: 100%;
			height: .88rem;
			@include flex;
			background: #fff;
			border-bottom: 1px solid $borderColor
		}
		.dialog-content {
			width: 100%;
			padding: .4rem .2rem;
			background: #fff;
			color: #666;
			@include flex;
			font-size: 28px;
		}
		.btns {
			width: 100%;
			height: .88rem;
			@include flex;
			background-color: #fff;
			border-top: 1px solid $borderColor;
		}
		button {
			width: 50%;
			height: 100%;
			color: $themeColor;
			font-size: 24px;
			text-align: center;
			flex-grow: 1;
			&:nth-child(2) {
				border-left: 1px solid $borderColor;
			}
		}
	}
</style>

