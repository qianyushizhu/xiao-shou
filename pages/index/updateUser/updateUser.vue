<template>
	<view style="background-color: #fff;" class="content">
		<view class="index_top">
			<view class="index_top_middle">
				<view class="index_title">首页</view>
				<view class="index_search"></view>
				<image :src="info.headLogo" class="image_yuan" mode=""></image>
				<view class="">{{info.username}}</view>
			</view>
		</view>
		<view class="" style="height: 235px;"></view>

		<view class="" style="padding: 0 15px;">
			<u--form labelPosition="left" :model="info" ref="form1">
				<u-form-item label="备注名" borderBottom ref="item1"><u--input v-model="remark" placeholder="请输入内容" border="none"></u--input></u-form-item>
				<u-form-item label="当前分组" borderBottom ref="item1" @click='openPicker'>
					<u--input v-model="name" disabled disabledColor="#ffffff" placeholder="请选择分组" border="none"></u--input>
					<u-icon slot="right" color="#A3A3A3" name="arrow-right"></u-icon>
				</u-form-item>
				<!-- <u-form-item label="所在地" borderBottom ref="item1">
					<u--input v-model="model.userInfo.sex" disabled disabledColor="#ffffff" placeholder="请选择" border="none"></u--input>
					<u-icon slot="right" color="#A3A3A3" name="arrow-right"></u-icon>
				</u-form-item>
				<u-form-item label="授权产品" borderBottom ref="item1">
					<u--input v-model="model.userInfo.sex" disabled disabledColor="#ffffff" placeholder="请选择性别" border="none"></u--input>
					<u-icon slot="right" color="#A3A3A3" name="arrow-right"></u-icon>
				</u-form-item> -->
			</u--form>
		</view>
		<view class="" style="position: fixed;bottom: 70px;left: 50%;transform: translateX(-50%);">
			<view
			@click="groupMemberdelete"
				class="center"
				style="
			width: 315px;
			height: 42px;
			font-size: 14px;
			margin-bottom: 20px;
			font-weight: 400;
			color: #FFFFFF;
			background: #007AFC;
			border-radius: 21px;"
			>
				解除授权
			</view>
			<view
			@click="groupMemberupdate"
				class="center"
				style="
			width: 315px;
			height: 42px;
			font-size: 14px;
			font-weight: 400;
			color: #007AFC;
			border-radius: 21px;
			border: 1px solid #007AFC;"
			>
				提交
			</view>
		</view>
		<u-picker :show="show" :columns="columns" keyName="name"  @confirm='center' :defaultIndex='index' @cancel='show=false'></u-picker>
	</view>
</template>

<script>
	import {getgrouplist,groupMemberdelete,groupMemberupdate} from '@/common/request.js'
export default {
	data() {
		return {
			info:{},
			show:false,
			columns:[],
			index:0,
			name:'',
			remark:'',
			groupId:''
			
		};
	},
	onLoad(op){
		this.info = JSON.parse(op.info)
		this.name = this.info.name
		this.remark = this.info.remark
		this.groupId = this.info.groupId
		this.getgrouplist()
	},
	methods: {
		openPicker(){
			this.show = true
		},
		center(w){
			console.log(w)
			this.name = w.value[0].name
			this.groupId = w.value[0].groupId
			this.show = false
		},
		groupMemberupdate(){
			groupMemberupdate(this.info.linkId,{
				groupId:this.groupId,
				remark:this.remark,
				userId:uni.getStorageSync('userId'),
			}).then(res=>{
				res.code == 0
				 ? (()=>{
					uni.navigateBack({
						delta:1,
						success: () => {
							let page = getCurrentPages()
							let cur = page[page.length-1]
							console.log(cur)
							cur.$vm.list = []
							cur.$vm.groupMemberlist()
							uni.$u.toast('修改成功')
						}
					})
				 })()
				 :  uni.$u.toast(res.msg);
			})
		},
		groupMemberdelete(){
			groupMemberdelete(this.info.linkId).then(res=>{
				res.code == 0
				 ? (()=>{
					uni.navigateBack({
						delta:1,
						success: () => {
							uni.$u.toast('解除成功')
						}
					})
				 })()
				 :  uni.$u.toast(res.msg);
			})
		},
		
		getgrouplist(){
			getgrouplist({
				pageNum:1,
				pageSize:100,
				creatorId:uni.getStorageSync('userId')
			}).then(res=>{
				res.code == 0
				 ? (()=>{
					 this.columns[0] = res.data.records
					 let a =[]
					 a = this.columns[0].map(e=>e.name)
					 console.log(a)
					 this.index = [a.indexOf(this.info.name)]
					 console.log(this.index)
				 })()
				 :  uni.$u.toast(res.msg);
			})
		},
	}
};
</script>

<style lang="less" scoped>
/deep/ .u-form-item__body {
	padding: 20px 0 !important;
}
/deep/ input {
	text-align: right !important;
}
/deep/ .u-form-item__body__right__message {
	text-align: right !important;
}
/deep/ .u-form-item__body__left {
	width: auto !important;
}

.index_search_right {
	display: flex;
	flex-direction: column;
	align-items: center;
	font-size: 10px;
	font-family: PingFang-SC-Regular, PingFang-SC;
	font-weight: 400;
	color: #000000;
	line-height: 14px;
	padding: 0 10px;
	height: 100%;
	justify-content: space-between;
}
.index_search {
	width: 100%;
	display: flex;
	align-items: center;
	box-sizing: border-box;
	margin-bottom: 15px;
}
.content {
	box-sizing: border-box;
	position: relative;
	overflow-x: hidden;
}
/deep/.u-search {
	flex: 1 !important;
	width: 70% !important;
}
.image_yuan {
	width: 68px;
	height: 68px;
	margin-bottom: 10px;
}
.index_top {
	height: 230px;
	width: 180%;
	background: linear-gradient(180deg, #007afc 0%, #588afb 54%, #00abfe 100%);
	position: absolute;
	left: -40%;
	z-index: 1;
	border-radius: 0 0 50% 50%;
	padding-left: 45%;
	padding-right: 45%;
	box-sizing: border-box;
	display: flex;
	justify-content: center;
}
.index_top_middle {
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
}
.index_title {
	margin-top: 110rpx;
	text-align: center;
	font-size: 18px;
	font-family: PingFangSC-Semibold, PingFang SC;
	font-weight: 550;
	color: #ffffff;
	line-height: 25px;
	margin-bottom: 20px;
}
</style>
