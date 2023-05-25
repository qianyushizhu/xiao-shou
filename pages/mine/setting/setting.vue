<template>
	<view class="mine_bottom">
		<view class="mine_bottom_item">
			<view class="">头像</view>
			<view class="" style="display: flex;align-items: center;" @click="udit">
				<image :src="info.headLogo" style="width: 42px;height: 42px;border-radius: 50%;" mode=""></image>
				<u-icon name="arrow-right" color="#A6A6A6" size="15"></u-icon>
			</view>
		</view>
		<view class="mine_bottom_item">
			<view class="">用户名</view>
			<input placeholder="请输入内容" v-model="info.username" />
		</view>

		<view class="mine_bottom_item" >
			<view class="">手机号</view>
			<input placeholder="请输入内容" v-model="info.phone" />
		</view>
		
		<view class="mine_bottom_item" style="border: none;" @click="loginOut">
			<view class="">
				退出登录
			</view>
			<u-icon name="arrow-right" color="#A6A6A6" size="15"></u-icon>
		</view>
	</view>
</template>

<script>
import { getUploadToken, updateuserInfo ,getUserMsg} from '@/common/request.js';
export default {
	data() {
		return {
			info: {
				phone: '',
				headLogo: '',
				username: '',
			},
			tuichu:1
		};
	},
	onLoad() {
		this.info = uni.getStorageSync('userInfo');
	},
	
	onUnload() {
		let a = uni.getStorageSync('userInfo');
		
		if(this.tuichu == 1){
			if (this.info.phone != a.phone || this.info.headLogo != a.headLogo || this.info.username != a.username) {
				wx.showModal({
					title: '提示',
					content: '请确认是否要保存用户信息',
					success:(res)=> {
						if (res.confirm) {
							updateuserInfo( 
								
								this.info.userId,
								{
									city: this.info.city,
									headLogo: this.info.headLogo.split('/')[3],
									phone: this.info.phone,
									province: this.info.province,
									username: this.info.username
								}
								
							).then(res => {
								res.code == 0
									? (() => {
										this.getUserMsg()
											uni.$u.toast('保存成功');
									  })()
									: uni.$u.toast(res.msg);
							});
					 } else if (res.cancel) {
							uni.$u.toast('已取消保存');
						}
					}
				});
			}
		}
		
	},
	methods: {
		loginOut(){
			uni.showModal({
				title: '退出登录',
				content: '您是否要退出登录吗',
				cancelText: '取消',
				confirmColor: '#007AFC',
				success:(res)=> {
					if (res.confirm) {
						this.tuichu = 2
						uni.clearStorageSync()
						uni.reLaunch({
							url:'/pages/login/login',
							success: () => {
							}
						})
					} else if (res.cancel) {
						console.log('用户点击取消');
					}
				}
			});
		},
		getUserMsg(){
			getUserMsg(uni.getStorageSync('userId')).then(res=>{
				res.code == 0
				 ? (()=>{
					 res.data.headLogo = this.$img + res.data.headLogo
					uni.setStorageSync('userInfo',res.data)
					let pages = getCurrentPages();  //获取所有页面栈实例列表
					let nowPage = pages[ pages.length - 1];  //当前页页面实例
					let prevPage = pages[ pages.length - 2 ];  //上一页页面实例
					console.log(nowPage)
					nowPage.$vm.aaa()
				 })()
				 :  uni.$u.toast(res.msg);
			})
		},
		udit() {
			wx.chooseMedia({
				count: 1,
				mediaType: ['image'],
				sourceType: ['album', 'camera'],
				maxDuration: 30,
				camera: 'back',
				success: res => {
					console.log(res.tempFiles[0].tempFilePath);
					this.uploadToQiniu(res.tempFiles[0].tempFilePath);
				}
			});
		},
		uploadToQiniu(filePath) {
			//图片直接上传到七牛云，获取七牛云链接

			var that = this;
			getUploadToken().then(res => {
				wx.uploadFile({
					url: 'https://up.qiniup.com', //分华北区，华东区之类的，大家自己注意下

					name: 'file',

					filePath: filePath,

				 header: {
						'Content-Type': 'multipart/form-data'
					},

					formData: {
						token: res.data.token,
						key:res.data.fid
					},

					success: function(res) {
						let a = JSON.parse(res.data)
						that.info.headLogo = that.$img+a.key
						console.log(that.info.headLogo.split('/')[3])
					},

					fail: function(res) {
						uni.$u.toast('上传失败');
					}
				});
			});
		}
	}
};
</script>

<style lang="less">
/deep/ input {
	text-align: right !important;
}

.mine_bottom {
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	font-size: 15px;
	font-family: PingFang-SC-Regular, PingFang-SC;
	font-weight: 400;
	color: #262626;
	line-height: 21px;
	letter-spacing: 3rpx;
	padding: 0 15px;
}

.mine_bottom_item {
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px solid #d9d9d9;
	padding: 20px 0;
}
</style>
