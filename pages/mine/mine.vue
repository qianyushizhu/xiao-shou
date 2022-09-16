<template>
	<view class="mine">
		<view class="mine_top">
			<view class="text">
				我的
			</view>
			<image :src="info.headLogo" class="image_yuan" style="width: 62px;height: 62px;margin-bottom: 17px;" mode=""></image>
			<view class="" style="font-size: 15px;
font-family: PingFang-SC-Regular, PingFang-SC;
font-weight: 400;
color: #FFFFFF;
line-height: 21px;">
				{{info.username}}
			</view>
		</view>
		<view class="mine_bottom">
			<view class="mine_bottom_item">
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
			<view class="mine_bottom_item">
				<view class="">
					个人名片
				</view>
				<u-icon name="arrow-right" color="#A6A6A6" size="15"></u-icon>
			</view>
			<view class="mine_bottom_item">
				<view class="">
					关于我们
				</view>
				<u-icon name="arrow-right" color="#A6A6A6" size="15"></u-icon>
			</view>
			<view class="mine_bottom_item">
				<view class="">
					联系客服
				</view>
				<u-icon name="arrow-right" color="#A6A6A6" size="15"></u-icon>
			</view>
			<view class="mine_bottom_item" style="border: none;">
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
			// this.getUserInfo()
		},
		onShow() {
			if(uni.getStorageSync('userInfo')){
				this.info = uni.getStorageSync('userInfo')
			}
		},
		methods:{
			toMineInfo(){
				uni.navigateTo({
					url:'/pages/mine/mineInfo/mineInfo'
				})
			},
			getUserInfo(){
				getUserInfo(uni.getStorageSync('userId')).then(res=>{
					res.code == 0
					 ? (()=>{
						 res.data.headLogo = this.$img + res.data.headLogo
						uni.setStorageSync('userInfo',res.data)
						this.info = res.data
					 })()
					 :  uni.$u.toast(res.msg);
				})
			}
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
	height: 220px;
	background: linear-gradient(180deg, #007AFC 0%, #588AFB 54%, #00ABFE 100%);
	padding-top: 110rpx;
	padding-bottom: 24rpx;
	display: flex;
	flex-direction: column;
	align-items: center;
}
</style>
