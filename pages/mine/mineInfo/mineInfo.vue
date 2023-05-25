<template>
	<view>
		<view class="content">
		
		<view class="" style="display: flex;align-items: center;margin-bottom: 20px;">
			<image style="
			width: 64px;
			margin-right: 10px;
			height: 64px;" :src="info.headLogo" mode=""></image>
			<view class="" style="
			font-size: 14px;
			font-weight: 600;
			color: #FFFFFF;">
				{{info.username}}
			</view>
		</view>
			
		<view class="" style="display: flex;align-items: center;margin-bottom: 12px;">
			<image style="width: 16px;height: 16px;margin-right: 6px;" src="../../../static/huiyuanzhongxin@2x.png" mode=""></image>
			<view class="xxx">
				{{info.companyTag}}
			</view>
		</view>
			<view class="xxx" style="margin-bottom: 16px;">
				{{info.signature}}
			</view>
		<view class="" style="display: flex;flex-wrap: wrap;" v-if="info.coreTag">
			<view class="item center" v-for="item in info.coreTag" :key="item">
				{{item}}
			</view>
		</view>
		</view>
		
		<view class="center" style="height: 44px;background: #FFFFFF;" >
			<view class="" style="display: flex;width: 60%;
			justify-content: space-between;align-items: center;">
				<view class="sss" v-for="item in list1"
				@click="change(item)"
				 :key="item.id" :class="current == item.id ? 'currentClass':''">
					<view class="" style="margin-bottom: 5px;">
						{{item.name}}
					</view>
					<view class="" v-if="current == item.id " style="width: 20px;
					height: 2px;
					background: #007AFC;
					border-radius: 1px;">
						
					</view>
				</view>
			</view>
		</view>
		
		<view class="" style="min-height: 65vh;" :style="[{ backgroundColor : current == 0 || list.length==0 ? '#fff' : '#D8D8D8'}] ">
				<view class="" style="display: flex;flex-direction: column;padding: 15px;" v-if="current==0">
					<view class="" style="display: flex;margin-bottom: 20px;align-items: center;">
						<view class="" style="margin-right: 15px;
						font-size: 14px;
						font-weight: 400;
						color: #A6A6A6;">
							核心优势
						</view>
						<view class="" style="
						font-size: 14px;
						font-weight: 400;
						color: rgba(0,0,0,0.85);">
							{{info.advantage}}
						</view>
					</view>
					<view class="" style="display: flex;align-items: center;margin-bottom: 20px;">
						<view class="" style="margin-right: 15px;
						font-size: 14px;
						font-weight: 400;
						color: #A6A6A6;">
							服务地区
						</view>
						<view class="" style="
						font-size: 14px;
						font-weight: 400;
						color: rgba(0,0,0,0.85);">
							{{info.serviceArea}}
						</view>
					</view>
					<view class="" v-if="info.brief" style="display: flex;align-items: center;margin-bottom: 20px;">
						<view class="" style="margin-right: 15px;
						font-size: 14px;
						font-weight: 400;
						color: #A6A6A6;">
							服务简介
						</view>
						<view class="" style="
						font-size: 14px;
						font-weight: 400;
						color: rgba(0,0,0,0.85);">
							{{info.brief}}
						</view>
					</view>
				</view>
				<view class="" v-else-if='current==1 && list.length!=0' class="category_bottom" :style="{justifyContent:list.length!==1?'space-between':'flex-end'}">
					<categoryitem v-for="item in list" @click="gotoDetail" :key="item" :info="item" :quotationId='quotationId'></categoryitem>
				</view>
				
				<view class="center" v-else style="margin-bottom: 15px;margin-top: 50px;flex-direction: column;height: 100%;background-color: #FFFFFF;">
					<image src="/static/lj_icon_quesheng@2x.png" class="queshen" mode=""></image>
				</view>
		</view>
	</view>
</template>

<script>
	import {categoryitem} from '@/commpents/categoryitem.vue'
	import{recProduct,intro} from'@/common/request.js'
	export default {
		components:{
		categoryitem	
		},
		data() {
			return {
				list1: [{
				                   name: '主页介绍',
								   id:0
				               }, {
				                   name: '推荐产品',
								   id:1
				               }],
							   current:0,
							   info:{},
							   list:[],
							   currentPage:'',
							   quotationId:''
			};
		},
		onLoad() {
			this.intro()
			this.recProduct()
		},
		onReachBottom() {
			if(this.current==1){
				if( this.status == 'nomore') return false
				else this.status = 'loading'
				this.currentPage = ++this.currentPage;
				this.recProduct();
			}
		
		},
		methods:{
			gotoDetail(index){
				uni.navigateTo({
					url:'/pages/index/categoryDetail/categoryDetail'
				})
			},
			recProduct(){
				recProduct({
					userId:uni.getStorageSync('userId'),
					pageNum:this.currentPage,
					pageSize:10
				}).then(res=>{
					res.code == 0
					 ? (()=>{
						 res.data.records.forEach(e=>{
						 	e.picture =  this.$img+ e.picture 
						 })
						 this.list = this.list.concat(res.data.records)
						 res.data.total == this.list.length ? this.status = 'nomore' : this.status = 'loading';
						 
					 })()
					 :  uni.$u.toast(res.msg);
				})
				
			},
			intro(){
				intro(uni.getStorageSync('userId')).then(res=>{
					res.code == 0
					 ? (()=>{
						 res.data.headLogo =  this.$img+ res.data.headLogo 
						 if(res.data.coreTag){
							 res.data.coreTag = res.data.coreTag.split(',')
						 }
						 
						this.info = res.data
					 })()
					 :  uni.$u.toast(res.msg);
				})
			},
			change(e){
				this.current = e.id
				console.log(this.current)
			}
		}
	}
</script>

<style lang="less">
.category_bottom{
	padding: 10px;
		box-sizing: border-box;
		min-height: 100%;
		display: flex;flex-wrap: wrap;
	}
	.currentClass{
		color: #000000 !important;
		font-weight: 550 !important;
		
	}
	.sss{
		flex-direction: column;
		display: flex;align-items: center;
		font-size: 14px;
		font-family: PingFang-SC-Regular, PingFang-SC;
		font-weight: 400;
		color: #A6A6A6;
	}
.content{
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
