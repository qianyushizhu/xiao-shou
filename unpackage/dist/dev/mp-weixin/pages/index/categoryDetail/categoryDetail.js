(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/index/categoryDetail/categoryDetail"],{

/***/ 192:
/*!******************************************************************************************!*\
  !*** D:/yuntaixin/销售/main.js?{"page":"pages%2Findex%2FcategoryDetail%2FcategoryDetail"} ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _categoryDetail = _interopRequireDefault(__webpack_require__(/*! ./pages/index/categoryDetail/categoryDetail.vue */ 193));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_categoryDetail.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 193:
/*!*********************************************************************!*\
  !*** D:/yuntaixin/销售/pages/index/categoryDetail/categoryDetail.vue ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _categoryDetail_vue_vue_type_template_id_166b20ae_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./categoryDetail.vue?vue&type=template&id=166b20ae&scoped=true& */ 194);
/* harmony import */ var _categoryDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./categoryDetail.vue?vue&type=script&lang=js& */ 196);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _categoryDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _categoryDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _categoryDetail_vue_vue_type_style_index_0_id_166b20ae_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./categoryDetail.vue?vue&type=style&index=0&id=166b20ae&lang=less&scoped=true& */ 198);
/* harmony import */ var _Porgram_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../Porgram Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 32);

var renderjs





/* normalize component */

var component = Object(_Porgram_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _categoryDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _categoryDetail_vue_vue_type_template_id_166b20ae_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _categoryDetail_vue_vue_type_template_id_166b20ae_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "166b20ae",
  null,
  false,
  _categoryDetail_vue_vue_type_template_id_166b20ae_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/index/categoryDetail/categoryDetail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 194:
/*!****************************************************************************************************************!*\
  !*** D:/yuntaixin/销售/pages/index/categoryDetail/categoryDetail.vue?vue&type=template&id=166b20ae&scoped=true& ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Porgram_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Porgram_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Porgram_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Porgram_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Porgram_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Porgram_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_categoryDetail_vue_vue_type_template_id_166b20ae_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Porgram Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../Porgram Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../Porgram Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../Porgram Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../Porgram Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../Porgram Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./categoryDetail.vue?vue&type=template&id=166b20ae&scoped=true& */ 195);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Porgram_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Porgram_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Porgram_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Porgram_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Porgram_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Porgram_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_categoryDetail_vue_vue_type_template_id_166b20ae_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Porgram_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Porgram_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Porgram_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Porgram_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Porgram_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Porgram_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_categoryDetail_vue_vue_type_template_id_166b20ae_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Porgram_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Porgram_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Porgram_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Porgram_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Porgram_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Porgram_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_categoryDetail_vue_vue_type_template_id_166b20ae_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Porgram_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Porgram_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Porgram_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Porgram_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Porgram_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Porgram_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_categoryDetail_vue_vue_type_template_id_166b20ae_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 195:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/yuntaixin/销售/pages/index/categoryDetail/categoryDetail.vue?vue&type=template&id=166b20ae&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uSwiper: function () {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-swiper/u-swiper */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-swiper/u-swiper")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-swiper/u-swiper.vue */ 341))
    },
    uIcon: function () {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-icon/u-icon */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-icon/u-icon")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-icon/u-icon.vue */ 318))
    },
    uPopup: function () {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-popup/u-popup */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-popup/u-popup")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-popup/u-popup.vue */ 349))
    },
    uPicker: function () {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-picker/u-picker */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-picker/u-picker")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-picker/u-picker.vue */ 357))
    },
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var g0 = _vm.info.imgs.length
  if (!_vm._isMounted) {
    _vm.e0 = function (e) {
      return (_vm.currentNum = e.current)
    }
    _vm.e1 = function ($event) {
      this.pickershow = true
    }
    _vm.e2 = function ($event) {
      _vm.pickershow = false
    }
  }
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        g0: g0,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 196:
/*!**********************************************************************************************!*\
  !*** D:/yuntaixin/销售/pages/index/categoryDetail/categoryDetail.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Porgram_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Porgram_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Porgram_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Porgram_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Porgram_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_categoryDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Porgram Files/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../Porgram Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../../Porgram Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../Porgram Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../Porgram Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./categoryDetail.vue?vue&type=script&lang=js& */ 197);
