(self["webpackChunk"] = self["webpackChunk"] || []).push([["elements-search"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/elements/search.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/elements/search.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_sass_scrollspyNav_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/assets/sass/scrollspyNav.scss */ "./resources/js/src/assets/sass/scrollspyNav.scss");
/* harmony import */ var _assets_sass_elements_search_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/sass/elements/search.scss */ "./resources/js/src/assets/sass/elements/search.scss");
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



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  metaInfo: {
    title: 'Search'
  },
  components: {
    highlight: _components_plugins_highlight_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      code_arr: [],
      all_items: [],
      search_items: [],
      search_text: '',
      is_show_search_overlay: false
    };
  },
  mounted: function mounted() {
    this.all_items = [{
      thumb: 'profile-5.jpeg',
      name: 'Alan Green',
      email: 'alan@mail.com',
      status: 'Active',
      status_class: 'badge badge-primary'
    }, {
      thumb: 'profile-11.jpeg',
      name: 'Linda Nelson',
      email: 'Linda@mail.com',
      status: 'Busy',
      status_class: 'badge badge-danger'
    }, {
      thumb: 'profile-12.jpeg',
      name: 'Lila Perry',
      email: 'Lila@mail.com',
      status: 'Closed',
      status_class: 'badge badge-warning'
    }, {
      thumb: 'profile-3.jpeg',
      name: 'Andy King',
      email: 'Andy@mail.com',
      status: 'Active',
      status_class: 'badge badge-primary'
    }, {
      thumb: 'profile-15.jpeg',
      name: 'Jesse Cory',
      email: 'Jesse@mail.com',
      status: 'Busy',
      status_class: 'badge badge-danger'
    }];
    this.search_items = this.all_items;
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
    search: function search() {
      var value = this.search_text ? this.search_text.toLowerCase() : this.search_text;
      this.search_items = this.all_items.filter(function (d) {
        return d.name.toLowerCase().includes(value) || d.email.toLowerCase().includes(value) || d.status.toLowerCase().includes(value);
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/src/assets/images/1.jpeg":
/*!***********************************************!*\
  !*** ./resources/js/src/assets/images/1.jpeg ***!
  \***********************************************/
/***/ ((module) => {

module.exports = "/images/1-a080a7f9eb66a38e9a743a83d73bc4a9.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/2.jpg":
/*!**********************************************!*\
  !*** ./resources/js/src/assets/images/2.jpg ***!
  \**********************************************/
/***/ ((module) => {

module.exports = "/images/2-6164a93971d43388ae96086025483860.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/3.jpeg":
/*!***********************************************!*\
  !*** ./resources/js/src/assets/images/3.jpeg ***!
  \***********************************************/
/***/ ((module) => {

module.exports = "/images/3-94fefea456f1f8eec6ab44de06e4f2b0.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/ab-1.jpeg":
/*!**************************************************!*\
  !*** ./resources/js/src/assets/images/ab-1.jpeg ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "/images/ab-1-f76d20289d31c7855a30c6beef0f110e.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/arrow-down.png":
/*!*******************************************************!*\
  !*** ./resources/js/src/assets/images/arrow-down.png ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "/images/arrow-down-6e28c00974a9f0162a4537313d280f2d.png";

/***/ }),

/***/ "./resources/js/src/assets/images/bg.png":
/*!***********************************************!*\
  !*** ./resources/js/src/assets/images/bg.png ***!
  \***********************************************/
/***/ ((module) => {

module.exports = "/images/bg-bc33c69023a3b8c24ec178f8f9cf0727.png";

/***/ }),

/***/ "./resources/js/src/assets/images/boy-1.png":
/*!**************************************************!*\
  !*** ./resources/js/src/assets/images/boy-1.png ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "/images/boy-1-53c544afe5a0a1aaa0daa30a07456756.png";

/***/ }),

/***/ "./resources/js/src/assets/images/boy-2.png":
/*!**************************************************!*\
  !*** ./resources/js/src/assets/images/boy-2.png ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "/images/boy-2-96e049f9116c570e0d5f7efc6b95adee.png";

/***/ }),

/***/ "./resources/js/src/assets/images/boy.png":
/*!************************************************!*\
  !*** ./resources/js/src/assets/images/boy.png ***!
  \************************************************/
/***/ ((module) => {

module.exports = "/images/boy-27753654bafbb25eb114093e19fcbfb6.png";

/***/ }),

/***/ "./resources/js/src/assets/images/contact-us-map-pin.svg":
/*!***************************************************************!*\
  !*** ./resources/js/src/assets/images/contact-us-map-pin.svg ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "/images/contact-us-map-pin-5f681666850dcf169e8a3287e7502dee.svg";

/***/ }),

/***/ "./resources/js/src/assets/images/cork-logo.png":
/*!******************************************************!*\
  !*** ./resources/js/src/assets/images/cork-logo.png ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "/images/cork-logo-21142feea95359d716b06f39abd00112.png";

/***/ }),

/***/ "./resources/js/src/assets/images/delete-user-11.jpeg":
/*!************************************************************!*\
  !*** ./resources/js/src/assets/images/delete-user-11.jpeg ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "/images/delete-user-11-7e3615a862613ff94b8fceb1909991ad.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/delete-user-12.jpeg":
/*!************************************************************!*\
  !*** ./resources/js/src/assets/images/delete-user-12.jpeg ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "/images/delete-user-12-0e18482b4e9eb73bded410ab963cf344.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/delete-user-15.jpeg":
/*!************************************************************!*\
  !*** ./resources/js/src/assets/images/delete-user-15.jpeg ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "/images/delete-user-15-a7de86fcceaab8853231b08234536c9e.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/delete-user-16.jpeg":
/*!************************************************************!*\
  !*** ./resources/js/src/assets/images/delete-user-16.jpeg ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "/images/delete-user-16-b1c443ea0275f7d829d08b5219d64f60.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/delete-user-17.jpeg":
/*!************************************************************!*\
  !*** ./resources/js/src/assets/images/delete-user-17.jpeg ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "/images/delete-user-17-614b919a7b457a2d1e301e006e84de0d.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/delete-user-4.jpeg":
/*!***********************************************************!*\
  !*** ./resources/js/src/assets/images/delete-user-4.jpeg ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "/images/delete-user-4-a7a7099a65307fdaaf37259542bc152d.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/drag-1.jpeg":
/*!****************************************************!*\
  !*** ./resources/js/src/assets/images/drag-1.jpeg ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "/images/drag-1-34fbae9ceaed6d5e5c054c90d9b57c6c.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/drag-2.jpeg":
/*!****************************************************!*\
  !*** ./resources/js/src/assets/images/drag-2.jpeg ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "/images/drag-2-c651fd792a65c6dba42f0b515e91116d.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/drag-4.jpg":
/*!***************************************************!*\
  !*** ./resources/js/src/assets/images/drag-4.jpg ***!
  \***************************************************/
