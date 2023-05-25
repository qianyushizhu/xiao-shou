<template>
	<view>
		<u-swiper :list="info.imgs" @change="e => (currentNum = e.current)" :autoplay="false" height="375" indicatorStyle="right: 20px" imgMode="heightFix">
			<view slot="indicator" class="indicator-num">
				<text class="indicator-num__text">{{ currentNum + 1 }}/{{ info.imgs.length }}</text>
			</view>
		</u-swiper>
		<view class="detail_middle">
			<view class="detail_middle_title">{{ info.modelNum }}</view>
			<view class="detail_middle_price">
				<view class="">{{ info.price }}</view>
				<!-- <view class="">浏览量： {{ info.modelNum }}</view> -->
			</view>
			<view class="detail_middle_type">
				<view class="detail_middle_type_sss">规格</view>
				<view class="detail_middle_type_xxx" @click="join">
					<view class="">{{ tipText }}</view>
					<u-icon name="arrow-right" size="12"></u-icon>
				</view>
			</view>
		</view>

		<view class="line"></view>

		<view class="detail_bottom">
			<view class="detail_bottom_text">参数信息</view>
			<view class="detail_bottom_item_container">
				<view class="detail_bottom_item" v-for="item in info.productAttributeList" :key="item">
					<view class="detail_bottom_item_1">{{ item.attributeKey }}</view>
					<view class="detail_bottom_item_2">{{ item.values }}</view>
				</view>
			</view>
			<view class="detail_bottom_detail">
				<view class="detail_bottom_detail_item" v-for="item in detailType" :key="item.id" :style="{ backgroundColor: item.bgc }" @click="toH5(item)">
					<view class="" style="display: flex;flex-direction: column;justify-content: space-between;">
						<view class="detail_bottom_detail_item_text">{{ item.item }}</view>
						<view class="detail_bottom_detail_item_look" :style="{ color: item.color, borderColor: item.color }">查看</view>
					</view>
				</view>
			</view>
		</view>

		<!-- 	<view class="detail_share_box">
					<view class="detail_collect">
						<image src="../../../static/icon_shoucang@2x.png" mode=""></image>
						<view class="">
							收藏
						</view>
					</view>
					<view class="detail_share">
						<image src="../../../static/icon_fengxiang@2x.png" mode=""></image>
						<view class="">
							分享
						</view>
					</view>
				</view> -->
		<view class="detail_share_box">
			<button class="detail_collect" plain open-type="share">分享</button>
			<view class="detail_share" @click="this.pickershow = true"><view class="">加入报价单</view></view>
		</view>

		<u-popup :show="show" :round="10" mode="bottom" @close="close" @open="open" closeable>
			<view style="padding: 30px 15px;background: #FFFFFF;">
				<view class="" style="display: flex;margin-bottom: 30px;">
					<image
						style="
								width: 100px;
								height: 100px;margin-right: 16px;"
						:src="searchResult.picture"
						mode=""
					></image>
					<view
						class=""
						style="
								font-size: 20px;
								font-weight: 600;
								    display: flex;
								    align-items: flex-end;
								text-align: end;
								color: #007AFC;"
					>
						¥{{ searchResult.currentPrice }}
					</view>
				</view>
				<view class="" v-for="(e,i) in list" :key="i">
					<view
						class=""
						style="
								font-size: 14px;
								font-weight: 500;
								margin-bottom: 15px;
								color: rgba(0,0,0,0.85);"
					>
						{{e.name}}
					</view>
					<view class="item_container" style="margin-bottom: 25px;">
						<view
							class="item_item center"
							v-for="(item, index) in e.value"
							@click="select(index, item,e,i)"
							:key="index"
							:class="index == e.currentIndex ? 'currentClass' : ''"
						>
							{{ item }}
						</view>
					</view>
				</view>
			
				
				<view class="center" style="width: 100%;" @click="enter">
					<view
						class="center"
						style="
								font-size: 14px;
								width: 315px;
								height: 38px;
								background: #007AFC;
								border-radius: 19px;
								font-weight: 400;
								color: #FFFFFF;
								"
					>
						确定
					</view>
				</view>
			</view>
		</u-popup>
		<u-picker :show="pickershow" ref="uPicker" :loading="loading" 
		:defaultIndex='defaultIndex'
		keyName='title' :columns="columns" @confirm="confirm" @change="changeHandler" @cancel='pickershow = false'></u-picker>
	</view>
</template>

