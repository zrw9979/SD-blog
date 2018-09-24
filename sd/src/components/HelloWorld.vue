<template>
	<div class="main-con">
		<div class="login">
			<div class="sign-in-con" v-if="signIn">
				<p class="login-title">SIGN IN FORM</p>
				<input v-model="username" value="username" class="username" type="username" name="username" placeholder="username" />
				<input v-model="password" value="password" class="password" type="password" name="password" placeholder="password" />
				<div class="sign-con">
					<span @click="change" class="change">Already have an account.</span>
					<button @click="reg" class="login-input">sign in</button>
				</div>
			</div>
			<div class="sign-up-con" v-else>
				<p class="login-title">SIGN UP FORM</p>
				<input v-model="username" value="username" class="username" type="username" name="username" placeholder="username" />
				<input v-model="password" value="password" class="password" type="password" name="password" placeholder="password" />
				<div class="sign-con">
					<span @click="change" class="change">I want to sign in.</span>
					<button @click="login" class="login-input">sign up</button>
				</div>
			</div>
			<div class="bottom">个人博客系统</div>
		</div>
	</div>
</template>

<script>
// import http from '@/tools/http.client';
export default {
	name: 'HelloWorld',
	data () {
		return {
			signIn: false,
			username: '',
			password: ''
		}
	},
	methods: {
		gotoHome() {
			console.log('goto home home!!!!!')
			this.$router.push({ name: 'home' })
		},
		change() {
			this.signIn = !this.signIn;
			console.log(this.signIn);
		},
		login() {
			if(!this.username) {
				alert('请输入用户名')
				return
			}
			if(!this.password) {
				alert('请输入密码')
				return
			}
			// http.post('/login', {
			// 	username: this.username,
			// 	password: this.password
			// }).then(res => {
			// 	if(res.code === 200 ) {
			// 		localStorage.setItem("token", res.token);
			// 		this.$router.push('/main');
			// 	} else {
			// 		alert('用户名或密码不正确');
			// 	}
			// })
			this.gotoHome()
		},
		reg() {
			if(!this.username) {
				alert('请输入用户名')
				return
			}
			if(!this.password) {
				alert('请输入密码')
				return
			}
			this.gotoHome()
		}
		// 	http.post('/reg', {
		// 		username: this.username,
		// 		password: this.password
		// 	}).then(res => {
		// 		if(res.code === 200) {
		// 			localStorage.setItem("token", res.token);
		// 			this.$router.push('/main');
		// 		} else {
		// 			alert('用户名被占用');
		// 		}
		// 	})
		// }
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login {
	position: absolute;
	top: 200px;
	left: 50%;
	margin-left: -200px;
	width: 400px;
	height: 280px;
	border: 1px solid #e1e1e1;
	box-shadow: 1px 1px 4px #fff;
	box-sizing: border-box;
	border-radius: 20px;
}

.login-title {
	margin-top: 30px;
	color: #e35748;
	font-size: 20px;
	font-weight: bold;
	text-align: center;
}

input {
	display: block;
	margin: 10px auto;
	padding: 0 1rem;
	width: 75%;
	height: 2rem;
	color: #888;
	outline: 0;
	border: none;
	border-radius: 1rem;
	background-color: #cacaca;
}

.login-input {
	cursor: pointer;
	padding: 0 1rem;
	height: 2rem;
	font-size: 15px;
	line-height: 2rem;
	outline: none;
	color: #fff;
	background-color: #e35748;
	border-radius: 1rem;
	text-align: center;
}

.sign-con {
	width: 85%;
	margin: 1rem auto;
	text-align: right;
}

.change {
	cursor: pointer;
	font-size: 10px;
	color: #e35748;
}

.bottom {
	position: absolute;
	bottom: 0;
	width: 100%;
	height: 60px;
	line-height: 60px;
	padding: 0 2rem;
	text-align: right;
	background-color: #e35748;
	color: #fff;
	border-radius: 0 0 1rem 1rem;
	border: 0;
	box-sizing: border-box;
	box-shadow: 1px 1px 1px #e35748;
}
</style>
