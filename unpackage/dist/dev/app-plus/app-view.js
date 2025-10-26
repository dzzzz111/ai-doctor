/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!****************************!*\
  !*** D:/ai-doctor/main.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! uni-pages?{"type":"view"} */ 1);
// @ts-nocheck

function initView() {
  typeof injectStyles === 'function' && injectStyles();
  UniViewJSBridge.publishHandler('webviewReady');
}
if (typeof plus !== 'undefined') {
  initView();
} else {
  document.addEventListener('plusready', initView);
}

/***/ }),
/* 1 */
/*!***********************************************!*\
  !*** D:/ai-doctor/pages.json?{"type":"view"} ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(function (value) {
      return promise.resolve(callback()).then(function () {
        return value;
      });
    }, function (reason) {
      return promise.resolve(callback()).then(function () {
        throw reason;
      });
    });
  };
}
if (typeof uni !== 'undefined' && uni && uni.requireGlobal) {
  var global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
window.__uniConfig = {
  "window": {
    "navigationBarTextStyle": "black",
    "navigationBarTitleText": "医疗助手",
    "navigationBarBackgroundColor": "#F8F8F8",
    "backgroundColor": "#F5F7FA"
  },
  "darkmode": false
};
if (uni.restoreGlobal) {
  uni.restoreGlobal(weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
__definePage('pages/index/index', function () {
  return Vue.extend(__webpack_require__(/*! pages/index/index.vue?mpType=page */ 2).default);
});
__definePage('pages/mine/index', function () {
  return Vue.extend(__webpack_require__(/*! pages/mine/index.vue?mpType=page */ 14).default);
});
__definePage('pages/community/index', function () {
  return Vue.extend(__webpack_require__(/*! pages/community/index.vue?mpType=page */ 22).default);
});
__definePage('pages/community/publish', function () {
  return Vue.extend(__webpack_require__(/*! pages/community/publish.vue?mpType=page */ 30).default);
});
__definePage('pages/community/detail', function () {
  return Vue.extend(__webpack_require__(/*! pages/community/detail.vue?mpType=page */ 38).default);
});
__definePage('pages/image-diagnose/history', function () {
  return Vue.extend(__webpack_require__(/*! pages/image-diagnose/history.vue?mpType=page */ 46).default);
});
__definePage('pages/image-diagnose/detail', function () {
  return Vue.extend(__webpack_require__(/*! pages/image-diagnose/detail.vue?mpType=page */ 54).default);
});
__definePage('pages/news/detail', function () {
  return Vue.extend(__webpack_require__(/*! pages/news/detail.vue?mpType=page */ 62).default);
});
__definePage('pages/admin/init-videos', function () {
  return Vue.extend(__webpack_require__(/*! pages/admin/init-videos.vue?mpType=page */ 70).default);
});
__definePage('pages/admin/init-community', function () {
  return Vue.extend(__webpack_require__(/*! pages/admin/init-community.vue?mpType=page */ 78).default);
});
__definePage('pagesA/ai-doctor/index', function () {
  return Vue.extend(__webpack_require__(/*! pagesA/ai-doctor/index.vue?mpType=page */ 86).default);
});
__definePage('pagesA/image-diagnose/index', function () {
  return Vue.extend(__webpack_require__(/*! pagesA/image-diagnose/index.vue?mpType=page */ 94).default);
});
__definePage('pagesA/rehabilitation/index', function () {
  return Vue.extend(__webpack_require__(/*! pagesA/rehabilitation/index.vue?mpType=page */ 102).default);
});
__definePage('pagesA/video-player/index', function () {
  return Vue.extend(__webpack_require__(/*! pagesA/video-player/index.vue?mpType=page */ 110).default);
});
__definePage('pagesB/mine/login', function () {
  return Vue.extend(__webpack_require__(/*! pagesB/mine/login.vue?mpType=page */ 118).default);
});
__definePage('pagesB/mine/register', function () {
  return Vue.extend(__webpack_require__(/*! pagesB/mine/register.vue?mpType=page */ 126).default);
});
__definePage('pagesB/mine/settings', function () {
  return Vue.extend(__webpack_require__(/*! pagesB/mine/settings.vue?mpType=page */ 134).default);
});

/***/ }),
/* 2 */
/*!******************************************************!*\
  !*** D:/ai-doctor/pages/index/index.vue?mpType=page ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2be84a3c&mpType=page */ 3);
/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 5);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _index_vue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&lang=css&mpType=page */ 7);
/* harmony import */ var _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 13);

var renderjs





/* normalize component */

var component = Object(_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/index/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 3 */
/*!************************************************************************************!*\
  !*** D:/ai-doctor/pages/index/index.vue?vue&type=template&id=2be84a3c&mpType=page ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./index.vue?vue&type=template&id=2be84a3c&mpType=page */ 4);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 4 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!D:/ai-doctor/pages/index/index.vue?vue&type=template&id=2be84a3c&mpType=page ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "uni-view",
    { staticClass: _vm._$g(0, "sc"), attrs: { _i: 0 } },
    [
      _c(
        "uni-view",
        { staticClass: _vm._$g(1, "sc"), attrs: { _i: 1 } },
        [
          _c("uni-view", { staticClass: _vm._$g(2, "sc"), attrs: { _i: 2 } }),
          _c(
            "uni-view",
            { staticClass: _vm._$g(3, "sc"), attrs: { _i: 3 } },
            [
              _c(
                "uni-view",
                { staticClass: _vm._$g(4, "sc"), attrs: { _i: 4 } },
                [
                  _c(
                    "v-uni-text",
                    { staticClass: _vm._$g(5, "sc"), attrs: { _i: 5 } },
                    [_vm._v("医疗助手")]
                  ),
                  _c(
                    "v-uni-text",
                    { staticClass: _vm._$g(6, "sc"), attrs: { _i: 6 } },
                    [_vm._v("您的健康管家")]
                  ),
                ],
                1
              ),
              _c("uni-view", {
                staticClass: _vm._$g(7, "sc"),
                attrs: { _i: 7 },
              }),
            ],
            1
          ),
          _c(
            "uni-view",
            { staticClass: _vm._$g(8, "sc"), attrs: { _i: 8 } },
            [
              _c("uni-view", {
                staticClass: _vm._$g(9, "sc"),
                attrs: { _i: 9 },
              }),
              _c("uni-view", {
                staticClass: _vm._$g(10, "sc"),
                attrs: { _i: 10 },
              }),
              _c("uni-view", {
                staticClass: _vm._$g(11, "sc"),
                attrs: { _i: 11 },
              }),
            ],
            1
          ),
        ],
        1
      ),
      _c(
        "uni-view",
        { staticClass: _vm._$g(12, "sc"), attrs: { _i: 12 } },
        [
          _c(
            "v-uni-swiper",
            {
              staticClass: _vm._$g(13, "sc"),
              attrs: {
                circular: true,
                autoplay: true,
                interval: "4000",
                duration: "800",
                "indicator-dots": true,
                "indicator-active-color": "#667eea",
                _i: 13,
              },
            },
            _vm._l(_vm._$g(14, "f"), function (item, index, $20, $30) {
              return _c(
                "v-uni-swiper-item",
                {
                  key: item,
                  attrs: { _i: "14-" + $30 },
                  on: {
                    click: function ($event) {
                      return _vm.$handleViewEvent($event)
                    },
                  },
                },
                [
                  _c(
                    "uni-view",
                    {
                      staticClass: _vm._$g("15-" + $30, "sc"),
                      attrs: { _i: "15-" + $30 },
                    },
                    [
                      _c("v-uni-image", {
                        staticClass: _vm._$g("16-" + $30, "sc"),
                        attrs: {
                          src: _vm._$g("16-" + $30, "a-src"),
                          mode: "aspectFill",
                          _i: "16-" + $30,
                        },
                      }),
                      _c(
                        "uni-view",
                        {
                          staticClass: _vm._$g("17-" + $30, "sc"),
                          attrs: { _i: "17-" + $30 },
                        },
                        [
                          _c(
                            "uni-view",
                            {
                              staticClass: _vm._$g("18-" + $30, "sc"),
                              attrs: { _i: "18-" + $30 },
                            },
                            [
                              _c(
                                "v-uni-text",
                                {
                                  staticClass: _vm._$g("19-" + $30, "sc"),
                                  attrs: { _i: "19-" + $30 },
                                },
                                [_vm._v(_vm._$g("19-" + $30, "t0-0"))]
                              ),
                              _c(
                                "v-uni-text",
                                {
                                  staticClass: _vm._$g("20-" + $30, "sc"),
                                  attrs: { _i: "20-" + $30 },
                                },
                                [_vm._v("点击查看详情")]
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              )
            }),
            1
          ),
        ],
        1
      ),
      _c(
        "uni-view",
        {
          staticClass: _vm._$g(21, "sc"),
          attrs: { _i: 21 },
          on: {
            click: function ($event) {
              return _vm.$handleViewEvent($event)
            },
          },
        },
        [
          _c(
            "uni-view",
            { staticClass: _vm._$g(22, "sc"), attrs: { _i: 22 } },
            [_vm._v("🌟 个性化康复训练")]
          ),
          _c(
            "uni-view",
            { staticClass: _vm._$g(23, "sc"), attrs: { _i: 23 } },
            [
              _c(
                "uni-view",
                { staticClass: _vm._$g(24, "sc"), attrs: { _i: 24 } },
                [
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(25, "sc"), attrs: { _i: 25 } },
                    [_vm._v("🏋️")]
                  ),
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(26, "sc"), attrs: { _i: 26 } },
                    [
                      _c(
                        "v-uni-text",
                        { staticClass: _vm._$g(27, "sc"), attrs: { _i: 27 } },
                        [_vm._v("专业康复训练计划")]
                      ),
                      _c(
                        "v-uni-text",
                        { staticClass: _vm._$g(28, "sc"), attrs: { _i: 28 } },
                        [_vm._v("• 根据X光诊断定制方案")]
                      ),
                      _c(
                        "v-uni-text",
                        { staticClass: _vm._$g(29, "sc"), attrs: { _i: 29 } },
                        [_vm._v("• 视频指导科学训练")]
                      ),
                      _c(
                        "v-uni-text",
                        { staticClass: _vm._$g(30, "sc"), attrs: { _i: 30 } },
                        [_vm._v("• 打卡记录进度跟踪")]
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
              _c(
                "uni-view",
                { staticClass: _vm._$g(31, "sc"), attrs: { _i: 31 } },
                [
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(32, "sc"), attrs: { _i: 32 } },
                    [_vm._v("立即开始")]
                  ),
                  _c(
                    "v-uni-text",
                    { staticClass: _vm._$g(33, "sc"), attrs: { _i: 33 } },
                    [_vm._v("›")]
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
      _c(
        "uni-view",
        { staticClass: _vm._$g(34, "sc"), attrs: { _i: 34 } },
        [
          _c(
            "uni-view",
            { staticClass: _vm._$g(35, "sc"), attrs: { _i: 35 } },
            [_vm._v("📱 核心功能")]
          ),
          _c(
            "uni-view",
            {
              staticClass: _vm._$g(36, "sc"),
              attrs: { _i: 36 },
              on: {
                click: function ($event) {
                  return _vm.$handleViewEvent($event)
                },
              },
            },
            [
              _c(
                "uni-view",
                { staticClass: _vm._$g(37, "sc"), attrs: { _i: 37 } },
                [
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(38, "sc"), attrs: { _i: 38 } },
                    [
                      _c(
                        "uni-view",
                        { staticClass: _vm._$g(39, "sc"), attrs: { _i: 39 } },
                        [_vm._v("🤖")]
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
              _c(
                "uni-view",
                { staticClass: _vm._$g(40, "sc"), attrs: { _i: 40 } },
                [
                  _c(
                    "v-uni-text",
                    { staticClass: _vm._$g(41, "sc"), attrs: { _i: 41 } },
                    [_vm._v("AI智能问诊")]
                  ),
                  _c(
                    "v-uni-text",
                    { staticClass: _vm._$g(42, "sc"), attrs: { _i: 42 } },
                    [_vm._v("24小时在线医疗咨询")]
                  ),
                  _c(
                    "v-uni-text",
                    { staticClass: _vm._$g(43, "sc"), attrs: { _i: 43 } },
                    [_vm._v("专业·智能·便捷")]
                  ),
                ],
                1
              ),
              _c(
                "uni-view",
                { staticClass: _vm._$g(44, "sc"), attrs: { _i: 44 } },
                [_vm._v("HOT")]
              ),
            ],
            1
          ),
          _c(
            "uni-view",
            { staticClass: _vm._$g(45, "sc"), attrs: { _i: 45 } },
            [
              _c(
                "uni-view",
                {
                  staticClass: _vm._$g(46, "sc"),
                  attrs: { _i: 46 },
                  on: {
                    click: function ($event) {
                      return _vm.$handleViewEvent($event)
                    },
                  },
                },
                [
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(47, "sc"), attrs: { _i: 47 } },
                    [
                      _c(
                        "uni-view",
                        { staticClass: _vm._$g(48, "sc"), attrs: { _i: 48 } },
                        [_vm._v("🔬")]
                      ),
                    ],
                    1
                  ),
                  _c(
                    "v-uni-text",
                    { staticClass: _vm._$g(49, "sc"), attrs: { _i: 49 } },
                    [_vm._v("X光智能诊断")]
                  ),
                  _c(
                    "v-uni-text",
                    { staticClass: _vm._$g(50, "sc"), attrs: { _i: 50 } },
                    [_vm._v("精准分期分析")]
                  ),
                ],
                1
              ),
              _c(
                "uni-view",
                {
                  staticClass: _vm._$g(51, "sc"),
                  attrs: { _i: 51 },
                  on: {
                    click: function ($event) {
                      return _vm.$handleViewEvent($event)
                    },
                  },
                },
                [
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(52, "sc"), attrs: { _i: 52 } },
                    [
                      _c(
                        "uni-view",
                        { staticClass: _vm._$g(53, "sc"), attrs: { _i: 53 } },
                        [_vm._v("👥")]
                      ),
                    ],
                    1
                  ),
                  _c(
                    "v-uni-text",
                    { staticClass: _vm._$g(54, "sc"), attrs: { _i: 54 } },
                    [_vm._v("健康社区")]
                  ),
                  _c(
                    "v-uni-text",
                    { staticClass: _vm._$g(55, "sc"), attrs: { _i: 55 } },
                    [_vm._v("经验交流分享")]
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
      _c(
        "uni-view",
        { staticClass: _vm._$g(56, "sc"), attrs: { _i: 56 } },
        [
          _c(
            "uni-view",
            { staticClass: _vm._$g(57, "sc"), attrs: { _i: 57 } },
            [
              _c(
                "uni-view",
                { staticClass: _vm._$g(58, "sc"), attrs: { _i: 58 } },
                [
                  _c(
                    "v-uni-text",
                    { staticClass: _vm._$g(59, "sc"), attrs: { _i: 59 } },
                    [_vm._v("📰")]
                  ),
                  _c(
                    "v-uni-text",
                    { staticClass: _vm._$g(60, "sc"), attrs: { _i: 60 } },
                    [_vm._v("健康资讯")]
                  ),
                ],
                1
              ),
              _c(
                "v-uni-text",
                {
                  staticClass: _vm._$g(61, "sc"),
                  attrs: { _i: 61 },
                  on: {
                    click: function ($event) {
                      return _vm.$handleViewEvent($event)
                    },
                  },
                },
                [_vm._v("更多")]
              ),
            ],
            1
          ),
          _c(
            "uni-view",
            { staticClass: _vm._$g(62, "sc"), attrs: { _i: 62 } },
            _vm._l(_vm._$g(63, "f"), function (item, index, $21, $31) {
              return _c(
                "uni-view",
                {
                  key: item,
                  staticClass: _vm._$g("63-" + $31, "sc"),
                  attrs: { _i: "63-" + $31 },
                  on: {
                    click: function ($event) {
                      return _vm.$handleViewEvent($event)
                    },
                  },
                },
                [
                  _c("v-uni-image", {
                    staticClass: _vm._$g("64-" + $31, "sc"),
                    attrs: {
                      src: _vm._$g("64-" + $31, "a-src"),
                      mode: "aspectFill",
                      _i: "64-" + $31,
                    },
                  }),
                  _c(
                    "uni-view",
                    {
                      staticClass: _vm._$g("65-" + $31, "sc"),
                      attrs: { _i: "65-" + $31 },
                    },
                    [
                      _c(
                        "v-uni-text",
                        {
                          staticClass: _vm._$g("66-" + $31, "sc"),
                          attrs: { _i: "66-" + $31 },
                        },
                        [_vm._v(_vm._$g("66-" + $31, "t0-0"))]
                      ),
                      _c(
                        "v-uni-text",
                        {
                          staticClass: _vm._$g("67-" + $31, "sc"),
                          attrs: { _i: "67-" + $31 },
                        },
                        [_vm._v(_vm._$g("67-" + $31, "t0-0"))]
                      ),
                      _c(
                        "uni-view",
                        {
                          staticClass: _vm._$g("68-" + $31, "sc"),
                          attrs: { _i: "68-" + $31 },
                        },
                        [
                          _c(
                            "uni-view",
                            {
                              staticClass: _vm._$g("69-" + $31, "sc"),
                              attrs: { _i: "69-" + $31 },
                            },
                            [_vm._v("健康")]
                          ),
                          _c(
                            "v-uni-text",
                            {
                              staticClass: _vm._$g("70-" + $31, "sc"),
                              attrs: { _i: "70-" + $31 },
                            },
                            [_vm._v(_vm._$g("70-" + $31, "t0-0"))]
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              )
            }),
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 5 */
/*!******************************************************************************!*\
  !*** D:/ai-doctor/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./index.vue?vue&type=script&lang=js&mpType=page */ 6);
/* harmony import */ var _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 6 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!D:/ai-doctor/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  data: function data() {
    return {
      wxsProps: {}
    };
  },
  components: {}
};
exports.default = _default;

/***/ }),
/* 7 */
/*!**************************************************************************************!*\
  !*** D:/ai-doctor/pages/index/index.vue?vue&type=style&index=0&lang=css&mpType=page ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./index.vue?vue&type=style&index=0&lang=css&mpType=page */ 8);
/* harmony import */ var _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 8 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!D:/ai-doctor/pages/index/index.vue?vue&type=style&index=0&lang=css&mpType=page ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./index.vue?vue&type=style&index=0&lang=css&mpType=page */ 9);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader/lib/addStylesClient.js */ 11).default
var update = add("203c88f7", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 9 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!D:/ai-doctor/pages/index/index.vue?vue&type=style&index=0&lang=css&mpType=page ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ 10);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.container {\r\n  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);\r\n  min-height: 100vh;\r\n  position: relative;\r\n  padding-bottom: 30rpx;\n}\n@-webkit-keyframes gradientShift {\n0% { background-position: 0% 50%;\n}\n50% { background-position: 100% 50%;\n}\n100% { background-position: 0% 50%;\n}\n}\n@keyframes gradientShift {\n0% { background-position: 0% 50%;\n}\n50% { background-position: 100% 50%;\n}\n100% { background-position: 0% 50%;\n}\n}\r\n\r\n/* 顶部Banner优化 */\n.header {\r\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\r\n  background-size: 200% 200%;\r\n  -webkit-animation: gradientFlow 15s ease infinite;\r\n          animation: gradientFlow 15s ease infinite;\r\n  height: 260rpx;\r\n  padding-top: 44rpx;\r\n  display: flex;\r\n  flex-direction: column;\r\n  color: #fff;\r\n  position: relative;\r\n  overflow: hidden;\r\n  box-shadow: 0 10rpx 40rpx rgba(102, 126, 234, 0.35);\n}\n@-webkit-keyframes gradientFlow {\n0% { background-position: 0% 50%;\n}\n50% { background-position: 100% 50%;\n}\n100% { background-position: 0% 50%;\n}\n}\n@keyframes gradientFlow {\n0% { background-position: 0% 50%;\n}\n50% { background-position: 100% 50%;\n}\n100% { background-position: 0% 50%;\n}\n}\r\n\r\n/* 移除复杂动画 */\n.nav-bar {\r\n  height: 200rpx;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  position: relative;\r\n  z-index: 2;\n}\n.header-content {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  text-align: center;\n}\n.header-title {\r\n  font-size: 52rpx;\r\n  font-weight: bold;\r\n  text-shadow: 0 4rpx 16rpx rgba(0,0,0,0.3);\r\n  margin-bottom: 12rpx;\r\n  letter-spacing: 3rpx;\r\n  -webkit-animation: titleFadeIn 0.8s ease-out;\r\n          animation: titleFadeIn 0.8s ease-out;\n}\n@-webkit-keyframes titleFadeIn {\nfrom {\r\n    opacity: 0;\r\n    -webkit-transform: translateY(-20rpx);\r\n            transform: translateY(-20rpx);\n}\nto {\r\n    opacity: 1;\r\n    -webkit-transform: translateY(0);\r\n            transform: translateY(0);\n}\n}\n@keyframes titleFadeIn {\nfrom {\r\n    opacity: 0;\r\n    -webkit-transform: translateY(-20rpx);\r\n            transform: translateY(-20rpx);\n}\nto {\r\n    opacity: 1;\r\n    -webkit-transform: translateY(0);\r\n            transform: translateY(0);\n}\n}\n.header-subtitle {\r\n  font-size: 28rpx;\r\n  opacity: 0.95;\r\n  text-shadow: 0 2rpx 8rpx rgba(0,0,0,0.2);\r\n  font-weight: 300;\r\n  letter-spacing: 1rpx;\r\n  -webkit-animation: subtitleFadeIn 1s ease-out 0.2s both;\r\n          animation: subtitleFadeIn 1s ease-out 0.2s both;\n}\n@-webkit-keyframes subtitleFadeIn {\nfrom {\r\n    opacity: 0;\r\n    -webkit-transform: translateY(-10rpx);\r\n            transform: translateY(-10rpx);\n}\nto {\r\n    opacity: 0.95;\r\n    -webkit-transform: translateY(0);\r\n            transform: translateY(0);\n}\n}\n@keyframes subtitleFadeIn {\nfrom {\r\n    opacity: 0;\r\n    -webkit-transform: translateY(-10rpx);\r\n            transform: translateY(-10rpx);\n}\nto {\r\n    opacity: 0.95;\r\n    -webkit-transform: translateY(0);\r\n            transform: translateY(0);\n}\n}\n.header-decoration {\r\n  position: absolute;\r\n  bottom: 20rpx;\r\n  left: 50%;\r\n  -webkit-transform: translateX(-50%);\r\n          transform: translateX(-50%);\r\n  width: 80rpx;\r\n  height: 8rpx;\r\n  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.9), transparent);\r\n  border-radius: 4rpx;\r\n  -webkit-animation: decorationPulse 3s ease-in-out infinite;\r\n          animation: decorationPulse 3s ease-in-out infinite;\n}\n@-webkit-keyframes decorationPulse {\n0%, 100% { opacity: 0.6; -webkit-transform: translateX(-50%) scaleX(1); transform: translateX(-50%) scaleX(1);\n}\n50% { opacity: 1; -webkit-transform: translateX(-50%) scaleX(1.2); transform: translateX(-50%) scaleX(1.2);\n}\n}\n@keyframes decorationPulse {\n0%, 100% { opacity: 0.6; -webkit-transform: translateX(-50%) scaleX(1); transform: translateX(-50%) scaleX(1);\n}\n50% { opacity: 1; -webkit-transform: translateX(-50%) scaleX(1.2); transform: translateX(-50%) scaleX(1.2);\n}\n}\r\n\r\n/* 装饰性粒子 - 优化版 */\n.header-particles {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  top: 0;\r\n  left: 0;\r\n  pointer-events: none;\r\n  opacity: 0.15;\n}\n.particle {\r\n  position: absolute;\r\n  background: rgba(255, 255, 255, 0.6);\r\n  border-radius: 50%;\r\n  -webkit-animation: float 8s ease-in-out infinite;\r\n          animation: float 8s ease-in-out infinite;\n}\n.particle-1 {\r\n  width: 100rpx;\r\n  height: 100rpx;\r\n  top: 20%;\r\n  left: 10%;\r\n  -webkit-animation-delay: 0s;\r\n          animation-delay: 0s;\n}\n.particle-2 {\r\n  width: 60rpx;\r\n  height: 60rpx;\r\n  top: 60%;\r\n  right: 15%;\r\n  -webkit-animation-delay: 2s;\r\n          animation-delay: 2s;\n}\n.particle-3 {\r\n  width: 80rpx;\r\n  height: 80rpx;\r\n  top: 40%;\r\n  right: 5%;\r\n  -webkit-animation-delay: 4s;\r\n          animation-delay: 4s;\n}\n@-webkit-keyframes float {\n0%, 100% {\r\n    -webkit-transform: translateY(0) rotate(0deg);\r\n            transform: translateY(0) rotate(0deg);\r\n    opacity: 0.15;\n}\n50% {\r\n    -webkit-transform: translateY(-30rpx) rotate(180deg);\r\n            transform: translateY(-30rpx) rotate(180deg);\r\n    opacity: 0.3;\n}\n}\n@keyframes float {\n0%, 100% {\r\n    -webkit-transform: translateY(0) rotate(0deg);\r\n            transform: translateY(0) rotate(0deg);\r\n    opacity: 0.15;\n}\n50% {\r\n    -webkit-transform: translateY(-30rpx) rotate(180deg);\r\n            transform: translateY(-30rpx) rotate(180deg);\r\n    opacity: 0.3;\n}\n}\r\n\r\n/* 轮播图优化 */\n.swiper-section {\r\n  padding: 30rpx 30rpx 20rpx;\r\n  position: relative;\n}\n.swiper {\r\n  height: 380rpx;\r\n  border-radius: 28rpx;\r\n  overflow: hidden;\r\n  box-shadow: 0 16rpx 48rpx rgba(102, 126, 234, 0.25);\r\n  -webkit-transform: translateZ(0);\r\n          transform: translateZ(0);\r\n  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);\r\n  border: 3rpx solid rgba(255, 255, 255, 0.8);\n}\n.swiper:active {\r\n  -webkit-transform: translateY(-2rpx) scale(1.01);\r\n          transform: translateY(-2rpx) scale(1.01);\r\n  box-shadow: 0 20rpx 64rpx rgba(102, 126, 234, 0.35);\n}\n.swiper-item {\r\n  position: relative;\r\n  width: 100%;\r\n  height: 100%;\r\n  overflow: hidden;\n}\n.swiper-image {\r\n  width: 100%;\r\n  height: 100%;\r\n  transition: -webkit-transform 0.5s ease;\r\n  transition: transform 0.5s ease;\r\n  transition: transform 0.5s ease, -webkit-transform 0.5s ease;\n}\n.swiper-item:hover .swiper-image {\r\n  -webkit-transform: scale(1.05);\r\n          transform: scale(1.05);\n}\n.swiper-overlay {\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  background: linear-gradient(to top, rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.3), transparent);\r\n  color: #fff;\r\n  padding: 50rpx 35rpx 35rpx;\r\n  -webkit-backdrop-filter: blur(12rpx);\r\n          backdrop-filter: blur(12rpx);\n}\n.swiper-content {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 8rpx;\n}\n.swiper-title {\r\n  font-size: 36rpx;\r\n  font-weight: bold;\r\n  line-height: 1.5;\r\n  text-shadow: 0 3rpx 12rpx rgba(0,0,0,0.6);\r\n  letter-spacing: 1rpx;\n}\n.swiper-subtitle {\r\n  font-size: 24rpx;\r\n  opacity: 0.8;\r\n  font-weight: 300;\n}\r\n\r\n/* 功能区优化 */\n.function-area {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding: 20rpx 30rpx 40rpx;\r\n  gap: 24rpx;\n}\n.function-item {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  flex: 1;\r\n  background: rgba(255, 255, 255, 0.95);\r\n  -webkit-backdrop-filter: blur(20rpx);\r\n          backdrop-filter: blur(20rpx);\r\n  border-radius: 28rpx;\r\n  padding: 50rpx 20rpx;\r\n  box-shadow: 0 12rpx 40rpx rgba(102, 126, 234, 0.15);\r\n  position: relative;\r\n  overflow: hidden;\r\n  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);\r\n  border: 1rpx solid rgba(255, 255, 255, 0.3);\n}\n.function-item:hover {\r\n  -webkit-transform: translateY(-8rpx) scale(1.02);\r\n          transform: translateY(-8rpx) scale(1.02);\r\n  box-shadow: 0 20rpx 60rpx rgba(102, 126, 234, 0.25);\n}\n.function-item::before {\r\n  content: '';\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  height: 6rpx;\r\n  background: linear-gradient(90deg, #667eea, #764ba2);\r\n  border-radius: 28rpx 28rpx 0 0;\n}\n.ai-function::before {\r\n  background: linear-gradient(90deg, #667eea, #764ba2);\n}\n.image-function::before {\r\n  background: linear-gradient(90deg, #f093fb, #f5576c);\n}\n.function-icon-wrapper {\r\n  position: relative;\r\n  margin-bottom: 24rpx;\n}\n.function-icon {\r\n  width: 140rpx;\r\n  height: 140rpx;\r\n  border-radius: 50%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  position: relative;\r\n  z-index: 2;\r\n  transition: -webkit-transform 0.3s ease;\r\n  transition: transform 0.3s ease;\r\n  transition: transform 0.3s ease, -webkit-transform 0.3s ease;\n}\n.function-item:hover .function-icon {\r\n  -webkit-transform: scale(1.1) rotate(5deg);\r\n          transform: scale(1.1) rotate(5deg);\n}\n.function-icon uni-image {\r\n  width: 80rpx;\r\n  height: 80rpx;\r\n  -webkit-filter: drop-shadow(0 4rpx 12rpx rgba(0,0,0,0.2));\r\n          filter: drop-shadow(0 4rpx 12rpx rgba(0,0,0,0.2));\n}\n.icon-glow {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n  width: 160rpx;\r\n  height: 160rpx;\r\n  border-radius: 50%;\r\n  opacity: 0.2;\r\n  -webkit-animation: pulse 3s ease-in-out infinite;\r\n          animation: pulse 3s ease-in-out infinite;\n}\n@-webkit-keyframes pulse {\n0%, 100% { -webkit-transform: translate(-50%, -50%) scale(1); transform: translate(-50%, -50%) scale(1); opacity: 0.2;\n}\n50% { -webkit-transform: translate(-50%, -50%) scale(1.2); transform: translate(-50%, -50%) scale(1.2); opacity: 0.05;\n}\n}\n@keyframes pulse {\n0%, 100% { -webkit-transform: translate(-50%, -50%) scale(1); transform: translate(-50%, -50%) scale(1); opacity: 0.2;\n}\n50% { -webkit-transform: translate(-50%, -50%) scale(1.2); transform: translate(-50%, -50%) scale(1.2); opacity: 0.05;\n}\n}\n.ai-icon {\r\n  background: linear-gradient(135deg, #667eea, #764ba2);\n}\n.ai-glow {\r\n  background: linear-gradient(135deg, #667eea, #764ba2);\n}\n.image-icon {\r\n  background: linear-gradient(135deg, #f093fb, #f5576c);\n}\n.image-glow {\r\n  background: linear-gradient(135deg, #f093fb, #f5576c);\n}\n.function-text {\r\n  font-size: 32rpx;\r\n  color: #333;\r\n  font-weight: bold;\r\n  margin-bottom: 12rpx;\r\n  text-align: center;\n}\n.function-desc {\r\n  font-size: 24rpx;\r\n  color: #666;\r\n  text-align: center;\r\n  opacity: 0.8;\n}\r\n\r\n/* 康复训练主推荐卡片 */\n.rehab-featured {\r\n  margin: 30rpx;\r\n  background: linear-gradient(135deg, #10b981 0%, #059669 100%);\r\n  background-size: 200% 200%;\r\n  -webkit-animation: gradientShift 8s ease infinite;\r\n          animation: gradientShift 8s ease infinite;\r\n  border-radius: 28rpx;\r\n  overflow: hidden;\r\n  box-shadow: 0 16rpx 48rpx rgba(16, 185, 129, 0.45);\r\n  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);\r\n  position: relative;\r\n  border: 3rpx solid rgba(255, 255, 255, 0.3);\n}\n@keyframes gradientShift {\n0% { background-position: 0% 50%;\n}\n50% { background-position: 100% 50%;\n}\n100% { background-position: 0% 50%;\n}\n}\n.rehab-featured:active {\r\n  -webkit-transform: scale(0.97);\r\n          transform: scale(0.97);\r\n  box-shadow: 0 12rpx 36rpx rgba(16, 185, 129, 0.55);\n}\n.featured-badge {\r\n  position: absolute;\r\n  top: 24rpx;\r\n  left: 24rpx;\r\n  background: rgba(255, 255, 255, 0.35);\r\n  -webkit-backdrop-filter: blur(12rpx);\r\n          backdrop-filter: blur(12rpx);\r\n  color: #fff;\r\n  font-size: 24rpx;\r\n  font-weight: bold;\r\n  padding: 12rpx 24rpx;\r\n  border-radius: 40rpx;\r\n  border: 2rpx solid rgba(255, 255, 255, 0.6);\r\n  box-shadow: 0 4rpx 16rpx rgba(0, 0, 0, 0.15);\r\n  -webkit-animation: badgePulse 3s ease-in-out infinite;\r\n          animation: badgePulse 3s ease-in-out infinite;\n}\n@-webkit-keyframes badgePulse {\n0%, 100% { -webkit-transform: scale(1); transform: scale(1);\n}\n50% { -webkit-transform: scale(1.05); transform: scale(1.05);\n}\n}\n@keyframes badgePulse {\n0%, 100% { -webkit-transform: scale(1); transform: scale(1);\n}\n50% { -webkit-transform: scale(1.05); transform: scale(1.05);\n}\n}\n.featured-content {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: 70rpx 30rpx 40rpx;\n}\n.featured-left {\r\n  display: flex;\r\n  align-items: flex-start;\r\n  flex: 1;\n}\n.featured-icon {\r\n  font-size: 88rpx;\r\n  margin-right: 24rpx;\r\n  -webkit-filter: drop-shadow(0 6rpx 16rpx rgba(0,0,0,0.35));\r\n          filter: drop-shadow(0 6rpx 16rpx rgba(0,0,0,0.35));\r\n  -webkit-animation: iconBounce 3s ease-in-out infinite;\r\n          animation: iconBounce 3s ease-in-out infinite;\n}\n@-webkit-keyframes iconBounce {\n0%, 100% { -webkit-transform: translateY(0); transform: translateY(0);\n}\n50% { -webkit-transform: translateY(-8rpx); transform: translateY(-8rpx);\n}\n}\n@keyframes iconBounce {\n0%, 100% { -webkit-transform: translateY(0); transform: translateY(0);\n}\n50% { -webkit-transform: translateY(-8rpx); transform: translateY(-8rpx);\n}\n}\n.featured-info {\r\n  display: flex;\r\n  flex-direction: column;\n}\n.featured-title {\r\n  font-size: 36rpx;\r\n  font-weight: bold;\r\n  color: #fff;\r\n  margin-bottom: 16rpx;\r\n  text-shadow: 0 2rpx 8rpx rgba(0,0,0,0.2);\n}\n.featured-subtitle {\r\n  font-size: 26rpx;\r\n  color: rgba(255, 255, 255, 0.95);\r\n  margin-bottom: 8rpx;\r\n  text-shadow: 0 1rpx 4rpx rgba(0,0,0,0.1);\r\n  line-height: 1.5;\n}\n.featured-right {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\n}\n.start-btn {\r\n  background: rgba(255, 255, 255, 0.98);\r\n  color: #059669;\r\n  font-size: 28rpx;\r\n  font-weight: bold;\r\n  padding: 20rpx 36rpx;\r\n  border-radius: 40rpx;\r\n  margin-bottom: 16rpx;\r\n  box-shadow: 0 6rpx 20rpx rgba(0, 0, 0, 0.25);\r\n  transition: all 0.3s ease;\r\n  -webkit-animation: btnPulse 2s ease-in-out infinite;\r\n          animation: btnPulse 2s ease-in-out infinite;\n}\n@-webkit-keyframes btnPulse {\n0%, 100% { box-shadow: 0 6rpx 20rpx rgba(0, 0, 0, 0.25);\n}\n50% { box-shadow: 0 8rpx 28rpx rgba(0, 0, 0, 0.35);\n}\n}\n@keyframes btnPulse {\n0%, 100% { box-shadow: 0 6rpx 20rpx rgba(0, 0, 0, 0.25);\n}\n50% { box-shadow: 0 8rpx 28rpx rgba(0, 0, 0, 0.35);\n}\n}\n.featured-arrow {\r\n  font-size: 60rpx;\r\n  color: rgba(255, 255, 255, 0.8);\r\n  font-weight: 300;\n}\r\n\r\n/* 功能区域 */\n.function-section {\r\n  margin: 30rpx;\n}\n.section-title-simple {\r\n  font-size: 32rpx;\r\n  font-weight: bold;\r\n  color: #333;\r\n  margin-bottom: 24rpx;\r\n  padding-left: 8rpx;\n}\r\n\r\n/* 主推功能卡片 */\n.feature-primary {\r\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\r\n  border-radius: 28rpx;\r\n  padding: 40rpx;\r\n  display: flex;\r\n  align-items: center;\r\n  margin-bottom: 24rpx;\r\n  box-shadow: 0 16rpx 48rpx rgba(102, 126, 234, 0.35);\r\n  position: relative;\r\n  overflow: hidden;\r\n  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n}\n.feature-primary:active {\r\n  -webkit-transform: scale(0.98);\r\n          transform: scale(0.98);\r\n  box-shadow: 0 12rpx 36rpx rgba(102, 126, 234, 0.45);\n}\n.primary-left {\r\n  margin-right: 24rpx;\n}\n.primary-icon-wrapper {\r\n  width: 120rpx;\r\n  height: 120rpx;\r\n  border-radius: 50%;\r\n  background: rgba(255, 255, 255, 0.25);\r\n  -webkit-backdrop-filter: blur(10rpx);\r\n          backdrop-filter: blur(10rpx);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  box-shadow: 0 8rpx 24rpx rgba(0, 0, 0, 0.15);\n}\n.primary-icon {\r\n  font-size: 64rpx;\r\n  -webkit-filter: drop-shadow(0 4rpx 12rpx rgba(0, 0, 0, 0.2));\r\n          filter: drop-shadow(0 4rpx 12rpx rgba(0, 0, 0, 0.2));\n}\n.primary-right {\r\n  flex: 1;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 8rpx;\n}\n.primary-title {\r\n  font-size: 38rpx;\r\n  font-weight: bold;\r\n  color: #fff;\r\n  text-shadow: 0 2rpx 8rpx rgba(0, 0, 0, 0.2);\n}\n.primary-desc {\r\n  font-size: 28rpx;\r\n  color: rgba(255, 255, 255, 0.95);\r\n  line-height: 1.4;\n}\n.primary-subtitle {\r\n  font-size: 24rpx;\r\n  color: rgba(255, 255, 255, 0.8);\r\n  letter-spacing: 2rpx;\n}\n.primary-badge {\r\n  position: absolute;\r\n  top: 20rpx;\r\n  right: 20rpx;\r\n  background: rgba(255, 107, 107, 0.95);\r\n  color: #fff;\r\n  font-size: 22rpx;\r\n  font-weight: bold;\r\n  padding: 6rpx 16rpx;\r\n  border-radius: 20rpx;\r\n  box-shadow: 0 4rpx 12rpx rgba(255, 107, 107, 0.4);\r\n  -webkit-animation: badgePulse 2s ease-in-out infinite;\r\n          animation: badgePulse 2s ease-in-out infinite;\n}\n@keyframes badgePulse {\n0%, 100% { -webkit-transform: scale(1); transform: scale(1);\n}\n50% { -webkit-transform: scale(1.08); transform: scale(1.08);\n}\n}\r\n\r\n/* 次级功能卡片网格 */\n.function-grid {\r\n  display: grid;\r\n  grid-template-columns: repeat(2, 1fr);\r\n  gap: 20rpx;\n}\n.function-card {\r\n  background: linear-gradient(135deg, #ffffff 0%, #f8f9ff 100%);\r\n  border-radius: 24rpx;\r\n  padding: 40rpx 28rpx;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  box-shadow: 0 10rpx 32rpx rgba(102, 126, 234, 0.15);\r\n  border: 2rpx solid rgba(102, 126, 234, 0.1);\r\n  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);\r\n  position: relative;\r\n  overflow: hidden;\r\n  min-height: 240rpx;\n}\n.function-card::before {\r\n  content: '';\r\n  position: absolute;\r\n  top: 0;\r\n  left: -100%;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.1), transparent);\r\n  transition: left 0.6s ease;\n}\n.function-card:active::before {\r\n  left: 100%;\n}\n.function-card:active {\r\n  -webkit-transform: scale(0.95) translateY(2rpx);\r\n          transform: scale(0.95) translateY(2rpx);\r\n  box-shadow: 0 6rpx 20rpx rgba(102, 126, 234, 0.25);\n}\n.card-icon-wrapper {\r\n  width: 110rpx;\r\n  height: 110rpx;\r\n  border-radius: 50%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  margin-bottom: 24rpx;\r\n  position: relative;\r\n  box-shadow: 0 8rpx 24rpx rgba(0, 0, 0, 0.2);\r\n  transition: all 0.3s ease;\n}\n.function-card:active .card-icon-wrapper {\r\n  -webkit-transform: scale(0.95);\r\n          transform: scale(0.95);\n}\n.ai-wrapper {\r\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\r\n  box-shadow: 0 8rpx 24rpx rgba(102, 126, 234, 0.4);\n}\n.image-wrapper {\r\n  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);\r\n  box-shadow: 0 8rpx 24rpx rgba(240, 147, 251, 0.4);\n}\n.history-wrapper {\r\n  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);\r\n  box-shadow: 0 8rpx 24rpx rgba(79, 172, 254, 0.4);\n}\n.community-wrapper {\r\n  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);\r\n  box-shadow: 0 8rpx 24rpx rgba(67, 233, 123, 0.4);\n}\n.card-icon {\r\n  font-size: 56rpx;\r\n  -webkit-filter: drop-shadow(0 3rpx 10rpx rgba(0,0,0,0.25));\r\n          filter: drop-shadow(0 3rpx 10rpx rgba(0,0,0,0.25));\r\n  -webkit-animation: iconFloat 3s ease-in-out infinite;\r\n          animation: iconFloat 3s ease-in-out infinite;\n}\n@-webkit-keyframes iconFloat {\n0%, 100% { -webkit-transform: translateY(0); transform: translateY(0);\n}\n50% { -webkit-transform: translateY(-6rpx); transform: translateY(-6rpx);\n}\n}\n@keyframes iconFloat {\n0%, 100% { -webkit-transform: translateY(0); transform: translateY(0);\n}\n50% { -webkit-transform: translateY(-6rpx); transform: translateY(-6rpx);\n}\n}\n.card-title {\r\n  font-size: 30rpx;\r\n  font-weight: bold;\r\n  color: #333;\r\n  margin-bottom: 10rpx;\r\n  letter-spacing: 0.5rpx;\n}\n.card-desc {\r\n  font-size: 24rpx;\r\n  color: #999;\r\n  text-align: center;\r\n  opacity: 0.85;\n}\r\n\r\n/* 资讯区域优化 */\n.news-section {\r\n  background: rgba(255, 255, 255, 0.98);\r\n  -webkit-backdrop-filter: blur(24rpx);\r\n          backdrop-filter: blur(24rpx);\r\n  margin: 0 30rpx 30rpx;\r\n  border-radius: 28rpx;\r\n  padding: 44rpx 32rpx;\r\n  box-shadow: 0 12rpx 40rpx rgba(102, 126, 234, 0.15);\r\n  border: 2rpx solid rgba(255, 255, 255, 0.5);\r\n  transition: all 0.3s ease;\n}\n.section-header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  margin-bottom: 30rpx;\r\n  padding-bottom: 20rpx;\r\n  border-bottom: 2rpx solid rgba(102, 126, 234, 0.1);\n}\n.section-title-wrapper {\r\n  display: flex;\r\n  align-items: center;\n}\n.section-icon {\r\n  font-size: 36rpx;\r\n  margin-right: 16rpx;\r\n  -webkit-filter: drop-shadow(0 2rpx 4rpx rgba(0,0,0,0.1));\r\n          filter: drop-shadow(0 2rpx 4rpx rgba(0,0,0,0.1));\n}\n.title {\r\n  font-size: 36rpx;\r\n  font-weight: bold;\r\n  color: #333;\r\n  letter-spacing: 1rpx;\n}\n.more {\r\n  font-size: 28rpx;\r\n  color: #667eea;\r\n  font-weight: 500;\r\n  padding: 8rpx 16rpx;\r\n  border-radius: 20rpx;\r\n  background: rgba(102, 126, 234, 0.1);\r\n  transition: all 0.3s ease;\n}\n.more:hover {\r\n  background: rgba(102, 126, 234, 0.2);\r\n  -webkit-transform: scale(1.05);\r\n          transform: scale(1.05);\n}\r\n\r\n/* 资讯区域优化 */\n.news-item {\r\n  display: flex;\r\n  padding: 30rpx 24rpx;\r\n  border-bottom: 2rpx solid rgba(102, 126, 234, 0.05);\r\n  border-radius: 20rpx;\r\n  margin-bottom: 20rpx;\r\n  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);\r\n  background: linear-gradient(135deg, rgba(255, 255, 255, 0.6) 0%, rgba(248, 249, 255, 0.6) 100%);\r\n  -webkit-backdrop-filter: blur(12rpx);\r\n          backdrop-filter: blur(12rpx);\n}\n.news-item:active {\r\n  background: rgba(102, 126, 234, 0.08);\r\n  -webkit-transform: scale(0.98);\r\n          transform: scale(0.98);\r\n  box-shadow: 0 6rpx 24rpx rgba(102, 126, 234, 0.15);\n}\n.news-item:last-child {\r\n  border-bottom: none;\r\n  margin-bottom: 0;\n}\n.news-image {\r\n  width: 230rpx;\r\n  height: 170rpx;\r\n  border-radius: 20rpx;\r\n  margin-right: 24rpx;\r\n  box-shadow: 0 6rpx 20rpx rgba(0, 0, 0, 0.12);\r\n  transition: -webkit-transform 0.3s ease;\r\n  transition: transform 0.3s ease;\r\n  transition: transform 0.3s ease, -webkit-transform 0.3s ease;\r\n  border: 2rpx solid rgba(255, 255, 255, 0.8);\n}\n.news-content {\r\n  flex: 1;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\n}\n.news-title {\r\n  font-size: 32rpx;\r\n  font-weight: bold;\r\n  color: #333;\r\n  line-height: 1.5;\r\n  margin-bottom: 14rpx;\r\n  display: -webkit-box;\r\n  -webkit-line-clamp: 2;\r\n  -webkit-box-orient: vertical;\r\n  overflow: hidden;\r\n  letter-spacing: 0.5rpx;\n}\n.news-desc {\r\n  font-size: 26rpx;\r\n  color: #666;\r\n  line-height: 1.5;\r\n  margin-bottom: 16rpx;\r\n  display: -webkit-box;\r\n  -webkit-line-clamp: 2;\r\n  -webkit-box-orient: vertical;\r\n  overflow: hidden;\n}\n.news-meta {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\n}\n.news-tag {\r\n  background: linear-gradient(135deg, #667eea, #764ba2);\r\n  color: #fff;\r\n  font-size: 22rpx;\r\n  padding: 6rpx 16rpx;\r\n  border-radius: 16rpx;\r\n  font-weight: 500;\r\n  box-shadow: 0 2rpx 8rpx rgba(102, 126, 234, 0.2);\n}\n.news-time {\r\n  font-size: 22rpx;\r\n  color: #999;\r\n  font-weight: 400;\n}\r\n\r\n/* 响应式设计 */\n@media screen and (max-width: 750rpx) {\n.function-area {\r\n    flex-direction: column;\r\n    gap: 20rpx;\n}\n.function-item {\r\n    width: 100%;\n}\n.news-image {\r\n    width: 180rpx;\r\n    height: 120rpx;\n}\n}\r\n\r\n/* 全局动画优化 */\nuni-view, uni-text, uni-image, uni-button {\r\n  -webkit-tap-highlight-color: transparent;\n}\n.container > uni-view {\r\n  -webkit-animation: fadeInUp 0.6s ease-out;\r\n          animation: fadeInUp 0.6s ease-out;\n}\n@-webkit-keyframes fadeInUp {\nfrom {\r\n    opacity: 0;\r\n    -webkit-transform: translateY(30rpx);\r\n            transform: translateY(30rpx);\n}\nto {\r\n    opacity: 1;\r\n    -webkit-transform: translateY(0);\r\n            transform: translateY(0);\n}\n}\n@keyframes fadeInUp {\nfrom {\r\n    opacity: 0;\r\n    -webkit-transform: translateY(30rpx);\r\n            transform: translateY(30rpx);\n}\nto {\r\n    opacity: 1;\r\n    -webkit-transform: translateY(0);\r\n            transform: translateY(0);\n}\n}\r\n\r\n/* 为不同元素添加延迟动画 */\n.header {\r\n  -webkit-animation-delay: 0s;\r\n          animation-delay: 0s;\n}\n.swiper-section {\r\n  -webkit-animation-delay: 0.1s;\r\n          animation-delay: 0.1s;\n}\n.rehab-featured {\r\n  -webkit-animation-delay: 0.1s;\r\n          animation-delay: 0.1s;\n}\n.function-section {\r\n  -webkit-animation-delay: 0.2s;\r\n          animation-delay: 0.2s;\n}\n.news-section {\r\n  -webkit-animation-delay: 0.3s;\r\n          animation-delay: 0.3s;\n}\r\n\r\n/* 滚动条美化 */\n::-webkit-scrollbar {\r\n  width: 6rpx;\r\n  height: 6rpx;\n}\n::-webkit-scrollbar-track {\r\n  background: rgba(0, 0, 0, 0.1);\r\n  border-radius: 3rpx;\n}\n::-webkit-scrollbar-thumb {\r\n  background: linear-gradient(135deg, #667eea, #764ba2);\r\n  border-radius: 3rpx;\n}\n::-webkit-scrollbar-thumb:hover {\r\n  background: linear-gradient(135deg, #764ba2, #667eea);\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 10 */
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 11 */
/*!********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader/lib/addStylesClient.js ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addStylesClient; });
/* harmony import */ var _listToStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listToStyles */ 12);
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = Object(_listToStyles__WEBPACK_IMPORTED_MODULE_0__["default"])(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = Object(_listToStyles__WEBPACK_IMPORTED_MODULE_0__["default"])(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : processCss(obj.css) // fixed by xxxxxx

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = processCss(obj.css) // fixed by xxxxxx
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}

//fixed by xxxxxx
var UPX_RE = /\b([+-]?\d+(\.\d+)?)[r|u]px\b/g
var VAR_STATUS_BAR_HEIGHT = /var\(--status-bar-height\)/gi
var VAR_WINDOW_TOP = /var\(--window-top\)/gi
var VAR_WINDOW_BOTTOM = /var\(--window-bottom\)/gi
var VAR_WINDOW_LEFT = /var\(--window-left\)/gi
var VAR_WINDOW_RIGHT = /var\(--window-right\)/gi

var statusBarHeight = false
function processCss(css) {
	if (!uni.canIUse('css.var')) { //不支持 css 变量
    if (statusBarHeight === false) {
      statusBarHeight = plus.navigator.getStatusbarHeight()
    }
		var offset = {
            statusBarHeight: statusBarHeight,
            top: window.__WINDOW_TOP || 0,
            bottom: window.__WINDOW_BOTTOM || 0
        }
		css = css.replace(VAR_STATUS_BAR_HEIGHT, offset.statusBarHeight + 'px')
			.replace(VAR_WINDOW_TOP, offset.top + 'px')
			.replace(VAR_WINDOW_BOTTOM, offset.bottom + 'px')
            .replace(VAR_WINDOW_LEFT, '0px')
            .replace(VAR_WINDOW_RIGHT, '0px')
	}
  return css.replace(/\{[\s\S]+?\}|@media.+?\{/g, function (css) {
    return css.replace(UPX_RE, function (a, b) {
      return uni.upx2px(b) + 'px'
    })
  })
}


/***/ }),
/* 12 */
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader/lib/listToStyles.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return listToStyles; });
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 13 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    if(typeof renderjs.beforeCreate === 'function'){
			renderjs.beforeCreate = [renderjs.beforeCreate]
		}
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 14 */
/*!*****************************************************!*\
  !*** D:/ai-doctor/pages/mine/index.vue?mpType=page ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_296bd51f_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=296bd51f&mpType=page */ 15);
/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 17);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _index_vue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&lang=css&mpType=page */ 19);
/* harmony import */ var _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 13);

var renderjs





/* normalize component */

var component = Object(_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_296bd51f_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_296bd51f_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _index_vue_vue_type_template_id_296bd51f_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/mine/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 15 */
/*!***********************************************************************************!*\
  !*** D:/ai-doctor/pages/mine/index.vue?vue&type=template&id=296bd51f&mpType=page ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_template_id_296bd51f_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./index.vue?vue&type=template&id=296bd51f&mpType=page */ 16);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_template_id_296bd51f_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_template_id_296bd51f_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_template_id_296bd51f_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_template_id_296bd51f_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 16 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!D:/ai-doctor/pages/mine/index.vue?vue&type=template&id=296bd51f&mpType=page ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "uni-view",
    { staticClass: _vm._$g(0, "sc"), attrs: { _i: 0 } },
    [
      _c(
        "uni-view",
        { staticClass: _vm._$g(1, "sc"), attrs: { _i: 1 } },
        [
          _c("uni-view", { staticClass: _vm._$g(2, "sc"), attrs: { _i: 2 } }),
          _c(
            "uni-view",
            { staticClass: _vm._$g(3, "sc"), attrs: { _i: 3 } },
            [
              _c(
                "v-uni-text",
                { staticClass: _vm._$g(4, "sc"), attrs: { _i: 4 } },
                [_vm._v("个人中心")]
              ),
            ],
            1
          ),
        ],
        1
      ),
      _vm._$g(5, "i")
        ? _c(
            "uni-view",
            { staticClass: _vm._$g(5, "sc"), attrs: { _i: 5 } },
            [
              _c(
                "uni-view",
                { staticClass: _vm._$g(6, "sc"), attrs: { _i: 6 } },
                [
                  _c("v-uni-image", {
                    attrs: { src: "/static/images/default-avatar.png", _i: 7 },
                  }),
                ],
                1
              ),
              _c(
                "uni-view",
                { staticClass: _vm._$g(8, "sc"), attrs: { _i: 8 } },
                [
                  _c(
                    "uni-view",
                    {
                      staticClass: _vm._$g(9, "sc"),
                      attrs: { _i: 9 },
                      on: {
                        click: function ($event) {
                          return _vm.$handleViewEvent($event)
                        },
                      },
                    },
                    [_vm._v("登录 / 注册")]
                  ),
                  _c(
                    "v-uni-text",
                    { staticClass: _vm._$g(10, "sc"), attrs: { _i: 10 } },
                    [_vm._v("登录后享受更多健康服务")]
                  ),
                ],
                1
              ),
            ],
            1
          )
        : _c(
            "uni-view",
            { staticClass: _vm._$g(11, "sc"), attrs: { _i: 11 } },
            [
              _c(
                "uni-view",
                { staticClass: _vm._$g(12, "sc"), attrs: { _i: 12 } },
                [
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(13, "sc"), attrs: { _i: 13 } },
                    [
                      _c("v-uni-image", {
                        attrs: { src: _vm._$g(14, "a-src"), _i: 14 },
                      }),
                    ],
                    1
                  ),
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(15, "sc"), attrs: { _i: 15 } },
                    [
                      _c(
                        "uni-view",
                        { staticClass: _vm._$g(16, "sc"), attrs: { _i: 16 } },
                        [_vm._v(_vm._$g(16, "t0-0"))]
                      ),
                      _c(
                        "uni-view",
                        { staticClass: _vm._$g(17, "sc"), attrs: { _i: 17 } },
                        [_vm._v(_vm._$g(17, "t0-0"))]
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._$g(18, "i")
                ? _c(
                    "uni-view",
                    { staticClass: _vm._$g(18, "sc"), attrs: { _i: 18 } },
                    [
                      _c(
                        "uni-view",
                        { staticClass: _vm._$g(19, "sc"), attrs: { _i: 19 } },
                        [_vm._v(_vm._$g(19, "t0-0"))]
                      ),
                      _c(
                        "uni-view",
                        { staticClass: _vm._$g(20, "sc"), attrs: { _i: 20 } },
                        [_vm._v(_vm._$g(20, "t0-0"))]
                      ),
                    ],
                    1
                  )
                : _vm._e(),
            ],
            1
          ),
      _vm._$g(21, "i")
        ? _c(
            "uni-view",
            { staticClass: _vm._$g(21, "sc"), attrs: { _i: 21 } },
            [
              _c(
                "uni-view",
                { staticClass: _vm._$g(22, "sc"), attrs: { _i: 22 } },
                [
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(23, "sc"), attrs: { _i: 23 } },
                    [
                      _c("v-uni-text", { attrs: { _i: 24 } }, [
                        _vm._v("我的健康"),
                      ]),
                      _c(
                        "v-uni-text",
                        { staticClass: _vm._$g(25, "sc"), attrs: { _i: 25 } },
                        [_vm._v("本周")]
                      ),
                    ],
                    1
                  ),
                  _c(
                    "uni-view",
                    {
                      staticClass: _vm._$g(26, "sc"),
                      attrs: { _i: 26 },
                      on: {
                        click: function ($event) {
                          return _vm.$handleViewEvent($event)
                        },
                      },
                    },
                    [
                      _c(
                        "v-uni-text",
                        { staticClass: _vm._$g(27, "sc"), attrs: { _i: 27 } },
                        [_vm._v("🔄")]
                      ),
                      _c("v-uni-text", { attrs: { _i: 28 } }, [
                        _vm._v("同步数据"),
                      ]),
                    ],
                    1
                  ),
                ],
                1
              ),
              _c(
                "uni-view",
                { staticClass: _vm._$g(29, "sc"), attrs: { _i: 29 } },
                [
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(30, "sc"), attrs: { _i: 30 } },
                    [
                      _c(
                        "uni-view",
                        { staticClass: _vm._$g(31, "sc"), attrs: { _i: 31 } },
                        [_vm._v(_vm._$g(31, "t0-0"))]
                      ),
                      _c(
                        "uni-view",
                        { staticClass: _vm._$g(32, "sc"), attrs: { _i: 32 } },
                        [_vm._v("步数")]
                      ),
                    ],
                    1
                  ),
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(33, "sc"), attrs: { _i: 33 } },
                    [
                      _c(
                        "uni-view",
                        { staticClass: _vm._$g(34, "sc"), attrs: { _i: 34 } },
                        [_vm._v(_vm._$g(34, "t0-0") + "h")]
                      ),
                      _c(
                        "uni-view",
                        { staticClass: _vm._$g(35, "sc"), attrs: { _i: 35 } },
                        [_vm._v("睡眠")]
                      ),
                    ],
                    1
                  ),
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(36, "sc"), attrs: { _i: 36 } },
                    [
                      _c(
                        "uni-view",
                        { staticClass: _vm._$g(37, "sc"), attrs: { _i: 37 } },
                        [_vm._v(_vm._$g(37, "t0-0") + "次/分")]
                      ),
                      _c(
                        "uni-view",
                        { staticClass: _vm._$g(38, "sc"), attrs: { _i: 38 } },
                        [_vm._v("心率")]
                      ),
                    ],
                    1
                  ),
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(39, "sc"), attrs: { _i: 39 } },
                    [
                      _c(
                        "uni-view",
                        { staticClass: _vm._$g(40, "sc"), attrs: { _i: 40 } },
                        [_vm._v(_vm._$g(40, "t0-0"))]
                      ),
                      _c(
                        "uni-view",
                        { staticClass: _vm._$g(41, "sc"), attrs: { _i: 41 } },
                        [_vm._v("血压")]
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          )
        : _vm._e(),
      _c(
        "uni-view",
        { staticClass: _vm._$g(42, "sc"), attrs: { _i: 42 } },
        [
          _c(
            "uni-view",
            { staticClass: _vm._$g(43, "sc"), attrs: { _i: 43 } },
            [
              _c(
                "uni-view",
                { staticClass: _vm._$g(44, "sc"), attrs: { _i: 44 } },
                [_vm._v("服务记录")]
              ),
              _c(
                "uni-view",
                {
                  staticClass: _vm._$g(45, "sc"),
                  attrs: { _i: 45 },
                  on: {
                    click: function ($event) {
                      return _vm.$handleViewEvent($event)
                    },
                  },
                },
                [
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(46, "sc"), attrs: { _i: 46 } },
                    [
                      _c(
                        "v-uni-text",
                        { staticClass: _vm._$g(47, "sc"), attrs: { _i: 47 } },
                        [_vm._v("💬")]
                      ),
                    ],
                    1
                  ),
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(48, "sc"), attrs: { _i: 48 } },
                    [
                      _c(
                        "v-uni-text",
                        { staticClass: _vm._$g(49, "sc"), attrs: { _i: 49 } },
                        [_vm._v("问诊记录")]
                      ),
                    ],
                    1
                  ),
                  _c(
                    "v-uni-text",
                    { staticClass: _vm._$g(50, "sc"), attrs: { _i: 50 } },
                    [_vm._v("›")]
                  ),
                ],
                1
              ),
              _c(
                "uni-view",
                {
                  staticClass: _vm._$g(51, "sc"),
                  attrs: { _i: 51 },
                  on: {
                    click: function ($event) {
                      return _vm.$handleViewEvent($event)
                    },
                  },
                },
                [
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(52, "sc"), attrs: { _i: 52 } },
                    [
                      _c(
                        "v-uni-text",
                        { staticClass: _vm._$g(53, "sc"), attrs: { _i: 53 } },
                        [_vm._v("🖼️")]
                      ),
                    ],
                    1
                  ),
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(54, "sc"), attrs: { _i: 54 } },
                    [
                      _c(
                        "v-uni-text",
                        { staticClass: _vm._$g(55, "sc"), attrs: { _i: 55 } },
                        [_vm._v("图像诊断记录")]
                      ),
                    ],
                    1
                  ),
                  _c(
                    "v-uni-text",
                    { staticClass: _vm._$g(56, "sc"), attrs: { _i: 56 } },
                    [_vm._v("›")]
                  ),
                ],
                1
              ),
            ],
            1
          ),
          _c(
            "uni-view",
            { staticClass: _vm._$g(57, "sc"), attrs: { _i: 57 } },
            [
              _c(
                "uni-view",
                { staticClass: _vm._$g(58, "sc"), attrs: { _i: 58 } },
                [_vm._v("系统设置")]
              ),
              _c(
                "uni-view",
                {
                  staticClass: _vm._$g(59, "sc"),
                  attrs: { _i: 59 },
                  on: {
                    click: function ($event) {
                      return _vm.$handleViewEvent($event)
                    },
                  },
                },
                [
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(60, "sc"), attrs: { _i: 60 } },
                    [
                      _c(
                        "v-uni-text",
                        { staticClass: _vm._$g(61, "sc"), attrs: { _i: 61 } },
                        [_vm._v("⚙️")]
                      ),
                    ],
                    1
                  ),
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(62, "sc"), attrs: { _i: 62 } },
                    [
                      _c(
                        "v-uni-text",
                        { staticClass: _vm._$g(63, "sc"), attrs: { _i: 63 } },
                        [_vm._v("设置")]
                      ),
                    ],
                    1
                  ),
                  _c(
                    "v-uni-text",
                    { staticClass: _vm._$g(64, "sc"), attrs: { _i: 64 } },
                    [_vm._v("›")]
                  ),
                ],
                1
              ),
              _vm._$g(65, "i")
                ? _c(
                    "uni-view",
                    {
                      staticClass: _vm._$g(65, "sc"),
                      attrs: { _i: 65 },
                      on: {
                        click: function ($event) {
                          return _vm.$handleViewEvent($event)
                        },
                      },
                    },
                    [
                      _c(
                        "uni-view",
                        { staticClass: _vm._$g(66, "sc"), attrs: { _i: 66 } },
                        [
                          _c(
                            "v-uni-text",
                            {
                              staticClass: _vm._$g(67, "sc"),
                              attrs: { _i: 67 },
                            },
                            [_vm._v("🚪")]
                          ),
                        ],
                        1
                      ),
                      _c(
                        "uni-view",
                        { staticClass: _vm._$g(68, "sc"), attrs: { _i: 68 } },
                        [
                          _c(
                            "v-uni-text",
                            {
                              staticClass: _vm._$g(69, "sc"),
                              attrs: { _i: 69 },
                            },
                            [_vm._v("退出登录")]
                          ),
                        ],
                        1
                      ),
                      _c(
                        "v-uni-text",
                        { staticClass: _vm._$g(70, "sc"), attrs: { _i: 70 } },
                        [_vm._v("›")]
                      ),
                    ],
                    1
                  )
                : _vm._e(),
            ],
            1
          ),
        ],
        1
      ),
      _c(
        "uni-view",
        { staticClass: _vm._$g(71, "sc"), attrs: { _i: 71 } },
        [_c("v-uni-text", { attrs: { _i: 72 } }, [_vm._v("医疗助手 v1.0.0")])],
        1
      ),
    ],
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 17 */
/*!*****************************************************************************!*\
  !*** D:/ai-doctor/pages/mine/index.vue?vue&type=script&lang=js&mpType=page ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./index.vue?vue&type=script&lang=js&mpType=page */ 18);
/* harmony import */ var _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 18 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!D:/ai-doctor/pages/mine/index.vue?vue&type=script&lang=js&mpType=page ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  data: function data() {
    return {
      wxsProps: {}
    };
  },
  components: {}
};
exports.default = _default;

/***/ }),
/* 19 */
/*!*************************************************************************************!*\
  !*** D:/ai-doctor/pages/mine/index.vue?vue&type=style&index=0&lang=css&mpType=page ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./index.vue?vue&type=style&index=0&lang=css&mpType=page */ 20);
/* harmony import */ var _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 20 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!D:/ai-doctor/pages/mine/index.vue?vue&type=style&index=0&lang=css&mpType=page ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./index.vue?vue&type=style&index=0&lang=css&mpType=page */ 21);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader/lib/addStylesClient.js */ 11).default
var update = add("efd1e238", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 21 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!D:/ai-doctor/pages/mine/index.vue?vue&type=style&index=0&lang=css&mpType=page ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ 10);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.container {\n  background-color: #f5f7fa;\n  min-height: 100vh;\n}\n\n/* 顶部标题 */\n.header {\n  background: linear-gradient(to right, #3a7bd5, #00d2ff);\n  height: 204rpx;\n  padding-top: 44rpx;\n  display: flex;\n  flex-direction: column;\n  color: #fff;\n  position: relative;\n}\n.status-bar {\n  height: 44rpx;\n  width: 100%;\n}\n.nav-bar {\n  height: 160rpx;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.header-title {\n  font-size: 40rpx;\n  font-weight: bold;\n  text-align: center;\n}\n.placeholder {\n  width: 60rpx;\n}\n.back-btn {\n  width: 60rpx;\n  height: 60rpx;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.back-btn uni-text {\n  color: #fff;\n  font-size: 36rpx;\n}\n\n/* 用户信息区域 */\n.user-section {\n  background: linear-gradient(to right, #3a7bd5, #00d2ff);\n  padding: 30rpx;\n  color: #fff;\n}\n.user-section.not-login {\n  display: flex;\n  align-items: center;\n  padding-bottom: 60rpx;\n}\n.avatar {\n  width: 120rpx;\n  height: 120rpx;\n  border-radius: 50%;\n  overflow: hidden;\n  background-color: #fff;\n  margin-right: 30rpx;\n}\n.avatar uni-image {\n  width: 100%;\n  height: 100%;\n}\n.login-action {\n  flex: 1;\n}\n.login-btn {\n  background-color: rgba(255, 255, 255, 0.2);\n  border-radius: 30rpx;\n  height: 60rpx;\n  line-height: 60rpx;\n  text-align: center;\n  font-size: 28rpx;\n  width: 240rpx;\n  margin-bottom: 10rpx;\n}\n.hint-text {\n  font-size: 24rpx;\n  opacity: 0.8;\n}\n.user-section.is-login {\n  padding-bottom: 40rpx;\n}\n.user-info {\n  display: flex;\n  align-items: center;\n  margin-bottom: 30rpx;\n}\n.info {\n  flex: 1;\n}\n.name {\n  font-size: 36rpx;\n  font-weight: bold;\n  margin-bottom: 10rpx;\n}\n.desc {\n  font-size: 24rpx;\n  opacity: 0.8;\n}\n.vip-card {\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 12rpx;\n  padding: 20rpx;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.vip-type {\n  font-size: 28rpx;\n  font-weight: 500;\n}\n.vip-date {\n  font-size: 24rpx;\n  opacity: 0.8;\n}\n\n/* 健康数据卡片 */\n.health-data {\n  margin: 30rpx;\n  background-color: #fff;\n  border-radius: 12rpx;\n  padding: 30rpx;\n  box-shadow: 0 2rpx 10rpx rgba(0, 0, 0, 0.05);\n}\n.card-title {\n  font-size: 32rpx;\n  font-weight: bold;\n  color: #333;\n  margin-bottom: 20rpx;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.title-section {\n  display: flex;\n  align-items: center;\n}\n.title-tag {\n  font-size: 22rpx;\n  color: #3a7bd5;\n  background-color: rgba(58, 123, 213, 0.1);\n  padding: 4rpx 12rpx;\n  border-radius: 20rpx;\n  margin-left: 20rpx;\n  font-weight: normal;\n}\n.sync-btn {\n  display: flex;\n  align-items: center;\n  font-size: 24rpx;\n  color: #3a7bd5;\n  padding: 8rpx 16rpx;\n  background-color: rgba(58, 123, 213, 0.1);\n  border-radius: 20rpx;\n  transition: all 0.3s ease;\n}\n.sync-btn:active {\n  background-color: rgba(58, 123, 213, 0.2);\n  -webkit-transform: scale(0.95);\n          transform: scale(0.95);\n}\n.sync-icon {\n  margin-right: 6rpx;\n  font-size: 20rpx;\n}\n.sync-btn:hover {\n  background-color: rgba(58, 123, 213, 0.15);\n}\n.data-grid {\n  display: flex;\n  flex-wrap: wrap;\n}\n.data-item {\n  width: 50%;\n  padding: 20rpx 0;\n}\n.data-value {\n  font-size: 36rpx;\n  color: #3a7bd5;\n  font-weight: bold;\n  margin-bottom: 10rpx;\n}\n.data-label {\n  font-size: 24rpx;\n  color: #999;\n}\n\n/* 功能列表 */\n.feature-list {\n  margin: 30rpx;\n}\n.feature-group {\n  background-color: #fff;\n  border-radius: 12rpx;\n  margin-bottom: 30rpx;\n  box-shadow: 0 2rpx 10rpx rgba(0, 0, 0, 0.05);\n  overflow: hidden;\n}\n.group-title {\n  font-size: 28rpx;\n  color: #999;\n  padding: 20rpx 30rpx;\n  border-bottom: 1rpx solid #f0f0f0;\n}\n.feature-item {\n  display: flex;\n  align-items: center;\n  padding: 30rpx;\n  border-bottom: 1rpx solid #f0f0f0;\n}\n.feature-item:last-child {\n  border-bottom: none;\n}\n.item-icon {\n  width: 80rpx;\n  height: 80rpx;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 20rpx;\n}\n.item-icon uni-text {\n  font-size: 32rpx;\n}\n.ai-history {\n  background-color: rgba(76, 175, 80, 0.1);\n  color: #4caf50;\n}\n.image-history {\n  background-color: rgba(255, 152, 0, 0.1);\n  color: #ff9800;\n}\n.settings {\n  background-color: rgba(158, 158, 158, 0.1);\n  color: #9e9e9e;\n}\n.logout {\n  background-color: rgba(244, 67, 54, 0.1);\n  color: #f44336;\n}\n.item-content {\n  flex: 1;\n}\n.item-name {\n  font-size: 28rpx;\n  color: #333;\n}\n.icon-right {\n  color: #ccc;\n  font-size: 32rpx;\n}\n\n/* 底部版本信息 */\n.footer {\n  text-align: center;\n  padding: 40rpx 0 60rpx;\n  color: #999;\n  font-size: 24rpx;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 22 */
/*!**********************************************************!*\
  !*** D:/ai-doctor/pages/community/index.vue?mpType=page ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_4f2382da_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=4f2382da&mpType=page */ 23);
/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 25);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _index_vue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&lang=css&mpType=page */ 27);
/* harmony import */ var _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 13);

var renderjs





/* normalize component */

var component = Object(_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_4f2382da_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_4f2382da_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _index_vue_vue_type_template_id_4f2382da_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/community/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 23 */
/*!****************************************************************************************!*\
  !*** D:/ai-doctor/pages/community/index.vue?vue&type=template&id=4f2382da&mpType=page ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_template_id_4f2382da_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./index.vue?vue&type=template&id=4f2382da&mpType=page */ 24);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_template_id_4f2382da_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_template_id_4f2382da_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_template_id_4f2382da_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_template_id_4f2382da_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 24 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!D:/ai-doctor/pages/community/index.vue?vue&type=template&id=4f2382da&mpType=page ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "uni-view",
    { staticClass: _vm._$g(0, "sc"), attrs: { _i: 0 } },
    [
      _c(
        "uni-view",
        { staticClass: _vm._$g(1, "sc"), attrs: { _i: 1 } },
        [
          _c("uni-view", {
            staticClass: _vm._$g(2, "sc"),
            style: _vm._$g(2, "s"),
            attrs: { _i: 2 },
          }),
          _c(
            "uni-view",
            { staticClass: _vm._$g(3, "sc"), attrs: { _i: 3 } },
            [
              _c(
                "v-uni-text",
                { staticClass: _vm._$g(4, "sc"), attrs: { _i: 4 } },
                [_vm._v("健康社区")]
              ),
              _c(
                "uni-view",
                { staticClass: _vm._$g(5, "sc"), attrs: { _i: 5 } },
                [
                  _c(
                    "uni-view",
                    {
                      staticClass: _vm._$g(6, "sc"),
                      attrs: { _i: 6 },
                      on: {
                        click: function ($event) {
                          return _vm.$handleViewEvent($event)
                        },
                      },
                    },
                    [
                      _c(
                        "v-uni-text",
                        { staticClass: _vm._$g(7, "sc"), attrs: { _i: 7 } },
                        [_vm._v("🔍")]
                      ),
                    ],
                    1
                  ),
                  _c(
                    "uni-view",
                    {
                      staticClass: _vm._$g(8, "sc"),
                      attrs: { _i: 8 },
                      on: {
                        click: function ($event) {
                          return _vm.$handleViewEvent($event)
                        },
                      },
                    },
                    [
                      _c(
                        "v-uni-text",
                        { staticClass: _vm._$g(9, "sc"), attrs: { _i: 9 } },
                        [_vm._v("✏️")]
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
      _c(
        "uni-view",
        {
          staticClass: _vm._$g(10, "sc"),
          style: _vm._$g(10, "s"),
          attrs: { _i: 10 },
        },
        [
          _c(
            "v-uni-scroll-view",
            {
              staticClass: _vm._$g(11, "sc"),
              attrs: { "scroll-x": true, "show-scrollbar": "false", _i: 11 },
            },
            _vm._l(_vm._$g(12, "f"), function (category, index, $20, $30) {
              return _c(
                "uni-view",
                {
                  key: category,
                  staticClass: _vm._$g("12-" + $30, "sc"),
                  class: _vm._$g("12-" + $30, "c"),
                  attrs: { _i: "12-" + $30 },
                  on: {
                    click: function ($event) {
                      return _vm.$handleViewEvent($event)
                    },
                  },
                },
                [_vm._v(_vm._$g("12-" + $30, "t0-0"))]
              )
            }),
            1
          ),
        ],
        1
      ),
      _c(
        "v-uni-scroll-view",
        {
          staticClass: _vm._$g(13, "sc"),
          style: _vm._$g(13, "s"),
          attrs: { "scroll-y": true, _i: 13 },
          on: {
            scrolltolower: function ($event) {
              return _vm.$handleViewEvent($event)
            },
          },
        },
        [
          _vm._l(_vm._$g(14, "f"), function (post, $11, $21, $31) {
            return _c(
              "uni-view",
              {
                key: post,
                staticClass: _vm._$g("14-" + $31, "sc"),
                attrs: { _i: "14-" + $31 },
                on: {
                  click: function ($event) {
                    return _vm.$handleViewEvent($event)
                  },
                },
              },
              [
                _c(
                  "uni-view",
                  {
                    staticClass: _vm._$g("15-" + $31, "sc"),
                    attrs: { _i: "15-" + $31 },
                  },
                  [
                    _c("v-uni-image", {
                      staticClass: _vm._$g("16-" + $31, "sc"),
                      attrs: {
                        src: _vm._$g("16-" + $31, "a-src"),
                        mode: "aspectFill",
                        _i: "16-" + $31,
                      },
                    }),
                    _c(
                      "uni-view",
                      {
                        staticClass: _vm._$g("17-" + $31, "sc"),
                        attrs: { _i: "17-" + $31 },
                      },
                      [
                        _c(
                          "v-uni-text",
                          {
                            staticClass: _vm._$g("18-" + $31, "sc"),
                            attrs: { _i: "18-" + $31 },
                          },
                          [_vm._v(_vm._$g("18-" + $31, "t0-0"))]
                        ),
                        _c(
                          "v-uni-text",
                          {
                            staticClass: _vm._$g("19-" + $31, "sc"),
                            attrs: { _i: "19-" + $31 },
                          },
                          [_vm._v(_vm._$g("19-" + $31, "t0-0"))]
                        ),
                      ],
                      1
                    ),
                    _c(
                      "uni-view",
                      {
                        staticClass: _vm._$g("20-" + $31, "sc"),
                        style: _vm._$g("20-" + $31, "s"),
                        attrs: { _i: "20-" + $31 },
                      },
                      [_vm._v(_vm._$g("20-" + $31, "t0-0"))]
                    ),
                  ],
                  1
                ),
                _c(
                  "uni-view",
                  {
                    staticClass: _vm._$g("21-" + $31, "sc"),
                    attrs: { _i: "21-" + $31 },
                  },
                  [
                    _c(
                      "v-uni-text",
                      {
                        staticClass: _vm._$g("22-" + $31, "sc"),
                        attrs: { _i: "22-" + $31 },
                      },
                      [_vm._v(_vm._$g("22-" + $31, "t0-0"))]
                    ),
                    _c(
                      "v-uni-text",
                      {
                        staticClass: _vm._$g("23-" + $31, "sc"),
                        attrs: { _i: "23-" + $31 },
                      },
                      [_vm._v(_vm._$g("23-" + $31, "t0-0"))]
                    ),
                  ],
                  1
                ),
                _vm._$g("24-" + $31, "i")
                  ? _c(
                      "uni-view",
                      {
                        staticClass: _vm._$g("24-" + $31, "sc"),
                        attrs: { _i: "24-" + $31 },
                      },
                      [
                        _vm._l(
                          _vm._$g(25 + "-" + $31, "f"),
                          function (image, index, $22, $32) {
                            return _c("v-uni-image", {
                              key: image,
                              staticClass: _vm._$g(
                                "25-" + $31 + "-" + $32,
                                "sc"
                              ),
                              attrs: {
                                src: _vm._$g("25-" + $31 + "-" + $32, "a-src"),
                                mode: "aspectFill",
                                _i: "25-" + $31 + "-" + $32,
                              },
                              on: {
                                click: function ($event) {
                                  return _vm.$handleViewEvent($event, {
                                    stop: true,
                                  })
                                },
                              },
                            })
                          }
                        ),
                        _vm._$g("26-" + $31, "i")
                          ? _c(
                              "uni-view",
                              {
                                staticClass: _vm._$g("26-" + $31, "sc"),
                                attrs: { _i: "26-" + $31 },
                                on: {
                                  click: function ($event) {
                                    return _vm.$handleViewEvent($event, {
                                      stop: true,
                                    })
                                  },
                                },
                              },
                              [
                                _c(
                                  "v-uni-text",
                                  {
                                    staticClass: _vm._$g("27-" + $31, "sc"),
                                    attrs: { _i: "27-" + $31 },
                                  },
                                  [_vm._v("+" + _vm._$g("27-" + $31, "t0-0"))]
                                ),
                              ],
                              1
                            )
                          : _vm._e(),
                      ],
                      2
                    )
                  : _vm._e(),
                _c(
                  "uni-view",
                  {
                    staticClass: _vm._$g("28-" + $31, "sc"),
                    attrs: { _i: "28-" + $31 },
                  },
                  [
                    _c(
                      "uni-view",
                      {
                        staticClass: _vm._$g("29-" + $31, "sc"),
                        attrs: { _i: "29-" + $31 },
                        on: {
                          click: function ($event) {
                            return _vm.$handleViewEvent($event, { stop: true })
                          },
                        },
                      },
                      [
                        _c(
                          "v-uni-text",
                          {
                            staticClass: _vm._$g("30-" + $31, "sc"),
                            attrs: { _i: "30-" + $31 },
                          },
                          [_vm._v(_vm._$g("30-" + $31, "t0-0"))]
                        ),
                        _c(
                          "v-uni-text",
                          {
                            staticClass: _vm._$g("31-" + $31, "sc"),
                            attrs: { _i: "31-" + $31 },
                          },
                          [_vm._v(_vm._$g("31-" + $31, "t0-0"))]
                        ),
                      ],
                      1
                    ),
                    _c(
                      "uni-view",
                      {
                        staticClass: _vm._$g("32-" + $31, "sc"),
                        attrs: { _i: "32-" + $31 },
                        on: {
                          click: function ($event) {
                            return _vm.$handleViewEvent($event, { stop: true })
                          },
                        },
                      },
                      [
                        _c(
                          "v-uni-text",
                          {
                            staticClass: _vm._$g("33-" + $31, "sc"),
                            attrs: { _i: "33-" + $31 },
                          },
                          [_vm._v("💬")]
                        ),
                        _c(
                          "v-uni-text",
                          {
                            staticClass: _vm._$g("34-" + $31, "sc"),
                            attrs: { _i: "34-" + $31 },
                          },
                          [_vm._v(_vm._$g("34-" + $31, "t0-0"))]
                        ),
                      ],
                      1
                    ),
                    _c(
                      "uni-view",
                      {
                        staticClass: _vm._$g("35-" + $31, "sc"),
                        attrs: { _i: "35-" + $31 },
                        on: {
                          click: function ($event) {
                            return _vm.$handleViewEvent($event, { stop: true })
                          },
                        },
                      },
                      [
                        _c(
                          "v-uni-text",
                          {
                            staticClass: _vm._$g("36-" + $31, "sc"),
                            attrs: { _i: "36-" + $31 },
                          },
                          [_vm._v("📤")]
                        ),
                        _c(
                          "v-uni-text",
                          {
                            staticClass: _vm._$g("37-" + $31, "sc"),
                            attrs: { _i: "37-" + $31 },
                          },
                          [_vm._v(_vm._$g("37-" + $31, "t0-0"))]
                        ),
                      ],
                      1
                    ),
                    _c(
                      "uni-view",
                      {
                        staticClass: _vm._$g("38-" + $31, "sc"),
                        attrs: { _i: "38-" + $31 },
                        on: {
                          click: function ($event) {
                            return _vm.$handleViewEvent($event, { stop: true })
                          },
                        },
                      },
                      [
                        _c(
                          "v-uni-text",
                          {
                            staticClass: _vm._$g("39-" + $31, "sc"),
                            attrs: { _i: "39-" + $31 },
                          },
                          [_vm._v(_vm._$g("39-" + $31, "t0-0"))]
                        ),
                        _c(
                          "v-uni-text",
                          {
                            staticClass: _vm._$g("40-" + $31, "sc"),
                            attrs: { _i: "40-" + $31 },
                          },
                          [_vm._v(_vm._$g("40-" + $31, "t0-0"))]
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            )
          }),
          _vm._$g(41, "i")
            ? _c(
                "uni-view",
                { staticClass: _vm._$g(41, "sc"), attrs: { _i: 41 } },
                [
                  _c(
                    "v-uni-text",
                    { staticClass: _vm._$g(42, "sc"), attrs: { _i: 42 } },
                    [_vm._v("加载中...")]
                  ),
                ],
                1
              )
            : _vm._e(),
          _vm._$g(43, "i")
            ? _c(
                "uni-view",
                { staticClass: _vm._$g(43, "sc"), attrs: { _i: 43 } },
                [
                  _c(
                    "v-uni-text",
                    { staticClass: _vm._$g(44, "sc"), attrs: { _i: 44 } },
                    [_vm._v("没有更多帖子了")]
                  ),
                ],
                1
              )
            : _vm._e(),
        ],
        2
      ),
      _c(
        "uni-view",
        {
          staticClass: _vm._$g(45, "sc"),
          attrs: { _i: 45 },
          on: {
            click: function ($event) {
              return _vm.$handleViewEvent($event)
            },
          },
        },
        [
          _c(
            "v-uni-text",
            { staticClass: _vm._$g(46, "sc"), attrs: { _i: 46 } },
            [_vm._v("✏️")]
          ),
        ],
        1
      ),
    ],
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 25 */
/*!**********************************************************************************!*\
  !*** D:/ai-doctor/pages/community/index.vue?vue&type=script&lang=js&mpType=page ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./index.vue?vue&type=script&lang=js&mpType=page */ 26);
/* harmony import */ var _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 26 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!D:/ai-doctor/pages/community/index.vue?vue&type=script&lang=js&mpType=page ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  data: function data() {
    return {
      wxsProps: {}
    };
  },
  components: {}
};
exports.default = _default;

/***/ }),
/* 27 */
/*!******************************************************************************************!*\
  !*** D:/ai-doctor/pages/community/index.vue?vue&type=style&index=0&lang=css&mpType=page ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./index.vue?vue&type=style&index=0&lang=css&mpType=page */ 28);
/* harmony import */ var _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 28 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!D:/ai-doctor/pages/community/index.vue?vue&type=style&index=0&lang=css&mpType=page ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./index.vue?vue&type=style&index=0&lang=css&mpType=page */ 29);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader/lib/addStylesClient.js */ 11).default
var update = add("4669eb64", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 29 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!D:/ai-doctor/pages/community/index.vue?vue&type=style&index=0&lang=css&mpType=page ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ 10);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.container {\r\n  background-color: #f5f7fa;\r\n  min-height: 100vh;\n}\r\n\r\n/* 顶部标题 */\n.header {\r\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\r\n  color: #fff;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  z-index: 1000;\r\n  box-shadow: 0 4rpx 20rpx rgba(102, 126, 234, 0.3);\n}\n.status-bar {\r\n  width: 100%;\n}\n.nav-bar {\r\n  height: 88rpx;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: 0 30rpx;\n}\n.header-title {\r\n  font-size: 38rpx;\r\n  font-weight: bold;\r\n  text-shadow: 0 2rpx 4rpx rgba(0, 0, 0, 0.1);\n}\n.header-actions {\r\n  display: flex;\r\n  gap: 20rpx;\n}\n.action-btn {\r\n  width: 70rpx;\r\n  height: 70rpx;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background-color: rgba(255, 255, 255, 0.25);\r\n  border-radius: 50%;\r\n  -webkit-backdrop-filter: blur(10rpx);\r\n          backdrop-filter: blur(10rpx);\r\n  transition: all 0.3s ease;\n}\n.action-btn:active {\r\n  -webkit-transform: scale(0.95);\r\n          transform: scale(0.95);\r\n  background-color: rgba(255, 255, 255, 0.35);\n}\n.action-btn uni-text {\r\n  font-size: 30rpx;\n}\r\n\r\n/* 分类标签 */\n.category-tabs {\r\n  background: linear-gradient(to bottom, #fff, #f8f9ff);\r\n  padding: 25rpx 0;\r\n  position: fixed;\r\n  /* top 通过内联样式动态设置 */\r\n  left: 0;\r\n  right: 0;\r\n  z-index: 999;\r\n  box-shadow: 0 4rpx 20rpx rgba(0, 0, 0, 0.08);\r\n  border-bottom: 1rpx solid rgba(102, 126, 234, 0.1);\n}\n.tabs-scroll {\r\n  white-space: nowrap;\r\n  padding: 0 30rpx;\n}\n.tab-item {\r\n  display: inline-block;\r\n  padding: 12rpx 35rpx;\r\n  margin-right: 20rpx;\r\n  border-radius: 35rpx;\r\n  font-size: 26rpx;\r\n  color: #666;\r\n  background: linear-gradient(135deg, #f8f9ff, #e8ecff);\r\n  border: 2rpx solid transparent;\r\n  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);\r\n  position: relative;\r\n  overflow: hidden;\n}\n.tab-item::before {\r\n  content: '';\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background: linear-gradient(135deg, #667eea, #764ba2);\r\n  border-radius: 35rpx;\r\n  opacity: 0;\r\n  transition: opacity 0.4s ease;\r\n  z-index: -1;\n}\n.tab-item.active {\r\n  color: #fff;\r\n  border-color: rgba(102, 126, 234, 0.3);\r\n  -webkit-transform: translateY(-2rpx);\r\n          transform: translateY(-2rpx);\r\n  box-shadow: 0 8rpx 25rpx rgba(102, 126, 234, 0.4);\n}\n.tab-item.active::before {\r\n  opacity: 1;\n}\n.tab-item:active {\r\n  -webkit-transform: scale(0.98);\r\n          transform: scale(0.98);\n}\r\n\r\n/* 帖子列表 */\n.post-list {\r\n  /* margin-top 和 height 通过内联样式动态设置 */\r\n  padding: 20rpx;\n}\n.post-item {\r\n  background: linear-gradient(135deg, #fff, #f8f9ff);\r\n  margin-bottom: 25rpx;\r\n  padding: 35rpx;\r\n  border-radius: 20rpx;\r\n  box-shadow: 0 8rpx 30rpx rgba(0, 0, 0, 0.06);\r\n  border: 1rpx solid rgba(102, 126, 234, 0.08);\r\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\r\n  position: relative;\r\n  overflow: hidden;\n}\n.post-item::before {\r\n  content: '';\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  height: 4rpx;\r\n  background: linear-gradient(90deg, #667eea, #764ba2, #667eea);\r\n  opacity: 0;\r\n  transition: opacity 0.3s ease;\n}\n.post-item:active {\r\n  -webkit-transform: translateY(2rpx);\r\n          transform: translateY(2rpx);\r\n  box-shadow: 0 4rpx 15rpx rgba(0, 0, 0, 0.04);\n}\n.post-item:active::before {\r\n  opacity: 1;\n}\r\n\r\n/* 用户信息 */\n.user-info {\r\n  display: flex;\r\n  align-items: center;\r\n  margin-bottom: 25rpx;\r\n  padding-bottom: 20rpx;\r\n  border-bottom: 1rpx solid rgba(102, 126, 234, 0.1);\n}\n.avatar {\r\n  width: 90rpx;\r\n  height: 90rpx;\r\n  border-radius: 50%;\r\n  margin-right: 25rpx;\r\n  border: 3rpx solid #fff;\r\n  box-shadow: 0 4rpx 15rpx rgba(0, 0, 0, 0.1);\r\n  transition: -webkit-transform 0.3s ease;\r\n  transition: transform 0.3s ease;\r\n  transition: transform 0.3s ease, -webkit-transform 0.3s ease;\n}\n.avatar:active {\r\n  -webkit-transform: scale(1.1);\r\n          transform: scale(1.1);\n}\n.user-meta {\r\n  flex: 1;\r\n  display: flex;\r\n  flex-direction: column;\n}\n.username {\r\n  font-size: 30rpx;\r\n  font-weight: bold;\r\n  color: #333;\r\n  margin-bottom: 6rpx;\r\n  text-shadow: 0 1rpx 2rpx rgba(0, 0, 0, 0.05);\n}\n.post-time {\r\n  font-size: 24rpx;\r\n  color: #888;\r\n  background: linear-gradient(135deg, #f8f9ff, #e8ecff);\r\n  padding: 4rpx 12rpx;\r\n  border-radius: 15rpx;\r\n  display: inline-block;\n}\n.post-category {\r\n  padding: 8rpx 16rpx;\r\n  border-radius: 25rpx;\r\n  font-size: 22rpx;\r\n  color: #fff;\r\n  font-weight: 500;\r\n  box-shadow: 0 4rpx 15rpx rgba(0, 0, 0, 0.15);\r\n  text-shadow: 0 1rpx 2rpx rgba(0, 0, 0, 0.1);\r\n  transition: -webkit-transform 0.3s ease;\r\n  transition: transform 0.3s ease;\r\n  transition: transform 0.3s ease, -webkit-transform 0.3s ease;\n}\n.post-category:active {\r\n  -webkit-transform: scale(0.95);\r\n          transform: scale(0.95);\n}\r\n\r\n/* 帖子内容 */\n.post-content {\r\n  margin-bottom: 25rpx;\n}\n.post-title {\r\n  font-size: 34rpx;\r\n  font-weight: bold;\r\n  color: #333;\r\n  margin-bottom: 15rpx;\r\n  display: block;\r\n  line-height: 1.4;\r\n  background: linear-gradient(135deg, #667eea, #764ba2);\r\n  -webkit-background-clip: text;\r\n  -webkit-text-fill-color: transparent;\r\n  background-clip: text;\r\n  text-shadow: 0 2rpx 4rpx rgba(102, 126, 234, 0.1);\n}\n.post-text {\r\n  font-size: 29rpx;\r\n  color: #555;\r\n  line-height: 1.7;\r\n  display: block;\r\n  background: linear-gradient(135deg, #555, #777);\r\n  -webkit-background-clip: text;\r\n  -webkit-text-fill-color: transparent;\r\n  background-clip: text;\n}\r\n\r\n/* 帖子图片 */\n.post-images {\r\n  display: flex;\r\n  gap: 15rpx;\r\n  margin-bottom: 25rpx;\r\n  flex-wrap: wrap;\n}\n.post-image {\r\n  width: 210rpx;\r\n  height: 210rpx;\r\n  border-radius: 15rpx;\r\n  box-shadow: 0 8rpx 25rpx rgba(0, 0, 0, 0.15);\r\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\r\n  border: 2rpx solid rgba(255, 255, 255, 0.8);\n}\n.post-image:active {\r\n  -webkit-transform: scale(1.05);\r\n          transform: scale(1.05);\r\n  box-shadow: 0 12rpx 35rpx rgba(0, 0, 0, 0.25);\n}\n.more-images {\r\n  width: 210rpx;\r\n  height: 210rpx;\r\n  border-radius: 15rpx;\r\n  background: linear-gradient(135deg, rgba(102, 126, 234, 0.9), rgba(118, 75, 162, 0.9));\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  box-shadow: 0 8rpx 25rpx rgba(102, 126, 234, 0.4);\r\n  border: 2rpx solid rgba(255, 255, 255, 0.3);\r\n  transition: all 0.3s ease;\n}\n.more-images:active {\r\n  -webkit-transform: scale(1.05);\r\n          transform: scale(1.05);\n}\n.more-text {\r\n  color: #fff;\r\n  font-size: 32rpx;\r\n  font-weight: bold;\r\n  text-shadow: 0 2rpx 4rpx rgba(0, 0, 0, 0.3);\n}\r\n\r\n/* 互动区域 */\n.post-actions {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  padding-top: 25rpx;\r\n  border-top: 1rpx solid rgba(102, 126, 234, 0.15);\r\n  margin-top: 20rpx;\n}\n.action-item {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 12rpx;\r\n  padding: 12rpx 25rpx;\r\n  border-radius: 30rpx;\r\n  background: linear-gradient(135deg, #f8f9ff, #e8ecff);\r\n  border: 1rpx solid rgba(102, 126, 234, 0.1);\r\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\r\n  min-width: 120rpx;\r\n  justify-content: center;\n}\n.action-item:active {\r\n  -webkit-transform: translateY(2rpx) scale(0.98);\r\n          transform: translateY(2rpx) scale(0.98);\r\n  background: linear-gradient(135deg, #e8ecff, #d8e2ff);\r\n  box-shadow: 0 4rpx 15rpx rgba(102, 126, 234, 0.2);\n}\n.action-icon {\r\n  font-size: 30rpx;\r\n  -webkit-filter: drop-shadow(0 1rpx 2rpx rgba(0, 0, 0, 0.1));\r\n          filter: drop-shadow(0 1rpx 2rpx rgba(0, 0, 0, 0.1));\n}\n.action-count {\r\n  font-size: 26rpx;\r\n  color: #666;\r\n  font-weight: 500;\n}\r\n\r\n/* 发布按钮 */\n.publish-btn {\r\n  position: fixed;\r\n  bottom: 120rpx;\r\n  right: 40rpx;\r\n  width: 110rpx;\r\n  height: 110rpx;\r\n  background: linear-gradient(135deg, #667eea, #764ba2);\r\n  border-radius: 50%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  box-shadow: 0 12rpx 40rpx rgba(102, 126, 234, 0.5);\r\n  z-index: 1001;\r\n  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);\r\n  border: 3rpx solid rgba(255, 255, 255, 0.3);\r\n  -webkit-backdrop-filter: blur(10rpx);\r\n          backdrop-filter: blur(10rpx);\n}\n.publish-btn:active {\r\n  -webkit-transform: translateY(4rpx) scale(0.95);\r\n          transform: translateY(4rpx) scale(0.95);\r\n  box-shadow: 0 6rpx 20rpx rgba(102, 126, 234, 0.4);\n}\n.publish-icon {\r\n  font-size: 44rpx;\r\n  color: #fff;\r\n  text-shadow: 0 2rpx 4rpx rgba(0, 0, 0, 0.2);\r\n  -webkit-animation: float 3s ease-in-out infinite;\r\n          animation: float 3s ease-in-out infinite;\n}\n@-webkit-keyframes float {\n0%, 100% {\r\n    -webkit-transform: translateY(0);\r\n            transform: translateY(0);\n}\n50% {\r\n    -webkit-transform: translateY(-6rpx);\r\n            transform: translateY(-6rpx);\n}\n}\n@keyframes float {\n0%, 100% {\r\n    -webkit-transform: translateY(0);\r\n            transform: translateY(0);\n}\n50% {\r\n    -webkit-transform: translateY(-6rpx);\r\n            transform: translateY(-6rpx);\n}\n}\r\n\r\n/* 加载状态 */\n.loading-more {\r\n  text-align: center;\r\n  padding: 50rpx;\r\n  background: linear-gradient(135deg, #fff, #f8f9ff);\r\n  border-radius: 20rpx;\r\n  margin: 20rpx;\r\n  box-shadow: 0 4rpx 15rpx rgba(0, 0, 0, 0.05);\n}\n.loading-text {\r\n  font-size: 26rpx;\r\n  color: #888;\r\n  font-weight: 500;\n}\n.no-more {\r\n  text-align: center;\r\n  padding: 50rpx;\r\n  background: linear-gradient(135deg, #fff, #f8f9ff);\r\n  border-radius: 20rpx;\r\n  margin: 20rpx;\r\n  box-shadow: 0 4rpx 15rpx rgba(0, 0, 0, 0.05);\n}\n.no-more-text {\r\n  font-size: 26rpx;\r\n  color: #888;\r\n  font-weight: 500;\n}\r\n\r\n/* 背景装饰 */\n.container::before {\r\n  content: '';\r\n  position: fixed;\r\n  top: -50%;\r\n  left: -50%;\r\n  width: 200%;\r\n  height: 200%;\r\n  background: radial-gradient(circle, rgba(102, 126, 234, 0.03) 0%, transparent 70%);\r\n  z-index: -1;\r\n  -webkit-animation: rotate 60s linear infinite;\r\n          animation: rotate 60s linear infinite;\n}\n@-webkit-keyframes rotate {\nfrom {\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg);\n}\nto {\r\n    -webkit-transform: rotate(360deg);\r\n            transform: rotate(360deg);\n}\n}\n@keyframes rotate {\nfrom {\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg);\n}\nto {\r\n    -webkit-transform: rotate(360deg);\r\n            transform: rotate(360deg);\n}\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 30 */
/*!************************************************************!*\
  !*** D:/ai-doctor/pages/community/publish.vue?mpType=page ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _publish_vue_vue_type_template_id_5aed8690_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./publish.vue?vue&type=template&id=5aed8690&scoped=true&mpType=page */ 31);
/* harmony import */ var _publish_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./publish.vue?vue&type=script&lang=js&mpType=page */ 33);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _publish_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _publish_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _publish_vue_vue_type_style_index_0_id_5aed8690_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./publish.vue?vue&type=style&index=0&id=5aed8690&scoped=true&lang=css&mpType=page */ 35);
/* harmony import */ var _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 13);

var renderjs





/* normalize component */

var component = Object(_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _publish_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _publish_vue_vue_type_template_id_5aed8690_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _publish_vue_vue_type_template_id_5aed8690_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5aed8690",
  null,
  false,
  _publish_vue_vue_type_template_id_5aed8690_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/community/publish.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 31 */
/*!******************************************************************************************************!*\
  !*** D:/ai-doctor/pages/community/publish.vue?vue&type=template&id=5aed8690&scoped=true&mpType=page ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_publish_vue_vue_type_template_id_5aed8690_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./publish.vue?vue&type=template&id=5aed8690&scoped=true&mpType=page */ 32);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_publish_vue_vue_type_template_id_5aed8690_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_publish_vue_vue_type_template_id_5aed8690_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_publish_vue_vue_type_template_id_5aed8690_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_publish_vue_vue_type_template_id_5aed8690_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 32 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!D:/ai-doctor/pages/community/publish.vue?vue&type=template&id=5aed8690&scoped=true&mpType=page ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "uni-view",
    { staticClass: _vm._$g(0, "sc"), attrs: { _i: 0 } },
    [
      _c(
        "uni-view",
        { staticClass: _vm._$g(1, "sc"), attrs: { _i: 1 } },
        [
          _c("uni-view", {
            staticClass: _vm._$g(2, "sc"),
            style: _vm._$g(2, "s"),
            attrs: { _i: 2 },
          }),
          _c(
            "uni-view",
            {
              staticClass: _vm._$g(3, "sc"),
              style: _vm._$g(3, "s"),
              attrs: { _i: 3 },
            },
            [
              _c(
                "uni-view",
                {
                  staticClass: _vm._$g(4, "sc"),
                  attrs: { _i: 4 },
                  on: {
                    click: function ($event) {
                      return _vm.$handleViewEvent($event)
                    },
                  },
                },
                [
                  _c(
                    "v-uni-text",
                    { staticClass: _vm._$g(5, "sc"), attrs: { _i: 5 } },
                    [_vm._v("←")]
                  ),
                ],
                1
              ),
              _c(
                "v-uni-text",
                { staticClass: _vm._$g(6, "sc"), attrs: { _i: 6 } },
                [_vm._v("发布帖子")]
              ),
              _c(
                "uni-view",
                {
                  staticClass: _vm._$g(7, "sc"),
                  attrs: { _i: 7 },
                  on: {
                    click: function ($event) {
                      return _vm.$handleViewEvent($event)
                    },
                  },
                },
                [
                  _c(
                    "v-uni-text",
                    { staticClass: _vm._$g(8, "sc"), attrs: { _i: 8 } },
                    [_vm._v("发布")]
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
      _c(
        "uni-view",
        {
          staticClass: _vm._$g(9, "sc"),
          style: _vm._$g(9, "s"),
          attrs: { _i: 9 },
        },
        [
          _c(
            "uni-view",
            { staticClass: _vm._$g(10, "sc"), attrs: { _i: 10 } },
            [
              _c("v-uni-textarea", {
                staticClass: _vm._$g(11, "sc"),
                attrs: {
                  placeholder: "请输入标题（必填，不超过100字）",
                  maxlength: "100",
                  "auto-height": true,
                  _i: 11,
                },
                model: {
                  value: _vm._$g(11, "v-model"),
                  callback: function ($$v) {
                    _vm.$handleVModelEvent(11, $$v)
                  },
                  expression: "title",
                },
              }),
              _c(
                "v-uni-text",
                { staticClass: _vm._$g(12, "sc"), attrs: { _i: 12 } },
                [_vm._v(_vm._$g(12, "t0-0") + "/100")]
              ),
            ],
            1
          ),
          _c(
            "uni-view",
            { staticClass: _vm._$g(13, "sc"), attrs: { _i: 13 } },
            [
              _c("v-uni-textarea", {
                staticClass: _vm._$g(14, "sc"),
                attrs: {
                  placeholder: "分享你的经验和心得...",
                  maxlength: "5000",
                  "auto-height": true,
                  _i: 14,
                },
                model: {
                  value: _vm._$g(14, "v-model"),
                  callback: function ($$v) {
                    _vm.$handleVModelEvent(14, $$v)
                  },
                  expression: "content",
                },
              }),
              _c(
                "v-uni-text",
                { staticClass: _vm._$g(15, "sc"), attrs: { _i: 15 } },
                [_vm._v(_vm._$g(15, "t0-0") + "/5000")]
              ),
            ],
            1
          ),
          _c(
            "uni-view",
            { staticClass: _vm._$g(16, "sc"), attrs: { _i: 16 } },
            [
              _c(
                "uni-view",
                { staticClass: _vm._$g(17, "sc"), attrs: { _i: 17 } },
                [_vm._v("添加图片（最多9张）")]
              ),
              _c(
                "uni-view",
                { staticClass: _vm._$g(18, "sc"), attrs: { _i: 18 } },
                [
                  _vm._l(_vm._$g(19, "f"), function (image, index, $20, $30) {
                    return _c(
                      "uni-view",
                      {
                        key: image,
                        staticClass: _vm._$g("19-" + $30, "sc"),
                        attrs: { _i: "19-" + $30 },
                      },
                      [
                        _c("v-uni-image", {
                          attrs: {
                            src: _vm._$g("20-" + $30, "a-src"),
                            mode: "aspectFill",
                            _i: "20-" + $30,
                          },
                        }),
                        _c(
                          "uni-view",
                          {
                            staticClass: _vm._$g("21-" + $30, "sc"),
                            attrs: { _i: "21-" + $30 },
                            on: {
                              click: function ($event) {
                                return _vm.$handleViewEvent($event)
                              },
                            },
                          },
                          [
                            _c(
                              "v-uni-text",
                              {
                                staticClass: _vm._$g("22-" + $30, "sc"),
                                attrs: { _i: "22-" + $30 },
                              },
                              [_vm._v("×")]
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    )
                  }),
                  _vm._$g(23, "i")
                    ? _c(
                        "uni-view",
                        {
                          staticClass: _vm._$g(23, "sc"),
                          attrs: { _i: 23 },
                          on: {
                            click: function ($event) {
                              return _vm.$handleViewEvent($event)
                            },
                          },
                        },
                        [
                          _c(
                            "v-uni-text",
                            {
                              staticClass: _vm._$g(24, "sc"),
                              attrs: { _i: 24 },
                            },
                            [_vm._v("📷")]
                          ),
                          _c(
                            "v-uni-text",
                            {
                              staticClass: _vm._$g(25, "sc"),
                              attrs: { _i: 25 },
                            },
                            [_vm._v("添加图片")]
                          ),
                        ],
                        1
                      )
                    : _vm._e(),
                ],
                2
              ),
            ],
            1
          ),
          _c(
            "uni-view",
            { staticClass: _vm._$g(26, "sc"), attrs: { _i: 26 } },
            [
              _c(
                "uni-view",
                { staticClass: _vm._$g(27, "sc"), attrs: { _i: 27 } },
                [_vm._v("选择分类")]
              ),
              _c(
                "uni-view",
                { staticClass: _vm._$g(28, "sc"), attrs: { _i: 28 } },
                _vm._l(_vm._$g(29, "f"), function (cat, $11, $21, $31) {
                  return _c(
                    "uni-view",
                    {
                      key: cat,
                      staticClass: _vm._$g("29-" + $31, "sc"),
                      class: _vm._$g("29-" + $31, "c"),
                      attrs: { _i: "29-" + $31 },
                      on: {
                        click: function ($event) {
                          return _vm.$handleViewEvent($event)
                        },
                      },
                    },
                    [_vm._v(_vm._$g("29-" + $31, "t0-0"))]
                  )
                }),
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 33 */
/*!************************************************************************************!*\
  !*** D:/ai-doctor/pages/community/publish.vue?vue&type=script&lang=js&mpType=page ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_publish_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./publish.vue?vue&type=script&lang=js&mpType=page */ 34);
/* harmony import */ var _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_publish_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_publish_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_publish_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_publish_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_publish_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 34 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!D:/ai-doctor/pages/community/publish.vue?vue&type=script&lang=js&mpType=page ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  data: function data() {
    return {
      wxsProps: {}
    };
  },
  components: {}
};
exports.default = _default;

/***/ }),
/* 35 */
/*!********************************************************************************************************************!*\
  !*** D:/ai-doctor/pages/community/publish.vue?vue&type=style&index=0&id=5aed8690&scoped=true&lang=css&mpType=page ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_publish_vue_vue_type_style_index_0_id_5aed8690_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./publish.vue?vue&type=style&index=0&id=5aed8690&scoped=true&lang=css&mpType=page */ 36);
/* harmony import */ var _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_publish_vue_vue_type_style_index_0_id_5aed8690_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_publish_vue_vue_type_style_index_0_id_5aed8690_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_publish_vue_vue_type_style_index_0_id_5aed8690_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_publish_vue_vue_type_style_index_0_id_5aed8690_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_publish_vue_vue_type_style_index_0_id_5aed8690_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 36 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!D:/ai-doctor/pages/community/publish.vue?vue&type=style&index=0&id=5aed8690&scoped=true&lang=css&mpType=page ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./publish.vue?vue&type=style&index=0&id=5aed8690&scoped=true&lang=css&mpType=page */ 37);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader/lib/addStylesClient.js */ 11).default
var update = add("521c84c2", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 37 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!D:/ai-doctor/pages/community/publish.vue?vue&type=style&index=0&id=5aed8690&scoped=true&lang=css&mpType=page ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ 10);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.container[data-v-5aed8690] {\n  min-height: 100vh;\n  background: #f5f7fa;\n}\n\n/* 导航栏 */\n.header[data-v-5aed8690] {\n  background: linear-gradient(to right, #3a7bd5, #00d2ff);\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 999;\n}\n.nav-bar[data-v-5aed8690] {\n  height: 44px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-left: 15px;\n  /* padding-right 通过内联样式动态设置，避免被胶囊按钮遮挡 */\n}\n.nav-left[data-v-5aed8690] {\n  width: 60px;\n}\n.nav-right[data-v-5aed8690] {\n  min-width: 70px;\n  display: flex;\n  justify-content: flex-end;\n}\n.back-icon[data-v-5aed8690] {\n  color: #fff;\n  font-size: 24px;\n}\n.nav-title[data-v-5aed8690] {\n  flex: 1;\n  text-align: center;\n  font-size: 17px;\n  font-weight: 600;\n  color: #fff;\n}\n.publish-btn[data-v-5aed8690] {\n  color: #fff;\n  font-size: 16px;\n  font-weight: bold;\n  padding: 8px 16px;\n  background: rgba(255, 255, 255, 0.3);\n  border-radius: 20px;\n  border: 1px solid rgba(255, 255, 255, 0.5);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n\n/* 内容区域 */\n.content[data-v-5aed8690] {\n  padding-bottom: 20px;\n}\n.input-section[data-v-5aed8690] {\n  background: #fff;\n  margin-bottom: 10px;\n  padding: 15px;\n  position: relative;\n}\n.title-input[data-v-5aed8690] {\n  width: 100%;\n  min-height: 50px;\n  font-size: 18px;\n  font-weight: 600;\n  line-height: 1.5;\n}\n.content-input[data-v-5aed8690] {\n  width: 100%;\n  min-height: 200px;\n  font-size: 15px;\n  line-height: 1.6;\n}\n.char-count[data-v-5aed8690] {\n  position: absolute;\n  right: 15px;\n  bottom: 10px;\n  font-size: 12px;\n  color: #999;\n}\n\n/* 图片区域 */\n.image-section[data-v-5aed8690] {\n  background: #fff;\n  padding: 15px;\n  margin-bottom: 10px;\n}\n.section-title[data-v-5aed8690] {\n  font-size: 15px;\n  font-weight: 600;\n  color: #333;\n  margin-bottom: 15px;\n}\n.image-grid[data-v-5aed8690] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n.image-item[data-v-5aed8690] {\n  width: 100px;\n  height: 100px;\n  border-radius: 8px;\n  overflow: hidden;\n  position: relative;\n}\n.image-item uni-image[data-v-5aed8690] {\n  width: 100%;\n  height: 100%;\n}\n.delete-btn[data-v-5aed8690] {\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  width: 24px;\n  height: 24px;\n  background: rgba(0, 0, 0, 0.6);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.delete-icon[data-v-5aed8690] {\n  color: #fff;\n  font-size: 18px;\n  line-height: 1;\n}\n.upload-btn[data-v-5aed8690] {\n  width: 100px;\n  height: 100px;\n  border: 1px dashed #ddd;\n  border-radius: 8px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background: #fafafa;\n}\n.upload-icon[data-v-5aed8690] {\n  font-size: 32px;\n  margin-bottom: 5px;\n}\n.upload-text[data-v-5aed8690] {\n  font-size: 12px;\n  color: #999;\n}\n\n/* 分类选择 */\n.category-section[data-v-5aed8690] {\n  background: #fff;\n  padding: 15px;\n}\n.category-list[data-v-5aed8690] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n.category-item[data-v-5aed8690] {\n  padding: 8px 16px;\n  background: #f5f7fa;\n  border-radius: 20px;\n  font-size: 14px;\n  color: #666;\n  transition: all 0.3s;\n}\n.category-item.active[data-v-5aed8690] {\n  background: linear-gradient(135deg, #667eea, #764ba2);\n  color: #fff;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 38 */
/*!***********************************************************!*\
  !*** D:/ai-doctor/pages/community/detail.vue?mpType=page ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _detail_vue_vue_type_template_id_315fcf80_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detail.vue?vue&type=template&id=315fcf80&scoped=true&mpType=page */ 39);
/* harmony import */ var _detail_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail.vue?vue&type=script&lang=js&mpType=page */ 41);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _detail_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _detail_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _detail_vue_vue_type_style_index_0_id_315fcf80_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detail.vue?vue&type=style&index=0&id=315fcf80&scoped=true&lang=css&mpType=page */ 43);
/* harmony import */ var _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 13);

var renderjs





/* normalize component */

var component = Object(_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _detail_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _detail_vue_vue_type_template_id_315fcf80_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _detail_vue_vue_type_template_id_315fcf80_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "315fcf80",
  null,
  false,
  _detail_vue_vue_type_template_id_315fcf80_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/community/detail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 39 */
/*!*****************************************************************************************************!*\
  !*** D:/ai-doctor/pages/community/detail.vue?vue&type=template&id=315fcf80&scoped=true&mpType=page ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_detail_vue_vue_type_template_id_315fcf80_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./detail.vue?vue&type=template&id=315fcf80&scoped=true&mpType=page */ 40);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_detail_vue_vue_type_template_id_315fcf80_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_detail_vue_vue_type_template_id_315fcf80_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_detail_vue_vue_type_template_id_315fcf80_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_detail_vue_vue_type_template_id_315fcf80_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 40 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!D:/ai-doctor/pages/community/detail.vue?vue&type=template&id=315fcf80&scoped=true&mpType=page ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "uni-view",
    { staticClass: _vm._$g(0, "sc"), attrs: { _i: 0 } },
    [
      _c(
        "uni-view",
        { staticClass: _vm._$g(1, "sc"), attrs: { _i: 1 } },
        [
          _c("uni-view", {
            staticClass: _vm._$g(2, "sc"),
            style: _vm._$g(2, "s"),
            attrs: { _i: 2 },
          }),
          _c(
            "uni-view",
            { staticClass: _vm._$g(3, "sc"), attrs: { _i: 3 } },
            [
              _c(
                "uni-view",
                {
                  staticClass: _vm._$g(4, "sc"),
                  attrs: { _i: 4 },
                  on: {
                    click: function ($event) {
                      return _vm.$handleViewEvent($event)
                    },
                  },
                },
                [
                  _c(
                    "v-uni-text",
                    { staticClass: _vm._$g(5, "sc"), attrs: { _i: 5 } },
                    [_vm._v("←")]
                  ),
                ],
                1
              ),
              _c(
                "v-uni-text",
                { staticClass: _vm._$g(6, "sc"), attrs: { _i: 6 } },
                [_vm._v("帖子详情")]
              ),
              _c("uni-view", {
                staticClass: _vm._$g(7, "sc"),
                attrs: { _i: 7 },
              }),
            ],
            1
          ),
        ],
        1
      ),
      _c(
        "v-uni-scroll-view",
        {
          staticClass: _vm._$g(8, "sc"),
          style: _vm._$g(8, "s"),
          attrs: {
            "scroll-y": true,
            "scroll-top": _vm._$g(8, "a-scroll-top"),
            _i: 8,
          },
        },
        [
          _vm._$g(9, "i")
            ? _c(
                "uni-view",
                { staticClass: _vm._$g(9, "sc"), attrs: { _i: 9 } },
                [
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(10, "sc"), attrs: { _i: 10 } },
                    [
                      _c("v-uni-image", {
                        staticClass: _vm._$g(11, "sc"),
                        attrs: {
                          src: _vm._$g(11, "a-src"),
                          mode: "aspectFill",
                          _i: 11,
                        },
                      }),
                      _c(
                        "uni-view",
                        { staticClass: _vm._$g(12, "sc"), attrs: { _i: 12 } },
                        [
                          _c(
                            "v-uni-text",
                            {
                              staticClass: _vm._$g(13, "sc"),
                              attrs: { _i: 13 },
                            },
                            [_vm._v(_vm._$g(13, "t0-0"))]
                          ),
                          _c(
                            "v-uni-text",
                            {
                              staticClass: _vm._$g(14, "sc"),
                              attrs: { _i: 14 },
                            },
                            [_vm._v(_vm._$g(14, "t0-0"))]
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(15, "sc"), attrs: { _i: 15 } },
                    [_vm._v(_vm._$g(15, "t0-0"))]
                  ),
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(16, "sc"), attrs: { _i: 16 } },
                    [_vm._v(_vm._$g(16, "t0-0"))]
                  ),
                  _vm._$g(17, "i")
                    ? _c(
                        "uni-view",
                        { staticClass: _vm._$g(17, "sc"), attrs: { _i: 17 } },
                        _vm._l(
                          _vm._$g(18, "f"),
                          function (image, index, $20, $30) {
                            return _c("v-uni-image", {
                              key: image,
                              staticClass: _vm._$g("18-" + $30, "sc"),
                              attrs: {
                                src: _vm._$g("18-" + $30, "a-src"),
                                mode: "widthFix",
                                _i: "18-" + $30,
                              },
                              on: {
                                click: function ($event) {
                                  return _vm.$handleViewEvent($event)
                                },
                              },
                            })
                          }
                        ),
                        1
                      )
                    : _vm._e(),
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(19, "sc"), attrs: { _i: 19 } },
                    [
                      _c(
                        "v-uni-text",
                        { staticClass: _vm._$g(20, "sc"), attrs: { _i: 20 } },
                        [_vm._v(_vm._$g(20, "t0-0") + " 浏览")]
                      ),
                      _c(
                        "v-uni-text",
                        { staticClass: _vm._$g(21, "sc"), attrs: { _i: 21 } },
                        [_vm._v(_vm._$g(21, "t0-0") + " 点赞")]
                      ),
                      _c(
                        "v-uni-text",
                        { staticClass: _vm._$g(22, "sc"), attrs: { _i: 22 } },
                        [_vm._v(_vm._$g(22, "t0-0") + " 评论")]
                      ),
                      _c(
                        "v-uni-text",
                        { staticClass: _vm._$g(23, "sc"), attrs: { _i: 23 } },
                        [_vm._v(_vm._$g(23, "t0-0") + " 收藏")]
                      ),
                    ],
                    1
                  ),
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(24, "sc"), attrs: { _i: 24 } },
                    [
                      _c(
                        "uni-view",
                        {
                          staticClass: _vm._$g(25, "sc"),
                          attrs: { _i: 25 },
                          on: {
                            click: function ($event) {
                              return _vm.$handleViewEvent($event)
                            },
                          },
                        },
                        [
                          _c(
                            "v-uni-text",
                            {
                              staticClass: _vm._$g(26, "sc"),
                              attrs: { _i: 26 },
                            },
                            [_vm._v(_vm._$g(26, "t0-0"))]
                          ),
                          _c(
                            "v-uni-text",
                            {
                              staticClass: _vm._$g(27, "sc"),
                              attrs: { _i: 27 },
                            },
                            [_vm._v(_vm._$g(27, "t0-0"))]
                          ),
                        ],
                        1
                      ),
                      _c(
                        "uni-view",
                        {
                          staticClass: _vm._$g(28, "sc"),
                          attrs: { _i: 28 },
                          on: {
                            click: function ($event) {
                              return _vm.$handleViewEvent($event)
                            },
                          },
                        },
                        [
                          _c(
                            "v-uni-text",
                            {
                              staticClass: _vm._$g(29, "sc"),
                              attrs: { _i: 29 },
                            },
                            [_vm._v(_vm._$g(29, "t0-0"))]
                          ),
                          _c(
                            "v-uni-text",
                            {
                              staticClass: _vm._$g(30, "sc"),
                              attrs: { _i: 30 },
                            },
                            [_vm._v(_vm._$g(30, "t0-0"))]
                          ),
                        ],
                        1
                      ),
                      _c(
                        "uni-view",
                        {
                          staticClass: _vm._$g(31, "sc"),
                          attrs: { _i: 31 },
                          on: {
                            click: function ($event) {
                              return _vm.$handleViewEvent($event)
                            },
                          },
                        },
                        [
                          _c(
                            "v-uni-text",
                            {
                              staticClass: _vm._$g(32, "sc"),
                              attrs: { _i: 32 },
                            },
                            [_vm._v("📤")]
                          ),
                          _c(
                            "v-uni-text",
                            {
                              staticClass: _vm._$g(33, "sc"),
                              attrs: { _i: 33 },
                            },
                            [_vm._v("分享")]
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              )
            : _vm._e(),
          _c(
            "uni-view",
            { staticClass: _vm._$g(34, "sc"), attrs: { _i: 34 } },
            [
              _c(
                "uni-view",
                { staticClass: _vm._$g(35, "sc"), attrs: { _i: 35 } },
                [_vm._v("全部评论 (" + _vm._$g(35, "t0-0") + ")")]
              ),
              _vm._$g(36, "i")
                ? _c(
                    "uni-view",
                    { staticClass: _vm._$g(36, "sc"), attrs: { _i: 36 } },
                    _vm._l(_vm._$g(37, "f"), function (comment, $11, $21, $31) {
                      return _c(
                        "uni-view",
                        {
                          key: comment,
                          staticClass: _vm._$g("37-" + $31, "sc"),
                          attrs: { _i: "37-" + $31 },
                        },
                        [
                          _c("v-uni-image", {
                            staticClass: _vm._$g("38-" + $31, "sc"),
                            attrs: {
                              src: _vm._$g("38-" + $31, "a-src"),
                              mode: "aspectFill",
                              _i: "38-" + $31,
                            },
                          }),
                          _c(
                            "uni-view",
                            {
                              staticClass: _vm._$g("39-" + $31, "sc"),
                              attrs: { _i: "39-" + $31 },
                            },
                            [
                              _c(
                                "uni-view",
                                {
                                  staticClass: _vm._$g("40-" + $31, "sc"),
                                  attrs: { _i: "40-" + $31 },
                                },
                                [_vm._v(_vm._$g("40-" + $31, "t0-0"))]
                              ),
                              _c(
                                "uni-view",
                                {
                                  staticClass: _vm._$g("41-" + $31, "sc"),
                                  attrs: { _i: "41-" + $31 },
                                },
                                [
                                  _vm._$g("42-" + $31, "i")
                                    ? _c(
                                        "v-uni-text",
                                        {
                                          staticClass: _vm._$g(
                                            "42-" + $31,
                                            "sc"
                                          ),
                                          attrs: { _i: "42-" + $31 },
                                        },
                                        [
                                          _vm._v(
                                            "回复 @" +
                                              _vm._$g("42-" + $31, "t0-0") +
                                              "："
                                          ),
                                        ]
                                      )
                                    : _vm._e(),
                                  _vm._v(_vm._$g("41-" + $31, "t1-0")),
                                ],
                                1
                              ),
                              _c(
                                "uni-view",
                                {
                                  staticClass: _vm._$g("43-" + $31, "sc"),
                                  attrs: { _i: "43-" + $31 },
                                },
                                [
                                  _c(
                                    "v-uni-text",
                                    {
                                      staticClass: _vm._$g("44-" + $31, "sc"),
                                      attrs: { _i: "44-" + $31 },
                                    },
                                    [_vm._v(_vm._$g("44-" + $31, "t0-0"))]
                                  ),
                                  _c(
                                    "uni-view",
                                    {
                                      staticClass: _vm._$g("45-" + $31, "sc"),
                                      attrs: { _i: "45-" + $31 },
                                    },
                                    [
                                      _c(
                                        "v-uni-text",
                                        {
                                          staticClass: _vm._$g(
                                            "46-" + $31,
                                            "sc"
                                          ),
                                          attrs: { _i: "46-" + $31 },
                                          on: {
                                            click: function ($event) {
                                              return _vm.$handleViewEvent(
                                                $event
                                              )
                                            },
                                          },
                                        },
                                        [_vm._v("回复")]
                                      ),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      )
                    }),
                    1
                  )
                : _c(
                    "uni-view",
                    { staticClass: _vm._$g(47, "sc"), attrs: { _i: 47 } },
                    [
                      _c(
                        "v-uni-text",
                        { staticClass: _vm._$g(48, "sc"), attrs: { _i: 48 } },
                        [_vm._v("暂无评论，快来抢沙发吧~")]
                      ),
                    ],
                    1
                  ),
              _vm._$g(49, "i")
                ? _c(
                    "uni-view",
                    {
                      staticClass: _vm._$g(49, "sc"),
                      attrs: { _i: 49 },
                      on: {
                        click: function ($event) {
                          return _vm.$handleViewEvent($event)
                        },
                      },
                    },
                    [
                      _c(
                        "v-uni-text",
                        { staticClass: _vm._$g(50, "sc"), attrs: { _i: 50 } },
                        [_vm._v("加载更多评论")]
                      ),
                    ],
                    1
                  )
                : _vm._e(),
            ],
            1
          ),
        ],
        1
      ),
      _c(
        "uni-view",
        { staticClass: _vm._$g(51, "sc"), attrs: { _i: 51 } },
        [
          _c("v-uni-input", {
            staticClass: _vm._$g(52, "sc"),
            attrs: { placeholder: _vm._$g(52, "a-placeholder"), _i: 52 },
            on: {
              confirm: function ($event) {
                return _vm.$handleViewEvent($event)
              },
            },
            model: {
              value: _vm._$g(52, "v-model"),
              callback: function ($$v) {
                _vm.$handleVModelEvent(52, $$v)
              },
              expression: "commentContent",
            },
          }),
          _c(
            "uni-view",
            {
              staticClass: _vm._$g(53, "sc"),
              attrs: { _i: 53 },
              on: {
                click: function ($event) {
                  return _vm.$handleViewEvent($event)
                },
              },
            },
            [_c("v-uni-text", { attrs: { _i: 54 } }, [_vm._v("发送")])],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 41 */
/*!***********************************************************************************!*\
  !*** D:/ai-doctor/pages/community/detail.vue?vue&type=script&lang=js&mpType=page ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_detail_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./detail.vue?vue&type=script&lang=js&mpType=page */ 42);
/* harmony import */ var _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_detail_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_detail_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_detail_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_detail_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_detail_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 42 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!D:/ai-doctor/pages/community/detail.vue?vue&type=script&lang=js&mpType=page ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  data: function data() {
    return {
      wxsProps: {}
    };
  },
  components: {}
};
exports.default = _default;

/***/ }),
/* 43 */
/*!*******************************************************************************************************************!*\
  !*** D:/ai-doctor/pages/community/detail.vue?vue&type=style&index=0&id=315fcf80&scoped=true&lang=css&mpType=page ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_detail_vue_vue_type_style_index_0_id_315fcf80_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./detail.vue?vue&type=style&index=0&id=315fcf80&scoped=true&lang=css&mpType=page */ 44);
/* harmony import */ var _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_detail_vue_vue_type_style_index_0_id_315fcf80_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_detail_vue_vue_type_style_index_0_id_315fcf80_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_detail_vue_vue_type_style_index_0_id_315fcf80_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_detail_vue_vue_type_style_index_0_id_315fcf80_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_detail_vue_vue_type_style_index_0_id_315fcf80_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 44 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!D:/ai-doctor/pages/community/detail.vue?vue&type=style&index=0&id=315fcf80&scoped=true&lang=css&mpType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./detail.vue?vue&type=style&index=0&id=315fcf80&scoped=true&lang=css&mpType=page */ 45);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader/lib/addStylesClient.js */ 11).default
var update = add("046c684e", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 45 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!D:/ai-doctor/pages/community/detail.vue?vue&type=style&index=0&id=315fcf80&scoped=true&lang=css&mpType=page ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ 10);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.container[data-v-315fcf80] {\n  min-height: 100vh;\n  background: #f5f7fa;\n  padding-bottom: 60px;\n}\n\n/* 导航栏 */\n.header[data-v-315fcf80] {\n  background: linear-gradient(to right, #3a7bd5, #00d2ff);\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 999;\n}\n.nav-bar[data-v-315fcf80] {\n  height: 44px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 15px;\n}\n.nav-left[data-v-315fcf80], .nav-right[data-v-315fcf80] {\n  width: 60px;\n}\n.back-icon[data-v-315fcf80] {\n  color: #fff;\n  font-size: 24px;\n}\n.nav-title[data-v-315fcf80] {\n  flex: 1;\n  text-align: center;\n  font-size: 17px;\n  font-weight: 600;\n  color: #fff;\n}\n\n/* 内容区域 */\n.content[data-v-315fcf80] {\n  /* padding-top 和 height 通过内联样式动态设置 */\n}\n\n/* 帖子详情 */\n.post-detail[data-v-315fcf80] {\n  background: #fff;\n  padding: 15px;\n  margin-bottom: 10px;\n}\n.user-info[data-v-315fcf80] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 15px;\n}\n.avatar[data-v-315fcf80] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  margin-right: 10px;\n}\n.user-meta[data-v-315fcf80] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.username[data-v-315fcf80] {\n  font-size: 15px;\n  font-weight: 600;\n  color: #333;\n  margin-bottom: 3px;\n}\n.post-time[data-v-315fcf80] {\n  font-size: 12px;\n  color: #999;\n}\n.post-title[data-v-315fcf80] {\n  font-size: 20px;\n  font-weight: 600;\n  color: #333;\n  line-height: 1.5;\n  margin-bottom: 10px;\n}\n.post-content[data-v-315fcf80] {\n  font-size: 15px;\n  color: #666;\n  line-height: 1.8;\n  margin-bottom: 15px;\n}\n.post-images[data-v-315fcf80] {\n  margin-bottom: 15px;\n}\n.post-image[data-v-315fcf80] {\n  width: 100%;\n  border-radius: 8px;\n  margin-bottom: 10px;\n}\n.post-stats[data-v-315fcf80] {\n  padding: 10px 0;\n  border-top: 1px solid #f0f0f0;\n  border-bottom: 1px solid #f0f0f0;\n  margin-bottom: 15px;\n  display: flex;\n  gap: 15px;\n}\n.stat-item[data-v-315fcf80] {\n  font-size: 13px;\n  color: #999;\n}\n.post-actions[data-v-315fcf80] {\n  display: flex;\n  justify-content: space-around;\n  padding: 10px 0;\n}\n.action-btn[data-v-315fcf80] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 5px;\n}\n.action-icon[data-v-315fcf80] {\n  font-size: 24px;\n}\n.action-text[data-v-315fcf80] {\n  font-size: 12px;\n  color: #666;\n}\n\n/* 评论区域 */\n.comments-section[data-v-315fcf80] {\n  background: #fff;\n  padding: 15px;\n}\n.section-title[data-v-315fcf80] {\n  font-size: 16px;\n  font-weight: 600;\n  color: #333;\n  margin-bottom: 15px;\n}\n.comment-list[data-v-315fcf80] {\n  margin-bottom: 15px;\n}\n.comment-item[data-v-315fcf80] {\n  display: flex;\n  padding: 15px 0;\n  border-bottom: 1px solid #f5f7fa;\n}\n.comment-avatar[data-v-315fcf80] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  margin-right: 10px;\n  flex-shrink: 0;\n}\n.comment-content[data-v-315fcf80] {\n  flex: 1;\n}\n.comment-user[data-v-315fcf80] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #333;\n  margin-bottom: 5px;\n}\n.comment-text[data-v-315fcf80] {\n  font-size: 14px;\n  color: #666;\n  line-height: 1.6;\n  margin-bottom: 8px;\n}\n.reply-to[data-v-315fcf80] {\n  color: #3a7bd5;\n}\n.comment-meta[data-v-315fcf80] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.comment-time[data-v-315fcf80] {\n  font-size: 12px;\n  color: #999;\n}\n.comment-action[data-v-315fcf80] {\n  font-size: 13px;\n  color: #666;\n  padding: 0 10px;\n}\n.no-comments[data-v-315fcf80] {\n  padding: 40px 0;\n  text-align: center;\n}\n.no-comments-text[data-v-315fcf80] {\n  font-size: 14px;\n  color: #999;\n}\n.load-more[data-v-315fcf80] {\n  text-align: center;\n  padding: 10px 0;\n}\n.load-more-text[data-v-315fcf80] {\n  font-size: 14px;\n  color: #3a7bd5;\n}\n\n/* 底部评论输入 */\n.comment-input-bar[data-v-315fcf80] {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: #fff;\n  padding: 10px 15px;\n  border-top: 1px solid #f0f0f0;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.comment-input[data-v-315fcf80] {\n  flex: 1;\n  height: 36px;\n  background: #f5f7fa;\n  border-radius: 18px;\n  padding: 0 15px;\n  font-size: 14px;\n}\n.send-btn[data-v-315fcf80] {\n  background: linear-gradient(135deg, #667eea, #764ba2);\n  color: #fff;\n  padding: 8px 20px;\n  border-radius: 18px;\n  font-size: 14px;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 46 */
/*!*****************************************************************!*\
  !*** D:/ai-doctor/pages/image-diagnose/history.vue?mpType=page ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _history_vue_vue_type_template_id_50c69604_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./history.vue?vue&type=template&id=50c69604&scoped=true&mpType=page */ 47);
/* harmony import */ var _history_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./history.vue?vue&type=script&lang=js&mpType=page */ 49);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _history_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _history_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _history_vue_vue_type_style_index_0_id_50c69604_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./history.vue?vue&type=style&index=0&id=50c69604&scoped=true&lang=css&mpType=page */ 51);
/* harmony import */ var _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 13);

var renderjs





/* normalize component */

var component = Object(_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _history_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _history_vue_vue_type_template_id_50c69604_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _history_vue_vue_type_template_id_50c69604_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "50c69604",
  null,
  false,
  _history_vue_vue_type_template_id_50c69604_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/image-diagnose/history.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 47 */
/*!***********************************************************************************************************!*\
  !*** D:/ai-doctor/pages/image-diagnose/history.vue?vue&type=template&id=50c69604&scoped=true&mpType=page ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_history_vue_vue_type_template_id_50c69604_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./history.vue?vue&type=template&id=50c69604&scoped=true&mpType=page */ 48);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_history_vue_vue_type_template_id_50c69604_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_history_vue_vue_type_template_id_50c69604_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_history_vue_vue_type_template_id_50c69604_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_history_vue_vue_type_template_id_50c69604_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 48 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!D:/ai-doctor/pages/image-diagnose/history.vue?vue&type=template&id=50c69604&scoped=true&mpType=page ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "uni-view",
    { staticClass: _vm._$g(0, "sc"), attrs: { _i: 0 } },
    [
      _c(
        "uni-view",
        {
          staticClass: _vm._$g(1, "sc"),
          style: _vm._$g(1, "s"),
          attrs: { _i: 1 },
        },
        [
          _c(
            "uni-view",
            { staticClass: _vm._$g(2, "sc"), attrs: { _i: 2 } },
            [
              _c(
                "uni-view",
                {
                  staticClass: _vm._$g(3, "sc"),
                  attrs: { _i: 3 },
                  on: {
                    click: function ($event) {
                      return _vm.$handleViewEvent($event)
                    },
                  },
                },
                [_c("v-uni-text", { attrs: { _i: 4 } }, [_vm._v("←")])],
                1
              ),
              _c(
                "v-uni-text",
                { staticClass: _vm._$g(5, "sc"), attrs: { _i: 5 } },
                [_vm._v("图像诊断记录")]
              ),
              _c("uni-view", {
                staticClass: _vm._$g(6, "sc"),
                attrs: { _i: 6 },
              }),
            ],
            1
          ),
        ],
        1
      ),
      _c(
        "uni-view",
        { staticClass: _vm._$g(7, "sc"), attrs: { _i: 7 } },
        _vm._l(_vm._$g(8, "f"), function (item, $10, $20, $30) {
          return _c(
            "uni-view",
            {
              key: item,
              staticClass: _vm._$g("8-" + $30, "sc"),
              class: _vm._$g("8-" + $30, "c"),
              attrs: { _i: "8-" + $30 },
              on: {
                click: function ($event) {
                  return _vm.$handleViewEvent($event)
                },
              },
            },
            [_vm._v(_vm._$g("8-" + $30, "t0-0"))]
          )
        }),
        1
      ),
      _c(
        "uni-view",
        { staticClass: _vm._$g(9, "sc"), attrs: { _i: 9 } },
        [
          _vm._l(_vm._$g(10, "f"), function (record, $11, $21, $31) {
            return _c(
              "uni-view",
              {
                key: record,
                staticClass: _vm._$g("10-" + $31, "sc"),
                attrs: { _i: "10-" + $31 },
                on: {
                  click: function ($event) {
                    return _vm.$handleViewEvent($event)
                  },
                },
              },
              [
                _c(
                  "uni-view",
                  {
                    staticClass: _vm._$g("11-" + $31, "sc"),
                    attrs: { _i: "11-" + $31 },
                  },
                  [
                    _c(
                      "uni-view",
                      {
                        staticClass: _vm._$g("12-" + $31, "sc"),
                        class: _vm._$g("12-" + $31, "c"),
                        attrs: { _i: "12-" + $31 },
                      },
                      [_vm._v(_vm._$g("12-" + $31, "t0-0") + "期")]
                    ),
                    _c(
                      "v-uni-text",
                      {
                        staticClass: _vm._$g("13-" + $31, "sc"),
                        attrs: { _i: "13-" + $31 },
                      },
                      [_vm._v(_vm._$g("13-" + $31, "t0-0"))]
                    ),
                  ],
                  1
                ),
                _c(
                  "uni-view",
                  {
                    staticClass: _vm._$g("14-" + $31, "sc"),
                    attrs: { _i: "14-" + $31 },
                  },
                  [
                    _c("v-uni-image", {
                      staticClass: _vm._$g("15-" + $31, "sc"),
                      attrs: {
                        src: _vm._$g("15-" + $31, "a-src"),
                        mode: "aspectFill",
                        _i: "15-" + $31,
                      },
                    }),
                    _c(
                      "uni-view",
                      {
                        staticClass: _vm._$g("16-" + $31, "sc"),
                        attrs: { _i: "16-" + $31 },
                      },
                      [
                        _c(
                          "uni-view",
                          {
                            staticClass: _vm._$g("17-" + $31, "sc"),
                            attrs: { _i: "17-" + $31 },
                          },
                          [_vm._v(_vm._$g("17-" + $31, "t0-0"))]
                        ),
                        _c(
                          "uni-view",
                          {
                            staticClass: _vm._$g("18-" + $31, "sc"),
                            attrs: { _i: "18-" + $31 },
                          },
                          [_vm._v(_vm._$g("18-" + $31, "t0-0"))]
                        ),
                        _c(
                          "uni-view",
                          {
                            staticClass: _vm._$g("19-" + $31, "sc"),
                            attrs: { _i: "19-" + $31 },
                          },
                          [
                            _vm._v(
                              "可信度: " + _vm._$g("19-" + $31, "t0-0") + "%"
                            ),
                          ]
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
                _vm._$g("20-" + $31, "i")
                  ? _c(
                      "uni-view",
                      {
                        staticClass: _vm._$g("20-" + $31, "sc"),
                        attrs: { _i: "20-" + $31 },
                      },
                      [
                        _c(
                          "v-uni-text",
                          {
                            staticClass: _vm._$g("21-" + $31, "sc"),
                            attrs: { _i: "21-" + $31 },
                          },
                          [_vm._v("✓ 已创建康复计划")]
                        ),
                      ],
                      1
                    )
                  : _vm._e(),
              ],
              1
            )
          }),
          _vm._$g(22, "i")
            ? _c(
                "uni-view",
                { staticClass: _vm._$g(22, "sc"), attrs: { _i: 22 } },
                [
                  _c(
                    "v-uni-text",
                    { staticClass: _vm._$g(23, "sc"), attrs: { _i: 23 } },
                    [_vm._v("暂无诊断记录")]
                  ),
                  _c(
                    "uni-view",
                    {
                      staticClass: _vm._$g(24, "sc"),
                      attrs: { _i: 24 },
                      on: {
                        click: function ($event) {
                          return _vm.$handleViewEvent($event)
                        },
                      },
                    },
                    [_vm._v("去诊断")]
                  ),
                ],
                1
              )
            : _vm._e(),
          _vm._$g(25, "i")
            ? _c(
                "uni-view",
                { staticClass: _vm._$g(25, "sc"), attrs: { _i: 25 } },
                [
                  _c("v-uni-text", { attrs: { _i: 26 } }, [
                    _vm._v("加载中..."),
                  ]),
                ],
                1
              )
            : _vm._e(),
        ],
        2
      ),
    ],
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 49 */
/*!*****************************************************************************************!*\
  !*** D:/ai-doctor/pages/image-diagnose/history.vue?vue&type=script&lang=js&mpType=page ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_history_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./history.vue?vue&type=script&lang=js&mpType=page */ 50);
/* harmony import */ var _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_history_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_history_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_history_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_history_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_history_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 50 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!D:/ai-doctor/pages/image-diagnose/history.vue?vue&type=script&lang=js&mpType=page ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  data: function data() {
    return {
      wxsProps: {}
    };
  },
  components: {}
};
exports.default = _default;

/***/ }),
/* 51 */
/*!*************************************************************************************************************************!*\
  !*** D:/ai-doctor/pages/image-diagnose/history.vue?vue&type=style&index=0&id=50c69604&scoped=true&lang=css&mpType=page ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_history_vue_vue_type_style_index_0_id_50c69604_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./history.vue?vue&type=style&index=0&id=50c69604&scoped=true&lang=css&mpType=page */ 52);
/* harmony import */ var _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_history_vue_vue_type_style_index_0_id_50c69604_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_history_vue_vue_type_style_index_0_id_50c69604_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_history_vue_vue_type_style_index_0_id_50c69604_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_history_vue_vue_type_style_index_0_id_50c69604_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_history_vue_vue_type_style_index_0_id_50c69604_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 52 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!D:/ai-doctor/pages/image-diagnose/history.vue?vue&type=style&index=0&id=50c69604&scoped=true&lang=css&mpType=page ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./history.vue?vue&type=style&index=0&id=50c69604&scoped=true&lang=css&mpType=page */ 53);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader/lib/addStylesClient.js */ 11).default
var update = add("ac887fb6", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 53 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!D:/ai-doctor/pages/image-diagnose/history.vue?vue&type=style&index=0&id=50c69604&scoped=true&lang=css&mpType=page ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ 10);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.page[data-v-50c69604] {\n  min-height: 100vh;\n  background: #f5f7fa;\n}\n.navbar[data-v-50c69604] {\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  /* padding-top 通过内联样式动态设置 */\n}\n.navbar-inner[data-v-50c69604] {\n  height: 44px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 15px;\n}\n.back-btn[data-v-50c69604], .placeholder[data-v-50c69604] {\n  width: 40px;\n}\n.back-btn[data-v-50c69604] {\n  font-size: 24px;\n  color: #fff;\n}\n.title[data-v-50c69604] {\n  font-size: 18px;\n  color: #fff;\n  font-weight: 600;\n}\n.filter-bar[data-v-50c69604] {\n  display: flex;\n  background: #fff;\n  padding: 10px 15px;\n  gap: 10px;\n}\n.filter-item[data-v-50c69604] {\n  flex: 1;\n  height: 32px;\n  line-height: 32px;\n  text-align: center;\n  background: #f5f7fa;\n  border-radius: 16px;\n  font-size: 14px;\n  color: #666;\n}\n.filter-item.active[data-v-50c69604] {\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  color: #fff;\n}\n.list-container[data-v-50c69604] {\n  padding: 15px;\n}\n.record-card[data-v-50c69604] {\n  background: #fff;\n  border-radius: 12px;\n  padding: 15px;\n  margin-bottom: 15px;\n  box-shadow: 0 2px 8px rgba(0,0,0,0.05);\n}\n.card-header[data-v-50c69604] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n}\n.stage-tag[data-v-50c69604] {\n  padding: 4px 12px;\n  border-radius: 12px;\n  font-size: 12px;\n  color: #fff;\n  font-weight: 600;\n}\n.stage-tag.stage-I[data-v-50c69604] { background: #10b981;\n}\n.stage-tag.stage-II[data-v-50c69604] { background: #3b82f6;\n}\n.stage-tag.stage-III[data-v-50c69604] { background: #f59e0b;\n}\n.stage-tag.stage-IV[data-v-50c69604] { background: #ef4444;\n}\n.time[data-v-50c69604] {\n  font-size: 12px;\n  color: #999;\n}\n.card-body[data-v-50c69604] {\n  display: flex;\n  gap: 12px;\n}\n.thumb[data-v-50c69604] {\n  width: 80px;\n  height: 80px;\n  border-radius: 8px;\n  flex-shrink: 0;\n}\n.info[data-v-50c69604] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.result[data-v-50c69604] {\n  font-size: 15px;\n  font-weight: 600;\n  color: #333;\n}\n.type[data-v-50c69604] {\n  font-size: 13px;\n  color: #7c3aed;\n}\n.confidence[data-v-50c69604] {\n  font-size: 12px;\n  color: #2563eb;\n}\n.card-footer[data-v-50c69604] {\n  margin-top: 10px;\n  padding-top: 10px;\n  border-top: 1px solid #f0f0f0;\n}\n.plan-tag[data-v-50c69604] {\n  font-size: 12px;\n  color: #059669;\n  background: #d1fae5;\n  padding: 3px 10px;\n  border-radius: 10px;\n}\n.empty[data-v-50c69604] {\n  text-align: center;\n  padding: 80px 20px;\n}\n.empty-text[data-v-50c69604] {\n  font-size: 14px;\n  color: #999;\n  display: block;\n  margin-bottom: 20px;\n}\n.empty-btn[data-v-50c69604] {\n  display: inline-block;\n  padding: 10px 30px;\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  color: #fff;\n  border-radius: 20px;\n  font-size: 14px;\n}\n.loading[data-v-50c69604] {\n  text-align: center;\n  padding: 40px;\n  color: #999;\n  font-size: 14px;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 54 */
/*!****************************************************************!*\
  !*** D:/ai-doctor/pages/image-diagnose/detail.vue?mpType=page ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _detail_vue_vue_type_template_id_3ecffd77_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detail.vue?vue&type=template&id=3ecffd77&scoped=true&mpType=page */ 55);
/* harmony import */ var _detail_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail.vue?vue&type=script&lang=js&mpType=page */ 57);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _detail_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _detail_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _detail_vue_vue_type_style_index_0_id_3ecffd77_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detail.vue?vue&type=style&index=0&id=3ecffd77&scoped=true&lang=css&mpType=page */ 59);
/* harmony import */ var _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 13);

var renderjs





/* normalize component */

var component = Object(_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _detail_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _detail_vue_vue_type_template_id_3ecffd77_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _detail_vue_vue_type_template_id_3ecffd77_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3ecffd77",
  null,
  false,
  _detail_vue_vue_type_template_id_3ecffd77_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/image-diagnose/detail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 55 */
/*!**********************************************************************************************************!*\
  !*** D:/ai-doctor/pages/image-diagnose/detail.vue?vue&type=template&id=3ecffd77&scoped=true&mpType=page ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_detail_vue_vue_type_template_id_3ecffd77_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./detail.vue?vue&type=template&id=3ecffd77&scoped=true&mpType=page */ 56);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_detail_vue_vue_type_template_id_3ecffd77_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_detail_vue_vue_type_template_id_3ecffd77_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_detail_vue_vue_type_template_id_3ecffd77_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_detail_vue_vue_type_template_id_3ecffd77_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 56 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!D:/ai-doctor/pages/image-diagnose/detail.vue?vue&type=template&id=3ecffd77&scoped=true&mpType=page ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "uni-view",
    { staticClass: _vm._$g(0, "sc"), attrs: { _i: 0 } },
    [
      _c(
        "uni-view",
        {
          staticClass: _vm._$g(1, "sc"),
          style: _vm._$g(1, "s"),
          attrs: { _i: 1 },
        },
        [
          _c(
            "uni-view",
            { staticClass: _vm._$g(2, "sc"), attrs: { _i: 2 } },
            [
              _c(
                "uni-view",
                {
                  staticClass: _vm._$g(3, "sc"),
                  attrs: { _i: 3 },
                  on: {
                    click: function ($event) {
                      return _vm.$handleViewEvent($event)
                    },
                  },
                },
                [_c("v-uni-text", { attrs: { _i: 4 } }, [_vm._v("←")])],
                1
              ),
              _c(
                "v-uni-text",
                { staticClass: _vm._$g(5, "sc"), attrs: { _i: 5 } },
                [_vm._v("诊断详情")]
              ),
              _c(
                "uni-view",
                {
                  staticClass: _vm._$g(6, "sc"),
                  attrs: { _i: 6 },
                  on: {
                    click: function ($event) {
                      return _vm.$handleViewEvent($event)
                    },
                  },
                },
                [_c("v-uni-text", { attrs: { _i: 7 } }, [_vm._v("↗")])],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
      _vm._$g(8, "i")
        ? _c(
            "uni-view",
            { staticClass: _vm._$g(8, "sc"), attrs: { _i: 8 } },
            [
              _c(
                "uni-view",
                { staticClass: _vm._$g(9, "sc"), attrs: { _i: 9 } },
                [
                  _c("v-uni-image", {
                    staticClass: _vm._$g(10, "sc"),
                    attrs: {
                      src: _vm._$g(10, "a-src"),
                      mode: "aspectFill",
                      _i: 10,
                    },
                    on: {
                      click: function ($event) {
                        return _vm.$handleViewEvent($event)
                      },
                    },
                  }),
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(11, "sc"), attrs: { _i: 11 } },
                    [_vm._v("点击查看大图")]
                  ),
                ],
                1
              ),
              _c(
                "uni-view",
                { staticClass: _vm._$g(12, "sc"), attrs: { _i: 12 } },
                [
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(13, "sc"), attrs: { _i: 13 } },
                    [
                      _c(
                        "v-uni-text",
                        { staticClass: _vm._$g(14, "sc"), attrs: { _i: 14 } },
                        [_vm._v(_vm._$g(14, "t0-0"))]
                      ),
                      _c(
                        "uni-view",
                        {
                          staticClass: _vm._$g(15, "sc"),
                          class: _vm._$g(15, "c"),
                          attrs: { _i: 15 },
                        },
                        [_vm._v(_vm._$g(15, "t0-0") + "期")]
                      ),
                    ],
                    1
                  ),
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(16, "sc"), attrs: { _i: 16 } },
                    [_vm._v("诊断时间: " + _vm._$g(16, "t0-0"))]
                  ),
                ],
                1
              ),
              _c(
                "uni-view",
                { staticClass: _vm._$g(17, "sc"), attrs: { _i: 17 } },
                [
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(18, "sc"), attrs: { _i: 18 } },
                    [_vm._v("诊断结果")]
                  ),
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(19, "sc"), attrs: { _i: 19 } },
                    _vm._l(_vm._$g(20, "f"), function (item, idx, $20, $30) {
                      return _c(
                        "uni-view",
                        {
                          key: item,
                          staticClass: _vm._$g("20-" + $30, "sc"),
                          attrs: { _i: "20-" + $30 },
                        },
                        [
                          _c(
                            "v-uni-text",
                            {
                              staticClass: _vm._$g("21-" + $30, "sc"),
                              attrs: { _i: "21-" + $30 },
                            },
                            [_vm._v(_vm._$g("21-" + $30, "t0-0") + ":")]
                          ),
                          _c(
                            "v-uni-text",
                            {
                              staticClass: _vm._$g("22-" + $30, "sc"),
                              attrs: { _i: "22-" + $30 },
                            },
                            [_vm._v(_vm._$g("22-" + $30, "t0-0"))]
                          ),
                        ],
                        1
                      )
                    }),
                    1
                  ),
                ],
                1
              ),
              _c(
                "uni-view",
                { staticClass: _vm._$g(23, "sc"), attrs: { _i: 23 } },
                [
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(24, "sc"), attrs: { _i: 24 } },
                    [_vm._v("诊断置信度")]
                  ),
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(25, "sc"), attrs: { _i: 25 } },
                    [
                      _c(
                        "uni-view",
                        { staticClass: _vm._$g(26, "sc"), attrs: { _i: 26 } },
                        [
                          _c("uni-view", {
                            staticClass: _vm._$g(27, "sc"),
                            style: _vm._$g(27, "s"),
                            attrs: { _i: 27 },
                          }),
                        ],
                        1
                      ),
                      _c(
                        "v-uni-text",
                        { staticClass: _vm._$g(28, "sc"), attrs: { _i: 28 } },
                        [_vm._v(_vm._$g(28, "t0-0") + "%")]
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
              _c(
                "uni-view",
                { staticClass: _vm._$g(29, "sc"), attrs: { _i: 29 } },
                [
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(30, "sc"), attrs: { _i: 30 } },
                    [_vm._v("分析说明")]
                  ),
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(31, "sc"), attrs: { _i: 31 } },
                    [_vm._v(_vm._$g(31, "t0-0"))]
                  ),
                ],
                1
              ),
              _c(
                "uni-view",
                { staticClass: _vm._$g(32, "sc"), attrs: { _i: 32 } },
                [
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(33, "sc"), attrs: { _i: 33 } },
                    [_vm._v("医疗建议")]
                  ),
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(34, "sc"), attrs: { _i: 34 } },
                    [_vm._v(_vm._$g(34, "t0-0"))]
                  ),
                ],
                1
              ),
              _vm._$g(35, "i")
                ? _c(
                    "uni-view",
                    { staticClass: _vm._$g(35, "sc"), attrs: { _i: 35 } },
                    [
                      _c(
                        "uni-view",
                        { staticClass: _vm._$g(36, "sc"), attrs: { _i: 36 } },
                        [_vm._v("详细评分")]
                      ),
                      _c(
                        "uni-view",
                        { staticClass: _vm._$g(37, "sc"), attrs: { _i: 37 } },
                        _vm._l(_vm._$g(38, "f"), function (cat, idx, $21, $31) {
                          return _c(
                            "uni-view",
                            {
                              key: cat,
                              staticClass: _vm._$g("38-" + $31, "sc"),
                              attrs: { _i: "38-" + $31 },
                            },
                            [
                              _c(
                                "v-uni-text",
                                {
                                  staticClass: _vm._$g("39-" + $31, "sc"),
                                  attrs: { _i: "39-" + $31 },
                                },
                                [_vm._v(_vm._$g("39-" + $31, "t0-0") + "期")]
                              ),
                              _c(
                                "uni-view",
                                {
                                  staticClass: _vm._$g("40-" + $31, "sc"),
                                  attrs: { _i: "40-" + $31 },
                                },
                                [
                                  _c("uni-view", {
                                    staticClass: _vm._$g("41-" + $31, "sc"),
                                    style: _vm._$g("41-" + $31, "s"),
                                    attrs: { _i: "41-" + $31 },
                                  }),
                                ],
                                1
                              ),
                              _c(
                                "v-uni-text",
                                {
                                  staticClass: _vm._$g("42-" + $31, "sc"),
                                  attrs: { _i: "42-" + $31 },
                                },
                                [_vm._v(_vm._$g("42-" + $31, "t0-0") + "%")]
                              ),
                            ],
                            1
                          )
                        }),
                        1
                      ),
                    ],
                    1
                  )
                : _vm._e(),
              _c(
                "uni-view",
                { staticClass: _vm._$g(43, "sc"), attrs: { _i: 43 } },
                [
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(44, "sc"), attrs: { _i: 44 } },
                    [_vm._v("康复计划")]
                  ),
                  _vm._$g(45, "i")
                    ? _c(
                        "uni-view",
                        { staticClass: _vm._$g(45, "sc"), attrs: { _i: 45 } },
                        [
                          _c(
                            "v-uni-text",
                            {
                              staticClass: _vm._$g(46, "sc"),
                              attrs: { _i: 46 },
                            },
                            [_vm._v("✓ 已创建康复训练计划")]
                          ),
                          _c(
                            "uni-view",
                            {
                              staticClass: _vm._$g(47, "sc"),
                              attrs: { _i: 47 },
                              on: {
                                click: function ($event) {
                                  return _vm.$handleViewEvent($event)
                                },
                              },
                            },
                            [_vm._v("查看计划")]
                          ),
                        ],
                        1
                      )
                    : _c(
                        "uni-view",
                        { staticClass: _vm._$g(48, "sc"), attrs: { _i: 48 } },
                        [
                          _c(
                            "v-uni-text",
                            {
                              staticClass: _vm._$g(49, "sc"),
                              attrs: { _i: 49 },
                            },
                            [_vm._v("尚未创建康复计划")]
                          ),
                          _c(
                            "uni-view",
                            {
                              staticClass: _vm._$g(50, "sc"),
                              attrs: { _i: 50 },
                              on: {
                                click: function ($event) {
                                  return _vm.$handleViewEvent($event)
                                },
                              },
                            },
                            [_vm._v("立即创建")]
                          ),
                        ],
                        1
                      ),
                ],
                1
              ),
              _c(
                "uni-view",
                { staticClass: _vm._$g(51, "sc"), attrs: { _i: 51 } },
                [
                  _c(
                    "uni-view",
                    {
                      staticClass: _vm._$g(52, "sc"),
                      attrs: { _i: 52 },
                      on: {
                        click: function ($event) {
                          return _vm.$handleViewEvent($event)
                        },
                      },
                    },
                    [
                      _c("v-uni-text", { attrs: { _i: 53 } }, [
                        _vm._v("重新诊断"),
                      ]),
                    ],
                    1
                  ),
                  _c(
                    "uni-view",
                    {
                      staticClass: _vm._$g(54, "sc"),
                      attrs: { _i: 54 },
                      on: {
                        click: function ($event) {
                          return _vm.$handleViewEvent($event)
                        },
                      },
                    },
                    [
                      _c("v-uni-text", { attrs: { _i: 55 } }, [
                        _vm._v("下载报告"),
                      ]),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          )
        : _vm._e(),
      _vm._$g(56, "i")
        ? _c(
            "uni-view",
            { staticClass: _vm._$g(56, "sc"), attrs: { _i: 56 } },
            [_c("v-uni-text", { attrs: { _i: 57 } }, [_vm._v("加载中...")])],
            1
          )
        : _vm._e(),
    ],
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 57 */
/*!****************************************************************************************!*\
  !*** D:/ai-doctor/pages/image-diagnose/detail.vue?vue&type=script&lang=js&mpType=page ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_detail_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./detail.vue?vue&type=script&lang=js&mpType=page */ 58);
/* harmony import */ var _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_detail_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_detail_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_detail_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_detail_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_detail_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 58 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!D:/ai-doctor/pages/image-diagnose/detail.vue?vue&type=script&lang=js&mpType=page ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  data: function data() {
    return {
      wxsProps: {}
    };
  },
  components: {}
};
exports.default = _default;

/***/ }),
/* 59 */
/*!************************************************************************************************************************!*\
  !*** D:/ai-doctor/pages/image-diagnose/detail.vue?vue&type=style&index=0&id=3ecffd77&scoped=true&lang=css&mpType=page ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_detail_vue_vue_type_style_index_0_id_3ecffd77_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./detail.vue?vue&type=style&index=0&id=3ecffd77&scoped=true&lang=css&mpType=page */ 60);
/* harmony import */ var _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_detail_vue_vue_type_style_index_0_id_3ecffd77_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_detail_vue_vue_type_style_index_0_id_3ecffd77_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_detail_vue_vue_type_style_index_0_id_3ecffd77_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_detail_vue_vue_type_style_index_0_id_3ecffd77_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_detail_vue_vue_type_style_index_0_id_3ecffd77_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 60 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!D:/ai-doctor/pages/image-diagnose/detail.vue?vue&type=style&index=0&id=3ecffd77&scoped=true&lang=css&mpType=page ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./detail.vue?vue&type=style&index=0&id=3ecffd77&scoped=true&lang=css&mpType=page */ 61);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader/lib/addStylesClient.js */ 11).default
var update = add("5c8fbbb2", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 61 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!D:/ai-doctor/pages/image-diagnose/detail.vue?vue&type=style&index=0&id=3ecffd77&scoped=true&lang=css&mpType=page ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ 10);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.page[data-v-3ecffd77] {\n  min-height: 100vh;\n  background: #f5f7fa;\n  padding-bottom: 20px;\n}\n.navbar[data-v-3ecffd77] {\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  /* padding-top 通过内联样式动态设置 */\n}\n.navbar-inner[data-v-3ecffd77] {\n  height: 44px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 15px;\n}\n.back-btn[data-v-3ecffd77], .share-btn[data-v-3ecffd77] {\n  width: 40px;\n  font-size: 24px;\n  color: #fff;\n}\n.title[data-v-3ecffd77] {\n  font-size: 18px;\n  color: #fff;\n  font-weight: 600;\n}\n.content[data-v-3ecffd77] {\n  padding: 15px;\n}\n.image-section[data-v-3ecffd77] {\n  position: relative;\n  width: 100%;\n  height: 300px;\n  border-radius: 12px;\n  overflow: hidden;\n  margin-bottom: 15px;\n}\n.mri-image[data-v-3ecffd77] {\n  width: 100%;\n  height: 100%;\n}\n.image-tip[data-v-3ecffd77] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  padding: 10px;\n  background: linear-gradient(transparent, rgba(0,0,0,0.6));\n  color: #fff;\n  text-align: center;\n  font-size: 12px;\n}\n.info-card[data-v-3ecffd77] {\n  background: #fff;\n  border-radius: 12px;\n  padding: 15px;\n  margin-bottom: 15px;\n}\n.card-title[data-v-3ecffd77] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 10px;\n}\n.type[data-v-3ecffd77] {\n  font-size: 16px;\n  font-weight: 600;\n  color: #333;\n}\n.stage-badge[data-v-3ecffd77] {\n  padding: 5px 12px;\n  border-radius: 12px;\n  font-size: 13px;\n  color: #fff;\n  font-weight: 600;\n}\n.stage-badge.stage-I[data-v-3ecffd77] { background: #10b981;\n}\n.stage-badge.stage-II[data-v-3ecffd77] { background: #3b82f6;\n}\n.stage-badge.stage-III[data-v-3ecffd77] { background: #f59e0b;\n}\n.stage-badge.stage-IV[data-v-3ecffd77] { background: #ef4444;\n}\n.time[data-v-3ecffd77] {\n  font-size: 12px;\n  color: #999;\n}\n.section[data-v-3ecffd77] {\n  background: #fff;\n  border-radius: 12px;\n  padding: 15px;\n  margin-bottom: 15px;\n}\n.section-title[data-v-3ecffd77] {\n  font-size: 15px;\n  font-weight: 600;\n  color: #333;\n  margin-bottom: 12px;\n}\n.result-list[data-v-3ecffd77] {\n  border-left: 3px solid #667eea;\n  padding-left: 12px;\n}\n.result-item[data-v-3ecffd77] {\n  margin-bottom: 10px;\n}\n.label[data-v-3ecffd77] {\n  font-size: 12px;\n  color: #999;\n  display: block;\n  margin-bottom: 4px;\n}\n.value[data-v-3ecffd77] {\n  font-size: 14px;\n  color: #333;\n}\n.confidence-bar[data-v-3ecffd77] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.bar-bg[data-v-3ecffd77] {\n  flex: 1;\n  height: 10px;\n  background: #f0f0f0;\n  border-radius: 5px;\n  overflow: hidden;\n}\n.bar-fill[data-v-3ecffd77] {\n  height: 100%;\n  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);\n  border-radius: 5px;\n  transition: width 0.5s;\n}\n.confidence-text[data-v-3ecffd77] {\n  font-size: 16px;\n  font-weight: 600;\n  color: #667eea;\n  min-width: 50px;\n  text-align: right;\n}\n.text-content[data-v-3ecffd77] {\n  font-size: 14px;\n  color: #666;\n  line-height: 1.8;\n}\n.category-list[data-v-3ecffd77] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.category-item[data-v-3ecffd77] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.cat-name[data-v-3ecffd77] {\n  width: 60px;\n  font-size: 13px;\n  color: #666;\n}\n.cat-bar[data-v-3ecffd77] {\n  flex: 1;\n  height: 8px;\n  background: #f0f0f0;\n  border-radius: 4px;\n  overflow: hidden;\n}\n.cat-fill[data-v-3ecffd77] {\n  height: 100%;\n  background: #667eea;\n  border-radius: 4px;\n}\n.cat-score[data-v-3ecffd77] {\n  width: 50px;\n  font-size: 12px;\n  color: #667eea;\n  text-align: right;\n}\n.rehab-card[data-v-3ecffd77] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px;\n  border-radius: 8px;\n  background: #d1fae5;\n}\n.rehab-card.empty[data-v-3ecffd77] {\n  background: #fef3c7;\n}\n.rehab-status[data-v-3ecffd77], .empty-text[data-v-3ecffd77] {\n  font-size: 14px;\n  color: #059669;\n}\n.empty-text[data-v-3ecffd77] {\n  color: #d97706;\n}\n.rehab-btn[data-v-3ecffd77], .create-btn[data-v-3ecffd77] {\n  padding: 6px 16px;\n  border-radius: 16px;\n  font-size: 13px;\n  color: #fff;\n}\n.rehab-btn[data-v-3ecffd77] {\n  background: #10b981;\n}\n.create-btn[data-v-3ecffd77] {\n  background: #f59e0b;\n}\n.actions[data-v-3ecffd77] {\n  display: flex;\n  gap: 15px;\n  margin-top: 20px;\n}\n.action-btn[data-v-3ecffd77] {\n  flex: 1;\n  height: 44px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 22px;\n  font-size: 15px;\n}\n.action-btn.secondary[data-v-3ecffd77] {\n  background: #fff;\n  color: #667eea;\n  border: 2px solid #667eea;\n}\n.action-btn.primary[data-v-3ecffd77] {\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  color: #fff;\n}\n.loading[data-v-3ecffd77] {\n  text-align: center;\n  padding: 100px 20px;\n  color: #999;\n  font-size: 14px;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 62 */
/*!******************************************************!*\
  !*** D:/ai-doctor/pages/news/detail.vue?mpType=page ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _detail_vue_vue_type_template_id_c06d5818_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detail.vue?vue&type=template&id=c06d5818&scoped=true&mpType=page */ 63);
/* harmony import */ var _detail_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail.vue?vue&type=script&lang=js&mpType=page */ 65);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _detail_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _detail_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _detail_vue_vue_type_style_index_0_id_c06d5818_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detail.vue?vue&type=style&index=0&id=c06d5818&scoped=true&lang=css&mpType=page */ 67);
/* harmony import */ var _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 13);

var renderjs





/* normalize component */

var component = Object(_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _detail_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _detail_vue_vue_type_template_id_c06d5818_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _detail_vue_vue_type_template_id_c06d5818_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "c06d5818",
  null,
  false,
  _detail_vue_vue_type_template_id_c06d5818_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/news/detail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 63 */
/*!************************************************************************************************!*\
  !*** D:/ai-doctor/pages/news/detail.vue?vue&type=template&id=c06d5818&scoped=true&mpType=page ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_detail_vue_vue_type_template_id_c06d5818_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./detail.vue?vue&type=template&id=c06d5818&scoped=true&mpType=page */ 64);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_detail_vue_vue_type_template_id_c06d5818_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_detail_vue_vue_type_template_id_c06d5818_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_detail_vue_vue_type_template_id_c06d5818_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_detail_vue_vue_type_template_id_c06d5818_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 64 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!D:/ai-doctor/pages/news/detail.vue?vue&type=template&id=c06d5818&scoped=true&mpType=page ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "uni-view",
    { staticClass: _vm._$g(0, "sc"), attrs: { _i: 0 } },
    [
      _c(
        "uni-view",
        {
          staticClass: _vm._$g(1, "sc"),
          style: _vm._$g(1, "s"),
          attrs: { _i: 1 },
        },
        [
          _c(
            "uni-view",
            { staticClass: _vm._$g(2, "sc"), attrs: { _i: 2 } },
            [
              _c(
                "uni-view",
                {
                  staticClass: _vm._$g(3, "sc"),
                  attrs: { _i: 3 },
                  on: {
                    click: function ($event) {
                      return _vm.$handleViewEvent($event)
                    },
                  },
                },
                [_c("v-uni-text", { attrs: { _i: 4 } }, [_vm._v("←")])],
                1
              ),
              _c(
                "v-uni-text",
                { staticClass: _vm._$g(5, "sc"), attrs: { _i: 5 } },
                [_vm._v("资讯详情")]
              ),
              _c("uni-view", {
                staticClass: _vm._$g(6, "sc"),
                attrs: { _i: 6 },
              }),
            ],
            1
          ),
        ],
        1
      ),
      _c(
        "v-uni-scroll-view",
        { staticClass: _vm._$g(7, "sc"), attrs: { "scroll-y": true, _i: 7 } },
        [
          _vm._$g(8, "i")
            ? _c(
                "uni-view",
                { staticClass: _vm._$g(8, "sc"), attrs: { _i: 8 } },
                [
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(9, "sc"), attrs: { _i: 9 } },
                    [_vm._v(_vm._$g(9, "t0-0"))]
                  ),
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(10, "sc"), attrs: { _i: 10 } },
                    [
                      _c(
                        "uni-view",
                        { staticClass: _vm._$g(11, "sc"), attrs: { _i: 11 } },
                        [
                          _c(
                            "v-uni-text",
                            {
                              staticClass: _vm._$g(12, "sc"),
                              attrs: { _i: 12 },
                            },
                            [_vm._v("📅")]
                          ),
                          _c("v-uni-text", { attrs: { _i: 13 } }, [
                            _vm._v(_vm._$g(13, "t0-0")),
                          ]),
                        ],
                        1
                      ),
                      _c(
                        "uni-view",
                        { staticClass: _vm._$g(14, "sc"), attrs: { _i: 14 } },
                        [
                          _c(
                            "v-uni-text",
                            {
                              staticClass: _vm._$g(15, "sc"),
                              attrs: { _i: 15 },
                            },
                            [_vm._v("👁")]
                          ),
                          _c("v-uni-text", { attrs: { _i: 16 } }, [
                            _vm._v(_vm._$g(16, "t0-0") + " 阅读"),
                          ]),
                        ],
                        1
                      ),
                      _c(
                        "uni-view",
                        { staticClass: _vm._$g(17, "sc"), attrs: { _i: 17 } },
                        [
                          _c(
                            "v-uni-text",
                            {
                              staticClass: _vm._$g(18, "sc"),
                              attrs: { _i: 18 },
                            },
                            [_vm._v(_vm._$g(18, "t0-0"))]
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _c("v-uni-image", {
                    staticClass: _vm._$g(19, "sc"),
                    attrs: {
                      src: _vm._$g(19, "a-src"),
                      mode: "widthFix",
                      _i: 19,
                    },
                  }),
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(20, "sc"), attrs: { _i: 20 } },
                    [_vm._v(_vm._$g(20, "t0-0"))]
                  ),
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(21, "sc"), attrs: { _i: 21 } },
                    [
                      _c("v-uni-rich-text", {
                        attrs: { nodes: _vm._$g(22, "a-nodes"), _i: 22 },
                      }),
                    ],
                    1
                  ),
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(23, "sc"), attrs: { _i: 23 } },
                    _vm._l(_vm._$g(24, "f"), function (tag, index, $20, $30) {
                      return _c(
                        "uni-view",
                        {
                          key: tag,
                          staticClass: _vm._$g("24-" + $30, "sc"),
                          attrs: { _i: "24-" + $30 },
                        },
                        [_vm._v("#" + _vm._$g("24-" + $30, "t0-0"))]
                      )
                    }),
                    1
                  ),
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(25, "sc"), attrs: { _i: 25 } },
                    [
                      _c(
                        "uni-view",
                        {
                          staticClass: _vm._$g(26, "sc"),
                          attrs: { _i: 26 },
                          on: {
                            click: function ($event) {
                              return _vm.$handleViewEvent($event)
                            },
                          },
                        },
                        [
                          _c(
                            "v-uni-text",
                            {
                              staticClass: _vm._$g(27, "sc"),
                              class: _vm._$g(27, "c"),
                              attrs: { _i: 27 },
                            },
                            [_vm._v(_vm._$g(27, "t0-0"))]
                          ),
                          _c("v-uni-text", { attrs: { _i: 28 } }, [
                            _vm._v(_vm._$g(28, "t0-0")),
                          ]),
                        ],
                        1
                      ),
                      _c(
                        "uni-view",
                        {
                          staticClass: _vm._$g(29, "sc"),
                          attrs: { _i: 29 },
                          on: {
                            click: function ($event) {
                              return _vm.$handleViewEvent($event)
                            },
                          },
                        },
                        [
                          _c(
                            "v-uni-text",
                            {
                              staticClass: _vm._$g(30, "sc"),
                              attrs: { _i: 30 },
                            },
                            [_vm._v("📤")]
                          ),
                          _c("v-uni-text", { attrs: { _i: 31 } }, [
                            _vm._v("分享"),
                          ]),
                        ],
                        1
                      ),
                      _c(
                        "uni-view",
                        {
                          staticClass: _vm._$g(32, "sc"),
                          attrs: { _i: 32 },
                          on: {
                            click: function ($event) {
                              return _vm.$handleViewEvent($event)
                            },
                          },
                        },
                        [
                          _c(
                            "v-uni-text",
                            {
                              staticClass: _vm._$g(33, "sc"),
                              class: _vm._$g(33, "c"),
                              attrs: { _i: 33 },
                            },
                            [_vm._v(_vm._$g(33, "t0-0"))]
                          ),
                          _c("v-uni-text", { attrs: { _i: 34 } }, [
                            _vm._v("收藏"),
                          ]),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              )
            : _c(
                "uni-view",
                { staticClass: _vm._$g(35, "sc"), attrs: { _i: 35 } },
                [
                  _c("v-uni-text", { attrs: { _i: 36 } }, [
                    _vm._v("加载中..."),
                  ]),
                ],
                1
              ),
        ],
        1
      ),
    ],
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 65 */
/*!******************************************************************************!*\
  !*** D:/ai-doctor/pages/news/detail.vue?vue&type=script&lang=js&mpType=page ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_detail_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./detail.vue?vue&type=script&lang=js&mpType=page */ 66);
/* harmony import */ var _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_detail_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_detail_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_detail_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_detail_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_detail_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 66 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!D:/ai-doctor/pages/news/detail.vue?vue&type=script&lang=js&mpType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  data: function data() {
    return {
      wxsProps: {}
    };
  },
  components: {}
};
exports.default = _default;

/***/ }),
/* 67 */
/*!**************************************************************************************************************!*\
  !*** D:/ai-doctor/pages/news/detail.vue?vue&type=style&index=0&id=c06d5818&scoped=true&lang=css&mpType=page ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_detail_vue_vue_type_style_index_0_id_c06d5818_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./detail.vue?vue&type=style&index=0&id=c06d5818&scoped=true&lang=css&mpType=page */ 68);
/* harmony import */ var _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_detail_vue_vue_type_style_index_0_id_c06d5818_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_detail_vue_vue_type_style_index_0_id_c06d5818_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_detail_vue_vue_type_style_index_0_id_c06d5818_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_detail_vue_vue_type_style_index_0_id_c06d5818_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_detail_vue_vue_type_style_index_0_id_c06d5818_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 68 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!D:/ai-doctor/pages/news/detail.vue?vue&type=style&index=0&id=c06d5818&scoped=true&lang=css&mpType=page ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./detail.vue?vue&type=style&index=0&id=c06d5818&scoped=true&lang=css&mpType=page */ 69);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader/lib/addStylesClient.js */ 11).default
var update = add("078cd976", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 69 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!D:/ai-doctor/pages/news/detail.vue?vue&type=style&index=0&id=c06d5818&scoped=true&lang=css&mpType=page ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ 10);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.container[data-v-c06d5818] {\n  min-height: 100vh;\n  background: #f5f7fa;\n}\n\n/* 导航栏 */\n.navbar[data-v-c06d5818] {\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  box-shadow: 0 2px 10px rgba(102, 126, 234, 0.2);\n}\n.navbar-inner[data-v-c06d5818] {\n  height: 44px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 15px;\n}\n.back-btn[data-v-c06d5818] {\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 50%;\n  color: #fff;\n  font-size: 20px;\n  font-weight: bold;\n}\n.navbar-title[data-v-c06d5818] {\n  flex: 1;\n  text-align: center;\n  font-size: 17px;\n  font-weight: 600;\n  color: #fff;\n}\n.placeholder[data-v-c06d5818] {\n  width: 40px;\n}\n\n/* 内容区域 */\n.content[data-v-c06d5818] {\n  height: calc(100vh - 44px);\n}\n.article[data-v-c06d5818] {\n  background: #fff;\n  padding: 20px;\n  margin: 15px;\n  border-radius: 16px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);\n}\n.article-title[data-v-c06d5818] {\n  font-size: 22px;\n  font-weight: bold;\n  color: #333;\n  line-height: 1.5;\n  margin-bottom: 15px;\n}\n.article-meta[data-v-c06d5818] {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n}\n.meta-item[data-v-c06d5818] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 13px;\n  color: #999;\n}\n.meta-icon[data-v-c06d5818] {\n  font-size: 14px;\n}\n.meta-tag[data-v-c06d5818] {\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  color: #fff;\n  padding: 4px 12px;\n  border-radius: 12px;\n  font-size: 12px;\n}\n.article-cover[data-v-c06d5818] {\n  width: 100%;\n  border-radius: 12px;\n  margin-bottom: 20px;\n}\n.article-summary[data-v-c06d5818] {\n  font-size: 15px;\n  color: #666;\n  line-height: 1.8;\n  padding: 15px;\n  background: #f8f9ff;\n  border-left: 4px solid #667eea;\n  border-radius: 4px;\n  margin-bottom: 20px;\n}\n.article-content[data-v-c06d5818] {\n  font-size: 16px;\n  line-height: 2;\n  color: #333;\n  margin-bottom: 30px;\n}\n.article-tags[data-v-c06d5818] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-bottom: 30px;\n  padding-top: 20px;\n  border-top: 1px solid #f0f0f0;\n}\n.tag-item[data-v-c06d5818] {\n  background: rgba(102, 126, 234, 0.1);\n  color: #667eea;\n  padding: 6px 15px;\n  border-radius: 20px;\n  font-size: 13px;\n}\n.article-actions[data-v-c06d5818] {\n  display: flex;\n  justify-content: space-around;\n  padding: 20px 0;\n  border-top: 1px solid #f0f0f0;\n}\n.action-item[data-v-c06d5818] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  font-size: 14px;\n  color: #666;\n}\n.action-icon[data-v-c06d5818] {\n  font-size: 28px;\n  transition: all 0.3s ease;\n}\n.action-icon.liked[data-v-c06d5818],\n.action-icon.collected[data-v-c06d5818] {\n  -webkit-transform: scale(1.2);\n          transform: scale(1.2);\n}\n.loading[data-v-c06d5818] {\n  text-align: center;\n  padding: 100px 0;\n  color: #999;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 70 */
/*!************************************************************!*\
  !*** D:/ai-doctor/pages/admin/init-videos.vue?mpType=page ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _init_videos_vue_vue_type_template_id_212d6d9c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init-videos.vue?vue&type=template&id=212d6d9c&scoped=true&mpType=page */ 71);
/* harmony import */ var _init_videos_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./init-videos.vue?vue&type=script&lang=js&mpType=page */ 73);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _init_videos_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _init_videos_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _init_videos_vue_vue_type_style_index_0_id_212d6d9c_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./init-videos.vue?vue&type=style&index=0&id=212d6d9c&scoped=true&lang=css&mpType=page */ 75);
/* harmony import */ var _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 13);

var renderjs





/* normalize component */

var component = Object(_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _init_videos_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _init_videos_vue_vue_type_template_id_212d6d9c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _init_videos_vue_vue_type_template_id_212d6d9c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "212d6d9c",
  null,
  false,
  _init_videos_vue_vue_type_template_id_212d6d9c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/admin/init-videos.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 71 */
/*!******************************************************************************************************!*\
  !*** D:/ai-doctor/pages/admin/init-videos.vue?vue&type=template&id=212d6d9c&scoped=true&mpType=page ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_init_videos_vue_vue_type_template_id_212d6d9c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./init-videos.vue?vue&type=template&id=212d6d9c&scoped=true&mpType=page */ 72);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_init_videos_vue_vue_type_template_id_212d6d9c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_init_videos_vue_vue_type_template_id_212d6d9c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_init_videos_vue_vue_type_template_id_212d6d9c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_init_videos_vue_vue_type_template_id_212d6d9c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 72 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!D:/ai-doctor/pages/admin/init-videos.vue?vue&type=template&id=212d6d9c&scoped=true&mpType=page ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "uni-view",
    { staticClass: _vm._$g(0, "sc"), attrs: { _i: 0 } },
    [
      _c(
        "uni-view",
        { staticClass: _vm._$g(1, "sc"), attrs: { _i: 1 } },
        [
          _c(
            "v-uni-text",
            { staticClass: _vm._$g(2, "sc"), attrs: { _i: 2 } },
            [_vm._v("视频管理")]
          ),
        ],
        1
      ),
      _c(
        "uni-view",
        { staticClass: _vm._$g(3, "sc"), attrs: { _i: 3 } },
        [
          _c("uni-view", { staticClass: _vm._$g(4, "sc"), attrs: { _i: 4 } }, [
            _vm._v("快速初始化"),
          ]),
          _c(
            "v-uni-button",
            {
              staticClass: _vm._$g(5, "sc"),
              attrs: { _i: 5 },
              on: {
                click: function ($event) {
                  return _vm.$handleViewEvent($event)
                },
              },
            },
            [_vm._v("初始化示例视频数据")]
          ),
          _c(
            "v-uni-text",
            { staticClass: _vm._$g(6, "sc"), attrs: { _i: 6 } },
            [_vm._v("将创建3个示例康复训练视频记录")]
          ),
        ],
        1
      ),
      _c(
        "uni-view",
        { staticClass: _vm._$g(7, "sc"), attrs: { _i: 7 } },
        [
          _c("uni-view", { staticClass: _vm._$g(8, "sc"), attrs: { _i: 8 } }, [
            _vm._v("添加抖音视频"),
          ]),
          _c(
            "v-uni-text",
            { staticClass: _vm._$g(9, "sc"), attrs: { _i: 9 } },
            [_vm._v("💡 支持直接使用抖音视频链接或上传到云存储")]
          ),
          _c(
            "uni-view",
            { staticClass: _vm._$g(10, "sc"), attrs: { _i: 10 } },
            [
              _c(
                "uni-view",
                { staticClass: _vm._$g(11, "sc"), attrs: { _i: 11 } },
                [
                  _c(
                    "v-uni-text",
                    { staticClass: _vm._$g(12, "sc"), attrs: { _i: 12 } },
                    [_vm._v("视频标题")]
                  ),
                  _c("v-uni-input", {
                    attrs: {
                      placeholder: "例如：膝关节康复训练 - 基础篇",
                      _i: 13,
                    },
                    model: {
                      value: _vm._$g(13, "v-model"),
                      callback: function ($$v) {
                        _vm.$handleVModelEvent(13, $$v)
                      },
                      expression: "videoForm.title",
                    },
                  }),
                ],
                1
              ),
              _c(
                "uni-view",
                { staticClass: _vm._$g(14, "sc"), attrs: { _i: 14 } },
                [
                  _c(
                    "v-uni-text",
                    { staticClass: _vm._$g(15, "sc"), attrs: { _i: 15 } },
                    [_vm._v("视频描述")]
                  ),
                  _c("v-uni-textarea", {
                    attrs: {
                      placeholder: "简要描述视频内容",
                      maxlength: "200",
                      _i: 16,
                    },
                    model: {
                      value: _vm._$g(16, "v-model"),
                      callback: function ($$v) {
                        _vm.$handleVModelEvent(16, $$v)
                      },
                      expression: "videoForm.description",
                    },
                  }),
                ],
                1
              ),
              _c(
                "uni-view",
                { staticClass: _vm._$g(17, "sc"), attrs: { _i: 17 } },
                [
                  _c(
                    "v-uni-text",
                    { staticClass: _vm._$g(18, "sc"), attrs: { _i: 18 } },
                    [_vm._v("视频来源")]
                  ),
                  _c(
                    "v-uni-radio-group",
                    {
                      attrs: { _i: 19 },
                      on: {
                        change: function ($event) {
                          return _vm.$handleViewEvent($event)
                        },
                      },
                    },
                    [
                      _c(
                        "v-uni-label",
                        { attrs: { _i: 20 } },
                        [
                          _c("v-uni-radio", {
                            attrs: {
                              value: "cloud",
                              checked: _vm._$g(21, "a-checked"),
                              _i: 21,
                            },
                          }),
                          _vm._v("云存储"),
                        ],
                        1
                      ),
                      _c(
                        "v-uni-label",
                        { attrs: { _i: 22 } },
                        [
                          _c("v-uni-radio", {
                            attrs: {
                              value: "douyin",
                              checked: _vm._$g(23, "a-checked"),
                              _i: 23,
                            },
                          }),
                          _vm._v("抖音链接"),
                        ],
                        1
                      ),
                      _c(
                        "v-uni-label",
                        { attrs: { _i: 24 } },
                        [
                          _c("v-uni-radio", {
                            attrs: {
                              value: "url",
                              checked: _vm._$g(25, "a-checked"),
                              _i: 25,
                            },
                          }),
                          _vm._v("其他URL"),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._$g(26, "i")
                ? _c(
                    "uni-view",
                    { staticClass: _vm._$g(26, "sc"), attrs: { _i: 26 } },
                    [
                      _c(
                        "v-uni-text",
                        { staticClass: _vm._$g(27, "sc"), attrs: { _i: 27 } },
                        [_vm._v("云存储路径")]
                      ),
                      _c("v-uni-input", {
                        attrs: {
                          placeholder: "cloud://xxx.../rehab-videos/xxx.mp4",
                          _i: 28,
                        },
                        model: {
                          value: _vm._$g(28, "v-model"),
                          callback: function ($$v) {
                            _vm.$handleVModelEvent(28, $$v)
                          },
                          expression: "videoForm.videoUrl",
                        },
                      }),
                      _c(
                        "v-uni-text",
                        { staticClass: _vm._$g(29, "sc"), attrs: { _i: 29 } },
                        [_vm._v("从云存储复制文件ID粘贴到这里")]
                      ),
                    ],
                    1
                  )
                : _vm._e(),
              _vm._$g(30, "i")
                ? _c(
                    "uni-view",
                    { staticClass: _vm._$g(30, "sc"), attrs: { _i: 30 } },
                    [
                      _c(
                        "v-uni-text",
                        { staticClass: _vm._$g(31, "sc"), attrs: { _i: 31 } },
                        [_vm._v("抖音视频链接")]
                      ),
                      _c("v-uni-input", {
                        attrs: { placeholder: "粘贴抖音分享链接", _i: 32 },
                        model: {
                          value: _vm._$g(32, "v-model"),
                          callback: function ($$v) {
                            _vm.$handleVModelEvent(32, $$v)
                          },
                          expression: "videoForm.douyinUrl",
                        },
                      }),
                      _c(
                        "v-uni-text",
                        { staticClass: _vm._$g(33, "sc"), attrs: { _i: 33 } },
                        [_vm._v("打开抖音→分享→复制链接，粘贴到这里")]
                      ),
                      _c(
                        "v-uni-text",
                        { staticClass: _vm._$g(34, "sc"), attrs: { _i: 34 } },
                        [_vm._v("⚠️ 注意：需要确保视频可公开访问")]
                      ),
                    ],
                    1
                  )
                : _vm._e(),
              _vm._$g(35, "i")
                ? _c(
                    "uni-view",
                    { staticClass: _vm._$g(35, "sc"), attrs: { _i: 35 } },
                    [
                      _c(
                        "v-uni-text",
                        { staticClass: _vm._$g(36, "sc"), attrs: { _i: 36 } },
                        [_vm._v("视频URL")]
                      ),
                      _c("v-uni-input", {
                        attrs: {
                          placeholder: "https://example.com/video.mp4",
                          _i: 37,
                        },
                        model: {
                          value: _vm._$g(37, "v-model"),
                          callback: function ($$v) {
                            _vm.$handleVModelEvent(37, $$v)
                          },
                          expression: "videoForm.videoUrl",
                        },
                      }),
                      _c(
                        "v-uni-text",
                        { staticClass: _vm._$g(38, "sc"), attrs: { _i: 38 } },
                        [_vm._v("输入完整的视频URL地址")]
                      ),
                    ],
                    1
                  )
                : _vm._e(),
              _c(
                "uni-view",
                { staticClass: _vm._$g(39, "sc"), attrs: { _i: 39 } },
                [
                  _c(
                    "v-uni-text",
                    { staticClass: _vm._$g(40, "sc"), attrs: { _i: 40 } },
                    [_vm._v("缩略图路径（可选）")]
                  ),
                  _c("v-uni-input", {
                    attrs: {
                      placeholder: "cloud://xxx.../thumbnails/xxx.jpg",
                      _i: 41,
                    },
                    model: {
                      value: _vm._$g(41, "v-model"),
                      callback: function ($$v) {
                        _vm.$handleVModelEvent(41, $$v)
                      },
                      expression: "videoForm.thumbnailUrl",
                    },
                  }),
                ],
                1
              ),
              _c(
                "uni-view",
                { staticClass: _vm._$g(42, "sc"), attrs: { _i: 42 } },
                [
                  _c(
                    "v-uni-text",
                    { staticClass: _vm._$g(43, "sc"), attrs: { _i: 43 } },
                    [_vm._v("视频时长（秒）")]
                  ),
                  _c("v-uni-input", {
                    attrs: { type: "number", placeholder: "例如：300", _i: 44 },
                    model: {
                      value: _vm._$g(44, "v-model"),
                      callback: function ($$v) {
                        _vm.$handleVModelEvent(44, $$v)
                      },
                      expression: "videoForm.duration",
                    },
                  }),
                ],
                1
              ),
              _c(
                "uni-view",
                { staticClass: _vm._$g(45, "sc"), attrs: { _i: 45 } },
                [
                  _c(
                    "v-uni-text",
                    { staticClass: _vm._$g(46, "sc"), attrs: { _i: 46 } },
                    [_vm._v("难度等级")]
                  ),
                  _c(
                    "v-uni-radio-group",
                    {
                      attrs: { _i: 47 },
                      on: {
                        change: function ($event) {
                          return _vm.$handleViewEvent($event)
                        },
                      },
                    },
                    [
                      _c(
                        "v-uni-label",
                        { attrs: { _i: 48 } },
                        [
                          _c("v-uni-radio", {
                            attrs: {
                              value: "easy",
                              checked: _vm._$g(49, "a-checked"),
                              _i: 49,
                            },
                          }),
                          _vm._v("简单"),
                        ],
                        1
                      ),
                      _c(
                        "v-uni-label",
                        { attrs: { _i: 50 } },
                        [
                          _c("v-uni-radio", {
                            attrs: {
                              value: "medium",
                              checked: _vm._$g(51, "a-checked"),
                              _i: 51,
                            },
                          }),
                          _vm._v("中等"),
                        ],
                        1
                      ),
                      _c(
                        "v-uni-label",
                        { attrs: { _i: 52 } },
                        [
                          _c("v-uni-radio", {
                            attrs: {
                              value: "hard",
                              checked: _vm._$g(53, "a-checked"),
                              _i: 53,
                            },
                          }),
                          _vm._v("困难"),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
              _c(
                "uni-view",
                { staticClass: _vm._$g(54, "sc"), attrs: { _i: 54 } },
                [
                  _c(
                    "v-uni-text",
                    { staticClass: _vm._$g(55, "sc"), attrs: { _i: 55 } },
                    [_vm._v("训练类别")]
                  ),
                  _c(
                    "v-uni-radio-group",
                    {
                      attrs: { _i: 56 },
                      on: {
                        change: function ($event) {
                          return _vm.$handleViewEvent($event)
                        },
                      },
                    },
                    [
                      _c(
                        "v-uni-label",
                        { attrs: { _i: 57 } },
                        [
                          _c("v-uni-radio", {
                            attrs: {
                              value: "strength",
                              checked: _vm._$g(58, "a-checked"),
                              _i: 58,
                            },
                          }),
                          _vm._v("力量训练"),
                        ],
                        1
                      ),
                      _c(
                        "v-uni-label",
                        { attrs: { _i: 59 } },
                        [
                          _c("v-uni-radio", {
                            attrs: {
                              value: "flexibility",
                              checked: _vm._$g(60, "a-checked"),
                              _i: 60,
                            },
                          }),
                          _vm._v("柔韧性"),
                        ],
                        1
                      ),
                      _c(
                        "v-uni-label",
                        { attrs: { _i: 61 } },
                        [
                          _c("v-uni-radio", {
                            attrs: {
                              value: "balance",
                              checked: _vm._$g(62, "a-checked"),
                              _i: 62,
                            },
                          }),
                          _vm._v("平衡训练"),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
              _c(
                "uni-view",
                { staticClass: _vm._$g(63, "sc"), attrs: { _i: 63 } },
                [
                  _c(
                    "v-uni-text",
                    { staticClass: _vm._$g(64, "sc"), attrs: { _i: 64 } },
                    [_vm._v("适用分期")]
                  ),
                  _c(
                    "v-uni-checkbox-group",
                    {
                      attrs: { _i: 65 },
                      on: {
                        change: function ($event) {
                          return _vm.$handleViewEvent($event)
                        },
                      },
                    },
                    [
                      _c(
                        "v-uni-label",
                        { attrs: { _i: 66 } },
                        [
                          _c("v-uni-checkbox", {
                            attrs: { value: "I", _i: 67 },
                          }),
                          _vm._v("I期"),
                        ],
                        1
                      ),
                      _c(
                        "v-uni-label",
                        { attrs: { _i: 68 } },
                        [
                          _c("v-uni-checkbox", {
                            attrs: { value: "II", _i: 69 },
                          }),
                          _vm._v("II期"),
                        ],
                        1
                      ),
                      _c(
                        "v-uni-label",
                        { attrs: { _i: 70 } },
                        [
                          _c("v-uni-checkbox", {
                            attrs: { value: "III", _i: 71 },
                          }),
                          _vm._v("III期"),
                        ],
                        1
                      ),
                      _c(
                        "v-uni-label",
                        { attrs: { _i: 72 } },
                        [
                          _c("v-uni-checkbox", {
                            attrs: { value: "IV", _i: 73 },
                          }),
                          _vm._v("IV期"),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
              _c(
                "v-uni-button",
                {
                  staticClass: _vm._$g(74, "sc"),
                  attrs: { _i: 74 },
                  on: {
                    click: function ($event) {
                      return _vm.$handleViewEvent($event)
                    },
                  },
                },
                [_vm._v("添加视频")]
              ),
            ],
            1
          ),
        ],
        1
      ),
      _c(
        "uni-view",
        { staticClass: _vm._$g(75, "sc"), attrs: { _i: 75 } },
        [
          _c(
            "uni-view",
            { staticClass: _vm._$g(76, "sc"), attrs: { _i: 76 } },
            [_vm._v("已添加的视频")]
          ),
          _c(
            "uni-view",
            { staticClass: _vm._$g(77, "sc"), attrs: { _i: 77 } },
            [
              _c(
                "v-uni-button",
                {
                  staticClass: _vm._$g(78, "sc"),
                  attrs: { _i: 78 },
                  on: {
                    click: function ($event) {
                      return _vm.$handleViewEvent($event)
                    },
                  },
                },
                [_vm._v("刷新列表")]
              ),
              _c(
                "v-uni-button",
                {
                  staticClass: _vm._$g(79, "sc"),
                  attrs: { _i: 79 },
                  on: {
                    click: function ($event) {
                      return _vm.$handleViewEvent($event)
                    },
                  },
                },
                [_vm._v("批量生成封面")]
              ),
              _c(
                "v-uni-button",
                {
                  staticClass: _vm._$g(80, "sc"),
                  attrs: { _i: 80 },
                  on: {
                    click: function ($event) {
                      return _vm.$handleViewEvent($event)
                    },
                  },
                },
                [_vm._v("清空测试视频")]
              ),
            ],
            1
          ),
          _vm._$g(81, "i")
            ? _c(
                "uni-view",
                { staticClass: _vm._$g(81, "sc"), attrs: { _i: 81 } },
                _vm._l(_vm._$g(82, "f"), function (video, $10, $20, $30) {
                  return _c(
                    "uni-view",
                    {
                      key: video,
                      staticClass: _vm._$g("82-" + $30, "sc"),
                      attrs: { _i: "82-" + $30 },
                    },
                    [
                      _c(
                        "uni-view",
                        {
                          staticClass: _vm._$g("83-" + $30, "sc"),
                          attrs: { _i: "83-" + $30 },
                        },
                        [
                          _c(
                            "v-uni-text",
                            {
                              staticClass: _vm._$g("84-" + $30, "sc"),
                              attrs: { _i: "84-" + $30 },
                            },
                            [_vm._v(_vm._$g("84-" + $30, "t0-0"))]
                          ),
                          _c(
                            "uni-view",
                            {
                              staticClass: _vm._$g("85-" + $30, "sc"),
                              attrs: { _i: "85-" + $30 },
                            },
                            [
                              _vm._$g("86-" + $30, "i")
                                ? _c(
                                    "v-uni-text",
                                    {
                                      staticClass: _vm._$g("86-" + $30, "sc"),
                                      attrs: { _i: "86-" + $30 },
                                    },
                                    [_vm._v("🧪 测试")]
                                  )
                                : _vm._e(),
                              _c(
                                "v-uni-text",
                                {
                                  staticClass: _vm._$g("87-" + $30, "sc"),
                                  class: _vm._$g("87-" + $30, "c"),
                                  attrs: { _i: "87-" + $30 },
                                },
                                [_vm._v(_vm._$g("87-" + $30, "t0-0"))]
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      _c(
                        "v-uni-text",
                        {
                          staticClass: _vm._$g("88-" + $30, "sc"),
                          attrs: { _i: "88-" + $30 },
                        },
                        [
                          _vm._v(
                            "时长：" +
                              _vm._$g("88-" + $30, "t0-0") +
                              "秒 | " +
                              _vm._$g("88-" + $30, "t0-1") +
                              " | " +
                              _vm._$g("88-" + $30, "t0-2")
                          ),
                        ]
                      ),
                      _c(
                        "v-uni-text",
                        {
                          staticClass: _vm._$g("89-" + $30, "sc"),
                          attrs: { _i: "89-" + $30 },
                        },
                        [_vm._v("适用：" + _vm._$g("89-" + $30, "t0-0") + "期")]
                      ),
                      _vm._$g("90-" + $30, "i")
                        ? _c(
                            "v-uni-text",
                            {
                              staticClass: _vm._$g("90-" + $30, "sc"),
                              attrs: { _i: "90-" + $30 },
                            },
                            [
                              _vm._v(
                                "视频：" + _vm._$g("90-" + $30, "t0-0") + "..."
                              ),
                            ]
                          )
                        : _vm._e(),
                      _vm._$g("91-" + $30, "i")
                        ? _c(
                            "v-uni-text",
                            {
                              staticClass: _vm._$g("91-" + $30, "sc"),
                              attrs: { _i: "91-" + $30 },
                            },
                            [
                              _vm._v(
                                "封面：" + _vm._$g("91-" + $30, "t0-0") + "..."
                              ),
                            ]
                          )
                        : _vm._e(),
                    ],
                    1
                  )
                }),
                1
              )
            : _c(
                "uni-view",
                { staticClass: _vm._$g(92, "sc"), attrs: { _i: 92 } },
                [
                  _c("v-uni-text", { attrs: { _i: 93 } }, [
                    _vm._v("暂无视频数据"),
                  ]),
                ],
                1
              ),
        ],
        1
      ),
    ],
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 73 */
/*!************************************************************************************!*\
  !*** D:/ai-doctor/pages/admin/init-videos.vue?vue&type=script&lang=js&mpType=page ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_init_videos_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./init-videos.vue?vue&type=script&lang=js&mpType=page */ 74);
/* harmony import */ var _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_init_videos_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_init_videos_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_init_videos_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_init_videos_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_init_videos_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 74 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!D:/ai-doctor/pages/admin/init-videos.vue?vue&type=script&lang=js&mpType=page ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  data: function data() {
    return {
      wxsProps: {}
    };
  },
  components: {}
};
exports.default = _default;

/***/ }),
/* 75 */
/*!********************************************************************************************************************!*\
  !*** D:/ai-doctor/pages/admin/init-videos.vue?vue&type=style&index=0&id=212d6d9c&scoped=true&lang=css&mpType=page ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_init_videos_vue_vue_type_style_index_0_id_212d6d9c_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./init-videos.vue?vue&type=style&index=0&id=212d6d9c&scoped=true&lang=css&mpType=page */ 76);
/* harmony import */ var _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_init_videos_vue_vue_type_style_index_0_id_212d6d9c_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_init_videos_vue_vue_type_style_index_0_id_212d6d9c_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_init_videos_vue_vue_type_style_index_0_id_212d6d9c_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_init_videos_vue_vue_type_style_index_0_id_212d6d9c_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_init_videos_vue_vue_type_style_index_0_id_212d6d9c_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 76 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!D:/ai-doctor/pages/admin/init-videos.vue?vue&type=style&index=0&id=212d6d9c&scoped=true&lang=css&mpType=page ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./init-videos.vue?vue&type=style&index=0&id=212d6d9c&scoped=true&lang=css&mpType=page */ 77);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader/lib/addStylesClient.js */ 11).default
var update = add("1312d7a4", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 77 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!D:/ai-doctor/pages/admin/init-videos.vue?vue&type=style&index=0&id=212d6d9c&scoped=true&lang=css&mpType=page ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ 10);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.container[data-v-212d6d9c] {\n  padding: 20px;\n  background: #f5f7fa;\n  min-height: 100vh;\n}\n.header[data-v-212d6d9c] {\n  margin-bottom: 20px;\n}\n.title[data-v-212d6d9c] {\n  font-size: 24px;\n  font-weight: bold;\n  color: #333;\n}\n.section[data-v-212d6d9c] {\n  background: #fff;\n  border-radius: 12px;\n  padding: 20px;\n  margin-bottom: 20px;\n}\n.section-title[data-v-212d6d9c] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #333;\n  margin-bottom: 15px;\n}\n.btn[data-v-212d6d9c] {\n  width: 100%;\n  height: 44px;\n  line-height: 44px;\n  text-align: center;\n  border-radius: 8px;\n  font-size: 15px;\n  border: none;\n}\n.btn.primary[data-v-212d6d9c] {\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  color: #fff;\n}\n.btn.success[data-v-212d6d9c] {\n  background: #10b981;\n  color: #fff;\n  margin-top: 20px;\n}\n.hint[data-v-212d6d9c] {\n  display: block;\n  font-size: 12px;\n  color: #999;\n  margin-top: 8px;\n}\n.hint.warning[data-v-212d6d9c] {\n  color: #f59e0b;\n  font-weight: 500;\n}\n.hint-info[data-v-212d6d9c] {\n  display: block;\n  font-size: 13px;\n  color: #667eea;\n  margin-bottom: 15px;\n  padding: 10px;\n  background: #f0f4ff;\n  border-radius: 6px;\n  border-left: 3px solid #667eea;\n}\n.form[data-v-212d6d9c] {\n  margin-top: 15px;\n}\n.form-item[data-v-212d6d9c] {\n  margin-bottom: 20px;\n}\n.label[data-v-212d6d9c] {\n  display: block;\n  font-size: 14px;\n  color: #666;\n  margin-bottom: 8px;\n}\nuni-input[data-v-212d6d9c], uni-textarea[data-v-212d6d9c] {\n  width: 100%;\n  padding: 10px;\n  border: 1px solid #e5e7eb;\n  border-radius: 6px;\n  font-size: 14px;\n}\nuni-textarea[data-v-212d6d9c] {\n  min-height: 80px;\n}\nuni-radio-group uni-label[data-v-212d6d9c],\nuni-checkbox-group uni-label[data-v-212d6d9c] {\n  display: inline-block;\n  margin-right: 20px;\n  margin-bottom: 10px;\n  font-size: 14px;\n}\n.video-list[data-v-212d6d9c] {\n  margin-top: 15px;\n}\n.video-item[data-v-212d6d9c] {\n  padding: 15px;\n  background: #f9fafb;\n  border-radius: 8px;\n  margin-bottom: 10px;\n}\n.video-title[data-v-212d6d9c] {\n  display: block;\n  font-size: 15px;\n  font-weight: 600;\n  color: #333;\n  margin-bottom: 5px;\n}\n.video-info[data-v-212d6d9c],\n.video-stages[data-v-212d6d9c] {\n  display: block;\n  font-size: 12px;\n  color: #999;\n  margin-top: 4px;\n}\n.empty[data-v-212d6d9c] {\n  text-align: center;\n  padding: 40px 20px;\n  color: #999;\n  font-size: 14px;\n}\n.button-group[data-v-212d6d9c] {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 15px;\n}\n.button-group .btn[data-v-212d6d9c] {\n  flex: 1;\n  margin-bottom: 0;\n}\n.btn.danger[data-v-212d6d9c] {\n  background: #ef4444;\n  color: #fff;\n}\n.video-header[data-v-212d6d9c] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 5px;\n}\n.video-badges[data-v-212d6d9c] {\n  display: flex;\n  gap: 6px;\n  align-items: center;\n}\n.video-url-type[data-v-212d6d9c] {\n  font-size: 12px;\n  padding: 2px 8px;\n  background: #fef3c7;\n  color: #f59e0b;\n  border-radius: 4px;\n}\n.video-cover-status[data-v-212d6d9c] {\n  font-size: 11px;\n  padding: 2px 6px;\n  border-radius: 3px;\n}\n.video-cover-status.has-cover[data-v-212d6d9c] {\n  background: #d1fae5;\n  color: #059669;\n}\n.video-cover-status.no-cover[data-v-212d6d9c] {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.video-url[data-v-212d6d9c] {\n  display: block;\n  font-size: 11px;\n  color: #6b7280;\n  margin-top: 4px;\n  word-break: break-all;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 78 */
/*!***************************************************************!*\
  !*** D:/ai-doctor/pages/admin/init-community.vue?mpType=page ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _init_community_vue_vue_type_template_id_42af65f5_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init-community.vue?vue&type=template&id=42af65f5&scoped=true&mpType=page */ 79);
/* harmony import */ var _init_community_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./init-community.vue?vue&type=script&lang=js&mpType=page */ 81);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _init_community_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _init_community_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _init_community_vue_vue_type_style_index_0_id_42af65f5_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./init-community.vue?vue&type=style&index=0&id=42af65f5&scoped=true&lang=css&mpType=page */ 83);
/* harmony import */ var _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 13);

var renderjs





/* normalize component */

var component = Object(_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _init_community_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _init_community_vue_vue_type_template_id_42af65f5_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _init_community_vue_vue_type_template_id_42af65f5_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "42af65f5",
  null,
  false,
  _init_community_vue_vue_type_template_id_42af65f5_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/admin/init-community.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 79 */
/*!*********************************************************************************************************!*\
  !*** D:/ai-doctor/pages/admin/init-community.vue?vue&type=template&id=42af65f5&scoped=true&mpType=page ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_init_community_vue_vue_type_template_id_42af65f5_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./init-community.vue?vue&type=template&id=42af65f5&scoped=true&mpType=page */ 80);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_init_community_vue_vue_type_template_id_42af65f5_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_init_community_vue_vue_type_template_id_42af65f5_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_init_community_vue_vue_type_template_id_42af65f5_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_init_community_vue_vue_type_template_id_42af65f5_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 80 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!D:/ai-doctor/pages/admin/init-community.vue?vue&type=template&id=42af65f5&scoped=true&mpType=page ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "uni-view",
    { staticClass: _vm._$g(0, "sc"), attrs: { _i: 0 } },
    [
      _c(
        "uni-view",
        { staticClass: _vm._$g(1, "sc"), attrs: { _i: 1 } },
        [
          _c(
            "v-uni-text",
            { staticClass: _vm._$g(2, "sc"), attrs: { _i: 2 } },
            [_vm._v("社区数据管理")]
          ),
        ],
        1
      ),
      _c(
        "uni-view",
        { staticClass: _vm._$g(3, "sc"), attrs: { _i: 3 } },
        [
          _c("uni-view", { staticClass: _vm._$g(4, "sc"), attrs: { _i: 4 } }, [
            _vm._v("📊 当前统计"),
          ]),
          _c(
            "uni-view",
            { staticClass: _vm._$g(5, "sc"), attrs: { _i: 5 } },
            [
              _c(
                "uni-view",
                { staticClass: _vm._$g(6, "sc"), attrs: { _i: 6 } },
                [
                  _c(
                    "v-uni-text",
                    { staticClass: _vm._$g(7, "sc"), attrs: { _i: 7 } },
                    [_vm._v(_vm._$g(7, "t0-0"))]
                  ),
                  _c(
                    "v-uni-text",
                    { staticClass: _vm._$g(8, "sc"), attrs: { _i: 8 } },
                    [_vm._v("帖子总数")]
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
      _c(
        "uni-view",
        { staticClass: _vm._$g(9, "sc"), attrs: { _i: 9 } },
        [
          _c(
            "uni-view",
            { staticClass: _vm._$g(10, "sc"), attrs: { _i: 10 } },
            [_vm._v("🛠️ 数据操作")]
          ),
          _c(
            "uni-view",
            { staticClass: _vm._$g(11, "sc"), attrs: { _i: 11 } },
            [
              _c(
                "v-uni-button",
                {
                  staticClass: _vm._$g(12, "sc"),
                  attrs: { _i: 12 },
                  on: {
                    click: function ($event) {
                      return _vm.$handleViewEvent($event)
                    },
                  },
                },
                [_vm._v("初始化示例帖子")]
              ),
              _c(
                "v-uni-button",
                {
                  staticClass: _vm._$g(13, "sc"),
                  attrs: { _i: 13 },
                  on: {
                    click: function ($event) {
                      return _vm.$handleViewEvent($event)
                    },
                  },
                },
                [_vm._v("刷新统计")]
              ),
              _c(
                "v-uni-button",
                {
                  staticClass: _vm._$g(14, "sc"),
                  attrs: { _i: 14 },
                  on: {
                    click: function ($event) {
                      return _vm.$handleViewEvent($event)
                    },
                  },
                },
                [_vm._v("清空所有帖子")]
              ),
            ],
            1
          ),
        ],
        1
      ),
      _c(
        "uni-view",
        { staticClass: _vm._$g(15, "sc"), attrs: { _i: 15 } },
        [
          _c(
            "uni-view",
            { staticClass: _vm._$g(16, "sc"), attrs: { _i: 16 } },
            [_vm._v("📝 说明")]
          ),
          _c(
            "uni-view",
            { staticClass: _vm._$g(17, "sc"), attrs: { _i: 17 } },
            [
              _c(
                "v-uni-text",
                { staticClass: _vm._$g(18, "sc"), attrs: { _i: 18 } },
                [_vm._v("• 初始化示例帖子：添加12篇精心编写的测试帖子")]
              ),
              _c(
                "v-uni-text",
                { staticClass: _vm._$g(19, "sc"), attrs: { _i: 19 } },
                [_vm._v("• 包含7个分类的内容")]
              ),
              _c(
                "v-uni-text",
                { staticClass: _vm._$g(20, "sc"), attrs: { _i: 20 } },
                [_vm._v("• 每篇帖子都有真实的点赞、评论、收藏数据")]
              ),
              _c(
                "v-uni-text",
                { staticClass: _vm._$g(21, "sc"), attrs: { _i: 21 } },
                [_vm._v("• 部分帖子带有精美配图")]
              ),
            ],
            1
          ),
        ],
        1
      ),
      _vm._$g(22, "i")
        ? _c(
            "uni-view",
            { staticClass: _vm._$g(22, "sc"), attrs: { _i: 22 } },
            [
              _c(
                "uni-view",
                { staticClass: _vm._$g(23, "sc"), attrs: { _i: 23 } },
                [_vm._v("📋 操作日志")]
              ),
              _c(
                "uni-view",
                { staticClass: _vm._$g(24, "sc"), attrs: { _i: 24 } },
                _vm._l(_vm._$g(25, "f"), function (log, index, $20, $30) {
                  return _c(
                    "uni-view",
                    {
                      key: log,
                      staticClass: _vm._$g("25-" + $30, "sc"),
                      attrs: { _i: "25-" + $30 },
                    },
                    [
                      _c(
                        "v-uni-text",
                        {
                          staticClass: _vm._$g("26-" + $30, "sc"),
                          attrs: { _i: "26-" + $30 },
                        },
                        [_vm._v(_vm._$g("26-" + $30, "t0-0"))]
                      ),
                      _c(
                        "v-uni-text",
                        {
                          staticClass: _vm._$g("27-" + $30, "sc"),
                          attrs: { _i: "27-" + $30 },
                        },
                        [_vm._v(_vm._$g("27-" + $30, "t0-0"))]
                      ),
                    ],
                    1
                  )
                }),
                1
              ),
            ],
            1
          )
        : _vm._e(),
    ],
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 81 */
/*!***************************************************************************************!*\
  !*** D:/ai-doctor/pages/admin/init-community.vue?vue&type=script&lang=js&mpType=page ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_init_community_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./init-community.vue?vue&type=script&lang=js&mpType=page */ 82);
/* harmony import */ var _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_init_community_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_init_community_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_init_community_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_init_community_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_init_community_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 82 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!D:/ai-doctor/pages/admin/init-community.vue?vue&type=script&lang=js&mpType=page ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  data: function data() {
    return {
      wxsProps: {}
    };
  },
  components: {}
};
exports.default = _default;

/***/ }),
/* 83 */
/*!***********************************************************************************************************************!*\
  !*** D:/ai-doctor/pages/admin/init-community.vue?vue&type=style&index=0&id=42af65f5&scoped=true&lang=css&mpType=page ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_init_community_vue_vue_type_style_index_0_id_42af65f5_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./init-community.vue?vue&type=style&index=0&id=42af65f5&scoped=true&lang=css&mpType=page */ 84);
/* harmony import */ var _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_init_community_vue_vue_type_style_index_0_id_42af65f5_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_init_community_vue_vue_type_style_index_0_id_42af65f5_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_init_community_vue_vue_type_style_index_0_id_42af65f5_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_init_community_vue_vue_type_style_index_0_id_42af65f5_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_init_community_vue_vue_type_style_index_0_id_42af65f5_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 84 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!D:/ai-doctor/pages/admin/init-community.vue?vue&type=style&index=0&id=42af65f5&scoped=true&lang=css&mpType=page ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./init-community.vue?vue&type=style&index=0&id=42af65f5&scoped=true&lang=css&mpType=page */ 85);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader/lib/addStylesClient.js */ 11).default
var update = add("6dcd5be2", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 85 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!D:/ai-doctor/pages/admin/init-community.vue?vue&type=style&index=0&id=42af65f5&scoped=true&lang=css&mpType=page ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ 10);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.container[data-v-42af65f5] {\n  min-height: 100vh;\n  background: #f5f7fa;\n  padding: 20rpx;\n}\n.header[data-v-42af65f5] {\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  padding: 40rpx 30rpx;\n  border-radius: 16rpx;\n  margin-bottom: 30rpx;\n}\n.title[data-v-42af65f5] {\n  font-size: 36rpx;\n  font-weight: bold;\n  color: #fff;\n}\n.section[data-v-42af65f5] {\n  background: #fff;\n  border-radius: 16rpx;\n  padding: 30rpx;\n  margin-bottom: 20rpx;\n  box-shadow: 0 2rpx 12rpx rgba(0, 0, 0, 0.05);\n}\n.section-title[data-v-42af65f5] {\n  font-size: 32rpx;\n  font-weight: bold;\n  color: #333;\n  margin-bottom: 20rpx;\n}\n.stats[data-v-42af65f5] {\n  display: flex;\n  justify-content: space-around;\n}\n.stat-item[data-v-42af65f5] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.stat-value[data-v-42af65f5] {\n  font-size: 48rpx;\n  font-weight: bold;\n  color: #667eea;\n  margin-bottom: 10rpx;\n}\n.stat-label[data-v-42af65f5] {\n  font-size: 24rpx;\n  color: #999;\n}\n.button-group[data-v-42af65f5] {\n  display: flex;\n  flex-direction: column;\n  gap: 20rpx;\n}\n.btn[data-v-42af65f5] {\n  height: 88rpx;\n  line-height: 88rpx;\n  border-radius: 12rpx;\n  font-size: 28rpx;\n  font-weight: 500;\n  border: none;\n  background: #f0f0f0;\n  color: #333;\n}\n.btn.primary[data-v-42af65f5] {\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  color: #fff;\n}\n.btn.danger[data-v-42af65f5] {\n  background: #fff;\n  color: #f44336;\n  border: 2rpx solid #f44336;\n}\n.desc[data-v-42af65f5] {\n  display: flex;\n  flex-direction: column;\n  gap: 15rpx;\n}\n.desc-text[data-v-42af65f5] {\n  font-size: 26rpx;\n  color: #666;\n  line-height: 1.6;\n}\n.logs[data-v-42af65f5] {\n  max-height: 400rpx;\n  overflow-y: auto;\n}\n.log-item[data-v-42af65f5] {\n  display: flex;\n  padding: 15rpx 0;\n  border-bottom: 1rpx solid #f0f0f0;\n}\n.log-time[data-v-42af65f5] {\n  font-size: 22rpx;\n  color: #999;\n  width: 120rpx;\n  flex-shrink: 0;\n}\n.log-message[data-v-42af65f5] {\n  font-size: 24rpx;\n  color: #333;\n  flex: 1;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 86 */
/*!***********************************************************!*\
  !*** D:/ai-doctor/pagesA/ai-doctor/index.vue?mpType=page ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_9b9cb49a_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=9b9cb49a&mpType=page */ 87);
/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 89);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _index_vue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&lang=css&mpType=page */ 91);
/* harmony import */ var _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 13);

var renderjs





/* normalize component */

var component = Object(_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_9b9cb49a_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_9b9cb49a_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _index_vue_vue_type_template_id_9b9cb49a_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pagesA/ai-doctor/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 87 */
/*!*****************************************************************************************!*\
  !*** D:/ai-doctor/pagesA/ai-doctor/index.vue?vue&type=template&id=9b9cb49a&mpType=page ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_template_id_9b9cb49a_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./index.vue?vue&type=template&id=9b9cb49a&mpType=page */ 88);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_template_id_9b9cb49a_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_template_id_9b9cb49a_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_template_id_9b9cb49a_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_template_id_9b9cb49a_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 88 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!D:/ai-doctor/pagesA/ai-doctor/index.vue?vue&type=template&id=9b9cb49a&mpType=page ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "uni-view",
    { staticClass: _vm._$g(0, "sc"), attrs: { _i: 0 } },
    [
      _c(
        "uni-view",
        { staticClass: _vm._$g(1, "sc"), attrs: { _i: 1 } },
        [
          _c("uni-view", {
            staticClass: _vm._$g(2, "sc"),
            style: _vm._$g(2, "s"),
            attrs: { _i: 2 },
          }),
          _c(
            "uni-view",
            { staticClass: _vm._$g(3, "sc"), attrs: { _i: 3 } },
            [
              _c(
                "uni-view",
                {
                  staticClass: _vm._$g(4, "sc"),
                  attrs: { _i: 4 },
                  on: {
                    click: function ($event) {
                      return _vm.$handleViewEvent($event)
                    },
                  },
                },
                [
                  _c(
                    "v-uni-text",
                    { staticClass: _vm._$g(5, "sc"), attrs: { _i: 5 } },
                    [_vm._v("←")]
                  ),
                ],
                1
              ),
              _c(
                "uni-view",
                { staticClass: _vm._$g(6, "sc"), attrs: { _i: 6 } },
                [
                  _c(
                    "v-uni-text",
                    { staticClass: _vm._$g(7, "sc"), attrs: { _i: 7 } },
                    [_vm._v("AI智能问诊")]
                  ),
                  _c(
                    "v-uni-text",
                    { staticClass: _vm._$g(8, "sc"), attrs: { _i: 8 } },
                    [_vm._v("专业·准确·可靠")]
                  ),
                ],
                1
              ),
              _c("uni-view", {
                staticClass: _vm._$g(9, "sc"),
                attrs: { _i: 9 },
              }),
            ],
            1
          ),
        ],
        1
      ),
      _vm._$g(10, "i")
        ? _c(
            "uni-view",
            { staticClass: _vm._$g(10, "sc"), attrs: { _i: 10 } },
            [
              _c(
                "uni-view",
                { staticClass: _vm._$g(11, "sc"), attrs: { _i: 11 } },
                [_vm._v("常见咨询")]
              ),
              _c(
                "uni-view",
                { staticClass: _vm._$g(12, "sc"), attrs: { _i: 12 } },
                _vm._l(_vm._$g(13, "f"), function (q, index, $20, $30) {
                  return _c(
                    "uni-view",
                    {
                      key: q,
                      staticClass: _vm._$g("13-" + $30, "sc"),
                      attrs: { _i: "13-" + $30 },
                      on: {
                        click: function ($event) {
                          return _vm.$handleViewEvent($event)
                        },
                      },
                    },
                    [
                      _c(
                        "v-uni-text",
                        {
                          staticClass: _vm._$g("14-" + $30, "sc"),
                          attrs: { _i: "14-" + $30 },
                        },
                        [_vm._v(_vm._$g("14-" + $30, "t0-0"))]
                      ),
                      _c(
                        "v-uni-text",
                        {
                          staticClass: _vm._$g("15-" + $30, "sc"),
                          attrs: { _i: "15-" + $30 },
                        },
                        [_vm._v(_vm._$g("15-" + $30, "t0-0"))]
                      ),
                    ],
                    1
                  )
                }),
                1
              ),
            ],
            1
          )
        : _vm._e(),
      _c(
        "uni-view",
        { staticClass: _vm._$g(16, "sc"), attrs: { _i: 16 } },
        [
          _c(
            "v-uni-scroll-view",
            {
              staticClass: _vm._$g(17, "sc"),
              attrs: {
                "scroll-y": true,
                "scroll-top": _vm._$g(17, "a-scroll-top"),
                "scroll-with-animation": true,
                _i: 17,
              },
            },
            [
              _vm._l(_vm._$g(18, "f"), function (message, index, $21, $31) {
                return _c(
                  "uni-view",
                  {
                    key: message,
                    staticClass: _vm._$g("18-" + $31, "sc"),
                    attrs: { _i: "18-" + $31 },
                  },
                  [
                    _vm._$g("19-" + $31, "i")
                      ? _c(
                          "uni-view",
                          {
                            staticClass: _vm._$g("19-" + $31, "sc"),
                            attrs: { _i: "19-" + $31 },
                          },
                          [
                            _c(
                              "uni-view",
                              {
                                staticClass: _vm._$g("20-" + $31, "sc"),
                                attrs: { _i: "20-" + $31 },
                                on: {
                                  longpress: function ($event) {
                                    return _vm.$handleViewEvent($event)
                                  },
                                },
                              },
                              [
                                _c(
                                  "v-uni-text",
                                  { attrs: { _i: "21-" + $31 } },
                                  [_vm._v(_vm._$g("21-" + $31, "t0-0"))]
                                ),
                              ],
                              1
                            ),
                            _c(
                              "uni-view",
                              {
                                staticClass: _vm._$g("22-" + $31, "sc"),
                                attrs: { _i: "22-" + $31 },
                              },
                              [
                                _c("v-uni-image", {
                                  attrs: {
                                    src: "/static/images/user-avatar.png",
                                    mode: "aspectFill",
                                    _i: "23-" + $31,
                                  },
                                }),
                              ],
                              1
                            ),
                          ],
                          1
                        )
                      : _c(
                          "uni-view",
                          {
                            staticClass: _vm._$g("24-" + $31, "sc"),
                            attrs: { _i: "24-" + $31 },
                          },
                          [
                            _c(
                              "uni-view",
                              {
                                staticClass: _vm._$g("25-" + $31, "sc"),
                                attrs: { _i: "25-" + $31 },
                              },
                              [
                                _c("v-uni-image", {
                                  attrs: {
                                    src: "/static/images/ai-avatar.png",
                                    mode: "aspectFill",
                                    _i: "26-" + $31,
                                  },
                                }),
                              ],
                              1
                            ),
                            _c(
                              "uni-view",
                              {
                                staticClass: _vm._$g("27-" + $31, "sc"),
                                attrs: { _i: "27-" + $31 },
                              },
                              [
                                _c(
                                  "uni-view",
                                  {
                                    staticClass: _vm._$g("28-" + $31, "sc"),
                                    attrs: { _i: "28-" + $31 },
                                    on: {
                                      longpress: function ($event) {
                                        return _vm.$handleViewEvent($event)
                                      },
                                    },
                                  },
                                  [
                                    _c(
                                      "v-uni-text",
                                      { attrs: { _i: "29-" + $31 } },
                                      [_vm._v(_vm._$g("29-" + $31, "t0-0"))]
                                    ),
                                    _c(
                                      "uni-view",
                                      {
                                        staticClass: _vm._$g("30-" + $31, "sc"),
                                        attrs: { _i: "30-" + $31 },
                                      },
                                      [
                                        _c(
                                          "uni-view",
                                          {
                                            staticClass: _vm._$g(
                                              "31-" + $31,
                                              "sc"
                                            ),
                                            attrs: { _i: "31-" + $31 },
                                          },
                                          [_vm._v(_vm._$g("31-" + $31, "t0-0"))]
                                        ),
                                        _c(
                                          "uni-view",
                                          {
                                            staticClass: _vm._$g(
                                              "32-" + $31,
                                              "sc"
                                            ),
                                            attrs: { _i: "32-" + $31 },
                                            on: {
                                              click: function ($event) {
                                                return _vm.$handleViewEvent(
                                                  $event,
                                                  { stop: true }
                                                )
                                              },
                                            },
                                          },
                                          [
                                            _c(
                                              "v-uni-text",
                                              {
                                                staticClass: _vm._$g(
                                                  "33-" + $31,
                                                  "sc"
                                                ),
                                                attrs: { _i: "33-" + $31 },
                                              },
                                              [_vm._v("📋")]
                                            ),
                                          ],
                                          1
                                        ),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                                _vm._$g("34-" + $31, "i")
                                  ? _c(
                                      "uni-view",
                                      {
                                        staticClass: _vm._$g("34-" + $31, "sc"),
                                        attrs: { _i: "34-" + $31 },
                                      },
                                      _vm._l(
                                        _vm._$g(35 + "-" + $31, "f"),
                                        function (option, optIndex, $22, $32) {
                                          return _c(
                                            "uni-view",
                                            {
                                              key: option,
                                              staticClass: _vm._$g(
                                                "35-" + $31 + "-" + $32,
                                                "sc"
                                              ),
                                              attrs: {
                                                _i: "35-" + $31 + "-" + $32,
                                              },
                                              on: {
                                                click: function ($event) {
                                                  return _vm.$handleViewEvent(
                                                    $event
                                                  )
                                                },
                                              },
                                            },
                                            [
                                              _c(
                                                "v-uni-text",
                                                {
                                                  attrs: {
                                                    _i: "36-" + $31 + "-" + $32,
                                                  },
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._$g(
                                                      "36-" + $31 + "-" + $32,
                                                      "t0-0"
                                                    )
                                                  ),
                                                ]
                                              ),
                                            ],
                                            1
                                          )
                                        }
                                      ),
                                      1
                                    )
                                  : _vm._e(),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                  ],
                  1
                )
              }),
              _vm._$g(37, "i")
                ? _c(
                    "uni-view",
                    { staticClass: _vm._$g(37, "sc"), attrs: { _i: 37 } },
                    [
                      _c(
                        "uni-view",
                        { staticClass: _vm._$g(38, "sc"), attrs: { _i: 38 } },
                        [
                          _c(
                            "uni-view",
                            {
                              staticClass: _vm._$g(39, "sc"),
                              attrs: { _i: 39 },
                            },
                            [
                              _c("v-uni-image", {
                                attrs: {
                                  src: "/static/images/ai-avatar.png",
                                  mode: "aspectFill",
                                  _i: 40,
                                },
                              }),
                            ],
                            1
                          ),
                          _c(
                            "uni-view",
                            {
                              staticClass: _vm._$g(41, "sc"),
                              attrs: { _i: 41 },
                            },
                            [
                              _c(
                                "uni-view",
                                {
                                  staticClass: _vm._$g(42, "sc"),
                                  attrs: { _i: 42 },
                                  on: {
                                    longpress: function ($event) {
                                      return _vm.$handleViewEvent($event)
                                    },
                                  },
                                },
                                [
                                  _c("v-uni-text", { attrs: { _i: 43 } }, [
                                    _vm._v(_vm._$g(43, "t0-0")),
                                  ]),
                                  _c(
                                    "uni-view",
                                    {
                                      staticClass: _vm._$g(44, "sc"),
                                      attrs: { _i: 44 },
                                    },
                                    [
                                      _c(
                                        "uni-view",
                                        {
                                          staticClass: _vm._$g(45, "sc"),
                                          attrs: { _i: 45 },
                                        },
                                        [_vm._v(_vm._$g(45, "t0-0"))]
                                      ),
                                      _vm._$g(46, "i")
                                        ? _c(
                                            "uni-view",
                                            {
                                              staticClass: _vm._$g(46, "sc"),
                                              attrs: { _i: 46 },
                                              on: {
                                                click: function ($event) {
                                                  return _vm.$handleViewEvent(
                                                    $event,
                                                    { stop: true }
                                                  )
                                                },
                                              },
                                            },
                                            [
                                              _c(
                                                "v-uni-text",
                                                {
                                                  staticClass: _vm._$g(
                                                    47,
                                                    "sc"
                                                  ),
                                                  attrs: { _i: 47 },
                                                },
                                                [_vm._v("📋")]
                                              ),
                                            ],
                                            1
                                          )
                                        : _vm._e(),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                              _vm._$g(48, "i")
                                ? _c(
                                    "uni-view",
                                    {
                                      staticClass: _vm._$g(48, "sc"),
                                      attrs: { _i: 48 },
                                    },
                                    _vm._l(
                                      _vm._$g(49, "f"),
                                      function (option, optIndex, $23, $33) {
                                        return _c(
                                          "uni-view",
                                          {
                                            key: option,
                                            staticClass: _vm._$g(
                                              "49-" + $33,
                                              "sc"
                                            ),
                                            attrs: { _i: "49-" + $33 },
                                            on: {
                                              click: function ($event) {
                                                return _vm.$handleViewEvent(
                                                  $event
                                                )
                                              },
                                            },
                                          },
                                          [
                                            _c(
                                              "v-uni-text",
                                              { attrs: { _i: "50-" + $33 } },
                                              [
                                                _vm._v(
                                                  _vm._$g("50-" + $33, "t0-0")
                                                ),
                                              ]
                                            ),
                                          ],
                                          1
                                        )
                                      }
                                    ),
                                    1
                                  )
                                : _vm._e(),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  )
                : _vm._e(),
              _vm._$g(51, "i")
                ? _c(
                    "uni-view",
                    { staticClass: _vm._$g(51, "sc"), attrs: { _i: 51 } },
                    [
                      _c(
                        "uni-view",
                        { staticClass: _vm._$g(52, "sc"), attrs: { _i: 52 } },
                        [
                          _c("v-uni-image", {
                            attrs: {
                              src: "/static/images/ai-avatar.png",
                              mode: "aspectFill",
                              _i: 53,
                            },
                          }),
                        ],
                        1
                      ),
                      _c(
                        "uni-view",
                        { staticClass: _vm._$g(54, "sc"), attrs: { _i: 54 } },
                        [
                          _c("uni-view", {
                            staticClass: _vm._$g(55, "sc"),
                            attrs: { _i: 55 },
                          }),
                          _c("uni-view", {
                            staticClass: _vm._$g(56, "sc"),
                            attrs: { _i: 56 },
                          }),
                          _c("uni-view", {
                            staticClass: _vm._$g(57, "sc"),
                            attrs: { _i: 57 },
                          }),
                        ],
                        1
                      ),
                    ],
                    1
                  )
                : _vm._e(),
            ],
            2
          ),
          _c(
            "uni-view",
            { staticClass: _vm._$g(58, "sc"), attrs: { _i: 58 } },
            [
              _c(
                "uni-view",
                { staticClass: _vm._$g(59, "sc"), attrs: { _i: 59 } },
                [
                  _c("v-uni-textarea", {
                    staticClass: _vm._$g(60, "sc"),
                    attrs: {
                      placeholder: "请描述您的症状...",
                      maxlength: 500,
                      "auto-height": true,
                      "confirm-type": "send",
                      _i: 60,
                    },
                    on: {
                      confirm: function ($event) {
                        return _vm.$handleViewEvent($event)
                      },
                    },
                    model: {
                      value: _vm._$g(60, "v-model"),
                      callback: function ($$v) {
                        _vm.$handleVModelEvent(60, $$v)
                      },
                      expression: "inputMessage",
                    },
                  }),
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(61, "sc"), attrs: { _i: 61 } },
                    [
                      _c(
                        "v-uni-text",
                        { staticClass: _vm._$g(62, "sc"), attrs: { _i: 62 } },
                        [_vm._v(_vm._$g(62, "t0-0") + "/500")]
                      ),
                      _c(
                        "uni-view",
                        {
                          staticClass: _vm._$g(63, "sc"),
                          class: _vm._$g(63, "c"),
                          attrs: { _i: 63 },
                          on: {
                            click: function ($event) {
                              return _vm.$handleViewEvent($event)
                            },
                          },
                        },
                        [
                          _c("v-uni-text", { attrs: { _i: 64 } }, [
                            _vm._v("发送"),
                          ]),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 89 */
/*!***********************************************************************************!*\
  !*** D:/ai-doctor/pagesA/ai-doctor/index.vue?vue&type=script&lang=js&mpType=page ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./index.vue?vue&type=script&lang=js&mpType=page */ 90);
/* harmony import */ var _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 90 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!D:/ai-doctor/pagesA/ai-doctor/index.vue?vue&type=script&lang=js&mpType=page ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  data: function data() {
    return {
      wxsProps: {}
    };
  },
  components: {}
};
exports.default = _default;

/***/ }),
/* 91 */
/*!*******************************************************************************************!*\
  !*** D:/ai-doctor/pagesA/ai-doctor/index.vue?vue&type=style&index=0&lang=css&mpType=page ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./index.vue?vue&type=style&index=0&lang=css&mpType=page */ 92);
/* harmony import */ var _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 92 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!D:/ai-doctor/pagesA/ai-doctor/index.vue?vue&type=style&index=0&lang=css&mpType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./index.vue?vue&type=style&index=0&lang=css&mpType=page */ 93);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader/lib/addStylesClient.js */ 11).default
var update = add("54bc99b8", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 93 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!D:/ai-doctor/pagesA/ai-doctor/index.vue?vue&type=style&index=0&lang=css&mpType=page ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ 10);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.container {\n  background-color: #f5f7fa;\n  min-height: 100vh;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n}\n\n/* 顶部标题 */\n.header {\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  flex-shrink: 0;\n  position: relative;\n  z-index: 100;\n  box-shadow: 0 4rpx 20rpx rgba(102, 126, 234, 0.3);\n}\n.nav-bar {\n  height: 88rpx;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 30rpx;\n  position: relative;\n}\n.back-btn {\n  width: 60rpx;\n  height: 60rpx;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 50%;\n  -webkit-backdrop-filter: blur(10rpx);\n          backdrop-filter: blur(10rpx);\n}\n.back-btn uni-text {\n  color: #fff;\n  font-size: 32rpx;\n  font-weight: bold;\n}\n.title-wrapper {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4rpx;\n}\n.header-title {\n  font-size: 36rpx;\n  font-weight: bold;\n  color: #fff;\n  text-shadow: 0 2rpx 8rpx rgba(0, 0, 0, 0.2);\n}\n.subtitle {\n  font-size: 22rpx;\n  color: rgba(255, 255, 255, 0.85);\n  letter-spacing: 2rpx;\n}\n.placeholder {\n  width: 60rpx;\n}\n\n/* 快捷问题 */\n.quick-questions {\n  padding: 30rpx;\n  background: linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(248, 249, 255, 0.9) 100%);\n  -webkit-backdrop-filter: blur(20rpx);\n          backdrop-filter: blur(20rpx);\n}\n.quick-title {\n  font-size: 28rpx;\n  font-weight: bold;\n  color: #333;\n  margin-bottom: 20rpx;\n  display: flex;\n  align-items: center;\n  gap: 8rpx;\n}\n.question-list {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 20rpx;\n}\n.question-item {\n  background: linear-gradient(135deg, #ffffff 0%, #f8f9ff 100%);\n  padding: 24rpx 20rpx;\n  border-radius: 16rpx;\n  box-shadow: 0 4rpx 15rpx rgba(102, 126, 234, 0.1);\n  border: 2rpx solid rgba(102, 126, 234, 0.1);\n  display: flex;\n  align-items: center;\n  gap: 12rpx;\n  transition: all 0.3s ease;\n}\n.question-item:active {\n  -webkit-transform: scale(0.96);\n          transform: scale(0.96);\n  box-shadow: 0 2rpx 8rpx rgba(102, 126, 234, 0.15);\n}\n.question-icon {\n  font-size: 36rpx;\n  flex-shrink: 0;\n}\n.question-text {\n  font-size: 26rpx;\n  color: #666;\n  line-height: 1.4;\n}\n\n/* 聊天容器 */\n.chat-container {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  background: linear-gradient(180deg, rgba(248, 249, 255, 0.5) 0%, rgba(230, 233, 255, 0.3) 100%);\n}\n\n/* 消息列表 */\n.message-list {\n  flex: 1;\n  padding: 20rpx;\n  overflow-y: auto;\n}\n.message-item {\n  margin-bottom: 30rpx;\n}\n.message {\n  display: flex;\n  align-items: flex-start;\n  max-width: 80%;\n}\n\n/* 用户消息 */\n.user-message {\n  justify-content: flex-end;\n  margin-left: auto;\n}\n.user-content {\n  background: linear-gradient(135deg, #667eea, #764ba2);\n  color: #fff;\n  margin-right: 20rpx;\n  order: 1;\n}\n.user-avatar {\n  order: 2;\n}\n\n/* AI消息 */\n.ai-message {\n  justify-content: flex-start;\n}\n.ai-content {\n  background: linear-gradient(135deg, #ffffff 0%, #f8f9ff 100%);\n  color: #333;\n  margin-left: 20rpx;\n  box-shadow: 0 4rpx 15rpx rgba(102, 126, 234, 0.12);\n  border: 1rpx solid rgba(102, 126, 234, 0.08);\n}\n.message-content {\n  padding: 24rpx 30rpx;\n  border-radius: 24rpx;\n  font-size: 28rpx;\n  line-height: 1.5;\n  word-wrap: break-word;\n  position: relative;\n  min-height: 60rpx;\n  transition: all 0.2s ease;\n  -webkit-user-select: none;\n          user-select: none;\n}\n.message-content:active {\n  -webkit-transform: scale(0.98);\n          transform: scale(0.98);\n  opacity: 0.9;\n}\n.message-avatar {\n  width: 80rpx;\n  height: 80rpx;\n  border-radius: 50%;\n  overflow: hidden;\n  flex-shrink: 0;\n}\n.message-avatar uni-image {\n  width: 100%;\n  height: 100%;\n}\n.message-time {\n  font-size: 22rpx;\n  color: #999;\n  text-align: left;\n}\n\n/* 消息底部区域 */\n.message-footer {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 8rpx;\n  padding-top: 8rpx;\n  border-top: 1rpx solid rgba(0, 0, 0, 0.05);\n}\n\n/* 内联复制按钮 */\n.inline-copy-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 36rpx;\n  height: 36rpx;\n  border-radius: 50%;\n  background: rgba(102, 126, 234, 0.1);\n  transition: all 0.3s ease;\n  opacity: 0.7;\n}\n.inline-copy-btn:active {\n  -webkit-transform: scale(0.9);\n          transform: scale(0.9);\n  background: rgba(102, 126, 234, 0.2);\n}\n.inline-copy-btn:hover {\n  opacity: 1;\n  background: rgba(102, 126, 234, 0.15);\n}\n.copy-icon {\n  font-size: 20rpx;\n  color: #667eea;\n}\n\n/* 加载动画 */\n.loading-message {\n  display: flex;\n  align-items: center;\n  margin-bottom: 30rpx;\n}\n.loading-dots {\n  display: flex;\n  align-items: center;\n  padding: 24rpx 30rpx;\n  background: #fff;\n  border-radius: 24rpx;\n  margin-left: 20rpx;\n  box-shadow: 0 4rpx 12rpx rgba(0, 0, 0, 0.1);\n}\n.dot {\n  width: 12rpx;\n  height: 12rpx;\n  border-radius: 50%;\n  background: #667eea;\n  margin: 0 6rpx;\n  -webkit-animation: loadingDot 1.4s ease-in-out infinite both;\n          animation: loadingDot 1.4s ease-in-out infinite both;\n}\n.dot:nth-child(1) { -webkit-animation-delay: -0.32s; animation-delay: -0.32s;\n}\n.dot:nth-child(2) { -webkit-animation-delay: -0.16s; animation-delay: -0.16s;\n}\n@-webkit-keyframes loadingDot {\n0%, 80%, 100% {\n    -webkit-transform: scale(0.8);\n            transform: scale(0.8);\n    opacity: 0.5;\n}\n40% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1;\n}\n}\n@keyframes loadingDot {\n0%, 80%, 100% {\n    -webkit-transform: scale(0.8);\n            transform: scale(0.8);\n    opacity: 0.5;\n}\n40% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1;\n}\n}\n\n/* 输入区域 */\n.input-area {\n  background: linear-gradient(180deg, #ffffff 0%, #f8f9ff 100%);\n  padding: 20rpx 20rpx 30rpx;\n  border-top: none;\n  box-shadow: 0 -4rpx 20rpx rgba(102, 126, 234, 0.08);\n}\n.input-wrapper {\n  background: #fff;\n  border-radius: 28rpx;\n  padding: 20rpx 24rpx;\n  border: 2rpx solid rgba(102, 126, 234, 0.15);\n  box-shadow: 0 2rpx 12rpx rgba(102, 126, 234, 0.06);\n  transition: all 0.3s ease;\n}\n.input-wrapper:focus-within {\n  border-color: rgba(102, 126, 234, 0.4);\n  box-shadow: 0 4rpx 20rpx rgba(102, 126, 234, 0.12);\n}\n.message-input {\n  width: 100%;\n  min-height: 80rpx;\n  max-height: 200rpx;\n  font-size: 28rpx;\n  line-height: 1.5;\n  background: transparent;\n  border: none;\n  outline: none;\n  resize: none;\n  color: #333;\n}\n.message-input::-webkit-input-placeholder {\n  color: #999;\n}\n.message-input::placeholder {\n  color: #999;\n}\n.input-actions {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 16rpx;\n}\n.char-count {\n  font-size: 24rpx;\n  color: #999;\n}\n.send-btn {\n  background: linear-gradient(135deg, #667eea, #764ba2);\n  color: #fff;\n  padding: 16rpx 32rpx;\n  border-radius: 20rpx;\n  font-size: 26rpx;\n  font-weight: 500;\n  transition: all 0.3s ease;\n  box-shadow: 0 4rpx 12rpx rgba(102, 126, 234, 0.3);\n}\n.send-btn:active {\n  -webkit-transform: scale(0.95);\n          transform: scale(0.95);\n}\n.send-btn.disabled {\n  background: #ccc;\n  box-shadow: none;\n  opacity: 0.6;\n}\n\n/* 消息内容包装器 */\n.message-content-wrapper {\n  display: flex;\n  flex-direction: column;\n  gap: 16rpx;\n}\n\n/* 选项按钮 */\n.options-buttons {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12rpx;\n  margin-top: 8rpx;\n}\n.option-btn {\n  background: linear-gradient(135deg, #f8f9fa, #e9ecef);\n  color: #495057;\n  padding: 16rpx 24rpx;\n  border-radius: 20rpx;\n  font-size: 26rpx;\n  border: 2rpx solid #dee2e6;\n  transition: all 0.3s ease;\n  cursor: pointer;\n  box-shadow: 0 2rpx 8rpx rgba(0, 0, 0, 0.1);\n}\n.option-btn:active {\n  -webkit-transform: scale(0.95);\n          transform: scale(0.95);\n  background: linear-gradient(135deg, #667eea, #764ba2);\n  color: #fff;\n  border-color: #667eea;\n  box-shadow: 0 4rpx 12rpx rgba(102, 126, 234, 0.3);\n}\n.option-btn:hover {\n  background: linear-gradient(135deg, #e9ecef, #dee2e6);\n  border-color: #adb5bd;\n}\n\n/* 选项按钮文字 */\n.option-btn uni-text {\n  font-weight: 500;\n  white-space: nowrap;\n}\n\n/* 响应式设计 */\n@media screen and (max-width: 750rpx) {\n.message {\n    max-width: 90%;\n}\n.message-content {\n    padding: 20rpx 24rpx;\n    font-size: 26rpx;\n}\n.message-avatar {\n    width: 70rpx;\n    height: 70rpx;\n}\n.option-btn {\n    padding: 14rpx 20rpx;\n    font-size: 24rpx;\n    border-radius: 18rpx;\n}\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 94 */
/*!****************************************************************!*\
  !*** D:/ai-doctor/pagesA/image-diagnose/index.vue?mpType=page ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_18680c12_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=18680c12&mpType=page */ 95);
/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 97);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _index_vue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&lang=css&mpType=page */ 99);
/* harmony import */ var _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 13);

var renderjs





/* normalize component */

var component = Object(_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_18680c12_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_18680c12_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _index_vue_vue_type_template_id_18680c12_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pagesA/image-diagnose/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 95 */
/*!**********************************************************************************************!*\
  !*** D:/ai-doctor/pagesA/image-diagnose/index.vue?vue&type=template&id=18680c12&mpType=page ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_template_id_18680c12_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./index.vue?vue&type=template&id=18680c12&mpType=page */ 96);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_template_id_18680c12_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_template_id_18680c12_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_template_id_18680c12_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_template_id_18680c12_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 96 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!D:/ai-doctor/pagesA/image-diagnose/index.vue?vue&type=template&id=18680c12&mpType=page ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "uni-view",
    { staticClass: _vm._$g(0, "sc"), attrs: { _i: 0 } },
    [
      _c(
        "uni-view",
        { staticClass: _vm._$g(1, "sc"), attrs: { _i: 1 } },
        [
          _c("uni-view", {
            staticClass: _vm._$g(2, "sc"),
            style: _vm._$g(2, "s"),
            attrs: { _i: 2 },
          }),
          _c(
            "uni-view",
            { staticClass: _vm._$g(3, "sc"), attrs: { _i: 3 } },
            [
              _c(
                "uni-view",
                {
                  staticClass: _vm._$g(4, "sc"),
                  attrs: { _i: 4 },
                  on: {
                    click: function ($event) {
                      return _vm.$handleViewEvent($event)
                    },
                  },
                },
                [
                  _c(
                    "v-uni-text",
                    { staticClass: _vm._$g(5, "sc"), attrs: { _i: 5 } },
                    [_vm._v("←")]
                  ),
                ],
                1
              ),
              _c(
                "v-uni-text",
                { staticClass: _vm._$g(6, "sc"), attrs: { _i: 6 } },
                [_vm._v("骨关节炎X光诊断")]
              ),
              _c("uni-view", {
                staticClass: _vm._$g(7, "sc"),
                attrs: { _i: 7 },
              }),
            ],
            1
          ),
        ],
        1
      ),
      _c(
        "uni-view",
        { staticClass: _vm._$g(8, "sc"), attrs: { _i: 8 } },
        _vm._l(_vm._$g(9, "f"), function (item, index, $20, $30) {
          return _c(
            "uni-view",
            {
              key: item,
              staticClass: _vm._$g("9-" + $30, "sc"),
              class: _vm._$g("9-" + $30, "c"),
              attrs: { _i: "9-" + $30 },
              on: {
                click: function ($event) {
                  return _vm.$handleViewEvent($event)
                },
              },
            },
            [
              _c("v-uni-text", { attrs: { _i: "10-" + $30 } }, [
                _vm._v(_vm._$g("10-" + $30, "t0-0")),
              ]),
            ],
            1
          )
        }),
        1
      ),
      _vm._$g(11, "i")
        ? _c(
            "uni-view",
            { staticClass: _vm._$g(11, "sc"), attrs: { _i: 11 } },
            [
              _c(
                "uni-view",
                { staticClass: _vm._$g(12, "sc"), attrs: { _i: 12 } },
                [
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(13, "sc"), attrs: { _i: 13 } },
                    [
                      _c("v-uni-text", {
                        staticClass: _vm._$g(14, "sc"),
                        attrs: { _i: 14 },
                      }),
                    ],
                    1
                  ),
                  _c(
                    "v-uni-text",
                    { staticClass: _vm._$g(15, "sc"), attrs: { _i: 15 } },
                    [_vm._v("上传膝关节X光片")]
                  ),
                  _c(
                    "v-uni-text",
                    { staticClass: _vm._$g(16, "sc"), attrs: { _i: 16 } },
                    [
                      _vm._v(
                        "请上传清晰的膝关节X光片，以便系统准确判断骨关节炎分期"
                      ),
                    ]
                  ),
                ],
                1
              ),
              _c(
                "uni-view",
                { staticClass: _vm._$g(17, "sc"), attrs: { _i: 17 } },
                [
                  _c(
                    "uni-view",
                    {
                      staticClass: _vm._$g(18, "sc"),
                      attrs: { _i: 18 },
                      on: {
                        click: function ($event) {
                          return _vm.$handleViewEvent($event)
                        },
                      },
                    },
                    [
                      _c("v-uni-text", {
                        staticClass: _vm._$g(19, "sc"),
                        attrs: { _i: 19 },
                      }),
                      _c(
                        "v-uni-text",
                        { staticClass: _vm._$g(20, "sc"), attrs: { _i: 20 } },
                        [_vm._v("选择X光片")]
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          )
        : _vm._e(),
      _vm._$g(21, "i")
        ? _c(
            "uni-view",
            { staticClass: _vm._$g(21, "sc"), attrs: { _i: 21 } },
            [
              _c("v-uni-image", {
                staticClass: _vm._$g(22, "sc"),
                attrs: {
                  src: _vm._$g(22, "a-src"),
                  mode: "aspectFill",
                  _i: 22,
                },
              }),
              _c(
                "uni-view",
                { staticClass: _vm._$g(23, "sc"), attrs: { _i: 23 } },
                [
                  _c(
                    "uni-view",
                    {
                      staticClass: _vm._$g(24, "sc"),
                      attrs: { _i: 24 },
                      on: {
                        click: function ($event) {
                          return _vm.$handleViewEvent($event)
                        },
                      },
                    },
                    [_vm._v("重新选择")]
                  ),
                  _c(
                    "uni-view",
                    {
                      staticClass: _vm._$g(25, "sc"),
                      attrs: { _i: 25 },
                      on: {
                        click: function ($event) {
                          return _vm.$handleViewEvent($event)
                        },
                      },
                    },
                    [_vm._v("开始诊断")]
                  ),
                ],
                1
              ),
            ],
            1
          )
        : _vm._e(),
      _vm._$g(26, "i")
        ? _c(
            "uni-view",
            { staticClass: _vm._$g(26, "sc"), attrs: { _i: 26 } },
            [
              _c(
                "uni-view",
                { staticClass: _vm._$g(27, "sc"), attrs: { _i: 27 } },
                [
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(28, "sc"), attrs: { _i: 28 } },
                    [_vm._v("诊断结果")]
                  ),
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(29, "sc"), attrs: { _i: 29 } },
                    [_vm._v(_vm._$g(29, "t0-0"))]
                  ),
                ],
                1
              ),
              _c(
                "uni-view",
                { staticClass: _vm._$g(30, "sc"), attrs: { _i: 30 } },
                [
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(31, "sc"), attrs: { _i: 31 } },
                    [
                      _c("v-uni-image", {
                        staticClass: _vm._$g(32, "sc"),
                        attrs: {
                          src: _vm._$g(32, "a-src"),
                          mode: "aspectFill",
                          _i: 32,
                        },
                      }),
                    ],
                    1
                  ),
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(33, "sc"), attrs: { _i: 33 } },
                    [
                      _vm._l(
                        _vm._$g(34, "f"),
                        function (item, index, $21, $31) {
                          return _c(
                            "uni-view",
                            {
                              key: item,
                              staticClass: _vm._$g("34-" + $31, "sc"),
                              attrs: { _i: "34-" + $31 },
                            },
                            [
                              _c(
                                "uni-view",
                                {
                                  staticClass: _vm._$g("35-" + $31, "sc"),
                                  attrs: { _i: "35-" + $31 },
                                },
                                [_vm._v(_vm._$g("35-" + $31, "t0-0"))]
                              ),
                              _c(
                                "uni-view",
                                {
                                  staticClass: _vm._$g("36-" + $31, "sc"),
                                  attrs: { _i: "36-" + $31 },
                                },
                                [_vm._v(_vm._$g("36-" + $31, "t0-0"))]
                              ),
                            ],
                            1
                          )
                        }
                      ),
                      _c(
                        "uni-view",
                        { staticClass: _vm._$g(37, "sc"), attrs: { _i: 37 } },
                        [
                          _c(
                            "uni-view",
                            {
                              staticClass: _vm._$g(38, "sc"),
                              attrs: { _i: 38 },
                            },
                            [_vm._v("分析说明")]
                          ),
                          _c(
                            "uni-view",
                            {
                              staticClass: _vm._$g(39, "sc"),
                              attrs: { _i: 39 },
                            },
                            [_vm._v(_vm._$g(39, "t0-0"))]
                          ),
                        ],
                        1
                      ),
                      _c(
                        "uni-view",
                        { staticClass: _vm._$g(40, "sc"), attrs: { _i: 40 } },
                        [
                          _c(
                            "uni-view",
                            {
                              staticClass: _vm._$g(41, "sc"),
                              attrs: { _i: 41 },
                            },
                            [_vm._v("建议")]
                          ),
                          _c(
                            "uni-view",
                            {
                              staticClass: _vm._$g(42, "sc"),
                              attrs: { _i: 42 },
                            },
                            [_vm._v(_vm._$g(42, "t0-0"))]
                          ),
                        ],
                        1
                      ),
                    ],
                    2
                  ),
                ],
                1
              ),
              _c(
                "uni-view",
                { staticClass: _vm._$g(43, "sc"), attrs: { _i: 43 } },
                [
                  _c(
                    "uni-view",
                    {
                      staticClass: _vm._$g(44, "sc"),
                      attrs: { _i: 44 },
                      on: {
                        click: function ($event) {
                          return _vm.$handleViewEvent($event)
                        },
                      },
                    },
                    [_vm._v("再次诊断")]
                  ),
                  _c(
                    "uni-view",
                    {
                      staticClass: _vm._$g(45, "sc"),
                      attrs: { _i: 45 },
                      on: {
                        click: function ($event) {
                          return _vm.$handleViewEvent($event)
                        },
                      },
                    },
                    [_vm._v("保存结果")]
                  ),
                ],
                1
              ),
            ],
            1
          )
        : _vm._e(),
      _vm._$g(46, "i")
        ? _c(
            "uni-view",
            { staticClass: _vm._$g(46, "sc"), attrs: { _i: 46 } },
            [
              _c(
                "uni-view",
                { staticClass: _vm._$g(47, "sc"), attrs: { _i: 47 } },
                [
                  _c(
                    "v-uni-text",
                    { staticClass: _vm._$g(48, "sc"), attrs: { _i: 48 } },
                    [_vm._v("诊断历史")]
                  ),
                  _c(
                    "v-uni-text",
                    {
                      staticClass: _vm._$g(49, "sc"),
                      attrs: { _i: 49 },
                      on: {
                        click: function ($event) {
                          return _vm.$handleViewEvent($event)
                        },
                      },
                    },
                    [_vm._v("查看全部")]
                  ),
                ],
                1
              ),
              _c(
                "uni-view",
                { staticClass: _vm._$g(50, "sc"), attrs: { _i: 50 } },
                _vm._l(_vm._$g(51, "f"), function (item, index, $22, $32) {
                  return _c(
                    "uni-view",
                    {
                      key: item,
                      staticClass: _vm._$g("51-" + $32, "sc"),
                      attrs: { _i: "51-" + $32 },
                      on: {
                        click: function ($event) {
                          return _vm.$handleViewEvent($event)
                        },
                      },
                    },
                    [
                      _c(
                        "uni-view",
                        {
                          staticClass: _vm._$g("52-" + $32, "sc"),
                          attrs: { _i: "52-" + $32 },
                        },
                        [_vm._v(_vm._$g("52-" + $32, "t0-0"))]
                      ),
                      _c("v-uni-image", {
                        staticClass: _vm._$g("53-" + $32, "sc"),
                        attrs: {
                          src: _vm._$g("53-" + $32, "a-src"),
                          mode: "aspectFill",
                          _i: "53-" + $32,
                        },
                      }),
                      _c(
                        "uni-view",
                        {
                          staticClass: _vm._$g("54-" + $32, "sc"),
                          attrs: { _i: "54-" + $32 },
                        },
                        [
                          _c(
                            "uni-view",
                            {
                              staticClass: _vm._$g("55-" + $32, "sc"),
                              attrs: { _i: "55-" + $32 },
                            },
                            [_vm._v(_vm._$g("55-" + $32, "t0-0"))]
                          ),
                          _c(
                            "uni-view",
                            {
                              staticClass: _vm._$g("56-" + $32, "sc"),
                              attrs: { _i: "56-" + $32 },
                            },
                            [_vm._v(_vm._$g("56-" + $32, "t0-0"))]
                          ),
                        ],
                        1
                      ),
                      _c("v-uni-text", {
                        staticClass: _vm._$g("57-" + $32, "sc"),
                        attrs: { _i: "57-" + $32 },
                      }),
                    ],
                    1
                  )
                }),
                1
              ),
            ],
            1
          )
        : _vm._e(),
    ],
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 97 */
/*!****************************************************************************************!*\
  !*** D:/ai-doctor/pagesA/image-diagnose/index.vue?vue&type=script&lang=js&mpType=page ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./index.vue?vue&type=script&lang=js&mpType=page */ 98);
/* harmony import */ var _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 98 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!D:/ai-doctor/pagesA/image-diagnose/index.vue?vue&type=script&lang=js&mpType=page ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  data: function data() {
    return {
      wxsProps: {}
    };
  },
  components: {}
};
exports.default = _default;

/***/ }),
/* 99 */
/*!************************************************************************************************!*\
  !*** D:/ai-doctor/pagesA/image-diagnose/index.vue?vue&type=style&index=0&lang=css&mpType=page ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./index.vue?vue&type=style&index=0&lang=css&mpType=page */ 100);
/* harmony import */ var _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 100 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!D:/ai-doctor/pagesA/image-diagnose/index.vue?vue&type=style&index=0&lang=css&mpType=page ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./index.vue?vue&type=style&index=0&lang=css&mpType=page */ 101);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader/lib/addStylesClient.js */ 11).default
var update = add("9336311c", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 101 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!D:/ai-doctor/pagesA/image-diagnose/index.vue?vue&type=style&index=0&lang=css&mpType=page ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ 10);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.container {\n  background-color: #f5f7fa;\n  min-height: 100vh;\n  padding-bottom: 30rpx;\n}\n\n/* 顶部标题 */\n.header {\n  background: linear-gradient(to right, #3a7bd5, #00d2ff);\n  flex-shrink: 0;\n  position: relative;\n}\n.status-bar {\n  /* height 通过内联样式动态设置 */\n  width: 100%;\n}\n.nav-bar {\n  height: 90rpx;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 30rpx;\n  position: relative;\n}\n.back-btn {\n  width: 60rpx;\n  height: 60rpx;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.back-btn uni-text {\n  color: #fff;\n  font-size: 36rpx;\n}\n.header-title {\n  font-size: 36rpx;\n  font-weight: 500;\n  color: #fff;\n  flex: 1;\n  text-align: center;\n}\n.placeholder {\n  width: 60rpx;\n}\n\n/* 诊断类型选择 */\n.diagnosis-types {\n  display: flex;\n  background-color: #fff;\n  padding: 20rpx 0;\n  box-shadow: 0 2rpx 10rpx rgba(0, 0, 0, 0.05);\n  overflow-x: auto;\n  white-space: nowrap;\n}\n.type-item {\n  display: inline-block;\n  padding: 16rpx 30rpx;\n  margin: 0 10rpx;\n  font-size: 28rpx;\n  color: #666;\n  border-radius: 8rpx;\n  transition: all 0.3s;\n}\n.type-item.active {\n  background-color: rgba(58, 123, 213, 0.1);\n  color: #3a7bd5;\n  font-weight: 500;\n}\n\n/* 图像上传区域 */\n.upload-area {\n  margin: 30rpx;\n  background-color: #fff;\n  border-radius: 12rpx;\n  padding: 40rpx;\n  box-shadow: 0 2rpx 10rpx rgba(0, 0, 0, 0.05);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.upload-hint {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 40rpx;\n}\n.upload-icon {\n  font-size: 80rpx;\n  color: #3a7bd5;\n  margin-bottom: 20rpx;\n}\n.hint-text {\n  font-size: 32rpx;\n  color: #333;\n  margin-bottom: 10rpx;\n}\n.sub-hint {\n  font-size: 24rpx;\n  color: #999;\n  text-align: center;\n  max-width: 80%;\n}\n.upload-buttons {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n}\n.btn {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 20rpx 40rpx;\n  margin: 0 20rpx;\n  border-radius: 8rpx;\n  background-color: #f0f3f8;\n}\n.take-photo {\n  color: #3a7bd5;\n}\n.select-image {\n  color: #00d2ff;\n}\n.btn-icon {\n  font-size: 40rpx;\n  margin-bottom: 10rpx;\n}\n.btn-text {\n  font-size: 24rpx;\n}\n\n/* 图像预览区域 */\n.preview-area {\n  margin: 30rpx;\n  background-color: #fff;\n  border-radius: 12rpx;\n  padding: 30rpx;\n  box-shadow: 0 2rpx 10rpx rgba(0, 0, 0, 0.05);\n}\n.preview-image {\n  width: 100%;\n  height: 400rpx;\n  border-radius: 8rpx;\n}\n.preview-actions {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 30rpx;\n}\n.action-btn {\n  flex: 1;\n  height: 80rpx;\n  line-height: 80rpx;\n  text-align: center;\n  border-radius: 40rpx;\n  margin: 0 20rpx;\n  font-size: 28rpx;\n}\n.cancel {\n  background-color: #f0f3f8;\n  color: #666;\n}\n.confirm {\n  background: linear-gradient(to right, #3a7bd5, #00d2ff);\n  color: #fff;\n}\n\n/* 诊断结果区域 */\n.result-area {\n  margin: 30rpx;\n  background-color: #fff;\n  border-radius: 12rpx;\n  padding: 30rpx;\n  box-shadow: 0 2rpx 10rpx rgba(0, 0, 0, 0.05);\n}\n.result-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-bottom: 20rpx;\n  border-bottom: 1rpx solid #f0f0f0;\n}\n.result-title {\n  font-size: 32rpx;\n  font-weight: bold;\n  color: #333;\n}\n.result-time {\n  font-size: 24rpx;\n  color: #999;\n}\n.result-content {\n  padding: 20rpx 0;\n}\n.result-image-area {\n  margin-bottom: 30rpx;\n}\n.result-image {\n  width: 100%;\n  height: 300rpx;\n  border-radius: 8rpx;\n}\n.result-detail {\n  padding: 0 10rpx;\n}\n.result-item {\n  display: flex;\n  justify-content: space-between;\n  padding: 16rpx 0;\n  border-bottom: 1rpx solid #f0f0f0;\n}\n.item-name {\n  font-size: 28rpx;\n  color: #666;\n}\n.item-value {\n  font-size: 28rpx;\n  color: #3a7bd5;\n  font-weight: 500;\n}\n.result-analysis, .result-suggestion {\n  margin-top: 20rpx;\n}\n.analysis-title, .suggestion-title {\n  font-size: 28rpx;\n  font-weight: bold;\n  color: #333;\n  margin-bottom: 10rpx;\n}\n.analysis-text, .suggestion-text {\n  font-size: 26rpx;\n  color: #666;\n  line-height: 1.6;\n}\n.result-actions {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 30rpx;\n}\n.again {\n  background-color: #f0f3f8;\n  color: #666;\n}\n.save {\n  background: linear-gradient(to right, #3a7bd5, #00d2ff);\n  color: #fff;\n}\n\n/* 诊断历史记录 */\n.history-section {\n  margin: 30rpx;\n  background-color: #fff;\n  border-radius: 12rpx;\n  padding: 20rpx;\n  box-shadow: 0 2rpx 10rpx rgba(0, 0, 0, 0.05);\n}\n.section-title {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20rpx;\n  padding: 0 10rpx;\n}\n.section-title .title {\n  font-size: 32rpx;\n  font-weight: bold;\n  color: #333;\n}\n.section-title .more {\n  font-size: 24rpx;\n  color: #999;\n}\n.history-item {\n  display: flex;\n  align-items: center;\n  padding: 20rpx 10rpx;\n  border-bottom: 1rpx solid #f0f0f0;\n}\n.history-item:last-child {\n  border-bottom: none;\n}\n.history-type {\n  padding: 6rpx 16rpx;\n  background-color: rgba(58, 123, 213, 0.1);\n  color: #3a7bd5;\n  font-size: 22rpx;\n  border-radius: 20rpx;\n  margin-right: 20rpx;\n}\n.history-image {\n  width: 100rpx;\n  height: 100rpx;\n  border-radius: 8rpx;\n  margin-right: 20rpx;\n}\n.history-info {\n  flex: 1;\n}\n.info-main {\n  font-size: 28rpx;\n  color: #333;\n  margin-bottom: 6rpx;\n}\n.info-time {\n  font-size: 22rpx;\n  color: #999;\n}\n.icon-right {\n  color: #ccc;\n  font-size: 32rpx;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 102 */
/*!****************************************************************!*\
  !*** D:/ai-doctor/pagesA/rehabilitation/index.vue?mpType=page ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_04bdecb8_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=04bdecb8&scoped=true&mpType=page */ 103);
/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 105);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _index_vue_vue_type_style_index_0_id_04bdecb8_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=04bdecb8&scoped=true&lang=css&mpType=page */ 107);
/* harmony import */ var _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 13);

var renderjs





/* normalize component */

var component = Object(_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_04bdecb8_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_04bdecb8_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "04bdecb8",
  null,
  false,
  _index_vue_vue_type_template_id_04bdecb8_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pagesA/rehabilitation/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 103 */
/*!**********************************************************************************************************!*\
  !*** D:/ai-doctor/pagesA/rehabilitation/index.vue?vue&type=template&id=04bdecb8&scoped=true&mpType=page ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_template_id_04bdecb8_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./index.vue?vue&type=template&id=04bdecb8&scoped=true&mpType=page */ 104);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_template_id_04bdecb8_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_template_id_04bdecb8_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_template_id_04bdecb8_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_template_id_04bdecb8_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 104 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!D:/ai-doctor/pagesA/rehabilitation/index.vue?vue&type=template&id=04bdecb8&scoped=true&mpType=page ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "uni-view",
    { staticClass: _vm._$g(0, "sc"), attrs: { _i: 0 } },
    [
      _c(
        "uni-view",
        { staticClass: _vm._$g(1, "sc"), attrs: { _i: 1 } },
        [
          _c("uni-view", {
            staticClass: _vm._$g(2, "sc"),
            style: _vm._$g(2, "s"),
            attrs: { _i: 2 },
          }),
          _c(
            "uni-view",
            { staticClass: _vm._$g(3, "sc"), attrs: { _i: 3 } },
            [
              _c(
                "uni-view",
                {
                  staticClass: _vm._$g(4, "sc"),
                  attrs: { _i: 4 },
                  on: {
                    click: function ($event) {
                      return _vm.$handleViewEvent($event)
                    },
                  },
                },
                [
                  _c(
                    "v-uni-text",
                    { staticClass: _vm._$g(5, "sc"), attrs: { _i: 5 } },
                    [_vm._v("")]
                  ),
                ],
                1
              ),
              _c(
                "uni-view",
                { staticClass: _vm._$g(6, "sc"), attrs: { _i: 6 } },
                [_vm._v("康复训练")]
              ),
              _c(
                "uni-view",
                {
                  staticClass: _vm._$g(7, "sc"),
                  attrs: { _i: 7 },
                  on: {
                    click: function ($event) {
                      return _vm.$handleViewEvent($event)
                    },
                  },
                },
                [
                  _c(
                    "v-uni-text",
                    { staticClass: _vm._$g(8, "sc"), attrs: { _i: 8 } },
                    [_vm._v("")]
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
      _vm._$g(9, "i")
        ? _c(
            "uni-view",
            { staticClass: _vm._$g(9, "sc"), attrs: { _i: 9 } },
            [
              _c("v-uni-image", {
                staticClass: _vm._$g(10, "sc"),
                attrs: {
                  src: "/static/images/empty-plan.png",
                  mode: "aspectFit",
                  _i: 10,
                },
              }),
              _c(
                "v-uni-text",
                { staticClass: _vm._$g(11, "sc"), attrs: { _i: 11 } },
                [_vm._v("暂无康复训练计划")]
              ),
              _c(
                "v-uni-text",
                { staticClass: _vm._$g(12, "sc"), attrs: { _i: 12 } },
                [_vm._v("完成X光诊断后，系统将为您生成个性化训练方案")]
              ),
              _c(
                "v-uni-button",
                {
                  staticClass: _vm._$g(13, "sc"),
                  attrs: { _i: 13 },
                  on: {
                    click: function ($event) {
                      return _vm.$handleViewEvent($event)
                    },
                  },
                },
                [_vm._v("去诊断")]
              ),
            ],
            1
          )
        : _vm._$g(14, "e")
        ? _c(
            "uni-view",
            { staticClass: _vm._$g(14, "sc"), attrs: { _i: 14 } },
            [
              _c(
                "uni-view",
                { staticClass: _vm._$g(15, "sc"), attrs: { _i: 15 } },
                [
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(16, "sc"), attrs: { _i: 16 } },
                    [
                      _c(
                        "uni-view",
                        {
                          staticClass: _vm._$g(17, "sc"),
                          class: _vm._$g(17, "c"),
                          attrs: { _i: 17 },
                        },
                        [_vm._v(_vm._$g(17, "t0-0") + "期康复")]
                      ),
                      _c(
                        "v-uni-text",
                        { staticClass: _vm._$g(18, "sc"), attrs: { _i: 18 } },
                        [
                          _vm._v(
                            "第 " +
                              _vm._$g(18, "t0-0") +
                              "/" +
                              _vm._$g(18, "t0-1") +
                              " 周"
                          ),
                        ]
                      ),
                    ],
                    1
                  ),
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(19, "sc"), attrs: { _i: 19 } },
                    [
                      _c(
                        "uni-view",
                        { staticClass: _vm._$g(20, "sc"), attrs: { _i: 20 } },
                        [
                          _c("uni-view", {
                            staticClass: _vm._$g(21, "sc"),
                            style: _vm._$g(21, "s"),
                            attrs: { _i: 21 },
                          }),
                        ],
                        1
                      ),
                      _c(
                        "v-uni-text",
                        { staticClass: _vm._$g(22, "sc"), attrs: { _i: 22 } },
                        [_vm._v(_vm._$g(22, "t0-0") + "%")]
                      ),
                    ],
                    1
                  ),
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(23, "sc"), attrs: { _i: 23 } },
                    [
                      _c(
                        "uni-view",
                        { staticClass: _vm._$g(24, "sc"), attrs: { _i: 24 } },
                        [
                          _c(
                            "v-uni-text",
                            {
                              staticClass: _vm._$g(25, "sc"),
                              attrs: { _i: 25 },
                            },
                            [_vm._v(_vm._$g(25, "t0-0"))]
                          ),
                          _c(
                            "v-uni-text",
                            {
                              staticClass: _vm._$g(26, "sc"),
                              attrs: { _i: 26 },
                            },
                            [_vm._v("本周打卡")]
                          ),
                        ],
                        1
                      ),
                      _c("uni-view", {
                        staticClass: _vm._$g(27, "sc"),
                        attrs: { _i: 27 },
                      }),
                      _c(
                        "uni-view",
                        { staticClass: _vm._$g(28, "sc"), attrs: { _i: 28 } },
                        [
                          _c(
                            "v-uni-text",
                            {
                              staticClass: _vm._$g(29, "sc"),
                              attrs: { _i: 29 },
                            },
                            [_vm._v(_vm._$g(29, "t0-0"))]
                          ),
                          _c(
                            "v-uni-text",
                            {
                              staticClass: _vm._$g(30, "sc"),
                              attrs: { _i: 30 },
                            },
                            [_vm._v("累计打卡")]
                          ),
                        ],
                        1
                      ),
                      _c("uni-view", {
                        staticClass: _vm._$g(31, "sc"),
                        attrs: { _i: 31 },
                      }),
                      _c(
                        "uni-view",
                        { staticClass: _vm._$g(32, "sc"), attrs: { _i: 32 } },
                        [
                          _c(
                            "v-uni-text",
                            {
                              staticClass: _vm._$g(33, "sc"),
                              attrs: { _i: 33 },
                            },
                            [_vm._v(_vm._$g(33, "t0-0"))]
                          ),
                          _c(
                            "v-uni-text",
                            {
                              staticClass: _vm._$g(34, "sc"),
                              attrs: { _i: 34 },
                            },
                            [_vm._v("连续天数")]
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
              _c(
                "uni-view",
                { staticClass: _vm._$g(35, "sc"), attrs: { _i: 35 } },
                [
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(36, "sc"), attrs: { _i: 36 } },
                    [
                      _c(
                        "v-uni-text",
                        { staticClass: _vm._$g(37, "sc"), attrs: { _i: 37 } },
                        [_vm._v("本周训练")]
                      ),
                      _c(
                        "v-uni-text",
                        { staticClass: _vm._$g(38, "sc"), attrs: { _i: 38 } },
                        [_vm._v("推荐每周训练 " + _vm._$g(38, "t0-0") + " 次")]
                      ),
                    ],
                    1
                  ),
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(39, "sc"), attrs: { _i: 39 } },
                    _vm._l(_vm._$g(40, "f"), function (video, $10, $20, $30) {
                      return _c(
                        "uni-view",
                        {
                          key: video,
                          staticClass: _vm._$g("40-" + $30, "sc"),
                          attrs: { _i: "40-" + $30 },
                          on: {
                            click: function ($event) {
                              return _vm.$handleViewEvent($event)
                            },
                          },
                        },
                        [
                          _c(
                            "uni-view",
                            {
                              staticClass: _vm._$g("41-" + $30, "sc"),
                              attrs: { _i: "41-" + $30 },
                            },
                            [
                              _c("v-uni-image", {
                                attrs: {
                                  src: _vm._$g("42-" + $30, "a-src"),
                                  mode: "aspectFill",
                                  _i: "42-" + $30,
                                },
                              }),
                              _c(
                                "uni-view",
                                {
                                  staticClass: _vm._$g("43-" + $30, "sc"),
                                  attrs: { _i: "43-" + $30 },
                                },
                                [_vm._v(_vm._$g("43-" + $30, "t0-0"))]
                              ),
                              _vm._$g("44-" + $30, "i")
                                ? _c(
                                    "uni-view",
                                    {
                                      staticClass: _vm._$g("44-" + $30, "sc"),
                                      attrs: { _i: "44-" + $30 },
                                    },
                                    [
                                      _c(
                                        "v-uni-text",
                                        {
                                          staticClass: _vm._$g(
                                            "45-" + $30,
                                            "sc"
                                          ),
                                          attrs: { _i: "45-" + $30 },
                                        },
                                        [_vm._v("✓")]
                                      ),
                                      _c(
                                        "v-uni-text",
                                        {
                                          staticClass: _vm._$g(
                                            "46-" + $30,
                                            "sc"
                                          ),
                                          attrs: { _i: "46-" + $30 },
                                        },
                                        [_vm._v("已完成")]
                                      ),
                                    ],
                                    1
                                  )
                                : _vm._e(),
                            ],
                            1
                          ),
                          _c(
                            "uni-view",
                            {
                              staticClass: _vm._$g("47-" + $30, "sc"),
                              attrs: { _i: "47-" + $30 },
                            },
                            [
                              _c(
                                "v-uni-text",
                                {
                                  staticClass: _vm._$g("48-" + $30, "sc"),
                                  attrs: { _i: "48-" + $30 },
                                },
                                [_vm._v(_vm._$g("48-" + $30, "t0-0"))]
                              ),
                              _c(
                                "uni-view",
                                {
                                  staticClass: _vm._$g("49-" + $30, "sc"),
                                  attrs: { _i: "49-" + $30 },
                                },
                                [
                                  _c(
                                    "v-uni-text",
                                    {
                                      staticClass: _vm._$g("50-" + $30, "sc"),
                                      class: _vm._$g("50-" + $30, "c"),
                                      attrs: { _i: "50-" + $30 },
                                    },
                                    [_vm._v(_vm._$g("50-" + $30, "t0-0"))]
                                  ),
                                  _c(
                                    "v-uni-text",
                                    {
                                      staticClass: _vm._$g("51-" + $30, "sc"),
                                      attrs: { _i: "51-" + $30 },
                                    },
                                    [_vm._v(_vm._$g("51-" + $30, "t0-0"))]
                                  ),
                                ],
                                1
                              ),
                              _c(
                                "v-uni-text",
                                {
                                  staticClass: _vm._$g("52-" + $30, "sc"),
                                  attrs: { _i: "52-" + $30 },
                                },
                                [_vm._v(_vm._$g("52-" + $30, "t0-0"))]
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      )
                    }),
                    1
                  ),
                ],
                1
              ),
              _c(
                "uni-view",
                { staticClass: _vm._$g(53, "sc"), attrs: { _i: 53 } },
                [
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(54, "sc"), attrs: { _i: 54 } },
                    [
                      _c(
                        "v-uni-text",
                        { staticClass: _vm._$g(55, "sc"), attrs: { _i: 55 } },
                        [_vm._v("康复目标")]
                      ),
                    ],
                    1
                  ),
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(56, "sc"), attrs: { _i: 56 } },
                    _vm._l(_vm._$g(57, "f"), function (goal, index, $21, $31) {
                      return _c(
                        "uni-view",
                        {
                          key: goal,
                          staticClass: _vm._$g("57-" + $31, "sc"),
                          attrs: { _i: "57-" + $31 },
                        },
                        [
                          _c(
                            "v-uni-text",
                            {
                              staticClass: _vm._$g("58-" + $31, "sc"),
                              attrs: { _i: "58-" + $31 },
                            },
                            [_vm._v(_vm._$g("58-" + $31, "t0-0"))]
                          ),
                          _c(
                            "v-uni-text",
                            {
                              staticClass: _vm._$g("59-" + $31, "sc"),
                              attrs: { _i: "59-" + $31 },
                            },
                            [_vm._v(_vm._$g("59-" + $31, "t0-0"))]
                          ),
                        ],
                        1
                      )
                    }),
                    1
                  ),
                ],
                1
              ),
            ],
            1
          )
        : _vm._e(),
      _vm._$g(60, "i")
        ? _c(
            "uni-view",
            { staticClass: _vm._$g(60, "sc"), attrs: { _i: 60 } },
            [
              _c(
                "v-uni-text",
                { staticClass: _vm._$g(61, "sc"), attrs: { _i: 61 } },
                [_vm._v("加载中...")]
              ),
            ],
            1
          )
        : _vm._e(),
    ],
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 105 */
/*!****************************************************************************************!*\
  !*** D:/ai-doctor/pagesA/rehabilitation/index.vue?vue&type=script&lang=js&mpType=page ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./index.vue?vue&type=script&lang=js&mpType=page */ 106);
/* harmony import */ var _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 106 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!D:/ai-doctor/pagesA/rehabilitation/index.vue?vue&type=script&lang=js&mpType=page ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  data: function data() {
    return {
      wxsProps: {}
    };
  },
  components: {}
};
exports.default = _default;

/***/ }),
/* 107 */
/*!************************************************************************************************************************!*\
  !*** D:/ai-doctor/pagesA/rehabilitation/index.vue?vue&type=style&index=0&id=04bdecb8&scoped=true&lang=css&mpType=page ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_style_index_0_id_04bdecb8_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./index.vue?vue&type=style&index=0&id=04bdecb8&scoped=true&lang=css&mpType=page */ 108);
/* harmony import */ var _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_style_index_0_id_04bdecb8_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_style_index_0_id_04bdecb8_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_style_index_0_id_04bdecb8_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_style_index_0_id_04bdecb8_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_style_index_0_id_04bdecb8_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 108 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!D:/ai-doctor/pagesA/rehabilitation/index.vue?vue&type=style&index=0&id=04bdecb8&scoped=true&lang=css&mpType=page ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./index.vue?vue&type=style&index=0&id=04bdecb8&scoped=true&lang=css&mpType=page */ 109);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader/lib/addStylesClient.js */ 11).default
var update = add("cf04e244", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 109 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!D:/ai-doctor/pagesA/rehabilitation/index.vue?vue&type=style&index=0&id=04bdecb8&scoped=true&lang=css&mpType=page ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ 10);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.rehabilitation-container[data-v-04bdecb8] {\n  min-height: 100vh;\n  background: #f5f7fa;\n}\n\n/* 自定义导航栏 */\n.custom-navbar[data-v-04bdecb8] {\n  background: #fff;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 999;\n  box-shadow: 0 2px 8px rgba(0,0,0,0.05);\n}\n.nav-bar[data-v-04bdecb8] {\n  height: 44px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 15px;\n}\n.nav-left[data-v-04bdecb8], .nav-right[data-v-04bdecb8] {\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  color: #333;\n}\n.nav-title[data-v-04bdecb8] {\n  font-size: 17px;\n  font-weight: 600;\n  color: #333;\n}\n\n/* 空状态 */\n.empty-state[data-v-04bdecb8] {\n  padding: 100px 40px;\n  text-align: center;\n}\n.empty-image[data-v-04bdecb8] {\n  width: 200px;\n  height: 200px;\n  margin: 0 auto 20px;\n}\n.empty-text[data-v-04bdecb8] {\n  display: block;\n  font-size: 18px;\n  font-weight: 600;\n  color: #333;\n  margin-bottom: 10px;\n}\n.empty-hint[data-v-04bdecb8] {\n  display: block;\n  font-size: 14px;\n  color: #999;\n  line-height: 22px;\n  margin-bottom: 30px;\n}\n.create-plan-btn[data-v-04bdecb8] {\n  width: 200px;\n  height: 44px;\n  line-height: 44px;\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  color: #fff;\n  border-radius: 22px;\n  border: none;\n  font-size: 16px;\n}\n\n/* 计划内容 */\n.plan-content[data-v-04bdecb8] {\n  padding-top: 88px;\n  padding-bottom: 20px;\n}\n\n/* 进度卡片 */\n.progress-card[data-v-04bdecb8] {\n  margin: 15px;\n  padding: 20px;\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  border-radius: 15px;\n  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);\n}\n.card-header[data-v-04bdecb8] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 15px;\n}\n.stage-badge[data-v-04bdecb8] {\n  padding: 5px 12px;\n  background: rgba(255, 255, 255, 0.3);\n  border-radius: 20px;\n  color: #fff;\n  font-size: 14px;\n  font-weight: 600;\n}\n.duration-text[data-v-04bdecb8] {\n  color: rgba(255, 255, 255, 0.9);\n  font-size: 14px;\n}\n.progress-bar-container[data-v-04bdecb8] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.progress-bar[data-v-04bdecb8] {\n  flex: 1;\n  height: 8px;\n  background: rgba(255, 255, 255, 0.3);\n  border-radius: 4px;\n  overflow: hidden;\n  margin-right: 10px;\n}\n.progress-fill[data-v-04bdecb8] {\n  height: 100%;\n  background: #fff;\n  border-radius: 4px;\n  transition: width 0.3s;\n}\n.progress-text[data-v-04bdecb8] {\n  color: #fff;\n  font-size: 14px;\n  font-weight: 600;\n  min-width: 40px;\n}\n.stats-row[data-v-04bdecb8] {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n.stat-item[data-v-04bdecb8] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.stat-value[data-v-04bdecb8] {\n  font-size: 24px;\n  font-weight: bold;\n  color: #fff;\n  margin-bottom: 5px;\n}\n.stat-label[data-v-04bdecb8] {\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.8);\n}\n.stat-divider[data-v-04bdecb8] {\n  width: 1px;\n  height: 30px;\n  background: rgba(255, 255, 255, 0.3);\n}\n\n/* 分区 */\n.section[data-v-04bdecb8] {\n  margin: 15px;\n}\n.section-header[data-v-04bdecb8] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 15px;\n}\n.section-title[data-v-04bdecb8] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #333;\n}\n.section-subtitle[data-v-04bdecb8] {\n  font-size: 12px;\n  color: #999;\n}\n\n/* 视频列表 */\n.video-list[data-v-04bdecb8] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.video-card[data-v-04bdecb8] {\n  display: flex;\n  background: #fff;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 2px 8px rgba(0,0,0,0.05);\n}\n.video-thumbnail[data-v-04bdecb8] {\n  width: 120px;\n  height: 120px;\n  position: relative;\n  flex-shrink: 0;\n}\n.video-thumbnail uni-image[data-v-04bdecb8] {\n  width: 100%;\n  height: 100%;\n}\n.video-duration[data-v-04bdecb8] {\n  position: absolute;\n  bottom: 8px;\n  right: 8px;\n  padding: 2px 6px;\n  background: rgba(0, 0, 0, 0.6);\n  color: #fff;\n  font-size: 11px;\n  border-radius: 4px;\n}\n.completed-badge[data-v-04bdecb8] {\n  position: absolute;\n  top: 8px;\n  left: 8px;\n  display: flex;\n  align-items: center;\n  padding: 4px 8px;\n  background: rgba(82, 196, 26, 0.9);\n  border-radius: 12px;\n}\n.badge-icon[data-v-04bdecb8] {\n  color: #fff;\n  font-size: 12px;\n  margin-right: 3px;\n}\n.badge-text[data-v-04bdecb8] {\n  color: #fff;\n  font-size: 11px;\n}\n.video-info[data-v-04bdecb8] {\n  flex: 1;\n  padding: 12px;\n  display: flex;\n  flex-direction: column;\n}\n.video-title[data-v-04bdecb8] {\n  font-size: 15px;\n  font-weight: 600;\n  color: #333;\n  margin-bottom: 8px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.video-meta[data-v-04bdecb8] {\n  display: flex;\n  gap: 6px;\n  margin-bottom: 8px;\n}\n.difficulty-tag[data-v-04bdecb8], .category-tag[data-v-04bdecb8] {\n  padding: 2px 8px;\n  font-size: 11px;\n  border-radius: 10px;\n}\n.difficulty-tag[data-v-04bdecb8] {\n  background: #e6f7ff;\n  color: #1890ff;\n}\n.difficulty-medium[data-v-04bdecb8] {\n  background: #fff7e6;\n  color: #fa8c16;\n}\n.difficulty-hard[data-v-04bdecb8] {\n  background: #fff1f0;\n  color: #f5222d;\n}\n.category-tag[data-v-04bdecb8] {\n  background: #f6ffed;\n  color: #52c41a;\n}\n.video-desc[data-v-04bdecb8] {\n  font-size: 12px;\n  color: #999;\n  line-height: 18px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n}\n\n/* 康复目标 */\n.goals-section[data-v-04bdecb8] {\n  margin-bottom: 30px;\n}\n.goals-card[data-v-04bdecb8] {\n  background: #fff;\n  border-radius: 12px;\n  padding: 15px;\n  box-shadow: 0 2px 8px rgba(0,0,0,0.05);\n}\n.goal-item[data-v-04bdecb8] {\n  display: flex;\n  align-items: center;\n  padding: 10px 0;\n  border-bottom: 1px solid #f0f0f0;\n}\n.goal-item[data-v-04bdecb8]:last-child {\n  border-bottom: none;\n}\n.goal-icon[data-v-04bdecb8] {\n  font-size: 20px;\n  margin-right: 12px;\n}\n.goal-text[data-v-04bdecb8] {\n  font-size: 14px;\n  color: #666;\n}\n\n/* 加载状态 */\n.loading-state[data-v-04bdecb8] {\n  padding: 100px 0;\n  text-align: center;\n}\n.loading-text[data-v-04bdecb8] {\n  color: #999;\n  font-size: 14px;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 110 */
/*!**************************************************************!*\
  !*** D:/ai-doctor/pagesA/video-player/index.vue?mpType=page ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_45cdff3a_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=45cdff3a&scoped=true&mpType=page */ 111);
/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 113);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _index_vue_vue_type_style_index_0_id_45cdff3a_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=45cdff3a&scoped=true&lang=css&mpType=page */ 115);
/* harmony import */ var _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 13);

var renderjs





/* normalize component */

var component = Object(_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_45cdff3a_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_45cdff3a_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "45cdff3a",
  null,
  false,
  _index_vue_vue_type_template_id_45cdff3a_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pagesA/video-player/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 111 */
/*!********************************************************************************************************!*\
  !*** D:/ai-doctor/pagesA/video-player/index.vue?vue&type=template&id=45cdff3a&scoped=true&mpType=page ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_template_id_45cdff3a_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./index.vue?vue&type=template&id=45cdff3a&scoped=true&mpType=page */ 112);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_template_id_45cdff3a_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_template_id_45cdff3a_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_template_id_45cdff3a_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_template_id_45cdff3a_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 112 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!D:/ai-doctor/pagesA/video-player/index.vue?vue&type=template&id=45cdff3a&scoped=true&mpType=page ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "uni-view",
    { staticClass: _vm._$g(0, "sc"), attrs: { _i: 0 } },
    [
      _c("v-uni-video", {
        staticClass: _vm._$g(1, "sc"),
        attrs: {
          id: "rehabVideo",
          src: _vm._$g(1, "a-src"),
          controls: true,
          "show-center-play-btn": true,
          "enable-progress-gesture": true,
          _i: 1,
        },
        on: {
          timeupdate: function ($event) {
            return _vm.$handleViewEvent($event)
          },
          ended: function ($event) {
            return _vm.$handleViewEvent($event)
          },
          error: function ($event) {
            return _vm.$handleViewEvent($event)
          },
        },
      }),
      _c(
        "uni-view",
        { staticClass: _vm._$g(2, "sc"), attrs: { _i: 2 } },
        [
          _c(
            "v-uni-text",
            { staticClass: _vm._$g(3, "sc"), attrs: { _i: 3 } },
            [_vm._v(_vm._$g(3, "t0-0"))]
          ),
          _c(
            "uni-view",
            { staticClass: _vm._$g(4, "sc"), attrs: { _i: 4 } },
            [
              _c(
                "v-uni-text",
                {
                  staticClass: _vm._$g(5, "sc"),
                  class: _vm._$g(5, "c"),
                  attrs: { _i: 5 },
                },
                [_vm._v(_vm._$g(5, "t0-0"))]
              ),
              _c(
                "v-uni-text",
                { staticClass: _vm._$g(6, "sc"), attrs: { _i: 6 } },
                [_vm._v(_vm._$g(6, "t0-0"))]
              ),
            ],
            1
          ),
          _c(
            "v-uni-text",
            { staticClass: _vm._$g(7, "sc"), attrs: { _i: 7 } },
            [_vm._v(_vm._$g(7, "t0-0"))]
          ),
          _vm._$g(8, "i")
            ? _c(
                "uni-view",
                { staticClass: _vm._$g(8, "sc"), attrs: { _i: 8 } },
                [
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(9, "sc"), attrs: { _i: 9 } },
                    [
                      _c(
                        "v-uni-text",
                        { staticClass: _vm._$g(10, "sc"), attrs: { _i: 10 } },
                        [_vm._v("⚠️")]
                      ),
                      _c(
                        "v-uni-text",
                        { staticClass: _vm._$g(11, "sc"), attrs: { _i: 11 } },
                        [_vm._v("注意事项")]
                      ),
                    ],
                    1
                  ),
                  _vm._l(_vm._$g(12, "f"), function (item, index, $20, $30) {
                    return _c(
                      "uni-view",
                      {
                        key: item,
                        staticClass: _vm._$g("12-" + $30, "sc"),
                        attrs: { _i: "12-" + $30 },
                      },
                      [
                        _c(
                          "v-uni-text",
                          {
                            staticClass: _vm._$g("13-" + $30, "sc"),
                            attrs: { _i: "13-" + $30 },
                          },
                          [
                            _vm._v(
                              _vm._$g("13-" + $30, "t0-0") +
                                ". " +
                                _vm._$g("13-" + $30, "t0-1")
                            ),
                          ]
                        ),
                      ],
                      1
                    )
                  }),
                ],
                2
              )
            : _vm._e(),
        ],
        1
      ),
      _vm._$g(14, "i")
        ? _c(
            "uni-view",
            { staticClass: _vm._$g(14, "sc"), attrs: { _i: 14 } },
            [
              _c(
                "uni-view",
                { staticClass: _vm._$g(15, "sc"), attrs: { _i: 15 } },
                [
                  _c(
                    "v-uni-text",
                    { staticClass: _vm._$g(16, "sc"), attrs: { _i: 16 } },
                    [_vm._v("完成训练打卡")]
                  ),
                  _c(
                    "v-uni-text",
                    { staticClass: _vm._$g(17, "sc"), attrs: { _i: 17 } },
                    [_vm._v("记录您的训练感受")]
                  ),
                ],
                1
              ),
              _c(
                "uni-view",
                { staticClass: _vm._$g(18, "sc"), attrs: { _i: 18 } },
                [
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(19, "sc"), attrs: { _i: 19 } },
                    [
                      _c(
                        "v-uni-text",
                        { staticClass: _vm._$g(20, "sc"), attrs: { _i: 20 } },
                        [_vm._v("难度感受")]
                      ),
                      _c(
                        "uni-view",
                        { staticClass: _vm._$g(21, "sc"), attrs: { _i: 21 } },
                        _vm._l(5, function (i, $11, $21, $31) {
                          return _c(
                            "v-uni-text",
                            {
                              key: "d" + i,
                              staticClass: _vm._$g("22-" + $31, "sc"),
                              class: _vm._$g("22-" + $31, "c"),
                              attrs: { _i: "22-" + $31 },
                              on: {
                                click: function ($event) {
                                  return _vm.$handleViewEvent($event)
                                },
                              },
                            },
                            [_vm._v("★")]
                          )
                        }),
                        1
                      ),
                      _c(
                        "v-uni-text",
                        { staticClass: _vm._$g(23, "sc"), attrs: { _i: 23 } },
                        [_vm._v(_vm._$g(23, "t0-0"))]
                      ),
                    ],
                    1
                  ),
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(24, "sc"), attrs: { _i: 24 } },
                    [
                      _c(
                        "v-uni-text",
                        { staticClass: _vm._$g(25, "sc"), attrs: { _i: 25 } },
                        [_vm._v("疼痛程度")]
                      ),
                      _c(
                        "uni-view",
                        { staticClass: _vm._$g(26, "sc"), attrs: { _i: 26 } },
                        _vm._l(5, function (i, $12, $22, $32) {
                          return _c(
                            "v-uni-text",
                            {
                              key: "p" + i,
                              staticClass: _vm._$g("27-" + $32, "sc"),
                              class: _vm._$g("27-" + $32, "c"),
                              attrs: { _i: "27-" + $32 },
                              on: {
                                click: function ($event) {
                                  return _vm.$handleViewEvent($event)
                                },
                              },
                            },
                            [_vm._v("★")]
                          )
                        }),
                        1
                      ),
                      _c(
                        "v-uni-text",
                        { staticClass: _vm._$g(28, "sc"), attrs: { _i: 28 } },
                        [_vm._v(_vm._$g(28, "t0-0"))]
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
              _c(
                "uni-view",
                { staticClass: _vm._$g(29, "sc"), attrs: { _i: 29 } },
                [
                  _c(
                    "v-uni-text",
                    { staticClass: _vm._$g(30, "sc"), attrs: { _i: 30 } },
                    [_vm._v("训练笔记（选填）")]
                  ),
                  _c("v-uni-textarea", {
                    staticClass: _vm._$g(31, "sc"),
                    attrs: {
                      placeholder: "记录训练感受、身体状态等...",
                      maxlength: "200",
                      _i: 31,
                    },
                    model: {
                      value: _vm._$g(31, "v-model"),
                      callback: function ($$v) {
                        _vm.$handleVModelEvent(31, $$v)
                      },
                      expression: "notes",
                    },
                  }),
                  _c(
                    "v-uni-text",
                    { staticClass: _vm._$g(32, "sc"), attrs: { _i: 32 } },
                    [_vm._v(_vm._$g(32, "t0-0") + "/200")]
                  ),
                ],
                1
              ),
              _c(
                "uni-view",
                { staticClass: _vm._$g(33, "sc"), attrs: { _i: 33 } },
                [
                  _c(
                    "v-uni-button",
                    {
                      staticClass: _vm._$g(34, "sc"),
                      attrs: { _i: 34 },
                      on: {
                        click: function ($event) {
                          return _vm.$handleViewEvent($event)
                        },
                      },
                    },
                    [_vm._v("取消")]
                  ),
                  _c(
                    "v-uni-button",
                    {
                      staticClass: _vm._$g(35, "sc"),
                      attrs: { disabled: _vm._$g(35, "a-disabled"), _i: 35 },
                      on: {
                        click: function ($event) {
                          return _vm.$handleViewEvent($event)
                        },
                      },
                    },
                    [
                      _vm._$g(36, "i")
                        ? _c("v-uni-text", { attrs: { _i: 36 } }, [
                            _vm._v("完成打卡 +10积分"),
                          ])
                        : _c("v-uni-text", { attrs: { _i: 37 } }, [
                            _vm._v("打卡中..."),
                          ]),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          )
        : _vm._e(),
      _vm._$g(38, "i")
        ? _c(
            "uni-view",
            { staticClass: _vm._$g(38, "sc"), attrs: { _i: 38 } },
            [
              _c(
                "v-uni-button",
                {
                  staticClass: _vm._$g(39, "sc"),
                  attrs: { _i: 39 },
                  on: {
                    click: function ($event) {
                      return _vm.$handleViewEvent($event)
                    },
                  },
                },
                [
                  _c(
                    "v-uni-text",
                    { staticClass: _vm._$g(40, "sc"), attrs: { _i: 40 } },
                    [_vm._v("✓")]
                  ),
                  _c("v-uni-text", { attrs: { _i: 41 } }, [_vm._v("完成打卡")]),
                ],
                1
              ),
            ],
            1
          )
        : _vm._e(),
    ],
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 113 */
/*!**************************************************************************************!*\
  !*** D:/ai-doctor/pagesA/video-player/index.vue?vue&type=script&lang=js&mpType=page ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./index.vue?vue&type=script&lang=js&mpType=page */ 114);
/* harmony import */ var _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 114 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!D:/ai-doctor/pagesA/video-player/index.vue?vue&type=script&lang=js&mpType=page ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  data: function data() {
    return {
      wxsProps: {}
    };
  },
  components: {}
};
exports.default = _default;

/***/ }),
/* 115 */
/*!**********************************************************************************************************************!*\
  !*** D:/ai-doctor/pagesA/video-player/index.vue?vue&type=style&index=0&id=45cdff3a&scoped=true&lang=css&mpType=page ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_style_index_0_id_45cdff3a_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./index.vue?vue&type=style&index=0&id=45cdff3a&scoped=true&lang=css&mpType=page */ 116);
/* harmony import */ var _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_style_index_0_id_45cdff3a_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_style_index_0_id_45cdff3a_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_style_index_0_id_45cdff3a_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_style_index_0_id_45cdff3a_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_style_index_0_id_45cdff3a_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 116 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!D:/ai-doctor/pagesA/video-player/index.vue?vue&type=style&index=0&id=45cdff3a&scoped=true&lang=css&mpType=page ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./index.vue?vue&type=style&index=0&id=45cdff3a&scoped=true&lang=css&mpType=page */ 117);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader/lib/addStylesClient.js */ 11).default
var update = add("84a96b54", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 117 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!D:/ai-doctor/pagesA/video-player/index.vue?vue&type=style&index=0&id=45cdff3a&scoped=true&lang=css&mpType=page ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ 10);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.player-container[data-v-45cdff3a] {\n  min-height: 100vh;\n  background: #f5f7fa;\n  padding-bottom: 80px;\n}\n\n/* 视频播放器 */\n.video-player[data-v-45cdff3a] {\n  width: 100%;\n  height: 210px;\n  background: #000;\n}\n\n/* 视频信息 */\n.video-info-section[data-v-45cdff3a] {\n  background: #fff;\n  padding: 15px;\n  margin-bottom: 10px;\n}\n.video-title[data-v-45cdff3a] {\n  display: block;\n  font-size: 18px;\n  font-weight: 600;\n  color: #333;\n  margin-bottom: 10px;\n}\n.video-tags[data-v-45cdff3a] {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 12px;\n}\n.tag[data-v-45cdff3a] {\n  padding: 4px 10px;\n  font-size: 12px;\n  border-radius: 12px;\n}\n.difficulty-tag[data-v-45cdff3a] {\n  background: #e6f7ff;\n  color: #1890ff;\n}\n.difficulty-medium[data-v-45cdff3a] {\n  background: #fff7e6;\n  color: #fa8c16;\n}\n.difficulty-hard[data-v-45cdff3a] {\n  background: #fff1f0;\n  color: #f5222d;\n}\n.category-tag[data-v-45cdff3a] {\n  background: #f6ffed;\n  color: #52c41a;\n}\n.video-description[data-v-45cdff3a] {\n  display: block;\n  font-size: 14px;\n  color: #666;\n  line-height: 22px;\n}\n\n/* 注意事项 */\n.precautions[data-v-45cdff3a] {\n  margin-top: 15px;\n  padding: 12px;\n  background: #fffbe6;\n  border-radius: 8px;\n  border-left: 3px solid #faad14;\n}\n.precautions-header[data-v-45cdff3a] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 8px;\n}\n.precautions-icon[data-v-45cdff3a] {\n  font-size: 16px;\n  margin-right: 6px;\n}\n.precautions-title[data-v-45cdff3a] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #333;\n}\n.precaution-item[data-v-45cdff3a] {\n  margin-top: 6px;\n}\n.precaution-text[data-v-45cdff3a] {\n  font-size: 13px;\n  color: #666;\n  line-height: 20px;\n}\n\n/* 打卡面板 */\n.check-in-panel[data-v-45cdff3a] {\n  background: #fff;\n  padding: 20px 15px;\n  border-radius: 12px 12px 0 0;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  max-height: 70vh;\n  overflow-y: auto;\n  box-shadow: 0 -2px 12px rgba(0,0,0,0.1);\n  z-index: 100;\n}\n.panel-header[data-v-45cdff3a] {\n  text-align: center;\n  margin-bottom: 20px;\n}\n.panel-title[data-v-45cdff3a] {\n  display: block;\n  font-size: 18px;\n  font-weight: 600;\n  color: #333;\n  margin-bottom: 5px;\n}\n.panel-subtitle[data-v-45cdff3a] {\n  display: block;\n  font-size: 13px;\n  color: #999;\n}\n\n/* 反馈区域 */\n.feedback-section[data-v-45cdff3a] {\n  margin-bottom: 20px;\n}\n.feedback-item[data-v-45cdff3a] {\n  margin-bottom: 15px;\n}\n.feedback-label[data-v-45cdff3a] {\n  display: block;\n  font-size: 14px;\n  font-weight: 600;\n  color: #333;\n  margin-bottom: 8px;\n}\n.rating-stars[data-v-45cdff3a] {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 5px;\n}\n.star[data-v-45cdff3a] {\n  font-size: 28px;\n  color: #ddd;\n  transition: color 0.2s;\n}\n.star.active[data-v-45cdff3a] {\n  color: #faad14;\n}\n.star.pain.active[data-v-45cdff3a] {\n  color: #f5222d;\n}\n.rating-desc[data-v-45cdff3a] {\n  display: block;\n  font-size: 12px;\n  color: #999;\n  margin-left: 5px;\n}\n\n/* 笔记区域 */\n.notes-section[data-v-45cdff3a] {\n  margin-bottom: 20px;\n}\n.notes-label[data-v-45cdff3a] {\n  display: block;\n  font-size: 14px;\n  font-weight: 600;\n  color: #333;\n  margin-bottom: 8px;\n}\n.notes-input[data-v-45cdff3a] {\n  width: 100%;\n  min-height: 80px;\n  padding: 10px;\n  background: #f5f5f5;\n  border-radius: 8px;\n  font-size: 14px;\n  color: #333;\n  box-sizing: border-box;\n}\n.char-count[data-v-45cdff3a] {\n  display: block;\n  text-align: right;\n  font-size: 12px;\n  color: #999;\n  margin-top: 5px;\n}\n\n/* 操作按钮 */\n.action-buttons[data-v-45cdff3a] {\n  display: flex;\n  gap: 10px;\n}\n.cancel-btn[data-v-45cdff3a], .check-in-btn[data-v-45cdff3a] {\n  flex: 1;\n  height: 44px;\n  line-height: 44px;\n  border-radius: 22px;\n  font-size: 15px;\n  border: none;\n}\n.cancel-btn[data-v-45cdff3a] {\n  background: #f5f5f5;\n  color: #666;\n}\n.check-in-btn[data-v-45cdff3a] {\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  color: #fff;\n}\n.check-in-btn[disabled][data-v-45cdff3a] {\n  opacity: 0.6;\n}\n\n/* 底部操作栏 */\n.bottom-actions[data-v-45cdff3a] {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  padding: 10px 15px;\n  background: #fff;\n  box-shadow: 0 -2px 8px rgba(0,0,0,0.05);\n  z-index: 99;\n}\n.action-btn[data-v-45cdff3a] {\n  width: 100%;\n  height: 44px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 22px;\n  font-size: 15px;\n  border: none;\n}\n.action-btn.primary[data-v-45cdff3a] {\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  color: #fff;\n}\n.btn-icon[data-v-45cdff3a] {\n  margin-right: 5px;\n  font-size: 16px;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 118 */
/*!******************************************************!*\
  !*** D:/ai-doctor/pagesB/mine/login.vue?mpType=page ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_vue_vue_type_template_id_5e969710_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.vue?vue&type=template&id=5e969710&mpType=page */ 119);
/* harmony import */ var _login_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.vue?vue&type=script&lang=js&mpType=page */ 121);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _login_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _login_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _login_vue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.vue?vue&type=style&index=0&lang=css&mpType=page */ 123);
/* harmony import */ var _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 13);

var renderjs





/* normalize component */

var component = Object(_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _login_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _login_vue_vue_type_template_id_5e969710_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _login_vue_vue_type_template_id_5e969710_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _login_vue_vue_type_template_id_5e969710_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pagesB/mine/login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 119 */
/*!************************************************************************************!*\
  !*** D:/ai-doctor/pagesB/mine/login.vue?vue&type=template&id=5e969710&mpType=page ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_login_vue_vue_type_template_id_5e969710_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./login.vue?vue&type=template&id=5e969710&mpType=page */ 120);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_login_vue_vue_type_template_id_5e969710_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_login_vue_vue_type_template_id_5e969710_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_login_vue_vue_type_template_id_5e969710_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_login_vue_vue_type_template_id_5e969710_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 120 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!D:/ai-doctor/pagesB/mine/login.vue?vue&type=template&id=5e969710&mpType=page ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "uni-view",
    { staticClass: _vm._$g(0, "sc"), attrs: { _i: 0 } },
    [
      _c("uni-view", {
        staticClass: _vm._$g(1, "sc"),
        style: _vm._$g(1, "s"),
        attrs: { _i: 1 },
      }),
      _c(
        "uni-view",
        {
          staticClass: _vm._$g(2, "sc"),
          style: _vm._$g(2, "s"),
          attrs: { _i: 2 },
          on: {
            click: function ($event) {
              return _vm.$handleViewEvent($event)
            },
          },
        },
        [
          _c(
            "v-uni-text",
            { staticClass: _vm._$g(3, "sc"), attrs: { _i: 3 } },
            [_vm._v("←")]
          ),
        ],
        1
      ),
      _c(
        "uni-view",
        { staticClass: _vm._$g(4, "sc"), attrs: { _i: 4 } },
        [
          _c("v-uni-image", {
            staticClass: _vm._$g(5, "sc"),
            attrs: { src: "/static/logo.png", mode: "aspectFit", _i: 5 },
          }),
          _c(
            "v-uni-text",
            { staticClass: _vm._$g(6, "sc"), attrs: { _i: 6 } },
            [_vm._v("医疗助手")]
          ),
          _c(
            "v-uni-text",
            { staticClass: _vm._$g(7, "sc"), attrs: { _i: 7 } },
            [_vm._v("您的健康管家，随时守护您的健康")]
          ),
        ],
        1
      ),
      _c(
        "uni-view",
        { staticClass: _vm._$g(8, "sc"), attrs: { _i: 8 } },
        [
          _c(
            "uni-view",
            { attrs: { _i: 9 } },
            [
              _c(
                "uni-view",
                { staticClass: _vm._$g(10, "sc"), attrs: { _i: 10 } },
                [
                  _c("v-uni-text", {
                    staticClass: _vm._$g(11, "sc"),
                    attrs: { _i: 11 },
                  }),
                  _c("v-uni-input", {
                    attrs: {
                      type: "text",
                      placeholder: "请输入用户名/手机号",
                      maxlength: "20",
                      _i: 12,
                    },
                    model: {
                      value: _vm._$g(12, "v-model"),
                      callback: function ($$v) {
                        _vm.$handleVModelEvent(12, $$v)
                      },
                      expression: "passwordForm.username",
                    },
                  }),
                ],
                1
              ),
              _c(
                "uni-view",
                { staticClass: _vm._$g(13, "sc"), attrs: { _i: 13 } },
                [
                  _c("v-uni-text", {
                    staticClass: _vm._$g(14, "sc"),
                    attrs: { _i: 14 },
                  }),
                  _c("v-uni-input", {
                    attrs: {
                      type: _vm._$g(15, "a-type"),
                      placeholder: "请输入密码",
                      maxlength: "20",
                      _i: 15,
                    },
                    model: {
                      value: _vm._$g(15, "v-model"),
                      callback: function ($$v) {
                        _vm.$handleVModelEvent(15, $$v)
                      },
                      expression: "passwordForm.password",
                    },
                  }),
                  _c("v-uni-text", {
                    staticClass: _vm._$g(16, "sc"),
                    class: _vm._$g(16, "c"),
                    attrs: { _i: 16 },
                    on: {
                      click: function ($event) {
                        return _vm.$handleViewEvent($event)
                      },
                    },
                  }),
                ],
                1
              ),
            ],
            1
          ),
          _c(
            "uni-view",
            { staticClass: _vm._$g(17, "sc"), attrs: { _i: 17 } },
            [
              _c(
                "uni-view",
                {
                  staticClass: _vm._$g(18, "sc"),
                  attrs: { _i: 18 },
                  on: {
                    click: function ($event) {
                      return _vm.$handleViewEvent($event)
                    },
                  },
                },
                [
                  _c("uni-view", {
                    staticClass: _vm._$g(19, "sc"),
                    class: _vm._$g(19, "c"),
                    attrs: { _i: 19 },
                  }),
                  _c("v-uni-text", { attrs: { _i: 20 } }, [_vm._v("记住密码")]),
                ],
                1
              ),
              _c(
                "v-uni-text",
                {
                  staticClass: _vm._$g(21, "sc"),
                  attrs: { _i: 21 },
                  on: {
                    click: function ($event) {
                      return _vm.$handleViewEvent($event)
                    },
                  },
                },
                [_vm._v("忘记密码？")]
              ),
            ],
            1
          ),
          _c(
            "uni-view",
            {
              staticClass: _vm._$g(22, "sc"),
              attrs: { _i: 22 },
              on: {
                click: function ($event) {
                  return _vm.$handleViewEvent($event)
                },
              },
            },
            [_vm._v("登录")]
          ),
          _c(
            "uni-view",
            { staticClass: _vm._$g(23, "sc"), attrs: { _i: 23 } },
            [
              _c(
                "uni-view",
                {
                  staticClass: _vm._$g(24, "sc"),
                  attrs: { _i: 24 },
                  on: {
                    click: function ($event) {
                      return _vm.$handleViewEvent($event)
                    },
                  },
                },
                [
                  _c(
                    "v-uni-text",
                    { staticClass: _vm._$g(25, "sc"), attrs: { _i: 25 } },
                    [_vm._v("🟢")]
                  ),
                  _c("v-uni-text", { attrs: { _i: 26 } }, [
                    _vm._v("微信一键登录"),
                  ]),
                ],
                1
              ),
            ],
            1
          ),
          _c(
            "uni-view",
            { staticClass: _vm._$g(27, "sc"), attrs: { _i: 27 } },
            [
              _c(
                "uni-view",
                { staticClass: _vm._$g(28, "sc"), attrs: { _i: 28 } },
                [
                  _c("uni-view", {
                    staticClass: _vm._$g(29, "sc"),
                    attrs: { _i: 29 },
                  }),
                  _c("v-uni-text", { attrs: { _i: 30 } }, [
                    _vm._v("其他登录方式"),
                  ]),
                  _c("uni-view", {
                    staticClass: _vm._$g(31, "sc"),
                    attrs: { _i: 31 },
                  }),
                ],
                1
              ),
              _c(
                "uni-view",
                { staticClass: _vm._$g(32, "sc"), attrs: { _i: 32 } },
                [
                  _c(
                    "uni-view",
                    {
                      staticClass: _vm._$g(33, "sc"),
                      attrs: { _i: 33 },
                      on: {
                        click: function ($event) {
                          return _vm.$handleViewEvent($event)
                        },
                      },
                    },
                    [
                      _c("v-uni-text", {
                        staticClass: _vm._$g(34, "sc"),
                        attrs: { _i: 34 },
                      }),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
          _c(
            "uni-view",
            { staticClass: _vm._$g(35, "sc"), attrs: { _i: 35 } },
            [
              _c("v-uni-text", { attrs: { _i: 36 } }, [_vm._v("还没有账号？")]),
              _c(
                "v-uni-text",
                {
                  staticClass: _vm._$g(37, "sc"),
                  attrs: { _i: 37 },
                  on: {
                    click: function ($event) {
                      return _vm.$handleViewEvent($event)
                    },
                  },
                },
                [_vm._v("立即注册")]
              ),
            ],
            1
          ),
        ],
        1
      ),
      _c(
        "uni-view",
        { staticClass: _vm._$g(38, "sc"), attrs: { _i: 38 } },
        [
          _c(
            "uni-view",
            {
              staticClass: _vm._$g(39, "sc"),
              attrs: { _i: 39 },
              on: {
                click: function ($event) {
                  return _vm.$handleViewEvent($event)
                },
              },
            },
            [
              _c("uni-view", {
                staticClass: _vm._$g(40, "sc"),
                class: _vm._$g(40, "c"),
                attrs: { _i: 40 },
              }),
            ],
            1
          ),
          _c(
            "v-uni-text",
            { staticClass: _vm._$g(41, "sc"), attrs: { _i: 41 } },
            [
              _vm._v("登录即代表您已阅读并同意"),
              _c(
                "v-uni-text",
                {
                  staticClass: _vm._$g(42, "sc"),
                  attrs: { _i: 42 },
                  on: {
                    click: function ($event) {
                      return _vm.$handleViewEvent($event)
                    },
                  },
                },
                [_vm._v("《用户协议》")]
              ),
              _vm._v("和"),
              _c(
                "v-uni-text",
                {
                  staticClass: _vm._$g(43, "sc"),
                  attrs: { _i: 43 },
                  on: {
                    click: function ($event) {
                      return _vm.$handleViewEvent($event)
                    },
                  },
                },
                [_vm._v("《隐私政策》")]
              ),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 121 */
/*!******************************************************************************!*\
  !*** D:/ai-doctor/pagesB/mine/login.vue?vue&type=script&lang=js&mpType=page ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_login_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./login.vue?vue&type=script&lang=js&mpType=page */ 122);
/* harmony import */ var _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_login_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_login_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_login_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_login_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_login_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 122 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!D:/ai-doctor/pagesB/mine/login.vue?vue&type=script&lang=js&mpType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  data: function data() {
    return {
      wxsProps: {}
    };
  },
  components: {}
};
exports.default = _default;

/***/ }),
/* 123 */
/*!**************************************************************************************!*\
  !*** D:/ai-doctor/pagesB/mine/login.vue?vue&type=style&index=0&lang=css&mpType=page ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_login_vue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./login.vue?vue&type=style&index=0&lang=css&mpType=page */ 124);
/* harmony import */ var _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_login_vue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_login_vue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_login_vue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_login_vue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_login_vue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 124 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!D:/ai-doctor/pagesB/mine/login.vue?vue&type=style&index=0&lang=css&mpType=page ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./login.vue?vue&type=style&index=0&lang=css&mpType=page */ 125);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader/lib/addStylesClient.js */ 11).default
var update = add("7da6d058", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 125 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!D:/ai-doctor/pagesB/mine/login.vue?vue&type=style&index=0&lang=css&mpType=page ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ 10);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.container {\n  min-height: 100vh;\n  background-color: #fff;\n  display: flex;\n  flex-direction: column;\n}\n\n/* 顶部安全区域 */\n.status-bar {\n  height: 0;\n  background-color: #fff;\n}\n\n/* 返回按钮 */\n.back-btn {\n  position: fixed;\n  /* top 通过内联样式动态设置 */\n  left: 30rpx;\n  width: 80rpx;\n  height: 80rpx;\n  background-color: rgba(255, 255, 255, 0.8);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 999;\n  box-shadow: 0 2rpx 10rpx rgba(0, 0, 0, 0.1);\n}\n.back-btn uni-text {\n  font-size: 48rpx;\n  color: #3a7bd5;\n  font-weight: bold;\n}\n\n/* 顶部图标和标题 */\n.login-header {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 80rpx 0 60rpx;\n}\n.logo {\n  width: 160rpx;\n  height: 160rpx;\n  margin-bottom: 30rpx;\n}\n.app-name {\n  font-size: 48rpx;\n  font-weight: bold;\n  color: #3a7bd5;\n  margin-bottom: 20rpx;\n}\n.slogan {\n  font-size: 28rpx;\n  color: #999;\n}\n\n/* 登录表单 */\n.login-form {\n  padding: 0 60rpx;\n  flex: 1;\n}\n.input-item {\n  display: flex;\n  align-items: center;\n  height: 100rpx;\n  border-bottom: 1rpx solid #f0f0f0;\n  margin-bottom: 30rpx;\n}\n.input-item uni-text {\n  color: #999;\n  font-size: 40rpx;\n  margin-right: 20rpx;\n}\n.input-item uni-input {\n  flex: 1;\n  height: 100rpx;\n  font-size: 28rpx;\n}\n.toggle-password {\n  font-size: 40rpx;\n}\n.option-row {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 40rpx;\n}\n.remember-pwd {\n  display: flex;\n  align-items: center;\n}\n.checkbox {\n  width: 32rpx;\n  height: 32rpx;\n  border: 1rpx solid #ddd;\n  border-radius: 6rpx;\n  margin-right: 10rpx;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.checkbox.checked {\n  background-color: #3a7bd5;\n  border-color: #3a7bd5;\n}\n.checkbox.checked:after {\n  content: '';\n  width: 16rpx;\n  height: 8rpx;\n  border-left: 4rpx solid #fff;\n  border-bottom: 4rpx solid #fff;\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n}\n.remember-pwd uni-text, .forget-pwd {\n  font-size: 24rpx;\n  color: #999;\n}\n.forget-pwd {\n  color: #3a7bd5;\n}\n.login-btn {\n  height: 90rpx;\n  line-height: 90rpx;\n  text-align: center;\n  background: linear-gradient(to right, #3a7bd5, #00d2ff);\n  color: #fff;\n  font-size: 32rpx;\n  border-radius: 45rpx;\n  margin-bottom: 40rpx;\n}\n\n/* 微信一键登录 */\n.wechat-login {\n  margin-bottom: 40rpx;\n}\n.wechat-login-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 90rpx;\n  background-color: #07c160;\n  color: #fff;\n  font-size: 32rpx;\n  border-radius: 45rpx;\n  box-shadow: 0 4rpx 10rpx rgba(7, 193, 96, 0.3);\n}\n.wechat-icon {\n  font-size: 40rpx;\n  margin-right: 10rpx;\n}\n.login-tip {\n  text-align: center;\n  font-size: 24rpx;\n  color: #999;\n  margin-top: 10rpx;\n}\n.other-login {\n  margin: 40rpx 0;\n}\n.divider {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 40rpx;\n}\n.line {\n  flex: 1;\n  height: 1rpx;\n  background-color: #f0f0f0;\n}\n.divider uni-text {\n  font-size: 24rpx;\n  color: #999;\n  margin: 0 20rpx;\n}\n.other-login-icons {\n  display: flex;\n  justify-content: center;\n}\n.icon-item {\n  width: 80rpx;\n  height: 80rpx;\n  border-radius: 50%;\n  background-color: #f5f7fa;\n  margin: 0 30rpx;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.icon-item uni-text {\n  font-size: 40rpx;\n}\n.icon-item:first-child uni-text {\n  color: #07c160;\n}\n.icon-item:last-child uni-text {\n  color: #1677ff;\n}\n.register-link {\n  text-align: center;\n  font-size: 28rpx;\n  color: #999;\n}\n.register-link .link {\n  color: #3a7bd5;\n}\n\n/* 底部协议 */\n.agreement {\n  display: flex;\n  align-items: flex-start;\n  padding: 30rpx 60rpx 50rpx;\n}\n.agreement-checkbox {\n  margin-top: 6rpx;\n}\n.agreement-text {\n  flex: 1;\n  font-size: 24rpx;\n  color: #999;\n  margin-left: 10rpx;\n  line-height: 1.5;\n}\n.agreement-text .link {\n  color: #3a7bd5;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 126 */
/*!*********************************************************!*\
  !*** D:/ai-doctor/pagesB/mine/register.vue?mpType=page ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _register_vue_vue_type_template_id_a9d54b28_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.vue?vue&type=template&id=a9d54b28&mpType=page */ 127);
/* harmony import */ var _register_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.vue?vue&type=script&lang=js&mpType=page */ 129);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _register_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _register_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _register_vue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register.vue?vue&type=style&index=0&lang=css&mpType=page */ 131);
/* harmony import */ var _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 13);

var renderjs





/* normalize component */

var component = Object(_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _register_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _register_vue_vue_type_template_id_a9d54b28_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _register_vue_vue_type_template_id_a9d54b28_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _register_vue_vue_type_template_id_a9d54b28_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pagesB/mine/register.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 127 */
/*!***************************************************************************************!*\
  !*** D:/ai-doctor/pagesB/mine/register.vue?vue&type=template&id=a9d54b28&mpType=page ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_register_vue_vue_type_template_id_a9d54b28_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./register.vue?vue&type=template&id=a9d54b28&mpType=page */ 128);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_register_vue_vue_type_template_id_a9d54b28_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_register_vue_vue_type_template_id_a9d54b28_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_register_vue_vue_type_template_id_a9d54b28_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_register_vue_vue_type_template_id_a9d54b28_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 128 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!D:/ai-doctor/pagesB/mine/register.vue?vue&type=template&id=a9d54b28&mpType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "uni-view",
    { staticClass: _vm._$g(0, "sc"), attrs: { _i: 0 } },
    [
      _c("uni-view", {
        staticClass: _vm._$g(1, "sc"),
        style: _vm._$g(1, "s"),
        attrs: { _i: 1 },
      }),
      _c(
        "uni-view",
        {
          staticClass: _vm._$g(2, "sc"),
          style: _vm._$g(2, "s"),
          attrs: { _i: 2 },
          on: {
            click: function ($event) {
              return _vm.$handleViewEvent($event)
            },
          },
        },
        [
          _c(
            "v-uni-text",
            { staticClass: _vm._$g(3, "sc"), attrs: { _i: 3 } },
            [_vm._v("←")]
          ),
        ],
        1
      ),
      _c(
        "uni-view",
        { staticClass: _vm._$g(4, "sc"), attrs: { _i: 4 } },
        [
          _c("v-uni-image", {
            staticClass: _vm._$g(5, "sc"),
            attrs: { src: "/static/logo.png", mode: "aspectFit", _i: 5 },
          }),
          _c(
            "v-uni-text",
            { staticClass: _vm._$g(6, "sc"), attrs: { _i: 6 } },
            [_vm._v("创建账号")]
          ),
          _c(
            "v-uni-text",
            { staticClass: _vm._$g(7, "sc"), attrs: { _i: 7 } },
            [_vm._v("加入医疗助手，守护您的健康")]
          ),
        ],
        1
      ),
      _c(
        "uni-view",
        { staticClass: _vm._$g(8, "sc"), attrs: { _i: 8 } },
        [
          _c(
            "uni-view",
            { staticClass: _vm._$g(9, "sc"), attrs: { _i: 9 } },
            [
              _c("v-uni-text", {
                staticClass: _vm._$g(10, "sc"),
                attrs: { _i: 10 },
              }),
              _c("v-uni-input", {
                attrs: {
                  type: "text",
                  placeholder: "请输入用户名",
                  maxlength: "20",
                  _i: 11,
                },
                model: {
                  value: _vm._$g(11, "v-model"),
                  callback: function ($$v) {
                    _vm.$handleVModelEvent(11, $$v)
                  },
                  expression: "registerForm.username",
                },
              }),
            ],
            1
          ),
          _c(
            "uni-view",
            { staticClass: _vm._$g(12, "sc"), attrs: { _i: 12 } },
            [
              _c("v-uni-text", {
                staticClass: _vm._$g(13, "sc"),
                attrs: { _i: 13 },
              }),
              _c("v-uni-input", {
                attrs: {
                  type: "number",
                  placeholder: "请输入手机号",
                  maxlength: "11",
                  _i: 14,
                },
                model: {
                  value: _vm._$g(14, "v-model"),
                  callback: function ($$v) {
                    _vm.$handleVModelEvent(14, $$v)
                  },
                  expression: "registerForm.phone",
                },
              }),
            ],
            1
          ),
          _c(
            "uni-view",
            { staticClass: _vm._$g(15, "sc"), attrs: { _i: 15 } },
            [
              _c("v-uni-text", {
                staticClass: _vm._$g(16, "sc"),
                attrs: { _i: 16 },
              }),
              _c("v-uni-input", {
                attrs: {
                  type: _vm._$g(17, "a-type"),
                  placeholder: "请输入密码",
                  maxlength: "20",
                  _i: 17,
                },
                model: {
                  value: _vm._$g(17, "v-model"),
                  callback: function ($$v) {
                    _vm.$handleVModelEvent(17, $$v)
                  },
                  expression: "registerForm.password",
                },
              }),
              _c("v-uni-text", {
                staticClass: _vm._$g(18, "sc"),
                class: _vm._$g(18, "c"),
                attrs: { _i: 18 },
                on: {
                  click: function ($event) {
                    return _vm.$handleViewEvent($event)
                  },
                },
              }),
            ],
            1
          ),
          _c(
            "uni-view",
            { staticClass: _vm._$g(19, "sc"), attrs: { _i: 19 } },
            [
              _c("v-uni-text", {
                staticClass: _vm._$g(20, "sc"),
                attrs: { _i: 20 },
              }),
              _c("v-uni-input", {
                attrs: {
                  type: _vm._$g(21, "a-type"),
                  placeholder: "请确认密码",
                  maxlength: "20",
                  _i: 21,
                },
                model: {
                  value: _vm._$g(21, "v-model"),
                  callback: function ($$v) {
                    _vm.$handleVModelEvent(21, $$v)
                  },
                  expression: "registerForm.confirmPassword",
                },
              }),
              _c("v-uni-text", {
                staticClass: _vm._$g(22, "sc"),
                class: _vm._$g(22, "c"),
                attrs: { _i: 22 },
                on: {
                  click: function ($event) {
                    return _vm.$handleViewEvent($event)
                  },
                },
              }),
            ],
            1
          ),
          _c(
            "uni-view",
            { staticClass: _vm._$g(23, "sc"), attrs: { _i: 23 } },
            [
              _c("v-uni-text", {
                staticClass: _vm._$g(24, "sc"),
                attrs: { _i: 24 },
              }),
              _c("v-uni-input", {
                attrs: {
                  type: "number",
                  placeholder: "请输入验证码",
                  maxlength: "6",
                  _i: 25,
                },
                model: {
                  value: _vm._$g(25, "v-model"),
                  callback: function ($$v) {
                    _vm.$handleVModelEvent(25, $$v)
                  },
                  expression: "registerForm.code",
                },
              }),
              _c(
                "uni-view",
                {
                  staticClass: _vm._$g(26, "sc"),
                  class: _vm._$g(26, "c"),
                  attrs: { _i: 26 },
                  on: {
                    click: function ($event) {
                      return _vm.$handleViewEvent($event)
                    },
                  },
                },
                [_vm._v(_vm._$g(26, "t0-0"))]
              ),
            ],
            1
          ),
          _c(
            "uni-view",
            {
              staticClass: _vm._$g(27, "sc"),
              attrs: { _i: 27 },
              on: {
                click: function ($event) {
                  return _vm.$handleViewEvent($event)
                },
              },
            },
            [_vm._v("注册")]
          ),
          _c(
            "uni-view",
            { staticClass: _vm._$g(28, "sc"), attrs: { _i: 28 } },
            [
              _c("v-uni-text", { attrs: { _i: 29 } }, [_vm._v("已有账号？")]),
              _c(
                "v-uni-text",
                {
                  staticClass: _vm._$g(30, "sc"),
                  attrs: { _i: 30 },
                  on: {
                    click: function ($event) {
                      return _vm.$handleViewEvent($event)
                    },
                  },
                },
                [_vm._v("返回登录")]
              ),
            ],
            1
          ),
        ],
        1
      ),
      _c(
        "uni-view",
        { staticClass: _vm._$g(31, "sc"), attrs: { _i: 31 } },
        [
          _c(
            "uni-view",
            {
              staticClass: _vm._$g(32, "sc"),
              attrs: { _i: 32 },
              on: {
                click: function ($event) {
                  return _vm.$handleViewEvent($event)
                },
              },
            },
            [
              _c("uni-view", {
                staticClass: _vm._$g(33, "sc"),
                class: _vm._$g(33, "c"),
                attrs: { _i: 33 },
              }),
            ],
            1
          ),
          _c(
            "v-uni-text",
            { staticClass: _vm._$g(34, "sc"), attrs: { _i: 34 } },
            [
              _vm._v("注册即代表您已阅读并同意"),
              _c(
                "v-uni-text",
                {
                  staticClass: _vm._$g(35, "sc"),
                  attrs: { _i: 35 },
                  on: {
                    click: function ($event) {
                      return _vm.$handleViewEvent($event)
                    },
                  },
                },
                [_vm._v("《用户协议》")]
              ),
              _vm._v("和"),
              _c(
                "v-uni-text",
                {
                  staticClass: _vm._$g(36, "sc"),
                  attrs: { _i: 36 },
                  on: {
                    click: function ($event) {
                      return _vm.$handleViewEvent($event)
                    },
                  },
                },
                [_vm._v("《隐私政策》")]
              ),
            ],
            1
          ),
        ],
        1
      ),
      _vm._$g(37, "i")
        ? _c(
            "uni-view",
            {
              staticClass: _vm._$g(37, "sc"),
              attrs: { _i: 37 },
              on: {
                click: function ($event) {
                  return _vm.$handleViewEvent($event)
                },
              },
            },
            [
              _c(
                "uni-view",
                {
                  staticClass: _vm._$g(38, "sc"),
                  attrs: { _i: 38 },
                  on: {
                    click: function ($event) {
                      return _vm.$handleViewEvent($event, { stop: true })
                    },
                  },
                },
                [
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(39, "sc"), attrs: { _i: 39 } },
                    [
                      _c(
                        "v-uni-text",
                        { staticClass: _vm._$g(40, "sc"), attrs: { _i: 40 } },
                        [_vm._v("验证码已生成")]
                      ),
                      _c(
                        "v-uni-text",
                        {
                          staticClass: _vm._$g(41, "sc"),
                          attrs: { _i: 41 },
                          on: {
                            click: function ($event) {
                              return _vm.$handleViewEvent($event)
                            },
                          },
                        },
                        [_vm._v("×")]
                      ),
                    ],
                    1
                  ),
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(42, "sc"), attrs: { _i: 42 } },
                    [
                      _c(
                        "uni-view",
                        { staticClass: _vm._$g(43, "sc"), attrs: { _i: 43 } },
                        [
                          _c(
                            "v-uni-text",
                            {
                              staticClass: _vm._$g(44, "sc"),
                              attrs: { _i: 44 },
                            },
                            [_vm._v(_vm._$g(44, "t0-0"))]
                          ),
                        ],
                        1
                      ),
                      _c(
                        "uni-view",
                        { staticClass: _vm._$g(45, "sc"), attrs: { _i: 45 } },
                        [
                          _c(
                            "v-uni-text",
                            {
                              staticClass: _vm._$g(46, "sc"),
                              attrs: { _i: 46 },
                            },
                            [_vm._v("手机号：" + _vm._$g(46, "t0-0"))]
                          ),
                          _c(
                            "v-uni-text",
                            {
                              staticClass: _vm._$g(47, "sc"),
                              attrs: { _i: 47 },
                            },
                            [_vm._v("请输入上方验证码完成注册")]
                          ),
                        ],
                        1
                      ),
                      _c(
                        "uni-view",
                        { staticClass: _vm._$g(48, "sc"), attrs: { _i: 48 } },
                        [
                          _c(
                            "uni-view",
                            {
                              staticClass: _vm._$g(49, "sc"),
                              attrs: { _i: 49 },
                              on: {
                                click: function ($event) {
                                  return _vm.$handleViewEvent($event)
                                },
                              },
                            },
                            [
                              _c(
                                "v-uni-text",
                                {
                                  staticClass: _vm._$g(50, "sc"),
                                  attrs: { _i: 50 },
                                },
                                [_vm._v("📋")]
                              ),
                              _c("v-uni-text", { attrs: { _i: 51 } }, [
                                _vm._v("复制验证码"),
                              ]),
                            ],
                            1
                          ),
                          _c(
                            "uni-view",
                            {
                              staticClass: _vm._$g(52, "sc"),
                              attrs: { _i: 52 },
                              on: {
                                click: function ($event) {
                                  return _vm.$handleViewEvent($event)
                                },
                              },
                            },
                            [
                              _c(
                                "v-uni-text",
                                {
                                  staticClass: _vm._$g(53, "sc"),
                                  attrs: { _i: 53 },
                                },
                                [_vm._v("✓")]
                              ),
                              _c("v-uni-text", { attrs: { _i: 54 } }, [
                                _vm._v("已收到"),
                              ]),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          )
        : _vm._e(),
    ],
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 129 */
/*!*********************************************************************************!*\
  !*** D:/ai-doctor/pagesB/mine/register.vue?vue&type=script&lang=js&mpType=page ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_register_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./register.vue?vue&type=script&lang=js&mpType=page */ 130);
/* harmony import */ var _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_register_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_register_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_register_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_register_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_register_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 130 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!D:/ai-doctor/pagesB/mine/register.vue?vue&type=script&lang=js&mpType=page ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  data: function data() {
    return {
      wxsProps: {}
    };
  },
  components: {}
};
exports.default = _default;

/***/ }),
/* 131 */
/*!*****************************************************************************************!*\
  !*** D:/ai-doctor/pagesB/mine/register.vue?vue&type=style&index=0&lang=css&mpType=page ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_register_vue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./register.vue?vue&type=style&index=0&lang=css&mpType=page */ 132);
/* harmony import */ var _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_register_vue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_register_vue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_register_vue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_register_vue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_register_vue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 132 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!D:/ai-doctor/pagesB/mine/register.vue?vue&type=style&index=0&lang=css&mpType=page ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./register.vue?vue&type=style&index=0&lang=css&mpType=page */ 133);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader/lib/addStylesClient.js */ 11).default
var update = add("63c6aa1c", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 133 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!D:/ai-doctor/pagesB/mine/register.vue?vue&type=style&index=0&lang=css&mpType=page ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ 10);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.container {\r\n  min-height: 100vh;\r\n  background-color: #fff;\r\n  display: flex;\r\n  flex-direction: column;\n}\r\n\r\n/* 顶部安全区域 */\n.status-bar {\r\n  height: 0;\r\n  background-color: #fff;\n}\r\n\r\n/* 返回按钮 */\n.back-btn {\r\n  position: fixed;\r\n  /* top 通过内联样式动态设置 */\r\n  left: 30rpx;\r\n  width: 80rpx;\r\n  height: 80rpx;\r\n  background-color: rgba(255, 255, 255, 0.8);\r\n  border-radius: 50%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  z-index: 999;\r\n  box-shadow: 0 2rpx 10rpx rgba(0, 0, 0, 0.1);\n}\n.back-btn uni-text {\r\n  font-size: 48rpx;\r\n  color: #3a7bd5;\r\n  font-weight: bold;\n}\r\n\r\n/* 顶部图标和标题 */\n.register-header {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding: 80rpx 0 60rpx;\n}\n.logo {\r\n  width: 160rpx;\r\n  height: 160rpx;\r\n  margin-bottom: 30rpx;\n}\n.app-name {\r\n  font-size: 48rpx;\r\n  font-weight: bold;\r\n  color: #3a7bd5;\r\n  margin-bottom: 20rpx;\n}\n.slogan {\r\n  font-size: 28rpx;\r\n  color: #999;\n}\r\n\r\n/* 注册表单 */\n.register-form {\r\n  padding: 0 60rpx;\r\n  flex: 1;\n}\n.input-item {\r\n  display: flex;\r\n  align-items: center;\r\n  height: 100rpx;\r\n  border-bottom: 1rpx solid #f0f0f0;\r\n  margin-bottom: 30rpx;\n}\n.input-item uni-text {\r\n  color: #999;\r\n  font-size: 40rpx;\r\n  margin-right: 20rpx;\n}\n.input-item uni-input {\r\n  flex: 1;\r\n  height: 100rpx;\r\n  font-size: 28rpx;\n}\n.toggle-password {\r\n  font-size: 40rpx;\n}\n.code-btn {\r\n  width: 200rpx;\r\n  height: 60rpx;\r\n  line-height: 60rpx;\r\n  text-align: center;\r\n  border-radius: 30rpx;\r\n  background-color: #3a7bd5;\r\n  color: #fff;\r\n  font-size: 24rpx;\n}\n.code-btn.disabled {\r\n  background-color: #ccc;\n}\n.register-btn {\r\n  height: 90rpx;\r\n  line-height: 90rpx;\r\n  text-align: center;\r\n  background: linear-gradient(to right, #3a7bd5, #00d2ff);\r\n  color: #fff;\r\n  font-size: 32rpx;\r\n  border-radius: 45rpx;\r\n  margin-bottom: 40rpx;\n}\n.login-link {\r\n  text-align: center;\r\n  font-size: 28rpx;\r\n  color: #999;\r\n  margin-bottom: 40rpx;\n}\n.login-link .link {\r\n  color: #3a7bd5;\n}\r\n\r\n/* 底部协议 */\n.agreement {\r\n  display: flex;\r\n  align-items: flex-start;\r\n  padding: 30rpx 60rpx 50rpx;\n}\n.agreement-checkbox {\r\n  margin-top: 6rpx;\n}\n.agreement-text {\r\n  flex: 1;\r\n  font-size: 24rpx;\r\n  color: #999;\r\n  margin-left: 10rpx;\r\n  line-height: 1.5;\n}\n.agreement-text .link {\r\n  color: #3a7bd5;\n}\n.checkbox {\r\n  width: 32rpx;\r\n  height: 32rpx;\r\n  border: 1rpx solid #ddd;\r\n  border-radius: 6rpx;\r\n  margin-right: 10rpx;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\n}\n.checkbox.checked {\r\n  background-color: #3a7bd5;\r\n  border-color: #3a7bd5;\n}\n.checkbox.checked:after {\r\n  content: '';\r\n  width: 16rpx;\r\n  height: 8rpx;\r\n  border-left: 4rpx solid #fff;\r\n  border-bottom: 4rpx solid #fff;\r\n  -webkit-transform: rotate(-45deg);\r\n          transform: rotate(-45deg);\n}\r\n\r\n/* 验证码弹窗 */\n.code-modal {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n  display: flex;\r\n  align-items: flex-start;\r\n  justify-content: center;\r\n  z-index: 1000;\r\n  padding-top: 100rpx;\n}\n.code-modal-content {\r\n  width: 600rpx;\r\n  background-color: #fff;\r\n  border-radius: 20rpx;\r\n  overflow: hidden;\r\n  -webkit-animation: slideDown 0.3s ease-out;\r\n          animation: slideDown 0.3s ease-out;\n}\n@-webkit-keyframes slideDown {\nfrom {\r\n    -webkit-transform: translateY(-100%);\r\n            transform: translateY(-100%);\r\n    opacity: 0;\n}\nto {\r\n    -webkit-transform: translateY(0);\r\n            transform: translateY(0);\r\n    opacity: 1;\n}\n}\n@keyframes slideDown {\nfrom {\r\n    -webkit-transform: translateY(-100%);\r\n            transform: translateY(-100%);\r\n    opacity: 0;\n}\nto {\r\n    -webkit-transform: translateY(0);\r\n            transform: translateY(0);\r\n    opacity: 1;\n}\n}\n.code-modal-header {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: 30rpx;\r\n  background: linear-gradient(to right, #3a7bd5, #00d2ff);\r\n  color: #fff;\n}\n.code-modal-title {\r\n  font-size: 32rpx;\r\n  font-weight: bold;\n}\n.code-modal-close {\r\n  font-size: 48rpx;\r\n  color: #fff;\r\n  width: 60rpx;\r\n  height: 60rpx;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\n}\n.code-modal-body {\r\n  padding: 40rpx;\n}\n.code-display {\r\n  text-align: center;\r\n  margin-bottom: 30rpx;\n}\n.code-number {\r\n  font-size: 48rpx;\r\n  font-weight: bold;\r\n  color: #3a7bd5;\r\n  letter-spacing: 8rpx;\r\n  background-color: #f5f7fa;\r\n  padding: 20rpx 40rpx;\r\n  border-radius: 10rpx;\r\n  display: inline-block;\n}\n.code-info {\r\n  text-align: center;\r\n  margin-bottom: 40rpx;\n}\n.code-phone {\r\n  font-size: 28rpx;\r\n  color: #666;\r\n  margin-bottom: 10rpx;\r\n  display: block;\n}\n.code-tip {\r\n  font-size: 24rpx;\r\n  color: #999;\r\n  display: block;\n}\n.code-actions {\r\n  display: flex;\r\n  gap: 20rpx;\n}\n.code-btn {\r\n  flex: 1;\r\n  height: 80rpx;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  border-radius: 40rpx;\r\n  font-size: 28rpx;\r\n  gap: 10rpx;\n}\n.copy-btn {\r\n  background-color: #f5f7fa;\r\n  color: #666;\r\n  border: 1rpx solid #e0e0e0;\n}\n.confirm-btn {\r\n  background: linear-gradient(to right, #3a7bd5, #00d2ff);\r\n  color: #fff;\n}\n.code-btn uni-text.iconfont {\r\n  font-size: 32rpx;\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 134 */
/*!*********************************************************!*\
  !*** D:/ai-doctor/pagesB/mine/settings.vue?mpType=page ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _settings_vue_vue_type_template_id_01f0e7ec_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.vue?vue&type=template&id=01f0e7ec&mpType=page */ 135);
/* harmony import */ var _settings_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.vue?vue&type=script&lang=js&mpType=page */ 137);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _settings_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _settings_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _settings_vue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings.vue?vue&type=style&index=0&lang=css&mpType=page */ 139);
/* harmony import */ var _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 13);

var renderjs





/* normalize component */

var component = Object(_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _settings_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _settings_vue_vue_type_template_id_01f0e7ec_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _settings_vue_vue_type_template_id_01f0e7ec_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _settings_vue_vue_type_template_id_01f0e7ec_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pagesB/mine/settings.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 135 */
/*!***************************************************************************************!*\
  !*** D:/ai-doctor/pagesB/mine/settings.vue?vue&type=template&id=01f0e7ec&mpType=page ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_settings_vue_vue_type_template_id_01f0e7ec_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./settings.vue?vue&type=template&id=01f0e7ec&mpType=page */ 136);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_settings_vue_vue_type_template_id_01f0e7ec_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_settings_vue_vue_type_template_id_01f0e7ec_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_settings_vue_vue_type_template_id_01f0e7ec_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_settings_vue_vue_type_template_id_01f0e7ec_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 136 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!D:/ai-doctor/pagesB/mine/settings.vue?vue&type=template&id=01f0e7ec&mpType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "uni-view",
    { staticClass: _vm._$g(0, "sc"), attrs: { _i: 0 } },
    [
      _c(
        "uni-view",
        { staticClass: _vm._$g(1, "sc"), attrs: { _i: 1 } },
        [
          _c("uni-view", {
            staticClass: _vm._$g(2, "sc"),
            style: _vm._$g(2, "s"),
            attrs: { _i: 2 },
          }),
          _c(
            "uni-view",
            { staticClass: _vm._$g(3, "sc"), attrs: { _i: 3 } },
            [
              _c(
                "uni-view",
                {
                  staticClass: _vm._$g(4, "sc"),
                  attrs: { _i: 4 },
                  on: {
                    click: function ($event) {
                      return _vm.$handleViewEvent($event)
                    },
                  },
                },
                [
                  _c(
                    "v-uni-text",
                    { staticClass: _vm._$g(5, "sc"), attrs: { _i: 5 } },
                    [_vm._v("‹")]
                  ),
                ],
                1
              ),
              _c(
                "v-uni-text",
                { staticClass: _vm._$g(6, "sc"), attrs: { _i: 6 } },
                [_vm._v("系统设置")]
              ),
              _c("uni-view", {
                staticClass: _vm._$g(7, "sc"),
                attrs: { _i: 7 },
              }),
            ],
            1
          ),
        ],
        1
      ),
      _c(
        "uni-view",
        { staticClass: _vm._$g(8, "sc"), attrs: { _i: 8 } },
        [
          _c(
            "uni-view",
            { staticClass: _vm._$g(9, "sc"), attrs: { _i: 9 } },
            [
              _c(
                "uni-view",
                { staticClass: _vm._$g(10, "sc"), attrs: { _i: 10 } },
                [_vm._v("账号设置")]
              ),
              _c(
                "uni-view",
                {
                  staticClass: _vm._$g(11, "sc"),
                  attrs: { _i: 11 },
                  on: {
                    click: function ($event) {
                      return _vm.$handleViewEvent($event)
                    },
                  },
                },
                [
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(12, "sc"), attrs: { _i: 12 } },
                    [
                      _c(
                        "v-uni-text",
                        { staticClass: _vm._$g(13, "sc"), attrs: { _i: 13 } },
                        [_vm._v("👤")]
                      ),
                    ],
                    1
                  ),
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(14, "sc"), attrs: { _i: 14 } },
                    [
                      _c(
                        "v-uni-text",
                        { staticClass: _vm._$g(15, "sc"), attrs: { _i: 15 } },
                        [_vm._v("个人资料")]
                      ),
                      _c(
                        "v-uni-text",
                        { staticClass: _vm._$g(16, "sc"), attrs: { _i: 16 } },
                        [_vm._v("修改个人信息、头像等")]
                      ),
                    ],
                    1
                  ),
                  _c(
                    "v-uni-text",
                    { staticClass: _vm._$g(17, "sc"), attrs: { _i: 17 } },
                    [_vm._v("›")]
                  ),
                ],
                1
              ),
              _c(
                "uni-view",
                {
                  staticClass: _vm._$g(18, "sc"),
                  attrs: { _i: 18 },
                  on: {
                    click: function ($event) {
                      return _vm.$handleViewEvent($event)
                    },
                  },
                },
                [
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(19, "sc"), attrs: { _i: 19 } },
                    [
                      _c(
                        "v-uni-text",
                        { staticClass: _vm._$g(20, "sc"), attrs: { _i: 20 } },
                        [_vm._v("🔐")]
                      ),
                    ],
                    1
                  ),
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(21, "sc"), attrs: { _i: 21 } },
                    [
                      _c(
                        "v-uni-text",
                        { staticClass: _vm._$g(22, "sc"), attrs: { _i: 22 } },
                        [_vm._v("账号安全")]
                      ),
                      _c(
                        "v-uni-text",
                        { staticClass: _vm._$g(23, "sc"), attrs: { _i: 23 } },
                        [_vm._v("修改密码、绑定手机等")]
                      ),
                    ],
                    1
                  ),
                  _c(
                    "v-uni-text",
                    { staticClass: _vm._$g(24, "sc"), attrs: { _i: 24 } },
                    [_vm._v("›")]
                  ),
                ],
                1
              ),
              _c(
                "uni-view",
                {
                  staticClass: _vm._$g(25, "sc"),
                  attrs: { _i: 25 },
                  on: {
                    click: function ($event) {
                      return _vm.$handleViewEvent($event)
                    },
                  },
                },
                [
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(26, "sc"), attrs: { _i: 26 } },
                    [
                      _c(
                        "v-uni-text",
                        { staticClass: _vm._$g(27, "sc"), attrs: { _i: 27 } },
                        [_vm._v("🔒")]
                      ),
                    ],
                    1
                  ),
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(28, "sc"), attrs: { _i: 28 } },
                    [
                      _c(
                        "v-uni-text",
                        { staticClass: _vm._$g(29, "sc"), attrs: { _i: 29 } },
                        [_vm._v("隐私设置")]
                      ),
                      _c(
                        "v-uni-text",
                        { staticClass: _vm._$g(30, "sc"), attrs: { _i: 30 } },
                        [_vm._v("管理隐私权限和数据")]
                      ),
                    ],
                    1
                  ),
                  _c(
                    "v-uni-text",
                    { staticClass: _vm._$g(31, "sc"), attrs: { _i: 31 } },
                    [_vm._v("›")]
                  ),
                ],
                1
              ),
            ],
            1
          ),
          _c(
            "uni-view",
            { staticClass: _vm._$g(32, "sc"), attrs: { _i: 32 } },
            [
              _c(
                "uni-view",
                { staticClass: _vm._$g(33, "sc"), attrs: { _i: 33 } },
                [_vm._v("通用设置")]
              ),
              _c(
                "uni-view",
                { staticClass: _vm._$g(34, "sc"), attrs: { _i: 34 } },
                [
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(35, "sc"), attrs: { _i: 35 } },
                    [
                      _c(
                        "v-uni-text",
                        { staticClass: _vm._$g(36, "sc"), attrs: { _i: 36 } },
                        [_vm._v("🔔")]
                      ),
                    ],
                    1
                  ),
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(37, "sc"), attrs: { _i: 37 } },
                    [
                      _c(
                        "v-uni-text",
                        { staticClass: _vm._$g(38, "sc"), attrs: { _i: 38 } },
                        [_vm._v("消息通知")]
                      ),
                      _c(
                        "v-uni-text",
                        { staticClass: _vm._$g(39, "sc"), attrs: { _i: 39 } },
                        [_vm._v("接收系统消息和健康提醒")]
                      ),
                    ],
                    1
                  ),
                  _c("v-uni-switch", {
                    attrs: {
                      checked: _vm._$g(40, "a-checked"),
                      color: "#3a7bd5",
                      _i: 40,
                    },
                    on: {
                      change: function ($event) {
                        return _vm.$handleViewEvent($event)
                      },
                    },
                  }),
                ],
                1
              ),
              _c(
                "uni-view",
                { staticClass: _vm._$g(41, "sc"), attrs: { _i: 41 } },
                [
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(42, "sc"), attrs: { _i: 42 } },
                    [
                      _c(
                        "v-uni-text",
                        { staticClass: _vm._$g(43, "sc"), attrs: { _i: 43 } },
                        [_vm._v("🌙")]
                      ),
                    ],
                    1
                  ),
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(44, "sc"), attrs: { _i: 44 } },
                    [
                      _c(
                        "v-uni-text",
                        { staticClass: _vm._$g(45, "sc"), attrs: { _i: 45 } },
                        [_vm._v("深色模式")]
                      ),
                      _c(
                        "v-uni-text",
                        { staticClass: _vm._$g(46, "sc"), attrs: { _i: 46 } },
                        [_vm._v("夜间使用更护眼")]
                      ),
                    ],
                    1
                  ),
                  _c("v-uni-switch", {
                    attrs: {
                      checked: _vm._$g(47, "a-checked"),
                      color: "#3a7bd5",
                      _i: 47,
                    },
                    on: {
                      change: function ($event) {
                        return _vm.$handleViewEvent($event)
                      },
                    },
                  }),
                ],
                1
              ),
              _c(
                "uni-view",
                {
                  staticClass: _vm._$g(48, "sc"),
                  attrs: { _i: 48 },
                  on: {
                    click: function ($event) {
                      return _vm.$handleViewEvent($event)
                    },
                  },
                },
                [
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(49, "sc"), attrs: { _i: 49 } },
                    [
                      _c(
                        "v-uni-text",
                        { staticClass: _vm._$g(50, "sc"), attrs: { _i: 50 } },
                        [_vm._v("🌐")]
                      ),
                    ],
                    1
                  ),
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(51, "sc"), attrs: { _i: 51 } },
                    [
                      _c(
                        "v-uni-text",
                        { staticClass: _vm._$g(52, "sc"), attrs: { _i: 52 } },
                        [_vm._v("语言设置")]
                      ),
                      _c(
                        "v-uni-text",
                        { staticClass: _vm._$g(53, "sc"), attrs: { _i: 53 } },
                        [_vm._v("当前：简体中文")]
                      ),
                    ],
                    1
                  ),
                  _c(
                    "v-uni-text",
                    { staticClass: _vm._$g(54, "sc"), attrs: { _i: 54 } },
                    [_vm._v("›")]
                  ),
                ],
                1
              ),
              _c(
                "uni-view",
                {
                  staticClass: _vm._$g(55, "sc"),
                  attrs: { _i: 55 },
                  on: {
                    click: function ($event) {
                      return _vm.$handleViewEvent($event)
                    },
                  },
                },
                [
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(56, "sc"), attrs: { _i: 56 } },
                    [
                      _c(
                        "v-uni-text",
                        { staticClass: _vm._$g(57, "sc"), attrs: { _i: 57 } },
                        [_vm._v("💾")]
                      ),
                    ],
                    1
                  ),
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(58, "sc"), attrs: { _i: 58 } },
                    [
                      _c(
                        "v-uni-text",
                        { staticClass: _vm._$g(59, "sc"), attrs: { _i: 59 } },
                        [_vm._v("存储管理")]
                      ),
                      _c(
                        "v-uni-text",
                        { staticClass: _vm._$g(60, "sc"), attrs: { _i: 60 } },
                        [_vm._v("清理缓存，释放空间")]
                      ),
                    ],
                    1
                  ),
                  _c(
                    "v-uni-text",
                    { staticClass: _vm._$g(61, "sc"), attrs: { _i: 61 } },
                    [_vm._v("›")]
                  ),
                ],
                1
              ),
            ],
            1
          ),
          _c(
            "uni-view",
            { staticClass: _vm._$g(62, "sc"), attrs: { _i: 62 } },
            [
              _c(
                "uni-view",
                { staticClass: _vm._$g(63, "sc"), attrs: { _i: 63 } },
                [_vm._v("AI设置")]
              ),
              _c(
                "uni-view",
                {
                  staticClass: _vm._$g(64, "sc"),
                  attrs: { _i: 64 },
                  on: {
                    click: function ($event) {
                      return _vm.$handleViewEvent($event)
                    },
                  },
                },
                [
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(65, "sc"), attrs: { _i: 65 } },
                    [
                      _c(
                        "v-uni-text",
                        { staticClass: _vm._$g(66, "sc"), attrs: { _i: 66 } },
                        [_vm._v("🤖")]
                      ),
                    ],
                    1
                  ),
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(67, "sc"), attrs: { _i: 67 } },
                    [
                      _c(
                        "v-uni-text",
                        { staticClass: _vm._$g(68, "sc"), attrs: { _i: 68 } },
                        [_vm._v("AI模型选择")]
                      ),
                      _c(
                        "v-uni-text",
                        { staticClass: _vm._$g(69, "sc"), attrs: { _i: 69 } },
                        [_vm._v("选择适合的AI助手")]
                      ),
                    ],
                    1
                  ),
                  _c(
                    "v-uni-text",
                    { staticClass: _vm._$g(70, "sc"), attrs: { _i: 70 } },
                    [_vm._v("›")]
                  ),
                ],
                1
              ),
              _c(
                "uni-view",
                { staticClass: _vm._$g(71, "sc"), attrs: { _i: 71 } },
                [
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(72, "sc"), attrs: { _i: 72 } },
                    [
                      _c(
                        "v-uni-text",
                        { staticClass: _vm._$g(73, "sc"), attrs: { _i: 73 } },
                        [_vm._v("🗣️")]
                      ),
                    ],
                    1
                  ),
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(74, "sc"), attrs: { _i: 74 } },
                    [
                      _c(
                        "v-uni-text",
                        { staticClass: _vm._$g(75, "sc"), attrs: { _i: 75 } },
                        [_vm._v("语音输入")]
                      ),
                      _c(
                        "v-uni-text",
                        { staticClass: _vm._$g(76, "sc"), attrs: { _i: 76 } },
                        [_vm._v("启用语音识别功能")]
                      ),
                    ],
                    1
                  ),
                  _c("v-uni-switch", {
                    attrs: {
                      checked: _vm._$g(77, "a-checked"),
                      color: "#3a7bd5",
                      _i: 77,
                    },
                    on: {
                      change: function ($event) {
                        return _vm.$handleViewEvent($event)
                      },
                    },
                  }),
                ],
                1
              ),
              _c(
                "uni-view",
                { staticClass: _vm._$g(78, "sc"), attrs: { _i: 78 } },
                [
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(79, "sc"), attrs: { _i: 79 } },
                    [
                      _c(
                        "v-uni-text",
                        { staticClass: _vm._$g(80, "sc"), attrs: { _i: 80 } },
                        [_vm._v("📝")]
                      ),
                    ],
                    1
                  ),
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(81, "sc"), attrs: { _i: 81 } },
                    [
                      _c(
                        "v-uni-text",
                        { staticClass: _vm._$g(82, "sc"), attrs: { _i: 82 } },
                        [_vm._v("智能建议")]
                      ),
                      _c(
                        "v-uni-text",
                        { staticClass: _vm._$g(83, "sc"), attrs: { _i: 83 } },
                        [_vm._v("根据历史记录提供个性化建议")]
                      ),
                    ],
                    1
                  ),
                  _c("v-uni-switch", {
                    attrs: {
                      checked: _vm._$g(84, "a-checked"),
                      color: "#3a7bd5",
                      _i: 84,
                    },
                    on: {
                      change: function ($event) {
                        return _vm.$handleViewEvent($event)
                      },
                    },
                  }),
                ],
                1
              ),
            ],
            1
          ),
          _c(
            "uni-view",
            { staticClass: _vm._$g(85, "sc"), attrs: { _i: 85 } },
            [
              _c(
                "uni-view",
                { staticClass: _vm._$g(86, "sc"), attrs: { _i: 86 } },
                [_vm._v("其他")]
              ),
              _c(
                "uni-view",
                {
                  staticClass: _vm._$g(87, "sc"),
                  attrs: { _i: 87 },
                  on: {
                    click: function ($event) {
                      return _vm.$handleViewEvent($event)
                    },
                  },
                },
                [
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(88, "sc"), attrs: { _i: 88 } },
                    [
                      _c(
                        "v-uni-text",
                        { staticClass: _vm._$g(89, "sc"), attrs: { _i: 89 } },
                        [_vm._v("🔄")]
                      ),
                    ],
                    1
                  ),
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(90, "sc"), attrs: { _i: 90 } },
                    [
                      _c(
                        "v-uni-text",
                        { staticClass: _vm._$g(91, "sc"), attrs: { _i: 91 } },
                        [_vm._v("检查更新")]
                      ),
                      _c(
                        "v-uni-text",
                        { staticClass: _vm._$g(92, "sc"), attrs: { _i: 92 } },
                        [_vm._v("当前版本 v1.0.0")]
                      ),
                    ],
                    1
                  ),
                  _c(
                    "v-uni-text",
                    { staticClass: _vm._$g(93, "sc"), attrs: { _i: 93 } },
                    [_vm._v("›")]
                  ),
                ],
                1
              ),
              _c(
                "uni-view",
                {
                  staticClass: _vm._$g(94, "sc"),
                  attrs: { _i: 94 },
                  on: {
                    click: function ($event) {
                      return _vm.$handleViewEvent($event)
                    },
                  },
                },
                [
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(95, "sc"), attrs: { _i: 95 } },
                    [
                      _c(
                        "v-uni-text",
                        { staticClass: _vm._$g(96, "sc"), attrs: { _i: 96 } },
                        [_vm._v("🗑️")]
                      ),
                    ],
                    1
                  ),
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(97, "sc"), attrs: { _i: 97 } },
                    [
                      _c(
                        "v-uni-text",
                        { staticClass: _vm._$g(98, "sc"), attrs: { _i: 98 } },
                        [_vm._v("清除数据")]
                      ),
                      _c(
                        "v-uni-text",
                        { staticClass: _vm._$g(99, "sc"), attrs: { _i: 99 } },
                        [_vm._v("清除所有本地数据")]
                      ),
                    ],
                    1
                  ),
                  _c(
                    "v-uni-text",
                    { staticClass: _vm._$g(100, "sc"), attrs: { _i: 100 } },
                    [_vm._v("›")]
                  ),
                ],
                1
              ),
              _c(
                "uni-view",
                {
                  staticClass: _vm._$g(101, "sc"),
                  attrs: { _i: 101 },
                  on: {
                    click: function ($event) {
                      return _vm.$handleViewEvent($event)
                    },
                  },
                },
                [
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(102, "sc"), attrs: { _i: 102 } },
                    [
                      _c(
                        "v-uni-text",
                        { staticClass: _vm._$g(103, "sc"), attrs: { _i: 103 } },
                        [_vm._v("🔄")]
                      ),
                    ],
                    1
                  ),
                  _c(
                    "uni-view",
                    { staticClass: _vm._$g(104, "sc"), attrs: { _i: 104 } },
                    [
                      _c(
                        "v-uni-text",
                        { staticClass: _vm._$g(105, "sc"), attrs: { _i: 105 } },
                        [_vm._v("恢复默认设置")]
                      ),
                      _c(
                        "v-uni-text",
                        { staticClass: _vm._$g(106, "sc"), attrs: { _i: 106 } },
                        [_vm._v("重置所有设置为默认值")]
                      ),
                    ],
                    1
                  ),
                  _c(
                    "v-uni-text",
                    { staticClass: _vm._$g(107, "sc"), attrs: { _i: 107 } },
                    [_vm._v("›")]
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
      _c(
        "uni-view",
        { staticClass: _vm._$g(108, "sc"), attrs: { _i: 108 } },
        [
          _c(
            "uni-view",
            {
              staticClass: _vm._$g(109, "sc"),
              attrs: { _i: 109 },
              on: {
                click: function ($event) {
                  return _vm.$handleViewEvent($event)
                },
              },
            },
            [
              _c(
                "v-uni-text",
                { staticClass: _vm._$g(110, "sc"), attrs: { _i: 110 } },
                [_vm._v("📤")]
              ),
              _c("v-uni-text", { attrs: { _i: 111 } }, [_vm._v("导出设置")]),
            ],
            1
          ),
          _c(
            "uni-view",
            {
              staticClass: _vm._$g(112, "sc"),
              attrs: { _i: 112 },
              on: {
                click: function ($event) {
                  return _vm.$handleViewEvent($event)
                },
              },
            },
            [
              _c(
                "v-uni-text",
                { staticClass: _vm._$g(113, "sc"), attrs: { _i: 113 } },
                [_vm._v("📥")]
              ),
              _c("v-uni-text", { attrs: { _i: 114 } }, [_vm._v("导入设置")]),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 137 */
/*!*********************************************************************************!*\
  !*** D:/ai-doctor/pagesB/mine/settings.vue?vue&type=script&lang=js&mpType=page ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_settings_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./settings.vue?vue&type=script&lang=js&mpType=page */ 138);
/* harmony import */ var _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_settings_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_settings_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_settings_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_settings_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_settings_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 138 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!D:/ai-doctor/pagesB/mine/settings.vue?vue&type=script&lang=js&mpType=page ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  data: function data() {
    return {
      wxsProps: {}
    };
  },
  components: {}
};
exports.default = _default;

/***/ }),
/* 139 */
/*!*****************************************************************************************!*\
  !*** D:/ai-doctor/pagesB/mine/settings.vue?vue&type=style&index=0&lang=css&mpType=page ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_settings_vue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./settings.vue?vue&type=style&index=0&lang=css&mpType=page */ 140);
/* harmony import */ var _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_settings_vue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_settings_vue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_settings_vue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_settings_vue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_xiaochengxu_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_settings_vue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 140 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!D:/ai-doctor/pagesB/mine/settings.vue?vue&type=style&index=0&lang=css&mpType=page ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./settings.vue?vue&type=style&index=0&lang=css&mpType=page */ 141);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader/lib/addStylesClient.js */ 11).default
var update = add("29efe5f2", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 141 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!D:/ai-doctor/pagesB/mine/settings.vue?vue&type=style&index=0&lang=css&mpType=page ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ 10);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.container {\r\n  background-color: #f5f7fa;\r\n  min-height: 100vh;\n}\r\n\r\n/* 顶部标题 */\n.header {\r\n  background: linear-gradient(to right, #3a7bd5, #00d2ff);\r\n  height: 180rpx;\r\n  display: flex;\r\n  flex-direction: column;\r\n  color: #fff;\r\n  position: relative;\n}\n.status-bar {\r\n  width: 100%;\n}\n.nav-bar {\r\n  flex: 1;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: 0 30rpx;\n}\n.back-btn {\r\n  width: 60rpx;\r\n  height: 60rpx;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\n}\n.back-btn uni-text {\r\n  color: #fff;\r\n  font-size: 36rpx;\r\n  font-weight: bold;\n}\n.header-title {\r\n  font-size: 36rpx;\r\n  font-weight: bold;\n}\n.placeholder {\r\n  width: 60rpx;\n}\r\n\r\n/* 设置列表 */\n.settings-list {\r\n  padding: 30rpx;\n}\n.settings-group {\r\n  background-color: #fff;\r\n  border-radius: 12rpx;\r\n  margin-bottom: 30rpx;\r\n  box-shadow: 0 2rpx 10rpx rgba(0, 0, 0, 0.05);\r\n  overflow: hidden;\n}\n.group-title {\r\n  font-size: 28rpx;\r\n  color: #999;\r\n  padding: 20rpx 30rpx;\r\n  border-bottom: 1rpx solid #f0f0f0;\r\n  font-weight: 500;\n}\n.settings-item {\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 30rpx;\r\n  border-bottom: 1rpx solid #f0f0f0;\n}\n.settings-item:last-child {\r\n  border-bottom: none;\n}\n.item-icon {\r\n  width: 80rpx;\r\n  height: 80rpx;\r\n  border-radius: 50%;\r\n  background-color: rgba(58, 123, 213, 0.1);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  margin-right: 20rpx;\n}\n.item-icon uni-text {\r\n  font-size: 36rpx;\n}\n.item-content {\r\n  flex: 1;\r\n  display: flex;\r\n  flex-direction: column;\n}\n.item-name {\r\n  font-size: 28rpx;\r\n  color: #333;\r\n  font-weight: 500;\r\n  margin-bottom: 6rpx;\n}\n.item-desc {\r\n  font-size: 24rpx;\r\n  color: #999;\n}\n.icon-right {\r\n  color: #ccc;\r\n  font-size: 32rpx;\r\n  margin-left: 20rpx;\n}\r\n\r\n/* 开关样式 */\nuni-switch {\r\n  -webkit-transform: scale(0.8);\r\n          transform: scale(0.8);\n}\r\n\r\n/* 底部操作 */\n.bottom-actions {\r\n  display: flex;\r\n  gap: 20rpx;\r\n  padding: 30rpx;\r\n  margin-bottom: 40rpx;\n}\n.action-btn {\r\n  flex: 1;\r\n  height: 80rpx;\r\n  background-color: #fff;\r\n  border-radius: 40rpx;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 10rpx;\r\n  font-size: 28rpx;\r\n  color: #3a7bd5;\r\n  box-shadow: 0 2rpx 10rpx rgba(0, 0, 0, 0.05);\n}\n.action-btn uni-text {\r\n  font-size: 28rpx;\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ })
/******/ ]);