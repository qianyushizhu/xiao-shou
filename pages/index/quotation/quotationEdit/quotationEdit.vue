<template>
	<view>
		<view
			class=""
			style="padding: 10px 15px;
		display: flex;align-items: center;justify-content: space-between;
		margin-bottom: 10px;
		"
		>
			<u-search :showAction="false" placeholder="新建报价单" v-model="quotationDetail.title"></u-search>
			<view class="" style="width: 20px;"></view>
			<view
			@click="toadd"
				class="center"
				style="width: 78px;
					height: 32px;
					background: #007AFC;
					font-size: 12px;
					font-weight: 500;
					color: #FFFFFF;
					border-radius: 16px;"
			>
				添加产品
			</view>
		</view>
		
		
		<view class="" style="height: 900rpx ;overflow: scroll;">
			<view class="" v-for="(item,index) in quotationDetail.areaProducts"  :key="index">
				<view
					class="aaa"
					style="
					display: flex;
					justify-content: space-between;
					align-items: center;
					padding: 0 15px;
				font-size: 18px;
				font-weight: 600;
				margin-bottom: 20px;
				color: rgba(0,0,0,0.85);"
				>
				<view class="" style="width: 120px;">
					<u--input type="text"  v-model="item.areaName" @blur='areachange($event,item)' ></u--input>
				</view>
				<u-icon name="trash-fill" @click="delArea(item)" color="#2979ff" size="23"></u-icon>
				</view>
				 <u-swipe-action v-if="item.productList.length!==0">
				        <u-swipe-action-item
						v-for="(e,i) in item.productList"
						:key="i"
				          :options="options"
						  @click='delareaProduct(e.quotationProductId)'
				        >
				         
				          <view class=""   style="height: 86px;display: flex;box-sizing: border-box;margin-bottom: 30px;" >
				          	<image :src="e.picture" style="width: 86px;height: 86px;margin-right: 10px;" mode=""></image>
				          	<view class="" style="display: flex;flex-direction: column;flex: 1;justify-content: space-between;">
				          		<view class="" style="display: flex;justify-content: space-between;align-items: center;">
				          			<view
				          				class=""
				          				style="
				          			font-size: 14px;
				          			font-family: PingFang-SC-Regular, PingFang-SC;
				          			font-weight: 400;
				          			color: rgba(0,0,0,0.85);"
				          			>
				          				{{e.productName}}
										
				          			</view>
				          			<view
				          				class=""
				          				style="
				          			font-size: 10px;
				          			font-family: DIN-Regular, DIN;
				          			font-weight: 400;
				          			color: #A6A6A6;"
				          			>
				          				¥{{e.price}}
				          			</view>
				          		</view>
				          		<view class="" style="display: flex;justify-content: space-between;align-items: center;">
				          			<view
				          				class=""
				          				style="font-size: 12px;
				          			font-family: PingFang-SC-Regular, PingFang-SC;
				          			font-weight: 400;
				          			color: rgba(0,0,0,0.45);"
				          			>
				          			<!-- 	<view class="" style="margin-bottom: 4px;">白色/金属</view>
				          				<view class="">300*600*1200</view> -->
				          			</view>
				          			<view class=""><u-number-box v-model="e.productNum" @change="valChange($event,e)"></u-number-box></view>
				          		</view>
				          			
				          		<view class="" style="display: flex;justify-content: space-between;align-items: center;">
				          			<view class=""></view>
				          			<view
				          				class=""
				          				style="font-size: 10px;
				          		font-family: DIN-Bold, DIN;
				          		font-weight: bold;
				          		color: #007AFC;"
				          			>
				          				¥{{e.currentPrice}}
				          			</view>
									
				          		</view>
				          	</view>
				          </view>
				        </u-swipe-action-item>
				      </u-swipe-action>
					  
					  <view class="center" style="min-height: 400rpx;" v-else>
							<image src="../../../../static/lj_icon_quesheng@2x.png" class="queshen"  mode=""></image>
					  </view>
			</view>
		</view>
		
		
		
		<!-- <view class="" v-if="areaList.length!==0">
			<view class="" style="padding: 0 15px;box-sizing: border-box;" v-for="(item,index) in areaList">
				
			</view>
		</view> -->
		
		<view class="center" @click="addArea" style="width: 124px;
						height: 42px;
						font-size: 14px;
						font-weight: 400;
						color: #FFFFFF;
						margin: 0 auto;
						background: #000;
						border-radius: 21px;">
			新建区域
		</view>
		<view class="xxx" style="height: 230px;width: 100%;box-sizing: border-box;bottom: 0;padding: 0 15px;z-index: 99;">
			<view class="">
				<u--form labelPosition="left" :model="model"   ref="form1">
					<u-form-item label="生产日期 (天)" borderBottom ref="item1"><u--input v-model="quotationDetail.productPeriod" placeholder="请输入" border="none"></u--input></u-form-item>
					<u-form-item label="保质期 (年)" borderBottom ref="item1"><u--input v-model="quotationDetail.qualityPeriod" placeholder="请输入" border="none"></u--input></u-form-item>
					
					
				</u--form>
			</view>
			<view class="" style="height: 64px;background: #FFFFFF;padding:  12px 0 8px 0;display: flex;align-items: center;justify-content: space-between;">
				<view class="">
					<view class="" style="
					font-size: 14px;
					font-weight: 600;
					margin-bottom: 5px;
					color: #007AFC;">
						优惠价：{{quotationDetail.discountPrice}}
						<text @click="updatePrice" style="
						font-size: 12px;
						font-weight: 400;
						color: #007AFC;
						margin-left: 15px;
						">修改</text>
					</view>
					<view class="" style="font-size: 14px;
									font-weight: 400;
									color: #A6A6A6;">
						总价：{{quotationDetail.totalPrice}}
					</view>
				</view>
				<button class="center" open-type="share" @click="saveQuotation" style="
				height: 42px;
				width: 120px;
				font-size: 14px;
				margin:0;
				font-weight: 400;
				color: #FFFFFF;
				background: #007AFC;
				border-radius: 21px;">
				
					发送
				</button>
			</view>
		</view>
		<u-toast ref="uToast"></u-toast>
		<u-popup :show="show"  :round="10" mode="center"  @close="close" >
		        <view style="padding: 20px 20px  0 20px;display: flex;align-items: center;flex-direction: column;width: 70vw;box-sizing: border-box;">
		            <view class="" style="margin-bottom: 30px;
					font-size: 16px;
					font-weight: 600;
					color: rgba(0,0,0,0.85);">
		            	修改优惠价
		            </view>
					<view class="" style="margin-bottom: 15px;width: 100%;">
						<view class="" style="margin-bottom: 10px;">
							<u--input
							   placeholder="请输入内容"
							   border="surround"
													type='number'
							   v-model="quotationDetail.discountPrice"
							 ></u--input>
						</view>
						 <view class="" style="
						 font-size: 12px;
						 font-weight: 400;
						 color: #A6A6A6;">
						 	请填写优惠后的价格
						 </view>
					</view>
					
					  <view class="" style="width: 100%;display: flex;justify-content: space-between;font-size: 14px;font-weight: 400;">
					  	<view class="center" @click="show = false" style="width: 45%;
						height: 36px;color: #A6A6A6;
						border-radius: 18px;
						border: 1px solid #A6A6A6;">
					  		取消
					  	</view>
						<view class="center" @click="show = false" style="width: 45%;
						height: 36px;
						background: #007AFC;color: #FFFFFF;
						border-radius: 18px;">
							确认
						</view>
					  </view>
		        </view>
			</u-popup>
	</view>
