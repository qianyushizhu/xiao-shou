<template>
	<view>
		<view class="mine_top">
			<view class="del">
				删除销售
			</view>
					<view class="text">
						销售
					</view>
					<image src="../../../static/tc_icon_touxiang@2x.png" class="image_yuan" style="width: 62px;height: 62px;margin-bottom: 17px;" mode=""></image>
					<view class="" style="font-size: 15px;
						font-family: PingFang-SC-Regular, PingFang-SC;
						font-weight: 400;
						color: #FFFFFF;
						margin-bottom: 10px;
						line-height: 21px;">
						张三
					</view>
					<view class="chakan" @click="openCard">
						查看名片
					</view>
				</view>
				
				<view class="" style="height: 52px;background: #FFFFFF;padding: 15px 15px 0 15px;">
					<view class="" style="height: 35px;background: #F5F5F5;border-radius: 16px;position: relative;">
							<input style="height: 35px;background: #F5F5F5;border-radius: 16px;position: absolute;padding-left: 42px;caret-color:rgba(0,0,0,0.45);font-size: 13px;width: 70%;" placeholder="请输入产品名称/系列/颜色/材质/规格" type="text">
								<image src="../../../static/lj_icon_sousuo@2x.png" style="width: 16px;height: 16px;position: absolute;
								top: 50%;
								left: 18px;
								transform: translateY(-50%);
								" mode=""></image>
								<view class="" style="width: 60px;
								height: 100%;
								position: absolute;
								color: #FFFFFF;
								font-size: 12px;
								font-family: PingFang-SC-Medium, PingFang-SC;
								font-weight: 500;
								display: flex;justify-content: center;align-items: center;
								right: 0;
										background: #007AFC;
										border-radius: 14px;">
									搜索
								</view>
							</input>
					</view>
					
				</view>
				
				<dSelect></dSelect>
	</view>
</template>

<script>
	import {dSelect} from '../../../commpents/DSelect.vue'
	export default {
		components:{
			dSelect
		},
		data() {
			return {
				currentIndex:1
			};
		},
		methods: {
			
			select(index) {
				this.currentIndex = index
			},
			openCard() {
				uni.navigateTo({
					url:'../card/card'
				})
			},
			gotocategory() {
				uni.navigateTo({
					url:'../category/category'
				})
			}
			
		},
	}
</script>

<style lang="scss">
	
	.del{
		position: fixed;
		bottom: 42px;
		width: 315px;
		height: 42px;
		background: #007AFC;
		border-radius: 21px;
		color: #FFFFFF;
		text-align: center;
		font-size: 14px;
		font-family: PingFang-SC-Regular, PingFang-SC;
		font-weight: 400;
		color: #FFFFFF;
		line-height: 42px;
	}
	.chakan{
		width: 78px;
		height: 32px;
		background: #FFFFFF;
		border-radius: 16px;
		font-size: 12px;
		font-family: PingFang-SC-Regular, PingFang-SC;
		font-weight: 400;
		color: #007AFC;
		line-height: 32px;
		text-align: center;
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
	height: 262px;
	background: linear-gradient(180deg, #007AFC 0%, #588AFB 54%, #00ABFE 100%);
	padding-top: 110rpx;
	padding-bottom: 20rpx;
	display: flex;
	flex-direction: column;
	align-items: center;
}
</style>
