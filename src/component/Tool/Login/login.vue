<template>
	<div id="login" :class="['login', showLogin ? 'show' : '']">
		<div class="username">
			<p>
				<input v-model="mobile" type="text" placeholder="请输入手机号" />
			</p>
			<p>
				<input v-model="code" type="text" class="code" placeholder="请输入验证码" />
				<button @click="getCode" :class="['btns-code', isWaiting ? 'disabled' : '']">{{btnText}}</button>
			</p>
		</div>
		<div class="btns">
			<button @click="login">登录</button>
			<button @click="close">取消</button>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				mobile: '',
				code: '',
				isWaiting: false,
				btnText: '获取验证码',
				showLogin: false
			}
		},
		methods: {
			getCode() {
				let _this = this

				if(this.isWaiting) return ;
				// if(this.mobile) {
					this.$http.get('/s/login/wx/sendcheckcode?mobile=18310469506')
								.then(function(response) {
									let resp = response.data

									if(resp.success) {
										console.log('验证码发送成功')
										_this.changeBtnText()
									}
								}).catch(function(error) {
									console.log(error)
								})
				// }
			},
			changeBtnText() {
				this.isWaiting = true

				let _this = this
				let count = 60
				_this.btnText = count + 's'
				let timer = setInterval(function() {
					if(count) {
						_this.btnText = --count + 's'
					} else {
						_this.isWaiting = false
						_this.btnText = '获取验证码'
						clearInterval(timer)
					}
				}, 1000)
			},
			login() {
				let _this = this

				this.$http.post('/s/login/YIERWAP/userbinding', this.Qs.stringify({
					mobile: '18310469506',
					checkcode: '123456'
				})).then(function(response) {
					let resp = response.data

					if(resp.success) {
						_this.$store.commit('loginIn')
					}
				}).catch(function(error) {
					console.log(error)
				})
			},
			close() {
				this.$closeLogin()
			}
		}
	}
</script>

<style lang="scss" scoped>
	#login {
		position: fixed;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		background: #fff;
		transform: translateY(20%);
		opacity: 0;
		transition: all .2s ease-out;
		&.show {
			transform: translateY(0);
			opacity: 1;
		}
		> div {
			width: 80%;
			margin: auto;
			&.username {
				margin-top: 2rem;
			}
		}
		p {
			margin: .2rem 0;
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
		}
		input {
			flex-grow: 1;
			width: 1rem;
			height: .8rem;
			padding: 0 .2rem;
			font-size: 26px;
			border-radius: .2rem;
			border: 1px solid #e1e1e1;
			outline: 0;
			background: 0;
			&.code {
				border-top-right-radius: 0;
				border-bottom-right-radius: 0;
			}
		}
		.btns {
			display: flex;
			justify-content: space-around;
			align-items: center;
		}
		button {
			display: block;
			width: 2.4rem;
			height: .8rem;
			font-size: 26px;
			background: #f5aa2b;
			color: #fff;
			text-align: center;
			border-radius: .1rem;
			margin: .4rem auto;
			flex-grow: 0;
			&.btns-code {
				width: 2rem;
				flex-shrink: 0;
				border-top-left-radius: 0;
				border-bottom-left-radius: 0;
				&.disabled {
					background: #e1e1e1;
					
				}
			}
		}
	}
</style>

