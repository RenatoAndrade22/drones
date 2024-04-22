"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["components-countdown"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/components/countdown.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/components/countdown.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_sass_scrollspyNav_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/assets/sass/scrollspyNav.scss */ "./resources/js/src/assets/sass/scrollspyNav.scss");
/* harmony import */ var _assets_sass_components_custom_countdown_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/sass/components/custom-countdown.scss */ "./resources/js/src/assets/sass/components/custom-countdown.scss");
/* harmony import */ var _components_plugins_highlight_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/plugins/highlight.vue */ "./resources/js/src/components/plugins/highlight.vue");
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



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  metaInfo: {
    title: 'Countdown'
  },
  components: {
    highlight: _components_plugins_highlight_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      code_arr: [],
      demo1: {
        days: null,
        hours: null,
        minutes: null,
        seconds: null
      },
      demo2: {
        days: null,
        hours: null,
        minutes: null,
        seconds: null
      }
    };
  },
  mounted: function mounted() {
    this.set_timer_demo1();
    this.set_timer_demo2();
  },
  methods: {
    toggleCode: function toggleCode(name) {
      if (this.code_arr.includes(name)) {
        this.code_arr = this.code_arr.filter(function (d) {
          return d != name;
        });
      } else {
        this.code_arr.push(name);
      }
    },
    set_timer_demo1: function set_timer_demo1() {
      var _this = this;

      var date = new Date();
      date.setDate(date.getDate() + 3);
      var countDownDate = date.getTime();
      var timer1 = setInterval(function () {
        var now = new Date().getTime();
        var distance = countDownDate - now;
        _this.demo1.days = Math.floor(distance / (1000 * 60 * 60 * 24));
        _this.demo1.hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        _this.demo1.minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
        _this.demo1.seconds = Math.floor(distance % (1000 * 60) / 1000);

        if (distance < 0) {
          clearInterval(timer1);
        }
      }, 1000);
    },
    set_timer_demo2: function set_timer_demo2() {
      var _this2 = this;

      var date = new Date();
      date.setFullYear(date.getFullYear() + 1);
      var countDownDate = date.getTime();
      var timer2 = setInterval(function () {
        var now = new Date().getTime();
        var distance = countDownDate - now;
        _this2.demo2.days = Math.floor(distance / (1000 * 60 * 60 * 24));
        _this2.demo2.hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        _this2.demo2.minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
        _this2.demo2.seconds = Math.floor(distance % (1000 * 60) / 1000);

        if (distance < 0) {
          clearInterval(timer2);
        }
      }, 1000);
    }
  }
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[0]!./resources/js/src/assets/sass/components/custom-countdown.scss":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[0]!./resources/js/src/assets/sass/components/custom-countdown.scss ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*\n\t===============================\n\t\t\t@Import\tMixins\n\t===============================\n*/\n/*\n    Countdown Simple\n*/\n#cd-simple {\n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap;\n}\n\n#cd-simple .countdown {\n  margin-bottom: 23px;\n}\n\n#cd-simple .clock-count-container {\n  width: 100px;\n  height: 100px;\n  box-shadow: 1px 2px 12px 0 rgba(31, 45, 61, 0.1);\n  border-radius: 6px;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  border: 1px solid #e0e6ed;\n}\n\n#cd-simple .clock-val {\n  font-size: 35px;\n  color: #4361ee;\n  margin-bottom: 0;\n}\n\n#cd-simple .clock-text {\n  color: #3b3f5c;\n  font-size: 15px;\n  margin-bottom: 0;\n  margin-top: 16px;\n}\n\n/*\n    Countdown Circle\n*/\n#cd-circle {\n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap;\n}\n\n#cd-circle .countdown {\n  margin-bottom: 23px;\n}\n\n#cd-circle .clock-count-container {\n  width: 85px;\n  height: 85px;\n  box-shadow: 1px 2px 12px 0 rgba(31, 45, 61, 0.1);\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  border: 1px solid #e0e6ed;\n  margin: 0 0 12px 0;\n}\n\n#cd-circle .clock-val {\n  font-size: 25px;\n  color: #4361ee;\n  margin-bottom: 0;\n}\n\n#cd-circle .clock-text {\n  color: #3b3f5c;\n  font-size: 15px;\n  margin-bottom: 0;\n  margin-top: 16px;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/js/src/assets/sass/components/custom-countdown.scss":
/*!***********************************************************************!*\
  !*** ./resources/js/src/assets/sass/components/custom-countdown.scss ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_0_custom_countdown_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../../../node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[0]!./custom-countdown.scss */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[0]!./resources/js/src/assets/sass/components/custom-countdown.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_0_custom_countdown_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_0_custom_countdown_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/src/views/components/countdown.vue":
/*!*********************************************************!*\
  !*** ./resources/js/src/views/components/countdown.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _countdown_vue_vue_type_template_id_99669afc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./countdown.vue?vue&type=template&id=99669afc& */ "./resources/js/src/views/components/countdown.vue?vue&type=template&id=99669afc&");