/***/ ((module) => {

module.exports = "/images/drag-4-f5c9dcedeeff8a69d5af37f41eb55708.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/dragp-1.jpeg":
/*!*****************************************************!*\
  !*** ./resources/js/src/assets/images/dragp-1.jpeg ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "/images/dragp-1-c87ba41b8a029bac4e55b09f49233850.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/dragp-4.jpeg":
/*!*****************************************************!*\
  !*** ./resources/js/src/assets/images/dragp-4.jpeg ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "/images/dragp-4-aecf5b0b8744c049e7efc6f22c940ca6.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/dragp-6.jpeg":
/*!*****************************************************!*\
  !*** ./resources/js/src/assets/images/dragp-6.jpeg ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "/images/dragp-6-edab66c6391a0cb0989bbc7d00def25d.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/dragp-7.jpeg":
/*!*****************************************************!*\
  !*** ./resources/js/src/assets/images/dragp-7.jpeg ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "/images/dragp-7-9e6e9718926cb5fddc4f57627fca2d63.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/faq.svg":
/*!************************************************!*\
  !*** ./resources/js/src/assets/images/faq.svg ***!
  \************************************************/
/***/ ((module) => {

module.exports = "/images/faq-33762470b9228292d59d83d7c59197ef.svg";

/***/ }),

/***/ "./resources/js/src/assets/images/file-preview.png":
/*!*********************************************************!*\
  !*** ./resources/js/src/assets/images/file-preview.png ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "/images/file-preview-2e32eeb4e07ef1e3ea1d2bdca01064da.png";

/***/ }),

/***/ "./resources/js/src/assets/images/g-7.png":
/*!************************************************!*\
  !*** ./resources/js/src/assets/images/g-7.png ***!
  \************************************************/
/***/ ((module) => {

module.exports = "/images/g-7-28878337cafb842760fb3b9fae20b8d5.png";

/***/ }),

/***/ "./resources/js/src/assets/images/g-8.png":
/*!************************************************!*\
  !*** ./resources/js/src/assets/images/g-8.png ***!
  \************************************************/
/***/ ((module) => {

module.exports = "/images/g-8-2277c5980263c72654cf6f869f7defa8.png";

/***/ }),

/***/ "./resources/js/src/assets/images/girl-1.png":
/*!***************************************************!*\
  !*** ./resources/js/src/assets/images/girl-1.png ***!
  \***************************************************/
/***/ ((module) => {

module.exports = "/images/girl-1-8ebb38107b9efc2ec8d59973b1fcfd8d.png";

/***/ }),

/***/ "./resources/js/src/assets/images/girl-2.png":
/*!***************************************************!*\
  !*** ./resources/js/src/assets/images/girl-2.png ***!
  \***************************************************/
/***/ ((module) => {

module.exports = "/images/girl-2-b4dc5606d3306ffb8f3da2ea8315dad5.png";

/***/ }),

/***/ "./resources/js/src/assets/images/girl-3.png":
/*!***************************************************!*\
  !*** ./resources/js/src/assets/images/girl-3.png ***!
  \***************************************************/
/***/ ((module) => {

module.exports = "/images/girl-3-becc5f3e0d0c4045e47f14234c5f61e1.png";

/***/ }),

/***/ "./resources/js/src/assets/images/girl-4.png":
/*!***************************************************!*\
  !*** ./resources/js/src/assets/images/girl-4.png ***!
  \***************************************************/
/***/ ((module) => {

module.exports = "/images/girl-4-8032d38ab7a47d3145ce4f3d07383cc4.png";

/***/ }),

/***/ "./resources/js/src/assets/images/grid-blog-style-1.jpg":
/*!**************************************************************!*\
  !*** ./resources/js/src/assets/images/grid-blog-style-1.jpg ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "/images/grid-blog-style-1-10f902ed6f3d00d3e32ea1709e9efe30.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/grid-blog-style-2.jpeg":
/*!***************************************************************!*\
  !*** ./resources/js/src/assets/images/grid-blog-style-2.jpeg ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "/images/grid-blog-style-2-4ac09a936be48fed1dc0065d344b8a22.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/grid-blog-style-3.jpg":
/*!**************************************************************!*\
  !*** ./resources/js/src/assets/images/grid-blog-style-3.jpg ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "/images/grid-blog-style-3-c02981be7be80b0bde5d4fdb3445aaa7.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/lightbox-1.jpg":
/*!*******************************************************!*\
  !*** ./resources/js/src/assets/images/lightbox-1.jpg ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "/images/lightbox-1-288fd31634eceac740f5b15a41e4c51e.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/lightbox-14.jpeg":
/*!*********************************************************!*\
  !*** ./resources/js/src/assets/images/lightbox-14.jpeg ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "/images/lightbox-14-e0023d7f5bb8c52f5f7b127c14181547.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/lightbox-15.jpeg":
/*!*********************************************************!*\
  !*** ./resources/js/src/assets/images/lightbox-15.jpeg ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "/images/lightbox-15-229153c205256cea21ce4ee7b0957184.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/lightbox-2.jpeg":
/*!********************************************************!*\
  !*** ./resources/js/src/assets/images/lightbox-2.jpeg ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "/images/lightbox-2-f70f0b025fe23e6f6d33bbf85f154c83.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/lightbox-3.jpeg":
/*!********************************************************!*\
  !*** ./resources/js/src/assets/images/lightbox-3.jpeg ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "/images/lightbox-3-36ae681041ecad857f106fc1db4ad72b.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/lightbox-8.jpeg":
/*!********************************************************!*\
  !*** ./resources/js/src/assets/images/lightbox-8.jpeg ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "/images/lightbox-8-90d2e47bf1c35fb9893f6466dd03bce1.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/list-blog-style-2.jpeg":
/*!***************************************************************!*\
  !*** ./resources/js/src/assets/images/list-blog-style-2.jpeg ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "/images/list-blog-style-2-f61ecd800eb1a8b022f5bef87c687119.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/list-blog-style-3.jpeg":
/*!***************************************************************!*\
  !*** ./resources/js/src/assets/images/list-blog-style-3.jpeg ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "/images/list-blog-style-3-1f2aa575cd7c57cd65536bb0047054b1.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/logo2.svg":
/*!**************************************************!*\
  !*** ./resources/js/src/assets/images/logo2.svg ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "/images/logo2-4321aa724612f5c36db258e45cd2234d.svg";

/***/ }),

