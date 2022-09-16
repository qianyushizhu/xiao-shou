<template>
	<view style="padding:30px 52px;box-sizing: border-box;">
		<view class="shop_select_right">
			<view class="shop_select_right_item" v-for="item in list" @click="gotocategory(item)" :key="item">
				<image src="../../../../static/tc_icon_wenjiajian@2x.png" mode=""></image>
				<view class="">
					{{item.folderName}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {companyEmpowerFolders,companyEmpowerProducts} from '@/common/request.js'
	export default {
		
		data() {
			return {
				companyId:'',
				list:[]
			};
		},
		onLoad(op) {
			this.companyId = op.companyId ? op.companyId : ''
			this.companyEmpowerFolders()
		},
		methods:{
			gotocategory(item){
				console.log(1)
				uni.navigateTo({
					url:'/pages/index/category/category?folderId=' + item.folderId
				})
			},
			
			
			companyEmpowerFolders(){
				companyEmpowerFolders({
					companyId:this.companyId,
					folderId:0,
					userId:uni.getStorageSync('userId')
				}).then(res=>{
					res.code == 0
					 ? (()=>{
						this.list = res.data
						// this.list = this.list.concat(this.list)
					 })()
					 :  uni.$u.toast(res.msg);
				})
			}
		}
	}
</script>

<style lang="less">
.shop_select_right_item{
		margin-bottom: 10px;
		margin-right: 10px;
		width: 125px;
		height: 125px;
		background: #F5F5F5;
		border-radius: 4px;
		font-size: 12px;
		font-weight: 400;
		color: #000000;
		line-height: 17px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		image{
			width: 50px;
			height: 40px;
			margin-bottom: 15px;
		}
	}
.shop_select_right{
		display: flex;flex-wrap: wrap;
	}
</style>
