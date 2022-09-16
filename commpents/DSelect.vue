<template>
	<view class="" >
			<view class="shop_select">
				<view class="shop_select_left">
					<view class="shop_select_left_item" v-for="(item,index) in list2"  @click="select(index)" :key="item" :class="currentIndex == index ? 'currentClass' :''">
						{{item.folderName}}
					</view>
				</view>
				<view class="shop_select_right" >
					<view class="shop_select_right_item" v-for="item in list3"  :key="item" @click="gotocategory(item.folderId)">
						<image src="../../../static/tc_icon_wenjiajian@2x.png" mode=""></image>
						<view class="">
							{{item.folderName}}
						</view>
					</view>
				</view>
			</view>
			
	</view>
</template>

<script>
	import { getfolderlist} from '@/common/request.js'
	export default {
		
		data() {
			return {
				list2:[],
				list3:[],
			currentIndex:0
			}
		},
		created(){
			console.log(1111)
			this.getfolderlist()
		},
		methods: {
			getfolderlist(id){
				let a = {
					parentId:0,
					creatorId:uni.getStorageSync('userId')
				}
				getfolderlist(a).then(res=>{
					res.code == 0
					 ? (()=>{
						this.list2 = res.data
						this.getfolderlist2(this.list2[0].folderId)
					 })()
					 :  uni.$u.toast(res.msg);
				})
			},
			getfolderlist2(id){
				let a = {
					parentId:id,
					creatorId:uni.getStorageSync('userId')
				}
				getfolderlist(a).then(res=>{
					res.code == 0
					 ? (()=>{
						this.list3 = res.data
						
					 })()
					 :  uni.$u.toast(res.msg);
				})
			},
			
			change(e){
				this.current = e.index
				console.log(e)
			},
			
			select(index) {
				this.currentIndex = index
			},
		
			gotocategory(folderId) {
				uni.navigateTo({
					url:'../category/category?folderId='+folderId
				})
			}
		},
		}
</script>

<style lang="less" scoped>
	.currentClass{
		background-color: #FFFFFF;
		font-size: 16px !important;
		font-weight: 550 !important;
		color: #000000 !important;
	}
	.shop_select_left_item{
			width: 100%;
			height: 56px;
			line-height: 56px;
			font-size: 14px;
			font-weight: 400;
			color: #A6A6A6;
			text-align: center;
	}
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
	.shop_select_left{
		width: 25%;
		min-height: 80vh;
		margin-right: 8px;
		background: #F6F6F6;
	}
	.shop_select_right{
		width: 75%;
		display: flex;flex-wrap: wrap;
	}
	.shop_select{
		display: flex;
		
	}
</style>