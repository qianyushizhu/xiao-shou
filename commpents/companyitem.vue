<template>
	<view class="" >
			<view class="" style="display: flex;padding: 20px 0pt;border-bottom: 1px solid rgba(0,0,0,0.15);" @click="toFile(info)">
				<image v-if="info.logo" :src="info.logo" mode="" style="width: 76px;height: 76px;margin-right: 12px;"></image>
				<view class="" style="display: flex;flex-direction: column;justify-content: center;flex: 1;">
					<view class="" style="margin-bottom:10px;
					font-size: 16px;
					font-weight: 600;
					color: rgba(0,0,0,0.85);
					">
						{{info.companyName}}
					</view>
					<view class="" style="
					font-size: 12px;
					font-weight: 400;
					color: #A6A6A6;
					">
						主营：{{info.companyBrief}}
						
					</view>
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
		onLoad() {
			console.log(this.info)
		},
		methods:{
			toFile(item) {
				console.log(11)
				uni.navigateTo({
					url:'/pages/index/productInformation/flie/flie?companyId='+ item.companyId+'&quotationId=' + this.quotationId
				})
			},
		}
	}
</script>

<style lang="less">

	
</style>