/***/ "./resources/js/src/assets/images/masonry-blog-style-3.jpeg":
/*!******************************************************************!*\
  !*** ./resources/js/src/assets/images/masonry-blog-style-3.jpeg ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "/images/masonry-blog-style-3-4820d7499bffdbab29c142d81d2dcc08.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/masonry-blog-style-4.jpeg":
/*!******************************************************************!*\
  !*** ./resources/js/src/assets/images/masonry-blog-style-4.jpeg ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "/images/masonry-blog-style-4-24d1c0a3088ca3d99bad05193b188475.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/mindset.svg":
/*!****************************************************!*\
  !*** ./resources/js/src/assets/images/mindset.svg ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "/images/mindset-fd1f9ed63187ab156c4aa2839c892f8e.svg";

/***/ }),

/***/ "./resources/js/src/assets/images/p6.jpeg":
/*!************************************************!*\
  !*** ./resources/js/src/assets/images/p6.jpeg ***!
  \************************************************/
/***/ ((module) => {

module.exports = "/images/p6-43f1ed0ef83ab9a65e8a7bd067273cef.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/p7.jpeg":
/*!************************************************!*\
  !*** ./resources/js/src/assets/images/p7.jpeg ***!
  \************************************************/
/***/ ((module) => {

module.exports = "/images/p7-c6307ff10253921b4389d53d89905220.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/p9.jpeg":
/*!************************************************!*\
  !*** ./resources/js/src/assets/images/p9.jpeg ***!
  \************************************************/
/***/ ((module) => {

module.exports = "/images/p9-e8a19bb6eff565d2f470b0b686a3f256.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/product-camera.jpg":
/*!***********************************************************!*\
  !*** ./resources/js/src/assets/images/product-camera.jpg ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "/images/product-camera-18c4d47be8f6e1262099669611bf73a9.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/product-headphones.jpg":
/*!***************************************************************!*\
  !*** ./resources/js/src/assets/images/product-headphones.jpg ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "/images/product-headphones-98afa574e3e39c76ab8ef8c6b9ab7333.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/product-laptop.jpg":
/*!***********************************************************!*\
  !*** ./resources/js/src/assets/images/product-laptop.jpg ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "/images/product-laptop-10a375ed7252da64296515557fa78a88.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/product-shoes.jpg":
/*!**********************************************************!*\
  !*** ./resources/js/src/assets/images/product-shoes.jpg ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "/images/product-shoes-bb208df6b3feb6a275aba0792f3911d5.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/product-watch.jpg":
/*!**********************************************************!*\
  !*** ./resources/js/src/assets/images/product-watch.jpg ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "/images/product-watch-7ce41da4d6689a530e7bbf73f3bcda0e.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-1.jpeg":
/*!*******************************************************!*\
  !*** ./resources/js/src/assets/images/profile-1.jpeg ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "/images/profile-1-257264577e3ac7a7b25153ebfca17337.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-10.jpeg":
/*!********************************************************!*\
  !*** ./resources/js/src/assets/images/profile-10.jpeg ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "/images/profile-10-8ed024b4035189204ca907fef8be93fe.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-11.jpeg":
/*!********************************************************!*\
  !*** ./resources/js/src/assets/images/profile-11.jpeg ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "/images/profile-11-80d0de0e88aaadff32fac5df9ac84ff6.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-12.jpeg":
/*!********************************************************!*\
  !*** ./resources/js/src/assets/images/profile-12.jpeg ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "/images/profile-12-a7808c08c8cc0f64bc17e498a0434f91.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-13.jpeg":
/*!********************************************************!*\
  !*** ./resources/js/src/assets/images/profile-13.jpeg ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "/images/profile-13-8d35c0a20b5d253c2d7a849a86bd4fa8.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-14.jpeg":
/*!********************************************************!*\
  !*** ./resources/js/src/assets/images/profile-14.jpeg ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "/images/profile-14-f5211f56123bc5c5cf8a08c1cc9ba73f.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-17.jpeg":
/*!********************************************************!*\
  !*** ./resources/js/src/assets/images/profile-17.jpeg ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "/images/profile-17-74e6f302b478c2f4dd2eec28ce5b683e.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-18.jpeg":
/*!********************************************************!*\
  !*** ./resources/js/src/assets/images/profile-18.jpeg ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "/images/profile-18-33caa941558688a7272acbd11ca60e14.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-19.jpeg":
/*!********************************************************!*\
  !*** ./resources/js/src/assets/images/profile-19.jpeg ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "/images/profile-19-1de6117cbebe6c6e4dc692d3bf17ec32.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-2.jpeg":
/*!*******************************************************!*\
  !*** ./resources/js/src/assets/images/profile-2.jpeg ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "/images/profile-2-706e5fed5903a761ae977b6bda77609c.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-20.jpeg":
/*!********************************************************!*\
  !*** ./resources/js/src/assets/images/profile-20.jpeg ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "/images/profile-20-68853e6bb47e58a9d1119509ace445d1.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-21.jpeg":
/*!********************************************************!*\
  !*** ./resources/js/src/assets/images/profile-21.jpeg ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "/images/profile-21-272bfe80c3a1d475eabcda0bcbfebbcf.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-23.jpeg":
/*!********************************************************!*\
  !*** ./resources/js/src/assets/images/profile-23.jpeg ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "/images/profile-23-d938f6d10c69bbd6da25df74a5dec17c.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-24.jpeg":
/*!********************************************************!*\
  !*** ./resources/js/src/assets/images/profile-24.jpeg ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "/images/profile-24-414615b31fb264ca3fc51a20b8e5682a.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-25.jpeg":
/*!********************************************************!*\
  !*** ./resources/js/src/assets/images/profile-25.jpeg ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "/images/profile-25-d0da243804afbe20770754be0361d387.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-26.jpeg":
/*!********************************************************!*\
  !*** ./resources/js/src/assets/images/profile-26.jpeg ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "/images/profile-26-3dd07f6f919c2ec138580dd6dc439b7e.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-28.jpeg":
/*!********************************************************!*\
  !*** ./resources/js/src/assets/images/profile-28.jpeg ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "/images/profile-28-793c7ef7226ad2d7ebd057fbfe924579.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-29.jpeg":
/*!********************************************************!*\
  !*** ./resources/js/src/assets/images/profile-29.jpeg ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "/images/profile-29-c225c542244808337734e6a99b8561ad.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-3.jpeg":
/*!*******************************************************!*\
  !*** ./resources/js/src/assets/images/profile-3.jpeg ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "/images/profile-3-ab2d579c360f31c986d98f5bdcffbcdb.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-30.png":
/*!*******************************************************!*\
  !*** ./resources/js/src/assets/images/profile-30.png ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "/images/profile-30-76391bd594bf370fd6349b438e2355cd.png";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-31.jpeg":
/*!********************************************************!*\
  !*** ./resources/js/src/assets/images/profile-31.jpeg ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "/images/profile-31-97bac4c12c959639ccda0ba9c6335a4b.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-32.jpeg":
/*!********************************************************!*\
  !*** ./resources/js/src/assets/images/profile-32.jpeg ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "/images/profile-32-868df2c85b88c8f83554b2245237d5c9.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-33.jpeg":
/*!********************************************************!*\
  !*** ./resources/js/src/assets/images/profile-33.jpeg ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "/images/profile-33-78f25ba375c31f14fd6dfc3fd0ef55c4.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-34.jpeg":
/*!********************************************************!*\
  !*** ./resources/js/src/assets/images/profile-34.jpeg ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "/images/profile-34-9de2bdb81a413eaef30270f6d33e8c54.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-4.jpeg":
/*!*******************************************************!*\
  !*** ./resources/js/src/assets/images/profile-4.jpeg ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "/images/profile-4-8a4c33cc905139db289ede8060640b69.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-5.jpeg":
/*!*******************************************************!*\
  !*** ./resources/js/src/assets/images/profile-5.jpeg ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "/images/profile-5-05b70ad96255ec3cdf0a840f74fa41d3.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-6.jpeg":
/*!*******************************************************!*\
  !*** ./resources/js/src/assets/images/profile-6.jpeg ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "/images/profile-6-c53ec44e2743a6cb8b5865ebd91e3a70.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-7.jpeg":
/*!*******************************************************!*\
  !*** ./resources/js/src/assets/images/profile-7.jpeg ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "/images/profile-7-72dcc5961b1b6ee0a1e6284c72fae404.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-8.jpeg":
/*!*******************************************************!*\
  !*** ./resources/js/src/assets/images/profile-8.jpeg ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "/images/profile-8-82d3e90e675362b74a84f1771c017a3c.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-9.jpeg":
/*!*******************************************************!*\
  !*** ./resources/js/src/assets/images/profile-9.jpeg ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "/images/profile-9-47e0e1da65fe2d8b2e18a0637e3dc5cb.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/scroll-6.jpeg":
/*!******************************************************!*\
  !*** ./resources/js/src/assets/images/scroll-6.jpeg ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "/images/scroll-6-2a207158889cde36be932cf0f96559fd.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/scroll-7.jpeg":
/*!******************************************************!*\
  !*** ./resources/js/src/assets/images/scroll-7.jpeg ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "/images/scroll-7-7a0b6bfcada30e73a6f120c401292314.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/scroll-8.jpeg":
/*!******************************************************!*\
  !*** ./resources/js/src/assets/images/scroll-8.jpeg ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "/images/scroll-8-787e6f2ac4211e9a4aae6946dd82f345.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/slider-1.jpeg":
/*!******************************************************!*\
  !*** ./resources/js/src/assets/images/slider-1.jpeg ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "/images/slider-1-fb5e919a99b10f3d6ec50fc0c89365ab.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/slider-2.jpeg":
/*!******************************************************!*\
  !*** ./resources/js/src/assets/images/slider-2.jpeg ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "/images/slider-2-c8f15060fb0ca38fa24e916693cdf8fd.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/slider-3.jpeg":
/*!******************************************************!*\
  !*** ./resources/js/src/assets/images/slider-3.jpeg ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "/images/slider-3-2293f2deb0b569bf52f834be08261863.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/sweet-bg.jpg":
/*!*****************************************************!*\
  !*** ./resources/js/src/assets/images/sweet-bg.jpg ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "/images/sweet-bg-89377d8efef5027f9900385176c99a7e.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/taskboard.jpg":
/*!******************************************************!*\
  !*** ./resources/js/src/assets/images/taskboard.jpg ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "/images/taskboard-fb3689d13f1caf87151a3387ec937aaa.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/thumbs-up.jpg":
/*!******************************************************!*\
  !*** ./resources/js/src/assets/images/thumbs-up.jpg ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "/images/thumbs-up-9ace5b7ae799ba8d143de7cd1cfee527.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/tl-2.jpeg":
/*!**************************************************!*\
  !*** ./resources/js/src/assets/images/tl-2.jpeg ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "/images/tl-2-a9ee53554096ae2dcff3d894f5b92438.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/tl-3.jpeg":
/*!**************************************************!*\
  !*** ./resources/js/src/assets/images/tl-3.jpeg ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "/images/tl-3-53911a7b915144bfc3a38e7c96d1dfc2.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/tl-4.jpeg":
/*!**************************************************!*\
  !*** ./resources/js/src/assets/images/tl-4.jpeg ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "/images/tl-4-b2ccd09abc679c5c4f17ec98d67fb6b4.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/tl-5.jpeg":
/*!**************************************************!*\
  !*** ./resources/js/src/assets/images/tl-5.jpeg ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "/images/tl-5-23ad563aaa057ba4a71f1a9b004f120d.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/user-avtar.svg":
/*!*******************************************************!*\
  !*** ./resources/js/src/assets/images/user-avtar.svg ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "/images/user-avtar-32e9d54af3e24aea78b217bf57d8aba1.svg";

/***/ }),

/***/ "./resources/js/src/assets/images/user-profile.jpeg":
/*!**********************************************************!*\
  !*** ./resources/js/src/assets/images/user-profile.jpeg ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "/images/user-profile-26fc32107d4b21a1d5adb117f1edf4e1.jpeg";

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[0]!./resources/js/src/assets/sass/elements/search.scss":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[0]!./resources/js/src/assets/sass/elements/search.scss ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*\n\t===============================\n\t\t\t@Import\tMixins\n\t===============================\n*/\n/*\n  Live Search\n*/\n.filtered-list-search-live {\n  margin-top: 0;\n  margin-bottom: 50px;\n}\n\n.filtered-list-search-live form > div {\n  position: relative;\n}\n\n.filtered-list-search-live form input {\n  border: none;\n  padding: 10px 16px;\n  background: #fff;\n  box-shadow: 0 0 4px 2px rgba(31, 45, 61, 0.1);\n}\n\n.filtered-list-search-live form input:focus {\n  box-shadow: 0 0 4px 2px rgba(31, 45, 61, 0.1);\n}\n\n.filtered-list-search-live form button {\n  border-radius: 50%;\n  padding: 7px 7px;\n  position: absolute;\n  right: 4px;\n  top: 4px;\n}\n\n.filtered-list-search-live form input::-webkit-input-placeholder {\n  /* Chrome/Opera/Safari */\n  color: #888ea8;\n}\n\n.filtered-list-search-live form input::-moz-placeholder {\n  /* Firefox 19+ */\n  color: #888ea8;\n}\n\n.filtered-list-search-live form input:-ms-input-placeholder {\n  /* IE 10+ */\n  color: #888ea8;\n}\n\n.filtered-list-search-live form input:-moz-placeholder {\n  /* Firefox 18- */\n  color: #888ea8;\n}\n\n.searchable-container-live {\n  max-width: 1140px;\n  margin: 0 auto;\n}\n\n.searchable-container-live .searchable-items {\n  display: block;\n  width: 100%;\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n  padding: 13px;\n  border: 1px solid #e0e6ed;\n  border-radius: 10px;\n}\n\n.searchable-container-live .items {\n  flex-direction: row;\n  align-items: center;\n  padding: 0.75rem 0.625rem;\n  position: relative;\n  display: flex;\n  min-width: 0;\n  word-wrap: break-word;\n  justify-content: space-between;\n  background: #fff;\n  margin-bottom: 15px;\n  border-radius: 14px;\n  padding: 13px 18px;\n  width: 100%;\n  color: #0e1726;\n  min-width: 625px;\n  transition: all 0.35s ease;\n  cursor: pointer;\n  box-shadow: 0px 2px 9px 2px rgba(31, 45, 61, 0.1);\n}\n\n.searchable-container-live .items:hover {\n  transform: translateY(0) scale(1.03);\n  transform: translateY(0) scale(1.01);\n}\n\n.searchable-container-live .items .user-profile {\n  display: flex;\n}\n\n.searchable-container-live .items .user-profile img {\n  width: 43px;\n  height: 43px;\n  border-radius: 5px;\n}\n\n.searchable-container-live .items .user-name p,\n.searchable-container-live .items .user-work p,\n.searchable-container-live .items .user-email p {\n  margin-bottom: 0;\n  color: #888ea8;\n  font-weight: 600;\n}\n\n.searchable-container-live .items .user-status span.badge {\n  background: transparent;\n  transform: none;\n}\n\n.searchable-container-live .items .user-status span.badge.badge-warning {\n  color: #e2a03f;\n  border: 2px dashed #e2a03f;\n}\n\n.searchable-container-live .items .user-status span.badge.badge-danger {\n  color: #e7515a;\n  border: 2px dashed #e7515a;\n}\n\n.searchable-container-live .items .user-status span.badge.badge-primary {\n  color: #4361ee;\n  border: 2px dashed #4361ee;\n}\n\n.searchable-container-live .items .action-btn p {\n  margin-bottom: 0;\n  color: #3b3f5c;\n  cursor: pointer;\n  font-weight: 600;\n}\n\n.searchable-container-live .items:hover .serial-number p,\n.searchable-container-live .items:hover .user-name p,\n.searchable-container-live .items:hover .user-work p,\n.searchable-container-live .items:hover .user-email p,\n.searchable-container-live .items:hover .action-btn p {\n  color: #4361ee;\n}\n\n/*\n    Line Search\n*/\n.full-search.search-form-overlay {\n  height: 50px;\n  position: relative;\n  border: 1px solid #e0e6ed;\n  border-radius: 5px;\n  padding: 6px;\n}\n\n.search-form-overlay.input-focused .form-inline.search {\n  position: absolute;\n  bottom: 0;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  left: 0;\n  right: 0;\n  z-index: 32;\n  border-radius: 0;\n  margin-top: 0px !important;\n  display: flex;\n  padding: 0;\n}\n\n.search-form-overlay .form-inline {\n  justify-content: flex-end;\n}\n\n.search-form-overlay .form-inline svg {\n  font-weight: 600;\n  margin: 4px 10px;\n  cursor: pointer;\n  color: #888ea8;\n}\n\n.search-form-overlay.input-focused .form-inline svg {\n  margin: 0;\n  position: absolute;\n  top: 10px;\n  left: 11px;\n}\n\n.search-form-overlay.input-focused .form-inline.search .search-bar {\n  width: 100%;\n}\n\n.search-form-overlay form.form-inline input.search-form-control {\n  width: 100%;\n  font-size: 13px;\n  background-color: #e3e3e3;\n  padding-top: 8px;\n  padding-bottom: 8px;\n  border: none;\n  color: #515365;\n  letter-spacing: 1px;\n}\n\n.search-form-overlay .form-inline.search .search-form-control {\n  border: none;\n  width: 100%;\n  display: none;\n  box-shadow: none;\n}\n\n.search-form-overlay.input-focused .form-inline.search .search-form-control {\n  background: transparent;\n  border-bottom: none;\n  display: block;\n  padding-left: 45px;\n}\n\n.demo-search-overlay {\n  display: none;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: #fff !important;\n  z-index: 0;\n  opacity: 0;\n  transition: all 0.5s ease-in-out;\n  left: 0;\n  right: 0;\n}\n\n.demo-search-overlay.show {\n  display: block;\n  opacity: 0.1;\n}\n\n/*\n    Search Box\n*/\n.search-input-group-style.input-group {\n  box-shadow: 0px 0px 0px 1px rgba(136, 142, 168, 0.3137254902);\n}\n\n.search-input-group-style.input-group .input-group-prepend .input-group-text {\n  border: 1px solid #ffffff;\n  background-color: #ffffff;\n}\n\n.search-input-group-style.input-group .input-group-prepend .input-group-text svg {\n  color: #4361ee;\n}\n\n.search-input-group-style input {\n  border: none;\n  border-radius: 4px;\n  padding: 6px 16px;\n  color: #0e1726;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/js/src/assets/sass/elements/search.scss":
/*!***********************************************************!*\
  !*** ./resources/js/src/assets/sass/elements/search.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_0_search_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../../../node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[0]!./search.scss */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[0]!./resources/js/src/assets/sass/elements/search.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_0_search_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_0_search_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/src/views/elements/search.vue":
/*!****************************************************!*\
  !*** ./resources/js/src/views/elements/search.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _search_vue_vue_type_template_id_b4b178b4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search.vue?vue&type=template&id=b4b178b4& */ "./resources/js/src/views/elements/search.vue?vue&type=template&id=b4b178b4&");
/* harmony import */ var _search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.vue?vue&type=script&lang=js& */ "./resources/js/src/views/elements/search.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _search_vue_vue_type_template_id_b4b178b4___WEBPACK_IMPORTED_MODULE_0__.render,
  _search_vue_vue_type_template_id_b4b178b4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/elements/search.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/elements/search.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/src/views/elements/search.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./search.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/elements/search.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/elements/search.vue?vue&type=template&id=b4b178b4&":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/views/elements/search.vue?vue&type=template&id=b4b178b4& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_template_id_b4b178b4___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_template_id_b4b178b4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_template_id_b4b178b4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./search.vue?vue&type=template&id=b4b178b4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/elements/search.vue?vue&type=template&id=b4b178b4&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/elements/search.vue?vue&type=template&id=b4b178b4&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/elements/search.vue?vue&type=template&id=b4b178b4& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
                      [_c("span", [_vm._v("Search")])]
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
                    attrs: { href: "#searchLive" },
                  },
                  [_vm._v("Live")]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "nav-link scrollactive-item",
                    attrs: { href: "#searchOverlay" },
                  },
                  [_vm._v("Overlay")]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "nav-link scrollactive-item",
                    attrs: { href: "#searchBoxed" },
                  },
                  [_vm._v("Boxed")]
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
              staticClass: "col-lg-12 layout-spacing",
              attrs: { id: "searchLive" },
            },
            [
              _c("div", { staticClass: "statbox panel box box-shadow" }, [
                _vm._m(0),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "panel-body text-center tags-content" },
                  [
                    _c("div", { staticClass: "row" }, [
                      _c(
                        "div",
                        {
                          staticClass:
                            "col-lg-8 col-md-8 col-sm-9 filtered-list-search-live mx-auto",
                        },
                        [
                          _c(
                            "b-form",
                            {
                              staticClass:
                                "form-inline my-2 my-lg-0 justify-content-center",
                              on: {
                                submit: function ($event) {
                                  $event.preventDefault()
                                  return _vm.search.apply(null, arguments)
                                },
                              },
                            },
                            [
                              _c(
                                "div",
                                { staticClass: "w-100" },
                                [
                                  _c("b-input", {
                                    staticClass: "w-100 product-search br-30",
                                    attrs: {
                                      placeholder: "Search Attendees...",
                                    },
                                    on: { keyup: _vm.search },
                                    model: {
                                      value: _vm.search_text,
                                      callback: function ($$v) {
                                        _vm.search_text = $$v
                                      },
                                      expression: "search_text",
                                    },
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "b-button",
                                    {
                                      attrs: {
                                        variant: "primary",
                                        type: "submit",
                                      },
                                    },
                                    [
                                      _c(
                                        "svg",
                                        {
                                          staticClass: "feather feather-search",
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
                                          _c("circle", {
                                            attrs: {
                                              cx: "11",
                                              cy: "11",
                                              r: "8",
                                            },
                                          }),
                                          _c("line", {
                                            attrs: {
                                              x1: "21",
                                              y1: "21",
                                              x2: "16.65",
                                              y2: "16.65",
                                            },
                                          }),
                                        ]
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              ),
                            ]
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-lg-12" }, [
                        _c(
                          "div",
                          { staticClass: "searchable-container-live" },
                          [
                            _c("div", { staticClass: "row" }, [
                              _c("div", { staticClass: "col-md-12" }, [
                                _c(
                                  "div",
                                  { staticClass: "searchable-items" },
                                  _vm._l(
                                    _vm.search_items,
                                    function (item, index) {
                                      return _c(
                                        "div",
                                        { key: index, staticClass: "items" },
                                        [
                                          _c(
                                            "div",
                                            { staticClass: "user-profile" },
                                            [
                                              _c("img", {
                                                attrs: {
                                                  src: __webpack_require__("./resources/js/src/assets/images sync recursive ^\\.\\/.*$")("./" +
                                                    item.thumb),
                                                  alt: "avatar",
                                                },
                                              }),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "user-name" },
                                            [
                                              _c("p", {}, [
                                                _vm._v(_vm._s(item.name)),
                                              ]),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "user-email" },
                                            [
                                              _c("p", [
                                                _vm._v(_vm._s(item.email)),
                                              ]),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "user-status" },
                                            [
                                              _c(
                                                "span",
                                                { class: item.status_class },
                                                [_vm._v(_vm._s(item.status))]
                                              ),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "action-btn" },
                                            [
                                              _c("p", [
                                                _c(
                                                  "svg",
                                                  {
                                                    staticClass:
                                                      "feather feather-more-horizontal",
                                                    attrs: {
                                                      xmlns:
                                                        "http://www.w3.org/2000/svg",
                                                      width: "24",
                                                      height: "24",
                                                      viewBox: "0 0 24 24",
                                                      fill: "none",
                                                      stroke: "currentColor",
                                                      "stroke-width": "2",
                                                      "stroke-linecap": "round",
                                                      "stroke-linejoin":
                                                        "round",
                                                    },
                                                  },
                                                  [
                                                    _c("circle", {
                                                      attrs: {
                                                        cx: "12",
                                                        cy: "12",
                                                        r: "1",
                                                      },
                                                    }),
                                                    _c("circle", {
                                                      attrs: {
                                                        cx: "19",
                                                        cy: "12",
                                                        r: "1",
                                                      },
                                                    }),
                                                    _c("circle", {
                                                      attrs: {
                                                        cx: "5",
                                                        cy: "12",
                                                        r: "1",
                                                      },
                                                    }),
                                                  ]
                                                ),
                                              ]),
                                            ]
                                          ),
                                        ]
                                      )
                                    }
                                  ),
                                  0
                                ),
                              ]),
                            ]),
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
                                      '<b-form class="form-inline my-2 my-lg-0 justify-content-center">\n    <div class="w-100">\n        <b-input class="w-100 product-search br-30" placeholder="Search Attendees..."></b-input>\n        <b-button variant="primary" type="submit">\n            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>\n        </b-button>\n    </div>\n</b-form>\n'
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
              attrs: { id: "searchOverlay" },
            },
            [
              _c("div", { staticClass: "statbox panel box box-shadow" }, [
                _vm._m(1),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "panel-body text-center tags-content" },
                  [
                    _c("div", {
                      staticClass: "demo-search-overlay",
                      class: { show: _vm.is_show_search_overlay },
                      on: {
                        click: function ($event) {
                          _vm.is_show_search_overlay =
                            !_vm.is_show_search_overlay
                        },
                      },
                    }),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "full-search search-form-overlay",
                        class: { "input-focused": _vm.is_show_search_overlay },
                        on: {
                          click: function ($event) {
                            _vm.is_show_search_overlay =
                              !_vm.is_show_search_overlay
                          },
                        },
                      },
                      [
                        _c(
                          "b-form",
                          {
                            staticClass:
                              "form-inline form-inline search mt-lg-0",
                          },
                          [
                            _c(
                              "span",
                              {
                                on: {
                                  click: function ($event) {
                                    return $event.stopPropagation()
                                  },
                                },
                              },
                              [
                                _c(
                                  "svg",
                                  {
                                    staticClass: "feather feather-search",
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
                                    _c("circle", {
                                      attrs: { cx: "11", cy: "11", r: "8" },
                                    }),
                                    _c("line", {
                                      attrs: {
                                        x1: "21",
                                        y1: "21",
                                        x2: "16.65",
                                        y2: "16.65",
                                      },
                                    }),
                                  ]
                                ),
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "search-bar" },
                              [
                                _c("b-input", {
                                  staticClass: "search-form-control ml-lg-auto",
                                  attrs: { placeholder: "Search..." },
                                  on: {
                                    click: function ($event) {
                                      return $event.stopPropagation()
                                    },
                                  },
                                }),
                              ],
                              1
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
                                      '<div class="demo-search-overlay" :class="{\'show\': is_show_search_overlay}" @click="is_show_search_overlay = !is_show_search_overlay"></div>\n\n<div class="full-search search-form-overlay" :class="{\'input-focused\': is_show_search_overlay}" @click="is_show_search_overlay = !is_show_search_overlay">\n    <b-form class="form-inline form-inline search mt-lg-0">\n        <span @click="$event.stopPropagation()">\n            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>\n        </span>\n        <div class="search-bar">\n            <b-input class="search-form-control ml-lg-auto" placeholder="Search..." @click="$event.stopPropagation()"></b-input>\n        </div>\n    </b-form>\n</div>\n'
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
              attrs: { id: "searchBoxed" },
            },
            [
              _c("div", { staticClass: "statbox panel box box-shadow" }, [
                _vm._m(2),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "panel-body text-center tags-content" },
                  [
                    _c(
                      "b-input-group",
                      {
                        staticClass:
                          "search-input-group-style input-group mb-3",
                      },
                      [
                        _c("b-input-group-prepend", [
                          _c("span", { staticClass: "input-group-text" }, [
                            _c(
                              "svg",
                              {
                                staticClass: "feather feather-search",
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
                                _c("circle", {
                                  attrs: { cx: "11", cy: "11", r: "8" },
                                }),
                                _c("line", {
                                  attrs: {
                                    x1: "21",
                                    y1: "21",
                                    x2: "16.65",
                                    y2: "16.65",
                                  },
                                }),
                              ]
                            ),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("b-input", {
                          attrs: {
                            placeholder: "Let's find your question in fast way",
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
                                      '<b-input-group class="search-input-group-style input-group mb-3">\n    <b-input-group-prepend>\n        <span class="input-group-text"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></span>\n    </b-input-group-prepend>\n    <b-input placeholder="Let\'s find your question in fast way"></b-input>\n</b-input-group>\n'
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
          _c("h4", [_vm._v("Live Search")]),
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
          _c("h4", [_vm._v("Overlay")]),
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
          _c("h4", [_vm._v("Search Box")]),
        ]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/assets/images sync recursive ^\\.\\/.*$":
/*!*******************************************************!*\
  !*** ./resources/js/src/assets/images/ sync ^\.\/.*$ ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./1.jpeg": "./resources/js/src/assets/images/1.jpeg",
	"./2.jpg": "./resources/js/src/assets/images/2.jpg",
	"./3.jpeg": "./resources/js/src/assets/images/3.jpeg",
	"./ab-1.jpeg": "./resources/js/src/assets/images/ab-1.jpeg",
	"./arrow-down.png": "./resources/js/src/assets/images/arrow-down.png",
	"./bg.png": "./resources/js/src/assets/images/bg.png",
	"./boy-1.png": "./resources/js/src/assets/images/boy-1.png",
	"./boy-2.png": "./resources/js/src/assets/images/boy-2.png",
	"./boy.png": "./resources/js/src/assets/images/boy.png",
	"./contact-us-map-pin.svg": "./resources/js/src/assets/images/contact-us-map-pin.svg",
	"./cork-logo.png": "./resources/js/src/assets/images/cork-logo.png",
	"./delete-user-11.jpeg": "./resources/js/src/assets/images/delete-user-11.jpeg",
	"./delete-user-12.jpeg": "./resources/js/src/assets/images/delete-user-12.jpeg",
	"./delete-user-15.jpeg": "./resources/js/src/assets/images/delete-user-15.jpeg",
	"./delete-user-16.jpeg": "./resources/js/src/assets/images/delete-user-16.jpeg",
	"./delete-user-17.jpeg": "./resources/js/src/assets/images/delete-user-17.jpeg",
	"./delete-user-4.jpeg": "./resources/js/src/assets/images/delete-user-4.jpeg",
	"./drag-1.jpeg": "./resources/js/src/assets/images/drag-1.jpeg",
	"./drag-2.jpeg": "./resources/js/src/assets/images/drag-2.jpeg",
	"./drag-4.jpg": "./resources/js/src/assets/images/drag-4.jpg",
	"./dragp-1.jpeg": "./resources/js/src/assets/images/dragp-1.jpeg",
	"./dragp-4.jpeg": "./resources/js/src/assets/images/dragp-4.jpeg",
	"./dragp-6.jpeg": "./resources/js/src/assets/images/dragp-6.jpeg",
	"./dragp-7.jpeg": "./resources/js/src/assets/images/dragp-7.jpeg",
	"./faq.svg": "./resources/js/src/assets/images/faq.svg",
	"./features_overview.svg": "./resources/js/src/assets/images/features_overview.svg",
	"./file-preview.png": "./resources/js/src/assets/images/file-preview.png",
	"./flags/brl.png": "./resources/js/src/assets/images/flags/brl.png",
	"./flags/da.png": "./resources/js/src/assets/images/flags/da.png",
	"./flags/de.png": "./resources/js/src/assets/images/flags/de.png",
	"./flags/el.png": "./resources/js/src/assets/images/flags/el.png",
	"./flags/en.png": "./resources/js/src/assets/images/flags/en.png",
	"./flags/es.png": "./resources/js/src/assets/images/flags/es.png",
	"./flags/fr.png": "./resources/js/src/assets/images/flags/fr.png",
	"./flags/gbp.png": "./resources/js/src/assets/images/flags/gbp.png",
	"./flags/hu.png": "./resources/js/src/assets/images/flags/hu.png",
	"./flags/idr.png": "./resources/js/src/assets/images/flags/idr.png",
	"./flags/inr.png": "./resources/js/src/assets/images/flags/inr.png",
	"./flags/it.png": "./resources/js/src/assets/images/flags/it.png",
	"./flags/ja.png": "./resources/js/src/assets/images/flags/ja.png",
	"./flags/jp.png": "./resources/js/src/assets/images/flags/jp.png",
	"./flags/pl.png": "./resources/js/src/assets/images/flags/pl.png",
	"./flags/pt.png": "./resources/js/src/assets/images/flags/pt.png",
	"./flags/ru.png": "./resources/js/src/assets/images/flags/ru.png",
	"./flags/sv.png": "./resources/js/src/assets/images/flags/sv.png",
	"./flags/tr.png": "./resources/js/src/assets/images/flags/tr.png",
	"./flags/zh.png": "./resources/js/src/assets/images/flags/zh.png",
	"./g-7.png": "./resources/js/src/assets/images/g-7.png",
	"./g-8.png": "./resources/js/src/assets/images/g-8.png",
	"./girl-1.png": "./resources/js/src/assets/images/girl-1.png",
	"./girl-2.png": "./resources/js/src/assets/images/girl-2.png",
	"./girl-3.png": "./resources/js/src/assets/images/girl-3.png",
	"./girl-4.png": "./resources/js/src/assets/images/girl-4.png",
	"./grid-blog-style-1.jpg": "./resources/js/src/assets/images/grid-blog-style-1.jpg",
	"./grid-blog-style-2.jpeg": "./resources/js/src/assets/images/grid-blog-style-2.jpeg",
	"./grid-blog-style-3.jpg": "./resources/js/src/assets/images/grid-blog-style-3.jpg",
	"./lightbox-1.jpg": "./resources/js/src/assets/images/lightbox-1.jpg",
	"./lightbox-14.jpeg": "./resources/js/src/assets/images/lightbox-14.jpeg",
	"./lightbox-15.jpeg": "./resources/js/src/assets/images/lightbox-15.jpeg",
	"./lightbox-2.jpeg": "./resources/js/src/assets/images/lightbox-2.jpeg",
	"./lightbox-3.jpeg": "./resources/js/src/assets/images/lightbox-3.jpeg",
	"./lightbox-8.jpeg": "./resources/js/src/assets/images/lightbox-8.jpeg",
	"./list-blog-style-2.jpeg": "./resources/js/src/assets/images/list-blog-style-2.jpeg",
	"./list-blog-style-3.jpeg": "./resources/js/src/assets/images/list-blog-style-3.jpeg",
	"./logo.svg": "./resources/js/src/assets/images/logo.svg",
	"./logo2.svg": "./resources/js/src/assets/images/logo2.svg",
	"./masonry-blog-style-3.jpeg": "./resources/js/src/assets/images/masonry-blog-style-3.jpeg",
	"./masonry-blog-style-4.jpeg": "./resources/js/src/assets/images/masonry-blog-style-4.jpeg",
	"./mindset.svg": "./resources/js/src/assets/images/mindset.svg",
	"./p6.jpeg": "./resources/js/src/assets/images/p6.jpeg",
	"./p7.jpeg": "./resources/js/src/assets/images/p7.jpeg",
	"./p9.jpeg": "./resources/js/src/assets/images/p9.jpeg",
	"./product-camera.jpg": "./resources/js/src/assets/images/product-camera.jpg",
	"./product-headphones.jpg": "./resources/js/src/assets/images/product-headphones.jpg",
	"./product-laptop.jpg": "./resources/js/src/assets/images/product-laptop.jpg",
	"./product-shoes.jpg": "./resources/js/src/assets/images/product-shoes.jpg",
	"./product-watch.jpg": "./resources/js/src/assets/images/product-watch.jpg",
	"./profile-1.jpeg": "./resources/js/src/assets/images/profile-1.jpeg",
	"./profile-10.jpeg": "./resources/js/src/assets/images/profile-10.jpeg",
	"./profile-11.jpeg": "./resources/js/src/assets/images/profile-11.jpeg",
	"./profile-12.jpeg": "./resources/js/src/assets/images/profile-12.jpeg",
	"./profile-13.jpeg": "./resources/js/src/assets/images/profile-13.jpeg",
	"./profile-14.jpeg": "./resources/js/src/assets/images/profile-14.jpeg",
	"./profile-15.jpeg": "./resources/js/src/assets/images/profile-15.jpeg",
	"./profile-16.jpeg": "./resources/js/src/assets/images/profile-16.jpeg",
	"./profile-17.jpeg": "./resources/js/src/assets/images/profile-17.jpeg",
	"./profile-18.jpeg": "./resources/js/src/assets/images/profile-18.jpeg",
	"./profile-19.jpeg": "./resources/js/src/assets/images/profile-19.jpeg",
	"./profile-2.jpeg": "./resources/js/src/assets/images/profile-2.jpeg",
	"./profile-20.jpeg": "./resources/js/src/assets/images/profile-20.jpeg",
	"./profile-21.jpeg": "./resources/js/src/assets/images/profile-21.jpeg",
	"./profile-23.jpeg": "./resources/js/src/assets/images/profile-23.jpeg",
	"./profile-24.jpeg": "./resources/js/src/assets/images/profile-24.jpeg",
	"./profile-25.jpeg": "./resources/js/src/assets/images/profile-25.jpeg",
	"./profile-26.jpeg": "./resources/js/src/assets/images/profile-26.jpeg",
	"./profile-28.jpeg": "./resources/js/src/assets/images/profile-28.jpeg",
	"./profile-29.jpeg": "./resources/js/src/assets/images/profile-29.jpeg",
	"./profile-3.jpeg": "./resources/js/src/assets/images/profile-3.jpeg",
	"./profile-30.png": "./resources/js/src/assets/images/profile-30.png",
	"./profile-31.jpeg": "./resources/js/src/assets/images/profile-31.jpeg",
	"./profile-32.jpeg": "./resources/js/src/assets/images/profile-32.jpeg",
	"./profile-33.jpeg": "./resources/js/src/assets/images/profile-33.jpeg",
	"./profile-34.jpeg": "./resources/js/src/assets/images/profile-34.jpeg",
	"./profile-4.jpeg": "./resources/js/src/assets/images/profile-4.jpeg",
	"./profile-5.jpeg": "./resources/js/src/assets/images/profile-5.jpeg",
	"./profile-6.jpeg": "./resources/js/src/assets/images/profile-6.jpeg",
	"./profile-7.jpeg": "./resources/js/src/assets/images/profile-7.jpeg",
	"./profile-8.jpeg": "./resources/js/src/assets/images/profile-8.jpeg",
	"./profile-9.jpeg": "./resources/js/src/assets/images/profile-9.jpeg",
	"./scroll-6.jpeg": "./resources/js/src/assets/images/scroll-6.jpeg",
	"./scroll-7.jpeg": "./resources/js/src/assets/images/scroll-7.jpeg",
	"./scroll-8.jpeg": "./resources/js/src/assets/images/scroll-8.jpeg",
	"./slider-1.jpeg": "./resources/js/src/assets/images/slider-1.jpeg",
	"./slider-2.jpeg": "./resources/js/src/assets/images/slider-2.jpeg",
	"./slider-3.jpeg": "./resources/js/src/assets/images/slider-3.jpeg",
	"./sweet-bg.jpg": "./resources/js/src/assets/images/sweet-bg.jpg",
	"./taskboard.jpg": "./resources/js/src/assets/images/taskboard.jpg",
	"./thumbs-up.jpg": "./resources/js/src/assets/images/thumbs-up.jpg",
	"./tl-2.jpeg": "./resources/js/src/assets/images/tl-2.jpeg",
	"./tl-3.jpeg": "./resources/js/src/assets/images/tl-3.jpeg",
	"./tl-4.jpeg": "./resources/js/src/assets/images/tl-4.jpeg",
	"./tl-5.jpeg": "./resources/js/src/assets/images/tl-5.jpeg",
	"./user-avtar.svg": "./resources/js/src/assets/images/user-avtar.svg",
	"./user-profile.jpeg": "./resources/js/src/assets/images/user-profile.jpeg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./resources/js/src/assets/images sync recursive ^\\.\\/.*$";

/***/ })

}]);