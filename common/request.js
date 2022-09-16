const API_BASE_URL = 'http://192.168.2.157:8081'
// const API_BASE_URL = 'https://wx.c-fol.cn'
const pathMsg = ""

// 登录接口
var request = (url, method, data) => {
  let token = uni.getStorageSync('token') || ''
  let header = {
    'Content-Type': 'application/json',
    'token': token
  }
  let _url = API_BASE_URL + pathMsg + url
  return new Promise((resolve, reject) => {
    uni.request({
      url: _url,
      method: method,
      data: data,
      header: header,
      success(res) {
        // console.log(request);
        // token失效
		
        if (res.data.code == 11) {
          if (uni.getStorageSync('token')) {
            uni.clearStorageSync()
            uni.showModal({
              title: '提示',
              content: 'token已过期,请重新登录',
              cancelText: '取消',
              success: (res) => {
                if (res.confirm) {
                  uni.navigateTo({
                    url:'/pages/login/login'
                  })
                } else {
                  console.log('else', res)
                }
              }
            })
          }
        } else {
          resolve(res.data)
        }
        // 请求出成功,关闭弹框

      },
      fail(error) {
        console.log(error)
        // 请求失败
        uni.showToast({
          icon: 'none',
          title: error.errMsg,
        })

        reject(error)
      },
      complete(aaa) {
        // 加载完成
      }
    })
  })
}

// 重新登录换取token
// var getNewToken = () => {
//   if(!uni.getStorageSync('account')){
//     uni.showToast({
//       mask:true,
//       icon:'none',
//       title: '您的账号信息已过期,请重新登录',
//       duration:1000,
//       success:()=>{
//         setTimeout(() => {
//           uni.reLaunch({
//           url: '../login/login',
//         })
//         }, 1000);

//       }
//     })

//     return
//   }

//   if(!uni.getStorageSync('password')){
//     uni.showToast({
//       mask:true,
//       icon:'none',
//       title: '您的账号信息已过期,请重新登录',
//       duration:1000,
//       success:()=>{
//         setTimeout(() => {
//           uni.reLaunch({
//           url: '../login/login',
//         })
//         }, 1000);

//       }
//     })

//     return
//   }

//   return new Promise((resolve, reject) => {
//     let _url = API_BASE_URL + pathMsg + 'Login/login'
//     uni.request({
//       url: _url,
//       method: 'post',
//       data: {
//         userName: uni.getStorageSync('account'),
//         password: uni.getStorageSync('password'),
//         version_code: '1800'
//       },
//       header: {
//         'Content-Type': 'application/json',
//         'Device-Type': 'PAD'
//       },
//       success(res) {
//         console.log(res);
//         // token失效
//         uni.setStorageSync('token', res.data.data.token)
//         uni.setStorageSync('nickName', res.data.data.nickName)
//         uni.setStorageSync('userId', res.data.data.userId)
//         uni.setStorageSync('mobile', res.data.data.mobile)
//         uni.setStorageSync('shopName', res.data.data.agent.agent_name)
//         resolve(res)

//         // request(url, method, data)
//       },
//       fail(error) {
//         reject()
//         console.error('uni', err);
//       },
//       complete(aaa) {
//         // 加载完成
//       }
//     })
//   })



// }


/**
 * 小程序的promise没有finally方法，自己扩展下
 */
Promise.prototype.finally = function(callback) {
  var Promise = this.constructor;
  return this.then(
    function(value) {
      Promise.resolve(callback()).then(
        function() {
          return value;
        }
      );
    },
    function(reason) {
      Promise.resolve(callback()).then(
        function() {
          throw reason;
        }
      );
    }
  );
}

module.exports = {
  request,
  // 报价单系列
  // 创建报价单
  addQuotation: (data) => {
    return request('/quotation', 'post', data) //登陆
  },
  editArea: (data) => {
    return request('/quotation/area', 'put', data) //登陆
  },
  deleteArea: (data) => {
    return request('/quotation/area/'+data, 'delete', data) //登陆
  },
  getArea: (data) => {
    return request('/quotation/area/'+data, 'get', data) //登陆
  },
  AddArea: (data) => {
    return request('/quotation/area/'+data, 'post', data) //登陆
  },
  getQuotationList: (data) => {
    return request('/quotation/list', 'get', data) //登陆
  },
  setRemark: (data) => {
    return request('/quotation/setRemark', 'put', data) //登陆
  },
  getQuotation: (data) => {
    return request('/quotation/'+data, 'get', data) //登陆
  },
 
  saveQuotation: (data) => {
    return request('/quotation', 'put', data) //登陆
  },
  delQuotation: (data) => {
    return request('/quotation/'+data, 'delete', data) //登陆
  },
  
  phoneCode: (data) => {
    return request('/sms/phoneCode', 'post', data) //登陆
  },
  codeLogin: (data) => {
    return request('/auth/codeLogin', 'post', data) //登陆
  },
  
  
  getUserInfo: (data) => {
    return request('/userInfo/'+ data, 'get', data) //登陆
  },
  putUserInfo: (data) => {
    return request('/userInfo/'+ data, 'put', data) //登陆
  },
  getUploadToken: (data) => {
    return request('/qiniu/getUploadToken', 'get', data) //登陆
  },
  intro: (data) => {
    return request('/intro/'+ data, 'put', data) //登陆
  },
  company: (data) => {
    return request('/company/list', 'get', data) //登陆
  },
  
  companyEmpowerFolders: (data) => {
    return request('/folder/companyEmpowerFolders', 'get', data) //登陆
  },
  companyEmpowerProducts: (data) => {
    return request('/folder/companyEmpowerFolders', 'get', data) //登陆
  },
  
  getgrouplist: (data) => {
    return request('/group/list', 'get', data) //登陆
  },
  getfolderlist: (data) => {
    return request('/folder/list', 'get', data) //登陆
  },
  
  getproductList: (data) => {
    return request('/folder/productList', 'get', data) //登陆
  },

 
}
