"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["elements-pagination"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/elements/pagination.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/elements/pagination.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  metaInfo: {
    title: 'Pagination'
  },
  components: {
    highlight: _components_plugins_highlight_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      code_arr: [],
      rows: 9,
      perPage: 3,
      currentPage: 2
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

/***/ "./resources/js/src/views/elements/pagination.vue":
/*!********************************************************!*\
  !*** ./resources/js/src/views/elements/pagination.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pagination_vue_vue_type_template_id_3524acd0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pagination.vue?vue&type=template&id=3524acd0& */ "./resources/js/src/views/elements/pagination.vue?vue&type=template&id=3524acd0&");
/* harmony import */ var _pagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pagination.vue?vue&type=script&lang=js& */ "./resources/js/src/views/elements/pagination.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _pagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _pagination_vue_vue_type_template_id_3524acd0___WEBPACK_IMPORTED_MODULE_0__.render,
  _pagination_vue_vue_type_template_id_3524acd0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/elements/pagination.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/elements/pagination.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/views/elements/pagination.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./pagination.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/elements/pagination.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/elements/pagination.vue?vue&type=template&id=3524acd0&":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/views/elements/pagination.vue?vue&type=template&id=3524acd0& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_pagination_vue_vue_type_template_id_3524acd0___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_pagination_vue_vue_type_template_id_3524acd0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_pagination_vue_vue_type_template_id_3524acd0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./pagination.vue?vue&type=template&id=3524acd0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/elements/pagination.vue?vue&type=template&id=3524acd0&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/elements/pagination.vue?vue&type=template&id=3524acd0&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/elements/pagination.vue?vue&type=template&id=3524acd0& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
                      [_c("span", [_vm._v("Pagination")])]
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
                    attrs: { href: "#paginationDefault" },
                  },
                  [_vm._v("Default")]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "nav-link scrollactive-item",
                    attrs: { href: "#paginationSolid" },
                  },
                  [_vm._v("Solid")]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "nav-link scrollactive-item",
                    attrs: { href: "#paginationIcons" },
                  },
                  [_vm._v("Icons")]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "nav-link scrollactive-item",
                    attrs: { href: "#paginationNo-spacing" },
                  },
                  [_vm._v("No Spacing")]
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
                      href: "https://bootstrap-vue.org/docs/components/pagination",
                    },
                  },
                  [
                    _vm._v(
                      "\n                            https://bootstrap-vue.org/docs/components/pagination\n                        "
                    ),
                  ]
                ),
              ]
            ),
          ]),
        ]),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "row layout-top-spacing",
            attrs: { id: "cancel-row" },
          },
          [
            _c(
              "div",
              {
                staticClass: "col-xl-12 col-sm-12 layout-spacing",
                attrs: { id: "paginationDefault" },
              },
              [
                _c("div", { staticClass: "statbox panel box box-shadow" }, [
                  _vm._m(0),
                  _vm._v(" "),
                  _c("div", { staticClass: "panel-body text-center" }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "paginating-container pagination-default flex-column align-items-center",
                      },
                      [
                        _c("b-pagination", {
                          staticClass: "mb-4",
                          attrs: {
                            value: 2,
                            "total-rows": 9,
                            "per-page": 3,
                            "prev-text": "Prev",
                            "next-text": "Next",
                            "first-text": "First",
                            "last-text": "Last",
                          },
                        }),
                        _vm._v(" "),
                        _c("b-pagination", {
                          attrs: {
                            value: 2,
                            "total-rows": 9,
                            "per-page": 3,
                            "prev-text": "Prev",
                            "next-text": "Next",
                            "first-number": "",
                            "last-number": "",
                          },
                        }),
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
                                      '<b-pagination :value="2" :total-rows="9" :per-page="3" prev-text="Prev" next-text="Next" first-text="First" last-text="Last" class="mb-4"></b-pagination>\n\n<b-pagination :value="2" :total-rows="9" :per-page="3" prev-text="Prev" next-text="Next" first-number last-number></b-pagination>\n'
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
                staticClass: "col-xl-12 col-sm-12 layout-spacing",
                attrs: { id: "paginationSolid" },
              },
              [
                _c("div", { staticClass: "statbox panel box box-shadow" }, [
                  _vm._m(1),
                  _vm._v(" "),
                  _c("div", { staticClass: "panel-body text-center" }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "paginating-container pagination-solid flex-column align-items-center",
                      },
                      [
                        _c("b-pagination", {
                          staticClass: "mb-4",
                          attrs: {
                            value: 2,
                            "total-rows": 9,
                            "per-page": 3,
                            "prev-text": "Prev",
                            "next-text": "Next",
                            "first-text": "First",
                            "last-text": "Last",
                            "first-class": "first",
                            "prev-class": "prev",
                            "next-class": "next",
                            "last-class": "last",
                          },
                        }),
                        _vm._v(" "),
                        _c("b-pagination", {
                          attrs: {
                            value: 2,
                            "total-rows": 9,
                            "per-page": 3,
                            "prev-text": "Prev",
                            "next-text": "Next",
                            "prev-class": "prev",
                            "next-class": "next",
                            "first-number": "",
                            "last-number": "",
                          },
                        }),
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
                                      '<b-pagination :value="2" :total-rows="9" :per-page="3" prev-text="Prev" next-text="Next" first-text="First" last-text="Last" first-class="first" prev-class="prev" next-class="next" last-class="last" class="mb-4"></b-pagination>\n                                \n<b-pagination :value="2" :total-rows="9" :per-page="3" prev-text="Prev" next-text="Next" prev-class="prev" next-class="next" first-number last-number></b-pagination>\n'
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
                staticClass: "col-xl-12 col-sm-12 layout-spacing",
                attrs: { id: "paginationIcons" },
              },
              [
                _c("div", { staticClass: "statbox panel box box-shadow" }, [
                  _vm._m(2),
                  _vm._v(" "),
                  _c("div", { staticClass: "panel-body text-center" }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "paginating-container pagination-solid flex-column align-items-center",
                      },
                      [
                        _c("b-pagination", {
                          staticClass: "mb-4",
                          attrs: {
                            value: 2,
                            "total-rows": 9,
                            "per-page": 3,
                            "first-class": "first",
                            "prev-class": "prev",
                            "next-class": "next",
                            "last-class": "last",
                          },
                          scopedSlots: _vm._u([
                            {
                              key: "first-text",
                              fn: function () {
                                return [
                                  _c(
                                    "svg",
                                    {
                                      attrs: {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "24",
                                        height: "24",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                      },
                                    },
                                    [
                                      _c("path", {
                                        attrs: {
                                          "stroke-linecap": "round",
                                          "stroke-linejoin": "round",
                                          "stroke-width": "2",
                                          d: "M11 19l-7-7 7-7m8 14l-7-7 7-7",
                                        },
                                      }),
                                    ]
                                  ),
                                ]
                              },
                              proxy: true,
                            },
                            {
                              key: "prev-text",
                              fn: function () {
                                return [
                                  _c(
                                    "svg",
                                    {
                                      attrs: {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "24",
                                        height: "24",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                      },
                                    },
                                    [
                                      _c("path", {
                                        attrs: {
                                          "stroke-linecap": "round",
                                          "stroke-linejoin": "round",
                                          "stroke-width": "2",
                                          d: "M15 19l-7-7 7-7",
                                        },
                                      }),
                                    ]
                                  ),
                                ]
                              },
                              proxy: true,
                            },
                            {
                              key: "next-text",
                              fn: function () {
                                return [
                                  _c(
                                    "svg",
                                    {
                                      attrs: {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "24",
                                        height: "24",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                      },
                                    },
                                    [
                                      _c("path", {
                                        attrs: {
                                          "stroke-linecap": "round",
                                          "stroke-linejoin": "round",
                                          "stroke-width": "2",
                                          d: "M9 5l7 7-7 7",
                                        },
                                      }),
                                    ]
                                  ),
                                ]
                              },
                              proxy: true,
                            },
                            {
                              key: "last-text",
                              fn: function () {
                                return [
                                  _c(
                                    "svg",
                                    {
                                      attrs: {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "24",
                                        height: "24",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                      },
                                    },
                                    [
                                      _c("path", {
                                        attrs: {
                                          "stroke-linecap": "round",
                                          "stroke-linejoin": "round",
                                          "stroke-width": "2",
                                          d: "M13 5l7 7-7 7M5 5l7 7-7 7",
                                        },
                                      }),
                                    ]
                                  ),
                                ]
                              },
                              proxy: true,
                            },
                          ]),
                        }),
                        _vm._v(" "),
                        _c("b-pagination", {
                          attrs: {
                            value: 2,
                            "total-rows": 9,
                            "per-page": 3,
                            "prev-class": "prev",
                            "next-class": "next",
                            "first-number": "",
                            "last-number": "",
                          },
                          scopedSlots: _vm._u([
                            {
                              key: "prev-text",
                              fn: function () {
                                return [
                                  _c(
                                    "svg",
                                    {
                                      attrs: {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "24",
                                        height: "24",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                      },
                                    },
                                    [
                                      _c("path", {
                                        attrs: {
                                          "stroke-linecap": "round",
                                          "stroke-linejoin": "round",
                                          "stroke-width": "2",
                                          d: "M15 19l-7-7 7-7",
                                        },
                                      }),
                                    ]
                                  ),
                                ]
                              },
                              proxy: true,
                            },
                            {
                              key: "next-text",
                              fn: function () {
                                return [
                                  _c(
                                    "svg",
                                    {
                                      attrs: {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "24",
                                        height: "24",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                      },
                                    },
                                    [
                                      _c("path", {
                                        attrs: {
                                          "stroke-linecap": "round",
                                          "stroke-linejoin": "round",
                                          "stroke-width": "2",
                                          d: "M9 5l7 7-7 7",
                                        },
                                      }),
                                    ]
                                  ),
                                ]
                              },
                              proxy: true,
                            },
                          ]),
                        }),
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
                                      '<b-pagination :value="2" :total-rows="9" :per-page="3" first-class="first" prev-class="prev" next-class="next" last-class="last" class="mb-4">\n    <template #first-text>\n        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" /></svg>\n    </template>\n    <template #prev-text>\n        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>\n    </template>\n    <template #next-text>\n        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>\n    </template>\n    <template #last-text>\n        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" /></svg>\n    </template>\n</b-pagination>\n                                \n<b-pagination :value="2" :total-rows="9" :per-page="3" prev-class="prev" next-class="next" first-number last-number>\n    <template #prev-text>\n        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>\n    </template>\n    <template #next-text>\n        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>\n    </template>\n</b-pagination>\n'
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
                staticClass: "col-xl-12 col-sm-12 layout-spacing",
                attrs: { id: "paginationIconsrounded" },
              },
              [
                _c("div", { staticClass: "statbox panel box box-shadow" }, [
                  _vm._m(3),
                  _vm._v(" "),
                  _c("div", { staticClass: "panel-body text-center" }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "paginating-container pagination-solid flex-column align-items-center",
                      },
                      [
                        _c("b-pagination", {
                          staticClass: "mb-4 rounded",
                          attrs: {
                            value: 2,
                            "total-rows": 9,
                            "per-page": 3,
                            "first-class": "first",
                            "prev-class": "prev",
                            "next-class": "next",
                            "last-class": "last",
                          },
                          scopedSlots: _vm._u([
                            {
                              key: "first-text",
                              fn: function () {
                                return [
                                  _c(
                                    "svg",
                                    {
                                      attrs: {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "24",
                                        height: "24",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                      },
                                    },
                                    [
                                      _c("path", {
                                        attrs: {
                                          "stroke-linecap": "round",
                                          "stroke-linejoin": "round",
                                          "stroke-width": "2",
                                          d: "M11 19l-7-7 7-7m8 14l-7-7 7-7",
                                        },
                                      }),
                                    ]
                                  ),
                                ]
                              },
                              proxy: true,
                            },
                            {
                              key: "prev-text",
                              fn: function () {
                                return [
                                  _c(
                                    "svg",
                                    {
                                      attrs: {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "24",
                                        height: "24",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                      },
                                    },
                                    [
                                      _c("path", {
                                        attrs: {
                                          "stroke-linecap": "round",
                                          "stroke-linejoin": "round",
                                          "stroke-width": "2",
                                          d: "M15 19l-7-7 7-7",
                                        },
                                      }),
                                    ]
                                  ),
                                ]
                              },
                              proxy: true,
                            },
                            {
                              key: "next-text",
                              fn: function () {
                                return [
                                  _c(
                                    "svg",
                                    {
                                      attrs: {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "24",
                                        height: "24",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                      },
                                    },
                                    [
                                      _c("path", {
                                        attrs: {
                                          "stroke-linecap": "round",
                                          "stroke-linejoin": "round",
                                          "stroke-width": "2",
                                          d: "M9 5l7 7-7 7",
                                        },
                                      }),
                                    ]
                                  ),
                                ]
                              },
                              proxy: true,
                            },
                            {
                              key: "last-text",
                              fn: function () {
                                return [
                                  _c(
                                    "svg",
                                    {
                                      attrs: {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "24",
                                        height: "24",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                      },
                                    },
                                    [
                                      _c("path", {
                                        attrs: {
                                          "stroke-linecap": "round",
                                          "stroke-linejoin": "round",
                                          "stroke-width": "2",
                                          d: "M13 5l7 7-7 7M5 5l7 7-7 7",
                                        },
                                      }),
                                    ]
                                  ),
                                ]
                              },
                              proxy: true,
                            },
                          ]),
                        }),
                        _vm._v(" "),
                        _c("b-pagination", {
                          staticClass: "rounded",
                          attrs: {
                            value: 2,
                            "total-rows": 9,
                            "per-page": 3,
                            "prev-class": "prev",
                            "next-class": "next",
                            "first-number": "",
                            "last-number": "",
                          },
                          scopedSlots: _vm._u([
                            {
                              key: "prev-text",
                              fn: function () {
                                return [
                                  _c(
                                    "svg",
                                    {
                                      attrs: {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "24",
                                        height: "24",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                      },
                                    },
                                    [
                                      _c("path", {
                                        attrs: {
                                          "stroke-linecap": "round",
                                          "stroke-linejoin": "round",
                                          "stroke-width": "2",
                                          d: "M15 19l-7-7 7-7",
                                        },
                                      }),
                                    ]
                                  ),
                                ]
                              },
                              proxy: true,
                            },
                            {
                              key: "next-text",
                              fn: function () {
                                return [
                                  _c(
                                    "svg",
                                    {
                                      attrs: {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "24",
                                        height: "24",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                      },
                                    },
                                    [
                                      _c("path", {
                                        attrs: {
                                          "stroke-linecap": "round",
                                          "stroke-linejoin": "round",
                                          "stroke-width": "2",
                                          d: "M9 5l7 7-7 7",
                                        },
                                      }),
                                    ]
                                  ),
                                ]
                              },
                              proxy: true,
                            },
                          ]),
                        }),
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
                                      '<b-pagination :value="2" :total-rows="9" :per-page="3" first-class="first" prev-class="prev" next-class="next" last-class="last" class="mb-4 rounded">\n    <template #first-text>\n        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" /></svg>\n    </template>\n    <template #prev-text>\n        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>\n    </template>\n    <template #next-text>\n        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>\n    </template>\n    <template #last-text>\n        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" /></svg>\n    </template>\n</b-pagination>\n                                \n<b-pagination :value="2" :total-rows="9" :per-page="3" prev-class="prev" next-class="next" first-number last-number class="rounded">\n    <template #prev-text>\n        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>\n    </template>\n    <template #next-text>\n        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>\n    </template>\n</b-pagination>\n'
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
                staticClass: "col-xl-12 col-sm-12 layout-spacing",
                attrs: { id: "paginationNo-spacing" },
              },
              [
                _c("div", { staticClass: "statbox panel box box-shadow" }, [
                  _vm._m(4),
                  _vm._v(" "),
                  _c("div", { staticClass: "panel-body text-center" }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "paginating-container pagination-no_spacing flex-column align-items-center",
                      },
                      [
                        _c("b-pagination", {
                          staticClass: "mb-4",
                          attrs: {
                            value: 2,
                            "total-rows": 9,
                            "per-page": 3,
                            "first-class": "first",
                            "prev-class": "prev",
                            "next-class": "next",
                            "last-class": "last",
                          },
                          scopedSlots: _vm._u([
                            {
                              key: "first-text",
                              fn: function () {
                                return [
                                  _c(
                                    "svg",
                                    {
                                      attrs: {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "24",
                                        height: "24",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                      },
                                    },
                                    [
                                      _c("path", {
                                        attrs: {
                                          "stroke-linecap": "round",
                                          "stroke-linejoin": "round",
                                          "stroke-width": "2",
                                          d: "M11 19l-7-7 7-7m8 14l-7-7 7-7",
                                        },
                                      }),
                                    ]
                                  ),
                                ]
                              },
                              proxy: true,
                            },
                            {
                              key: "prev-text",
                              fn: function () {
                                return [
                                  _c(
                                    "svg",
                                    {
                                      attrs: {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "24",
                                        height: "24",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                      },
                                    },
                                    [
                                      _c("path", {
                                        attrs: {
                                          "stroke-linecap": "round",
                                          "stroke-linejoin": "round",
                                          "stroke-width": "2",
                                          d: "M15 19l-7-7 7-7",
                                        },
                                      }),
                                    ]
                                  ),
                                ]
                              },
                              proxy: true,
                            },
                            {
                              key: "next-text",
                              fn: function () {
                                return [
                                  _c(
                                    "svg",
                                    {
                                      attrs: {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "24",
                                        height: "24",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                      },
                                    },
                                    [
                                      _c("path", {
                                        attrs: {
                                          "stroke-linecap": "round",
                                          "stroke-linejoin": "round",
                                          "stroke-width": "2",
                                          d: "M9 5l7 7-7 7",
                                        },
                                      }),
                                    ]
                                  ),
                                ]
                              },
                              proxy: true,
                            },
                            {
                              key: "last-text",
                              fn: function () {
                                return [
                                  _c(
                                    "svg",
                                    {
                                      attrs: {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "24",
                                        height: "24",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                      },
                                    },
                                    [
                                      _c("path", {
                                        attrs: {
                                          "stroke-linecap": "round",
                                          "stroke-linejoin": "round",
                                          "stroke-width": "2",
                                          d: "M13 5l7 7-7 7M5 5l7 7-7 7",
                                        },
                                      }),
                                    ]
                                  ),
                                ]
                              },
                              proxy: true,
                            },
                          ]),
                        }),
                        _vm._v(" "),
                        _c("b-pagination", {
                          attrs: {
                            value: 2,
                            "total-rows": 9,
                            "per-page": 3,
                            "prev-class": "prev",
                            "next-class": "next",
                            "first-number": "",
                            "last-number": "",
                          },
                          scopedSlots: _vm._u([
                            {
                              key: "prev-text",
                              fn: function () {
                                return [
                                  _c(
                                    "svg",
                                    {
                                      attrs: {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "24",
                                        height: "24",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                      },
                                    },
                                    [
                                      _c("path", {
                                        attrs: {
                                          "stroke-linecap": "round",
                                          "stroke-linejoin": "round",
                                          "stroke-width": "2",
                                          d: "M15 19l-7-7 7-7",
                                        },
                                      }),
                                    ]
                                  ),
                                ]
                              },
                              proxy: true,
                            },
                            {
                              key: "next-text",
                              fn: function () {
                                return [
                                  _c(
                                    "svg",
                                    {
                                      attrs: {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "24",
                                        height: "24",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                      },
                                    },
                                    [
                                      _c("path", {
                                        attrs: {
                                          "stroke-linecap": "round",
                                          "stroke-linejoin": "round",
                                          "stroke-width": "2",
                                          d: "M9 5l7 7-7 7",
                                        },
                                      }),
                                    ]
                                  ),
                                ]
                              },
                              proxy: true,
                            },
                          ]),
                        }),
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
                                      '<b-pagination :value="2" :total-rows="9" :per-page="3" class="mb-4" first-class="first" prev-class="prev" next-class="next" last-class="last">\n    <template #first-text>\n        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" /></svg>\n    </template>\n    <template #prev-text>\n        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>\n    </template>\n    <template #next-text>\n        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>\n    </template>\n    <template #last-text>\n        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" /></svg>\n    </template>\n</b-pagination>\n\n<b-pagination :value="2" :total-rows="9" :per-page="3" prev-class="prev" next-class="next" first-number last-number>\n    <template #prev-text>\n        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>\n    </template>\n    <template #next-text>\n        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>\n    </template>\n</b-pagination>\n'
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
          ]
        ),
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
          _c("h4", [_vm._v("Default")]),
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
          _c("h4", [_vm._v("Solid")]),
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
          _c("h4", [_vm._v("With Icons")]),
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
          _c("h4", [_vm._v("With Icons and Rounded ")]),
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
          _c("h4", [_vm._v("No Spacing")]),
        ]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);