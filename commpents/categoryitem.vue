<template>
			<view class="category_bottom_item" @click="gotoDetail(info)">
					<image :src="info.picture"  mode=""></image>
					<view class="category_bottom_item_text">
						<view>
							{{info.productName}}
						</view>
						
					</view>
				</view>
			
</template>

<script>
	export default{
		props:{
			info:{},
			quotationId:''
		},
		methods:{
		gotoDetail(info){
			uni.navigateTo({
				url:'/pages/index/categoryDetail/categoryDetail?productId='+info.productId+'&quotationId=' + this.quotationId
			})
		}
		},
		
	}
</script>

<style lang="less">
	.category_bottom_item_text{
		display: flex;
		padding: 10px;
		justify-content: center;
		align-items: center;
		height: 150rpx;
		box-sizing: border-box;
		view:nth-child(1){
			font-size: 15px;
			font-weight: 400;
			margin-bottom: 10px;
			color: #000000;
			line-height: 21px;
			 display:-webkit-box;
			    -webkit-box-orient:vertical;/*设置方向*/
			    -webkit-line-clamp:2;/*设置超过为省略号的行数*/
			    overflow:hidden;
		}
		view:nth-child(2){
			font-size: 16px;
			font-weight: 600;
			color: #007AFC;
			line-height: 22px;
		}
	}
	
	.category_bottom_item{
		box-sizing: border-box;
		width: 344rpx;
		height: 520rpx;
		background: #FFFFFF;
		margin-bottom: 15px;
		box-sizing: border-box;
		image{
			width: 344rpx;
			height: 370rpx;
		}
	}
	
</style>