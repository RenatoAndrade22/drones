(self["webpackChunk"] = self["webpackChunk"] || []).push([["components-sweetalert"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/components/sweetalert.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/components/sweetalert.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_sass_scrollspyNav_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/assets/sass/scrollspyNav.scss */ "./resources/js/src/assets/sass/scrollspyNav.scss");
/* harmony import */ var _assets_sass_components_custom_sweetalert_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/sass/components/custom-sweetalert.scss */ "./resources/js/src/assets/sass/components/custom-sweetalert.scss");
/* harmony import */ var _components_plugins_highlight_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/plugins/highlight.vue */ "./resources/js/src/components/plugins/highlight.vue");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    title: 'Tabs'
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
    },
    showAlert: function showAlert(type) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var ipAPI, steps, swalQueueStep, values, currentStep, result, timerInterval, swalWithBootstrapButtons, toast;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(type === 1)) {
                  _context.next = 4;
                  break;
                }

                _this.$swal({
                  title: 'Saved succesfully',
                  padding: '2em'
                });

                _context.next = 42;
                break;

              case 4:
                if (!(type === 2)) {
                  _context.next = 8;
                  break;
                }

                _this.$swal({
                  icon: 'success',
                  title: 'Good job!',
                  text: 'You clicked the!',
                  padding: '2em'
                });

                _context.next = 42;
                break;

              case 8:
                if (!(type === 3)) {
                  _context.next = 13;
                  break;
                }

                ipAPI = 'https://api.ipify.org?format=json';

                _this.$swal({
                  title: 'Your public IP',
                  confirmButtonText: 'Show my public IP',
                  text: 'Your public IP will be received ' + 'via AJAX request',
                  showLoaderOnConfirm: true,
                  preConfirm: function preConfirm() {
                    return fetch(ipAPI).then(function (response) {
                      return response.json();
                    }).then(function (data) {
                      _this.$swal({
                        title: data.ip
                      });
                    })["catch"](function () {
                      _this.$swal({
                        type: 'error',
                        title: 'Unable to get your public IP'
                      });
                    });
                  }
                });

                _context.next = 42;
                break;

              case 13:
                if (!(type === 4)) {
                  _context.next = 17;
                  break;
                }

                _this.$swal({
                  icon: 'question',
                  title: 'The Internet?',
                  text: 'That thing is still around?',
                  padding: '2em'
                });

                _context.next = 42;
                break;

              case 17:
                if (!(type === 5)) {
                  _context.next = 41;
                  break;
                }

                steps = ['1', '2', '3'];
                swalQueueStep = _this.$swal.mixin({
                  confirmButtonText: 'Next →',
                  showCancelButton: true,
                  progressSteps: steps,
                  input: 'text',
                  inputAttributes: {
                    required: true
                  },
                  validationMessage: 'This field is required',
                  padding: '2em'
                });
                values = [];
                currentStep = 0;

              case 22:
                if (!(currentStep < steps.length)) {
                  _context.next = 38;
                  break;
                }

                _context.next = 25;
                return swalQueueStep.fire({
                  title: "Question ".concat(steps[currentStep]),
                  text: currentStep == 0 ? 'Chaining swal2 modals is easy.' : '',
                  inputValue: values[currentStep],
                  showCancelButton: currentStep > 0,
                  currentProgressStep: currentStep
                });

              case 25:
                result = _context.sent;

                if (!result.value) {
                  _context.next = 31;
                  break;
                }

                values[currentStep] = result.value;
                currentStep++;
                _context.next = 36;
                break;

              case 31:
                if (!(result.dismiss === _this.$swal.DismissReason.cancel)) {
                  _context.next = 35;
                  break;
                }

                currentStep--;
                _context.next = 36;
                break;

              case 35:
                return _context.abrupt("break", 38);

              case 36:
                _context.next = 22;
                break;

              case 38:
                if (currentStep === steps.length) {
                  _this.$swal.fire({
                    title: 'All done!',
                    padding: '2em',
                    html: 'Your answers: <pre>' + JSON.stringify(values) + '</pre>',
                    confirmButtonText: 'Lovely!'
                  });
                }

                _context.next = 42;
                break;

              case 41:
                if (type === 6) {
                  _this.$swal({
                    title: 'Custom animation with Animate.css',
                    animation: false,
                    customClass: 'animated tada',
                    padding: '2em'
                  });
                } else if (type === 7) {
                  _this.$swal({
                    title: 'Auto close alert!',
                    html: 'I will close in <b></b> milliseconds.',
                    timer: 2000,
                    timerProgressBar: true,
                    didOpen: function didOpen() {
                      _this.$swal.showLoading();

                      var b = _this.$swal.getHtmlContainer().querySelector('b');

                      timerInterval = setInterval(function () {
                        b.textContent = _this.$swal.getTimerLeft();
                      }, 100);
                    },
                    willClose: function willClose() {
                      clearInterval(timerInterval);
                    }
                  }).then(function (result) {
                    if (result.dismiss === this.$swal.DismissReason.timer) {
                      console.log('I was closed by the timer');
                    }
                  });
                } else if (type === 8) {
                  _this.$swal({
                    title: 'Sweet!',
                    text: 'Modal with a custom image.',
                    imageUrl: __webpack_require__(/*! @/assets/images/thumbs-up.jpg */ "./resources/js/src/assets/images/thumbs-up.jpg"),
                    imageWidth: 224,
                    imageHeight: 200,
                    imageAlt: 'Custom image',
                    animation: false,
                    padding: '2em'
                  });
                } else if (type === 9) {
                  _this.$swal({
                    icon: 'info',
                    title: '<i>HTML</i> <u>example</u>',
                    html: 'You can use <b>bold text</b>, ' + '<a href="//github.com">links</a> ' + 'and other HTML tags',
                    showCloseButton: true,
                    showCancelButton: true,
                    focusConfirm: false,
                    confirmButtonText: '<i class="flaticon-checked-1"></i> Great!',
                    confirmButtonAriaLabel: 'Thumbs up, great!',
                    cancelButtonText: '<i class="flaticon-cancel-circle"></i> Cancel',
                    cancelButtonAriaLabel: 'Thumbs down',
                    padding: '2em'
                  });
                } else if (type === 10) {
                  _this.$swal({
                    icon: 'warning',
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    showCancelButton: true,
                    confirmButtonText: 'Delete',
                    padding: '2em'
                  }).then(function (result) {
                    if (result.value) {
                      _this.$swal('Deleted!', 'Your file has been deleted.', 'success');
                    }
                  });
                } else if (type === 11) {
                  swalWithBootstrapButtons = _this.$swal.mixin({
                    confirmButtonClass: 'btn btn-secondary',
                    cancelButtonClass: 'btn btn-dark mr-3',
                    buttonsStyling: false
                  });
                  swalWithBootstrapButtons.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'Yes, delete it!',
                    cancelButtonText: 'No, cancel!',
                    reverseButtons: true,
                    padding: '2em'
                  }).then(function (result) {
                    if (result.value) {
                      swalWithBootstrapButtons.fire('Deleted!', 'Your file has been deleted.', 'success');
                    } else if (result.dismiss === _this.$swal.DismissReason.cancel) {
                      swalWithBootstrapButtons.fire('Cancelled', 'Your imaginary file is safe :)', 'error');
                    }
                  });
                } else if (type === 12) {
                  _this.$swal({
                    title: 'Custom width, padding, background.',
                    width: 600,
                    padding: '7em',
                    customClass: 'background-modal',
                    background: '#fff url(' + __webpack_require__(/*! @/assets/images/sweet-bg.jpg */ "./resources/js/src/assets/images/sweet-bg.jpg") + ') no-repeat 100% 100%'
                  });
                } else if (type === 13) {
                  _this.$swal({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    footer: '<a href>Why do I have this issue?</a>',
                    padding: '2em'
                  });
                } else if (type === 14) {
                  _this.$swal({
                    title: 'هل تريد الاستمرار؟',
                    confirmButtonText: 'نعم',
                    cancelButtonText: 'لا',
                    showCancelButton: true,
                    showCloseButton: true,
                    padding: '2em',
                    target: document.getElementById('rtl-container')
                  });
                } else if (type === 15) {
                  toast = _this.$swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    padding: '2em'
                  });
                  toast.fire({
                    icon: 'success',
                    title: 'Signed in successfully',
                    padding: '2em'
                  });
                }

              case 42:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }
});