<script>
import { product, productdetail, getQuotationList, getArea ,saveProduct} from '@/common/request.js';
export default {
	data() {
		return {
			currentIndex1: -1,
			beforecurrentIndex1: -2,
			currentIndex2: -1,
			beforecurrentIndex2: -2,
			currentIndex3: -1,
			beforecurrentIndex3: -2,
			tipText: '请选择规格',
			show: false,
			pickershow: false,
			loading: false,
			detailType: [
				{
					id: 1,
					item: '产品细节',
					color: '#007AFC',
					bgc: '#EDF6FF'
				},
				{
					id: 3,
					item: '销购指南',
					color: '#D0021B',
					bgc: '#FFF8F9'
				},
				{
					id: 5,
					item: '安装指南',
					color: '#F5A623',
					bgc: '#FFF9F0'
				},
				{
					id: 2,
					item: '使用&保养',
					color: '#5813FE',
					bgc: '#F7F4FF'
				}
			],
			list6: [],
			currentNum: 0,
			productId: '',
			info: {},
			beforeSearchList: [],
			nowSearchList: [],
			searchResult: {},
			masklist: [],
			areaList: [],
			columns: [
			              [],[]    
			                ],
			                columnData: [
			                   
			                ],
							defaultIndex:[],
							quotationId:'',
							list:[],
							result:{},
							canSearch:false,
							type:[]
		};
	},
	onLoad(op) {
		this.productId = op.productId;
		this.quotationId = op.quotationId ? op.quotationId : ''
		console.log(op)
		this.product();
		this.getQuotationList()
		
	},
	onShareAppMessage(res) {
	       return {
	           title:this.info.productName,
	           path:'/pages/index/categoryDetail/categoryDetail?productId='+this.info.productId+'&quotationId='+this.quotationId ,
	           imageUrl:this.$img+this.info.picture,
	           desc:this.info.brief,
	           content:'',
	           success(res){
					  console.log(res)
	               uni.showToast({
	                   title:'分享成功'
	               })
					  
	           },
	           fail(res){
	               uni.showToast({
	                   title:'分享失败',
	                   icon:'none'
	               })
	           }
	       }
			  
	   },
	methods: {
		changeHandler(e) {
			const {
				columnIndex,
				index,
				// 微信小程序无法将picker实例传出来，只能通过ref操作
				picker = this.$refs.uPicker
			} = e;
			console.log(e)
			if (columnIndex === 0) {
				this.quotationId = this.masklist[index].quotationId
				this.loading = true;
				getArea(this.quotationId).then(res => {
					res.data.forEach(e=>{
						e.title = e.areaName
					})
					this.columns[1] = res.data
					console.log(this.columnData)
					picker.setColumnValues(1, this.columns[1][0])
					this.loading = false;
				});
			}
		},
		// 回调参数为包含columnIndex、value、values
		confirm(e) {
			console.log('confirm', e);
			saveProduct(this.quotationId,{
				productId:this.productId,
				quotationAreaId:e.value[1].quotationAreaId
			}).then(res=>{
				res.code == 0
				 ? (()=>{
					 uni.$u.toast('添加成功')
					 let pages = getCurrentPages()
					 let isfromedit = false
					 let editIndex = 0
					 pages.forEach((e,i)=>{
					 	if(e.route == 'pages/index/quotation/quotationEdit/quotationEdit'){
					 		isfromedit = true
					 		editIndex = i
					 	}
					 })
					console.log(pages.length,isfromedit,editIndex)
					 let back = pages.length -( editIndex+1)
					 if(isfromedit){
					 	uni.showModal({
					 		title: '添加成功',
					 		content: '是否要返回报价单编辑页',
					 		cancelText: '取消',
					 		confirmColor: '#007AFC',
					 		success:(res)=> {
					 			if (res.confirm) {
								pages[editIndex].$vm.quotationId = this.quotationId
					 			uni.navigateBack({
					 				delta:back,
					 				success: () => {
					 					uni.$u.toast('添加成功')
					 				}
					 			})
					 									
					 			} else if (res.cancel) {
					 				console.log('用户点击取消');
					 			}
					 		}
					 	});
					 }
					 // else{
					 // 						 uni.showModal({
					 // 						 	title: '添加成功',
					 // 						 	content: '去往报价单页面看看',
					 // 						 	cancelText: '取消',
					 // 						 	confirmColor: '#007AFC',
					 // 						 	success:(res)=> {
					 // 						 		if (res.confirm) {
					 // 						 		uni.navigateTo({
					 // 						 			url:'/pages/index/quotation/quotationEdit/quotationEdit?quotationId=' + this.quotationId
					 // 						 		})
					 						 								
					 // 						 		} else if (res.cancel) {
					 // 						 			console.log('用户点击取消');
					 // 						 		}
					 // 						 	}
					 // 						 });
					 // }
					 
						
				 })()
				 :  uni.$u.toast(res.msg);
			})
			this.pickershow = false;
		},
		
		getQuotationList() {
			getQuotationList({
				pageNum: 1,
				pageSize: 1000
			}).then(res => {
				res.code == 0
					? (() => {
							this.masklist = res.data.records;
							this.columns[0]=this.masklist
							let index1 = 0
							this.masklist.forEach((e,i)=>{
								 if(e.quotationId == this.quotationId){
									 index1 = i
								 }
							})
							this.quotationId = this.quotationId !='' ? this.quotationId : this.masklist[0].quotationId
							console.log(this.quotationId)
							getArea(this.quotationId).then(res => {
								res.code == 0
									? (() => {
										if(res.data.length!==0){
											res.data.forEach(e=>{
												e.title = e.areaName
											})
											this.areaList = res.data;
											this.columns[1]=this.areaList
											this.defaultIndex = [index1,0]
											console.log(this.defaultIndex)
										}
											
									  })()
									: uni.$u.toast(res.msg);
							});
					  })()
					: this.$refs.uToast.show({ type: 'default', message: res.msg });
			});
		},
		toH5(item) {
			console.log(item);
			uni.navigateTo({
				url: '/pages/index/view/view?productId=' + this.productId + '&type=' + item.id
			});
		},
		enter() {
			this.tipText = '';
			this.type.forEach(e=>{
				this.tipText += '  ' + this.searchResult.spData[e]
			})
			this.show = false;
		},
		product() {
			product(this.productId).then(res => {
				res.code == 0
					? (() => {
							this.info = res.data;
							this.list = []
							let type = []
							this.info.imgs = this.info.imgs.split(',').map(e => this.$img + e);
							console.log(this.info)
							this.info.productSkuList.forEach(e => {
								e.spData = JSON.parse(e.spData);
								this.nowSearchList.push(e.spData);
								for(let key in e.spData){
									type.push(key)
								}
								
							});
							
							type = [...new Set(type)]
							console.log(type)
							this.type = type
							type.forEach(ele=>{
								let a = []
								this.info.productSkuList.forEach(e=>{
									a.push(e.spData[ele])
								})
								a = [...new Set(a)]
								this.list.push({
									name:ele,
									value :a,
									currentIndex:-1,
									beforecurrentIndex:-2
								})
							})
							console.log(this.list)
							this.info.productSkuList.forEach(e => {
								e.picture = this.$img + e.picture;
							});
							this.searchResult = this.info.productSkuList[0];
							
						})()	
					: uni.$u.toast(res.msg);
			});
		},
		join() {
			this.show = true;
		},
		select(index, item,e,i) {
			
			console.log(index,item,e,i)
			
			if (index == this.list[i].beforecurrentIndex) {
				this.list[i].currentIndex = -1;
				this.list[i].beforecurrentIndex = -2;
				this.result[e.name] = '';
			} else {
				this.list[i].currentIndex = index
				this.list[i].beforecurrentIndex = index
				this.result[e.name] = item;
			}
			if(Object.keys(this.result).length == this.list.length){
				for(let key in this.result){
					if(this.result[key] && this.result[key]!=''){
						this.canSearch = true
					}
				}
				if(this.canSearch){
					let a = this.info.productSkuList.filter(e => {
						let c = []
						let is = true
						for(let key in this.result){
							if(this.result[key] == e.spData[key]){
								c.push(1)
								
							}else{
								c.push(-1)
							}
							
						}
						if(c.length == Object.keys(this.result).length){
							c.forEach(e=>{
								if(e == -1){
									is = false
									
								}
							})
						}
						
						if(is == true){
							return e
						} 
					});
					console.log(a);
					this.searchResult = a[0]
				}
			}
		
		},
		
		open() {
			// console.log('open');
		},
		close() {
			this.show = false;
			// console.log('close');
		}
	}
};
</script>

