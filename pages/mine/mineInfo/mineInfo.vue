<template>
	<view>
		<view class="content">
		
		<view class="" style="display: flex;align-items: center;margin-bottom: 20px;">
			<image style="
			width: 64px;
			margin-right: 10px;
			height: 64px;" src="../../../static/tc_icon_touxiang@2x.png" mode=""></image>
			<view class="" style="
			font-size: 14px;
			font-weight: 600;
			color: #FFFFFF;">
				张三
			</view>
		</view>
			
		<view class="" style="display: flex;align-items: center;margin-bottom: 12px;">
			<image style="width: 16px;height: 16px;margin-right: 6px;" src="../../../static/icon_shoucang@2x.png" mode=""></image>
			<view class="xxx">
				专业空间整体解决方案提供者
			</view>
		</view>
			<view class="xxx" style="margin-bottom: 16px;">
				发现你的优点，为你创造价值
			</view>
		<view class="" style="display: flex;flex-wrap: wrap;">
			<view class="item center" v-for="item in 5" :key="item">
				空间设计
			</view>
		</view>
		</view>
		
		<view class="center" style="height: 44px;background: #FFFFFF;" >
			<view class="" style="display: flex;width: 60%;
			justify-content: space-between;align-items: center;">
				<view class="sss" v-for="item in list1"
				@click="change(item)"
				 :key="item.id" :class="current == item.id ? 'currentClass':''">
					{{item.name}}
				</view>
			</view>
		</view>
		
		<view class="" style="padding: 10px;background: #D8D8D8;min-height: 60vh;">
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list1: [{
				                   name: '主页介绍',
								   id:0
				               }, {
				                   name: '推荐产品',
								   id:1
				               }],
							   current:0
			};
		},
		methods:{
			change(e){
				this.current = e.id
			}
		}
	}
</script>

<style lang="less">
	.currentClass{
		color: #000000 !important;
		font-weight: 550 !important;
		
	}
	.sss{
		font-size: 14px;
		font-family: PingFang-SC-Regular, PingFang-SC;
		font-weight: 400;
		color: #A6A6A6;
	}
.content{
	min-height: 228px;
	display: flex;
	flex-direction: column;
	padding: 15px;
	box-sizing: border-box;
	background: linear-gradient(180deg, #00B1FE 0%, #007AFC 100%);
}
.xxx{
	font-size: 12px;
	font-family: PingFang-SC-Regular, PingFang-SC;
	font-weight: 400;
	color: #FFFFFF;
}
.item{
	min-width: 74px;
	height: 29px;
	margin-right: 8px;
	margin-bottom: 8px;
	background: rgba(255, 255, 255, .59);
	border-radius: 4px;
	font-size: 12px;
	font-family: PingFang-SC-Regular, PingFang-SC;
	font-weight: 400;
	color: #FFFFFF;
}
</style>
