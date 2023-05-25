<template>
	<view style="display: flex;flex-direction: column;align-items: center;">
		<image src="../../../static/xxx.png" style="width: 750rpx;height: 750rpx;margin-top: 150rpx;margin-bottom: 80rpx;" mode=""></image>
		<view class="" style="margin-bottom: 100rpx;font-size: 36rpx;
font-family: PingFangTC-Semibold, PingFangTC;
font-weight: 600;
color: #678AFE;">
			属于每一位销售者自己的管理工具
		</view>
		<button class="login_btn" @click="loginBack" v-show="showLoginBack">微信登录</button>
		<button class="login_btn" open-type="getPhoneNumber" v-show="showRegister"  @getphonenumber="onGetPhoneNumber">微信登录</button>
		<view class="center" @click="tophonelogin" style="
		width: 690rpx;
		height: 90rpx;
		font-size: 30rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #FFFFFF;
		line-height: 42rpx;
		background: #678AFE;
		border-radius: 8rpx;">
			账号登录
		</view>
		<!-- 登录的弹框 -->
		<u-popup :show="show" mode="center" :round="15" >
			<view class="popup">
				<view class="popup_top">请授权登录</view>
				<view class="popup_center">请同意微信官方授权（获取你的昵称、头像、地区及性别）</view>
				<!-- <view class="popup_btn">同意</view> -->
				<button class="login_btn1" open-type="getUserProfile" @click="getUserProfile">同意</button>
			</view>
		</u-popup>
		
	</view>
</template>

