<template>
	<view>
		 <u-swiper
		                :list="list6"
		                @change="e => currentNum = e.current"
		                :autoplay="false"
						height="375"
		                indicatorStyle="right: 20px"
						imgMode="heightFix"
		        >
		            <view
		                    slot="indicator"
		                    class="indicator-num"
		            >
		                <text class="indicator-num__text">{{ currentNum + 1 }}/{{ list6.length }}</text>
		            </view>
		        </u-swiper>
				<view class="detail_middle">
					<view class="detail_middle_title">
						电力轨道（EUBIQ）2022年报价
					</view>
					<view class="detail_middle_price">
						<view class="">
							298.00
						</view>
						<view class="">
							浏览量：48
						</view>
					</view>
					<view class="detail_middle_type">
						<view class="detail_middle_type_sss">
							规格
						</view>
						<view class="detail_middle_type_xxx">
								<view class="">
									请选择规格
								</view>
								<u-icon name="arrow-right" size="12" ></u-icon>
						</view>
						
					</view>
				</view>
				
				<view class="line">
					
				</view>
				
				<view class="detail_bottom">
					<view class="detail_bottom_text">
						参数信息
					</view>
					<view class="detail_bottom_item_container">
						<view class="detail_bottom_item" v-for="item in 4">
							<view class="detail_bottom_item_1">
								品牌
							</view>
							<view class="detail_bottom_item_2">
								桂林三花
							</view>
						</view>
					</view>
					<view class="detail_bottom_detail">
						<view class="detail_bottom_detail_item" v-for="item in detailType" :key="item.id" :style="{backgroundColor:item.bgc}">
							<view class="" style="display: flex;flex-direction: column;justify-content: space-between;">
								<view class="detail_bottom_detail_item_text">
									{{item.item}}
								</view>
								<view class="detail_bottom_detail_item_look" :style="{color:item.color,borderColor:item.color}">
									查看
								</view>
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
					<view class="detail_collect">
						<view class="">
							分享
						</view>
					</view>
					<view class="detail_share" @click="join">
						<view class="">
							加入报价单
						</view>
					</view>
				</view>
				
					<u-popup :show="show" :round="10" mode="bottom" @close="close" @open="open" closeable>
						<view style="padding: 30px 15px;background: #FFFFFF;">
				            <view class="" style="display: flex;margin-bottom: 30px;">
				            	<image style="
								width: 100px;
								height: 100px;margin-right: 16px;" src="../../../static/logo.png" mode=""></image>
								<view class="" style="
								font-size: 20px;
								font-weight: 600;
								    display: flex;
								    align-items: flex-end;
								text-align: end;
								color: #007AFC;">
									¥28.00
								</view>
				            </view>
							<view class="" style="
							font-size: 14px;
							font-weight: 500;
							margin-bottom: 15px;
							color: rgba(0,0,0,0.85);">
								款式
							</view>
							<view class="item_container" style="margin-bottom: 25px;">
								<view class="item_item center" v-for="(item,index) in 5" @click="select1(index)" :key="index" :class="index==currentIndex1 ? 'currentClass1' :''">
									白色 单门柜
								</view>
							</view>
							<view class="" style="
							font-size: 14px;
							font-weight: 500;
							margin-bottom: 15px;
							color: rgba(0,0,0,0.85);">
								规格
							</view>
							<view class="item_container" style="margin-bottom: 45px;">
								<view class="item_item center" v-for="(item,index) in 5" @click="select2(index)" :key="index" :class="index==currentIndex2 ? 'currentClass2' :''">
									300*600*1200
								</view>
							</view>
							<view class="center" style="width: 100%;">
								<view class="center" style="
								font-size: 14px;
								width: 315px;
								height: 38px;
								background: #007AFC;
								border-radius: 19px;
								font-weight: 400;
								color: #FFFFFF;
								">
									确定
								</view>
							</view>
						</view>
					</u-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				currentIndex1:1,
				currentIndex2:1,
				show:false,
				detailType:[
					{
						id:1,
						item:'产品细节',
						color:'#007AFC',
						bgc:'#EDF6FF'
					},
					{
						id:2,
						item:'销购指南',
						color:'#D0021B',
						bgc:'#FFF8F9'
					},
					{
						id:3,
						item:'安装指南',
						color:'#F5A623',
						bgc:'#FFF9F0'
					},
					{
						id:4,
						item:'使用&保养',
						color:'#5813FE',
						bgc:'#F7F4FF'
					},
				],
				  list6: [
				                    'https://cdn.uviewui.com/uview/swiper/swiper2.png',
				                    'https://cdn.uviewui.com/uview/swiper/swiper3.png',
				                    'https://cdn.uviewui.com/uview/swiper/swiper1.png',
				                ],
								currentNum:0
			}
		},
		methods: {
			join(){
				this.show = true
			},
			select1(index){
			this.currentIndex1 = index
			},
			select2(index){
			this.currentIndex2 = index
			},
			
			  open() {
			        // console.log('open');
			      },
			      close() {
			        this.show = false
			        // console.log('close');
			      }
		}
	}
</script>

