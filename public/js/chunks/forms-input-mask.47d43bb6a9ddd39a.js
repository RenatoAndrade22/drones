"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["forms-input-mask"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/forms/input_mask.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/forms/input_mask.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var v_mask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! v-mask */ "./node_modules/v-mask/dist/v-mask.esm.js");
/* harmony import */ var _assets_sass_scrollspyNav_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/assets/sass/scrollspyNav.scss */ "./resources/js/src/assets/sass/scrollspyNav.scss");
/* harmony import */ var _components_plugins_highlight_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/plugins/highlight.vue */ "./resources/js/src/components/plugins/highlight.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


vue__WEBPACK_IMPORTED_MODULE_1__["default"].use(v_mask__WEBPACK_IMPORTED_MODULE_0__["default"]);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  metaInfo: {
    title: 'Input Mask'
  },
  components: {
    highlight: _components_plugins_highlight_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      code_arr: [],
      inputs: []
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

/***/ "./node_modules/v-mask/dist/v-mask.esm.js":
/*!************************************************!*\
  !*** ./node_modules/v-mask/dist/v-mask.esm.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VueMaskDirective": () => (/* binding */ directive),
/* harmony export */   "VueMaskFilter": () => (/* binding */ filter),
/* harmony export */   "VueMaskPlugin": () => (/* binding */ plugin),
/* harmony export */   "default": () => (/* binding */ plugin)
/* harmony export */ });
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var placeholderChar = '_';
var strFunction = 'function';

var emptyArray$1 = [];
function convertMaskToPlaceholder() {
  var mask = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : emptyArray$1;
  var placeholderChar$1 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : placeholderChar;

  if (!isArray(mask)) {
    throw new Error('Text-mask:convertMaskToPlaceholder; The mask property must be an array.');
  }

  if (mask.indexOf(placeholderChar$1) !== -1) {
    throw new Error('Placeholder character must not be used as part of the mask. Please specify a character ' + 'that is not present in your mask as your placeholder character.\n\n' + "The placeholder character that was received is: ".concat(JSON.stringify(placeholderChar$1), "\n\n") + "The mask that was received is: ".concat(JSON.stringify(mask)));
  }

  return mask.map(function (char) {
    return char instanceof RegExp ? placeholderChar$1 : char;
  }).join('');
}
function isArray(value) {
  return Array.isArray && Array.isArray(value) || value instanceof Array;
}
var strCaretTrap = '[]';
function processCaretTraps(mask) {
  var indexes = [];
  var indexOfCaretTrap;

  while (indexOfCaretTrap = mask.indexOf(strCaretTrap), indexOfCaretTrap !== -1) {
    indexes.push(indexOfCaretTrap);
    mask.splice(indexOfCaretTrap, 1);
  }

  return {
    maskWithoutCaretTraps: mask,
    indexes: indexes
  };
}

