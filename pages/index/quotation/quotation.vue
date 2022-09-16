<template>
	<view style="background: #F2F2F2;min-height: 100vh;">
		<view class="" style="padding: 10px 15px;display: flex;align-items: center;justify-content: space-between;background-color: #fff;">
			<u-search :showAction="false" placeholder="日照香炉生紫烟" v-model="keyword"></u-search>
			<view class="" style="width: 50px;"></view>
			<view
				@click="toQuotationEdit"
				class="center"
				style="width: 78px;
					height: 32px;
					background: #007AFC;
					font-size: 12px;
					font-weight: 500;
					color: #FFFFFF;
					border-radius: 16px;"
			>
				新建报价单
			</view>
		</view>
		<view
			class=""
			style="font-size: 18px;
				font-family: PingFangSC-Semibold, PingFang SC;
				font-weight: 600;
				color: rgba(0,0,0,0.85);
				box-sizing: border-box;
				margin: 10px 0 0 15px;
				line-height: 25px;
				margin-bottom: 20px;
		"
		>
			方案列表
		</view>
		<u-swipe-action>
			<u-swipe-action-item :options="options" v-for="(item, i) in list" :key="i" @click='del(item.quotationId)'>
				<view
				@click="toEdit(item.quotationId)"
					class=""
					style="display: flex;flex-direction: column;border-radius: 4px ;
		          	border-left: 6px solid #007AFC;
					
		          	"
				>
					<view
						class=""
						style="display: flex;padding: 15px;box-sizing: border-box;
		          		height: 84px;
		          		flex-direction: column;
		          		background: #FFFFFF;
		          		border-radius: 4px;
		          		"
					>
						<view
							class=""
							style="
		          			font-size: 16px;
		          			margin-bottom: 15px;
		          			font-family: PingFangSC-Semibold, PingFang SC;
		          			font-weight: 600;
		          			color: rgba(0,0,0,0.85);"
						>
							{{ item.title }}
						</view>
						<view class="" style="display: flex;justify-content: space-between;align-items: center;">
							<view
								class=""
								style="
		          				font-size: 12px;
		          				font-family: PingFang-SC-Regular, PingFang-SC;
		          				font-weight: 400;
		          				color: #A6A6A6;"
							>
								{{ item.createDate }}
							</view>
							<view
								class=""
								style="
		          				font-size: 12px;
		          				font-family: PingFang-SC-Regular, PingFang-SC;
		          				font-weight: 400;
		          				color: #A6A6A6;"
							>
								访问数：2
							</view>
							<view
								class=""
								style="
		          				font-size: 14px;
		          				font-family: DIN-Bold, DIN;
		          				font-weight: bold;
		          				color: #007AFC;
		          				line-height: 17px;"
							>
								{{ item.totalPrice }}
							</view>
						</view>
					</view>
				</view>
			</u-swipe-action-item>
		</u-swipe-action>
		<u-toast ref="uToast"></u-toast>
		<u-loadmore :status="status" :loading-text="loadingText" :loadmore-text="loadmoreText" :nomore-text="nomoreText" />
	</view>
</template>

<script>
import { addQuotation, getQuotationList ,delQuotation} from '../../../common/request.js';
export default {
	data() {
		return {
			keyword: '',
			list: [],
			options: [
				{
					text: '删除',
					style: {
						backgroundColor: '#f56c6c'
					}
				}
			],
			currentPage: 1,
			finished: false,
			status: 'loadmore',
			loadingText: '努力加载中',
			loadmoreText: '轻轻上拉',
			nomoreText: '实在没有了',
			total:1
		};
	},
	onLoad() {
		this.getQuotationList();
	},
	onReachBottom() {
		if( this.status == 'nomore') return false
		else this.status = 'loading'
		
		this.currentPage = ++this.currentPage;
		this.getQuotationList();
	},
	methods: {
		toEdit(quotationId){
			uni.navigateTo({
				url: './quotationEdit/quotationEdit?quotationId=' + quotationId
			});
		},
		del(quotationAreaId){
			uni.showModal({
				title:'请确认是否要删除！',
				success: () => {
					delQuotation(quotationAreaId).then(res=>{
						res.code == 0
						? (() => {this.$refs.uToast.show({ type: 'default', title: '默认主题', message: '删除成功' });this.getQuotationList()})()
						: this.$refs.uToast.show({ type: 'default', title: '默认主题', message: res.msg });
					})
				},
				fail :() => {
					console.log(22);
				}
			})
		},
		getQuotationList() {
			getQuotationList({
				pageNum: this.currentPage,
				pageSize: 10
			}).then(res => {
				res.code == 0
					? (() => {
							this.list = this.list.concat(res.data.records);
							if (this.list.length == res.data.total) {
								 this.status = 'nomore';
							}
					  })()
					: this.$refs.uToast.show({ type: 'default', message: res.msg });
			});
		},
		toQuotationEdit() {
			addQuotation().then(res => {
				if (res.code == 0 && res.data.quotationId) {
					uni.navigateTo({
						url: './quotationEdit/quotationEdit?quotationId=' + res.data.quotationId
					});
				} else {
				}
			});
		}
	}
};
</script>

<style lang="scss" scoped>
/deep/ .u-swipe-action {
	padding: 0 15px;
	box-sizing: border-box;
}
/deep/ .u-swipe-action-item {
	margin-bottom: 10px;
}
</style>
