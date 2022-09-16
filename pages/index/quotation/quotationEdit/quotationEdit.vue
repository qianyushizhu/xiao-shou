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
		
		 <u-swipe-action>
		        <u-swipe-action-item
		          :options="options"
				   v-for="(item,index) in quotationDetail.areaProducts"
				   :key="index"
				  @click='del(item.quotationAreaId)'
		        >
		          <view
		          	class=""
		          	style="
		          font-size: 18px;
		          font-family: PingFangSC-Semibold, PingFang SC;
		          font-weight: 600;
		          margin-bottom: 20px;
		          color: rgba(0,0,0,0.85);"
		          >
		          	{{item.areaName}}
		          </view>
		          <view class="" style="height: 86px;display: flex;box-sizing: border-box;margin-bottom: 30px;">
		          	<image src="../../../../static/logo.png" style="width: 86px;height: 86px;margin-right: 10px;" mode=""></image>
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
		          				单门更衣柜
		          			</view>
		          			<view
		          				class=""
		          				style="
		          			font-size: 10px;
		          			font-family: DIN-Regular, DIN;
		          			font-weight: 400;
		          			color: #A6A6A6;"
		          			>
		          				¥100.00
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
		          				<view class="" style="margin-bottom: 4px;">白色/金属</view>
		          				<view class="">300*600*1200</view>
		          			</view>
		          			<view class=""><u-number-box v-model="value" @change="valChange"></u-number-box></view>
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
		          				¥200.00
		          			</view>
		          		</view>
		          	</view>
		          </view>
		        </u-swipe-action-item>
		      </u-swipe-action>
		
		<view class="" v-if="areaList.length!==0">
			<view class="" style="padding: 0 15px;box-sizing: border-box;" v-for="(item,index) in areaList">
				
			</view>
		</view>
		
		<view class="center" @click="addArea" style="width: 124px;
						height: 42px;
						font-size: 14px;
						font-weight: 400;
						color: #FFFFFF;
						margin: 0 auto;
						background: #007AFC;
						border-radius: 21px;">
			新建区域
		</view>
		<view class="xxx" style="position: fixed;height: 230px;width: 100%;box-sizing: border-box;bottom: 0;padding: 0 15px;z-index: 99;">
			<view class="">
				<u--form labelPosition="left" :model="model"   ref="form1">
					<u-form-item label="生产日期 (天)" borderBottom ref="item1"><u--input v-model="model.day" placeholder="请输入" border="none"></u--input></u-form-item>
					<u-form-item label="保质期 (年)" borderBottom ref="item1"><u--input v-model="model.year" placeholder="请输入" border="none"></u--input></u-form-item>
					
					
				</u--form>
			</view>
			<view class="" style="height: 64px;background: #FFFFFF;padding:  12px 0 8px 0;display: flex;align-items: center;justify-content: space-between;">
				<view class="">
					<view class="" style="
					font-size: 14px;
					font-weight: 600;
					margin-bottom: 5px;
					color: #007AFC;">
						优惠价：300.00
						<text style="
						font-size: 12px;
						font-weight: 400;
						color: #007AFC;
						margin-left: 15px;
						">修改</text>
					</view>
					<view class="" style="font-size: 14px;
									font-weight: 400;
									color: #A6A6A6;">
						总价：300.00
					</view>
				</view>
				<view class="center" style="
				height: 42px;
				width: 120px;
				font-size: 14px;
				font-weight: 400;
				color: #FFFFFF;
				background: #007AFC;
				border-radius: 21px;">
					确认
				</view>
			</view>
		</view>
		<u-toast ref="uToast"></u-toast>
	</view>
</template>

<script>
import { getQuotation ,getArea,AddArea,deleteArea} from '../../../../common/request.js';
export default {
	data() {
		return {
			keyword: '新建报价单',
			value: '',
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
			quotationDetail: {}
		};
	},
	onLoad(opitons) {
		this.quotationId = opitons.quotationId || 1;

		this.quotationId && this.getQuotation();
	},
	methods: {
		toadd(){
			console.log(1)
			uni.navigateTo({
				url:'/pages/index/productInformation/productInformation'
			})
		},
		del(quotationAreaId){
			uni.showModal({
				title:'请确认是否要删除！',
				success: () => {
					deleteArea(quotationAreaId).then(res=>{
						res.code == 0
						? (() => {this.$refs.uToast.show({ type: 'default', title: '默认主题', message: '删除成功' });this.getQuotation()})()
						: this.$refs.uToast.show({ type: 'default', title: '默认主题', message: res.msg });
					})
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
				res.code == 0 ? (this.quotationDetail = res.data) : this.refs.uToast.show({ type: 'default', title: '默认主题', message: res.msg });
			});
		},
		valChange(e) {
			console.log('当前值为: ' + e.value);
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
		height: 390px !important;
		overflow: scroll;
	}
	
	 
	
	  
</style>
