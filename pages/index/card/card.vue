<template>
	<view class="card" style="position: relative;">
		<view class="" style="margin-top: 120rpx;margin-bottom: 180rpx;display: flex;margin-left: 50rpx;" @click="enter">
			<u-icon name="arrow-left" color="#fff" size="20" @click="back"></u-icon>
		</view>
		<view class="" style="position: absolute;left: 50%;top: 110rpx;transform: translateX(-50%);">
			添加销售
		</view>
		<view class="card_bottom">
			<view class="card_image_container">
				<view class="card_image_top">
					<image :src="headLogo" mode=""></image>
					<view class="">
						{{username}}
					</view>
				</view>
				<yz-qr  :qrPath.sync="qrPath" class="qrcode" :text="text" :size="size" :quality="quality" :colorDark="colorDark" :colorLight="colorLight"></yz-qr>
				<!-- <image class="qrcode" :src="qrPath" mode=""></image> -->
				<view class="tip">
					请让用户扫一扫添加
				</view>
				<image src="../../../static/tc_icon_beijing@2x.png" mode=""></image>
			</view>
		</view>
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				  qrPath: '',
				                    text: 'https://fypicapi.wave100.cn/shop?id='+uni.getStorageSync('userId'),
				                    size: 160,
				                    quality:'H',
				                    colorDark: '#000000',
				                    colorLight: '#ffffff',
									headLogo:'',
									username:'',
			}
		},
		onLoad() {
			this.headLogo =  uni.getStorageSync('userInfo').headLogo
			this.username = uni.getStorageSync('userInfo').username
			
			// +uni.getStorageSync('userId')
		},
		methods: {
			back(){
				uni.navigateBack({
					delta:1
				})
			}
		}
	}
</script>

<style lang="less" scoped>
.card{
	background: linear-gradient(180deg, #007AFC 0%, #588AFB 54%, #00ABFE 100%);
	height: 100vh;
	display: flex;
	flex-direction: column;
	
	box-sizing: border-box;
	font-size: 18px;
	font-family: PingFangSC-Semibold, PingFang SC;
	font-weight: 600;
	color: #FFFFFF;
	line-height: 25px;
	/deep/ .qrcode{
		position: absolute;
		padding: 0 !important;
		left: 50%;
		top: 61%;
		transform: translate(-50%,-58%);
		width: 320rpx;
		height: 320rpx;
	}
	.tip{
		position: absolute;
		left: 50%;
		top: 85%;
		transform: translateX(-50%);
		font-size: 14px;
		font-family: PingFang-SC-Regular, PingFang-SC;
		font-weight: 400;
		color: #000000;
		line-height: 20px;
	}
		
	.card_bottom{
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.card_image_container{
		width: 80%;
		    height: 50vh;
		position: relative;
		.card_image_top{
			position: absolute;
			left: 3.9%;
			top: 3.9%;
			display: flex;
			align-items: center;
			font-size: 15px;
			font-weight: 600;
			color: #000000;
			letter-spacing: 1rpx;
			image{
				width: 130rpx;
				height: 130rpx;
				margin-right: 20rpx;
			}
		}
	}
	image{
		width: 100%;
		height: 100%;
	}
}
</style>
