<template>
	<div class="read">
		<div class="read-nav">
			<ul class="clearfix">
				<li 
					v-for="(tag, index) in tags" 
					:key="tag.tag" 
					:data-id="tag.tag" 
					:class="index == 0 ? 'check' : ''"
					@click="changeTab"
				>
					{{tag.name}}
				</li>
			</ul>
		</div>
		<div class="read-body">
			
			<transition>
				<div class="read-scroll">
					<div v-for="(read, index) in content" :key="index">
						<div class="read-title">
							<i class="icon"></i>
							<span>{{read.tag}}</span>
						</div>
						<div class="read-content">
							<p>{{read.content}}</p>
						</div>
					</div>
				</div>
			</transition>
		</div>
	</div>
</template>

<script>
	import Api from '../../assest/Api.js'

	export default {
		data() {
			return {
				tags: [],
				content: [],
				pending: true
			}
		},
		activated() {
			let _this = this

			this.$http.get(Api.readTags)
						.then(function(response) {
							let resp = response.data

							if(resp.success) {
								_this.tags = resp.data.slice(0)
								_this.getContent(_this.tags[0].tag)
							}
						}).catch(function(error) {
							console.log(error)
						})
		},
		methods: {
			getContent(id) {
				let _this = this

				this.$http.get(Api.getReadContent, {
					params: {
						period: id
					}
				}).then(function(response) {
					let resp = response.data

					if(resp.success) {
						_this.content = resp.data.slice(0)
					}
				}).catch(function(error) {
					console.log(error)
				})
			},
			changeTab(e) {
				document.querySelector('.check').classList.remove('check')
				e.target.classList.add('check')

				this.getContent(e.target.dataset.id)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.read {
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		> div {
			position: absolute;
			left: 0;
			right: 0;
		}
		.read-nav {
			top: 0;
			height: .9rem;
			overflow: auto;
			ul {
				white-space: nowrap;
				height: 100%;
			}
			li {
				margin: 0 .2rem;
				display: inline-block;
				text-align: center;
				line-height: .9rem;
				height: 100%;
				&.check {
					border-bottom: 4px solid #f7aa2b;
				}
			}
		}
		.read-body {
			top: .9rem;
			bottom: 0;
			overflow: auto;
			padding: .2rem 0;
			background: #efefef;
			.read-scroll > div {
				width: 7rem;
				margin: .0 auto;
				padding: .4rem .2rem;
				border-radius: .1rem;
				border: 1px solid #e1e1e1;
				background: #fff;
				&:not(:first-child) {
					margin-top: .2rem;
				}
				.read-title {
					display: flex;
					justify-content: flex-start;
					align-items: center;
					font-size: 28px;
					.icon {
						display: block;
						width: 1rem;
						height: 1rem;
						margin-right: .2rem;
						background: url('/src/images/read/icon.png') 0 center no-repeat;
						background-size: 3rem 1rem;
					}
				}
				.read-content {
					margin-top: .2rem;
					line-height: 1.8;
					font-size: 24px;
				}
			}
		}
	}
</style>
