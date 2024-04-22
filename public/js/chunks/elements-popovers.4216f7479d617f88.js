"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["elements-popovers"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/elements/popovers.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/elements/popovers.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_sass_scrollspyNav_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/assets/sass/scrollspyNav.scss */ "./resources/js/src/assets/sass/scrollspyNav.scss");
/* harmony import */ var _assets_sass_elements_popover_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/sass/elements/popover.scss */ "./resources/js/src/assets/sass/elements/popover.scss");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    title: 'Popovers'
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

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[0]!./resources/js/src/assets/sass/elements/popover.scss":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[0]!./resources/js/src/assets/sass/elements/popover.scss ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "/*\n\t===============================\n\t\t\t@Import\tMixins\n\t===============================\n*/\n.popovers-section h6 {\n  color: #3b3f5c;\n  font-size: 0.875rem;\n  margin-top: 25px;\n  margin-bottom: 20px;\n}\n\n.popover {\n  border: 1px solid #ebedf2;\n  border-radius: 4px;\n}\n\n/*\n\tPopovers\n*/\n.popover-primary {\n  border-color: #eaf1ff;\n}\n\n.popover-success {\n  border-color: #ddf5f0;\n}\n\n.popover-info {\n  border-color: #e7f7ff;\n}\n\n.popover-danger {\n  border-color: #fff5f5;\n}\n\n.popover-warning {\n  border-color: #fff9ed;\n}\n\n.popover-secondary {\n  border-color: #f3effc;\n}\n\n.popover-dark {\n  border-color: #e3e4eb;\n}\n\n/* \t\tpopover Arrow \t*/\n.popover-primary .arrow:after, .popover-primary .arrow:before {\n  border-top-color: #eaf1ff !important;\n}\n\n.popover-success .arrow:after, .popover-success .arrow:before {\n  border-top-color: #ddf5f0 !important;\n}\n\n.popover-info .arrow:after, .popover-info .arrow:before {\n  border-top-color: #e7f7ff !important;\n}\n\n.popover-danger .arrow:after, .popover-danger .arrow:before {\n  border-top-color: #fff5f5 !important;\n}\n\n.popover-warning .arrow:after, .popover-warning .arrow:before {\n  border-top-color: #fff9ed !important;\n}\n\n.popover-secondary .arrow:after, .popover-secondary .arrow:before {\n  border-top-color: #f3effc !important;\n}\n\n.popover-dark .arrow:after, .popover-dark .arrow:before {\n  border-top-color: #e3e4eb !important;\n}\n\n/* \t\tpopover Header \t\t*/\n.popover-primary .popover-header {\n  background-color: #eaf1ff;\n  border: none;\n  color: #4361ee;\n}\n\n.popover-success .popover-header {\n  background-color: #ddf5f0;\n  border: none;\n  color: #1abc9c;\n}\n\n.popover-info .popover-header {\n  background-color: #e7f7ff;\n  border: none;\n  color: #2196f3;\n}\n\n.popover-danger .popover-header {\n  background-color: #fff5f5;\n  border: none;\n  color: #e7515a;\n}\n\n.popover-warning .popover-header {\n  background-color: #fff9ed;\n  border: none;\n  color: #e2a03f;\n}\n\n.popover-secondary .popover-header {\n  background-color: #f3effc;\n  border: none;\n  color: #805dca;\n}\n\n.popover-dark .popover-header {\n  background-color: #e3e4eb;\n  border: none;\n  color: #3b3f5c;\n}\n\n/*  \tPopover Body \t*/\n.popover-primary .popover-body {\n  background-color: #eaf1ff;\n  color: #4361ee;\n}\n\n.popover-success .popover-body {\n  background-color: #ddf5f0;\n  color: #1abc9c;\n}\n\n.popover-info .popover-body {\n  background-color: #e7f7ff;\n  color: #2196f3;\n}\n\n.popover-danger .popover-body {\n  background-color: #fff5f5;\n  color: #e7515a;\n}\n\n.popover-warning .popover-body {\n  background-color: #fff9ed;\n  color: #e2a03f;\n}\n\n.popover-secondary .popover-body {\n  background-color: #f3effc;\n  color: #805dca;\n}\n\n.popover-dark .popover-body {\n  background-color: #e3e4eb;\n  color: #3b3f5c;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/js/src/assets/sass/elements/popover.scss":
/*!************************************************************!*\
  !*** ./resources/js/src/assets/sass/elements/popover.scss ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_0_popover_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../../../node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[0]!./popover.scss */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[0]!./resources/js/src/assets/sass/elements/popover.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_0_popover_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_0_popover_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/src/views/elements/popovers.vue":
/*!******************************************************!*\
  !*** ./resources/js/src/views/elements/popovers.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _popovers_vue_vue_type_template_id_9dfb8028___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popovers.vue?vue&type=template&id=9dfb8028& */ "./resources/js/src/views/elements/popovers.vue?vue&type=template&id=9dfb8028&");
