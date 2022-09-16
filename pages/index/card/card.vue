<template>
	<view class="card">
		<view class="" style="margin-top: 110rpx;margin-bottom: 180rpx;">
			添加销售
		</view>
		<view class="card_image_container">
			<view class="card_image_top">
				<image src="../../../static/tc_icon_touxiang@2x.png" mode=""></image>
				<view class="">
					我们去哪里啊
				</view>
			</view>
			<image class="qrcode" src="../../../static/logo.png" mode=""></image>
			<view class="tip">
				请让销售扫一扫添加
			</view>
			<image src="../../../static/tc_icon_beijing@2x.png" mode=""></image>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="less" scoped>
.card{
	background: linear-gradient(180deg, #007AFC 0%, #588AFB 54%, #00ABFE 100%);
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	box-sizing: border-box;
	font-size: 18px;
	font-family: PingFangSC-Semibold, PingFang SC;
	font-weight: 600;
	color: #FFFFFF;
	line-height: 25px;
	.qrcode{
		position: absolute;
		left: 50%;
		top: 58%;
		transform: translate(-50%,-58%);
		width: 320rpx;
		height: 320rpx;
	}
	.tip{
		position: absolute;
		left: 50%;
		top: 80%;
		transform: translateX(-50%);
		font-size: 14px;
		font-family: PingFang-SC-Regular, PingFang-SC;
		font-weight: 400;
		color: #000000;
		line-height: 20px;
	}
	.card_image_container{
		width: 634rpx;
		height: 842rpx;
		position: relative;
		.card_image_top{
			position: absolute;
			left: 60rpx;
			top: 60rpx;
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
