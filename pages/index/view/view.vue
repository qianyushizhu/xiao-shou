<template>
	<view>
		<view class="" v-html="detail">
			
		</view>
	</view>
</template>

<script>
	import {productdetail} from '@/common/request.js'
	export default {
		data() {
			return {
				detail:'',
				productId:'',
				type:''
			}
		},
		onLoad(op) {
			this.productId = op.productId
			this.type = op.type
			this.productdetail()
		},
		methods: {
			replacrImg(detailText) {
			                detailText = detailText.replace(/<img[^>]*>/gi, function(match, capture) {
			                    return match.replace(/(style="(.*?)")|(width="(.*?)")|(height="(.*?)")/ig,
			                        'style="max-width:100%;height:auto;"') // 替换style
			                });
			                return detailText;
			},
			productdetail(){
				productdetail(this.productId,this.type).then(res=>{
					res.code == 0
					 ? (()=>{
						 
						this.detail = this.replacrImg(res.data.content) 
					 })()
					 :  uni.$u.toast(res.msg);
				})
			}
		}
	}
</script>

<style>

</style>
