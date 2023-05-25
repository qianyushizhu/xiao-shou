<template>
	<view>
		<view class="" style="padding: 15px 15px;" v-if="list.length!=0">
			<companyitem  v-for="item in list" :key="item"  :info="item" :quotationId='quotationId'></companyitem>
		</view>
		
		<view class="center" v-else style="margin-bottom: 15px;margin-top: 50px;flex-direction: column;">
			<image src="/static/lj_icon_quesheng@2x.png" class="queshen" mode=""></image>
			
		</view>
	</view>
</template>

<script>
	import {companyitem} from '../../../commpents/companyitem.vue'
	import { company} from '@/common/request.js'
	export default {
		components:{
			companyitem
		},
		data() {
			return {
				currentPage:1,
				status:'loadmore',
				list:[],
				quotationId:''
			};
		},
		onLoad() {
			this.company()
		},
		
		onReachBottom() {
			console.log(1)
			if(this.status == 'nomore'){
				uni.$u.toast('没有数据了')
				return
			}
				this.currenPage = ++this.currenPage
				this.company()
				
		},
		methods:{
			
			company(){
				company({
					pageNum:this.currentPage,
					pageSize:10,
				}).then(res=>{
					res.code == 0
					 ? (()=>{
						this.list = this.list.concat(res.data.records)
						this.list.forEach(e=>{
							e.logo =  this.$img+ e.logo 
						})
						res.data.total == this.list.length ? this.status = 'nomore' : this.status = 'loading';
					 })()
					 :  uni.$u.toast(res.msg);
				})
			},
		}
	}
</script>

<style lang="less">

</style>