/* harmony import */ var _popovers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popovers.vue?vue&type=script&lang=js& */ "./resources/js/src/views/elements/popovers.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _popovers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _popovers_vue_vue_type_template_id_9dfb8028___WEBPACK_IMPORTED_MODULE_0__.render,
  _popovers_vue_vue_type_template_id_9dfb8028___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/elements/popovers.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/elements/popovers.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/views/elements/popovers.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_popovers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./popovers.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/elements/popovers.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_popovers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/elements/popovers.vue?vue&type=template&id=9dfb8028&":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/views/elements/popovers.vue?vue&type=template&id=9dfb8028& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_popovers_vue_vue_type_template_id_9dfb8028___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_popovers_vue_vue_type_template_id_9dfb8028___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_popovers_vue_vue_type_template_id_9dfb8028___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./popovers.vue?vue&type=template&id=9dfb8028& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/elements/popovers.vue?vue&type=template&id=9dfb8028&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/elements/popovers.vue?vue&type=template&id=9dfb8028&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/elements/popovers.vue?vue&type=template&id=9dfb8028& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
                      [_c("span", [_vm._v("Popovers")])]
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
                    attrs: { href: "#popoverDefault" },
                  },
                  [_vm._v("Default")]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "nav-link scrollactive-item",
                    attrs: { href: "#popoverDirections" },
                  },
                  [_vm._v("Directions")]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "nav-link scrollactive-item",
                    attrs: { href: "#popoverDismissible" },
                  },
                  [_vm._v("Dismissible")]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "nav-link scrollactive-item",
                    attrs: { href: "#popoverOptions" },
                  },
                  [_vm._v("Options")]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "nav-link scrollactive-item",
                    attrs: { href: "#popoverColors" },
                  },
                  [_vm._v("Colors")]
                ),
              ]
            ),
          ],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "row layout-top-spacing" }, [
          _c("div", { staticClass: "col-12" }, [
            _c(
              "div",
              {
                staticClass:
                  "alert alert-arrow-left alert-icon-left alert-light-info mb-0 text-break",
              },
              [
                _c(
                  "svg",
                  {
                    staticClass: "feather feather-bell",
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
                        d: "M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9",
                      },
                    }),
                    _c("path", { attrs: { d: "M13.73 21a2 2 0 0 1-3.46 0" } }),
                  ]
                ),
                _vm._v("\n                        Documentation: "),
                _c(
                  "a",
                  {
                    staticClass: "text-info",
                    attrs: {
                      target: "_blank",
                      href: "https://bootstrap-vue.org/docs/directives/popover",
                    },
                  },
                  [
                    _vm._v(
                      "\n                            https://bootstrap-vue.org/docs/directives/popover\n                        "
                    ),
                  ]
                ),
              ]
            ),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row layout-top-spacing" }, [
          _c(
            "div",
            {
              staticClass: "col-xl-12 col-lg-12 layout-spacing",
              attrs: { id: "popoverDefault" },
            },
            [
              _c("div", { staticClass: "statbox panel box box-shadow" }, [
                _vm._m(0),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "panel-body text-center" },
                  [
                    _c(
                      "b-button",
                      {
                        directives: [
                          {
                            name: "b-popover",
                            rawName: "v-b-popover.left",
                            value: "Tooltip using ANCHOR tag",
                            expression: "'Tooltip using ANCHOR tag'",
                            modifiers: { left: true },
                          },
                        ],
                        staticClass: "mb-3 mr-2",
                        attrs: { tag: "a", variant: "primary" },
                      },
                      [_vm._v("Link")]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        directives: [
                          {
                            name: "b-popover",
                            rawName: "v-b-popover.right",
                            value: "Tooltip using BUTTON tag",
                            expression: "'Tooltip using BUTTON tag'",
                            modifiers: { right: true },
                          },
                        ],
                        staticClass: "mb-3",
                        attrs: { variant: "success" },
                      },
                      [_vm._v("Button")]
                    ),
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
                                      '<b-button tag="a" v-b-popover.left="\'Tooltip using ANCHOR tag\'" variant="primary" class="mb-3 mr-2">Link</b-button>\n\n<b-button v-b-popover.right="\'Tooltip using BUTTON tag\'" variant="success" class="mb-3">Button</b-button>\n'
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
                  ],
                  1
                ),
              ]),
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "col-lg-12 layout-spacing",
              attrs: { id: "popoverDirections" },
            },
            [
              _c("div", { staticClass: "statbox panel box box-shadow" }, [
                _vm._m(1),
                _vm._v(" "),
                _c("div", { staticClass: "panel-body tooltip-section" }, [
                  _c("div", { staticClass: "row" }, [
                    _c(
                      "div",
                      { staticClass: "col-lg-6" },
                      [
                        _c(
                          "b-button",
                          {
                            directives: [
                              {
                                name: "b-popover",
                                rawName: "v-b-popover.top",
                                value: "Tooltip on top",
                                expression: "'Tooltip on top'",
                                modifiers: { top: true },
                              },
                            ],
                            staticClass: "mb-4 ml-2",
                            attrs: { variant: "info" },
                          },
                          [_vm._v("Popover on top")]
                        ),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-lg-6" },
                      [
                        _c(
                          "b-button",
                          {
                            directives: [
                              {
                                name: "b-popover",
                                rawName: "v-b-popover.right",
                                value: "Tooltip on right",
                                expression: "'Tooltip on right'",
                                modifiers: { right: true },
                              },
                            ],
                            staticClass: "mb-4 ml-2",
                            attrs: { variant: "danger" },
                          },
                          [_vm._v("Popover on right")]
                        ),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-lg-6" },
                      [
                        _c(
                          "b-button",
                          {
                            directives: [
                              {
                                name: "b-popover",
                                rawName: "v-b-popover.bottom",
                                value: "Tooltip on bottom",
                                expression: "'Tooltip on bottom'",
                                modifiers: { bottom: true },
                              },
                            ],
                            staticClass: "mb-4 ml-2",
                            attrs: { variant: "warning" },
                          },
                          [_vm._v("Popover on bottom")]
                        ),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-lg-6" },
                      [
                        _c(
                          "b-button",
                          {
                            directives: [
                              {
                                name: "b-popover",
                                rawName: "v-b-popover.left",
                                value: "Tooltip on left",
                                expression: "'Tooltip on left'",
                                modifiers: { left: true },
                              },
                            ],
                            staticClass: "mb-4 ml-2",
                            attrs: { variant: "secondary" },
                          },
                          [_vm._v("Popover on left")]
                        ),
                      ],
                      1
                    ),
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
                                    '<!-- TOP -->\n<b-button v-b-popover.top="\'Tooltip on top\'" variant="info" class="mb-4 ml-2">Popover on top</b-button>\n\n<!-- RIGHT -->\n<b-button v-b-popover.right="\'Tooltip on right\'" variant="danger" class="mb-4 ml-2">Popover on right</b-button>\n\n<!-- BOTTOM -->\n<b-button v-b-popover.bottom="\'Tooltip on bottom\'" variant="warning" class="mb-4 ml-2">Popover on bottom</b-button>\n\n<!-- LEFT -->\n<b-button v-b-popover.left="\'Tooltip on left\'" variant="secondary" class="mb-4 ml-2">Popover on left</b-button>\n'
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
              attrs: { id: "popoverDismissible" },
            },
            [
              _c("div", { staticClass: "statbox panel box box-shadow" }, [
                _vm._m(2),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "panel-body text-center" },
                  [
                    _c(
                      "b-button",
                      {
                        directives: [
                          {
                            name: "b-popover",
                            rawName: "v-b-popover.focus.left",
                            value: "Lorem ipsum dolor sit.",
                            expression: "'Lorem ipsum dolor sit.'",
                            modifiers: { focus: true, left: true },
                          },
                        ],
                        staticClass: "mb-3",
                        attrs: { variant: "dark" },
                      },
                      [_vm._v("Popover on left")]
                    ),
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
                                      '<b-button v-b-popover.focus.left="\'Lorem ipsum dolor sit.\'" variant="dark" class="mb-3">Popover on left</b-button>\n'
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
                  ],
                  1
                ),
              ]),
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "col-lg-12 layout-spacing",
              attrs: { id: "popoverOptions" },
            },
            [
              _c("div", { staticClass: "statbox panel box box-shadow" }, [
                _vm._m(3),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "panel-body align-center basic-tooltip" },
                  [
                    _c("div", { staticClass: "row" }, [
                      _c(
                        "div",
                        { staticClass: "col-lg-6 mb-4" },
                        [
                          _c(
                            "b-button",
                            {
                              directives: [
                                {
                                  name: "b-popover",
                                  rawName: "v-b-popover.hover.right",
                                  value: "On Hover",
                                  expression: "'On Hover'",
                                  modifiers: { hover: true, right: true },
                                },
                              ],
                              attrs: { variant: "primary" },
                            },
                            [_vm._v("On Hover")]
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-lg-6 mb-4" },
                        [
                          _c(
                            "b-button",
                            {
                              directives: [
                                {
                                  name: "b-popover",
                                  rawName: "v-b-popover.focus.right",
                                  value: "On Focus",
                                  expression: "'On Focus'",
                                  modifiers: { focus: true, right: true },
                                },
                              ],
                              attrs: { variant: "secondary" },
                            },
                            [_vm._v("On Focus")]
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-lg-6 mb-4" },
                        [
                          _c(
                            "b-button",
                            {
                              directives: [
                                {
                                  name: "b-popover",
                                  rawName: "v-b-popover.focus.right",
                                  value: { content: "Delay 1s", delay: 1000 },
                                  expression:
                                    "{content : 'Delay 1s', delay : 1000}",
                                  modifiers: { focus: true, right: true },
                                },
                              ],
                              attrs: { variant: "info" },
                            },
                            [_vm._v("Delay")]
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-lg-6 mb-4" },
                        [
                          _c(
                            "b-button",
                            {
                              directives: [
                                {
                                  name: "b-popover",
                                  rawName: "v-b-popover.focus.right",
                                  value: {
                                    content: "Disabled Animation",
                                    animation: false,
                                  },
                                  expression:
                                    "{content : 'Disabled Animation', animation : false}",
                                  modifiers: { focus: true, right: true },
                                },
                              ],
                              attrs: { variant: "dark" },
                            },
                            [_vm._v("Disabled Animation")]
                          ),
                        ],
                        1
                      ),
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
                                return _vm.toggleCode("code4")
                              },
                            },
                          },
                          [_c("span", [_vm._v("Code")])]
                        ),
                        _vm._v(" "),
                        _vm.code_arr.includes("code4")
                          ? _c(
                              "div",
                              { staticClass: "code-section text-left" },
                              [
                                _c("highlight", [
                                  _c("pre", [
                                    _vm._v(
                                      '<!-- On Hover -->\n<b-button v-b-popover.hover.right="\'On Hover\'" variant="primary">On Hover</b-button>\n\n<!-- On Focus -->\n<b-button v-b-popover.focus.right="\'On Focus\'" variant="secondary">On Focus</b-button>\n\n<!-- Delay -->\n<b-button v-b-popover.focus.right="{content : \'Delay 1s\', delay : 1000}" variant="info">Delay</b-button>\n\n<!-- Disabled Animation -->\n<b-button v-b-popover.focus.right="{content : \'Disabled Animation\', animation : false}" variant="dark">Disabled Animation</b-button>\n'
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
                  ]
                ),
              ]),
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "col-lg-12 layout-spacing",
              attrs: { id: "popoverColors" },
            },
            [
              _c("div", { staticClass: "statbox panel box box-shadow" }, [
                _vm._m(4),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "panel-body align-center" },
                  [
                    _c(
                      "b-button",
                      {
                        directives: [
                          {
                            name: "b-popover",
                            rawName: "v-b-popover.top",
                            value: {
                              title: "Primary",
                              content: "Primary popover",
                              html: true,
                              customClass: "popover-primary",
                              variant: "primary",
                            },
                            expression:
                              "{title: 'Primary', content: 'Primary popover', html: true, customClass: 'popover-primary', variant: 'primary'}",
                            modifiers: { top: true },
                          },
                        ],
                        staticClass: "mb-2 mx-1",
                        attrs: { variant: "primary" },
                      },
                      [_vm._v("Primary")]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        directives: [
                          {
                            name: "b-popover",
                            rawName: "v-b-popover.top",
                            value: {
                              title: "Success",
                              content: "Success popover",
                              html: true,
                              customClass: "popover-success",
                              variant: "success",
                            },
                            expression:
                              "{title: 'Success', content: 'Success popover', html: true, customClass: 'popover-success', variant: 'success'}",
                            modifiers: { top: true },
                          },
                        ],
                        staticClass: "mb-2 mx-1",
                        attrs: { variant: "success" },
                      },
                      [_vm._v("Success")]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        directives: [
                          {
                            name: "b-popover",
                            rawName: "v-b-popover.top",
                            value: {
                              title: "Info",
                              content: "Info popover",
                              html: true,
                              customClass: "popover-info",
                              variant: "info",
                            },
                            expression:
                              "{title: 'Info', content: 'Info popover', html: true, customClass: 'popover-info', variant: 'info'}",
                            modifiers: { top: true },
                          },
                        ],
                        staticClass: "mb-2 mx-1",
                        attrs: { variant: "info" },
                      },
                      [_vm._v("Info")]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        directives: [
                          {
                            name: "b-popover",
                            rawName: "v-b-popover.top",
                            value: {
                              title: "Danger",
                              content: "Danger popover",
                              html: true,
                              customClass: "popover-danger",
                              variant: "danger",
                            },
                            expression:
                              "{title: 'Danger', content: 'Danger popover', html: true, customClass: 'popover-danger', variant: 'danger'}",
                            modifiers: { top: true },
                          },
                        ],
                        staticClass: "mb-2 mx-1",
                        attrs: { variant: "danger" },
                      },
                      [_vm._v("Danger")]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        directives: [
                          {
                            name: "b-popover",
                            rawName: "v-b-popover.top",
                            value: {
                              title: "Warning",
                              content: "Warning popover",
                              html: true,
                              customClass: "popover-warning",
                              variant: "warning",
                            },
                            expression:
                              "{title: 'Warning', content: 'Warning popover', html: true, customClass: 'popover-warning', variant: 'warning'}",
                            modifiers: { top: true },
                          },
                        ],
                        staticClass: "mb-2 mx-1",
                        attrs: { variant: "warning" },
                      },
                      [_vm._v("Warning")]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        directives: [
                          {
                            name: "b-popover",
                            rawName: "v-b-popover.top",
                            value: {
                              title: "Secondary",
                              content: "Secondary popover",
                              html: true,
                              customClass: "popover-secondary",
                              variant: "secondary",
                            },
                            expression:
                              "{title: 'Secondary', content: 'Secondary popover', html: true, customClass: 'popover-secondary', variant: 'secondary'}",
                            modifiers: { top: true },
                          },
                        ],
                        staticClass: "mb-2 mx-1",
                        attrs: { variant: "secondary" },
                      },
                      [_vm._v("Secondary")]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        directives: [
                          {
                            name: "b-popover",
                            rawName: "v-b-popover.top",
                            value: {
                              title: "Dark",
                              content: "Dark popover",
                              html: true,
                              customClass: "popover-dark",
                              variant: "dark",
                            },
                            expression:
                              "{title: 'Dark', content: 'Dark popover', html: true, customClass: 'popover-dark', variant: 'dark'}",
                            modifiers: { top: true },
                          },
                        ],
                        staticClass: "mb-2 mx-1",
                        attrs: { variant: "dark" },
                      },
                      [_vm._v("Dark")]
                    ),
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
                                return _vm.toggleCode("code5")
                              },
                            },
                          },
                          [_c("span", [_vm._v("Code")])]
                        ),
                        _vm._v(" "),
                        _vm.code_arr.includes("code5")
                          ? _c(
                              "div",
                              { staticClass: "code-section text-left" },
                              [
                                _c("highlight", [
                                  _c("pre", [
                                    _vm._v(
                                      "<b-button v-b-popover.top=\"{title: 'Primary', content: 'Primary popover', html: true, customClass: 'popover-primary', variant: 'primary'}\" variant=\"primary\" class=\"mb-2 mx-1\">Primary</b-button>\n<b-button v-b-popover.top=\"{title: 'Success', content: 'Success popover', html: true, customClass: 'popover-success', variant: 'success'}\" variant=\"success\" class=\"mb-2 mx-1\">Success</b-button>\n<b-button v-b-popover.top=\"{title: 'Info', content: 'Info popover', html: true, customClass: 'info-primary', variant: 'info'}\" variant=\"info\" class=\"mb-2 mx-1\">Info</b-button>\n<b-button v-b-popover.top=\"{title: 'Danger', content: 'Danger popover', html: true, customClass: 'popover-danger', variant: 'danger'}\" variant=\"danger\" class=\"mb-2 mx-1\">Danger</b-button>\n<b-button v-b-popover.top=\"{title: 'Warning', content: 'Warning popover', html: true, customClass: 'popover-warning', variant: 'warning'}\" variant=\"warning\" class=\"mb-2 mx-1\">Warning</b-button>\n<b-button v-b-popover.top=\"{title: 'Secondary', content: 'Secondary popover', html: true, customClass: 'popover-secondary', variant: 'secondary'}\" variant=\"secondary\" class=\"mb-2 mx-1\">Secondary</b-button>\n<b-button v-b-popover.top=\"{title: 'Dark', content: 'Dark popover', html: true, customClass: 'popover-dark', variant: 'dark'}\" variant=\"dark\" class=\"mb-2 mx-1\">Dark</b-button>\n"
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
                  ],
                  1
                ),
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
          _c("h4", [_vm._v(" Popover ")]),
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
          _c("h4", [_vm._v(" Placement")]),
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
          _c("h4", [_vm._v("Dismissible popover")]),
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
          _c("h4", [_vm._v("Options")]),
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
          _c("h4", [_vm._v(" Colors ")]),
        ]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);