/* harmony import */ var _countdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./countdown.vue?vue&type=script&lang=js& */ "./resources/js/src/views/components/countdown.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _countdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _countdown_vue_vue_type_template_id_99669afc___WEBPACK_IMPORTED_MODULE_0__.render,
  _countdown_vue_vue_type_template_id_99669afc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/components/countdown.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/components/countdown.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/views/components/countdown.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_countdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./countdown.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/components/countdown.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_countdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/components/countdown.vue?vue&type=template&id=99669afc&":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/views/components/countdown.vue?vue&type=template&id=99669afc& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_countdown_vue_vue_type_template_id_99669afc___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_countdown_vue_vue_type_template_id_99669afc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_countdown_vue_vue_type_template_id_99669afc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./countdown.vue?vue&type=template&id=99669afc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/components/countdown.vue?vue&type=template&id=99669afc&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/components/countdown.vue?vue&type=template&id=99669afc&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/components/countdown.vue?vue&type=template&id=99669afc& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "container" },
    [
      _c("portal", { attrs: { to: "breadcrumb" } }, [
        _c("ul", { staticClass: "navbar-nav flex-row" }, [
          _c("li", [
            _c("div", { staticClass: "page-header" }, [
              _c(
                "nav",
                {
                  staticClass: "breadcrumb-one",
                  attrs: { "aria-label": "breadcrumb" },
                },
                [
                  _c("ol", { staticClass: "breadcrumb" }, [
                    _c("li", { staticClass: "breadcrumb-item" }, [
                      _c("a", { attrs: { href: "javascript:;" } }, [
                        _vm._v("Components "),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c(
                      "li",
                      {
                        staticClass: "breadcrumb-item active",
                        attrs: { "aria-current": "page" },
                      },
                      [_c("span", [_vm._v("Countdown")])]
                    ),
                  ]),
                ]
              ),
            ]),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "container" }, [
        _c(
          "div",
          { staticClass: "nav sidenav", attrs: { id: "navSection" } },
          [
            _c(
              "scrollactive",
              {
                staticClass: "sidenav-content",
                attrs: {
                  tag: "div",
                  "active-class": "active",
                  offset: 120,
                  modifyUrl: false,
                  highlightFirstItem: true,
                },
              },
              [
                _c(
                  "a",
                  {
                    staticClass: "nav-link scrollactive-item",
                    attrs: { href: "#countdownseperator" },
                  },
                  [_vm._v("Seperator")]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "nav-link scrollactive-item",
                    attrs: { href: "#countdowncircle" },
                  },
                  [_vm._v("Circle")]
                ),
              ]
            ),
          ],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "row layout-top-spacing" }, [
          _c(
            "div",
            {
              staticClass: "col-lg-12 col-12 layout-spacing",
              attrs: { id: "countdownseperator" },
            },
            [
              _c("div", { staticClass: "statbox panel box box-shadow" }, [
                _vm._m(0),
                _vm._v(" "),
                _c("div", { staticClass: "panel-body text-center" }, [
                  _c("div", { staticClass: "container" }, [
                    _c("div", { attrs: { id: "cd-simple" } }, [
                      _c("div", { staticClass: "countdown" }, [
                        _c("div", { staticClass: "clock-count-container" }, [
                          _c("h1", { staticClass: "clock-val" }, [
                            _vm._v(_vm._s(_vm.demo1.days)),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("h4", { staticClass: "clock-text" }, [
                          _vm._v("Days"),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "countdown" }, [
                        _c("div", { staticClass: "clock-count-container" }, [
                          _c("h1", { staticClass: "clock-val" }, [
                            _vm._v(_vm._s(_vm.demo1.hours)),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("h4", { staticClass: "clock-text" }, [
                          _vm._v("Hours"),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "countdown" }, [
                        _c("div", { staticClass: "clock-count-container" }, [
                          _c("h1", { staticClass: "clock-val" }, [
                            _vm._v(_vm._s(_vm.demo1.minutes)),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("h4", { staticClass: "clock-text" }, [
                          _vm._v("Mins"),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "countdown" }, [
                        _c("div", { staticClass: "clock-count-container" }, [
                          _c("h1", { staticClass: "clock-val" }, [
                            _vm._v(_vm._s(_vm.demo1.seconds)),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("h4", { staticClass: "clock-text" }, [
                          _vm._v("Sec"),
                        ]),
                      ]),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "code-section-container show-code" },
                    [
                      _c(
                        "b-button",
                        {
                          staticClass: "toggle-code-snippet",
                          attrs: { variant: "default" },
                          on: {
                            click: function ($event) {
                              return _vm.toggleCode("code1")
                            },
                          },
                        },
                        [_c("span", [_vm._v("Code")])]
                      ),
                      _vm._v(" "),
                      _vm.code_arr.includes("code1")
                        ? _c(
                            "div",
                            { staticClass: "code-section text-left" },
                            [
                              _c("highlight", [
                                _c("div", { pre: true }, [
                                  _c("pre", [
                                    _vm._v(
                                      '<div id="cd-simple">\n    <div class="countdown">\n        <div class="clock-count-container">\n            <h1 class="clock-val">{{ demo1.days }}</h1>\n        </div>\n        <h4 class="clock-text">Days</h4>\n    </div>\n    <div class="countdown">\n        <div class="clock-count-container">\n            <h1 class="clock-val">{{ demo1.hours }}</h1>\n        </div>\n        <h4 class="clock-text">Hours</h4>\n    </div>\n    <div class="countdown">\n        <div class="clock-count-container">\n            <h1 class="clock-val">{{ demo1.minutes }}</h1>\n        </div>\n        <h4 class="clock-text">Mins</h4>\n    </div>\n    <div class="countdown">\n        <div class="clock-count-container">\n            <h1 class="clock-val">{{ demo1.seconds }}</h1>\n        </div>\n        <h4 class="clock-text">Sec</h4>\n    </div>\n</div>\n                                            '
                                    ),
                                  ]),
                                ]),
                              ]),
                            ],
                            1
                          )
                        : _vm._e(),
                    ],
                    1
                  ),
                ]),
              ]),
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "col-lg-12 col-12 layout-spacing",
              attrs: { id: "countdowncircle" },
            },
            [
              _c("div", { staticClass: "statbox panel box box-shadow" }, [
                _vm._m(1),
                _vm._v(" "),
                _c("div", { staticClass: "panel-body text-center" }, [
                  _c("div", { staticClass: "container" }, [
                    _c("div", { attrs: { id: "cd-circle" } }, [
                      _c("div", { staticClass: "countdown" }, [
                        _c("div", { staticClass: "clock-count-container" }, [
                          _c("h1", { staticClass: "clock-val" }, [
                            _vm._v(_vm._s(_vm.demo2.days)),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("h4", { staticClass: "clock-text" }, [
                          _vm._v("Days"),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "countdown" }, [
                        _c("div", { staticClass: "clock-count-container" }, [
                          _c("h1", { staticClass: "clock-val" }, [
                            _vm._v(_vm._s(_vm.demo2.hours)),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("h4", { staticClass: "clock-text" }, [
                          _vm._v("Hours"),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "countdown" }, [
                        _c("div", { staticClass: "clock-count-container" }, [
                          _c("h1", { staticClass: "clock-val" }, [
                            _vm._v(_vm._s(_vm.demo2.minutes)),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("h4", { staticClass: "clock-text" }, [
                          _vm._v("Mins"),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "countdown" }, [
                        _c("div", { staticClass: "clock-count-container" }, [
                          _c("h1", { staticClass: "clock-val" }, [
                            _vm._v(_vm._s(_vm.demo2.seconds)),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("h4", { staticClass: "clock-text" }, [
                          _vm._v("Sec"),
                        ]),
                      ]),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "code-section-container show-code" },
                    [
                      _c(
                        "b-button",
                        {
                          staticClass: "toggle-code-snippet",
                          attrs: { variant: "default" },
                          on: {
                            click: function ($event) {
                              return _vm.toggleCode("code2")
                            },
                          },
                        },
                        [_c("span", [_vm._v("Code")])]
                      ),
                      _vm._v(" "),
                      _vm.code_arr.includes("code2")
                        ? _c(
                            "div",
                            { staticClass: "code-section text-left" },
                            [
                              _c("highlight", [
                                _c("div", { pre: true }, [
                                  _c("pre", [
                                    _vm._v(
                                      '<div id="cd-circle">\n    <div class="countdown">\n        <div class="clock-count-container">\n            <h1 class="clock-val">{{ demo2.days }}</h1>\n        </div>\n        <h4 class="clock-text">Days</h4>\n    </div>\n    <div class="countdown">\n        <div class="clock-count-container">\n            <h1 class="clock-val">{{ demo2.hours }}</h1>\n        </div>\n        <h4 class="clock-text">Hours</h4>\n    </div>\n    <div class="countdown">\n        <div class="clock-count-container">\n            <h1 class="clock-val">{{ demo2.minutes }}</h1>\n        </div>\n        <h4 class="clock-text">Mins</h4>\n    </div>\n    <div class="countdown">\n        <div class="clock-count-container">\n            <h1 class="clock-val">{{ demo2.seconds }}</h1>\n        </div>\n        <h4 class="clock-text">Sec</h4>\n    </div>\n</div>\n                                            '
                                    ),
                                  ]),
                                ]),
                              ]),
                            ],
                            1
                          )
                        : _vm._e(),
                    ],
                    1
                  ),
                ]),
              ]),
            ]
          ),
        ]),
      ]),
    ],
    1
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "panel-heading" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-xl-12 col-md-12 col-sm-12 col-12" }, [
          _c("h4", [_vm._v("Simple Countdown")]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "panel-heading" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-xl-12 col-md-12 col-sm-12 col-12" }, [
          _c("h4", [_vm._v("Circle Countdown")]),
        ]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);