/***/ }),

/***/ "./resources/js/src/assets/images/sweet-bg.jpg":
/*!*****************************************************!*\
  !*** ./resources/js/src/assets/images/sweet-bg.jpg ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "/images/sweet-bg-89377d8efef5027f9900385176c99a7e.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/thumbs-up.jpg":
/*!******************************************************!*\
  !*** ./resources/js/src/assets/images/thumbs-up.jpg ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "/images/thumbs-up-9ace5b7ae799ba8d143de7cd1cfee527.jpg";

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[0]!./resources/js/src/assets/sass/components/custom-sweetalert.scss":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[0]!./resources/js/src/assets/sass/components/custom-sweetalert.scss ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "/*\n\t===============================\n\t\t\t@Import\tMixins\n\t===============================\n*/\n.swal2-popup {\n  display: none;\n  position: relative;\n  flex-direction: column;\n  justify-content: center;\n  width: 32em;\n  max-width: 100%;\n  padding: 1.25em;\n  border-radius: 0.3125em;\n  background: #fff;\n  font-family: inherit;\n  font-size: 1rem;\n  box-sizing: border-box;\n}\n\n.swal2-popup .swal2-title {\n  display: block;\n  position: relative;\n  max-width: 100%;\n  margin: 0 0 0.4em;\n  padding: 0;\n  color: #3b3f5c;\n  font-size: 24px;\n  font-weight: 600;\n  text-align: center;\n  text-transform: none;\n  word-wrap: break-word;\n}\n\n.swal2-popup .swal2-styled {\n  border: 0;\n  box-shadow: none;\n  color: #fff;\n  cursor: pointer;\n  padding: 10px 25px !important;\n  box-shadow: 0px 5px 20px 0 rgba(0, 0, 0, 0.1) !important;\n  letter-spacing: 1px;\n  font-size: 14px;\n  transition: all 0.3s ease-out;\n  -webkit-transition: all 0.3s ease-out;\n  margin: 0 0.3125em;\n  padding: 0.625em 2em;\n  font-weight: 500;\n}\n\n.swal2-popup .swal2-styled.swal2-cancel {\n  background-color: #fff !important;\n  color: #4361ee;\n  font-weight: 700;\n  border: 1px solid #e8e8e8;\n}\n\n.swal2-popup .swal2-styled.swal2-confirm {\n  border: 0;\n  border-radius: 0.25em;\n  background: initial;\n  background-color: #4361ee;\n  color: #fff;\n  font-size: 14px;\n}\n\n.swal2-popup .swal2-html-container {\n  justify-content: center;\n  margin: 0;\n  padding: 0;\n  color: #e95f2b;\n  font-size: 1.125em;\n  font-weight: 300;\n  line-height: normal;\n  word-wrap: break-word;\n}\n\n.swal2-popup .swal2-close {\n  position: absolute;\n  top: 0;\n  right: 0;\n  justify-content: center;\n  width: 1.2em;\n  height: 1.2em;\n  padding: 0;\n  transition: color 0.1s ease-out;\n  border: none;\n  border-radius: 0;\n  background: 0 0;\n  color: #ccc;\n  font-family: serif;\n  font-size: 2.5em;\n  line-height: 1.2;\n  cursor: pointer;\n  overflow: hidden;\n}\n\n.swal2-popup.swal2-toast {\n  flex-direction: row;\n  align-items: center;\n  width: auto !important;\n  box-shadow: 0 0 0.625em #d9d9d9;\n  padding: 2em !important;\n  overflow-y: hidden;\n  display: flex !important;\n}\n\n.swal2-popup.swal2-toast.swal2-show {\n  -webkit-animation: showSweetToast 0.5s;\n  animation: showSweetToast 0.5s;\n}\n\n.swal2-popup pre {\n  color: #009688;\n}\n\n.swal2-icon {\n  position: relative;\n  box-sizing: content-box;\n  justify-content: center;\n  width: 5em;\n  height: 5em;\n  margin: 1.25em auto 1.875em;\n  border: 0.25em solid transparent;\n  border-radius: 50%;\n  border-color: #000;\n  font-family: inherit;\n  line-height: 5em;\n  cursor: default;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n}\n\n.swal2-icon:not(.swal2-error):not(.swal2-success) {\n  width: 2em !important;\n  line-height: 119px !important;\n  height: 2em !important;\n  margin: 0.25em auto 0.875em !important;\n}\n\n.swal2-icon.swal2-error {\n  border-color: #e7515a !important;\n  border: 5px solid #f1f2f3 !important;\n  box-shadow: 0px 3px 25px 0px rgba(113, 106, 202, 0.2);\n}\n\n.swal2-icon.swal2-warning {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  color: #ffbb44 !important;\n  border: 5px solid #f1f2f3 !important;\n  box-shadow: 0px 3px 25px 0px rgba(113, 106, 202, 0.2);\n  font-size: 60px;\n  line-height: 80px;\n  text-align: center;\n}\n\n.swal2-icon.swal2-info {\n  font-family: \"Open Sans\", sans-serif;\n  color: #4361ee !important;\n  border: 5px solid #f1f2f3 !important;\n  box-shadow: 0px 3px 25px 0px rgba(113, 106, 202, 0.2);\n  font-size: 60px;\n  line-height: 80px;\n  text-align: center;\n}\n\n.swal2-icon.swal2-question {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  color: #805dca !important;\n  border: solid 5px #ebedf2 !important;\n  border-color: none !important;\n  text-align: center;\n  box-shadow: 0px 3px 25px 0px rgba(113, 106, 202, 0.2);\n  font-size: 60px;\n  line-height: 80px;\n  text-align: center;\n}\n\n.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip] {\n  top: 2.875em;\n  left: 0.875em;\n  width: 1.5625em;\n  transform: rotate(45deg);\n}\n\n.swal2-icon.swal2-success [class^=swal2-success-line][class$=long] {\n  top: 2.375em;\n  right: 0.5em;\n  width: 2.9375em;\n  transform: rotate(-45deg);\n}\n\n.swal2-icon.swal2-success .swal2-success-fix {\n  position: absolute;\n  top: 0.5em;\n  left: 1.625em;\n  width: 0.4375em;\n  height: 5.625em;\n  transform: rotate(-45deg);\n  z-index: 1;\n}\n\n.swal2-icon.swal2-success .swal2-success-ring {\n  position: absolute;\n  top: -0.25em;\n  left: -0.25em;\n  width: 100%;\n  height: 100%;\n  border: 0.25em solid rgba(165, 220, 134, 0.3);\n  border-radius: 50%;\n  z-index: 2;\n  box-sizing: content-box;\n}\n\n.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right] {\n  top: -0.6875em;\n  left: 1.875em;\n  transform: rotate(-45deg);\n  transform-origin: 0 3.75em;\n  border-radius: 0 7.5em 7.5em 0;\n}\n\n.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step {\n  background: #25d5e4 !important;\n}\n\n.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step ~ .swal2-progress-step {\n  background: #ebedf2 !important;\n}\n\n.swal2-icon-content {\n  font-size: 5.75rem !important;\n}\n\n.swal2-show {\n  -webkit-animation: swal2-show 0.3s;\n  animation: swal2-show 0.3s;\n}\n\n.swal2-modal.background-modal .swal2-title {\n  color: #fff !important;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/js/src/assets/sass/components/custom-sweetalert.scss":
/*!************************************************************************!*\
  !*** ./resources/js/src/assets/sass/components/custom-sweetalert.scss ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_0_custom_sweetalert_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../../../node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[0]!./custom-sweetalert.scss */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[0]!./resources/js/src/assets/sass/components/custom-sweetalert.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_0_custom_sweetalert_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_0_custom_sweetalert_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/src/views/components/sweetalert.vue":
/*!**********************************************************!*\
  !*** ./resources/js/src/views/components/sweetalert.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _sweetalert_vue_vue_type_template_id_21f42c2a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sweetalert.vue?vue&type=template&id=21f42c2a& */ "./resources/js/src/views/components/sweetalert.vue?vue&type=template&id=21f42c2a&");