var emptyArray = [];
var emptyString = '';
function conformToMask() {
  var rawValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : emptyString;
  var mask = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : emptyArray;
  var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (!isArray(mask)) {
    if (_typeof(mask) === strFunction) {
      mask = mask(rawValue, config);
      mask = processCaretTraps(mask).maskWithoutCaretTraps;
    } else {
      throw new Error('Text-mask:conformToMask; The mask property must be an array.');
    }
  }

  var _config$guide = config.guide,
      guide = _config$guide === void 0 ? true : _config$guide,
      _config$previousConfo = config.previousConformedValue,
      previousConformedValue = _config$previousConfo === void 0 ? emptyString : _config$previousConfo,
      _config$placeholderCh = config.placeholderChar,
      placeholderChar$1 = _config$placeholderCh === void 0 ? placeholderChar : _config$placeholderCh,
      _config$placeholder = config.placeholder,
      placeholder = _config$placeholder === void 0 ? convertMaskToPlaceholder(mask, placeholderChar$1) : _config$placeholder,
      currentCaretPosition = config.currentCaretPosition,
      keepCharPositions = config.keepCharPositions;
  var suppressGuide = guide === false && previousConformedValue !== undefined;
  var rawValueLength = rawValue.length;
  var previousConformedValueLength = previousConformedValue.length;
  var placeholderLength = placeholder.length;
  var maskLength = mask.length;
  var editDistance = rawValueLength - previousConformedValueLength;
  var isAddition = editDistance > 0;
  var indexOfFirstChange = currentCaretPosition + (isAddition ? -editDistance : 0);
  var indexOfLastChange = indexOfFirstChange + Math.abs(editDistance);

  if (keepCharPositions === true && !isAddition) {
    var compensatingPlaceholderChars = emptyString;

    for (var i = indexOfFirstChange; i < indexOfLastChange; i++) {
      if (placeholder[i] === placeholderChar$1) {
        compensatingPlaceholderChars += placeholderChar$1;
      }
    }

    rawValue = rawValue.slice(0, indexOfFirstChange) + compensatingPlaceholderChars + rawValue.slice(indexOfFirstChange, rawValueLength);
  }

  var rawValueArr = rawValue.split(emptyString).map(function (char, i) {
    return {
      char: char,
      isNew: i >= indexOfFirstChange && i < indexOfLastChange
    };
  });

  for (var _i = rawValueLength - 1; _i >= 0; _i--) {
    var char = rawValueArr[_i].char;

    if (char !== placeholderChar$1) {
      var shouldOffset = _i >= indexOfFirstChange && previousConformedValueLength === maskLength;

      if (char === placeholder[shouldOffset ? _i - editDistance : _i]) {
        rawValueArr.splice(_i, 1);
      }
    }
  }

  var conformedValue = emptyString;
  var someCharsRejected = false;

  placeholderLoop: for (var _i2 = 0; _i2 < placeholderLength; _i2++) {
    var charInPlaceholder = placeholder[_i2];

    if (charInPlaceholder === placeholderChar$1) {
      if (rawValueArr.length > 0) {
        while (rawValueArr.length > 0) {
          var _rawValueArr$shift = rawValueArr.shift(),
              rawValueChar = _rawValueArr$shift.char,
              isNew = _rawValueArr$shift.isNew;

          if (rawValueChar === placeholderChar$1 && suppressGuide !== true) {
            conformedValue += placeholderChar$1;
            continue placeholderLoop;
          } else if (mask[_i2].test(rawValueChar)) {
            if (keepCharPositions !== true || isNew === false || previousConformedValue === emptyString || guide === false || !isAddition) {
              conformedValue += rawValueChar;
            } else {
              var rawValueArrLength = rawValueArr.length;
              var indexOfNextAvailablePlaceholderChar = null;

              for (var _i3 = 0; _i3 < rawValueArrLength; _i3++) {
                var charData = rawValueArr[_i3];

                if (charData.char !== placeholderChar$1 && charData.isNew === false) {
                  break;
                }

                if (charData.char === placeholderChar$1) {
                  indexOfNextAvailablePlaceholderChar = _i3;
                  break;
                }
              }

              if (indexOfNextAvailablePlaceholderChar !== null) {
                conformedValue += rawValueChar;
                rawValueArr.splice(indexOfNextAvailablePlaceholderChar, 1);
              } else {
                _i2--;
              }
            }

            continue placeholderLoop;
          } else {
            someCharsRejected = true;
          }
        }
      }

      if (suppressGuide === false) {
        conformedValue += placeholder.substr(_i2, placeholderLength);
      }

      break;
    } else {
      conformedValue += charInPlaceholder;
    }
  }

  if (suppressGuide && isAddition === false) {
    var indexOfLastFilledPlaceholderChar = null;

    for (var _i4 = 0; _i4 < conformedValue.length; _i4++) {
      if (placeholder[_i4] === placeholderChar$1) {
        indexOfLastFilledPlaceholderChar = _i4;
      }
    }

    if (indexOfLastFilledPlaceholderChar !== null) {
      conformedValue = conformedValue.substr(0, indexOfLastFilledPlaceholderChar + 1);
    } else {
      conformedValue = emptyString;
    }
  }

  return {
    conformedValue: conformedValue,
    meta: {
      someCharsRejected: someCharsRejected
    }
  };
}