/* harmony import */ var _Porgram_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Porgram_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Porgram_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Porgram_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Porgram_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_categoryDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Porgram_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Porgram_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Porgram_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Porgram_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Porgram_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_categoryDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Porgram_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Porgram_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Porgram_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Porgram_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Porgram_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_categoryDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Porgram_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Porgram_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Porgram_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Porgram_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Porgram_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_categoryDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Porgram_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Porgram_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Porgram_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Porgram_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Porgram_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_categoryDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 197:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/yuntaixin/销售/pages/index/categoryDetail/categoryDetail.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ 18));
var _request = __webpack_require__(/*! @/common/request.js */ 165);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default = {
  data: function data() {
    return {
      currentIndex1: -1,
      beforecurrentIndex1: -2,
      currentIndex2: -1,
      beforecurrentIndex2: -2,
      currentIndex3: -1,
      beforecurrentIndex3: -2,
      tipText: '请选择规格',
      show: false,
      pickershow: false,
      loading: false,
      detailType: [{
        id: 1,
        item: '产品细节',
        color: '#007AFC',
        bgc: '#EDF6FF'
      }, {
        id: 3,
        item: '销购指南',
        color: '#D0021B',
        bgc: '#FFF8F9'
      }, {
        id: 5,
        item: '安装指南',
        color: '#F5A623',
        bgc: '#FFF9F0'
      }, {
        id: 2,
        item: '使用&保养',
        color: '#5813FE',
        bgc: '#F7F4FF'
      }],
      list6: [],
      currentNum: 0,
      productId: '',
      info: {},
      beforeSearchList: [],
      nowSearchList: [],
      searchResult: {},
      masklist: [],
      areaList: [],
      columns: [[], []],
      columnData: [],
      defaultIndex: [],
      quotationId: '',
      list: [],
      result: {},
      canSearch: false,
      type: []
    };
  },
  onLoad: function onLoad(op) {
    this.productId = op.productId;
    this.quotationId = op.quotationId ? op.quotationId : '';
    console.log(op);
    this.product();
    this.getQuotationList();
  },
  onShareAppMessage: function onShareAppMessage(res) {
    return {
      title: this.info.productName,
      path: '/pages/index/categoryDetail/categoryDetail?productId=' + this.info.productId + '&quotationId=' + this.quotationId,
      imageUrl: this.$img + this.info.picture,
      desc: this.info.brief,
      content: '',
      success: function success(res) {
        console.log(res);
        uni.showToast({
          title: '分享成功'
        });
      },
      fail: function fail(res) {
        uni.showToast({
          title: '分享失败',
          icon: 'none'
        });
      }
    };
  },
  methods: {
    changeHandler: function changeHandler(e) {
      var _this = this;
      var columnIndex = e.columnIndex,
        index = e.index,
        _e$picker = e.picker,
        picker = _e$picker === void 0 ? this.$refs.uPicker : _e$picker;
      console.log(e);
      if (columnIndex === 0) {
        this.quotationId = this.masklist[index].quotationId;
        this.loading = true;
        (0, _request.getArea)(this.quotationId).then(function (res) {
          res.data.forEach(function (e) {
            e.title = e.areaName;
          });
          _this.columns[1] = res.data;
          console.log(_this.columnData);
          picker.setColumnValues(1, _this.columns[1][0]);
          _this.loading = false;
        });
      }
    },
    // 回调参数为包含columnIndex、value、values
    confirm: function confirm(e) {
      var _this2 = this;
      console.log('confirm', e);
      (0, _request.saveProduct)(this.quotationId, {
        productId: this.productId,
        quotationAreaId: e.value[1].quotationAreaId
      }).then(function (res) {
        res.code == 0 ? function () {
          uni.$u.toast('添加成功');
          var pages = getCurrentPages();
          var isfromedit = false;
          var editIndex = 0;
          pages.forEach(function (e, i) {
            if (e.route == 'pages/index/quotation/quotationEdit/quotationEdit') {
              isfromedit = true;
              editIndex = i;
            }
          });
          console.log(pages.length, isfromedit, editIndex);
          var back = pages.length - (editIndex + 1);
          if (isfromedit) {
            uni.showModal({
              title: '添加成功',
              content: '是否要返回报价单编辑页',
              cancelText: '取消',
              confirmColor: '#007AFC',
              success: function success(res) {
                if (res.confirm) {
                  pages[editIndex].$vm.quotationId = _this2.quotationId;
                  uni.navigateBack({
                    delta: back,
                    success: function success() {
                      uni.$u.toast('添加成功');
                    }
                  });
                } else if (res.cancel) {
                  console.log('用户点击取消');
                }
              }
            });
          }
          // else{
          // 						 uni.showModal({
          // 						 	title: '添加成功',
          // 						 	content: '去往报价单页面看看',
          // 						 	cancelText: '取消',
          // 						 	confirmColor: '#007AFC',
          // 						 	success:(res)=> {
          // 						 		if (res.confirm) {
          // 						 		uni.navigateTo({
          // 						 			url:'/pages/index/quotation/quotationEdit/quotationEdit?quotationId=' + this.quotationId
          // 						 		})

          // 						 		} else if (res.cancel) {
          // 						 			console.log('用户点击取消');
          // 						 		}
          // 						 	}
          // 						 });
          // }
        }() : uni.$u.toast(res.msg);
      });
      this.pickershow = false;
    },
    getQuotationList: function getQuotationList() {
      var _this3 = this;
      (0, _request.getQuotationList)({
        pageNum: 1,
        pageSize: 1000
      }).then(function (res) {
        res.code == 0 ? function () {
          _this3.masklist = res.data.records;
          _this3.columns[0] = _this3.masklist;
          var index1 = 0;
          _this3.masklist.forEach(function (e, i) {
            if (e.quotationId == _this3.quotationId) {
              index1 = i;
            }
          });
          _this3.quotationId = _this3.quotationId != '' ? _this3.quotationId : _this3.masklist[0].quotationId;
          console.log(_this3.quotationId);
          (0, _request.getArea)(_this3.quotationId).then(function (res) {
            res.code == 0 ? function () {
              if (res.data.length !== 0) {
                res.data.forEach(function (e) {
                  e.title = e.areaName;
                });
                _this3.areaList = res.data;
                _this3.columns[1] = _this3.areaList;
                _this3.defaultIndex = [index1, 0];
                console.log(_this3.defaultIndex);
              }
            }() : uni.$u.toast(res.msg);
          });
        }() : _this3.$refs.uToast.show({
          type: 'default',
          message: res.msg
        });
      });
    },
    toH5: function toH5(item) {
      console.log(item);
      uni.navigateTo({
        url: '/pages/index/view/view?productId=' + this.productId + '&type=' + item.id
      });
    },
    enter: function enter() {
      var _this4 = this;
      this.tipText = '';
      this.type.forEach(function (e) {
        _this4.tipText += '  ' + _this4.searchResult.spData[e];
      });
      this.show = false;
    },
    product: function product() {
      var _this5 = this;
      (0, _request.product)(this.productId).then(function (res) {
        res.code == 0 ? function () {
          _this5.info = res.data;
          _this5.list = [];
          var type = [];
          _this5.info.imgs = _this5.info.imgs.split(',').map(function (e) {
            return _this5.$img + e;
          });
          console.log(_this5.info);
          _this5.info.productSkuList.forEach(function (e) {
            e.spData = JSON.parse(e.spData);
            _this5.nowSearchList.push(e.spData);
            for (var key in e.spData) {
              type.push(key);
            }
          });
          type = (0, _toConsumableArray2.default)(new Set(type));
          console.log(type);
          _this5.type = type;
          type.forEach(function (ele) {
            var a = [];
            _this5.info.productSkuList.forEach(function (e) {
              a.push(e.spData[ele]);
            });
            a = (0, _toConsumableArray2.default)(new Set(a));
            _this5.list.push({
              name: ele,
              value: a,
              currentIndex: -1,
              beforecurrentIndex: -2
            });
          });
          console.log(_this5.list);
          _this5.info.productSkuList.forEach(function (e) {
            e.picture = _this5.$img + e.picture;
          });
          _this5.searchResult = _this5.info.productSkuList[0];
        }() : uni.$u.toast(res.msg);
      });
    },
    join: function join() {
      this.show = true;
    },
    select: function select(index, item, e, i) {
      var _this6 = this;
      console.log(index, item, e, i);
      if (index == this.list[i].beforecurrentIndex) {
        this.list[i].currentIndex = -1;
        this.list[i].beforecurrentIndex = -2;
        this.result[e.name] = '';
      } else {
        this.list[i].currentIndex = index;
        this.list[i].beforecurrentIndex = index;
        this.result[e.name] = item;
      }
      if (Object.keys(this.result).length == this.list.length) {
        for (var key in this.result) {
          if (this.result[key] && this.result[key] != '') {
            this.canSearch = true;
          }
        }
        if (this.canSearch) {
          var a = this.info.productSkuList.filter(function (e) {
            var c = [];
            var is = true;
            for (var _key in _this6.result) {
              if (_this6.result[_key] == e.spData[_key]) {
                c.push(1);
              } else {
                c.push(-1);
              }
            }
            if (c.length == Object.keys(_this6.result).length) {
              c.forEach(function (e) {
                if (e == -1) {
                  is = false;
                }
              });
            }
            if (is == true) {
              return e;
            }
          });
          console.log(a);
          this.searchResult = a[0];
        }
      }
    },
    open: function open() {
      // console.log('open');
    },
    close: function close() {
      this.show = false;
      // console.log('close');
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 198:
/*!*******************************************************************************************************************************!*\
  !*** D:/yuntaixin/销售/pages/index/categoryDetail/categoryDetail.vue?vue&type=style&index=0&id=166b20ae&lang=less&scoped=true& ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Porgram_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_Porgram_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_Porgram_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Porgram_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_Porgram_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_Porgram_Files_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_Porgram_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_Porgram_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Porgram_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_categoryDetail_vue_vue_type_style_index_0_id_166b20ae_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Porgram Files/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!../../../../../Porgram Files/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!../../../../../Porgram Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../Porgram Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-2!../../../../../Porgram Files/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--10-oneOf-1-3!../../../../../Porgram Files/HBuilderX/plugins/uniapp-cli/node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-4!../../../../../Porgram Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-5!../../../../../Porgram Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../Porgram Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./categoryDetail.vue?vue&type=style&index=0&id=166b20ae&lang=less&scoped=true& */ 199);
/* harmony import */ var _Porgram_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_Porgram_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_Porgram_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Porgram_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_Porgram_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_Porgram_Files_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_Porgram_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_Porgram_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Porgram_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_categoryDetail_vue_vue_type_style_index_0_id_166b20ae_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Porgram_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_Porgram_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_Porgram_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Porgram_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_Porgram_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_Porgram_Files_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_Porgram_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_Porgram_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Porgram_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_categoryDetail_vue_vue_type_style_index_0_id_166b20ae_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Porgram_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_Porgram_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_Porgram_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Porgram_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_Porgram_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_Porgram_Files_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_Porgram_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_Porgram_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Porgram_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_categoryDetail_vue_vue_type_style_index_0_id_166b20ae_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Porgram_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_Porgram_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_Porgram_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Porgram_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_Porgram_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_Porgram_Files_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_Porgram_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_Porgram_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Porgram_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_categoryDetail_vue_vue_type_style_index_0_id_166b20ae_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Porgram_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_Porgram_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_Porgram_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Porgram_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_Porgram_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_Porgram_Files_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_Porgram_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_Porgram_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Porgram_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_categoryDetail_vue_vue_type_style_index_0_id_166b20ae_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 199:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-2!./node_modules/postcss-loader/src??ref--10-oneOf-1-3!./node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/yuntaixin/销售/pages/index/categoryDetail/categoryDetail.vue?vue&type=style&index=0&id=166b20ae&lang=less&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[192,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/index/categoryDetail/categoryDetail.js.map