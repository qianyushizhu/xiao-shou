<template>
	<view class="" v-if="list2.length != 0">
			<view class="shop_select">
				<view class="shop_select_left">
					<view class="shop_select_left_item" v-for="(item,index) in list2"  @click="select(index)" :key="item" :class="currentIndex == index ? 'currentClass' :''">
						{{item.folderName}}
						<view class="" v-if="index == currentIndex" style="position: absolute;left: 0;top: 50%;transform: translateY(-50%);
						width: 3px;
						height: 28px;
						background: #007AFC;
						border-radius: 2px;">
							
						</view>
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
	
	<view class="center" v-else style="margin-bottom: 15px;margin-top: 50px;flex-direction: column;">
		<image src="/static/lj_icon_quesheng@2x.png" class="queshen" mode=""></image>
	</view>
</template>

<script>
	import { getfolderlist,companyEmpowerFolders} from '@/common/request.js'
	export default {
		props:{
			companyId:'',
			type:0,
			quotationId:''
		},
		data() {
			return {
				list2:[],
				list3:[],
			currentIndex:0,
			}
		},
		created(){
			
			
		},
		mounted() {
			console.log(this.companyId)
			this.getfolderlist()
		},
		methods: {
			getfolderlist(){
				if(this.companyId){
					let a = {
						folderId:0,
						userId:uni.getStorageSync('userId'),
						companyId:this.companyId
					}
					companyEmpowerFolders(a).then(res=>{
						res.code == 0
						 ? (()=>{
							if(res.data.length!=0){
								this.list2 = res.data
								this.getfolderlist2(this.list2[0].folderId)
							}
						 })()
						 :  uni.$u.toast(res.msg);
					})
				}else{
					let a = {
						parentId:0,
						creatorId:uni.getStorageSync('userId')
						
					}
					getfolderlist(a).then(res=>{
						res.code == 0
						 ? (()=>{
							if(res.data.length!=0){
								this.list2 = res.data
								this.getfolderlist2(this.list2[0].folderId)
							}
							
						 })()
						 :  uni.$u.toast(res.msg);
					})
				}
				
			},
			getfolderlist2(id){
				
				if(this.companyId){
					let a = {
							folderId:id,
							userId:uni.getStorageSync('userId'),
							companyId:this.companyId
						}
					companyEmpowerFolders(a).then(res=>{
						res.code == 0
						 ? (()=>{
							this.list3 = res.data
							
						 })()
						 :  uni.$u.toast(res.msg);
					})
				}else{
					let a = {
							parentId:id,
							creatorId:uni.getStorageSync('userId'),
						}
					getfolderlist(a).then(res=>{
						res.code == 0
						 ? (()=>{
							this.list3 = res.data
						 })()
						 :  uni.$u.toast(res.msg);
					})
				}
				
			},
			
			// change(e){
			// 	this.current = e.index
			// 	console.log(e)
			// },
			
			select(index) {
				this.currentIndex = index
				this.getfolderlist2(this.list2[index].folderId)
				
			},
		
			gotocategory(folderId) {
				console.log(this.type)
				uni.navigateTo({
					url:'/pages/index/category/category?folderId='+folderId +'&type=' + this.type+'&quotationId=' + this.quotationId
				})
			}
		},
		}
</script>

<style lang="less" scoped>
	.currentClass{
		background-color: #FFFFFF;
		font-size: 15px !important;
		font-weight: 550 !important;
		color: #007AFC !important;
	}
	.shop_select_left_item{
		position: relative;
			width: 100%;
			height: 56px;
			line-height: 56px;
			font-size: 14px;
			font-weight: 400;
			color: #A6A6A6;
			text-align: center;
			overflow: hidden; //超出的文本隐藏
			
			text-overflow: ellipsis; //溢出用省略号显示
			
			display: -webkit-box;
			
			-webkit-line-clamp: 2; // 超出多少行
			
			-webkit-box-orient: vertical;
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
		margin-right: 8px;
		background: #F6F6F6;
		min-height: 100vh;
	}
	.shop_select_right{
		width: 75%;
		position: absolute;
		left: 28%;
		display: flex;flex-wrap: wrap;
	}
	.shop_select{
		display: flex;
		
	}
</style>