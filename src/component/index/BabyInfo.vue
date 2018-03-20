<template>
	<div class="baby-content">
		<Location 
			:location="location"
		/>
		<Score
			:score="score"
		/>
		<div class="baby">
			<div class="baby-photo">
				<img 
					:src="baby.icon" 
					alt="" 
				/>
			</div>
			<div class="baby-info">
				<p>{{calBabyAge}}</p>
				<p>{{baby.nickname}}</p>
			</div>
		</div>
	</div>
</template>

<script>
	import Location from './location.vue';
	import Score from './score.vue'

	export default {
		props: {
			baby: {
				type: Object,
				required: true
			}
		},
		data() {
			return {
				location: '朝阳区',
				score: 100
			}
		},
		computed: {
			babyPhoto() {
				return this.baby.src
			},
			calBabyAge() {
				let age = this.baby.age
				let replaceArrayList = {
					'Y': '岁',
					'M': '月',
					'D': '天'
				}

				for(let i in replaceArrayList) {
					age.replace(new RegExp(i), replaceArrayList[i])
				}

				return age
			}
		},
		components: {
			Location,
			Score
		}
	}
</script>

<style lang="scss" scoped>
	.baby-content {
		position: relative;
		height: 4rem;
		background: url('/src/images/index/baby-bg.png') no-repeat top center;
		background-size: 7.5rem 3rem;
		.baby {
			position: absolute;
			bottom: 0;
			width: 100%;
			height: 2rem;
			display: flex;
			justify-content: center;
			div {
				height: 2.1rem;
				&:first-child {
					width: 2.1rem;
					border-radius: 100%;
					overflow: hidden;
					display: flex;
					justify-content: center;
					align-items: center;
					background: #fff;
					img {
						width: 1.8rem;
						height: 1.8rem;
						border-radius: 100%;
						outline: 0;
						box-shadow: 0 0 4px 1px rgba(124, 124, 124, 0.3);
					}
				}
				&.baby-info {
					width: 4rem;
					height: 1.8rem;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: flex-start;
					padding-left: .4rem;
					p {
						// padding: .1rem .2rem;
						&:first-child {
							padding: .1rem .2rem;
							margin-bottom: .4rem;
							background: #fa5e2d;
							color: #fff;
							border-radius: .1rem
						}
					}
				}
			}
		}
	}
</style>
