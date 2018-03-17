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
	import BabyInfo from './babyInfo.vue'
	import Tool from './Tool.vue'
	import Video from './Video.vue'
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
			let _this = this

			this.$http.get('/s/login/userInfo')
						.then(function(response) {
							_this.isLogin = response.data.data
							_this.getData()
							_this.$store.commit('setUserInfo', response.data.data)
						}).catch(function(error) {
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
				let _this = this

				this.$http.get('/s/baby/getDefaultBaby')
							.then(function(response) {
								if(response.data) {
									if(response.data.data) {
										_this.babyInfoObject = response.data.data
									}
								}
							}).catch(function(error) {
								console.log(error)
							})

				return this
			},
			getAdObject() {
				let _this = this

				this.$http.get('/s/banner/queryShowBanner?place=1')
							.then(function(response) {
								let resp = response.data

								if(resp.success) {
									_this.ad = resp.data.length > 0 ? resp.data[0] : {
										href: 'http://toc.minganonline.com/pages/trainChildTool.html',
										image: '/uploads/banner/eefc5603c6cd4848af9fc9b841faf9f0.jpg'
									}
								}
							}).catch(function(error) {

							})

				return this
			},
			getVideoObject() {
				let _this = this

				this.$http.get('/s/appArticle/getArticlesByCatalogId?start=1&end=1&catalogId=22')
							.then(function(response) {
								let resp = response.data

								if(resp.success) {
									_this.video = resp.data[0] || {
										description: '描述',
										path: '/uploads/onLineFile/4/2504.html',
										picture: '/uploads/article//titleImgFile/4/b3c99de38f2748b2acc28da4bb1f8566.png'
									}
								}
							}).catch(function(error) {

							})

				return this
			}
		}
	}
</script>

<style lang="scss" scoped>
	.index-page {
		width: 100%;
		overflow: auto;
		-webkit-overflow-scrolling: touch;
	}
</style>

