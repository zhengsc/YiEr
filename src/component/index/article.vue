<template>
	<div class="article-wrap">
		<div class="article-title">
			<span>
				<i></i>
				健康资讯
			</span>
			<button>更多</button>
		</div>
		<div v-if="articleList.length > 0">
			<div 
				class="article" 
				v-for="article in articleList" 
				:key="article.id"
				@click="goArticleDetail(article.path)"
			>
				<div class="article-info">
					<p>{{article.title}}</p>
					<span>
						<img src="/src/images/index/article-see.png" alt="">
						{{article.scanCount}}
					</span>
				</div>
				<div class="article-img">
					<img :src="'/uploads/article' + article.picture" alt="">
				</div>
			</div>
		</div>
		<div v-else class="nomsg">
			<img src="/src/images/product/nomsg-icon.png" alt="">
			<p>没有文章</p>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				start: 1,
				end: 10,
				articleList: []
			}
		},
		created() {
			this.getArticle()
		},
		methods: {
			getArticle() {

				this.$http.get('/s/appArticle/favourite', {
					params: {
						start: this.start,
						end: this.end
					}
				}).then(response => {
					let resp = response.data

					if(resp.success) {
						this.articleList = this.articleList.concat(resp.data)
						console.log(this.articleList)
					}
				}).catch(error => {
					console.log(error)
				})
			},
			goArticleDetail(href) {
				location.href = 'uploads/article/' + href
			}
		}
	}
</script>

<style lang="scss" scoped>
	.article-wrap {
		height: auto;
		margin-top: .2rem;
		background-color: #fff;
		.article-title {
			height: .83rem;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0 .2rem;
			font-size: 24px;
			border-bottom: 4px solid #ff950c;
			span {
				display: flex;
				align-items: center;
			}
			i {
				display: inline-block;
				margin-right: .2rem;
				width: .44rem;
				height: .44rem;
				background: url('/src/images/index/article-title-icon.png') no-repeat center center;
				background-size: cover;
			}
			button {
				font-size: 24px;
				color: #ff950c;
			}
		}
		.article {
			height: 1.9rem;
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			padding: .2rem;
			&:not(:last-child) {
				border-bottom: 1px solid #e6e6e6;
			}
			> div {
				height: 100%;
				&.article-info {
					flex-grow: 1;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					align-items: flex-start;
					span {
						display: flex;
						align-items: center;
						img {
							width: .44rem;
							height: .44rem;
							margin-right: .2rem;
						}
					}
				}
				&.article-img {
					width: 2.1rem;
					flex-shrink: 0;
					img {
						width: 100%;
						height: 100%;
					}
				}
			}
		}
		.nomsg {
			font-size: 0;
			img {
				display: block;
				width: 3.3rem;
				height: 3.28rem;
				margin: auto;
			}
			p {
				color: rgb(160, 160, 160);
				font-size: 28px;
				text-align: center;
				margin-top: .4rem;
			}
		}
	}
</style>

