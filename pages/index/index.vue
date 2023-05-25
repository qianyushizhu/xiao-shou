<template>
	<view class="content" style="position: relative;">
		
		<view class="" v-if="show" style="position: absolute;top: 0;left: 0;width: 100%;height: 100%;z-index: 19999;background-color: #fff;">
			<view style="display: flex;flex-direction: column;align-items: center;">
					<image src="../../static/xxx.png" style="width: 750rpx;height: 750rpx;margin-top: 150rpx;margin-bottom: 80rpx;" mode=""></image>
					<view class="" style="margin-bottom: 100rpx;font-size: 36rpx;
			font-family: PingFangTC-Semibold, PingFangTC;
			font-weight: 600;
			color: #678AFE;">
						属于每一位销售者自己的管理工具
					</view>
					<view class="center" @click="tologin" style="
					width: 690rpx;
					height: 90rpx;
					font-size: 30rpx;
					font-family: PingFangSC-Regular, PingFang SC;
					font-weight: 400;
					color: #FFFFFF;
					line-height: 42rpx;
					background: #678AFE;
					border-radius: 8rpx;">
						登陆/注册
					</view>
					
					<div class="login_bottom">
					<u-checkbox-group v-model="checked">
						<u-checkbox  activeColor="#1275F8" ></u-checkbox>
					</u-checkbox-group>
						注册/登录表示同意
						<span style="color: #1275F8;" @click="gotoText('https://fyfile.wave100.cn/policy/%E9%9A%90%E7%A7%81%E6%94%BF%E7%AD%96.docx')">《隐私政策》</span><span>与</span><span style="color: #1275F8;" @click="gotoText('https://fyfile.wave100.cn/policy/%E7%94%A8%E6%88%B7%E5%8D%8F%E8%AE%AE.docx')">《用户协议》</span>
					</div>
				</view>
		</view>
			<view class="" style="height: 380px;background-color: #fff;">
				<view class="" style="height: 235px;position: relative;margin-bottom: 30px;">
					<view class="index_top">
						<view class="index_top_middle">
							<view class="index_title">
								飞云企服
							</view>
							
							<image v-if="info" :src="info.headLogo" class="image_yuan" mode=""></image>
							<image v-else src="../../static/tc_icon_touxiang@2x.png" class="image_yuan" mode=""></image>
							<view v-if="info" class="" style="text-align: center;font-size: 14px;font-weight: 550;letter-spacing: 1px;margin-bottom: 15px;">
								{{info.username}}
							</view>
							<view v-else @click="toLogin" class="" style="text-align: center;font-size: 14px;font-weight: 550;letter-spacing: 1px;margin-bottom: 15px;">
								点我登录
							</view>
							
							
							<view class="" @click="enter" style="display: flex;flex-direction: column;align-items: center;position: absolute;left: 0;top: 20%;">
								<image src="../../static/shaoyishao.png" style="width: 25px;height: 25px;margin-bottom: 5px;" mode=""></image>
								<view class="" style="
								font-size: 10px;
								color: rgba(255,255,255,0.75);
								line-height: 14px;">
									扫一扫
								</view>
							</view>
							
							
						</view>
						
					</view>
					<view class="" @click='tocard' style="width: 39px;height: 39px;border-radius: 50%;position: absolute;left: 50%;transform: translateX(-50%);
					bottom: -10px;background-color: #fff;display: flex;justify-content: center;align-items: center;z-index: 99;">
						<image src="../../static/tc_icon_xiaoshou@2x.png" style="width: 20px;height: 20px;" mode=""></image>
					</view>
				</view>
				
				<view class="index_top_bottom">
					<view class="index_top_item" @click="toProduct">
						<image src="../../static/tc_icon_baojia@2x.png" mode=""></image>
						<view class="">
							产品资料
						</view>
					</view>
					<view class="index_top_item" @click="toQuotation">
						<image src="../../static/tc_icon_chanpin@2x.png" mode=""></image>
						<view class="">
							急速报价
						</view>
					</view>
				</view>
			</view>
		
			
			<view class="mine_bottom">
				<view class="text" style="margin-bottom: 20px;">
					<text>我的新用户</text>
				</view>
				<template v-if="newList.length!==0">
					<view class="index_xiaoshou"  v-for="(item,index) in newList" :key="index" @click="toUser(item.groupId)">
						<view class="index_xiaoshou_item_top" >
							<view class="index_xiaoshou_item_title">
								{{item.name}}
							</view>
							<view class="index_xiaoshou_item_icon">
								<view class="" style="display: flex;justify-content: center;position: relative;">
									<image class="unHiddenImgae" :src="e.headLogo" v-for="(e,index) in item.lastMemberList.slice(0,3)" :key="index"  mode=""></image>
									<view class="" 
									 style="height: 60rpx;visibility: hidden;"
									  :style="{width:item.lastMemberList.length==1 ? '30rpx' 
									  : item.lastMemberList.length==2 ? '56rpx'
									  :'90rpx'
									  }">
										
									</view>
								</view>
								
								<view class="">共{{item.memberNum}}人</view>
							</view>
						
						</view>
						<view class="" style="
						font-size: 14px;
						margin-bottom: 20px;
						font-family: PingFang-SC-Regular, PingFang-SC;
						font-weight: 400;
						color: rgba(0,0,0,0.85);
						line-height: 20px;">
							授权产品：{{item.productNum}}
						</view>
						
						
					</view>
				</template>
				
				
				<view class="center" v-else style="margin-bottom: 15px;margin-top: 50px;flex-direction: column;">
					<image src="/static/lj_icon_quesheng@2x.png" class="queshen" mode=""></image>
					
				</view>
					
				<view class="text" style="margin-bottom: 20px;">
					<text>我的用户分组</text>
				</view>
				<template v-if="oldList.length!==0">
					<view class="index_xiaoshou" v-for="(item,index) in oldList" :key="index" @click="toUser(item.groupId)">
						<view class="index_xiaoshou_item_top" >
							<view class="index_xiaoshou_item_title">
								{{item.name}}
							</view>
							<view class="index_xiaoshou_item_icon">
								<view class="" style="display: flex;justify-content: center;position: relative;">
									<image class="unHiddenImgae" :src="e.headLogo" v-for="(e,index) in item.lastMemberList.slice(0,3)" :key="index"  mode=""></image>
									<view class="" 
									 style="height: 60rpx;visibility: hidden;"
									  :style="{width:item.lastMemberList.length==1 ? '30rpx' 
									  : item.lastMemberList.length==2 ? '56rpx'
									  :'90rpx'
									  }">
										
									</view>
								</view>
								
								<view class="">共{{item.memberNum}}人</view>
							</view>
						</view>
						<view class="" style="
						font-size: 14px;
						margin-bottom: 20px;
						font-family: PingFang-SC-Regular, PingFang-SC;
						font-weight: 400;
						color: rgba(0,0,0,0.85);
						line-height: 20px;">
							授权产品：{{item.productNum}}
						</view>
						<view class="" style="display: flex;justify-content: space-between;">
							<view class="">
							</view>
							<view class="" style="width: 74px;
							height: 28px;
							float: right;
							display: flex;align-items: center;
							justify-content: center;
							font-size: 12px;
							font-family: PingFang-SC-Medium, PingFang-SC;
							font-weight: 500;
							color: #FFFFFF;
							line-height: 17px;
							background: #007AFC;
							border-radius: 14px;">
									移动分组
								</view>
						</view>
					</view>	
				</template>
				<view class="center" v-else style="margin-bottom: 15px;margin-top: 50px;flex-direction: column;">
					<image src="/static/lj_icon_quesheng@2x.png" class="queshen" mode=""></image>
					
				</view>
			</view>
			
			
	</view>
