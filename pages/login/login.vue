<template>
	<view style="display: flex;flex-direction: column;padding: 25px 20px;">
		<view class="" style="
		font-size: 26px;
		text-align: center;
		font-weight: 500;
		margin-bottom: 80px;
		color: #000000;">
			欢迎登录
		</view>
		<view class="" style="margin-bottom: 100px;">
			<u-input
			    placeholder="请输入手机号码"
			    border="bottom"
				v-model="phone"
			    clearable
			  ></u-input>
			  <u-input
			      placeholder="请输入短信验证码"
			      border="bottom"
				  v-model="code"
			      clearable
			    >
				<template slot="suffix">
									<u-code
										ref="uCode"
										@change="codeChange"
										seconds="20"
										changeText="60秒重新获取"
									></u-code>
									<u-button
										@tap="getCode"
										:text="tips"
										type="success"
										size="mini"
									></u-button>
								</template>
				</u-input>
		</view>
		<view class="" style="width: 100%;display: flex;justify-content: center;">
			<view class="center" 
			@click="login"
			style="
			width: 304px;
			height: 48px;
			font-size: 15px;
			font-weight: 500;
			color: #FFFFFF;
			background: #1275F8;
			border-radius: 24px;
			">
				登录
			</view>
		</view>
		
	</view>
</template>

<script>
	import {phoneCode,codeLogin} from '@/common/request.js'
	export default {
		data() {
			return {
				phone:"15178425211",
				code:"123456",
				tips:'获取验证码'
			}
		},
		onLoad() {
			
		},
		methods: {
			login(){
				codeLogin({
					 "account": this.phone,
					  "code": this.code
				}).then(res=>{
					res.code == 0
					 ? (()=>{
					uni.setStorageSync('token',res.data.token)
					uni.setStorageSync('userId',JSON.parse(this.Base64.decode(uni.getStorageSync('token').split('.')[1])).userId)
					uni.navigateBack({
						delta:1
					})
					 })()
					 :  uni.$u.toast(res.msg);
				})
			},
			 codeChange(text) {
			        this.tips = text;
					
			      },
			      getCode() {
			        if (this.$refs.uCode.canGetCode) {
			          // 模拟向后端请求验证码
			          uni.showLoading({
			            title: '正在获取验证码'
			          })
					  phoneCode({
						  phone:this.phone
					  }).then(res=>{
						  res.code == 0 ? (()=>{
							  uni.hideLoading();
							  // 这里此提示会被this.start()方法中的提示覆盖
							  uni.$u.toast('验证码已发送');
							  // 通知验证码组件内部开始倒计时
							  this.$refs.uCode.start();
						  })() : uni.$u.toast(res.msg);
						  
					  })
			           
			        } else {
			          uni.$u.toast('倒计时结束后再发送');
			        }
			      },
		}
	}
</script>

<style lang="scss" scoped>
/deep/ .u-input {
	padding: 25px 0 !important;
}
</style>
