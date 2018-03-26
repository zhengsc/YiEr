<template>
	<transition name="slide-toast" appear>
		<div id="Toast" class="Toast" v-if="show">
			<p>{{content}}</p>
		</div>
	</transition>
</template>

<script>
	export default {
		data() {
			return {
				content: '',
				show: true,
				timer: 2000
			}
		},
		mounted() {
			setTimeout(this.close, this.timer)
		},
		methods: {
			close() {}
		}
	}
</script>

<style lang="scss" scoped>
	@mixin flex($justify: center, $align: center) {
		display: flex;
		justify-content: $justify;
		align-items: $align;
	}
	
	.Toast.slide-toast-enter-active {
		transition: all .3s ease-out;
	}

	.Toast.slide-toast-leave-active {
		transition: all .3s ease-in;
	}

	.Toast.slide-toast-enter,
	.Toast.slide-toast-leave-to {
		opacity: 0;
		transform: translate(-50%, 100%);
	}

	.Toast.slide-toast-leave,
	.Toast.slide-toast-enter-to {
		opacity: 1;
		transform: translate(-50%, 0);
	}

	.Toast {
		position: fixed;
		bottom: 2rem;
		left: 50%;
		transform: translateX(-50%);
		width: auto;
		height: auto;
		@include flex;
		border-radius: .5rem;
		background: rgba(0, 0, 0, 0.6);
		p {
			padding: 5px .2rem;
			color: #fff;
			text-align: center;
		}
	}
</style>