</template>

<script>
	import {getUserInfo,getgrouplist,groupMemberalllist,groupMember} from '@/common/request.js'
	export default {
		data() {
			return {
				title: 'Hello',
				info:{},
				newList:[],
				oldList:[],
				currentpage:1,
				checked:'',
				show:true
			}
		},
		onLoad(op) {
			//在此函数中获取扫描普通链接二维码参数
			console.log(op)
			if(op){
				if(op.q){
				  let q = decodeURIComponent(op.q);
				  let whole = q.split('?')[1]
				  let key = whole.split('=')[0]
				  let value = whole.split('=')[1]
				  if(key == 'id'){
					  uni.setStorageSync('needId',value)
				  }else if(key == 'companyId'){
					  uni.setStorageSync('needCompanyId',value)
				  }else if(key == 'saleUserId'){
					  uni.setStorageSync('needSaleUserId',value)
				  }
				 
				  
				}
			}
			
			if (!uni.getStorageSync('token')) {
				this.show = true
			}else{
				this.show = false
				this.getgrouplist()
			}
			if(uni.getStorageSync('needId')){
				uni.showModal({
				  title: "添加好友",
							showCancel:false,
							confirmColor:'#000',
				  content: "是否要添加该用户",
				  success: (res) => {
				    if (res.confirm) {
				   groupMember({
				   	saleUserId:uni.getStorageSync('userId'),
				   	userId:uni.getStorageSync('needId')
				   }).then(res=>{
				   	res.code == 0
				   	 ? (()=>{
				   		 uni.$u.toast('添加成功');
				   		 this.currentPage = 1
				   		 this.getgrouplist()
				   	 })()
				   	 : (()=>{
				   		 uni.$u.toast(res.msg);
				   	 })()
				   	  
				   })
				    }
				  }
				})
			}
			
			  
		},
		onShow() {
			if(uni.getStorageSync('userInfo')){
				this.info = uni.getStorageSync('userInfo')
			}
			
			
		},
		onPullDownRefresh() {
			
			this.newList=[]
			this.oldList=[]
			this.getgrouplist();
		},
		
		onReachBottom() {
			if( this.status == 'nomore') return false
			else this.status = 'loading'
			this.currentPage = ++this.currentPage;
			this.getgrouplist();
		},
		methods: {
			gotoText(a){
				uni.downloadFile({
				     url: a,      //要预览的PDF的地址
				     success: function (res) {
				       if (res.statusCode === 200) {   //成功
				         var Path = res.tempFilePath //返回的文件临时地址，用于后面打开本地预览所用
				         uni.openDocument({
				           filePath: Path, //要打开的文件路径
				           success: function (res) {
				             console.log('打开PDF成功');
				           }
				         })
				       }
				     },
				     fail: function (res) {
				       console.log(res); 
				    },
				})
			},
			tologin(){
				if(!this.checked){
					 uni.$u.toast('请先勾选用户协议与政策');
					 return
				}
				uni.navigateTo({
					url:'/pages/login/wxlogin/wxlogin'
				})
			},
			enter(){
				if(uni.getStorageSync('userId')){
					// 获取uQRCode实例
					wx.scanCode({
					  success :(res)=> {
						if(res.errMsg == 'scanCode:ok'){
							groupMember({
								saleUserId:uni.getStorageSync('userId'),
								userId:res.result.split('id=')[1]
							}).then(res=>{
								res.code == 0
								 ? (()=>{
									 uni.$u.toast('添加成功');
									 this.currentPage = 1
									 this.getgrouplist()
									 this.$forceUpdate()
								 })()
								 :  uni.$u.toast(res.msg);
							})
							
						}
					  }
					})
				}else{
					uni.navigateTo({
						url:'/pages/login/login',
						success: () => {
							uni.$u.toast('请先登录');
						}
					})
				}
				
			},
			tocard(){
				if (!uni.getStorageSync('token')) {
				 uni.showModal({
				   title: "授权登录",
				 			showCancel:false,
				 			confirmColor:'#000',
				   content: "您尚未授权登录,请先授权登录",
				   success: (res) => {
				     if (res.confirm) {
				      uni.navigateTo({
				       url:'/pages/login/login'
				      })
				     }
				   }
				 })
				  return
				}
				uni.navigateTo({
					url:'/pages/index/card/card'
				})
			},
			
			getgrouplist(){
				getgrouplist({
					pageNum:this.currentpage,
					pageSize:10,
					creatorId:uni.getStorageSync('userId')
				}).then(res=>{
					res.code == 0
					 ? (()=>{
						 if(this.currentpage == 1){
							 
							 this.newList = res.data.records.filter(e=> e.enableChange==1)
							 this.newList.forEach(e=>{
								 if(e.lastMemberList.length < 3){
									 if(e.lastMemberList.length==0){
										for(let i = 0;i<3;i++){
										 e.lastMemberList.push({
										 	headLogo:'/static/tc_icon_touxiang@2x.png'
										 })
										} 
									 }
									 else{
										 e.lastMemberList.forEach(ele=>{
											 ele.headLogo = this.$img+ele.headLogo
										 })
									 }
								 }else{
									 e.lastMemberList.forEach(ele=>{
										ele.headLogo = this.$img+ele.headLogo
									 })
								 }
							 })
						 }
						 this.oldList =  this.oldList.concat(res.data.records.filter(e=> e.enableChange==0))
						this.oldList.forEach(e=>{
								 if(e.lastMemberList.length < 3){
									 if(e.lastMemberList.length==0){
										for(let i = 0;i<3;i++){
										 e.lastMemberList.push({
											headLogo:'/static/tc_icon_touxiang@2x.png'
										 })
										} 
									 }
									 else{
										 e.lastMemberList.forEach(ele=>{
											 ele.headLogo = this.$img+ele.headLogo
										 })
									 }
								 }else{
									 e.lastMemberList.forEach(ele=>{
										ele.headLogo = this.$img+ele.headLogo
									 })
								 }
						})
						 if (this.oldList.length == res.data.total-1) {
						 	 this.status = 'nomore';
						 }
					 })()
					 :  (()=>{
						 if(res.code == 4){
							 uni.$u.toast('请先登录');
						 }else{
							 uni.$u.toast(res.msg);
						 }
					 })()
				})
			},
			getUserInfo(){
				getUserInfo(uni.getStorageSync('userId')).then(res=>{
					res.code == 0
					 ? (()=>{
						 res.data.headLogo = this.$img + res.data.headLogo
						uni.setStorageSync('userInfo',res.data)
						this.info = res.data
					 })()
					 :  uni.$u.toast(res.msg);
				})
			},
			toLogin(){
				uni.navigateTo({
					url:'/pages/login/login'
				})
			},
			toUser(groupId){
				uni.navigateTo({
					url:'user/user?groupId='+ groupId
				})
			},
			toProduct(){
				if (!uni.getStorageSync('token')) {
				 uni.showModal({
				   title: "授权登录",
				 			showCancel:false,
				 			confirmColor:'#000',
				   content: "您尚未授权登录,请先授权登录",
				   success: (res) => {
				     if (res.confirm) {
				      uni.navigateTo({
				       url:'/pages/login/login'
				      })
				     }
				   }
				 })
				  return
				}
				uni.navigateTo({
					url:'productInformation/productInformation'
				})
			},
			
			toQuotation(){
				if (!uni.getStorageSync('token')) {
				 uni.showModal({
				   title: "授权登录",
				 			showCancel:false,
				 			confirmColor:'#000',
				   content: "您尚未授权登录,请先授权登录",
				   success: (res) => {
				     if (res.confirm) {
				      uni.navigateTo({
				       url:'/pages/login/login'
				      })
				     }
				   }
				 })
				  return
				}
				uni.navigateTo({
					url:'quotation/quotation'
				})
			},
			gotoshop(){
				uni.navigateTo({
					url:'shop/shop'
				})
			}
		}
	}