<script>
	import {register1,login,getSessionKey,decodePhone,getUserMsg,toBeCompanySale,
tobeSecondSale} from '@/common/request.js'
	export default {
		data() {
			return {
				show:false,
				showLoginBack: false,
				showRegister: false,
				encryptedData: '',
				iv: '',
				userInfo: '',
				sessionKey: '',
				openId: ''
			};
		},
		onLoad() {
			this.judgeIslogin()
		},
		methods:{
			judgeIslogin() {
				uni.login({
					success: res => {
						login({
							code: res.code,
							productNo:'100'
						}).then(res2 => {
							if (res2.code == 0) {
								console.log('已注册');
								this.showRegister = false;
								this.showLoginBack = true;
							} else if (res2.code == 5) {
								console.log('未注册');
								this.showRegister = true;
								this.showLoginBack = false;
							}
						})
					}
				})
			},
			loginBack() {
				uni.login({
					success: res => {
						login({
							code: res.code,
							productNo:'100',
						}).then(res => {
							if (res.code == 0) {
								uni.setStorageSync('token', res.data.token);
								console.log(JSON.parse(this.Base64.decode(uni.getStorageSync('token').split('.')[1])).userId)
								uni.setStorageSync('userId',JSON.parse(this.Base64.decode(uni.getStorageSync('token').split('.')[1])).userId)
								getUserMsg(uni.getStorageSync('userId')).then(res=>{
									console.log(res)
									if(res.data){
									res.data.headLogo = this.$img+res.data.headLogo
									uni.setStorageSync('userInfo', res.data);
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
									}
									
								}
								)
								
								
							} else {
								uni.setStorageSync('isLogin', false);
								uni.showToast({
									icon: 'none',
									title: res.msg,
									duration: 2000
								});
							}
						});
					}
				});
				
			},
			tophonelogin(){
				uni.navigateTo({
					url:'/pages/login/login'
				})
			},
			// 用户同意授权获取头像的那个信息
			getUserProfile() {
				this.show = false;
				uni.getUserProfile({
					desc: '登录',
					success: res => {
						console.log(res);
						this.userInfo = res.userInfo;
						uni.showLoading({
							mask: true,
							title: '正在登录...'
						});
						this.register1(this.userInfo.nickName, this.userInfo.gender, this.userInfo.avatarUrl,this.userInfo.city,this.userInfo.province);
					},
					fail: err => {
						uni.showToast({
							icon: 'none',
							title: '未绑定相关信息',
							duration: 2000
						});
						console.log(err);
					}
				});
			},
			// 注册用户
			register1(nickName, gender, avatarUrl,city,province) {
				uni.login({
					success: res => {
						register1({
							code: res.code,
							nickName: nickName,
							gender: gender,
							avatarUrl: avatarUrl,
							phone: uni.getStorageSync('phone'),
							productNo:'100',
							province:province,
							city:city,
							companyId:uni.getStorageSync('needCompanyId') ? uni.getStorageSync('needCompanyId') : null,
							saleUserId:uni.getStorageSync('needSaleUserId') ? uni.getStorageSync('needSaleUserId') : null
						}).then(res2 => {
							if (res2.code == 0) {
								uni.showToast({
									title: '注册成功',
									mask: true,
									duration: 2000,
									success: () => {
										uni.login({
											success: res => {
												login({
													code: res.code,
													productNo:'100'
												}).then(res => {
													if (res.code == 0) {
													uni.setStorageSync('token', res.data.token);
													uni.setStorageSync('userId',JSON.parse(this.Base64.decode(uni.getStorageSync('token').split('.')[1])).userId)
													getUserMsg(uni.getStorageSync('userId')).then(res=>{
													console.log(res)
															if(res.data){
															res.data.headLogo = this.$img+res.data.headLogo
															uni.setStorageSync('userInfo', res.data);
															if(uni.getStorageSync('needCompanyId')){
																toBeCompanySale({
																	companyId:uni.getStorageSync('needCompanyId'),
																	userId:uni.getStorageSync('userId'),
																}).then(res=>{
																	res.code == 0
																	 ? (()=>{
																			let pages = getCurrentPages(); // 当前页面
																			let beforePage = pages[pages.length - 2];
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
															}else if(uni.getStorageSync('needSaleUserId')){
																tobeSecondSale({
																	saleUserId:uni.getStorageSync('needCompanyId'),
																	userId:uni.getStorageSync('userId'),
																}).then(res=>{
																	res.code == 0
																	 ? (()=>{
																			let pages = getCurrentPages(); // 当前页面
																			let beforePage = pages[pages.length - 2];
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
															}else{
																let pages = getCurrentPages(); // 当前页面
																let beforePage = pages[pages.length - 2];
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
															}
																
															}
															
														}
														)
														
														
													} else {
														uni.setStorageSync('isLogin', false);
														uni.showToast({
															icon: 'none',
															title: res.msg,
															duration: 2000
														});
													}
												});
											}
										});
									}
								});
							} else {
								uni.showToast({
									icon: 'none',
									title: res2.msg,
									duration: 2000
								});
							}
						});
					}
				});
			},
			onGetPhoneNumber(e) {
				if (e.detail.encryptedData && e.detail.iv) {
					//允许授权
					this.encryptedData = e.detail.encryptedData;
					this.iv = e.detail.iv;
					uni.login({
						success: res => {
							getSessionKey({
								code: res.code,
								productNo:'100',
							}).then(res => {
								this.sessionKey = res.data.sessionKey;
								decodePhone({
									encryptedData: this.encryptedData,
									iv: this.iv,
									productNo:'101',
									sessionKey: this.sessionKey
								}).then(res => {
									uni.setStorageSync('phone', res.data.phone);
									this.show = true;
								});
							});
						}
					});
				} else {
					//用户决绝授权
					//拒绝授权后弹出一些提示
					uni.showToast({
						icon: 'none',
						title: '请绑定手机号',
						duration: 2000
					});
				}
			},
		}
	}
</script>

<style lang="less">
.login_btn {
		width: 690rpx;
		height: 90rpx;
		font-size: 30rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #FFFFFF;
		display: flex;justify-content: center;
		align-items: center;
		margin-bottom: 50rpx;
		line-height: 42rpx;
		background: #678AFE;
		border-radius: 8rpx;
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
.popup_top {
	text-align: center;
	padding-top: 44rpx;
	font-size: 36rpx;
	font-family: PingFang-SC-Medium, PingFang-SC;
	font-weight: 500;
	color: #232323;
	line-height: 50rpx;
}
.login_btn1 {
	width: 80%;
	margin-top: 80rpx;
	background: #4a90e2;
	border-radius: 46rpx;
	font-size: 28rpx;
	font-family: PingFang-SC-Regular, PingFang-SC;
	font-weight: 400;
	color: #ffffff;
}
.popup_center {
	padding: 60rpx 70rpx 50rpx 70rpx;
	font-size: 28rpx;
	font-family: PingFang-SC-Regular, PingFang-SC;
	font-weight: 400;
	color: #000000;
	line-height: 40rpx;
}

.popup_btn {
	width: 80%;
	height: 72rpx;
	background: #4a90e2;
	border-radius: 36rpx;
	font-size: 28rpx;
	font-family: PingFang-SC-Medium, PingFang-SC;
	font-weight: 500;
	color: #ffffff;
	line-height: 72rpx;
	text-align: center;
	margin: 0 auto;
}

.popup {
	padding-bottom: 50rpx;
}
</style>
