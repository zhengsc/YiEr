<template>
	<div class="detail">
		<div class="context">
			<div class="product-title">
				<img :src="'/uploads/img/' + detail.icon + '_s.png'" alt="">
				<div class="product-info">
					<p>{{detail.name}}</p>
					<p class="info-desc">{{detail.description}}</p>
					<p class="info-tag">
						<span v-for="tag in getTags" :key="tag">{{tag}}</span>
					</p>
				</div>
			</div>
			<div class="product-server">
				<div class="title" @click="showServer = !showServer">
					<span>
						<i></i>
						服务介绍
					</span>
					<i :class="['icon', showServer ? 'show' : '']"></i>
				</div>
				<!-- <transition name="slide-down"> -->
					<ul class="content" v-show="showServer">
						<li>
							<i></i>
							<p>
								<span>重疾绿色通道</span>
								<span>10类疾病的门诊、住院、手术快速预约通道</span>
							</p>
						</li>
						<li>
							<i></i>
							<p>
								<span>电话医生</span>
								<span>专业医生7x12小时在线为您服务</span>
							</p>
						</li>
						<li>
							<i></i>
							<p>
								<span>健康资讯</span>
								<span>根据儿童不同的成长阶段，提供专业定制化的资讯</span>
							</p>
						</li>
						<li>
							<i></i>
							<p>
								<span>疫苗提醒</span>
								<span>儿童疫苗接种的智能提醒、相关知识及注意事项</span>
							</p>
						</li>
					</ul>
				<!-- </transition> -->
			</div>
			<div class="product-order">
				<div class="title" @click="showOrder = !showOrder">
					<span>
						<i></i>
						订购须知
					</span>
					<i :class="['icon', showOrder ? 'show' : '']"></i>
				</div>
				<!-- <transition name="slide-down" mode="out-in"> -->
					<ul class="content" v-if="showOrder">
						<li>
							1.适用于出生28天-14周岁儿童；
						</li>
						<li>
							2.本产品不包含医院内诊疗费用；
						</li>
						<li>
							3.重疾就医快速预约服务在订购60天后可开始申请；
						</li>
						<li>
							4.服务热线<a href="tel:4008175566">4008175566</a>
						</li>
					</ul>
				<!-- </transition> -->
			</div>
		</div>
		<div class="btns">
			<a href="javascript:;">
				<img src="/src/images/product/btns-chat-icon.png" alt="">
				我要咨询
			</a>
			<a href="javascript:;" @click="order">
				{{(detail.price / 100).toFixed(2)}}
				元 / 
				{{productUnit}}
				立即订购
			</a>
		</div>
	</div>
</template>

<script>
	import Api from '../../assest/Api.js'
	export default {
		data() {
			return {
				detail: {},
				showOrder: true,
				showServer: true
			}
		},
		computed: {
			getTags() {
				return this.detail.tag ? this.detail.tag.split('，') : []
			},
			productUnit() {
				let count = this.detail.validTimeCount
				let unit = this.detail.validTimeUnit

				switch(unit) {
					case 0:
						return (count + '天')
						break;
					case 1:
						if(count === 6) {
							return '半年'
						} else {
							return (count + '月')
						}
						break;
					case 2:
						return (count + '年')
						break;
				}
			}
		},
		methods: {
			order() {
				this.$store.commit('setProductPrice', this.detail.price)
				this.$router.push('/order')
			}
		},
		activated() {
			this.$http.post(Api.productDetail, this.Qs.stringify({
				productId: this.$route.params.id
			})).then(response => {
				let resp = response.data
				
				if(resp.success) {
					this.detail = resp.data
				}
			}).catch(error => {
				console.log(error)
			})
		}
	}
</script>

<style lang="scss" scoped>
	.detail {
		width: 100%;
		height: 100%;
		background: #efefef;
		.context {
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 1rem;
			overflow: auto;
			-webkit-overflow-scrolling: touch;
			> div {
				background-color: #fff;
			}
		}
		.product-title {
			padding: .4rem .2rem .2rem;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			border-bottom: 1px solid #e1e1e1;
			img {
				width: 1.2rem;
				height: 1.4rem;
				margin-right: .2rem;
			}
			.product-info {
				display: flex;
				flex-direction: column;
				justify-content: flex-start;
				align-items: flex-start;
				font-size: 24px;
				.info-desc {
					margin-top: .18rem;
					color: rgb(102, 102, 102);
				}
				.info-tag {
					margin-top: .1rem;
					span {
						border: 1px solid #f9aa2b;
						padding: 0 .08rem;
						line-height: 1;
						color: #f9aa2b;
						margin-right: .2rem;
						border-radius: 4px;
					}
				}
			}
		}
		.product-server,
		.product-order {
			height: auto;
			margin-top: .2rem;
			overflow: hidden;
			.title {
				height: .8rem;
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 0 .2rem;
				border-bottom: 1px solid #e1e1e1;
				span {
					display: flex;
					align-items: center;
					font-size: 24px;
					i {
						display: block;
						width: .4rem;
						height: .4rem;
						margin-right: .2rem;
						background: url('/src/images/product/title-icon.png') no-repeat center center;
						background-size: .4rem;
					}
				}
				.icon {
					display: block;
					width: .4rem;
					height: .4rem;
					background: url('/src/images/product/title-icon-arrow.png') no-repeat center center;
					background-size: .4rem;
					transition: transform .2s ease;
					transform: rotate(90deg);
					&.show {
						transform: rotate(-90deg)
					}
				}
			}
			.content {
				li {
					height: 1rem;
					display: flex;
					justify-content: center;
					align-items: center;
					&:nth-child(1) {
						i {
							background-position: -3.24rem 0;
						}
						p {
							color: rgb(106,191,196);
							background-color: rgb(193,237,248);
						}
					}
					&:nth-child(2) {
						i {
							background-position: -2.16rem 0;
						}
						p {
							color: rgb(235,180,29);
							background-color: rgb(253,239,202);
						}
					}
					&:nth-child(3) {
						i {
							background-position: -4.32rem 0;
						}
						p {
							color: rgb(165,192,100);
							background-color: rgb(232,248,193);
						}
					}
					&:nth-child(4) {
						i {
							background-position: -1.08rem 0;
						}
						p {
							color: rgb(253,104,14);
							background-color: rgb(252,228,213);
						}
					}
					i {
						display: block;
						width: 1.08rem;
						height: 1rem;
						background-image: url('/src/images/product/server-icons.png');
						background-repeat: no-repeat;
						background-size: 5.4rem 1rem;
					}
					p {
						height: 100%;
						flex-grow: 1;
						display: flex;
						flex-direction: column;
						justify-content: space-around;
						align-items: flex-start;
						font-size: 24px;
						padding-left: .2rem;
						span:last-child {
							font-size: 20px;
						}
					}
				}
			}
		}
		.product-order {
			.content {
				padding: .28rem;
				li {
					height: auto;
					justify-content: flex-start;
					line-height: 1.5;
					a {
						text-decoration: underline;
						color: #f9aa2b;
						margin-left: .1rem;
					}
				}
			}
		}
		.btns {
			position: fixed;
			bottom: 0;
			left: 0;
			right: 0;
			height: 1rem;
			display: flex;
			justify-content: center;
			align-items: center;
			a {
				height: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 24px;
				img {
					margin-right: .2rem;
					display: block;
					width: .4rem;
					height: .4rem;
				}
				&:first-child {
					width: 2.9rem;
					color: #1e1e1e;
					background: #fff;
				}
				&:last-child {
					width: 4.6rem;
					background: #f9aa2b;
					color: #fff;
				}
			}
		}
	}
</style>

