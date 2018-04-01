<template>
	<transition name="fade" appear>
		<div class="select-wrap" v-if="show">
			<div class="select-body">
				<div class="title">
					<h3>{{options.title}}</h3>
					<i @click="close"></i>
				</div>
				<ul class="option-list">
					<li 
						class="option-item" 
						v-for="item in options.list" 
						:key="item.id" 
						@click="select(item)"
					>
						<img :src="item.icon" alt="">
						<span>{{item.text}}</span>
					</li>
				</ul>
			</div>
		</div>
	</transition>
</template>

<script>
	export default {
		data() {
			return {
				show: true,
				options: {}
			}
		},
		methods: {
			select() {
				
			},
			close() {

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

	.select-wrap {
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		background-color: rgba(0, 0, 0, 0.4);
		z-index: 99;
		.select-body {
			position: absolute;
			left: 0;
			right: 0;
			bottom: 0;
			height: auto;
			background: #fff;
			.title {
				height: 1rem;
				border-bottom: 1px solid #ededed;
				@include flex;
				i {
					position: absolute;
					right: .24rem;
					top: 0;
					display: block;
					width: 1rem;
					height: 1rem;
					background: url("/src/images/icon/close.png") center center no-repeat;
					background-size: .44rem;
				}
			}
			.option-item {
				height: 1rem;
				padding: 0 .24rem;
				@include flex(flex-start);
				img {
					width: .5rem;
					height: .5rem;
					margin-right: .2rem;
				}
				&:not(:last-child) {
					border-bottom: 1px solid #ededed;
				}
			}
		}
		&.fade-enter-active,
		&.fade-leave-active {
			.select-body {
				transition: .2s transform ease-in;
			}
		}
		&.fade-enter,
		&.fade-leave-to {
			.select-body {
				transform: translateY(100%);
			}
		}
		&.fade-enter-to,
		&.fade-leave {
			.select-body {
				transform: translateY(0);
			}
		}
	}
</style>