<style lang="less" scoped>
.currentClass {
	border: 1px solid #007afc !important;
	background: rgba(0, 122, 252, 0.1) !important;
	color: #007afc;
}
.currentClass2 {
	border: 1px solid #007afc !important;
	background: rgba(0, 122, 252, 0.1) !important;
	color: #007afc;
}
.item_container {
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	.item_item {
		padding: 4px 15px;
		background: #f2f2f2;
		border: 1px solid #f2f2f2;
		border-radius: 14px;
		margin-bottom: 30rpx;
		margin-right: 17rpx;
		font-size: 14px;
		font-weight: 400;
		color: rgba(0, 0, 0, 0.85);
	}
}
.detail_share_box {
	box-sizing: border-box;
	background-color: #fff;
	position: fixed;
	width: 100%;
	padding: 10px 24px;
	bottom: 0;
	display: flex;
	justify-content: space-between;
	image {
		width: 18px;
		height: 18px;
		margin-right: 9px;
	}
	.detail_collect {
		display: flex;
		width: 154px;
		justify-content: center;
		align-items: center;
		height: 38px;
		background: #ffffff;
		box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.05);
		border-radius: 19px;
		border: 1px solid #007afc;
		color: #007afc;
	}
	.detail_share {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 154px;
		height: 38px;
		background: #007afc;
		border-radius: 19px;
		color: #fff;
	}
}
.detail_bottom_detail {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;

	.detail_bottom_detail_item {
		box-sizing: border-box;
		margin-bottom: 15px;
		width: 48%;
		height: 165px;
		background: #edf6ff;
		border-radius: 8px;
		padding: 30px 15px;
		display: flex;
		align-items: center;
		.detail_bottom_detail_item_text {
			font-size: 16px;
			font-family: PingFang-SC-Medium, PingFang-SC;
			font-weight: 500;
			color: #000000;
			line-height: 22px;
			margin-bottom: 20px;
		}
		.detail_bottom_detail_item_look {
			width: 72px;
			height: 28px;
			border-radius: 17px;
			border: 1px solid #f5a623;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 10px;
			font-family: PingFang-SC-Regular, PingFang-SC;
			font-weight: 400;
			line-height: 14px;
		}
	}
}
.detail_bottom {
	padding: 20px 15px;
	box-sizing: border-box;
	margin-bottom: 20px;
	.detail_bottom_text {
		font-size: 18px;
		font-family: PingFangSC-Semibold, PingFang SC;
		font-weight: 600;
		color: rgba(0, 0, 0, 0.85);
		line-height: 25px;
		margin-bottom: 15px;
	}
	.detail_bottom_item_container {
		background: #eeeeee;
		border-radius: 8px;
		padding: 20px 20px 20px 20px;
		margin-bottom: 15px;
		.detail_bottom_item:not(:last-child) {
			margin-bottom: 20px;
		}
		.detail_bottom_item {
			display: flex;
			align-items: center;
			.detail_bottom_item_1 {
				font-size: 14px;
				font-family: PingFang-SC-Regular, PingFang-SC;
				font-weight: 400;
				color: #8e8e8e;
				line-height: 20px;
				margin-right: 53px;
			}
			.detail_bottom_item_2 {
				font-size: 14px;
				font-family: PingFang-SC-Medium, PingFang-SC;
				font-weight: 500;
				color: rgba(0, 0, 0, 0.85);
				line-height: 20px;
			}
		}
	}
}
.line {
	height: 6px;
	background: #f7f7f7;
}
.detail_middle {
	display: flex;
	flex-direction: column;
	padding: 12px 15px 20px 15px;

	.detail_middle_title {
		font-size: 18px;
		font-family: PingFangSC-Semibold, PingFang SC;
		font-weight: 600;
		color: rgba(0, 0, 0, 0.85);
		line-height: 25px;
		margin-bottom: 8px;
	}
	.detail_middle_price {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-family: PingFangSC-Semibold, PingFang SC;
		margin-bottom: 32px;
		:nth-child(1) {
			font-size: 16px;
			font-weight: 600;
			color: #007afc;
			line-height: 22px;
		}
		:nth-child(2) {
			font-size: 12px;
			font-weight: 400;
			color: #a6a6a6;
			line-height: 17px;
		}
	}
	.detail_middle_type {
		display: flex;
		.detail_middle_type_sss {
			font-size: 14px;
			font-family: PingFang-SC-Regular, PingFang-SC;
			font-weight: 400;
			color: rgba(0, 0, 0, 0.45);
			line-height: 20px;
			margin-right: 24px;
		}
		.detail_middle_type_xxx {
			flex: 1;
			display: flex;
			align-items: center;
			justify-content: space-between;
			font-size: 14px;
			font-family: PingFang-SC-Regular, PingFang-SC;
			font-weight: 400;
			color: rgba(0, 0, 0, 0.85);
			line-height: 20px;
		}
	}
}
.indicator-num {
	width: 52px;
	height: 25px;
	background: rgba(0, 0, 0, 0.4);
	border-radius: 13px;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #fff;
	font-size: 13px;
}
</style>
