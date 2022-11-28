import styled, { createGlobalStyle, css, keyframes } from 'styled-components';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library, findIconDefinition, icon } from '@fortawesome/fontawesome-svg-core';
import { faAngleDown, faAngleLeft, faAngleDoubleLeft, faAngleRight, faAngleDoubleRight, faAngleUp, faBars, faCalendar, faCheck, faCheckCircle, faCheckSquare, faChevronDoubleRight, faChevronDown, faChevronLeft, faChevronRight, faChevronUp, faClock, faEnvelope, faExclamationCircle, faFileAlt, faFilePdf, faFileSpreadsheet, faHouse, faInfoCircle, faMoneyCheckEditAlt as faMoneyCheckEditAlt$1, faPhoneAlt, faPlus, faQuestionCircle, faRetweet, faRetweetAlt, faScaleBalanced as faScaleBalanced$1, faSearch, faSquare, faStar, faStopwatch, faTimes, faTimesCircle, faUser, faUserFriends, faUserPlus, faUsers } from '@fortawesome/pro-light-svg-icons';
import { faSpinner, faAngleDown as faAngleDown$1, faAngleUp as faAngleUp$1, faBars as faBars$1, faCalendarPlus, faCheck as faCheck$1, faExclamationCircle as faExclamationCircle$1, faFilePdf as faFilePdf$1, faFileArrowUp, faFileExcel, faHouse as faHouse$1, faPlus as faPlus$1, faSearch as faSearch$1, faSquareCheck, faTimes as faTimes$1, faUserFriends as faUserFriends$1, faFilter, faCalendar as faCalendar$2, faCheckCircle as faCheckCircle$1, faUserClock, faArrowsRotate, faEnvelope as faEnvelope$1, faFileLines, faFileArrowDown as faFileArrowDown$1 } from '@fortawesome/pro-regular-svg-icons';
import { faXmark, faCheck as faCheck$2, faExclamation, faFileInvoiceDollar, faLayerGroup, faCalendar as faCalendar$1, faCalendarAlt, faMoneyCheckEditAlt, faScaleBalanced, faUser as faUser$1, faCheckCircle as faCheckCircle$2, faFileArrowDown, faExclamationCircle as faExclamationCircle$2, faFile, faRetweet as faRetweet$1, faStar as faStar$1, faUserClock as faUserClock$1, faRefresh, faArrowRightLong, faArrowLeftLong } from '@fortawesome/pro-solid-svg-icons';
import * as React from 'react';
import { useEffect, useState, createElement as createElement$1, useRef, forwardRef } from 'react';
import { useCombobox, useSelect, useMultipleSelection } from 'downshift';
import OutsideClickHandler from 'react-outside-click-handler';
import { createPortal } from 'react-dom';
import ReactModal from 'react-modal';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/src/styles/ag-grid.scss';
import 'ag-grid-community/src/styles/ag-theme-alpine/sass/ag-theme-alpine.scss';
import { Link as Link$1 } from 'react-router-dom';
import { eachDayOfInterval, startOfWeek, startOfMonth, endOfWeek, endOfMonth, isSameMonth, isSameDay, format, addMonths, subMonths, addYears, subYears } from 'date-fns';
import { DateFormatter } from '@luma-fe-workspace/utility';

const colors = {
  'graphing-blue-gray-1': '#435560',
  'luma-half-baked': '#93c3d5',
  'graphing-luma-selective-yellow-1': '#876708',
  'graphing-luma-selective-yellow-2': '#ae850a',
  'darkening-background': 'rgba(0, 0, 0, 0.75)',
  'modal--background-overlay': 'rgba(0, 0, 0, 0.7)',
  'graphing-blue-gray-2': '#546a78',
  'graphing-luma-selective-yellow-4': '#f2bb17',
  'confirm-green': '#46b11d',
  'graphing-luma-daintree-2': '#185677',
  'graphing-luma-half-baked-3': '#4792ae',
  'text-grey': '#333538',
  'graphing-luma-selective-yellow-3': '#d4a20c',
  'graphing-luma-daintree-4': '#2585b9',
  'tag-grey': '#eff2f4',
  'graphing-luma-yellow-green-5': '#aac743',
  'grid-blue-2': '#d9dfe2',
  'tag-blue': '#b6d6e2',
  'hover-grey': '#dadada',
  'disabled-grey': '#e8e8e8',
  'graphing-luma-daintree-3': '#1e6e99',
  'luma-orange': '#ff961c',
  'grid-blue-1': '#7f929e',
  'graphing-luma-yellow-green-2': '#5d6e21',
  'selected-grey': '#bbb',
  'graphing-luma-selective-yellow-5': '#f4c63e',
  'graphing-luma-yellow-green-3': '#788d2a',
  'error-red': '#af2a2a',
  'link-blue': '#2a86d1',
  'luma-jet': '#292929',
  'medium-grey': '#717171',
  'graphing-blue-gray-3': '#647f90',
  'disabled-text-grey': '#868686',
  'luma-yellow-green': '#c9de7d',
  'graphing-luma-yellow-green-1': '#434f17',
  'input-field-grey': '#cdcdcd',
  'entry-field-grey': '#f1f1f1',
  'graphing-luma-yellow-green-4': '#93ae34',
  'graphing-blue-gray-4': '#7a92a2',
  'tag-green': '#d7e79d',
  'graphing-luma-half-baked-4': '#5fa5be',
  'graphing-luma-half-baked-5': '#7db5ca',
  'graphing-blue-gray-5': '#93a7b4',
  'button-hover': '#4594b0',
  'luma-daintree': '#00263e',
  'graphing-luma-daintree-5': '#339dd7',
  'graphing-luma-daintree-1': '#113d55',
  'grid-blue-3': '#bfc9cf',
  'graphing-luma-half-baked-1': '#2f6274',
  'luma-selective-yellow': '#f5b901',
  'light-nav-blue': '#2B577D',
  white: '#fff',
  'graphing-luma-half-baked-2': '#3b7a91',
  'cta-tabs-fill-active': '#cbe880',
  'product-information-product-section-background-hover': '#d2d2d2',
  'platform-navigation-regular-user-admin-deselected': '#033956',
  'product-information-product-section-background-active': '#e5e5e5',
  // secondaries colors
  blue: '#00263E',
  blueMedium: '#003252',
  blueDark: '#001929',
  blueDarker: '#000D14',
  blueLight: '#003F66',
  blueLighter: '#004B7A',
  yellow: '#F5B901',
  yellowMedium: '#FFB005',
  yellowDark: '#FFA312',
  yellowDarker: '#FF961C',
  yellowLight: '#FEC10B',
  yellowLighter: '#FED133',
  green: '#C9DE7D',
  greenMedium: '#BCD65C',
  greenDark: '#B4D14D',
  greenDarker: '#A4C431',
  greenLight: '#D0E28D',
  greenLighter: '#D7E79D',
  ocean: '#93C3D5',
  ocean35: '#93C3D559',
  oceanMedium: '#6DADC5',
  oceanDark: '#4F9EBA',
  oceanDarker: '#4594B0',
  oceanLight: '#89BED1',
  oceanLighter: '#B6D6E2',
  orange: '#FFB901',
  black: '#000000',
  grey: '#292929',
  greyMedium: '#666666',
  greyDark: '#333333',
  greyDarker: '#0A0A0A',
  greyLight: '#999999',
  greyLight75: '#999999BF',
  greyLighter: '#DBDBDB',
  greyLightest: '#C2C2C2',
  greyFade: '#EFF2F4',
  failRed: '#E7A39A',
  messageWarn: '#E7D29A',
  messageInfo: '#93C3D5',
  successGreen: '#D1E19A',
  redDarker: '#C10000',
  limeGreen: '#39D86B',
  red: '#D83232',
  //luma dashboard colors
  accent10: '#faffe3',
  accent20: '#eff9c3',
  accent30: '#e1f0a2',
  accent40: '#cee180',
  accent50: '#aac743',
  accent60: '#95ab3c',
  accent70: '#708420',
  accent80: '#4a5a0c',
  accent90: '#273201',
  negative10: '#efacad',
  negative20: '#d95d5e',
  negative30: '#961b1e',
  negative40: '#5c0b0b',
  negative60: '#961b1e',
  neutral00white: '#ffffff',
  neutral10: '#f2f4f5',
  neutral20: '#e7ecee',
  neutral30: '#d8dfe2',
  neutral40: '#c4cdd1',
  neutral50: '#a9b3b8',
  neutral60: '#858f93',
  neutral70: '#5a6368',
  neutral75: '#454b4e',
  neutral80: '#2f3336',
  neutral85: '#1a1d1f',
  neutral90: '#070708',
  positive20: '#9fcd5a',
  primary50: '#007dc2',
  positive10: '#d5e6aa',
  positive30: '#65a343',
  positive40: '#314c22',
  positive60: '#65a343',
  primary10: '#e0f4ff',
  primary20: '#a0dcf8',
  primary30: '#61c0ed',
  primary40: '#26a0dc',
  primary60: '#02629d',
  primary70: '#004570',
  primary75: '#292929',
  primary80Daintree: '#00263e',
  primary90: '#00090f',
  warning10: '#f7e78a',
  warning20: '#dfcb22',
  warning30: '#a99e34',
  warning40: '#5a5624',
  warning60: '#a99e34',
  boxShadow: '#00000026',
  negativeUnderlierText: '#961b1e',
  positiveUnderlierText: '#65a343',
  negativeUnderlierChipBackground: '#f4d4d5',
  positiveUnderlierChipBackground: '#eef4db'
};

const spacing = {
  xxs: '0.25rem',
  xs: '0.5rem',
  s: '0.75rem',
  m: '1rem',
  l: '1.25rem',
  xl: '1.5rem',
  xxl: '2rem',
  xxxl: '2.5rem',
  xxxxl: '2.75rem',
  xxxxxl: '3.5rem',
  xxxxxxl: '4rem'
};

const DEFAULT_FONT = `IBMPlexSans`;
const LumaFont = {
  DEFAULT: {
    THIN: `${DEFAULT_FONT}Thin`,
    LIGHT: `${DEFAULT_FONT}Light`,
    REGULAR: `${DEFAULT_FONT}Regular`,
    MEDIUM: `${DEFAULT_FONT}Medium`,
    SEMI_BOLD: `${DEFAULT_FONT}SemiBold`,
    BOLD: `${DEFAULT_FONT}Bold`
  }
};

// globalStyles.js
const GlobalStyle = /*#__PURE__*/createGlobalStyle(["html,body{font-family:", ";font-size:16px;padding:0;margin:0;}*{box-sizing:border-box;}"], LumaFont.DEFAULT.REGULAR);

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global$y =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();

var objectGetOwnPropertyDescriptor = {};

var fails$i = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

var fails$h = fails$i;

// Detect IE8's incomplete defineProperty implementation
var descriptors = !fails$h(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});

var fails$g = fails$i;

var functionBindNative = !fails$g(function () {
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});

var NATIVE_BIND$2 = functionBindNative;

var call$b = Function.prototype.call;

var functionCall = NATIVE_BIND$2 ? call$b.bind(call$b) : function () {
  return call$b.apply(call$b, arguments);
};

var objectPropertyIsEnumerable = {};

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor$2 = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor$2 && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor$2(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;

var createPropertyDescriptor$4 = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var NATIVE_BIND$1 = functionBindNative;

var FunctionPrototype$2 = Function.prototype;
var bind = FunctionPrototype$2.bind;
var call$a = FunctionPrototype$2.call;
var uncurryThis$m = NATIVE_BIND$1 && bind.bind(call$a, call$a);

var functionUncurryThis = NATIVE_BIND$1 ? function (fn) {
  return fn && uncurryThis$m(fn);
} : function (fn) {
  return fn && function () {
    return call$a.apply(fn, arguments);
  };
};

var uncurryThis$l = functionUncurryThis;

var toString$9 = uncurryThis$l({}.toString);
var stringSlice$7 = uncurryThis$l(''.slice);

var classofRaw$1 = function (it) {
  return stringSlice$7(toString$9(it), 8, -1);
};

var global$x = global$y;
var uncurryThis$k = functionUncurryThis;
var fails$f = fails$i;
var classof$5 = classofRaw$1;

var Object$5 = global$x.Object;
var split = uncurryThis$k(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var indexedObject = fails$f(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object$5('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof$5(it) == 'String' ? split(it, '') : Object$5(it);
} : Object$5;

var global$w = global$y;

var TypeError$b = global$w.TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
var requireObjectCoercible$7 = function (it) {
  if (it == undefined) throw TypeError$b("Can't call method on " + it);
  return it;
};

// toObject with fallback for non-array-like ES3 strings
var IndexedObject$1 = indexedObject;
var requireObjectCoercible$6 = requireObjectCoercible$7;

var toIndexedObject$5 = function (it) {
  return IndexedObject$1(requireObjectCoercible$6(it));
};

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
var isCallable$i = function (argument) {
  return typeof argument == 'function';
};

var isCallable$h = isCallable$i;

var isObject$6 = function (it) {
  return typeof it == 'object' ? it !== null : isCallable$h(it);
};

var global$v = global$y;
var isCallable$g = isCallable$i;

var aFunction = function (argument) {
  return isCallable$g(argument) ? argument : undefined;
};

var getBuiltIn$5 = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global$v[namespace]) : global$v[namespace] && global$v[namespace][method];
};

var uncurryThis$j = functionUncurryThis;

var objectIsPrototypeOf = uncurryThis$j({}.isPrototypeOf);

var getBuiltIn$4 = getBuiltIn$5;

var engineUserAgent = getBuiltIn$4('navigator', 'userAgent') || '';

var global$u = global$y;
var userAgent = engineUserAgent;

var process = global$u.process;
var Deno = global$u.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

var engineV8Version = version;

/* eslint-disable es/no-symbol -- required for testing */

var V8_VERSION = engineV8Version;
var fails$e = fails$i;

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
var nativeSymbol = !!Object.getOwnPropertySymbols && !fails$e(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});

/* eslint-disable es/no-symbol -- required for testing */

var NATIVE_SYMBOL$2 = nativeSymbol;

var useSymbolAsUid = NATIVE_SYMBOL$2
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';

var global$t = global$y;
var getBuiltIn$3 = getBuiltIn$5;
var isCallable$f = isCallable$i;
var isPrototypeOf$2 = objectIsPrototypeOf;
var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;

var Object$4 = global$t.Object;

var isSymbol$2 = USE_SYMBOL_AS_UID$1 ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn$3('Symbol');
  return isCallable$f($Symbol) && isPrototypeOf$2($Symbol.prototype, Object$4(it));
};

var global$s = global$y;

var String$4 = global$s.String;

var tryToString$2 = function (argument) {
  try {
    return String$4(argument);
  } catch (error) {
    return 'Object';
  }
};

var global$r = global$y;
var isCallable$e = isCallable$i;
var tryToString$1 = tryToString$2;

var TypeError$a = global$r.TypeError;

// `Assert: IsCallable(argument) is true`
var aCallable$1 = function (argument) {
  if (isCallable$e(argument)) return argument;
  throw TypeError$a(tryToString$1(argument) + ' is not a function');
};

var aCallable = aCallable$1;

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
var getMethod$3 = function (V, P) {
  var func = V[P];
  return func == null ? undefined : aCallable(func);
};

var global$q = global$y;
var call$9 = functionCall;
var isCallable$d = isCallable$i;
var isObject$5 = isObject$6;

var TypeError$9 = global$q.TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
var ordinaryToPrimitive$1 = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable$d(fn = input.toString) && !isObject$5(val = call$9(fn, input))) return val;
  if (isCallable$d(fn = input.valueOf) && !isObject$5(val = call$9(fn, input))) return val;
  if (pref !== 'string' && isCallable$d(fn = input.toString) && !isObject$5(val = call$9(fn, input))) return val;
  throw TypeError$9("Can't convert object to primitive value");
};

var shared$4 = {exports: {}};

var global$p = global$y;

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty$4 = Object.defineProperty;

var setGlobal$3 = function (key, value) {
  try {
    defineProperty$4(global$p, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global$p[key] = value;
  } return value;
};

var global$o = global$y;
var setGlobal$2 = setGlobal$3;

var SHARED = '__core-js_shared__';
var store$3 = global$o[SHARED] || setGlobal$2(SHARED, {});

var sharedStore = store$3;

var store$2 = sharedStore;

(shared$4.exports = function (key, value) {
  return store$2[key] || (store$2[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.20.3',
  mode: 'global',
  copyright: '© 2014-2022 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.20.3/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});

var global$n = global$y;
var requireObjectCoercible$5 = requireObjectCoercible$7;

var Object$3 = global$n.Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
var toObject$4 = function (argument) {
  return Object$3(requireObjectCoercible$5(argument));
};

var uncurryThis$i = functionUncurryThis;
var toObject$3 = toObject$4;

var hasOwnProperty = uncurryThis$i({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject$3(it), key);
};

var uncurryThis$h = functionUncurryThis;

var id = 0;
var postfix = Math.random();
var toString$8 = uncurryThis$h(1.0.toString);

var uid$2 = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$8(++id + postfix, 36);
};

var global$m = global$y;
var shared$3 = shared$4.exports;
var hasOwn$9 = hasOwnProperty_1;
var uid$1 = uid$2;
var NATIVE_SYMBOL$1 = nativeSymbol;
var USE_SYMBOL_AS_UID = useSymbolAsUid;

var WellKnownSymbolsStore = shared$3('wks');
var Symbol$1 = global$m.Symbol;
var symbolFor = Symbol$1 && Symbol$1['for'];
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid$1;

var wellKnownSymbol$d = function (name) {
  if (!hasOwn$9(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL$1 || typeof WellKnownSymbolsStore[name] == 'string')) {
    var description = 'Symbol.' + name;
    if (NATIVE_SYMBOL$1 && hasOwn$9(Symbol$1, name)) {
      WellKnownSymbolsStore[name] = Symbol$1[name];
    } else if (USE_SYMBOL_AS_UID && symbolFor) {
      WellKnownSymbolsStore[name] = symbolFor(description);
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
    }
  } return WellKnownSymbolsStore[name];
};

var global$l = global$y;
var call$8 = functionCall;
var isObject$4 = isObject$6;
var isSymbol$1 = isSymbol$2;
var getMethod$2 = getMethod$3;
var ordinaryToPrimitive = ordinaryToPrimitive$1;
var wellKnownSymbol$c = wellKnownSymbol$d;

var TypeError$8 = global$l.TypeError;
var TO_PRIMITIVE = wellKnownSymbol$c('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
var toPrimitive$1 = function (input, pref) {
  if (!isObject$4(input) || isSymbol$1(input)) return input;
  var exoticToPrim = getMethod$2(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call$8(exoticToPrim, input, pref);
    if (!isObject$4(result) || isSymbol$1(result)) return result;
    throw TypeError$8("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};

var toPrimitive = toPrimitive$1;
var isSymbol = isSymbol$2;

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
var toPropertyKey$3 = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};

var global$k = global$y;
var isObject$3 = isObject$6;

var document$1 = global$k.document;
// typeof document.createElement is 'object' in old IE
var EXISTS$1 = isObject$3(document$1) && isObject$3(document$1.createElement);

var documentCreateElement$2 = function (it) {
  return EXISTS$1 ? document$1.createElement(it) : {};
};

var DESCRIPTORS$9 = descriptors;
var fails$d = fails$i;
var createElement = documentCreateElement$2;

// Thanks to IE8 for its funny defineProperty
var ie8DomDefine = !DESCRIPTORS$9 && !fails$d(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});

var DESCRIPTORS$8 = descriptors;
var call$7 = functionCall;
var propertyIsEnumerableModule$1 = objectPropertyIsEnumerable;
var createPropertyDescriptor$3 = createPropertyDescriptor$4;
var toIndexedObject$4 = toIndexedObject$5;
var toPropertyKey$2 = toPropertyKey$3;
var hasOwn$8 = hasOwnProperty_1;
var IE8_DOM_DEFINE$1 = ie8DomDefine;

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
objectGetOwnPropertyDescriptor.f = DESCRIPTORS$8 ? $getOwnPropertyDescriptor$1 : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject$4(O);
  P = toPropertyKey$2(P);
  if (IE8_DOM_DEFINE$1) try {
    return $getOwnPropertyDescriptor$1(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn$8(O, P)) return createPropertyDescriptor$3(!call$7(propertyIsEnumerableModule$1.f, O, P), O[P]);
};

var objectDefineProperty = {};

var DESCRIPTORS$7 = descriptors;
var fails$c = fails$i;

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
var v8PrototypeDefineBug = DESCRIPTORS$7 && fails$c(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype != 42;
});

var global$j = global$y;
var isObject$2 = isObject$6;

var String$3 = global$j.String;
var TypeError$7 = global$j.TypeError;

// `Assert: Type(argument) is Object`
var anObject$b = function (argument) {
  if (isObject$2(argument)) return argument;
  throw TypeError$7(String$3(argument) + ' is not an object');
};

var global$i = global$y;
var DESCRIPTORS$6 = descriptors;
var IE8_DOM_DEFINE = ie8DomDefine;
var V8_PROTOTYPE_DEFINE_BUG$1 = v8PrototypeDefineBug;
var anObject$a = anObject$b;
var toPropertyKey$1 = toPropertyKey$3;

var TypeError$6 = global$i.TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE$1 = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
objectDefineProperty.f = DESCRIPTORS$6 ? V8_PROTOTYPE_DEFINE_BUG$1 ? function defineProperty(O, P, Attributes) {
  anObject$a(O);
  P = toPropertyKey$1(P);
  anObject$a(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE$1 in Attributes ? Attributes[CONFIGURABLE$1] : current[CONFIGURABLE$1],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  } return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject$a(O);
  P = toPropertyKey$1(P);
  anObject$a(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError$6('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var DESCRIPTORS$5 = descriptors;
var definePropertyModule$4 = objectDefineProperty;
var createPropertyDescriptor$2 = createPropertyDescriptor$4;

var createNonEnumerableProperty$6 = DESCRIPTORS$5 ? function (object, key, value) {
  return definePropertyModule$4.f(object, key, createPropertyDescriptor$2(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var redefine$5 = {exports: {}};

var uncurryThis$g = functionUncurryThis;
var isCallable$c = isCallable$i;
var store$1 = sharedStore;

var functionToString = uncurryThis$g(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable$c(store$1.inspectSource)) {
  store$1.inspectSource = function (it) {
    return functionToString(it);
  };
}

var inspectSource$3 = store$1.inspectSource;

var global$h = global$y;
var isCallable$b = isCallable$i;
var inspectSource$2 = inspectSource$3;

var WeakMap$1 = global$h.WeakMap;

var nativeWeakMap = isCallable$b(WeakMap$1) && /native code/.test(inspectSource$2(WeakMap$1));

var shared$2 = shared$4.exports;
var uid = uid$2;

var keys = shared$2('keys');

var sharedKey$3 = function (key) {
  return keys[key] || (keys[key] = uid(key));
};

var hiddenKeys$4 = {};

var NATIVE_WEAK_MAP = nativeWeakMap;
var global$g = global$y;
var uncurryThis$f = functionUncurryThis;
var isObject$1 = isObject$6;
var createNonEnumerableProperty$5 = createNonEnumerableProperty$6;
var hasOwn$7 = hasOwnProperty_1;
var shared$1 = sharedStore;
var sharedKey$2 = sharedKey$3;
var hiddenKeys$3 = hiddenKeys$4;

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError$5 = global$g.TypeError;
var WeakMap = global$g.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject$1(it) || (state = get(it)).type !== TYPE) {
      throw TypeError$5('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared$1.state) {
  var store = shared$1.state || (shared$1.state = new WeakMap());
  var wmget = uncurryThis$f(store.get);
  var wmhas = uncurryThis$f(store.has);
  var wmset = uncurryThis$f(store.set);
  set = function (it, metadata) {
    if (wmhas(store, it)) throw new TypeError$5(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget(store, it) || {};
  };
  has = function (it) {
    return wmhas(store, it);
  };
} else {
  var STATE = sharedKey$2('state');
  hiddenKeys$3[STATE] = true;
  set = function (it, metadata) {
    if (hasOwn$7(it, STATE)) throw new TypeError$5(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty$5(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn$7(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn$7(it, STATE);
  };
}

var internalState = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};

var DESCRIPTORS$4 = descriptors;
var hasOwn$6 = hasOwnProperty_1;

var FunctionPrototype$1 = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS$4 && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn$6(FunctionPrototype$1, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS$4 || (DESCRIPTORS$4 && getDescriptor(FunctionPrototype$1, 'name').configurable));

var functionName = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};

var global$f = global$y;
var isCallable$a = isCallable$i;
var hasOwn$5 = hasOwnProperty_1;
var createNonEnumerableProperty$4 = createNonEnumerableProperty$6;
var setGlobal$1 = setGlobal$3;
var inspectSource$1 = inspectSource$3;
var InternalStateModule$1 = internalState;
var CONFIGURABLE_FUNCTION_NAME$1 = functionName.CONFIGURABLE;

var getInternalState$2 = InternalStateModule$1.get;
var enforceInternalState = InternalStateModule$1.enforce;
var TEMPLATE = String(String).split('String');

(redefine$5.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var name = options && options.name !== undefined ? options.name : key;
  var state;
  if (isCallable$a(value)) {
    if (String(name).slice(0, 7) === 'Symbol(') {
      name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
    }
    if (!hasOwn$5(value, 'name') || (CONFIGURABLE_FUNCTION_NAME$1 && value.name !== name)) {
      createNonEnumerableProperty$4(value, 'name', name);
    }
    state = enforceInternalState(value);
    if (!state.source) {
      state.source = TEMPLATE.join(typeof name == 'string' ? name : '');
    }
  }
  if (O === global$f) {
    if (simple) O[key] = value;
    else setGlobal$1(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty$4(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return isCallable$a(this) && getInternalState$2(this).source || inspectSource$1(this);
});

var objectGetOwnPropertyNames = {};

var ceil = Math.ceil;
var floor$1 = Math.floor;

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
var toIntegerOrInfinity$4 = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- safe
  return number !== number || number === 0 ? 0 : (number > 0 ? floor$1 : ceil)(number);
};

var toIntegerOrInfinity$3 = toIntegerOrInfinity$4;

var max$2 = Math.max;
var min$4 = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
var toAbsoluteIndex$2 = function (index, length) {
  var integer = toIntegerOrInfinity$3(index);
  return integer < 0 ? max$2(integer + length, 0) : min$4(integer, length);
};

var toIntegerOrInfinity$2 = toIntegerOrInfinity$4;

var min$3 = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
var toLength$4 = function (argument) {
  return argument > 0 ? min$3(toIntegerOrInfinity$2(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

var toLength$3 = toLength$4;

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
var lengthOfArrayLike$2 = function (obj) {
  return toLength$3(obj.length);
};

var toIndexedObject$3 = toIndexedObject$5;
var toAbsoluteIndex$1 = toAbsoluteIndex$2;
var lengthOfArrayLike$1 = lengthOfArrayLike$2;

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod$1 = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject$3($this);
    var length = lengthOfArrayLike$1(O);
    var index = toAbsoluteIndex$1(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

var arrayIncludes = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod$1(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod$1(false)
};

var uncurryThis$e = functionUncurryThis;
var hasOwn$4 = hasOwnProperty_1;
var toIndexedObject$2 = toIndexedObject$5;
var indexOf$1 = arrayIncludes.indexOf;
var hiddenKeys$2 = hiddenKeys$4;

var push$2 = uncurryThis$e([].push);

var objectKeysInternal = function (object, names) {
  var O = toIndexedObject$2(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn$4(hiddenKeys$2, key) && hasOwn$4(O, key) && push$2(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn$4(O, key = names[i++])) {
    ~indexOf$1(result, key) || push$2(result, key);
  }
  return result;
};

// IE8- don't enum bug keys
var enumBugKeys$3 = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];

var internalObjectKeys$1 = objectKeysInternal;
var enumBugKeys$2 = enumBugKeys$3;

var hiddenKeys$1 = enumBugKeys$2.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys$1(O, hiddenKeys$1);
};

var objectGetOwnPropertySymbols = {};

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;

var getBuiltIn$2 = getBuiltIn$5;
var uncurryThis$d = functionUncurryThis;
var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
var getOwnPropertySymbolsModule$1 = objectGetOwnPropertySymbols;
var anObject$9 = anObject$b;

var concat$2 = uncurryThis$d([].concat);

// all object keys, includes non-enumerable and symbols
var ownKeys$1 = getBuiltIn$2('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject$9(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule$1.f;
  return getOwnPropertySymbols ? concat$2(keys, getOwnPropertySymbols(it)) : keys;
};

var hasOwn$3 = hasOwnProperty_1;
var ownKeys = ownKeys$1;
var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
var definePropertyModule$3 = objectDefineProperty;

var copyConstructorProperties$2 = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule$3.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn$3(target, key) && !(exceptions && hasOwn$3(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};

var fails$b = fails$i;
var isCallable$9 = isCallable$i;

var replacement = /#|\.prototype\./;

var isForced$1 = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : isCallable$9(detection) ? fails$b(detection)
    : !!detection;
};

var normalize = isForced$1.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced$1.data = {};
var NATIVE = isForced$1.NATIVE = 'N';
var POLYFILL = isForced$1.POLYFILL = 'P';

var isForced_1 = isForced$1;

var global$e = global$y;
var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;
var createNonEnumerableProperty$3 = createNonEnumerableProperty$6;
var redefine$4 = redefine$5.exports;
var setGlobal = setGlobal$3;
var copyConstructorProperties$1 = copyConstructorProperties$2;
var isForced = isForced_1;

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
  options.name        - the .name of the function if it does not match the key
*/
var _export = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global$e;
  } else if (STATIC) {
    target = global$e[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global$e[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor$1(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties$1(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty$3(sourceProperty, 'sham', true);
    }
    // extend global
    redefine$4(target, key, sourceProperty, options);
  }
};

var internalObjectKeys = objectKeysInternal;
var enumBugKeys$1 = enumBugKeys$3;

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
var objectKeys$2 = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys$1);
};

var DESCRIPTORS$3 = descriptors;
var uncurryThis$c = functionUncurryThis;
var call$6 = functionCall;
var fails$a = fails$i;
var objectKeys$1 = objectKeys$2;
var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
var propertyIsEnumerableModule = objectPropertyIsEnumerable;
var toObject$2 = toObject$4;
var IndexedObject = indexedObject;

// eslint-disable-next-line es/no-object-assign -- safe
var $assign = Object.assign;
// eslint-disable-next-line es/no-object-defineproperty -- required for testing
var defineProperty$3 = Object.defineProperty;
var concat$1 = uncurryThis$c([].concat);

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
var objectAssign = !$assign || fails$a(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS$3 && $assign({ b: 1 }, $assign(defineProperty$3({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty$3(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), { b: 2 })).b !== 1) return true;
  // should work with symbols and should have deterministic property order (V8 bug)
  var A = {};
  var B = {};
  // eslint-disable-next-line es/no-symbol -- safe
  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
  return $assign({}, A)[symbol] != 7 || objectKeys$1($assign({}, B)).join('') != alphabet;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars -- required for `.length`
  var T = toObject$2(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;
  while (argumentsLength > index) {
    var S = IndexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? concat$1(objectKeys$1(S), getOwnPropertySymbols(S)) : objectKeys$1(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS$3 || call$6(propertyIsEnumerable, S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;

var $$6 = _export;
var assign = objectAssign;

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
// eslint-disable-next-line es/no-object-assign -- required for testing
$$6({ target: 'Object', stat: true, forced: Object.assign !== assign }, {
  assign: assign
});

const ALIGNMENT_MAP = {
  left: 'flex-start',
  center: 'center',
  right: 'flex-end'
};
const Heading = /*#__PURE__*/styled.h1.withConfig({
  displayName: "AppHeaderstyles__Heading",
  componentId: "sc-gkm0ir-0"
})(["color:", ";display:inline-block;font-family:Lato,sans-serif;font-size:1.5rem;font-weight:bold;line-height:2rem;margin:0;width:33.33%;"], colors.blueMedium);
const Content = /*#__PURE__*/styled.div.withConfig({
  displayName: "AppHeaderstyles__Content",
  componentId: "sc-gkm0ir-1"
})(["display:inline-flex;justify-content:", ";width:33.33%;"], props => ALIGNMENT_MAP[props.alignment]);
const Root$9 = /*#__PURE__*/styled.header.withConfig({
  displayName: "AppHeaderstyles__Root",
  componentId: "sc-gkm0ir-2"
})(["align-items:center;background-color:", ";display:flex;max-height:5.5rem;padding:1.5rem;"], colors.white);

const AppHeader = ({
  className,
  title,
  centerContent,
  rightContent
}) => {
  return jsxs(Root$9, Object.assign({
    className: className
  }, {
    children: [jsx(Heading, {
      children: title
    }, void 0), jsx(Content, Object.assign({
      alignment: "center"
    }, {
      children: centerContent
    }), void 0), jsx(Content, Object.assign({
      alignment: "right"
    }, {
      children: rightContent
    }), void 0)]
  }), void 0);
};

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

const VARIANT_MAP$c = {
  primary: {
    backgroundColor: colors.blueMedium,
    borderColor: colors.blueMedium,
    color: colors.white,
    hoverBackgroundColor: colors.blue,
    hoverBorderColor: colors.blue
  },
  secondary: {
    backgroundColor: colors.greyFade,
    borderColor: colors.greyLightest,
    color: colors.greyMedium,
    hoverBackgroundColor: colors.greyLighter,
    hoverBorderColor: colors.greyLighter
  },
  delete: {
    backgroundColor: colors.redDarker,
    borderColor: colors.redDarker,
    color: colors.white,
    hoverBackgroundColor: colors.redDarker,
    hoverBorderColor: colors.white
  }
};
const Root$8 = /*#__PURE__*/styled.button.withConfig({
  displayName: "Buttonstyles__Root",
  componentId: "sc-nslizk-0"
})(["border-radius:0.25rem;border-style:solid;border-width:0.0625rem;cursor:pointer;display:flex;font-family:'IBM Plex Sans',sans-serif;font-size:0.6875rem;padding:0.4375rem 0.75rem;&:active{box-shadow:0 0.125rem 0.5rem rgba(0,0,0,0.15);}&:disabled{cursor:default;opacity:0.7;}", ""], props => `
    background-color: ${VARIANT_MAP$c[props.variant].backgroundColor};
    border-color: ${VARIANT_MAP$c[props.variant].borderColor};
    color: ${VARIANT_MAP$c[props.variant].color};

    &:active:not([disabled]),
    &:hover:not([disabled]) {
      background-color: ${VARIANT_MAP$c[props.variant].hoverBackgroundColor};
    }
  `);

const Button$2 = _a => {
  var {
    children,
    variant = 'primary'
  } = _a,
      rest = __rest(_a, ["children", "variant"]);

  return jsx(Root$8, Object.assign({
    variant: variant
  }, rest, {
    children: children
  }), void 0);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
// (library.add as any)(fal, far, fas);

library.add(faSpinner, faXmark, faAngleDown, faAngleDown$1, faAngleLeft, faAngleDoubleLeft, faAngleRight, faAngleDoubleRight, faAngleUp, faAngleUp$1, faBars, faBars$1, faCalendar, faCalendarPlus, faCheck, faCheck$1, faCheck$2, faCheckCircle, faCheckSquare, faChevronDoubleRight, faChevronDown, faChevronLeft, faChevronRight, faChevronUp, faClock, faEnvelope, faExclamation, faExclamationCircle, faExclamationCircle$1, faFileAlt, faFileInvoiceDollar, faLayerGroup, faCalendar$1, faCalendarAlt, faMoneyCheckEditAlt, faLayerGroup, faScaleBalanced, faFilePdf, faFilePdf$1, faFileArrowUp, faFileSpreadsheet, faFileExcel, faHouse, faHouse$1, faInfoCircle, faMoneyCheckEditAlt$1, faPhoneAlt, faPlus, faPlus$1, faQuestionCircle, faRetweet, faRetweetAlt, faScaleBalanced$1, faSearch, faSearch$1, faSquare, faSquareCheck, faStar, faStopwatch, faTimes, faTimes$1, faTimesCircle, faUser, faUser$1, faUserFriends, faUserFriends$1, faUserPlus, faFilter, faAngleDown$1, faAngleUp$1, faBars$1, faCalendarPlus, faCalendar$2, faCheckCircle$1, faCheckCircle$2, faPlus$1, faSpinner, faTimes$1, faFileArrowDown, faExclamation, faExclamationCircle$2, faFile, faRetweet$1, faStar$1, faUser$1, faUsers, faScaleBalanced$1, faMoneyCheckEditAlt$1, faCalendar, faSearch$1, faExclamationCircle$1, faXmark, faUserClock, faUserClock$1, faArrowsRotate, faEnvelope$1, faFileArrowDown, faFileLines, faRefresh, faFileArrowDown$1, faArrowRightLong, faArrowLeftLong);
const Icon$1 = ({
  className,
  iconCode,
  style,
  rotate,
  prefix: _prefix = 'fal'
}) => {
  const image = findIconDefinition({
    prefix: _prefix,
    iconName: iconCode
  });
  return image ? jsx(FontAwesomeIcon, {
    className: className,
    icon: icon(image),
    style: style,
    transform: rotate ? {
      rotate
    } : undefined
  }, void 0) : null;
};

const Root$7 = /*#__PURE__*/styled.input.withConfig({
  displayName: "Inputstyles__Root",
  componentId: "sc-9utxbm-0"
})(["background-color:", ";border-radius:0.25rem;border:0.0625rem solid ", ";color:0.0625rem solid ", ";display:flex;font-family:'IBM Plex Sans',sans-serif;font-size:0.6875rem;padding:0.375rem 0.5rem;::placeholder{font-family:'IBM Plex Sans',sans-serif;}&:focus:not([disabled]),&:hover:not([disabled]){border-color:", ";}&:focus:not([disabled]){background-color:", ";}&:disabled{background-color:transparent;border-color:", ";color:", ";}"], props => props.value !== undefined ? colors.greyFade : 'transparent', props => {
  if (props.hasError) {
    return colors['error-red'];
  }

  return props.value !== undefined ? colors['button-hover'] : colors.greyLight;
}, colors.greyDark, props => props.hasError ? colors['error-red'] : colors['button-hover'], colors.greyFade, colors.greyLightest, colors.greyLightest);

const Input$5 = _a => {
  var {
    hasError = false
  } = _a,
      rest = __rest(_a, ["hasError"]);

  return jsx(Root$7, Object.assign({
    hasError: hasError
  }, rest), void 0);
};

const SearchWrapper = /*#__PURE__*/styled.div.withConfig({
  displayName: "Searchstyles__SearchWrapper",
  componentId: "sc-fazw62-0"
})(["width:25.0625rem;"]);
const Root$6 = /*#__PURE__*/styled.div.withConfig({
  displayName: "Searchstyles__Root",
  componentId: "sc-fazw62-1"
})(["background-color:", ";border-radius:0.375rem;border:0.0625rem solid ", ";width:", ";margin-right:", ";display:flex;align-items:center;padding:0.125rem 0.125rem;:hover{border:0.0625rem solid #4594b0;}:focus-within{border:0.0625rem solid #4594b0;box-shadow:0rem 0.125rem 0.5rem rgba(0,0,0,0.15);}"], colors.white, colors.greyLight, props => {
  var _a;

  return (_a = props.width) !== null && _a !== void 0 ? _a : '25.0625rem';
}, props => {
  var _a;

  return (_a = props.marginRight) !== null && _a !== void 0 ? _a : '0';
});
const Input$4 = /*#__PURE__*/styled.input.withConfig({
  displayName: "Searchstyles__Input",
  componentId: "sc-fazw62-2"
})(["background-color:", ";border:none;color:", ";font-family:'IBM Plex Sans',sans-serif;font-size:0.875rem;line-height:1.125rem;font-weight:500;flex:1;margin-left:0.6875rem;::placeholder{font-family:'IBM Plex Sans',sans-serif;color:", ";}:focus{caret-color:#4594b0;outline:none;}:not(:focus):not(:placeholder-shown):valid{color:", ";}&::-ms-clear{display:none;width:0;height:0;}&::-ms-reveal{display:none;width:0;height:0;}&::-webkit-search-decoration,&::-webkit-search-cancel-button,&::-webkit-search-results-button,&::-webkit-search-results-decoration{display:none;}"], colors.white, colors.greyDarker, colors.greyLight, colors.greyLight);
const CircleButton = /*#__PURE__*/styled.button.withConfig({
  displayName: "Searchstyles__CircleButton",
  componentId: "sc-fazw62-3"
})(["all:unset;margin:0.75rem;"]);
const ResultsWrapper = /*#__PURE__*/styled.div.withConfig({
  displayName: "Searchstyles__ResultsWrapper",
  componentId: "sc-fazw62-4"
})(["position:absolute;"]);
const menuIsOpen = /*#__PURE__*/css(["border:0.0625rem solid ", ";"], colors.greyLight);
const menuIsClosed = /*#__PURE__*/css(["border:none;"]);
const SearchResultsList = /*#__PURE__*/styled.ul.withConfig({
  displayName: "Searchstyles__SearchResultsList",
  componentId: "sc-fazw62-5"
})(["display:flex;flex-direction:column;padding:0rem;width:", ";max-height:18.6875rem;background-color:", ";list-style-type:none;overflow:auto;border-radius:0.25rem;", " box-shadow:0rem 0.125rem 0.5rem rgba(0,0,0,0.15);"], props => {
  var _a;

  return (_a = props.width) !== null && _a !== void 0 ? _a : '25.0625rem';
}, colors.white, props => props.isOpen ? menuIsOpen : menuIsClosed);
/*#__PURE__*/styled.p.withConfig({
  displayName: "Searchstyles__SearchResultsTextCusip",
  componentId: "sc-fazw62-6"
})(["color:", ";font-family:'IBM Plex Sans',sans-serif;font-size:0.75rem;font-weight:400;margin-bottom:0.125rem;"], colors.greyMedium);
/*#__PURE__*/styled.p.withConfig({
  displayName: "Searchstyles__SearchResultsTextDetails",
  componentId: "sc-fazw62-7"
})(["color:", ";font-family:'IBM Plex Sans',sans-serif;font-size:0.875rem;font-weight:400;margin-top:0rem;margin-bottom:0.5rem;"], colors.greyDarker);
const SearchListItemContainer = /*#__PURE__*/styled.li.withConfig({
  displayName: "Searchstyles__SearchListItemContainer",
  componentId: "sc-fazw62-8"
})(["align-content:flex-start;padding:0rem 1.25rem 0rem 1.25rem;box-shadow:inset 0rem -0.0625rem 0rem ", ";min-height:4.375rem;background-color:", ";:active{background-color:", ";}"], colors.greyLightest, props => props.isHighlighted ? 'rgba(147, 195, 213, 0.2)' : colors.white, colors.ocean);
const StyledSearchIcon = /*#__PURE__*/styled(Icon$1).withConfig({
  displayName: "Searchstyles__StyledSearchIcon",
  componentId: "sc-fazw62-9"
})(["font-size:0.875rem;color:", ";margin-left:0.6875rem;"], colors.greyMedium);
const StyledCloseIcon = /*#__PURE__*/styled(Icon$1).withConfig({
  displayName: "Searchstyles__StyledCloseIcon",
  componentId: "sc-fazw62-10"
})(["font-size:0.875rem;color:", ";:hover{color:", ";}"], colors.greyLightest, colors.greyMedium);

const Search = _a => {
  var {
    items,
    initialValue,
    handleSelectItem,
    handleChange,
    handleBlur,
    renderContent,
    itemToString,
    inputAriaLabel,
    buttonAriaLabel,
    width,
    marginRight
  } = _a,
      rest = __rest(_a, ["items", "initialValue", "handleSelectItem", "handleChange", "handleBlur", "renderContent", "itemToString", "inputAriaLabel", "buttonAriaLabel", "width", "marginRight"]);

  const {
    isOpen,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    getItemProps,
    highlightedIndex,
    reset
  } = useCombobox({
    itemToString,
    inputValue: initialValue,
    items,
    onInputValueChange: ({
      inputValue
    }) => {
      handleChange === null || handleChange === void 0 ? void 0 : handleChange(inputValue);
      return;
    },

    onSelectedItemChange({
      selectedItem: selectedItemEvent
    }) {
      handleSelectItem === null || handleSelectItem === void 0 ? void 0 : handleSelectItem(selectedItemEvent);
    }

  });
  const inputProps = getInputProps({
    'aria-label': inputAriaLabel,
    'aria-labelledby': ''
  });
  return jsxs(SearchWrapper, {
    children: [jsx("div", Object.assign({}, getComboboxProps(), {
      children: jsx("form", Object.assign({
        onSubmit: e => {
          e.preventDefault();
        }
      }, {
        children: jsxs(Root$6, Object.assign({
          width: width,
          marginRight: marginRight
        }, {
          children: [jsx(StyledSearchIcon, {
            iconCode: "search"
          }, void 0), jsx(Input$4, Object.assign({}, rest, {
            name: 'search'
          }, inputProps), void 0), jsx(CircleButton, Object.assign({
            name: "clear input",
            "aria-label": buttonAriaLabel,
            onClick: () => {
              reset();
            }
          }, {
            children: jsx(StyledCloseIcon, {
              iconCode: "times-circle"
            }, void 0)
          }), void 0)]
        }), void 0)
      }), void 0)
    }), void 0), jsx(ResultsWrapper, {
      children: jsx(SearchResultsList, Object.assign({
        isOpen: isOpen && items.length > 0
      }, getMenuProps({
        'aria-labelledby': inputProps.id
      }), {
        width: width
      }, {
        children: isOpen && items.length > 0 ? items.map((item, index) => jsx(SearchListItemContainer, Object.assign({
          isHighlighted: highlightedIndex === index
        }, getItemProps({
          item,
          index
        }), {
          children: /*#__PURE__*/React.cloneElement(renderContent, {
            item
          })
        }), index)) : null
      }), void 0)
    }, void 0)]
  }, void 0);
};

var wellKnownSymbol$b = wellKnownSymbol$d;

var TO_STRING_TAG$3 = wellKnownSymbol$b('toStringTag');
var test = {};

test[TO_STRING_TAG$3] = 'z';

var toStringTagSupport = String(test) === '[object z]';

var global$d = global$y;
var TO_STRING_TAG_SUPPORT = toStringTagSupport;
var isCallable$8 = isCallable$i;
var classofRaw = classofRaw$1;
var wellKnownSymbol$a = wellKnownSymbol$d;

var TO_STRING_TAG$2 = wellKnownSymbol$a('toStringTag');
var Object$2 = global$d.Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
var classof$4 = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object$2(it), TO_STRING_TAG$2)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && isCallable$8(O.callee) ? 'Arguments' : result;
};

var global$c = global$y;
var classof$3 = classof$4;

var String$2 = global$c.String;

var toString$7 = function (argument) {
  if (classof$3(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
  return String$2(argument);
};

var $$5 = _export;
var DESCRIPTORS$2 = descriptors;
var global$b = global$y;
var uncurryThis$b = functionUncurryThis;
var hasOwn$2 = hasOwnProperty_1;
var isCallable$7 = isCallable$i;
var isPrototypeOf$1 = objectIsPrototypeOf;
var toString$6 = toString$7;
var defineProperty$2 = objectDefineProperty.f;
var copyConstructorProperties = copyConstructorProperties$2;

var NativeSymbol = global$b.Symbol;
var SymbolPrototype = NativeSymbol && NativeSymbol.prototype;

if (DESCRIPTORS$2 && isCallable$7(NativeSymbol) && (!('description' in SymbolPrototype) ||
  // Safari 12 bug
  NativeSymbol().description !== undefined
)) {
  var EmptyStringDescriptionStore = {};
  // wrap Symbol constructor for correct work with undefined description
  var SymbolWrapper = function Symbol() {
    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : toString$6(arguments[0]);
    var result = isPrototypeOf$1(SymbolPrototype, this)
      ? new NativeSymbol(description)
      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
      : description === undefined ? NativeSymbol() : NativeSymbol(description);
    if (description === '') EmptyStringDescriptionStore[result] = true;
    return result;
  };

  copyConstructorProperties(SymbolWrapper, NativeSymbol);
  SymbolWrapper.prototype = SymbolPrototype;
  SymbolPrototype.constructor = SymbolWrapper;

  var NATIVE_SYMBOL = String(NativeSymbol('test')) == 'Symbol(test)';
  var symbolToString = uncurryThis$b(SymbolPrototype.toString);
  var symbolValueOf = uncurryThis$b(SymbolPrototype.valueOf);
  var regexp = /^Symbol\((.*)\)[^)]+$/;
  var replace$2 = uncurryThis$b(''.replace);
  var stringSlice$6 = uncurryThis$b(''.slice);

  defineProperty$2(SymbolPrototype, 'description', {
    configurable: true,
    get: function description() {
      var symbol = symbolValueOf(this);
      var string = symbolToString(symbol);
      if (hasOwn$2(EmptyStringDescriptionStore, symbol)) return '';
      var desc = NATIVE_SYMBOL ? stringSlice$6(string, 7, -1) : replace$2(string, regexp, '$1');
      return desc === '' ? undefined : desc;
    }
  });

  $$5({ global: true, forced: true }, {
    Symbol: SymbolWrapper
  });
}

const map = {
  error: {
    backgroundColor: colors.failRed
  },
  warn: {
    backgroundColor: colors.messageWarn
  },
  info: {
    backgroundColor: colors.messageInfo
  },
  success: {
    backgroundColor: colors.successGreen
  }
};
const FlatXButton = /*#__PURE__*/styled.button.withConfig({
  displayName: "Messagestyle__FlatXButton",
  componentId: "sc-1v68li-0"
})(["box-shadow:0px 0px 0px;outline:0;@include transition(background-color 0.3s ease);border-radius:1rem;border:0px transparent;background:transparent;margin-left:auto;&:hover{background:transparent;}"]);
const MessageColoredIcon = /*#__PURE__*/styled(Icon$1).withConfig({
  displayName: "Messagestyle__MessageColoredIcon",
  componentId: "sc-1v68li-1"
})(["display:flex;align-self:center;letter-spacing:0.01875rem;text-transform:uppercase;left:calc(50% - 1.5rem / 2);top:calc(50% - 1.5rem / 2);mix-blend-mode:multiply;font-size:1.25rem;line-height:0.875rem;align-items:center;text-align:center;"]);
const MessageExitIcon = /*#__PURE__*/styled(MessageColoredIcon).withConfig({
  displayName: "Messagestyle__MessageExitIcon",
  componentId: "sc-1v68li-2"
})(["font-size:0.875rem;line-height:0.875rem;font-weight:400;font-style:normal;color:#333333;opacity:0.25;&:hover{background:", " '80';mix-blend-mode:multiply;box-shadow:inset 0rem 0.0625rem 0.25rem rgba(0,0,0,0.15);border-radius:1rem;opacity:0.7;}"], colors.white);
const MessageStyle = /*#__PURE__*/styled.div.withConfig({
  displayName: "Messagestyle__MessageStyle",
  componentId: "sc-1v68li-3"
})(["position:absolute;z-index:999;display:flex;flex-direction:row;align-content:center;padding:1.5rem 0.75rem;width:20.875rem;min-height:5.875rem;bottom:1rem;right:1rem;opacity:0.95;box-shadow:0rem 0.125rem 0.5rem 0rem ", ";border-radius:0.75rem;flex:none;order:0;align-self:stretch;flex-grow:0;background-color:", ";& > ", "{color:", ";}"], colors.boxShadow, props => map[`${props.messageType}`].backgroundColor, MessageColoredIcon, props => map[`${props.messageType}`].backgroundColor);
const MessageTitle = /*#__PURE__*/styled.div.withConfig({
  displayName: "Messagestyle__MessageTitle",
  componentId: "sc-1v68li-4"
})(["color:", ";font-weight:600;font-size:1rem;line-height:1.5rem;margin:auto 0rem;"], colors.greyDarker);
const MessageContent = /*#__PURE__*/styled(MessageTitle).withConfig({
  displayName: "Messagestyle__MessageContent",
  componentId: "sc-1v68li-5"
})(["font-weight:400;"]);
const MessageCol = /*#__PURE__*/styled.div.withConfig({
  displayName: "Messagestyle__MessageCol",
  componentId: "sc-1v68li-6"
})(["font-family:'IBM Plex Sans';display:flex;justify-content:flex-start;flex-direction:column;flex-wrap:wrap;flex-grow:0;align-self:stretch;order:0;color:", ";margin:0 0.5rem;"], colors.greyDarker);

const Message$1 = ({
  /**
   * Title of the message
   */
  title,

  /**
   * Description of the message (optional)
   */
  description,

  /**
   * If true, hide the message. By default: false
   */
  showMessage: _showMessage = false,
  setShowMessage,

  /**
   * In seconds. By default: 3 seconds (subject to change)
   */
  timer: _timer = 3,

  /**
   * Message Type will decide the style of the Message:
   *  (Default) info: Blue Message
   *  success: Green Message
   *  warn: Yellow Message
   *  error: Red Message
   */
  messageType: _messageType = 'info'
}) => {
  const iconCode = {
    info: 'circle-check',
    success: 'circle-check',
    error: 'circle-xmark',
    warn: 'circle-exclamation'
  }[_messageType]; // if message shouldn't be off, start timer

  useEffect(() => {
    const timeout = setTimeout(() => setShowMessage(false), _timer * 1000);
    return () => clearTimeout(timeout);
  }, [_showMessage, _timer, setShowMessage]);
  if (!_showMessage) return null;
  return jsxs(MessageStyle, Object.assign({
    messageType: _messageType
  }, {
    children: [jsx(MessageColoredIcon, {
      iconCode: iconCode
    }, void 0), jsxs(MessageCol, Object.assign({
      role: "alert"
    }, {
      children: [jsx(MessageTitle, {
        children: title
      }, void 0), description ? jsx(MessageContent, {
        children: description
      }, void 0) : null]
    }), void 0), jsx(FlatXButton, Object.assign({
      onClick: () => setShowMessage(false)
    }, {
      children: jsx(MessageExitIcon, {
        iconCode: "times"
      }, void 0)
    }), void 0)]
  }), void 0);
};

const CardWrapper = /*#__PURE__*/styled.div.withConfig({
  displayName: "Cardstyles__CardWrapper",
  componentId: "sc-1bpi31p-0"
})(["display:flex;background:#ffffff;background-color:", ";border-radius:", "rem;flex-direction:", ";padding:", "rem;margin-left:", "rem;"], props => props.backgroundColor || '#ffffff', props => props.borderRadius || 0.9, props => props.flexDirection || 'row', props => props.padding || 0, props => props.margin || 0);

const Card = ({
  backgroundColor,
  borderRadius,
  flexDirection,
  margin,
  padding,
  children
}) => jsx(CardWrapper, Object.assign({
  backgroundColor: backgroundColor,
  borderRadius: borderRadius,
  flexDirection: flexDirection,
  padding: padding,
  margin: margin
}, {
  children: children
}), void 0);

const VARIANT_STYLES = {
  primary: {
    backgroundColor: colors.blueMedium,
    backgroundColorHover: colors.blue,
    borderColor: colors.blueMedium,
    borderColorHover: colors.blueMedium,
    color: colors.white,
    colorDisabled: colors.white,
    colorHover: colors.white,
    menuBackgroundColor: colors.ocean,
    menuBackgroundColorActive: colors.blue,
    menuBackgroundColorHover: colors['light-nav-blue'],
    menuColor: colors.greyDarker,
    menuColorActionHover: colors.white,
    menuColorDisabled: colors.greyLight,
    menuColorHover: colors.white,
    opacityDisabled: 0.6
  },
  secondary: {
    backgroundColor: colors.white,
    backgroundColorHover: colors.white,
    borderColor: colors.white,
    borderColorHover: colors.white,
    color: colors.greyMedium,
    colorDisabled: colors.greyLight,
    colorHover: colors.oceanDarker,
    menuBackgroundColor: colors.greyLighter,
    menuBackgroundColorActive: colors.greyMedium,
    menuBackgroundColorHover: colors.greyLightest,
    menuColor: colors.greyDarker,
    menuColorActionHover: colors.blueMedium,
    menuColorDisabled: colors.greyLight,
    menuColorHover: colors.greyDarker,
    opacityDisabled: 1
  },
  tertiary: {
    backgroundColor: colors.white,
    backgroundColorHover: colors.white,
    borderColor: colors.greyLightest,
    borderColorHover: colors.oceanDarker,
    color: colors.greyMedium,
    colorDisabled: colors.greyLight,
    colorHover: colors.oceanDarker,
    menuBackgroundColor: colors.greyLighter,
    menuBackgroundColorActive: colors.greyMedium,
    menuBackgroundColorHover: colors.greyLightest,
    menuColor: colors.greyDarker,
    menuColorActionHover: colors.blueMedium,
    menuColorDisabled: colors.greyLight,
    menuColorHover: colors.greyDarker,
    opacityDisabled: 1
  }
};
const DropdownHeader = /*#__PURE__*/styled.div.withConfig({
  displayName: "DropdownBasestyles__DropdownHeader",
  componentId: "sc-e2hqr-0"
})(["color:", ";margin-bottom:0.25rem;font-family:IBM Plex Sans;font-size:0.75rem;font-weight:500;line-height:1rem;letter-spacing:0.03em;text-align:left;"], colors.greyDark);
const DropdownIcon$3 = /*#__PURE__*/styled(Icon$1).withConfig({
  displayName: "DropdownBasestyles__DropdownIcon",
  componentId: "sc-e2hqr-1"
})(["height:0.75rem;margin-left:0.9375rem;width:0.75rem;"]);
const Divider = /*#__PURE__*/styled.div.withConfig({
  displayName: "DropdownBasestyles__Divider",
  componentId: "sc-e2hqr-2"
})(["background-color:", ";height:0.0625rem;margin:0.125rem 0.25rem;width:calc(100% - 0.5rem);"], colors.greyLight);
const MenuItem = /*#__PURE__*/styled.li.withConfig({
  displayName: "DropdownBasestyles__MenuItem",
  componentId: "sc-e2hqr-3"
})(["border-radius:0.25rem;color:", ";cursor:pointer;display:flex;margin:", ";padding:0.25rem 0.5rem;text-align:", ";width:", ";justify-content:space-between;align-items:center;&:first-child{margin-top:0;}&:last-child{margin-bottom:0;}", ""], props => props.isAction ? colors['light-nav-blue'] : 'inherit', props => props.isAction ? '0.1875rem 0 0.4375rem' : '0.1875rem 0', props => props.alignment || 'initial', props => props.width || '100%', props => {
  const {
    menuBackgroundColorActive,
    menuBackgroundColorHover,
    menuColorActionHover,
    menuColorDisabled,
    menuColorHover
  } = VARIANT_STYLES[props.variant];
  const activeStyles = `
      &:active {
        background-color: ${menuBackgroundColorActive};
      }
    `;

  if (props.disabled) {
    return `
        color: ${menuColorDisabled};
        cursor: default;
      `;
  }

  if (props.isHighlighted) {
    return `
        color: ${props.isAction ? menuColorActionHover : menuColorHover};
        background-color: ${menuBackgroundColorHover};

        ${activeStyles}
      `;
  }

  return activeStyles;
});
const Menu = /*#__PURE__*/styled.ul.withConfig({
  displayName: "DropdownBasestyles__Menu",
  componentId: "sc-e2hqr-4"
})(["background-color:", ";border-radius:0.25rem;box-shadow:0 0.125rem 0.5rem rgba(0,0,0,0.15);font-family:'IBM Plex Sans';font-size:0.875rem;font-style:normal;font-weight:400;letter-spacing:0.03em;line-height:1.125rem;margin:0.5625rem 0 0;max-height:17.5rem;max-width:15rem;min-width:7.75rem;overflow-y:auto;position:absolute;"], colors.greyFade);
const Button$1 = /*#__PURE__*/styled.button.withConfig({
  displayName: "DropdownBasestyles__Button",
  componentId: "sc-e2hqr-5"
})(["border-radius:0.25rem;border-style:solid;border-width:0.0625rem;cursor:pointer;font-family:'IBM Plex Sans';font-size:0.6875rem;font-style:normal;font-weight:400;letter-spacing:0.03em;line-height:0.875rem;padding:0.5rem;&:active{box-shadow:0px 2px 8px rgba(0,0,0,0.15);}"]);
const Root$5 = /*#__PURE__*/styled.div.withConfig({
  displayName: "DropdownBasestyles__Root",
  componentId: "sc-e2hqr-6"
})(["position:relative;", "{", "}", "{", "}"], Button$1, props => {
  const {
    backgroundColor,
    backgroundColorHover,
    borderColor,
    borderColorHover,
    color,
    colorDisabled,
    colorHover,
    opacityDisabled
  } = VARIANT_STYLES[props.variant];
  return `
        color: ${color};
        border-color: ${borderColor};
        background-color: ${backgroundColor};

        &:hover:enabled {
          background-color: ${backgroundColorHover};
          border-color: ${borderColorHover};
          color: ${colorHover};
        }

        &:disabled {
          cursor: default;
          color: ${colorDisabled};
          opacity: ${opacityDisabled};
        }
      `;
}, Menu, props => {
  const {
    menuBackgroundColor,
    menuBackgroundColorHover,
    menuColor,
    menuColorHover
  } = VARIANT_STYLES[props.variant];
  return `
        color: ${menuColor};
        background-color: ${menuBackgroundColor};
        padding: ${props.isOpen ? '0.5rem 0.25rem' : '0'};

        &:hover:enabled {
          color: ${menuColorHover};
          background-color: ${menuBackgroundColorHover};
        }
      `;
});

function Dropdown({
  ariaLabel,
  ariaLabelledBy,
  className,
  hasIndicator = true,
  hasSubMenuIndicator = false,
  id,
  isDisabled,
  items,
  onBlur,
  placeholder,
  variant = 'primary',
  header,
  iconCodeLeft,
  title
}) {
  const {
    isOpen,
    getToggleButtonProps,
    getMenuProps,
    highlightedIndex,
    getItemProps
  } = useSelect({
    id,
    items
  });
  const buttonProps = Object.assign({}, getToggleButtonProps());
  const menuProps = Object.assign({}, getMenuProps());
  return jsxs(Root$5, Object.assign({
    className: className,
    id: id,
    isOpen: isOpen,
    onBlur: e => {
      if (e.relatedTarget && e.relatedTarget === buttonProps.ref.current) {
        return;
      }

      onBlur === null || onBlur === void 0 ? void 0 : onBlur();
    },
    variant: variant
  }, {
    children: [!header ? null : jsx(DropdownHeader, {
      children: header
    }, void 0), jsxs(Button$1, Object.assign({}, buttonProps, {
      "aria-label": ariaLabel,
      "aria-labelledby": ariaLabelledBy,
      variant: variant,
      disabled: isDisabled,
      title: title
    }, {
      children: [iconCodeLeft && jsx(DropdownIcon$3, {
        className: "leftIcon",
        iconCode: iconCodeLeft
      }, void 0), placeholder, hasIndicator && jsx(DropdownIcon$3, {
        className: "rightIndicator",
        iconCode: "chevron-down"
      }, void 0)]
    }), void 0), items.length > 0 && jsx(Menu, Object.assign({}, menuProps, {
      "aria-labelledby": buttonProps.id,
      role: "menu"
    }, {
      children: isOpen && items.map((item, index) => {
        const itemProps = getItemProps({
          item,
          index,
          disabled: item.isDisabled,
          onClick: item.onClick
        });
        return jsxs(React.Fragment, {
          children: [jsxs(MenuItem, Object.assign({}, itemProps, {
            hasSectionBreak: item.hasSectionBreak,
            isHighlighted: highlightedIndex === index,
            "aria-selected": undefined,
            role: "menuitem",
            variant: variant
          }, {
            children: [item.display, hasSubMenuIndicator && jsx(DropdownIcon$3, {
              iconCode: "chevron-down"
            }, void 0)]
          }), void 0), item.hasSectionBreak && jsx(Divider, {}, void 0)]
        }, `${item.display}-${index}`);
      })
    }), void 0)]
  }), void 0);
}

const StyledButton = /*#__PURE__*/styled(Button$1).withConfig({
  displayName: "SingleSelectstyles__StyledButton",
  componentId: "sc-1r0v1lv-0"
})(["display:flex;justify-content:space-between;"]);

function SingleSelect({
  ariaLabel,
  ariaLabelledBy,
  className,
  hasIndicator,
  id,
  items,
  onChange,
  onBlur,
  variant = 'primary',
  selectedItem,
  placeholder,
  noHighlight,
  iconCode = 'chevron-down',
  iconPrefix = 'fal'
}) {
  const {
    isOpen,
    getToggleButtonProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
    selectItem,
    reset
  } = useSelect({
    id,
    items,
    initialSelectedItem: selectedItem,

    onSelectedItemChange({
      selectedItem: selectedItemEvent
    }) {
      onChange === null || onChange === void 0 ? void 0 : onChange(selectedItemEvent);
    }

  });
  React.useEffect(() => {
    if (!selectedItem) {
      reset();
    } else {
      selectItem(selectedItem);
    }
  }, [selectedItem, reset, selectItem]);
  const buttonProps = Object.assign({}, getToggleButtonProps());
  return jsxs(Root$5, Object.assign({
    className: className,
    isOpen: isOpen,
    onBlur: e => {
      if (e.relatedTarget && e.relatedTarget === buttonProps.ref.current) {
        return;
      }

      onBlur === null || onBlur === void 0 ? void 0 : onBlur();
    },
    variant: variant
  }, {
    children: [jsxs(StyledButton, Object.assign({}, buttonProps, {
      "aria-haspopup": "menu",
      "aria-label": ariaLabel,
      "aria-labelledby": ariaLabelledBy,
      variant: variant
    }, {
      children: [(selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.display) || placeholder, hasIndicator && jsx(DropdownIcon$3, {
        iconCode: iconCode,
        prefix: iconPrefix
      }, void 0)]
    }), void 0), jsx(Menu, Object.assign({}, getMenuProps(), {
      "aria-labelledby": buttonProps.id
    }, {
      children: isOpen && items.map((item, index) => {
        const itemProps = getItemProps({
          item,
          index,
          disabled: item.isDisabled
        });
        return jsxs(React.Fragment, {
          children: [jsx(MenuItem, Object.assign({}, itemProps, {
            hasSectionBreak: item.hasSectionBreak,
            isHighlighted: !noHighlight && highlightedIndex === index,
            variant: variant
          }, {
            children: item.display
          }), void 0), item.hasSectionBreak && jsx(Divider, {}, void 0)]
        }, `${item.display}-${index}`);
      })
    }), void 0)]
  }), void 0);
}

var objectDefineProperties = {};

var DESCRIPTORS$1 = descriptors;
var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;
var definePropertyModule$2 = objectDefineProperty;
var anObject$8 = anObject$b;
var toIndexedObject$1 = toIndexedObject$5;
var objectKeys = objectKeys$2;

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
objectDefineProperties.f = DESCRIPTORS$1 && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject$8(O);
  var props = toIndexedObject$1(Properties);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule$2.f(O, key = keys[index++], props[key]);
  return O;
};

var getBuiltIn$1 = getBuiltIn$5;

var html$1 = getBuiltIn$1('document', 'documentElement');

/* global ActiveXObject -- old IE, WSH */

var anObject$7 = anObject$b;
var definePropertiesModule = objectDefineProperties;
var enumBugKeys = enumBugKeys$3;
var hiddenKeys = hiddenKeys$4;
var html = html$1;
var documentCreateElement$1 = documentCreateElement$2;
var sharedKey$1 = sharedKey$3;

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO$1 = sharedKey$1('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement$1('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = typeof document != 'undefined'
    ? document.domain && activeXDocument
      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
      : NullProtoObjectViaIFrame()
    : NullProtoObjectViaActiveX(activeXDocument); // WSH
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO$1] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
var objectCreate = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject$7(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO$1] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
};

var wellKnownSymbol$9 = wellKnownSymbol$d;
var create$2 = objectCreate;
var definePropertyModule$1 = objectDefineProperty;

var UNSCOPABLES = wellKnownSymbol$9('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule$1.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create$2(null)
  });
}

// add a key to Array.prototype[@@unscopables]
var addToUnscopables$2 = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};

var iterators = {};

var fails$9 = fails$i;

var correctPrototypeGetter = !fails$9(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});

var global$a = global$y;
var hasOwn$1 = hasOwnProperty_1;
var isCallable$6 = isCallable$i;
var toObject$1 = toObject$4;
var sharedKey = sharedKey$3;
var CORRECT_PROTOTYPE_GETTER = correctPrototypeGetter;

var IE_PROTO = sharedKey('IE_PROTO');
var Object$1 = global$a.Object;
var ObjectPrototype = Object$1.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
var objectGetPrototypeOf = CORRECT_PROTOTYPE_GETTER ? Object$1.getPrototypeOf : function (O) {
  var object = toObject$1(O);
  if (hasOwn$1(object, IE_PROTO)) return object[IE_PROTO];
  var constructor = object.constructor;
  if (isCallable$6(constructor) && object instanceof constructor) {
    return constructor.prototype;
  } return object instanceof Object$1 ? ObjectPrototype : null;
};

var fails$8 = fails$i;
var isCallable$5 = isCallable$i;
var getPrototypeOf$1 = objectGetPrototypeOf;
var redefine$3 = redefine$5.exports;
var wellKnownSymbol$8 = wellKnownSymbol$d;

var ITERATOR$2 = wellKnownSymbol$8('iterator');
var BUGGY_SAFARI_ITERATORS$1 = false;

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype$2, PrototypeOfArrayIteratorPrototype, arrayIterator;

/* eslint-disable es/no-array-prototype-keys -- safe */
if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS$1 = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf$1(getPrototypeOf$1(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype$2 = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = IteratorPrototype$2 == undefined || fails$8(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype$2[ITERATOR$2].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype$2 = {};

// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if (!isCallable$5(IteratorPrototype$2[ITERATOR$2])) {
  redefine$3(IteratorPrototype$2, ITERATOR$2, function () {
    return this;
  });
}

var iteratorsCore = {
  IteratorPrototype: IteratorPrototype$2,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
};

var defineProperty$1 = objectDefineProperty.f;
var hasOwn = hasOwnProperty_1;
var wellKnownSymbol$7 = wellKnownSymbol$d;

var TO_STRING_TAG$1 = wellKnownSymbol$7('toStringTag');

var setToStringTag$2 = function (target, TAG, STATIC) {
  if (target && !STATIC) target = target.prototype;
  if (target && !hasOwn(target, TO_STRING_TAG$1)) {
    defineProperty$1(target, TO_STRING_TAG$1, { configurable: true, value: TAG });
  }
};

var IteratorPrototype$1 = iteratorsCore.IteratorPrototype;
var create$1 = objectCreate;
var createPropertyDescriptor$1 = createPropertyDescriptor$4;
var setToStringTag$1 = setToStringTag$2;
var Iterators$2 = iterators;

var returnThis$1 = function () { return this; };

var createIteratorConstructor$1 = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create$1(IteratorPrototype$1, { next: createPropertyDescriptor$1(+!ENUMERABLE_NEXT, next) });
  setToStringTag$1(IteratorConstructor, TO_STRING_TAG, false);
  Iterators$2[TO_STRING_TAG] = returnThis$1;
  return IteratorConstructor;
};

var global$9 = global$y;
var isCallable$4 = isCallable$i;

var String$1 = global$9.String;
var TypeError$4 = global$9.TypeError;

var aPossiblePrototype$1 = function (argument) {
  if (typeof argument == 'object' || isCallable$4(argument)) return argument;
  throw TypeError$4("Can't set " + String$1(argument) + ' as a prototype');
};

/* eslint-disable no-proto -- safe */

var uncurryThis$a = functionUncurryThis;
var anObject$6 = anObject$b;
var aPossiblePrototype = aPossiblePrototype$1;

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
var objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    setter = uncurryThis$a(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set);
    setter(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject$6(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);

var $$4 = _export;
var call$5 = functionCall;
var FunctionName = functionName;
var isCallable$3 = isCallable$i;
var createIteratorConstructor = createIteratorConstructor$1;
var getPrototypeOf = objectGetPrototypeOf;
var setPrototypeOf = objectSetPrototypeOf;
var setToStringTag = setToStringTag$2;
var createNonEnumerableProperty$2 = createNonEnumerableProperty$6;
var redefine$2 = redefine$5.exports;
var wellKnownSymbol$6 = wellKnownSymbol$d;
var Iterators$1 = iterators;
var IteratorsCore = iteratorsCore;

var PROPER_FUNCTION_NAME$1 = FunctionName.PROPER;
var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR$1 = wellKnownSymbol$6('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

var defineIterator$1 = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR$1]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (!isCallable$3(CurrentIteratorPrototype[ITERATOR$1])) {
          redefine$2(CurrentIteratorPrototype, ITERATOR$1, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true);
    }
  }

  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
  if (PROPER_FUNCTION_NAME$1 && DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    if (CONFIGURABLE_FUNCTION_NAME) {
      createNonEnumerableProperty$2(IterablePrototype, 'name', VALUES);
    } else {
      INCORRECT_VALUES_NAME = true;
      defaultIterator = function values() { return call$5(nativeIterator, this); };
    }
  }

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine$2(IterablePrototype, KEY, methods[KEY]);
      }
    } else $$4({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  // define iterator
  if (IterablePrototype[ITERATOR$1] !== defaultIterator) {
    redefine$2(IterablePrototype, ITERATOR$1, defaultIterator, { name: DEFAULT });
  }
  Iterators$1[NAME] = defaultIterator;

  return methods;
};

var toIndexedObject = toIndexedObject$5;
var addToUnscopables$1 = addToUnscopables$2;
var Iterators = iterators;
var InternalStateModule = internalState;
var defineProperty = objectDefineProperty.f;
var defineIterator = defineIterator$1;
var DESCRIPTORS = descriptors;

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState$1 = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator
var es_array_iterator = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState$1(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
var values = Iterators.Arguments = Iterators.Array;

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables$1('keys');
addToUnscopables$1('values');
addToUnscopables$1('entries');

// V8 ~ Chrome 45- bug
if (DESCRIPTORS && values.name !== 'values') try {
  defineProperty(values, 'name', { value: 'values' });
} catch (error) { /* empty */ }

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
var domIterables = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};

// in old WebKit versions, `element.classList` is not an instance of global `DOMTokenList`
var documentCreateElement = documentCreateElement$2;

var classList = documentCreateElement('span').classList;
var DOMTokenListPrototype$1 = classList && classList.constructor && classList.constructor.prototype;

var domTokenListPrototype = DOMTokenListPrototype$1 === Object.prototype ? undefined : DOMTokenListPrototype$1;

var global$8 = global$y;
var DOMIterables = domIterables;
var DOMTokenListPrototype = domTokenListPrototype;
var ArrayIteratorMethods = es_array_iterator;
var createNonEnumerableProperty$1 = createNonEnumerableProperty$6;
var wellKnownSymbol$5 = wellKnownSymbol$d;

var ITERATOR = wellKnownSymbol$5('iterator');
var TO_STRING_TAG = wellKnownSymbol$5('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

var handlePrototype = function (CollectionPrototype, COLLECTION_NAME) {
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty$1(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG]) {
      createNonEnumerableProperty$1(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty$1(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
};

for (var COLLECTION_NAME in DOMIterables) {
  handlePrototype(global$8[COLLECTION_NAME] && global$8[COLLECTION_NAME].prototype, COLLECTION_NAME);
}

handlePrototype(DOMTokenListPrototype, 'DOMTokenList');

const CheckboxIcon = /*#__PURE__*/styled(Icon$1).withConfig({
  displayName: "MultiSelectstyles__CheckboxIcon",
  componentId: "sc-7enybs-0"
})(["margin-right:0.875rem;"]);

function MultiSelect({
  actions = [],
  ariaLabel,
  ariaLabelledBy,
  className,
  hasIndicator,
  id,
  isDisabled,
  items,
  onBlur,
  onChange,
  placeholder,
  selectedItems,
  variant = 'primary'
}) {
  const allItems = React.useMemo(() => [...actions, ...items], [actions, items]);
  const {
    getDropdownProps,
    setSelectedItems
  } = useMultipleSelection({
    selectedItems
  });
  React.useEffect(() => {
    setSelectedItems(selectedItems);
  }, [setSelectedItems, selectedItems]);
  const selectedItemsSet = React.useMemo(() => new Set(selectedItems), [selectedItems]);
  const handleChange = React.useCallback(selectedItem => {
    if (!onChange || (selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.onClick)) {
      return;
    }

    if (selectedItemsSet.has(selectedItem)) {
      selectedItemsSet.delete(selectedItem);
    } else {
      selectedItemsSet.add(selectedItem);
    }

    onChange(Array.from(selectedItemsSet), selectedItem);
  }, [onChange, selectedItemsSet]);
  const handleChangeRef = React.useRef(handleChange);
  React.useEffect(() => {
    handleChangeRef.current = handleChange;
  }, [handleChange]);
  const {
    isOpen,
    getToggleButtonProps,
    getMenuProps,
    highlightedIndex,
    getItemProps
  } = useSelect({
    selectedItem: null,
    id,
    items: allItems,
    stateReducer: (state, actionAndChanges) => {
      const {
        changes,
        type
      } = actionAndChanges;

      switch (type) {
        case useSelect.stateChangeTypes.MenuKeyDownEnter:
        case useSelect.stateChangeTypes.MenuKeyDownSpaceButton:
        case useSelect.stateChangeTypes.ItemClick:
          {
            return Object.assign(Object.assign({}, state), {
              selectedItem: changes.selectedItem,
              isOpen: true
            });
          }
      }

      return Object.assign(Object.assign({}, state), changes);
    },
    onStateChange: ({
      type,
      selectedItem
    }) => {
      switch (type) {
        case useSelect.stateChangeTypes.MenuKeyDownEnter:
        case useSelect.stateChangeTypes.MenuKeyDownSpaceButton:
        case useSelect.stateChangeTypes.ItemClick:
          {
            if (!selectedItem) {
              return;
            }

            if (selectedItem.onClick) {
              return selectedItem.onClick();
            }

            handleChangeRef.current(selectedItem);
            break;
          }
      }
    }
  });
  const buttonProps = Object.assign({}, getToggleButtonProps(getDropdownProps({
    disabled: isDisabled,
    preventKeyAction: isOpen
  })));
  return jsxs(Root$5, Object.assign({
    className: className,
    isOpen: isOpen,
    onBlur: e => {
      if (e.relatedTarget && e.relatedTarget === buttonProps.ref.current) {
        return;
      }

      onBlur === null || onBlur === void 0 ? void 0 : onBlur();
    },
    variant: variant
  }, {
    children: [jsxs(Button$1, Object.assign({}, buttonProps, {
      "aria-label": ariaLabel,
      "aria-labelledby": ariaLabelledBy
    }, {
      children: [placeholder, hasIndicator && jsx(DropdownIcon$3, {
        iconCode: "chevron-down"
      }, void 0)]
    }), void 0), jsx(Menu, Object.assign({}, getMenuProps(), {
      "aria-labelledby": buttonProps.id
    }, {
      children: isOpen && allItems.map((item, index) => {
        const isAction = item.onClick;
        return jsxs(React.Fragment, {
          children: [jsxs(MenuItem, Object.assign({}, getItemProps({
            item,
            index,
            disabled: item.isDisabled
          }), {
            alignment: item.alignment,
            hasSectionBreak: item.hasSectionBreak,
            isAction: isAction,
            isHighlighted: highlightedIndex === index,
            variant: variant,
            width: item.width
          }, {
            children: [!isAction && jsx(CheckboxIcon, {
              iconCode: selectedItemsSet.has(item) ? 'check-square' : 'square'
            }, void 0), item.display]
          }), void 0), item.hasSectionBreak && jsx(Divider, {}, void 0)]
        }, `${item.display}-${index}`);
      })
    }), void 0)]
  }), void 0);
}

const GridDropdown = /*#__PURE__*/styled(Dropdown).withConfig({
  displayName: "TableCellDropdownstyles__GridDropdown",
  componentId: "sc-7whhkg-0"
})(["background-color:transparent;height:100%;width:100%;display:flex;justify-content:center;border:0.03125rem solid ", ";&& button{color:", ";background-color:transparent;border:none;padding:0;font-family:IBM Plex Mono;font-size:0.75rem;font-weight:400;line-height:1rem;letter-spacing:0em;&:focus:enabled{box-shadow:none;}&:hover:enabled{color:", ";background-color:transparent;}}ul{z-index:999;display:flex;flex-direction:column;min-width:0;right:0;& li{text-align:center;}}", "{margin-left:0.25rem;}"], colors.greyLight, props => props.displayColor ? props.displayColor : colors.greyDark, colors.greyDark, DropdownIcon$3);

const TableCellDropdown = ({
  value,
  items,
  displayColor
}) => {
  return jsx(GridDropdown, {
    items: items,
    placeholder: value,
    variant: 'secondary',
    displayColor: displayColor
  }, void 0);
};

const LogoStyle = /*#__PURE__*/styled.img.withConfig({
  displayName: "Logostyles__LogoStyle",
  componentId: "sc-v0ex70-0"
})(["max-width:100%;max-height:100%;height:auto;width:auto;"]);

const Logo = ({
  imageSource
}) => {
  return jsx(LogoStyle, {
    alt: "logo image",
    title: "logo",
    src: imageSource
  }, void 0);
};

var isObject = isObject$6;
var classof$2 = classofRaw$1;
var wellKnownSymbol$4 = wellKnownSymbol$d;

var MATCH$1 = wellKnownSymbol$4('match');

// `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp
var isRegexp = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH$1]) !== undefined ? !!isRegExp : classof$2(it) == 'RegExp');
};

var global$7 = global$y;
var isRegExp$1 = isRegexp;

var TypeError$3 = global$7.TypeError;

var notARegexp = function (it) {
  if (isRegExp$1(it)) {
    throw TypeError$3("The method doesn't accept regular expressions");
  } return it;
};

var wellKnownSymbol$3 = wellKnownSymbol$d;

var MATCH = wellKnownSymbol$3('match');

var correctIsRegexpLogic = function (METHOD_NAME) {
  var regexp = /./;
  try {
    '/./'[METHOD_NAME](regexp);
  } catch (error1) {
    try {
      regexp[MATCH] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (error2) { /* empty */ }
  } return false;
};

var $$3 = _export;
var uncurryThis$9 = functionUncurryThis;
var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
var toLength$2 = toLength$4;
var toString$5 = toString$7;
var notARegExp$1 = notARegexp;
var requireObjectCoercible$4 = requireObjectCoercible$7;
var correctIsRegExpLogic$1 = correctIsRegexpLogic;

// eslint-disable-next-line es/no-string-prototype-startswith -- safe
var un$StartsWith = uncurryThis$9(''.startsWith);
var stringSlice$5 = uncurryThis$9(''.slice);
var min$2 = Math.min;

var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic$1('startsWith');
// https://github.com/zloirock/core-js/pull/702
var MDN_POLYFILL_BUG = !CORRECT_IS_REGEXP_LOGIC && !!function () {
  var descriptor = getOwnPropertyDescriptor(String.prototype, 'startsWith');
  return descriptor && !descriptor.writable;
}();

// `String.prototype.startsWith` method
// https://tc39.es/ecma262/#sec-string.prototype.startswith
$$3({ target: 'String', proto: true, forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC }, {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = toString$5(requireObjectCoercible$4(this));
    notARegExp$1(searchString);
    var index = toLength$2(min$2(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = toString$5(searchString);
    return un$StartsWith
      ? un$StartsWith(that, search, index)
      : stringSlice$5(that, index, index + search.length) === search;
  }
});

var $$2 = _export;
var $includes = arrayIncludes.includes;
var addToUnscopables = addToUnscopables$2;

// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
$$2({ target: 'Array', proto: true }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');

var $$1 = _export;
var uncurryThis$8 = functionUncurryThis;
var notARegExp = notARegexp;
var requireObjectCoercible$3 = requireObjectCoercible$7;
var toString$4 = toString$7;
var correctIsRegExpLogic = correctIsRegexpLogic;

var stringIndexOf$1 = uncurryThis$8(''.indexOf);

// `String.prototype.includes` method
// https://tc39.es/ecma262/#sec-string.prototype.includes
$$1({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~stringIndexOf$1(
      toString$4(requireObjectCoercible$3(this)),
      toString$4(notARegExp(searchString)),
      arguments.length > 1 ? arguments[1] : undefined
    );
  }
});

var anObject$5 = anObject$b;

// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
var regexpFlags$1 = function () {
  var that = anObject$5(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};

var fails$7 = fails$i;
var global$6 = global$y;

// babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
var $RegExp$2 = global$6.RegExp;

var UNSUPPORTED_Y$2 = fails$7(function () {
  var re = $RegExp$2('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

// UC Browser bug
// https://github.com/zloirock/core-js/issues/1008
var MISSED_STICKY = UNSUPPORTED_Y$2 || fails$7(function () {
  return !$RegExp$2('a', 'y').sticky;
});

var BROKEN_CARET = UNSUPPORTED_Y$2 || fails$7(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = $RegExp$2('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});

var regexpStickyHelpers = {
  BROKEN_CARET: BROKEN_CARET,
  MISSED_STICKY: MISSED_STICKY,
  UNSUPPORTED_Y: UNSUPPORTED_Y$2
};

var fails$6 = fails$i;
var global$5 = global$y;

// babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
var $RegExp$1 = global$5.RegExp;

var regexpUnsupportedDotAll = fails$6(function () {
  var re = $RegExp$1('.', 's');
  return !(re.dotAll && re.exec('\n') && re.flags === 's');
});

var fails$5 = fails$i;
var global$4 = global$y;

// babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError
var $RegExp = global$4.RegExp;

var regexpUnsupportedNcg = fails$5(function () {
  var re = $RegExp('(?<a>b)', 'g');
  return re.exec('b').groups.a !== 'b' ||
    'b'.replace(re, '$<a>c') !== 'bc';
});

/* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
/* eslint-disable regexp/no-useless-quantifier -- testing */
var call$4 = functionCall;
var uncurryThis$7 = functionUncurryThis;
var toString$3 = toString$7;
var regexpFlags = regexpFlags$1;
var stickyHelpers$1 = regexpStickyHelpers;
var shared = shared$4.exports;
var create = objectCreate;
var getInternalState = internalState.get;
var UNSUPPORTED_DOT_ALL = regexpUnsupportedDotAll;
var UNSUPPORTED_NCG = regexpUnsupportedNcg;

var nativeReplace = shared('native-string-replace', String.prototype.replace);
var nativeExec = RegExp.prototype.exec;
var patchedExec = nativeExec;
var charAt$3 = uncurryThis$7(''.charAt);
var indexOf = uncurryThis$7(''.indexOf);
var replace$1 = uncurryThis$7(''.replace);
var stringSlice$4 = uncurryThis$7(''.slice);

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  call$4(nativeExec, re1, 'a');
  call$4(nativeExec, re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y$1 = stickyHelpers$1.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y$1 || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG;

if (PATCH) {
  patchedExec = function exec(string) {
    var re = this;
    var state = getInternalState(re);
    var str = toString$3(string);
    var raw = state.raw;
    var result, reCopy, lastIndex, match, i, object, group;

    if (raw) {
      raw.lastIndex = re.lastIndex;
      result = call$4(patchedExec, raw, str);
      re.lastIndex = raw.lastIndex;
      return result;
    }

    var groups = state.groups;
    var sticky = UNSUPPORTED_Y$1 && re.sticky;
    var flags = call$4(regexpFlags, re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = replace$1(flags, 'y', '');
      if (indexOf(flags, 'g') === -1) {
        flags += 'g';
      }

      strCopy = stringSlice$4(str, re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && charAt$3(str, re.lastIndex - 1) !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = call$4(nativeExec, sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = stringSlice$4(match.input, charsAdded);
        match[0] = stringSlice$4(match[0], charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      call$4(nativeReplace, match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    if (match && groups) {
      match.groups = object = create(null);
      for (i = 0; i < groups.length; i++) {
        group = groups[i];
        object[group[0]] = match[group[1]];
      }
    }

    return match;
  };
}

var regexpExec$3 = patchedExec;

var $ = _export;
var exec$2 = regexpExec$3;

// `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec
$({ target: 'RegExp', proto: true, forced: /./.exec !== exec$2 }, {
  exec: exec$2
});

var NATIVE_BIND = functionBindNative;

var FunctionPrototype = Function.prototype;
var apply$2 = FunctionPrototype.apply;
var call$3 = FunctionPrototype.call;

// eslint-disable-next-line es/no-reflect -- safe
var functionApply = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND ? call$3.bind(apply$2) : function () {
  return call$3.apply(apply$2, arguments);
});

// TODO: Remove from `core-js@4` since it's moved to entry points

var uncurryThis$6 = functionUncurryThis;
var redefine$1 = redefine$5.exports;
var regexpExec$2 = regexpExec$3;
var fails$4 = fails$i;
var wellKnownSymbol$2 = wellKnownSymbol$d;
var createNonEnumerableProperty = createNonEnumerableProperty$6;

var SPECIES$1 = wellKnownSymbol$2('species');
var RegExpPrototype$1 = RegExp.prototype;

var fixRegexpWellKnownSymbolLogic = function (KEY, exec, FORCED, SHAM) {
  var SYMBOL = wellKnownSymbol$2(KEY);

  var DELEGATES_TO_SYMBOL = !fails$4(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails$4(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES$1] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    FORCED
  ) {
    var uncurriedNativeRegExpMethod = uncurryThis$6(/./[SYMBOL]);
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      var uncurriedNativeMethod = uncurryThis$6(nativeMethod);
      var $exec = regexp.exec;
      if ($exec === regexpExec$2 || $exec === RegExpPrototype$1.exec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: uncurriedNativeRegExpMethod(regexp, str, arg2) };
        }
        return { done: true, value: uncurriedNativeMethod(str, regexp, arg2) };
      }
      return { done: false };
    });

    redefine$1(String.prototype, KEY, methods[0]);
    redefine$1(RegExpPrototype$1, SYMBOL, methods[1]);
  }

  if (SHAM) createNonEnumerableProperty(RegExpPrototype$1[SYMBOL], 'sham', true);
};

var uncurryThis$5 = functionUncurryThis;
var fails$3 = fails$i;
var isCallable$2 = isCallable$i;
var classof$1 = classof$4;
var getBuiltIn = getBuiltIn$5;
var inspectSource = inspectSource$3;

var noop = function () { /* empty */ };
var empty = [];
var construct = getBuiltIn('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec$1 = uncurryThis$5(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);

var isConstructorModern = function isConstructor(argument) {
  if (!isCallable$2(argument)) return false;
  try {
    construct(noop, empty, argument);
    return true;
  } catch (error) {
    return false;
  }
};

var isConstructorLegacy = function isConstructor(argument) {
  if (!isCallable$2(argument)) return false;
  switch (classof$1(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction': return false;
  }
  try {
    // we can't check .prototype since constructors produced by .bind haven't it
    // `Function#toString` throws on some built-it function in some legacy engines
    // (for example, `DOMQuad` and similar in FF41-)
    return INCORRECT_TO_STRING || !!exec$1(constructorRegExp, inspectSource(argument));
  } catch (error) {
    return true;
  }
};

isConstructorLegacy.sham = true;

// `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor
var isConstructor$1 = !construct || fails$3(function () {
  var called;
  return isConstructorModern(isConstructorModern.call)
    || !isConstructorModern(Object)
    || !isConstructorModern(function () { called = true; })
    || called;
}) ? isConstructorLegacy : isConstructorModern;

var global$3 = global$y;
var isConstructor = isConstructor$1;
var tryToString = tryToString$2;

var TypeError$2 = global$3.TypeError;

// `Assert: IsConstructor(argument) is true`
var aConstructor$1 = function (argument) {
  if (isConstructor(argument)) return argument;
  throw TypeError$2(tryToString(argument) + ' is not a constructor');
};

var anObject$4 = anObject$b;
var aConstructor = aConstructor$1;
var wellKnownSymbol$1 = wellKnownSymbol$d;

var SPECIES = wellKnownSymbol$1('species');

// `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor
var speciesConstructor$1 = function (O, defaultConstructor) {
  var C = anObject$4(O).constructor;
  var S;
  return C === undefined || (S = anObject$4(C)[SPECIES]) == undefined ? defaultConstructor : aConstructor(S);
};

var uncurryThis$4 = functionUncurryThis;
var toIntegerOrInfinity$1 = toIntegerOrInfinity$4;
var toString$2 = toString$7;
var requireObjectCoercible$2 = requireObjectCoercible$7;

var charAt$2 = uncurryThis$4(''.charAt);
var charCodeAt = uncurryThis$4(''.charCodeAt);
var stringSlice$3 = uncurryThis$4(''.slice);

var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = toString$2(requireObjectCoercible$2($this));
    var position = toIntegerOrInfinity$1(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = charCodeAt(S, position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = charCodeAt(S, position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING
          ? charAt$2(S, position)
          : first
        : CONVERT_TO_STRING
          ? stringSlice$3(S, position, position + 2)
          : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

var stringMultibyte = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};

var charAt$1 = stringMultibyte.charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex
var advanceStringIndex$2 = function (S, index, unicode) {
  return index + (unicode ? charAt$1(S, index).length : 1);
};

var toPropertyKey = toPropertyKey$3;
var definePropertyModule = objectDefineProperty;
var createPropertyDescriptor = createPropertyDescriptor$4;

var createProperty$1 = function (object, key, value) {
  var propertyKey = toPropertyKey(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};

var global$2 = global$y;
var toAbsoluteIndex = toAbsoluteIndex$2;
var lengthOfArrayLike = lengthOfArrayLike$2;
var createProperty = createProperty$1;

var Array$1 = global$2.Array;
var max$1 = Math.max;

var arraySliceSimple = function (O, start, end) {
  var length = lengthOfArrayLike(O);
  var k = toAbsoluteIndex(start, length);
  var fin = toAbsoluteIndex(end === undefined ? length : end, length);
  var result = Array$1(max$1(fin - k, 0));
  for (var n = 0; k < fin; k++, n++) createProperty(result, n, O[k]);
  result.length = n;
  return result;
};

var global$1 = global$y;
var call$2 = functionCall;
var anObject$3 = anObject$b;
var isCallable$1 = isCallable$i;
var classof = classofRaw$1;
var regexpExec$1 = regexpExec$3;

var TypeError$1 = global$1.TypeError;

// `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec
var regexpExecAbstract = function (R, S) {
  var exec = R.exec;
  if (isCallable$1(exec)) {
    var result = call$2(exec, R, S);
    if (result !== null) anObject$3(result);
    return result;
  }
  if (classof(R) === 'RegExp') return call$2(regexpExec$1, R, S);
  throw TypeError$1('RegExp#exec called on incompatible receiver');
};

var apply$1 = functionApply;
var call$1 = functionCall;
var uncurryThis$3 = functionUncurryThis;
var fixRegExpWellKnownSymbolLogic$1 = fixRegexpWellKnownSymbolLogic;
var isRegExp = isRegexp;
var anObject$2 = anObject$b;
var requireObjectCoercible$1 = requireObjectCoercible$7;
var speciesConstructor = speciesConstructor$1;
var advanceStringIndex$1 = advanceStringIndex$2;
var toLength$1 = toLength$4;
var toString$1 = toString$7;
var getMethod$1 = getMethod$3;
var arraySlice = arraySliceSimple;
var callRegExpExec = regexpExecAbstract;
var regexpExec = regexpExec$3;
var stickyHelpers = regexpStickyHelpers;
var fails$2 = fails$i;

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;
var MAX_UINT32 = 0xFFFFFFFF;
var min$1 = Math.min;
var $push = [].push;
var exec = uncurryThis$3(/./.exec);
var push$1 = uncurryThis$3($push);
var stringSlice$2 = uncurryThis$3(''.slice);

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails$2(function () {
  // eslint-disable-next-line regexp/no-empty-group -- required for testing
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

// @@split logic
fixRegExpWellKnownSymbolLogic$1('split', function (SPLIT, nativeSplit, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'.split(/(b)*/)[1] == 'c' ||
    // eslint-disable-next-line regexp/no-empty-group -- required for testing
    'test'.split(/(?:)/, -1).length != 4 ||
    'ab'.split(/(?:ab)*/).length != 2 ||
    '.'.split(/(.?)(.?)/).length != 4 ||
    // eslint-disable-next-line regexp/no-empty-capturing-group, regexp/no-empty-group -- required for testing
    '.'.split(/()()/).length > 1 ||
    ''.split(/.?/).length
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = toString$1(requireObjectCoercible$1(this));
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (separator === undefined) return [string];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) {
        return call$1(nativeSplit, string, separator, lim);
      }
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = call$1(regexpExec, separatorCopy, string)) {
        lastIndex = separatorCopy.lastIndex;
        if (lastIndex > lastLastIndex) {
          push$1(output, stringSlice$2(string, lastLastIndex, match.index));
          if (match.length > 1 && match.index < string.length) apply$1($push, output, arraySlice(match, 1));
          lastLength = match[0].length;
          lastLastIndex = lastIndex;
          if (output.length >= lim) break;
        }
        if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
      }
      if (lastLastIndex === string.length) {
        if (lastLength || !exec(separatorCopy, '')) push$1(output, '');
      } else push$1(output, stringSlice$2(string, lastLastIndex));
      return output.length > lim ? arraySlice(output, 0, lim) : output;
    };
  // Chakra, V8
  } else if ('0'.split(undefined, 0).length) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : call$1(nativeSplit, this, separator, limit);
    };
  } else internalSplit = nativeSplit;

  return [
    // `String.prototype.split` method
    // https://tc39.es/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = requireObjectCoercible$1(this);
      var splitter = separator == undefined ? undefined : getMethod$1(separator, SPLIT);
      return splitter
        ? call$1(splitter, separator, O, limit)
        : call$1(internalSplit, toString$1(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (string, limit) {
      var rx = anObject$2(this);
      var S = toString$1(string);
      var res = maybeCallNative(internalSplit, rx, S, limit, internalSplit !== nativeSplit);

      if (res.done) return res.value;

      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (UNSUPPORTED_Y ? 'g' : 'y');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(UNSUPPORTED_Y ? '^(?:' + rx.source + ')' : rx, flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = UNSUPPORTED_Y ? 0 : q;
        var z = callRegExpExec(splitter, UNSUPPORTED_Y ? stringSlice$2(S, q) : S);
        var e;
        if (
          z === null ||
          (e = min$1(toLength$1(splitter.lastIndex + (UNSUPPORTED_Y ? q : 0)), S.length)) === p
        ) {
          q = advanceStringIndex$1(S, q, unicodeMatching);
        } else {
          push$1(A, stringSlice$2(S, p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            push$1(A, z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      push$1(A, stringSlice$2(S, p));
      return A;
    }
  ];
}, !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC, UNSUPPORTED_Y);

const VARIANT_MAP$b = {
  primary: {
    topNavBackground: colors.blue,
    topNavBorder: colors.blue,
    accountIconMainColor: colors.white,
    dropdownIcon: colors.blue,
    accountIconActiveColor: '#007dc2',
    textColor: colors.blue,
    activeHighlightColor: '#007dc2',
    tabHoverColor: '#02629D'
  },
  secondary: {
    topNavBackground: colors.white,
    topNavBorder: '#c4cdd1',
    accountIconMainColor: '#2f3336',
    dropdownIcon: '#2f3336',
    accountIconActiveColor: ' #a9b3b8',
    textColor: '#2f3336',
    activeHighlightColor: '#a9b3b8',
    tabHoverColor: '#858F93'
  }
};
const NavTabWrapper = /*#__PURE__*/styled.div.withConfig({
  displayName: "NavTabButtonstyles__NavTabWrapper",
  componentId: "sc-lz5jvo-0"
})(["padding:14px 51px 0 0;"]);
const NavButton = /*#__PURE__*/styled.button.withConfig({
  displayName: "NavTabButtonstyles__NavButton",
  componentId: "sc-lz5jvo-1"
})(["all:unset;cursor:pointer;font-size:16px;font-weight:", ";font-family:'IBM Plex Sans';color:", ";padding-bottom:9px;:hover{color:", ";}border-bottom:", ";"], props => props.isActive ? 'bold' : ' 500', props => VARIANT_MAP$b[`${props.variantType}`].textColor, props => VARIANT_MAP$b[`${props.variantType}`].tabHoverColor, props => props.isActive ? ` 5px solid ${VARIANT_MAP$b[`${props.variantType}`].activeHighlightColor}` : null);

const NavTabButton = ({
  tab,
  variantType,
  activeTab,
  setActiveTab,
  handleNavigate,
  setParentActiveTab
}) => {
  const {
    title
  } = tab;

  const NavTabButtonClick = () => {
    setActiveTab(title);
    handleNavigate(tab);
    setParentActiveTab(undefined);
  };

  return jsx(NavTabWrapper, {
    children: jsx(NavButton, Object.assign({
      onClick: NavTabButtonClick,
      variantType: variantType,
      isActive: activeTab === title
    }, {
      children: title
    }), void 0)
  }, void 0);
};

const NavTabBarWrapper = /*#__PURE__*/styled.nav.withConfig({
  displayName: "NavTabBarstyles__NavTabBarWrapper",
  componentId: "sc-pkuekk-0"
})(["display:flex;justify-content:space-between;flex-wrap:nowrap;box-shadow:0 1px 1px 0 rgba(47,51,54,0.1);align-items:center;max-height:48px;background-color:", ";margin-top:1px;"], colors.white);
const NavTabBarContainer = /*#__PURE__*/styled.div.withConfig({
  displayName: "NavTabBarstyles__NavTabBarContainer",
  componentId: "sc-pkuekk-1"
})(["display:flex;flex-direction:row;margin-left:24px;"]);

const VARIANT_MAP$a = {
  primary: {
    topNavBackground: colors.blue,
    topNavBorder: colors.blue,
    accountIconMainColor: colors.white,
    dropdownIcon: colors.blue,
    accountIconActiveColor: '#007dc2',
    textColor: colors.blue,
    activeHighlightColor: '#007dc2',
    tabHoverColor: '#02629D'
  },
  secondary: {
    topNavBackground: colors.white,
    topNavBorder: '#c4cdd1',
    accountIconMainColor: '#2f3336',
    dropdownIcon: '#2f3336',
    accountIconActiveColor: ' #a9b3b8',
    textColor: '#2f3336',
    activeHighlightColor: '#a9b3b8',
    tabHoverColor: '#858F93'
  }
};
const DropdownWrapper$1 = /*#__PURE__*/styled.div.withConfig({
  displayName: "DropdownNavTabstyles__DropdownWrapper",
  componentId: "sc-37xepo-0"
})(["position:absolute;z-index:2;background-color:#fff;margin-top:-5px;max-height:260px;border-radius:8px;box-shadow:0 1px 4px 0 rgba(47,51,54,0.56);overflow:scroll;scrollbar-width:none;::-webkit-scrollbar{display:none;}"]);
const DropdownMenu$1 = /*#__PURE__*/styled.ul.withConfig({
  displayName: "DropdownNavTabstyles__DropdownMenu",
  componentId: "sc-37xepo-1"
})(["display:flex;flex-direction:column;gap:25px;padding:19px 22px 19px 16px;"]);
const DropdownIcon$2 = /*#__PURE__*/styled(Icon$1).withConfig({
  displayName: "DropdownNavTabstyles__DropdownIcon",
  componentId: "sc-37xepo-2"
})(["margin-left:8px;font-size:14px;font-weight:bold;color:", ";"], props => VARIANT_MAP$a[`${props.variantType}`].dropdownIcon);
const DropdownButtonWrapper = /*#__PURE__*/styled.div.withConfig({
  displayName: "DropdownNavTabstyles__DropdownButtonWrapper",
  componentId: "sc-37xepo-3"
})(["padding:14px 51px 0 0;white-space:nowrap;"]);
const DropdownButton = /*#__PURE__*/styled.button.withConfig({
  displayName: "DropdownNavTabstyles__DropdownButton",
  componentId: "sc-37xepo-4"
})(["all:unset;font-size:16px;font-weight:500;font-family:'IBM Plex Sans';color:", ";padding-bottom:9px;cursor:pointer;:hover{color:", ";}border-bottom:", ";"], props => VARIANT_MAP$a[`${props.variantType}`].textColor, props => VARIANT_MAP$a[`${props.variantType}`].tabHoverColor, props => props.isActive ? `5px solid ${VARIANT_MAP$a[`${props.variantType}`].activeHighlightColor}` : null);
const DropdownListButton$1 = /*#__PURE__*/styled.button.withConfig({
  displayName: "DropdownNavTabstyles__DropdownListButton",
  componentId: "sc-37xepo-5"
})(["all:unset;font-size:14px;font-weight:500;font-family:'IBM Plex Sans';color:", ";padding-bottom:0;cursor:pointer;:hover{color:", ";}border-bottom:", ";"], props => VARIANT_MAP$a[`${props.variantType}`].textColor, props => VARIANT_MAP$a[`${props.variantType}`].tabHoverColor, props => props.isActive ? ` 3px solid ${VARIANT_MAP$a[`${props.variantType}`].activeHighlightColor}` : null);

const DropdownNavTab = ({
  tab,
  activeTab,
  setActiveTab,
  handleNavigate,
  variantType,
  parentActiveTab,
  setParentActiveTab
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const {
    title,
    children
  } = tab;
  const {
    getToggleButtonProps,
    getMenuProps,
    getItemProps
  } = useSelect({
    items: children
  });
  const buttonProps = Object.assign({}, getToggleButtonProps());
  const menuProps = Object.assign({}, getMenuProps({}, {
    suppressRefError: true
  }));

  const dropdownButtonClick = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const listItemClick = item => {
    const skipTabUpdate = handleNavigate(item);
    setDropdownOpen(false);

    if (skipTabUpdate) {
      return;
    }

    setActiveTab(item.title);
    setParentActiveTab(title);
  };

  return jsx("div", {
    children: jsxs(OutsideClickHandler, Object.assign({
      onOutsideClick: () => {
        setDropdownOpen(false);
      }
    }, {
      children: [jsx(DropdownButtonWrapper, {
        children: jsxs(DropdownButton, Object.assign({}, buttonProps, {
          isActive: activeTab === title || parentActiveTab === title,
          variantType: variantType,
          onClick: dropdownButtonClick
        }, {
          children: [title, jsx(DropdownIcon$2, {
            iconCode: dropdownOpen ? 'angle-up' : 'angle-down',
            prefix: "far",
            variantType: variantType
          }, void 0)]
        }), void 0)
      }, void 0), dropdownOpen ? jsx(DropdownWrapper$1, {
        children: jsx(DropdownMenu$1, Object.assign({}, menuProps, {
          "aria-labelledby": buttonProps.id,
          role: "menu"
        }, {
          children: dropdownOpen && children.map((item, index) => {
            const itemProps = getItemProps({
              item,
              index
            });
            return /*#__PURE__*/createElement$1(DropdownListButton$1, Object.assign({}, itemProps, {
              key: `${item}${index}`,
              "aria-label": item.title,
              "aria-selected": undefined,
              isActive: activeTab === item.title,
              variantType: variantType,
              onClick: () => listItemClick(item),
              role: "menuitem"
            }), item.title);
          })
        }), void 0)
      }, void 0) : null]
    }), void 0)
  }, void 0);
};

var img$3 = "data:image/svg+xml,%3csvg width='189' height='48' viewBox='0 0 189 48' xmlns='http://www.w3.org/2000/svg'%3e %3cg fill='%2300263E' fill-rule='evenodd'%3e %3cpath d='M181.086 35.961H189l-12.851-23.89h-8.23l-12.852 23.89h.854c4.305-.095 7.85-1.681 9.623-4.695l6.458-11.74 9.084 16.435zm-46.816-9.898 7.407-11.55c1.107-1.65 2.754-2.474 4.938-2.474h6.584v23.89h-7.407V20.257l-9.876 15.674h-3.292l-9.877-15.642v15.673h-7.407v-23.89h6.584c2.184 0 3.83.824 4.938 2.474l7.408 11.518zM88.656 14.768v12.944c0 1.65 1.108 2.475 3.292 2.475h7.913c2.184 0 3.292-.825 3.292-2.475V12.04h7.408V29.33c0 4.41-2.47 6.6-7.408 6.6H88.656c-4.938 0-7.407-2.19-7.407-6.6V12.04c7.407 0 7.407 2.729 7.407 2.729zM79.697 35.96H57.793c-3.293 0-4.939-1.65-4.939-4.95v-18.94h7.408v18.116h13.294c5.667 0 6.141 5.774 6.141 5.774zM20.428 36.026l4.19 4.198a2.539 2.539 0 0 1 0 3.577L20.427 48l-4.189-4.199a2.538 2.538 0 0 1 0-3.577l4.189-4.198zm-11.947-24 4.19 4.199a2.538 2.538 0 0 1 0 3.576L8.48 24l4.19 4.198a2.523 2.523 0 0 0 3.568 0l4.163-4.172-4.163-4.173a2.538 2.538 0 0 1 0-3.577l4.19-4.198 4.188 4.198a2.525 2.525 0 0 0 3.569 0l4.189-4.198.065.065.406.408.087.086.297.298.112.112.505.507.286.286.306.307.16.161.336.336c.229.23.47.47.72.723l.385.385.81.81.638.64.886.889c3.31 3.213 3.31 8.604 0 11.922l-6 6.013-4.188-4.199a2.539 2.539 0 0 1 0-3.577l4.189-4.198-4.19-4.2a2.525 2.525 0 0 0-3.568 0l-4.163 4.174 4.163 4.172a2.539 2.539 0 0 1 0 3.577l-4.189 4.199-4.19-4.199a2.524 2.524 0 0 0-3.567 0l-4.19 4.199-.065-.065-.254-.256-.239-.238-.297-.299-.112-.112-.505-.506-.286-.286-.306-.307-.16-.161-.335-.336-.175-.174-.36-.362-.187-.187-.384-.385-1.02-1.022-.428-.43-.886-.887c-3.31-3.266-3.31-8.657 0-11.922l6-6.013zm16.136-7.827a2.539 2.539 0 0 1 0 3.576l-4.189 4.199-4.19-4.199a2.539 2.539 0 0 1 0-3.576l4.19-4.2 4.189 4.2z'/%3e %3c/g%3e%3c/svg%3e";

const PoweredLogoWrapper = /*#__PURE__*/styled.div.withConfig({
  displayName: "PoweredByLumaLogostyles__PoweredLogoWrapper",
  componentId: "sc-19ad4eu-0"
})(["display:flex;flex-direction:row;justify-content:space-between;align-items:center;max-width:", ";max-height:24px;margin-right:24px;"], props => props.isMobile ? '133px' : '160px');
const PoweredText = /*#__PURE__*/styled.p.withConfig({
  displayName: "PoweredByLumaLogostyles__PoweredText",
  componentId: "sc-19ad4eu-1"
})(["font-size:", ";font-family:IBMPlexSans;font-weight:500;color:", ";margin-right:6px;"], props => props.isMobile ? '9px' : '11px', colors.blue);
const LogoContainer$4 = /*#__PURE__*/styled.div.withConfig({
  displayName: "PoweredByLumaLogostyles__LogoContainer",
  componentId: "sc-19ad4eu-2"
})(["width:", ";height:", ";overflow:auto;display:flex;flex:1 1 0%;"], props => props.width ? props.width : '9rem', props => props.height ? props.height : '2rem');

const PoweredByLumaLogo = ({
  isMobile
}) => {
  return jsxs(PoweredLogoWrapper, Object.assign({
    isMobile: isMobile
  }, {
    children: [jsx(PoweredText, Object.assign({
      isMobile: isMobile
    }, {
      children: "Powered by"
    }), void 0), jsx(LogoContainer$4, Object.assign({
      width: '88px',
      height: '24px'
    }, {
      children: jsx(Logo, {
        imageSource: img$3
      }, void 0)
    }), void 0)]
  }), void 0);
};

var uncurryThis$2 = functionUncurryThis;
var toObject = toObject$4;

var floor = Math.floor;
var charAt = uncurryThis$2(''.charAt);
var replace = uncurryThis$2(''.replace);
var stringSlice$1 = uncurryThis$2(''.slice);
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g;

// `GetSubstitution` abstract operation
// https://tc39.es/ecma262/#sec-getsubstitution
var getSubstitution$1 = function (matched, str, position, captures, namedCaptures, replacement) {
  var tailPos = position + matched.length;
  var m = captures.length;
  var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
  if (namedCaptures !== undefined) {
    namedCaptures = toObject(namedCaptures);
    symbols = SUBSTITUTION_SYMBOLS;
  }
  return replace(replacement, symbols, function (match, ch) {
    var capture;
    switch (charAt(ch, 0)) {
      case '$': return '$';
      case '&': return matched;
      case '`': return stringSlice$1(str, 0, position);
      case "'": return stringSlice$1(str, tailPos);
      case '<':
        capture = namedCaptures[stringSlice$1(ch, 1, -1)];
        break;
      default: // \d\d?
        var n = +ch;
        if (n === 0) return match;
        if (n > m) {
          var f = floor(n / 10);
          if (f === 0) return match;
          if (f <= m) return captures[f - 1] === undefined ? charAt(ch, 1) : captures[f - 1] + charAt(ch, 1);
          return match;
        }
        capture = captures[n - 1];
    }
    return capture === undefined ? '' : capture;
  });
};

var apply = functionApply;
var call = functionCall;
var uncurryThis$1 = functionUncurryThis;
var fixRegExpWellKnownSymbolLogic = fixRegexpWellKnownSymbolLogic;
var fails$1 = fails$i;
var anObject$1 = anObject$b;
var isCallable = isCallable$i;
var toIntegerOrInfinity = toIntegerOrInfinity$4;
var toLength = toLength$4;
var toString = toString$7;
var requireObjectCoercible = requireObjectCoercible$7;
var advanceStringIndex = advanceStringIndex$2;
var getMethod = getMethod$3;
var getSubstitution = getSubstitution$1;
var regExpExec = regexpExecAbstract;
var wellKnownSymbol = wellKnownSymbol$d;

var REPLACE = wellKnownSymbol('replace');
var max = Math.max;
var min = Math.min;
var concat = uncurryThis$1([].concat);
var push = uncurryThis$1([].push);
var stringIndexOf = uncurryThis$1(''.indexOf);
var stringSlice = uncurryThis$1(''.slice);

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  // eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing
  return 'a'.replace(/./, '$0') === '$0';
})();

// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails$1(function () {
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  // eslint-disable-next-line regexp/no-useless-dollar-replacements -- false positive
  return ''.replace(re, '$<a>') !== '7';
});

// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', function (_, nativeReplace, maybeCallNative) {
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

  return [
    // `String.prototype.replace` method
    // https://tc39.es/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = searchValue == undefined ? undefined : getMethod(searchValue, REPLACE);
      return replacer
        ? call(replacer, searchValue, O, replaceValue)
        : call(nativeReplace, toString(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
    function (string, replaceValue) {
      var rx = anObject$1(this);
      var S = toString(string);

      if (
        typeof replaceValue == 'string' &&
        stringIndexOf(replaceValue, UNSAFE_SUBSTITUTE) === -1 &&
        stringIndexOf(replaceValue, '$<') === -1
      ) {
        var res = maybeCallNative(nativeReplace, rx, S, replaceValue);
        if (res.done) return res.value;
      }

      var functionalReplace = isCallable(replaceValue);
      if (!functionalReplace) replaceValue = toString(replaceValue);

      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;

        push(results, result);
        if (!global) break;

        var matchStr = toString(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = toString(result[0]);
        var position = max(min(toIntegerOrInfinity(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) push(captures, maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = concat([matched], captures, position, S);
          if (namedCaptures !== undefined) push(replacerArgs, namedCaptures);
          var replacement = toString(apply(replaceValue, undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += stringSlice(S, nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + stringSlice(S, nextSourcePosition);
    }
  ];
}, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);

var FrontEndLibraries;

(function (FrontEndLibraries) {
  FrontEndLibraries["REACT"] = "REACT";
  FrontEndLibraries["ANGULAR"] = "ANGULAR";
})(FrontEndLibraries || (FrontEndLibraries = {}));

var ENV;

(function (ENV) {
  ENV["PROD"] = "PROD";
  ENV["STAGING"] = "STAGING";
  ENV["UAT"] = "UAT";
  ENV["QA"] = "QA";
  ENV["DEV"] = "DEV";
  ENV["LOCAL"] = "LOCAL";
})(ENV || (ENV = {}));

var ROUTE_KEYS;

(function (ROUTE_KEYS) {
  ROUTE_KEYS["HOME"] = "HOME";
  ROUTE_KEYS["LEARN"] = "LEARN";
  ROUTE_KEYS["ORDERS"] = "ORDERS";
  ROUTE_KEYS["ACCOUNT_UPLOAD"] = "ACCOUNT_UPLOAD";
  ROUTE_KEYS["WHOLESALER_MAPPING"] = "WHOLESALER_MAPPING";
  ROUTE_KEYS["LIFECYCLE"] = "LIFECYCLE";
  ROUTE_KEYS["TRADE"] = "TRADE";
  ROUTE_KEYS["COMPANY_ADMIN"] = "Company Administration";
  ROUTE_KEYS["COMPANY_RELATIONSHIP"] = "COMPANY_RELATIONSHIP";
  ROUTE_KEYS["COMPANY_CONFIG"] = "COMPANY_CONFIG";
  ROUTE_KEYS["HISTORICAL_EMAILS"] = "HISTORICAL_EMAILS";
  ROUTE_KEYS["FILE_UPLOAD"] = "FILE_UPLOAD";
  ROUTE_KEYS["AUDIT_RECORDS"] = "AUDIT_RECORDS";
  ROUTE_KEYS["WHOLESALER_DEFINITION"] = "WHOLESALER_DEFINITION";
  ROUTE_KEYS["ADMIN_WHOLESALER_MAPPING"] = "ADMIN_WHOLESALER_MAPPING";
  ROUTE_KEYS["PRODUCT_UPLOAD"] = "PRODUCT_UPLOAD";
  ROUTE_KEYS["DISCLOSURE_DOC_UPLOAD"] = "DISCLOSURE_DOC_UPLOAD";
  ROUTE_KEYS["MARKET_DATA_MAINTENANCE"] = "MARKET_DATA_MAINTENANCE";
  ROUTE_KEYS["ISSUER_CONFIRMATION"] = "ISSUER_CONFIRMATION";
  ROUTE_KEYS["EMAIL_CONFIG"] = "EMAIL_CONFIG";
  ROUTE_KEYS["FIND_RFQ"] = "FIND_RFQ";
  ROUTE_KEYS["PRODUCT_MAINTENANCE"] = "PRODUCT_MAINTENANCE";
  ROUTE_KEYS["NOTIFICATIONS"] = "NOTIFICATIONS";
  ROUTE_KEYS["STRUCTURED_PRODUCTS"] = "STRUCTURED_PRODUCTS";
  ROUTE_KEYS["ANNUITIES"] = "ANNUITIES";
  ROUTE_KEYS["ORDER_MANAGEMENT"] = "ORDER_MANAGEMENT";
  ROUTE_KEYS["MARKETPLACE_SETTINGS"] = "MARKETPLACE_SETTINGS";
  ROUTE_KEYS["CREATE_CALENDAR"] = "CREATE_CALENDAR";
  ROUTE_KEYS["CREATE_FORM"] = "CREATE_FORM";
  ROUTE_KEYS["CREATE"] = "CREATE";
  ROUTE_KEYS["EVENT_NOTIFICATIONS"] = "EVENT_NOTIFICATIONS";
  ROUTE_KEYS["EVENT_NOTIFICATIONS_ADMIN"] = "EVENT_NOTIFICATIONS_ADMIN";
})(ROUTE_KEYS || (ROUTE_KEYS = {}));

const ROUTES = {
  [ROUTE_KEYS.HOME]: {
    [FrontEndLibraries.ANGULAR]: '/dashboard',
    [FrontEndLibraries.REACT]: '/dashboard'
  },
  [ROUTE_KEYS.LEARN]: {
    [FrontEndLibraries.ANGULAR]: '/learning-center',
    [FrontEndLibraries.REACT]: '/learning-center'
  },
  [ROUTE_KEYS.ORDERS]: {
    [FrontEndLibraries.ANGULAR]: '/product-marketplace/annuity-product-orders',
    [FrontEndLibraries.REACT]: '/product-marketplace/annuity-product-orders'
  },
  [ROUTE_KEYS.ACCOUNT_UPLOAD]: {
    [FrontEndLibraries.ANGULAR]: '/product-marketplace/account-file-upload',
    [FrontEndLibraries.REACT]: '/product-marketplace/account-file-upload'
  },
  [ROUTE_KEYS.WHOLESALER_MAPPING]: {
    [FrontEndLibraries.ANGULAR]: '/product-marketplace/wholesaler-mapping',
    [FrontEndLibraries.REACT]: '/product-marketplace/wholesaler-mapping'
  },
  [ROUTE_KEYS.LIFECYCLE]: {
    [FrontEndLibraries.ANGULAR]: '/lifecycle-manager',
    [FrontEndLibraries.REACT]: '/lifecycle-manager'
  },
  [ROUTE_KEYS.TRADE]: {
    [FrontEndLibraries.ANGULAR]: '/secondaries',
    [FrontEndLibraries.REACT]: '/secondaries'
  },
  [ROUTE_KEYS.COMPANY_ADMIN]: {
    [FrontEndLibraries.ANGULAR]: '/company-administration',
    [FrontEndLibraries.REACT]: '/company-administration'
  },
  [ROUTE_KEYS.COMPANY_RELATIONSHIP]: {
    [FrontEndLibraries.ANGULAR]: '/admin/company-administration-relationship-mapping',
    [FrontEndLibraries.REACT]: '/admin/company-administration-relationship-mapping'
  },
  [ROUTE_KEYS.COMPANY_CONFIG]: {
    [FrontEndLibraries.ANGULAR]: '/admin/company-administration-configuration',
    [FrontEndLibraries.REACT]: '/admin/company-administration-configuration'
  },
  [ROUTE_KEYS.HISTORICAL_EMAILS]: {
    [FrontEndLibraries.ANGULAR]: '/admin/email-info/overview',
    [FrontEndLibraries.REACT]: '/admin/email-info/overview'
  },
  [ROUTE_KEYS.FILE_UPLOAD]: {
    [FrontEndLibraries.ANGULAR]: '/admin/file-upload',
    [FrontEndLibraries.REACT]: '/admin/file-upload'
  },
  [ROUTE_KEYS.AUDIT_RECORDS]: {
    [FrontEndLibraries.ANGULAR]: '/admin/audit-records',
    [FrontEndLibraries.REACT]: '/admin/audit-records'
  },
  [ROUTE_KEYS.WHOLESALER_DEFINITION]: {
    [FrontEndLibraries.ANGULAR]: '/admin/wholesaler-definition',
    [FrontEndLibraries.REACT]: '/admin/wholesaler-definition'
  },
  [ROUTE_KEYS.ADMIN_WHOLESALER_MAPPING]: {
    [FrontEndLibraries.ANGULAR]: '/admin/wholesaler-mapping',
    [FrontEndLibraries.REACT]: '/admin/wholesaler-mapping'
  },
  [ROUTE_KEYS.PRODUCT_UPLOAD]: {
    [FrontEndLibraries.ANGULAR]: '/product-upload',
    [FrontEndLibraries.REACT]: '/product-upload'
  },
  [ROUTE_KEYS.DISCLOSURE_DOC_UPLOAD]: {
    [FrontEndLibraries.ANGULAR]: '/product-marketplace/disclosure-document-upload',
    [FrontEndLibraries.REACT]: '/product-marketplace/disclosure-document-upload'
  },
  [ROUTE_KEYS.MARKET_DATA_MAINTENANCE]: {
    [FrontEndLibraries.ANGULAR]: '/admin/market-data-maintainence',
    [FrontEndLibraries.REACT]: '/admin/market-data-maintainence'
  },
  [ROUTE_KEYS.ISSUER_CONFIRMATION]: {
    [FrontEndLibraries.ANGULAR]: '/admin/issuer-confirmation',
    [FrontEndLibraries.REACT]: '/admin/issuer-confirmation'
  },
  [ROUTE_KEYS.EMAIL_CONFIG]: {
    [FrontEndLibraries.ANGULAR]: '/admin/email-config',
    [FrontEndLibraries.REACT]: '/admin/email-config'
  },
  [ROUTE_KEYS.FIND_RFQ]: {
    [FrontEndLibraries.ANGULAR]: '/admin/find-rfq',
    [FrontEndLibraries.REACT]: '/admin/find-rfq'
  },
  [ROUTE_KEYS.PRODUCT_MAINTENANCE]: {
    [FrontEndLibraries.ANGULAR]: '/admin/product-maintenance',
    [FrontEndLibraries.REACT]: '/admin/product-maintenance'
  },
  [ROUTE_KEYS.NOTIFICATIONS]: {
    [FrontEndLibraries.ANGULAR]: '/notification-center',
    [FrontEndLibraries.REACT]: '/notification-center'
  },
  [ROUTE_KEYS.STRUCTURED_PRODUCTS]: {
    [FrontEndLibraries.ANGULAR]: '/product-marketplace/structured-products',
    [FrontEndLibraries.REACT]: '/product-marketplace/structured-products'
  },
  [ROUTE_KEYS.ANNUITIES]: {
    [FrontEndLibraries.ANGULAR]: '/product-marketplace/annuity-products',
    [FrontEndLibraries.REACT]: '/product-marketplace/annuity-products'
  },
  [ROUTE_KEYS.ORDER_MANAGEMENT]: {
    [FrontEndLibraries.ANGULAR]: '/product-marketplace/structured-product-orders',
    [FrontEndLibraries.REACT]: '/product-marketplace/structured-product-orders'
  },
  [ROUTE_KEYS.MARKETPLACE_SETTINGS]: {
    [FrontEndLibraries.ANGULAR]: '/marketplace-settings',
    [FrontEndLibraries.REACT]: '/marketplace-settings'
  },
  [ROUTE_KEYS.CREATE_CALENDAR]: {
    [FrontEndLibraries.ANGULAR]: '/creation-hub/calendar-deal-table',
    [FrontEndLibraries.REACT]: '/creation-hub/calendar-deal-table'
  },
  [ROUTE_KEYS.CREATE_FORM]: {
    [FrontEndLibraries.ANGULAR]: '/creation-hub-ubs/create-form',
    [FrontEndLibraries.REACT]: '/creation-hub-ubs/create-form'
  },
  [ROUTE_KEYS.CREATE]: {
    [FrontEndLibraries.ANGULAR]: '/creation-hub?',
    [FrontEndLibraries.REACT]: '/creationhub'
  },
  [ROUTE_KEYS.EVENT_NOTIFICATIONS]: {
    [FrontEndLibraries.ANGULAR]: '/event-confirmations',
    [FrontEndLibraries.REACT]: '/event-confirmations'
  },
  [ROUTE_KEYS.EVENT_NOTIFICATIONS_ADMIN]: {
    [FrontEndLibraries.ANGULAR]: '/event-confirmations',
    [FrontEndLibraries.REACT]: '/event-confirmations'
  }
};

var WidgetPermissions;

(function (WidgetPermissions) {
  WidgetPermissions["MenuCanViewLegacyDashboard"] = "menu.can_view_legacy_dashboard";
  WidgetPermissions["MenuCanViewLegacyNav"] = "menu.can_view_legacy_nav";
  WidgetPermissions["MenuLifecycleManager"] = "menu.lifecycle_manager";
  WidgetPermissions["MenuLifecycleManager2Beta"] = "menu.lifecycle_manager_2_beta";
  WidgetPermissions["MenuAdmin"] = "menu.admin";
  WidgetPermissions["MenuAdminUsers"] = "menu.admin.users";
  WidgetPermissions["MenuAdminReturnDescription"] = "menu.admin.return_description_tool";
  WidgetPermissions["MenuAdminWebContent"] = "menu.admin.web_content";
  WidgetPermissions["MenuAdminProgramIssuerMap"] = "menu.admin.program_issuer_map";
  WidgetPermissions["MenuAdminWebFocusListVideo"] = "menu.admin.focus_list_video";
  WidgetPermissions["MenuAdminMarketingEmailTrackingUpload"] = "menu.admin.marketing_email_tracking_upload";
  WidgetPermissions["MenuAdminAllMaturingProducts"] = "menu.admin.all_maturing_products";
  WidgetPermissions["MenuAdminComplianceTrainingsExport"] = "menu.admin.compliance_trainings_export";
  WidgetPermissions["MenuAdminCompanyRelationshipMapping"] = "menu.admin.company_relationship_mapping";
  WidgetPermissions["MenuAdminComparableStructureTypesConfiguration"] = "menu.admin.comparable_structure_types_configuration";
  WidgetPermissions["MenuAdminPCTIssuerPreferences"] = "menu.admin.pct_issuer_preferences";
  WidgetPermissions["MenuAdminPCTClientPreferences"] = "menu.admin.pct_client_preferences";
  WidgetPermissions["MenuAdminClients"] = "menu.admin.clients";
  WidgetPermissions["MenuAdminDailyOrdersExport"] = "menu.admin.daily_orders_export";
  WidgetPermissions["MenuAdminOrderEmailNotifications"] = "menu.admin.order_email_notifications";
  WidgetPermissions["MenuAdminHistoricalEmails"] = "menu.admin.historical_emails";
  WidgetPermissions["MenuAdminFileUpoad"] = "menu.admin.file_upload";
  WidgetPermissions["MenuAdminWholesalerDefinition"] = "menu.admin.wholesaler_definition";
  WidgetPermissions["MenuAdminWholesalerMapping"] = "menu.admin.wholesaler_mapping";
  WidgetPermissions["MenuCreationHubDataReporting"] = "menu.creation_hub.data_reporting";
  WidgetPermissions["MenuMarketplaceAnnuity"] = "menu.marketplace.annuity";
  WidgetPermissions["MenuMarketplaceAnnuityConfigureButton"] = "menu.marketplace.annuity.configure.button";
  WidgetPermissions["MenuMarketplaceAnnuityBuyButton"] = "menu.marketplace.annuity.buy.button";
  WidgetPermissions["MenuPmWholesalerMapping"] = "menu.pm.wholesaler_mapping";
  WidgetPermissions["MenuPmConfigurations"] = "menu.pm_configurations";
  WidgetPermissions["MenuPmConfigurationsKycRulesUpload"] = "menu.pm_configurations_kyc_rules_upload";
  WidgetPermissions["MenuMarketplaceOrders"] = "menu.marketplace.orders";
  WidgetPermissions["MenuMarketplaceSettings"] = "menu.marketplace.settings";
  WidgetPermissions["MenuNotificationCenter"] = "menu.notification_center";
  WidgetPermissions["MenuSecondaries"] = "menu.secondaries";
  WidgetPermissions["SecondariesRFQCreate"] = "secondaries.rfq.create";
  WidgetPermissions["SecondariesRFQRespond"] = "secondaries.rfq.respond";
  WidgetPermissions["FormRedemptionEmail"] = "form.redemption_email";
  WidgetPermissions["CHDealDetailEditIssuerApproved"] = "creation_hub.deal.detail.edit.issuer_approved";
  WidgetPermissions["CHDealIssuer"] = "creation_hub.deal.issuer";
  WidgetPermissions["CHDealPag"] = "creation_hub.deal.pag";
  WidgetPermissions["CHDealCounterparty"] = "creation_hub.deal.counterparty";
  WidgetPermissions["CHDealClient"] = "creation_hub.deal.client";
  WidgetPermissions["AccessLearningCenter"] = "access.learning_center_module";
  WidgetPermissions["AccessLifecycleManagerAnnuities"] = "access.lifecycle_manager_annuities";
  WidgetPermissions["ProductCenter"] = "menu.admin.product_center";
  WidgetPermissions["MarketplaceRepFields"] = "form.order.rep_fields";
  WidgetPermissions["MarketplaceAdminFields"] = "form.order.admin_fields";
  WidgetPermissions["MarketplacePmFields"] = "form.order.pm_fields";
  WidgetPermissions["MarketplaceSalesFields"] = "form.order.sales_fields";
  WidgetPermissions["MarketplaceOverride"] = "form.order.override";
  WidgetPermissions["MarketplaceLnwOverride"] = "form.order.liquid_net_worth_override";
  WidgetPermissions["MarketplaceVisibility"] = "marketplace.edit.visibility";
  WidgetPermissions["MarketplaceOverrideBuy"] = "marketplace.enable.override.buy";
  WidgetPermissions["MarketplaceTomsExport"] = "menu.pm_configurations_toms_export";
  WidgetPermissions["MarketplaceBookBuildingEdit"] = "form.order.book_building.edit";
  WidgetPermissions["MarketplaceV2"] = "menu.marketplace.v2";
  WidgetPermissions["ProductDetailsOrderTab"] = "lifecyclemanager.product_details.orders";
  WidgetPermissions["EmailCenterInbox"] = "lifecyclemanager.email_center.tab";
  WidgetPermissions["ProductMaintenance"] = "menu.admin.product_maintenance";
  WidgetPermissions["RangeToFinalAccess"] = "menu.admin.product_maintenance.update_final_values";
  WidgetPermissions["RangeToFinalSuperAccess"] = "product_maintenance.update_final_values_superaccess";
  WidgetPermissions["ProductMaintenanceProductEntry"] = "menu.admin.product_maintenance.product_entry";
  WidgetPermissions["ProductMaintenanceProductEntrySuper"] = "product_maintenance.product_entry_superaccess";
  WidgetPermissions["ProductMaintenanceProductEdit"] = "menu.admin.product_maintenance.product_edit";
  WidgetPermissions["ReviewQueueAccess"] = "menu.admin.product_maintenance.review_queue";
  WidgetPermissions["ICCAccess"] = "menu.admin.product_maintenance.issuer_confirmation_creation";
  WidgetPermissions["UBSAdmin"] = "creation_hub.ubs.admin_access";
  WidgetPermissions["UBSCreateProductRequestQuotes"] = "creation_hub.ubs.create_product_request_quotes";
  WidgetPermissions["UBSProceedToOffering"] = "creation_hub.ubs.create_proceed_to_offering";
  WidgetPermissions["UBSSelectOfferingScope"] = "creation_hub.ubs.select_offering_scope";
  WidgetPermissions["UBSSelectRegS"] = "creation_hub.ubs.select_registration_type";
  WidgetPermissions["UBSComplianceTrainingComplete"] = "creation_hub.ubs.compliance_training_complete";
  WidgetPermissions["LifecycleLimitedOrders"] = "lifecycle_manager.limited_orders";
  WidgetPermissions["CreationHubIssuer"] = "menu.creation_hub_is_issuer";
})(WidgetPermissions || (WidgetPermissions = {}));

const COMPANIES_WITH_EVENT_NOTIFICATION_ACCESS = ['Bank of America', 'GWIM']; // TODO - keep in shared location
// libs/common/src/lib/getLumaAppLogin.ts

const getAngularLink = url => {
  const formattedUrl = url !== null && url !== void 0 ? url : window.origin;
  return formattedUrl.replace(/go(?:-(an|ch|dn|lm|sp))?(?=\.)/g, (match, teamSubdomain) => teamSubdomain != null ? teamSubdomain : 'app');
};
const isTabDropdown = tab => {
  var _a;

  return !!((_a = tab === null || tab === void 0 ? void 0 : tab.children) === null || _a === void 0 ? void 0 : _a.length);
}; // currently unused, see the comment below in generateAppUrl
// const ENV_SUBDOMAINS = {
//   [ENV.PROD]: '',
//   [ENV.STAGING]: 'staging',
//   [ENV.UAT]: 'buat',
//   [ENV.QA]: 'bdev',
//   [ENV.DEV]: 'bdev',
//   [ENV.LOCAL]: '',
// };

const isProduction = () => window.origin.includes('https://app.lumafintech.com') || window.origin.includes('https://go.lumafintech.com');
const isStaging = () => window.origin.includes('https://go.staging.lumafintech.com') || window.origin.includes('https://app.staging.lumafintech.com');
const isUAT = () => window.origin.includes('https://go.buat.lumafintech.com') || window.origin.includes('https://app.buat.lumafintech.com');
const isQA = () => window.origin.includes('https://go.bqa.lumafintech.com') || window.origin.includes('https://app.bqa.lumafintech.com');
const isDev = () => window.origin.includes('https://go.bdev.lumafintech.com') || window.origin.includes('https://app.bdev.lumafintech.com');
const isHigherEnvironment = () => isProduction() || isStaging() || isUAT(); // LIST OF ENVS FOR ANGULAR (luma-app):
//
// DEV:     https://app.bdev.lumafintech.com
// QA:      https://app.bqa.lumafintech.com
//
// AN DEV:  https://an.bdev.lumafintech.com
// AN QA:   https://an.bqa.lumafintech.com
// CH DEV:  https://ch.bdev.lumafintech.com
// CH QA:   https://ch.bqa.lumafintech.com
// LM DEV:  https://lm.bdev.lumafintech.com
// LM QA:   https://lm.bqa.lumafintech.com
// PL DEV:  https://pl.bdev.lumafintech.com
// PL QA:   https://pl.bqa.lumafintech.com
// PM DEV:  https://pm.bdev.lumafintech.com
// PM QA:   https://pm.bqa.lumafintech.com
// PM QA:   https://pm.bqa.lumafintech.com
//
// UAT:     https://app.buat.lumafintech.com
// Staging: https://app.staging.lumafintech.com
// Prod:    https://app.lumafintech.com
// LIST OF ENVS FOR REACT (luma-fe-workspace):
//
// DEV:     https://go.bdev.lumafintech.com
// QA:      https://go.bqa.lumafintech.com
// UAT:     https://go.buat.lumafintech.com
// Staging: https://go.staging.lumafintech.com
// Prod:    https://go.lumafintech.com
// COLD FUSION ENVS
// PROD:    portal.lumafintech.com
// STAGING: stagingportal.lumafintech.com
// UAT:     uatportal.lumafintech.com
// QA:      qaportal.lumafintech.com
// DEV:     ngportal.lumafintech.com

/**
 * generateAppUrl: takes a route to append to the end of the generated base url
 * and a destination library that determines if the base url should be for the angular app or the react app deployment.
 *
 * This function derives the correct environment-specific url based on the current window.origin and the desired destination.
 */

const generateAppUrl = (route, destinationLibrary, env = ENV.PROD) => {
  // The following is a method in which we have an env flag that tells us which deployment env we're in.
  // This does not as yet exist, so we are using the second method
  //
  // let baseUrl = `https://${LIBRARY_SUBDOMAINS[destinationLibrary]}.${ENV_SUBDOMAINS[env]}.lumafintech.com`;
  // if (env === ENV.LOCAL) baseUrl = 'http://locahost:4200';
  let baseUrl = window.origin;

  if (destinationLibrary === FrontEndLibraries.ANGULAR) {
    if (isHigherEnvironment()) {
      baseUrl = baseUrl.replace('go.', 'app.');
    } else {
      baseUrl = getAngularLink(baseUrl);
    }
  }

  return `${baseUrl}${route}`;
};

const createLinkToOtherApp = (destinationLibrary, routeKey) => {
  const route = ROUTES[routeKey][destinationLibrary];
  return {
    url: generateAppUrl(route, destinationLibrary)
  };
};

const determineNavRouteOrUrl = (frontEndLibrary, routeKey, userPermissions) => {
  const route = ROUTES[routeKey][frontEndLibrary]; // FOR HOME (dashboard)
  // If the user has access to the new dashboard or is already in the React app, route to the React app's dashboard

  if (routeKey === ROUTE_KEYS.HOME) {
    if (frontEndLibrary === FrontEndLibraries.ANGULAR && !userHasAccess([WidgetPermissions.MenuCanViewLegacyDashboard], userPermissions)) {
      return createLinkToOtherApp(FrontEndLibraries.REACT, routeKey);
    } else {
      return {
        route
      };
    }
  } // FOR CREATION HUB
  // For the time being if we are not in higher envs, route to the new creation hub products in React
  // In higher envs continue to utilize the existing products in Angular
  // Once the products are deployed in production
  // we can remove the env checks and simply route to the React deployments in all cases


  if (routeKey === ROUTE_KEYS.CREATE && !isProduction() && !isUAT() && !isStaging()) {
    if (frontEndLibrary === FrontEndLibraries.REACT) return {
      route
    };else {
      return createLinkToOtherApp(FrontEndLibraries.REACT, routeKey);
    }
  } // FOR LIFECYCLE
  // Allow routing to both the existing Angular 'Lifecycle Manager' as well as the React 'Lifecycle Manager 2.0 Beta'
  // Each has its own associated permission for the respective dropdown link to be visible


  if (routeKey === ROUTE_KEYS.LIFECYCLE) {
    if (frontEndLibrary === FrontEndLibraries.REACT) return {
      route
    };else {
      return createLinkToOtherApp(FrontEndLibraries.ANGULAR, routeKey);
    }
  } // FOR EVENT CONFIRMATIONS


  if (routeKey === ROUTE_KEYS.EVENT_NOTIFICATIONS) {
    if (frontEndLibrary === FrontEndLibraries.REACT) return {
      route
    };else {
      return createLinkToOtherApp(FrontEndLibraries.REACT, routeKey);
    }
  } // FOR EVENT CONFIRMATIONS ADMIN


  if (routeKey === ROUTE_KEYS.EVENT_NOTIFICATIONS_ADMIN) {
    if (frontEndLibrary === FrontEndLibraries.REACT) return {
      route
    };else {
      return createLinkToOtherApp(FrontEndLibraries.REACT, routeKey);
    }
  } // FOR SECONDARIES


  if (routeKey === ROUTE_KEYS.TRADE) {
    if (frontEndLibrary === FrontEndLibraries.REACT) return {
      route
    };else {
      return createLinkToOtherApp(FrontEndLibraries.REACT, routeKey);
    }
  } // ALL REMAINING CASES


  if (frontEndLibrary === FrontEndLibraries.REACT) {
    return createLinkToOtherApp(FrontEndLibraries.ANGULAR, routeKey);
  } else {
    return {
      route
    };
  }
};
/**
 * getColdFusionBaseUrl: function that should be called with no arguments
 * that derives the correct environment-specific Cold Fusion base url based on the current window.origin.
 *
 * e.g.
 * https://app.bdev.lumafintech.com => https://ngportal.lumafintech.com
 * https://app.staging.lumafintech.com => https://stagingportal.lumafintech.com
 *
 * Optional argument 'origin' for testing how this function will work to convert various base urls
 * with an input rather than pulling directly from window.origin in the browser.
 */

const getColdFusionBaseUrl = origin => {
  const currentUrl = origin || window.origin; // TODO - Does this need changed?

  const updatedUrl = currentUrl.replace('http://', 'https://').replace('localhost:4200', 'app.bdev.lumafintech.com').replace('//app.', '//').replace('//go.', '//').replace('//an.', '//').replace('//ch.', '//').replace('//lm.', '//').replace('//pl.', '//').replace('//pm.', '//').replace('bdev.', 'ng').replace('bqa.', 'qa').replace('buat.', 'uat').replace('staging.', 'staging').replace('lumafintech.com', 'portal.lumafintech.com'); // CF links are different for staging and production

  if (updatedUrl.startsWith('https://portal.lumafintech.com') || updatedUrl.startsWith('https://stagingportal.lumafintech.com')) {
    return updatedUrl.replace('lumafintech', 'naviancapital');
  } else return updatedUrl;
}; // NOTE: AD-HOC TESTS FOR THE ABOVE METHOD, uncomment to use in console
// TODO - turn these into specs
// EXPECT THE FOLLOWING TO OUTPUT https://ngportal.lumafintech.com
// console.log('getColdFusionBaseUrl("http://localhost:4200")', getColdFusionBaseUrl('http://localhost:4200'), '\n');
// console.log('getColdFusionBaseUrl("https://app.staging.lumafintech.com")', getColdFusionBaseUrl('https://stagingportal.lumafintech.com'), '\n');

const getColdFusionLink = (page, section) => {
  return `${getColdFusionBaseUrl()}/cdfg/WebPages/${page}.cfm?${section ? `section=${section}&` : ''}`;
};
const getColdFusionLinkAppVersion = (page, section) => {
  return `${getColdFusionBaseUrl()}/cdfg/app/${page}.cfm?${section ? `section=${section}&` : ''}`;
};
const STRUCTURED_PRODUCTS_PRODUCT_TYPES = {
  LINKED_CDS: "Market Linked CD's",
  STRUCTURED_NOTES: 'Structured Notes'
};
const structuredProductTypes = [STRUCTURED_PRODUCTS_PRODUCT_TYPES.LINKED_CDS, STRUCTURED_PRODUCTS_PRODUCT_TYPES.STRUCTURED_NOTES];
const ANNUITY_PRODUCT_TYPES = {
  ALL: 'ALL',
  DIA_SPIA: 'DIA/SPIA',
  FIA: 'FIA',
  FIXED_RATE: 'Fixed Rate',
  RILA: 'RILA',
  VARIABLE_ANNUITIES: 'Variable Annuities'
};
const annuityProductTypes = [ANNUITY_PRODUCT_TYPES.VARIABLE_ANNUITIES, ANNUITY_PRODUCT_TYPES.DIA_SPIA, ANNUITY_PRODUCT_TYPES.FIA, ANNUITY_PRODUCT_TYPES.FIXED_RATE, ANNUITY_PRODUCT_TYPES.RILA];
const isAnnuityOnly = productTypes => productTypes.length > 0 && !structuredProductTypes.some(product => productTypes.includes(product));
const isStructuredProductsOnly = productTypes => productTypes.length === 0 || !annuityProductTypes.some(product => productTypes.includes(product));
const filterNavTabs = (navTabs, userPermissions, isProduction, pricingToolType, company) => {
  const filteredNavTabs = filterLinks(navTabs, userPermissions, isProduction, pricingToolType, company);
  filteredNavTabs.forEach(link => {
    if (link.children) {
      link.children = filterLinks(link.children, userPermissions, isProduction, pricingToolType, company);
    }
  });
  return filteredNavTabs;
}; // Added because some companies don't want access to LM but their common role has the permission
// This is temporary and should not be used as a long term solution

const filterLmFromSomeCompanies = company => {
  const COMPANIES_TO_BLOCK_LM_ACCESS = ['Highland Capital', 'Ash Brokerage'];
  return company && COMPANIES_TO_BLOCK_LM_ACCESS.includes(company);
};

const filterLinks = (links, userPermissions, isProduction, pricingToolType, company) => {
  return links.filter(link => {
    if (link.title === ROUTE_KEYS.COMPANY_ADMIN && isProduction) {
      return false;
    }

    if (link.title === ROUTE_KEYS.CREATE && !pricingToolType) {
      return false;
    }

    if (link.title === ROUTE_KEYS.LIFECYCLE && filterLmFromSomeCompanies(company)) {
      return false;
    }

    if (link.title === 'Event Notifications' && !COMPANIES_WITH_EVENT_NOTIFICATION_ACCESS.includes(company !== null && company !== void 0 ? company : '')) {
      return false;
    }

    return userHasAccess(link.permissions, userPermissions);
  });
};

const userHasAccess = (linkPermissions, userPermissions) => !linkPermissions || linkPermissions.some(linkPermission => userPermissions.some(userPermission => (linkPermission === null || linkPermission === void 0 ? void 0 : linkPermission.toLowerCase()) === (userPermission === null || userPermission === void 0 ? void 0 : userPermission.toLowerCase())));

const NavTabBar = ({
  tabs,
  activeTab,
  setActiveTab,
  handleNavigate,
  variantType,
  parentActiveTab,
  setParentActiveTab
}) => {
  return jsxs(NavTabBarWrapper, {
    children: [jsx(NavTabBarContainer, {
      children: tabs.map((tab, idx) => {
        if (isTabDropdown(tab)) {
          return jsx(DropdownNavTab, {
            tab: tab,
            activeTab: activeTab,
            setActiveTab: setActiveTab,
            parentActiveTab: parentActiveTab,
            setParentActiveTab: setParentActiveTab,
            handleNavigate: handleNavigate,
            variantType: variantType
          }, `${new Date().getTime()} ${tab.title}`);
        } else {
          return jsx(NavTabButton, {
            tab: tab,
            setActiveTab: setActiveTab,
            setParentActiveTab: setParentActiveTab,
            variantType: variantType,
            activeTab: activeTab,
            handleNavigate: handleNavigate
          }, `${new Date().getTime()} ${tab.title}`);
        }
      })
    }, void 0), variantType === 'secondary' ? jsx(PoweredByLumaLogo, {
      isMobile: false
    }, void 0) : null]
  }, void 0);
};

var img$2 = "data:image/svg+xml,%3csvg width='189' height='48' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M181.086 35.961H189l-12.851-23.89h-8.23l-12.852 23.89h.854c4.305-.095 7.85-1.681 9.623-4.695l6.458-11.74 9.084 16.435zm-46.816-9.898 7.407-11.55c1.107-1.65 2.754-2.474 4.938-2.474h6.584v23.89h-7.407V20.257l-9.876 15.674h-3.292l-9.877-15.642v15.673h-7.407v-23.89h6.584c2.184 0 3.83.825 4.938 2.474l7.408 11.518zM88.656 14.768v12.944c0 1.65 1.108 2.475 3.292 2.475h7.913c2.184 0 3.292-.825 3.292-2.475V12.04h7.408v17.29c0 4.41-2.47 6.6-7.408 6.6H88.656c-4.938 0-7.407-2.19-7.407-6.6V12.04c7.407 0 7.407 2.729 7.407 2.729zM79.697 35.96H57.793c-3.293 0-4.939-1.65-4.939-4.95V12.07h7.408v18.116h13.294c5.667 0 6.141 5.774 6.141 5.774zm-59.269.066 4.19 4.198a2.539 2.539 0 0 1 0 3.577l-4.19 4.2-4.189-4.2a2.538 2.538 0 0 1 0-3.577l4.189-4.198zm-11.947-24 4.19 4.199a2.538 2.538 0 0 1 0 3.576L8.48 24l4.19 4.199a2.523 2.523 0 0 0 3.568 0l4.163-4.173-4.163-4.173a2.538 2.538 0 0 1 0-3.577l4.19-4.198 4.188 4.198a2.525 2.525 0 0 0 3.569 0l4.189-4.198.065.065.406.408.087.086.297.299.112.111.505.507.286.286.306.307.16.161.336.336c.229.23.47.47.72.723l.385.385.81.81.638.64.886.889c3.31 3.213 3.31 8.604 0 11.922l-6 6.013-4.188-4.199a2.539 2.539 0 0 1 0-3.577l4.189-4.198-4.19-4.199a2.525 2.525 0 0 0-3.568 0l-4.163 4.173 4.163 4.173a2.539 2.539 0 0 1 0 3.576l-4.189 4.199-4.19-4.199a2.524 2.524 0 0 0-3.567 0l-4.19 4.199-.065-.065-.254-.256-.239-.238-.297-.299-.112-.112-.505-.506-.286-.286-.306-.307-.16-.161-.335-.336-.175-.174-.36-.362-.187-.187-.384-.385-1.02-1.022-.428-.429-.886-.888c-3.31-3.266-3.31-8.657 0-11.922l6-6.013zm16.136-7.827a2.539 2.539 0 0 1 0 3.576l-4.189 4.2-4.19-4.2a2.539 2.539 0 0 1 0-3.576L20.429 0l4.189 4.199z' fill='white' fill-rule='evenodd'/%3e%3c/svg%3e";

const VARIANT_MAP$9 = {
  primary: {
    topNavBackground: colors.blue,
    topNavBorder: colors.blue,
    accountIconMainColor: colors.white,
    accountIconActiveColor: ' #007dc2',
    textColor: colors.white,
    activeHighlightColor: ' #007dc2'
  },
  secondary: {
    topNavBackground: colors.white,
    topNavBorder: '#c4cdd1',
    accountIconMainColor: '#2f3336',
    accountIconActiveColor: ' #a9b3b8',
    textColor: '#2f3336',
    activeHighlightColor: '#a9b3b8'
  }
};
const TopNavBarContainer = /*#__PURE__*/styled.div.withConfig({
  displayName: "TopNavBarstyles__TopNavBarContainer",
  componentId: "sc-gyde6t-0"
})(["max-height:64px;background-color:", ";"], colors.white);
const TopNavBarWrapper = /*#__PURE__*/styled.div.withConfig({
  displayName: "TopNavBarstyles__TopNavBarWrapper",
  componentId: "sc-gyde6t-1"
})(["display:flex;justify-content:space-between;align-items:center;max-height:64px;border-bottom-right-radius:24px;background-color:", ";border-bottom:1px solid ", ";;"], props => VARIANT_MAP$9[`${props.variantType}`].topNavBackground, props => VARIANT_MAP$9[`${props.variantType}`].topNavBorder);
const LogoContainer$3 = /*#__PURE__*/styled.div.withConfig({
  displayName: "TopNavBarstyles__LogoContainer",
  componentId: "sc-gyde6t-2"
})(["margin-left:24px;width:", ";height:", ";overflow:auto;display:flex;flex:1 1 0%;"], props => props.width ? props.width : '144px', props => props.height ? props.height : '28px');

const VARIANT_MAP$8 = {
  primary: {
    topNavBackground: colors.blue,
    topNavBorder: colors.blue,
    accountIconMainColor: colors.white,
    dropdownIcon: colors.blue,
    accountIconActiveColor: '#26A0DC',
    textColor: colors.blue,
    activeHighlightColor: '#007dc2',
    tabHoverColor: '#02629D'
  },
  secondary: {
    topNavBackground: colors.white,
    topNavBorder: '#c4cdd1',
    accountIconMainColor: '#2f3336',
    dropdownIcon: '#2f3336',
    accountIconActiveColor: ' #a9b3b8',
    textColor: '#2f3336',
    activeHighlightColor: '#a9b3b8',
    tabHoverColor: '#858F93'
  }
};
const AccountIcon = /*#__PURE__*/styled(Icon$1).withConfig({
  displayName: "ProfileHeaderDropdownstyles__AccountIcon",
  componentId: "sc-1d685zm-0"
})(["font-size:12px;margin-top:5px;color:", ";cursor:pointer;"], props => VARIANT_MAP$8[`${props.variantType}`].accountIconMainColor);
const AccountButton = /*#__PURE__*/styled.button.withConfig({
  displayName: "ProfileHeaderDropdownstyles__AccountButton",
  componentId: "sc-1d685zm-1"
})(["border-color:", ";background-color:", ";border-image:none;border-radius:50px;border-style:solid;border-width:2px;display:flex;height:30px;justify-content:center;margin:20px 24px 20px 0;width:30px;:hover{border-color:", ";", "{color:", ";}}:active{color:", ";", "{color:", ";}"], props => VARIANT_MAP$8[`${props.variantType}`].accountIconMainColor, props => VARIANT_MAP$8[`${props.variantType}`].topNavBackground, props => VARIANT_MAP$8[`${props.variantType}`].accountIconActiveColor, AccountIcon, props => VARIANT_MAP$8[`${props.variantType}`].accountIconActiveColor, props => VARIANT_MAP$8[`${props.variantType}`].accountIconActiveColor, AccountIcon, props => VARIANT_MAP$8[`${props.variantType}`].accountIconActiveColor);
const DropdownWrapper = /*#__PURE__*/styled.div.withConfig({
  displayName: "ProfileHeaderDropdownstyles__DropdownWrapper",
  componentId: "sc-1d685zm-2"
})(["position:absolute;z-index:2;background-color:#fff;margin-left:-142px;margin-top:-10px;min-width:170px;max-height:260px;border-radius:8px;box-shadow:0 1px 4px 0 rgba(47,51,54,0.56);"]);
const DropdownMenu = /*#__PURE__*/styled.ul.withConfig({
  displayName: "ProfileHeaderDropdownstyles__DropdownMenu",
  componentId: "sc-1d685zm-3"
})(["display:flex;flex-direction:column;gap:22px;padding:10px 0 19px 0;"]);
const DropdownListButton = /*#__PURE__*/styled.button.withConfig({
  displayName: "ProfileHeaderDropdownstyles__DropdownListButton",
  componentId: "sc-1d685zm-4"
})(["all:unset;font-size:", ";font-weight:500;font-family:'IBM Plex Sans';color:", ";padding-bottom:", ";padding-left:16px;cursor:pointer;:hover{color:", ";}"], props => props.isUsername ? '16px' : '14px', props => props.isUsername ? '#858f93' : VARIANT_MAP$8[`${props.variantType}`].textColor, props => props.isUsername ? '10px' : '0', props => props.isUsername ? null : VARIANT_MAP$8[`${props.variantType}`].tabHoverColor);
const ListButtonWrapper = /*#__PURE__*/styled.div.withConfig({
  displayName: "ProfileHeaderDropdownstyles__ListButtonWrapper",
  componentId: "sc-1d685zm-5"
})(["box-shadow:", ";"], props => props.isUsername ? `0 1px 1px 0 rgba(47, 51, 54, 0.1)` : null);

const ProfileHeaderDropdown = ({
  userName,
  items,
  accountAriaLabel,
  variantType
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const {
    getToggleButtonProps,
    getMenuProps,
    getItemProps
  } = useSelect({
    items
  });
  const buttonProps = Object.assign({}, getToggleButtonProps());
  const menuProps = Object.assign({}, getMenuProps({}, {
    suppressRefError: true
  }));
  return jsx("div", {
    children: jsxs(OutsideClickHandler, Object.assign({
      onOutsideClick: () => setDropdownOpen(false)
    }, {
      children: [jsx(AccountButton, Object.assign({}, buttonProps, {
        name: "profile button",
        "aria-label": accountAriaLabel,
        onClick: () => setDropdownOpen(!dropdownOpen),
        variantType: variantType
      }, {
        children: jsx(AccountIcon, {
          iconCode: "user",
          prefix: "fas",
          variantType: variantType
        }, void 0)
      }), void 0), dropdownOpen ? jsx(DropdownWrapper, {
        children: jsx(DropdownMenu, Object.assign({}, menuProps, {
          "aria-labelledby": buttonProps.id,
          role: "menu"
        }, {
          children: dropdownOpen && items.map((item, index) => {
            const itemProps = getItemProps({
              item,
              index
            });

            if (item.showItem) {
              return jsx(ListButtonWrapper, Object.assign({
                isUsername: item.name === userName
              }, {
                children: jsx(DropdownListButton, Object.assign({}, itemProps, {
                  disabled: item.disabled,
                  "aria-label": item.name,
                  "aria-selected": undefined,
                  variantType: variantType,
                  onClick: item.onClick,
                  role: "menuitem",
                  isUsername: item.name === userName
                }, {
                  children: item.name
                }), void 0)
              }), `${item}${index}`);
            } else {
              return null;
            }
          })
        }), void 0)
      }, void 0) : null]
    }), void 0)
  }, void 0);
};

const VARIANT_MAP$7 = {
  primary: {
    topNavBackground: colors.blue,
    topNavBorder: colors.blue,
    mobileBorder: '#5a6368',
    accountIconMainColor: '#c4cdd1',
    accountIconActiveColor: ' #007dc2',
    textColor: '#c4cdd1',
    activeTextColor: colors.white,
    activeHighlightColor: ' #007dc2',
    activeFontWeight: '500'
  },
  secondary: {
    topNavBackground: colors.white,
    topNavBorder: '#c4cdd1',
    mobileBorder: '#c4cdd1',
    accountIconMainColor: '#2f3336',
    accountIconActiveColor: ' #a9b3b8',
    textColor: '#2f3336',
    activeTextColor: '#2f3336',
    activeHighlightColor: '#a9b3b8',
    activeFontWeight: '700'
  }
};
const DropdownIcon$1 = /*#__PURE__*/styled(Icon$1).withConfig({
  displayName: "ProfileMobileDropdownstyles__DropdownIcon",
  componentId: "sc-11yjxw2-0"
})(["margin-right:12px;font-size:14px;font-weight:bold;color:", ";"], props => VARIANT_MAP$7[`${props.variantType}`].accountIconMainColor);
const MobileDropdownWrapper$1 = /*#__PURE__*/styled.ul.withConfig({
  displayName: "ProfileMobileDropdownstyles__MobileDropdownWrapper",
  componentId: "sc-11yjxw2-1"
})(["padding:5px 16px 0 16px;border-bottom:", ";"], props => `1px solid ${VARIANT_MAP$7[`${props.variantType}`].mobileBorder}`);
const MobileListButton$1 = /*#__PURE__*/styled.button.withConfig({
  displayName: "ProfileMobileDropdownstyles__MobileListButton",
  componentId: "sc-11yjxw2-2"
})(["all:unset;justify-content:space-between;display:flex;flex-direction:row;width:100%;font-size:14px;font-weight:500;font-family:'IBM Plex Sans';color:", ";:active{font-weight:", ";color:", ";}"], props => props.isUsername ? '#858f93' : VARIANT_MAP$7[`${props.variantType}`].activeTextColor, props => props.isUsername ? null : VARIANT_MAP$7[`${props.variantType}`].activeFontWeight, props => props.isUsername ? null : VARIANT_MAP$7[`${props.variantType}`].activeTextColor);
const MobileListWrapper$1 = /*#__PURE__*/styled.div.withConfig({
  displayName: "ProfileMobileDropdownstyles__MobileListWrapper",
  componentId: "sc-11yjxw2-3"
})(["display:flex;flex-direction:column;height:40px;"]);
const MobileTabWrapper$2 = /*#__PURE__*/styled.div.withConfig({
  displayName: "ProfileMobileDropdownstyles__MobileTabWrapper",
  componentId: "sc-11yjxw2-4"
})(["display:flex;justify-content:space-between;flex-direction:column;height:56px;border-bottom:", ";"], props => props.dropdownActive ? null : `1px solid ${VARIANT_MAP$7[`${props.variantType}`].mobileBorder}`);
const MobileTabButton$2 = /*#__PURE__*/styled.button.withConfig({
  displayName: "ProfileMobileDropdownstyles__MobileTabButton",
  componentId: "sc-11yjxw2-5"
})(["all:unset;justify-content:space-between;display:flex;flex-direction:row;width:100%;font-size:14px;font-weight:normal;font-family:'IBM Plex Sans';color:", ";margin-top:19px;"], props => VARIANT_MAP$7[`${props.variantType}`].textColor);

const ProfileMobileDropdown = ({
  userName,
  items,
  activeMobileDropdown,
  setActiveMobileDropdown,
  variantType
}) => {
  const {
    getToggleButtonProps,
    getMenuProps,
    getItemProps
  } = useSelect({
    items
  });
  const buttonProps = Object.assign({}, getToggleButtonProps());
  const menuProps = Object.assign({}, getMenuProps({}, {
    suppressRefError: true
  }));
  const dropdownOpen = activeMobileDropdown === 'profile';

  const dropdownButtonClick = name => {
    if (setActiveMobileDropdown) {
      if (dropdownOpen) {
        setActiveMobileDropdown(null);
      } else {
        setActiveMobileDropdown(name);
      }
    }
  };

  return jsxs("div", {
    children: [jsx(MobileTabWrapper$2, Object.assign({
      variantType: variantType,
      dropdownActive: dropdownOpen
    }, {
      children: jsxs(MobileTabButton$2, Object.assign({}, buttonProps, {
        onClick: () => dropdownButtonClick('profile'),
        variantType: variantType,
        isDropdown: dropdownOpen,
        isActive: dropdownOpen
      }, {
        children: ["PROFILE", jsx(DropdownIcon$1, {
          iconCode: dropdownOpen ? 'angle-up' : 'angle-down',
          prefix: "far",
          variantType: variantType
        }, void 0)]
      }), void 0)
    }), void 0), dropdownOpen ? jsx(MobileDropdownWrapper$1, Object.assign({
      variantType: variantType
    }, menuProps, {
      role: "menu"
    }, {
      children: dropdownOpen && items.map((item, index) => {
        const itemProps = getItemProps({
          item,
          index
        });

        if (item.showItem) {
          return jsx(MobileListWrapper$1, {
            children: jsx(MobileListButton$1, Object.assign({}, itemProps, {
              onClick: item.onClick,
              disabled: item.disabled,
              "aria-selected": undefined,
              variantType: variantType,
              isDropdown: true,
              role: "menuitem",
              isUsername: item.name === userName
            }, {
              children: item.name
            }), void 0)
          }, `${new Date().getTime()}${item}${index}`);
        } else {
          return null;
        }
      })
    }), void 0) : null]
  }, void 0);
};

const ProfileDropdown = ({
  userName,
  isMobile,
  variantType,
  accountAriaLabel,
  logout,
  activeMobileDropdown,
  setActiveMobileDropdown
}) => {
  const items = [{
    name: userName,
    showItem: true,
    onClick: null,
    disabled: true
  }, {
    name: 'Contact Us',
    showItem: true,
    onClick: () => window.open('https://lumafintech.com/contactus/', '_blank'),
    disabled: false
  }, {
    name: 'Log Out',
    showItem: true,
    onClick: logout,
    disabled: false
  }];

  if (isMobile) {
    return jsx(ProfileMobileDropdown, {
      userName: userName,
      items: items,
      variantType: variantType,
      activeMobileDropdown: activeMobileDropdown,
      setActiveMobileDropdown: setActiveMobileDropdown
    }, void 0);
  } else {
    return jsx(ProfileHeaderDropdown, {
      userName: userName,
      items: items,
      variantType: variantType,
      accountAriaLabel: accountAriaLabel ? accountAriaLabel : 'profile button'
    }, void 0);
  }
};

const TopNavBar = ({
  issuerLogo,
  logoWidth,
  logoHeight,
  accountAriaLabel,
  variantType,
  userName,
  isMobile,
  logout
}) => {
  return jsx(TopNavBarContainer, {
    children: jsxs(TopNavBarWrapper, Object.assign({
      variantType: variantType
    }, {
      children: [jsx(LogoContainer$3, Object.assign({
        width: logoWidth,
        height: logoHeight
      }, {
        children: jsx(Logo, {
          imageSource: issuerLogo ? issuerLogo : img$2
        }, void 0)
      }), void 0), jsx(ProfileDropdown, {
        userName: userName,
        isMobile: isMobile,
        variantType: variantType,
        accountAriaLabel: accountAriaLabel,
        logout: logout
      }, void 0)]
    }), void 0)
  }, void 0);
};

const MobileMenuWrapper = /*#__PURE__*/styled.div.withConfig({
  displayName: "MobileMenustyles__MobileMenuWrapper",
  componentId: "sc-1fhi147-0"
})(["min-height:", ";background-color:", ";top:0;left:0;width:100vw;z-index:2;border-bottom-right-radius:", ";box-shadow:0 1px 1px 0 rgba(47,51,54,0.1);border:1px solid ", ";"], props => props.isOpen ? '100vh' : '64px', props => VARIANT_MAP$6[`${props.variantType}`].topNavBackground, props => props.isOpen ? '0px ' : '24px', props => VARIANT_MAP$6[`${props.variantType}`].topNavBorder);
const MobileNavWrapper = /*#__PURE__*/styled.nav.withConfig({
  displayName: "MobileMenustyles__MobileNavWrapper",
  componentId: "sc-1fhi147-1"
})(["display:flex;justify-content:space-between;align-items:center;height:64px;width:100%;border-bottom-right-radius:", ";background-color:", ";"], props => props.isOpen ? '0px ' : '24px', props => VARIANT_MAP$6[`${props.variantType}`].topNavBackground);
const LogoContainer$2 = /*#__PURE__*/styled.div.withConfig({
  displayName: "MobileMenustyles__LogoContainer",
  componentId: "sc-1fhi147-5"
})(["display:flex;align-items:center;margin-left:24px;margin-right:16px;width:", ";height:", ";"], props => props.width ? props.width : '144px', props => props.height ? props.height : '28px');
const MobileMenuIcon = /*#__PURE__*/styled(Icon$1).withConfig({
  displayName: "MobileMenustyles__MobileMenuIcon",
  componentId: "sc-1fhi147-6"
})(["font-size:28px;color:", ";"], props => VARIANT_MAP$6[`${props.variantType}`].activeTextColor);
const MobileMenuButton = /*#__PURE__*/styled.button.withConfig({
  displayName: "MobileMenustyles__MobileMenuButton",
  componentId: "sc-1fhi147-7"
})(["all:unset;padding:20px 24px 20px 16px;"]);
const MobileTabConatiner = /*#__PURE__*/styled.div.withConfig({
  displayName: "MobileMenustyles__MobileTabConatiner",
  componentId: "sc-1fhi147-8"
})(["padding:0px 16px;"]);
const PoweredByLogoContainer = /*#__PURE__*/styled.div.withConfig({
  displayName: "MobileMenustyles__PoweredByLogoContainer",
  componentId: "sc-1fhi147-11"
})(["width:100vw;min-height:48px;display:flex;justify-content:center;align-items:center;background-color:#f2f4f5;"]);

const MobileTabWrapper$1 = /*#__PURE__*/styled.div.withConfig({
  displayName: "MobileTabButtonstyles__MobileTabWrapper",
  componentId: "sc-1vkyo2x-0"
})(["display:flex;justify-content:space-between;flex-direction:column;height:56px;border-bottom:", ";"], props => props.isDropdown ? null : `1px solid ${VARIANT_MAP$6[`${props.variantType}`].mobileBorder}`);
const MobileButton = /*#__PURE__*/styled.button.withConfig({
  displayName: "MobileTabButtonstyles__MobileButton",
  componentId: "sc-1vkyo2x-1"
})(["all:unset;justify-content:space-between;display:flex;flex-direction:row;width:100%;font-size:14px;font-weight:", ";font-family:'IBM Plex Sans';color:", ";margin-top:19px;"], props => props.isActive ? VARIANT_MAP$6[`${props.variantType}`].activeFontWeight : 'normal', props => props.isActive ? VARIANT_MAP$6[`${props.variantType}`].activeTextColor : VARIANT_MAP$6[`${props.variantType}`].textColor);
const ActiveButtonHighlight$1 = /*#__PURE__*/styled.div.withConfig({
  displayName: "MobileTabButtonstyles__ActiveButtonHighlight",
  componentId: "sc-1vkyo2x-2"
})(["width:", ";height:", ";background-color:", ";"], props => props.isActive ? '104px ' : null, props => props.isActive ? '3px ' : null, props => VARIANT_MAP$6[`${props.variantType}`].activeHighlightColor);

const MobileTabButton$1 = ({
  variantType,
  item,
  setActiveTab,
  menuOpen,
  setMenuOpen,
  activeTab,
  handleNavigate,
  setParentActiveTab
}) => {
  return jsxs(MobileTabWrapper$1, Object.assign({
    variantType: variantType
  }, {
    children: [jsx(MobileButton, Object.assign({
      onClick: () => {
        setActiveTab(item.title);
        handleNavigate(item);
        setMenuOpen(!menuOpen);
        setParentActiveTab(undefined);
      },
      variantType: variantType,
      isActive: activeTab === item.title
    }, {
      children: item.title
    }), void 0), jsx(ActiveButtonHighlight$1, {
      isActive: item.title === activeTab,
      variantType: variantType
    }, void 0)]
  }), `${new Date().getTime()} ${item.title}`);
};

const MobileTabWrapper = /*#__PURE__*/styled.div.withConfig({
  displayName: "MobileDropdownstyles__MobileTabWrapper",
  componentId: "sc-2lnmj8-0"
})(["display:flex;justify-content:space-between;flex-direction:column;height:56px;border-bottom:", ";"], props => props.dropdownActive ? null : `1px solid ${VARIANT_MAP$6[`${props.variantType}`].mobileBorder}`);
const MobileTabButton = /*#__PURE__*/styled.button.withConfig({
  displayName: "MobileDropdownstyles__MobileTabButton",
  componentId: "sc-2lnmj8-1"
})(["all:unset;justify-content:space-between;display:flex;flex-direction:row;width:100%;font-size:14px;font-weight:", ";font-family:'IBM Plex Sans';color:", ";margin-top:19px;"], props => props.isActive ? VARIANT_MAP$6[`${props.variantType}`].activeFontWeight : 'normal', props => props.isActive ? VARIANT_MAP$6[`${props.variantType}`].activeTextColor : VARIANT_MAP$6[`${props.variantType}`].textColor);
const DropdownIcon = /*#__PURE__*/styled(Icon$1).withConfig({
  displayName: "MobileDropdownstyles__DropdownIcon",
  componentId: "sc-2lnmj8-2"
})(["margin-right:12px;font-size:14px;font-weight:bold;color:", ";"], props => VARIANT_MAP$6[`${props.variantType}`].accountIconMainColor);
const ActiveButtonHighlight = /*#__PURE__*/styled.div.withConfig({
  displayName: "MobileDropdownstyles__ActiveButtonHighlight",
  componentId: "sc-2lnmj8-3"
})(["width:", ";height:", ";background-color:", ";"], props => props.isActive ? '104px ' : null, props => props.isActive ? '3px ' : null, props => VARIANT_MAP$6[`${props.variantType}`].activeHighlightColor);
const MobileDropdownWrapper = /*#__PURE__*/styled.ul.withConfig({
  displayName: "MobileDropdownstyles__MobileDropdownWrapper",
  componentId: "sc-2lnmj8-4"
})(["padding:5px 16px 0 16px;border-bottom:", ";"], props => `1px solid ${VARIANT_MAP$6[`${props.variantType}`].mobileBorder}`);
const MobileListButton = /*#__PURE__*/styled.button.withConfig({
  displayName: "MobileDropdownstyles__MobileListButton",
  componentId: "sc-2lnmj8-5"
})(["all:unset;justify-content:space-between;display:flex;flex-direction:row;width:100%;font-size:14px;font-weight:500;font-family:'IBM Plex Sans';color:", ";:active{font-weight:", ";color:", ";}"], props => VARIANT_MAP$6[`${props.variantType}`].activeTextColor, props => VARIANT_MAP$6[`${props.variantType}`].activeFontWeight, props => VARIANT_MAP$6[`${props.variantType}`].activeTextColor);
const MobileListWrapper = /*#__PURE__*/styled.div.withConfig({
  displayName: "MobileDropdownstyles__MobileListWrapper",
  componentId: "sc-2lnmj8-6"
})(["display:flex;flex-direction:column;height:40px;"]);

const MobileDropdownTab = ({
  tab,
  activeMobileDropdown,
  setActiveMobileDropdown,
  variantType,
  parentActiveTab,
  setParentActiveTab,
  activeTab,
  setActiveTab,
  menuOpen,
  setMenuOpen,
  handleNavigate
}) => {
  const {
    title,
    children
  } = tab;
  const {
    getToggleButtonProps,
    getMenuProps,
    getItemProps
  } = useSelect({
    items: children
  });
  const buttonProps = Object.assign({}, getToggleButtonProps());
  const menuProps = Object.assign({}, getMenuProps({}, {
    suppressRefError: true
  }));
  const dropdownOpen = activeMobileDropdown === title;

  const dropdownButtonClick = name => {
    if (dropdownOpen) {
      setActiveMobileDropdown(null);
    } else {
      setActiveMobileDropdown(name);
    }
  };

  const listItemClick = item => {
    setActiveTab(item.title);
    handleNavigate(item);
    setMenuOpen(!menuOpen);
    setActiveMobileDropdown(null);
    setParentActiveTab(title);
  };

  return jsxs("div", {
    children: [jsxs(MobileTabWrapper, Object.assign({
      dropdownActive: dropdownOpen,
      variantType: variantType
    }, {
      children: [jsxs(MobileTabButton, Object.assign({}, buttonProps, {
        onClick: () => dropdownButtonClick(title),
        variantType: variantType,
        isDropdown: dropdownOpen,
        isActive: title === parentActiveTab
      }, {
        children: [title, jsx(DropdownIcon, {
          iconCode: dropdownOpen ? 'angle-up' : 'angle-down',
          prefix: "far",
          variantType: variantType
        }, void 0)]
      }), void 0), jsx(ActiveButtonHighlight, {
        isActive: title === activeTab || parentActiveTab === title,
        variantType: variantType
      }, void 0)]
    }), void 0), dropdownOpen ? jsx(MobileDropdownWrapper, Object.assign({
      variantType: variantType
    }, menuProps, {
      role: "menu"
    }, {
      children: dropdownOpen && children.map((item, index) => {
        const itemProps = getItemProps({
          item,
          index
        });
        return jsx(MobileListWrapper, {
          children: jsx(MobileListButton, Object.assign({}, itemProps, {
            onClick: () => listItemClick(item),
            variantType: variantType,
            isDropdown: true,
            role: "menuitem"
          }, {
            children: item.title
          }), void 0)
        }, `${new Date().getTime()}${item}${index}`);
      })
    }), void 0) : null]
  }, void 0);
};

const MobileMenu = ({
  issuerLogo,
  logoWidth,
  logoHeight,
  menuAriaLabel,
  tabs,
  handleNavigate,
  activeTab,
  setActiveTab,
  variantType,
  parentActiveTab,
  setParentActiveTab,
  userName,
  isMobile,
  logout
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);
  return jsxs(MobileMenuWrapper, Object.assign({
    variantType: variantType,
    isOpen: menuOpen
  }, {
    children: [jsxs(MobileNavWrapper, Object.assign({
      variantType: variantType,
      isOpen: menuOpen
    }, {
      children: [jsx(MobileMenuButton, Object.assign({
        name: "mobile menu",
        "aria-label": menuAriaLabel,
        onClick: () => setMenuOpen(!menuOpen)
      }, {
        children: jsx(MobileMenuIcon, {
          iconCode: menuOpen ? 'times' : 'bars',
          prefix: "far",
          variantType: variantType
        }, void 0)
      }), void 0), jsx(LogoContainer$2, Object.assign({
        width: logoWidth,
        height: logoHeight
      }, {
        children: jsx(Logo, {
          imageSource: issuerLogo ? issuerLogo : img$2
        }, void 0)
      }), void 0)]
    }), void 0), menuOpen && variantType === 'secondary' ? jsx(PoweredByLogoContainer, {
      children: jsx(PoweredByLumaLogo, {
        isMobile: true
      }, void 0)
    }, void 0) : null, jsxs(MobileTabConatiner, {
      children: [menuOpen && tabs.map(tab => {
        if (isTabDropdown(tab)) {
          return jsx(MobileDropdownTab, {
            tab: tab,
            variantType: variantType,
            activeTab: activeTab,
            setActiveTab: setActiveTab,
            menuOpen: menuOpen,
            setMenuOpen: setMenuOpen,
            handleNavigate: handleNavigate,
            parentActiveTab: parentActiveTab,
            setParentActiveTab: setParentActiveTab,
            activeMobileDropdown: activeMobileDropdown,
            setActiveMobileDropdown: setActiveMobileDropdown
          }, `${new Date().getTime()} ${tab.title}`);
        } else {
          return jsx(MobileTabButton$1, {
            item: tab,
            variantType: variantType,
            activeTab: activeTab,
            setActiveTab: setActiveTab,
            menuOpen: menuOpen,
            setMenuOpen: setMenuOpen,
            handleNavigate: handleNavigate,
            setParentActiveTab: setParentActiveTab
          }, `${new Date().getTime()} ${tab.title}`);
        }
      }), menuOpen ? jsx(ProfileDropdown, {
        userName: userName,
        isMobile: isMobile,
        variantType: variantType,
        logout: logout,
        activeMobileDropdown: activeMobileDropdown,
        setActiveMobileDropdown: setActiveMobileDropdown
      }, void 0) : null]
    }, void 0)]
  }), void 0);
};

const VARIANT_MAP$6 = {
  primary: {
    topNavBackground: colors.blue,
    topNavBorder: colors.blue,
    mobileBorder: '#5a6368',
    accountIconMainColor: '#c4cdd1',
    accountIconActiveColor: ' #007dc2',
    textColor: '#c4cdd1',
    activeTextColor: colors.white,
    activeHighlightColor: ' #007dc2',
    activeFontWeight: '500'
  },
  secondary: {
    topNavBackground: colors.white,
    topNavBorder: '#c4cdd1',
    mobileBorder: '#c4cdd1',
    accountIconMainColor: '#2f3336',
    accountIconActiveColor: ' #a9b3b8',
    textColor: '#2f3336',
    activeTextColor: '#2f3336',
    activeHighlightColor: '#a9b3b8',
    activeFontWeight: '700'
  }
};
const GlobalNavContainer = /*#__PURE__*/styled.nav.withConfig({
  displayName: "GlobalNavstyles__GlobalNavContainer",
  componentId: "sc-7wrpws-0"
})(["display:flex;justify-content:space-between;flex-direction:column;margin-bottom:1px;"]);

const GlobalNav = ({
  userName,
  logout,
  tabs,
  issuerLogo,
  logoWidth,
  logoHeight,
  accountAriaLabel,
  menuAriaLabel,
  handleNavigate
}) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 916);
  const [activeTab, setActiveTab] = useState('');
  const [parentActiveTab, setParentActiveTab] = useState(undefined);
  const variantType = issuerLogo ? 'secondary' : 'primary';
  useEffect(() => {
    const handleResizeWindow = () => setIsMobile(window.innerWidth < 916);

    window.addEventListener('resize', handleResizeWindow);
    return () => {
      window.removeEventListener('resize', handleResizeWindow);
    };
  }, []);
  useEffect(() => {
    const getInitialTabName = () => {
      const pathname = window.location.pathname;

      for (let i = 0; i < tabs.length; i++) {
        const currentObj = tabs[i];

        if (currentObj.route && pathname.startsWith(currentObj.route)) {
          return currentObj.title;
        }

        if (currentObj.title === 'TRADE' && pathname.split('/').includes('secondaries')) {
          return currentObj.title;
        }

        if (currentObj.children) {
          for (let _i = 0; _i < currentObj.children.length; _i++) {
            const currOptionObj = currentObj.children[_i];

            if (currOptionObj.route === pathname) {
              setParentActiveTab(currentObj.title);
              return currOptionObj.title;
            }
          }
        }

        if (pathname.includes('product-details')) {
          return 'LIFECYCLE';
        }
      }

      return 'HOME';
    };

    const pathname = getInitialTabName();
    setActiveTab(pathname);
  }, [tabs]);

  if (isMobile) {
    return jsx(GlobalNavContainer, Object.assign({
      title: "Mobile Navigation"
    }, {
      children: jsx(MobileMenu, {
        variantType: variantType,
        issuerLogo: issuerLogo,
        logoWidth: logoWidth,
        logoHeight: logoHeight,
        menuAriaLabel: menuAriaLabel,
        tabs: tabs,
        activeTab: activeTab,
        setActiveTab: setActiveTab,
        handleNavigate: handleNavigate,
        parentActiveTab: parentActiveTab,
        setParentActiveTab: setParentActiveTab,
        userName: userName,
        isMobile: isMobile,
        logout: logout
      }, void 0)
    }), void 0);
  } else {
    return jsxs(GlobalNavContainer, Object.assign({
      title: "Main Navigation"
    }, {
      children: [jsx(TopNavBar, {
        variantType: variantType,
        issuerLogo: issuerLogo,
        logoWidth: logoWidth,
        logoHeight: logoHeight,
        accountAriaLabel: accountAriaLabel,
        userName: userName,
        isMobile: isMobile,
        logout: logout
      }, void 0), jsx(NavTabBar, {
        tabs: tabs,
        variantType: variantType,
        activeTab: activeTab,
        setActiveTab: setActiveTab,
        parentActiveTab: parentActiveTab,
        setParentActiveTab: setParentActiveTab,
        handleNavigate: handleNavigate
      }, void 0)]
    }), void 0);
  }
};

const NAV_TABS = [{
  title: 'HOME',
  icon: 'tachometer-alt',
  route: '/dashboard'
}, {
  title: 'LEARN',
  icon: 'graduation-cap',
  route: '/learning-center'
}, {
  title: 'CREATE',
  icon: 'hammer',
  children: [{
    title: 'Request History',
    url: 'https://ngportal.lumafintech.com/cdfg/WebPages/home.cfm?section=ProductCreation&'
  }, {
    title: 'Data Reporting',
    url: 'https://ngportal.lumafintech.com/cdfg/WebPages/home.cfm?section=DataReporting&',
    permissions: ['menu.creation_hub.data_reporting']
  }]
}, {
  title: 'MARKETPLACE',
  icon: 'store',
  children: [{
    title: 'Structured Products',
    route: '/product-marketplace/structured-products'
  }, {
    title: 'Order Management',
    route: 'product-marketplace/structured-product-orders'
  }, {
    title: 'Marketplace Settings',
    permissions: ['menu.marketplace.settings'],
    route: '/marketplace-settings'
  }]
}, {
  title: 'LIFECYCLE',
  icon: 'recycle',
  permissions: ['menu.lifecycle_manager'],
  route: '/lifecycle-manager'
}, {
  title: 'TRADE',
  permissions: ['menu.secondaries'],
  route: '/secondaries'
}, {
  title: 'ADMIN',
  icon: 'user-shield',
  permissions: ['menu.admin'],
  children: [{
    title: 'Company Administration',
    route: 'company-administration',
    permissions: ['menu.admin']
  }, {
    title: 'Company Relationship Mapping',
    permissions: ['menu.admin.company_relationship_mapping'],
    route: '/admin/company-administration-relationship-mapping'
  }, {
    title: 'Company Configuration',
    route: '/admin/company-administration-configuration'
  }, {
    title: 'Users',
    permissions: ['menu.admin.users'],
    url: 'https://ngportal.lumafintech.com/cdfg/app/AccountsContainer.cfm?'
  }, {
    title: 'Web Content',
    permissions: ['menu.admin.web_content'],
    url: 'https://ngportal.lumafintech.com/cdfg/WebPages/salesmarketingspace/webcontent.cfm?'
  }, {
    title: 'Program Issuer Map',
    permissions: ['menu.admin.program_issuer_map'],
    url: 'https://ngportal.lumafintech.com/cdfg/WebPages/salesmarketingspace/programtoissuermap.cfm?'
  }, {
    title: 'Focus List Video',
    permissions: ['menu.admin.focus_list_video'],
    url: 'https://ngportal.lumafintech.com/cdfg/WebPages/inventory/videostructurecontent.cfm?'
  }, {
    title: 'Marketing Email Tracking Upload',
    permissions: ['menu.admin.marketing_email_tracking_upload'],
    url: 'https://ngportal.lumafintech.com/cdfg/WebPages/home.cfm?section=MarketingEmailTracking&'
  }, {
    title: 'All Maturing Products',
    permissions: ['menu.admin.all_maturing_products'],
    url: 'https://ngportal.lumafintech.com/cdfg/WebPages/home.cfm?section=AllMaturingProducts&'
  }, {
    title: 'Compliance Trainings Export',
    permissions: ['menu.admin.compliance_trainings_export'],
    url: 'https://ngportal.lumafintech.com/cdfg/WebPages/home.cfm?section=ComplainceTrainingExport&'
  }, {
    title: 'Comparable Structure Types Configuration',
    permissions: ['menu.admin.comparable_structure_types_configuration'],
    url: 'https://ngportal.lumafintech.com/cdfg/WebPages/home.cfm?section=ComparableStructureConfiguration&'
  }, {
    title: 'PCT Issuer Preferences',
    permissions: ['menu.admin.pct_issuer_preferences'],
    url: 'https://ngportal.lumafintech.com/cdfg/WebPages/home.cfm?section=IssuerPreference&'
  }, {
    title: 'PCT Client Preferences',
    permissions: ['menu.admin.pct_client_preferences'],
    url: 'https://ngportal.lumafintech.com/cdfg/WebPages/home.cfm?section=ClientPreference&'
  }, {
    title: 'Clients',
    permissions: ['menu.admin.clients'],
    url: 'https://ngportal.lumafintech.com/cdfg/WebPages/clientsContainer.cfm?'
  }, {
    title: 'Daily Orders Export',
    permissions: ['menu.admin.daily_orders_export'],
    url: 'https://ngportal.lumafintech.com/cdfg/WebPages/ordersExport.cfm?'
  }, {
    title: 'Order Email Notifications',
    permissions: ['menu.admin.order_email_notifications'],
    url: 'https://ngportal.lumafintech.com/cdfg/app/emailNotificationContainer.cfm?'
  }, {
    title: 'File Upload',
    permissions: ['menu.admin.file_upload'],
    route: '/admin/file-upload'
  }, {
    title: 'Wholesaler Definition',
    permissions: ['menu.admin.wholesaler_definition'],
    route: '/admin/wholesaler-definition'
  }, {
    title: 'Wholesaler Mapping',
    permissions: ['menu.admin.wholesaler_mapping'],
    route: '/admin/wholesaler-mapping'
  }, {
    title: 'Disclosure Document Upload',
    permission: 'form.order.admin_fields',
    route: 'product-marketplace/disclosure-document-upload'
  }, {
    title: 'Market Data Maintainence',
    permissions: ['menu.admin'],
    route: '/admin/market-data-maintainence'
  }, {
    title: 'Issuer Confirmation',
    route: '/admin/issuer-confirmation'
  }, {
    title: 'Email Configuration',
    permissions: ['menu.admin'],
    route: '/admin/email-config'
  }, {
    title: 'Find RFQ',
    permissions: ['menu.admin'],
    route: '/admin/find-rfq'
  }, {
    title: 'Add CH Request to PDW',
    permissions: ['menu.admin'],
    url: 'https://ngportal.lumafintech.com/cdfg/WebPages/adminAddProduct.cfm?'
  }, {
    title: 'Product Maintenance',
    permissions: ['menu.admin.product_maintenance'],
    route: '/admin/product-maintenance'
  }, {
    title: 'Notifications',
    // icon: 'envelope',
    permissions: ['menu.notification_center'],
    route: '/notification-center'
  }]
}];
const ADMIN_TABS = [{
  title: 'Company Maintenance',
  children: [{
    title: 'Company Administration',
    route: 'company-administration',
    permissions: ['menu.admin']
  }, {
    title: 'Company Configuration',
    route: '/admin/company-administration-configuration'
  }, {
    title: 'Company Relationship Mapping',
    permissions: ['menu.admin.company_relationship_mapping'],
    route: '/admin/company-administration-relationship-mapping'
  }]
}, {
  title: 'User Administration',
  children: [{
    title: 'Users',
    permissions: ['menu.admin.users'],
    url: 'https://ngportal.lumafintech.com/cdfg/app/AccountsContainer.cfm?'
  }]
}, {
  title: 'Product Maintenance',
  children: [{
    title: 'Product Maintenance',
    permissions: ['menu.admin.product_maintenance'],
    route: '/admin/product-maintenance'
  }, {
    title: 'Issuer Confirmation',
    route: '/admin/issuer-confirmation'
  }, {
    title: 'Market Data Maintainence',
    permissions: ['menu.admin'],
    route: '/admin/market-data-maintainence'
  }, {
    title: 'File Upload',
    permissions: ['menu.admin.file_upload'],
    route: '/admin/file-upload'
  }, {
    title: 'Add CH Request to PDW',
    permissions: ['menu.admin'],
    url: 'https://ngportal.lumafintech.com/cdfg/WebPages/adminAddProduct.cfm?'
  }, {
    title: 'Find RFQ',
    permissions: ['menu.admin'],
    route: '/admin/find-rfq'
  }]
}, {
  title: 'Creation Hub Settings',
  children: [{
    title: 'PCT Issuer Preferences',
    permissions: ['menu.admin.pct_issuer_preferences'],
    url: 'https://ngportal.lumafintech.com/cdfg/WebPages/home.cfm?section=IssuerPreference&'
  }, {
    title: 'PCT Client Preferences',
    permissions: ['menu.admin.pct_client_preferences'],
    url: 'https://ngportal.lumafintech.com/cdfg/WebPages/home.cfm?section=ClientPreference&'
  }]
}, {
  title: 'Other',
  children: [{
    title: 'Web Content',
    permissions: ['menu.admin.web_content'],
    url: 'https://ngportal.lumafintech.com/cdfg/WebPages/salesmarketingspace/webcontent.cfm?'
  }, {
    title: 'Program Issuer Map',
    permissions: ['menu.admin.program_issuer_map'],
    url: 'https://ngportal.lumafintech.com/cdfg/WebPages/salesmarketingspace/programtoissuermap.cfm?'
  }, {
    title: 'Focus List Video',
    permissions: ['menu.admin.focus_list_video'],
    url: 'https://ngportal.lumafintech.com/cdfg/WebPages/inventory/videostructurecontent.cfm?'
  }, {
    title: 'Marketing Email Tracking Upload',
    permissions: ['menu.admin.marketing_email_tracking_upload'],
    url: 'https://ngportal.lumafintech.com/cdfg/WebPages/home.cfm?section=MarketingEmailTracking&'
  }, {
    title: 'All Maturing Products',
    permissions: ['menu.admin.all_maturing_products'],
    url: 'https://ngportal.lumafintech.com/cdfg/WebPages/home.cfm?section=AllMaturingProducts&'
  }, {
    title: 'Compliance Trainings Export',
    permissions: ['menu.admin.compliance_trainings_export'],
    url: 'https://ngportal.lumafintech.com/cdfg/WebPages/home.cfm?section=ComplainceTrainingExport&'
  }, {
    title: 'Comparable Structure Types Configuration',
    permissions: ['menu.admin.comparable_structure_types_configuration'],
    url: 'https://ngportal.lumafintech.com/cdfg/WebPages/home.cfm?section=ComparableStructureConfiguration&'
  }, {
    title: 'Clients',
    permissions: ['menu.admin.clients'],
    url: 'https://ngportal.lumafintech.com/cdfg/WebPages/clientsContainer.cfm?'
  }, {
    title: 'Daily Orders Export',
    permissions: ['menu.admin.daily_orders_export'],
    url: 'https://ngportal.lumafintech.com/cdfg/WebPages/ordersExport.cfm?'
  }, {
    title: 'Order Email Notifications',
    permissions: ['menu.admin.order_email_notifications'],
    url: 'https://ngportal.lumafintech.com/cdfg/app/emailNotificationContainer.cfm?'
  }, {
    title: 'Wholesaler Definition',
    permissions: ['menu.admin.wholesaler_definition'],
    route: '/admin/wholesaler-definition'
  }, {
    title: 'Wholesaler Mapping',
    permissions: ['menu.admin.wholesaler_mapping'],
    route: '/admin/wholesaler-mapping'
  }, {
    title: 'Disclosure Document Upload',
    permissions: ['form.order.admin_fields'],
    route: 'product-marketplace/disclosure-document-upload'
  }, {
    title: 'Email Configuration',
    permissions: ['menu.admin'],
    route: '/admin/email-config'
  }, {
    title: 'Notifications',
    // icon: 'envelope',
    permissions: ['menu.notification_center'],
    route: '/notification-center'
  }]
}];

const loadDefaultNavTabs = frontEndLibrary => [buildHomeTab(frontEndLibrary, [])];
const buildHomeTab = (frontEndLibrary, userPermissions) => Object.assign({
  title: 'HOME',
  icon: 'tachometer-alt'
}, determineNavRouteOrUrl(frontEndLibrary, ROUTE_KEYS.HOME, userPermissions));
const buildNavTabs = (userPermissions, userTrainingDataProductTypes, pricingToolType, frontEndLibrary, isProduction, company) => {
  const allNavRoutes = [buildHomeTab(frontEndLibrary, userPermissions), Object.assign({
    title: 'LEARN',
    icon: 'graduation-cap',
    permissions: [WidgetPermissions.AccessLearningCenter]
  }, determineNavRouteOrUrl(frontEndLibrary, ROUTE_KEYS.LEARN, userPermissions)), buildCreateNavTab(pricingToolType, frontEndLibrary, userPermissions), {
    title: 'MARKETPLACE',
    icon: 'store',
    children: [...generateDynamicMarketplaceRoutes(userTrainingDataProductTypes, frontEndLibrary, userPermissions), Object.assign({
      title: 'Orders',
      permissions: [WidgetPermissions.MenuMarketplaceAnnuity]
    }, determineNavRouteOrUrl(frontEndLibrary, ROUTE_KEYS.ORDERS, userPermissions)), Object.assign({
      title: 'Account Upload',
      permissions: [WidgetPermissions.MenuPmConfigurationsKycRulesUpload]
    }, determineNavRouteOrUrl(frontEndLibrary, ROUTE_KEYS.ACCOUNT_UPLOAD, userPermissions)), Object.assign({
      title: 'Wholesaler Mapping',
      permissions: [WidgetPermissions.MenuPmWholesalerMapping]
    }, determineNavRouteOrUrl(frontEndLibrary, ROUTE_KEYS.WHOLESALER_MAPPING, userPermissions))]
  }, {
    title: 'LIFECYCLE',
    icon: 'recycle',
    children: [Object.assign({
      title: 'Lifecycle Manager',
      icon: 'recycle',
      permissions: [WidgetPermissions.MenuLifecycleManager]
    }, determineNavRouteOrUrl(FrontEndLibraries.ANGULAR, ROUTE_KEYS.LIFECYCLE, userPermissions)), Object.assign({
      title: 'Lifecycle 2.0 Beta',
      permissions: [WidgetPermissions.MenuLifecycleManager2Beta]
    }, determineNavRouteOrUrl(FrontEndLibraries.REACT, ROUTE_KEYS.LIFECYCLE, userPermissions)), Object.assign({
      title: 'Event Notifications',
      permissions: [WidgetPermissions.MenuPmWholesalerMapping]
    }, determineNavRouteOrUrl(frontEndLibrary, ROUTE_KEYS.EVENT_NOTIFICATIONS, userPermissions))]
  }, Object.assign({
    title: ROUTE_KEYS.TRADE,
    permissions: [WidgetPermissions.MenuSecondaries]
  }, determineNavRouteOrUrl(frontEndLibrary, ROUTE_KEYS.TRADE, userPermissions)), {
    title: 'ADMIN',
    icon: 'user-shield',
    permissions: [WidgetPermissions.MenuAdmin],
    children: [Object.assign({
      title: ROUTE_KEYS.COMPANY_ADMIN,
      permissions: [WidgetPermissions.MenuAdmin]
    }, determineNavRouteOrUrl(frontEndLibrary, ROUTE_KEYS.COMPANY_ADMIN, userPermissions)), Object.assign({
      title: 'Company Relationship Mapping',
      permissions: [WidgetPermissions.MenuAdminCompanyRelationshipMapping]
    }, determineNavRouteOrUrl(frontEndLibrary, ROUTE_KEYS.COMPANY_RELATIONSHIP, userPermissions)), Object.assign({
      title: 'Company Configuration'
    }, determineNavRouteOrUrl(frontEndLibrary, ROUTE_KEYS.COMPANY_CONFIG, userPermissions)), {
      title: 'Users',
      permissions: [WidgetPermissions.MenuAdminUsers],
      url: getColdFusionLinkAppVersion('AccountsContainer', null)
    }, {
      title: 'Return Description Tool',
      permissions: [WidgetPermissions.MenuAdminReturnDescription],
      url: getColdFusionLink('productComparisionReturnDescription', null)
    }, {
      title: 'Web Content',
      permissions: [WidgetPermissions.MenuAdminWebContent],
      url: getColdFusionLink('salesmarketingspace/webcontent', null)
    }, {
      title: 'Program Issuer Map',
      permissions: [WidgetPermissions.MenuAdminProgramIssuerMap],
      url: getColdFusionLink('salesmarketingspace/programtoissuermap', null)
    }, {
      title: 'Focus List Video',
      permissions: [WidgetPermissions.MenuAdminWebFocusListVideo],
      url: getColdFusionLink('inventory/videostructurecontent', null)
    }, {
      title: 'Marketing Email Tracking Upload',
      permissions: [WidgetPermissions.MenuAdminMarketingEmailTrackingUpload],
      url: getColdFusionLink('home', 'MarketingEmailTracking')
    }, {
      title: 'All Maturing Products',
      permissions: [WidgetPermissions.MenuAdminAllMaturingProducts],
      url: getColdFusionLink('home', 'AllMaturingProducts')
    }, {
      title: 'Compliance Trainings Export',
      permissions: [WidgetPermissions.MenuAdminComplianceTrainingsExport],
      url: getColdFusionLink('home', 'ComplainceTrainingExport')
    }, {
      title: 'Comparable Structure Types Configuration',
      permissions: [WidgetPermissions.MenuAdminComparableStructureTypesConfiguration],
      url: getColdFusionLink('home', 'ComparableStructureConfiguration')
    }, {
      title: 'PCT Issuer Preferences',
      permissions: [WidgetPermissions.MenuAdminPCTIssuerPreferences],
      url: getColdFusionLink('home', 'IssuerPreference')
    }, {
      title: 'PCT Client Preferences',
      permissions: [WidgetPermissions.MenuAdminPCTClientPreferences],
      url: getColdFusionLink('home', 'ClientPreference')
    }, {
      title: 'Clients',
      permissions: [WidgetPermissions.MenuAdminClients],
      url: getColdFusionLink('clientsContainer', null)
    }, {
      title: 'Daily Orders Export',
      permissions: [WidgetPermissions.MenuAdminDailyOrdersExport],
      url: getColdFusionLink('ordersExport', null)
    }, {
      title: 'Order Email Notifications',
      permissions: [WidgetPermissions.MenuAdminOrderEmailNotifications],
      url: getColdFusionLinkAppVersion('emailNotificationContainer', null)
    }, Object.assign({
      title: 'Historical Emails',
      permissions: [WidgetPermissions.MenuAdminHistoricalEmails]
    }, determineNavRouteOrUrl(frontEndLibrary, ROUTE_KEYS.HISTORICAL_EMAILS, userPermissions)), Object.assign({
      title: 'File Upload',
      permissions: [WidgetPermissions.MenuAdminFileUpoad]
    }, determineNavRouteOrUrl(frontEndLibrary, ROUTE_KEYS.FILE_UPLOAD, userPermissions)), Object.assign({
      title: 'Audit Records',
      permissions: [WidgetPermissions.MenuAdminHistoricalEmails]
    }, determineNavRouteOrUrl(frontEndLibrary, ROUTE_KEYS.AUDIT_RECORDS, userPermissions)), Object.assign({
      title: 'Wholesaler Definition',
      permissions: [WidgetPermissions.MenuAdminWholesalerDefinition]
    }, determineNavRouteOrUrl(frontEndLibrary, ROUTE_KEYS.WHOLESALER_DEFINITION, userPermissions)), Object.assign({
      title: 'Wholesaler Mapping',
      permissions: [WidgetPermissions.MenuAdminWholesalerMapping]
    }, determineNavRouteOrUrl(frontEndLibrary, ROUTE_KEYS.WHOLESALER_MAPPING, userPermissions)), Object.assign({
      title: 'Product Upload',
      permissions: [WidgetPermissions.ProductCenter]
    }, determineNavRouteOrUrl(frontEndLibrary, ROUTE_KEYS.PRODUCT_UPLOAD, userPermissions)), Object.assign({
      title: 'Disclosure Document Upload',
      permissions: [WidgetPermissions.MarketplaceAdminFields]
    }, determineNavRouteOrUrl(frontEndLibrary, ROUTE_KEYS.DISCLOSURE_DOC_UPLOAD, userPermissions)), Object.assign({
      title: 'Market Data Maintainence',
      permissions: [WidgetPermissions.MenuAdmin]
    }, determineNavRouteOrUrl(frontEndLibrary, ROUTE_KEYS.MARKET_DATA_MAINTENANCE, userPermissions)), Object.assign({
      title: 'Issuer Confirmation'
    }, determineNavRouteOrUrl(frontEndLibrary, ROUTE_KEYS.ISSUER_CONFIRMATION, userPermissions)), Object.assign({
      title: 'Email Configuration',
      permissions: [WidgetPermissions.MenuAdmin]
    }, determineNavRouteOrUrl(frontEndLibrary, ROUTE_KEYS.EMAIL_CONFIG, userPermissions)), Object.assign({
      title: 'Find RFQ',
      permissions: [WidgetPermissions.MenuAdmin]
    }, determineNavRouteOrUrl(frontEndLibrary, ROUTE_KEYS.FIND_RFQ, userPermissions)), {
      title: 'Add CH Request to PDW',
      permissions: [WidgetPermissions.MenuAdmin],
      url: getColdFusionLink('adminAddProduct', null)
    }, Object.assign({
      title: 'Product Maintenance',
      permissions: [WidgetPermissions.ProductMaintenance]
    }, determineNavRouteOrUrl(frontEndLibrary, ROUTE_KEYS.PRODUCT_MAINTENANCE, userPermissions)), Object.assign({
      title: 'Notifications',
      permissions: [WidgetPermissions.MenuNotificationCenter]
    }, determineNavRouteOrUrl(frontEndLibrary, ROUTE_KEYS.NOTIFICATIONS, userPermissions)), Object.assign({
      title: 'Event Notification',
      permissions: [WidgetPermissions.MenuAdmin]
    }, determineNavRouteOrUrl(frontEndLibrary, ROUTE_KEYS.EVENT_NOTIFICATIONS_ADMIN, userPermissions))]
  }];
  return filterNavTabs(allNavRoutes, userPermissions, isProduction, pricingToolType, company);
};

const generateDynamicMarketplaceRoutes = (productTypes, frontEndLibrary, userPermissions) => {
  const spProductRoutes = Object.assign({
    title: 'Structured Products'
  }, determineNavRouteOrUrl(frontEndLibrary, ROUTE_KEYS.STRUCTURED_PRODUCTS, userPermissions));
  const annuityProductLink = Object.assign({
    title: 'Annuities',
    permissions: [WidgetPermissions.MenuMarketplaceAnnuity]
  }, determineNavRouteOrUrl(frontEndLibrary, ROUTE_KEYS.ANNUITIES, userPermissions));
  const spProductOrders = Object.assign({
    title: 'Order Management'
  }, determineNavRouteOrUrl(frontEndLibrary, ROUTE_KEYS.ORDER_MANAGEMENT, userPermissions));
  const marketplaceSettingsLink = Object.assign({
    title: 'Marketplace Settings',
    permissions: [WidgetPermissions.MenuMarketplaceSettings]
  }, determineNavRouteOrUrl(frontEndLibrary, ROUTE_KEYS.MARKETPLACE_SETTINGS, userPermissions));

  if (isAnnuityOnly(productTypes)) {
    return [annuityProductLink];
  } else if (isStructuredProductsOnly(productTypes)) {
    return [spProductRoutes, spProductOrders, marketplaceSettingsLink];
  } else {
    return [spProductRoutes, annuityProductLink, spProductOrders, marketplaceSettingsLink];
  }
};

const buildCreateNavTab = (pricingToolType, frontEndLibrary, userPermissions) => {
  const baseMenuLink = {
    title: 'CREATE',
    icon: 'hammer'
  };

  if (pricingToolType === 'CALENDAR_DEAL_PRICING_TOOL') {
    return Object.assign(Object.assign({}, baseMenuLink), determineNavRouteOrUrl(frontEndLibrary, ROUTE_KEYS.CREATE_CALENDAR, userPermissions));
  } else if (pricingToolType === 'LUMA_LITE_PRICING_TOOL') {
    return Object.assign(Object.assign({}, baseMenuLink), determineNavRouteOrUrl(frontEndLibrary, ROUTE_KEYS.CREATE_FORM, userPermissions));
  } else if (pricingToolType === 'CREATION_HUB') {
    return Object.assign(Object.assign({}, baseMenuLink), determineNavRouteOrUrl(frontEndLibrary, ROUTE_KEYS.CREATE, userPermissions));
  } else {
    // ColdFusion Creation Hub
    return Object.assign(Object.assign({}, baseMenuLink), {
      children: [{
        title: 'Request History',
        url: getColdFusionLink('home', 'ProductCreation')
      }, {
        title: 'Data Reporting',
        url: getColdFusionLink('home', 'DataReporting'),
        permissions: [WidgetPermissions.MenuCreationHubDataReporting]
      }]
    });
  }
};

const buildAdminOptions = (userPermissions, frontEndLibrary, isProduction, pricingToolType) => {
  const adminOptions = [{
    title: 'Company Maintenance',
    permissions: [WidgetPermissions.MenuAdmin],
    children: [Object.assign({
      title: 'Company Administration',
      permissions: [WidgetPermissions.MenuAdmin]
    }, determineNavRouteOrUrl(frontEndLibrary, ROUTE_KEYS.COMPANY_ADMIN, userPermissions)), Object.assign({
      title: 'Company Configuration'
    }, determineNavRouteOrUrl(frontEndLibrary, ROUTE_KEYS.COMPANY_CONFIG, userPermissions)), Object.assign({
      title: 'Company Relationship Mapping',
      permissions: [WidgetPermissions.MenuAdminCompanyRelationshipMapping]
    }, determineNavRouteOrUrl(frontEndLibrary, ROUTE_KEYS.COMPANY_RELATIONSHIP, userPermissions))]
  }, {
    title: 'User Administration',
    permissions: [WidgetPermissions.MenuAdmin],
    children: [{
      title: 'Users',
      permissions: [WidgetPermissions.MenuAdminUsers],
      url: getColdFusionLinkAppVersion('AccountsContainer', null)
    }]
  }, {
    title: 'Product Maintenance',
    permissions: [WidgetPermissions.MenuAdmin],
    children: [Object.assign({
      title: 'Product Maintenance',
      permissions: [WidgetPermissions.ProductMaintenance]
    }, determineNavRouteOrUrl(frontEndLibrary, ROUTE_KEYS.PRODUCT_MAINTENANCE, userPermissions)), Object.assign({
      title: 'Issuer Confirmation'
    }, determineNavRouteOrUrl(frontEndLibrary, ROUTE_KEYS.ISSUER_CONFIRMATION, userPermissions)), Object.assign({
      title: 'Market Data Maintainence',
      permissions: [WidgetPermissions.MenuAdmin]
    }, determineNavRouteOrUrl(frontEndLibrary, ROUTE_KEYS.MARKET_DATA_MAINTENANCE, userPermissions)), Object.assign({
      title: 'File Upload',
      permissions: [WidgetPermissions.MenuAdminFileUpoad]
    }, determineNavRouteOrUrl(frontEndLibrary, ROUTE_KEYS.FILE_UPLOAD, userPermissions)), {
      title: 'Add CH Request to PDW',
      permissions: [WidgetPermissions.MenuAdmin],
      url: getColdFusionLink('adminAddProduct', null)
    }, Object.assign({
      title: 'Find RFQ',
      permissions: [WidgetPermissions.MenuAdmin]
    }, determineNavRouteOrUrl(frontEndLibrary, ROUTE_KEYS.FIND_RFQ, userPermissions))]
  }, {
    title: 'Creation Hub Settings',
    permissions: [WidgetPermissions.MenuAdmin],
    children: [{
      title: 'PCT Issuer Preferences',
      permissions: [WidgetPermissions.MenuAdminPCTIssuerPreferences],
      url: getColdFusionLink('home', 'IssuerPreference')
    }, {
      title: 'PCT Client Preferences',
      permissions: [WidgetPermissions.MenuAdminPCTClientPreferences],
      url: getColdFusionLink('home', 'ClientPreference')
    }]
  }, {
    title: 'Other',
    permissions: [WidgetPermissions.MenuAdmin],
    children: [{
      title: 'Web Content',
      permissions: [WidgetPermissions.MenuAdminWebContent],
      url: getColdFusionLink('salesmarketingspace/webcontent', null)
    }, {
      title: 'Program Issuer Map',
      permissions: [WidgetPermissions.MenuAdminProgramIssuerMap],
      url: getColdFusionLink('salesmarketingspace/programtoissuermap', null)
    }, {
      title: 'Focus List Video',
      permissions: [WidgetPermissions.MenuAdminWebFocusListVideo],
      url: getColdFusionLink('inventory/videostructurecontent', null)
    }, {
      title: 'Focus List Video',
      permissions: [WidgetPermissions.MenuAdminWebFocusListVideo],
      url: getColdFusionLink('inventory/videostructurecontent', null)
    }, {
      title: 'Marketing Email Tracking Upload',
      permissions: [WidgetPermissions.MenuAdminMarketingEmailTrackingUpload],
      url: getColdFusionLink('home', 'MarketingEmailTracking')
    }, {
      title: 'All Maturing Products',
      permissions: [WidgetPermissions.MenuAdminAllMaturingProducts],
      url: getColdFusionLink('home', 'AllMaturingProducts')
    }, {
      title: 'Compliance Trainings Export',
      permissions: [WidgetPermissions.MenuAdminComplianceTrainingsExport],
      url: getColdFusionLink('home', 'ComplainceTrainingExport')
    }, {
      title: 'Comparable Structure Types Configuration',
      permissions: [WidgetPermissions.MenuAdminComparableStructureTypesConfiguration],
      url: getColdFusionLink('home', 'ComparableStructureConfiguration')
    }, {
      title: 'Clients',
      permissions: [WidgetPermissions.MenuAdminClients],
      url: getColdFusionLink('clientsContainer', null)
    }, {
      title: 'Daily Orders Export',
      permissions: [WidgetPermissions.MenuAdminDailyOrdersExport],
      url: getColdFusionLink('ordersExport', null)
    }, {
      title: 'Order Email Notifications',
      permissions: [WidgetPermissions.MenuAdminOrderEmailNotifications],
      url: getColdFusionLinkAppVersion('emailNotificationContainer', null)
    }, Object.assign({
      title: 'Wholesaler Definition',
      permissions: [WidgetPermissions.MenuAdminWholesalerDefinition]
    }, determineNavRouteOrUrl(frontEndLibrary, ROUTE_KEYS.WHOLESALER_DEFINITION, userPermissions)), Object.assign({
      title: 'Wholesaler Mapping',
      permissions: [WidgetPermissions.MenuAdminWholesalerMapping]
    }, determineNavRouteOrUrl(frontEndLibrary, ROUTE_KEYS.WHOLESALER_MAPPING, userPermissions)), Object.assign({
      title: 'Disclosure Document Upload',
      permissions: [WidgetPermissions.MarketplaceAdminFields]
    }, determineNavRouteOrUrl(frontEndLibrary, ROUTE_KEYS.DISCLOSURE_DOC_UPLOAD, userPermissions)), Object.assign({
      title: 'Email Configuration',
      permissions: [WidgetPermissions.MenuAdmin]
    }, determineNavRouteOrUrl(frontEndLibrary, ROUTE_KEYS.EMAIL_CONFIG, userPermissions)), Object.assign({
      title: 'Notifications',
      permissions: [WidgetPermissions.MenuNotificationCenter]
    }, determineNavRouteOrUrl(frontEndLibrary, ROUTE_KEYS.NOTIFICATIONS, userPermissions))]
  }];
  return filterNavTabs(adminOptions, userPermissions, isProduction, pricingToolType);
};

const Portal = ({
  id: _id = 'body',
  children
}) => {
  return /*#__PURE__*/createPortal(children, document.getElementById(_id) || document.body);
};

const ModalBackground = /*#__PURE__*/styled.div.withConfig({
  displayName: "Modalstyles__ModalBackground",
  componentId: "sc-19w83vb-0"
})(["background-color:", ";height:100%;font-family:'IBM Plex Sans';left:", ";overflow:auto;position:", ";top:", ";width:100%;", ";"], props => props.background ? props.background : 'rgba(47, 54, 65, 0.9)', props => props.left ? props.left : '0', props => props.position ? props.position : 'fixed', props => props.top ? props.top : '0', props => props.isOpen ? css(["display:flex;"]) : css(["display:none;"]));
const ModalContainer = /*#__PURE__*/styled.div.withConfig({
  displayName: "Modalstyles__ModalContainer",
  componentId: "sc-19w83vb-1"
})(["align-items:center;box-sizing:border-box;display:flex;flex-direction:column;justify-content:center;margin:auto;"]);

const Modal = ({
  id,
  children,
  isOpen: _isOpen = false,
  background,
  top,
  left,
  position
}) => {
  return jsx(Portal, Object.assign({
    id: id
  }, {
    children: jsx(ModalBackground, Object.assign({
      isOpen: _isOpen,
      background: background,
      top: top,
      left: left,
      position: position
    }, {
      children: jsx(ModalContainer, {
        children: children
      }, void 0)
    }), void 0)
  }), void 0);
};

const screenSizes = {
  largeDesktop: {
    min: 1440
  },
  desktop: {
    max: 1439,
    min: 769
  },
  tablet: {
    max: 768,
    min: 561
  },
  phablet: {
    max: 560,
    min: 349
  },
  mobile: {
    max: 348
  }
};
const breakpoints = {
  largeDesktop: `(min-width: ${screenSizes.largeDesktop.min}px)`,
  desktop: `(max-width: ${screenSizes.desktop.max}px) and (min-width: ${screenSizes.desktop.min}px)`,
  tablet: `(max-width: ${screenSizes.tablet.max}px) and (min-width: ${screenSizes.tablet.min}px)`,
  phablet: `(max-width: ${screenSizes.phablet.max}px) and (min-width: ${screenSizes.phablet.min}px)`,
  mobile: `(max-width: ${screenSizes.mobile.max}px)`
};

const LumaColor = {
  ACCENT_10: '#faffe3',
  ACCENT_20: '#eff9c3',
  ACCENT_30: '#e1f0a2',
  ACCENT_40: '#cee180',
  ACCENT_50: '#aac743',
  ACCENT_60: '#95ab3c',
  ACCENT_70: '#708420',
  ACCENT_80: '#4a5a0c',
  ACCENT_90: '#273201',
  COLOR_SYSTEM_BORDER: 'rgba(85, 77, 86, 0.2)',
  COLOR_SYSTEM_COLOR: '#979197',
  COLOR_SYSTEM_FONT: '#554d56',
  NEGATIVE_10: '#f4d4d5',
  NEGATIVE_20: '#efacad',
  NEGATIVE_30: '#e68485',
  NEGATIVE_40: '#d95d5e',
  NEGATIVE_50: '#b62a27',
  NEGATIVE_60: '#961b1e',
  NEGATIVE_70: '#831518',
  NEGATIVE_80: '#5c0b0b',
  NEGATIVE_90: '#341011',
  NEUTRAL_00_WHITE: '#fff',
  NEUTRAL_10: '#f2f4f5',
  NEUTRAL_20: '#e7ecee',
  NEUTRAL_30: '#d8dfe2',
  NEUTRAL_40: '#c4cdd1',
  NEUTRAL_50: '#a9b3b8',
  NEUTRAL_60: '#858f93',
  NEUTRAL_70: '#5a6368',
  NEUTRAL_75: '#454b4e',
  NEUTRAL_80: '#2f3336',
  NEUTRAL_85: '#1a1d1f',
  NEUTRAL_90: '#070708',
  POSITIVE_10: '#eef4db',
  POSITIVE_20: '#d5e6aa',
  POSITIVE_30: '#bbd97e',
  POSITIVE_40: '#9fcd5a',
  POSITIVE_50: '#82c241',
  POSITIVE_60: '#65a343',
  POSITIVE_70: '#487939',
  POSITIVE_80: '#314c22',
  POSITIVE_90: '#192313',
  PRIMARY_10: '#e0f4ff',
  PRIMARY_20: '#a0dcf8',
  PRIMARY_30: '#61c0ed',
  PRIMARY_40: '#26a0dc',
  PRIMARY_50: '#007dc2',
  PRIMARY_60: '#02629d',
  PRIMARY_70: '#004570',
  PRIMARY_80_DAINTREE: '#00263e',
  PRIMARY_90: '#00090f',
  WARNING_10: '#fbf7cc',
  WARNING_20: '#f7e78a',
  WARNING_30: '#efdb51',
  WARNING_40: '#dfcb22',
  WARNING_50: '#c9b82d',
  WARNING_60: '#a99e34',
  WARNING_70: '#847c30',
  WARNING_80: '#5a5624',
  WARNING_90: '#333115',
  DRAWER_BACKGROUND: 'rgba(0, 0, 0, 0.5)'
};

const slideInRight = /*#__PURE__*/keyframes(["0%{transform:translate3d(105%,0,0);}to{transform:translate3d(0,0,0);}"]);
const slideOutRight = /*#__PURE__*/keyframes(["0%{transform:translateZ(0);-webkit-transform:translateZ(0);}to{transform:translate3d(105%,0,0);-webkit-transform:translate3d(105%,0,0);}"]);
const DrawerBackground = /*#__PURE__*/styled.div.withConfig({
  displayName: "Drawerstyles__DrawerBackground",
  componentId: "sc-704h1g-0"
})(["background-color:", ";height:100%;font-family:'IBM Plex Sans';left:0;position:fixed;top:0;width:100%;flex-direction:row-reverse;display:", ";"], props => props.hasOverlay ? `${LumaColor.DRAWER_BACKGROUND}` : 'transparent', props => props.isOpen ? 'flex' : 'none');
const DrawerContainer = /*#__PURE__*/styled.div.withConfig({
  displayName: "Drawerstyles__DrawerContainer",
  componentId: "sc-704h1g-1"
})(["animation:", " box-sizing:border-box;display:flex;flex-direction:column;background-color:", ";height:100%;width:40rem;position:relative;box-shadow:0 0 0.625rem 0 ", ";"], props => props.onToggle ? css(["", " 0.5s cubic-bezier(0.76,0.08,0.71,0.95);animation-fill-mode:both;"], slideInRight) : css(["", " 0.25s cubic-bezier(0.76,0.08,0.71,0.95);animation-fill-mode:both;"], slideOutRight), LumaColor.NEUTRAL_00_WHITE, LumaColor.DRAWER_BACKGROUND);
const CloseIconWrapper = /*#__PURE__*/styled.div.withConfig({
  displayName: "Drawerstyles__CloseIconWrapper",
  componentId: "sc-704h1g-2"
})(["position:fixed;top:0;right:0;padding:1rem 1.5rem 0 0;z-index:1;@media ", "{margin-top:3.875rem;}:hover{cursor:pointer;}"], breakpoints.tablet);
const CloseIcon = /*#__PURE__*/styled(Icon$1).withConfig({
  displayName: "Drawerstyles__CloseIcon",
  componentId: "sc-704h1g-3"
})(["height:1.875rem;color:", ";"], LumaColor.NEUTRAL_80);

const Drawer = ({
  id,
  children,
  isOpen: _isOpen = false,
  closeDrawer: _closeDrawer = () => {
    /* do nothing */
  },
  hasOverlay: _hasOverlay = true
}) => {
  const [onToggle, setOnToggle] = useState(false);
  const reqElement = useRef(null);

  const escFunction = event => {
    event.key === 'Escape' && animateCloseDrawer();
  };

  const clickBackground = event => {
    const target = event.target;

    if (target.children[0] === reqElement.current) {
      animateCloseDrawer();
    }
  };

  useEffect(() => {
    setOnToggle(_isOpen);
  }, [_isOpen]);
  useEffect(() => {
    document.addEventListener('keydown', escFunction, false);
    return () => {
      document.removeEventListener('keydown', escFunction, false);
    };
  });

  const animateCloseDrawer = () => {
    /* this function allows for the animation to complete before the drawer closes */
    setOnToggle(false);
    setTimeout(() => _closeDrawer(), 300);
  };

  return jsx(Portal, Object.assign({
    id: id
  }, {
    children: jsx(DrawerBackground, Object.assign({
      hasOverlay: _hasOverlay,
      isOpen: _isOpen,
      onClick: event => clickBackground(event)
    }, {
      children: jsxs(DrawerContainer, Object.assign({
        onToggle: onToggle,
        ref: reqElement
      }, {
        children: [jsx(CloseIconWrapper, Object.assign({
          onClick: animateCloseDrawer
        }, {
          children: jsx(CloseIcon, {
            iconCode: "close"
          }, void 0)
        }), void 0), children]
      }), void 0)
    }), void 0)
  }), void 0);
};

const SIZE_MAP$1 = {
  small: {
    height: 2,
    input: {
      padding: '.5rem 0.75rem',
      paddingFree: '0.5rem 0.75rem'
    },
    label: {
      transform: 'translateY(-0.5rem)',
      opacity: '0',
      fontSize: '0.5rem'
    }
  },
  medium: {
    height: 2.5,
    input: {
      padding: '1.25rem 0.8125rem .5rem',
      paddingFree: '0.75rem 0.75rem'
    },
    label: {
      transform: 'translateY(-0.875rem)',
      opacity: '1',
      fontSize: '0.6875rem'
    }
  },
  large: {
    height: 3,
    input: {
      padding: '1.375rem 0.8125rem .5rem',
      paddingFree: '1rem 0.75rem'
    },
    label: {
      transform: 'translateY(-1rem)',
      opacity: '1',
      fontSize: '0.625rem'
    }
  },
  x_small: {
    height: '1.75rem',
    padding: '0.375rem 3.813rem 0.438rem',
    fontSize: '0.75rem',
    width: '10rem'
  },
  icon_only: {
    height: '2rem',
    padding: '0.5625rem 0.625rem',
    fontSize: '0.75rem',
    width: '2rem'
  }
};
const TextEntryContainer = /*#__PURE__*/styled.span.withConfig({
  displayName: "LumaTextEntrystyles__TextEntryContainer",
  componentId: "sc-1mq6sy7-0"
})(["display:inline-flex;flex-direction:column;width:13.75rem;", " ", ""], props => props.fullWidth ? `
    display: flex;
    max-width: 100%;
` : '', props => props.disabled ? `
      input {
        color: ${LumaColor.NEUTRAL_40};
      }
      .TextEntryMockLabelContainer {
        border-color: ${LumaColor.NEUTRAL_40};

        label {
          color: ${LumaColor.NEUTRAL_40};
        }
      }
` : '');
const IconInsideTextEntry = /*#__PURE__*/styled.label.withConfig({
  displayName: "LumaTextEntrystyles__IconInsideTextEntry",
  componentId: "sc-1mq6sy7-1"
})(["display:flex;height:100%;font-size:0.875rem;padding-right:0.5rem;align-items:center;justify-content:center;color:", ";pointer-events:", ";cursor:", ";"], props => props.disabled ? LumaColor.NEUTRAL_40 : LumaColor.NEUTRAL_80, props => props.disabled ? 'none' : '', props => props.disabled ? 'default' : 'pointer');
const TextEntryField = /*#__PURE__*/styled.span.withConfig({
  displayName: "LumaTextEntrystyles__TextEntryField",
  componentId: "sc-1mq6sy7-2"
})(["height:", ";border-radius:8px;border:1px solid ", ";display:inline-flex;position:relative;box-sizing:border-box;overflow:hidden;:focus-within{border:1px solid ", ";}"], props => SIZE_MAP$1[props.sizeVariant || 'medium'].height + 'rem', LumaColor.NEUTRAL_40, LumaColor.NEUTRAL_80);
const Input$3 = /*#__PURE__*/styled.input.withConfig({
  displayName: "LumaTextEntrystyles__Input",
  componentId: "sc-1mq6sy7-3"
})(["display:flex;padding:", ";border:none;background-color:transparent;z-index:1;width:100%;color:", ";font-size:0.75rem;font-family:", ";height:100%;cursor:text;", ";&::placeholder{color:", ";font-family:", ";}:focus,:focus-visible{outline:none;+ .TextEntryMockContainer--label{label{transform:", ";opacity:", ";font-size:", ";}}}"], props => props.variant === 'free' ? SIZE_MAP$1[props.sizeVariant || 'medium'].input.paddingFree : SIZE_MAP$1[props.sizeVariant || 'medium'].input.padding, LumaColor.NEUTRAL_80, LumaFont.DEFAULT.MEDIUM, props => `
    ${(props.readOnly || props.disabled) && `cursor: default;`};
    ${props.readOnly && props.useByDropdown && !props.disabled && `cursor: pointer;`};
  `, props => props.disabled ? LumaColor.NEUTRAL_40 : LumaColor.NEUTRAL_60, LumaFont.DEFAULT.REGULAR, props => SIZE_MAP$1[props.sizeVariant || 'medium'].label.transform, props => SIZE_MAP$1[props.sizeVariant || 'medium'].label.opacity, props => SIZE_MAP$1[props.sizeVariant || 'medium'].label.fontSize);
const TextEntryMockContainer = /*#__PURE__*/styled.span.withConfig({
  displayName: "LumaTextEntrystyles__TextEntryMockContainer",
  componentId: "sc-1mq6sy7-4"
})(["display:flex;position:absolute;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none;&.error{.TextEntryMockLabelContainer{border-color:", ";}}"], LumaColor.NEGATIVE_60);
const TextEntryMockLabelContainer = /*#__PURE__*/styled.span.withConfig({
  displayName: "LumaTextEntrystyles__TextEntryMockLabelContainer",
  componentId: "sc-1mq6sy7-5"
})(["flex:0 0 auto;width:100%;max-width:100%;box-sizing:border-box;height:100%;pointer-events:none;&.TextEntryMockLabel--focused{label{transform:", ";opacity:", ";font-size:", ";}}"], props => SIZE_MAP$1[props.sizeVariant || 'medium'].label.transform, props => SIZE_MAP$1[props.sizeVariant || 'medium'].label.opacity, props => SIZE_MAP$1[props.sizeVariant || 'medium'].label.fontSize);
const TextEntryMockLabel = /*#__PURE__*/styled.label.withConfig({
  displayName: "LumaTextEntrystyles__TextEntryMockLabel",
  componentId: "sc-1mq6sy7-6"
})(["display:flex;position:relative;max-width:100%;justify-content:flex-start;color:", ";left:0.8125rem;top:50%;pointer-events:none;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;transition:all 300ms ease-in-out;font-family:", ";opacity:1;transform:translateY(-50%);font-size:0.75rem;"], LumaColor.NEUTRAL_60, LumaFont.DEFAULT.REGULAR);
const TextEntryHelper = /*#__PURE__*/styled.span.withConfig({
  displayName: "LumaTextEntrystyles__TextEntryHelper",
  componentId: "sc-1mq6sy7-7"
})(["display:block;position:relative;max-width:100%;color:", ";left:1rem;pointer-events:none;font-size:0.75rem;font-stretch:normal;font-style:normal;line-height:normal;letter-spacing:normal;font-family:", ";&.TextEntryHelper--error{color:", ";}"], LumaColor.NEUTRAL_60, LumaFont.DEFAULT.MEDIUM, LumaColor.NEGATIVE_60);

const LumaTextEntry = /*#__PURE__*/forwardRef(function LumaTextEntry(componentProps, forwardedRef) {
  const {
    id,
    label,
    type,
    className,
    value,
    onChange,
    onBlur,
    fullWidth,
    helperText,
    error = false,
    disabled = false,
    htmlFor,
    sizeVariant = 'medium',
    readOnly = false,
    icon,
    variant = "label"
    /* label */
    ,
    useByDropdown = false
  } = componentProps,
        rest = __rest(componentProps, ["id", "label", "type", "className", "value", "onChange", "onBlur", "fullWidth", "helperText", "error", "disabled", "htmlFor", "sizeVariant", "readOnly", "icon", "variant", "useByDropdown"]);

  return jsxs(TextEntryContainer, Object.assign({
    fullWidth: fullWidth,
    disabled: disabled
  }, {
    children: [jsxs(TextEntryField, Object.assign({
      sizeVariant: sizeVariant,
      className: "text-entry--outlined"
    }, {
      children: [jsx(Input$3, Object.assign({
        ref: forwardedRef,
        id: id,
        type: type,
        value: value,
        className: className,
        onChange: onChange,
        onBlur: onBlur,
        disabled: disabled,
        readOnly: readOnly,
        sizeVariant: sizeVariant,
        variant: variant,
        placeholder: variant === "free"
        /* free */
        ? label : '',
        useByDropdown: useByDropdown
      }, rest), void 0), icon !== undefined && jsx(IconInsideTextEntry, Object.assign({
        tabIndex: -1,
        disabled: disabled
      }, {
        children: icon
      }), void 0), jsx(TextEntryMockContainer, Object.assign({
        className: `${error ? 'error' : ''} TextEntryMockContainer--label`
      }, {
        children: jsx(TextEntryMockLabelContainer, Object.assign({
          sizeVariant: sizeVariant,
          className: `${value ? 'TextEntryMockLabel--focused' : ''} TextEntryMockLabelContainer`
        }, {
          children: variant === "label"
          /* label */
          && jsx(TextEntryMockLabel, Object.assign({
            htmlFor: htmlFor,
            className: "TextEntryMockLabel"
          }, {
            children: label
          }), void 0)
        }), void 0)
      }), void 0)]
    }), void 0), helperText && jsx(TextEntryHelper, Object.assign({
      className: `${error ? 'TextEntryHelper--error' : ''} TextEntryHelper`
    }, {
      children: helperText
    }), void 0)]
  }), void 0);
});

const SIZE_MAP = {
  small: {
    height: SIZE_MAP$1.small.height
  },
  medium: {
    height: SIZE_MAP$1.medium.height
  },
  large: {
    height: SIZE_MAP$1.large.height
  }
};
const TextSearchContainer = /*#__PURE__*/styled.div.withConfig({
  displayName: "LumaTextSearchstyle__TextSearchContainer",
  componentId: "sc-1fqgn3v-0"
})(["position:relative;display:inline-flex;font-family:", ";flex-direction:column;width:13.75rem;", ""], LumaFont.DEFAULT.REGULAR, props => props.fullWidth ? `
    display: flex;
    max-width: 100%;
` : '');
const HelperText = /*#__PURE__*/styled.span.withConfig({
  displayName: "LumaTextSearchstyle__HelperText",
  componentId: "sc-1fqgn3v-1"
})(["color:", ";padding-left:0.75rem;font-size:0.75rem;font-family:", ";"], props => props.error ? LumaColor.NEGATIVE_60 : LumaColor.NEUTRAL_60, LumaFont.DEFAULT.MEDIUM);
const DropDownItemWrapper$1 = /*#__PURE__*/styled.div.withConfig({
  displayName: "LumaTextSearchstyle__DropDownItemWrapper",
  componentId: "sc-1fqgn3v-2"
})(["display:flex;flex-direction:row;width:100%;justify-content:left;"]);
const DropItem = /*#__PURE__*/styled.p.withConfig({
  displayName: "LumaTextSearchstyle__DropItem",
  componentId: "sc-1fqgn3v-3"
})(["font-family:", ";font-size:0.75rem;margin:0;", " + p{margin-left:0.5rem;}"], LumaFont.DEFAULT.REGULAR, props => props.variant === 'underlier' ? `&:first-child {
    color: ${LumaColor.NEUTRAL_50};
  }` : '');
const SearchIcon = /*#__PURE__*/styled.div.withConfig({
  displayName: "LumaTextSearchstyle__SearchIcon",
  componentId: "sc-1fqgn3v-4"
})(["display:flex;justify-content:center;align-items:center;font-size:0.875rem;padding-left:0.75rem;padding-right:0.5rem;color:", ";"], props => props.disabled ? LumaColor.NEUTRAL_40 : LumaColor.NEUTRAL_60);
const HiddenInput = /*#__PURE__*/styled.input.withConfig({
  displayName: "LumaTextSearchstyle__HiddenInput",
  componentId: "sc-1fqgn3v-5"
})(["border:none;outline:none;width:100%;padding:0.625rem 0;background-color:transparent;font-size:0.75rem;&::placeholder{color:", ";font-family:", ";}&:focus{&::placeholder{font-family:", ";color:", ";}", "{color:", ";}}&:disabled{&::placeholder{color:", ";}}&:read-only{cursor:default;}"], LumaColor.NEUTRAL_60, LumaFont.DEFAULT.LIGHT, LumaFont.DEFAULT.MEDIUM, LumaColor.NEUTRAL_80, SearchIcon, LumaColor.NEUTRAL_80, LumaColor.NEUTRAL_40);
const InputContainer = /*#__PURE__*/styled.div.withConfig({
  displayName: "LumaTextSearchstyle__InputContainer",
  componentId: "sc-1fqgn3v-6"
})(["height:", ";display:flex;border-radius:8px;border:1px solid ", ";background-color:transparent;z-index:1;width:100%;color:", ";font-size:0.5rem;&:focus-within{border:1px solid ", ";", "{color:", ";}}"], props => SIZE_MAP[props.sizeVariant || 'medium'].height + 'rem', props => props.error ? LumaColor.NEGATIVE_60 : LumaColor.NEUTRAL_40, LumaColor.NEUTRAL_80, LumaColor.NEUTRAL_80, SearchIcon, LumaColor.NEUTRAL_90);
const ClearIcon = /*#__PURE__*/styled.button.withConfig({
  displayName: "LumaTextSearchstyle__ClearIcon",
  componentId: "sc-1fqgn3v-7"
})(["background-color:transparent;border:none;pointer-events:initial;cursor:pointer;color:", ";margin-right:0.75rem;font-size:0.75rem;"], LumaColor.NEUTRAL_80);

const Root$4 = /*#__PURE__*/styled.div.withConfig({
  displayName: "LumaStatusstyle__Root",
  componentId: "sc-m1cgjj-0"
})(["display:flex;flex-direction:row;min-width:7.75rem;min-height:4.5rem;padding:0.5rem 0.5rem 0.375rem;border-radius:8px;border:solid 1px ", ";background-color:", ";text-align:center;justify-content:center;align-items:center;"], props => props.statusBorder ? `${LumaColor.NEUTRAL_70}` : 'transparent', LumaColor.NEUTRAL_00_WHITE);
const TitleMessageDefault = /*#__PURE__*/styled.p.withConfig({
  displayName: "LumaStatusstyle__TitleMessageDefault",
  componentId: "sc-m1cgjj-1"
})(["font-family:", ";font-size:0.5rem;font-stretch:normal;font-style:normal;line-height:normal;letter-spacing:normal;text-align:center;color:", ";margin-bottom:0;"], LumaFont.DEFAULT.MEDIUM, LumaColor.NEUTRAL_80);
const SubMessageDefault = /*#__PURE__*/styled.p.withConfig({
  displayName: "LumaStatusstyle__SubMessageDefault",
  componentId: "sc-m1cgjj-2"
})(["font-family:", ";font-size:0.375rem;font-weight:normal;font-stretch:normal;font-style:normal;line-height:normal;letter-spacing:normal;text-align:center;color:", ";"], LumaFont.DEFAULT.REGULAR, LumaColor.NEUTRAL_60);
const DefaultStatusIcon = /*#__PURE__*/styled.div.withConfig({
  displayName: "LumaStatusstyle__DefaultStatusIcon",
  componentId: "sc-m1cgjj-3"
})(["font-size:1.25rem;"]);

function createConstrainedIdFn() {
  return value => value;
}

const iconTypesDictionary = createConstrainedIdFn()({
  solid: 'fas',
  regular: 'far',
  light: 'fal',
  duotone: 'fad'
});
const LumaIcon = ({
  className,
  iconCode,
  type: _type = 'light',
  style,
  rotate,
  onClick
}) => {
  const image = findIconDefinition({
    prefix: iconTypesDictionary[_type],
    iconName: iconCode
  });
  return jsx(FontAwesomeIcon, {
    className: className,
    icon: icon(image),
    style: style,
    transform: rotate ? {
      rotate
    } : undefined,
    onClick: onClick
  }, void 0);
};

const Message = props => {
  const {
    icon,
    titleMessage,
    helperMessage,
    iconAnimation
  } = props.children[0];
  return jsxs(Fragment, {
    children: [icon && jsx(DefaultStatusIcon, {
      children: jsx(LumaIcon, {
        iconCode: icon,
        type: "regular",
        className: `${iconAnimation ? iconAnimation : ''}`
      }, void 0)
    }, void 0), titleMessage && jsx(TitleMessageDefault, {
      children: titleMessage
    }, void 0), helperMessage && jsx(SubMessageDefault, {
      children: helperMessage
    }, void 0)]
  }, void 0);
};

const LoadingMessage = props => {
  const {
    icon,
    titleMessage,
    iconAnimation
  } = props.children[0];
  return jsxs(Fragment, {
    children: [icon && jsx(DefaultStatusIcon, {
      children: jsx(LumaIcon, {
        className: `${iconAnimation ? iconAnimation : ''}`,
        iconCode: icon,
        type: "regular"
      }, void 0)
    }, void 0), jsx(TitleMessageDefault, {
      children: titleMessage
    }, void 0)]
  }, void 0);
};

const LumaStatus = _a => {
  var {
    variant,
    ariaLabel,
    titleMessage = variant === 'failed' ? 'We didn’t find anything.' : 'Thinking...',
    helperMessage = 'Try a specific symbol or company name for relevant results.',
    icon = variant === 'failed' ? 'exclamation-circle' : 'spinner',
    iconAnimate,
    statusBorder = false,
    renderContent = variant === 'failed' ? jsx(Message, {}, void 0) : jsx(LoadingMessage, {}, void 0)
  } = _a,
      rest = __rest(_a, ["variant", "ariaLabel", "titleMessage", "helperMessage", "icon", "iconAnimate", "statusBorder", "renderContent"]);

  return jsx(Root$4, Object.assign({
    "arial-label": ariaLabel,
    statusBorder: statusBorder
  }, rest, {
    children: variant === 'failed' ? jsx("div", {
      children: /*#__PURE__*/React.cloneElement(renderContent, {}, [{
        titleMessage: titleMessage,
        helperMessage: helperMessage,
        icon: icon,
        iconAnimation: iconAnimate
      }])
    }, void 0) : jsx("div", {
      children: /*#__PURE__*/React.cloneElement(renderContent, {}, [{
        titleMessage: titleMessage,
        icon: icon,
        iconAnimation: iconAnimate
      }])
    }, void 0)
  }), void 0);
};

const DIMENSION_MAP$5 = {
  fontSizes: {
    h1: '2rem',
    h2: '1.75rem',
    h3: '1.5rem',
    h4: '1.25rem',
    b1: '1rem',
    b2: '0.875rem',
    b3: '0.75rem',
    b4: '0.688rem'
  }
};
const LumaFontsIBM = /*#__PURE__*/createGlobalStyle(["@font-face{font-family:", ";src:url('./fonts/IBMPlexSans/IBMPlexSans-Light.woff2') format('woff2'),url('./fonts/IBMPlexSans/IBMPlexSans-Light.ttf') format('truetype'),url('./fonts/IBMPlexSans/IBMPlexSans-Light.woff') format('woff');font-weight:300;font-style:normal;font-display:fallback;}@font-face{font-family:", ";src:url('./fonts/IBMPlexSans/IBMPlexSans-Regular.woff2') format('woff2'),url('./fonts/IBMPlexSans/IBMPlexSans-Regular.ttf') format('truetype'),url('./fonts/IBMPlexSans/IBMPlexSans-Regular.woff') format('woff');font-weight:400;font-style:normal;font-display:fallback;}@font-face{font-family:", ";src:url('./fonts/IBMPlexSans/IBMPlexSans-Medium.woff2') format('woff2'),url('./fonts/IBMPlexSans/IBMPlexSans-Medium.ttf') format('truetype'),url('./fonts/IBMPlexSans/IBMPlexSans-Medium.woff') format('woff');font-weight:500;font-style:normal;font-display:fallback;}@font-face{font-family:", ";src:url('./fonts/IBMPlexSans/IBMPlexSans-SemiBold.woff2') format('woff2'),url('./fonts/IBMPlexSans/IBMPlexSans-SemiBold.ttf') format('truetype'),url('./fonts/IBMPlexSans/IBMPlexSans-SemiBold.woff') format('woff');font-weight:600;font-style:normal;font-display:fallback;}@font-face{font-family:", ";src:url('./fonts/IBMPlexSans/IBMPlexSans-Bold.woff2') format('woff2'),url('./fonts/IBMPlexSans/IBMPlexSans-Bold.ttf') format('truetype'),url('./fonts/IBMPlexSans/IBMPlexSans-Bold.woff') format('woff');font-weight:700;font-style:normal;font-display:fallback;}"], LumaFont.DEFAULT.LIGHT, LumaFont.DEFAULT.REGULAR, LumaFont.DEFAULT.MEDIUM, LumaFont.DEFAULT.SEMI_BOLD, LumaFont.DEFAULT.BOLD);
const LumaDimensions = /*#__PURE__*/createGlobalStyle(["h1{font-size:", ";}h2{font-size:", ";}h3{font-size:", ";}h4{font-size:", ";}b1{font-size:", ";}b2{font-size:", ";}b3{font-size:", ";}b4{font-size:", ";}"], DIMENSION_MAP$5.fontSizes.h1, DIMENSION_MAP$5.fontSizes.h2, DIMENSION_MAP$5.fontSizes.h3, DIMENSION_MAP$5.fontSizes.h4, DIMENSION_MAP$5.fontSizes.b1, DIMENSION_MAP$5.fontSizes.b2, DIMENSION_MAP$5.fontSizes.b3, DIMENSION_MAP$5.fontSizes.b4);

const DIMENSION_MAP$4 = {
  large: {
    height: '2.5rem'
  },
  medium: {
    height: '2rem'
  },
  small: {
    height: '1.5rem'
  },
  top: {
    height: '-6rem'
  },
  bottom: {
    height: '0'
  }
};
const DropDownBox = /*#__PURE__*/styled.ul.withConfig({
  displayName: "LumaDropdownBoxstyle__DropDownBox",
  componentId: "sc-6vohv3-0"
})(["display:none;flex:auto;flex-direction:column;position:absolute;top:", ";bottom:2.5rem;width:100%;min-width:8rem;margin-bottom:0;padding:0;padding-top:", ";padding-bottom:", ";border-radius:8px;box-shadow:0 0 4px 0 rgba(47,51,54,0.32);border:solid 1px ", ";background-color:", ";transition:all 300ms ease-in-out;height:fit-content;max-height:7.125rem;overflow-x:hidden;opacity:0;z-index:2;", ""], props => props.size ? DIMENSION_MAP$4[props.size].height : '0', props => props.variant === 'no-border-bottom' ? '1.7rem' : '0', props => props.variant === 'no-border-top' ? '1.7rem' : '0', LumaColor.NEUTRAL_70, LumaColor.NEUTRAL_00_WHITE, props => props.isOpen ? `display: flex;
  opacity: 1;` : '');
const InnerBox = /*#__PURE__*/styled.div.withConfig({
  displayName: "LumaDropdownBoxstyle__InnerBox",
  componentId: "sc-6vohv3-1"
})(["height:100%;overflow-x:hidden;overflow-y:scroll;::-webkit-scrollbar{width:0.3rem;border-radius:8px;}::-webkit-scrollbar-track{background:", ";}::-webkit-scrollbar-thumb{background:", ";}::-webkit-scrollbar-thumb:hover{background:", ";}"], LumaColor.NEUTRAL_00_WHITE, LumaColor.NEUTRAL_30, LumaColor.NEUTRAL_40);
const DropDownListElement = /*#__PURE__*/styled.li.withConfig({
  displayName: "LumaDropdownBoxstyle__DropDownListElement",
  componentId: "sc-6vohv3-2"
})(["padding:0.5rem 0;margin:0 1rem;display:flex;flex:auto;flex-direction:column;font-weight:normal;font-stretch:normal;font-style:normal;line-height:normal;letter-spacing:normal;font-family:", ";color:", ";cursor:pointer;&:not(:last-child){border-bottom:1px solid ", ";}&:hover{.DropDownText{color:", ";", "}}", " ", " ", ""], LumaFont.DEFAULT.REGULAR, LumaColor.NEUTRAL_80, LumaColor.NEUTRAL_30, LumaColor.NEUTRAL_60, props => props.disabled ? `cursor: not-allowed;` : '', props => props.isHighlighted ? `color: ${LumaColor.NEUTRAL_60};
        ` : '', props => props.isSelected ? `font-family: ${LumaFont.DEFAULT.BOLD};
    ` : '', props => props.disabled ? `color: ${LumaColor.NEUTRAL_60}; cursor: not-allowed;
    ` : '');
const DropDownSection = /*#__PURE__*/styled.div.withConfig({
  displayName: "LumaDropdownBoxstyle__DropDownSection",
  componentId: "sc-6vohv3-3"
})(["padding:0.25rem 0.938rem;margin-top:0.5rem;font-size:0.75rem;font-stretch:normal;font-style:normal;line-height:normal;letter-spacing:normal;font-family:", ";color:", ";background-color:", ";"], LumaFont.DEFAULT.REGULAR, LumaColor.NEUTRAL_80, LumaColor.NEUTRAL_20);

const LumaDropDownBox = ({
  items,
  disabled,
  getMenuProps,
  getItemProps,
  isOpen: _isOpen = false,
  highlightedIndex,
  size: _size = 'medium',
  renderComponent,
  selectedItem: _selectedItem = null,
  itemToString: _itemToString = item => {
    var _a;

    return (_a = item === null || item === void 0 ? void 0 : item.label) !== null && _a !== void 0 ? _a : '';
  },
  variant: _variant = 'standard',
  selectedItems,
  id,
  errorTemplate
}) => {
  const menuProps = getMenuProps ? getMenuProps() : {};
  return jsx(DropDownBox, Object.assign({
    size: _size,
    isOpen: _isOpen,
    variant: _variant
  }, menuProps, {
    "aria-labelledby": `${id}Label`
  }, {
    children: jsx(InnerBox, {
      children: _isOpen && (items.length ? items.map((item, index) => {
        var _a;

        let isSelected = false;

        if (_selectedItem && item) {
          isSelected = _itemToString(_selectedItem) === _itemToString(item);
        }

        const itemProps = getItemProps ? getItemProps({
          item: item,
          index,
          disabled: item.isDisabled
        }) : {};
        return jsxs(React.Fragment, {
          children: [item.sectionName && jsx(DropDownSection, {
            children: item === null || item === void 0 ? void 0 : item.sectionName
          }, void 0), jsx(DropDownListElement, Object.assign({
            isHighlighted: highlightedIndex === index,
            "data-testid": `dropdown-item-${(_a = item.label) === null || _a === void 0 ? void 0 : _a.toLowerCase().replace(' ', '_')}`
          }, itemProps, {
            children: /*#__PURE__*/React.cloneElement(renderComponent, {
              selectedItems,
              item,
              items,
              disabled,
              selectedItem: _selectedItem,
              isSelected,
              variant: _variant
            })
          }), void 0)]
        }, `${item}${index}`);
      }) : errorTemplate !== null && errorTemplate !== void 0 ? errorTemplate : null)
    }, void 0)
  }), void 0);
};

const RenderContent = ({
  item,
  variant
}) => {
  return jsxs(DropDownItemWrapper$1, Object.assign({
    variant: variant
  }, {
    children: [variant !== 'standard' ? jsx(DropItem, Object.assign({
      variant: variant
    }, {
      children: item === null || item === void 0 ? void 0 : item.id
    }), void 0) : null, jsx(DropItem, Object.assign({
      variant: variant
    }, {
      children: item === null || item === void 0 ? void 0 : item.label
    }), void 0)]
  }), void 0);
};
const LumaTextSearch = _a => {
  var {
    id,
    placeholder = '',
    className,
    error,
    readOnly,
    fullWidth,
    disabled,
    helperText,
    sizeVariant = 'medium',
    items = [],
    handleSelectItem,
    handleChange,
    handleBlur,
    itemToString,
    inputAriaLabel,
    buttonAriaLabel,
    renderContent,
    variant = 'standard',
    defaultValue,
    errorTemplate = jsx(LumaStatus, {
      variant: "failed",
      statusBorder: true,
      ariaLabel: "failStatus"
    }, void 0)
  } = _a,
      rest = __rest(_a, ["id", "placeholder", "className", "error", "readOnly", "fullWidth", "disabled", "helperText", "sizeVariant", "items", "handleSelectItem", "handleChange", "handleBlur", "itemToString", "inputAriaLabel", "buttonAriaLabel", "renderContent", "variant", "defaultValue", "errorTemplate"]);

  const [inputValue, setInputValue] = useState(defaultValue || '');
  const [isFocus, setIsFocus] = useState(false);
  const {
    isOpen,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    getItemProps,
    highlightedIndex,
    reset
  } = useCombobox({
    itemToString,
    inputValue,
    items,
    onInputValueChange: ({
      inputValue
    }) => {
      setInputValue(inputValue);
      handleChange === null || handleChange === void 0 ? void 0 : handleChange(inputValue);
      return;
    },

    onSelectedItemChange({
      selectedItem: selectedItemEvent
    }) {
      handleSelectItem === null || handleSelectItem === void 0 ? void 0 : handleSelectItem(selectedItemEvent);
      reset();
    }

  });
  const inputProps = getInputProps({
    'aria-label': inputAriaLabel,
    'aria-labelledby': ''
  });
  return jsxs(TextSearchContainer, Object.assign({
    sizeVariant: sizeVariant,
    fullWidth: fullWidth,
    className: className
  }, getComboboxProps(), {
    children: [jsxs(InputContainer, Object.assign({
      sizeVariant: sizeVariant,
      id: id,
      error: error,
      placeholder: placeholder
    }, {
      children: [jsx(SearchIcon, Object.assign({
        disabled: disabled
      }, {
        children: jsx(LumaIcon, {
          iconCode: "magnifying-glass"
        }, void 0)
      }), void 0), jsx(HiddenInput, Object.assign({
        value: inputValue,
        placeholder: placeholder,
        onFocus: () => {
          setIsFocus(!isFocus);
        },
        onBlur: () => {
          setIsFocus(!isFocus);
        },
        disabled: disabled,
        readOnly: readOnly
      }, inputProps, rest), void 0), inputValue && !readOnly && jsx(ClearIcon, Object.assign({
        type: "button",
        "aria-label": buttonAriaLabel,
        onClick: () => {
          reset();
        }
      }, {
        children: jsx(LumaIcon, {
          iconCode: "times"
        }, void 0)
      }), void 0)]
    }), void 0), helperText && jsx(HelperText, Object.assign({
      error: error
    }, {
      children: helperText
    }), void 0), jsx(LumaDropDownBox, {
      size: sizeVariant,
      isOpen: isOpen,
      items: items,
      getMenuProps: getMenuProps,
      highlightedIndex: highlightedIndex,
      getItemProps: getItemProps,
      renderComponent: jsx(RenderContent, {}, void 0),
      itemToString: itemToString,
      variant: variant,
      id: id,
      errorTemplate: errorTemplate
    }, void 0)]
  }), void 0);
};

const VARIANT_MAP$5 = {
  primary: {
    backgroundColor: LumaColor.PRIMARY_80_DAINTREE,
    borderColor: LumaColor.PRIMARY_80_DAINTREE,
    color: LumaColor.NEUTRAL_00_WHITE,
    hoverBackgroundColor: LumaColor.PRIMARY_60,
    hoverBorderColor: LumaColor.PRIMARY_60,
    hoverFontColor: LumaColor.NEUTRAL_00_WHITE,
    disabledBackgroundColor: LumaColor.NEUTRAL_20,
    disabledBorderColor: LumaColor.NEUTRAL_20,
    disabledFontColor: LumaColor.NEUTRAL_40,
    pressBackgroundColor: LumaColor.PRIMARY_90,
    pressFontColor: LumaColor.NEUTRAL_00_WHITE,
    pressBorderColor: LumaColor.PRIMARY_90,
    splitBorderWidth: '0 0 0 1px',
    fontFamily: LumaFont.DEFAULT.MEDIUM
  },
  secondary: {
    backgroundColor: LumaColor.NEUTRAL_00_WHITE,
    borderColor: LumaColor.NEUTRAL_40,
    color: LumaColor.PRIMARY_50,
    hoverBackgroundColor: LumaColor.PRIMARY_20,
    hoverBorderColor: LumaColor.NEUTRAL_40,
    hoverFontColor: LumaColor.PRIMARY_50,
    disabledBackgroundColor: LumaColor.NEUTRAL_00_WHITE,
    disabledBorderColor: LumaColor.NEUTRAL_30,
    disabledFontColor: LumaColor.NEUTRAL_40,
    pressBackgroundColor: LumaColor.NEUTRAL_30,
    pressFontColor: LumaColor.PRIMARY_50,
    pressBorderColor: LumaColor.NEUTRAL_40,
    splitBorderWidth: '1px 1px 1px 0',
    fontFamily: LumaFont.DEFAULT.MEDIUM
  },
  tertiary: {
    backgroundColor: LumaColor.NEUTRAL_70,
    borderColor: LumaColor.NEUTRAL_70,
    color: LumaColor.NEUTRAL_00_WHITE,
    hoverBackgroundColor: LumaColor.NEUTRAL_50,
    hoverBorderColor: LumaColor.NEUTRAL_50,
    hoverFontColor: LumaColor.NEUTRAL_00_WHITE,
    disabledBackgroundColor: LumaColor.NEUTRAL_20,
    disabledBorderColor: LumaColor.NEUTRAL_20,
    disabledFontColor: LumaColor.NEUTRAL_40,
    pressBackgroundColor: LumaColor.NEUTRAL_80,
    pressFontColor: LumaColor.NEUTRAL_00_WHITE,
    pressBorderColor: LumaColor.NEUTRAL_80,
    splitBorderWidth: '0 0 0 1px',
    fontFamily: LumaFont.DEFAULT.MEDIUM
  },
  tertiary_positive: {
    backgroundColor: LumaColor.POSITIVE_60,
    borderColor: LumaColor.POSITIVE_60,
    color: LumaColor.NEUTRAL_00_WHITE,
    hoverBackgroundColor: LumaColor.POSITIVE_40,
    hoverBorderColor: LumaColor.POSITIVE_40,
    hoverFontColor: LumaColor.NEUTRAL_00_WHITE,
    disabledBackgroundColor: LumaColor.NEUTRAL_20,
    disabledBorderColor: LumaColor.NEUTRAL_20,
    disabledFontColor: LumaColor.NEUTRAL_40,
    pressBackgroundColor: LumaColor.POSITIVE_70,
    pressFontColor: LumaColor.NEUTRAL_00_WHITE,
    pressBorderColor: LumaColor.POSITIVE_70,
    splitBorderWidth: '0 0 0 1px',
    fontFamily: LumaFont.DEFAULT.MEDIUM
  },
  tertiary_negative: {
    backgroundColor: LumaColor.NEGATIVE_60,
    borderColor: LumaColor.NEGATIVE_60,
    color: LumaColor.NEUTRAL_00_WHITE,
    hoverBackgroundColor: LumaColor.NEGATIVE_40,
    hoverBorderColor: LumaColor.NEGATIVE_40,
    hoverFontColor: LumaColor.NEUTRAL_00_WHITE,
    disabledBackgroundColor: LumaColor.NEUTRAL_20,
    disabledBorderColor: LumaColor.NEUTRAL_20,
    disabledFontColor: LumaColor.NEUTRAL_40,
    pressBackgroundColor: LumaColor.NEGATIVE_70,
    pressFontColor: LumaColor.NEUTRAL_00_WHITE,
    pressBorderColor: LumaColor.NEGATIVE_70,
    splitBorderWidth: '0 0 0 1px',
    fontFamily: LumaFont.DEFAULT.MEDIUM
  },
  toggle_active: {
    backgroundColor: LumaColor.NEUTRAL_40,
    borderColor: LumaColor.NEUTRAL_40,
    color: LumaColor.NEUTRAL_80,
    hoverBackgroundColor: LumaColor.NEUTRAL_40,
    hoverBorderColor: LumaColor.NEUTRAL_40,
    hoverFontColor: LumaColor.NEUTRAL_80,
    disabledBackgroundColor: LumaColor.NEUTRAL_40,
    disabledBorderColor: LumaColor.NEUTRAL_40,
    disabledFontColor: LumaColor.NEUTRAL_80,
    pressBackgroundColor: LumaColor.NEUTRAL_40,
    pressFontColor: LumaColor.NEUTRAL_80,
    pressBorderColor: LumaColor.NEUTRAL_40,
    splitBorderWidth: '0 0 0 1px',
    fontFamily: LumaFont.DEFAULT.MEDIUM
  },
  toggle_inactive: {
    backgroundColor: LumaColor.NEUTRAL_00_WHITE,
    borderColor: LumaColor.NEUTRAL_40,
    color: LumaColor.NEUTRAL_60,
    hoverBackgroundColor: LumaColor.NEUTRAL_00_WHITE,
    hoverBorderColor: LumaColor.NEUTRAL_80,
    hoverFontColor: LumaColor.NEUTRAL_80,
    disabledBackgroundColor: LumaColor.NEUTRAL_00_WHITE,
    disabledBorderColor: LumaColor.NEUTRAL_40,
    disabledFontColor: LumaColor.NEUTRAL_40,
    pressBackgroundColor: LumaColor.NEUTRAL_00_WHITE,
    pressFontColor: LumaColor.NEUTRAL_80,
    pressBorderColor: LumaColor.NEUTRAL_80,
    splitBorderWidth: '1px 1px 1px 0',
    fontFamily: LumaFont.DEFAULT.MEDIUM
  },
  tabs_active: {
    backgroundColor: LumaColor.NEUTRAL_40,
    borderColor: LumaColor.NEUTRAL_40,
    color: LumaColor.NEUTRAL_80,
    hoverBackgroundColor: LumaColor.NEUTRAL_40,
    hoverBorderColor: LumaColor.NEUTRAL_40,
    hoverFontColor: LumaColor.NEUTRAL_80,
    disabledBackgroundColor: LumaColor.NEUTRAL_40,
    disabledBorderColor: LumaColor.NEUTRAL_40,
    disabledFontColor: LumaColor.NEUTRAL_80,
    pressBackgroundColor: LumaColor.NEUTRAL_40,
    pressFontColor: LumaColor.NEUTRAL_80,
    pressBorderColor: LumaColor.NEUTRAL_40,
    splitBorderWidth: '0 0 0 1px',
    fontFamily: LumaFont.DEFAULT.BOLD
  },
  tabs_inactive: {
    backgroundColor: LumaColor.NEUTRAL_00_WHITE,
    borderColor: LumaColor.NEUTRAL_80,
    color: LumaColor.NEUTRAL_80,
    hoverBackgroundColor: LumaColor.NEUTRAL_00_WHITE,
    hoverBorderColor: LumaColor.NEUTRAL_40,
    hoverFontColor: LumaColor.NEUTRAL_60,
    disabledBackgroundColor: LumaColor.NEUTRAL_00_WHITE,
    disabledBorderColor: LumaColor.NEUTRAL_40,
    disabledFontColor: LumaColor.NEUTRAL_40,
    pressBackgroundColor: LumaColor.NEUTRAL_00_WHITE,
    pressFontColor: LumaColor.NEUTRAL_60,
    pressBorderColor: LumaColor.NEUTRAL_40,
    splitBorderWidth: '1px 1px 1px 0',
    fontFamily: LumaFont.DEFAULT.BOLD
  },
  document_error: {
    backgroundColor: LumaColor.NEUTRAL_00_WHITE,
    borderColor: LumaColor.NEGATIVE_60,
    color: LumaColor.NEGATIVE_60,
    hoverBackgroundColor: LumaColor.NEGATIVE_40,
    hoverBorderColor: LumaColor.NEGATIVE_40,
    hoverFontColor: LumaColor.NEUTRAL_00_WHITE,
    disabledBackgroundColor: LumaColor.NEUTRAL_20,
    disabledBorderColor: LumaColor.NEUTRAL_20,
    disabledFontColor: LumaColor.NEUTRAL_40,
    pressBackgroundColor: LumaColor.NEGATIVE_70,
    pressFontColor: LumaColor.NEUTRAL_00_WHITE,
    pressBorderColor: LumaColor.NEGATIVE_70,
    splitBorderWidth: '0 0 0 1px',
    fontFamily: LumaFont.DEFAULT.MEDIUM
  },
  remove: {
    backgroundColor: LumaColor.NEUTRAL_00_WHITE,
    borderColor: LumaColor.NEUTRAL_30,
    color: LumaColor.NEUTRAL_40,
    hoverBackgroundColor: LumaColor.NEUTRAL_00_WHITE,
    hoverBorderColor: LumaColor.NEUTRAL_30,
    hoverFontColor: LumaColor.NEUTRAL_40,
    disabledBackgroundColor: LumaColor.NEUTRAL_00_WHITE,
    disabledBorderColor: LumaColor.NEUTRAL_30,
    disabledFontColor: LumaColor.NEUTRAL_40,
    pressBackgroundColor: LumaColor.NEUTRAL_00_WHITE,
    pressFontColor: LumaColor.NEUTRAL_40,
    pressBorderColor: LumaColor.NEUTRAL_30,
    splitBorderWidth: '1px 1px 1px 0',
    fontFamily: LumaFont.DEFAULT.MEDIUM
  }
};
const DIMENSION_MAP$3 = {
  large: {
    height: '3rem',
    padding: '0.9375rem 3.625rem',
    fontSize: '0.875rem',
    width: '10rem'
  },
  medium: {
    height: '2.5rem',
    padding: '0.6875rem 3.625rem',
    fontSize: '0.875rem',
    width: '10rem'
  },
  small: {
    height: '2rem',
    padding: '0.5rem 3.8125rem 0.5625rem',
    fontSize: '0.75rem',
    width: '10rem'
  },
  x_small: {
    height: '1.75rem',
    padding: '0.375rem 3.8125rem 0.4375rem',
    fontSize: '0.75rem',
    width: '10rem'
  },
  icon_only: {
    height: '2rem',
    padding: '0.5625rem 0.625rem 0.5625rem 0.6875rem',
    fontSize: '0.875rem',
    width: '2rem'
  },
  toggle_xx_small: {
    height: '1.5rem',
    padding: '0.25rem 0.9375rem 0.3125rem',
    fontSize: '0.75rem',
    width: '4.25rem'
  },
  toggle_small: {
    height: '2rem',
    padding: '0.4375rem 1.125rem',
    fontSize: '0.875rem',
    width: '5rem'
  },
  toggle_medium: {
    height: '2.5rem',
    padding: '0.625rem 0.9375rem',
    fontSize: '1rem',
    width: '5rem'
  },
  tab: {
    height: '2.5rem',
    padding: '0.625rem 1rem 0.625rem 1rem',
    fontSize: '1rem',
    width: '6.5625rem'
  },
  document_upload: {
    height: '3rem',
    padding: '0.9375rem 3.625rem',
    fontSize: '0.875rem',
    width: '18rem'
  },
  document_upload_remove: {
    height: '3rem',
    padding: '0.9375rem 1rem 0.9375rem 3.625rem',
    fontSize: '0.875rem',
    width: '18rem'
  }
};
const Root$3 = /*#__PURE__*/styled.div.withConfig({
  displayName: "LumaButtonstyles__Root",
  componentId: "sc-1wckznr-0"
})(["display:flex;flex-direction:row;position:relative;", ""], props => {
  var _a;

  return `
    height: ${DIMENSION_MAP$3[props.size].height};
    width: ${props.fullWidth ? '100%' : DIMENSION_MAP$3[props.size].width};
    z-index: ${((_a = props.dropdown) === null || _a === void 0 ? void 0 : _a.isOpen) ? '3' : 'auto'};
  `;
});
const Button = /*#__PURE__*/styled.button.withConfig({
  displayName: "LumaButtonstyles__Button",
  componentId: "sc-1wckznr-1"
})(["display:flex;flex-direction:", ";justify-content:center;align-items:center;height:100%;border-radius:8px;border-style:", ";border-width:0.0625rem;cursor:pointer;gap:0.3125rem;&:disabled,&[disabled]{cursor:default;}z-index:", ";", ""], props => {
  var _a;

  return ((_a = props.icon) === null || _a === void 0 ? void 0 : _a.isOnRight) ? 'row-reverse' : 'row';
}, props => props.size === 'document_upload' || props.size === 'document_upload_remove' ? 'dashed' : 'solid', props => props.split ? 1 : 'auto', props => `
    font-size: ${DIMENSION_MAP$3[props.size].fontSize};
    font-family: ${VARIANT_MAP$5[props.variant].fontFamily};
    border-bottom-right-radius: ${props.split ? '0' : ''};
    border-top-right-radius: ${props.split ? '0' : ''};
    width: ${props.split ? '8rem' : '100%'};
    padding: ${props.fullWidth ? '' : DIMENSION_MAP$3[props.size].padding};
    background-color: ${VARIANT_MAP$5[props.variant].backgroundColor};
    border-color: ${VARIANT_MAP$5[props.variant].borderColor};
    color: ${VARIANT_MAP$5[props.variant].color};
    &:disabled {
      background-color: ${VARIANT_MAP$5[props.variant].disabledBackgroundColor};
      border-color: ${VARIANT_MAP$5[props.variant].disabledBorderColor};
      color: ${VARIANT_MAP$5[props.variant].disabledFontColor};
    };
    &:hover:not([disabled]) {
      background-color: ${VARIANT_MAP$5[props.variant].hoverBackgroundColor};
      border-color: ${VARIANT_MAP$5[props.variant].hoverBorderColor};
      color: ${VARIANT_MAP$5[props.variant].hoverFontColor};
    };
    &:active:not([disabled]) {
      background-color: ${VARIANT_MAP$5[props.variant].pressBackgroundColor};
      color: ${VARIANT_MAP$5[props.variant].pressFontColor};
      border-color: ${VARIANT_MAP$5[props.variant].pressBorderColor};
    };
  `);
const Split = /*#__PURE__*/styled.button.withConfig({
  displayName: "LumaButtonstyles__Split",
  componentId: "sc-1wckznr-2"
})(["display:flex;justify-content:center;align-items:center;width:2rem;cursor:pointer;border-style:solid;border-bottom-right-radius:8px;border-top-right-radius:8px;&:disabled{cursor:default;}z-index:1;", ""], props => `
    background-color: ${VARIANT_MAP$5[props.variant].backgroundColor};
    border-color: ${VARIANT_MAP$5[props.variant].borderColor};
    border-width: ${VARIANT_MAP$5[props.variant].splitBorderWidth};
    border-left-color: ${LumaColor.NEUTRAL_00_WHITE};
    color: ${VARIANT_MAP$5[props.variant].color};
    &:disabled {
      background-color: ${VARIANT_MAP$5[props.variant].disabledBackgroundColor};
      border-color: ${VARIANT_MAP$5[props.variant].disabledBorderColor};
      color: ${VARIANT_MAP$5[props.variant].disabledFontColor};
      border-left-color: ${LumaColor.NEUTRAL_00_WHITE};
    };
    &:hover:not([disabled]) {
      background-color: ${VARIANT_MAP$5[props.variant].hoverBackgroundColor};
      border-color: ${VARIANT_MAP$5[props.variant].hoverBorderColor};
      border-left-color: ${LumaColor.NEUTRAL_00_WHITE};
    };
    &:active:not([disabled]) {
      background-color: ${VARIANT_MAP$5[props.variant].pressBackgroundColor};
      color: ${VARIANT_MAP$5[props.variant].pressFontColor};
      border-color: ${VARIANT_MAP$5[props.variant].pressBorderColor};
      border-left-color: ${LumaColor.NEUTRAL_00_WHITE};
    };
  `);
const Xmark = /*#__PURE__*/styled.div.withConfig({
  displayName: "LumaButtonstyles__Xmark",
  componentId: "sc-1wckznr-3"
})(["position:relative;float:right;margin:0.063rem 0 0.063rem 2.438rem;}"]);

const LumaButton = /*#__PURE__*/forwardRef(function LumaButton(componentProps, forwardedRef) {
  var _a, _b;

  const {
    children,
    variant = 'primary',
    disabled = false,
    icon,
    size = 'medium',
    dropdown = {
      isDropdown: false,
      isOpen: false,
      getToggleButtonProps: function () {
        throw new Error('Function not implemented.');
      }
    },
    onClick,
    split = false,
    disabledSplit = false,
    type = 'button',
    className,
    fullWidth = false,
    xmark,
    splitDataTestId = 'button-luma_split'
  } = componentProps,
        rest = __rest(componentProps, ["children", "variant", "disabled", "icon", "size", "dropdown", "onClick", "split", "disabledSplit", "type", "className", "fullWidth", "xmark", "splitDataTestId"]);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  useEffect(() => {
    setDropdownOpen(dropdown.isOpen);
  }, [dropdown.isOpen]);

  const getDropdownPropsButtonIfNeeded = () => {
    if (!split && dropdown.isDropdown) {
      return dropdown.getToggleButtonProps();
    }

    return null;
  };

  const getDropdownPropsSplitIfNeeded = () => {
    if (split) {
      return dropdown.getToggleButtonProps();
    }

    return null;
  };

  const dropdownPropsButton = (_a = getDropdownPropsButtonIfNeeded()) !== null && _a !== void 0 ? _a : {};
  const dropdownPropsSplit = (_b = getDropdownPropsSplitIfNeeded()) !== null && _b !== void 0 ? _b : {};
  return jsxs(Root$3, Object.assign({
    fullWidth: fullWidth,
    size: size,
    dropdown: dropdown,
    className: className
  }, {
    children: [jsxs(Button, Object.assign({
      icon: icon,
      onClick: onClick,
      variant: variant,
      size: size,
      split: split,
      ref: forwardedRef
    }, dropdownPropsButton, {
      type: type,
      disabled: disabled,
      fullWidth: fullWidth
    }, rest, {
      xmark: xmark
    }, {
      children: [icon === null || icon === void 0 ? void 0 : icon.iconComponent, children, dropdown.isDropdown && jsx(LumaIcon, {
        iconCode: dropdownOpen ? 'angle-up' : 'angle-down'
      }, void 0), xmark && jsx(Xmark, {
        children: jsx(LumaIcon, {
          iconCode: "xmark"
        }, void 0)
      }, void 0)]
    }), void 0), split && jsx(Split, Object.assign({
      variant: variant,
      disabled: disabledSplit
    }, dropdownPropsSplit, {
      "data-testid": splitDataTestId
    }, {
      children: jsx(LumaIcon, {
        iconCode: dropdownOpen ? 'angle-up' : 'angle-down'
      }, void 0)
    }), void 0)]
  }), void 0);
});

const Root$2 = /*#__PURE__*/styled.div.withConfig({
  displayName: "LumaDropDownstyle__Root",
  componentId: "sc-zth4cn-0"
})(["display:inline-flex;position:relative;", ""], props => props.fullWidth ? `display: flex;
  width: 100%` : '');
const DropDownItemWrapper = /*#__PURE__*/styled.div.withConfig({
  displayName: "LumaDropDownstyle__DropDownItemWrapper",
  componentId: "sc-zth4cn-1"
})(["display:flex;flex-direction:row;width:100%;justify-content:space-between;", ""], props => props.variant === 'multi' ? `justify-content: left;
          ` : '');
const DropDownIcon = /*#__PURE__*/styled.span.withConfig({
  displayName: "LumaDropDownstyle__DropDownIcon",
  componentId: "sc-zth4cn-2"
})(["font-size:0.75rem;color:", ";", ""], LumaColor.NEUTRAL_80, props => props.isSelected ? `font-weight: bold;
          ` : '');
const StyledCheckbox$1 = /*#__PURE__*/styled.div.withConfig({
  displayName: "LumaDropDownstyle__StyledCheckbox",
  componentId: "sc-zth4cn-3"
})(["min-width:1rem;height:1rem;font-size:0.75rem;background-color:", ";border-radius:3px;border-style:solid;border-width:1px;border-color:", ";justify-content:center;align-items:center;display:flex;margin-right:0.5rem;", " ", " &:active:not([disabled]),", ":hover:not([disabled]) &{border-color:", ";};"], LumaColor.NEUTRAL_00_WHITE, LumaColor.NEUTRAL_40, props => props.disabled && css(["background-color:", ";"], LumaColor.NEUTRAL_20), props => props.isChecked && css(["background-color:", ";"], LumaColor.NEUTRAL_40), DropDownItemWrapper, LumaColor.NEUTRAL_50);
const DropDownText = /*#__PURE__*/styled.span.withConfig({
  displayName: "LumaDropDownstyle__DropDownText",
  componentId: "sc-zth4cn-4"
})(["font-family:", ";font-size:0.75rem;font-weight:normal;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;&:hover{color:", ";}", " ", ""], LumaFont.DEFAULT.REGULAR, LumaColor.NEUTRAL_60, props => props.isSelected ? `font-family: ${LumaFont.DEFAULT.BOLD};
  ` : '', props => props.disabled ? `color: ${LumaColor.NEUTRAL_60}; cursor: not-allowed;
  ` : '');

const LumaSingleDropDownOption = ({
  item: _item = {},
  isSelected
}) => {
  return jsxs(DropDownItemWrapper, Object.assign({
    variant: "single"
  }, {
    children: [jsx(DropDownText, Object.assign({
      disabled: _item.isDisabled,
      isSelected: isSelected,
      className: "DropDownText"
    }, {
      children: _item.label
    }), void 0), _item.iconCode !== undefined && jsx(DropDownIcon, Object.assign({
      isSelected: true
    }, {
      children: jsx(LumaIcon, {
        type: isSelected ? 'solid' : 'regular',
        iconCode: _item.iconCode
      }, void 0)
    }), void 0)]
  }), void 0);
};

const Root$1 = /*#__PURE__*/styled.div.withConfig({
  displayName: "LumaButtonDropdownstyle__Root",
  componentId: "sc-1xe01r0-0"
})(["position:relative;width:100%;"]);

const LumaButtonDropdown = _a => {
  var {
    id,
    dropdownItems,
    onChangeDropdown,
    dropdownPosition = 'bottom'
  } = _a,
      rest = __rest(_a, ["id", "dropdownItems", "onChangeDropdown", "dropdownPosition"]);

  const {
    isOpen,
    getMenuProps,
    getItemProps,
    highlightedIndex,
    getToggleButtonProps
  } = useSelect({
    items: dropdownItems || [],
    itemToString: item => {
      var _a;

      return (_a = item === null || item === void 0 ? void 0 : item.label) !== null && _a !== void 0 ? _a : '';
    },

    onSelectedItemChange({
      selectedItem
    }) {
      onChangeDropdown === null || onChangeDropdown === void 0 ? void 0 : onChangeDropdown(selectedItem !== null && selectedItem !== void 0 ? selectedItem : null);
    }

  });

  const {
    split,
    fullWidth
  } = rest,
        restProps = __rest(rest, ["split", "fullWidth"]);

  return jsxs(Root$1, {
    children: [jsx(LumaButton, Object.assign({
      dropdown: {
        isDropdown: !split,
        isOpen,
        getToggleButtonProps
      },
      split: split,
      fullWidth: true
    }, restProps), void 0), jsx(LumaDropDownBox, {
      size: split ? `${dropdownPosition}` : 'medium',
      variant: split ? `no-border-${dropdownPosition}` : 'standard',
      isOpen: isOpen,
      items: dropdownItems || [],
      getMenuProps: getMenuProps,
      highlightedIndex: highlightedIndex,
      getItemProps: getItemProps,
      renderComponent: jsx(LumaSingleDropDownOption, {}, void 0),
      itemToString: item => {
        var _a;

        return (_a = item === null || item === void 0 ? void 0 : item.label) !== null && _a !== void 0 ? _a : '';
      },
      id: id
    }, void 0)]
  }, void 0);
};

const CloseButton = /*#__PURE__*/styled.button.withConfig({
  displayName: "LumaModalstyles__CloseButton",
  componentId: "sc-1oqzoqe-0"
})(["border:0 transparent;background:transparent;display:flex;justify-content:center;align-items:center;cursor:pointer;margin-left:auto;position:absolute;top:1.25rem;right:1.25rem;color:", ";"], LumaColor.NEUTRAL_80);

function LumaModal({
  children,
  isOpen,
  appElement,
  onAfterOpen,
  onAfterClose,
  style,
  closeButton = {
    show: false,
    handleClose: function () {
      throw new Error('Function not implemented.');
    }
  }
}) {
  const customStyles = {
    content: {
      top: '20%',
      left: '50%',
      transform: 'translateX(-50%)',
      border: 'none',
      borderRadius: '8px',
      fontFamily: 'inherit',
      textAlign: 'center',
      inset: '20% auto auto 50%',
      background: '#f4f6f8',
      boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)'
    },
    overlay: {
      zIndex: '2',
      backgroundColor: 'rgba(0,0,0,0.4)'
    }
  };

  if (!style) {
    style = {
      content: {},
      overlay: {}
    };
  }

  style.content = Object.assign(Object.assign({}, customStyles.content), style.content);
  style.overlay = Object.assign(Object.assign({}, customStyles.overlay), style.overlay);
  ReactModal.setAppElement(appElement);
  return jsxs(ReactModal, Object.assign({
    isOpen: isOpen,
    onAfterOpen: onAfterOpen,
    onAfterClose: onAfterClose,
    style: style
  }, {
    children: [closeButton.show && jsx(CloseButton, Object.assign({
      "data-testid": "modal-close"
    }, {
      children: jsx(LumaIcon, {
        iconCode: "times",
        onClick: closeButton.handleClose
      }, void 0)
    }), void 0), children]
  }), void 0);
}

const VARIANT_MAP$4 = {
  default: {
    textColor: LumaColor.NEUTRAL_80,
    cursor: 'pointer',
    borderColor: LumaColor.NEUTRAL_40,
    backgroundColor: LumaColor.NEUTRAL_00_WHITE
  },
  disabled: {
    textColor: LumaColor.NEUTRAL_40,
    cursor: 'default',
    borderColor: LumaColor.NEUTRAL_30
  },
  hover: {
    textColor: LumaColor.NEUTRAL_60
  },
  checkedNotDisabled: {
    backgroundColor: LumaColor.NEUTRAL_40
  },
  checkedAndDisabled: {
    borderColor: LumaColor.NEUTRAL_20,
    backgroundColor: LumaColor.NEUTRAL_20,
    textColor: LumaColor.NEUTRAL_40
  }
};
const CheckboxContainer = /*#__PURE__*/styled.label.withConfig({
  displayName: "LumaCheckboxstyle__CheckboxContainer",
  componentId: "sc-nnwd0h-0"
})(["display:flex;flex-direction:row;align-items:center;gap:0.5rem;font-size:0.75rem;font-family:", ";cursor:", ";color:", ";&:hover:not([disabled]){color:", ";}", ""], LumaFont.DEFAULT.REGULAR, VARIANT_MAP$4['default'].cursor, VARIANT_MAP$4['default'].textColor, VARIANT_MAP$4['hover'].textColor, props => props.disabled && css(["color:", ";cursor:", ";"], VARIANT_MAP$4['disabled'].textColor, VARIANT_MAP$4['disabled'].cursor));
const HiddenCheckbox = /*#__PURE__*/styled.input.attrs({
  type: 'checkbox'
}).withConfig({
  displayName: "LumaCheckboxstyle__HiddenCheckbox",
  componentId: "sc-nnwd0h-1"
})(["clip:rect(0 0 0 0);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;"]);
const StyledCheckbox = /*#__PURE__*/styled.div.withConfig({
  displayName: "LumaCheckboxstyle__StyledCheckbox",
  componentId: "sc-nnwd0h-2"
})(["display:flex;justify-content:center;align-items:center;max-width:1rem;min-width:1rem;height:1rem;font-size:0.75rem;background-color:", ";border:1px solid ", ";border-radius:3px;border-color:", ";color:", ";", ""], VARIANT_MAP$4['default'].backgroundColor, VARIANT_MAP$4['default'].borderColor, props => props.disabled ? VARIANT_MAP$4['disabled'].borderColor : VARIANT_MAP$4['default'].borderColor, VARIANT_MAP$4['default'].textColor, props => `
    ${props.checked && `background-color: ${VARIANT_MAP$4['checkedNotDisabled'].backgroundColor};`}
    ${props.disabled && props.checked && `
      border-color: ${VARIANT_MAP$4['checkedAndDisabled'].borderColor};
      background-color: ${VARIANT_MAP$4['checkedAndDisabled'].backgroundColor};
      color: ${VARIANT_MAP$4['checkedAndDisabled'].textColor};`}
  `);

const LumaCheckbox = _a => {
  var {
    label,
    disabled = false,
    checked = false,
    checkboxKey,
    onChange
  } = _a,
      rest = __rest(_a, ["label", "disabled", "checked", "checkboxKey", "onChange"]);

  return jsxs(CheckboxContainer, Object.assign({
    disabled: disabled,
    checked: checked,
    htmlFor: `checkbox ${checkboxKey}`
  }, {
    children: [jsx(HiddenCheckbox, Object.assign({
      type: "checkbox",
      checked: checked,
      onChange: onChange,
      disabled: disabled,
      id: `checkbox ${checkboxKey}`
    }, rest), checkboxKey), jsx(StyledCheckbox, Object.assign({
      checked: checked,
      disabled: disabled
    }, {
      children: checked && jsx(LumaIcon, {
        iconCode: 'check'
      }, void 0)
    }), void 0), label]
  }), checkboxKey);
};

const DIMENSION_MAP$2 = {
  small: {
    width: '4',
    height: '2rem'
  },
  x_small: {
    width: '3.5',
    height: '1.75rem'
  }
};
const IconSwitchContainer = /*#__PURE__*/styled.label.withConfig({
  displayName: "LumaIconSwitchstyle__IconSwitchContainer",
  componentId: "sc-1uqx7hs-0"
})(["display:flex;position:relative;align-items:center;padding:0;margin:0;border-radius:8px;border:1px solid ", ";color:", ";", " cursor:", ";"], props => props.disabled ? LumaColor.NEUTRAL_20 : LumaColor.NEUTRAL_40, props => props.disabled ? LumaColor.NEUTRAL_40 : LumaColor.NEUTRAL_80, props => `
    width: ${DIMENSION_MAP$2[props.sizeVariant].width}rem;
    height: ${DIMENSION_MAP$2[props.sizeVariant].height};
  `, props => props.disabled ? 'default' : 'pointer');
const IconSwitchItem = /*#__PURE__*/styled.div.withConfig({
  displayName: "LumaIconSwitchstyle__IconSwitchItem",
  componentId: "sc-1uqx7hs-1"
})(["position:relative;display:flex;justify-content:center;padding:0;margin:0;width:100%;", " label:first-child{margin-left:0.125rem;}"], props => `
    height: ${DIMENSION_MAP$2[props.sizeVariant].height};
  `);
const Input$2 = /*#__PURE__*/styled.input.withConfig({
  displayName: "LumaIconSwitchstyle__Input",
  componentId: "sc-1uqx7hs-2"
})(["display:flex;position:absolute;overflow:hidden;clip:rect(0 0 0 0);padding:0;border:0;margin:0;"]);
const Label$1 = /*#__PURE__*/styled.label.withConfig({
  displayName: "LumaIconSwitchstyle__Label",
  componentId: "sc-1uqx7hs-3"
})(["display:flex;position:relative;z-index:2;height:100%;align-items:center;font-size:0.75rem;user-select:none;transition:all 0.3s;cursor:", ";"], props => props.disabled ? 'default' : 'pointer');
const Marker = /*#__PURE__*/styled.div.withConfig({
  displayName: "LumaIconSwitchstyle__Marker",
  componentId: "sc-1uqx7hs-4"
})(["position:absolute;z-index:1;top:0;border-radius:8px;height:100%;left:100%;transition:transform 0.3s;background-color:", ";", ":checked ~ &{transform:translateX(-100%);}", ""], props => props.disabled ? LumaColor.NEUTRAL_20 : LumaColor.NEUTRAL_40, Input$2, props => `
    width: ${+DIMENSION_MAP$2[props.sizeVariant].width / 2}rem;
    height: ${DIMENSION_MAP$2[props.sizeVariant].height};
  `);

const LumaIconSwitch = ({
  icons,
  sizeVariant,
  checked,
  disabled: _disabled = false,
  onChange
}) => {
  return jsxs(IconSwitchContainer, Object.assign({
    disabled: _disabled,
    sizeVariant: sizeVariant
  }, {
    children: [jsxs(IconSwitchItem, Object.assign({
      sizeVariant: sizeVariant
    }, {
      children: [jsx(Input$2, {
        type: "checkbox",
        checked: !checked,
        onChange: onChange,
        disabled: _disabled,
        id: "checkbox"
      }, void 0), jsx(Label$1, Object.assign({
        disabled: _disabled,
        htmlFor: "checkbox"
      }, {
        children: jsx(LumaIcon, {
          iconCode: icons.left,
          type: !checked ? 'solid' : 'light'
        }, void 0)
      }), void 0), jsx(Marker, {
        sizeVariant: sizeVariant,
        disabled: _disabled
      }, void 0)]
    }), void 0), jsx(IconSwitchItem, Object.assign({
      sizeVariant: sizeVariant
    }, {
      children: jsx(Label$1, Object.assign({
        disabled: _disabled,
        htmlFor: "checkbox"
      }, {
        children: jsx(LumaIcon, {
          iconCode: icons.right,
          type: checked ? 'solid' : 'light'
        }, void 0)
      }), void 0)
    }), void 0)]
  }), void 0);
};

const ToggleSwitchContainer = /*#__PURE__*/styled.label.withConfig({
  displayName: "LumaToggleSwitchstyle__ToggleSwitchContainer",
  componentId: "sc-3vtyra-0"
})(["display:flex;width:fit-content;font-family:", ";font-size:0.6875rem;", ""], LumaFont.DEFAULT.LIGHT, props => `
    gap: ${props.label.position === 'side' ? '0.5rem' : '0.625rem'};
    align-items: ${props.label.position === 'side' ? 'center' : 'flex-start'};
    flex-direction: ${props.label.position === 'side' ? 'row-reverse' : 'column'};
    cursor: ${props.disabled ? 'default' : 'pointer'};
    ${props.checked && !props.disabled && `color: ${LumaColor.NEUTRAL_80};`};
    ${!props.checked && !props.disabled && `color: ${LumaColor.NEUTRAL_60};`};
    ${props.disabled && `color: ${LumaColor.NEUTRAL_40};`};
  `);
const Switch = /*#__PURE__*/styled.div.withConfig({
  displayName: "LumaToggleSwitchstyle__Switch",
  componentId: "sc-3vtyra-1"
})(["position:relative;width:3rem;height:1.5rem;border-radius:8px;transition:300ms all;background:", ";&:before{content:'';position:absolute;height:1rem;width:1rem;border-radius:6px;top:0.25rem;left:0.3125rem;background:", ";}"], props => props.disabled ? LumaColor.NEUTRAL_20 : LumaColor.NEUTRAL_40, props => props.disabled ? LumaColor.NEUTRAL_40 : LumaColor.NEUTRAL_00_WHITE);
const Input$1 = /*#__PURE__*/styled.input.withConfig({
  displayName: "LumaToggleSwitchstyle__Input",
  componentId: "sc-3vtyra-2"
})(["position:absolute;opacity:0;&:checked + ", "{background:", ";&:before{content:'';display:block;left:1.75rem;transition:0.2s;}}"], Switch, props => props.disabled ? LumaColor.NEUTRAL_20 : LumaColor.NEUTRAL_80);

const LumaToggleSwitch = ({
  label,
  checked: _checked = false,
  disabled: _disabled = false,
  onChange
}) => {
  return jsxs(ToggleSwitchContainer, Object.assign({
    checked: _checked,
    label: label,
    disabled: _disabled,
    "data-testid": "toggle-test-id"
  }, {
    children: [jsx("span", {
      children: _checked ? label.textChecked : label.textUnchecked
    }, void 0), jsx(Input$1, {
      type: "checkbox",
      checked: _checked,
      onChange: onChange,
      disabled: _disabled
    }, void 0), jsx(Switch, {
      disabled: _disabled
    }, void 0)]
  }), void 0);
};

const VARIANT_MAP$3 = {
  default: {
    textColor: LumaColor.NEUTRAL_80,
    borderColor: LumaColor.NEUTRAL_40,
    backgroundColor: LumaColor.NEUTRAL_00_WHITE
  },
  disabled: {
    textColor: LumaColor.NEUTRAL_40,
    backgroundColor: LumaColor.NEUTRAL_00_WHITE,
    borderColor: LumaColor.NEUTRAL_30
  },
  hover: {
    textColor: LumaColor.NEUTRAL_60
  },
  checkedNotDisabled: {
    backgroundColor: LumaColor.NEUTRAL_80,
    borderColor: LumaColor.NEUTRAL_40
  },
  checkedAndDisabled: {
    borderColor: LumaColor.NEUTRAL_20,
    backgroundColor: LumaColor.NEUTRAL_40
  }
};
const RadioContainer = /*#__PURE__*/styled.label.withConfig({
  displayName: "LumaRadiostyles__RadioContainer",
  componentId: "sc-1okpir3-0"
})(["display:flex;flex-direction:row;align-items:center;gap:0.5rem;font-size:0.75rem;font-family:", ";color:", ";", " &:hover:not([disabled]){color:", ";cursor:pointer;};"], LumaFont.DEFAULT.REGULAR, VARIANT_MAP$3['default'].textColor, props => props.disabled && css(["color:", ";"], VARIANT_MAP$3['disabled'].textColor), VARIANT_MAP$3['hover'].textColor);
const HiddenRadio = /*#__PURE__*/styled.input.attrs({
  type: 'radio'
}).withConfig({
  displayName: "LumaRadiostyles__HiddenRadio",
  componentId: "sc-1okpir3-1"
})(["clip:rect(0 0 0 0);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;"]);
const StyledRadio = /*#__PURE__*/styled.div.withConfig({
  displayName: "LumaRadiostyles__StyledRadio",
  componentId: "sc-1okpir3-2"
})(["width:1rem;height:1rem;background-color:", ";border:1px solid ", ";border-radius:50%;", " ", " ", ""], VARIANT_MAP$3['default'].backgroundColor, VARIANT_MAP$3['default'].borderColor, props => props.disabled && css(["background-color:", ";border-color:", ";"], VARIANT_MAP$3['disabled'].backgroundColor, VARIANT_MAP$3['disabled'].borderColor), props => props.disabled && props.checked && css(["background-color:", ";border-color:", ";border-width:4px;"], VARIANT_MAP$3['checkedAndDisabled'].backgroundColor, VARIANT_MAP$3['checkedAndDisabled'].borderColor), props => props.checked && !props.disabled && css(["background-color:", ";border-color:", ";border-width:4px;"], VARIANT_MAP$3['checkedNotDisabled'].backgroundColor, VARIANT_MAP$3['checkedNotDisabled'].borderColor));

const LumaRadio = _a => {
  var {
    label,
    disabled = false,
    checked = false,
    onChange,
    value = 'radio'
  } = _a,
      rest = __rest(_a, ["label", "disabled", "checked", "onChange", "value"]);

  return jsxs(RadioContainer, Object.assign({
    disabled: disabled,
    checked: checked
  }, {
    children: [jsx(HiddenRadio, Object.assign({
      checked: checked,
      onChange: onChange,
      disabled: disabled,
      value: value
    }, rest), void 0), jsx(StyledRadio, {
      checked: checked,
      disabled: disabled
    }, void 0), label]
  }), void 0);
};

var uncurryThis = functionUncurryThis;
var PROPER_FUNCTION_NAME = functionName.PROPER;
var redefine = redefine$5.exports;
var anObject = anObject$b;
var isPrototypeOf = objectIsPrototypeOf;
var $toString = toString$7;
var fails = fails$i;
var regExpFlags = regexpFlags$1;

var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var n$ToString = RegExpPrototype[TO_STRING];
var getFlags = uncurryThis(regExpFlags);

var NOT_GENERIC = fails(function () { return n$ToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = PROPER_FUNCTION_NAME && n$ToString.name != TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.es/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  redefine(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject(this);
    var p = $toString(R.source);
    var rf = R.flags;
    var f = $toString(rf === undefined && isPrototypeOf(RegExpPrototype, R) && !('flags' in RegExpPrototype) ? getFlags(R) : rf);
    return '/' + p + '/' + f;
  }, { unsafe: true });
}

const VARIANT_MAP$2 = {
  primary: {
    backgroundColor: LumaColor.NEUTRAL_40,
    borderColor: LumaColor.NEUTRAL_40,
    color: LumaColor.NEUTRAL_80,
    fontWeight: 500
  },
  secondary: {
    backgroundColor: LumaColor.NEUTRAL_20,
    borderColor: LumaColor.NEUTRAL_20,
    color: LumaColor.NEUTRAL_80,
    fontWeight: 500
  },
  tertiary: {
    backgroundColor: LumaColor.NEUTRAL_00_WHITE,
    borderColor: LumaColor.NEUTRAL_40,
    color: LumaColor.NEUTRAL_60,
    fontWeight: 'normal'
  },
  icon: {
    backgroundColor: LumaColor.NEUTRAL_20,
    borderColor: LumaColor.NEUTRAL_40,
    color: LumaColor.NEUTRAL_80,
    fontWeight: 'normal'
  }
};
const DIMENSION_MAP$1 = {
  regular: {
    padding: '0 0.5rem',
    height: '1.5rem',
    fontSize: '0.75rem',
    borderWidth: '1px'
  },
  small: {
    padding: '0 0.3125rem',
    height: '1.375rem',
    fontSize: '0.6875rem',
    borderWidth: '1px'
  },
  icon: {
    padding: '0 0.5rem 0 0.4375rem',
    height: '1.25rem',
    fontSize: '0.6875rem',
    borderWidth: '1px'
  }
};
const ChipContainer = /*#__PURE__*/styled.div.withConfig({
  displayName: "LumaChipstyles__ChipContainer",
  componentId: "sc-1mbzdrn-0"
})(["display:flex;font-family:", ";font-weight:500;gap:0.375rem;flex-direction:", ";align-items:", ";"], LumaFont.DEFAULT.REGULAR, props => {
  var _a;

  return ((_a = props.error) === null || _a === void 0 ? void 0 : _a.position) === 'side' ? 'row' : 'column';
}, props => {
  var _a;

  return ((_a = props.error) === null || _a === void 0 ? void 0 : _a.position) === 'side' ? 'center' : 'flex-start';
});
const Chip = /*#__PURE__*/styled.div.withConfig({
  displayName: "LumaChipstyles__Chip",
  componentId: "sc-1mbzdrn-1"
})(["display:flex;align-items:center;", ""], props => `
    height: ${DIMENSION_MAP$1[props.sizeVariant].height};
    fontSize: ${DIMENSION_MAP$1[props.sizeVariant].fontSize};
  `);
const LabelPart = /*#__PURE__*/styled.div.withConfig({
  displayName: "LumaChipstyles__LabelPart",
  componentId: "sc-1mbzdrn-2"
})(["display:flex;justify-content:center;align-items:center;height:100%;border-style:solid;cursor:default;gap:0.25rem;", ""], props => `
    border-radius: ${props.entry ? '8px 0 0 8px' : '8px'};
    border-width: ${DIMENSION_MAP$1[props.sizeVariant].borderWidth};
    padding: ${DIMENSION_MAP$1[props.sizeVariant].padding};
    border-color: ${VARIANT_MAP$2[props.variant].borderColor};
    background-color: ${VARIANT_MAP$2[props.variant].backgroundColor};
    font-size: ${DIMENSION_MAP$1[props.sizeVariant].fontSize};
    color: ${VARIANT_MAP$2[props.variant].color};
  `);
const RemoveIcon = /*#__PURE__*/styled.div.withConfig({
  displayName: "LumaChipstyles__RemoveIcon",
  componentId: "sc-1mbzdrn-3"
})(["height:100%;display:flex;align-items:center;justify-content:center;font-size:0.6875rem;font-weight:bold;cursor:pointer;"]);
const EntryPart = /*#__PURE__*/styled.label.withConfig({
  displayName: "LumaChipstyles__EntryPart",
  componentId: "sc-1mbzdrn-4"
})(["display:flex;align-items:center;justify-content:center;height:100%;min-width:3rem;background-color:white;border-radius:0 8px 8px 0;border-style:solid;border-left:none;padding:0;", ""], props => {
  var _a;

  return `
    cursor: ${props.state === 'locked' ? 'default' : 'text'};
    border-width: ${DIMENSION_MAP$1[props.sizeVariant].borderWidth};
    border-color: ${VARIANT_MAP$2[props.variant].borderColor};
    color: ${((_a = props.error) === null || _a === void 0 ? void 0 : _a.hasError) ? LumaColor.NEGATIVE_60 : LumaColor.NEUTRAL_80};
    ${props.disabled && `
        color: ${LumaColor.NEUTRAL_40};
        cursor: default;
      `}
  `;
});
const Input = /*#__PURE__*/styled.input.withConfig({
  displayName: "LumaChipstyles__Input",
  componentId: "sc-1mbzdrn-5"
})(["display:flex;align-items:center;height:100%;background:transparent;outline:0;border:none;padding:0;text-align:right;color:inherit;cursor:inherit;font-family:inherit;&:focus{outline:none;}::-webkit-inner-spin-button{-webkit-appearance:none;margin:0;}::-webkit-outer-spin-button{-webkit-appearance:none;margin:0;}", ""], props => `
    font-size: ${DIMENSION_MAP$1[props.sizeVariant].fontSize};
  `);
const Unit = /*#__PURE__*/styled.label.withConfig({
  displayName: "LumaChipstyles__Unit",
  componentId: "sc-1mbzdrn-6"
})(["display:flex;align-items:center;height:100%;width:1rem;cursor:inherit;", ""], props => `
    font-size: ${DIMENSION_MAP$1[props.sizeVariant].fontSize};
  `);
const ErrorMessage = /*#__PURE__*/styled.div.withConfig({
  displayName: "LumaChipstyles__ErrorMessage",
  componentId: "sc-1mbzdrn-7"
})(["color:", ";"], LumaColor.NEGATIVE_60);
const Icon = /*#__PURE__*/styled.div.withConfig({
  displayName: "LumaChipstyles__Icon",
  componentId: "sc-1mbzdrn-8"
})(["font-size:0.375rem;"]);

const LumaChip = ({
  children,
  variant: _variant = 'primary',
  state: _state = "locked"
  /* locked */
  ,
  disabled: _disabled = false,
  sizeVariant: _sizeVariant = 'regular',
  entry: _entry = false,
  iconCode,
  onRemove,
  onChange,
  onBlur,
  value,
  unit: _unit = '%',
  error: _error = {
    hasError: false
  },
  entryMaxLength: _entryMaxLength = 3
}) => {
  const [inputValue, setInputValue] = useState('');
  useEffect(() => {
    var _a;

    setInputValue((_a = value === null || value === void 0 ? void 0 : value.toString()) !== null && _a !== void 0 ? _a : '');
  }, [value]);

  const handleChange = e => {
    const inputValue = e.target.value;
    const inputPatternRegex = /^[0-9\b]+$/;

    if (inputValue === '' || inputPatternRegex.test(inputValue)) {
      setInputValue(inputValue);

      if (onChange) {
        onChange(e);
      }
    }
  };

  const calculateInputWidth = inputValue => {
    const inputLength = inputValue.length;
    return `${inputLength !== 0 ? inputLength + 1 : 2}ch`;
  };

  return jsxs(ChipContainer, Object.assign({
    error: _error
  }, {
    children: [jsxs(Chip, Object.assign({
      sizeVariant: _sizeVariant
    }, {
      children: [jsxs(LabelPart, Object.assign({
        sizeVariant: _sizeVariant,
        variant: _variant,
        entry: _entry
      }, {
        children: [_state === "removable"
        /* removable */
        && jsx(RemoveIcon, Object.assign({
          onClick: onRemove,
          "data-testid": "chip-remove"
        }, {
          children: jsx(LumaIcon, {
            iconCode: "times"
          }, void 0)
        }), void 0), children, iconCode && jsx(Icon, {
          children: jsx(LumaIcon, {
            iconCode: iconCode
          }, void 0)
        }, void 0)]
      }), void 0), _entry && jsxs(EntryPart, Object.assign({
        sizeVariant: _sizeVariant,
        error: _error,
        variant: _variant,
        disabled: _disabled,
        state: _state
      }, {
        children: [jsx(Input, {
          type: "text",
          maxLength: _entryMaxLength,
          sizeVariant: _sizeVariant,
          value: inputValue,
          error: _error,
          onChange: handleChange,
          onBlur: onBlur,
          style: {
            width: calculateInputWidth(inputValue)
          },
          disabled: _disabled || _state === "locked"
          /* locked */
          ,
          "data-testid": "chip-entry"
        }, void 0), jsx(Unit, Object.assign({
          sizeVariant: _sizeVariant
        }, {
          children: inputValue.toString().length > 0 && _unit
        }), void 0)]
      }), void 0)]
    }), void 0), (_error === null || _error === void 0 ? void 0 : _error.hasError) && (_error === null || _error === void 0 ? void 0 : _error.errorMessage) && jsx(ErrorMessage, {
      children: _error.errorMessage
    }, void 0)]
  }), void 0);
};

const AgGridWrapper = /*#__PURE__*/styled.div.withConfig({
  displayName: "LumaAgGridstyles__AgGridWrapper",
  componentId: "sc-1yw3ccy-0"
})(["--ag-border-color:", ";--ag-border-radius:8px;& .ag-root-wrapper,& .ag-root{border-radius:8px;}& .ag-header{border-radius:8px 8px 0 0;}& .ag-header-cell{&:first-child{border-radius:8px 0 0 0;}&:last-child{border-radius:0 8px 0 0;}}& .ag-cell{display:flex;text-align:left;align-items:center;}", ""], LumaColor.NEUTRAL_30, props => props.additionalStyles);
const rowStyle = {};

function LumaAgGrid({
  gridOptions,
  gridStyles,
  additionalStyles = ''
}) {
  return jsx(AgGridWrapper, Object.assign({
    additionalStyles: additionalStyles,
    style: Object.assign({}, gridStyles),
    className: "ag-theme-alpine"
  }, {
    children: jsx(AgGridReact, {
      rowStyle: rowStyle,
      gridOptions: Object.assign({}, gridOptions)
    }, void 0)
  }), void 0);
}

const rotate360 = /*#__PURE__*/keyframes(["from{transform:rotate(0deg);}to{transform:rotate(360deg);}"]);
const LoadingSpinner = /*#__PURE__*/styled.div.withConfig({
  displayName: "Spinnerstyle__LoadingSpinner",
  componentId: "sc-exun2d-0"
})(["animation:", " 1s linear infinite;border-top:0.125rem solid ", ";border-right:0.125rem solid ", ";border-bottom:0.125rem solid ", ";border-left:0.125rem solid transparent;background:transparent;width:3.5rem;height:3.5rem;border-radius:50%;"], rotate360, colors.primary80Daintree, colors.primary80Daintree, colors.primary80Daintree);
const LoadingSpinnerContainer = /*#__PURE__*/styled.div.withConfig({
  displayName: "Spinnerstyle__LoadingSpinnerContainer",
  componentId: "sc-exun2d-1"
})(["display:flex;justify-content:center;align-items:center;width:100%;height:100%;"]);

const Spinner = () => {
  return jsx(LoadingSpinnerContainer, {
    children: jsx(LoadingSpinner, {}, void 0)
  }, void 0);
};

const MaxLengthValue = 15;

const LumaMultiDropDownOption = ({
  selectedItems: _selectedItems = [],
  item: _item = {},
  disabled
}) => {
  const isChecked = !!_selectedItems.find(({
    value
  }) => value === _item.value);
  return jsxs(DropDownItemWrapper, Object.assign({
    variant: "multi"
  }, {
    children: [jsx(StyledCheckbox$1, Object.assign({
      disabled: disabled,
      isChecked: isChecked
    }, {
      children: isChecked && jsx(LumaIcon, {
        iconCode: "check"
      }, void 0)
    }), void 0), jsx(DropDownText, Object.assign({
      disabled: _item.isDisabled,
      className: "DropDownText"
    }, {
      children: _item.label
    }), void 0)]
  }), void 0);
};

const inputDisplayValue = selectedDropdownItems => {
  const valueSelected = selectedDropdownItems.map(item => {
    return item === null || item === void 0 ? void 0 : item.label;
  });
  let firstSelected = valueSelected[0] || '';

  if (firstSelected.length > MaxLengthValue) {
    firstSelected = firstSelected.substring(0, MaxLengthValue) + '...';
  }

  return selectedDropdownItems.length > 1 ? `${firstSelected}, +${selectedDropdownItems.length - 1}` : `${firstSelected}`;
};

const LumaMultiDropDown = _a => {
  var {
    name,
    id,
    placeholder,
    error,
    readOnly = true,
    disabled,
    fullWidth,
    helperText,
    size = 'medium',
    items = [],
    defaultSelectedItems,
    onChange,
    handleBlur
  } = _a,
      rest = __rest(_a, ["name", "id", "placeholder", "error", "readOnly", "disabled", "fullWidth", "helperText", "size", "items", "defaultSelectedItems", "onChange", "handleBlur"]);

  const [allItems, setAllItems] = useState(defaultSelectedItems || []);
  const {
    isOpen,
    getMenuProps,
    highlightedIndex,
    getItemProps,
    getInputProps,
    getComboboxProps,
    openMenu,
    closeMenu
  } = useCombobox({
    items,
    itemToString: item => {
      var _a;

      return (_a = item === null || item === void 0 ? void 0 : item.label) !== null && _a !== void 0 ? _a : '';
    },
    selectedItem: null,

    stateReducer(state, actionAndChanges) {
      const {
        changes,
        type
      } = actionAndChanges;

      switch (type) {
        case useCombobox.stateChangeTypes.InputKeyDownEnter:
        case useCombobox.stateChangeTypes.ItemClick:
        case useCombobox.stateChangeTypes.InputBlur:
          return Object.assign(Object.assign({}, changes), {
            isOpen: !!changes.selectedItem
          });
      }

      return changes;
    },

    onStateChange({
      type,
      selectedItem
    }) {
      let newItems = [];

      switch (type) {
        case useCombobox.stateChangeTypes.InputKeyDownEnter:
        case useCombobox.stateChangeTypes.ItemClick:
          if (selectedItem) {
            const index = allItems.findIndex(({
              value
            }) => value === selectedItem.value);

            if (index > 0) {
              newItems = [...allItems.slice(0, index), ...allItems.slice(index + 1)];
            } else if (index === 0) {
              newItems = [...allItems.slice(1)];
            } else {
              newItems = [...allItems, selectedItem];
            }

            setAllItems(newItems);
          }

          break;
      }
    }

  });
  useEffect(() => {
    onChange === null || onChange === void 0 ? void 0 : onChange(allItems);
  }, [allItems, onChange]);
  return jsxs(Root$2, Object.assign({
    size: size,
    error: error,
    fullWidth: fullWidth
  }, getComboboxProps(), {
    children: [jsx(LumaTextEntry, Object.assign({}, getInputProps(), {
      label: placeholder,
      disabled: disabled,
      readOnly: readOnly,
      value: inputDisplayValue(allItems),
      icon: jsx(LumaIcon, {
        onClick: isOpen ? closeMenu : openMenu,
        iconCode: isOpen ? 'angle-up' : 'angle-down'
      }, void 0),
      fullWidth: fullWidth,
      helperText: helperText,
      sizeVariant: size,
      error: error,
      useByDropdown: true,
      onClick: () => {
        if (!isOpen) openMenu();else closeMenu();
      }
    }, rest), void 0), !readOnly ? jsx(LumaDropDownBox, {
      size: size,
      isOpen: isOpen,
      items: items,
      selectedItems: allItems,
      getMenuProps: getMenuProps,
      highlightedIndex: highlightedIndex,
      getItemProps: getItemProps,
      renderComponent: jsx(LumaMultiDropDownOption, {}, void 0),
      id: id
    }, void 0) : null]
  }), void 0);
};

const LumaSingleDropDown = _a => {
  var {
    name,
    id,
    placeholder,
    error,
    readOnly = true,
    disabled,
    fullWidth,
    helperText,
    size = 'medium',
    items = [],
    defaultSelectedItem,
    onChange,
    handleBlur,
    className = '',
    dropDownIcon,
    dropDownIconType
  } = _a,
      rest = __rest(_a, ["name", "id", "placeholder", "error", "readOnly", "disabled", "fullWidth", "helperText", "size", "items", "defaultSelectedItem", "onChange", "handleBlur", "className", "dropDownIcon", "dropDownIconType"]);

  const [inputValue, setInputValue] = useState((defaultSelectedItem === null || defaultSelectedItem === void 0 ? void 0 : defaultSelectedItem.label) || '');
  useEffect(() => {
    setInputValue(defaultSelectedItem === null || defaultSelectedItem === void 0 ? void 0 : defaultSelectedItem.label);
  }, [defaultSelectedItem]);
  const {
    isOpen,
    openMenu,
    closeMenu,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    getItemProps,
    highlightedIndex,
    selectedItem,
    reset
  } = useCombobox({
    inputValue,
    itemToString: item => {
      var _a;

      return (_a = item === null || item === void 0 ? void 0 : item.label) !== null && _a !== void 0 ? _a : '';
    },
    items,

    onSelectedItemChange({
      selectedItem
    }) {
      setInputValue((selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.label) || '');
      onChange === null || onChange === void 0 ? void 0 : onChange(selectedItem !== null && selectedItem !== void 0 ? selectedItem : null);
    },

    onInputValueChange({
      inputValue
    }) {
      if (inputValue === '') {
        reset();
      }

      setInputValue(inputValue || '');
    }

  });
  return jsxs(Root$2, Object.assign({
    size: size,
    error: error,
    fullWidth: fullWidth,
    className: className
  }, getComboboxProps({
    readOnly,
    disabled
  }), {
    children: [jsx(LumaTextEntry, Object.assign({}, getInputProps({
      label: placeholder,
      disabled,
      readOnly
    }), {
      value: inputValue,
      icon: dropDownIcon ? jsx(LumaIcon, {
        onClick: isOpen ? closeMenu : openMenu,
        iconCode: dropDownIcon,
        type: dropDownIconType
      }, void 0) : jsx(LumaIcon, {
        onClick: isOpen ? closeMenu : openMenu,
        iconCode: isOpen ? 'angle-up' : 'angle-down'
      }, void 0),
      fullWidth: fullWidth,
      helperText: helperText,
      sizeVariant: size,
      error: error,
      useByDropdown: true,
      onClick: () => {
        if (!isOpen) openMenu();else closeMenu();
      }
    }, rest), void 0), jsx(LumaDropDownBox, {
      size: size,
      isOpen: isOpen,
      items: items,
      getMenuProps: getMenuProps,
      highlightedIndex: highlightedIndex,
      getItemProps: getItemProps,
      renderComponent: jsx(LumaSingleDropDownOption, {}, void 0),
      selectedItem: selectedItem || defaultSelectedItem,
      id: id
    }, void 0)]
  }), void 0);
};

const ValidUntilInput = /*#__PURE__*/styled.input.withConfig({
  displayName: "LumaValidUntilstyles__ValidUntilInput",
  componentId: "sc-14dgw5-0"
})(["padding:0.5rem;border-radius:8px;border:1px solid ", ";"], LumaColor.NEUTRAL_40);
const ValidUntilButton = /*#__PURE__*/styled.button.withConfig({
  displayName: "LumaValidUntilstyles__ValidUntilButton",
  componentId: "sc-14dgw5-1"
})(["background-color:", ";font-size:0.75rem;font-weight:500;color:inherit;padding:0.5rem 2.625rem;border:1px solid ", ";border-radius:8px;cursor:pointer;min-height:1.875rem;"], LumaColor.NEUTRAL_00_WHITE, LumaColor.NEUTRAL_40);

function LumaValidUntil({
  onChange,
  inputDataTestId = 'input-valid_until',
  buttonDataTestId = 'button-valid_until'
}) {
  const [focus, setFocus] = useState(false);
  const [validUntil, setValidUntil] = useState(null);
  const inputRef = useRef(document.createElement('input'));
  return focus ? jsx(ValidUntilInput, {
    type: "number",
    ref: inputRef,
    "data-testid": inputDataTestId,
    value: validUntil !== null && validUntil !== void 0 ? validUntil : '',
    min: "0",
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    onKeyDown: event => {
      if (event.key === 'Enter') {
        const value = inputRef.current.value;
        setValidUntil(value ? Number(value) : null);
        onChange(value ? Number(value) : undefined);
        setFocus(false);
      }
    },
    onChange: event => {
      const value = event.target.value;
      setValidUntil(value ? Number(value) : null);
      onChange(value ? Number(value) : undefined);
    }
  }, void 0) : jsx(ValidUntilButton, Object.assign({
    "data-testid": buttonDataTestId,
    onClick: () => {
      setFocus(true);
      setTimeout(() => {
        var _a;

        return (_a = inputRef === null || inputRef === void 0 ? void 0 : inputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
      }, 0);
    }
  }, {
    children: (validUntil || validUntil === 0) && jsxs("span", {
      children: [validUntil, " minutes"]
    }, void 0)
  }), void 0);
}

const CenteredContainer = /*#__PURE__*/styled.div.withConfig({
  displayName: "LumaNotFoundstyles__CenteredContainer",
  componentId: "sc-145ta4w-0"
})(["display:flex;flex-direction:column;align-items:center;justify-content:center;height:80vh;"]);
const IconWrapper$1 = /*#__PURE__*/styled(LumaIcon).withConfig({
  displayName: "LumaNotFoundstyles__IconWrapper",
  componentId: "sc-145ta4w-1"
})(["margin-bottom:2rem;"]);
const NotFoundText = /*#__PURE__*/styled.span.withConfig({
  displayName: "LumaNotFoundstyles__NotFoundText",
  componentId: "sc-145ta4w-2"
})(["font-weight:600;margin-bottom:1rem;"]);
const LinkText = /*#__PURE__*/styled.span.withConfig({
  displayName: "LumaNotFoundstyles__LinkText",
  componentId: "sc-145ta4w-3"
})(["color:", ";font-weight:600;"], LumaColor.PRIMARY_50);
const IconStyles = {
  fontSize: '4.25rem',
  color: LumaColor.PRIMARY_50
};

const defaultProps = {
  returnUrl: 'dashboard'
};
function LumaNotFound(props) {
  props = Object.assign(Object.assign({}, defaultProps), props);
  return jsxs(CenteredContainer, {
    children: [jsx(IconWrapper$1, {
      iconCode: "exclamation-circle",
      type: "solid",
      style: IconStyles
    }, void 0), jsx(NotFoundText, {
      children: "Page not found"
    }, void 0), jsxs("div", {
      children: ["Return to your", ' ', jsx(Link$1, Object.assign({
        to: props.returnUrl
      }, {
        children: jsx(LinkText, {
          children: "Dashboard"
        }, void 0)
      }), void 0)]
    }, void 0)]
  }, void 0);
}

const Root = /*#__PURE__*/styled.div.withConfig({
  displayName: "LumaDatePickerstyles__Root",
  componentId: "sc-cnjgiw-0"
})(["width:100%;position:relative;", " .TextEntry--container{width:100%;max-width:100%;}input{color:", ";", " &::-webkit-datetime-edit-year-field:not([aria-valuenow]),&::-webkit-datetime-edit-month-field:not([aria-valuenow]),&::-webkit-datetime-edit-day-field:not([aria-valuenow]),&::-webkit-datetime-edit{color:transparent;user-select:none;font-family:", ";font-weight:500;}&::before{width:100%;content:'';}", "}.text-entry--outlined{box-sizing:border-box;outline:0;position:relative;width:100%;}"], props => props.fullWidth ? `width: 100%; max-width: 100%;` : '', LumaColor.NEUTRAL_80, props => props.disabled ? `color: ${LumaColor.NEUTRAL_40};` : '', LumaFont.DEFAULT.REGULAR, props => props.value ? ` &::before {
            width: 0%;
            content: '';
          }` : '');
const RootDropdown = /*#__PURE__*/styled.div.withConfig({
  displayName: "LumaDatePickerstyles__RootDropdown",
  componentId: "sc-cnjgiw-1"
})(["display:flex;flex-direction:column;width:18.5rem;border-radius:8px;box-shadow:0 0 4px 0 rgba(47,51,54,0.32);border:1px solid ", ";top:", ";height:fit-content;position:absolute;z-index:2;background-color:", ";overflow:hidden;"], LumaColor.NEUTRAL_80, props => `calc(${props.size ? Number(SIZE_MAP$1[props.size].height + 0.5) : 3}rem)`, LumaColor.NEUTRAL_00_WHITE);
const DatePickerHeaderButton = /*#__PURE__*/styled.button.withConfig({
  displayName: "LumaDatePickerstyles__DatePickerHeaderButton",
  componentId: "sc-cnjgiw-2"
})(["background-color:transparent;border:1px solid transparent;outline:none;padding:0 0.3125rem;cursor:pointer;line-height:initial;"]);
const DatePickerHeader = /*#__PURE__*/styled.div.withConfig({
  displayName: "LumaDatePickerstyles__DatePickerHeader",
  componentId: "sc-cnjgiw-3"
})(["position:relative;padding:1rem 0.5625rem 1.5rem;display:flex;width:100%;justify-content:space-between;align-items:center;font-size:0.875rem;"]);
const DatePickerHeaderMonth = /*#__PURE__*/styled.span.withConfig({
  displayName: "LumaDatePickerstyles__DatePickerHeaderMonth",
  componentId: "sc-cnjgiw-4"
})(["font-family:", ";font-size:0.875rem;font-stretch:normal;font-style:normal;line-height:normal;letter-spacing:normal;vertical-align:middle;min-width:4.5rem;text-align:center;"], LumaFont.DEFAULT.BOLD);
const DatePickerDayHeader = /*#__PURE__*/styled.div.withConfig({
  displayName: "LumaDatePickerstyles__DatePickerDayHeader",
  componentId: "sc-cnjgiw-5"
})(["position:relative;padding-right:1rem;padding-left:1rem;display:flex;width:100%;justify-content:space-between;padding-bottom:0.1875rem;border-bottom:1px solid ", ";"], LumaColor.NEUTRAL_20);
const DatePickerDayHeaderitem = /*#__PURE__*/styled.div.withConfig({
  displayName: "LumaDatePickerstyles__DatePickerDayHeaderitem",
  componentId: "sc-cnjgiw-6"
})(["font-family:", ";font-size:0.6875rem;line-height:normal;letter-spacing:normal;text-align:center;color:", ";width:1.5rem;"], LumaFont.DEFAULT.REGULAR, LumaColor.NEUTRAL_60);
const DatePickerWrapper = /*#__PURE__*/styled.div.withConfig({
  displayName: "LumaDatePickerstyles__DatePickerWrapper",
  componentId: "sc-cnjgiw-7"
})(["display:flex;flex-direction:column;flex:auto;flex-wrap:wrap;padding-top:1.1875rem;justify-content:center;align-items:center;text-align:center;width:100%;padding-bottom:1.6875rem;"]);
const DatePickerDayBody = /*#__PURE__*/styled.div.withConfig({
  displayName: "LumaDatePickerstyles__DatePickerDayBody",
  componentId: "sc-cnjgiw-8"
})(["flex-basis:13%;display:flex;flex-direction:row;width:100%;justify-content:center;flex-wrap:wrap;align-items:center;gap:1rem;"]);
const DatePickerDayBodyItem = /*#__PURE__*/styled.div.withConfig({
  displayName: "LumaDatePickerstyles__DatePickerDayBodyItem",
  componentId: "sc-cnjgiw-9"
})(["position:relative;height:0;margin-bottom:1.25rem;align-items:center;justify-content:space-between;gap:0.6875rem;"]);
const DatePickerDate = /*#__PURE__*/styled.div.withConfig({
  displayName: "LumaDatePickerstyles__DatePickerDate",
  componentId: "sc-cnjgiw-10"
})(["padding-top:0.1875rem;height:1.5rem;border-radius:8px;font-size:0.6875rem;font-weight:normal;font-stretch:normal;font-style:normal;line-height:normal;letter-spacing:normal;text-align:center;color:", ";font-family:", ";border:solid 1px transparent;transition:all 300ms ease-in-out;cursor:pointer;background-color:transparent;margin-bottom:1rem;justify-content:center;align-items:center;width:1.5rem;&:hover{border:solid 1px ", ";background-color:", ";}", " ", " ", ""], LumaColor.PRIMARY_80_DAINTREE, LumaFont.DEFAULT.REGULAR, LumaColor.NEUTRAL_60, LumaColor.NEUTRAL_00_WHITE, props => props.isToday ? `border: solid 1px ${LumaColor.NEUTRAL_20}; background-color: ${LumaColor.NEUTRAL_20};` : '', props => props.isSelected ? `border: solid 1px ${LumaColor.NEUTRAL_40}; background-color: ${LumaColor.NEUTRAL_40};` : '', props => props.isActive ? `color: ${LumaColor.NEUTRAL_60};` : '');

const CalendarDropDownHeader = ({
  month,
  onChangeMonth,
  onChangeYear
}) => {
  return jsxs(DatePickerHeader, {
    children: [jsx(DatePickerHeaderButton, Object.assign({
      "data-testid": "button-prev_year",
      onClick: () => {
        onChangeYear(ChangeDirections.previous);
      }
    }, {
      children: jsx(LumaIcon, {
        iconCode: "angle-double-left",
        style: {
          verticalAlign: 'middle'
        }
      }, void 0)
    }), void 0), jsx(DatePickerHeaderButton, Object.assign({
      "data-testid": "button-prev_month",
      onClick: () => {
        onChangeMonth(ChangeDirections.previous);
      }
    }, {
      children: jsx(LumaIcon, {
        iconCode: "angle-left",
        style: {
          verticalAlign: 'middle'
        }
      }, void 0)
    }), void 0), jsx(DatePickerHeaderMonth, {
      children: DateFormatter.formatLocalDate(month, 'MMMM yyyy')
    }, void 0), jsx(DatePickerHeaderButton, Object.assign({
      "data-testid": "button-next_month",
      onClick: () => {
        onChangeMonth(ChangeDirections.next);
      }
    }, {
      children: jsx(LumaIcon, {
        iconCode: "angle-right",
        style: {
          verticalAlign: 'middle'
        }
      }, void 0)
    }), void 0), jsx(DatePickerHeaderButton, Object.assign({
      "data-testid": "button-next_year",
      onClick: () => {
        onChangeYear(ChangeDirections.next);
      }
    }, {
      children: jsx(LumaIcon, {
        iconCode: "angle-double-right",
        style: {
          verticalAlign: 'middle'
        }
      }, void 0)
    }), void 0)]
  }, void 0);
};

const CalendarWeek = () => {
  return jsx(DatePickerDayHeader, {
    children: weekDays.map((day, key) => jsx(DatePickerDayHeaderitem, {
      children: day
    }, key))
  }, void 0);
};
const weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

const CalendarBody = ({
  selected,
  onChangeCurrentDate,
  month
}) => {
  const days = allDaysInMonthExtendedToFullWeeks(month);
  const now = new Date();
  return jsx(DatePickerWrapper, {
    children: jsx(DatePickerDayBody, {
      children: days.map((day, key) => {
        return jsx(DatePickerDayBodyItem, {
          children: jsx(DatePickerDate, Object.assign({
            onClick: () => onChangeCurrentDate(day),
            onKeyDown: () => onChangeCurrentDate(day),
            isActive: !isSameMonth(month, day),
            isToday: isSameDay(now, day),
            isSelected: selected && isSameDay(selected, day),
            className: 'DatePicker--date'
          }, {
            children: format(day, 'd')
          }), void 0)
        }, key);
      })
    }, void 0)
  }, void 0);
};

const allDaysInMonthExtendedToFullWeeks = someDayInTheMonth => {
  return eachDayOfInterval({
    start: startOfWeek(startOfMonth(someDayInTheMonth)),
    end: endOfWeek(endOfMonth(someDayInTheMonth))
  });
};

var ChangeDirections;

(function (ChangeDirections) {
  ChangeDirections["previous"] = "previous";
  ChangeDirections["next"] = "next";
})(ChangeDirections || (ChangeDirections = {}));

const DatePickerDropDown = ({
  onChangeHandler,
  size: _size = 'medium',
  onDropdownClose,
  selected: _selected = undefined
}) => {
  const [currentMonth, setCurrentMonth] = useState(startOfMonth(_selected !== null && _selected !== void 0 ? _selected : new Date()));

  const onChangeMonth = change => {
    setCurrentMonth(change === ChangeDirections.next ? addMonths(currentMonth, 1) : subMonths(currentMonth, 1));
  };

  const onChangeYear = change => {
    setCurrentMonth(change === ChangeDirections.next ? addYears(currentMonth, 1) : subYears(currentMonth, 1));
  };

  const onDateSelected = selectedDate => {
    onChangeHandler(selectedDate);

    if (onDropdownClose) {
      onDropdownClose();
    }
  };

  return jsxs(RootDropdown, Object.assign({
    size: _size
  }, {
    children: [jsx(CalendarDropDownHeader, {
      month: currentMonth,
      onChangeMonth: onChangeMonth,
      onChangeYear: onChangeYear
    }, void 0), jsx(CalendarWeek, {}, void 0), jsx(CalendarBody, {
      onChangeCurrentDate: onDateSelected,
      selected: _selected,
      month: currentMonth
    }, void 0)]
  }), void 0);
};

const LumaDatePicker = _a => {
  var {
    id,
    onChange,
    onBlur,
    defaultValue,
    label,
    error,
    helperText,
    fullWidth,
    disabled,
    size = 'medium',
    variant = 'date',
    inputFormat = undefined,
    isOpen = false
  } = _a,
      rest = __rest(_a, ["id", "onChange", "onBlur", "defaultValue", "label", "error", "helperText", "fullWidth", "disabled", "size", "variant", "inputFormat", "isOpen"]);

  const [dateValue, setDateValue] = React.useState(defaultValue);
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(isOpen);
  useEffect(() => {
    setDateValue(defaultValue);
  }, [defaultValue]);
  const formattedDateValue = dateValue !== undefined ? inputFormat !== undefined ? DateFormatter.formatLocalDate(dateValue, inputFormat) : dateValue.toLocaleDateString() : undefined;

  const onChangeHandler = newValue => {
    setDateValue(newValue);
    setIsDropdownOpen(false);
    onChange === null || onChange === void 0 ? void 0 : onChange(newValue);
  };

  const styleCalendarIcon = {
    fontSize: '0.5rem'
  };
  return jsx(Root, Object.assign({
    size: size,
    value: formattedDateValue,
    fullWidth: fullWidth,
    disabled: disabled
  }, {
    children: jsxs(OutsideClickHandler, Object.assign({
      onOutsideClick: () => setIsDropdownOpen(false)
    }, {
      children: [jsx(LumaTextEntry, Object.assign({
        type: "text",
        sizeVariant: size,
        value: formattedDateValue,
        label: label,
        helperText: helperText,
        readOnly: true,
        disabled: disabled,
        error: error,
        fullWidth: fullWidth,
        onBlur: onBlur,
        onFocus: () => setIsDropdownOpen(true),
        icon: jsx(LumaIcon, {
          type: "regular",
          iconCode: "calendar",
          style: styleCalendarIcon
        }, void 0),
        useByDropdown: true
      }, rest), void 0), isDropdownOpen ? jsx(DatePickerDropDown, {
        onChangeHandler: onChangeHandler,
        variant: variant,
        isOpen: isDropdownOpen,
        size: size,
        selected: dateValue
      }, void 0) : null]
    }), void 0)
  }), void 0);
};

const VARIANT_MAP$1 = {
  active: {
    color: LumaColor.NEUTRAL_80
  },
  disabled: {
    color: LumaColor.NEUTRAL_40
  },
  unselected: {
    color: LumaColor.NEUTRAL_60,
    hoverColor: LumaColor.NEUTRAL_80
  }
};
const DIMENSIONS_MAP = {
  buttons: {
    gap: '0.75rem',
    fontFamily: LumaFont.DEFAULT.BOLD
  },
  links: {
    gap: '1.5rem',
    fontFamily: LumaFont.DEFAULT.MEDIUM
  }
};
const TabsContainer = /*#__PURE__*/styled.div.withConfig({
  displayName: "LumaTabsstyles__TabsContainer",
  componentId: "sc-1doptis-0"
})(["display:flex;flex-direction:row;font-size:1rem;font-family:", ";gap:", ";"], props => DIMENSIONS_MAP[props.variant].fontFamily, props => DIMENSIONS_MAP[props.variant].gap);
const Indicator = /*#__PURE__*/styled.div.withConfig({
  displayName: "LumaTabsstyles__Indicator",
  componentId: "sc-1doptis-1"
})(["width:100%;height:0.1875rem;background-color:", ";margin-top:0.375rem;"], LumaColor.PRIMARY_50);
const Link = /*#__PURE__*/styled.a.withConfig({
  displayName: "LumaTabsstyles__Link",
  componentId: "sc-1doptis-2"
})(["cursor:pointer;color:", ";&:hover{color:", ";}", ""], VARIANT_MAP$1['unselected'].color, VARIANT_MAP$1['unselected'].hoverColor, props => `
    ${props.active && `color: ${VARIANT_MAP$1['active'].color};`};
    ${props.disabled && `
      pointer-events: none;
      color: ${VARIANT_MAP$1['disabled'].color};`};
  `);

const LumaTabs = ({
  variant: _variant = 'buttons',
  activeValue: _activeValue = '',
  fieldValues,
  onClick,
  buttonIconCode
}) => {
  return jsx(TabsContainer, Object.assign({
    variant: _variant
  }, {
    children: fieldValues.map(({
      label,
      paramName,
      isDisabled
    }) => {
      const onButtonClick = () => {
        onClick(paramName);
      };

      const isActive = paramName === _activeValue;

      if (_variant === "links"
      /* links */
      ) {
        return jsxs(Link, Object.assign({
          active: isActive,
          disabled: isDisabled !== null && isDisabled !== void 0 ? isDisabled : false,
          onClick: onButtonClick
        }, {
          children: [label, isActive && jsx(Indicator, {}, void 0)]
        }), paramName);
      } else {
        return jsx(LumaButton, Object.assign({
          variant: isActive ? 'tabs_active' : 'tabs_inactive',
          size: "tab",
          icon: {
            iconComponent: jsx(LumaIcon, {
              type: "solid",
              iconCode: buttonIconCode
            }, void 0),
            isOnRight: true
          },
          disabled: isDisabled !== null && isDisabled !== void 0 ? isDisabled : false,
          onClick: onButtonClick
        }, {
          children: label
        }), paramName);
      }
    })
  }), void 0);
};

const ToggleButtonContainer = /*#__PURE__*/styled.div.withConfig({
  displayName: "LumaToggleButtonstyles__ToggleButtonContainer",
  componentId: "sc-1q0pai3-0"
})(["button:not(:first-child){margin-left:0.625rem;}"]);
const Title = /*#__PURE__*/styled.div.withConfig({
  displayName: "LumaToggleButtonstyles__Title",
  componentId: "sc-1q0pai3-1"
})(["margin:0 4.75rem 0.625rem 0;font-size:0.6875rem;color:", ";font-family:", ";"], LumaColor.NEUTRAL_60, LumaFont.DEFAULT.REGULAR);
const ButtonWrapper = /*#__PURE__*/styled.div.withConfig({
  displayName: "LumaToggleButtonstyles__ButtonWrapper",
  componentId: "sc-1q0pai3-2"
})(["display:flex;flex-direction:row;gap:0.5rem;"]);

const LumaToggleButton = ({
  activeValue,
  fieldValues,
  title,
  size: _size = 'toggle_medium',
  onClick
}) => {
  return jsxs(ToggleButtonContainer, {
    children: [title && jsx(Title, {
      children: title
    }, void 0), jsx(ButtonWrapper, {
      children: fieldValues.map(({
        label,
        paramName,
        isDisabled
      }) => {
        const onButtonClick = () => {
          onClick(paramName);
        };

        const isActive = paramName === activeValue;
        return jsx(LumaButton, Object.assign({
          variant: isActive ? 'toggle_active' : 'toggle_inactive',
          size: _size,
          disabled: isDisabled || false,
          onClick: onButtonClick
        }, {
          children: label
        }), paramName);
      })
    }, void 0)]
  }, void 0);
};

const VARIANT_MAP = {
  default: {
    color: LumaColor.PRIMARY_50,
    cursor: 'pointer'
  },
  disabled: {
    color: LumaColor.NEUTRAL_40,
    cursor: 'default'
  },
  hover: {
    color: LumaColor.NEUTRAL_60,
    cursor: 'pointer'
  }
};
const DIMENSION_MAP = {
  medium: {
    fontSize: '0.875rem',
    iconSize: '1rem'
  },
  small: {
    fontSize: '0.75rem',
    iconSize: '0.875rem'
  }
};
const IconLinkContainer = /*#__PURE__*/styled.a.withConfig({
  displayName: "LumaIconLinkstyles__IconLinkContainer",
  componentId: "sc-12iijw5-0"
})(["display:flex;flex-direction:row;gap:0.5rem;color:", ";cursor:", ";pointer-events:", ";&:hover:not([disabled]){color:", ";}"], props => props.disabled ? VARIANT_MAP['disabled'].color : VARIANT_MAP['default'].color, props => props.disabled ? VARIANT_MAP['disabled'].cursor : VARIANT_MAP['default'].cursor, props => props.disabled ? 'none' : '', VARIANT_MAP['disabled'].color);
const Label = /*#__PURE__*/styled.div.withConfig({
  displayName: "LumaIconLinkstyles__Label",
  componentId: "sc-12iijw5-1"
})(["font-family:", ";", ";"], LumaFont.DEFAULT.MEDIUM, props => `font-size: ${DIMENSION_MAP[props.sizeVariant].fontSize};`);
const IconWrapper = /*#__PURE__*/styled.div.withConfig({
  displayName: "LumaIconLinkstyles__IconWrapper",
  componentId: "sc-12iijw5-2"
})(["display:flex;align-items:center;", ";"], props => `font-size: ${DIMENSION_MAP[props.sizeVariant].fontSize};`);

const LumaIconLink = _a => {
  var {
    iconCode,
    label,
    sizeVariant,
    disabled = false
  } = _a,
      rest = __rest(_a, ["iconCode", "label", "sizeVariant", "disabled"]);

  return jsxs(IconLinkContainer, Object.assign({
    disabled: disabled
  }, rest, {
    children: [jsx(IconWrapper, Object.assign({
      sizeVariant: sizeVariant
    }, {
      children: jsx(LumaIcon, {
        iconCode: iconCode
      }, void 0)
    }), void 0), jsx(Label, Object.assign({
      sizeVariant: sizeVariant
    }, {
      children: label
    }), void 0)]
  }), void 0);
};

var img$1 = "data:image/svg+xml,%3csvg width='69' height='80' viewBox='0 0 69 80' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='m34.55 60.043 7.08 6.998a4.189 4.189 0 0 1 0 5.961L34.55 80l-7.081-6.998a4.189 4.189 0 0 1 0-5.961l7.08-6.998zm-20.28-40 7.08 6.998a4.189 4.189 0 0 1 0 5.961L14.27 40l7.08 6.998c1.66 1.641 4.37 1.641 6.031 0l7.036-6.956-7.036-6.953a4.189 4.189 0 0 1 0-5.962l7.08-6.997 7.081 6.997c1.66 1.642 4.37 1.642 6.031 0l7.08-6.997.016.014.018.019.06.058c.671.665 4.918 4.862 10.046 9.93 5.595 5.357 5.595 14.341.088 19.87L54.654 60.044l-7.08-6.998a4.189 4.189 0 0 1 0-5.96l7.08-6.999-7.08-6.997c-1.661-1.642-4.371-1.642-6.032 0l-7.037 6.954 7.037 6.955a4.189 4.189 0 0 1 0 5.961l-7.08 6.998-7.08-6.998c-1.661-1.642-4.371-1.642-6.032 0l-7.08 6.998-.06-.06-10.08-9.962c-5.507-5.443-5.507-14.427 0-19.87l10.14-10.022zM41.542 6.998a4.189 4.189 0 0 1 0 5.961l-7.08 6.998-7.08-6.998a4.189 4.189 0 0 1 0-5.961L34.461 0l7.08 6.998z' fill='%2300263E' fill-rule='nonzero'/%3e%3c/svg%3e";

const LogoContainer$1 = /*#__PURE__*/styled.div.withConfig({
  displayName: "LumaFlamestyles__LogoContainer",
  componentId: "sc-ghsz2t-0"
})(["display:flex;justify-content:center;align-items:center;height:4.375rem;width:4.375rem;"]);

const LumaFlame = () => {
  return jsx(LogoContainer$1, {
    children: jsx(Logo, {
      imageSource: img$1
    }, void 0)
  }, void 0);
};

var img = "data:image/svg+xml,%3csvg width='69' height='80' viewBox='0 0 69 80' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='m34.55 60.043 7.08 6.998a4.189 4.189 0 0 1 0 5.961L34.55 80l-7.081-6.998a4.189 4.189 0 0 1 0-5.961l7.08-6.998zm-20.28-40 7.08 6.998a4.189 4.189 0 0 1 0 5.961L14.27 40l7.08 6.998c1.66 1.641 4.37 1.641 6.031 0l7.036-6.956-7.036-6.953a4.189 4.189 0 0 1 0-5.962l7.08-6.997 7.081 6.997c1.66 1.642 4.37 1.642 6.031 0l7.08-6.997.016.014.018.019.06.058c.671.665 4.918 4.862 10.046 9.93 5.595 5.357 5.595 14.341.088 19.87L54.654 60.044l-7.08-6.998a4.189 4.189 0 0 1 0-5.96l7.08-6.999-7.08-6.997c-1.661-1.642-4.371-1.642-6.032 0l-7.037 6.954 7.037 6.955a4.189 4.189 0 0 1 0 5.961l-7.08 6.998-7.08-6.998c-1.661-1.642-4.371-1.642-6.032 0l-7.08 6.998-.06-.06-10.08-9.962c-5.507-5.443-5.507-14.427 0-19.87l10.14-10.022zM41.542 6.998a4.189 4.189 0 0 1 0 5.961l-7.08 6.998-7.08-6.998a4.189 4.189 0 0 1 0-5.961L34.461 0l7.08 6.998z' fill='%23858f93' fill-rule='nonzero'/%3e%3c/svg%3e";

const LogoContainer = /*#__PURE__*/styled.div.withConfig({
  displayName: "LumaFlameNeutralstyles__LogoContainer",
  componentId: "sc-jxhyeg-0"
})(["display:flex;justify-content:center;align-items:center;height:4.375rem;width:4.375rem;"]);

const LumaFlameNeutral = () => {
  return jsx(LogoContainer, {
    children: jsx(Logo, {
      imageSource: img
    }, void 0)
  }, void 0);
};

export { ADMIN_TABS, AppHeader, Button$2 as Button, Root$8 as ButtonRoot, Card, Drawer, Dropdown, MenuItem as DropdownBaseMenuItem, DropdownIcon$3 as DropdownIcon, ENV, FrontEndLibraries, GlobalNav, GlobalNavContainer, GlobalStyle, Icon$1 as Icon, Input$5 as Input, Logo, LumaAgGrid, LumaButton, LumaButtonDropdown, LumaCheckbox, LumaChip, LumaColor, LumaDatePicker, LumaDimensions, LumaFlame, LumaFlameNeutral, LumaFont, LumaFontsIBM, LumaIcon, LumaIconLink, LumaIconSwitch, LumaModal, LumaMultiDropDown, LumaNotFound, LumaRadio, LumaSingleDropDown, LumaStatus, LumaTabs, LumaTextEntry, LumaTextSearch, LumaToggleButton, LumaToggleSwitch, LumaValidUntil, Menu, Message$1 as Message, Modal, MultiSelect, NAV_TABS, Portal, ROUTES, ROUTE_KEYS, RenderContent, Search, SingleSelect, Spinner, StyledButton, TableCellDropdown, TextEntryField, VARIANT_MAP$6 as VARIANT_MAP, breakpoints, buildAdminOptions, buildHomeTab, buildNavTabs, colors, determineNavRouteOrUrl, filterNavTabs, generateAppUrl, getAngularLink, getColdFusionBaseUrl, getColdFusionLink, getColdFusionLinkAppVersion, isAnnuityOnly, isDev, isHigherEnvironment, isProduction, isQA, isStaging, isStructuredProductsOnly, isTabDropdown, isUAT, loadDefaultNavTabs, screenSizes, spacing, userHasAccess };