</template>

<script>
import { getQuotation ,getArea,AddArea,deleteArea,delareaProduct,saveQuotation,editArea } from '../../../../common/request.js';
export default {
	data() {
		return {
			keyword: '新建报价单',
			show:false,
			discountPrice:100,
			value: 1,
			totalPrice: 0,
			model:{
				day:'',
				year:''
			},
			  options: [{
			                    text: '删除',
								 style: {
								                        backgroundColor: '#f56c6c'
								                    }
			                }],
			areaList: [],
			quotationId: '',
			quotationDetail: {
				"discountPrice": '',
				"areaProducts":[
					{
						productList:[
							{
								productNum:0
							}
						]
					}
				],
				 "productList": 'b',
				 "productPeriod": '',
				 "qualityPeriod": '',
				 "title": '',
				 "totalEmpowerPrice": 0,
				 "totalPrice": ''
			},
			beforedetail:{},
			ischange:false
		};
	},
	onLoad(opitons) {
		this.quotationId = opitons.quotationId || 1;
		uni.setStorageSync('quotationId',opitons.quotationId)
	},
	onShow() {
		this.quotationId && this.getQuotation();
	},
	onShareAppMessage(res) {
	       return {
	           title:this.quotationDetail.title,
	           path:'/pages/index/quotation/quotationEdit/quotationEdit?quotationId='+this.quotationId ,
	           imageUrl:'',
	           desc:uni.getStorageSync('userInfo').username+'的报价单',
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
	onUnload() {
		this.saveQuotation()
		// for(let i in this.beforedetail){
		// 			this.bijiao(this.beforedetail[i],this.quotationDetail[i])
		// }
		// if(this.ischange){
		// 	wx.showModal({
		// 		title: '提示',
		// 		content: '请确认是否要保存报价单信息',
		// 		success:(res)=> {
		// 			if (res.confirm) {
		// 				this.saveQuotation()
		// 		 } else if (res.cancel) {
		// 				uni.$u.toast('已取消保存');
		// 			}
		// 		}
		// 	});
		// }
		
	},
	methods: {
		bijiao(a,b){
			if(typeof a == 'object'){
				console.log(a,b)
				if(Array.isArray(a)){
					if(Object.prototype.toString.call(a) == '[object Object]'){
						for(let i in a){
							for(let e in b){
								if(a[i] != b[i]){
									this.ischange = true
									return
								}
							}
						}
					}else{
						a.forEach(e=>{
							b.forEach(i=>{
								if(a[e]!= b[i]){
									this.ischange = true
									return
								}
							})
						})
					}
					
				}
				
			}else{
				// console.log(a,b)
				if(a != b){
					this.ischange =  true
					return
				}
			}
		},
		areachange(e,item){
			console.log(e)
			editArea({
				areaName:e,
				quotationAreaId:item.quotationAreaId
			}).then(res=>{
				res.code == 0
				 ? (()=>{
					
				 })()
				 :  uni.$u.toast(res.msg);
			})
		},
		 saveQuotation(){
			 let b = []
			 this.quotationDetail.areaProducts.forEach(e=>{
				 e.productList.forEach(el=>{
					 b.push(el)
				 })
			 })
			 console.log(b)
			 let a = {
				  "discountPrice": this.quotationDetail.discountPrice,
				   "productList": b,
				   "productPeriod": this.quotationDetail.productPeriod,
				   "qualityPeriod": this.quotationDetail.qualityPeriod,
				   "title": this.quotationDetail.title,
				   "totalEmpowerPrice": 0,
				   "totalPrice": this.quotationDetail.totalPrice
			 }
			 saveQuotation(this.quotationId,a).then(res=>{
				 res.code == 0
				  ? (()=>{
						// uni.$u.toast('保存成功')
						
				  })()
				  :  uni.$u.toast(res.msg);
			 })
		 },
		  close() {
			this.show = false
			// console.log('close');
		  },
		updatePrice(){
			this.show = true
		},
		delareaProduct(e){
			uni.showModal({
				title:'请确认是否要删除！',
				success: (res) => {
					 if (res.confirm) {
					     delareaProduct(e).then(res=>{
					     	res.code == 0
					     	? (() => {this.$refs.uToast.show({ type: 'default', title: '默认主题', message: '删除成功' });this.getQuotation()})()
					     	: this.$refs.uToast.show({ type: 'default', title: '默认主题', message: res.msg });
					     })
					    } else if (res.cancel) {
					      console.log('用户点击取消')
					    }
					
				},
				fail :() => {
					console.log(22);
				}
			})
		},
		toadd(){
			uni.navigateTo({
				url:'/pages/index/productInformation/productInformation?quotationId='+this.quotationId
			})
		},
		delArea(item){
			uni.showModal({
				title:'请确认是否要删除！',
				success: (res) => {
					 if (res.confirm) {
					      deleteArea(item.quotationAreaId).then(res=>{
					      	res.code == 0
					      	? (() => {this.$refs.uToast.show({ type: 'default', title: '默认主题', message: '删除成功' });this.getQuotation()})()
					      	: this.$refs.uToast.show({ type: 'default', title: '默认主题', message: res.msg });
					      })
					    } else if (res.cancel) {
					      console.log('用户点击取消')
					    }
					
				},
				fail :() => {
					console.log(22);
				}
			})
		},
		addArea() {
			AddArea(this.quotationId).then(res => {
				res.code == 0 
				? (() => {this.$refs.uToast.show({ type: 'default', title: '默认主题', message: '成功添加区域' }) ; this.getQuotation()})()
				: this.$refs.uToast.show({ type: 'default', title: '默认主题', message: res.msg });
			});
		},
		getArea() {
			getArea(this.quotationId).then(res => {
				res.code == 0 ? (this.areaList = res.data) : this.refs.uToast.show({ type: 'default', title: '默认主题', message: res.msg });
			});
		},
		getQuotation() {
			getQuotation(this.quotationId).then(res => {
				res.code == 0
				 ? (()=>{
					 let a = 0
					 this.beforedetail =JSON.parse(JSON.stringify(res.data))
					 this.quotationDetail = res.data
					this.quotationDetail.areaProducts.forEach(e=>{
						 e.productList.forEach(e=>{
							 e.picture = this.$img+e.picture
							 
						 })
						 if(e.productList.length!=0){
							 e.productList.forEach(ele=>{
								 ele.currentPrice = ele.price * ele.productNum
								  a += ele.currentPrice
							 })
							 this.quotationDetail.totalPrice = a
							 console.log(a)
						 }
					 })
					 console.log(a)
				 })()
				 :  uni.$u.toast(res.msg);
			});
		},
		valChange(e,item) {
			this.quotationDetail.totalPrice = 0
			item.productNum = e.value
			this.quotationDetail.areaProducts.forEach(Element=>{
				Element.productList.forEach(el=>{
					
					el.currentPrice =  el.productNum * el.price
					this.quotationDetail.totalPrice += el.currentPrice
				})
			})
			console.log(this.quotationDetail.totalPrice )
		}
	}
};
</script>

<style lang="scss" scoped>
	/deep/ .u-form-item__body {
		padding: 20px 0 !important;
	}
	/deep/.xxx input {
		text-align: right !important;
		
	}
	/deep/ .xxx .u-form-item__body__right__message {
		text-align: right !important;
	}
	/deep/ .u-form-item__body__left {
		width: auto !important;
	}
	/deep/ .u-swipe-action-item__content {
		padding: 0 15px;box-sizing: border-box;
	}
	
	/deep/ .u-swipe-action  {
		min-height: 200px !important;
	}
	
	// /deep/.aaa input{
	// 	width: 30% !important;
		
	// }
	 
	
	  
</style>
