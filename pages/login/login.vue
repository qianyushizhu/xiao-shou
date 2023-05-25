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
										:seconds="seconds"
									></u-code>
									<u-button
										@tap="getCode"
										:text="tips"
										size="mini"
										color='#1275F8'
									></u-button>
								</template>
				</u-input>
		</view>
		<view class=""@click="login" style="width: 100%;display: flex;justify-content: center;">
			<view class="center" 
			
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
		
		
	<div class="login_bottom">
	<u-checkbox-group v-model="checked">
		<u-checkbox  activeColor="#1275F8" ></u-checkbox>
	</u-checkbox-group>
		注册/登录表示同意
		<span style="color: #1275F8;" @click="gotoText('https://fyfile.wave100.cn/policy/%E9%9A%90%E7%A7%81%E6%94%BF%E7%AD%96.docx')">《隐私政策》</span><span>与</span><span style="color: #1275F8;" @click="gotoText('https://fyfile.wave100.cn/policy/%E7%94%A8%E6%88%B7%E5%8D%8F%E8%AE%AE.docx')">《用户协议》</span>
	</div>
		
	</view>
</template>

<script>
	import {phoneCode,codeLogin,getUserInfo } from '@/common/request.js'
	export default {
		data() {
			return {
				phone:"",
				code:"",
				tips:'获取验证码',
				seconds:60,
				checked:false
			}
		},
		onLoad() {
		},
		methods: {
			gotoText(a){
				uni.downloadFile({
				     url: a,      //要预览的PDF的地址
				     success: function (res) {
				       if (res.statusCode === 200) {   //成功
				         var Path = res.tempFilePath //返回的文件临时地址，用于后面打开本地预览所用
				         uni.openDocument({
				           filePath: Path, //要打开的文件路径
				           success: function (res) {
				             console.log('打开PDF成功');
				           }
				         })
				       }
				     },
				     fail: function (res) {
				       console.log(res); 
				     },
									})
			},
			login(){
				if(!this.checked){
					uni.$u.toast('请先勾选用户协议与政策');
					return
				}
				codeLogin({
					 "account": this.phone,
					  "code": this.code
				}).then(res=>{
					res.code == 0
					 ? (()=>{
					uni.setStorageSync('token',res.data.token)
					uni.setStorageSync('userId',JSON.parse(this.Base64.decode(uni.getStorageSync('token').split('.')[1])).userId)
						getUserInfo(uni.getStorageSync('userId')).then(res=>{
							res.code == 0
							 ? (()=>{
								 res.data.headLogo = this.$img + res.data.headLogo
								uni.setStorageSync('userInfo',res.data)
								this.info = res.data
								let pages = getCurrentPages(); // 当前页面
								let beforePage = pages[pages.length - 2];
								console.log(beforePage)
								uni.showToast({
									title: '登录成功',
									mask: true,
									duration: 2000,
									success: () => {
										uni.navigateBack({
											delta:1,
											success: () => {
												beforePage.onLoad(); // 执行前一个页面的onLoad方法
											}
										})
									}
								});
							 })()
							 :  uni.$u.toast(res.msg);
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

.login_bottom {
	display: flex;
	width: 100%;
	position: fixed;
	bottom: 100rpx;
	left: 50%;
	justify-content: center;
	transform: translateX(-50%);
	font-size: 0.86rem;
	font-weight: 400;
	color: #a6a6a6;
}
</style>
