<template>
	<view>
		<view class="idcard" @click="dianji">
			<view class="idcard_top" style="">
				<view class="" style="display: flex;justify-content: center;">
					<image :src="info.headLogo" style="
					width: 64px;
					margin-top: 16px;
					margin-bottom: 6px;
					border-radius: 50%;
					height: 64px;
					" mode=""></image>
				</view>
				<view class="" style="margin-left: 26px;
				font-size: 24px;
				font-weight: 600;
				margin-bottom: 15px;
				color: rgba(0,0,0,0.85);">
					{{info.username}}
				</view>
				<view class="" style="margin-left: 15px;
				font-size: 12px;
				font-weight: 400;
				color: rgba(0,0,0,0.85);
				">
					<view class="" style="display: flex;align-items: center;;margin-bottom: 10px;">
						<image src="/static/lj_icon_dianhua@2x (1).png" style="margin-right: 5px;width: 15px;height: 15px;" mode=""></image>
						<view class="">
							{{info.tel}}
						</view>
					</view>
					<view class="" style="display: flex;align-items: center;">
						<image src="/static/lj_icon_youxiang@2x.png" style="margin-right: 5px;width: 15px;height: 15px;" mode=""></image>
						<view class="">
							{{info.email}}
						</view>
					</view>
				</view>
			</view>

			<view class="idcard_bottom">
				<view class="idcard_bottom_left">感谢您的联系分享收藏</view>
				<view class="idcard_bottom_right">
					<image  src="../static/lj_icon_dianhua@2x.png" @click="callPHone"></image>
					<button class="shareBtn" open-type="share" @click="sendCard"><image src="../static/lj_icon_fenxiang@2x.png"></image></button>

					<!-- <image v-if="!isMine" style="margin-right: 16rpx;" :src="!status ? '../static/show/shoucangG.png' : '../static/show/shoucangL.png'" @click="collectStatus"></image>
					<image v-else style="margin-right: 16rpx;" src="../static/new/lj_icon_dianhua2@2x.png" @click="update"></image> -->
				</view>
			</view>
		</view>
	</view>
</template>
<script>
export default {
	props: {
		info:{}
	},
	data() {
		return {
			share:{
				title:'',
			     path:'',
			},
		};
	},
	

	mounted() {
		
	},
	onLoad() {
		
	},
	methods: {
		dianji(id){
			this.share.path = '/pages/my/shareCard/shareCard?shareId=' + this.cardId
			this.share.title = this.info.username+'的名片'
			console.log(this.share)
		},
		sendCard() {
			this.$emit('shareCard', this.share);
		},
		collectStatus() {
			this.$emit('collect', 'woshisb');
		},
		update() {
			this.$emit('update');
		},
		callPHone() {
			uni.makePhoneCall({
				phoneNumber: this.info.tel,
				success: res => {
					console.log('调用成功!');
				},
				// 失败回调
				fail: res => {
					console.log('调用失败!');
				}
			});
		}
	}
};
</script>
<style lang="less" scoped>
.shareBtn {
	padding: 0;
	border: none;
	display: flex;
	background-color: transparent;
	flex-direction: column;
	justify-content: space-between;
	font-size: 20rpx;
	align-items: center;
	font-family: PingFang-SC-Regular, PingFang-SC;
	font-weight: 400;
	color: rgba(0, 0, 0, 0.85);
}

.shareBtn::after {
	padding: 0;
	height: 0;
	width: 0;
	border: 0;
}
.idcard {
	overflow: hidden;
	margin-top: 24rpx;
	height: 500rpx;
	border-radius: 16rpx;
	background: #ffffff;
	box-shadow: 0px 4rpx 8rpx 2rpx rgba(0, 0, 0, 0.05);
	box-sizing: border-box;

	.idcard_top {
		border-top-left-radius: 16rpx;
		border-top-right-radius: 16rpx;
		height: 80%;
		background: #ffffff;
		box-shadow: 0px 4rpx 8rpx 0px rgba(0, 0, 0, 0.07);
		// padding: 30rpx 30rpx 8rpx 30rpx;
		border-bottom-left-radius: 2px;
		border-bottom-right-radius: 2px;
		position: relative;
		box-sizing: border-box;
		    background-image: url('../static/lj_icon_beijing@2x.png');
		    /* 背景图垂直、水平均居中 */
		    // background-position: center center;
		    /* 背景图不平铺 */
		    // background-repeat: no-repeat;
		    /* 当内容高度大于图片高度时，背景图像的位置相对于viewport固定 */
		    // background-attachment: fixed;
		    /* 让背景图基于容器大小伸缩 */
		    background-size: cover;
		    /* 设置背景颜色，背景图加载过程中会显示背景色 */
		    // background-color: #464646;
	
	}

	.idcard_bottom {
		height: 20%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 30rpx;
		.idcard_bottom_left {
			font-size: 24rpx;
			font-family: PingFang-SC-Regular, PingFang-SC;
			font-weight: 400;
			color: #a6a6a6;
			line-height: 34px;
		}
		.idcard_bottom_right {
			display: flex;
			image {
				width: 56rpx;
				height: 56rpx;
				margin-left: 32rpx;
			}
		}
	}
}
</style>
