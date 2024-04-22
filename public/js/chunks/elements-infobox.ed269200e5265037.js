"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["elements-infobox"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/elements/infobox.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/elements/infobox.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_sass_scrollspyNav_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/assets/sass/scrollspyNav.scss */ "./resources/js/src/assets/sass/scrollspyNav.scss");
/* harmony import */ var _assets_sass_elements_infobox_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/sass/elements/infobox.scss */ "./resources/js/src/assets/sass/elements/infobox.scss");
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



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  metaInfo: {
    title: 'Infobox'
  },
  components: {
    highlight: _components_plugins_highlight_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      code_arr: []
    };
  },
  mounted: function mounted() {},
  methods: {
    toggleCode: function toggleCode(name) {
      if (this.code_arr.includes(name)) {
        this.code_arr = this.code_arr.filter(function (d) {
          return d != name;
        });
      } else {
        this.code_arr.push(name);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[0]!./resources/js/src/assets/sass/elements/infobox.scss":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[0]!./resources/js/src/assets/sass/elements/infobox.scss ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "/*\n\t===============================\n\t\t\t@Import\tMixins\n\t===============================\n*/\n/*\n    Infobox 1\n*/\n.infobox-1 {\n  border: 1px solid #e0e6ed;\n  width: 50%;\n  padding: 25px;\n  border-radius: 6px;\n  box-shadow: 0px 2px 10px 1px rgba(31, 45, 61, 0.1);\n  margin-right: auto;\n  margin-left: auto;\n}\n\n.infobox-1 .info-icon svg {\n  width: 50px;\n  height: 50px;\n  stroke-width: 1px;\n  margin-bottom: 20px;\n  color: #4361ee;\n}\n\n.infobox-1 .info-heading {\n  font-weight: 600;\n  font-size: 19px;\n  margin-bottom: 14px;\n  letter-spacing: 2px;\n}\n\n.infobox-1 .info-text {\n  font-size: 15px;\n  color: #888ea8;\n  margin-bottom: 15px;\n}\n\n.infobox-1 .info-link {\n  color: #4361ee;\n  font-weight: 600;\n}\n\n.infobox-1 .info-link svg {\n  width: 15px;\n  height: 15px;\n}\n\n/*\n    Infobox 2\n*/\n.infobox-2 {\n  border: 1px solid #e0e6ed;\n  width: 50%;\n  padding: 25px;\n  border-radius: 6px;\n  background: #3b3f5c;\n  box-shadow: 0px 2px 10px 1px rgba(31, 45, 61, 0.1);\n  margin-right: auto;\n  margin-left: auto;\n}\n\n.infobox-2 .info-icon {\n  border-radius: 50%;\n  background: #888ea8;\n  display: inline-block;\n  padding: 15px;\n  margin-bottom: 20px;\n}\n\n.infobox-2 .info-icon svg {\n  width: 50px;\n  height: 50px;\n  stroke-width: 1px;\n  color: #d3d3d3;\n}\n\n.infobox-2 .info-heading {\n  font-weight: 600;\n  font-size: 19px;\n  margin-bottom: 14px;\n  letter-spacing: 2px;\n  color: #fff;\n}\n\n.infobox-2 .info-text {\n  font-size: 15px;\n  color: #e0e6ed;\n  margin-bottom: 15px;\n}\n\n.infobox-2 .info-link {\n  color: #2196f3;\n  font-weight: 600;\n}\n\n.infobox-2 .info-link svg {\n  width: 15px;\n  height: 15px;\n}\n\n/*\n    Infobox 3\n*/\n.infobox-3 {\n  position: relative;\n  border: 1px solid #e0e6ed;\n  width: 50%;\n  margin-top: 30px;\n  padding: 50px 25px 25px 25px;\n  border-radius: 6px;\n  box-shadow: 0px 2px 10px 1px rgba(31, 45, 61, 0.1);\n  margin-right: auto;\n  margin-left: auto;\n}\n\n.infobox-3 .info-icon {\n  position: absolute;\n  margin-bottom: 20px;\n  background: #4361ee;\n  display: inline-block;\n  top: -31px;\n  padding: 6px;\n  border-radius: 6px;\n}\n\n.infobox-3 .info-icon svg {\n  width: 50px;\n  height: 50px;\n  stroke-width: 1px;\n  color: #fff;\n}\n\n.infobox-3 .info-heading {\n  font-weight: 600;\n  font-size: 19px;\n  margin-bottom: 14px;\n  letter-spacing: 2px;\n}\n\n.infobox-3 .info-text {\n  font-size: 15px;\n  color: #888ea8;\n  margin-bottom: 15px;\n}\n\n.infobox-3 .info-link {\n  color: #4361ee;\n  font-weight: 600;\n}\n\n.infobox-3 .info-link svg {\n  width: 15px;\n  height: 15px;\n}\n\n@media (max-width: 575px) {\n  .infobox-1, .infobox-2, .infobox-3 {\n    width: auto;\n  }\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/js/src/assets/sass/elements/infobox.scss":
/*!************************************************************!*\
  !*** ./resources/js/src/assets/sass/elements/infobox.scss ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_0_infobox_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../../../node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[0]!./infobox.scss */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[0]!./resources/js/src/assets/sass/elements/infobox.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_0_infobox_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_0_infobox_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/src/views/elements/infobox.vue":
/*!*****************************************************!*\
  !*** ./resources/js/src/views/elements/infobox.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _infobox_vue_vue_type_template_id_5d979bcf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./infobox.vue?vue&type=template&id=5d979bcf& */ "./resources/js/src/views/elements/infobox.vue?vue&type=template&id=5d979bcf&");
/* harmony import */ var _infobox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./infobox.vue?vue&type=script&lang=js& */ "./resources/js/src/views/elements/infobox.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _infobox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _infobox_vue_vue_type_template_id_5d979bcf___WEBPACK_IMPORTED_MODULE_0__.render,
  _infobox_vue_vue_type_template_id_5d979bcf___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/elements/infobox.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/elements/infobox.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/src/views/elements/infobox.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_infobox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./infobox.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/elements/infobox.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_infobox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/elements/infobox.vue?vue&type=template&id=5d979bcf&":
/*!************************************************************************************!*\
  !*** ./resources/js/src/views/elements/infobox.vue?vue&type=template&id=5d979bcf& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_infobox_vue_vue_type_template_id_5d979bcf___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_infobox_vue_vue_type_template_id_5d979bcf___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_infobox_vue_vue_type_template_id_5d979bcf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./infobox.vue?vue&type=template&id=5d979bcf& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/elements/infobox.vue?vue&type=template&id=5d979bcf&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/elements/infobox.vue?vue&type=template&id=5d979bcf&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/elements/infobox.vue?vue&type=template&id=5d979bcf& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
                        _vm._v("Elements"),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c(
                      "li",
                      {
                        staticClass: "breadcrumb-item active",
                        attrs: { "aria-current": "page" },
                      },
                      [_c("span", [_vm._v("Infobox")])]
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
          { staticClass: "nav sidenav" },
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
                    attrs: { href: "#infobox1" },
                  },
                  [_vm._v("Infobox 1")]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "nav-link scrollactive-item",
                    attrs: { href: "#infobox2" },
                  },
                  [_vm._v("Infobox 2")]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "nav-link scrollactive-item",
                    attrs: { href: "#infobox3" },
                  },
                  [_vm._v("Infobox 3")]
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
              staticClass: "col-xl-12 col-lg-12 layout-spacing",
              attrs: { id: "infobox1" },
            },
            [
              _c("div", { staticClass: "statbox panel box box-shadow" }, [
                _vm._m(0),
                _vm._v(" "),
                _c("div", { staticClass: "panel-body" }, [
                  _c("div", { staticClass: "infobox-1" }, [
                    _c("div", { staticClass: "info-icon" }, [
                      _c(
                        "svg",
                        {
                          staticClass: "feather feather-box",
                          attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                          },
                        },
                        [
                          _c("path", {
                            attrs: {
                              d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",
                            },
                          }),
                          _c("polyline", {
                            attrs: { points: "3.27 6.96 12 12.01 20.73 6.96" },
                          }),
                          _c("line", {
                            attrs: {
                              x1: "12",
                              y1: "22.08",
                              x2: "12",
                              y2: "12",
                            },
                          }),
                        ]
                      ),
                    ]),
                    _vm._v(" "),
                    _c("h5", { staticClass: "info-heading" }, [
                      _vm._v("Layout Package"),
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "info-text" }, [
                      _vm._v(
                        "Lorem ipsum dolor sit amet, labore et dolore magna aliqua."
                      ),
                    ]),
                    _vm._v(" "),
                    _c("a", { staticClass: "info-link", attrs: { href: "" } }, [
                      _vm._v("Discover "),
                      _c(
                        "svg",
                        {
                          staticClass: "feather feather-arrow-right",
                          attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                          },
                        },
                        [
                          _c("line", {
                            attrs: { x1: "5", y1: "12", x2: "19", y2: "12" },
                          }),
                          _c("polyline", {
                            attrs: { points: "12 5 19 12 12 19" },
                          }),
                        ]
                      ),
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
                                _c("pre", [
                                  _vm._v(
                                    '<div class="infobox-1">\n    <div class="info-icon">\n        <svg> ... </svg>\n    </div>\n    <h5 class="info-heading">Layout Package</h5>\n    <p class="info-text">Lorem ipsum dolor sit amet, labore et dolore magna aliqua.</p>\n    <a class="info-link" href="">Discover <svg> ... </svg></a>\n</div>\n'
                                  ),
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
              staticClass: "col-xl-12 col-lg-12 layout-spacing",
              attrs: { id: "infobox2" },
            },
            [
              _c("div", { staticClass: "statbox panel box box-shadow" }, [
                _vm._m(1),
                _vm._v(" "),
                _c("div", { staticClass: "panel-body text-center" }, [
                  _c("div", { staticClass: "infobox-2" }, [
                    _c("div", { staticClass: "info-icon" }, [
                      _c(
                        "svg",
                        {
                          staticClass: "feather feather-box",
                          attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                          },
                        },
                        [
                          _c("path", {
                            attrs: {
                              d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",
                            },
                          }),
                          _c("polyline", {
                            attrs: { points: "3.27 6.96 12 12.01 20.73 6.96" },
                          }),
                          _c("line", {
                            attrs: {
                              x1: "12",
                              y1: "22.08",
                              x2: "12",
                              y2: "12",
                            },
                          }),
                        ]
                      ),
                    ]),
                    _vm._v(" "),
                    _c("h5", { staticClass: "info-heading" }, [
                      _vm._v("Layout Package"),
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "info-text" }, [
                      _vm._v(
                        "Lorem ipsum dolor sit amet, labore et dolore magna aliqua."
                      ),
                    ]),
                    _vm._v(" "),
                    _c("a", { staticClass: "info-link", attrs: { href: "" } }, [
                      _vm._v("Discover "),
                      _c(
                        "svg",
                        {
                          staticClass: "feather feather-arrow-right",
                          attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                          },
                        },
                        [
                          _c("line", {
                            attrs: { x1: "5", y1: "12", x2: "19", y2: "12" },
                          }),
                          _c("polyline", {
                            attrs: { points: "12 5 19 12 12 19" },
                          }),
                        ]
                      ),
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
                                _c("pre", [
                                  _vm._v(
                                    '<div class="infobox-2">\n    <div class="info-icon">\n        <svg> ... </svg>\n    </div>\n    <h5 class="info-heading">Layout Package</h5>\n    <p class="info-text">Lorem ipsum dolor sit amet, labore et dolore magna aliqua.</p>\n    <a class="info-link" href="">Discover <svg> ... </svg></a>\n</div>\n'
                                  ),
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
              staticClass: "col-xl-12 col-lg-12 layout-spacing",
              attrs: { id: "infobox3" },
            },
            [
              _c("div", { staticClass: "statbox panel box box-shadow" }, [
                _vm._m(2),
                _vm._v(" "),
                _c("div", { staticClass: "panel-body" }, [
                  _c("div", { staticClass: "infobox-3" }, [
                    _c("div", { staticClass: "info-icon" }, [
                      _c(
                        "svg",
                        {
                          staticClass: "feather feather-box",
                          attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                          },
                        },
                        [
                          _c("path", {
                            attrs: {
                              d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",
                            },
                          }),
                          _c("polyline", {
                            attrs: { points: "3.27 6.96 12 12.01 20.73 6.96" },
                          }),
                          _c("line", {
                            attrs: {
                              x1: "12",
                              y1: "22.08",
                              x2: "12",
                              y2: "12",
                            },
                          }),
                        ]
                      ),
                    ]),
                    _vm._v(" "),
                    _c("h5", { staticClass: "info-heading" }, [
                      _vm._v("Layout Package"),
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "info-text" }, [
                      _vm._v(
                        "Lorem ipsum dolor sit amet, labore et dolore magna aliqua."
                      ),
                    ]),
                    _vm._v(" "),
                    _c("a", { staticClass: "info-link", attrs: { href: "" } }, [
                      _vm._v("Discover "),
                      _c(
                        "svg",
                        {
                          staticClass: "feather feather-arrow-right",
                          attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                          },
                        },
                        [
                          _c("line", {
                            attrs: { x1: "5", y1: "12", x2: "19", y2: "12" },
                          }),
                          _c("polyline", {
                            attrs: { points: "12 5 19 12 12 19" },
                          }),
                        ]
                      ),
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
                              return _vm.toggleCode("code3")
                            },
                          },
                        },
                        [_c("span", [_vm._v("Code")])]
                      ),
                      _vm._v(" "),
                      _vm.code_arr.includes("code3")
                        ? _c(
                            "div",
                            { staticClass: "code-section text-left" },
                            [
                              _c("highlight", [
                                _c("pre", [
                                  _vm._v(
                                    '<div class="infobox-3">\n    <div class="info-icon">\n        <svg> ... </svg>\n    </div>\n    <h5 class="info-heading">Layout Package</h5>\n    <p class="info-text">Lorem ipsum dolor sit amet, labore et dolore magna aliqua.</p>\n    <a class="info-link" href="">Discover <svg> ... </svg></a>\n</div>\n'
                                  ),
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
          _c("h4", [_vm._v(" Infobox 1 ")]),
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
          _c("h4", [_vm._v(" Infobox 2 ")]),
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
          _c("h4", [_vm._v(" Infobox 3 ")]),
        ]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);