var NEXT_CHAR_OPTIONAL = {
  __nextCharOptional__: true
};
var defaultMaskReplacers = {
  '#': /\d/,
  A: /[a-z]/i,
  N: /[a-z0-9]/i,
  '?': NEXT_CHAR_OPTIONAL,
  X: /./
};

var stringToRegexp = function stringToRegexp(str) {
  var lastSlash = str.lastIndexOf('/');
  return new RegExp(str.slice(1, lastSlash), str.slice(lastSlash + 1));
};

var makeRegexpOptional = function makeRegexpOptional(charRegexp) {
  return stringToRegexp(charRegexp.toString().replace(/.(\/)[gmiyus]{0,6}$/, function (match) {
    return match.replace('/', '?/');
  }));
};

var escapeIfNeeded = function escapeIfNeeded(char) {
  return '[\\^$.|?*+()'.indexOf(char) > -1 ? "\\".concat(char) : char;
};

var charRegexp = function charRegexp(char) {
  return new RegExp("/[".concat(escapeIfNeeded(char), "]/"));
};

var isRegexp$1 = function isRegexp(entity) {
  return entity instanceof RegExp;
};

var castToRegexp = function castToRegexp(char) {
  return isRegexp$1(char) ? char : charRegexp(char);
};

function maskToRegExpMask(mask) {
  var maskReplacers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultMaskReplacers;
  return mask.map(function (char, index, array) {
    var maskChar = maskReplacers[char] || char;
    var previousChar = array[index - 1];
    var previousMaskChar = maskReplacers[previousChar] || previousChar;

    if (maskChar === NEXT_CHAR_OPTIONAL) {
      return null;
    }

    if (previousMaskChar === NEXT_CHAR_OPTIONAL) {
      return makeRegexpOptional(castToRegexp(maskChar));
    }

    return maskChar;
  }).filter(Boolean);
}

function stringMaskToRegExpMask(stringMask) {
  var maskReplacers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultMaskReplacers;
  return maskToRegExpMask(stringMask.split(''), maskReplacers);
}
function arrayMaskToRegExpMask(arrayMask) {
  var maskReplacers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultMaskReplacers;
  var flattenedMask = arrayMask.map(function (part) {
    if (part instanceof RegExp) {
      return part;
    }

    if (typeof part === 'string') {
      return part.split('');
    }

    return null;
  }).filter(Boolean).reduce(function (mask, part) {
    return mask.concat(part);
  }, []);
  return maskToRegExpMask(flattenedMask, maskReplacers);
}

var trigger = function trigger(el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
};
var queryInputElementInside = function queryInputElementInside(el) {
  return el instanceof HTMLInputElement ? el : el.querySelector('input') || el;
};
var isFunction = function isFunction(val) {
  return typeof val === 'function';
};
var isString = function isString(val) {
  return typeof val === 'string';
};
var isRegexp = function isRegexp(val) {
  return val instanceof RegExp;
};

function parseMask(inputMask, maskReplacers) {
  if (Array.isArray(inputMask)) {
    return arrayMaskToRegExpMask(inputMask, maskReplacers);
  }

  if (isFunction(inputMask)) {
    return inputMask;
  }

  if (isString(inputMask) && inputMask.length > 0) {
    return stringMaskToRegExpMask(inputMask, maskReplacers);
  }

  return inputMask;
}

function createOptions() {
  var elementOptions = new Map();
  var defaultOptions = {
    previousValue: '',
    mask: []
  };

  function get(el) {
    return elementOptions.get(el) || _objectSpread2({}, defaultOptions);
  }

  function partiallyUpdate(el, newOptions) {
    elementOptions.set(el, _objectSpread2(_objectSpread2({}, get(el)), newOptions));
  }

  function remove(el) {
    elementOptions.delete(el);
  }

  return {
    partiallyUpdate: partiallyUpdate,
    remove: remove,
    get: get
  };
}

