<template>
	<view>
		<view class="" style="margin-bottom: 10px;display: flex;justify-content: center;align-items: center;">
			<u-tabs :list="list1"
			font-size='34'
			 :activeStyle="{
				  color: '#000',
				 fontWeight: 'bold',
				 transform: 'scale(1.15)',
			 }"
			 :lineColor="{
				 
			 				  backgroundColor: '#007AFC',
			 }"
			  :current="current"
			  @change="change"
			 ></u-tabs>
		</view>
		<view class="" >
			<view class="" style="padding: 0 15px;margin-bottom: 15px;" :class="current == 1 ? 'currentMargin' :''">
				<dInput></dInput>
			</view>
			<view class="" v-if="current == 0" style="padding: 0 15px;">
				<companyitem  v-for="item in list" :key="item"  :info="item" :quotationId='quotationId'></companyitem>
			</view>
			<view class="" v-else >
				<dSelect  :type='1' :quotationId='quotationId' ></dSelect>
			</view>
		</view>
	</view>
	
</template>


<script>
	import {dInput} from '../../../commpents/DInput.vue'
	import {dSelect} from '../../../commpents/DSelect.vue'
	import {companyitem} from '../../../commpents/companyitem.vue'
	import { company,getgrouplist} from '@/common/request.js'
	export default {
		components:{
			dInput,
			dSelect,
			companyitem
		},
		data() {
			return {
				 list1: [{
				                    name: '上游',
				                }, {
				                    name: '自传',
				                }],
								current:0,
								currentIndex:0,
								list:[],
								currentPage:1,
								status:'loadmore',
								quotationId:''
			}
		},
		onLoad(opitons) {
			this.quotationId = opitons.quotationId 
			this.company()
		},
		onReachBottom() {
				this.currenPage = ++this.currenPage
				this.company()
				
		},
		methods: {
			change(e){
				this.current = e.index
				console.log(e)
			},
			
			
			
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
			select(index) {
				this.currentIndex = index
			},
		
		toFile(item) {
			uni.navigateTo({
				url:'./flie/flie?companyId='+ item.companyId
			})
		},
			gotocategory() {
				uni.navigateTo({
					url:'../category/category'
				})
			}
		}
	}
</script>

<style lang="less" scoped>

.currentMargin{
	margin-bottom: 15px;
}

</style>
