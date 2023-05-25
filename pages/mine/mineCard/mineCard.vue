<template>
	<view style="padding: 10px 15px;">
		<id-card :info="info"></id-card>
	</view>
</template>

<script>
	import {card} from '@/common/request.js'
	import {idCard} from '@/commpents/idcard.vue'
	export default {
		components:{
			idCard
		},
		data() {
			return {
				info:{}
			};
		},
		onLoad() {
			this.card()
		},
		methods:{
			card(){
				card(uni.getStorageSync('userId')).then(res=>{
					res.code == 0
					 ? (()=>{
						 res.data.headLogo = this.$img + res.data.headLogo
						this.info = res.data
					 })()
					 :  uni.$u.toast(res.msg);
				})
			}
		}
	}
</script>

<style lang="less">

</style>