function extendMaskReplacers(maskReplacers) {
  var baseMaskReplacers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultMaskReplacers;

  if (maskReplacers === null || Array.isArray(maskReplacers) || _typeof(maskReplacers) !== 'object') {
    return baseMaskReplacers;
  }

  return Object.keys(maskReplacers).reduce(function (extendedMaskReplacers, key) {
    var value = maskReplacers[key];

    if (value !== null && !(value instanceof RegExp)) {
      return extendedMaskReplacers;
    }

    return _objectSpread2(_objectSpread2({}, extendedMaskReplacers), {}, _defineProperty({}, key, value));
  }, baseMaskReplacers);
}

var options = createOptions();

function triggerInputUpdate(el) {
  trigger(el, 'input');
}

function updateValue(el) {
  var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var value = el.value;

  var _options$get = options.get(el),
      previousValue = _options$get.previousValue,
      mask = _options$get.mask;

  var isValueChanged = value !== previousValue;
  var isLengthIncreased = value.length > previousValue.length;
  var isUpdateNeeded = value && isValueChanged && isLengthIncreased;

  if ((force || isUpdateNeeded) && mask) {
    var _conformToMask = conformToMask(value, mask, {
      guide: false
    }),
        conformedValue = _conformToMask.conformedValue;

    el.value = conformedValue;
    triggerInputUpdate(el);
  }

  options.partiallyUpdate(el, {
    previousValue: value
  });
}

function updateMask(el, inputMask, maskReplacers) {
  var mask = parseMask(inputMask, maskReplacers);
  options.partiallyUpdate(el, {
    mask: mask
  });
}

function maskToString(mask) {
  var maskArray = Array.isArray(mask) ? mask : [mask];
  var filteredMaskArray = maskArray.filter(function (part) {
    return isString(part) || isRegexp(part);
  });
  return filteredMaskArray.toString();
}

function createDirective() {
  var directiveOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var instanceMaskReplacers = extendMaskReplacers(directiveOptions && directiveOptions.placeholders);
  return {
    bind: function bind(el, _ref) {
      var value = _ref.value;
      el = queryInputElementInside(el);
      updateMask(el, value, instanceMaskReplacers);
      updateValue(el);
    },
    componentUpdated: function componentUpdated(el, _ref2) {
      var value = _ref2.value,
          oldValue = _ref2.oldValue;
      el = queryInputElementInside(el);
      var isMaskChanged = isFunction(value) || maskToString(oldValue) !== maskToString(value);

      if (isMaskChanged) {
        updateMask(el, value, instanceMaskReplacers);
      }

      updateValue(el, isMaskChanged);
    },
    unbind: function unbind(el) {
      el = queryInputElementInside(el);
      options.remove(el);
    }
  };
}
var directive = createDirective();

function createFilter() {
  var filterOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var instanceMaskReplacers = extendMaskReplacers(filterOptions && filterOptions.placeholders);
  return function (value, inputMask) {
    if (!isString(value) && !Number.isFinite(value)) return value;
    var mask = parseMask(inputMask, instanceMaskReplacers);

    var _conformToMask = conformToMask("".concat(value), mask, {
      guide: false
    }),
        conformedValue = _conformToMask.conformedValue;

    return conformedValue;
  };
}
var filter = createFilter();

var plugin = (function (Vue) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  Vue.directive('mask', createDirective(options));
  Vue.filter('VMask', createFilter(options));
});




/***/ }),

/***/ "./resources/js/src/views/forms/input_mask.vue":
/*!*****************************************************!*\
  !*** ./resources/js/src/views/forms/input_mask.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _input_mask_vue_vue_type_template_id_21a5dcab___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input_mask.vue?vue&type=template&id=21a5dcab& */ "./resources/js/src/views/forms/input_mask.vue?vue&type=template&id=21a5dcab&");
/* harmony import */ var _input_mask_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input_mask.vue?vue&type=script&lang=js& */ "./resources/js/src/views/forms/input_mask.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _input_mask_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _input_mask_vue_vue_type_template_id_21a5dcab___WEBPACK_IMPORTED_MODULE_0__.render,
  _input_mask_vue_vue_type_template_id_21a5dcab___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/forms/input_mask.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/forms/input_mask.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/src/views/forms/input_mask.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_input_mask_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./input_mask.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/forms/input_mask.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_input_mask_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/forms/input_mask.vue?vue&type=template&id=21a5dcab&":
