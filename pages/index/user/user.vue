<template>
	<view style="box-sizing: border-box;">
		<view class="" style="padding: 15px;">
			<DInput></DInput>
		</view>

		<view class="" style="display: flex;flex-direction: column;background-color: #F2F2F2;padding: 20rpx 30rpx;min-height: 100vh;" v-if="list.length!==0">
			<view class=""
			v-for="(item,index) in list"
			:key="index"
			 style="
			height: 260rpx;
			margin-bottom: 15px;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			background: #FFFFFF;
			padding: 30rpx;
			border-radius: 16rpx;
			">
				<view class="" style="display: flex;align-items: center;justify-content: space-between;">
					<view class="" style="display: flex;align-items: center;">
						<image :src="item.headLogo" style="margin-right: 20rpx;width: 110rpx;height: 110rpx;border-radius: 50%;" mode=""></image>
						<view class="" style="font-size: 14px;
						font-weight: 600;
						color: #000000;">
							{{item.remark ? item.remark : item.username}}
						</view>
					</view>
					<view class="" style="display: flex;align-items: center;" @click="toUpdate(item)">
						
						<view class="" style="
						font-size: 14px;
						font-weight: 400;
						margin-right: 16rpx;
						color: #007AFC;">
							查看更多
						</view>
							<u-icon name="arrow-right" color="#A6A6A6" size="15"></u-icon>
					</view>
				</view>
				
				<view class="" style="display: flex;align-items: center;justify-content: space-between;">
					<view class="" style="display: flex;align-items: center;">
						
						<view class="" style="
						font-size: 14px;
						font-weight: 400;
						color: #000000;
						line-height: 20px;
						margin-right: 30rpx;
						color: #000000;">
							{{item.phone}}
						</view>
						<view class="" 
						@click="copy(item.phone)"
						style="
						font-size: 14px;
						font-weight: 400;
						color: #007AFC;">
							复制
						</view>
					</view>
					<view class="" style="display: flex;align-items: center;">
					<image src="/static/icon_dianhua.png" style="margin-right: 20rpx;width: 72rpx;height: 72rpx;" @click="takePhone(item.phone)" mode=""></image>
					</view>
				</view>
				
			</view>
		</view>
		<view  style="display: flex;justify-content: center;margin-top: 50px;" v-else>
			<image src="@/static/lj_icon_quesheng@2x.png" class="queshen" mode=""></image>
		</view>
	<!-- 	<view
			class=""
			style="width: 315px;
							height: 42px;
							display: flex;
							justify-content: center;align-items: center;
							position: fixed;
							bottom: 130px;
							left: 50%;
							font-size: 14px;
							font-weight: 400;
							color: #FFFFFF;
							transform: translateX(-50%);
							background: #007AFC;
							border-radius: 21px;"
		>
			移动分组
		</view> -->
	</view>
</template>

<script>
import DInput from '../../../commpents/DInput.vue';
import { groupMemberlist } from '@/common/request.js';
export default {
	components: {
		DInput
	},
	data() {
		return {
			list: [],
			groupId: '',
			currentpage: 1
		};
	},
	onLoad(op) {
		this.groupId = op.groupId;
	},
	onShow() {
		this.list = []
		this.groupMemberlist();
	},
	
	
	methods: {
		copy(e){
			uni.setClipboardData({
						data: e,
						success: function(res) {
							uni.getClipboardData({
								success: function(res) {
									uni.showToast({
										title: '已复制'
									});
								}
							});
						}
					});
		},
		takePhone(e){
			uni.makePhoneCall({
				phoneNumber: e, 
				success: (res) => {
				console.log('调用成功!')	
				},
				// 失败回调
				fail: (res) => {
				console.log('调用失败!')
				}	
			});
		},
		toUpdate(item) {
			console.log(item)
			uni.navigateTo({
				url: '/pages/index/updateUser/updateUser?info=' + JSON.stringify(item)
			});
		},

		groupMemberlist() {
			groupMemberlist({
				pageNum: this.currentpage,
				pageSize: 10,
				groupId: this.groupId
			}).then(res => {
				res.code == 0
					? (() => {
							res.data.records.forEach(e => [(e.headLogo = this.$img + e.headLogo)]);
							this.list = this.list.concat(res.data.records);
					  })()
					: uni.$u.toast(res.msg);
			});
		}
	}
};
</script>

<style></style>
