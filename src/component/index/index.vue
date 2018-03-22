<template>
	<div class="index-page">
		<BabyInfo 
			:baby="babyInfoObject" 
		/>
		<Tool 
			:ad="ad"
		/>
		<Video 
			:video="video"
		/>
		<Article 
		/>
	</div>
</template>

<script>
	import Api from '../../assest/Api.js'
	import BabyInfo from './babyInfo.vue'
	import Tool from './tool.vue'
	import Video from './video.vue'
	import Article from './article.vue'

	export default {
		data() {
			return {
				isLogin: false,
				babyInfoObject: {
					age: '1年2月',
					nickname: '生日快乐',
					icon: '/src/images/index/baby-default.png'
				},
				ad: {},
				video: {}
			}
		},
		created() {
			this.$http.get(Api.userInfo)
						.then(response => {
							this.isLogin = response.data.data
							this.getData()
							this.$store.commit('setUserInfo', response.data.data)
						}).catch(error => {
							console.log(error)
						})
		},
		computed: {
			
		},
		components: {
			BabyInfo,
			Tool,
			Video,
			Article
		},
		methods: {
			getData() {
				this.getAdObject().getDefaultBabyInfo().getVideoObject()
			},
			getDefaultBabyInfo() {
				this.$http.get(Api.getDefaultBabyInfo)
							.then(response => {
								if(response.data) {
									if(response.data.data) {
										this.babyInfoObject = response.data.data
									}
								}
							}).catch(error => {
								console.log(error)
							})

				return this
			},
			getAdObject() {
				let _this = this

				this.$http.get(Api.queryShowBanner, {
					params: {
						place: 1
					}
				}).then(response => {
					let resp = response.data

					if(resp.success) {
						this.ad = resp.data.length > 0 ? resp.data[0] : {
							href: 'http://toc.minganonline.com/pages/trainChildTool.html',
							image: '/uploads/banner/eefc5603c6cd4848af9fc9b841faf9f0.jpg'
						}
					}
				}).catch(error => {

				})

				return this
			},
			getVideoObject() {
				this.$http.get(Api.getArticlesByCatalogId, {
					params: {
						start: 1,
						end: 1,
						catalogId: 22
					}
				}).then(response => {
						let resp = response.data

						if(resp.success) {
							this.video = resp.data[0] || {
								description: '描述',
								path: '/uploads/onLineFile/4/2504.html',
								picture: '/uploads/article//titleImgFile/4/b3c99de38f2748b2acc28da4bb1f8566.png'
							}
						}
					}).catch(error => {

					})

				return this
			}
		}
	}
</script>

<style lang="scss" scoped>
	.index-page {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 1rem;
		overflow: auto;
		-webkit-overflow-scrolling: touch;
	}
</style>

