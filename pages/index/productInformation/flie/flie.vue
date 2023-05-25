<template>
	<view style="padding:10px;box-sizing: border-box;min-height: 80vh;">
		<dSelect  :companyId='companyId' :quotationId='quotationId' :type='type'></dSelect>
	</view>
</template>

<script>
	import {dSelect} from '@/commpents/DSelect.vue'
	import {companyEmpowerFolders,companyEmpowerProducts} from '@/common/request.js'
	export default {
		components:{
			dSelect
		},
		data() {
			return {
				companyId:'',
				list:[],
				type:0,
				quotationId:''
			};
		},
		onLoad(op) {
			this.companyId = op.companyId ? op.companyId : ''
			this.quotationId = op.quotationId ? op.quotationId : ''
			
			// this.companyEmpowerFolders()
		},
		methods:{
			
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