/*!************************************************************************************!*\
  !*** ./resources/js/src/views/forms/input_mask.vue?vue&type=template&id=21a5dcab& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_input_mask_vue_vue_type_template_id_21a5dcab___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_input_mask_vue_vue_type_template_id_21a5dcab___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_input_mask_vue_vue_type_template_id_21a5dcab___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./input_mask.vue?vue&type=template&id=21a5dcab& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/forms/input_mask.vue?vue&type=template&id=21a5dcab&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/forms/input_mask.vue?vue&type=template&id=21a5dcab&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/forms/input_mask.vue?vue&type=template&id=21a5dcab& ***!
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
                      [_c("span", [_vm._v("Input Mask")])]
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
                    attrs: { href: "#basic" },
                  },
                  [_vm._v("Basic")]
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
                      href: "https://www.npmjs.com/package/v-mask",
                    },
                  },
                  [
                    _vm._v(
                      "\n                            https://www.npmjs.com/package/v-mask\n                        "
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
            { staticClass: "col-lg-12 layout-spacing", attrs: { id: "basic" } },
            [
              _c("div", { staticClass: "statbox panel box box-shadow" }, [
                _vm._m(0),
                _vm._v(" "),
                _c("div", { staticClass: "panel-body" }, [
                  _vm._m(1),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-xl-6" }, [
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _c("label", { attrs: { for: "static-mask1" } }, [
                            _vm._v("v-mask=\"'##-#######'\" (99-9999999)"),
                          ]),
                          _vm._v(" "),
                          _c("b-input", {
                            directives: [
                              {
                                name: "mask",
                                rawName: "v-mask",
                                value: "##-#######",
                                expression: "'##-#######'",
                              },
                            ],
                            attrs: {
                              id: "static-mask1",
                              placeholder: "__-_______",
                            },
                            model: {
                              value: _vm.inputs["input1"],
                              callback: function ($$v) {
                                _vm.$set(_vm.inputs, "input1", $$v)
                              },
                              expression: "inputs['input1']",
                            },
                          }),
                        ],
                        1
                      ),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-xl-6" }, [
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _c("label", { attrs: { for: "static-mask2" } }, [
                            _vm._v("v-mask=\"'AA-####'\" (aa-9999)"),
                          ]),
                          _vm._v(" "),
                          _c("b-input", {
                            directives: [
                              {
                                name: "mask",
                                rawName: "v-mask",
                                value: "AA-####",
                                expression: "'AA-####'",
                              },
                            ],
                            attrs: {
                              id: "static-mask2",
                              placeholder: "__-____",
                            },
                            model: {
                              value: _vm.inputs["input2"],
                              callback: function ($$v) {
                                _vm.$set(_vm.inputs, "input2", $$v)
                              },
                              expression: "inputs['input2']",
                            },
                          }),
                        ],
                        1
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
                                    '<b-input id="static-mask1" v-model="inputs[\'input1\']" v-mask="\'##-#######\'" placeholder="__-_______"></b-input>\n\n<b-input id="static-mask2" v-model="inputs[\'input2\']" v-mask="\'AA-####\'" placeholder="__-____"></b-input>\n'
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
          _c("div", { staticClass: "col-lg-12 layout-spacing" }, [
            _c("div", { staticClass: "statbox panel box box-shadow" }, [
              _vm._m(2),
              _vm._v(" "),
              _c("div", { staticClass: "panel-body" }, [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-xl-6" }, [
                    _c(
                      "div",
                      { staticClass: "form-group" },
                      [
                        _c("label", { attrs: { for: "alternate-masks1" } }, [
                          _vm._v("v-mask=\"'##.#'\" (99.9)"),
                        ]),
                        _vm._v(" "),
                        _c("b-input", {
                          directives: [
                            {
                              name: "mask",
                              rawName: "v-mask",
                              value: "##.#",
                              expression: "'##.#'",
                            },
                          ],
                          attrs: {
                            id: "alternate-masks1",
                            placeholder: "__._",
                          },
                          model: {
                            value: _vm.inputs["input3"],
                            callback: function ($$v) {
                              _vm.$set(_vm.inputs, "input3", $$v)
                            },
                            expression: "inputs['input3']",
                          },
                        }),
                      ],
                      1
                    ),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-xl-6" }, [
                    _c(
                      "div",
                      { staticClass: "form-group" },
                      [
                        _c("label", { attrs: { for: "alternate-masks2" } }, [
                          _vm._v("v-mask=\"'##.##'\" (99.99)"),
                        ]),
                        _vm._v(" "),
                        _c("b-input", {
                          directives: [
                            {
                              name: "mask",
                              rawName: "v-mask",
                              value: "##.##",
                              expression: "'##.##'",
                            },
                          ],
                          attrs: {
                            id: "alternate-masks2",
                            placeholder: "__.__",
                          },
                          model: {
                            value: _vm.inputs["input4"],
                            callback: function ($$v) {
                              _vm.$set(_vm.inputs, "input4", $$v)
                            },
                            expression: "inputs['input4']",
                          },
                        }),
                      ],
                      1
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
                                  '<b-input id="alternate-masks1" v-model="inputs[\'input3\']" v-mask="\'##.#\'" placeholder="__._"></b-input>\n\n<b-input id="alternate-masks2" v-model="inputs[\'input4\']" v-mask="\'##.##\'" placeholder="__.__"></b-input>\n'
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
          _c("div", { staticClass: "col-lg-12 layout-spacing" }, [
            _c("div", { staticClass: "statbox panel box box-shadow" }, [
              _vm._m(3),
              _vm._v(" "),
              _c("div", { staticClass: "panel-body" }, [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-xl-4" }, [
                    _c(
                      "div",
                      { staticClass: "form-group" },
                      [
                        _c("label", { attrs: { for: "dynamic-syntax-1" } }, [
                          _vm._v("v-mask=\"'#-AAA###'\" (9-a{1,3}9{1,3})"),
                        ]),
                        _vm._v(" "),
                        _c("b-input", {
                          directives: [
                            {
                              name: "mask",
                              rawName: "v-mask",
                              value: "#-AAA###",
                              expression: "'#-AAA###'",
                            },
                          ],
                          attrs: {
                            id: "dynamic-syntax-1",
                            placeholder: "_-__",
                          },
                          model: {
                            value: _vm.inputs["input5"],
                            callback: function ($$v) {
                              _vm.$set(_vm.inputs, "input5", $$v)
                            },
                            expression: "inputs['input5']",
                          },
                        }),
                      ],
                      1
                    ),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-xl-4" }, [
                    _c(
                      "div",
                      { staticClass: "form-group" },
                      [
                        _c("label", { attrs: { for: "dynamic-syntax-2" } }, [
                          _vm._v("v-mask=\"'AA-####'\" (aa-9{1,4})"),
                        ]),
                        _vm._v(" "),
                        _c("b-input", {
                          directives: [
                            {
                              name: "mask",
                              rawName: "v-mask",
                              value: "AA-####",
                              expression: "'AA-####'",
                            },
                          ],
                          attrs: {
                            id: "dynamic-syntax-2",
                            placeholder: "__-____",
                          },
                          model: {
                            value: _vm.inputs["input6"],
                            callback: function ($$v) {
                              _vm.$set(_vm.inputs, "input6", $$v)
                            },
                            expression: "inputs['input6']",
                          },
                        }),
                      ],
                      1
                    ),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-xl-4" }, [
                    _c(
                      "div",
                      { staticClass: "form-group" },
                      [
                        _c("label", { attrs: { for: "dynamic-syntax-3" } }, [
                          _vm._v("v-mask=\"'AA-##'\" (aa-9{1,2})"),
                        ]),
                        _vm._v(" "),
                        _c("b-input", {
                          directives: [
                            {
                              name: "mask",
                              rawName: "v-mask",
                              value: "AA-##",
                              expression: "'AA-##'",
                            },
                          ],
                          attrs: {
                            id: "dynamic-syntax-3",
                            placeholder: "__-__",
                          },
                          model: {
                            value: _vm.inputs["input7"],
                            callback: function ($$v) {
                              _vm.$set(_vm.inputs, "input7", $$v)
                            },
                            expression: "inputs['input7']",
                          },
                        }),
                      ],
                      1
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
                                  '<b-input id="dynamic-syntax-1" v-model="inputs[\'input5\']" v-mask="\'#-AAA###\'" placeholder="_-__"></b-input>\n\n<b-input id="dynamic-syntax-2" v-model="inputs[\'input6\']" v-mask="\'AA-####\'" placeholder="__-____"></b-input>\n\n<b-input id="dynamic-syntax-3" v-model="inputs[\'input7\']" v-mask="\'AA-##\'" placeholder="__-__"></b-input>\n'
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
          _c("div", { staticClass: "col-lg-12 layout-spacing" }, [
            _c("div", { staticClass: "statbox panel box box-shadow" }, [
              _vm._m(4),
              _vm._v(" "),
              _c("div", { staticClass: "panel-body" }, [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-xl-4" }, [
                    _c(
                      "div",
                      { staticClass: "form-group" },
                      [
                        _c("label", { attrs: { for: "date" } }, [
                          _vm._v("v-mask=\"'##/##/####'\" (dd/mm/yyyy)"),
                        ]),
                        _vm._v(" "),
                        _c("b-input", {
                          directives: [
                            {
                              name: "mask",
                              rawName: "v-mask",
                              value: "##/##/####",
                              expression: "'##/##/####'",
                            },
                          ],
                          attrs: { id: "date", placeholder: "__/__/____" },
                          model: {
                            value: _vm.inputs["input8"],
                            callback: function ($$v) {
                              _vm.$set(_vm.inputs, "input8", $$v)
                            },
                            expression: "inputs['input8']",
                          },
                        }),
                      ],
                      1
                    ),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-xl-4" }, [
                    _c(
                      "div",
                      { staticClass: "form-group" },
                      [
                        _c("label", { attrs: { for: "date2" } }, [
                          _vm._v("v-mask=\"'##-##-####'\" (99-99-9999)"),
                        ]),
                        _vm._v(" "),
                        _c("b-input", {
                          directives: [
                            {
                              name: "mask",
                              rawName: "v-mask",
                              value: "##-##-####",
                              expression: "'##-##-####'",
                            },
                          ],
                          attrs: { id: "date2", placeholder: "__-__-____" },
                          model: {
                            value: _vm.inputs["input9"],
                            callback: function ($$v) {
                              _vm.$set(_vm.inputs, "input9", $$v)
                            },
                            expression: "inputs['input9']",
                          },
                        }),
                      ],
                      1
                    ),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-xl-4" }, [
                    _c(
                      "div",
                      { staticClass: "form-group" },
                      [
                        _c("label", { attrs: { for: "date3" } }, [
                          _vm._v(
                            "v-mask=\"'## December, ####'\" (99 December, 9999)"
                          ),
                        ]),
                        _vm._v(" "),
                        _c("b-input", {
                          directives: [
                            {
                              name: "mask",
                              rawName: "v-mask",
                              value: "## December, ####",
                              expression: "'## December, ####'",
                            },
                          ],
                          attrs: {
                            id: "date3",
                            placeholder: "__ December, ____",
                          },
                          model: {
                            value: _vm.inputs["input10"],
                            callback: function ($$v) {
                              _vm.$set(_vm.inputs, "input10", $$v)
                            },
                            expression: "inputs['input10']",
                          },
                        }),
                      ],
                      1
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
                                  '<b-input id="date" v-model="inputs[\'input8\']" v-mask="\'##/##/####\'" placeholder="__/__/____"></b-input>\n\n<b-input id="date2" v-model="inputs[\'input9\']" v-mask="\'##-##-####\'" placeholder="__-__-____"></b-input>\n\n<b-input id="date3" v-model="inputs[\'input10\']" v-mask="\'## December, ####\'" placeholder="__ December, ____"></b-input>\n'
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
          _c("div", { staticClass: "col-lg-12 layout-spacing" }, [
            _c("div", { staticClass: "statbox panel box box-shadow" }, [
              _vm._m(5),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "panel-body" },
                [
                  _c("label", { attrs: { for: "ip-add" } }, [
                    _vm._v("v-mask=\"'###.###.###.###'\" (192.198.1.1)"),
                  ]),
                  _vm._v(" "),
                  _c("b-input", {
                    directives: [
                      {
                        name: "mask",
                        rawName: "v-mask",
                        value: "###.###.###.###",
                        expression: "'###.###.###.###'",
                      },
                    ],
                    attrs: { id: "ip-add", placeholder: "___.___.___.___" },
                    model: {
                      value: _vm.inputs["input12"],
                      callback: function ($$v) {
                        _vm.$set(_vm.inputs, "input12", $$v)
                      },
                      expression: "inputs['input12']",
                    },
                  }),
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
                                    '<b-input id="ip-add" v-model="inputs[\'input12\']" v-mask="\'###.###.###.###\'" placeholder="___.___.___.___"></b-input>\n'
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
          _c("div", { staticClass: "col-lg-12 layout-spacing" }, [
            _c("div", { staticClass: "statbox panel box box-shadow" }, [
              _vm._m(6),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "panel-body" },
                [
                  _c("label", { attrs: { for: "ph-number" } }, [
                    _vm._v("v-mask=\"'(###) ###-####'\" ((999) 999-9999)"),
                  ]),
                  _vm._v(" "),
                  _c("b-input", {
                    directives: [
                      {
                        name: "mask",
                        rawName: "v-mask",
                        value: "(###) ###-####",
                        expression: "'(###) ###-####'",
                      },
                    ],
                    attrs: { id: "ph-number", placeholder: "(___) ___-____" },
                    model: {
                      value: _vm.inputs["input13"],
                      callback: function ($$v) {
                        _vm.$set(_vm.inputs, "input13", $$v)
                      },
                      expression: "inputs['input13']",
                    },
                  }),
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
                                    '<b-input id="ph-number" v-model="inputs[\'input13\']" v-mask="\'(###) ###-####\'" placeholder="(___) ___-____"></b-input>\n'
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
          _c("div", { staticClass: "col-lg-12 layout-spacing" }, [
            _c("div", { staticClass: "statbox panel box box-shadow" }, [
              _vm._m(7),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "panel-body" },
                [
                  _c("label", { attrs: { for: "currency" } }, [
                    _vm._v("$999,9999,999.99"),
                  ]),
                  _vm._v(" "),
                  _c("b-input", {
                    directives: [
                      {
                        name: "mask",
                        rawName: "v-mask",
                        value: "$###,####,###.##",
                        expression: "'$###,####,###.##'",
                      },
                    ],
                    attrs: { id: "currency", placeholder: "$___,____,___.__" },
                    model: {
                      value: _vm.inputs["input14"],
                      callback: function ($$v) {
                        _vm.$set(_vm.inputs, "input14", $$v)
                      },
                      expression: "inputs['input14']",
                    },
                  }),
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
                                    '<b-input id="currency" v-model="inputs[\'input14\']" v-mask="\'$###,####,###.##\'" placeholder="$___,____,___.__"></b-input>\n'
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
          _c("h4", [_vm._v("Static Mask Basic")]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", {}, [
      _vm._v("Input mask are use with "),
      _c("code", [_vm._v("input")]),
      _vm._v(" tags."),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "panel-heading" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-xl-12 col-md-12 col-sm-12 col-12" }, [
          _c("h4", [_vm._v("Alternate masks")]),
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
          _c("h4", [_vm._v("Dynamic Syntax")]),
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
          _c("h4", [_vm._v("Date")]),
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
          _c("h4", [_vm._v("IP")]),
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
          _c("h4", [_vm._v("Phone")]),
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
          _c("h4", [_vm._v("Currency")]),
        ]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);