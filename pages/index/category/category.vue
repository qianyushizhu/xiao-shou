<template>
	<view>
			<view class="category_top">
				
					<view class="" style="height: 35px;background: #F5F5F5;border-radius: 16px;position: relative;margin-bottom: 15px;">
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
					
					<view class="category_top_bottom">
						<view class="" v-for="item  in type" :key="item.id" :class="item.id == currentIndex ? 'currentClass':''" @click="select(item.id)">
							{{item.value}}
						</view>
						
					</view>
				
					
			</view>
			
			<view class="category_bottom">
				<view class="category_bottom_item" v-for="item in list" @click="gotoDetail" :key="item">
					<image src="../../../static/logo.png" style="width: 172px;height: 65%;" mode=""></image>
					<view class="category_bottom_item_text">
						<view>
							{{item.brand}}
						</view>
						<view class="">
							￥{{item.price}}
						</view>
					</view>
				</view>
			</view>
	</view>
</template>

<script>
	import {companyEmpowerFolders,companyEmpowerProducts,getproductList} from '@/common/request.js'
	export default {
		data() {
			return {
				currentIndex:1,
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
				list:[]
			};
		},
		onLoad(op) {
			this.folderId = op.folderId
			this.getproductList()
		},
		methods:{
			getproductList(){
				getproductList({
					folderId:this.folderId,
					creatorId:uni.getStorageSync('userId')
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
			gotoDetail(index){
				uni.navigateTo({
					url:'../categoryDetail/categoryDetail'
				})
			}
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
	.category_bottom_item_text{
		height: 35%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 10px;
		box-sizing: border-box;
		view:nth-child(1){
			font-size: 15px;
			font-family: PingFang-SC-Regular, PingFang-SC;
			font-weight: 400;
			color: #000000;
			line-height: 21px;
			 display:-webkit-box;
			    -webkit-box-orient:vertical;/*设置方向*/
			    -webkit-line-clamp:2;/*设置超过为省略号的行数*/
			    overflow:hidden;
		}
		view:nth-child(2){
			font-size: 16px;
			font-family: PingFangSC-Semibold, PingFang SC;
			font-weight: 600;
			color: #007AFC;
			line-height: 22px;
		}
	}
	.category_bottom_item{
	}
	.category_bottom_item{
		width: 172px;
		height: 266px;
		background: #FFFFFF;
		margin-bottom: 15px;
		box-sizing: border-box;
	}
	.category_bottom{
		box-sizing: border-box;
		background: #F2F2F2;
		min-height: 80vh;
		padding: 10px 0;
		display: flex;flex-wrap: wrap;
		justify-content: space-around;
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
	padding: 15px 10px ;
	height: 100px;
	box-sizing: border-box;
}
</style>
