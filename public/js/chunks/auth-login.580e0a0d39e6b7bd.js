"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["auth-login"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/auth/login.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/auth/login.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_sass_authentication_auth_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/assets/sass/authentication/auth.scss */ "./resources/js/src/assets/sass/authentication/auth.scss");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    title: 'Login Cover'
  },
  mounted: function mounted() {},
  methods: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/auth/login_boxed.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/auth/login_boxed.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _assets_sass_authentication_auth_boxed_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/assets/sass/authentication/auth-boxed.scss */ "./resources/js/src/assets/sass/authentication/auth-boxed.scss");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    title: 'Login'
  },
  data: function data() {
    return {
      form: {
        email: "",
        senha: ""
      },
      pwd_type: 'password'
    };
  },
  mounted: function mounted() {},
  methods: {
    set_pwd_type: function set_pwd_type() {
      if (this.pwd_type == 'password') {
        this.pwd_type = 'text';
      } else {
        this.pwd_type = 'password';
      }
    },
    login: function login() {
      this.$router.push({
        name: 'Products'
      });
      axios__WEBPACK_IMPORTED_MODULE_1__["default"].post('/api/auth', this.form).then(function (resp) {
        console.log('resp', resp);
      })["catch"](function (error) {
        // Lidar com erros aqui
        console.error(error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[0]!./resources/js/src/assets/sass/authentication/auth-boxed.scss":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[0]!./resources/js/src/assets/sass/authentication/auth-boxed.scss ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "/*\n\t===============================\n\t\t\t@Import\tMixins\n\t===============================\n*/\nhtml {\n  height: 100%;\n}\n\nbody {\n  height: 100%;\n  overflow: auto;\n  margin: 0;\n  padding: 0;\n  background-color: #fff;\n}\n\n.auth-boxed {\n  background: #fff;\n}\n\n.auth-boxed .form-form {\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n  margin: 0 auto;\n}\n\n.auth-boxed .form-form .form-form-wrap {\n  max-width: 480px;\n  margin: 0 auto;\n  min-width: 311px;\n  align-self: center;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n  padding: 20px 0;\n}\n\n.auth-boxed .form-form .form-container {\n  align-items: center;\n  display: flex;\n  flex-grow: 1;\n  width: 100%;\n  min-height: 100%;\n}\n\n.auth-boxed .form-form .form-container .form-content {\n  display: block;\n  width: 100%;\n  padding: 25px;\n  background: #fff;\n  text-align: center;\n  border-radius: 15px;\n  border: 1px solid #e0e6ed;\n  box-shadow: 0 0.1px 0px rgba(0, 0, 0, 0.002), 0 0.2px 0px rgba(0, 0, 0, 0.003), 0 0.4px 0px rgba(0, 0, 0, 0.004), 0 0.6px 0px rgba(0, 0, 0, 0.004), 0 0.9px 0px rgba(0, 0, 0, 0.005), 0 1.2px 0px rgba(0, 0, 0, 0.006), 0 1.8px 0px rgba(0, 0, 0, 0.006), 0 2.6px 0px rgba(0, 0, 0, 0.007), 0 3.9px 0px rgba(0, 0, 0, 0.008), 0 7px 0px rgba(0, 0, 0, 0.01);\n}\n\n.auth-boxed .form-form .form-container .form-content h1 {\n  font-size: 32px;\n  color: #3b3f5c;\n}\n\n.auth-boxed .form-form .form-container .form-content > p {\n  font-size: 13px;\n  color: #888ea8;\n  font-weight: 600;\n  margin-bottom: 35px;\n}\n\n.auth-boxed .form-form .form-form-wrap .user-meta {\n  margin-bottom: 35px;\n}\n\n.auth-boxed .form-form .form-form-wrap .user-meta img {\n  width: 52px;\n  height: 52px;\n  border-radius: 50%;\n  margin-right: 15px;\n  border: 4px solid #e0e6ed;\n}\n\n.auth-boxed .form-form .form-form-wrap .user-meta div {\n  align-self: center;\n}\n\n.auth-boxed .form-form .form-form-wrap .user-meta p {\n  font-size: 31px;\n  color: #3b3f5c;\n  margin-bottom: 0;\n}\n\n.auth-boxed .form-form .form-form-wrap h1 .brand-name {\n  color: #3b3f5c;\n  font-weight: 600;\n}\n\n.auth-boxed .form-form .form-form-wrap p.signup-link {\n  font-size: 14px;\n  color: #3b3f5c;\n  font-weight: 700;\n  margin-bottom: 15px;\n  text-align: center;\n  margin-top: 50px;\n}\n\n.auth-boxed .form-form .form-form-wrap p.signup-link.register {\n  font-size: 13px;\n  color: #888ea8;\n  font-weight: 600;\n  margin-bottom: 25px;\n  margin-top: 0;\n}\n\n.auth-boxed .form-form .form-form-wrap p.signup-link.recovery {\n  margin-top: 0;\n}\n\n.auth-boxed .form-form .form-form-wrap p.signup-link a {\n  color: #4361ee;\n  border-bottom: 1px solid;\n}\n\n.auth-boxed .form-form .form-form-wrap form .field-wrapper {\n  width: 100%;\n}\n\n.auth-boxed .form-form .form-form-wrap form .field-wrapper.input {\n  padding: 11px 0px 16px 0;\n  border-bottom: none;\n  position: relative;\n}\n\n.auth-boxed .form-form .form-form-wrap form .field-wrapper.input:focus {\n  border: 1px solid #000;\n}\n\n.auth-boxed .form-form .form-form-wrap form .field-wrapper.toggle-pass p {\n  font-weight: 600;\n  color: #3b3f5c;\n  margin-bottom: 0;\n}\n\n.auth-boxed .form-form .form-form-wrap form .field-wrapper .logged-in-user-name {\n  font-size: 37px;\n  color: #3b3f5c;\n}\n\n.auth-boxed .form-form .form-form-wrap form .field-wrapper label {\n  font-size: 10px;\n  font-weight: 700;\n  color: #3b3f5c;\n  margin-bottom: 8px;\n}\n\n.auth-boxed .form-form .form-form-wrap form .field-wrapper.terms_condition {\n  margin-bottom: 20px;\n}\n\n.auth-boxed .form-form .form-form-wrap form .field-wrapper.terms_condition label {\n  font-size: 14px;\n  color: #888ea8;\n  padding-left: 31px;\n  font-weight: 100;\n}\n\n.auth-boxed .form-form .form-form-wrap form .field-wrapper.terms_condition a {\n  color: #4361ee;\n}\n\n.auth-boxed .form-form .form-form-wrap form .field-wrapper svg.feather-user {\n  top: 53px;\n}\n\n.auth-boxed .form-form .form-form-wrap form .field-wrapper svg.feather-lock {\n  top: 50px;\n}\n\n.auth-boxed .form-form .form-form-wrap form .field-wrapper svg.feather-at-sign {\n  top: 47px;\n}\n\n.auth-boxed .form-form .form-form-wrap form .field-wrapper svg.feather-at-sign.register {\n  top: 53px;\n}\n\n.auth-boxed .form-form .form-form-wrap form .field-wrapper svg:not(.feather-eye) {\n  position: absolute;\n  left: 12px;\n  color: #888ea8;\n  fill: rgba(0, 23, 55, 0.08);\n  width: 20px;\n  height: 20px;\n}\n\n.auth-boxed .form-form .form-form-wrap form .field-wrapper svg.feather-eye {\n  position: absolute;\n  top: 49px;\n  right: 13px;\n  color: #888ea8;\n  fill: rgba(0, 23, 55, 0.08);\n  width: 17px;\n  cursor: pointer;\n}\n\n.auth-boxed .form-form .form-form-wrap form .field-wrapper input {\n  display: inline-block;\n  vertical-align: middle;\n  border-radius: 6px;\n  min-width: 50px;\n  max-width: 635px;\n  width: 100%;\n  transition: all 0.2s ease-in-out 0s;\n  color: #3b3f5c;\n  font-weight: 500;\n  font-size: 16px;\n  padding: 13px 35px 13px 46px;\n}\n\n.auth-boxed .form-form .form-form-wrap form .field-wrapper input::-webkit-input-placeholder, .auth-boxed .form-form .form-form-wrap form .field-wrapper input::-ms-input-placeholder, .auth-boxed .form-form .form-form-wrap form .field-wrapper input::-moz-placeholder {\n  color: #bfc9d4;\n  font-size: 14px;\n}\n\n.auth-boxed .form-form .form-form-wrap form .field-wrapper button.btn {\n  align-self: center;\n  width: 100%;\n  padding: 11px 14px;\n  font-size: 16px;\n  letter-spacing: 2px;\n}\n\n.auth-boxed .form-form .form-form-wrap form .field-wrapper a.forgot-pass-link {\n  font-weight: 600;\n  color: #888ea8;\n  display: block;\n  letter-spacing: 1px;\n  font-size: 12px;\n  margin-bottom: 8px;\n}\n\n.auth-boxed .form-form .form-form-wrap form .field-wrapper .n-chk .new-control-indicator {\n  top: 2px;\n  border: 1px solid #bfc9d4;\n  background-color: #f1f2f3;\n}\n\n.auth-boxed .form-form .form-form-wrap form .field-wrapper .n-chk .new-control-indicator:after {\n  top: 54%;\n}\n\n.auth-boxed .new-control.new-checkbox.checkbox-primary > input:checked ~ span.new-control-indicator {\n  border: none;\n}\n\n.auth-boxed .form-form .form-form-wrap form .division {\n  text-align: center;\n  font-size: 13px;\n  margin: 35px 0 38px 0;\n}\n\n.auth-boxed .form-form .form-form-wrap form .social {\n  text-align: center;\n}\n\n.auth-boxed .form-form .form-form-wrap form .social a {\n  background: transparent;\n  box-shadow: none;\n  border: 1px solid #e0e6ed;\n  padding: 12px 10px;\n  width: 181px;\n}\n\n.auth-boxed .form-form .form-form-wrap form .social a.social-fb {\n  margin-right: 15px;\n}\n\n.auth-boxed .form-form .form-form-wrap form .social a.social-fb svg,\n.auth-boxed .form-form .form-form-wrap form .social a.social-fb .brand-name {\n  color: #4361ee;\n}\n\n@media (max-width: 991px) {\n  .auth-boxed .form-form {\n    width: 100%;\n  }\n  .auth-boxed .form-form .form-form-wrap {\n    min-width: auto;\n    margin: 0 auto;\n  }\n  .auth-boxed .form-form .form-container .form-content {\n    border-radius: 15px;\n  }\n}\n@media (max-width: 575px) {\n  .auth-boxed .form-form .form-form-wrap form .field-wrapper.toggle-pass {\n    margin-bottom: 28px;\n  }\n  .auth-boxed .form-form .form-form-wrap form .social a.social-fb, .auth-boxed .form-form .form-form-wrap form .social a.social-github {\n    margin-right: auto;\n    margin-left: auto;\n    margin-bottom: 10px;\n    display: block;\n  }\n}\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n  .auth-boxed .form-form .form-form-wrap {\n    width: 100%;\n  }\n  .auth-boxed .form-form .form-container {\n    height: 100%;\n  }\n}\n@supports (-ms-ime-align: auto) {\n  .auth-boxed .form-form .form-form-wrap {\n    height: 100%;\n  }\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[0]!./resources/js/src/assets/sass/authentication/auth.scss":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[0]!./resources/js/src/assets/sass/authentication/auth.scss ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "/*\n\t===============================\n\t\t\t@Import\tMixins\n\t===============================\n*/\nhtml {\n  height: 100%;\n}\n\nbody {\n  height: 100%;\n  overflow: auto;\n  margin: 0;\n  padding: 0;\n  background: #fff;\n}\n\n.auth-cover .form-container {\n  display: flex;\n}\n\n.auth-cover .form-form {\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n}\n\n.auth-cover .form-form .form-form-wrap {\n  max-width: 480px;\n  margin: 0 auto;\n  min-width: 311px;\n  min-height: 100%;\n  height: 100vh;\n  align-items: center;\n  justify-content: center;\n}\n\n.auth-cover .form-form .form-container {\n  align-items: center;\n  display: flex;\n  flex-grow: 1;\n  padding: 20px 45px;\n  width: 100%;\n  min-height: 100%;\n}\n\n.auth-cover .form-form .form-container .form-content {\n  display: block;\n  width: 100%;\n}\n\n.auth-cover .form-form .form-form-wrap .user-meta {\n  margin-bottom: 35px;\n}\n\n.auth-cover .form-form .form-form-wrap .user-meta img {\n  width: 52px;\n  height: 52px;\n  border-radius: 50%;\n  margin-right: 15px;\n  border: 4px solid #e0e6ed;\n}\n\n.auth-cover .form-form .form-form-wrap .user-meta div {\n  align-self: center;\n}\n\n.auth-cover .form-form .form-form-wrap .user-meta p {\n  font-size: 31px;\n  color: #3b3f5c;\n  margin-bottom: 0;\n}\n\n.auth-cover .form-form .form-form-wrap h1 .brand-name {\n  color: #4361ee;\n  font-weight: 600;\n}\n\n.auth-cover .form-form .form-form-wrap p.signup-link {\n  font-size: 14px;\n  color: #3b3f5c;\n  font-weight: 700;\n  margin-bottom: 50px;\n}\n\n.auth-cover .form-form .form-form-wrap p.signup-link a {\n  color: #4361ee;\n  border-bottom: 1px solid;\n}\n\n.auth-cover .form-form .form-form-wrap form .field-wrapper.input {\n  position: relative;\n  padding: 11px 0 25px 0;\n  border-bottom: none;\n}\n\n.auth-cover .form-form .form-form-wrap form .field-wrapper.input:focus {\n  border: 1px solid #000;\n}\n\n.auth-cover .form-form .form-form-wrap form .field-wrapper.toggle-pass p {\n  font-weight: 600;\n  color: #3b3f5c;\n  margin-bottom: 0;\n}\n\n.auth-cover .form-form .form-form-wrap form .field-wrapper .logged-in-user-name {\n  font-size: 37px;\n  color: #3b3f5c;\n}\n\n.auth-cover .form-form .form-form-wrap form .field-wrapper svg {\n  position: absolute;\n  top: 16px;\n  color: #4361ee;\n  fill: rgba(27, 85, 226, 0.2392156863);\n}\n\n.auth-cover .form-form .form-form-wrap form .field-wrapper.terms_condition {\n  margin-bottom: 20px;\n}\n\n.auth-cover .form-form .form-form-wrap form .field-wrapper.terms_condition label {\n  font-size: 14px;\n  color: #888ea8;\n  padding-left: 31px;\n  font-weight: 100;\n}\n\n.auth-cover .form-form .form-form-wrap form .field-wrapper.terms_condition a {\n  color: #4361ee;\n}\n\n.auth-cover .form-form .form-form-wrap form .field-wrapper input {\n  display: inline-block;\n  vertical-align: middle;\n  border-radius: 0;\n  min-width: 50px;\n  max-width: 635px;\n  width: 100%;\n  min-height: 36px;\n  background-color: #ffffff;\n  border: none;\n  transition: all 0.2s ease-in-out 0s;\n  color: #3b3f5c;\n  font-weight: 600;\n  font-size: 16px;\n  border-bottom: 1px solid #e0e6ed;\n  padding: 0px 0 10px 35px;\n}\n\n.auth-cover .form-form .form-form-wrap form .field-wrapper input::-webkit-input-placeholder, .auth-cover .form-form .form-form-wrap form .field-wrapper input::-ms-input-placeholder, .auth-cover .form-form .form-form-wrap form .field-wrapper input::-moz-placeholder {\n  color: #bfc9d4;\n  font-size: 14px;\n}\n\n.auth-cover .form-form .form-form-wrap form .field-wrapper input:focus {\n  border-bottom: 1px solid #4361ee;\n  box-shadow: none;\n}\n\n.auth-cover .form-form .form-form-wrap form .field-wrapper.toggle-pass {\n  align-self: center;\n  text-align: left;\n}\n\n.auth-cover .form-form .form-form-wrap form .field-wrapper.toggle-pass .switch {\n  margin-bottom: 0;\n  vertical-align: sub;\n  margin-left: 7px;\n}\n\n.auth-cover .form-form .form-form-wrap form .field-wrapper button.btn {\n  align-self: center;\n}\n\n.auth-cover .form-form .form-form-wrap form .field-wrapper a.forgot-pass-link {\n  width: 100%;\n  font-weight: 700;\n  color: #4361ee;\n  text-align: center;\n  display: block;\n  letter-spacing: 2px;\n  font-size: 15px;\n  margin-top: 15px;\n}\n\n.auth-cover .form-form .form-form-wrap form .field-wrapper .n-chk .new-control-indicator {\n  top: 1px;\n  border: 1px solid #bfc9d4;\n  background-color: #f1f2f3;\n}\n\n.auth-cover .form-form .form-form-wrap form .field-wrapper .n-chk .new-control-indicator:after {\n  top: 52%;\n}\n\n.auth-cover .form-form .form-form-wrap form .field-wrapper.keep-logged-in {\n  margin-top: 60px;\n}\n\n.auth-cover .form-form .form-form-wrap form .field-wrapper.keep-logged-in label {\n  font-size: 14px;\n  color: #888ea8;\n  padding-left: 31px;\n  font-weight: 100;\n}\n\n.auth-cover .form-form .terms-conditions {\n  max-width: 480px;\n  margin: 0 auto;\n  color: #3b3f5c;\n  font-weight: 600;\n  margin-top: 90px;\n}\n\n.auth-cover .form-form .terms-conditions a {\n  color: #4361ee;\n  font-weight: 700;\n}\n\n.auth-cover .form-image {\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  right: 0;\n  min-height: auto;\n  height: 100vh;\n  width: 50%;\n}\n\n.auth-cover .form-image .l-image {\n  background-image: url(https://cdn.pixabay.com/photo/2015/12/10/16/39/shield-1086703_960_720.png);\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #060818;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: 75%;\n  background-position-x: center;\n  background-position-y: center;\n}\n\n@media (max-width: 991px) {\n  .auth-cover .form-form {\n    width: 100%;\n  }\n  .auth-cover .form-form .form-form-wrap {\n    min-width: auto;\n  }\n  .auth-cover .form-image {\n    display: none;\n  }\n}\n@media (max-width: 575px) {\n  .auth-cover .form-form .form-form-wrap form .field-wrapper.toggle-pass {\n    margin-bottom: 28px;\n  }\n}\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n  .auth-cover .form-form .form-form-wrap {\n    width: 100%;\n  }\n  .auth-cover .form-form .form-container {\n    height: 100%;\n  }\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/js/src/assets/sass/authentication/auth-boxed.scss":
/*!*********************************************************************!*\
  !*** ./resources/js/src/assets/sass/authentication/auth-boxed.scss ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_0_auth_boxed_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../../../node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[0]!./auth-boxed.scss */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[0]!./resources/js/src/assets/sass/authentication/auth-boxed.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_0_auth_boxed_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_0_auth_boxed_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/src/assets/sass/authentication/auth.scss":
/*!***************************************************************!*\
  !*** ./resources/js/src/assets/sass/authentication/auth.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_0_auth_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../../../node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[0]!./auth.scss */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[0]!./resources/js/src/assets/sass/authentication/auth.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_0_auth_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_0_auth_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/src/views/auth/login.vue":
/*!***********************************************!*\
  !*** ./resources/js/src/views/auth/login.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _login_vue_vue_type_template_id_1b8dfdcc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.vue?vue&type=template&id=1b8dfdcc& */ "./resources/js/src/views/auth/login.vue?vue&type=template&id=1b8dfdcc&");
/* harmony import */ var _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.vue?vue&type=script&lang=js& */ "./resources/js/src/views/auth/login.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _login_vue_vue_type_template_id_1b8dfdcc___WEBPACK_IMPORTED_MODULE_0__.render,
  _login_vue_vue_type_template_id_1b8dfdcc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/auth/login.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/auth/login_boxed.vue":
/*!*****************************************************!*\
  !*** ./resources/js/src/views/auth/login_boxed.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _login_boxed_vue_vue_type_template_id_eb6bc012___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login_boxed.vue?vue&type=template&id=eb6bc012& */ "./resources/js/src/views/auth/login_boxed.vue?vue&type=template&id=eb6bc012&");
/* harmony import */ var _login_boxed_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login_boxed.vue?vue&type=script&lang=js& */ "./resources/js/src/views/auth/login_boxed.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _login_boxed_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _login_boxed_vue_vue_type_template_id_eb6bc012___WEBPACK_IMPORTED_MODULE_0__.render,
  _login_boxed_vue_vue_type_template_id_eb6bc012___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/auth/login_boxed.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/auth/login.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/src/views/auth/login.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/auth/login.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/auth/login_boxed.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/src/views/auth/login_boxed.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_boxed_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./login_boxed.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/auth/login_boxed.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_boxed_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/auth/login.vue?vue&type=template&id=1b8dfdcc&":
/*!******************************************************************************!*\
  !*** ./resources/js/src/views/auth/login.vue?vue&type=template&id=1b8dfdcc& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_1b8dfdcc___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_1b8dfdcc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_1b8dfdcc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./login.vue?vue&type=template&id=1b8dfdcc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/auth/login.vue?vue&type=template&id=1b8dfdcc&");


/***/ }),

/***/ "./resources/js/src/views/auth/login_boxed.vue?vue&type=template&id=eb6bc012&":
/*!************************************************************************************!*\
  !*** ./resources/js/src/views/auth/login_boxed.vue?vue&type=template&id=eb6bc012& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_boxed_vue_vue_type_template_id_eb6bc012___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_boxed_vue_vue_type_template_id_eb6bc012___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_boxed_vue_vue_type_template_id_eb6bc012___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./login_boxed.vue?vue&type=template&id=eb6bc012& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/auth/login_boxed.vue?vue&type=template&id=eb6bc012&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/auth/login.vue?vue&type=template&id=1b8dfdcc&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/auth/login.vue?vue&type=template&id=1b8dfdcc& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "form full-form auth-cover" }, [
    _c("div", { staticClass: "form-container" }, [
      _c("div", { staticClass: "form-form" }, [
        _c("div", { staticClass: "form-form-wrap" }, [
          _c("div", { staticClass: "form-container" }, [
            _c(
              "div",
              { staticClass: "form-content" },
              [
                _c(
                  "h1",
                  {},
                  [
                    _vm._v("\n                            Log In to "),
                    _c("router-link", { attrs: { to: "/" } }, [
                      _c("span", { staticClass: "brand-name" }, [
                        _vm._v("CORK"),
                      ]),
                    ]),
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "p",
                  { staticClass: "signup-link" },
                  [
                    _vm._v("New Here? "),
                    _c("router-link", { attrs: { to: "/auth/register" } }, [
                      _vm._v("Create an account"),
                    ]),
                  ],
                  1
                ),
                _vm._v(" "),
                _c("b-form", { staticClass: "text-left" }, [
                  _c("div", { staticClass: "form" }, [
                    _c(
                      "div",
                      {
                        staticClass: "field-wrapper input",
                        attrs: { id: "username-field" },
                      },
                      [
                        _c(
                          "svg",
                          {
                            staticClass: "feather feather-user",
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
                                d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2",
                              },
                            }),
                            _vm._v(" "),
                            _c("circle", {
                              attrs: { cx: "12", cy: "7", r: "4" },
                            }),
                          ]
                        ),
                        _vm._v(" "),
                        _c("b-input", { attrs: { placeholder: "Username" } }),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "field-wrapper input mb-2",
                        attrs: { id: "password-field" },
                      },
                      [
                        _c(
                          "svg",
                          {
                            staticClass: "feather feather-lock",
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
                            _c("rect", {
                              attrs: {
                                x: "3",
                                y: "11",
                                width: "18",
                                height: "11",
                                rx: "2",
                                ry: "2",
                              },
                            }),
                            _vm._v(" "),
                            _c("path", {
                              attrs: { d: "M7 11V7a5 5 0 0 1 10 0v4" },
                            }),
                          ]
                        ),
                        _vm._v(" "),
                        _c("b-input", {
                          attrs: { type: "password", placeholder: "Password" },
                        }),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "d-sm-flex justify-content-between" },
                      [
                        _c(
                          "div",
                          {
                            staticClass:
                              "field-wrapper toggle-pass d-flex align-items-center",
                          },
                          [
                            _c("p", { staticClass: "d-inline-block" }, [
                              _vm._v("Show Password"),
                            ]),
                            _vm._v(" "),
                            _c("b-checkbox", {
                              staticClass: "switch s-primary",
                              attrs: { switch: "" },
                            }),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "field-wrapper" },
                          [
                            _c(
                              "b-button",
                              { attrs: { type: "submit", variant: "primary" } },
                              [_vm._v("Log In")]
                            ),
                          ],
                          1
                        ),
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "field-wrapper text-center keep-logged-in",
                      },
                      [
                        _c(
                          "b-checkbox",
                          { staticClass: "checkbox-outline-primary" },
                          [_vm._v("Keep me logged in")]
                        ),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "field-wrapper" },
                      [
                        _c(
                          "router-link",
                          {
                            staticClass: "forgot-pass-link",
                            attrs: { to: "/auth/pass-recovery" },
                          },
                          [_vm._v("Forgot Password?")]
                        ),
                      ],
                      1
                    ),
                  ]),
                ]),
              ],
              1
            ),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _vm._m(0),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-image" }, [
      _c("div", { staticClass: "l-image" }),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/auth/login_boxed.vue?vue&type=template&id=eb6bc012&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/auth/login_boxed.vue?vue&type=template&id=eb6bc012& ***!
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
  return _c("div", { staticClass: "form auth-boxed" }, [
    _c("div", { staticClass: "form-container outer" }, [
      _c("div", { staticClass: "form-form" }, [
        _c("div", { staticClass: "form-form-wrap" }, [
          _c("div", { staticClass: "form-container" }, [
            _c("div", { staticClass: "form-content" }, [
              _c("h1", {}, [_vm._v("Login")]),
              _vm._v(" "),
              _c("div", { staticClass: "text-left" }, [
                _c("div", { staticClass: "form" }, [
                  _c(
                    "div",
                    {
                      staticClass: "mb-3 field-wrapper input",
                      attrs: { id: "username-field" },
                    },
                    [
                      _c("label", { attrs: { for: "username" } }, [
                        _vm._v("Email"),
                      ]),
                      _vm._v(" "),
                      _c("b-input", {
                        attrs: { placeholder: "seu email" },
                        model: {
                          value: _vm.form.email,
                          callback: function ($$v) {
                            _vm.$set(_vm.form, "email", $$v)
                          },
                          expression: "form.email",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "field-wrapper input mb-2",
                      attrs: { id: "password-field" },
                    },
                    [
                      _vm._m(0),
                      _vm._v(" "),
                      _c("b-input", {
                        attrs: { type: _vm.pwd_type, placeholder: "Senha" },
                        model: {
                          value: _vm.form.senha,
                          callback: function ($$v) {
                            _vm.$set(_vm.form, "senha", $$v)
                          },
                          expression: "form.senha",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "d-sm-flex justify-content-between" },
                    [
                      _c(
                        "div",
                        { staticClass: "field-wrapper" },
                        [
                          _c(
                            "b-button",
                            {
                              attrs: {
                                type: "submit",
                                variant: "primary",
                                value: "",
                              },
                              on: { click: _vm.login },
                            },
                            [_vm._v("Login")]
                          ),
                        ],
                        1
                      ),
                    ]
                  ),
                ]),
              ]),
            ]),
          ]),
        ]),
      ]),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "d-flex justify-content-between" }, [
      _c("label", { attrs: { for: "password" } }, [_vm._v("Senha")]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);