<style lang="less" scoped>
	.currentClass1{
		border: 1px solid #007AFC !important;
		background: rgba(0,122,252,0.1) !important;
		color: #007AFC;
	}
	.currentClass2{
		border: 1px solid #007AFC !important;
		background: rgba(0,122,252,0.1) !important;
		color: #007AFC;
	}
	.item_container{
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		.item_item{
			padding: 4px 15px;
			background: #F2F2F2;
			border: 1px solid #F2F2F2;
			border-radius: 14px;
			margin-bottom: 30rpx;
			margin-right: 17rpx;
			font-size: 14px;
			font-weight: 400;
			color: rgba(0,0,0,0.85);
		}
	}
	.detail_share_box{
		box-sizing: border-box;
		background-color: #fff;
		position: fixed;
		width: 100%;
		padding: 10px 24px;
		bottom: 0;
		display: flex;
		justify-content: space-between;
		image{
			width: 18px;
			height: 18px;
			margin-right: 9px;
		}
		.detail_collect{
			display: flex;
			width: 154px;
			justify-content: center;
			align-items: center;
			height: 38px;
			background: #FFFFFF;
			box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.05);
			border-radius: 19px;
			border: 1px solid #007AFC;
			color: #007AFC;
		}
		.detail_share{
			display: flex;
			justify-content: center;
			align-items: center;
			width: 154px;
			height: 38px;
			background: #007AFC;
			border-radius: 19px;
			color: #fff;
		}
	}
	.detail_bottom_detail{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		
		.detail_bottom_detail_item{
			box-sizing: border-box;
			margin-bottom: 15px;
			width: 165px;
			height: 165px;
			background: #EDF6FF;
			border-radius: 8px;
			padding: 30px 15px;
			display: flex;align-items: center;
			.detail_bottom_detail_item_text{
				font-size: 16px;
				font-family: PingFang-SC-Medium, PingFang-SC;
				font-weight: 500;
				color: #000000;
				line-height: 22px;
				margin-bottom: 20px;
				
			}
			.detail_bottom_detail_item_look{
				width: 72px;
				height: 28px;
				border-radius: 17px;
				border: 1px solid #F5A623;
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
	.detail_bottom{
		padding: 20px 15px;
		box-sizing: border-box;
		margin-bottom: 20px;
		.detail_bottom_text{
			font-size: 18px;
			font-family: PingFangSC-Semibold, PingFang SC;
			font-weight: 600;
			color: rgba(0,0,0,0.85);
			line-height: 25px;
			margin-bottom: 15px;
		}
		.detail_bottom_item_container{
			background: #EEEEEE;
			border-radius: 8px;
			padding: 20px 20px 20px 20px;
			margin-bottom: 15px;
			.detail_bottom_item:not(:last-child){
				margin-bottom: 20px;
			}
			.detail_bottom_item{
				display: flex;
				align-items: center;
				.detail_bottom_item_1{
					font-size: 14px;
					font-family: PingFang-SC-Regular, PingFang-SC;
					font-weight: 400;
					color: #8E8E8E;
					line-height: 20px;
					margin-right: 53px;
				}
				.detail_bottom_item_2{
					font-size: 14px;
					font-family: PingFang-SC-Medium, PingFang-SC;
					font-weight: 500;
					color: rgba(0,0,0,0.85);
					line-height: 20px;
					
				}
			}
		}
		
		
	}
	.line{
		height: 6px;
		background: #F7F7F7;
	}
	.detail_middle{
		display: flex;
		flex-direction: column;
		padding: 12px 15px 20px 15px;
		
		.detail_middle_title{
			font-size: 18px;
			font-family: PingFangSC-Semibold, PingFang SC;
			font-weight: 600;
			color: rgba(0,0,0,0.85);
			line-height: 25px;
			margin-bottom: 8px;
		}
		.detail_middle_price{
			display: flex;
			justify-content: space-between;
			align-items: center;
			font-family: PingFangSC-Semibold, PingFang SC;
			margin-bottom: 32px;
			:nth-child(1){
				font-size: 16px;
				font-weight: 600;
				color: #007AFC;
				line-height: 22px;
			}
			:nth-child(2){
				font-size: 12px;
				font-weight: 400;
				color: #A6A6A6;
				line-height: 17px;
			}
		}
		.detail_middle_type{
			display: flex;
			.detail_middle_type_sss{
				font-size: 14px;
				font-family: PingFang-SC-Regular, PingFang-SC;
				font-weight: 400;
				color: rgba(0,0,0,0.45);
				line-height: 20px;
				margin-right: 24px;
			}
			.detail_middle_type_xxx{
				flex: 1;
				display: flex;
				align-items: center;
				justify-content: space-between;
				font-size: 14px;
				font-family: PingFang-SC-Regular, PingFang-SC;
				font-weight: 400;
				color: rgba(0,0,0,0.85);
				line-height: 20px;
			}
		}
	}
.indicator-num{
	width: 52px;
	height: 25px;
	background: rgba(0,0,0,0.4);
	border-radius: 13px;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #fff;
	font-size: 13px;
}
</style>
