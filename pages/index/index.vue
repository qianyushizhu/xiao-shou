<template>
	<view class="content">
			<view class="" style="height: 380px;background-color: #fff;">
				<view class="" style="height: 235px;position: relative;margin-bottom: 30px;">
					<view class="index_top">
						<view class="index_top_middle">
							<view class="index_title">
								超级图册
							</view>
							
							<image v-if="info" :src="info.headLogo" class="image_yuan" mode=""></image>
							<image v-else src="../../static/tc_icon_touxiang@2x.png" class="image_yuan" mode=""></image>
							<view v-if="info" class="" style="text-align: center;font-size: 14px;font-weight: 550;letter-spacing: 1px;margin-bottom: 15px;">
								{{info.username}}
							</view>
							<view v-else @click="toLogin" class="" style="text-align: center;font-size: 14px;font-weight: 550;letter-spacing: 1px;margin-bottom: 15px;">
								点我登录
							</view>
						</view>
						
					</view>
					<view class="" style="width: 39px;height: 39px;border-radius: 50%;position: absolute;left: 50%;transform: translateX(-50%);
					bottom: -10px;background-color: #fff;display: flex;justify-content: center;align-items: center;z-index: 99;">
						<image src="../../static/tc_icon_xiaoshou@2x.png" style="width: 20px;height: 20px;" mode=""></image>
					</view>
				</view>
				
				<view class="index_top_bottom">
					<view class="index_top_item" @click="toProduct">
						<image src="../../static/tc_icon_baojia@2x.png" mode=""></image>
						<view class="">
							产品资料
						</view>
					</view>
					<view class="index_top_item" @click="toQuotation">
						<image src="../../static/tc_icon_chanpin@2x.png" mode=""></image>
						<view class="">
							急速报价
						</view>
					</view>
				</view>
			</view>
		
			
			<view class="mine_bottom">
				<view class="text" style="margin-bottom: 20px;">
					<text>我的新用户</text>
				</view>
				<view class="index_xiaoshou" v-for="(item,index) in newList" :key="index" @click="toUser">
					<view class="index_xiaoshou_item_top" >
						<view class="index_xiaoshou_item_title">
							{{item.name}}
						</view>
						<view class="index_xiaoshou_item_icon">
							<view class="" style="display: flex;justify-content: center;position: relative;">
								<image class="unHiddenImgae" src="../../static/tc_icon_touxiang@2x.png" v-for="(item,index) in 3" :key="index"  mode=""></image>
								<view class="" style="width: 45px;height: 30px;visibility: hidden;">
									
								</view>
							</view>
							
							<view class="">共{{item.memberNum}}人</view>
						</view>
					
					</view>
					<view class="" style="
					font-size: 14px;
					margin-bottom: 20px;
					font-family: PingFang-SC-Regular, PingFang-SC;
					font-weight: 400;
					color: rgba(0,0,0,0.85);
					line-height: 20px;">
						授权产品：{{item.productNum}}
					</view>
					
					
				</view>
					
				<view class="text" style="margin-bottom: 20px;">
					<text>我的用户分组</text>
				</view>
				<view class="index_xiaoshou" v-for="(item,index) in 5" :key="index" @click="toUser">
					<view class="index_xiaoshou_item_top" >
						<view class="index_xiaoshou_item_title">
							用户组名称
						</view>
						<view class="index_xiaoshou_item_icon">
							<view class="" style="display: flex;justify-content: center;position: relative;">
								<image class="unHiddenImgae" src="../../static/tc_icon_touxiang@2x.png" v-for="(item,index) in 3" :key="index"  mode=""></image>
								<view class="" style="width: 45px;height: 30px;visibility: hidden;">
									
								</view>
							</view>
							
							<view class="">共6人</view>
						</view>
					
					</view>
					<view class="" style="
					font-size: 14px;
					margin-bottom: 20px;
					font-family: PingFang-SC-Regular, PingFang-SC;
					font-weight: 400;
					color: rgba(0,0,0,0.85);
					line-height: 20px;">
						授权产品：6
					</view>
					
					<view class="" style="display: flex;justify-content: space-between;">
						<view class="">
							
						</view>
						<view class="" style="width: 74px;
						height: 28px;
						float: right;
						display: flex;align-items: center;
						justify-content: center;
						font-size: 12px;
						font-family: PingFang-SC-Medium, PingFang-SC;
						font-weight: 500;
						color: #FFFFFF;
						line-height: 17px;
						background: #007AFC;
						border-radius: 14px;">
								移动分组
							</view>
					</view>
				</view>	
				
			</view>
		
			
			
	</view>
</template>