/* harmony import */ var _sweetalert_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sweetalert.vue?vue&type=script&lang=js& */ "./resources/js/src/views/components/sweetalert.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _sweetalert_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _sweetalert_vue_vue_type_template_id_21f42c2a___WEBPACK_IMPORTED_MODULE_0__.render,
  _sweetalert_vue_vue_type_template_id_21f42c2a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/components/sweetalert.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/components/sweetalert.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/views/components/sweetalert.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sweetalert_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./sweetalert.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/components/sweetalert.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sweetalert_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/components/sweetalert.vue?vue&type=template&id=21f42c2a&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/views/components/sweetalert.vue?vue&type=template&id=21f42c2a& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_sweetalert_vue_vue_type_template_id_21f42c2a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_sweetalert_vue_vue_type_template_id_21f42c2a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_sweetalert_vue_vue_type_template_id_21f42c2a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./sweetalert.vue?vue&type=template&id=21f42c2a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/components/sweetalert.vue?vue&type=template&id=21f42c2a&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/components/sweetalert.vue?vue&type=template&id=21f42c2a&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/components/sweetalert.vue?vue&type=template&id=21f42c2a& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
                      [_c("span", [_vm._v("Sweet Alerts")])]
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
                    attrs: { href: "#sweetalertbasic" },
                  },
                  [_vm._v("Basic")]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "nav-link scrollactive-item",
                    attrs: { href: "#sweetalertmessage" },
                  },
                  [_vm._v("Message")]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "nav-link scrollactive-item",
                    attrs: { href: "#sweetalertdynamic" },
                  },
                  [_vm._v("Dynamic")]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "nav-link scrollactive-item",
                    attrs: { href: "#sweetalertatitlewithtext" },
                  },
                  [_vm._v("A title with text")]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "nav-link scrollactive-item",
                    attrs: { href: "#sweetalertchainingmodals" },
                  },
                  [_vm._v("Chaining modals")]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "nav-link scrollactive-item",
                    attrs: { href: "#sweetalertanimation" },
                  },
                  [_vm._v("Animation")]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "nav-link scrollactive-item",
                    attrs: { href: "#sweetalertautoclosetimer" },
                  },
                  [_vm._v("Auto close timer")]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "nav-link scrollactive-item",
                    attrs: { href: "#sweetalertcustomimage" },
                  },
                  [_vm._v("Custom image")]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "nav-link scrollactive-item",
                    attrs: { href: "#sweetalertcustomhtml" },
                  },
                  [_vm._v("Custom HTML")]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "nav-link scrollactive-item",
                    attrs: { href: "#sweetalertwarningmessage" },
                  },
                  [_vm._v("Warning message")]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "nav-link scrollactive-item",
                    attrs: { href: "#sweetalertcancel" },
                  },
                  [_vm._v("Cancel")]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "nav-link scrollactive-item",
                    attrs: { href: "#sweetalertcustomstyle" },
                  },
                  [_vm._v("Custom Style")]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "nav-link scrollactive-item",
                    attrs: { href: "#sweetalertfooter" },
                  },
                  [_vm._v("Footer")]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "nav-link scrollactive-item",
                    attrs: { href: "#sweetalertrtl" },
                  },
                  [_vm._v("RTL")]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "nav-link scrollactive-item",
                    attrs: { href: "#sweetalertmixin" },
                  },
                  [_vm._v("Mixin")]
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
                      href: "https://www.npmjs.com/package/vue-sweetalert2",
                    },
                  },
                  [
                    _vm._v(
                      "\n                            https://www.npmjs.com/package/vue-sweetalert2\n                        "
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
              staticClass: "col-lg-12 col-12 layout-spacing",
              attrs: { id: "sweetalertbasic" },
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
                        staticClass: "mr-2 btn",
                        attrs: { variant: "primary" },
                        on: {
                          click: function ($event) {
                            return _vm.showAlert(1)
                          },
                        },
                      },
                      [_vm._v("Basic message")]
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
                                      '<b-button variant="primary" class="mr-2 btn" @click="showAlert(1)">Basic message</b-button>\n\n this.$swal({\n    title: \'Saved succesfully\',\n    padding: \'2em\'\n});\n                                        '
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
              attrs: { id: "sweetalertmessage" },
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
                        staticClass: "mr-2 btn",
                        attrs: { variant: "primary" },
                        on: {
                          click: function ($event) {
                            return _vm.showAlert(2)
                          },
                        },
                      },
                      [_vm._v("Success message!")]
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
                                      "<b-button variant=\"primary\" class=\"mr-2 btn\" @click=\"showAlert(2)\">Success message!</b-button>\n\nthis.$swal({\n    icon: 'success',\n    title: 'Good job!',\n    text: 'You clicked the!',\n    padding: '2em'\n});\n                                        "
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
              attrs: { id: "sweetalertdynamic" },
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
                        staticClass: "mr-2 btn",
                        attrs: { variant: "primary" },
                        on: {
                          click: function ($event) {
                            return _vm.showAlert(3)
                          },
                        },
                      },
                      [_vm._v("Dynamic queue")]
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
                                      "<b-button variant=\"primary\" class=\"mr-2 btn\" @click=\"showAlert(3)\">Dynamic queue</b-button>\n\nconst ipAPI = 'https://api.ipify.org?format=json';\nthis.$swal({\n    title: 'Your public IP',\n    confirmButtonText: 'Show my public IP',\n    text: 'Your public IP will be received ' + 'via AJAX request',\n    showLoaderOnConfirm: true,\n    preConfirm: () => {\n        return fetch(ipAPI)\n            .then(response => {\n                return response.json();\n            })\n            .then(data => {\n                this.$swal({\n                    title: data.ip\n                });\n            })\n            .catch(() => {\n                this.$swal({\n                    type: 'error',\n                    title: 'Unable to get your public IP'\n                });\n            });\n    }\n});\n                                        "
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
              attrs: { id: "sweetalertatitlewithtext" },
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
                        staticClass: "mr-2 btn",
                        attrs: { variant: "primary" },
                        on: {
                          click: function ($event) {
                            return _vm.showAlert(4)
                          },
                        },
                      },
                      [_vm._v("Title & text")]
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
                                      "<b-button variant=\"primary\" class=\"mr-2 btn\" @click=\"showAlert(4)\">Title & text</b-button>\n\nthis.$swal({\n    icon: 'question',\n    title: 'The Internet?',\n    text: 'That thing is still around?',\n    padding: '2em'\n});\n                                        "
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
              attrs: { id: "sweetalertchainingmodals" },
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
                        staticClass: "mr-2 btn",
                        attrs: { variant: "primary" },
                        on: {
                          click: function ($event) {
                            return _vm.showAlert(5)
                          },
                        },
                      },
                      [_vm._v("Chaining modals (queue)")]
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
                                      "<b-button variant=\"primary\" class=\"mr-2 btn\" @click=\"showAlert(5)\">Chaining modals (queue)</b-button>\n\nconst steps = ['1', '2', '3'];\nconst swalQueueStep = this.$swal.mixin({\n    confirmButtonText: 'Next →',\n    showCancelButton: true,\n    progressSteps: steps,\n    input: 'text',\n    inputAttributes: {\n        required: true\n    },\n    validationMessage: 'This field is required',\n    padding: '2em'\n});\n\nconst values = [];\nlet currentStep;\n\nfor (currentStep = 0; currentStep < steps.length; ) {\n    const result = await swalQueueStep.fire({\n        title: `Question ${steps[currentStep]}`,\n        text: currentStep == 0 ? 'Chaining swal2 modals is easy.' : '',\n        inputValue: values[currentStep],\n        showCancelButton: currentStep > 0,\n        currentProgressStep: currentStep\n    });\n\n    if (result.value) {\n        values[currentStep] = result.value;\n        currentStep++;\n    } else if (result.dismiss === this.$swal.DismissReason.cancel) {\n        currentStep--;\n    } else {\n        break;\n    }\n}\n\nif (currentStep === steps.length) {\n    this.$swal.fire({\n        title: 'All done!',\n        padding: '2em',\n        html: 'Your answers: <pre>' + JSON.stringify(values) + '</pre>',\n        confirmButtonText: 'Lovely!'\n    });\n}\n                                        "
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
              attrs: { id: "sweetalertanimation" },
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
                        staticClass: "mr-2 btn",
                        attrs: { variant: "primary" },
                        on: {
                          click: function ($event) {
                            return _vm.showAlert(6)
                          },
                        },
                      },
                      [_vm._v("Custom animation")]
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
                                      "<b-button variant=\"primary\" class=\"mr-2 btn\" @click=\"showAlert(6)\">Custom animation</b-button>\n\nthis.$swal({\n    title: 'Custom animation with Animate.css',\n    animation: false,\n    customClass: 'animated tada',\n    padding: '2em'\n});\n                                        "
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
              attrs: { id: "sweetalertautoclosetimer" },
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
                        staticClass: "mr-2 btn",
                        attrs: { variant: "primary" },
                        on: {
                          click: function ($event) {
                            return _vm.showAlert(7)
                          },
                        },
                      },
                      [_vm._v("Message timer")]
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
                                      "<b-button variant=\"primary\" class=\"mr-2 btn\" @click=\"showAlert(7)\">Message timer</b-button>\n\nlet timerInterval;\n\nthis.$swal({\n    title: 'Auto close alert!',\n    html: 'I will close in <b></b> milliseconds.',\n    timer: 2000,\n    timerProgressBar: true,\n    didOpen: () => {\n        this.$swal.showLoading();\n        const b = this.$swal.getHtmlContainer().querySelector('b');\n        timerInterval = setInterval(() => {\n            b.textContent = this.$swal.getTimerLeft();\n        }, 100);\n    },\n    willClose: () => {\n        clearInterval(timerInterval);\n    }\n}).then(function(result) {\n    if (result.dismiss === this.$swal.DismissReason.timer) {\n        console.log('I was closed by the timer');\n    }\n});\n                                        "
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
              attrs: { id: "sweetalertcustomimage" },
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
                        staticClass: "mr-2 btn",
                        attrs: { variant: "primary" },
                        on: {
                          click: function ($event) {
                            return _vm.showAlert(8)
                          },
                        },
                      },
                      [_vm._v("Message with custom image")]
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
                                      "<b-button variant=\"primary\" class=\"mr-2 btn\" @click=\"showAlert(8)\">Message with custom image</b-button>\n\nthis.$swal({\n    title: 'Sweet!',\n    text: 'Modal with a custom image.',\n    imageUrl: require('@/assets/images/thumbs-up.jpg'),\n    imageWidth: 224,\n    imageHeight: 200,\n    imageAlt: 'Custom image',\n    animation: false,\n    padding: '2em'\n});\n                                        "
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
              attrs: { id: "sweetalertcustomhtml" },
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
                        staticClass: "mr-2 btn",
                        attrs: { variant: "primary" },
                        on: {
                          click: function ($event) {
                            return _vm.showAlert(9)
                          },
                        },
                      },
                      [_vm._v("Custom Description & buttons")]
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
                                      "<b-button variant=\"primary\" class=\"mr-2 btn\" @click=\"showAlert(9)\">Custom Description & buttons</b-button>\n\nthis.$swal({\n    icon: 'info',\n    title: '<i>HTML</i> <u>example</u>',\n    html: 'You can use <b>bold text</b>, ' + '<a href=\"//github.com\">links</a> ' + 'and other HTML tags',\n    showCloseButton: true,\n    showCancelButton: true,\n    focusConfirm: false,\n    confirmButtonText: '<i class=\"flaticon-checked-1\"></i> Great!',\n    confirmButtonAriaLabel: 'Thumbs up, great!',\n    cancelButtonText: '<i class=\"flaticon-cancel-circle\"></i> Cancel',\n    cancelButtonAriaLabel: 'Thumbs down',\n    padding: '2em'\n});\n                                        "
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
              attrs: { id: "sweetalertwarningmessage" },
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
                        staticClass: "mr-2 btn",
                        attrs: { variant: "primary" },
                        on: {
                          click: function ($event) {
                            return _vm.showAlert(10)
                          },
                        },
                      },
                      [_vm._v("Confirm")]
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
                          [_c("span", [_vm._v("Confirm")])]
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
                                      "<b-button variant=\"primary\" class=\"mr-2 btn\" @click=\"showAlert(10)\">Confirm</b-button>\n\nthis.$swal({\n    title: 'Are you sure?',\n    text: \"You won't be able to revert this!\",\n    type: 'warning',\n    showCancelButton: true,\n    confirmButtonText: 'Delete',\n    padding: '2em'\n}).then(result => {\n    if (result.value) {\n        this.$swal('Deleted!', 'Your file has been deleted.', 'success');\n    }\n});\n                                        "
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
              attrs: { id: "sweetalertcancel" },
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
                        staticClass: "mr-2 btn",
                        attrs: { variant: "primary" },
                        on: {
                          click: function ($event) {
                            return _vm.showAlert(11)
                          },
                        },
                      },
                      [_vm._v('Addition else for "Cancel".')]
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
                                      "<b-button variant=\"primary\" class=\"mr-2 btn\" @click=\"showAlert(11)\">Addition else for \"Cancel\".</b-button>\n\nconst swalWithBootstrapButtons = this.$swal.mixin({\n    confirmButtonClass: 'btn btn-secondary',\n    cancelButtonClass: 'btn btn-dark mr-3',\n    buttonsStyling: false\n});\nswalWithBootstrapButtons\n    .fire({\n        title: 'Are you sure?',\n        text: \"You won't be able to revert this!\",\n        icon: 'warning',\n        showCancelButton: true,\n        confirmButtonText: 'Yes, delete it!',\n        cancelButtonText: 'No, cancel!',\n        reverseButtons: true,\n        padding: '2em'\n    })\n    .then(result => {\n        if (result.value) {\n            swalWithBootstrapButtons.fire('Deleted!', 'Your file has been deleted.', 'success');\n        } else if (result.dismiss === this.$swal.DismissReason.cancel) {\n            swalWithBootstrapButtons.fire('Cancelled', 'Your imaginary file is safe :)', 'error');\n        }\n    });\n                                        "
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
              attrs: { id: "sweetalertcustomstyle" },
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
                        staticClass: "mr-2 btn",
                        attrs: { variant: "primary" },
                        on: {
                          click: function ($event) {
                            return _vm.showAlert(12)
                          },
                        },
                      },
                      [_vm._v("Custom Message")]
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
                                      "<b-button variant=\"primary\" class=\"mr-2 btn\" @click=\"showAlert(12)\">Custom Message</b-button>\n\nthis.$swal({\n    title: 'Custom width, padding, background.',\n    width: 600,\n    padding: '7em',\n    customClass: 'background-modal',\n    background: '#fff url(' + require('@/assets/images/sweet-bg.jpg') + ') no-repeat 100% 100%'\n});\n                                        "
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
              attrs: { id: "sweetalertfooter" },
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
                        staticClass: "mr-2 btn",
                        attrs: { variant: "primary" },
                        on: {
                          click: function ($event) {
                            return _vm.showAlert(13)
                          },
                        },
                      },
                      [_vm._v("With Footer")]
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
                                      "<b-button variant=\"primary\" class=\"mr-2 btn\" @click=\"showAlert(13)\">With Footer</b-button>\n\nthis.$swal({\n    type: 'error',\n    title: 'Oops...',\n    text: 'Something went wrong!',\n    footer: '<a href>Why do I have this issue?</a>',\n    padding: '2em'\n});\n                                        "
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
              attrs: { id: "sweetalertrtl" },
            },
            [
              _c("div", { staticClass: "statbox panel box box-shadow" }, [
                _vm._m(13),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "panel-body text-center" },
                  [
                    _c(
                      "b-button",
                      {
                        staticClass: "mr-2 btn",
                        attrs: { variant: "primary" },
                        on: {
                          click: function ($event) {
                            return _vm.showAlert(14)
                          },
                        },
                      },
                      [_vm._v("RTL")]
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
                                return _vm.toggleCode("code14")
                              },
                            },
                          },
                          [_c("span", [_vm._v("Code")])]
                        ),
                        _vm._v(" "),
                        _vm.code_arr.includes("code14")
                          ? _c(
                              "div",
                              { staticClass: "code-section text-left" },
                              [
                                _c("highlight", [
                                  _c("pre", [
                                    _vm._v(
                                      "<b-button variant=\"primary\" class=\"mr-2 btn\" @click=\"showAlert(14)\">RTL</b-button>\n\nthis.$swal({\n    title: 'هل تريد الاستمرار؟',\n    confirmButtonText: 'نعم',\n    cancelButtonText: 'لا',\n    showCancelButton: true,\n    showCloseButton: true,\n    padding: '2em',\n    target: document.getElementById('rtl-container')\n});\n                                        "
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
              attrs: { id: "sweetalertmixin" },
            },
            [
              _c("div", { staticClass: "statbox panel box box-shadow" }, [
                _vm._m(14),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "panel-body text-center" },
                  [
                    _c(
                      "b-button",
                      {
                        staticClass: "mr-2 btn",
                        attrs: { variant: "primary" },
                        on: {
                          click: function ($event) {
                            return _vm.showAlert(15)
                          },
                        },
                      },
                      [_vm._v("Mixin")]
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
                                return _vm.toggleCode("code15")
                              },
                            },
                          },
                          [_c("span", [_vm._v("Code")])]
                        ),
                        _vm._v(" "),
                        _vm.code_arr.includes("code15")
                          ? _c(
                              "div",
                              { staticClass: "code-section text-left" },
                              [
                                _c("highlight", [
                                  _c("pre", [
                                    _vm._v(
                                      "<b-button variant=\"primary\" class=\"mr-2 btn\" @click=\"showAlert(15)\">Mixin</b-button>\n\nconst toast = this.$swal.mixin({\n    toast: true,\n    position: 'top-end',\n    showConfirmButton: false,\n    timer: 3000,\n    padding: '2em'\n});\ntoast.fire({\n    icon: 'success',\n    title: 'Signed in successfully',\n    padding: '2em'\n});\n                                        "
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
          _c("h4", [_vm._v("Basic message")]),
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
          _c("h4", [_vm._v("Success message")]),
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
          _c("h4", [_vm._v("Dynamic queue")]),
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
          _c("h4", [_vm._v("A title with a text under")]),
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
          _c("h4", [_vm._v("Chaining modals (queue)")]),
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
          _c("h4", [_vm._v("Custom animation")]),
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
          _c("h4", [_vm._v("Message with auto close timer")]),
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
          _c("h4", [_vm._v("Message with custom image")]),
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
          _c("h4", [_vm._v("Custom HTML description and buttons")]),
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
          _c("h4", [_vm._v('Warning message, with "Confirm" button')]),
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
          _c("h4", [_vm._v('Execute something else for "Cancel".')]),
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
          _c("h4", [
            _vm._v("A message with custom width, padding and background"),
          ]),
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
          _c("h4", [_vm._v("With Footer")]),
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
          _c("h4", [_vm._v("RTL Support")]),
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
          _c("h4", [_vm._v("Mixin")]),
        ]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);