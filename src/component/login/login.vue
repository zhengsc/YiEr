<template>
	<div class="login">
		<div class="username">
			<input v-model="mobile" type="text" />
			<input v-model="code" type="code" />
		</div>
		<div class="btns">
			<button @click="getCode">验证码</button>
			<button @click="login">登录</button>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				mobile: '',
				code: ''
			}
		},
		methods: {
			getCode() {
				let _this = this

				// if(this.mobile) {
					this.$http.get('/s/login/wx/sendcheckcode?mobile=18310469506')
								.then(function(response) {
									let resp = response.data

									if(resp.success) {
										console.log('验证码发送成功')
									}
								}).catch(function(error) {
									console.log(error)
								})
				// }
			},
			login() {
				let _this = this

				this.$http.post('/s/login/YIERWAP/userbinding', this.Qs.stringify({
					mobile: '18310469506',
					checkcode: '123456'
				})).then(function(response) {
					let resp = response.data

					if(resp.success) {
						_this.$store.commit('changeLoginStatus')
						_this.$store.commit('setUserInfo', resp.data)
						console.log(_this.$store.state.isLogin)
					}
				}).catch(function(error) {
					console.log(error)
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.login {
		position: fixed;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		background: #fff;
		> div {
			width: 80%;
			margin: auto;
		}
		input {
			width: 100%;
			height: .8rem;
			padding: 0 .2rem;
			margin: .2rem 0;
			font-size: 28px;
		}
		button {
			display: inline-block;
			width: 40%;
			height: 1rem;
			font-size: 28px;
		}
	}
</style>

