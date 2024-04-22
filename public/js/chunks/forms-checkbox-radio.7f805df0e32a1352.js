"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["forms-checkbox-radio"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/forms/checkbox_radio.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/forms/checkbox_radio.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_sass_scrollspyNav_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/assets/sass/scrollspyNav.scss */ "./resources/js/src/assets/sass/scrollspyNav.scss");
/* harmony import */ var _components_plugins_highlight_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/plugins/highlight.vue */ "./resources/js/src/components/plugins/highlight.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    title: 'Checkbox and Radio'
  },
  components: {
    highlight: _components_plugins_highlight_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      code_arr: [],
      radio_1: 'radio-2',
      radio_2: 'radio-2',
      radio_3: 'radio-2',
      radio_4: 'radio-2',
      radio_5: 'radio-2',
      radio_6: 'radio-2'
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

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/forms/checkbox_radio.vue?vue&type=style&index=0&id=d9665a2e&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/forms/checkbox_radio.vue?vue&type=style&index=0&id=d9665a2e&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.custom-checkbox[data-v-d9665a2e], .custom-radio[data-v-d9665a2e] { margin-bottom: 0.5rem;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/forms/checkbox_radio.vue?vue&type=style&index=0&id=d9665a2e&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/forms/checkbox_radio.vue?vue&type=style&index=0&id=d9665a2e&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_checkbox_radio_vue_vue_type_style_index_0_id_d9665a2e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./checkbox_radio.vue?vue&type=style&index=0&id=d9665a2e&scoped=true&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/forms/checkbox_radio.vue?vue&type=style&index=0&id=d9665a2e&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_checkbox_radio_vue_vue_type_style_index_0_id_d9665a2e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_checkbox_radio_vue_vue_type_style_index_0_id_d9665a2e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/src/views/forms/checkbox_radio.vue":
/*!*********************************************************!*\
  !*** ./resources/js/src/views/forms/checkbox_radio.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _checkbox_radio_vue_vue_type_template_id_d9665a2e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkbox_radio.vue?vue&type=template&id=d9665a2e&scoped=true& */ "./resources/js/src/views/forms/checkbox_radio.vue?vue&type=template&id=d9665a2e&scoped=true&");
/* harmony import */ var _checkbox_radio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkbox_radio.vue?vue&type=script&lang=js& */ "./resources/js/src/views/forms/checkbox_radio.vue?vue&type=script&lang=js&");
/* harmony import */ var _checkbox_radio_vue_vue_type_style_index_0_id_d9665a2e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkbox_radio.vue?vue&type=style&index=0&id=d9665a2e&scoped=true&lang=css& */ "./resources/js/src/views/forms/checkbox_radio.vue?vue&type=style&index=0&id=d9665a2e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _checkbox_radio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _checkbox_radio_vue_vue_type_template_id_d9665a2e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _checkbox_radio_vue_vue_type_template_id_d9665a2e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "d9665a2e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/forms/checkbox_radio.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/forms/checkbox_radio.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/views/forms/checkbox_radio.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_checkbox_radio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./checkbox_radio.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/forms/checkbox_radio.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_checkbox_radio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/forms/checkbox_radio.vue?vue&type=style&index=0&id=d9665a2e&scoped=true&lang=css&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/checkbox_radio.vue?vue&type=style&index=0&id=d9665a2e&scoped=true&lang=css& ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_checkbox_radio_vue_vue_type_style_index_0_id_d9665a2e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./checkbox_radio.vue?vue&type=style&index=0&id=d9665a2e&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/forms/checkbox_radio.vue?vue&type=style&index=0&id=d9665a2e&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/src/views/forms/checkbox_radio.vue?vue&type=template&id=d9665a2e&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/checkbox_radio.vue?vue&type=template&id=d9665a2e&scoped=true& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_checkbox_radio_vue_vue_type_template_id_d9665a2e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_checkbox_radio_vue_vue_type_template_id_d9665a2e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_checkbox_radio_vue_vue_type_template_id_d9665a2e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./checkbox_radio.vue?vue&type=template&id=d9665a2e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/forms/checkbox_radio.vue?vue&type=template&id=d9665a2e&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/forms/checkbox_radio.vue?vue&type=template&id=d9665a2e&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/forms/checkbox_radio.vue?vue&type=template&id=d9665a2e&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
                        _vm._v("Forms"),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c(
                      "li",
                      {
                        staticClass: "breadcrumb-item active",
                        attrs: { "aria-current": "page" },
                      },
                      [_c("span", [_vm._v("Checkbox and Radio")])]
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
                    attrs: { href: "#checkbox" },
                  },
                  [_vm._v("Checkbox")]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "nav-link scrollactive-item",
                    attrs: { href: "#radio" },
                  },
                  [_vm._v("Radio")]
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
                      href: "https://bootstrap-vue.org/docs/components/form-checkbox",
                    },
                  },
                  [
                    _vm._v(
                      "\n                            https://bootstrap-vue.org/docs/components/form-checkbox\n                        "
                    ),
                  ]
                ),
              ]
            ),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row layout-top-spacing" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "col-lg-12 layout-spacing" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-xl-12 col-12 layout-spacing" }, [
                _c("div", { staticClass: "statbox panel box box-shadow" }, [
                  _vm._m(1),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "panel-body" },
                    [
                      _vm._m(2),
                      _vm._v(" "),
                      _c(
                        "b-checkbox",
                        {
                          staticClass: "checkbox-default",
                          attrs: { variant: "default" },
                        },
                        [_vm._v("Default")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-checkbox",
                        {
                          staticClass: "checkbox-primary",
                          attrs: { variant: "primary", checked: true },
                        },
                        [_vm._v("Primary")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-checkbox",
                        {
                          staticClass: "checkbox-success",
                          attrs: { variant: "success" },
                        },
                        [_vm._v("Success")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-checkbox",
                        {
                          staticClass: "checkbox-info",
                          attrs: { variant: "info" },
                        },
                        [_vm._v("Info")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-checkbox",
                        {
                          staticClass: "checkbox-warning",
                          attrs: { variant: "warning" },
                        },
                        [_vm._v("Warning")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-checkbox",
                        {
                          staticClass: "checkbox-danger",
                          attrs: { variant: "danger" },
                        },
                        [_vm._v("Danger")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-checkbox",
                        {
                          staticClass: "checkbox-secondary",
                          attrs: { variant: "secondary" },
                        },
                        [_vm._v("Secondary")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-checkbox",
                        {
                          staticClass: "checkbox-dark",
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
                                        '<b-checkbox variant="default" class="checkbox-default">Default</b-checkbox>\n<b-checkbox variant="primary" class="checkbox-primary" :checked="true">Primary</b-checkbox>\n<b-checkbox variant="success" class="checkbox-success">Success</b-checkbox>\n<b-checkbox variant="info" class="checkbox-info">Info</b-checkbox>\n<b-checkbox variant="warning" class="checkbox-warning">Warning</b-checkbox>\n<b-checkbox variant="danger" class="checkbox-danger">Danger</b-checkbox>\n<b-checkbox variant="secondary" class="checkbox-secondary">Secondary</b-checkbox>\n<b-checkbox variant="dark" class="checkbox-dark">Dark</b-checkbox>\n'
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
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-xl-12 col-12 layout-spacing" }, [
                _c("div", { staticClass: "statbox panel box box-shadow" }, [
                  _vm._m(3),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "panel-body" },
                    [
                      _vm._m(4),
                      _vm._v(" "),
                      _c(
                        "b-checkbox",
                        {
                          staticClass: "checkbox-default rounded",
                          attrs: { variant: "default" },
                        },
                        [_vm._v("Default")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-checkbox",
                        {
                          staticClass: "checkbox-primary rounded",
                          attrs: { variant: "primary", checked: true },
                        },
                        [_vm._v("Primary")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-checkbox",
                        {
                          staticClass: "checkbox-success rounded",
                          attrs: { variant: "success" },
                        },
                        [_vm._v("Success")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-checkbox",
                        {
                          staticClass: "checkbox-info rounded",
                          attrs: { variant: "info" },
                        },
                        [_vm._v("Info")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-checkbox",
                        {
                          staticClass: "checkbox-warning rounded",
                          attrs: { variant: "warning" },
                        },
                        [_vm._v("Warning")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-checkbox",
                        {
                          staticClass: "checkbox-danger rounded",
                          attrs: { variant: "danger" },
                        },
                        [_vm._v("Danger")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-checkbox",
                        {
                          staticClass: "checkbox-secondary rounded",
                          attrs: { variant: "secondary" },
                        },
                        [_vm._v("Secondary")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-checkbox",
                        {
                          staticClass: "checkbox-dark rounded",
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
                                        '<b-checkbox variant="default" class="checkbox-default rounded">Default</b-checkbox>\n<b-checkbox variant="primary" class="checkbox-primary rounded" :checked="true">Primary</b-checkbox>\n<b-checkbox variant="success" class="checkbox-success rounded">Success</b-checkbox>\n<b-checkbox variant="info" class="checkbox-info rounded">Info</b-checkbox>\n<b-checkbox variant="warning" class="checkbox-warning rounded">Warning</b-checkbox>\n<b-checkbox variant="danger" class="checkbox-danger rounded">Danger</b-checkbox>\n<b-checkbox variant="secondary" class="checkbox-secondary rounded">Secondary</b-checkbox>\n<b-checkbox variant="dark" class="checkbox-dark rounded">Dark</b-checkbox>\n'
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
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-xl-12 col-12 layout-spacing" }, [
                _c("div", { staticClass: "statbox panel box box-shadow" }, [
                  _vm._m(5),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "panel-body" },
                    [
                      _vm._m(6),
                      _vm._v(" "),
                      _c(
                        "b-checkbox",
                        {
                          staticClass: "checkbox-outline-default",
                          attrs: { variant: "default" },
                        },
                        [_vm._v("Default")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-checkbox",
                        {
                          staticClass: "checkbox-outline-primary",
                          attrs: { variant: "primary", checked: true },
                        },
                        [_vm._v("Primary")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-checkbox",
                        {
                          staticClass: "checkbox-outline-success",
                          attrs: { variant: "success" },
                        },
                        [_vm._v("Success")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-checkbox",
                        {
                          staticClass: "checkbox-outline-info",
                          attrs: { variant: "info" },
                        },
                        [_vm._v("Info")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-checkbox",
                        {
                          staticClass: "checkbox-outline-warning",
                          attrs: { variant: "warning" },
                        },
                        [_vm._v("Warning")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-checkbox",
                        {
                          staticClass: "checkbox-outline-danger",
                          attrs: { variant: "danger" },
                        },
                        [_vm._v("Danger")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-checkbox",
                        {
                          staticClass: "checkbox-outline-secondary",
                          attrs: { variant: "secondary" },
                        },
                        [_vm._v("Secondary")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-checkbox",
                        {
                          staticClass: "checkbox-outline-dark",
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
                                        '<b-checkbox variant="default" class="checkbox-outline-default">Default</b-checkbox>\n<b-checkbox variant="primary" class="checkbox-outline-primary" :checked="true">Primary</b-checkbox>\n<b-checkbox variant="success" class="checkbox-outline-success">Success</b-checkbox>\n<b-checkbox variant="info" class="checkbox-outline-info">Info</b-checkbox>\n<b-checkbox variant="warning" class="checkbox-outline-warning">Warning</b-checkbox>\n<b-checkbox variant="danger" class="checkbox-outline-danger">Danger</b-checkbox>\n<b-checkbox variant="secondary" class="checkbox-outline-secondary">Secondary</b-checkbox>\n<b-checkbox variant="dark" class="checkbox-outline-dark">Dark</b-checkbox>\n'
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
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-xl-12 col-12 layout-spacing" }, [
                _c("div", { staticClass: "statbox panel box box-shadow" }, [
                  _vm._m(7),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "panel-body" },
                    [
                      _vm._m(8),
                      _vm._v(" "),
                      _c(
                        "b-checkbox",
                        {
                          staticClass: "checkbox-outline-default rounded",
                          attrs: { variant: "default" },
                        },
                        [_vm._v("Default")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-checkbox",
                        {
                          staticClass: "checkbox-outline-primary rounded",
                          attrs: { variant: "primary", checked: true },
                        },
                        [_vm._v("Primary")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-checkbox",
                        {
                          staticClass: "checkbox-outline-success rounded",
                          attrs: { variant: "success" },
                        },
                        [_vm._v("Success")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-checkbox",
                        {
                          staticClass: "checkbox-outline-info rounded",
                          attrs: { variant: "info" },
                        },
                        [_vm._v("Info")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-checkbox",
                        {
                          staticClass: "checkbox-outline-warning rounded",
                          attrs: { variant: "warning" },
                        },
                        [_vm._v("Warning")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-checkbox",
                        {
                          staticClass: "checkbox-outline-danger rounded",
                          attrs: { variant: "danger" },
                        },
                        [_vm._v("Danger")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-checkbox",
                        {
                          staticClass: "checkbox-outline-secondary rounded",
                          attrs: { variant: "secondary" },
                        },
                        [_vm._v("Secondary")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-checkbox",
                        {
                          staticClass: "checkbox-outline-dark rounded",
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
                                        '<b-checkbox variant="default" class="checkbox-outline-default rounded">Default</b-checkbox>\n<b-checkbox variant="primary" class="checkbox-outline-primary rounded" :checked="true">Primary</b-checkbox>\n<b-checkbox variant="success" class="checkbox-outline-success rounded">Success</b-checkbox>\n<b-checkbox variant="info" class="checkbox-outline-info rounded">Info</b-checkbox>\n<b-checkbox variant="warning" class="checkbox-outline-warning rounded">Warning</b-checkbox>\n<b-checkbox variant="danger" class="checkbox-outline-danger rounded">Danger</b-checkbox>\n<b-checkbox variant="secondary" class="checkbox-outline-secondary rounded">Secondary</b-checkbox>\n<b-checkbox variant="dark" class="checkbox-outline-dark rounded">Dark</b-checkbox>\n'
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
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-xl-12 col-12 layout-spacing" }, [
                _c("div", { staticClass: "statbox panel box box-shadow" }, [
                  _vm._m(9),
                  _vm._v(" "),
                  _c("div", { staticClass: "panel-body" }, [
                    _vm._m(10),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c(
                        "div",
                        { staticClass: "col-md-6 col-6" },
                        [
                          _c(
                            "b-checkbox",
                            {
                              staticClass: "checkbox-default text-color",
                              attrs: { variant: "default" },
                            },
                            [_vm._v("Default")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-checkbox",
                            {
                              staticClass: "checkbox-primary text-color",
                              attrs: { variant: "primary", checked: true },
                            },
                            [_vm._v("Primary")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-checkbox",
                            {
                              staticClass: "checkbox-success text-color",
                              attrs: { variant: "success" },
                            },
                            [_vm._v("Success")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-checkbox",
                            {
                              staticClass: "checkbox-info text-color",
                              attrs: { variant: "info" },
                            },
                            [_vm._v("Info")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-checkbox",
                            {
                              staticClass: "checkbox-warning text-color",
                              attrs: { variant: "warning" },
                            },
                            [_vm._v("Warning")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-checkbox",
                            {
                              staticClass: "checkbox-danger text-color",
                              attrs: { variant: "danger" },
                            },
                            [_vm._v("Danger")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-checkbox",
                            {
                              staticClass: "checkbox-secondary text-color",
                              attrs: { variant: "secondary" },
                            },
                            [_vm._v("Secondary")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-checkbox",
                            {
                              staticClass: "checkbox-dark text-color",
                              attrs: { variant: "dark" },
                            },
                            [_vm._v("Dark")]
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-md-6 col-6" },
                        [
                          _c(
                            "b-checkbox",
                            {
                              staticClass:
                                "checkbox-outline-default text-color",
                              attrs: { variant: "default" },
                            },
                            [_vm._v("Default")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-checkbox",
                            {
                              staticClass:
                                "checkbox-outline-primary text-color",
                              attrs: { variant: "primary", checked: true },
                            },
                            [_vm._v("Primary")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-checkbox",
                            {
                              staticClass:
                                "checkbox-outline-success text-color",
                              attrs: { variant: "success" },
                            },
                            [_vm._v("Success")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-checkbox",
                            {
                              staticClass: "checkbox-outline-info text-color",
                              attrs: { variant: "info" },
                            },
                            [_vm._v("Info")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-checkbox",
                            {
                              staticClass:
                                "checkbox-outline-warning text-color",
                              attrs: { variant: "warning" },
                            },
                            [_vm._v("Warning")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-checkbox",
                            {
                              staticClass: "checkbox-outline-danger text-color",
                              attrs: { variant: "danger" },
                            },
                            [_vm._v("Danger")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-checkbox",
                            {
                              staticClass:
                                "checkbox-outline-secondary text-color",
                              attrs: { variant: "secondary" },
                            },
                            [_vm._v("Secondary")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-checkbox",
                            {
                              staticClass: "checkbox-outline-dark text-color",
                              attrs: { variant: "dark" },
                            },
                            [_vm._v("Dark")]
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
                                      '<b-checkbox variant="default" class="checkbox-default text-color">Default</b-checkbox>\n<b-checkbox variant="primary" class="checkbox-primary text-color" :checked="true">Primary</b-checkbox>\n<b-checkbox variant="success" class="checkbox-success text-color">Success</b-checkbox>\n<b-checkbox variant="info" class="checkbox-info text-color">Info</b-checkbox>\n<b-checkbox variant="warning" class="checkbox-warning text-color">Warning</b-checkbox>\n<b-checkbox variant="danger" class="checkbox-danger text-color">Danger</b-checkbox>\n<b-checkbox variant="secondary" class="checkbox-secondary text-color">Secondary</b-checkbox>\n<b-checkbox variant="dark" class="checkbox-dark text-color">Dark</b-checkbox>\n\n<b-checkbox variant="default" class="checkbox-outline-default text-color">Default</b-checkbox>\n<b-checkbox variant="primary" class="checkbox-outline-primary text-color" :checked="true">Primary</b-checkbox>\n<b-checkbox variant="success" class="checkbox-outline-success text-color">Success</b-checkbox>\n<b-checkbox variant="info" class="checkbox-outline-info text-color">Info</b-checkbox>\n<b-checkbox variant="warning" class="checkbox-outline-warning text-color">Warning</b-checkbox>\n<b-checkbox variant="danger" class="checkbox-outline-danger text-color">Danger</b-checkbox>\n<b-checkbox variant="secondary" class="checkbox-outline-secondary text-color">Secondary</b-checkbox>\n<b-checkbox variant="dark" class="checkbox-outline-dark text-color">Dark</b-checkbox>\n'
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
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-xl-12 col-12 layout-spacing" }, [
                _c("div", { staticClass: "statbox panel box box-shadow" }, [
                  _vm._m(11),
                  _vm._v(" "),
                  _c("div", { staticClass: "panel-body" }, [
                    _vm._m(12),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c(
                        "div",
                        { staticClass: "col-md-6 col-6" },
                        [
                          _c(
                            "b-checkbox",
                            {
                              staticClass:
                                "checkbox-default text-color rounded",
                              attrs: { variant: "default" },
                            },
                            [_vm._v("Default")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-checkbox",
                            {
                              staticClass:
                                "checkbox-primary text-color rounded",
                              attrs: { variant: "primary", checked: true },
                            },
                            [_vm._v("Primary")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-checkbox",
                            {
                              staticClass:
                                "checkbox-success text-color rounded",
                              attrs: { variant: "success" },
                            },
                            [_vm._v("Success")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-checkbox",
                            {
                              staticClass: "checkbox-info text-color rounded",
                              attrs: { variant: "info" },
                            },
                            [_vm._v("Info")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-checkbox",
                            {
                              staticClass:
                                "checkbox-warning text-color rounded",
                              attrs: { variant: "warning" },
                            },
                            [_vm._v("Warning")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-checkbox",
                            {
                              staticClass: "checkbox-danger text-color rounded",
                              attrs: { variant: "danger" },
                            },
                            [_vm._v("Danger")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-checkbox",
                            {
                              staticClass:
                                "checkbox-secondary text-color rounded",
                              attrs: { variant: "secondary" },
                            },
                            [_vm._v("Secondary")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-checkbox",
                            {
                              staticClass: "checkbox-dark text-color rounded",
                              attrs: { variant: "dark" },
                            },
                            [_vm._v("Dark")]
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-md-6 col-6" },
                        [
                          _c(
                            "b-checkbox",
                            {
                              staticClass:
                                "checkbox-outline-default text-color rounded",
                              attrs: { variant: "default" },
                            },
                            [_vm._v("Default")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-checkbox",
                            {
                              staticClass:
                                "checkbox-outline-primary text-color rounded",
                              attrs: { variant: "primary", checked: true },
                            },
                            [_vm._v("Primary")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-checkbox",
                            {
                              staticClass:
                                "checkbox-outline-success text-color rounded",
                              attrs: { variant: "success" },
                            },
                            [_vm._v("Success")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-checkbox",
                            {
                              staticClass:
                                "checkbox-outline-info text-color rounded",
                              attrs: { variant: "info" },
                            },
                            [_vm._v("Info")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-checkbox",
                            {
                              staticClass:
                                "checkbox-outline-warning text-color rounded",
                              attrs: { variant: "warning" },
                            },
                            [_vm._v("Warning")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-checkbox",
                            {
                              staticClass:
                                "checkbox-outline-danger text-color rounded",
                              attrs: { variant: "danger" },
                            },
                            [_vm._v("Danger")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-checkbox",
                            {
                              staticClass:
                                "checkbox-outline-secondary text-color rounded",
                              attrs: { variant: "secondary" },
                            },
                            [_vm._v("Secondary")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-checkbox",
                            {
                              staticClass:
                                "checkbox-outline-dark text-color rounded",
                              attrs: { variant: "dark" },
                            },
                            [_vm._v("Dark")]
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
                                return _vm.toggleCode("code6")
                              },
                            },
                          },
                          [_c("span", [_vm._v("Code")])]
                        ),
                        _vm._v(" "),
                        _vm.code_arr.includes("code6")
                          ? _c(
                              "div",
                              { staticClass: "code-section text-left" },
                              [
                                _c("highlight", [
                                  _c("pre", [
                                    _vm._v(
                                      '<b-checkbox variant="default" class="checkbox-default text-color rounded">Default</b-checkbox>\n<b-checkbox variant="primary" class="checkbox-primary text-color rounded" :checked="true">Primary</b-checkbox>\n<b-checkbox variant="success" class="checkbox-success text-color rounded">Success</b-checkbox>\n<b-checkbox variant="info" class="checkbox-info text-color rounded">Info</b-checkbox>\n<b-checkbox variant="warning" class="checkbox-warning text-color rounded">Warning</b-checkbox>\n<b-checkbox variant="danger" class="checkbox-danger text-color rounded">Danger</b-checkbox>\n<b-checkbox variant="secondary" class="checkbox-secondary text-color rounded">Secondary</b-checkbox>\n<b-checkbox variant="dark" class="checkbox-dark text-color rounded">Dark</b-checkbox>\n\n<b-checkbox variant="default" class="checkbox-outline-default text-color rounded">Default</b-checkbox>\n<b-checkbox variant="primary" class="checkbox-outline-primary text-color rounded" :checked="true">Primary</b-checkbox>\n<b-checkbox variant="success" class="checkbox-outline-success text-color rounded">Success</b-checkbox>\n<b-checkbox variant="info" class="checkbox-outline-info text-color rounded">Info</b-checkbox>\n<b-checkbox variant="warning" class="checkbox-outline-warning text-color rounded">Warning</b-checkbox>\n<b-checkbox variant="danger" class="checkbox-outline-danger text-color rounded">Danger</b-checkbox>\n<b-checkbox variant="secondary" class="checkbox-outline-secondary text-color rounded">Secondary</b-checkbox>\n<b-checkbox variant="dark" class="checkbox-outline-dark text-color rounded">Dark</b-checkbox>\n'
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
              ]),
            ]),
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
                        _c("path", {
                          attrs: { d: "M13.73 21a2 2 0 0 1-3.46 0" },
                        }),
                      ]
                    ),
                    _vm._v("\n                                Documentation: "),
                    _c(
                      "a",
                      {
                        staticClass: "text-info",
                        attrs: {
                          target: "_blank",
                          href: "https://bootstrap-vue.org/docs/components/form-radio",
                        },
                      },
                      [
                        _vm._v(
                          "\n                                    https://bootstrap-vue.org/docs/components/form-radio\n                                "
                        ),
                      ]
                    ),
                  ]
                ),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row layout-top-spacing" }, [
              _vm._m(13),
              _vm._v(" "),
              _c("div", { staticClass: "col-xl-12 col-12 layout-spacing" }, [
                _c("div", { staticClass: "statbox panel box box-shadow" }, [
                  _vm._m(14),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "panel-body" },
                    [
                      _vm._m(15),
                      _vm._v(" "),
                      _c(
                        "b-radio",
                        {
                          staticClass: "radio-default",
                          attrs: { name: "custom-radio-1", value: "radio-1" },
                          model: {
                            value: _vm.radio_1,
                            callback: function ($$v) {
                              _vm.radio_1 = $$v
                            },
                            expression: "radio_1",
                          },
                        },
                        [_vm._v("Default")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-radio",
                        {
                          staticClass: "radio-primary",
                          attrs: { name: "custom-radio-1", value: "radio-2" },
                          model: {
                            value: _vm.radio_1,
                            callback: function ($$v) {
                              _vm.radio_1 = $$v
                            },
                            expression: "radio_1",
                          },
                        },
                        [_vm._v("Primary")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-radio",
                        {
                          staticClass: "radio-success",
                          attrs: { name: "custom-radio-1", value: "radio-3" },
                          model: {
                            value: _vm.radio_1,
                            callback: function ($$v) {
                              _vm.radio_1 = $$v
                            },
                            expression: "radio_1",
                          },
                        },
                        [_vm._v("Success")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-radio",
                        {
                          staticClass: "radio-info",
                          attrs: { name: "custom-radio-1", value: "radio-4" },
                          model: {
                            value: _vm.radio_1,
                            callback: function ($$v) {
                              _vm.radio_1 = $$v
                            },
                            expression: "radio_1",
                          },
                        },
                        [_vm._v("Info")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-radio",
                        {
                          staticClass: "radio-warning",
                          attrs: { name: "custom-radio-1", value: "radio-5" },
                          model: {
                            value: _vm.radio_1,
                            callback: function ($$v) {
                              _vm.radio_1 = $$v
                            },
                            expression: "radio_1",
                          },
                        },
                        [_vm._v("Warning")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-radio",
                        {
                          staticClass: "radio-danger",
                          attrs: { name: "custom-radio-1", value: "radio-6" },
                          model: {
                            value: _vm.radio_1,
                            callback: function ($$v) {
                              _vm.radio_1 = $$v
                            },
                            expression: "radio_1",
                          },
                        },
                        [_vm._v("Danger")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-radio",
                        {
                          staticClass: "radio-secondary",
                          attrs: { name: "custom-radio-1", value: "radio-7" },
                          model: {
                            value: _vm.radio_1,
                            callback: function ($$v) {
                              _vm.radio_1 = $$v
                            },
                            expression: "radio_1",
                          },
                        },
                        [_vm._v("Secondary")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-radio",
                        {
                          staticClass: "radio-dark",
                          attrs: { name: "custom-radio-1", value: "radio-8" },
                          model: {
                            value: _vm.radio_1,
                            callback: function ($$v) {
                              _vm.radio_1 = $$v
                            },
                            expression: "radio_1",
                          },
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
                                  return _vm.toggleCode("code7")
                                },
                              },
                            },
                            [_c("span", [_vm._v("Code")])]
                          ),
                          _vm._v(" "),
                          _vm.code_arr.includes("code7")
                            ? _c(
                                "div",
                                { staticClass: "code-section text-left" },
                                [
                                  _c("highlight", [
                                    _c("pre", [
                                      _vm._v(
                                        '<b-radio v-model="radio_1" class="radio-default" name="custom-radio-1" value="radio-1">Default</b-radio>\n<b-radio v-model="radio_1" class="radio-primary" name="custom-radio-1"  value="radio-2">Primary</b-radio>\n<b-radio v-model="radio_1" class="radio-success" name="custom-radio-1" value="radio-3">Success</b-radio>\n<b-radio v-model="radio_1" class="radio-info" name="custom-radio-1" value="radio-4">Info</b-radio>\n<b-radio v-model="radio_1" class="radio-warning" name="custom-radio-1" value="radio-5">Warning</b-radio>\n<b-radio v-model="radio_1" class="radio-danger" name="custom-radio-1" value="radio-6">Danger</b-radio>\n<b-radio v-model="radio_1" class="radio-secondary" name="custom-radio-1" value="radio-7">Secondary</b-radio>\n<b-radio v-model="radio_1" class="radio-dark" name="custom-radio-1" value="radio-8">Dark</b-radio>\n'
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
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-xl-12 col-12 layout-spacing" }, [
                _c("div", { staticClass: "statbox panel box box-shadow" }, [
                  _vm._m(16),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "panel-body" },
                    [
                      _vm._m(17),
                      _vm._v(" "),
                      _c(
                        "b-radio",
                        {
                          staticClass: "radio-classic radio-default",
                          attrs: { name: "custom-radio-2", value: "radio-1" },
                          model: {
                            value: _vm.radio_2,
                            callback: function ($$v) {
                              _vm.radio_2 = $$v
                            },
                            expression: "radio_2",
                          },
                        },
                        [_vm._v("Default")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-radio",
                        {
                          staticClass: "radio-classic radio-primary",
                          attrs: { name: "custom-radio-2", value: "radio-2" },
                          model: {
                            value: _vm.radio_2,
                            callback: function ($$v) {
                              _vm.radio_2 = $$v
                            },
                            expression: "radio_2",
                          },
                        },
                        [_vm._v("Primary")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-radio",
                        {
                          staticClass: "radio-classic radio-success",
                          attrs: { name: "custom-radio-2", value: "radio-3" },
                          model: {
                            value: _vm.radio_2,
                            callback: function ($$v) {
                              _vm.radio_2 = $$v
                            },
                            expression: "radio_2",
                          },
                        },
                        [_vm._v("Success")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-radio",
                        {
                          staticClass: "radio-classic radio-info",
                          attrs: { name: "custom-radio-2", value: "radio-4" },
                          model: {
                            value: _vm.radio_2,
                            callback: function ($$v) {
                              _vm.radio_2 = $$v
                            },
                            expression: "radio_2",
                          },
                        },
                        [_vm._v("Info")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-radio",
                        {
                          staticClass: "radio-classic radio-warning",
                          attrs: { name: "custom-radio-2", value: "radio-5" },
                          model: {
                            value: _vm.radio_2,
                            callback: function ($$v) {
                              _vm.radio_2 = $$v
                            },
                            expression: "radio_2",
                          },
                        },
                        [_vm._v("Warning")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-radio",
                        {
                          staticClass: "radio-classic radio-danger",
                          attrs: { name: "custom-radio-2", value: "radio-6" },
                          model: {
                            value: _vm.radio_2,
                            callback: function ($$v) {
                              _vm.radio_2 = $$v
                            },
                            expression: "radio_2",
                          },
                        },
                        [_vm._v("Danger")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-radio",
                        {
                          staticClass: "radio-classic radio-secondary",
                          attrs: { name: "custom-radio-2", value: "radio-7" },
                          model: {
                            value: _vm.radio_2,
                            callback: function ($$v) {
                              _vm.radio_2 = $$v
                            },
                            expression: "radio_2",
                          },
                        },
                        [_vm._v("Secondary")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-radio",
                        {
                          staticClass: "radio-classic radio-dark",
                          attrs: { name: "custom-radio-2", value: "radio-8" },
                          model: {
                            value: _vm.radio_2,
                            callback: function ($$v) {
                              _vm.radio_2 = $$v
                            },
                            expression: "radio_2",
                          },
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
                                  return _vm.toggleCode("code8")
                                },
                              },
                            },
                            [_c("span", [_vm._v("Code")])]
                          ),
                          _vm._v(" "),
                          _vm.code_arr.includes("code8")
                            ? _c(
                                "div",
                                { staticClass: "code-section text-left" },
                                [
                                  _c("highlight", [
                                    _c("pre", [
                                      _vm._v(
                                        '<b-radio v-model="radio_2" class="radio-classic radio-default" name="custom-radio-2" value="radio-1">Default</b-radio>\n<b-radio v-model="radio_2" class="radio-classic radio-primary" name="custom-radio-2" value="radio-2">Primary</b-radio>\n<b-radio v-model="radio_2" class="radio-classic radio-success" name="custom-radio-2" value="radio-3">Success</b-radio>\n<b-radio v-model="radio_2" class="radio-classic radio-info" name="custom-radio-2" value="radio-4">Info</b-radio>\n<b-radio v-model="radio_2" class="radio-classic radio-warning" name="custom-radio-2" value="radio-5">Warning</b-radio>\n<b-radio v-model="radio_2" class="radio-classic radio-danger" name="custom-radio-2" value="radio-6">Danger</b-radio>\n<b-radio v-model="radio_2" class="radio-classic radio-secondary" name="custom-radio-2" value="radio-7">Secondary</b-radio>\n<b-radio v-model="radio_2" class="radio-classic radio-dark" name="custom-radio-2" value="radio-8">Dark</b-radio>\n'
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
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-xl-12 col-12 layout-spacing" }, [
                _c("div", { staticClass: "statbox panel box box-shadow" }, [
                  _vm._m(18),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "panel-body" },
                    [
                      _vm._m(19),
                      _vm._v(" "),
                      _c(
                        "b-radio",
                        {
                          staticClass: "square-radio radio-default",
                          attrs: { name: "custom-radio-3", value: "radio-1" },
                          model: {
                            value: _vm.radio_3,
                            callback: function ($$v) {
                              _vm.radio_3 = $$v
                            },
                            expression: "radio_3",
                          },
                        },
                        [_vm._v("Default")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-radio",
                        {
                          staticClass: "square-radio radio-primary",
                          attrs: { name: "custom-radio-3", value: "radio-2" },
                          model: {
                            value: _vm.radio_3,
                            callback: function ($$v) {
                              _vm.radio_3 = $$v
                            },
                            expression: "radio_3",
                          },
                        },
                        [_vm._v("Primary")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-radio",
                        {
                          staticClass: "square-radio radio-success",
                          attrs: { name: "custom-radio-3", value: "radio-3" },
                          model: {
                            value: _vm.radio_3,
                            callback: function ($$v) {
                              _vm.radio_3 = $$v
                            },
                            expression: "radio_3",
                          },
                        },
                        [_vm._v("Success")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-radio",
                        {
                          staticClass: "square-radio radio-info",
                          attrs: { name: "custom-radio-3", value: "radio-4" },
                          model: {
                            value: _vm.radio_3,
                            callback: function ($$v) {
                              _vm.radio_3 = $$v
                            },
                            expression: "radio_3",
                          },
                        },
                        [_vm._v("Info")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-radio",
                        {
                          staticClass: "square-radio radio-warning",
                          attrs: { name: "custom-radio-3", value: "radio-5" },
                          model: {
                            value: _vm.radio_3,
                            callback: function ($$v) {
                              _vm.radio_3 = $$v
                            },
                            expression: "radio_3",
                          },
                        },
                        [_vm._v("Warning")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-radio",
                        {
                          staticClass: "square-radio radio-danger",
                          attrs: { name: "custom-radio-3", value: "radio-6" },
                          model: {
                            value: _vm.radio_3,
                            callback: function ($$v) {
                              _vm.radio_3 = $$v
                            },
                            expression: "radio_3",
                          },
                        },
                        [_vm._v("Danger")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-radio",
                        {
                          staticClass: "square-radio radio-secondary",
                          attrs: { name: "custom-radio-3", value: "radio-7" },
                          model: {
                            value: _vm.radio_3,
                            callback: function ($$v) {
                              _vm.radio_3 = $$v
                            },
                            expression: "radio_3",
                          },
                        },
                        [_vm._v("Secondary")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-radio",
                        {
                          staticClass: "square-radio radio-dark",
                          attrs: { name: "custom-radio-3", value: "radio-8" },
                          model: {
                            value: _vm.radio_3,
                            callback: function ($$v) {
                              _vm.radio_3 = $$v
                            },
                            expression: "radio_3",
                          },
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
                                  return _vm.toggleCode("code9")
                                },
                              },
                            },
                            [_c("span", [_vm._v("Code")])]
                          ),
                          _vm._v(" "),
                          _vm.code_arr.includes("code9")
                            ? _c(
                                "div",
                                { staticClass: "code-section text-left" },
                                [
                                  _c("highlight", [
                                    _c("pre", [
                                      _vm._v(
                                        '<b-radio v-model="radio_3" class="square-radio radio-default" name="custom-radio-3" value="radio-1">Default</b-radio>\n<b-radio v-model="radio_3" class="square-radio radio-primary" name="custom-radio-3" value="radio-2">Primary</b-radio>\n<b-radio v-model="radio_3" class="square-radio radio-success" name="custom-radio-3" value="radio-3">Success</b-radio>\n<b-radio v-model="radio_3" class="square-radio radio-info" name="custom-radio-3" value="radio-4">Info</b-radio>\n<b-radio v-model="radio_3" class="square-radio radio-warning" name="custom-radio-3" value="radio-5">Warning</b-radio>\n<b-radio v-model="radio_3" class="square-radio radio-danger" name="custom-radio-3" value="radio-6">Danger</b-radio>\n<b-radio v-model="radio_3" class="square-radio radio-secondary" name="custom-radio-3" value="radio-7">Secondary</b-radio>\n<b-radio v-model="radio_3" class="square-radio radio-dark" name="custom-radio-3" value="radio-8">Dark</b-radio>\n'
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
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-xl-12 col-12 layout-spacing" }, [
                _c("div", { staticClass: "statbox panel box box-shadow" }, [
                  _vm._m(20),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "panel-body" },
                    [
                      _vm._m(21),
                      _vm._v(" "),
                      _c(
                        "b-radio",
                        {
                          staticClass: "text-color radio-default",
                          attrs: { name: "custom-radio-4", value: "radio-1" },
                          model: {
                            value: _vm.radio_4,
                            callback: function ($$v) {
                              _vm.radio_4 = $$v
                            },
                            expression: "radio_4",
                          },
                        },
                        [_vm._v("Default")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-radio",
                        {
                          staticClass: "text-color radio-primary",
                          attrs: { name: "custom-radio-4", value: "radio-2" },
                          model: {
                            value: _vm.radio_4,
                            callback: function ($$v) {
                              _vm.radio_4 = $$v
                            },
                            expression: "radio_4",
                          },
                        },
                        [_vm._v("Primary")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-radio",
                        {
                          staticClass: "text-color radio-success",
                          attrs: { name: "custom-radio-4", value: "radio-3" },
                          model: {
                            value: _vm.radio_4,
                            callback: function ($$v) {
                              _vm.radio_4 = $$v
                            },
                            expression: "radio_4",
                          },
                        },
                        [_vm._v("Success")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-radio",
                        {
                          staticClass: "text-color radio-info",
                          attrs: { name: "custom-radio-4", value: "radio-4" },
                          model: {
                            value: _vm.radio_4,
                            callback: function ($$v) {
                              _vm.radio_4 = $$v
                            },
                            expression: "radio_4",
                          },
                        },
                        [_vm._v("Info")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-radio",
                        {
                          staticClass: "text-color radio-warning",
                          attrs: { name: "custom-radio-4", value: "radio-5" },
                          model: {
                            value: _vm.radio_4,
                            callback: function ($$v) {
                              _vm.radio_4 = $$v
                            },
                            expression: "radio_4",
                          },
                        },
                        [_vm._v("Warning")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-radio",
                        {
                          staticClass: "text-color radio-danger",
                          attrs: { name: "custom-radio-4", value: "radio-6" },
                          model: {
                            value: _vm.radio_4,
                            callback: function ($$v) {
                              _vm.radio_4 = $$v
                            },
                            expression: "radio_4",
                          },
                        },
                        [_vm._v("Danger")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-radio",
                        {
                          staticClass: "text-color radio-secondary",
                          attrs: { name: "custom-radio-4", value: "radio-7" },
                          model: {
                            value: _vm.radio_4,
                            callback: function ($$v) {
                              _vm.radio_4 = $$v
                            },
                            expression: "radio_4",
                          },
                        },
                        [_vm._v("Secondary")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-radio",
                        {
                          staticClass: "text-color radio-dark",
                          attrs: { name: "custom-radio-4", value: "radio-8" },
                          model: {
                            value: _vm.radio_4,
                            callback: function ($$v) {
                              _vm.radio_4 = $$v
                            },
                            expression: "radio_4",
                          },
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
                                  return _vm.toggleCode("code10")
                                },
                              },
                            },
                            [_c("span", [_vm._v("Code")])]
                          ),
                          _vm._v(" "),
                          _vm.code_arr.includes("code10")
                            ? _c(
                                "div",
                                { staticClass: "code-section text-left" },
                                [
                                  _c("highlight", [
                                    _c("pre", [
                                      _vm._v(
                                        '<b-radio v-model="radio_4" class="text-color radio-default" name="custom-radio-4" value="radio-1">Default</b-radio>\n<b-radio v-model="radio_4" class="text-color radio-primary" name="custom-radio-4" value="radio-2">Primary</b-radio>\n<b-radio v-model="radio_4" class="text-color radio-success" name="custom-radio-4" value="radio-3">Success</b-radio>\n<b-radio v-model="radio_4" class="text-color radio-info" name="custom-radio-4" value="radio-4">Info</b-radio>\n<b-radio v-model="radio_4" class="text-color radio-warning" name="custom-radio-4" value="radio-5">Warning</b-radio>\n<b-radio v-model="radio_4" class="text-color radio-danger" name="custom-radio-4" value="radio-6">Danger</b-radio>\n<b-radio v-model="radio_4" class="text-color radio-secondary" name="custom-radio-4" value="radio-7">Secondary</b-radio>\n<b-radio v-model="radio_4" class="text-color radio-dark" name="custom-radio-4" value="radio-8">Dark</b-radio>\n'
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
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-xl-12 col-12 layout-spacing" }, [
                _c("div", { staticClass: "statbox panel box box-shadow" }, [
                  _vm._m(22),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "panel-body" },
                    [
                      _vm._m(23),
                      _vm._v(" "),
                      _c(
                        "b-radio",
                        {
                          staticClass: "radio-classic text-color radio-default",
                          attrs: { name: "custom-radio-5", value: "radio-1" },
                          model: {
                            value: _vm.radio_5,
                            callback: function ($$v) {
                              _vm.radio_5 = $$v
                            },
                            expression: "radio_5",
                          },
                        },
                        [_vm._v("Default")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-radio",
                        {
                          staticClass: "radio-classic text-color radio-primary",
                          attrs: { name: "custom-radio-5", value: "radio-2" },
                          model: {
                            value: _vm.radio_5,
                            callback: function ($$v) {
                              _vm.radio_5 = $$v
                            },
                            expression: "radio_5",
                          },
                        },
                        [_vm._v("Primary")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-radio",
                        {
                          staticClass: "radio-classic text-color radio-success",
                          attrs: { name: "custom-radio-5", value: "radio-3" },
                          model: {
                            value: _vm.radio_5,
                            callback: function ($$v) {
                              _vm.radio_5 = $$v
                            },
                            expression: "radio_5",
                          },
                        },
                        [_vm._v("Success")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-radio",
                        {
                          staticClass: "radio-classic text-color radio-info",
                          attrs: { name: "custom-radio-5", value: "radio-4" },
                          model: {
                            value: _vm.radio_5,
                            callback: function ($$v) {
                              _vm.radio_5 = $$v
                            },
                            expression: "radio_5",
                          },
                        },
                        [_vm._v("Info")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-radio",
                        {
                          staticClass: "radio-classic text-color radio-warning",
                          attrs: { name: "custom-radio-5", value: "radio-5" },
                          model: {
                            value: _vm.radio_5,
                            callback: function ($$v) {
                              _vm.radio_5 = $$v
                            },
                            expression: "radio_5",
                          },
                        },
                        [_vm._v("Warning")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-radio",
                        {
                          staticClass: "radio-classic text-color radio-danger",
                          attrs: { name: "custom-radio-5", value: "radio-6" },
                          model: {
                            value: _vm.radio_5,
                            callback: function ($$v) {
                              _vm.radio_5 = $$v
                            },
                            expression: "radio_5",
                          },
                        },
                        [_vm._v("Danger")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-radio",
                        {
                          staticClass:
                            "radio-classic text-color radio-secondary",
                          attrs: { name: "custom-radio-5", value: "radio-7" },
                          model: {
                            value: _vm.radio_5,
                            callback: function ($$v) {
                              _vm.radio_5 = $$v
                            },
                            expression: "radio_5",
                          },
                        },
                        [_vm._v("Secondary")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-radio",
                        {
                          staticClass: "radio-classic text-color radio-dark",
                          attrs: { name: "custom-radio-5", value: "radio-8" },
                          model: {
                            value: _vm.radio_5,
                            callback: function ($$v) {
                              _vm.radio_5 = $$v
                            },
                            expression: "radio_5",
                          },
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
                                  return _vm.toggleCode("code11")
                                },
                              },
                            },
                            [_c("span", [_vm._v("Code")])]
                          ),
                          _vm._v(" "),
                          _vm.code_arr.includes("code11")
                            ? _c(
                                "div",
                                { staticClass: "code-section text-left" },
                                [
                                  _c("highlight", [
                                    _c("pre", [
                                      _vm._v(
                                        '<b-radio v-model="radio_5" class="radio-classic text-color radio-default" name="custom-radio-5" value="radio-1">Default</b-radio>\n<b-radio v-model="radio_5" class="radio-classic text-color radio-primary" name="custom-radio-5" value="radio-2">Primary</b-radio>\n<b-radio v-model="radio_5" class="radio-classic text-color radio-success" name="custom-radio-5" value="radio-3">Success</b-radio>\n<b-radio v-model="radio_5" class="radio-classic text-color radio-info" name="custom-radio-5" value="radio-4">Info</b-radio>\n<b-radio v-model="radio_5" class="radio-classic text-color radio-warning" name="custom-radio-5" value="radio-5">Warning</b-radio>\n<b-radio v-model="radio_5" class="radio-classic text-color radio-danger" name="custom-radio-5" value="radio-6">Danger</b-radio>\n<b-radio v-model="radio_5" class="radio-classic text-color radio-secondary" name="custom-radio-5" value="radio-7">Secondary</b-radio>\n<b-radio v-model="radio_5" class="radio-classic text-color radio-dark" name="custom-radio-5" value="radio-8">Dark</b-radio>\n'
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
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-xl-12 col-12 layout-spacing" }, [
                _c("div", { staticClass: "statbox panel box box-shadow" }, [
                  _vm._m(24),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "panel-body" },
                    [
                      _vm._m(25),
                      _vm._v(" "),
                      _c(
                        "b-radio",
                        {
                          staticClass: "square-radio text-color radio-default",
                          attrs: { name: "custom-radio-6", value: "radio-1" },
                          model: {
                            value: _vm.radio_6,
                            callback: function ($$v) {
                              _vm.radio_6 = $$v
                            },
                            expression: "radio_6",
                          },
                        },
                        [_vm._v("Default")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-radio",
                        {
                          staticClass: "square-radio text-color radio-primary",
                          attrs: { name: "custom-radio-6", value: "radio-2" },
                          model: {
                            value: _vm.radio_6,
                            callback: function ($$v) {
                              _vm.radio_6 = $$v
                            },
                            expression: "radio_6",
                          },
                        },
                        [_vm._v("Primary")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-radio",
                        {
                          staticClass: "square-radio text-color radio-success",
                          attrs: { name: "custom-radio-6", value: "radio-3" },
                          model: {
                            value: _vm.radio_6,
                            callback: function ($$v) {
                              _vm.radio_6 = $$v
                            },
                            expression: "radio_6",
                          },
                        },
                        [_vm._v("Success")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-radio",
                        {
                          staticClass: "square-radio text-color radio-info",
                          attrs: { name: "custom-radio-6", value: "radio-4" },
                          model: {
                            value: _vm.radio_6,
                            callback: function ($$v) {
                              _vm.radio_6 = $$v
                            },
                            expression: "radio_6",
                          },
                        },
                        [_vm._v("Info")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-radio",
                        {
                          staticClass: "square-radio text-color radio-warning",
                          attrs: { name: "custom-radio-6", value: "radio-5" },
                          model: {
                            value: _vm.radio_6,
                            callback: function ($$v) {
                              _vm.radio_6 = $$v
                            },
                            expression: "radio_6",
                          },
                        },
                        [_vm._v("Warning")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-radio",
                        {
                          staticClass: "square-radio text-color radio-danger",
                          attrs: { name: "custom-radio-6", value: "radio-6" },
                          model: {
                            value: _vm.radio_6,
                            callback: function ($$v) {
                              _vm.radio_6 = $$v
                            },
                            expression: "radio_6",
                          },
                        },
                        [_vm._v("Danger")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-radio",
                        {
                          staticClass:
                            "square-radio text-color radio-secondary",
                          attrs: { name: "custom-radio-6", value: "radio-7" },
                          model: {
                            value: _vm.radio_6,
                            callback: function ($$v) {
                              _vm.radio_6 = $$v
                            },
                            expression: "radio_6",
                          },
                        },
                        [_vm._v("Secondary")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-radio",
                        {
                          staticClass: "square-radio text-color radio-dark",
                          attrs: { name: "custom-radio-6", value: "radio-8" },
                          model: {
                            value: _vm.radio_6,
                            callback: function ($$v) {
                              _vm.radio_6 = $$v
                            },
                            expression: "radio_6",
                          },
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
                                  return _vm.toggleCode("code12")
                                },
                              },
                            },
                            [_c("span", [_vm._v("Code")])]
                          ),
                          _vm._v(" "),
                          _vm.code_arr.includes("code12")
                            ? _c(
                                "div",
                                { staticClass: "code-section text-left" },
                                [
                                  _c("highlight", [
                                    _c("pre", [
                                      _vm._v(
                                        '<b-radio v-model="radio_6" class="square-radio text-color radio-default" name="custom-radio-6" value="radio-1">Default</b-radio>\n<b-radio v-model="radio_6" class="square-radio text-color radio-primary" name="custom-radio-6" value="radio-2">Primary</b-radio>\n<b-radio v-model="radio_6" class="square-radio text-color radio-success" name="custom-radio-6" value="radio-3">Success</b-radio>\n<b-radio v-model="radio_6" class="square-radio text-color radio-info" name="custom-radio-6" value="radio-4">Info</b-radio>\n<b-radio v-model="radio_6" class="square-radio text-color radio-warning" name="custom-radio-6" value="radio-5">Warning</b-radio>\n<b-radio v-model="radio_6" class="square-radio text-color radio-danger" name="custom-radio-6" value="radio-6">Danger</b-radio>\n<b-radio v-model="radio_6" class="square-radio text-color radio-secondary" name="custom-radio-6" value="radio-7">Secondary</b-radio>\n<b-radio v-model="radio_6" class="square-radio text-color radio-dark" name="custom-radio-6" value="radio-8">Dark</b-radio>\n'
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
              ]),
            ]),
          ]),
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
    return _c("div", { staticClass: "col-lg-12", attrs: { id: "checkbox" } }, [
      _c("div", { staticClass: "seperator-header" }, [
        _c("h4", {}, [_vm._v("Checkbox")]),
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
          _c("h4", [_vm._v("Default")]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "mb-4" }, [
      _vm._v("Use "),
      _c("code", [_vm._v(".checkbox-*")]),
      _vm._v(" class to change different colors."),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "panel-heading" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-xl-12 col-md-12 col-sm-12 col-12" }, [
          _c("h4", [_vm._v("Default Rounded")]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "mb-4" }, [
      _vm._v("Use "),
      _c("code", [_vm._v(".rounded")]),
      _vm._v(" class to create checkboxes rounded."),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "panel-heading" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-xl-12 col-md-12 col-sm-12 col-12" }, [
          _c("h4", [_vm._v("Outline")]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "mb-4" }, [
      _vm._v("Use "),
      _c("code", [_vm._v(".checkbox-outline-*")]),
      _vm._v(
        " class to create checkboxes outlined and change different colors."
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "panel-heading" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-xl-12 col-md-12 col-sm-12 col-12" }, [
          _c("h4", [_vm._v("Outline Rounded")]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "mb-4" }, [
      _vm._v("Use "),
      _c("code", [_vm._v(".rounded")]),
      _vm._v(" class to create checkboxes rounded."),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "panel-heading" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-xl-12 col-md-12 col-sm-12 col-12" }, [
          _c("h4", [_vm._v("Default Text Color")]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "mb-4" }, [
      _vm._v("Use "),
      _c("code", [_vm._v(".text-color")]),
      _vm._v(" class to make text colored as checkbox."),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "panel-heading" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-xl-12 col-md-12 col-sm-12 col-12" }, [
          _c("h4", [_vm._v("Rounded Text Color")]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "mb-4" }, [
      _vm._v("Use "),
      _c("code", [_vm._v(".text-color")]),
      _vm._v(" class to make text colored as checkbox."),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-lg-12", attrs: { id: "radio" } }, [
      _c("div", { staticClass: "seperator-header" }, [
        _c("h4", {}, [_vm._v("Radio")]),
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
          _c("h4", [_vm._v("Default")]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "mb-4" }, [
      _vm._v("Use "),
      _c("code", [_vm._v(".radio-*")]),
      _vm._v(" class to change different colors."),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "panel-heading" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-xl-12 col-md-12 col-sm-12 col-12" }, [
          _c("h4", [_vm._v("Classic")]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "mb-4" }, [
      _vm._v("Use "),
      _c("code", [_vm._v(".radio-classic")]),
      _vm._v(" class to make classic."),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "panel-heading" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-xl-12 col-md-12 col-sm-12 col-12" }, [
          _c("h4", [_vm._v("Square")]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "mb-4" }, [
      _vm._v("Use "),
      _c("code", [_vm._v(".square-radio")]),
      _vm._v(" class to make squares."),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "panel-heading" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-xl-12 col-md-12 col-sm-12 col-12" }, [
          _c("h4", [_vm._v("Default Text Color")]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "mb-4" }, [
      _vm._v("Use "),
      _c("code", [_vm._v(".text-color")]),
      _vm._v(" class to make text colored as checkbox."),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "panel-heading" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-xl-12 col-md-12 col-sm-12 col-12" }, [
          _c("h4", [_vm._v("Classic Text Color")]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "mb-4" }, [
      _vm._v("Use "),
      _c("code", [_vm._v(".radio-classic.text-color")]),
      _vm._v(" class to make text colored as checkbox.."),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "panel-heading" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-xl-12 col-md-12 col-sm-12 col-12" }, [
          _c("h4", [_vm._v("Square Text Color")]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "mb-4" }, [
      _vm._v("Use "),
      _c("code", [_vm._v(".square-radio.text-color")]),
      _vm._v(" class to make text colored as checkbox."),
    ])
  },
]
render._withStripped = true



/***/ })

}]);