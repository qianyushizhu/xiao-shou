<template>
	<view style="background-color: #D8D8D8;min-height: 100vh">
			<view class="category_top">
				
					<view class="" style="height: 35px;background: #F5F5F5;border-radius: 16px;position: relative;">
							<input style="height: 35px;background: #F5F5F5;border-radius: 16px;position: absolute;padding-left: 42px;caret-color:rgba(0,0,0,0.45);font-size: 13px;width: 70%;" placeholder="请输入产品名称/系列/颜色/材质/规格" type="text">
								<image src="../../../static/lj_icon_sousuo@2x.png" style="width: 16px;height: 16px;position: absolute;
								top: 50%;
								left: 18px;
								transform: translateY(-50%);
								" mode=""></image>
								<view class="" style="width: 65px;
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
					
					<!-- <view class="category_top_bottom">
						<view class="" v-for="item  in type" :key="item.id" :class="item.id == currentIndex ? 'currentClass':''" @click="select(item.id)">
							{{item.value}}
						</view>
						
					</view> -->
				
					
			</view>
			
			<view class="category_bottom" :style="{justifyContent:list.length!==1?'space-between':''}" v-if="list.length!==0">
				<categoryitem v-for="item in list"   :key="item" :info="item" :quotationId='quotationId'></categoryitem>
			</view>
			<view class="center" style="margin-top: 50px;" v-else>
				<image src="../../../static/lj_icon_quesheng@2x.png" class="queshen" mode=""></image>
			</view>
	</view>
</template>

<script>
	import {categoryitem} from '@/commpents/categoryitem.vue'
	import {companyEmpowerFolders,companyEmpowerProducts,getproductList} from '@/common/request.js'
	export default {
		components:{
			categoryitem
		},
		data() {
			return {
				currentIndex:1,
				status:'loadmore',
				
				folderId:'',
				type:[
					{
						value:'最新',
						id:1
					},
					{
						value:'热度',
						id:2
					},
					{
						value:'上传',
						id:3
					},
				],
				list:[],
				currentPage:1,
				quotationId:''
			};
		},
		onLoad(op) {
			this.folderId = op.folderId
			this.quotationId = op.quotationId ? op.quotationId : ''
			if(op.type == 0){
				this.companyEmpowerProducts()
			}else{
				this.getproductList()
			}
		},
		onReachBottom() {
			if( this.status == 'nomore') {
				uni.$u.toast('没有更多数据了')
				return false
			}
			else {
				this.status = 'loading'
			}
			this.currentPage = ++this.currentPage;
			if(op.type == 0){
				this.companyEmpowerProducts()
			}else{
				this.getproductList()
			}
		},
		methods:{
			
			companyEmpowerProducts(){
				companyEmpowerProducts({
					folderId:this.folderId,
					userId:uni.getStorageSync('userId'),
					pageNum:this.currentPage,
				}).then(res=>{
					res.code == 0
					 ? (()=>{
						this.list = this.list.concat(res.data)
						this.list.forEach(e=>{
							e.picture =  this.$img+ e.picture 
						})
						res.data.total == this.list.length ? this.status = 'nomore' : this.status = 'loading';
					 })()
					 :  uni.$u.toast(res.msg);
				})
			},
			getproductList(){
				getproductList({
					folderId:this.folderId,
					creatorId:uni.getStorageSync('userId'),
					pageNum:this.currentPage,
				}).then(res=>{
					res.code == 0
					 ? (()=>{
						this.list = this.list.concat(res.data.records)
						this.list.forEach(e=>{
							e.picture =  this.$img+ e.picture 
						})
						res.data.total == this.list.length ? this.status = 'nomore' : this.status = 'loading';
					 })()
					 :  uni.$u.toast(res.msg);
				})
			},
			select(index){
				this.currentIndex =  index
			},
			
		}
	}
</script>

<style lang="less" scoped>
	/deep/ .u-tabs__wrapper__nav__item {
		width: 100px !important;
	}
	/deep/ .u-tabs__wrapper__nav__line{
		transform: translate(103px) !important;
	}
	
	.category_bottom{
		padding: 10px;
			box-sizing: border-box;
			display: flex;flex-wrap: wrap;
	}
	.currentClass{
		color: #007AFC;
	}
	.category_top_bottom{
		font-size: 14px;
		font-family: PingFang-SC-Regular, PingFang-SC;
		font-weight: 400;
		color: #A6A6A6;
		line-height: 20px;
		display: flex;
		align-items: center;
		view{
			margin-right: 30px;
		}
	}
.category_top{
	background-color: #fff;
	padding: 15px 10px ;
	box-sizing: border-box;
}
</style>