<script>
	import {getUserInfo,getgrouplist} from '@/common/request.js'
	export default {
		data() {
			return {
				title: 'Hello',
				info:null,
				newList:[],
				oldList:[],
				currentpage:1
			}
		},
		onLoad() {
			this.getUserInfo()
			this.getgrouplist()
		},
		onShow() {
			if(uni.getStorageSync('userInfo')){
				this.info = uni.getStorageSync('userInfo')
			}
		},
		methods: {
			getgrouplist(){
				getgrouplist({
					pageNum:this.currentpage,
					pageSize:10,
					creatorId:uni.getStorageSync('userId')
				}).then(res=>{
					res.code == 0
					 ? (()=>{
						 this.newList = res.data.records.filter(e=> e.enableChange==1)
					 })()
					 :  uni.$u.toast(res.msg);
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
			},
			toLogin(){
				uni.navigateTo({
					url:'/pages/login/login'
				})
			},
			toUser(){
				uni.navigateTo({
					url:'user/user'
				})
			},
			toProduct(){
				uni.navigateTo({
					url:'productInformation/productInformation'
				})
			},
			
			toQuotation(){
				uni.navigateTo({
					url:'quotation/quotation'
				})
			},
			gotoshop(){
				uni.navigateTo({
					url:'shop/shop'
				})
			}
		}
	}
</script>

<style scoped lang="less">
	.index_top_bottom{
		display: flex;justify-content: space-around;
	}
	.index_top_item{
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 172px;
		height: 100px;
		background: #F3F9FF;
		border-radius: 4px;
		font-size: 14px;
		font-family: PingFang-SC-Regular, PingFang-SC;
		font-weight: 400;
		color: #000000;
		image{
			width: 30px;
			height: 30px;
			margin-bottom: 5px;
		}
	}
	.mine_bottom{
		background: #F2F2F2;
		padding: 30px 15px;
		box-sizing: border-box;
	}
	.index_xiaoshou_item_top{
	display: flex;
	justify-content: space-between;
	align-items: center;
		margin-bottom: 15px;
		
	}
	.index_xiaoshou_item_title{
		font-size: 18px;
		font-family: PingFangSC-Semibold, PingFang SC;
		font-weight: 600;
		color: rgba(0,0,0,0.85);
		line-height: 25px;
	}
		
	
.hiddenImgae{
	visibility: hidden;
}
.index_xiaoshou_item_icon{
	font-size: 12px;
	font-family: PingFang-SC-Regular, PingFang-SC;
	font-weight: 400;
	color: rgba(0,0,0,0.85);
	line-height: 17px;
	display: flex;
	align-items: center;
	image:first-child{
		position: relative;
		
	}
	image:nth-child(2){
		position: absolute;
		left: 25%;
	}
	image:nth-child(3){
		position: absolute;
		left: 50%;
	}
	
}
	.index_xiaoshou{
		height: 145px;
		background: #FFFFFF;
		box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.05);
		border-radius: 4px;
		box-sizing: border-box;
		padding: 17px 10px 25px 15px;
		display: flex;
		flex-direction: column;
		margin-bottom: 10px;
		image{
			width: 30px;
			height: 30px;
			
		}
	}
	.text{
		font-size: 18px;
		font-family: PingFangSC-Semibold, PingFang SC;
		font-weight: 600;
		color: rgba(0,0,0,0.85);
	}
	.index_type_container{
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20px;
		box-sizing: border-box;
		font-size: 10px;
		font-family: PingFang-SC-Regular, PingFang-SC;
		font-weight: 400;
		color: #000000;
	}
	.index_type_item{
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		height: 60px;
	}
	.index_search_right{
		display: flex;
		flex-direction: column;
		align-items: center;
		font-size: 10px;
		font-family: PingFang-SC-Regular, PingFang-SC;
		font-weight: 400;
		color: #000000;
		line-height: 14px;
		padding: 0 10px;
		height: 100%;
		justify-content: space-between;
	}
	.index_search{
		width: 100%;
		display: flex;
		align-items: center;
		box-sizing: border-box;
		margin-bottom: 15px;
	}
.content{
	box-sizing: border-box;
	position: relative;
	overflow-x: hidden;
}
/deep/.u-search{
	flex: 1 !important;
	width: 70% !important;
	
}
.image_yuan{
	width: 68px;
	height: 68px;
	margin-bottom: 10px;
}
.index_top{
  height: 230px;
  width: 180%;
	background: linear-gradient(180deg, #007AFC 0%, #588AFB 54%, #00ABFE 100%);
  position: absolute;
  left: -40%; z-index: 1;
  border-radius: 0 0 50% 50%;
  padding-left: 45%;
  padding-right: 45%;
  box-sizing: border-box;
  display: flex;justify-content: center;
  
}
.index_top_middle{
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
}
.index_title{
	margin-top: 110rpx;
	text-align: center;
	font-size: 18px;
	font-family: PingFangSC-Semibold, PingFang SC;
	font-weight: 550;
	color: #FFFFFF;
	line-height: 25px;
	margin-bottom: 20px;
}
</style>
