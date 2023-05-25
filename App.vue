<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
		@import "@/uni_modules/uview-ui/index.scss";
		.image_yuan{
			border-radius: 50%;
		}
		*{
			box-sizing: border-box;
		}
		.center{
			display: flex;
			justify-content: center;
			align-items: center;
		}
		.queshen{
			width: 180rpx;
			height: 180rpx;
		}
</style>