</script>

<style scoped lang="less">
	.index_top_bottom{
		display: flex;justify-content: space-around;
	}
	.index_top_item{
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 172px;
		height: 100px;
		background: #F3F9FF;
		border-radius: 4px;
		font-size: 14px;
		font-family: PingFang-SC-Regular, PingFang-SC;
		font-weight: 400;
		color: #000000;
		image{
			width: 30px;
			height: 30px;
			margin-bottom: 5px;
		}
	}
	.mine_bottom{
		background: #F2F2F2;
		padding: 30px 15px;
		min-height:60vh;
		box-sizing: border-box;
	}
	.index_xiaoshou_item_top{
	display: flex;
	justify-content: space-between;
	align-items: center;
		margin-bottom: 15px;
		
	}
	.index_xiaoshou_item_title{
		font-size: 18px;
		font-family: PingFangSC-Semibold, PingFang SC;
		font-weight: 600;
		color: rgba(0,0,0,0.85);
		line-height: 25px;
	}
		
	
.hiddenImgae{
	visibility: hidden;
}
.index_xiaoshou_item_icon{
	font-size: 24rpx;
	font-family: PingFang-SC-Regular, PingFang-SC;
	font-weight: 400;
	color: rgba(0,0,0,0.85);
	display: flex;
	align-items: center;
	image{
		border-radius: 50%;
	}
	image:first-child{
		position: relative;
		
	}
	image:nth-child(2){
		position: absolute;
		left: 25%;
	}
	image:nth-child(3){
		position: absolute;
		left: 50%;
	}
	
}
	.index_xiaoshou{
		height: 290rpx;
		background: #FFFFFF;
		box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.05);
		border-radius: 4px;
		box-sizing: border-box;
		padding: 34rpx 20rpx 50rpx 30rpx;
		display: flex;
		flex-direction: column;
		margin-bottom: 20rpx;
		image{
			width: 60rpx;
			height: 60rpx;
			
		}
	}
	.login_bottom {
		display: flex;
		width: 100%;
		position: fixed;
		bottom: 100rpx;
		left: 50%;
		justify-content: center;
		transform: translateX(-50%);
		font-size: 0.86rem;
		font-weight: 400;
		color: #a6a6a6;
	}
	.text{
		font-size: 18px;
		font-family: PingFangSC-Semibold, PingFang SC;
		font-weight: 600;
		color: rgba(0,0,0,0.85);
	}
	.index_type_container{
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20px;
		box-sizing: border-box;
		font-size: 10px;
		font-family: PingFang-SC-Regular, PingFang-SC;
		font-weight: 400;
		color: #000000;
	}
	.index_type_item{
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		height: 60px;
	}
	.index_search_right{
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
	.index_search{
		width: 100%;
		display: flex;
		align-items: center;
		box-sizing: border-box;
		margin-bottom: 15px;
	}
.content{
	box-sizing: border-box;
	position: relative;
	overflow-x: hidden;
}
/deep/.u-search{
	flex: 1 !important;
	width: 70% !important;
	
}
.image_yuan{
	width: 68px;
	height: 68px;
	margin-bottom: 10px;
}
.index_top{
  height: 230px;
  width: 180%;
	background: linear-gradient(180deg, #007AFC 0%, #588AFB 54%, #00ABFE 100%);
  position: absolute;
  left: -40%; z-index: 1;
  border-radius: 0 0 50% 50%;
  padding-left: 45%;
  padding-right: 45%;
  box-sizing: border-box;
  display: flex;justify-content: center;
  
}
.index_top_middle{
	width: 100%;
	position: relative;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
}
.index_title{
	margin-top: 110rpx;
	text-align: center;
	font-size: 18px;
	font-family: PingFangSC-Semibold, PingFang SC;
	font-weight: 550;
	color: #FFFFFF;
	line-height: 25px;
	margin-bottom: 20px;
}
</style>
