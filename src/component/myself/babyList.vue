<template>
	<div class="babyList">
		<div class="list-wrap" v-if="babys.length > 0">
			<div 
				v-for="(baby, index) in babys" 
				:key="baby.id"
				:class="['baby-item', 'baby-list-bg-' + index]" 
			>
				<img src="/src/images/index/baby-default.png" alt="">
				<div>
					<p>{{baby.nickname}}</p>
					<p>{{baby.birthday.slice(0, 10)}}</p>
				</div>
			</div>
		</div>
		<nomsg v-else :msg="nomsg" />
		<div class="baby-add-btn">
			<button>添加宝宝</button>
		</div>
	</div>
</template>

<script>
	import Api from '../../assest/Api.js'
	import Nomsg from '../nomsg.vue'

	export default {
		data() {
			return {
				babys: [],
				nomsg: '您还没有添加宝宝'
			}
		},
		activated() {
			let _this = this

			this.$http.post(Api.babyList).then(function(response) {
				let resp = response.data

				if(resp.success) {
					_this.babys = resp.data.slice(0)
				}
			}).catch(function(error) {
				console.log(error)
			})
		},
		components: {
			Nomsg
		}
	}
</script>

<style lang="scss" scoped>
	.babyList {
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		.list-wrap {
			height: auto;
			padding: .2rem;
			.baby-item {
				width: 100%;
				height: 2.17rem;
				padding: 0 .4rem;
				display: flex;
				justify-content: flex-start;
				align-items: center;
				background-position: center center;
				background-repeat: no-repeat;
				background-size: cover;
				img {
					width: 1.4rem;
					height: 1.4rem;
					margin-right: .4rem;
				}
				div {
					display: flex;
					flex-direction: column;
					justify-content: space-around;
					align-items: flex-start;
					color: #fff;
					height: 1.4rem;
				}
				&.baby-list-bg-0 {
					background-image: url('/src/images/myself/baby-list-bg-1.png')
				}
				&.baby-list-bg-1 {
					background-image: url('/src/images/myself/baby-list-bg-2.png')
				}
				&.baby-list-bg-2 {
					background-image: url('/src/images/myself/baby-list-bg-3.png')
				}
				&:not(:first-child) {
					margin-top: .2rem;
				}
			}
		}
		.baby-add-btn {
			position: absolute;
			bottom: 0;
			left: 0;
			right: 0;
			height: 1rem;
			button {
				display: block;
				width: 100%;
				height: 100%;
				font-size: 24px;
				color: #fff;
				background: #f7aa2b;
			}
		}
	}
</style>

