<template>
	<view class="mine">
		<view class="mine_top">
			<view class="text">
				我的
			</view>
			<image :src="info.headLogo" v-if="info.headLogo" class="image_yuan" style="width: 62px;height: 62px;margin-bottom: 17px;" mode=""></image>
			<image src="/static/tc_icon_touxiang@2x.png" v-else class="image_yuan" style="width: 62px;height: 62px;margin-bottom: 17px;" mode=""></image>
			<view class="" v-if="info.username" style="font-size: 15px;
			font-family: PingFang-SC-Regular, PingFang-SC;
			font-weight: 400;
			color: #FFFFFF;
			line-height: 21px;">
				{{info.username}}
			</view>
			<view class="" v-else @click="login" style="font-size: 15px;
			font-family: PingFang-SC-Regular, PingFang-SC;
			font-weight: 400;
			color: #FFFFFF;
			line-height: 21px;">
				点我登录
			</view>
		</view>
		<view class="mine_bottom">
			<view class="mine_bottom_item" @click="toCompany">
				<view class="">
					上游企业
				</view>
				<u-icon name="arrow-right" color="#A6A6A6" size="15"></u-icon>
			</view>
			<view class="mine_bottom_item" @click="toMineInfo">
				<view class="">
					我的主页
				</view>
				<u-icon name="arrow-right" color="#A6A6A6" size="15"></u-icon>
			</view>
			<view class="mine_bottom_item" @click="toMineCard">
				<view class="">
					个人名片
				</view>
				<u-icon name="arrow-right" color="#A6A6A6" size="15"></u-icon>
			</view>
			<!-- <view class="mine_bottom_item">
				<view class="">
					关于我们
				</view>
				<u-icon name="arrow-right" color="#A6A6A6" size="15"></u-icon>
			</view> -->
			<!-- <view class="mine_bottom_item">
				<view class="">
					联系客服
				</view>
				<u-icon name="arrow-right" color="#A6A6A6" size="15"></u-icon>
			</view> -->
			<view class="mine_bottom_item" @click="tosetting" style="border: none;">
				<view class="">
					设置
				</view>
				<u-icon name="arrow-right" color="#A6A6A6" size="15"></u-icon>
			</view>
		</view>
	</view>
</template>

<script>
	import {getUserInfo} from '@/common/request.js'
	export default {
		data() {
			return {
				info:{},
			};
		},
		onLoad() {
		},
		onShow() {
			this.aaa()
		},
		methods:{
			login(){
				uni.navigateTo({
				 url:'/pages/login/login'
				})
			},
			aaa(){
				if(uni.getStorageSync('userInfo')){
					this.info = uni.getStorageSync('userInfo')
				}
			},
			tosetting(){
				if (!uni.getStorageSync('token')) {
				 uni.showModal({
				   title: "授权登录",
				 			showCancel:false,
				 			confirmColor:'#000',
				   content: "您尚未授权登录,请先授权登录",
				   success: (res) => {
				     if (res.confirm) {
				      uni.navigateTo({
				       url:'/pages/login/login'
				      })
				     }
				   }
				 })
				  return
				}
				uni.navigateTo({
					url:'/pages/mine/setting/setting'
				})
			},
			toMineInfo(){
				if (!uni.getStorageSync('token')) {
				 uni.showModal({
				   title: "授权登录",
				 			showCancel:false,
				 			confirmColor:'#000',
				   content: "您尚未授权登录,请先授权登录",
				   success: (res) => {
				     if (res.confirm) {
				      uni.navigateTo({
				       url:'/pages/index/login/login'
				      })
				     }
				   }
				 })
				  return
				}
				uni.navigateTo({
					url:'/pages/mine/mineInfo/mineInfo'
				})
			},
			toCompany(){
				if (!uni.getStorageSync('token')) {
				 uni.showModal({
				   title: "授权登录",
				 			showCancel:false,
				 			confirmColor:'#000',
				   content: "您尚未授权登录,请先授权登录",
				   success: (res) => {
				     if (res.confirm) {
				      uni.navigateTo({
				       url:'/pages/index/login/login'
				      })
				     }
				   }
				 })
				  return
				}
				uni.navigateTo({
					url:'/pages/mine/company/company'
				})
			},
			toMineCard(){
				if (!uni.getStorageSync('token')) {
				 uni.showModal({
				   title: "授权登录",
				 			showCancel:false,
				 			confirmColor:'#000',
				   content: "您尚未授权登录,请先授权登录",
				   success: (res) => {
				     if (res.confirm) {
				      uni.navigateTo({
				       url:'/pages/index/login/login'
				      })
				     }
				   }
				 })
				  return
				}
				uni.navigateTo({
					url:'/pages/mine/mineCard/mineCard'
				})
			},
			
			
		}
		
	}
</script>

<style lang="scss">
	.mine_bottom{
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		font-size: 15px;
		font-family: PingFang-SC-Regular, PingFang-SC;
		font-weight: 400;
		color: #262626;
		line-height: 21px;
		letter-spacing: 3rpx;
		padding: 0 15px;
	}
	
.mine_bottom_item{
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom:  1px solid #D9D9D9;
	padding: 20px 0;
}
.mine{
	box-sizing: border-box;
}
.text{
	margin-bottom: 25px;
	font-size: 18px;
	font-family: PingFangSC-Semibold, PingFang SC;
	font-weight: 550;
	color: #FFFFFF;
	letter-spacing: 3rpx;
}
.mine_top{
	box-sizing: border-box;
	background: linear-gradient(180deg, #007AFC 0%, #588AFB 54%, #00ABFE 100%);
	padding-top: 110rpx;
	padding-bottom: 24rpx;
	display: flex;
	flex-direction: column;
	align-items: center;
}
</style>
