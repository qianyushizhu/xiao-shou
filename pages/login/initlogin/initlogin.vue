<template>
	<view style="display: flex;flex-direction: column;align-items: center;">
		<image src="../../../static/xxx.png" style="width: 750rpx;height: 750rpx;margin-top: 150rpx;margin-bottom: 80rpx;" mode=""></image>
		<view class="" style="margin-bottom: 100rpx;font-size: 36rpx;
font-family: PingFangTC-Semibold, PingFangTC;
font-weight: 600;
color: #678AFE;">
			属于每一位销售者自己的管理工具
		</view>
		<view class="center" @click="tologin" style="
		width: 690rpx;
		height: 90rpx;
		font-size: 30rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #FFFFFF;
		line-height: 42rpx;
		background: #678AFE;
		border-radius: 8rpx;">
			登陆/注册
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
	export default {
		data() {
			return {
				checked:false
				
			};
		},
		methods:{
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
			tologin(){
				if(!this.checked){
					 uni.$u.toast('请先勾选用户协议与政策');
					 return
				}
				uni.navigateTo({
					url:'/pages/login/wxlogin/wxlogin'
				})
			}
		}
	}
</script>

<style lang="less">
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
