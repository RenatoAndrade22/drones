"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["components-notifications"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/components/toast.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/components/toast.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  metaInfo: {
    title: 'Notifications'
  },
  components: {
    highlight: _components_plugins_highlight_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
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

/***/ "./resources/js/src/views/components/toast.vue":
/*!*****************************************************!*\
  !*** ./resources/js/src/views/components/toast.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _toast_vue_vue_type_template_id_a795e810___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toast.vue?vue&type=template&id=a795e810& */ "./resources/js/src/views/components/toast.vue?vue&type=template&id=a795e810&");
/* harmony import */ var _toast_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toast.vue?vue&type=script&lang=js& */ "./resources/js/src/views/components/toast.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _toast_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _toast_vue_vue_type_template_id_a795e810___WEBPACK_IMPORTED_MODULE_0__.render,
  _toast_vue_vue_type_template_id_a795e810___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/components/toast.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/components/toast.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/src/views/components/toast.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_toast_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./toast.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/components/toast.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_toast_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/components/toast.vue?vue&type=template&id=a795e810&":
/*!************************************************************************************!*\
  !*** ./resources/js/src/views/components/toast.vue?vue&type=template&id=a795e810& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_toast_vue_vue_type_template_id_a795e810___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_toast_vue_vue_type_template_id_a795e810___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_toast_vue_vue_type_template_id_a795e810___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./toast.vue?vue&type=template&id=a795e810& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/components/toast.vue?vue&type=template&id=a795e810&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/components/toast.vue?vue&type=template&id=a795e810&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/components/toast.vue?vue&type=template&id=a795e810& ***!
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
                      [_c("span", [_vm._v("Notifications")])]
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
                    attrs: { href: "#toastBasic" },
                  },
                  [_vm._v("Basic")]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "nav-link scrollactive-item",
                    attrs: { href: "#toastTopLeft" },
                  },
                  [_vm._v("Top Left")]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "nav-link scrollactive-item",
                    attrs: { href: "#toastTopCenter" },
                  },
                  [_vm._v("Top Center")]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "nav-link scrollactive-item",
                    attrs: { href: "#toastTopRight" },
                  },
                  [_vm._v("Top Right")]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "nav-link scrollactive-item",
                    attrs: { href: "#toastBottomLeft" },
                  },
                  [_vm._v("Bottom Left")]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "nav-link scrollactive-item",
                    attrs: { href: "#toastBottomCenter" },
                  },
                  [_vm._v("Bottom Center")]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "nav-link scrollactive-item",
                    attrs: { href: "#toastBottomRight" },
                  },
                  [_vm._v("Bottom Right")]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "nav-link scrollactive-item",
                    attrs: { href: "#toastNoAction" },
                  },
                  [_vm._v("No Action")]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "nav-link scrollactive-item",
                    attrs: { href: "#toastActionText" },
                  },
                  [_vm._v("Action Text")]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "nav-link scrollactive-item",
                    attrs: { href: "#toastTextColor" },
                  },
                  [_vm._v("Text Color")]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "nav-link scrollactive-item",
                    attrs: { href: "#toastClickCallback" },
                  },
                  [_vm._v("Click Callback")]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "nav-link scrollactive-item",
                    attrs: { href: "#toastDuration" },
                  },
                  [_vm._v("Duration")]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "nav-link scrollactive-item",
                    attrs: { href: "#toastBackgroundColor" },
                  },
                  [_vm._v("Background Color")]
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
                    _vm._v(" "),
                    _c("path", { attrs: { d: "M13.73 21a2 2 0 0 1-3.46 0" } }),
                  ]
                ),
                _vm._v(
                  "\n                        Documentation:\n                        "
                ),
                _c(
                  "a",
                  {
                    staticClass: "text-info",
                    attrs: {
                      target: "_blank",
                      href: "https://bootstrap-vue.org/docs/components/toast",
                    },
                  },
                  [
                    _vm._v(
                      "\n                            https://bootstrap-vue.org/docs/components/toast\n                        "
                    ),
                  ]
                ),
              ]
            ),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row layout-spacing layout-top-spacing" }, [
          _c(
            "div",
            {
              staticClass: "col-lg-12 col-12 layout-spacing",
              attrs: { id: "toastBasic" },
            },
            [
              _c("div", { staticClass: "statbox panel box box-shadow" }, [
                _vm._m(0),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "panel-body" },
                  [
                    _c(
                      "b-button",
                      {
                        attrs: { variant: "primary" },
                        on: {
                          click: function ($event) {
                            return _vm.$bvToast.show("basic-toast")
                          },
                        },
                      },
                      [_vm._v("Open Toast")]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticStyle: {
                          position: "absolute",
                          top: "0",
                          right: "0",
                          "z-index": "9999",
                          "margin-left": "20px",
                          "margin-right": "20px",
                        },
                      },
                      [
                        _c(
                          "b-toast",
                          {
                            staticClass: "toast-primary",
                            attrs: {
                              id: "basic-toast",
                              title: "Bootstrap",
                              static: "",
                              "auto-hide-delay": "6000",
                              "body-class": "toast-primary",
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "toast-title",
                                fn: function () {
                                  return [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "d-flex flex-grow-1 align-items-center",
                                      },
                                      [
                                        _c(
                                          "strong",
                                          { staticClass: "mr-auto" },
                                          [_vm._v("Bootstrap")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "small",
                                          { staticClass: "meta-time mr-2" },
                                          [_vm._v("just now")]
                                        ),
                                      ]
                                    ),
                                  ]
                                },
                                proxy: true,
                              },
                            ]),
                          },
                          [
                            _vm._v(
                              "\n                                    Hello, world! This is a toast message.\n                                "
                            ),
                          ]
                        ),
                      ],
                      1
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
                                      '<b-button variant="primary" @click="$bvToast.show(\'basic-toast\')">Open Toast</b-button>\n\n<div style="position: absolute; top: 0; right: 0;z-index: 9999; margin-left: 20px; margin-right: 20px;">\n    <b-toast id="basic-toast" title="Bootstrap" static auto-hide-delay="6000" class="toast-primary" body-class="toast-primary">\n        <template #toast-title>\n            <div class="d-flex flex-grow-1 align-items-center">\n                <strong class="mr-auto">Bootstrap</strong>\n                <small class="meta-time mr-2">just now</small>\n            </div>\n        </template>\n        Hello, world! This is a toast message.\n    </b-toast>\n</div>\n'
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
              staticClass: "col-lg-12 col-12 layout-spacing",
              attrs: { id: "toastTopLeft" },
            },
            [
              _c("div", { staticClass: "statbox panel box box-shadow" }, [
                _vm._m(1),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "panel-body text-center" },
                  [
                    _c(
                      "b-button",
                      {
                        attrs: { variant: "success" },
                        on: {
                          click: function ($event) {
                            return _vm.$bvToast.show("top-left-toast")
                          },
                        },
                      },
                      [_vm._v("Top Left")]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-toast",
                      {
                        attrs: {
                          id: "top-left-toast",
                          "header-class": "d-none",
                          "body-class":
                            "toast-dark d-flex justify-content-between",
                          toaster: "b-toaster-top-left",
                        },
                      },
                      [
                        _vm._v(
                          "\n                                Example notification text.\n                                "
                        ),
                        _c(
                          "a",
                          {
                            staticClass: "text-success ml-2",
                            attrs: { href: "javascript:;" },
                            on: {
                              click: function ($event) {
                                return _vm.$bvToast.hide("top-left-toast")
                              },
                            },
                          },
                          [_vm._v("DISMISS")]
                        ),
                      ]
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
                                      '<b-button variant="success" @click="$bvToast.show(\'top-left-toast\')">Top Left</b-button>\n\n<b-toast id="top-left-toast" header-class="d-none" body-class="toast-dark d-flex justify-content-between" toaster="b-toaster-top-left">\n    Example notification text.\n    <a href="javascript:;" class="text-success ml-2" @click="$bvToast.hide(\'top-left-toast\')">DISMISS</a>\n</b-toast>\n'
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
              staticClass: "col-lg-12 col-12 layout-spacing",
              attrs: { id: "toastTopCenter" },
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
                        attrs: { variant: "info" },
                        on: {
                          click: function ($event) {
                            return _vm.$bvToast.show("top-center-toast")
                          },
                        },
                      },
                      [_vm._v("Top Center")]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-toast",
                      {
                        attrs: {
                          id: "top-center-toast",
                          "header-class": "d-none",
                          "body-class":
                            "toast-dark d-flex justify-content-between",
                          toaster: "b-toaster-top-center",
                        },
                      },
                      [
                        _vm._v(
                          "\n                                Example notification text.\n                                "
                        ),
                        _c(
                          "a",
                          {
                            staticClass: "text-success ml-2",
                            attrs: { href: "javascript:;" },
                            on: {
                              click: function ($event) {
                                return _vm.$bvToast.hide("top-center-toast")
                              },
                            },
                          },
                          [_vm._v("DISMISS")]
                        ),
                      ]
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
                                      '<b-button variant="info" @click="$bvToast.show(\'top-center-toast\')">Top Center</b-button>\n\n<b-toast id="top-center-toast" header-class="d-none" body-class="toast-dark d-flex justify-content-between" toaster="b-toaster-top-center">\n    Example notification text.\n    <a href="javascript:;" class="text-success ml-2" @click="$bvToast.hide(\'top-center-toast\')">DISMISS</a>\n</b-toast>\n'
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
              staticClass: "col-lg-12 col-12 layout-spacing",
              attrs: { id: "toastTopRight" },
            },
            [
              _c("div", { staticClass: "statbox panel box box-shadow" }, [
                _vm._m(3),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "panel-body text-center" },
                  [
                    _c(
                      "b-button",
                      {
                        attrs: { variant: "danger" },
                        on: {
                          click: function ($event) {
                            return _vm.$bvToast.show("top-right-toast")
                          },
                        },
                      },
                      [_vm._v("Top Right")]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-toast",
                      {
                        attrs: {
                          id: "top-right-toast",
                          "header-class": "d-none",
                          "body-class":
                            "toast-dark d-flex justify-content-between",
                          toaster: "b-toaster-top-right",
                        },
                      },
                      [
                        _vm._v(
                          "\n                                Example notification text.\n                                "
                        ),
                        _c(
                          "a",
                          {
                            staticClass: "text-success ml-2",
                            attrs: { href: "javascript:;" },
                            on: {
                              click: function ($event) {
                                return _vm.$bvToast.hide("top-right-toast")
                              },
                            },
                          },
                          [_vm._v("DISMISS")]
                        ),
                      ]
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
                                      '<b-button variant="danger" @click="$bvToast.show(\'top-right-toast\')">Top Right</b-button>\n\n<b-toast id="top-right-toast" header-class="d-none" body-class="toast-dark d-flex justify-content-between" toaster="b-toaster-top-right">\n    Example notification text.\n    <a href="javascript:;" class="text-success ml-2" @click="$bvToast.hide(\'top-right-toast\')">DISMISS</a>\n</b-toast>\n'
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
              staticClass: "col-lg-12 col-12 layout-spacing",
              attrs: { id: "toastBottomLeft" },
            },
            [
              _c("div", { staticClass: "statbox panel box box-shadow" }, [
                _vm._m(4),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "panel-body text-center" },
                  [
                    _c(
                      "b-button",
                      {
                        attrs: { variant: "warning" },
                        on: {
                          click: function ($event) {
                            return _vm.$bvToast.show("bottom-left-toast")
                          },
                        },
                      },
                      [_vm._v("Bottom Left")]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-toast",
                      {
                        attrs: {
                          id: "bottom-left-toast",
                          "header-class": "d-none",
                          "body-class":
                            "toast-dark d-flex justify-content-between",
                          toaster: "b-toaster-bottom-left",
                        },
                      },
                      [
                        _vm._v(
                          "\n                                Example notification text.\n                                "
                        ),
                        _c(
                          "a",
                          {
                            staticClass: "text-success ml-2",
                            attrs: { href: "javascript:;" },
                            on: {
                              click: function ($event) {
                                return _vm.$bvToast.hide("bottom-left-toast")
                              },
                            },
                          },
                          [_vm._v("DISMISS")]
                        ),
                      ]
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
                                      '<b-button variant="warning" @click="$bvToast.show(\'bottom-left-toast\')">Bottom Left</b-button>\n\n<b-toast id="bottom-left-toast" header-class="d-none" body-class="toast-dark d-flex justify-content-between" toaster="b-toaster-bottom-left">\n    Example notification text.\n    <a href="javascript:;" class="text-success ml-2" @click="$bvToast.hide(\'bottom-left-toast\')">DISMISS</a>\n</b-toast>\n'
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
              staticClass: "col-lg-12 col-12 layout-spacing",
              attrs: { id: "toastBottomCenter" },
            },
            [
              _c("div", { staticClass: "statbox panel box box-shadow" }, [
                _vm._m(5),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "panel-body text-center" },
                  [
                    _c(
                      "b-button",
                      {
                        attrs: { variant: "secondary" },
                        on: {
                          click: function ($event) {
                            return _vm.$bvToast.show("bottom-center-toast")
                          },
                        },
                      },
                      [_vm._v("Bottom Center")]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-toast",
                      {
                        attrs: {
                          id: "bottom-center-toast",
                          "header-class": "d-none",
                          "body-class":
                            "toast-dark d-flex justify-content-between",
                          toaster: "b-toaster-bottom-center",
                        },
                      },
                      [
                        _vm._v(
                          "\n                                Example notification text.\n                                "
                        ),
                        _c(
                          "a",
                          {
                            staticClass: "text-success ml-2",
                            attrs: { href: "javascript:;" },
                            on: {
                              click: function ($event) {
                                return _vm.$bvToast.hide("bottom-center-toast")
                              },
                            },
                          },
                          [_vm._v("DISMISS")]
                        ),
                      ]
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
                                      '<b-button variant="secondary" @click="$bvToast.show(\'bottom-center-toast\')">Bottom Center</b-button>\n\n<b-toast id="bottom-center-toast" header-class="d-none" body-class="toast-dark d-flex justify-content-between" toaster="b-toaster-bottom-center">\n    Example notification text.\n    <a href="javascript:;" class="text-success ml-2" @click="$bvToast.hide(\'bottom-center-toast\')">DISMISS</a>\n</b-toast>\n'
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
              staticClass: "col-lg-12 col-12 layout-spacing",
              attrs: { id: "toastBottomRight" },
            },
            [
              _c("div", { staticClass: "statbox panel box box-shadow" }, [
                _vm._m(6),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "panel-body text-center" },
                  [
                    _c(
                      "b-button",
                      {
                        attrs: { variant: "dark" },
                        on: {
                          click: function ($event) {
                            return _vm.$bvToast.show("bottom-right-toast")
                          },
                        },
                      },
                      [_vm._v("Bottom Right")]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-toast",
                      {
                        attrs: {
                          id: "bottom-right-toast",
                          "header-class": "d-none",
                          "body-class":
                            "toast-dark d-flex justify-content-between",
                          toaster: "b-toaster-bottom-right",
                        },
                      },
                      [
                        _vm._v(
                          "\n                                Example notification text.\n                                "
                        ),
                        _c(
                          "a",
                          {
                            staticClass: "text-success ml-2",
                            attrs: { href: "javascript:;" },
                            on: {
                              click: function ($event) {
                                return _vm.$bvToast.hide("bottom-right-toast")
                              },
                            },
                          },
                          [_vm._v("DISMISS")]
                        ),
                      ]
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
                                      '<b-button variant="dark" @click="$bvToast.show(\'bottom-right-toast\')">Bottom Right</b-button>\n\n<b-toast id="bottom-right-toast" header-class="d-none" body-class="toast-dark d-flex justify-content-between" toaster="b-toaster-bottom-right">\n    Example notification text.\n    <a href="javascript:;" class="text-success ml-2" @click="$bvToast.hide(\'bottom-right-toast\')">DISMISS</a>\n</b-toast>\n'
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
              staticClass: "col-lg-12 col-12 layout-spacing",
              attrs: { id: "toastNoAction" },
            },
            [
              _c("div", { staticClass: "statbox panel box box-shadow" }, [
                _vm._m(7),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "panel-body text-center" },
                  [
                    _c(
                      "b-button",
                      {
                        attrs: { variant: "warning" },
                        on: {
                          click: function ($event) {
                            return _vm.$bvToast.show("no-action-toast")
                          },
                        },
                      },
                      [_vm._v("No Action")]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-toast",
                      {
                        attrs: {
                          id: "no-action-toast",
                          "header-class": "d-none",
                          "body-class":
                            "toast-dark d-flex justify-content-between",
                          toaster: "b-toaster-bottom-left",
                        },
                      },
                      [
                        _vm._v(
                          "\n                                Example notification text.\n                            "
                        ),
                      ]
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
                                      '<b-button variant="warning" @click="$bvToast.show(\'no-action-toast\')">No Action</b-button>\n\n<b-toast id="no-action-toast" header-class="d-none" body-class="toast-dark d-flex justify-content-between" toaster="b-toaster-bottom-left">\n    Example notification text.\n</b-toast>\n'
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
              staticClass: "col-lg-12 col-12 layout-spacing",
              attrs: { id: "toastActionText" },
            },
            [
              _c("div", { staticClass: "statbox panel box box-shadow" }, [
                _vm._m(8),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "panel-body text-center" },
                  [
                    _c(
                      "b-button",
                      {
                        attrs: { variant: "primary" },
                        on: {
                          click: function ($event) {
                            return _vm.$bvToast.show("action-text-toast")
                          },
                        },
                      },
                      [_vm._v("Action Text")]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-toast",
                      {
                        attrs: {
                          id: "action-text-toast",
                          "header-class": "d-none",
                          "body-class":
                            "toast-dark d-flex justify-content-between",
                          toaster: "b-toaster-bottom-left",
                        },
                      },
                      [
                        _vm._v(
                          "\n                                Example notification text.\n                                "
                        ),
                        _c(
                          "a",
                          {
                            staticClass: "text-success ml-2",
                            attrs: { href: "javascript:;" },
                            on: {
                              click: function ($event) {
                                return _vm.$bvToast.hide("action-text-toast")
                              },
                            },
                          },
                          [_vm._v("THANKS!")]
                        ),
                      ]
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
                                      '<b-button variant="primary" @click="$bvToast.show(\'action-text-toast\')">Action Text</b-button>\n\n<b-toast id="action-text-toast" header-class="d-none" body-class="toast-dark d-flex justify-content-between" toaster="b-toaster-bottom-left">\n    Example notification text.\n    <a href="javascript:;" class="text-success ml-2" @click="$bvToast.hide(\'action-text-toast\')">THANKS!</a>\n</b-toast>\n'
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
              staticClass: "col-lg-12 col-12 layout-spacing",
              attrs: { id: "toastTextColor" },
            },
            [
              _c("div", { staticClass: "statbox panel box box-shadow" }, [
                _vm._m(9),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "panel-body text-center" },
                  [
                    _c(
                      "b-button",
                      {
                        attrs: { variant: "danger" },
                        on: {
                          click: function ($event) {
                            return _vm.$bvToast.show("text-color-toast")
                          },
                        },
                      },
                      [_vm._v("Text Color")]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-toast",
                      {
                        attrs: {
                          id: "text-color-toast",
                          "header-class": "d-none",
                          "body-class":
                            "toast-dark d-flex justify-content-between",
                          toaster: "b-toaster-bottom-left",
                        },
                      },
                      [
                        _vm._v(
                          "\n                                Example notification text.\n                                "
                        ),
                        _c(
                          "a",
                          {
                            staticClass: "text-warning ml-2",
                            attrs: { href: "javascript:;" },
                            on: {
                              click: function ($event) {
                                return _vm.$bvToast.hide("text-color-toast")
                              },
                            },
                          },
                          [_vm._v("DISMISS")]
                        ),
                      ]
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
                                      '<b-button variant="danger" @click="$bvToast.show(\'text-color-toast\')">Text Color</b-button>\n\n<b-toast id="text-color-toast" header-class="d-none" body-class="toast-dark d-flex justify-content-between" toaster="b-toaster-bottom-left">\n    Example notification text.\n    <a href="javascript:;" class="text-warning ml-2" @click="$bvToast.hide(\'text-color-toast\')">DISMISS</a>\n</b-toast>\n'
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
              staticClass: "col-lg-12 col-12 layout-spacing",
              attrs: { id: "toastClickCallback" },
            },
            [
              _c("div", { staticClass: "statbox panel box box-shadow" }, [
                _vm._m(10),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "panel-body text-center" },
                  [
                    _c(
                      "b-button",
                      {
                        attrs: { variant: "info" },
                        on: {
                          click: function ($event) {
                            return _vm.$bvToast.show("click-callback-toast")
                          },
                        },
                      },
                      [_vm._v("Click Callback")]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-toast",
                      {
                        attrs: {
                          id: "click-callback-toast",
                          "header-class": "d-none",
                          "body-class":
                            "toast-dark d-flex justify-content-between",
                          toaster: "b-toaster-bottom-left",
                        },
                      },
                      [
                        _vm._v(
                          "\n                                Custom callback when action button is clicked.\n                                "
                        ),
                        _c(
                          "a",
                          {
                            staticClass: "text-success ml-2",
                            attrs: { href: "javascript:;" },
                            on: {
                              click: function ($event) {
                                _vm.$bvToast.hide("click-callback-toast")
                                _vm.$bvToast.show("click-callback1-toast")
                              },
                            },
                          },
                          [_vm._v("DISMISS")]
                        ),
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-toast",
                      {
                        attrs: {
                          id: "click-callback1-toast",
                          "header-class": "d-none",
                          "body-class":
                            "toast-dark d-flex justify-content-between",
                          toaster: "b-toaster-bottom-left",
                        },
                      },
                      [
                        _vm._v(
                          "\n                                Thanks for clicking the Dismiss button!\n                                "
                        ),
                        _c(
                          "a",
                          {
                            staticClass: "text-success ml-2",
                            attrs: { href: "javascript:;" },
                            on: {
                              click: function ($event) {
                                return _vm.$bvToast.hide(
                                  "click-callback1-toast"
                                )
                              },
                            },
                          },
                          [_vm._v("DISMISS")]
                        ),
                      ]
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
                                      '<b-button variant="info" @click="$bvToast.show(\'click-callback-toast\')">Click Callback</b-button>\n\n<b-toast id="click-callback-toast" header-class="d-none" body-class="toast-dark d-flex justify-content-between" toaster="b-toaster-bottom-left">\n    Custom callback when action button is clicked.\n    <a href="javascript:;" class="text-success ml-2" @click="$bvToast.hide(\'click-callback-toast\');$bvToast.show(\'click-callback1-toast\')">DISMISS</a>\n</b-toast>\n<!-- callback  toast-->\n<b-toast id="click-callback1-toast" header-class="d-none" body-class="toast-dark d-flex justify-content-between" toaster="b-toaster-bottom-left">\n    Thanks for clicking the Dismiss button!\n    <a href="javascript:;" class="text-success ml-2" @click="$bvToast.hide(\'click-callback1-toast\')">DISMISS</a>\n</b-toast>\n'
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
              staticClass: "col-lg-12 col-12 layout-spacing",
              attrs: { id: "toastDuration" },
            },
            [
              _c("div", { staticClass: "statbox panel box box-shadow" }, [
                _vm._m(11),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "panel-body text-center" },
                  [
                    _c(
                      "b-button",
                      {
                        attrs: { variant: "dark" },
                        on: {
                          click: function ($event) {
                            return _vm.$bvToast.show("duration-toast")
                          },
                        },
                      },
                      [_vm._v("Duration")]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-toast",
                      {
                        attrs: {
                          id: "duration-toast",
                          "header-class": "d-none",
                          "body-class":
                            "toast-dark d-flex justify-content-between",
                          toaster: "b-toaster-bottom-left",
                          "auto-hide-delay": "5000",
                        },
                      },
                      [
                        _vm._v(
                          "\n                                Example notification text.\n                                "
                        ),
                        _c(
                          "a",
                          {
                            staticClass: "text-success ml-2",
                            attrs: { href: "javascript:;" },
                            on: {
                              click: function ($event) {
                                return _vm.$bvToast.hide("duration-toast")
                              },
                            },
                          },
                          [_vm._v("DISMISS")]
                        ),
                      ]
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
                                      '<b-button variant="dark" @click="$bvToast.show(\'duration-toast\')">Duration</b-button>\n\n<b-toast id="duration-toast" header-class="d-none" body-class="toast-dark d-flex justify-content-between" toaster="b-toaster-bottom-left" auto-hide-delay="5000">\n    Example notification text.\n    <a href="javascript:;" class="text-success ml-2" @click="$bvToast.hide(\'duration-toast\')">DISMISS</a>\n</b-toast>\n'
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
              staticClass: "col-lg-12 col-12 layout-spacing",
              attrs: { id: "toastBackgroundColor" },
            },
            [
              _c("div", { staticClass: "statbox panel box box-shadow" }, [
                _vm._m(12),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "panel-body text-center" },
                  [
                    _c(
                      "b-button",
                      {
                        staticClass: "mb-2 mx-1",
                        attrs: { variant: "primary" },
                        on: {
                          click: function ($event) {
                            return _vm.$bvToast.show("primary-toast")
                          },
                        },
                      },
                      [_vm._v("Primary")]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-toast",
                      {
                        attrs: {
                          id: "primary-toast",
                          "header-class": "d-none",
                          "body-class":
                            "toast-primary d-flex justify-content-between",
                          toaster: "b-toaster-bottom-left",
                        },
                      },
                      [
                        _vm._v(
                          "\n                                Primary\n                                "
                        ),
                        _c(
                          "a",
                          {
                            staticClass: "text-white ml-2",
                            attrs: { href: "javascript:;" },
                            on: {
                              click: function ($event) {
                                return _vm.$bvToast.hide("primary-toast")
                              },
                            },
                          },
                          [_vm._v("DISMISS")]
                        ),
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "mb-2 mx-1",
                        attrs: { variant: "info" },
                        on: {
                          click: function ($event) {
                            return _vm.$bvToast.show("info-toast")
                          },
                        },
                      },
                      [_vm._v("Info")]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-toast",
                      {
                        attrs: {
                          id: "info-toast",
                          "header-class": "d-none",
                          "body-class":
                            "toast-info d-flex justify-content-between",
                          toaster: "b-toaster-bottom-left",
                        },
                      },
                      [
                        _vm._v(
                          "\n                                Info\n                                "
                        ),
                        _c(
                          "a",
                          {
                            staticClass: "text-white ml-2",
                            attrs: { href: "javascript:;" },
                            on: {
                              click: function ($event) {
                                return _vm.$bvToast.hide("info-toast")
                              },
                            },
                          },
                          [_vm._v("DISMISS")]
                        ),
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "mb-2 mx-1",
                        attrs: { variant: "success" },
                        on: {
                          click: function ($event) {
                            return _vm.$bvToast.show("success-toast")
                          },
                        },
                      },
                      [_vm._v("Success")]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-toast",
                      {
                        attrs: {
                          id: "success-toast",
                          "header-class": "d-none",
                          "body-class":
                            "toast-success d-flex justify-content-between",
                          toaster: "b-toaster-bottom-left",
                        },
                      },
                      [
                        _vm._v(
                          "\n                                Success\n                                "
                        ),
                        _c(
                          "a",
                          {
                            staticClass: "text-white ml-2",
                            attrs: { href: "javascript:;" },
                            on: {
                              click: function ($event) {
                                return _vm.$bvToast.hide("success-toast")
                              },
                            },
                          },
                          [_vm._v("DISMISS")]
                        ),
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "mb-2 mx-1",
                        attrs: { variant: "warning" },
                        on: {
                          click: function ($event) {
                            return _vm.$bvToast.show("warning-toast")
                          },
                        },
                      },
                      [_vm._v("Warning")]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-toast",
                      {
                        attrs: {
                          id: "warning-toast",
                          "header-class": "d-none",
                          "body-class":
                            "toast-warning d-flex justify-content-between",
                          toaster: "b-toaster-bottom-left",
                        },
                      },
                      [
                        _vm._v(
                          "\n                                Warning\n                                "
                        ),
                        _c(
                          "a",
                          {
                            staticClass: "text-white ml-2",
                            attrs: { href: "javascript:;" },
                            on: {
                              click: function ($event) {
                                return _vm.$bvToast.hide("warning-toast")
                              },
                            },
                          },
                          [_vm._v("DISMISS")]
                        ),
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "mb-2 mx-1",
                        attrs: { variant: "danger" },
                        on: {
                          click: function ($event) {
                            return _vm.$bvToast.show("danger-toast")
                          },
                        },
                      },
                      [_vm._v("Danger")]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-toast",
                      {
                        attrs: {
                          id: "danger-toast",
                          "header-class": "d-none",
                          "body-class":
                            "toast-danger d-flex justify-content-between",
                          toaster: "b-toaster-bottom-left",
                        },
                      },
                      [
                        _vm._v(
                          "\n                                Danger\n                                "
                        ),
                        _c(
                          "a",
                          {
                            staticClass: "text-white ml-2",
                            attrs: { href: "javascript:;" },
                            on: {
                              click: function ($event) {
                                return _vm.$bvToast.hide("danger-toast")
                              },
                            },
                          },
                          [_vm._v("DISMISS")]
                        ),
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "mb-2 mx-1",
                        attrs: { variant: "dark" },
                        on: {
                          click: function ($event) {
                            return _vm.$bvToast.show("dark-toast")
                          },
                        },
                      },
                      [_vm._v("Dark")]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-toast",
                      {
                        attrs: {
                          id: "dark-toast",
                          "header-class": "d-none",
                          "body-class":
                            "toast-dark d-flex justify-content-between",
                          toaster: "b-toaster-bottom-left",
                        },
                      },
                      [
                        _vm._v(
                          "\n                                Dark\n                                "
                        ),
                        _c(
                          "a",
                          {
                            staticClass: "text-white ml-2",
                            attrs: { href: "javascript:;" },
                            on: {
                              click: function ($event) {
                                return _vm.$bvToast.hide("dark-toast")
                              },
                            },
                          },
                          [_vm._v("DISMISS")]
                        ),
                      ]
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
                                return _vm.toggleCode("code13")
                              },
                            },
                          },
                          [_c("span", [_vm._v("Code")])]
                        ),
                        _vm._v(" "),
                        _vm.code_arr.includes("code13")
                          ? _c(
                              "div",
                              { staticClass: "code-section text-left" },
                              [
                                _c("highlight", [
                                  _c("pre", [
                                    _vm._v(
                                      '<!-- Primary -->\n<b-button class="mb-2 mx-1" variant="primary" @click="$bvToast.show(\'primary-toast\')">Primary</b-button>\n<b-toast id="primary-toast" header-class="d-none" body-class="toast-primary d-flex justify-content-between" toaster="b-toaster-bottom-left">\n    Primary\n    <a href="javascript:;" class="text-white ml-2" @click="$bvToast.hide(\'primary-toast\')">DISMISS</a>\n</b-toast>\n\n<!-- Info -->\n<b-button class="mb-2 mx-1" variant="info" @click="$bvToast.show(\'info-toast\')">Info</b-button>\n<b-toast id="info-toast" header-class="d-none" body-class="toast-info d-flex justify-content-between" toaster="b-toaster-bottom-left">\n    Info\n    <a href="javascript:;" class="text-white ml-2" @click="$bvToast.hide(\'info-toast\')">DISMISS</a>\n</b-toast>\n\n<!-- Success -->\n<b-button class="mb-2 mx-1" variant="success" @click="$bvToast.show(\'success-toast\')">Success</b-button>\n<b-toast id="success-toast" header-class="d-none" body-class="toast-success d-flex justify-content-between" toaster="b-toaster-bottom-left">\n    Success\n    <a href="javascript:;" class="text-white ml-2" @click="$bvToast.hide(\'success-toast\')">DISMISS</a>\n</b-toast>\n\n<!-- Warning -->\n<b-button class="mb-2 mx-1" variant="warning" @click="$bvToast.show(\'warning-toast\')">Warning</b-button>\n<b-toast id="warning-toast" header-class="d-none" body-class="toast-warning d-flex justify-content-between" toaster="b-toaster-bottom-left">\n    Warning\n    <a href="javascript:;" class="text-white ml-2" @click="$bvToast.hide(\'warning-toast\')">DISMISS</a>\n</b-toast>\n\n<!-- Danger -->\n<b-button class="mb-2 mx-1" variant="danger" @click="$bvToast.show(\'danger-toast\')">Danger</b-button>\n<b-toast id="danger-toast" header-class="d-none" body-class="toast-danger d-flex justify-content-between" toaster="b-toaster-bottom-left">\n    Danger\n    <a href="javascript:;" class="text-white ml-2" @click="$bvToast.hide(\'danger-toast\')">DISMISS</a>\n</b-toast>\n\n<!-- Dark -->\n<b-button class="mb-2 mx-1" variant="dark" @click="$bvToast.show(\'dark-toast\')">Dark</b-button>\n<b-toast id="dark-toast" header-class="d-none" body-class="toast-dark d-flex justify-content-between" toaster="b-toaster-bottom-left">\n    Dark\n    <a href="javascript:;" class="text-white ml-2" @click="$bvToast.hide(\'dark-toast\')">DISMISS</a>\n</b-toast>\n'
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
          _c("h4", [_vm._v("Basic")]),
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
          _c("h4", [_vm._v("Top Left")]),
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
          _c("h4", [_vm._v("Top Center")]),
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
          _c("h4", [_vm._v("Top Right")]),
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
          _c("h4", [_vm._v("Bottom Left")]),
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
          _c("h4", [_vm._v("Bottom Center")]),
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
          _c("h4", [_vm._v("Bottom Right")]),
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
          _c("h4", [_vm._v("No Action")]),
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
          _c("h4", [_vm._v("Action Text")]),
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
          _c("h4", [_vm._v("Text Color")]),
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
          _c("h4", [_vm._v("Click Callback")]),
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
          _c("h4", [_vm._v("Duration")]),
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
          _c("h4", [_vm._v("Background Color")]),
        ]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);