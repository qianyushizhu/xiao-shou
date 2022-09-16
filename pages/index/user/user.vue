<template>
	<view style="box-sizing: border-box;padding: 15px;">
		
		<DInput></DInput>
		
		<view class="" style="display: flex;flex-direction: column;">
			<view class="" style="display:flex;align-items: center;padding: 15px 0;border-bottom: 1px solid rgba(0,0,0,0.15);"
			 v-for="(item,index) in 5" :key="index"
			 @click="toUpdate"
			 >
				<image style="width: 48px;height: 48px;margin-right: 10px;" src="../../../static/tc_icon_touxiang@2x.png" mode=""></image>
				<view class="" style="font-size: 14px;">
					房卫莹
				</view>
			</view>
		</view>
		<view class="" style="width: 315px;
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
							border-radius: 21px;">
			移动分组
		</view>
	</view>
</template>

<script>
	import DInput from '../../../commpents/DInput.vue'
	export default {
		components: {
			DInput
		},
		data() {
			return {
				
			}
		},
		methods: {
			toUpdate(){
				uni.navigateTo({
					url:'/pages/index/updateUser/updateUser'
				})
			}
		}
	}
</script>

<style>

</style>
