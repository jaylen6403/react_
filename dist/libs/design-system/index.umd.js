(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('styled-components'), require('react/jsx-runtime'), require('@fortawesome/react-fontawesome'), require('@fortawesome/fontawesome-svg-core'), require('@fortawesome/pro-light-svg-icons'), require('@fortawesome/pro-regular-svg-icons'), require('@fortawesome/pro-solid-svg-icons'), require('react'), require('downshift'), require('react-outside-click-handler'), require('react-dom'), require('react-modal'), require('ag-grid-react'), require('ag-grid-community/src/styles/ag-grid.scss'), require('ag-grid-community/src/styles/ag-theme-alpine/sass/ag-theme-alpine.scss'), require('react-router-dom'), require('date-fns'), require('@luma-fe-workspace/utility')) :
  typeof define === 'function' && define.amd ? define(['exports', 'styled-components', 'react/jsx-runtime', '@fortawesome/react-fontawesome', '@fortawesome/fontawesome-svg-core', '@fortawesome/pro-light-svg-icons', '@fortawesome/pro-regular-svg-icons', '@fortawesome/pro-solid-svg-icons', 'react', 'downshift', 'react-outside-click-handler', 'react-dom', 'react-modal', 'ag-grid-react', 'ag-grid-community/src/styles/ag-grid.scss', 'ag-grid-community/src/styles/ag-theme-alpine/sass/ag-theme-alpine.scss', 'react-router-dom', 'date-fns', '@luma-fe-workspace/utility'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.DesignSystem = {}, global.styled, global.jsxRuntime, global.reactFontawesome, global.fontawesomeSvgCore, global.proLightSvgIcons, global.proRegularSvgIcons, global.proSolidSvgIcons, global.React, global.downshift, global.OutsideClickHandler, global.ReactDOM, global.ReactModal, global.agGridReact, null, null, global.reactRouterDom, global.dateFns, global.utility));
})(this, (function (exports, styled, jsxRuntime, reactFontawesome, fontawesomeSvgCore, proLightSvgIcons, proRegularSvgIcons, proSolidSvgIcons, React, downshift, OutsideClickHandler, reactDom, ReactModal, agGridReact, agGrid_scss, agThemeAlpine_scss, reactRouterDom, dateFns, utility) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
      Object.keys(e).forEach(function (k) {
        if (k !== 'default') {
          var d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: function () { return e[k]; }
          });
        }
      });
    }
    n["default"] = e;
    return Object.freeze(n);
  }

  var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);
  var React__namespace = /*#__PURE__*/_interopNamespace(React);
  var OutsideClickHandler__default = /*#__PURE__*/_interopDefaultLegacy(OutsideClickHandler);
  var ReactModal__default = /*#__PURE__*/_interopDefaultLegacy(ReactModal);

  var colors = {
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

  var spacing = {
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

  var __assign = function() {
      __assign = Object.assign || function __assign(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];
              for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
          return t;
      };
      return __assign.apply(this, arguments);
  };

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

  function __spreadArray(to, from, pack) {
      if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
          if (ar || !(i in from)) {
              if (!ar) ar = Array.prototype.slice.call(from, 0, i);
              ar[i] = from[i];
          }
      }
      return to.concat(ar || Array.prototype.slice.call(from));
  }

  function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
      return cooked;
  }

  var DEFAULT_FONT = "IBMPlexSans";
  var LumaFont = {
    DEFAULT: {
      THIN: "".concat(DEFAULT_FONT, "Thin"),
      LIGHT: "".concat(DEFAULT_FONT, "Light"),
      REGULAR: "".concat(DEFAULT_FONT, "Regular"),
      MEDIUM: "".concat(DEFAULT_FONT, "Medium"),
      SEMI_BOLD: "".concat(DEFAULT_FONT, "SemiBold"),
      BOLD: "".concat(DEFAULT_FONT, "Bold")
    }
  };

  var GlobalStyle = /*#__PURE__*/styled.createGlobalStyle(templateObject_1$M || (templateObject_1$M = __makeTemplateObject(["\n  html,\n  body {\n    font-family: ", ";\n    font-size: 16px;\n    padding: 0;\n    margin: 0;\n  }\n\n  * {\n    box-sizing: border-box;\n  }\n"], ["\n  html,\n  body {\n    font-family: ", ";\n    font-size: 16px;\n    padding: 0;\n    margin: 0;\n  }\n\n  * {\n    box-sizing: border-box;\n  }\n"])), LumaFont.DEFAULT.REGULAR);
  var templateObject_1$M;

  var ALIGNMENT_MAP = {
    left: 'flex-start',
    center: 'center',
    right: 'flex-end'
  };
  var Heading = /*#__PURE__*/styled__default["default"].h1.withConfig({
    displayName: "AppHeaderstyles__Heading",
    componentId: "sc-gkm0ir-0"
  })(templateObject_1$L || (templateObject_1$L = __makeTemplateObject(["\n  color: ", ";\n  display: inline-block;\n  font-family: Lato, sans-serif;\n  font-size: 1.5rem;\n  font-weight: bold;\n  line-height: 2rem;\n  margin: 0;\n  width: 33.33%;\n"], ["\n  color: ", ";\n  display: inline-block;\n  font-family: Lato, sans-serif;\n  font-size: 1.5rem;\n  font-weight: bold;\n  line-height: 2rem;\n  margin: 0;\n  width: 33.33%;\n"])), colors.blueMedium);
  var Content = /*#__PURE__*/styled__default["default"].div.withConfig({
    displayName: "AppHeaderstyles__Content",
    componentId: "sc-gkm0ir-1"
  })(templateObject_2$y || (templateObject_2$y = __makeTemplateObject(["\n  display: inline-flex;\n  justify-content: ", ";\n  width: 33.33%;\n"], ["\n  display: inline-flex;\n  justify-content: ", ";\n  width: 33.33%;\n"])), function (props) {
    return ALIGNMENT_MAP[props.alignment];
  });
  var Root$9 = /*#__PURE__*/styled__default["default"].header.withConfig({
    displayName: "AppHeaderstyles__Root",
    componentId: "sc-gkm0ir-2"
  })(templateObject_3$v || (templateObject_3$v = __makeTemplateObject(["\n  align-items: center;\n  background-color: ", ";\n  display: flex;\n  max-height: 5.5rem;\n  padding: 1.5rem;\n"], ["\n  align-items: center;\n  background-color: ", ";\n  display: flex;\n  max-height: 5.5rem;\n  padding: 1.5rem;\n"])), colors.white);
  var templateObject_1$L, templateObject_2$y, templateObject_3$v;

  var AppHeader = function AppHeader(_a) {
    var className = _a.className,
        title = _a.title,
        centerContent = _a.centerContent,
        rightContent = _a.rightContent;
    return jsxRuntime.jsxs(Root$9, __assign({
      className: className
    }, {
      children: [jsxRuntime.jsx(Heading, {
        children: title
      }, void 0), jsxRuntime.jsx(Content, __assign({
        alignment: "center"
      }, {
        children: centerContent
      }), void 0), jsxRuntime.jsx(Content, __assign({
        alignment: "right"
      }, {
        children: rightContent
      }), void 0)]
    }), void 0);
  };

  var VARIANT_MAP$c = {
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
  var Root$8 = /*#__PURE__*/styled__default["default"].button.withConfig({
    displayName: "Buttonstyles__Root",
    componentId: "sc-nslizk-0"
  })(templateObject_1$K || (templateObject_1$K = __makeTemplateObject(["\n  border-radius: 0.25rem;\n  border-style: solid;\n  border-width: 0.0625rem;\n  cursor: pointer;\n  display: flex;\n  font-family: 'IBM Plex Sans', sans-serif;\n  font-size: 0.6875rem;\n  padding: 0.4375rem 0.75rem;\n\n  &:active {\n    box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.15);\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.7;\n  }\n\n  ", "\n"], ["\n  border-radius: 0.25rem;\n  border-style: solid;\n  border-width: 0.0625rem;\n  cursor: pointer;\n  display: flex;\n  font-family: 'IBM Plex Sans', sans-serif;\n  font-size: 0.6875rem;\n  padding: 0.4375rem 0.75rem;\n\n  &:active {\n    box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.15);\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.7;\n  }\n\n  ", "\n"])), function (props) {
    return "\n    background-color: ".concat(VARIANT_MAP$c[props.variant].backgroundColor, ";\n    border-color: ").concat(VARIANT_MAP$c[props.variant].borderColor, ";\n    color: ").concat(VARIANT_MAP$c[props.variant].color, ";\n\n    &:active:not([disabled]),\n    &:hover:not([disabled]) {\n      background-color: ").concat(VARIANT_MAP$c[props.variant].hoverBackgroundColor, ";\n    }\n  ");
  });
  var templateObject_1$K;

  var Button$2 = function Button(_a) {
    var children = _a.children,
        _b = _a.variant,
        variant = _b === void 0 ? 'primary' : _b,
        rest = __rest(_a, ["children", "variant"]);

    return jsxRuntime.jsx(Root$8, __assign({
      variant: variant
    }, rest, {
      children: children
    }), void 0);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // (library.add as any)(fal, far, fas);

  fontawesomeSvgCore.library.add(proRegularSvgIcons.faSpinner, proSolidSvgIcons.faXmark, proLightSvgIcons.faAngleDown, proRegularSvgIcons.faAngleDown, proLightSvgIcons.faAngleLeft, proLightSvgIcons.faAngleDoubleLeft, proLightSvgIcons.faAngleRight, proLightSvgIcons.faAngleDoubleRight, proLightSvgIcons.faAngleUp, proRegularSvgIcons.faAngleUp, proLightSvgIcons.faBars, proRegularSvgIcons.faBars, proLightSvgIcons.faCalendar, proRegularSvgIcons.faCalendarPlus, proLightSvgIcons.faCheck, proRegularSvgIcons.faCheck, proSolidSvgIcons.faCheck, proLightSvgIcons.faCheckCircle, proLightSvgIcons.faCheckSquare, proLightSvgIcons.faChevronDoubleRight, proLightSvgIcons.faChevronDown, proLightSvgIcons.faChevronLeft, proLightSvgIcons.faChevronRight, proLightSvgIcons.faChevronUp, proLightSvgIcons.faClock, proLightSvgIcons.faEnvelope, proSolidSvgIcons.faExclamation, proLightSvgIcons.faExclamationCircle, proRegularSvgIcons.faExclamationCircle, proLightSvgIcons.faFileAlt, proSolidSvgIcons.faFileInvoiceDollar, proSolidSvgIcons.faLayerGroup, proSolidSvgIcons.faCalendar, proSolidSvgIcons.faCalendarAlt, proSolidSvgIcons.faMoneyCheckEditAlt, proSolidSvgIcons.faLayerGroup, proSolidSvgIcons.faScaleBalanced, proLightSvgIcons.faFilePdf, proRegularSvgIcons.faFilePdf, proRegularSvgIcons.faFileArrowUp, proLightSvgIcons.faFileSpreadsheet, proRegularSvgIcons.faFileExcel, proLightSvgIcons.faHouse, proRegularSvgIcons.faHouse, proLightSvgIcons.faInfoCircle, proLightSvgIcons.faMoneyCheckEditAlt, proLightSvgIcons.faPhoneAlt, proLightSvgIcons.faPlus, proRegularSvgIcons.faPlus, proLightSvgIcons.faQuestionCircle, proLightSvgIcons.faRetweet, proLightSvgIcons.faRetweetAlt, proLightSvgIcons.faScaleBalanced, proLightSvgIcons.faSearch, proRegularSvgIcons.faSearch, proLightSvgIcons.faSquare, proRegularSvgIcons.faSquareCheck, proLightSvgIcons.faStar, proLightSvgIcons.faStopwatch, proLightSvgIcons.faTimes, proRegularSvgIcons.faTimes, proLightSvgIcons.faTimesCircle, proLightSvgIcons.faUser, proSolidSvgIcons.faUser, proLightSvgIcons.faUserFriends, proRegularSvgIcons.faUserFriends, proLightSvgIcons.faUserPlus, proRegularSvgIcons.faFilter, proRegularSvgIcons.faAngleDown, proRegularSvgIcons.faAngleUp, proRegularSvgIcons.faBars, proRegularSvgIcons.faCalendarPlus, proRegularSvgIcons.faCalendar, proRegularSvgIcons.faCheckCircle, proSolidSvgIcons.faCheckCircle, proRegularSvgIcons.faPlus, proRegularSvgIcons.faSpinner, proRegularSvgIcons.faTimes, proSolidSvgIcons.faFileArrowDown, proSolidSvgIcons.faExclamation, proSolidSvgIcons.faExclamationCircle, proSolidSvgIcons.faFile, proSolidSvgIcons.faRetweet, proSolidSvgIcons.faStar, proSolidSvgIcons.faUser, proLightSvgIcons.faUsers, proLightSvgIcons.faScaleBalanced, proLightSvgIcons.faMoneyCheckEditAlt, proLightSvgIcons.faCalendar, proRegularSvgIcons.faSearch, proRegularSvgIcons.faExclamationCircle, proSolidSvgIcons.faXmark, proRegularSvgIcons.faUserClock, proSolidSvgIcons.faUserClock, proRegularSvgIcons.faArrowsRotate, proRegularSvgIcons.faEnvelope, proSolidSvgIcons.faFileArrowDown, proRegularSvgIcons.faFileLines, proSolidSvgIcons.faRefresh, proRegularSvgIcons.faFileArrowDown, proSolidSvgIcons.faArrowRightLong, proSolidSvgIcons.faArrowLeftLong);
  var Icon$1 = function Icon(_a) {
    var className = _a.className,
        iconCode = _a.iconCode,
        style = _a.style,
        rotate = _a.rotate,
        _b = _a.prefix,
        prefix = _b === void 0 ? 'fal' : _b;
    var image = fontawesomeSvgCore.findIconDefinition({
      prefix: prefix,
      iconName: iconCode
    });
    return image ? jsxRuntime.jsx(reactFontawesome.FontAwesomeIcon, {
      className: className,
      icon: fontawesomeSvgCore.icon(image),
      style: style,
      transform: rotate ? {
        rotate: rotate
      } : undefined
    }, void 0) : null;
  };

  var Root$7 = /*#__PURE__*/styled__default["default"].input.withConfig({
    displayName: "Inputstyles__Root",
    componentId: "sc-9utxbm-0"
  })(templateObject_1$J || (templateObject_1$J = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 0.25rem;\n  border: 0.0625rem solid\n    ", ";\n  color: 0.0625rem solid ", ";\n  display: flex;\n  font-family: 'IBM Plex Sans', sans-serif;\n  font-size: 0.6875rem;\n  padding: 0.375rem 0.5rem;\n\n  ::placeholder {\n    font-family: 'IBM Plex Sans', sans-serif;\n  }\n\n  &:focus:not([disabled]),\n  &:hover:not([disabled]) {\n    border-color: ", ";\n  }\n\n  &:focus:not([disabled]) {\n    background-color: ", ";\n  }\n\n  &:disabled {\n    background-color: transparent;\n    border-color: ", ";\n    color: ", ";\n  }\n"], ["\n  background-color: ", ";\n  border-radius: 0.25rem;\n  border: 0.0625rem solid\n    ", ";\n  color: 0.0625rem solid ", ";\n  display: flex;\n  font-family: 'IBM Plex Sans', sans-serif;\n  font-size: 0.6875rem;\n  padding: 0.375rem 0.5rem;\n\n  ::placeholder {\n    font-family: 'IBM Plex Sans', sans-serif;\n  }\n\n  &:focus:not([disabled]),\n  &:hover:not([disabled]) {\n    border-color: ", ";\n  }\n\n  &:focus:not([disabled]) {\n    background-color: ", ";\n  }\n\n  &:disabled {\n    background-color: transparent;\n    border-color: ", ";\n    color: ", ";\n  }\n"])), function (props) {
    return props.value !== undefined ? colors.greyFade : 'transparent';
  }, function (props) {
    if (props.hasError) {
      return colors['error-red'];
    }

    return props.value !== undefined ? colors['button-hover'] : colors.greyLight;
  }, colors.greyDark, function (props) {
    return props.hasError ? colors['error-red'] : colors['button-hover'];
  }, colors.greyFade, colors.greyLightest, colors.greyLightest);
  var templateObject_1$J;

  var Input$5 = function Input(_a) {
    var _b = _a.hasError,
        hasError = _b === void 0 ? false : _b,
        rest = __rest(_a, ["hasError"]);

    return jsxRuntime.jsx(Root$7, __assign({
      hasError: hasError
    }, rest), void 0);
  };

  var SearchWrapper = /*#__PURE__*/styled__default["default"].div.withConfig({
    displayName: "Searchstyles__SearchWrapper",
    componentId: "sc-fazw62-0"
  })(templateObject_1$I || (templateObject_1$I = __makeTemplateObject(["\n  width: 25.0625rem;\n"], ["\n  width: 25.0625rem;\n"])));
  var Root$6 = /*#__PURE__*/styled__default["default"].div.withConfig({
    displayName: "Searchstyles__Root",
    componentId: "sc-fazw62-1"
  })(templateObject_2$x || (templateObject_2$x = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 0.375rem;\n  border: 0.0625rem solid ", ";\n  width: ", ";\n  margin-right: ", ";\n  display: flex;\n  align-items: center;\n  padding: 0.125rem 0.125rem;\n\n  :hover {\n    border: 0.0625rem solid #4594b0;\n  }\n\n  :focus-within {\n    border: 0.0625rem solid #4594b0;\n    box-shadow: 0rem 0.125rem 0.5rem rgba(0, 0, 0, 0.15);\n  }\n"], ["\n  background-color: ", ";\n  border-radius: 0.375rem;\n  border: 0.0625rem solid ", ";\n  width: ", ";\n  margin-right: ", ";\n  display: flex;\n  align-items: center;\n  padding: 0.125rem 0.125rem;\n\n  :hover {\n    border: 0.0625rem solid #4594b0;\n  }\n\n  :focus-within {\n    border: 0.0625rem solid #4594b0;\n    box-shadow: 0rem 0.125rem 0.5rem rgba(0, 0, 0, 0.15);\n  }\n"])), colors.white, colors.greyLight, function (props) {
    var _a;

    return (_a = props.width) !== null && _a !== void 0 ? _a : '25.0625rem';
  }, function (props) {
    var _a;

    return (_a = props.marginRight) !== null && _a !== void 0 ? _a : '0';
  });
  var Input$4 = /*#__PURE__*/styled__default["default"].input.withConfig({
    displayName: "Searchstyles__Input",
    componentId: "sc-fazw62-2"
  })(templateObject_3$u || (templateObject_3$u = __makeTemplateObject(["\n  background-color: ", ";\n  border: none;\n  color: ", ";\n  font-family: 'IBM Plex Sans', sans-serif;\n  font-size: 0.875rem;\n  line-height: 1.125rem;\n  font-weight: 500;\n  flex: 1;\n  margin-left: 0.6875rem;\n\n  ::placeholder {\n    font-family: 'IBM Plex Sans', sans-serif;\n    color: ", ";\n  }\n\n  :focus {\n    caret-color: #4594b0;\n    outline: none;\n  }\n\n  :not(:focus):not(:placeholder-shown):valid {\n    color: ", ";\n  }\n\n  /* removes x from search input field */\n  &::-ms-clear {\n    display: none;\n    width: 0;\n    height: 0;\n  }\n  &::-ms-reveal {\n    display: none;\n    width: 0;\n    height: 0;\n  }\n\n  &::-webkit-search-decoration,\n  &::-webkit-search-cancel-button,\n  &::-webkit-search-results-button,\n  &::-webkit-search-results-decoration {\n    display: none;\n  }\n"], ["\n  background-color: ", ";\n  border: none;\n  color: ", ";\n  font-family: 'IBM Plex Sans', sans-serif;\n  font-size: 0.875rem;\n  line-height: 1.125rem;\n  font-weight: 500;\n  flex: 1;\n  margin-left: 0.6875rem;\n\n  ::placeholder {\n    font-family: 'IBM Plex Sans', sans-serif;\n    color: ", ";\n  }\n\n  :focus {\n    caret-color: #4594b0;\n    outline: none;\n  }\n\n  :not(:focus):not(:placeholder-shown):valid {\n    color: ", ";\n  }\n\n  /* removes x from search input field */\n  &::-ms-clear {\n    display: none;\n    width: 0;\n    height: 0;\n  }\n  &::-ms-reveal {\n    display: none;\n    width: 0;\n    height: 0;\n  }\n\n  &::-webkit-search-decoration,\n  &::-webkit-search-cancel-button,\n  &::-webkit-search-results-button,\n  &::-webkit-search-results-decoration {\n    display: none;\n  }\n"])), colors.white, colors.greyDarker, colors.greyLight, colors.greyLight);
  var CircleButton = /*#__PURE__*/styled__default["default"].button.withConfig({
    displayName: "Searchstyles__CircleButton",
    componentId: "sc-fazw62-3"
  })(templateObject_4$l || (templateObject_4$l = __makeTemplateObject(["\n  all: unset;\n  margin: 0.75rem;\n"], ["\n  all: unset;\n  margin: 0.75rem;\n"])));
  var ResultsWrapper = /*#__PURE__*/styled__default["default"].div.withConfig({
    displayName: "Searchstyles__ResultsWrapper",
    componentId: "sc-fazw62-4"
  })(templateObject_5$f || (templateObject_5$f = __makeTemplateObject(["\n  position: absolute;\n"], ["\n  position: absolute;\n"])));
  var menuIsOpen = /*#__PURE__*/styled.css(templateObject_6$e || (templateObject_6$e = __makeTemplateObject(["\n  border: 0.0625rem solid ", ";\n"], ["\n  border: 0.0625rem solid ", ";\n"])), colors.greyLight);
  var menuIsClosed = /*#__PURE__*/styled.css(templateObject_7$b || (templateObject_7$b = __makeTemplateObject(["\n  border: none;\n"], ["\n  border: none;\n"])));
  var SearchResultsList = /*#__PURE__*/styled__default["default"].ul.withConfig({
    displayName: "Searchstyles__SearchResultsList",
    componentId: "sc-fazw62-5"
  })(templateObject_8$6 || (templateObject_8$6 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  padding: 0rem;\n  width: ", ";\n  max-height: 18.6875rem;\n  background-color: ", ";\n  list-style-type: none;\n  overflow: auto;\n  border-radius: 0.25rem;\n  ", "\n  box-shadow: 0rem 0.125rem 0.5rem rgba(0, 0, 0, 0.15);\n"], ["\n  display: flex;\n  flex-direction: column;\n  padding: 0rem;\n  width: ", ";\n  max-height: 18.6875rem;\n  background-color: ", ";\n  list-style-type: none;\n  overflow: auto;\n  border-radius: 0.25rem;\n  ", "\n  box-shadow: 0rem 0.125rem 0.5rem rgba(0, 0, 0, 0.15);\n"])), function (props) {
    var _a;

    return (_a = props.width) !== null && _a !== void 0 ? _a : '25.0625rem';
  }, colors.white, function (props) {
    return props.isOpen ? menuIsOpen : menuIsClosed;
  });
  /*#__PURE__*/styled__default["default"].p.withConfig({
    displayName: "Searchstyles__SearchResultsTextCusip",
    componentId: "sc-fazw62-6"
  })(templateObject_9$3 || (templateObject_9$3 = __makeTemplateObject(["\n  color: ", ";\n  font-family: 'IBM Plex Sans', sans-serif;\n  font-size: 0.75rem;\n  font-weight: 400;\n  margin-bottom: 0.125rem;\n"], ["\n  color: ", ";\n  font-family: 'IBM Plex Sans', sans-serif;\n  font-size: 0.75rem;\n  font-weight: 400;\n  margin-bottom: 0.125rem;\n"])), colors.greyMedium);
  /*#__PURE__*/styled__default["default"].p.withConfig({
    displayName: "Searchstyles__SearchResultsTextDetails",
    componentId: "sc-fazw62-7"
  })(templateObject_10$2 || (templateObject_10$2 = __makeTemplateObject(["\n  color: ", ";\n  font-family: 'IBM Plex Sans', sans-serif;\n  font-size: 0.875rem;\n  font-weight: 400;\n  margin-top: 0rem;\n  margin-bottom: 0.5rem;\n"], ["\n  color: ", ";\n  font-family: 'IBM Plex Sans', sans-serif;\n  font-size: 0.875rem;\n  font-weight: 400;\n  margin-top: 0rem;\n  margin-bottom: 0.5rem;\n"])), colors.greyDarker);
  var SearchListItemContainer = /*#__PURE__*/styled__default["default"].li.withConfig({
    displayName: "Searchstyles__SearchListItemContainer",
    componentId: "sc-fazw62-8"
  })(templateObject_11$2 || (templateObject_11$2 = __makeTemplateObject(["\n  align-content: flex-start;\n  padding: 0rem 1.25rem 0rem 1.25rem;\n  box-shadow: inset 0rem -0.0625rem 0rem ", ";\n  min-height: 4.375rem;\n  background-color: ", ";\n\n  :active {\n    background-color: ", ";\n  }\n"], ["\n  align-content: flex-start;\n  padding: 0rem 1.25rem 0rem 1.25rem;\n  box-shadow: inset 0rem -0.0625rem 0rem ", ";\n  min-height: 4.375rem;\n  background-color: ", ";\n\n  :active {\n    background-color: ", ";\n  }\n"])), colors.greyLightest, function (props) {
    return props.isHighlighted ? 'rgba(147, 195, 213, 0.2)' : colors.white;
  }, colors.ocean);
  var StyledSearchIcon = /*#__PURE__*/styled__default["default"](Icon$1).withConfig({
    displayName: "Searchstyles__StyledSearchIcon",
    componentId: "sc-fazw62-9"
  })(templateObject_12$1 || (templateObject_12$1 = __makeTemplateObject(["\n  font-size: 0.875rem;\n  color: ", ";\n  margin-left: 0.6875rem;\n"], ["\n  font-size: 0.875rem;\n  color: ", ";\n  margin-left: 0.6875rem;\n"])), colors.greyMedium);
  var StyledCloseIcon = /*#__PURE__*/styled__default["default"](Icon$1).withConfig({
    displayName: "Searchstyles__StyledCloseIcon",
    componentId: "sc-fazw62-10"
  })(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n  font-size: 0.875rem;\n  color: ", ";\n\n  :hover {\n    color: ", ";\n  }\n"], ["\n  font-size: 0.875rem;\n  color: ", ";\n\n  :hover {\n    color: ", ";\n  }\n"])), colors.greyLightest, colors.greyMedium);
  var templateObject_1$I, templateObject_2$x, templateObject_3$u, templateObject_4$l, templateObject_5$f, templateObject_6$e, templateObject_7$b, templateObject_8$6, templateObject_9$3, templateObject_10$2, templateObject_11$2, templateObject_12$1, templateObject_13;

  var Search = function Search(_a) {
    var items = _a.items,
        initialValue = _a.initialValue,
        handleSelectItem = _a.handleSelectItem,
        handleChange = _a.handleChange;
        _a.handleBlur;
        var renderContent = _a.renderContent,
        itemToString = _a.itemToString,
        inputAriaLabel = _a.inputAriaLabel,
        buttonAriaLabel = _a.buttonAriaLabel,
        width = _a.width,
        marginRight = _a.marginRight,
        rest = __rest(_a, ["items", "initialValue", "handleSelectItem", "handleChange", "handleBlur", "renderContent", "itemToString", "inputAriaLabel", "buttonAriaLabel", "width", "marginRight"]);

    var _b = downshift.useCombobox({
      itemToString: itemToString,
      inputValue: initialValue,
      items: items,
      onInputValueChange: function (_a) {
        var inputValue = _a.inputValue;
        handleChange === null || handleChange === void 0 ? void 0 : handleChange(inputValue);
        return;
      },
      onSelectedItemChange: function (_a) {
        var selectedItemEvent = _a.selectedItem;
        handleSelectItem === null || handleSelectItem === void 0 ? void 0 : handleSelectItem(selectedItemEvent);
      }
    }),
        isOpen = _b.isOpen,
        getMenuProps = _b.getMenuProps,
        getInputProps = _b.getInputProps,
        getComboboxProps = _b.getComboboxProps,
        getItemProps = _b.getItemProps,
        highlightedIndex = _b.highlightedIndex,
        reset = _b.reset;

    var inputProps = getInputProps({
      'aria-label': inputAriaLabel,
      'aria-labelledby': ''
    });
    return jsxRuntime.jsxs(SearchWrapper, {
      children: [jsxRuntime.jsx("div", __assign({}, getComboboxProps(), {
        children: jsxRuntime.jsx("form", __assign({
          onSubmit: function (e) {
            e.preventDefault();
          }
        }, {
          children: jsxRuntime.jsxs(Root$6, __assign({
            width: width,
            marginRight: marginRight
          }, {
            children: [jsxRuntime.jsx(StyledSearchIcon, {
              iconCode: "search"
            }, void 0), jsxRuntime.jsx(Input$4, __assign({}, rest, {
              name: 'search'
            }, inputProps), void 0), jsxRuntime.jsx(CircleButton, __assign({
              name: "clear input",
              "aria-label": buttonAriaLabel,
              onClick: function () {
                reset();
              }
            }, {
              children: jsxRuntime.jsx(StyledCloseIcon, {
                iconCode: "times-circle"
              }, void 0)
            }), void 0)]
          }), void 0)
        }), void 0)
      }), void 0), jsxRuntime.jsx(ResultsWrapper, {
        children: jsxRuntime.jsx(SearchResultsList, __assign({
          isOpen: isOpen && items.length > 0
        }, getMenuProps({
          'aria-labelledby': inputProps.id
        }), {
          width: width
        }, {
          children: isOpen && items.length > 0 ? items.map(function (item, index) {
            return jsxRuntime.jsx(SearchListItemContainer, __assign({
              isHighlighted: highlightedIndex === index
            }, getItemProps({
              item: item,
              index: index
            }), {
              children: /*#__PURE__*/React__namespace.cloneElement(renderContent, {
                item: item
              })
            }), index);
          }) : null
        }), void 0)
      }, void 0)]
    }, void 0);
  };

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

  var fails$h = function (exec) {
    try {
      return !!exec();
    } catch (error) {
      return true;
    }
  };

  var fails$g = fails$h;

  // Detect IE8's incomplete defineProperty implementation
  var descriptors = !fails$g(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
  });

  var fails$f = fails$h;

  var functionBindNative = !fails$f(function () {
    var test = (function () { /* empty */ }).bind();
    // eslint-disable-next-line no-prototype-builtins -- safe
    return typeof test != 'function' || test.hasOwnProperty('prototype');
  });

  var NATIVE_BIND$2 = functionBindNative;

  var call$a = Function.prototype.call;

  var functionCall = NATIVE_BIND$2 ? call$a.bind(call$a) : function () {
    return call$a.apply(call$a, arguments);
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
  var call$9 = FunctionPrototype$2.call;
  var uncurryThis$l = NATIVE_BIND$1 && bind.bind(call$9, call$9);

  var functionUncurryThis = NATIVE_BIND$1 ? function (fn) {
    return fn && uncurryThis$l(fn);
  } : function (fn) {
    return fn && function () {
      return call$9.apply(fn, arguments);
    };
  };

  var uncurryThis$k = functionUncurryThis;

  var toString$9 = uncurryThis$k({}.toString);
  var stringSlice$7 = uncurryThis$k(''.slice);

  var classofRaw$1 = function (it) {
    return stringSlice$7(toString$9(it), 8, -1);
  };

  var global$x = global$y;
  var uncurryThis$j = functionUncurryThis;
  var fails$e = fails$h;
  var classof$5 = classofRaw$1;

  var Object$5 = global$x.Object;
  var split = uncurryThis$j(''.split);

  // fallback for non-array-like ES3 and non-enumerable old V8 strings
  var indexedObject = fails$e(function () {
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
  var IndexedObject = indexedObject;
  var requireObjectCoercible$6 = requireObjectCoercible$7;

  var toIndexedObject$5 = function (it) {
    return IndexedObject(requireObjectCoercible$6(it));
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

  var uncurryThis$i = functionUncurryThis;

  var objectIsPrototypeOf = uncurryThis$i({}.isPrototypeOf);

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
  var fails$d = fails$h;

  // eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
  var nativeSymbol = !!Object.getOwnPropertySymbols && !fails$d(function () {
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
  var call$8 = functionCall;
  var isCallable$d = isCallable$i;
  var isObject$5 = isObject$6;

  var TypeError$9 = global$q.TypeError;

  // `OrdinaryToPrimitive` abstract operation
  // https://tc39.es/ecma262/#sec-ordinarytoprimitive
  var ordinaryToPrimitive$1 = function (input, pref) {
    var fn, val;
    if (pref === 'string' && isCallable$d(fn = input.toString) && !isObject$5(val = call$8(fn, input))) return val;
    if (isCallable$d(fn = input.valueOf) && !isObject$5(val = call$8(fn, input))) return val;
    if (pref !== 'string' && isCallable$d(fn = input.toString) && !isObject$5(val = call$8(fn, input))) return val;
    throw TypeError$9("Can't convert object to primitive value");
  };

  var shared$4 = {exports: {}};

  var global$p = global$y;

  // eslint-disable-next-line es/no-object-defineproperty -- safe
  var defineProperty$3 = Object.defineProperty;

  var setGlobal$3 = function (key, value) {
    try {
      defineProperty$3(global$p, key, { value: value, configurable: true, writable: true });
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
  var toObject$3 = function (argument) {
    return Object$3(requireObjectCoercible$5(argument));
  };

  var uncurryThis$h = functionUncurryThis;
  var toObject$2 = toObject$3;

  var hasOwnProperty = uncurryThis$h({}.hasOwnProperty);

  // `HasOwnProperty` abstract operation
  // https://tc39.es/ecma262/#sec-hasownproperty
  var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
    return hasOwnProperty(toObject$2(it), key);
  };

  var uncurryThis$g = functionUncurryThis;

  var id = 0;
  var postfix = Math.random();
  var toString$8 = uncurryThis$g(1.0.toString);

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
  var call$7 = functionCall;
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
      result = call$7(exoticToPrim, input, pref);
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

  var DESCRIPTORS$8 = descriptors;
  var fails$c = fails$h;
  var createElement = documentCreateElement$2;

  // Thanks to IE8 for its funny defineProperty
  var ie8DomDefine = !DESCRIPTORS$8 && !fails$c(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(createElement('div'), 'a', {
      get: function () { return 7; }
    }).a != 7;
  });

  var DESCRIPTORS$7 = descriptors;
  var call$6 = functionCall;
  var propertyIsEnumerableModule = objectPropertyIsEnumerable;
  var createPropertyDescriptor$3 = createPropertyDescriptor$4;
  var toIndexedObject$4 = toIndexedObject$5;
  var toPropertyKey$2 = toPropertyKey$3;
  var hasOwn$8 = hasOwnProperty_1;
  var IE8_DOM_DEFINE$1 = ie8DomDefine;

  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;

  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
  objectGetOwnPropertyDescriptor.f = DESCRIPTORS$7 ? $getOwnPropertyDescriptor$1 : function getOwnPropertyDescriptor(O, P) {
    O = toIndexedObject$4(O);
    P = toPropertyKey$2(P);
    if (IE8_DOM_DEFINE$1) try {
      return $getOwnPropertyDescriptor$1(O, P);
    } catch (error) { /* empty */ }
    if (hasOwn$8(O, P)) return createPropertyDescriptor$3(!call$6(propertyIsEnumerableModule.f, O, P), O[P]);
  };

  var objectDefineProperty = {};

  var DESCRIPTORS$6 = descriptors;
  var fails$b = fails$h;

  // V8 ~ Chrome 36-
  // https://bugs.chromium.org/p/v8/issues/detail?id=3334
  var v8PrototypeDefineBug = DESCRIPTORS$6 && fails$b(function () {
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
  var DESCRIPTORS$5 = descriptors;
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
  objectDefineProperty.f = DESCRIPTORS$5 ? V8_PROTOTYPE_DEFINE_BUG$1 ? function defineProperty(O, P, Attributes) {
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

  var DESCRIPTORS$4 = descriptors;
  var definePropertyModule$4 = objectDefineProperty;
  var createPropertyDescriptor$2 = createPropertyDescriptor$4;

  var createNonEnumerableProperty$6 = DESCRIPTORS$4 ? function (object, key, value) {
    return definePropertyModule$4.f(object, key, createPropertyDescriptor$2(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };

  var redefine$5 = {exports: {}};

  var uncurryThis$f = functionUncurryThis;
  var isCallable$c = isCallable$i;
  var store$1 = sharedStore;

  var functionToString = uncurryThis$f(Function.toString);

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
  var uncurryThis$e = functionUncurryThis;
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
    var wmget = uncurryThis$e(store.get);
    var wmhas = uncurryThis$e(store.has);
    var wmset = uncurryThis$e(store.set);
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

  var DESCRIPTORS$3 = descriptors;
  var hasOwn$6 = hasOwnProperty_1;

  var FunctionPrototype$1 = Function.prototype;
  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var getDescriptor = DESCRIPTORS$3 && Object.getOwnPropertyDescriptor;

  var EXISTS = hasOwn$6(FunctionPrototype$1, 'name');
  // additional protection from minified / mangled / dropped function names
  var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
  var CONFIGURABLE = EXISTS && (!DESCRIPTORS$3 || (DESCRIPTORS$3 && getDescriptor(FunctionPrototype$1, 'name').configurable));

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

  var uncurryThis$d = functionUncurryThis;
  var hasOwn$4 = hasOwnProperty_1;
  var toIndexedObject$2 = toIndexedObject$5;
  var indexOf$1 = arrayIncludes.indexOf;
  var hiddenKeys$2 = hiddenKeys$4;

  var push$2 = uncurryThis$d([].push);

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
  var uncurryThis$c = functionUncurryThis;
  var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
  var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
  var anObject$9 = anObject$b;

  var concat$1 = uncurryThis$c([].concat);

  // all object keys, includes non-enumerable and symbols
  var ownKeys$1 = getBuiltIn$2('Reflect', 'ownKeys') || function ownKeys(it) {
    var keys = getOwnPropertyNamesModule.f(anObject$9(it));
    var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
    return getOwnPropertySymbols ? concat$1(keys, getOwnPropertySymbols(it)) : keys;
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

  var fails$a = fails$h;
  var isCallable$9 = isCallable$i;

  var replacement = /#|\.prototype\./;

  var isForced$1 = function (feature, detection) {
    var value = data[normalize(feature)];
    return value == POLYFILL ? true
      : value == NATIVE ? false
      : isCallable$9(detection) ? fails$a(detection)
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

  var map = {
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
  var FlatXButton = /*#__PURE__*/styled__default["default"].button.withConfig({
    displayName: "Messagestyle__FlatXButton",
    componentId: "sc-1v68li-0"
  })(templateObject_1$H || (templateObject_1$H = __makeTemplateObject(["\n  box-shadow: 0px 0px 0px;\n  outline: 0;\n  @include transition(background-color 0.3s ease);\n  border-radius: 1rem;\n  border: 0px transparent;\n  background: transparent;\n  margin-left: auto;\n\n  &:hover {\n    background: transparent;\n  }\n"], ["\n  box-shadow: 0px 0px 0px;\n  outline: 0;\n  @include transition(background-color 0.3s ease);\n  border-radius: 1rem;\n  border: 0px transparent;\n  background: transparent;\n  margin-left: auto;\n\n  &:hover {\n    background: transparent;\n  }\n"])));
  var MessageColoredIcon = /*#__PURE__*/styled__default["default"](Icon$1).withConfig({
    displayName: "Messagestyle__MessageColoredIcon",
    componentId: "sc-1v68li-1"
  })(templateObject_2$w || (templateObject_2$w = __makeTemplateObject(["\n  display: flex;\n  align-self: center;\n  letter-spacing: 0.01875rem;\n  text-transform: uppercase;\n  left: calc(50% - 1.5rem / 2);\n  top: calc(50% - 1.5rem / 2);\n  mix-blend-mode: multiply;\n  font-size: 1.25rem;\n  line-height: 0.875rem;\n  align-items: center;\n  text-align: center;\n"], ["\n  display: flex;\n  align-self: center;\n  letter-spacing: 0.01875rem;\n  text-transform: uppercase;\n  left: calc(50% - 1.5rem / 2);\n  top: calc(50% - 1.5rem / 2);\n  mix-blend-mode: multiply;\n  font-size: 1.25rem;\n  line-height: 0.875rem;\n  align-items: center;\n  text-align: center;\n"])));
  var MessageExitIcon = /*#__PURE__*/styled__default["default"](MessageColoredIcon).withConfig({
    displayName: "Messagestyle__MessageExitIcon",
    componentId: "sc-1v68li-2"
  })(templateObject_3$t || (templateObject_3$t = __makeTemplateObject(["\n  font-size: 0.875rem;\n  line-height: 0.875rem;\n  font-weight: 400;\n  font-style: normal;\n  color: #333333;\n  opacity: 0.25;\n\n  &:hover {\n    background: ", " '80';\n    mix-blend-mode: multiply;\n    box-shadow: inset 0rem 0.0625rem 0.25rem rgba(0, 0, 0, 0.15);\n    border-radius: 1rem;\n    opacity: 0.7;\n  }\n"], ["\n  font-size: 0.875rem;\n  line-height: 0.875rem;\n  font-weight: 400;\n  font-style: normal;\n  color: #333333;\n  opacity: 0.25;\n\n  &:hover {\n    background: ", " '80';\n    mix-blend-mode: multiply;\n    box-shadow: inset 0rem 0.0625rem 0.25rem rgba(0, 0, 0, 0.15);\n    border-radius: 1rem;\n    opacity: 0.7;\n  }\n"])), colors.white);
  var MessageStyle = /*#__PURE__*/styled__default["default"].div.withConfig({
    displayName: "Messagestyle__MessageStyle",
    componentId: "sc-1v68li-3"
  })(templateObject_4$k || (templateObject_4$k = __makeTemplateObject(["\n  position: absolute;\n  z-index: 999;\n  display: flex;\n  flex-direction: row;\n  align-content: center;\n  padding: 1.5rem 0.75rem;\n  width: 20.875rem;\n  min-height: 5.875rem;\n  bottom: 1rem;\n  right: 1rem;\n  opacity: 0.95;\n  box-shadow: 0rem 0.125rem 0.5rem 0rem ", ";\n  border-radius: 0.75rem;\n  flex: none;\n  order: 0;\n  align-self: stretch;\n  flex-grow: 0;\n  background-color: ", ";\n\n  & > ", " {\n    color: ", ";\n  }\n"], ["\n  position: absolute;\n  z-index: 999;\n  display: flex;\n  flex-direction: row;\n  align-content: center;\n  padding: 1.5rem 0.75rem;\n  width: 20.875rem;\n  min-height: 5.875rem;\n  bottom: 1rem;\n  right: 1rem;\n  opacity: 0.95;\n  box-shadow: 0rem 0.125rem 0.5rem 0rem ", ";\n  border-radius: 0.75rem;\n  flex: none;\n  order: 0;\n  align-self: stretch;\n  flex-grow: 0;\n  background-color: ", ";\n\n  & > ", " {\n    color: ", ";\n  }\n"])), colors.boxShadow, function (props) {
    return map["".concat(props.messageType)].backgroundColor;
  }, MessageColoredIcon, function (props) {
    return map["".concat(props.messageType)].backgroundColor;
  });
  var MessageTitle = /*#__PURE__*/styled__default["default"].div.withConfig({
    displayName: "Messagestyle__MessageTitle",
    componentId: "sc-1v68li-4"
  })(templateObject_5$e || (templateObject_5$e = __makeTemplateObject(["\n  color: ", ";\n  font-weight: 600;\n  font-size: 1rem;\n  line-height: 1.5rem;\n  margin: auto 0rem;\n"], ["\n  color: ", ";\n  font-weight: 600;\n  font-size: 1rem;\n  line-height: 1.5rem;\n  margin: auto 0rem;\n"])), colors.greyDarker);
  var MessageContent = /*#__PURE__*/styled__default["default"](MessageTitle).withConfig({
    displayName: "Messagestyle__MessageContent",
    componentId: "sc-1v68li-5"
  })(templateObject_6$d || (templateObject_6$d = __makeTemplateObject(["\n  font-weight: 400;\n"], ["\n  font-weight: 400;\n"])));
  var MessageCol = /*#__PURE__*/styled__default["default"].div.withConfig({
    displayName: "Messagestyle__MessageCol",
    componentId: "sc-1v68li-6"
  })(templateObject_7$a || (templateObject_7$a = __makeTemplateObject(["\n  font-family: 'IBM Plex Sans';\n  display: flex;\n  justify-content: flex-start;\n  flex-direction: column;\n  flex-wrap: wrap;\n  flex-grow: 0;\n  align-self: stretch;\n  order: 0;\n  color: ", ";\n  margin: 0 0.5rem;\n"], ["\n  font-family: 'IBM Plex Sans';\n  display: flex;\n  justify-content: flex-start;\n  flex-direction: column;\n  flex-wrap: wrap;\n  flex-grow: 0;\n  align-self: stretch;\n  order: 0;\n  color: ", ";\n  margin: 0 0.5rem;\n"])), colors.greyDarker);
  var templateObject_1$H, templateObject_2$w, templateObject_3$t, templateObject_4$k, templateObject_5$e, templateObject_6$d, templateObject_7$a;

  var Message$1 = function Message(_a) {
    var
    /**
     * Title of the message
     */
    title = _a.title,

    /**
     * Description of the message (optional)
     */
    description = _a.description,

    /**
     * If true, hide the message. By default: false
     */
    _b = _a.showMessage,

    /**
     * If true, hide the message. By default: false
     */
    showMessage = _b === void 0 ? false : _b,
        setShowMessage = _a.setShowMessage,

    /**
     * In seconds. By default: 3 seconds (subject to change)
     */
    _c = _a.timer,

    /**
     * In seconds. By default: 3 seconds (subject to change)
     */
    timer = _c === void 0 ? 3 : _c,

    /**
     * Message Type will decide the style of the Message:
     *  (Default) info: Blue Message
     *  success: Green Message
     *  warn: Yellow Message
     *  error: Red Message
     */
    _d = _a.messageType,

    /**
     * Message Type will decide the style of the Message:
     *  (Default) info: Blue Message
     *  success: Green Message
     *  warn: Yellow Message
     *  error: Red Message
     */
    messageType = _d === void 0 ? 'info' : _d;
    var iconCode = {
      info: 'circle-check',
      success: 'circle-check',
      error: 'circle-xmark',
      warn: 'circle-exclamation'
    }[messageType]; // if message shouldn't be off, start timer

    React.useEffect(function () {
      var timeout = setTimeout(function () {
        return setShowMessage(false);
      }, timer * 1000);
      return function () {
        return clearTimeout(timeout);
      };
    }, [showMessage, timer, setShowMessage]);
    if (!showMessage) return null;
    return jsxRuntime.jsxs(MessageStyle, __assign({
      messageType: messageType
    }, {
      children: [jsxRuntime.jsx(MessageColoredIcon, {
        iconCode: iconCode
      }, void 0), jsxRuntime.jsxs(MessageCol, __assign({
        role: "alert"
      }, {
        children: [jsxRuntime.jsx(MessageTitle, {
          children: title
        }, void 0), description ? jsxRuntime.jsx(MessageContent, {
          children: description
        }, void 0) : null]
      }), void 0), jsxRuntime.jsx(FlatXButton, __assign({
        onClick: function () {
          return setShowMessage(false);
        }
      }, {
        children: jsxRuntime.jsx(MessageExitIcon, {
          iconCode: "times"
        }, void 0)
      }), void 0)]
    }), void 0);
  };

  var CardWrapper = /*#__PURE__*/styled__default["default"].div.withConfig({
    displayName: "Cardstyles__CardWrapper",
    componentId: "sc-1bpi31p-0"
  })(templateObject_1$G || (templateObject_1$G = __makeTemplateObject(["\n  display: flex;\n  background: #ffffff;\n  background-color: ", ";\n  border-radius: ", "rem;\n  flex-direction: ", ";\n  padding: ", "rem;\n  margin-left: ", "rem;\n"], ["\n  display: flex;\n  background: #ffffff;\n  background-color: ", ";\n  border-radius: ", "rem;\n  flex-direction: ", ";\n  padding: ", "rem;\n  margin-left: ", "rem;\n"])), function (props) {
    return props.backgroundColor || '#ffffff';
  }, function (props) {
    return props.borderRadius || 0.9;
  }, function (props) {
    return props.flexDirection || 'row';
  }, function (props) {
    return props.padding || 0;
  }, function (props) {
    return props.margin || 0;
  });
  var templateObject_1$G;

  var Card = function Card(_a) {
    var backgroundColor = _a.backgroundColor,
        borderRadius = _a.borderRadius,
        flexDirection = _a.flexDirection,
        margin = _a.margin,
        padding = _a.padding,
        children = _a.children;
    return jsxRuntime.jsx(CardWrapper, __assign({
      backgroundColor: backgroundColor,
      borderRadius: borderRadius,
      flexDirection: flexDirection,
      padding: padding,
      margin: margin
    }, {
      children: children
    }), void 0);
  };

  var VARIANT_STYLES = {
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
  var DropdownHeader = /*#__PURE__*/styled__default["default"].div.withConfig({
    displayName: "DropdownBasestyles__DropdownHeader",
    componentId: "sc-e2hqr-0"
  })(templateObject_1$F || (templateObject_1$F = __makeTemplateObject(["\n  color: ", ";\n  margin-bottom: 0.25rem;\n  font-family: IBM Plex Sans;\n  font-size: 0.75rem;\n  font-weight: 500;\n  line-height: 1rem;\n  letter-spacing: 0.03em;\n  text-align: left;\n"], ["\n  color: ", ";\n  margin-bottom: 0.25rem;\n  font-family: IBM Plex Sans;\n  font-size: 0.75rem;\n  font-weight: 500;\n  line-height: 1rem;\n  letter-spacing: 0.03em;\n  text-align: left;\n"])), colors.greyDark);
  var DropdownIcon$3 = /*#__PURE__*/styled__default["default"](Icon$1).withConfig({
    displayName: "DropdownBasestyles__DropdownIcon",
    componentId: "sc-e2hqr-1"
  })(templateObject_2$v || (templateObject_2$v = __makeTemplateObject(["\n  height: 0.75rem;\n  margin-left: 0.9375rem;\n  width: 0.75rem;\n"], ["\n  height: 0.75rem;\n  margin-left: 0.9375rem;\n  width: 0.75rem;\n"])));
  var Divider = /*#__PURE__*/styled__default["default"].div.withConfig({
    displayName: "DropdownBasestyles__Divider",
    componentId: "sc-e2hqr-2"
  })(templateObject_3$s || (templateObject_3$s = __makeTemplateObject(["\n  background-color: ", ";\n  height: 0.0625rem;\n  margin: 0.125rem 0.25rem;\n  width: calc(100% - 0.5rem);\n"], ["\n  background-color: ", ";\n  height: 0.0625rem;\n  margin: 0.125rem 0.25rem;\n  width: calc(100% - 0.5rem);\n"])), colors.greyLight);
  var MenuItem = /*#__PURE__*/styled__default["default"].li.withConfig({
    displayName: "DropdownBasestyles__MenuItem",
    componentId: "sc-e2hqr-3"
  })(templateObject_4$j || (templateObject_4$j = __makeTemplateObject(["\n  border-radius: 0.25rem;\n  color: ", ";\n  cursor: pointer;\n  display: flex;\n  margin: ", ";\n  padding: 0.25rem 0.5rem;\n  text-align: ", ";\n  width: ", ";\n  justify-content: space-between;\n  align-items: center;\n\n  &:first-child {\n    margin-top: 0;\n  }\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n\n  ", "\n"], ["\n  border-radius: 0.25rem;\n  color: ", ";\n  cursor: pointer;\n  display: flex;\n  margin: ", ";\n  padding: 0.25rem 0.5rem;\n  text-align: ", ";\n  width: ", ";\n  justify-content: space-between;\n  align-items: center;\n\n  &:first-child {\n    margin-top: 0;\n  }\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n\n  ", "\n"])), function (props) {
    return props.isAction ? colors['light-nav-blue'] : 'inherit';
  }, function (props) {
    return props.isAction ? '0.1875rem 0 0.4375rem' : '0.1875rem 0';
  }, function (props) {
    return props.alignment || 'initial';
  }, function (props) {
    return props.width || '100%';
  }, function (props) {
    var _a = VARIANT_STYLES[props.variant],
        menuBackgroundColorActive = _a.menuBackgroundColorActive,
        menuBackgroundColorHover = _a.menuBackgroundColorHover,
        menuColorActionHover = _a.menuColorActionHover,
        menuColorDisabled = _a.menuColorDisabled,
        menuColorHover = _a.menuColorHover;
    var activeStyles = "\n      &:active {\n        background-color: ".concat(menuBackgroundColorActive, ";\n      }\n    ");

    if (props.disabled) {
      return "\n        color: ".concat(menuColorDisabled, ";\n        cursor: default;\n      ");
    }

    if (props.isHighlighted) {
      return "\n        color: ".concat(props.isAction ? menuColorActionHover : menuColorHover, ";\n        background-color: ").concat(menuBackgroundColorHover, ";\n\n        ").concat(activeStyles, "\n      ");
    }

    return activeStyles;
  });
  var Menu = /*#__PURE__*/styled__default["default"].ul.withConfig({
    displayName: "DropdownBasestyles__Menu",
    componentId: "sc-e2hqr-4"
  })(templateObject_5$d || (templateObject_5$d = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 0.25rem;\n  box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.15);\n  font-family: 'IBM Plex Sans';\n  font-size: 0.875rem;\n  font-style: normal;\n  font-weight: 400;\n  letter-spacing: 0.03em;\n  line-height: 1.125rem;\n  margin: 0.5625rem 0 0;\n  max-height: 17.5rem;\n  max-width: 15rem;\n  min-width: 7.75rem;\n  overflow-y: auto;\n  position: absolute;\n"], ["\n  background-color: ", ";\n  border-radius: 0.25rem;\n  box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.15);\n  font-family: 'IBM Plex Sans';\n  font-size: 0.875rem;\n  font-style: normal;\n  font-weight: 400;\n  letter-spacing: 0.03em;\n  line-height: 1.125rem;\n  margin: 0.5625rem 0 0;\n  max-height: 17.5rem;\n  max-width: 15rem;\n  min-width: 7.75rem;\n  overflow-y: auto;\n  position: absolute;\n"])), colors.greyFade);
  var Button$1 = /*#__PURE__*/styled__default["default"].button.withConfig({
    displayName: "DropdownBasestyles__Button",
    componentId: "sc-e2hqr-5"
  })(templateObject_6$c || (templateObject_6$c = __makeTemplateObject(["\n  border-radius: 0.25rem;\n  border-style: solid;\n  border-width: 0.0625rem;\n  cursor: pointer;\n  font-family: 'IBM Plex Sans';\n  font-size: 0.6875rem;\n  font-style: normal;\n  font-weight: 400;\n  letter-spacing: 0.03em;\n  line-height: 0.875rem;\n  padding: 0.5rem;\n\n  &:active {\n    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);\n  }\n"], ["\n  border-radius: 0.25rem;\n  border-style: solid;\n  border-width: 0.0625rem;\n  cursor: pointer;\n  font-family: 'IBM Plex Sans';\n  font-size: 0.6875rem;\n  font-style: normal;\n  font-weight: 400;\n  letter-spacing: 0.03em;\n  line-height: 0.875rem;\n  padding: 0.5rem;\n\n  &:active {\n    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);\n  }\n"])));
  var Root$5 = /*#__PURE__*/styled__default["default"].div.withConfig({
    displayName: "DropdownBasestyles__Root",
    componentId: "sc-e2hqr-6"
  })(templateObject_7$9 || (templateObject_7$9 = __makeTemplateObject(["\n  position: relative;\n\n  ", " {\n    ", "\n  }\n\n  ", " {\n    ", "\n  }\n"], ["\n  position: relative;\n\n  ", " {\n    ", "\n  }\n\n  ", " {\n    ", "\n  }\n"])), Button$1, function (props) {
    var _a = VARIANT_STYLES[props.variant],
        backgroundColor = _a.backgroundColor,
        backgroundColorHover = _a.backgroundColorHover,
        borderColor = _a.borderColor,
        borderColorHover = _a.borderColorHover,
        color = _a.color,
        colorDisabled = _a.colorDisabled,
        colorHover = _a.colorHover,
        opacityDisabled = _a.opacityDisabled;
    return "\n        color: ".concat(color, ";\n        border-color: ").concat(borderColor, ";\n        background-color: ").concat(backgroundColor, ";\n\n        &:hover:enabled {\n          background-color: ").concat(backgroundColorHover, ";\n          border-color: ").concat(borderColorHover, ";\n          color: ").concat(colorHover, ";\n        }\n\n        &:disabled {\n          cursor: default;\n          color: ").concat(colorDisabled, ";\n          opacity: ").concat(opacityDisabled, ";\n        }\n      ");
  }, Menu, function (props) {
    var _a = VARIANT_STYLES[props.variant],
        menuBackgroundColor = _a.menuBackgroundColor,
        menuBackgroundColorHover = _a.menuBackgroundColorHover,
        menuColor = _a.menuColor,
        menuColorHover = _a.menuColorHover;
    return "\n        color: ".concat(menuColor, ";\n        background-color: ").concat(menuBackgroundColor, ";\n        padding: ").concat(props.isOpen ? '0.5rem 0.25rem' : '0', ";\n\n        &:hover:enabled {\n          color: ").concat(menuColorHover, ";\n          background-color: ").concat(menuBackgroundColorHover, ";\n        }\n      ");
  });
  var templateObject_1$F, templateObject_2$v, templateObject_3$s, templateObject_4$j, templateObject_5$d, templateObject_6$c, templateObject_7$9;

  function Dropdown(_a) {
    var ariaLabel = _a.ariaLabel,
        ariaLabelledBy = _a.ariaLabelledBy,
        className = _a.className,
        _b = _a.hasIndicator,
        hasIndicator = _b === void 0 ? true : _b,
        _c = _a.hasSubMenuIndicator,
        hasSubMenuIndicator = _c === void 0 ? false : _c,
        id = _a.id,
        isDisabled = _a.isDisabled,
        items = _a.items,
        onBlur = _a.onBlur,
        placeholder = _a.placeholder,
        _d = _a.variant,
        variant = _d === void 0 ? 'primary' : _d,
        header = _a.header,
        iconCodeLeft = _a.iconCodeLeft,
        title = _a.title;

    var _e = downshift.useSelect({
      id: id,
      items: items
    }),
        isOpen = _e.isOpen,
        getToggleButtonProps = _e.getToggleButtonProps,
        getMenuProps = _e.getMenuProps,
        highlightedIndex = _e.highlightedIndex,
        getItemProps = _e.getItemProps;

    var buttonProps = __assign({}, getToggleButtonProps());

    var menuProps = __assign({}, getMenuProps());

    return jsxRuntime.jsxs(Root$5, __assign({
      className: className,
      id: id,
      isOpen: isOpen,
      onBlur: function (e) {
        if (e.relatedTarget && e.relatedTarget === buttonProps.ref.current) {
          return;
        }

        onBlur === null || onBlur === void 0 ? void 0 : onBlur();
      },
      variant: variant
    }, {
      children: [!header ? null : jsxRuntime.jsx(DropdownHeader, {
        children: header
      }, void 0), jsxRuntime.jsxs(Button$1, __assign({}, buttonProps, {
        "aria-label": ariaLabel,
        "aria-labelledby": ariaLabelledBy,
        variant: variant,
        disabled: isDisabled,
        title: title
      }, {
        children: [iconCodeLeft && jsxRuntime.jsx(DropdownIcon$3, {
          className: "leftIcon",
          iconCode: iconCodeLeft
        }, void 0), placeholder, hasIndicator && jsxRuntime.jsx(DropdownIcon$3, {
          className: "rightIndicator",
          iconCode: "chevron-down"
        }, void 0)]
      }), void 0), items.length > 0 && jsxRuntime.jsx(Menu, __assign({}, menuProps, {
        "aria-labelledby": buttonProps.id,
        role: "menu"
      }, {
        children: isOpen && items.map(function (item, index) {
          var itemProps = getItemProps({
            item: item,
            index: index,
            disabled: item.isDisabled,
            onClick: item.onClick
          });
          return jsxRuntime.jsxs(React__namespace.Fragment, {
            children: [jsxRuntime.jsxs(MenuItem, __assign({}, itemProps, {
              hasSectionBreak: item.hasSectionBreak,
              isHighlighted: highlightedIndex === index,
              "aria-selected": undefined,
              role: "menuitem",
              variant: variant
            }, {
              children: [item.display, hasSubMenuIndicator && jsxRuntime.jsx(DropdownIcon$3, {
                iconCode: "chevron-down"
              }, void 0)]
            }), void 0), item.hasSectionBreak && jsxRuntime.jsx(Divider, {}, void 0)]
          }, "".concat(item.display, "-").concat(index));
        })
      }), void 0)]
    }), void 0);
  }

  var StyledButton = /*#__PURE__*/styled__default["default"](Button$1).withConfig({
    displayName: "SingleSelectstyles__StyledButton",
    componentId: "sc-1r0v1lv-0"
  })(templateObject_1$E || (templateObject_1$E = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n"], ["\n  display: flex;\n  justify-content: space-between;\n"])));
  var templateObject_1$E;

  function SingleSelect(_a) {
    var ariaLabel = _a.ariaLabel,
        ariaLabelledBy = _a.ariaLabelledBy,
        className = _a.className,
        hasIndicator = _a.hasIndicator,
        id = _a.id,
        items = _a.items,
        onChange = _a.onChange,
        onBlur = _a.onBlur,
        _b = _a.variant,
        variant = _b === void 0 ? 'primary' : _b,
        selectedItem = _a.selectedItem,
        placeholder = _a.placeholder,
        noHighlight = _a.noHighlight,
        _c = _a.iconCode,
        iconCode = _c === void 0 ? 'chevron-down' : _c,
        _d = _a.iconPrefix,
        iconPrefix = _d === void 0 ? 'fal' : _d;

    var _e = downshift.useSelect({
      id: id,
      items: items,
      initialSelectedItem: selectedItem,
      onSelectedItemChange: function (_a) {
        var selectedItemEvent = _a.selectedItem;
        onChange === null || onChange === void 0 ? void 0 : onChange(selectedItemEvent);
      }
    }),
        isOpen = _e.isOpen,
        getToggleButtonProps = _e.getToggleButtonProps,
        getMenuProps = _e.getMenuProps,
        highlightedIndex = _e.highlightedIndex,
        getItemProps = _e.getItemProps,
        selectItem = _e.selectItem,
        reset = _e.reset;

    React__namespace.useEffect(function () {
      if (!selectedItem) {
        reset();
      } else {
        selectItem(selectedItem);
      }
    }, [selectedItem, reset, selectItem]);

    var buttonProps = __assign({}, getToggleButtonProps());

    return jsxRuntime.jsxs(Root$5, __assign({
      className: className,
      isOpen: isOpen,
      onBlur: function (e) {
        if (e.relatedTarget && e.relatedTarget === buttonProps.ref.current) {
          return;
        }

        onBlur === null || onBlur === void 0 ? void 0 : onBlur();
      },
      variant: variant
    }, {
      children: [jsxRuntime.jsxs(StyledButton, __assign({}, buttonProps, {
        "aria-haspopup": "menu",
        "aria-label": ariaLabel,
        "aria-labelledby": ariaLabelledBy,
        variant: variant
      }, {
        children: [(selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.display) || placeholder, hasIndicator && jsxRuntime.jsx(DropdownIcon$3, {
          iconCode: iconCode,
          prefix: iconPrefix
        }, void 0)]
      }), void 0), jsxRuntime.jsx(Menu, __assign({}, getMenuProps(), {
        "aria-labelledby": buttonProps.id
      }, {
        children: isOpen && items.map(function (item, index) {
          var itemProps = getItemProps({
            item: item,
            index: index,
            disabled: item.isDisabled
          });
          return jsxRuntime.jsxs(React__namespace.Fragment, {
            children: [jsxRuntime.jsx(MenuItem, __assign({}, itemProps, {
              hasSectionBreak: item.hasSectionBreak,
              isHighlighted: !noHighlight && highlightedIndex === index,
              variant: variant
            }, {
              children: item.display
            }), void 0), item.hasSectionBreak && jsxRuntime.jsx(Divider, {}, void 0)]
          }, "".concat(item.display, "-").concat(index));
        })
      }), void 0)]
    }), void 0);
  }

  var objectDefineProperties = {};

  var internalObjectKeys = objectKeysInternal;
  var enumBugKeys$1 = enumBugKeys$3;

  // `Object.keys` method
  // https://tc39.es/ecma262/#sec-object.keys
  // eslint-disable-next-line es/no-object-keys -- safe
  var objectKeys$1 = Object.keys || function keys(O) {
    return internalObjectKeys(O, enumBugKeys$1);
  };

  var DESCRIPTORS$1 = descriptors;
  var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;
  var definePropertyModule$2 = objectDefineProperty;
  var anObject$8 = anObject$b;
  var toIndexedObject$1 = toIndexedObject$5;
  var objectKeys = objectKeys$1;

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

  var fails$9 = fails$h;

  var correctPrototypeGetter = !fails$9(function () {
    function F() { /* empty */ }
    F.prototype.constructor = null;
    // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
    return Object.getPrototypeOf(new F()) !== F.prototype;
  });

  var global$a = global$y;
  var hasOwn$1 = hasOwnProperty_1;
  var isCallable$6 = isCallable$i;
  var toObject$1 = toObject$3;
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

  var fails$8 = fails$h;
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

  var CheckboxIcon = /*#__PURE__*/styled__default["default"](Icon$1).withConfig({
    displayName: "MultiSelectstyles__CheckboxIcon",
    componentId: "sc-7enybs-0"
  })(templateObject_1$D || (templateObject_1$D = __makeTemplateObject(["\n  margin-right: 0.875rem;\n"], ["\n  margin-right: 0.875rem;\n"])));
  var templateObject_1$D;

  function MultiSelect(_a) {
    var _b = _a.actions,
        actions = _b === void 0 ? [] : _b,
        ariaLabel = _a.ariaLabel,
        ariaLabelledBy = _a.ariaLabelledBy,
        className = _a.className,
        hasIndicator = _a.hasIndicator,
        id = _a.id,
        isDisabled = _a.isDisabled,
        items = _a.items,
        onBlur = _a.onBlur,
        onChange = _a.onChange,
        placeholder = _a.placeholder,
        selectedItems = _a.selectedItems,
        _c = _a.variant,
        variant = _c === void 0 ? 'primary' : _c;
    var allItems = React__namespace.useMemo(function () {
      return __spreadArray(__spreadArray([], actions, true), items, true);
    }, [actions, items]);

    var _d = downshift.useMultipleSelection({
      selectedItems: selectedItems
    }),
        getDropdownProps = _d.getDropdownProps,
        setSelectedItems = _d.setSelectedItems;

    React__namespace.useEffect(function () {
      setSelectedItems(selectedItems);
    }, [setSelectedItems, selectedItems]);
    var selectedItemsSet = React__namespace.useMemo(function () {
      return new Set(selectedItems);
    }, [selectedItems]);
    var handleChange = React__namespace.useCallback(function (selectedItem) {
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
    var handleChangeRef = React__namespace.useRef(handleChange);
    React__namespace.useEffect(function () {
      handleChangeRef.current = handleChange;
    }, [handleChange]);

    var _e = downshift.useSelect({
      selectedItem: null,
      id: id,
      items: allItems,
      stateReducer: function (state, actionAndChanges) {
        var changes = actionAndChanges.changes,
            type = actionAndChanges.type;

        switch (type) {
          case downshift.useSelect.stateChangeTypes.MenuKeyDownEnter:
          case downshift.useSelect.stateChangeTypes.MenuKeyDownSpaceButton:
          case downshift.useSelect.stateChangeTypes.ItemClick:
            {
              return __assign(__assign({}, state), {
                selectedItem: changes.selectedItem,
                isOpen: true
              });
            }
        }

        return __assign(__assign({}, state), changes);
      },
      onStateChange: function (_a) {
        var type = _a.type,
            selectedItem = _a.selectedItem;

        switch (type) {
          case downshift.useSelect.stateChangeTypes.MenuKeyDownEnter:
          case downshift.useSelect.stateChangeTypes.MenuKeyDownSpaceButton:
          case downshift.useSelect.stateChangeTypes.ItemClick:
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
    }),
        isOpen = _e.isOpen,
        getToggleButtonProps = _e.getToggleButtonProps,
        getMenuProps = _e.getMenuProps,
        highlightedIndex = _e.highlightedIndex,
        getItemProps = _e.getItemProps;

    var buttonProps = __assign({}, getToggleButtonProps(getDropdownProps({
      disabled: isDisabled,
      preventKeyAction: isOpen
    })));

    return jsxRuntime.jsxs(Root$5, __assign({
      className: className,
      isOpen: isOpen,
      onBlur: function (e) {
        if (e.relatedTarget && e.relatedTarget === buttonProps.ref.current) {
          return;
        }

        onBlur === null || onBlur === void 0 ? void 0 : onBlur();
      },
      variant: variant
    }, {
      children: [jsxRuntime.jsxs(Button$1, __assign({}, buttonProps, {
        "aria-label": ariaLabel,
        "aria-labelledby": ariaLabelledBy
      }, {
        children: [placeholder, hasIndicator && jsxRuntime.jsx(DropdownIcon$3, {
          iconCode: "chevron-down"
        }, void 0)]
      }), void 0), jsxRuntime.jsx(Menu, __assign({}, getMenuProps(), {
        "aria-labelledby": buttonProps.id
      }, {
        children: isOpen && allItems.map(function (item, index) {
          var isAction = item.onClick;
          return jsxRuntime.jsxs(React__namespace.Fragment, {
            children: [jsxRuntime.jsxs(MenuItem, __assign({}, getItemProps({
              item: item,
              index: index,
              disabled: item.isDisabled
            }), {
              alignment: item.alignment,
              hasSectionBreak: item.hasSectionBreak,
              isAction: isAction,
              isHighlighted: highlightedIndex === index,
              variant: variant,
              width: item.width
            }, {
              children: [!isAction && jsxRuntime.jsx(CheckboxIcon, {
                iconCode: selectedItemsSet.has(item) ? 'check-square' : 'square'
              }, void 0), item.display]
            }), void 0), item.hasSectionBreak && jsxRuntime.jsx(Divider, {}, void 0)]
          }, "".concat(item.display, "-").concat(index));
        })
      }), void 0)]
    }), void 0);
  }

  var GridDropdown = /*#__PURE__*/styled__default["default"](Dropdown).withConfig({
    displayName: "TableCellDropdownstyles__GridDropdown",
    componentId: "sc-7whhkg-0"
  })(templateObject_1$C || (templateObject_1$C = __makeTemplateObject(["\n  background-color: transparent;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  border: 0.03125rem solid ", ";\n  && button {\n    color: ", ";\n    background-color: transparent;\n    border: none;\n    padding: 0;\n    font-family: IBM Plex Mono;\n    font-size: 0.75rem;\n    font-weight: 400;\n    line-height: 1rem;\n    letter-spacing: 0em;\n\n    &:focus:enabled {\n      box-shadow: none;\n    }\n\n    &:hover:enabled {\n      color: ", ";\n      background-color: transparent;\n    }\n  }\n\n  ul {\n    z-index: 999;\n    display: flex;\n    flex-direction: column;\n    min-width: 0;\n    right: 0;\n    & li {\n      text-align: center;\n    }\n  }\n\n  ", " {\n    margin-left: 0.25rem;\n  }\n"], ["\n  background-color: transparent;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  border: 0.03125rem solid ", ";\n  && button {\n    color: ", ";\n    background-color: transparent;\n    border: none;\n    padding: 0;\n    font-family: IBM Plex Mono;\n    font-size: 0.75rem;\n    font-weight: 400;\n    line-height: 1rem;\n    letter-spacing: 0em;\n\n    &:focus:enabled {\n      box-shadow: none;\n    }\n\n    &:hover:enabled {\n      color: ", ";\n      background-color: transparent;\n    }\n  }\n\n  ul {\n    z-index: 999;\n    display: flex;\n    flex-direction: column;\n    min-width: 0;\n    right: 0;\n    & li {\n      text-align: center;\n    }\n  }\n\n  ", " {\n    margin-left: 0.25rem;\n  }\n"])), colors.greyLight, function (props) {
    return props.displayColor ? props.displayColor : colors.greyDark;
  }, colors.greyDark, DropdownIcon$3);
  var templateObject_1$C;

  var TableCellDropdown = function TableCellDropdown(_a) {
    var value = _a.value,
        items = _a.items,
        displayColor = _a.displayColor;
    return jsxRuntime.jsx(GridDropdown, {
      items: items,
      placeholder: value,
      variant: 'secondary',
      displayColor: displayColor
    }, void 0);
  };

  var LogoStyle = /*#__PURE__*/styled__default["default"].img.withConfig({
    displayName: "Logostyles__LogoStyle",
    componentId: "sc-v0ex70-0"
  })(templateObject_1$B || (templateObject_1$B = __makeTemplateObject(["\n  max-width: 100%;\n  max-height: 100%;\n  height: auto;\n  width: auto;\n"], ["\n  max-width: 100%;\n  max-height: 100%;\n  height: auto;\n  width: auto;\n"])));
  var templateObject_1$B;

  var Logo = function Logo(_a) {
    var imageSource = _a.imageSource;
    return jsxRuntime.jsx(LogoStyle, {
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

  var fails$7 = fails$h;
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

  var fails$6 = fails$h;
  var global$5 = global$y;

  // babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
  var $RegExp$1 = global$5.RegExp;

  var regexpUnsupportedDotAll = fails$6(function () {
    var re = $RegExp$1('.', 's');
    return !(re.dotAll && re.exec('\n') && re.flags === 's');
  });

  var fails$5 = fails$h;
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
  var fails$4 = fails$h;
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
  var fails$3 = fails$h;
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
  var fails$2 = fails$h;

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

  var VARIANT_MAP$b = {
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
  var NavTabWrapper = /*#__PURE__*/styled__default["default"].div.withConfig({
    displayName: "NavTabButtonstyles__NavTabWrapper",
    componentId: "sc-lz5jvo-0"
  })(templateObject_1$A || (templateObject_1$A = __makeTemplateObject(["\n  padding: 14px 51px 0 0;\n"], ["\n  padding: 14px 51px 0 0;\n"])));
  var NavButton = /*#__PURE__*/styled__default["default"].button.withConfig({
    displayName: "NavTabButtonstyles__NavButton",
    componentId: "sc-lz5jvo-1"
  })(templateObject_2$u || (templateObject_2$u = __makeTemplateObject(["\n  all: unset;\n  cursor: pointer;\n  font-size: 16px;\n  font-weight: ", ";\n  font-family: 'IBM Plex Sans';\n  color: ", ";\n  padding-bottom: 9px;\n  :hover {\n    color: ", ";\n  }\n  border-bottom: ", ";\n"], ["\n  all: unset;\n  cursor: pointer;\n  font-size: 16px;\n  font-weight: ", ";\n  font-family: 'IBM Plex Sans';\n  color: ", ";\n  padding-bottom: 9px;\n  :hover {\n    color: ", ";\n  }\n  border-bottom: ", ";\n"])), function (props) {
    return props.isActive ? 'bold' : ' 500';
  }, function (props) {
    return VARIANT_MAP$b["".concat(props.variantType)].textColor;
  }, function (props) {
    return VARIANT_MAP$b["".concat(props.variantType)].tabHoverColor;
  }, function (props) {
    return props.isActive ? " 5px solid ".concat(VARIANT_MAP$b["".concat(props.variantType)].activeHighlightColor) : null;
  });
  var templateObject_1$A, templateObject_2$u;

  var NavTabButton = function NavTabButton(_a) {
    var tab = _a.tab,
        variantType = _a.variantType,
        activeTab = _a.activeTab,
        setActiveTab = _a.setActiveTab,
        handleNavigate = _a.handleNavigate,
        setParentActiveTab = _a.setParentActiveTab;
    var title = tab.title;

    var NavTabButtonClick = function NavTabButtonClick() {
      setActiveTab(title);
      handleNavigate(tab);
      setParentActiveTab(undefined);
    };

    return jsxRuntime.jsx(NavTabWrapper, {
      children: jsxRuntime.jsx(NavButton, __assign({
        onClick: NavTabButtonClick,
        variantType: variantType,
        isActive: activeTab === title
      }, {
        children: title
      }), void 0)
    }, void 0);
  };

  var NavTabBarWrapper = /*#__PURE__*/styled__default["default"].nav.withConfig({
    displayName: "NavTabBarstyles__NavTabBarWrapper",
    componentId: "sc-pkuekk-0"
  })(templateObject_1$z || (templateObject_1$z = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: nowrap;\n  box-shadow: 0 1px 1px 0 rgba(47, 51, 54, 0.1);\n  align-items: center;\n  max-height: 48px;\n  background-color: ", ";\n  margin-top: 1px;\n"], ["\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: nowrap;\n  box-shadow: 0 1px 1px 0 rgba(47, 51, 54, 0.1);\n  align-items: center;\n  max-height: 48px;\n  background-color: ", ";\n  margin-top: 1px;\n"])), colors.white);
  var NavTabBarContainer = /*#__PURE__*/styled__default["default"].div.withConfig({
    displayName: "NavTabBarstyles__NavTabBarContainer",
    componentId: "sc-pkuekk-1"
  })(templateObject_2$t || (templateObject_2$t = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n  margin-left: 24px;\n"], ["\n  display: flex;\n  flex-direction: row;\n  margin-left: 24px;\n"])));
  var templateObject_1$z, templateObject_2$t;

  var VARIANT_MAP$a = {
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
  var DropdownWrapper$1 = /*#__PURE__*/styled__default["default"].div.withConfig({
    displayName: "DropdownNavTabstyles__DropdownWrapper",
    componentId: "sc-37xepo-0"
  })(templateObject_1$y || (templateObject_1$y = __makeTemplateObject(["\n  position: absolute;\n  z-index: 2;\n  background-color: #fff;\n  margin-top: -5px;\n  max-height: 260px;\n  border-radius: 8px;\n  box-shadow: 0 1px 4px 0 rgba(47, 51, 54, 0.56);\n  overflow: scroll;\n  scrollbar-width: none;\n  ::-webkit-scrollbar {\n    display: none;\n  }\n"], ["\n  position: absolute;\n  z-index: 2;\n  background-color: #fff;\n  margin-top: -5px;\n  max-height: 260px;\n  border-radius: 8px;\n  box-shadow: 0 1px 4px 0 rgba(47, 51, 54, 0.56);\n  overflow: scroll;\n  scrollbar-width: none;\n  ::-webkit-scrollbar {\n    display: none;\n  }\n"])));
  var DropdownMenu$1 = /*#__PURE__*/styled__default["default"].ul.withConfig({
    displayName: "DropdownNavTabstyles__DropdownMenu",
    componentId: "sc-37xepo-1"
  })(templateObject_2$s || (templateObject_2$s = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  gap: 25px;\n  padding: 19px 22px 19px 16px;\n"], ["\n  display: flex;\n  flex-direction: column;\n  gap: 25px;\n  padding: 19px 22px 19px 16px;\n"])));
  var DropdownIcon$2 = /*#__PURE__*/styled__default["default"](Icon$1).withConfig({
    displayName: "DropdownNavTabstyles__DropdownIcon",
    componentId: "sc-37xepo-2"
  })(templateObject_3$r || (templateObject_3$r = __makeTemplateObject(["\n  margin-left: 8px;\n  font-size: 14px;\n  font-weight: bold;\n  color: ", ";\n"], ["\n  margin-left: 8px;\n  font-size: 14px;\n  font-weight: bold;\n  color: ", ";\n"])), function (props) {
    return VARIANT_MAP$a["".concat(props.variantType)].dropdownIcon;
  });
  var DropdownButtonWrapper = /*#__PURE__*/styled__default["default"].div.withConfig({
    displayName: "DropdownNavTabstyles__DropdownButtonWrapper",
    componentId: "sc-37xepo-3"
  })(templateObject_4$i || (templateObject_4$i = __makeTemplateObject(["\n  padding: 14px 51px 0 0;\n  white-space: nowrap;\n"], ["\n  padding: 14px 51px 0 0;\n  white-space: nowrap;\n"])));
  var DropdownButton = /*#__PURE__*/styled__default["default"].button.withConfig({
    displayName: "DropdownNavTabstyles__DropdownButton",
    componentId: "sc-37xepo-4"
  })(templateObject_5$c || (templateObject_5$c = __makeTemplateObject(["\n  all: unset;\n  font-size: 16px;\n  font-weight: 500;\n  font-family: 'IBM Plex Sans';\n  color: ", ";\n  padding-bottom: 9px;\n  cursor: pointer;\n  :hover {\n    color: ", ";\n  }\n  border-bottom: ", ";\n"], ["\n  all: unset;\n  font-size: 16px;\n  font-weight: 500;\n  font-family: 'IBM Plex Sans';\n  color: ", ";\n  padding-bottom: 9px;\n  cursor: pointer;\n  :hover {\n    color: ", ";\n  }\n  border-bottom: ", ";\n"])), function (props) {
    return VARIANT_MAP$a["".concat(props.variantType)].textColor;
  }, function (props) {
    return VARIANT_MAP$a["".concat(props.variantType)].tabHoverColor;
  }, function (props) {
    return props.isActive ? "5px solid ".concat(VARIANT_MAP$a["".concat(props.variantType)].activeHighlightColor) : null;
  });
  var DropdownListButton$1 = /*#__PURE__*/styled__default["default"].button.withConfig({
    displayName: "DropdownNavTabstyles__DropdownListButton",
    componentId: "sc-37xepo-5"
  })(templateObject_6$b || (templateObject_6$b = __makeTemplateObject(["\n  all: unset;\n  font-size: 14px;\n  font-weight: 500;\n  font-family: 'IBM Plex Sans';\n  color: ", ";\n  padding-bottom: 0;\n  cursor: pointer;\n  :hover {\n    color: ", ";\n  }\n  border-bottom: ", ";\n"], ["\n  all: unset;\n  font-size: 14px;\n  font-weight: 500;\n  font-family: 'IBM Plex Sans';\n  color: ", ";\n  padding-bottom: 0;\n  cursor: pointer;\n  :hover {\n    color: ", ";\n  }\n  border-bottom: ", ";\n"])), function (props) {
    return VARIANT_MAP$a["".concat(props.variantType)].textColor;
  }, function (props) {
    return VARIANT_MAP$a["".concat(props.variantType)].tabHoverColor;
  }, function (props) {
    return props.isActive ? " 3px solid ".concat(VARIANT_MAP$a["".concat(props.variantType)].activeHighlightColor) : null;
  });
  var templateObject_1$y, templateObject_2$s, templateObject_3$r, templateObject_4$i, templateObject_5$c, templateObject_6$b;

  var DropdownNavTab = function DropdownNavTab(_a) {
    var tab = _a.tab,
        activeTab = _a.activeTab,
        setActiveTab = _a.setActiveTab,
        handleNavigate = _a.handleNavigate,
        variantType = _a.variantType,
        parentActiveTab = _a.parentActiveTab,
        setParentActiveTab = _a.setParentActiveTab;

    var _b = React.useState(false),
        dropdownOpen = _b[0],
        setDropdownOpen = _b[1];

    var title = tab.title,
        children = tab.children;

    var _c = downshift.useSelect({
      items: children
    }),
        getToggleButtonProps = _c.getToggleButtonProps,
        getMenuProps = _c.getMenuProps,
        getItemProps = _c.getItemProps;

    var buttonProps = __assign({}, getToggleButtonProps());

    var menuProps = __assign({}, getMenuProps({}, {
      suppressRefError: true
    }));

    var dropdownButtonClick = function dropdownButtonClick() {
      setDropdownOpen(!dropdownOpen);
    };

    var listItemClick = function listItemClick(item) {
      var skipTabUpdate = handleNavigate(item);
      setDropdownOpen(false);

      if (skipTabUpdate) {
        return;
      }

      setActiveTab(item.title);
      setParentActiveTab(title);
    };

    return jsxRuntime.jsx("div", {
      children: jsxRuntime.jsxs(OutsideClickHandler__default["default"], __assign({
        onOutsideClick: function () {
          setDropdownOpen(false);
        }
      }, {
        children: [jsxRuntime.jsx(DropdownButtonWrapper, {
          children: jsxRuntime.jsxs(DropdownButton, __assign({}, buttonProps, {
            isActive: activeTab === title || parentActiveTab === title,
            variantType: variantType,
            onClick: dropdownButtonClick
          }, {
            children: [title, jsxRuntime.jsx(DropdownIcon$2, {
              iconCode: dropdownOpen ? 'angle-up' : 'angle-down',
              prefix: "far",
              variantType: variantType
            }, void 0)]
          }), void 0)
        }, void 0), dropdownOpen ? jsxRuntime.jsx(DropdownWrapper$1, {
          children: jsxRuntime.jsx(DropdownMenu$1, __assign({}, menuProps, {
            "aria-labelledby": buttonProps.id,
            role: "menu"
          }, {
            children: dropdownOpen && children.map(function (item, index) {
              var itemProps = getItemProps({
                item: item,
                index: index
              });
              return /*#__PURE__*/React.createElement(DropdownListButton$1, __assign({}, itemProps, {
                key: "".concat(item).concat(index),
                "aria-label": item.title,
                "aria-selected": undefined,
                isActive: activeTab === item.title,
                variantType: variantType,
                onClick: function () {
                  return listItemClick(item);
                },
                role: "menuitem"
              }), item.title);
            })
          }), void 0)
        }, void 0) : null]
      }), void 0)
    }, void 0);
  };

  var img$3 = "data:image/svg+xml,%3csvg width='189' height='48' viewBox='0 0 189 48' xmlns='http://www.w3.org/2000/svg'%3e %3cg fill='%2300263E' fill-rule='evenodd'%3e %3cpath d='M181.086 35.961H189l-12.851-23.89h-8.23l-12.852 23.89h.854c4.305-.095 7.85-1.681 9.623-4.695l6.458-11.74 9.084 16.435zm-46.816-9.898 7.407-11.55c1.107-1.65 2.754-2.474 4.938-2.474h6.584v23.89h-7.407V20.257l-9.876 15.674h-3.292l-9.877-15.642v15.673h-7.407v-23.89h6.584c2.184 0 3.83.824 4.938 2.474l7.408 11.518zM88.656 14.768v12.944c0 1.65 1.108 2.475 3.292 2.475h7.913c2.184 0 3.292-.825 3.292-2.475V12.04h7.408V29.33c0 4.41-2.47 6.6-7.408 6.6H88.656c-4.938 0-7.407-2.19-7.407-6.6V12.04c7.407 0 7.407 2.729 7.407 2.729zM79.697 35.96H57.793c-3.293 0-4.939-1.65-4.939-4.95v-18.94h7.408v18.116h13.294c5.667 0 6.141 5.774 6.141 5.774zM20.428 36.026l4.19 4.198a2.539 2.539 0 0 1 0 3.577L20.427 48l-4.189-4.199a2.538 2.538 0 0 1 0-3.577l4.189-4.198zm-11.947-24 4.19 4.199a2.538 2.538 0 0 1 0 3.576L8.48 24l4.19 4.198a2.523 2.523 0 0 0 3.568 0l4.163-4.172-4.163-4.173a2.538 2.538 0 0 1 0-3.577l4.19-4.198 4.188 4.198a2.525 2.525 0 0 0 3.569 0l4.189-4.198.065.065.406.408.087.086.297.298.112.112.505.507.286.286.306.307.16.161.336.336c.229.23.47.47.72.723l.385.385.81.81.638.64.886.889c3.31 3.213 3.31 8.604 0 11.922l-6 6.013-4.188-4.199a2.539 2.539 0 0 1 0-3.577l4.189-4.198-4.19-4.2a2.525 2.525 0 0 0-3.568 0l-4.163 4.174 4.163 4.172a2.539 2.539 0 0 1 0 3.577l-4.189 4.199-4.19-4.199a2.524 2.524 0 0 0-3.567 0l-4.19 4.199-.065-.065-.254-.256-.239-.238-.297-.299-.112-.112-.505-.506-.286-.286-.306-.307-.16-.161-.335-.336-.175-.174-.36-.362-.187-.187-.384-.385-1.02-1.022-.428-.43-.886-.887c-3.31-3.266-3.31-8.657 0-11.922l6-6.013zm16.136-7.827a2.539 2.539 0 0 1 0 3.576l-4.189 4.199-4.19-4.199a2.539 2.539 0 0 1 0-3.576l4.19-4.2 4.189 4.2z'/%3e %3c/g%3e%3c/svg%3e";

  var PoweredLogoWrapper = /*#__PURE__*/styled__default["default"].div.withConfig({
    displayName: "PoweredByLumaLogostyles__PoweredLogoWrapper",
    componentId: "sc-19ad4eu-0"
  })(templateObject_1$x || (templateObject_1$x = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  max-width: ", ";\n  max-height: 24px;\n  margin-right: 24px;\n"], ["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  max-width: ", ";\n  max-height: 24px;\n  margin-right: 24px;\n"])), function (props) {
    return props.isMobile ? '133px' : '160px';
  });
  var PoweredText = /*#__PURE__*/styled__default["default"].p.withConfig({
    displayName: "PoweredByLumaLogostyles__PoweredText",
    componentId: "sc-19ad4eu-1"
  })(templateObject_2$r || (templateObject_2$r = __makeTemplateObject(["\n  font-size: ", ";\n  font-family: IBMPlexSans;\n  font-weight: 500;\n  color: ", ";\n  margin-right: 6px;\n"], ["\n  font-size: ", ";\n  font-family: IBMPlexSans;\n  font-weight: 500;\n  color: ", ";\n  margin-right: 6px;\n"])), function (props) {
    return props.isMobile ? '9px' : '11px';
  }, colors.blue);
  var LogoContainer$4 = /*#__PURE__*/styled__default["default"].div.withConfig({
    displayName: "PoweredByLumaLogostyles__LogoContainer",
    componentId: "sc-19ad4eu-2"
  })(templateObject_3$q || (templateObject_3$q = __makeTemplateObject(["\n  width: ", ";\n  height: ", ";\n  overflow: auto;\n  display: flex;\n  flex: 1 1 0%;\n"], ["\n  width: ", ";\n  height: ", ";\n  overflow: auto;\n  display: flex;\n  flex: 1 1 0%;\n"])), function (props) {
    return props.width ? props.width : '9rem';
  }, function (props) {
    return props.height ? props.height : '2rem';
  });
  var templateObject_1$x, templateObject_2$r, templateObject_3$q;

  var PoweredByLumaLogo = function PoweredByLumaLogo(_a) {
    var isMobile = _a.isMobile;
    return jsxRuntime.jsxs(PoweredLogoWrapper, __assign({
      isMobile: isMobile
    }, {
      children: [jsxRuntime.jsx(PoweredText, __assign({
        isMobile: isMobile
      }, {
        children: "Powered by"
      }), void 0), jsxRuntime.jsx(LogoContainer$4, __assign({
        width: '88px',
        height: '24px'
      }, {
        children: jsxRuntime.jsx(Logo, {
          imageSource: img$3
        }, void 0)
      }), void 0)]
    }), void 0);
  };

  var uncurryThis$2 = functionUncurryThis;
  var toObject = toObject$3;

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
  var fails$1 = fails$h;
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

  exports.FrontEndLibraries = void 0;

  (function (FrontEndLibraries) {
    FrontEndLibraries["REACT"] = "REACT";
    FrontEndLibraries["ANGULAR"] = "ANGULAR";
  })(exports.FrontEndLibraries || (exports.FrontEndLibraries = {}));

  exports.ENV = void 0;

  (function (ENV) {
    ENV["PROD"] = "PROD";
    ENV["STAGING"] = "STAGING";
    ENV["UAT"] = "UAT";
    ENV["QA"] = "QA";
    ENV["DEV"] = "DEV";
    ENV["LOCAL"] = "LOCAL";
  })(exports.ENV || (exports.ENV = {}));

  var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8;
  exports.ROUTE_KEYS = void 0;

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
  })(exports.ROUTE_KEYS || (exports.ROUTE_KEYS = {}));

  var ROUTES = (_a = {}, _a[exports.ROUTE_KEYS.HOME] = (_b = {}, _b[exports.FrontEndLibraries.ANGULAR] = '/dashboard', _b[exports.FrontEndLibraries.REACT] = '/dashboard', _b), _a[exports.ROUTE_KEYS.LEARN] = (_c = {}, _c[exports.FrontEndLibraries.ANGULAR] = '/learning-center', _c[exports.FrontEndLibraries.REACT] = '/learning-center', _c), _a[exports.ROUTE_KEYS.ORDERS] = (_d = {}, _d[exports.FrontEndLibraries.ANGULAR] = '/product-marketplace/annuity-product-orders', _d[exports.FrontEndLibraries.REACT] = '/product-marketplace/annuity-product-orders', _d), _a[exports.ROUTE_KEYS.ACCOUNT_UPLOAD] = (_e = {}, _e[exports.FrontEndLibraries.ANGULAR] = '/product-marketplace/account-file-upload', _e[exports.FrontEndLibraries.REACT] = '/product-marketplace/account-file-upload', _e), _a[exports.ROUTE_KEYS.WHOLESALER_MAPPING] = (_f = {}, _f[exports.FrontEndLibraries.ANGULAR] = '/product-marketplace/wholesaler-mapping', _f[exports.FrontEndLibraries.REACT] = '/product-marketplace/wholesaler-mapping', _f), _a[exports.ROUTE_KEYS.LIFECYCLE] = (_g = {}, _g[exports.FrontEndLibraries.ANGULAR] = '/lifecycle-manager', _g[exports.FrontEndLibraries.REACT] = '/lifecycle-manager', _g), _a[exports.ROUTE_KEYS.TRADE] = (_h = {}, _h[exports.FrontEndLibraries.ANGULAR] = '/secondaries', _h[exports.FrontEndLibraries.REACT] = '/secondaries', _h), _a[exports.ROUTE_KEYS.COMPANY_ADMIN] = (_j = {}, _j[exports.FrontEndLibraries.ANGULAR] = '/company-administration', _j[exports.FrontEndLibraries.REACT] = '/company-administration', _j), _a[exports.ROUTE_KEYS.COMPANY_RELATIONSHIP] = (_k = {}, _k[exports.FrontEndLibraries.ANGULAR] = '/admin/company-administration-relationship-mapping', _k[exports.FrontEndLibraries.REACT] = '/admin/company-administration-relationship-mapping', _k), _a[exports.ROUTE_KEYS.COMPANY_CONFIG] = (_l = {}, _l[exports.FrontEndLibraries.ANGULAR] = '/admin/company-administration-configuration', _l[exports.FrontEndLibraries.REACT] = '/admin/company-administration-configuration', _l), _a[exports.ROUTE_KEYS.HISTORICAL_EMAILS] = (_m = {}, _m[exports.FrontEndLibraries.ANGULAR] = '/admin/email-info/overview', _m[exports.FrontEndLibraries.REACT] = '/admin/email-info/overview', _m), _a[exports.ROUTE_KEYS.FILE_UPLOAD] = (_o = {}, _o[exports.FrontEndLibraries.ANGULAR] = '/admin/file-upload', _o[exports.FrontEndLibraries.REACT] = '/admin/file-upload', _o), _a[exports.ROUTE_KEYS.AUDIT_RECORDS] = (_p = {}, _p[exports.FrontEndLibraries.ANGULAR] = '/admin/audit-records', _p[exports.FrontEndLibraries.REACT] = '/admin/audit-records', _p), _a[exports.ROUTE_KEYS.WHOLESALER_DEFINITION] = (_q = {}, _q[exports.FrontEndLibraries.ANGULAR] = '/admin/wholesaler-definition', _q[exports.FrontEndLibraries.REACT] = '/admin/wholesaler-definition', _q), _a[exports.ROUTE_KEYS.ADMIN_WHOLESALER_MAPPING] = (_r = {}, _r[exports.FrontEndLibraries.ANGULAR] = '/admin/wholesaler-mapping', _r[exports.FrontEndLibraries.REACT] = '/admin/wholesaler-mapping', _r), _a[exports.ROUTE_KEYS.PRODUCT_UPLOAD] = (_s = {}, _s[exports.FrontEndLibraries.ANGULAR] = '/product-upload', _s[exports.FrontEndLibraries.REACT] = '/product-upload', _s), _a[exports.ROUTE_KEYS.DISCLOSURE_DOC_UPLOAD] = (_t = {}, _t[exports.FrontEndLibraries.ANGULAR] = '/product-marketplace/disclosure-document-upload', _t[exports.FrontEndLibraries.REACT] = '/product-marketplace/disclosure-document-upload', _t), _a[exports.ROUTE_KEYS.MARKET_DATA_MAINTENANCE] = (_u = {}, _u[exports.FrontEndLibraries.ANGULAR] = '/admin/market-data-maintainence', _u[exports.FrontEndLibraries.REACT] = '/admin/market-data-maintainence', _u), _a[exports.ROUTE_KEYS.ISSUER_CONFIRMATION] = (_v = {}, _v[exports.FrontEndLibraries.ANGULAR] = '/admin/issuer-confirmation', _v[exports.FrontEndLibraries.REACT] = '/admin/issuer-confirmation', _v), _a[exports.ROUTE_KEYS.EMAIL_CONFIG] = (_w = {}, _w[exports.FrontEndLibraries.ANGULAR] = '/admin/email-config', _w[exports.FrontEndLibraries.REACT] = '/admin/email-config', _w), _a[exports.ROUTE_KEYS.FIND_RFQ] = (_x = {}, _x[exports.FrontEndLibraries.ANGULAR] = '/admin/find-rfq', _x[exports.FrontEndLibraries.REACT] = '/admin/find-rfq', _x), _a[exports.ROUTE_KEYS.PRODUCT_MAINTENANCE] = (_y = {}, _y[exports.FrontEndLibraries.ANGULAR] = '/admin/product-maintenance', _y[exports.FrontEndLibraries.REACT] = '/admin/product-maintenance', _y), _a[exports.ROUTE_KEYS.NOTIFICATIONS] = (_z = {}, _z[exports.FrontEndLibraries.ANGULAR] = '/notification-center', _z[exports.FrontEndLibraries.REACT] = '/notification-center', _z), _a[exports.ROUTE_KEYS.STRUCTURED_PRODUCTS] = (_0 = {}, _0[exports.FrontEndLibraries.ANGULAR] = '/product-marketplace/structured-products', _0[exports.FrontEndLibraries.REACT] = '/product-marketplace/structured-products', _0), _a[exports.ROUTE_KEYS.ANNUITIES] = (_1 = {}, _1[exports.FrontEndLibraries.ANGULAR] = '/product-marketplace/annuity-products', _1[exports.FrontEndLibraries.REACT] = '/product-marketplace/annuity-products', _1), _a[exports.ROUTE_KEYS.ORDER_MANAGEMENT] = (_2 = {}, _2[exports.FrontEndLibraries.ANGULAR] = '/product-marketplace/structured-product-orders', _2[exports.FrontEndLibraries.REACT] = '/product-marketplace/structured-product-orders', _2), _a[exports.ROUTE_KEYS.MARKETPLACE_SETTINGS] = (_3 = {}, _3[exports.FrontEndLibraries.ANGULAR] = '/marketplace-settings', _3[exports.FrontEndLibraries.REACT] = '/marketplace-settings', _3), _a[exports.ROUTE_KEYS.CREATE_CALENDAR] = (_4 = {}, _4[exports.FrontEndLibraries.ANGULAR] = '/creation-hub/calendar-deal-table', _4[exports.FrontEndLibraries.REACT] = '/creation-hub/calendar-deal-table', _4), _a[exports.ROUTE_KEYS.CREATE_FORM] = (_5 = {}, _5[exports.FrontEndLibraries.ANGULAR] = '/creation-hub-ubs/create-form', _5[exports.FrontEndLibraries.REACT] = '/creation-hub-ubs/create-form', _5), _a[exports.ROUTE_KEYS.CREATE] = (_6 = {}, _6[exports.FrontEndLibraries.ANGULAR] = '/creation-hub?', _6[exports.FrontEndLibraries.REACT] = '/creationhub', _6), _a[exports.ROUTE_KEYS.EVENT_NOTIFICATIONS] = (_7 = {}, _7[exports.FrontEndLibraries.ANGULAR] = '/event-confirmations', _7[exports.FrontEndLibraries.REACT] = '/event-confirmations', _7), _a[exports.ROUTE_KEYS.EVENT_NOTIFICATIONS_ADMIN] = (_8 = {}, _8[exports.FrontEndLibraries.ANGULAR] = '/event-confirmations', _8[exports.FrontEndLibraries.REACT] = '/event-confirmations', _8), _a);

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

  var COMPANIES_WITH_EVENT_NOTIFICATION_ACCESS = ['Bank of America', 'GWIM']; // TODO - keep in shared location
  // libs/common/src/lib/getLumaAppLogin.ts

  var getAngularLink = function getAngularLink(url) {
    var formattedUrl = url !== null && url !== void 0 ? url : window.origin;
    return formattedUrl.replace(/go(?:-(an|ch|dn|lm|sp))?(?=\.)/g, function (match, teamSubdomain) {
      return teamSubdomain != null ? teamSubdomain : 'app';
    });
  };
  var isTabDropdown = function isTabDropdown(tab) {
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

  var isProduction = function isProduction() {
    return window.origin.includes('https://app.lumafintech.com') || window.origin.includes('https://go.lumafintech.com');
  };
  var isStaging = function isStaging() {
    return window.origin.includes('https://go.staging.lumafintech.com') || window.origin.includes('https://app.staging.lumafintech.com');
  };
  var isUAT = function isUAT() {
    return window.origin.includes('https://go.buat.lumafintech.com') || window.origin.includes('https://app.buat.lumafintech.com');
  };
  var isQA = function isQA() {
    return window.origin.includes('https://go.bqa.lumafintech.com') || window.origin.includes('https://app.bqa.lumafintech.com');
  };
  var isDev = function isDev() {
    return window.origin.includes('https://go.bdev.lumafintech.com') || window.origin.includes('https://app.bdev.lumafintech.com');
  };
  var isHigherEnvironment = function isHigherEnvironment() {
    return isProduction() || isStaging() || isUAT();
  }; // LIST OF ENVS FOR ANGULAR (luma-app):
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

  var generateAppUrl = function generateAppUrl(route, destinationLibrary, env) {
    // The following is a method in which we have an env flag that tells us which deployment env we're in.
    // This does not as yet exist, so we are using the second method
    //
    // let baseUrl = `https://${LIBRARY_SUBDOMAINS[destinationLibrary]}.${ENV_SUBDOMAINS[env]}.lumafintech.com`;
    // if (env === ENV.LOCAL) baseUrl = 'http://locahost:4200';
    if (env === void 0) {
      env = exports.ENV.PROD;
    }

    var baseUrl = window.origin;

    if (destinationLibrary === exports.FrontEndLibraries.ANGULAR) {
      if (isHigherEnvironment()) {
        baseUrl = baseUrl.replace('go.', 'app.');
      } else {
        baseUrl = getAngularLink(baseUrl);
      }
    }

    return "".concat(baseUrl).concat(route);
  };

  var createLinkToOtherApp = function createLinkToOtherApp(destinationLibrary, routeKey) {
    var route = ROUTES[routeKey][destinationLibrary];
    return {
      url: generateAppUrl(route, destinationLibrary)
    };
  };

  var determineNavRouteOrUrl = function determineNavRouteOrUrl(frontEndLibrary, routeKey, userPermissions) {
    var route = ROUTES[routeKey][frontEndLibrary]; // FOR HOME (dashboard)
    // If the user has access to the new dashboard or is already in the React app, route to the React app's dashboard

    if (routeKey === exports.ROUTE_KEYS.HOME) {
      if (frontEndLibrary === exports.FrontEndLibraries.ANGULAR && !userHasAccess([WidgetPermissions.MenuCanViewLegacyDashboard], userPermissions)) {
        return createLinkToOtherApp(exports.FrontEndLibraries.REACT, routeKey);
      } else {
        return {
          route: route
        };
      }
    } // FOR CREATION HUB
    // For the time being if we are not in higher envs, route to the new creation hub products in React
    // In higher envs continue to utilize the existing products in Angular
    // Once the products are deployed in production
    // we can remove the env checks and simply route to the React deployments in all cases


    if (routeKey === exports.ROUTE_KEYS.CREATE && !isProduction() && !isUAT() && !isStaging()) {
      if (frontEndLibrary === exports.FrontEndLibraries.REACT) return {
        route: route
      };else {
        return createLinkToOtherApp(exports.FrontEndLibraries.REACT, routeKey);
      }
    } // FOR LIFECYCLE
    // Allow routing to both the existing Angular 'Lifecycle Manager' as well as the React 'Lifecycle Manager 2.0 Beta'
    // Each has its own associated permission for the respective dropdown link to be visible


    if (routeKey === exports.ROUTE_KEYS.LIFECYCLE) {
      if (frontEndLibrary === exports.FrontEndLibraries.REACT) return {
        route: route
      };else {
        return createLinkToOtherApp(exports.FrontEndLibraries.ANGULAR, routeKey);
      }
    } // FOR EVENT CONFIRMATIONS


    if (routeKey === exports.ROUTE_KEYS.EVENT_NOTIFICATIONS) {
      if (frontEndLibrary === exports.FrontEndLibraries.REACT) return {
        route: route
      };else {
        return createLinkToOtherApp(exports.FrontEndLibraries.REACT, routeKey);
      }
    } // FOR EVENT CONFIRMATIONS ADMIN


    if (routeKey === exports.ROUTE_KEYS.EVENT_NOTIFICATIONS_ADMIN) {
      if (frontEndLibrary === exports.FrontEndLibraries.REACT) return {
        route: route
      };else {
        return createLinkToOtherApp(exports.FrontEndLibraries.REACT, routeKey);
      }
    } // FOR SECONDARIES


    if (routeKey === exports.ROUTE_KEYS.TRADE) {
      if (frontEndLibrary === exports.FrontEndLibraries.REACT) return {
        route: route
      };else {
        return createLinkToOtherApp(exports.FrontEndLibraries.REACT, routeKey);
      }
    } // ALL REMAINING CASES


    if (frontEndLibrary === exports.FrontEndLibraries.REACT) {
      return createLinkToOtherApp(exports.FrontEndLibraries.ANGULAR, routeKey);
    } else {
      return {
        route: route
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

  var getColdFusionBaseUrl = function getColdFusionBaseUrl(origin) {
    var currentUrl = origin || window.origin; // TODO - Does this need changed?

    var updatedUrl = currentUrl.replace('http://', 'https://').replace('localhost:4200', 'app.bdev.lumafintech.com').replace('//app.', '//').replace('//go.', '//').replace('//an.', '//').replace('//ch.', '//').replace('//lm.', '//').replace('//pl.', '//').replace('//pm.', '//').replace('bdev.', 'ng').replace('bqa.', 'qa').replace('buat.', 'uat').replace('staging.', 'staging').replace('lumafintech.com', 'portal.lumafintech.com'); // CF links are different for staging and production

    if (updatedUrl.startsWith('https://portal.lumafintech.com') || updatedUrl.startsWith('https://stagingportal.lumafintech.com')) {
      return updatedUrl.replace('lumafintech', 'naviancapital');
    } else return updatedUrl;
  }; // NOTE: AD-HOC TESTS FOR THE ABOVE METHOD, uncomment to use in console
  // TODO - turn these into specs
  // EXPECT THE FOLLOWING TO OUTPUT https://ngportal.lumafintech.com
  // console.log('getColdFusionBaseUrl("http://localhost:4200")', getColdFusionBaseUrl('http://localhost:4200'), '\n');
  // console.log('getColdFusionBaseUrl("https://app.staging.lumafintech.com")', getColdFusionBaseUrl('https://stagingportal.lumafintech.com'), '\n');

  var getColdFusionLink = function getColdFusionLink(page, section) {
    return "".concat(getColdFusionBaseUrl(), "/cdfg/WebPages/").concat(page, ".cfm?").concat(section ? "section=".concat(section, "&") : '');
  };
  var getColdFusionLinkAppVersion = function getColdFusionLinkAppVersion(page, section) {
    return "".concat(getColdFusionBaseUrl(), "/cdfg/app/").concat(page, ".cfm?").concat(section ? "section=".concat(section, "&") : '');
  };
  var STRUCTURED_PRODUCTS_PRODUCT_TYPES = {
    LINKED_CDS: "Market Linked CD's",
    STRUCTURED_NOTES: 'Structured Notes'
  };
  var structuredProductTypes = [STRUCTURED_PRODUCTS_PRODUCT_TYPES.LINKED_CDS, STRUCTURED_PRODUCTS_PRODUCT_TYPES.STRUCTURED_NOTES];
  var ANNUITY_PRODUCT_TYPES = {
    ALL: 'ALL',
    DIA_SPIA: 'DIA/SPIA',
    FIA: 'FIA',
    FIXED_RATE: 'Fixed Rate',
    RILA: 'RILA',
    VARIABLE_ANNUITIES: 'Variable Annuities'
  };
  var annuityProductTypes = [ANNUITY_PRODUCT_TYPES.VARIABLE_ANNUITIES, ANNUITY_PRODUCT_TYPES.DIA_SPIA, ANNUITY_PRODUCT_TYPES.FIA, ANNUITY_PRODUCT_TYPES.FIXED_RATE, ANNUITY_PRODUCT_TYPES.RILA];
  var isAnnuityOnly = function isAnnuityOnly(productTypes) {
    return productTypes.length > 0 && !structuredProductTypes.some(function (product) {
      return productTypes.includes(product);
    });
  };
  var isStructuredProductsOnly = function isStructuredProductsOnly(productTypes) {
    return productTypes.length === 0 || !annuityProductTypes.some(function (product) {
      return productTypes.includes(product);
    });
  };
  var filterNavTabs = function filterNavTabs(navTabs, userPermissions, isProduction, pricingToolType, company) {
    var filteredNavTabs = filterLinks(navTabs, userPermissions, isProduction, pricingToolType, company);
    filteredNavTabs.forEach(function (link) {
      if (link.children) {
        link.children = filterLinks(link.children, userPermissions, isProduction, pricingToolType, company);
      }
    });
    return filteredNavTabs;
  }; // Added because some companies don't want access to LM but their common role has the permission
  // This is temporary and should not be used as a long term solution

  var filterLmFromSomeCompanies = function filterLmFromSomeCompanies(company) {
    var COMPANIES_TO_BLOCK_LM_ACCESS = ['Highland Capital', 'Ash Brokerage'];
    return company && COMPANIES_TO_BLOCK_LM_ACCESS.includes(company);
  };

  var filterLinks = function filterLinks(links, userPermissions, isProduction, pricingToolType, company) {
    return links.filter(function (link) {
      if (link.title === exports.ROUTE_KEYS.COMPANY_ADMIN && isProduction) {
        return false;
      }

      if (link.title === exports.ROUTE_KEYS.CREATE && !pricingToolType) {
        return false;
      }

      if (link.title === exports.ROUTE_KEYS.LIFECYCLE && filterLmFromSomeCompanies(company)) {
        return false;
      }

      if (link.title === 'Event Notifications' && !COMPANIES_WITH_EVENT_NOTIFICATION_ACCESS.includes(company !== null && company !== void 0 ? company : '')) {
        return false;
      }

      return userHasAccess(link.permissions, userPermissions);
    });
  };

  var userHasAccess = function userHasAccess(linkPermissions, userPermissions) {
    return !linkPermissions || linkPermissions.some(function (linkPermission) {
      return userPermissions.some(function (userPermission) {
        return (linkPermission === null || linkPermission === void 0 ? void 0 : linkPermission.toLowerCase()) === (userPermission === null || userPermission === void 0 ? void 0 : userPermission.toLowerCase());
      });
    });
  };

  var NavTabBar = function NavTabBar(_a) {
    var tabs = _a.tabs,
        activeTab = _a.activeTab,
        setActiveTab = _a.setActiveTab,
        handleNavigate = _a.handleNavigate,
        variantType = _a.variantType,
        parentActiveTab = _a.parentActiveTab,
        setParentActiveTab = _a.setParentActiveTab;
    return jsxRuntime.jsxs(NavTabBarWrapper, {
      children: [jsxRuntime.jsx(NavTabBarContainer, {
        children: tabs.map(function (tab, idx) {
          if (isTabDropdown(tab)) {
            return jsxRuntime.jsx(DropdownNavTab, {
              tab: tab,
              activeTab: activeTab,
              setActiveTab: setActiveTab,
              parentActiveTab: parentActiveTab,
              setParentActiveTab: setParentActiveTab,
              handleNavigate: handleNavigate,
              variantType: variantType
            }, "".concat(new Date().getTime(), " ").concat(tab.title));
          } else {
            return jsxRuntime.jsx(NavTabButton, {
              tab: tab,
              setActiveTab: setActiveTab,
              setParentActiveTab: setParentActiveTab,
              variantType: variantType,
              activeTab: activeTab,
              handleNavigate: handleNavigate
            }, "".concat(new Date().getTime(), " ").concat(tab.title));
          }
        })
      }, void 0), variantType === 'secondary' ? jsxRuntime.jsx(PoweredByLumaLogo, {
        isMobile: false
      }, void 0) : null]
    }, void 0);
  };

  var img$2 = "data:image/svg+xml,%3csvg width='189' height='48' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M181.086 35.961H189l-12.851-23.89h-8.23l-12.852 23.89h.854c4.305-.095 7.85-1.681 9.623-4.695l6.458-11.74 9.084 16.435zm-46.816-9.898 7.407-11.55c1.107-1.65 2.754-2.474 4.938-2.474h6.584v23.89h-7.407V20.257l-9.876 15.674h-3.292l-9.877-15.642v15.673h-7.407v-23.89h6.584c2.184 0 3.83.825 4.938 2.474l7.408 11.518zM88.656 14.768v12.944c0 1.65 1.108 2.475 3.292 2.475h7.913c2.184 0 3.292-.825 3.292-2.475V12.04h7.408v17.29c0 4.41-2.47 6.6-7.408 6.6H88.656c-4.938 0-7.407-2.19-7.407-6.6V12.04c7.407 0 7.407 2.729 7.407 2.729zM79.697 35.96H57.793c-3.293 0-4.939-1.65-4.939-4.95V12.07h7.408v18.116h13.294c5.667 0 6.141 5.774 6.141 5.774zm-59.269.066 4.19 4.198a2.539 2.539 0 0 1 0 3.577l-4.19 4.2-4.189-4.2a2.538 2.538 0 0 1 0-3.577l4.189-4.198zm-11.947-24 4.19 4.199a2.538 2.538 0 0 1 0 3.576L8.48 24l4.19 4.199a2.523 2.523 0 0 0 3.568 0l4.163-4.173-4.163-4.173a2.538 2.538 0 0 1 0-3.577l4.19-4.198 4.188 4.198a2.525 2.525 0 0 0 3.569 0l4.189-4.198.065.065.406.408.087.086.297.299.112.111.505.507.286.286.306.307.16.161.336.336c.229.23.47.47.72.723l.385.385.81.81.638.64.886.889c3.31 3.213 3.31 8.604 0 11.922l-6 6.013-4.188-4.199a2.539 2.539 0 0 1 0-3.577l4.189-4.198-4.19-4.199a2.525 2.525 0 0 0-3.568 0l-4.163 4.173 4.163 4.173a2.539 2.539 0 0 1 0 3.576l-4.189 4.199-4.19-4.199a2.524 2.524 0 0 0-3.567 0l-4.19 4.199-.065-.065-.254-.256-.239-.238-.297-.299-.112-.112-.505-.506-.286-.286-.306-.307-.16-.161-.335-.336-.175-.174-.36-.362-.187-.187-.384-.385-1.02-1.022-.428-.429-.886-.888c-3.31-3.266-3.31-8.657 0-11.922l6-6.013zm16.136-7.827a2.539 2.539 0 0 1 0 3.576l-4.189 4.2-4.19-4.2a2.539 2.539 0 0 1 0-3.576L20.429 0l4.189 4.199z' fill='white' fill-rule='evenodd'/%3e%3c/svg%3e";

  var VARIANT_MAP$9 = {
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
  var TopNavBarContainer = /*#__PURE__*/styled__default["default"].div.withConfig({
    displayName: "TopNavBarstyles__TopNavBarContainer",
    componentId: "sc-gyde6t-0"
  })(templateObject_1$w || (templateObject_1$w = __makeTemplateObject(["\n  max-height: 64px;\n  background-color: ", ";\n"], ["\n  max-height: 64px;\n  background-color: ", ";\n"])), colors.white);
  var TopNavBarWrapper = /*#__PURE__*/styled__default["default"].div.withConfig({
    displayName: "TopNavBarstyles__TopNavBarWrapper",
    componentId: "sc-gyde6t-1"
  })(templateObject_2$q || (templateObject_2$q = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  max-height: 64px;\n  border-bottom-right-radius: 24px;\n  background-color: ", ";\n  border-bottom: 1px solid\n    ", "; ;\n"], ["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  max-height: 64px;\n  border-bottom-right-radius: 24px;\n  background-color: ", ";\n  border-bottom: 1px solid\n    ", "; ;\n"])), function (props) {
    return VARIANT_MAP$9["".concat(props.variantType)].topNavBackground;
  }, function (props) {
    return VARIANT_MAP$9["".concat(props.variantType)].topNavBorder;
  });
  var LogoContainer$3 = /*#__PURE__*/styled__default["default"].div.withConfig({
    displayName: "TopNavBarstyles__LogoContainer",
    componentId: "sc-gyde6t-2"
  })(templateObject_3$p || (templateObject_3$p = __makeTemplateObject(["\n  margin-left: 24px;\n  width: ", ";\n  height: ", ";\n  overflow: auto;\n  display: flex;\n  flex: 1 1 0%;\n"], ["\n  margin-left: 24px;\n  width: ", ";\n  height: ", ";\n  overflow: auto;\n  display: flex;\n  flex: 1 1 0%;\n"])), function (props) {
    return props.width ? props.width : '144px';
  }, function (props) {
    return props.height ? props.height : '28px';
  });
  var templateObject_1$w, templateObject_2$q, templateObject_3$p;

  var VARIANT_MAP$8 = {
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
  var AccountIcon = /*#__PURE__*/styled__default["default"](Icon$1).withConfig({
    displayName: "ProfileHeaderDropdownstyles__AccountIcon",
    componentId: "sc-1d685zm-0"
  })(templateObject_1$v || (templateObject_1$v = __makeTemplateObject(["\n  font-size: 12px;\n  margin-top: 5px;\n  color: ", ";\n  cursor: pointer;\n"], ["\n  font-size: 12px;\n  margin-top: 5px;\n  color: ", ";\n  cursor: pointer;\n"])), function (props) {
    return VARIANT_MAP$8["".concat(props.variantType)].accountIconMainColor;
  });
  var AccountButton = /*#__PURE__*/styled__default["default"].button.withConfig({
    displayName: "ProfileHeaderDropdownstyles__AccountButton",
    componentId: "sc-1d685zm-1"
  })(templateObject_2$p || (templateObject_2$p = __makeTemplateObject(["\n  border-color: ", ";\n  background-color: ", ";\n  border-image: none;\n  border-radius: 50px;\n  border-style: solid;\n  border-width: 2px;\n  display: flex;\n  height: 30px;\n  justify-content: center;\n  margin: 20px 24px 20px 0;\n  width: 30px;\n  :hover {\n    border-color: ", ";\n    ", " {\n      color: ", ";\n    }\n  }\n  :active {\n    color: ", ";\n    ", " {\n      color: ", ";\n  }\n"], ["\n  border-color: ", ";\n  background-color: ", ";\n  border-image: none;\n  border-radius: 50px;\n  border-style: solid;\n  border-width: 2px;\n  display: flex;\n  height: 30px;\n  justify-content: center;\n  margin: 20px 24px 20px 0;\n  width: 30px;\n  :hover {\n    border-color: ", ";\n    ", " {\n      color: ", ";\n    }\n  }\n  :active {\n    color: ", ";\n    ", " {\n      color: ", ";\n  }\n"])), function (props) {
    return VARIANT_MAP$8["".concat(props.variantType)].accountIconMainColor;
  }, function (props) {
    return VARIANT_MAP$8["".concat(props.variantType)].topNavBackground;
  }, function (props) {
    return VARIANT_MAP$8["".concat(props.variantType)].accountIconActiveColor;
  }, AccountIcon, function (props) {
    return VARIANT_MAP$8["".concat(props.variantType)].accountIconActiveColor;
  }, function (props) {
    return VARIANT_MAP$8["".concat(props.variantType)].accountIconActiveColor;
  }, AccountIcon, function (props) {
    return VARIANT_MAP$8["".concat(props.variantType)].accountIconActiveColor;
  });
  var DropdownWrapper = /*#__PURE__*/styled__default["default"].div.withConfig({
    displayName: "ProfileHeaderDropdownstyles__DropdownWrapper",
    componentId: "sc-1d685zm-2"
  })(templateObject_3$o || (templateObject_3$o = __makeTemplateObject(["\n  position: absolute;\n  z-index: 2;\n  background-color: #fff;\n  margin-left: -142px;\n  margin-top: -10px;\n  min-width: 170px;\n  max-height: 260px;\n  border-radius: 8px;\n  box-shadow: 0 1px 4px 0 rgba(47, 51, 54, 0.56);\n"], ["\n  position: absolute;\n  z-index: 2;\n  background-color: #fff;\n  margin-left: -142px;\n  margin-top: -10px;\n  min-width: 170px;\n  max-height: 260px;\n  border-radius: 8px;\n  box-shadow: 0 1px 4px 0 rgba(47, 51, 54, 0.56);\n"])));
  var DropdownMenu = /*#__PURE__*/styled__default["default"].ul.withConfig({
    displayName: "ProfileHeaderDropdownstyles__DropdownMenu",
    componentId: "sc-1d685zm-3"
  })(templateObject_4$h || (templateObject_4$h = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  gap: 22px;\n  padding: 10px 0 19px 0;\n"], ["\n  display: flex;\n  flex-direction: column;\n  gap: 22px;\n  padding: 10px 0 19px 0;\n"])));
  var DropdownListButton = /*#__PURE__*/styled__default["default"].button.withConfig({
    displayName: "ProfileHeaderDropdownstyles__DropdownListButton",
    componentId: "sc-1d685zm-4"
  })(templateObject_5$b || (templateObject_5$b = __makeTemplateObject(["\n  all: unset;\n  font-size: ", ";\n  font-weight: 500;\n  font-family: 'IBM Plex Sans';\n  color: ", ";\n  padding-bottom: ", ";\n  padding-left: 16px;\n  cursor: pointer;\n  :hover {\n    color: ", ";\n  }\n"], ["\n  all: unset;\n  font-size: ", ";\n  font-weight: 500;\n  font-family: 'IBM Plex Sans';\n  color: ", ";\n  padding-bottom: ", ";\n  padding-left: 16px;\n  cursor: pointer;\n  :hover {\n    color: ", ";\n  }\n"])), function (props) {
    return props.isUsername ? '16px' : '14px';
  }, function (props) {
    return props.isUsername ? '#858f93' : VARIANT_MAP$8["".concat(props.variantType)].textColor;
  }, function (props) {
    return props.isUsername ? '10px' : '0';
  }, function (props) {
    return props.isUsername ? null : VARIANT_MAP$8["".concat(props.variantType)].tabHoverColor;
  });
  var ListButtonWrapper = /*#__PURE__*/styled__default["default"].div.withConfig({
    displayName: "ProfileHeaderDropdownstyles__ListButtonWrapper",
    componentId: "sc-1d685zm-5"
  })(templateObject_6$a || (templateObject_6$a = __makeTemplateObject(["\n  box-shadow: ", ";\n"], ["\n  box-shadow: ", ";\n"])), function (props) {
    return props.isUsername ? "0 1px 1px 0 rgba(47, 51, 54, 0.1)" : null;
  });
  var templateObject_1$v, templateObject_2$p, templateObject_3$o, templateObject_4$h, templateObject_5$b, templateObject_6$a;

  var ProfileHeaderDropdown = function ProfileHeaderDropdown(_a) {
    var userName = _a.userName,
        items = _a.items,
        accountAriaLabel = _a.accountAriaLabel,
        variantType = _a.variantType;

    var _b = React.useState(false),
        dropdownOpen = _b[0],
        setDropdownOpen = _b[1];

    var _c = downshift.useSelect({
      items: items
    }),
        getToggleButtonProps = _c.getToggleButtonProps,
        getMenuProps = _c.getMenuProps,
        getItemProps = _c.getItemProps;

    var buttonProps = __assign({}, getToggleButtonProps());

    var menuProps = __assign({}, getMenuProps({}, {
      suppressRefError: true
    }));

    return jsxRuntime.jsx("div", {
      children: jsxRuntime.jsxs(OutsideClickHandler__default["default"], __assign({
        onOutsideClick: function () {
          return setDropdownOpen(false);
        }
      }, {
        children: [jsxRuntime.jsx(AccountButton, __assign({}, buttonProps, {
          name: "profile button",
          "aria-label": accountAriaLabel,
          onClick: function () {
            return setDropdownOpen(!dropdownOpen);
          },
          variantType: variantType
        }, {
          children: jsxRuntime.jsx(AccountIcon, {
            iconCode: "user",
            prefix: "fas",
            variantType: variantType
          }, void 0)
        }), void 0), dropdownOpen ? jsxRuntime.jsx(DropdownWrapper, {
          children: jsxRuntime.jsx(DropdownMenu, __assign({}, menuProps, {
            "aria-labelledby": buttonProps.id,
            role: "menu"
          }, {
            children: dropdownOpen && items.map(function (item, index) {
              var itemProps = getItemProps({
                item: item,
                index: index
              });

              if (item.showItem) {
                return jsxRuntime.jsx(ListButtonWrapper, __assign({
                  isUsername: item.name === userName
                }, {
                  children: jsxRuntime.jsx(DropdownListButton, __assign({}, itemProps, {
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
                }), "".concat(item).concat(index));
              } else {
                return null;
              }
            })
          }), void 0)
        }, void 0) : null]
      }), void 0)
    }, void 0);
  };

  var VARIANT_MAP$7 = {
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
  var DropdownIcon$1 = /*#__PURE__*/styled__default["default"](Icon$1).withConfig({
    displayName: "ProfileMobileDropdownstyles__DropdownIcon",
    componentId: "sc-11yjxw2-0"
  })(templateObject_1$u || (templateObject_1$u = __makeTemplateObject(["\n  margin-right: 12px;\n  font-size: 14px;\n  font-weight: bold;\n  color: ", ";\n"], ["\n  margin-right: 12px;\n  font-size: 14px;\n  font-weight: bold;\n  color: ", ";\n"])), function (props) {
    return VARIANT_MAP$7["".concat(props.variantType)].accountIconMainColor;
  });
  var MobileDropdownWrapper$1 = /*#__PURE__*/styled__default["default"].ul.withConfig({
    displayName: "ProfileMobileDropdownstyles__MobileDropdownWrapper",
    componentId: "sc-11yjxw2-1"
  })(templateObject_2$o || (templateObject_2$o = __makeTemplateObject(["\n  padding: 5px 16px 0 16px;\n  border-bottom: ", ";\n"], ["\n  padding: 5px 16px 0 16px;\n  border-bottom: ", ";\n"])), function (props) {
    return "1px solid ".concat(VARIANT_MAP$7["".concat(props.variantType)].mobileBorder);
  });
  var MobileListButton$1 = /*#__PURE__*/styled__default["default"].button.withConfig({
    displayName: "ProfileMobileDropdownstyles__MobileListButton",
    componentId: "sc-11yjxw2-2"
  })(templateObject_3$n || (templateObject_3$n = __makeTemplateObject(["\n  all: unset;\n  justify-content: space-between;\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  font-size: 14px;\n  font-weight: 500;\n  font-family: 'IBM Plex Sans';\n  color: ", ";\n\n  :active {\n    font-weight: ", ";\n    color: ", ";\n  }\n"], ["\n  all: unset;\n  justify-content: space-between;\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  font-size: 14px;\n  font-weight: 500;\n  font-family: 'IBM Plex Sans';\n  color: ", ";\n\n  :active {\n    font-weight: ", ";\n    color: ", ";\n  }\n"])), function (props) {
    return props.isUsername ? '#858f93' : VARIANT_MAP$7["".concat(props.variantType)].activeTextColor;
  }, function (props) {
    return props.isUsername ? null : VARIANT_MAP$7["".concat(props.variantType)].activeFontWeight;
  }, function (props) {
    return props.isUsername ? null : VARIANT_MAP$7["".concat(props.variantType)].activeTextColor;
  });
  var MobileListWrapper$1 = /*#__PURE__*/styled__default["default"].div.withConfig({
    displayName: "ProfileMobileDropdownstyles__MobileListWrapper",
    componentId: "sc-11yjxw2-3"
  })(templateObject_4$g || (templateObject_4$g = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  height: 40px;\n"], ["\n  display: flex;\n  flex-direction: column;\n  height: 40px;\n"])));
  var MobileTabWrapper$2 = /*#__PURE__*/styled__default["default"].div.withConfig({
    displayName: "ProfileMobileDropdownstyles__MobileTabWrapper",
    componentId: "sc-11yjxw2-4"
  })(templateObject_5$a || (templateObject_5$a = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  height: 56px;\n  border-bottom: ", ";\n"], ["\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  height: 56px;\n  border-bottom: ", ";\n"])), function (props) {
    return props.dropdownActive ? null : "1px solid ".concat(VARIANT_MAP$7["".concat(props.variantType)].mobileBorder);
  });
  var MobileTabButton$2 = /*#__PURE__*/styled__default["default"].button.withConfig({
    displayName: "ProfileMobileDropdownstyles__MobileTabButton",
    componentId: "sc-11yjxw2-5"
  })(templateObject_6$9 || (templateObject_6$9 = __makeTemplateObject(["\n  all: unset;\n  justify-content: space-between;\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  font-size: 14px;\n  font-weight: normal;\n  font-family: 'IBM Plex Sans';\n  color: ", ";\n  margin-top: 19px;\n"], ["\n  all: unset;\n  justify-content: space-between;\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  font-size: 14px;\n  font-weight: normal;\n  font-family: 'IBM Plex Sans';\n  color: ", ";\n  margin-top: 19px;\n"])), function (props) {
    return VARIANT_MAP$7["".concat(props.variantType)].textColor;
  });
  var templateObject_1$u, templateObject_2$o, templateObject_3$n, templateObject_4$g, templateObject_5$a, templateObject_6$9;

  var ProfileMobileDropdown = function ProfileMobileDropdown(_a) {
    var userName = _a.userName,
        items = _a.items,
        activeMobileDropdown = _a.activeMobileDropdown,
        setActiveMobileDropdown = _a.setActiveMobileDropdown,
        variantType = _a.variantType;

    var _b = downshift.useSelect({
      items: items
    }),
        getToggleButtonProps = _b.getToggleButtonProps,
        getMenuProps = _b.getMenuProps,
        getItemProps = _b.getItemProps;

    var buttonProps = __assign({}, getToggleButtonProps());

    var menuProps = __assign({}, getMenuProps({}, {
      suppressRefError: true
    }));

    var dropdownOpen = activeMobileDropdown === 'profile';

    var dropdownButtonClick = function dropdownButtonClick(name) {
      if (setActiveMobileDropdown) {
        if (dropdownOpen) {
          setActiveMobileDropdown(null);
        } else {
          setActiveMobileDropdown(name);
        }
      }
    };

    return jsxRuntime.jsxs("div", {
      children: [jsxRuntime.jsx(MobileTabWrapper$2, __assign({
        variantType: variantType,
        dropdownActive: dropdownOpen
      }, {
        children: jsxRuntime.jsxs(MobileTabButton$2, __assign({}, buttonProps, {
          onClick: function () {
            return dropdownButtonClick('profile');
          },
          variantType: variantType,
          isDropdown: dropdownOpen,
          isActive: dropdownOpen
        }, {
          children: ["PROFILE", jsxRuntime.jsx(DropdownIcon$1, {
            iconCode: dropdownOpen ? 'angle-up' : 'angle-down',
            prefix: "far",
            variantType: variantType
          }, void 0)]
        }), void 0)
      }), void 0), dropdownOpen ? jsxRuntime.jsx(MobileDropdownWrapper$1, __assign({
        variantType: variantType
      }, menuProps, {
        role: "menu"
      }, {
        children: dropdownOpen && items.map(function (item, index) {
          var itemProps = getItemProps({
            item: item,
            index: index
          });

          if (item.showItem) {
            return jsxRuntime.jsx(MobileListWrapper$1, {
              children: jsxRuntime.jsx(MobileListButton$1, __assign({}, itemProps, {
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
            }, "".concat(new Date().getTime()).concat(item).concat(index));
          } else {
            return null;
          }
        })
      }), void 0) : null]
    }, void 0);
  };

  var ProfileDropdown = function ProfileDropdown(_a) {
    var userName = _a.userName,
        isMobile = _a.isMobile,
        variantType = _a.variantType,
        accountAriaLabel = _a.accountAriaLabel,
        logout = _a.logout,
        activeMobileDropdown = _a.activeMobileDropdown,
        setActiveMobileDropdown = _a.setActiveMobileDropdown;
    var items = [{
      name: userName,
      showItem: true,
      onClick: null,
      disabled: true
    }, {
      name: 'Contact Us',
      showItem: true,
      onClick: function () {
        return window.open('https://lumafintech.com/contactus/', '_blank');
      },
      disabled: false
    }, {
      name: 'Log Out',
      showItem: true,
      onClick: logout,
      disabled: false
    }];

    if (isMobile) {
      return jsxRuntime.jsx(ProfileMobileDropdown, {
        userName: userName,
        items: items,
        variantType: variantType,
        activeMobileDropdown: activeMobileDropdown,
        setActiveMobileDropdown: setActiveMobileDropdown
      }, void 0);
    } else {
      return jsxRuntime.jsx(ProfileHeaderDropdown, {
        userName: userName,
        items: items,
        variantType: variantType,
        accountAriaLabel: accountAriaLabel ? accountAriaLabel : 'profile button'
      }, void 0);
    }
  };

  var TopNavBar = function TopNavBar(_a) {
    var issuerLogo = _a.issuerLogo,
        logoWidth = _a.logoWidth,
        logoHeight = _a.logoHeight,
        accountAriaLabel = _a.accountAriaLabel,
        variantType = _a.variantType,
        userName = _a.userName,
        isMobile = _a.isMobile,
        logout = _a.logout;
    return jsxRuntime.jsx(TopNavBarContainer, {
      children: jsxRuntime.jsxs(TopNavBarWrapper, __assign({
        variantType: variantType
      }, {
        children: [jsxRuntime.jsx(LogoContainer$3, __assign({
          width: logoWidth,
          height: logoHeight
        }, {
          children: jsxRuntime.jsx(Logo, {
            imageSource: issuerLogo ? issuerLogo : img$2
          }, void 0)
        }), void 0), jsxRuntime.jsx(ProfileDropdown, {
          userName: userName,
          isMobile: isMobile,
          variantType: variantType,
          accountAriaLabel: accountAriaLabel,
          logout: logout
        }, void 0)]
      }), void 0)
    }, void 0);
  };

  var MobileMenuWrapper = /*#__PURE__*/styled__default["default"].div.withConfig({
    displayName: "MobileMenustyles__MobileMenuWrapper",
    componentId: "sc-1fhi147-0"
  })(templateObject_1$t || (templateObject_1$t = __makeTemplateObject(["\n  min-height: ", ";\n  background-color: ", ";\n  top: 0;\n  left: 0;\n  width: 100vw;\n  z-index: 2;\n  border-bottom-right-radius: ", ";\n  box-shadow: 0 1px 1px 0 rgba(47, 51, 54, 0.1);\n  border: 1px solid\n    ", ";\n"], ["\n  min-height: ", ";\n  background-color: ", ";\n  top: 0;\n  left: 0;\n  width: 100vw;\n  z-index: 2;\n  border-bottom-right-radius: ", ";\n  box-shadow: 0 1px 1px 0 rgba(47, 51, 54, 0.1);\n  border: 1px solid\n    ", ";\n"])), function (props) {
    return props.isOpen ? '100vh' : '64px';
  }, function (props) {
    return VARIANT_MAP$6["".concat(props.variantType)].topNavBackground;
  }, function (props) {
    return props.isOpen ? '0px ' : '24px';
  }, function (props) {
    return VARIANT_MAP$6["".concat(props.variantType)].topNavBorder;
  });
  var MobileNavWrapper = /*#__PURE__*/styled__default["default"].nav.withConfig({
    displayName: "MobileMenustyles__MobileNavWrapper",
    componentId: "sc-1fhi147-1"
  })(templateObject_2$n || (templateObject_2$n = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 64px;\n  width: 100%;\n  border-bottom-right-radius: ", ";\n  background-color: ", ";\n"], ["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 64px;\n  width: 100%;\n  border-bottom-right-radius: ", ";\n  background-color: ", ";\n"])), function (props) {
    return props.isOpen ? '0px ' : '24px';
  }, function (props) {
    return VARIANT_MAP$6["".concat(props.variantType)].topNavBackground;
  });
  /*#__PURE__*/styled__default["default"].div.withConfig({
    displayName: "MobileMenustyles__NavTabWrapper",
    componentId: "sc-1fhi147-2"
  })(templateObject_3$m || (templateObject_3$m = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  height: 56px;\n  border-bottom: ", ";\n"], ["\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  height: 56px;\n  border-bottom: ", ";\n"])), function (props) {
    return props.isDropdown ? null : "1px solid ".concat(VARIANT_MAP$6["".concat(props.variantType)].mobileBorder);
  });
  /*#__PURE__*/styled__default["default"].button.withConfig({
    displayName: "MobileMenustyles__NavTabButton",
    componentId: "sc-1fhi147-3"
  })(templateObject_4$f || (templateObject_4$f = __makeTemplateObject(["\n  all: unset;\n  justify-content: space-between;\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  font-size: 14px;\n  font-weight: ", ";\n  font-family: 'IBM Plex Sans';\n  color: ", ";\n  margin-top: 19px;\n\n  :active {\n    font-weight: ", ";\n    color: ", ";\n  }\n"], ["\n  all: unset;\n  justify-content: space-between;\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  font-size: 14px;\n  font-weight: ", ";\n  font-family: 'IBM Plex Sans';\n  color: ", ";\n  margin-top: 19px;\n\n  :active {\n    font-weight: ", ";\n    color: ", ";\n  }\n"])), function (props) {
    return props.isActive ? 'bold' : 'normal';
  }, function (props) {
    return props.isDropdown ? VARIANT_MAP$6["".concat(props.variantType)].activeTextColor : VARIANT_MAP$6["".concat(props.variantType)].textColor;
  }, function (props) {
    return VARIANT_MAP$6["".concat(props.variantType)].activeFontWeight;
  }, function (props) {
    return VARIANT_MAP$6["".concat(props.variantType)].activeTextColor;
  });
  /*#__PURE__*/styled__default["default"](Icon$1).withConfig({
    displayName: "MobileMenustyles__DropdownIcon",
    componentId: "sc-1fhi147-4"
  })(templateObject_5$9 || (templateObject_5$9 = __makeTemplateObject(["\n  margin-right: 12px;\n  font-size: 14px;\n  font-weight: bold;\n  color: ", ";\n"], ["\n  margin-right: 12px;\n  font-size: 14px;\n  font-weight: bold;\n  color: ", ";\n"])), function (props) {
    return VARIANT_MAP$6["".concat(props.variantType)].accountIconMainColor;
  });
  var LogoContainer$2 = /*#__PURE__*/styled__default["default"].div.withConfig({
    displayName: "MobileMenustyles__LogoContainer",
    componentId: "sc-1fhi147-5"
  })(templateObject_6$8 || (templateObject_6$8 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  margin-left: 24px;\n  margin-right: 16px;\n  width: ", ";\n  height: ", ";\n"], ["\n  display: flex;\n  align-items: center;\n  margin-left: 24px;\n  margin-right: 16px;\n  width: ", ";\n  height: ", ";\n"])), function (props) {
    return props.width ? props.width : '144px';
  }, function (props) {
    return props.height ? props.height : '28px';
  });
  var MobileMenuIcon = /*#__PURE__*/styled__default["default"](Icon$1).withConfig({
    displayName: "MobileMenustyles__MobileMenuIcon",
    componentId: "sc-1fhi147-6"
  })(templateObject_7$8 || (templateObject_7$8 = __makeTemplateObject(["\n  font-size: 28px;\n  color: ", ";\n"], ["\n  font-size: 28px;\n  color: ", ";\n"])), function (props) {
    return VARIANT_MAP$6["".concat(props.variantType)].activeTextColor;
  });
  var MobileMenuButton = /*#__PURE__*/styled__default["default"].button.withConfig({
    displayName: "MobileMenustyles__MobileMenuButton",
    componentId: "sc-1fhi147-7"
  })(templateObject_8$5 || (templateObject_8$5 = __makeTemplateObject(["\n  all: unset;\n  padding: 20px 24px 20px 16px;\n"], ["\n  all: unset;\n  padding: 20px 24px 20px 16px;\n"])));
  var MobileTabConatiner = /*#__PURE__*/styled__default["default"].div.withConfig({
    displayName: "MobileMenustyles__MobileTabConatiner",
    componentId: "sc-1fhi147-8"
  })(templateObject_9$2 || (templateObject_9$2 = __makeTemplateObject(["\n  padding: 0px 16px;\n"], ["\n  padding: 0px 16px;\n"])));
  /*#__PURE__*/styled__default["default"].div.withConfig({
    displayName: "MobileMenustyles__ActiveButtonHighlight",
    componentId: "sc-1fhi147-9"
  })(templateObject_10$1 || (templateObject_10$1 = __makeTemplateObject(["\n  width: ", ";\n  height: ", ";\n  background-color: ", ";\n"], ["\n  width: ", ";\n  height: ", ";\n  background-color: ", ";\n"])), function (props) {
    return props.isActive ? '104px ' : null;
  }, function (props) {
    return props.isActive ? '3px ' : null;
  }, function (props) {
    return VARIANT_MAP$6["".concat(props.variantType)].activeHighlightColor;
  });
  /*#__PURE__*/styled__default["default"].ul.withConfig({
    displayName: "MobileMenustyles__MobileDropdownWrapper",
    componentId: "sc-1fhi147-10"
  })(templateObject_11$1 || (templateObject_11$1 = __makeTemplateObject(["\n  padding: 0 16px 0 16px;\n"], ["\n  padding: 0 16px 0 16px;\n"])));
  var PoweredByLogoContainer = /*#__PURE__*/styled__default["default"].div.withConfig({
    displayName: "MobileMenustyles__PoweredByLogoContainer",
    componentId: "sc-1fhi147-11"
  })(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n  width: 100vw;\n  min-height: 48px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #f2f4f5;\n"], ["\n  width: 100vw;\n  min-height: 48px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #f2f4f5;\n"])));
  var templateObject_1$t, templateObject_2$n, templateObject_3$m, templateObject_4$f, templateObject_5$9, templateObject_6$8, templateObject_7$8, templateObject_8$5, templateObject_9$2, templateObject_10$1, templateObject_11$1, templateObject_12;

  var MobileTabWrapper$1 = /*#__PURE__*/styled__default["default"].div.withConfig({
    displayName: "MobileTabButtonstyles__MobileTabWrapper",
    componentId: "sc-1vkyo2x-0"
  })(templateObject_1$s || (templateObject_1$s = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  height: 56px;\n  border-bottom: ", ";\n"], ["\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  height: 56px;\n  border-bottom: ", ";\n"])), function (props) {
    return props.isDropdown ? null : "1px solid ".concat(VARIANT_MAP$6["".concat(props.variantType)].mobileBorder);
  });
  var MobileButton = /*#__PURE__*/styled__default["default"].button.withConfig({
    displayName: "MobileTabButtonstyles__MobileButton",
    componentId: "sc-1vkyo2x-1"
  })(templateObject_2$m || (templateObject_2$m = __makeTemplateObject(["\n  all: unset;\n  justify-content: space-between;\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  font-size: 14px;\n  font-weight: ", ";\n  font-family: 'IBM Plex Sans';\n  color: ", ";\n  margin-top: 19px;\n"], ["\n  all: unset;\n  justify-content: space-between;\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  font-size: 14px;\n  font-weight: ", ";\n  font-family: 'IBM Plex Sans';\n  color: ", ";\n  margin-top: 19px;\n"])), function (props) {
    return props.isActive ? VARIANT_MAP$6["".concat(props.variantType)].activeFontWeight : 'normal';
  }, function (props) {
    return props.isActive ? VARIANT_MAP$6["".concat(props.variantType)].activeTextColor : VARIANT_MAP$6["".concat(props.variantType)].textColor;
  });
  var ActiveButtonHighlight$1 = /*#__PURE__*/styled__default["default"].div.withConfig({
    displayName: "MobileTabButtonstyles__ActiveButtonHighlight",
    componentId: "sc-1vkyo2x-2"
  })(templateObject_3$l || (templateObject_3$l = __makeTemplateObject(["\n  width: ", ";\n  height: ", ";\n  background-color: ", ";\n"], ["\n  width: ", ";\n  height: ", ";\n  background-color: ", ";\n"])), function (props) {
    return props.isActive ? '104px ' : null;
  }, function (props) {
    return props.isActive ? '3px ' : null;
  }, function (props) {
    return VARIANT_MAP$6["".concat(props.variantType)].activeHighlightColor;
  });
  var templateObject_1$s, templateObject_2$m, templateObject_3$l;

  var MobileTabButton$1 = function MobileTabButton(_a) {
    var variantType = _a.variantType,
        item = _a.item,
        setActiveTab = _a.setActiveTab,
        menuOpen = _a.menuOpen,
        setMenuOpen = _a.setMenuOpen,
        activeTab = _a.activeTab,
        handleNavigate = _a.handleNavigate,
        setParentActiveTab = _a.setParentActiveTab;
    return jsxRuntime.jsxs(MobileTabWrapper$1, __assign({
      variantType: variantType
    }, {
      children: [jsxRuntime.jsx(MobileButton, __assign({
        onClick: function () {
          setActiveTab(item.title);
          handleNavigate(item);
          setMenuOpen(!menuOpen);
          setParentActiveTab(undefined);
        },
        variantType: variantType,
        isActive: activeTab === item.title
      }, {
        children: item.title
      }), void 0), jsxRuntime.jsx(ActiveButtonHighlight$1, {
        isActive: item.title === activeTab,
        variantType: variantType
      }, void 0)]
    }), "".concat(new Date().getTime(), " ").concat(item.title));
  };

  var MobileTabWrapper = /*#__PURE__*/styled__default["default"].div.withConfig({
    displayName: "MobileDropdownstyles__MobileTabWrapper",
    componentId: "sc-2lnmj8-0"
  })(templateObject_1$r || (templateObject_1$r = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  height: 56px;\n  border-bottom: ", ";\n"], ["\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  height: 56px;\n  border-bottom: ", ";\n"])), function (props) {
    return props.dropdownActive ? null : "1px solid ".concat(VARIANT_MAP$6["".concat(props.variantType)].mobileBorder);
  });
  var MobileTabButton = /*#__PURE__*/styled__default["default"].button.withConfig({
    displayName: "MobileDropdownstyles__MobileTabButton",
    componentId: "sc-2lnmj8-1"
  })(templateObject_2$l || (templateObject_2$l = __makeTemplateObject(["\n  all: unset;\n  justify-content: space-between;\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  font-size: 14px;\n  font-weight: ", ";\n  font-family: 'IBM Plex Sans';\n  color: ", ";\n  margin-top: 19px;\n"], ["\n  all: unset;\n  justify-content: space-between;\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  font-size: 14px;\n  font-weight: ", ";\n  font-family: 'IBM Plex Sans';\n  color: ", ";\n  margin-top: 19px;\n"])), function (props) {
    return props.isActive ? VARIANT_MAP$6["".concat(props.variantType)].activeFontWeight : 'normal';
  }, function (props) {
    return props.isActive ? VARIANT_MAP$6["".concat(props.variantType)].activeTextColor : VARIANT_MAP$6["".concat(props.variantType)].textColor;
  });
  var DropdownIcon = /*#__PURE__*/styled__default["default"](Icon$1).withConfig({
    displayName: "MobileDropdownstyles__DropdownIcon",
    componentId: "sc-2lnmj8-2"
  })(templateObject_3$k || (templateObject_3$k = __makeTemplateObject(["\n  margin-right: 12px;\n  font-size: 14px;\n  font-weight: bold;\n  color: ", ";\n"], ["\n  margin-right: 12px;\n  font-size: 14px;\n  font-weight: bold;\n  color: ", ";\n"])), function (props) {
    return VARIANT_MAP$6["".concat(props.variantType)].accountIconMainColor;
  });
  var ActiveButtonHighlight = /*#__PURE__*/styled__default["default"].div.withConfig({
    displayName: "MobileDropdownstyles__ActiveButtonHighlight",
    componentId: "sc-2lnmj8-3"
  })(templateObject_4$e || (templateObject_4$e = __makeTemplateObject(["\n  width: ", ";\n  height: ", ";\n  background-color: ", ";\n"], ["\n  width: ", ";\n  height: ", ";\n  background-color: ", ";\n"])), function (props) {
    return props.isActive ? '104px ' : null;
  }, function (props) {
    return props.isActive ? '3px ' : null;
  }, function (props) {
    return VARIANT_MAP$6["".concat(props.variantType)].activeHighlightColor;
  });
  var MobileDropdownWrapper = /*#__PURE__*/styled__default["default"].ul.withConfig({
    displayName: "MobileDropdownstyles__MobileDropdownWrapper",
    componentId: "sc-2lnmj8-4"
  })(templateObject_5$8 || (templateObject_5$8 = __makeTemplateObject(["\n  padding: 5px 16px 0 16px;\n  border-bottom: ", ";\n"], ["\n  padding: 5px 16px 0 16px;\n  border-bottom: ", ";\n"])), function (props) {
    return "1px solid ".concat(VARIANT_MAP$6["".concat(props.variantType)].mobileBorder);
  });
  var MobileListButton = /*#__PURE__*/styled__default["default"].button.withConfig({
    displayName: "MobileDropdownstyles__MobileListButton",
    componentId: "sc-2lnmj8-5"
  })(templateObject_6$7 || (templateObject_6$7 = __makeTemplateObject(["\n  all: unset;\n  justify-content: space-between;\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  font-size: 14px;\n  font-weight: 500;\n  font-family: 'IBM Plex Sans';\n  color: ", ";\n\n  :active {\n    font-weight: ", ";\n    color: ", ";\n  }\n"], ["\n  all: unset;\n  justify-content: space-between;\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  font-size: 14px;\n  font-weight: 500;\n  font-family: 'IBM Plex Sans';\n  color: ", ";\n\n  :active {\n    font-weight: ", ";\n    color: ", ";\n  }\n"])), function (props) {
    return VARIANT_MAP$6["".concat(props.variantType)].activeTextColor;
  }, function (props) {
    return VARIANT_MAP$6["".concat(props.variantType)].activeFontWeight;
  }, function (props) {
    return VARIANT_MAP$6["".concat(props.variantType)].activeTextColor;
  });
  var MobileListWrapper = /*#__PURE__*/styled__default["default"].div.withConfig({
    displayName: "MobileDropdownstyles__MobileListWrapper",
    componentId: "sc-2lnmj8-6"
  })(templateObject_7$7 || (templateObject_7$7 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  height: 40px;\n"], ["\n  display: flex;\n  flex-direction: column;\n  height: 40px;\n"])));
  var templateObject_1$r, templateObject_2$l, templateObject_3$k, templateObject_4$e, templateObject_5$8, templateObject_6$7, templateObject_7$7;

  var MobileDropdownTab = function MobileDropdownTab(_a) {
    var tab = _a.tab,
        activeMobileDropdown = _a.activeMobileDropdown,
        setActiveMobileDropdown = _a.setActiveMobileDropdown,
        variantType = _a.variantType,
        parentActiveTab = _a.parentActiveTab,
        setParentActiveTab = _a.setParentActiveTab,
        activeTab = _a.activeTab,
        setActiveTab = _a.setActiveTab,
        menuOpen = _a.menuOpen,
        setMenuOpen = _a.setMenuOpen,
        handleNavigate = _a.handleNavigate;
    var title = tab.title,
        children = tab.children;

    var _b = downshift.useSelect({
      items: children
    }),
        getToggleButtonProps = _b.getToggleButtonProps,
        getMenuProps = _b.getMenuProps,
        getItemProps = _b.getItemProps;

    var buttonProps = __assign({}, getToggleButtonProps());

    var menuProps = __assign({}, getMenuProps({}, {
      suppressRefError: true
    }));

    var dropdownOpen = activeMobileDropdown === title;

    var dropdownButtonClick = function dropdownButtonClick(name) {
      if (dropdownOpen) {
        setActiveMobileDropdown(null);
      } else {
        setActiveMobileDropdown(name);
      }
    };

    var listItemClick = function listItemClick(item) {
      setActiveTab(item.title);
      handleNavigate(item);
      setMenuOpen(!menuOpen);
      setActiveMobileDropdown(null);
      setParentActiveTab(title);
    };

    return jsxRuntime.jsxs("div", {
      children: [jsxRuntime.jsxs(MobileTabWrapper, __assign({
        dropdownActive: dropdownOpen,
        variantType: variantType
      }, {
        children: [jsxRuntime.jsxs(MobileTabButton, __assign({}, buttonProps, {
          onClick: function () {
            return dropdownButtonClick(title);
          },
          variantType: variantType,
          isDropdown: dropdownOpen,
          isActive: title === parentActiveTab
        }, {
          children: [title, jsxRuntime.jsx(DropdownIcon, {
            iconCode: dropdownOpen ? 'angle-up' : 'angle-down',
            prefix: "far",
            variantType: variantType
          }, void 0)]
        }), void 0), jsxRuntime.jsx(ActiveButtonHighlight, {
          isActive: title === activeTab || parentActiveTab === title,
          variantType: variantType
        }, void 0)]
      }), void 0), dropdownOpen ? jsxRuntime.jsx(MobileDropdownWrapper, __assign({
        variantType: variantType
      }, menuProps, {
        role: "menu"
      }, {
        children: dropdownOpen && children.map(function (item, index) {
          var itemProps = getItemProps({
            item: item,
            index: index
          });
          return jsxRuntime.jsx(MobileListWrapper, {
            children: jsxRuntime.jsx(MobileListButton, __assign({}, itemProps, {
              onClick: function () {
                return listItemClick(item);
              },
              variantType: variantType,
              isDropdown: true,
              role: "menuitem"
            }, {
              children: item.title
            }), void 0)
          }, "".concat(new Date().getTime()).concat(item).concat(index));
        })
      }), void 0) : null]
    }, void 0);
  };

  var MobileMenu = function MobileMenu(_a) {
    var issuerLogo = _a.issuerLogo,
        logoWidth = _a.logoWidth,
        logoHeight = _a.logoHeight,
        menuAriaLabel = _a.menuAriaLabel,
        tabs = _a.tabs,
        handleNavigate = _a.handleNavigate,
        activeTab = _a.activeTab,
        setActiveTab = _a.setActiveTab,
        variantType = _a.variantType,
        parentActiveTab = _a.parentActiveTab,
        setParentActiveTab = _a.setParentActiveTab,
        userName = _a.userName,
        isMobile = _a.isMobile,
        logout = _a.logout;

    var _b = React.useState(false),
        menuOpen = _b[0],
        setMenuOpen = _b[1];

    var _c = React.useState(null),
        activeMobileDropdown = _c[0],
        setActiveMobileDropdown = _c[1];

    return jsxRuntime.jsxs(MobileMenuWrapper, __assign({
      variantType: variantType,
      isOpen: menuOpen
    }, {
      children: [jsxRuntime.jsxs(MobileNavWrapper, __assign({
        variantType: variantType,
        isOpen: menuOpen
      }, {
        children: [jsxRuntime.jsx(MobileMenuButton, __assign({
          name: "mobile menu",
          "aria-label": menuAriaLabel,
          onClick: function () {
            return setMenuOpen(!menuOpen);
          }
        }, {
          children: jsxRuntime.jsx(MobileMenuIcon, {
            iconCode: menuOpen ? 'times' : 'bars',
            prefix: "far",
            variantType: variantType
          }, void 0)
        }), void 0), jsxRuntime.jsx(LogoContainer$2, __assign({
          width: logoWidth,
          height: logoHeight
        }, {
          children: jsxRuntime.jsx(Logo, {
            imageSource: issuerLogo ? issuerLogo : img$2
          }, void 0)
        }), void 0)]
      }), void 0), menuOpen && variantType === 'secondary' ? jsxRuntime.jsx(PoweredByLogoContainer, {
        children: jsxRuntime.jsx(PoweredByLumaLogo, {
          isMobile: true
        }, void 0)
      }, void 0) : null, jsxRuntime.jsxs(MobileTabConatiner, {
        children: [menuOpen && tabs.map(function (tab) {
          if (isTabDropdown(tab)) {
            return jsxRuntime.jsx(MobileDropdownTab, {
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
            }, "".concat(new Date().getTime(), " ").concat(tab.title));
          } else {
            return jsxRuntime.jsx(MobileTabButton$1, {
              item: tab,
              variantType: variantType,
              activeTab: activeTab,
              setActiveTab: setActiveTab,
              menuOpen: menuOpen,
              setMenuOpen: setMenuOpen,
              handleNavigate: handleNavigate,
              setParentActiveTab: setParentActiveTab
            }, "".concat(new Date().getTime(), " ").concat(tab.title));
          }
        }), menuOpen ? jsxRuntime.jsx(ProfileDropdown, {
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

  var VARIANT_MAP$6 = {
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
  var GlobalNavContainer = /*#__PURE__*/styled__default["default"].nav.withConfig({
    displayName: "GlobalNavstyles__GlobalNavContainer",
    componentId: "sc-7wrpws-0"
  })(templateObject_1$q || (templateObject_1$q = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  margin-bottom: 1px;\n"], ["\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  margin-bottom: 1px;\n"])));
  var templateObject_1$q;

  var GlobalNav = function GlobalNav(_a) {
    var userName = _a.userName,
        logout = _a.logout,
        tabs = _a.tabs,
        issuerLogo = _a.issuerLogo,
        logoWidth = _a.logoWidth,
        logoHeight = _a.logoHeight,
        accountAriaLabel = _a.accountAriaLabel,
        menuAriaLabel = _a.menuAriaLabel,
        handleNavigate = _a.handleNavigate;

    var _b = React.useState(window.innerWidth < 916),
        isMobile = _b[0],
        setIsMobile = _b[1];

    var _c = React.useState(''),
        activeTab = _c[0],
        setActiveTab = _c[1];

    var _d = React.useState(undefined),
        parentActiveTab = _d[0],
        setParentActiveTab = _d[1];

    var variantType = issuerLogo ? 'secondary' : 'primary';
    React.useEffect(function () {
      var handleResizeWindow = function handleResizeWindow() {
        return setIsMobile(window.innerWidth < 916);
      };

      window.addEventListener('resize', handleResizeWindow);
      return function () {
        window.removeEventListener('resize', handleResizeWindow);
      };
    }, []);
    React.useEffect(function () {
      var getInitialTabName = function getInitialTabName() {
        var pathname = window.location.pathname;

        for (var i = 0; i < tabs.length; i++) {
          var currentObj = tabs[i];

          if (currentObj.route && pathname.startsWith(currentObj.route)) {
            return currentObj.title;
          }

          if (currentObj.title === 'TRADE' && pathname.split('/').includes('secondaries')) {
            return currentObj.title;
          }

          if (currentObj.children) {
            for (var i_1 = 0; i_1 < currentObj.children.length; i_1++) {
              var currOptionObj = currentObj.children[i_1];

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

      var pathname = getInitialTabName();
      setActiveTab(pathname);
    }, [tabs]);

    if (isMobile) {
      return jsxRuntime.jsx(GlobalNavContainer, __assign({
        title: "Mobile Navigation"
      }, {
        children: jsxRuntime.jsx(MobileMenu, {
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
      return jsxRuntime.jsxs(GlobalNavContainer, __assign({
        title: "Main Navigation"
      }, {
        children: [jsxRuntime.jsx(TopNavBar, {
          variantType: variantType,
          issuerLogo: issuerLogo,
          logoWidth: logoWidth,
          logoHeight: logoHeight,
          accountAriaLabel: accountAriaLabel,
          userName: userName,
          isMobile: isMobile,
          logout: logout
        }, void 0), jsxRuntime.jsx(NavTabBar, {
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

  var NAV_TABS = [{
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
  var ADMIN_TABS = [{
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

  var loadDefaultNavTabs = function loadDefaultNavTabs(frontEndLibrary) {
    return [buildHomeTab(frontEndLibrary, [])];
  };
  var buildHomeTab = function buildHomeTab(frontEndLibrary, userPermissions) {
    return __assign({
      title: 'HOME',
      icon: 'tachometer-alt'
    }, determineNavRouteOrUrl(frontEndLibrary, exports.ROUTE_KEYS.HOME, userPermissions));
  };
  var buildNavTabs = function buildNavTabs(userPermissions, userTrainingDataProductTypes, pricingToolType, frontEndLibrary, isProduction, company) {
    var allNavRoutes = [buildHomeTab(frontEndLibrary, userPermissions), __assign({
      title: 'LEARN',
      icon: 'graduation-cap',
      permissions: [WidgetPermissions.AccessLearningCenter]
    }, determineNavRouteOrUrl(frontEndLibrary, exports.ROUTE_KEYS.LEARN, userPermissions)), buildCreateNavTab(pricingToolType, frontEndLibrary, userPermissions), {
      title: 'MARKETPLACE',
      icon: 'store',
      children: __spreadArray(__spreadArray([], generateDynamicMarketplaceRoutes(userTrainingDataProductTypes, frontEndLibrary, userPermissions), true), [__assign({
        title: 'Orders',
        permissions: [WidgetPermissions.MenuMarketplaceAnnuity]
      }, determineNavRouteOrUrl(frontEndLibrary, exports.ROUTE_KEYS.ORDERS, userPermissions)), __assign({
        title: 'Account Upload',
        permissions: [WidgetPermissions.MenuPmConfigurationsKycRulesUpload]
      }, determineNavRouteOrUrl(frontEndLibrary, exports.ROUTE_KEYS.ACCOUNT_UPLOAD, userPermissions)), __assign({
        title: 'Wholesaler Mapping',
        permissions: [WidgetPermissions.MenuPmWholesalerMapping]
      }, determineNavRouteOrUrl(frontEndLibrary, exports.ROUTE_KEYS.WHOLESALER_MAPPING, userPermissions))], false)
    }, {
      title: 'LIFECYCLE',
      icon: 'recycle',
      children: [__assign({
        title: 'Lifecycle Manager',
        icon: 'recycle',
        permissions: [WidgetPermissions.MenuLifecycleManager]
      }, determineNavRouteOrUrl(exports.FrontEndLibraries.ANGULAR, exports.ROUTE_KEYS.LIFECYCLE, userPermissions)), __assign({
        title: 'Lifecycle 2.0 Beta',
        permissions: [WidgetPermissions.MenuLifecycleManager2Beta]
      }, determineNavRouteOrUrl(exports.FrontEndLibraries.REACT, exports.ROUTE_KEYS.LIFECYCLE, userPermissions)), __assign({
        title: 'Event Notifications',
        permissions: [WidgetPermissions.MenuPmWholesalerMapping]
      }, determineNavRouteOrUrl(frontEndLibrary, exports.ROUTE_KEYS.EVENT_NOTIFICATIONS, userPermissions))]
    }, __assign({
      title: exports.ROUTE_KEYS.TRADE,
      permissions: [WidgetPermissions.MenuSecondaries]
    }, determineNavRouteOrUrl(frontEndLibrary, exports.ROUTE_KEYS.TRADE, userPermissions)), {
      title: 'ADMIN',
      icon: 'user-shield',
      permissions: [WidgetPermissions.MenuAdmin],
      children: [__assign({
        title: exports.ROUTE_KEYS.COMPANY_ADMIN,
        permissions: [WidgetPermissions.MenuAdmin]
      }, determineNavRouteOrUrl(frontEndLibrary, exports.ROUTE_KEYS.COMPANY_ADMIN, userPermissions)), __assign({
        title: 'Company Relationship Mapping',
        permissions: [WidgetPermissions.MenuAdminCompanyRelationshipMapping]
      }, determineNavRouteOrUrl(frontEndLibrary, exports.ROUTE_KEYS.COMPANY_RELATIONSHIP, userPermissions)), __assign({
        title: 'Company Configuration'
      }, determineNavRouteOrUrl(frontEndLibrary, exports.ROUTE_KEYS.COMPANY_CONFIG, userPermissions)), {
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
      }, __assign({
        title: 'Historical Emails',
        permissions: [WidgetPermissions.MenuAdminHistoricalEmails]
      }, determineNavRouteOrUrl(frontEndLibrary, exports.ROUTE_KEYS.HISTORICAL_EMAILS, userPermissions)), __assign({
        title: 'File Upload',
        permissions: [WidgetPermissions.MenuAdminFileUpoad]
      }, determineNavRouteOrUrl(frontEndLibrary, exports.ROUTE_KEYS.FILE_UPLOAD, userPermissions)), __assign({
        title: 'Audit Records',
        permissions: [WidgetPermissions.MenuAdminHistoricalEmails]
      }, determineNavRouteOrUrl(frontEndLibrary, exports.ROUTE_KEYS.AUDIT_RECORDS, userPermissions)), __assign({
        title: 'Wholesaler Definition',
        permissions: [WidgetPermissions.MenuAdminWholesalerDefinition]
      }, determineNavRouteOrUrl(frontEndLibrary, exports.ROUTE_KEYS.WHOLESALER_DEFINITION, userPermissions)), __assign({
        title: 'Wholesaler Mapping',
        permissions: [WidgetPermissions.MenuAdminWholesalerMapping]
      }, determineNavRouteOrUrl(frontEndLibrary, exports.ROUTE_KEYS.WHOLESALER_MAPPING, userPermissions)), __assign({
        title: 'Product Upload',
        permissions: [WidgetPermissions.ProductCenter]
      }, determineNavRouteOrUrl(frontEndLibrary, exports.ROUTE_KEYS.PRODUCT_UPLOAD, userPermissions)), __assign({
        title: 'Disclosure Document Upload',
        permissions: [WidgetPermissions.MarketplaceAdminFields]
      }, determineNavRouteOrUrl(frontEndLibrary, exports.ROUTE_KEYS.DISCLOSURE_DOC_UPLOAD, userPermissions)), __assign({
        title: 'Market Data Maintainence',
        permissions: [WidgetPermissions.MenuAdmin]
      }, determineNavRouteOrUrl(frontEndLibrary, exports.ROUTE_KEYS.MARKET_DATA_MAINTENANCE, userPermissions)), __assign({
        title: 'Issuer Confirmation'
      }, determineNavRouteOrUrl(frontEndLibrary, exports.ROUTE_KEYS.ISSUER_CONFIRMATION, userPermissions)), __assign({
        title: 'Email Configuration',
        permissions: [WidgetPermissions.MenuAdmin]
      }, determineNavRouteOrUrl(frontEndLibrary, exports.ROUTE_KEYS.EMAIL_CONFIG, userPermissions)), __assign({
        title: 'Find RFQ',
        permissions: [WidgetPermissions.MenuAdmin]
      }, determineNavRouteOrUrl(frontEndLibrary, exports.ROUTE_KEYS.FIND_RFQ, userPermissions)), {
        title: 'Add CH Request to PDW',
        permissions: [WidgetPermissions.MenuAdmin],
        url: getColdFusionLink('adminAddProduct', null)
      }, __assign({
        title: 'Product Maintenance',
        permissions: [WidgetPermissions.ProductMaintenance]
      }, determineNavRouteOrUrl(frontEndLibrary, exports.ROUTE_KEYS.PRODUCT_MAINTENANCE, userPermissions)), __assign({
        title: 'Notifications',
        permissions: [WidgetPermissions.MenuNotificationCenter]
      }, determineNavRouteOrUrl(frontEndLibrary, exports.ROUTE_KEYS.NOTIFICATIONS, userPermissions)), __assign({
        title: 'Event Notification',
        permissions: [WidgetPermissions.MenuAdmin]
      }, determineNavRouteOrUrl(frontEndLibrary, exports.ROUTE_KEYS.EVENT_NOTIFICATIONS_ADMIN, userPermissions))]
    }];
    return filterNavTabs(allNavRoutes, userPermissions, isProduction, pricingToolType, company);
  };

  var generateDynamicMarketplaceRoutes = function generateDynamicMarketplaceRoutes(productTypes, frontEndLibrary, userPermissions) {
    var spProductRoutes = __assign({
      title: 'Structured Products'
    }, determineNavRouteOrUrl(frontEndLibrary, exports.ROUTE_KEYS.STRUCTURED_PRODUCTS, userPermissions));

    var annuityProductLink = __assign({
      title: 'Annuities',
      permissions: [WidgetPermissions.MenuMarketplaceAnnuity]
    }, determineNavRouteOrUrl(frontEndLibrary, exports.ROUTE_KEYS.ANNUITIES, userPermissions));

    var spProductOrders = __assign({
      title: 'Order Management'
    }, determineNavRouteOrUrl(frontEndLibrary, exports.ROUTE_KEYS.ORDER_MANAGEMENT, userPermissions));

    var marketplaceSettingsLink = __assign({
      title: 'Marketplace Settings',
      permissions: [WidgetPermissions.MenuMarketplaceSettings]
    }, determineNavRouteOrUrl(frontEndLibrary, exports.ROUTE_KEYS.MARKETPLACE_SETTINGS, userPermissions));

    if (isAnnuityOnly(productTypes)) {
      return [annuityProductLink];
    } else if (isStructuredProductsOnly(productTypes)) {
      return [spProductRoutes, spProductOrders, marketplaceSettingsLink];
    } else {
      return [spProductRoutes, annuityProductLink, spProductOrders, marketplaceSettingsLink];
    }
  };

  var buildCreateNavTab = function buildCreateNavTab(pricingToolType, frontEndLibrary, userPermissions) {
    var baseMenuLink = {
      title: 'CREATE',
      icon: 'hammer'
    };

    if (pricingToolType === 'CALENDAR_DEAL_PRICING_TOOL') {
      return __assign(__assign({}, baseMenuLink), determineNavRouteOrUrl(frontEndLibrary, exports.ROUTE_KEYS.CREATE_CALENDAR, userPermissions));
    } else if (pricingToolType === 'LUMA_LITE_PRICING_TOOL') {
      return __assign(__assign({}, baseMenuLink), determineNavRouteOrUrl(frontEndLibrary, exports.ROUTE_KEYS.CREATE_FORM, userPermissions));
    } else if (pricingToolType === 'CREATION_HUB') {
      return __assign(__assign({}, baseMenuLink), determineNavRouteOrUrl(frontEndLibrary, exports.ROUTE_KEYS.CREATE, userPermissions));
    } else {
      // ColdFusion Creation Hub
      return __assign(__assign({}, baseMenuLink), {
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

  var buildAdminOptions = function buildAdminOptions(userPermissions, frontEndLibrary, isProduction, pricingToolType) {
    var adminOptions = [{
      title: 'Company Maintenance',
      permissions: [WidgetPermissions.MenuAdmin],
      children: [__assign({
        title: 'Company Administration',
        permissions: [WidgetPermissions.MenuAdmin]
      }, determineNavRouteOrUrl(frontEndLibrary, exports.ROUTE_KEYS.COMPANY_ADMIN, userPermissions)), __assign({
        title: 'Company Configuration'
      }, determineNavRouteOrUrl(frontEndLibrary, exports.ROUTE_KEYS.COMPANY_CONFIG, userPermissions)), __assign({
        title: 'Company Relationship Mapping',
        permissions: [WidgetPermissions.MenuAdminCompanyRelationshipMapping]
      }, determineNavRouteOrUrl(frontEndLibrary, exports.ROUTE_KEYS.COMPANY_RELATIONSHIP, userPermissions))]
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
      children: [__assign({
        title: 'Product Maintenance',
        permissions: [WidgetPermissions.ProductMaintenance]
      }, determineNavRouteOrUrl(frontEndLibrary, exports.ROUTE_KEYS.PRODUCT_MAINTENANCE, userPermissions)), __assign({
        title: 'Issuer Confirmation'
      }, determineNavRouteOrUrl(frontEndLibrary, exports.ROUTE_KEYS.ISSUER_CONFIRMATION, userPermissions)), __assign({
        title: 'Market Data Maintainence',
        permissions: [WidgetPermissions.MenuAdmin]
      }, determineNavRouteOrUrl(frontEndLibrary, exports.ROUTE_KEYS.MARKET_DATA_MAINTENANCE, userPermissions)), __assign({
        title: 'File Upload',
        permissions: [WidgetPermissions.MenuAdminFileUpoad]
      }, determineNavRouteOrUrl(frontEndLibrary, exports.ROUTE_KEYS.FILE_UPLOAD, userPermissions)), {
        title: 'Add CH Request to PDW',
        permissions: [WidgetPermissions.MenuAdmin],
        url: getColdFusionLink('adminAddProduct', null)
      }, __assign({
        title: 'Find RFQ',
        permissions: [WidgetPermissions.MenuAdmin]
      }, determineNavRouteOrUrl(frontEndLibrary, exports.ROUTE_KEYS.FIND_RFQ, userPermissions))]
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
      }, __assign({
        title: 'Wholesaler Definition',
        permissions: [WidgetPermissions.MenuAdminWholesalerDefinition]
      }, determineNavRouteOrUrl(frontEndLibrary, exports.ROUTE_KEYS.WHOLESALER_DEFINITION, userPermissions)), __assign({
        title: 'Wholesaler Mapping',
        permissions: [WidgetPermissions.MenuAdminWholesalerMapping]
      }, determineNavRouteOrUrl(frontEndLibrary, exports.ROUTE_KEYS.WHOLESALER_MAPPING, userPermissions)), __assign({
        title: 'Disclosure Document Upload',
        permissions: [WidgetPermissions.MarketplaceAdminFields]
      }, determineNavRouteOrUrl(frontEndLibrary, exports.ROUTE_KEYS.DISCLOSURE_DOC_UPLOAD, userPermissions)), __assign({
        title: 'Email Configuration',
        permissions: [WidgetPermissions.MenuAdmin]
      }, determineNavRouteOrUrl(frontEndLibrary, exports.ROUTE_KEYS.EMAIL_CONFIG, userPermissions)), __assign({
        title: 'Notifications',
        permissions: [WidgetPermissions.MenuNotificationCenter]
      }, determineNavRouteOrUrl(frontEndLibrary, exports.ROUTE_KEYS.NOTIFICATIONS, userPermissions))]
    }];
    return filterNavTabs(adminOptions, userPermissions, isProduction, pricingToolType);
  };

  var Portal = function Portal(_a) {
    var _b = _a.id,
        id = _b === void 0 ? 'body' : _b,
        children = _a.children;
    return /*#__PURE__*/reactDom.createPortal(children, document.getElementById(id) || document.body);
  };

  var ModalBackground = /*#__PURE__*/styled__default["default"].div.withConfig({
    displayName: "Modalstyles__ModalBackground",
    componentId: "sc-19w83vb-0"
  })(templateObject_3$j || (templateObject_3$j = __makeTemplateObject(["\n  background-color: ", ";\n  height: 100%;\n  font-family: 'IBM Plex Sans';\n  left: ", ";\n  overflow: auto;\n  position: ", ";\n  top: ", ";\n  width: 100%;\n  ", ";\n"], ["\n  background-color: ", ";\n  height: 100%;\n  font-family: 'IBM Plex Sans';\n  left: ", ";\n  overflow: auto;\n  position: ", ";\n  top: ", ";\n  width: 100%;\n  ", ";\n"])), function (props) {
    return props.background ? props.background : 'rgba(47, 54, 65, 0.9)';
  }, function (props) {
    return props.left ? props.left : '0';
  }, function (props) {
    return props.position ? props.position : 'fixed';
  }, function (props) {
    return props.top ? props.top : '0';
  }, function (props) {
    return props.isOpen ? styled.css(templateObject_1$p || (templateObject_1$p = __makeTemplateObject(["\n          display: flex;\n        "], ["\n          display: flex;\n        "]))) : styled.css(templateObject_2$k || (templateObject_2$k = __makeTemplateObject(["\n          display: none;\n        "], ["\n          display: none;\n        "])));
  });
  var ModalContainer = /*#__PURE__*/styled__default["default"].div.withConfig({
    displayName: "Modalstyles__ModalContainer",
    componentId: "sc-19w83vb-1"
  })(templateObject_4$d || (templateObject_4$d = __makeTemplateObject(["\n  align-items: center;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin: auto;\n"], ["\n  align-items: center;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin: auto;\n"])));
  var templateObject_1$p, templateObject_2$k, templateObject_3$j, templateObject_4$d;

  var Modal = function Modal(_a) {
    var id = _a.id,
        children = _a.children,
        _b = _a.isOpen,
        isOpen = _b === void 0 ? false : _b,
        background = _a.background,
        top = _a.top,
        left = _a.left,
        position = _a.position;
    return jsxRuntime.jsx(Portal, __assign({
      id: id
    }, {
      children: jsxRuntime.jsx(ModalBackground, __assign({
        isOpen: isOpen,
        background: background,
        top: top,
        left: left,
        position: position
      }, {
        children: jsxRuntime.jsx(ModalContainer, {
          children: children
        }, void 0)
      }), void 0)
    }), void 0);
  };

  var screenSizes = {
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
  var breakpoints = {
    largeDesktop: "(min-width: ".concat(screenSizes.largeDesktop.min, "px)"),
    desktop: "(max-width: ".concat(screenSizes.desktop.max, "px) and (min-width: ").concat(screenSizes.desktop.min, "px)"),
    tablet: "(max-width: ".concat(screenSizes.tablet.max, "px) and (min-width: ").concat(screenSizes.tablet.min, "px)"),
    phablet: "(max-width: ".concat(screenSizes.phablet.max, "px) and (min-width: ").concat(screenSizes.phablet.min, "px)"),
    mobile: "(max-width: ".concat(screenSizes.mobile.max, "px)")
  };

  var LumaColor = {
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

  var slideInRight = /*#__PURE__*/styled.keyframes(templateObject_1$o || (templateObject_1$o = __makeTemplateObject(["\n  0% {\n    transform: translate3d(105%, 0, 0);\n  }\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n"], ["\n  0% {\n    transform: translate3d(105%, 0, 0);\n  }\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n"])));
  var slideOutRight = /*#__PURE__*/styled.keyframes(templateObject_2$j || (templateObject_2$j = __makeTemplateObject(["\n  0% {\n    transform: translateZ(0);\n    -webkit-transform: translateZ(0);\n  }\n  to {\n    transform: translate3d(105%, 0, 0);\n    -webkit-transform: translate3d(105%, 0, 0);\n  }\n"], ["\n  0% {\n    transform: translateZ(0);\n    -webkit-transform: translateZ(0);\n  }\n  to {\n    transform: translate3d(105%, 0, 0);\n    -webkit-transform: translate3d(105%, 0, 0);\n  }\n"])));
  var DrawerBackground = /*#__PURE__*/styled__default["default"].div.withConfig({
    displayName: "Drawerstyles__DrawerBackground",
    componentId: "sc-704h1g-0"
  })(templateObject_3$i || (templateObject_3$i = __makeTemplateObject(["\n  background-color: ", ";\n  height: 100%;\n  font-family: 'IBM Plex Sans';\n  left: 0;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  flex-direction: row-reverse;\n  display: ", ";\n"], ["\n  background-color: ", ";\n  height: 100%;\n  font-family: 'IBM Plex Sans';\n  left: 0;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  flex-direction: row-reverse;\n  display: ", ";\n"])), function (props) {
    return props.hasOverlay ? "".concat(LumaColor.DRAWER_BACKGROUND) : 'transparent';
  }, function (props) {
    return props.isOpen ? 'flex' : 'none';
  });
  var DrawerContainer = /*#__PURE__*/styled__default["default"].div.withConfig({
    displayName: "Drawerstyles__DrawerContainer",
    componentId: "sc-704h1g-1"
  })(templateObject_6$6 || (templateObject_6$6 = __makeTemplateObject(["\n  animation: ", "\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  background-color: ", ";\n  height: 100%;\n  width: 40rem;\n  position: relative;\n  box-shadow: 0 0 0.625rem 0 ", ";\n"], ["\n  animation: ", "\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  background-color: ", ";\n  height: 100%;\n  width: 40rem;\n  position: relative;\n  box-shadow: 0 0 0.625rem 0 ", ";\n"])), function (props) {
    return props.onToggle ? styled.css(templateObject_4$c || (templateObject_4$c = __makeTemplateObject(["\n          ", " 0.5s cubic-bezier(0.76, 0.08, 0.71, 0.95);\n          animation-fill-mode: both;\n        "], ["\n          ", " 0.5s cubic-bezier(0.76, 0.08, 0.71, 0.95);\n          animation-fill-mode: both;\n        "])), slideInRight) : styled.css(templateObject_5$7 || (templateObject_5$7 = __makeTemplateObject(["\n          ", " 0.25s cubic-bezier(0.76, 0.08, 0.71, 0.95);\n          animation-fill-mode: both;\n        "], ["\n          ", " 0.25s cubic-bezier(0.76, 0.08, 0.71, 0.95);\n          animation-fill-mode: both;\n        "])), slideOutRight);
  }, LumaColor.NEUTRAL_00_WHITE, LumaColor.DRAWER_BACKGROUND);
  var CloseIconWrapper = /*#__PURE__*/styled__default["default"].div.withConfig({
    displayName: "Drawerstyles__CloseIconWrapper",
    componentId: "sc-704h1g-2"
  })(templateObject_7$6 || (templateObject_7$6 = __makeTemplateObject(["\n  position: fixed;\n  top: 0;\n  right: 0;\n  padding: 1rem 1.5rem 0 0;\n  z-index: 1;\n  @media ", " {\n    margin-top: 3.875rem;\n  }\n  :hover {\n    cursor: pointer;\n  }\n"], ["\n  position: fixed;\n  top: 0;\n  right: 0;\n  padding: 1rem 1.5rem 0 0;\n  z-index: 1;\n  @media ", " {\n    margin-top: 3.875rem;\n  }\n  :hover {\n    cursor: pointer;\n  }\n"])), breakpoints.tablet);
  var CloseIcon = /*#__PURE__*/styled__default["default"](Icon$1).withConfig({
    displayName: "Drawerstyles__CloseIcon",
    componentId: "sc-704h1g-3"
  })(templateObject_8$4 || (templateObject_8$4 = __makeTemplateObject(["\n  height: 1.875rem;\n  color: ", ";\n"], ["\n  height: 1.875rem;\n  color: ", ";\n"])), LumaColor.NEUTRAL_80);
  var templateObject_1$o, templateObject_2$j, templateObject_3$i, templateObject_4$c, templateObject_5$7, templateObject_6$6, templateObject_7$6, templateObject_8$4;

  var Drawer = function Drawer(_a) {
    var id = _a.id,
        children = _a.children,
        _b = _a.isOpen,
        isOpen = _b === void 0 ? false : _b,
        _c = _a.closeDrawer,
        closeDrawer = _c === void 0 ? function () {
      /* do nothing */
    } : _c,
        _d = _a.hasOverlay,
        hasOverlay = _d === void 0 ? true : _d;

    var _e = React.useState(false),
        onToggle = _e[0],
        setOnToggle = _e[1];

    var reqElement = React.useRef(null);

    var escFunction = function escFunction(event) {
      event.key === 'Escape' && animateCloseDrawer();
    };

    var clickBackground = function clickBackground(event) {
      var target = event.target;

      if (target.children[0] === reqElement.current) {
        animateCloseDrawer();
      }
    };

    React.useEffect(function () {
      setOnToggle(isOpen);
    }, [isOpen]);
    React.useEffect(function () {
      document.addEventListener('keydown', escFunction, false);
      return function () {
        document.removeEventListener('keydown', escFunction, false);
      };
    });

    var animateCloseDrawer = function animateCloseDrawer() {
      /* this function allows for the animation to complete before the drawer closes */
      setOnToggle(false);
      setTimeout(function () {
        return closeDrawer();
      }, 300);
    };

    return jsxRuntime.jsx(Portal, __assign({
      id: id
    }, {
      children: jsxRuntime.jsx(DrawerBackground, __assign({
        hasOverlay: hasOverlay,
        isOpen: isOpen,
        onClick: function (event) {
          return clickBackground(event);
        }
      }, {
        children: jsxRuntime.jsxs(DrawerContainer, __assign({
          onToggle: onToggle,
          ref: reqElement
        }, {
          children: [jsxRuntime.jsx(CloseIconWrapper, __assign({
            onClick: animateCloseDrawer
          }, {
            children: jsxRuntime.jsx(CloseIcon, {
              iconCode: "close"
            }, void 0)
          }), void 0), children]
        }), void 0)
      }), void 0)
    }), void 0);
  };

  var SIZE_MAP$1 = {
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
  var TextEntryContainer = /*#__PURE__*/styled__default["default"].span.withConfig({
    displayName: "LumaTextEntrystyles__TextEntryContainer",
    componentId: "sc-1mq6sy7-0"
  })(templateObject_1$n || (templateObject_1$n = __makeTemplateObject(["\n  display: inline-flex;\n  flex-direction: column;\n  width: 13.75rem;\n\n  ", "\n  ", "\n"], ["\n  display: inline-flex;\n  flex-direction: column;\n  width: 13.75rem;\n\n  ", "\n  ", "\n"])), function (props) {
    return props.fullWidth ? "\n    display: flex;\n    max-width: 100%;\n" : '';
  }, function (props) {
    return props.disabled ? "\n      input {\n        color: ".concat(LumaColor.NEUTRAL_40, ";\n      }\n      .TextEntryMockLabelContainer {\n        border-color: ").concat(LumaColor.NEUTRAL_40, ";\n\n        label {\n          color: ").concat(LumaColor.NEUTRAL_40, ";\n        }\n      }\n") : '';
  });
  var IconInsideTextEntry = /*#__PURE__*/styled__default["default"].label.withConfig({
    displayName: "LumaTextEntrystyles__IconInsideTextEntry",
    componentId: "sc-1mq6sy7-1"
  })(templateObject_2$i || (templateObject_2$i = __makeTemplateObject(["\n  display: flex;\n  height: 100%;\n  font-size: 0.875rem;\n  padding-right: 0.5rem;\n  align-items: center;\n  justify-content: center;\n  color: ", ";\n  pointer-events: ", ";\n  cursor: ", ";\n"], ["\n  display: flex;\n  height: 100%;\n  font-size: 0.875rem;\n  padding-right: 0.5rem;\n  align-items: center;\n  justify-content: center;\n  color: ", ";\n  pointer-events: ", ";\n  cursor: ", ";\n"])), function (props) {
    return props.disabled ? LumaColor.NEUTRAL_40 : LumaColor.NEUTRAL_80;
  }, function (props) {
    return props.disabled ? 'none' : '';
  }, function (props) {
    return props.disabled ? 'default' : 'pointer';
  });
  var TextEntryField = /*#__PURE__*/styled__default["default"].span.withConfig({
    displayName: "LumaTextEntrystyles__TextEntryField",
    componentId: "sc-1mq6sy7-2"
  })(templateObject_3$h || (templateObject_3$h = __makeTemplateObject(["\n  height: ", ";\n  border-radius: 8px;\n  border: 1px solid ", ";\n  display: inline-flex;\n  position: relative;\n  box-sizing: border-box;\n  overflow: hidden;\n  :focus-within {\n    border: 1px solid ", ";\n  }\n"], ["\n  height: ", ";\n  border-radius: 8px;\n  border: 1px solid ", ";\n  display: inline-flex;\n  position: relative;\n  box-sizing: border-box;\n  overflow: hidden;\n  :focus-within {\n    border: 1px solid ", ";\n  }\n"])), function (props) {
    return SIZE_MAP$1[props.sizeVariant || 'medium'].height + 'rem';
  }, LumaColor.NEUTRAL_40, LumaColor.NEUTRAL_80);
  var Input$3 = /*#__PURE__*/styled__default["default"].input.withConfig({
    displayName: "LumaTextEntrystyles__Input",
    componentId: "sc-1mq6sy7-3"
  })(templateObject_4$b || (templateObject_4$b = __makeTemplateObject(["\n  display: flex;\n  padding: ", ";\n  border: none;\n  background-color: transparent;\n  z-index: 1;\n  width: 100%;\n  color: ", ";\n  font-size: 0.75rem;\n  font-family: ", ";\n  height: 100%;\n  cursor: text;\n\n  ", ";\n\n  &::placeholder {\n    color: ", ";\n    font-family: ", ";\n  }\n\n  :focus,\n  :focus-visible {\n    outline: none;\n\n    + .TextEntryMockContainer--label {\n      label {\n        transform: ", ";\n        opacity: ", ";\n        font-size: ", ";\n      }\n    }\n  }\n"], ["\n  display: flex;\n  padding: ", ";\n  border: none;\n  background-color: transparent;\n  z-index: 1;\n  width: 100%;\n  color: ", ";\n  font-size: 0.75rem;\n  font-family: ", ";\n  height: 100%;\n  cursor: text;\n\n  ", ";\n\n  &::placeholder {\n    color: ", ";\n    font-family: ", ";\n  }\n\n  :focus,\n  :focus-visible {\n    outline: none;\n\n    + .TextEntryMockContainer--label {\n      label {\n        transform: ", ";\n        opacity: ", ";\n        font-size: ", ";\n      }\n    }\n  }\n"])), function (props) {
    return props.variant === 'free' ? SIZE_MAP$1[props.sizeVariant || 'medium'].input.paddingFree : SIZE_MAP$1[props.sizeVariant || 'medium'].input.padding;
  }, LumaColor.NEUTRAL_80, LumaFont.DEFAULT.MEDIUM, function (props) {
    return "\n    ".concat((props.readOnly || props.disabled) && "cursor: default;", ";\n    ").concat(props.readOnly && props.useByDropdown && !props.disabled && "cursor: pointer;", ";\n  ");
  }, function (props) {
    return props.disabled ? LumaColor.NEUTRAL_40 : LumaColor.NEUTRAL_60;
  }, LumaFont.DEFAULT.REGULAR, function (props) {
    return SIZE_MAP$1[props.sizeVariant || 'medium'].label.transform;
  }, function (props) {
    return SIZE_MAP$1[props.sizeVariant || 'medium'].label.opacity;
  }, function (props) {
    return SIZE_MAP$1[props.sizeVariant || 'medium'].label.fontSize;
  });
  var TextEntryMockContainer = /*#__PURE__*/styled__default["default"].span.withConfig({
    displayName: "LumaTextEntrystyles__TextEntryMockContainer",
    componentId: "sc-1mq6sy7-4"
  })(templateObject_5$6 || (templateObject_5$6 = __makeTemplateObject(["\n  display: flex;\n  position: absolute;\n  right: 0;\n  left: 0;\n  box-sizing: border-box;\n  width: 100%;\n  max-width: 100%;\n  height: 100%;\n  text-align: left;\n  pointer-events: none;\n\n  &.error {\n    .TextEntryMockLabelContainer {\n      border-color: ", ";\n    }\n  }\n"], ["\n  display: flex;\n  position: absolute;\n  right: 0;\n  left: 0;\n  box-sizing: border-box;\n  width: 100%;\n  max-width: 100%;\n  height: 100%;\n  text-align: left;\n  pointer-events: none;\n\n  &.error {\n    .TextEntryMockLabelContainer {\n      border-color: ", ";\n    }\n  }\n"])), LumaColor.NEGATIVE_60);
  var TextEntryMockLabelContainer = /*#__PURE__*/styled__default["default"].span.withConfig({
    displayName: "LumaTextEntrystyles__TextEntryMockLabelContainer",
    componentId: "sc-1mq6sy7-5"
  })(templateObject_6$5 || (templateObject_6$5 = __makeTemplateObject(["\n  flex: 0 0 auto;\n  width: 100%;\n  max-width: 100%;\n  box-sizing: border-box;\n  height: 100%;\n  pointer-events: none;\n\n  &.TextEntryMockLabel--focused {\n    label {\n      transform: ", ";\n      opacity: ", ";\n      font-size: ", ";\n    }\n  }\n"], ["\n  flex: 0 0 auto;\n  width: 100%;\n  max-width: 100%;\n  box-sizing: border-box;\n  height: 100%;\n  pointer-events: none;\n\n  &.TextEntryMockLabel--focused {\n    label {\n      transform: ", ";\n      opacity: ", ";\n      font-size: ", ";\n    }\n  }\n"])), function (props) {
    return SIZE_MAP$1[props.sizeVariant || 'medium'].label.transform;
  }, function (props) {
    return SIZE_MAP$1[props.sizeVariant || 'medium'].label.opacity;
  }, function (props) {
    return SIZE_MAP$1[props.sizeVariant || 'medium'].label.fontSize;
  });
  var TextEntryMockLabel = /*#__PURE__*/styled__default["default"].label.withConfig({
    displayName: "LumaTextEntrystyles__TextEntryMockLabel",
    componentId: "sc-1mq6sy7-6"
  })(templateObject_7$5 || (templateObject_7$5 = __makeTemplateObject(["\n  display: flex;\n  position: relative;\n  max-width: 100%;\n  justify-content: flex-start;\n  color: ", ";\n  left: 0.8125rem;\n  top: 50%;\n  pointer-events: none;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  transition: all 300ms ease-in-out;\n  font-family: ", ";\n  opacity: 1;\n  transform: translateY(-50%);\n  font-size: 0.75rem;\n"], ["\n  display: flex;\n  position: relative;\n  max-width: 100%;\n  justify-content: flex-start;\n  color: ", ";\n  left: 0.8125rem;\n  top: 50%;\n  pointer-events: none;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  transition: all 300ms ease-in-out;\n  font-family: ", ";\n  opacity: 1;\n  transform: translateY(-50%);\n  font-size: 0.75rem;\n"])), LumaColor.NEUTRAL_60, LumaFont.DEFAULT.REGULAR);
  var TextEntryHelper = /*#__PURE__*/styled__default["default"].span.withConfig({
    displayName: "LumaTextEntrystyles__TextEntryHelper",
    componentId: "sc-1mq6sy7-7"
  })(templateObject_8$3 || (templateObject_8$3 = __makeTemplateObject(["\n  display: block;\n  position: relative;\n  max-width: 100%;\n  color: ", ";\n  left: 1rem;\n  pointer-events: none;\n  font-size: 0.75rem;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  font-family: ", ";\n\n  &.TextEntryHelper--error {\n    color: ", ";\n  }\n"], ["\n  display: block;\n  position: relative;\n  max-width: 100%;\n  color: ", ";\n  left: 1rem;\n  pointer-events: none;\n  font-size: 0.75rem;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  font-family: ", ";\n\n  &.TextEntryHelper--error {\n    color: ", ";\n  }\n"])), LumaColor.NEUTRAL_60, LumaFont.DEFAULT.MEDIUM, LumaColor.NEGATIVE_60);
  var templateObject_1$n, templateObject_2$i, templateObject_3$h, templateObject_4$b, templateObject_5$6, templateObject_6$5, templateObject_7$5, templateObject_8$3;

  var LumaTextEntry = /*#__PURE__*/React.forwardRef(function LumaTextEntry(componentProps, forwardedRef) {
    var id = componentProps.id,
        label = componentProps.label,
        type = componentProps.type,
        className = componentProps.className,
        value = componentProps.value,
        onChange = componentProps.onChange,
        onBlur = componentProps.onBlur,
        fullWidth = componentProps.fullWidth,
        helperText = componentProps.helperText,
        _a = componentProps.error,
        error = _a === void 0 ? false : _a,
        _b = componentProps.disabled,
        disabled = _b === void 0 ? false : _b,
        htmlFor = componentProps.htmlFor,
        _c = componentProps.sizeVariant,
        sizeVariant = _c === void 0 ? 'medium' : _c,
        _d = componentProps.readOnly,
        readOnly = _d === void 0 ? false : _d,
        icon = componentProps.icon,
        _e = componentProps.variant,
        variant = _e === void 0 ? "label"
    /* label */
    : _e,
        _f = componentProps.useByDropdown,
        useByDropdown = _f === void 0 ? false : _f,
        rest = __rest(componentProps, ["id", "label", "type", "className", "value", "onChange", "onBlur", "fullWidth", "helperText", "error", "disabled", "htmlFor", "sizeVariant", "readOnly", "icon", "variant", "useByDropdown"]);

    return jsxRuntime.jsxs(TextEntryContainer, __assign({
      fullWidth: fullWidth,
      disabled: disabled
    }, {
      children: [jsxRuntime.jsxs(TextEntryField, __assign({
        sizeVariant: sizeVariant,
        className: "text-entry--outlined"
      }, {
        children: [jsxRuntime.jsx(Input$3, __assign({
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
        }, rest), void 0), icon !== undefined && jsxRuntime.jsx(IconInsideTextEntry, __assign({
          tabIndex: -1,
          disabled: disabled
        }, {
          children: icon
        }), void 0), jsxRuntime.jsx(TextEntryMockContainer, __assign({
          className: "".concat(error ? 'error' : '', " TextEntryMockContainer--label")
        }, {
          children: jsxRuntime.jsx(TextEntryMockLabelContainer, __assign({
            sizeVariant: sizeVariant,
            className: "".concat(value ? 'TextEntryMockLabel--focused' : '', " TextEntryMockLabelContainer")
          }, {
            children: variant === "label"
            /* label */
            && jsxRuntime.jsx(TextEntryMockLabel, __assign({
              htmlFor: htmlFor,
              className: "TextEntryMockLabel"
            }, {
              children: label
            }), void 0)
          }), void 0)
        }), void 0)]
      }), void 0), helperText && jsxRuntime.jsx(TextEntryHelper, __assign({
        className: "".concat(error ? 'TextEntryHelper--error' : '', " TextEntryHelper")
      }, {
        children: helperText
      }), void 0)]
    }), void 0);
  });

  var SIZE_MAP = {
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
  var TextSearchContainer = /*#__PURE__*/styled__default["default"].div.withConfig({
    displayName: "LumaTextSearchstyle__TextSearchContainer",
    componentId: "sc-1fqgn3v-0"
  })(templateObject_1$m || (templateObject_1$m = __makeTemplateObject(["\n  position: relative;\n  display: inline-flex;\n  font-family: ", ";\n  flex-direction: column;\n  width: 13.75rem;\n  ", "\n"], ["\n  position: relative;\n  display: inline-flex;\n  font-family: ", ";\n  flex-direction: column;\n  width: 13.75rem;\n  ", "\n"])), LumaFont.DEFAULT.REGULAR, function (props) {
    return props.fullWidth ? "\n    display: flex;\n    max-width: 100%;\n" : '';
  });
  var HelperText = /*#__PURE__*/styled__default["default"].span.withConfig({
    displayName: "LumaTextSearchstyle__HelperText",
    componentId: "sc-1fqgn3v-1"
  })(templateObject_2$h || (templateObject_2$h = __makeTemplateObject(["\n  color: ", ";\n  padding-left: 0.75rem;\n  font-size: 0.75rem;\n  font-family: ", ";\n"], ["\n  color: ", ";\n  padding-left: 0.75rem;\n  font-size: 0.75rem;\n  font-family: ", ";\n"])), function (props) {
    return props.error ? LumaColor.NEGATIVE_60 : LumaColor.NEUTRAL_60;
  }, LumaFont.DEFAULT.MEDIUM);
  var DropDownItemWrapper$1 = /*#__PURE__*/styled__default["default"].div.withConfig({
    displayName: "LumaTextSearchstyle__DropDownItemWrapper",
    componentId: "sc-1fqgn3v-2"
  })(templateObject_3$g || (templateObject_3$g = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  justify-content: left;\n"], ["\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  justify-content: left;\n"])));
  var DropItem = /*#__PURE__*/styled__default["default"].p.withConfig({
    displayName: "LumaTextSearchstyle__DropItem",
    componentId: "sc-1fqgn3v-3"
  })(templateObject_4$a || (templateObject_4$a = __makeTemplateObject(["\n  font-family: ", ";\n  font-size: 0.75rem;\n  margin: 0;\n  ", "\n  + p {\n    margin-left: 0.5rem;\n  }\n"], ["\n  font-family: ", ";\n  font-size: 0.75rem;\n  margin: 0;\n  ", "\n  + p {\n    margin-left: 0.5rem;\n  }\n"])), LumaFont.DEFAULT.REGULAR, function (props) {
    return props.variant === 'underlier' ? "&:first-child {\n    color: ".concat(LumaColor.NEUTRAL_50, ";\n  }") : '';
  });
  var SearchIcon = /*#__PURE__*/styled__default["default"].div.withConfig({
    displayName: "LumaTextSearchstyle__SearchIcon",
    componentId: "sc-1fqgn3v-4"
  })(templateObject_5$5 || (templateObject_5$5 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 0.875rem;\n  padding-left: 0.75rem;\n  padding-right: 0.5rem;\n  color: ", ";\n"], ["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 0.875rem;\n  padding-left: 0.75rem;\n  padding-right: 0.5rem;\n  color: ", ";\n"])), function (props) {
    return props.disabled ? LumaColor.NEUTRAL_40 : LumaColor.NEUTRAL_60;
  });
  var HiddenInput = /*#__PURE__*/styled__default["default"].input.withConfig({
    displayName: "LumaTextSearchstyle__HiddenInput",
    componentId: "sc-1fqgn3v-5"
  })(templateObject_6$4 || (templateObject_6$4 = __makeTemplateObject(["\n  border: none;\n  outline: none;\n  width: 100%;\n  padding: 0.625rem 0;\n  background-color: transparent;\n  font-size: 0.75rem;\n  &::placeholder {\n    color: ", ";\n    font-family: ", ";\n  }\n\n  &:focus {\n    &::placeholder {\n      font-family: ", ";\n      color: ", ";\n    }\n    ", " {\n      color: ", ";\n    }\n  }\n\n  &:disabled {\n    &::placeholder {\n      color: ", ";\n    }\n  }\n\n  &:read-only {\n    cursor: default;\n  }\n"], ["\n  border: none;\n  outline: none;\n  width: 100%;\n  padding: 0.625rem 0;\n  background-color: transparent;\n  font-size: 0.75rem;\n  &::placeholder {\n    color: ", ";\n    font-family: ", ";\n  }\n\n  &:focus {\n    &::placeholder {\n      font-family: ", ";\n      color: ", ";\n    }\n    ", " {\n      color: ", ";\n    }\n  }\n\n  &:disabled {\n    &::placeholder {\n      color: ", ";\n    }\n  }\n\n  &:read-only {\n    cursor: default;\n  }\n"])), LumaColor.NEUTRAL_60, LumaFont.DEFAULT.LIGHT, LumaFont.DEFAULT.MEDIUM, LumaColor.NEUTRAL_80, SearchIcon, LumaColor.NEUTRAL_80, LumaColor.NEUTRAL_40);
  var InputContainer = /*#__PURE__*/styled__default["default"].div.withConfig({
    displayName: "LumaTextSearchstyle__InputContainer",
    componentId: "sc-1fqgn3v-6"
  })(templateObject_7$4 || (templateObject_7$4 = __makeTemplateObject(["\n  height: ", ";\n  display: flex;\n  border-radius: 8px;\n  border: 1px solid\n    ", ";\n  background-color: transparent;\n  z-index: 1;\n  width: 100%;\n  color: ", ";\n  font-size: 0.5rem;\n\n  &:focus-within {\n    border: 1px solid ", ";\n    ", " {\n      color: ", ";\n    }\n  }\n"], ["\n  height: ", ";\n  display: flex;\n  border-radius: 8px;\n  border: 1px solid\n    ", ";\n  background-color: transparent;\n  z-index: 1;\n  width: 100%;\n  color: ", ";\n  font-size: 0.5rem;\n\n  &:focus-within {\n    border: 1px solid ", ";\n    ", " {\n      color: ", ";\n    }\n  }\n"])), function (props) {
    return SIZE_MAP[props.sizeVariant || 'medium'].height + 'rem';
  }, function (props) {
    return props.error ? LumaColor.NEGATIVE_60 : LumaColor.NEUTRAL_40;
  }, LumaColor.NEUTRAL_80, LumaColor.NEUTRAL_80, SearchIcon, LumaColor.NEUTRAL_90);
  var ClearIcon = /*#__PURE__*/styled__default["default"].button.withConfig({
    displayName: "LumaTextSearchstyle__ClearIcon",
    componentId: "sc-1fqgn3v-7"
  })(templateObject_8$2 || (templateObject_8$2 = __makeTemplateObject(["\n  background-color: transparent;\n  border: none;\n  pointer-events: initial;\n  cursor: pointer;\n  color: ", ";\n  margin-right: 0.75rem;\n  font-size: 0.75rem;\n"], ["\n  background-color: transparent;\n  border: none;\n  pointer-events: initial;\n  cursor: pointer;\n  color: ", ";\n  margin-right: 0.75rem;\n  font-size: 0.75rem;\n"])), LumaColor.NEUTRAL_80);
  var templateObject_1$m, templateObject_2$h, templateObject_3$g, templateObject_4$a, templateObject_5$5, templateObject_6$4, templateObject_7$4, templateObject_8$2;

  var Root$4 = /*#__PURE__*/styled__default["default"].div.withConfig({
    displayName: "LumaStatusstyle__Root",
    componentId: "sc-m1cgjj-0"
  })(templateObject_1$l || (templateObject_1$l = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n  min-width: 7.75rem;\n  min-height: 4.5rem;\n  padding: 0.5rem 0.5rem 0.375rem;\n  border-radius: 8px;\n  border: solid 1px\n    ", ";\n  background-color: ", ";\n  text-align: center;\n  justify-content: center;\n  align-items: center;\n"], ["\n  display: flex;\n  flex-direction: row;\n  min-width: 7.75rem;\n  min-height: 4.5rem;\n  padding: 0.5rem 0.5rem 0.375rem;\n  border-radius: 8px;\n  border: solid 1px\n    ", ";\n  background-color: ", ";\n  text-align: center;\n  justify-content: center;\n  align-items: center;\n"])), function (props) {
    return props.statusBorder ? "".concat(LumaColor.NEUTRAL_70) : 'transparent';
  }, LumaColor.NEUTRAL_00_WHITE);
  var TitleMessageDefault = /*#__PURE__*/styled__default["default"].p.withConfig({
    displayName: "LumaStatusstyle__TitleMessageDefault",
    componentId: "sc-m1cgjj-1"
  })(templateObject_2$g || (templateObject_2$g = __makeTemplateObject(["\n  font-family: ", ";\n  font-size: 0.5rem;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  text-align: center;\n  color: ", ";\n  margin-bottom: 0;\n"], ["\n  font-family: ", ";\n  font-size: 0.5rem;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  text-align: center;\n  color: ", ";\n  margin-bottom: 0;\n"])), LumaFont.DEFAULT.MEDIUM, LumaColor.NEUTRAL_80);
  var SubMessageDefault = /*#__PURE__*/styled__default["default"].p.withConfig({
    displayName: "LumaStatusstyle__SubMessageDefault",
    componentId: "sc-m1cgjj-2"
  })(templateObject_3$f || (templateObject_3$f = __makeTemplateObject(["\n  font-family: ", ";\n  font-size: 0.375rem;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  text-align: center;\n  color: ", ";\n"], ["\n  font-family: ", ";\n  font-size: 0.375rem;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  text-align: center;\n  color: ", ";\n"])), LumaFont.DEFAULT.REGULAR, LumaColor.NEUTRAL_60);
  var DefaultStatusIcon = /*#__PURE__*/styled__default["default"].div.withConfig({
    displayName: "LumaStatusstyle__DefaultStatusIcon",
    componentId: "sc-m1cgjj-3"
  })(templateObject_4$9 || (templateObject_4$9 = __makeTemplateObject(["\n  font-size: 1.25rem;\n"], ["\n  font-size: 1.25rem;\n"])));
  var templateObject_1$l, templateObject_2$g, templateObject_3$f, templateObject_4$9;

  function createConstrainedIdFn() {
    return function (value) {
      return value;
    };
  }

  var iconTypesDictionary = createConstrainedIdFn()({
    solid: 'fas',
    regular: 'far',
    light: 'fal',
    duotone: 'fad'
  });
  var LumaIcon = function LumaIcon(_a) {
    var className = _a.className,
        iconCode = _a.iconCode,
        _b = _a.type,
        type = _b === void 0 ? 'light' : _b,
        style = _a.style,
        rotate = _a.rotate,
        onClick = _a.onClick;
    var image = fontawesomeSvgCore.findIconDefinition({
      prefix: iconTypesDictionary[type],
      iconName: iconCode
    });
    return jsxRuntime.jsx(reactFontawesome.FontAwesomeIcon, {
      className: className,
      icon: fontawesomeSvgCore.icon(image),
      style: style,
      transform: rotate ? {
        rotate: rotate
      } : undefined,
      onClick: onClick
    }, void 0);
  };

  var Message = function Message(props) {
    var _a = props.children[0],
        icon = _a.icon,
        titleMessage = _a.titleMessage,
        helperMessage = _a.helperMessage,
        iconAnimation = _a.iconAnimation;
    return jsxRuntime.jsxs(jsxRuntime.Fragment, {
      children: [icon && jsxRuntime.jsx(DefaultStatusIcon, {
        children: jsxRuntime.jsx(LumaIcon, {
          iconCode: icon,
          type: "regular",
          className: "".concat(iconAnimation ? iconAnimation : '')
        }, void 0)
      }, void 0), titleMessage && jsxRuntime.jsx(TitleMessageDefault, {
        children: titleMessage
      }, void 0), helperMessage && jsxRuntime.jsx(SubMessageDefault, {
        children: helperMessage
      }, void 0)]
    }, void 0);
  };

  var LoadingMessage = function LoadingMessage(props) {
    var _a = props.children[0],
        icon = _a.icon,
        titleMessage = _a.titleMessage,
        iconAnimation = _a.iconAnimation;
    return jsxRuntime.jsxs(jsxRuntime.Fragment, {
      children: [icon && jsxRuntime.jsx(DefaultStatusIcon, {
        children: jsxRuntime.jsx(LumaIcon, {
          className: "".concat(iconAnimation ? iconAnimation : ''),
          iconCode: icon,
          type: "regular"
        }, void 0)
      }, void 0), jsxRuntime.jsx(TitleMessageDefault, {
        children: titleMessage
      }, void 0)]
    }, void 0);
  };

  var LumaStatus = function LumaStatus(_a) {
    var variant = _a.variant,
        ariaLabel = _a.ariaLabel,
        _b = _a.titleMessage,
        titleMessage = _b === void 0 ? variant === 'failed' ? 'We didn’t find anything.' : 'Thinking...' : _b,
        _c = _a.helperMessage,
        helperMessage = _c === void 0 ? 'Try a specific symbol or company name for relevant results.' : _c,
        _d = _a.icon,
        icon = _d === void 0 ? variant === 'failed' ? 'exclamation-circle' : 'spinner' : _d,
        iconAnimate = _a.iconAnimate,
        _e = _a.statusBorder,
        statusBorder = _e === void 0 ? false : _e,
        _f = _a.renderContent,
        renderContent = _f === void 0 ? variant === 'failed' ? jsxRuntime.jsx(Message, {}, void 0) : jsxRuntime.jsx(LoadingMessage, {}, void 0) : _f,
        rest = __rest(_a, ["variant", "ariaLabel", "titleMessage", "helperMessage", "icon", "iconAnimate", "statusBorder", "renderContent"]);

    return jsxRuntime.jsx(Root$4, __assign({
      "arial-label": ariaLabel,
      statusBorder: statusBorder
    }, rest, {
      children: variant === 'failed' ? jsxRuntime.jsx("div", {
        children: /*#__PURE__*/React__namespace.cloneElement(renderContent, {}, [{
          titleMessage: titleMessage,
          helperMessage: helperMessage,
          icon: icon,
          iconAnimation: iconAnimate
        }])
      }, void 0) : jsxRuntime.jsx("div", {
        children: /*#__PURE__*/React__namespace.cloneElement(renderContent, {}, [{
          titleMessage: titleMessage,
          icon: icon,
          iconAnimation: iconAnimate
        }])
      }, void 0)
    }), void 0);
  };

  var DIMENSION_MAP$5 = {
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
  var LumaFontsIBM = /*#__PURE__*/styled.createGlobalStyle(templateObject_1$k || (templateObject_1$k = __makeTemplateObject(["\n    @font-face {\n        font-family: ", ";\n        src: url('./fonts/IBMPlexSans/IBMPlexSans-Light.woff2') format('woff2'),\n        url('./fonts/IBMPlexSans/IBMPlexSans-Light.ttf') format('truetype'),\n        url('./fonts/IBMPlexSans/IBMPlexSans-Light.woff') format('woff');\n        font-weight: 300;\n        font-style: normal;\n        font-display: fallback;\n    }\n    @font-face {\n        font-family: ", ";\n        src: url('./fonts/IBMPlexSans/IBMPlexSans-Regular.woff2') format('woff2'),\n        url('./fonts/IBMPlexSans/IBMPlexSans-Regular.ttf') format('truetype'),\n        url('./fonts/IBMPlexSans/IBMPlexSans-Regular.woff') format('woff');\n        font-weight: 400;\n        font-style: normal;\n        font-display: fallback;\n    }\n    @font-face {\n        font-family: ", ";\n        src: url('./fonts/IBMPlexSans/IBMPlexSans-Medium.woff2') format('woff2'),\n        url('./fonts/IBMPlexSans/IBMPlexSans-Medium.ttf') format('truetype'),\n        url('./fonts/IBMPlexSans/IBMPlexSans-Medium.woff') format('woff');\n        font-weight: 500;\n        font-style: normal;\n        font-display: fallback;\n    }\n    @font-face {\n        font-family: ", ";\n        src: url('./fonts/IBMPlexSans/IBMPlexSans-SemiBold.woff2') format('woff2'),\n        url('./fonts/IBMPlexSans/IBMPlexSans-SemiBold.ttf') format('truetype'),\n        url('./fonts/IBMPlexSans/IBMPlexSans-SemiBold.woff') format('woff');\n        font-weight: 600;\n        font-style: normal;\n        font-display: fallback;\n    }\n    @font-face {\n        font-family: ", ";\n        src: url('./fonts/IBMPlexSans/IBMPlexSans-Bold.woff2') format('woff2'),\n        url('./fonts/IBMPlexSans/IBMPlexSans-Bold.ttf') format('truetype'),\n        url('./fonts/IBMPlexSans/IBMPlexSans-Bold.woff') format('woff');\n        font-weight: 700;\n        font-style: normal;\n        font-display: fallback;\n    }\n"], ["\n    @font-face {\n        font-family: ", ";\n        src: url('./fonts/IBMPlexSans/IBMPlexSans-Light.woff2') format('woff2'),\n        url('./fonts/IBMPlexSans/IBMPlexSans-Light.ttf') format('truetype'),\n        url('./fonts/IBMPlexSans/IBMPlexSans-Light.woff') format('woff');\n        font-weight: 300;\n        font-style: normal;\n        font-display: fallback;\n    }\n    @font-face {\n        font-family: ", ";\n        src: url('./fonts/IBMPlexSans/IBMPlexSans-Regular.woff2') format('woff2'),\n        url('./fonts/IBMPlexSans/IBMPlexSans-Regular.ttf') format('truetype'),\n        url('./fonts/IBMPlexSans/IBMPlexSans-Regular.woff') format('woff');\n        font-weight: 400;\n        font-style: normal;\n        font-display: fallback;\n    }\n    @font-face {\n        font-family: ", ";\n        src: url('./fonts/IBMPlexSans/IBMPlexSans-Medium.woff2') format('woff2'),\n        url('./fonts/IBMPlexSans/IBMPlexSans-Medium.ttf') format('truetype'),\n        url('./fonts/IBMPlexSans/IBMPlexSans-Medium.woff') format('woff');\n        font-weight: 500;\n        font-style: normal;\n        font-display: fallback;\n    }\n    @font-face {\n        font-family: ", ";\n        src: url('./fonts/IBMPlexSans/IBMPlexSans-SemiBold.woff2') format('woff2'),\n        url('./fonts/IBMPlexSans/IBMPlexSans-SemiBold.ttf') format('truetype'),\n        url('./fonts/IBMPlexSans/IBMPlexSans-SemiBold.woff') format('woff');\n        font-weight: 600;\n        font-style: normal;\n        font-display: fallback;\n    }\n    @font-face {\n        font-family: ", ";\n        src: url('./fonts/IBMPlexSans/IBMPlexSans-Bold.woff2') format('woff2'),\n        url('./fonts/IBMPlexSans/IBMPlexSans-Bold.ttf') format('truetype'),\n        url('./fonts/IBMPlexSans/IBMPlexSans-Bold.woff') format('woff');\n        font-weight: 700;\n        font-style: normal;\n        font-display: fallback;\n    }\n"])), LumaFont.DEFAULT.LIGHT, LumaFont.DEFAULT.REGULAR, LumaFont.DEFAULT.MEDIUM, LumaFont.DEFAULT.SEMI_BOLD, LumaFont.DEFAULT.BOLD);
  var LumaDimensions = /*#__PURE__*/styled.createGlobalStyle(templateObject_2$f || (templateObject_2$f = __makeTemplateObject(["\n    h1 {\n      font-size: ", ";\n    }\n    h2 {\n      font-size: ", ";\n    }\n    h3 {\n      font-size: ", ";\n    }\n    h4 {\n      font-size: ", ";\n    }\n    b1 {\n      font-size: ", ";\n    }\n    b2 {\n      font-size: ", ";\n    }\n    b3 {\n      font-size: ", ";\n    }\n    b4 {\n      font-size: ", ";\n    }\n"], ["\n    h1 {\n      font-size: ", ";\n    }\n    h2 {\n      font-size: ", ";\n    }\n    h3 {\n      font-size: ", ";\n    }\n    h4 {\n      font-size: ", ";\n    }\n    b1 {\n      font-size: ", ";\n    }\n    b2 {\n      font-size: ", ";\n    }\n    b3 {\n      font-size: ", ";\n    }\n    b4 {\n      font-size: ", ";\n    }\n"])), DIMENSION_MAP$5.fontSizes.h1, DIMENSION_MAP$5.fontSizes.h2, DIMENSION_MAP$5.fontSizes.h3, DIMENSION_MAP$5.fontSizes.h4, DIMENSION_MAP$5.fontSizes.b1, DIMENSION_MAP$5.fontSizes.b2, DIMENSION_MAP$5.fontSizes.b3, DIMENSION_MAP$5.fontSizes.b4);
  /*#__PURE__*/styled__default["default"].div.withConfig({
    displayName: "LumaFontsstyle__Text",
    componentId: "sc-16lzgh8-0"
  })(templateObject_3$e || (templateObject_3$e = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (props) {
    return "\n    font-family: ".concat(LumaFont.DEFAULT[props.font], ";\n    font-size: ").concat(props.size, ";\n  ");
  });
  var templateObject_1$k, templateObject_2$f, templateObject_3$e;

  var DIMENSION_MAP$4 = {
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
  var DropDownBox = /*#__PURE__*/styled__default["default"].ul.withConfig({
    displayName: "LumaDropdownBoxstyle__DropDownBox",
    componentId: "sc-6vohv3-0"
  })(templateObject_1$j || (templateObject_1$j = __makeTemplateObject(["\n  display: none;\n  flex: auto;\n  flex-direction: column;\n  position: absolute;\n  top: ", ";\n  bottom: 2.5rem;\n  width: 100%;\n  min-width: 8rem;\n  margin-bottom: 0;\n  padding: 0;\n  padding-top: ", ";\n  padding-bottom: ", ";\n  border-radius: 8px;\n  box-shadow: 0 0 4px 0 rgba(47, 51, 54, 0.32);\n  border: solid 1px ", ";\n  background-color: ", ";\n  transition: all 300ms ease-in-out;\n  height: fit-content;\n  max-height: 7.125rem;\n  overflow-x: hidden;\n  opacity: 0;\n  z-index: 2;\n\n  ", "\n"], ["\n  display: none;\n  flex: auto;\n  flex-direction: column;\n  position: absolute;\n  top: ", ";\n  bottom: 2.5rem;\n  width: 100%;\n  min-width: 8rem;\n  margin-bottom: 0;\n  padding: 0;\n  padding-top: ", ";\n  padding-bottom: ", ";\n  border-radius: 8px;\n  box-shadow: 0 0 4px 0 rgba(47, 51, 54, 0.32);\n  border: solid 1px ", ";\n  background-color: ", ";\n  transition: all 300ms ease-in-out;\n  height: fit-content;\n  max-height: 7.125rem;\n  overflow-x: hidden;\n  opacity: 0;\n  z-index: 2;\n\n  ", "\n"])), function (props) {
    return props.size ? DIMENSION_MAP$4[props.size].height : '0';
  }, function (props) {
    return props.variant === 'no-border-bottom' ? '1.7rem' : '0';
  }, function (props) {
    return props.variant === 'no-border-top' ? '1.7rem' : '0';
  }, LumaColor.NEUTRAL_70, LumaColor.NEUTRAL_00_WHITE, function (props) {
    return props.isOpen ? "display: flex;\n  opacity: 1;" : '';
  });
  var InnerBox = /*#__PURE__*/styled__default["default"].div.withConfig({
    displayName: "LumaDropdownBoxstyle__InnerBox",
    componentId: "sc-6vohv3-1"
  })(templateObject_2$e || (templateObject_2$e = __makeTemplateObject(["\n  height: 100%;\n  overflow-x: hidden;\n  overflow-y: scroll;\n\n  ::-webkit-scrollbar {\n    width: 0.3rem;\n    border-radius: 8px;\n  }\n\n  ::-webkit-scrollbar-track {\n    background: ", ";\n  }\n\n  ::-webkit-scrollbar-thumb {\n    background: ", ";\n  }\n\n  ::-webkit-scrollbar-thumb:hover {\n    background: ", ";\n  }\n"], ["\n  height: 100%;\n  overflow-x: hidden;\n  overflow-y: scroll;\n\n  ::-webkit-scrollbar {\n    width: 0.3rem;\n    border-radius: 8px;\n  }\n\n  ::-webkit-scrollbar-track {\n    background: ", ";\n  }\n\n  ::-webkit-scrollbar-thumb {\n    background: ", ";\n  }\n\n  ::-webkit-scrollbar-thumb:hover {\n    background: ", ";\n  }\n"])), LumaColor.NEUTRAL_00_WHITE, LumaColor.NEUTRAL_30, LumaColor.NEUTRAL_40);
  var DropDownListElement = /*#__PURE__*/styled__default["default"].li.withConfig({
    displayName: "LumaDropdownBoxstyle__DropDownListElement",
    componentId: "sc-6vohv3-2"
  })(templateObject_3$d || (templateObject_3$d = __makeTemplateObject(["\n  padding: 0.5rem 0;\n  margin: 0 1rem;\n  display: flex;\n  flex: auto;\n  flex-direction: column;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  font-family: ", ";\n  color: ", ";\n  cursor: pointer;\n  &:not(:last-child) {\n    border-bottom: 1px solid ", ";\n  }\n  &:hover {\n    .DropDownText {\n      color: ", ";\n      ", "\n    }\n  }\n  ", "\n  ", "\n    ", "\n"], ["\n  padding: 0.5rem 0;\n  margin: 0 1rem;\n  display: flex;\n  flex: auto;\n  flex-direction: column;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  font-family: ", ";\n  color: ", ";\n  cursor: pointer;\n  &:not(:last-child) {\n    border-bottom: 1px solid ", ";\n  }\n  &:hover {\n    .DropDownText {\n      color: ", ";\n      ", "\n    }\n  }\n  ", "\n  ", "\n    ", "\n"])), LumaFont.DEFAULT.REGULAR, LumaColor.NEUTRAL_80, LumaColor.NEUTRAL_30, LumaColor.NEUTRAL_60, function (props) {
    return props.disabled ? "cursor: not-allowed;" : '';
  }, function (props) {
    return props.isHighlighted ? "color: ".concat(LumaColor.NEUTRAL_60, ";\n        ") : '';
  }, function (props) {
    return props.isSelected ? "font-family: ".concat(LumaFont.DEFAULT.BOLD, ";\n    ") : '';
  }, function (props) {
    return props.disabled ? "color: ".concat(LumaColor.NEUTRAL_60, "; cursor: not-allowed;\n    ") : '';
  });
  var DropDownSection = /*#__PURE__*/styled__default["default"].div.withConfig({
    displayName: "LumaDropdownBoxstyle__DropDownSection",
    componentId: "sc-6vohv3-3"
  })(templateObject_4$8 || (templateObject_4$8 = __makeTemplateObject(["\n  padding: 0.25rem 0.938rem;\n  margin-top: 0.5rem;\n  font-size: 0.75rem;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  font-family: ", ";\n  color: ", ";\n  background-color: ", ";\n"], ["\n  padding: 0.25rem 0.938rem;\n  margin-top: 0.5rem;\n  font-size: 0.75rem;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  font-family: ", ";\n  color: ", ";\n  background-color: ", ";\n"])), LumaFont.DEFAULT.REGULAR, LumaColor.NEUTRAL_80, LumaColor.NEUTRAL_20);
  var templateObject_1$j, templateObject_2$e, templateObject_3$d, templateObject_4$8;

  var LumaDropDownBox = function LumaDropDownBox(_a) {
    var items = _a.items,
        disabled = _a.disabled,
        getMenuProps = _a.getMenuProps,
        getItemProps = _a.getItemProps,
        _b = _a.isOpen,
        isOpen = _b === void 0 ? false : _b,
        highlightedIndex = _a.highlightedIndex,
        _c = _a.size,
        size = _c === void 0 ? 'medium' : _c,
        renderComponent = _a.renderComponent,
        _d = _a.selectedItem,
        selectedItem = _d === void 0 ? null : _d,
        _e = _a.itemToString,
        itemToString = _e === void 0 ? function (item) {
      var _a;

      return (_a = item === null || item === void 0 ? void 0 : item.label) !== null && _a !== void 0 ? _a : '';
    } : _e,
        _f = _a.variant,
        variant = _f === void 0 ? 'standard' : _f,
        selectedItems = _a.selectedItems,
        id = _a.id,
        errorTemplate = _a.errorTemplate;
    var menuProps = getMenuProps ? getMenuProps() : {};
    return jsxRuntime.jsx(DropDownBox, __assign({
      size: size,
      isOpen: isOpen,
      variant: variant
    }, menuProps, {
      "aria-labelledby": "".concat(id, "Label")
    }, {
      children: jsxRuntime.jsx(InnerBox, {
        children: isOpen && (items.length ? items.map(function (item, index) {
          var _a;

          var isSelected = false;

          if (selectedItem && item) {
            isSelected = itemToString(selectedItem) === itemToString(item);
          }

          var itemProps = getItemProps ? getItemProps({
            item: item,
            index: index,
            disabled: item.isDisabled
          }) : {};
          return jsxRuntime.jsxs(React__namespace.Fragment, {
            children: [item.sectionName && jsxRuntime.jsx(DropDownSection, {
              children: item === null || item === void 0 ? void 0 : item.sectionName
            }, void 0), jsxRuntime.jsx(DropDownListElement, __assign({
              isHighlighted: highlightedIndex === index,
              "data-testid": "dropdown-item-".concat((_a = item.label) === null || _a === void 0 ? void 0 : _a.toLowerCase().replace(' ', '_'))
            }, itemProps, {
              children: /*#__PURE__*/React__namespace.cloneElement(renderComponent, {
                selectedItems: selectedItems,
                item: item,
                items: items,
                disabled: disabled,
                selectedItem: selectedItem,
                isSelected: isSelected,
                variant: variant
              })
            }), void 0)]
          }, "".concat(item).concat(index));
        }) : errorTemplate !== null && errorTemplate !== void 0 ? errorTemplate : null)
      }, void 0)
    }), void 0);
  };

  var RenderContent = function RenderContent(_a) {
    var item = _a.item,
        variant = _a.variant;
    return jsxRuntime.jsxs(DropDownItemWrapper$1, __assign({
      variant: variant
    }, {
      children: [variant !== 'standard' ? jsxRuntime.jsx(DropItem, __assign({
        variant: variant
      }, {
        children: item === null || item === void 0 ? void 0 : item.id
      }), void 0) : null, jsxRuntime.jsx(DropItem, __assign({
        variant: variant
      }, {
        children: item === null || item === void 0 ? void 0 : item.label
      }), void 0)]
    }), void 0);
  };
  var LumaTextSearch = function LumaTextSearch(_a) {
    var id = _a.id,
        _b = _a.placeholder,
        placeholder = _b === void 0 ? '' : _b,
        className = _a.className,
        error = _a.error,
        readOnly = _a.readOnly,
        fullWidth = _a.fullWidth,
        disabled = _a.disabled,
        helperText = _a.helperText,
        _c = _a.sizeVariant,
        sizeVariant = _c === void 0 ? 'medium' : _c,
        _d = _a.items,
        items = _d === void 0 ? [] : _d,
        handleSelectItem = _a.handleSelectItem,
        handleChange = _a.handleChange;
        _a.handleBlur;
        var itemToString = _a.itemToString,
        inputAriaLabel = _a.inputAriaLabel,
        buttonAriaLabel = _a.buttonAriaLabel;
        _a.renderContent;
        var _e = _a.variant,
        variant = _e === void 0 ? 'standard' : _e,
        defaultValue = _a.defaultValue,
        _f = _a.errorTemplate,
        errorTemplate = _f === void 0 ? jsxRuntime.jsx(LumaStatus, {
      variant: "failed",
      statusBorder: true,
      ariaLabel: "failStatus"
    }, void 0) : _f,
        rest = __rest(_a, ["id", "placeholder", "className", "error", "readOnly", "fullWidth", "disabled", "helperText", "sizeVariant", "items", "handleSelectItem", "handleChange", "handleBlur", "itemToString", "inputAriaLabel", "buttonAriaLabel", "renderContent", "variant", "defaultValue", "errorTemplate"]);

    var _g = React.useState(defaultValue || ''),
        inputValue = _g[0],
        setInputValue = _g[1];

    var _h = React.useState(false),
        isFocus = _h[0],
        setIsFocus = _h[1];

    var _j = downshift.useCombobox({
      itemToString: itemToString,
      inputValue: inputValue,
      items: items,
      onInputValueChange: function (_a) {
        var inputValue = _a.inputValue;
        setInputValue(inputValue);
        handleChange === null || handleChange === void 0 ? void 0 : handleChange(inputValue);
        return;
      },
      onSelectedItemChange: function (_a) {
        var selectedItemEvent = _a.selectedItem;
        handleSelectItem === null || handleSelectItem === void 0 ? void 0 : handleSelectItem(selectedItemEvent);
        reset();
      }
    }),
        isOpen = _j.isOpen,
        getMenuProps = _j.getMenuProps,
        getInputProps = _j.getInputProps,
        getComboboxProps = _j.getComboboxProps,
        getItemProps = _j.getItemProps,
        highlightedIndex = _j.highlightedIndex,
        reset = _j.reset;

    var inputProps = getInputProps({
      'aria-label': inputAriaLabel,
      'aria-labelledby': ''
    });
    return jsxRuntime.jsxs(TextSearchContainer, __assign({
      sizeVariant: sizeVariant,
      fullWidth: fullWidth,
      className: className
    }, getComboboxProps(), {
      children: [jsxRuntime.jsxs(InputContainer, __assign({
        sizeVariant: sizeVariant,
        id: id,
        error: error,
        placeholder: placeholder
      }, {
        children: [jsxRuntime.jsx(SearchIcon, __assign({
          disabled: disabled
        }, {
          children: jsxRuntime.jsx(LumaIcon, {
            iconCode: "magnifying-glass"
          }, void 0)
        }), void 0), jsxRuntime.jsx(HiddenInput, __assign({
          value: inputValue,
          placeholder: placeholder,
          onFocus: function () {
            setIsFocus(!isFocus);
          },
          onBlur: function () {
            setIsFocus(!isFocus);
          },
          disabled: disabled,
          readOnly: readOnly
        }, inputProps, rest), void 0), inputValue && !readOnly && jsxRuntime.jsx(ClearIcon, __assign({
          type: "button",
          "aria-label": buttonAriaLabel,
          onClick: function () {
            reset();
          }
        }, {
          children: jsxRuntime.jsx(LumaIcon, {
            iconCode: "times"
          }, void 0)
        }), void 0)]
      }), void 0), helperText && jsxRuntime.jsx(HelperText, __assign({
        error: error
      }, {
        children: helperText
      }), void 0), jsxRuntime.jsx(LumaDropDownBox, {
        size: sizeVariant,
        isOpen: isOpen,
        items: items,
        getMenuProps: getMenuProps,
        highlightedIndex: highlightedIndex,
        getItemProps: getItemProps,
        renderComponent: jsxRuntime.jsx(RenderContent, {}, void 0),
        itemToString: itemToString,
        variant: variant,
        id: id,
        errorTemplate: errorTemplate
      }, void 0)]
    }), void 0);
  };

  var VARIANT_MAP$5 = {
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
  var DIMENSION_MAP$3 = {
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
  var Root$3 = /*#__PURE__*/styled__default["default"].div.withConfig({
    displayName: "LumaButtonstyles__Root",
    componentId: "sc-1wckznr-0"
  })(templateObject_1$i || (templateObject_1$i = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n  position: relative;\n  ", "\n"], ["\n  display: flex;\n  flex-direction: row;\n  position: relative;\n  ", "\n"])), function (props) {
    var _a;

    return "\n    height: ".concat(DIMENSION_MAP$3[props.size].height, ";\n    width: ").concat(props.fullWidth ? '100%' : DIMENSION_MAP$3[props.size].width, ";\n    z-index: ").concat(((_a = props.dropdown) === null || _a === void 0 ? void 0 : _a.isOpen) ? '3' : 'auto', ";\n  ");
  });
  var Button = /*#__PURE__*/styled__default["default"].button.withConfig({
    displayName: "LumaButtonstyles__Button",
    componentId: "sc-1wckznr-1"
  })(templateObject_2$d || (templateObject_2$d = __makeTemplateObject(["\n  display: flex;\n  flex-direction: ", ";\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  border-radius: 8px;\n  border-style: ", ";\n\n  border-width: 0.0625rem;\n  cursor: pointer;\n  gap: 0.3125rem;\n  &:disabled,\n  &[disabled] {\n    cursor: default;\n  }\n  z-index: ", ";\n  ", "\n"], ["\n  display: flex;\n  flex-direction: ", ";\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  border-radius: 8px;\n  border-style: ", ";\n\n  border-width: 0.0625rem;\n  cursor: pointer;\n  gap: 0.3125rem;\n  &:disabled,\n  &[disabled] {\n    cursor: default;\n  }\n  z-index: ", ";\n  ", "\n"])), function (props) {
    var _a;

    return ((_a = props.icon) === null || _a === void 0 ? void 0 : _a.isOnRight) ? 'row-reverse' : 'row';
  }, function (props) {
    return props.size === 'document_upload' || props.size === 'document_upload_remove' ? 'dashed' : 'solid';
  }, function (props) {
    return props.split ? 1 : 'auto';
  }, function (props) {
    return "\n    font-size: ".concat(DIMENSION_MAP$3[props.size].fontSize, ";\n    font-family: ").concat(VARIANT_MAP$5[props.variant].fontFamily, ";\n    border-bottom-right-radius: ").concat(props.split ? '0' : '', ";\n    border-top-right-radius: ").concat(props.split ? '0' : '', ";\n    width: ").concat(props.split ? '8rem' : '100%', ";\n    padding: ").concat(props.fullWidth ? '' : DIMENSION_MAP$3[props.size].padding, ";\n    background-color: ").concat(VARIANT_MAP$5[props.variant].backgroundColor, ";\n    border-color: ").concat(VARIANT_MAP$5[props.variant].borderColor, ";\n    color: ").concat(VARIANT_MAP$5[props.variant].color, ";\n    &:disabled {\n      background-color: ").concat(VARIANT_MAP$5[props.variant].disabledBackgroundColor, ";\n      border-color: ").concat(VARIANT_MAP$5[props.variant].disabledBorderColor, ";\n      color: ").concat(VARIANT_MAP$5[props.variant].disabledFontColor, ";\n    };\n    &:hover:not([disabled]) {\n      background-color: ").concat(VARIANT_MAP$5[props.variant].hoverBackgroundColor, ";\n      border-color: ").concat(VARIANT_MAP$5[props.variant].hoverBorderColor, ";\n      color: ").concat(VARIANT_MAP$5[props.variant].hoverFontColor, ";\n    };\n    &:active:not([disabled]) {\n      background-color: ").concat(VARIANT_MAP$5[props.variant].pressBackgroundColor, ";\n      color: ").concat(VARIANT_MAP$5[props.variant].pressFontColor, ";\n      border-color: ").concat(VARIANT_MAP$5[props.variant].pressBorderColor, ";\n    };\n  ");
  });
  var Split = /*#__PURE__*/styled__default["default"].button.withConfig({
    displayName: "LumaButtonstyles__Split",
    componentId: "sc-1wckznr-2"
  })(templateObject_3$c || (templateObject_3$c = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 2rem;\n  cursor: pointer;\n  border-style: solid;\n  border-bottom-right-radius: 8px;\n  border-top-right-radius: 8px;\n  &:disabled {\n    cursor: default;\n  }\n  z-index: 1;\n  ", "\n"], ["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 2rem;\n  cursor: pointer;\n  border-style: solid;\n  border-bottom-right-radius: 8px;\n  border-top-right-radius: 8px;\n  &:disabled {\n    cursor: default;\n  }\n  z-index: 1;\n  ", "\n"])), function (props) {
    return "\n    background-color: ".concat(VARIANT_MAP$5[props.variant].backgroundColor, ";\n    border-color: ").concat(VARIANT_MAP$5[props.variant].borderColor, ";\n    border-width: ").concat(VARIANT_MAP$5[props.variant].splitBorderWidth, ";\n    border-left-color: ").concat(LumaColor.NEUTRAL_00_WHITE, ";\n    color: ").concat(VARIANT_MAP$5[props.variant].color, ";\n    &:disabled {\n      background-color: ").concat(VARIANT_MAP$5[props.variant].disabledBackgroundColor, ";\n      border-color: ").concat(VARIANT_MAP$5[props.variant].disabledBorderColor, ";\n      color: ").concat(VARIANT_MAP$5[props.variant].disabledFontColor, ";\n      border-left-color: ").concat(LumaColor.NEUTRAL_00_WHITE, ";\n    };\n    &:hover:not([disabled]) {\n      background-color: ").concat(VARIANT_MAP$5[props.variant].hoverBackgroundColor, ";\n      border-color: ").concat(VARIANT_MAP$5[props.variant].hoverBorderColor, ";\n      border-left-color: ").concat(LumaColor.NEUTRAL_00_WHITE, ";\n    };\n    &:active:not([disabled]) {\n      background-color: ").concat(VARIANT_MAP$5[props.variant].pressBackgroundColor, ";\n      color: ").concat(VARIANT_MAP$5[props.variant].pressFontColor, ";\n      border-color: ").concat(VARIANT_MAP$5[props.variant].pressBorderColor, ";\n      border-left-color: ").concat(LumaColor.NEUTRAL_00_WHITE, ";\n    };\n  ");
  });
  var Xmark = /*#__PURE__*/styled__default["default"].div.withConfig({
    displayName: "LumaButtonstyles__Xmark",
    componentId: "sc-1wckznr-3"
  })(templateObject_4$7 || (templateObject_4$7 = __makeTemplateObject(["\n  position: relative;\n  float: right;\n  margin: 0.063rem 0 0.063rem 2.438rem;  \n}\n"], ["\n  position: relative;\n  float: right;\n  margin: 0.063rem 0 0.063rem 2.438rem;  \n}\n"])));
  var templateObject_1$i, templateObject_2$d, templateObject_3$c, templateObject_4$7;

  var LumaButton = /*#__PURE__*/React.forwardRef(function LumaButton(componentProps, forwardedRef) {
    var _a, _b;

    var children = componentProps.children,
        _c = componentProps.variant,
        variant = _c === void 0 ? 'primary' : _c,
        _d = componentProps.disabled,
        disabled = _d === void 0 ? false : _d,
        icon = componentProps.icon,
        _e = componentProps.size,
        size = _e === void 0 ? 'medium' : _e,
        _f = componentProps.dropdown,
        dropdown = _f === void 0 ? {
      isDropdown: false,
      isOpen: false,
      getToggleButtonProps: function () {
        throw new Error('Function not implemented.');
      }
    } : _f,
        onClick = componentProps.onClick,
        _g = componentProps.split,
        split = _g === void 0 ? false : _g,
        _h = componentProps.disabledSplit,
        disabledSplit = _h === void 0 ? false : _h,
        _j = componentProps.type,
        type = _j === void 0 ? 'button' : _j,
        className = componentProps.className,
        _k = componentProps.fullWidth,
        fullWidth = _k === void 0 ? false : _k,
        xmark = componentProps.xmark,
        _l = componentProps.splitDataTestId,
        splitDataTestId = _l === void 0 ? 'button-luma_split' : _l,
        rest = __rest(componentProps, ["children", "variant", "disabled", "icon", "size", "dropdown", "onClick", "split", "disabledSplit", "type", "className", "fullWidth", "xmark", "splitDataTestId"]);

    var _m = React.useState(false),
        dropdownOpen = _m[0],
        setDropdownOpen = _m[1];

    React.useEffect(function () {
      setDropdownOpen(dropdown.isOpen);
    }, [dropdown.isOpen]);

    var getDropdownPropsButtonIfNeeded = function getDropdownPropsButtonIfNeeded() {
      if (!split && dropdown.isDropdown) {
        return dropdown.getToggleButtonProps();
      }

      return null;
    };

    var getDropdownPropsSplitIfNeeded = function getDropdownPropsSplitIfNeeded() {
      if (split) {
        return dropdown.getToggleButtonProps();
      }

      return null;
    };

    var dropdownPropsButton = (_a = getDropdownPropsButtonIfNeeded()) !== null && _a !== void 0 ? _a : {};
    var dropdownPropsSplit = (_b = getDropdownPropsSplitIfNeeded()) !== null && _b !== void 0 ? _b : {};
    return jsxRuntime.jsxs(Root$3, __assign({
      fullWidth: fullWidth,
      size: size,
      dropdown: dropdown,
      className: className
    }, {
      children: [jsxRuntime.jsxs(Button, __assign({
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
        children: [icon === null || icon === void 0 ? void 0 : icon.iconComponent, children, dropdown.isDropdown && jsxRuntime.jsx(LumaIcon, {
          iconCode: dropdownOpen ? 'angle-up' : 'angle-down'
        }, void 0), xmark && jsxRuntime.jsx(Xmark, {
          children: jsxRuntime.jsx(LumaIcon, {
            iconCode: "xmark"
          }, void 0)
        }, void 0)]
      }), void 0), split && jsxRuntime.jsx(Split, __assign({
        variant: variant,
        disabled: disabledSplit
      }, dropdownPropsSplit, {
        "data-testid": splitDataTestId
      }, {
        children: jsxRuntime.jsx(LumaIcon, {
          iconCode: dropdownOpen ? 'angle-up' : 'angle-down'
        }, void 0)
      }), void 0)]
    }), void 0);
  });

  var Root$2 = /*#__PURE__*/styled__default["default"].div.withConfig({
    displayName: "LumaDropDownstyle__Root",
    componentId: "sc-zth4cn-0"
  })(templateObject_1$h || (templateObject_1$h = __makeTemplateObject(["\n  display: inline-flex;\n  position: relative;\n  ", "\n"], ["\n  display: inline-flex;\n  position: relative;\n  ", "\n"])), function (props) {
    return props.fullWidth ? "display: flex;\n  width: 100%" : '';
  });
  var DropDownItemWrapper = /*#__PURE__*/styled__default["default"].div.withConfig({
    displayName: "LumaDropDownstyle__DropDownItemWrapper",
    componentId: "sc-zth4cn-1"
  })(templateObject_2$c || (templateObject_2$c = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  justify-content: space-between;\n  ", "\n"], ["\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  justify-content: space-between;\n  ", "\n"])), function (props) {
    return props.variant === 'multi' ? "justify-content: left;\n          " : '';
  });
  var DropDownIcon = /*#__PURE__*/styled__default["default"].span.withConfig({
    displayName: "LumaDropDownstyle__DropDownIcon",
    componentId: "sc-zth4cn-2"
  })(templateObject_3$b || (templateObject_3$b = __makeTemplateObject(["\n  font-size: 0.75rem;\n  color: ", ";\n  ", "\n"], ["\n  font-size: 0.75rem;\n  color: ", ";\n  ", "\n"])), LumaColor.NEUTRAL_80, function (props) {
    return props.isSelected ? "font-weight: bold;\n          " : '';
  });
  var StyledCheckbox$1 = /*#__PURE__*/styled__default["default"].div.withConfig({
    displayName: "LumaDropDownstyle__StyledCheckbox",
    componentId: "sc-zth4cn-3"
  })(templateObject_6$3 || (templateObject_6$3 = __makeTemplateObject(["\n  min-width: 1rem;\n  height: 1rem;\n  font-size: 0.75rem;\n  background-color: ", ";\n  border-radius: 3px;\n  border-style: solid;\n  border-width: 1px;\n  border-color: ", ";\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  margin-right: 0.5rem;\n\n  ", "\n\n  ", "\n\n  &:active:not([disabled]),\n  ", ":hover:not([disabled]) & {\n    border-color: ", ";\n  } ;\n"], ["\n  min-width: 1rem;\n  height: 1rem;\n  font-size: 0.75rem;\n  background-color: ", ";\n  border-radius: 3px;\n  border-style: solid;\n  border-width: 1px;\n  border-color: ", ";\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  margin-right: 0.5rem;\n\n  ", "\n\n  ", "\n\n  &:active:not([disabled]),\n  ", ":hover:not([disabled]) & {\n    border-color: ", ";\n  } ;\n"])), LumaColor.NEUTRAL_00_WHITE, LumaColor.NEUTRAL_40, function (props) {
    return props.disabled && styled.css(templateObject_4$6 || (templateObject_4$6 = __makeTemplateObject(["\n      background-color: ", ";\n    "], ["\n      background-color: ", ";\n    "])), LumaColor.NEUTRAL_20);
  }, function (props) {
    return props.isChecked && styled.css(templateObject_5$4 || (templateObject_5$4 = __makeTemplateObject(["\n      background-color: ", ";\n    "], ["\n      background-color: ", ";\n    "])), LumaColor.NEUTRAL_40);
  }, DropDownItemWrapper, LumaColor.NEUTRAL_50);
  var DropDownText = /*#__PURE__*/styled__default["default"].span.withConfig({
    displayName: "LumaDropDownstyle__DropDownText",
    componentId: "sc-zth4cn-4"
  })(templateObject_7$3 || (templateObject_7$3 = __makeTemplateObject(["\n  font-family: ", ";\n  font-size: 0.75rem;\n  font-weight: normal;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n\n  &:hover {\n    color: ", ";\n  }\n  ", "\n  ", "\n"], ["\n  font-family: ", ";\n  font-size: 0.75rem;\n  font-weight: normal;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n\n  &:hover {\n    color: ", ";\n  }\n  ", "\n  ", "\n"])), LumaFont.DEFAULT.REGULAR, LumaColor.NEUTRAL_60, function (props) {
    return props.isSelected ? "font-family: ".concat(LumaFont.DEFAULT.BOLD, ";\n  ") : '';
  }, function (props) {
    return props.disabled ? "color: ".concat(LumaColor.NEUTRAL_60, "; cursor: not-allowed;\n  ") : '';
  });
  var templateObject_1$h, templateObject_2$c, templateObject_3$b, templateObject_4$6, templateObject_5$4, templateObject_6$3, templateObject_7$3;

  var LumaSingleDropDownOption = function LumaSingleDropDownOption(_a) {
    var _b = _a.item,
        item = _b === void 0 ? {} : _b,
        isSelected = _a.isSelected;
    return jsxRuntime.jsxs(DropDownItemWrapper, __assign({
      variant: "single"
    }, {
      children: [jsxRuntime.jsx(DropDownText, __assign({
        disabled: item.isDisabled,
        isSelected: isSelected,
        className: "DropDownText"
      }, {
        children: item.label
      }), void 0), item.iconCode !== undefined && jsxRuntime.jsx(DropDownIcon, __assign({
        isSelected: true
      }, {
        children: jsxRuntime.jsx(LumaIcon, {
          type: isSelected ? 'solid' : 'regular',
          iconCode: item.iconCode
        }, void 0)
      }), void 0)]
    }), void 0);
  };

  var Root$1 = /*#__PURE__*/styled__default["default"].div.withConfig({
    displayName: "LumaButtonDropdownstyle__Root",
    componentId: "sc-1xe01r0-0"
  })(templateObject_1$g || (templateObject_1$g = __makeTemplateObject(["\n  position: relative;\n  width: 100%;\n"], ["\n  position: relative;\n  width: 100%;\n"])));
  var templateObject_1$g;

  var LumaButtonDropdown = function LumaButtonDropdown(_a) {
    var id = _a.id,
        dropdownItems = _a.dropdownItems,
        onChangeDropdown = _a.onChangeDropdown,
        _b = _a.dropdownPosition,
        dropdownPosition = _b === void 0 ? 'bottom' : _b,
        rest = __rest(_a, ["id", "dropdownItems", "onChangeDropdown", "dropdownPosition"]);

    var _c = downshift.useSelect({
      items: dropdownItems || [],
      itemToString: function (item) {
        var _a;

        return (_a = item === null || item === void 0 ? void 0 : item.label) !== null && _a !== void 0 ? _a : '';
      },
      onSelectedItemChange: function (_a) {
        var selectedItem = _a.selectedItem;
        onChangeDropdown === null || onChangeDropdown === void 0 ? void 0 : onChangeDropdown(selectedItem !== null && selectedItem !== void 0 ? selectedItem : null);
      }
    }),
        isOpen = _c.isOpen,
        getMenuProps = _c.getMenuProps,
        getItemProps = _c.getItemProps,
        highlightedIndex = _c.highlightedIndex,
        getToggleButtonProps = _c.getToggleButtonProps;

    var split = rest.split;
        rest.fullWidth;
        var restProps = __rest(rest, ["split", "fullWidth"]);

    return jsxRuntime.jsxs(Root$1, {
      children: [jsxRuntime.jsx(LumaButton, __assign({
        dropdown: {
          isDropdown: !split,
          isOpen: isOpen,
          getToggleButtonProps: getToggleButtonProps
        },
        split: split,
        fullWidth: true
      }, restProps), void 0), jsxRuntime.jsx(LumaDropDownBox, {
        size: split ? "".concat(dropdownPosition) : 'medium',
        variant: split ? "no-border-".concat(dropdownPosition) : 'standard',
        isOpen: isOpen,
        items: dropdownItems || [],
        getMenuProps: getMenuProps,
        highlightedIndex: highlightedIndex,
        getItemProps: getItemProps,
        renderComponent: jsxRuntime.jsx(LumaSingleDropDownOption, {}, void 0),
        itemToString: function (item) {
          var _a;

          return (_a = item === null || item === void 0 ? void 0 : item.label) !== null && _a !== void 0 ? _a : '';
        },
        id: id
      }, void 0)]
    }, void 0);
  };

  var CloseButton = /*#__PURE__*/styled__default["default"].button.withConfig({
    displayName: "LumaModalstyles__CloseButton",
    componentId: "sc-1oqzoqe-0"
  })(templateObject_1$f || (templateObject_1$f = __makeTemplateObject(["\n  border: 0 transparent;\n  background: transparent;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  margin-left: auto;\n  position: absolute;\n  top: 1.25rem;\n  right: 1.25rem;\n  color: ", ";\n"], ["\n  border: 0 transparent;\n  background: transparent;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  margin-left: auto;\n  position: absolute;\n  top: 1.25rem;\n  right: 1.25rem;\n  color: ", ";\n"])), LumaColor.NEUTRAL_80);
  var templateObject_1$f;

  function LumaModal(_a) {
    var children = _a.children,
        isOpen = _a.isOpen,
        appElement = _a.appElement,
        onAfterOpen = _a.onAfterOpen,
        onAfterClose = _a.onAfterClose,
        style = _a.style,
        _b = _a.closeButton,
        closeButton = _b === void 0 ? {
      show: false,
      handleClose: function () {
        throw new Error('Function not implemented.');
      }
    } : _b;
    var customStyles = {
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

    style.content = __assign(__assign({}, customStyles.content), style.content);
    style.overlay = __assign(__assign({}, customStyles.overlay), style.overlay);
    ReactModal__default["default"].setAppElement(appElement);
    return jsxRuntime.jsxs(ReactModal__default["default"], __assign({
      isOpen: isOpen,
      onAfterOpen: onAfterOpen,
      onAfterClose: onAfterClose,
      style: style
    }, {
      children: [closeButton.show && jsxRuntime.jsx(CloseButton, __assign({
        "data-testid": "modal-close"
      }, {
        children: jsxRuntime.jsx(LumaIcon, {
          iconCode: "times",
          onClick: closeButton.handleClose
        }, void 0)
      }), void 0), children]
    }), void 0);
  }

  var VARIANT_MAP$4 = {
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
  var CheckboxContainer = /*#__PURE__*/styled__default["default"].label.withConfig({
    displayName: "LumaCheckboxstyle__CheckboxContainer",
    componentId: "sc-nnwd0h-0"
  })(templateObject_2$b || (templateObject_2$b = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.75rem;\n  font-family: ", ";\n  cursor: ", ";\n  color: ", ";\n  &:hover:not([disabled]) {\n    color: ", ";\n  }\n  ", "\n"], ["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.75rem;\n  font-family: ", ";\n  cursor: ", ";\n  color: ", ";\n  &:hover:not([disabled]) {\n    color: ", ";\n  }\n  ", "\n"])), LumaFont.DEFAULT.REGULAR, VARIANT_MAP$4['default'].cursor, VARIANT_MAP$4['default'].textColor, VARIANT_MAP$4['hover'].textColor, function (props) {
    return props.disabled && styled.css(templateObject_1$e || (templateObject_1$e = __makeTemplateObject(["\n      color: ", ";\n      cursor: ", ";\n    "], ["\n      color: ", ";\n      cursor: ", ";\n    "])), VARIANT_MAP$4['disabled'].textColor, VARIANT_MAP$4['disabled'].cursor);
  });
  var HiddenCheckbox = /*#__PURE__*/styled__default["default"].input.attrs({
    type: 'checkbox'
  }).withConfig({
    displayName: "LumaCheckboxstyle__HiddenCheckbox",
    componentId: "sc-nnwd0h-1"
  })(templateObject_3$a || (templateObject_3$a = __makeTemplateObject(["\n  clip: rect(0 0 0 0);\n  height: 1px;\n  overflow: hidden;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n"], ["\n  clip: rect(0 0 0 0);\n  height: 1px;\n  overflow: hidden;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n"])));
  var StyledCheckbox = /*#__PURE__*/styled__default["default"].div.withConfig({
    displayName: "LumaCheckboxstyle__StyledCheckbox",
    componentId: "sc-nnwd0h-2"
  })(templateObject_4$5 || (templateObject_4$5 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  max-width: 1rem;\n  min-width: 1rem;\n  height: 1rem;\n  font-size: 0.75rem;\n  background-color: ", ";\n  border: 1px solid ", ";\n  border-radius: 3px;\n  border-color: ", ";\n  color: ", ";\n  ", "\n"], ["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  max-width: 1rem;\n  min-width: 1rem;\n  height: 1rem;\n  font-size: 0.75rem;\n  background-color: ", ";\n  border: 1px solid ", ";\n  border-radius: 3px;\n  border-color: ", ";\n  color: ", ";\n  ", "\n"])), VARIANT_MAP$4['default'].backgroundColor, VARIANT_MAP$4['default'].borderColor, function (props) {
    return props.disabled ? VARIANT_MAP$4['disabled'].borderColor : VARIANT_MAP$4['default'].borderColor;
  }, VARIANT_MAP$4['default'].textColor, function (props) {
    return "\n    ".concat(props.checked && "background-color: ".concat(VARIANT_MAP$4['checkedNotDisabled'].backgroundColor, ";"), "\n    ").concat(props.disabled && props.checked && "\n      border-color: ".concat(VARIANT_MAP$4['checkedAndDisabled'].borderColor, ";\n      background-color: ").concat(VARIANT_MAP$4['checkedAndDisabled'].backgroundColor, ";\n      color: ").concat(VARIANT_MAP$4['checkedAndDisabled'].textColor, ";"), "\n  ");
  });
  var templateObject_1$e, templateObject_2$b, templateObject_3$a, templateObject_4$5;

  var LumaCheckbox = function LumaCheckbox(_a) {
    var label = _a.label,
        _b = _a.disabled,
        disabled = _b === void 0 ? false : _b,
        _c = _a.checked,
        checked = _c === void 0 ? false : _c,
        checkboxKey = _a.checkboxKey,
        onChange = _a.onChange,
        rest = __rest(_a, ["label", "disabled", "checked", "checkboxKey", "onChange"]);

    return jsxRuntime.jsxs(CheckboxContainer, __assign({
      disabled: disabled,
      checked: checked,
      htmlFor: "checkbox ".concat(checkboxKey)
    }, {
      children: [jsxRuntime.jsx(HiddenCheckbox, __assign({
        type: "checkbox",
        checked: checked,
        onChange: onChange,
        disabled: disabled,
        id: "checkbox ".concat(checkboxKey)
      }, rest), checkboxKey), jsxRuntime.jsx(StyledCheckbox, __assign({
        checked: checked,
        disabled: disabled
      }, {
        children: checked && jsxRuntime.jsx(LumaIcon, {
          iconCode: 'check'
        }, void 0)
      }), void 0), label]
    }), checkboxKey);
  };

  var DIMENSION_MAP$2 = {
    small: {
      width: '4',
      height: '2rem'
    },
    x_small: {
      width: '3.5',
      height: '1.75rem'
    }
  };
  var IconSwitchContainer = /*#__PURE__*/styled__default["default"].label.withConfig({
    displayName: "LumaIconSwitchstyle__IconSwitchContainer",
    componentId: "sc-1uqx7hs-0"
  })(templateObject_1$d || (templateObject_1$d = __makeTemplateObject(["\n  display: flex;\n  position: relative;\n  align-items: center;\n  padding: 0;\n  margin: 0;\n  border-radius: 8px;\n  border: 1px solid\n    ", ";\n  color: ", ";\n  ", "\n  cursor: ", ";\n"], ["\n  display: flex;\n  position: relative;\n  align-items: center;\n  padding: 0;\n  margin: 0;\n  border-radius: 8px;\n  border: 1px solid\n    ", ";\n  color: ", ";\n  ", "\n  cursor: ", ";\n"])), function (props) {
    return props.disabled ? LumaColor.NEUTRAL_20 : LumaColor.NEUTRAL_40;
  }, function (props) {
    return props.disabled ? LumaColor.NEUTRAL_40 : LumaColor.NEUTRAL_80;
  }, function (props) {
    return "\n    width: ".concat(DIMENSION_MAP$2[props.sizeVariant].width, "rem;\n    height: ").concat(DIMENSION_MAP$2[props.sizeVariant].height, ";\n  ");
  }, function (props) {
    return props.disabled ? 'default' : 'pointer';
  });
  var IconSwitchItem = /*#__PURE__*/styled__default["default"].div.withConfig({
    displayName: "LumaIconSwitchstyle__IconSwitchItem",
    componentId: "sc-1uqx7hs-1"
  })(templateObject_2$a || (templateObject_2$a = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  padding: 0;\n  margin: 0;\n  width: 100%;\n  ", "\n  label:first-child {\n    margin-left: 0.125rem;\n  }\n"], ["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  padding: 0;\n  margin: 0;\n  width: 100%;\n  ", "\n  label:first-child {\n    margin-left: 0.125rem;\n  }\n"])), function (props) {
    return "\n    height: ".concat(DIMENSION_MAP$2[props.sizeVariant].height, ";\n  ");
  });
  var Input$2 = /*#__PURE__*/styled__default["default"].input.withConfig({
    displayName: "LumaIconSwitchstyle__Input",
    componentId: "sc-1uqx7hs-2"
  })(templateObject_3$9 || (templateObject_3$9 = __makeTemplateObject(["\n  display: flex;\n  position: absolute;\n  overflow: hidden;\n  clip: rect(0 0 0 0);\n  padding: 0;\n  border: 0;\n  margin: 0;\n"], ["\n  display: flex;\n  position: absolute;\n  overflow: hidden;\n  clip: rect(0 0 0 0);\n  padding: 0;\n  border: 0;\n  margin: 0;\n"])));
  var Label$1 = /*#__PURE__*/styled__default["default"].label.withConfig({
    displayName: "LumaIconSwitchstyle__Label",
    componentId: "sc-1uqx7hs-3"
  })(templateObject_4$4 || (templateObject_4$4 = __makeTemplateObject(["\n  display: flex;\n  position: relative;\n  z-index: 2;\n  height: 100%;\n  align-items: center;\n  font-size: 0.75rem;\n  user-select: none;\n  transition: all 0.3s;\n  cursor: ", ";\n"], ["\n  display: flex;\n  position: relative;\n  z-index: 2;\n  height: 100%;\n  align-items: center;\n  font-size: 0.75rem;\n  user-select: none;\n  transition: all 0.3s;\n  cursor: ", ";\n"])), function (props) {
    return props.disabled ? 'default' : 'pointer';
  });
  var Marker = /*#__PURE__*/styled__default["default"].div.withConfig({
    displayName: "LumaIconSwitchstyle__Marker",
    componentId: "sc-1uqx7hs-4"
  })(templateObject_5$3 || (templateObject_5$3 = __makeTemplateObject(["\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  border-radius: 8px;\n  height: 100%;\n  left: 100%;\n  transition: transform 0.3s;\n  background-color: ", ";\n  ", ":checked ~ & {\n    transform: translateX(-100%);\n  }\n  ", "\n"], ["\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  border-radius: 8px;\n  height: 100%;\n  left: 100%;\n  transition: transform 0.3s;\n  background-color: ", ";\n  ", ":checked ~ & {\n    transform: translateX(-100%);\n  }\n  ", "\n"])), function (props) {
    return props.disabled ? LumaColor.NEUTRAL_20 : LumaColor.NEUTRAL_40;
  }, Input$2, function (props) {
    return "\n    width: ".concat(+DIMENSION_MAP$2[props.sizeVariant].width / 2, "rem;\n    height: ").concat(DIMENSION_MAP$2[props.sizeVariant].height, ";\n  ");
  });
  var templateObject_1$d, templateObject_2$a, templateObject_3$9, templateObject_4$4, templateObject_5$3;

  var LumaIconSwitch = function LumaIconSwitch(_a) {
    var icons = _a.icons,
        sizeVariant = _a.sizeVariant,
        checked = _a.checked,
        _b = _a.disabled,
        disabled = _b === void 0 ? false : _b,
        onChange = _a.onChange;
    return jsxRuntime.jsxs(IconSwitchContainer, __assign({
      disabled: disabled,
      sizeVariant: sizeVariant
    }, {
      children: [jsxRuntime.jsxs(IconSwitchItem, __assign({
        sizeVariant: sizeVariant
      }, {
        children: [jsxRuntime.jsx(Input$2, {
          type: "checkbox",
          checked: !checked,
          onChange: onChange,
          disabled: disabled,
          id: "checkbox"
        }, void 0), jsxRuntime.jsx(Label$1, __assign({
          disabled: disabled,
          htmlFor: "checkbox"
        }, {
          children: jsxRuntime.jsx(LumaIcon, {
            iconCode: icons.left,
            type: !checked ? 'solid' : 'light'
          }, void 0)
        }), void 0), jsxRuntime.jsx(Marker, {
          sizeVariant: sizeVariant,
          disabled: disabled
        }, void 0)]
      }), void 0), jsxRuntime.jsx(IconSwitchItem, __assign({
        sizeVariant: sizeVariant
      }, {
        children: jsxRuntime.jsx(Label$1, __assign({
          disabled: disabled,
          htmlFor: "checkbox"
        }, {
          children: jsxRuntime.jsx(LumaIcon, {
            iconCode: icons.right,
            type: checked ? 'solid' : 'light'
          }, void 0)
        }), void 0)
      }), void 0)]
    }), void 0);
  };

  var ToggleSwitchContainer = /*#__PURE__*/styled__default["default"].label.withConfig({
    displayName: "LumaToggleSwitchstyle__ToggleSwitchContainer",
    componentId: "sc-3vtyra-0"
  })(templateObject_1$c || (templateObject_1$c = __makeTemplateObject(["\n  display: flex;\n  width: fit-content;\n  font-family: ", ";\n  font-size: 0.6875rem;\n  ", "\n"], ["\n  display: flex;\n  width: fit-content;\n  font-family: ", ";\n  font-size: 0.6875rem;\n  ", "\n"])), LumaFont.DEFAULT.LIGHT, function (props) {
    return "\n    gap: ".concat(props.label.position === 'side' ? '0.5rem' : '0.625rem', ";\n    align-items: ").concat(props.label.position === 'side' ? 'center' : 'flex-start', ";\n    flex-direction: ").concat(props.label.position === 'side' ? 'row-reverse' : 'column', ";\n    cursor: ").concat(props.disabled ? 'default' : 'pointer', ";\n    ").concat(props.checked && !props.disabled && "color: ".concat(LumaColor.NEUTRAL_80, ";"), ";\n    ").concat(!props.checked && !props.disabled && "color: ".concat(LumaColor.NEUTRAL_60, ";"), ";\n    ").concat(props.disabled && "color: ".concat(LumaColor.NEUTRAL_40, ";"), ";\n  ");
  });
  var Switch = /*#__PURE__*/styled__default["default"].div.withConfig({
    displayName: "LumaToggleSwitchstyle__Switch",
    componentId: "sc-3vtyra-1"
  })(templateObject_2$9 || (templateObject_2$9 = __makeTemplateObject(["\n  position: relative;\n  width: 3rem;\n  height: 1.5rem;\n  border-radius: 8px;\n  transition: 300ms all;\n  background: ", ";\n  &:before {\n    content: '';\n    position: absolute;\n    height: 1rem;\n    width: 1rem;\n    border-radius: 6px;\n    top: 0.25rem;\n    left: 0.3125rem;\n    background: ", ";\n  }\n"], ["\n  position: relative;\n  width: 3rem;\n  height: 1.5rem;\n  border-radius: 8px;\n  transition: 300ms all;\n  background: ", ";\n  &:before {\n    content: '';\n    position: absolute;\n    height: 1rem;\n    width: 1rem;\n    border-radius: 6px;\n    top: 0.25rem;\n    left: 0.3125rem;\n    background: ", ";\n  }\n"])), function (props) {
    return props.disabled ? LumaColor.NEUTRAL_20 : LumaColor.NEUTRAL_40;
  }, function (props) {
    return props.disabled ? LumaColor.NEUTRAL_40 : LumaColor.NEUTRAL_00_WHITE;
  });
  var Input$1 = /*#__PURE__*/styled__default["default"].input.withConfig({
    displayName: "LumaToggleSwitchstyle__Input",
    componentId: "sc-3vtyra-2"
  })(templateObject_3$8 || (templateObject_3$8 = __makeTemplateObject(["\n  position: absolute;\n  opacity: 0;\n  &:checked + ", " {\n    background: ", ";\n    &:before {\n      content: '';\n      display: block;\n      left: 1.75rem;\n      transition: 0.2s;\n    }\n  }\n"], ["\n  position: absolute;\n  opacity: 0;\n  &:checked + ", " {\n    background: ", ";\n    &:before {\n      content: '';\n      display: block;\n      left: 1.75rem;\n      transition: 0.2s;\n    }\n  }\n"])), Switch, function (props) {
    return props.disabled ? LumaColor.NEUTRAL_20 : LumaColor.NEUTRAL_80;
  });
  var templateObject_1$c, templateObject_2$9, templateObject_3$8;

  var LumaToggleSwitch = function LumaToggleSwitch(_a) {
    var label = _a.label,
        _b = _a.checked,
        checked = _b === void 0 ? false : _b,
        _c = _a.disabled,
        disabled = _c === void 0 ? false : _c,
        onChange = _a.onChange;
    return jsxRuntime.jsxs(ToggleSwitchContainer, __assign({
      checked: checked,
      label: label,
      disabled: disabled,
      "data-testid": "toggle-test-id"
    }, {
      children: [jsxRuntime.jsx("span", {
        children: checked ? label.textChecked : label.textUnchecked
      }, void 0), jsxRuntime.jsx(Input$1, {
        type: "checkbox",
        checked: checked,
        onChange: onChange,
        disabled: disabled
      }, void 0), jsxRuntime.jsx(Switch, {
        disabled: disabled
      }, void 0)]
    }), void 0);
  };

  var VARIANT_MAP$3 = {
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
  var RadioContainer = /*#__PURE__*/styled__default["default"].label.withConfig({
    displayName: "LumaRadiostyles__RadioContainer",
    componentId: "sc-1okpir3-0"
  })(templateObject_2$8 || (templateObject_2$8 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.75rem;\n  font-family: ", ";\n  color: ", ";\n  ", "\n  &:hover:not([disabled]) {\n    color: ", ";\n    cursor: pointer;\n  } ;\n"], ["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.75rem;\n  font-family: ", ";\n  color: ", ";\n  ", "\n  &:hover:not([disabled]) {\n    color: ", ";\n    cursor: pointer;\n  } ;\n"])), LumaFont.DEFAULT.REGULAR, VARIANT_MAP$3['default'].textColor, function (props) {
    return props.disabled && styled.css(templateObject_1$b || (templateObject_1$b = __makeTemplateObject(["\n      color: ", ";\n    "], ["\n      color: ", ";\n    "])), VARIANT_MAP$3['disabled'].textColor);
  }, VARIANT_MAP$3['hover'].textColor);
  var HiddenRadio = /*#__PURE__*/styled__default["default"].input.attrs({
    type: 'radio'
  }).withConfig({
    displayName: "LumaRadiostyles__HiddenRadio",
    componentId: "sc-1okpir3-1"
  })(templateObject_3$7 || (templateObject_3$7 = __makeTemplateObject(["\n  clip: rect(0 0 0 0);\n  height: 1px;\n  overflow: hidden;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n"], ["\n  clip: rect(0 0 0 0);\n  height: 1px;\n  overflow: hidden;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n"])));
  var StyledRadio = /*#__PURE__*/styled__default["default"].div.withConfig({
    displayName: "LumaRadiostyles__StyledRadio",
    componentId: "sc-1okpir3-2"
  })(templateObject_7$2 || (templateObject_7$2 = __makeTemplateObject(["\n  width: 1rem;\n  height: 1rem;\n  background-color: ", ";\n  border: 1px solid ", ";\n  border-radius: 50%;\n  ", "\n  ", "\n  ", "\n"], ["\n  width: 1rem;\n  height: 1rem;\n  background-color: ", ";\n  border: 1px solid ", ";\n  border-radius: 50%;\n  ", "\n  ", "\n  ", "\n"])), VARIANT_MAP$3['default'].backgroundColor, VARIANT_MAP$3['default'].borderColor, function (props) {
    return props.disabled && styled.css(templateObject_4$3 || (templateObject_4$3 = __makeTemplateObject(["\n      background-color: ", ";\n      border-color: ", ";\n    "], ["\n      background-color: ", ";\n      border-color: ", ";\n    "])), VARIANT_MAP$3['disabled'].backgroundColor, VARIANT_MAP$3['disabled'].borderColor);
  }, function (props) {
    return props.disabled && props.checked && styled.css(templateObject_5$2 || (templateObject_5$2 = __makeTemplateObject(["\n      background-color: ", ";\n      border-color: ", ";\n      border-width: 4px;\n    "], ["\n      background-color: ", ";\n      border-color: ", ";\n      border-width: 4px;\n    "])), VARIANT_MAP$3['checkedAndDisabled'].backgroundColor, VARIANT_MAP$3['checkedAndDisabled'].borderColor);
  }, function (props) {
    return props.checked && !props.disabled && styled.css(templateObject_6$2 || (templateObject_6$2 = __makeTemplateObject(["\n      background-color: ", ";\n      border-color: ", ";\n      border-width: 4px;\n    "], ["\n      background-color: ", ";\n      border-color: ", ";\n      border-width: 4px;\n    "])), VARIANT_MAP$3['checkedNotDisabled'].backgroundColor, VARIANT_MAP$3['checkedNotDisabled'].borderColor);
  });
  var templateObject_1$b, templateObject_2$8, templateObject_3$7, templateObject_4$3, templateObject_5$2, templateObject_6$2, templateObject_7$2;

  var LumaRadio = function LumaRadio(_a) {
    var label = _a.label,
        _b = _a.disabled,
        disabled = _b === void 0 ? false : _b,
        _c = _a.checked,
        checked = _c === void 0 ? false : _c,
        onChange = _a.onChange,
        _d = _a.value,
        value = _d === void 0 ? 'radio' : _d,
        rest = __rest(_a, ["label", "disabled", "checked", "onChange", "value"]);

    return jsxRuntime.jsxs(RadioContainer, __assign({
      disabled: disabled,
      checked: checked
    }, {
      children: [jsxRuntime.jsx(HiddenRadio, __assign({
        checked: checked,
        onChange: onChange,
        disabled: disabled,
        value: value
      }, rest), void 0), jsxRuntime.jsx(StyledRadio, {
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
  var fails = fails$h;
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

  var VARIANT_MAP$2 = {
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
  var DIMENSION_MAP$1 = {
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
  var ChipContainer = /*#__PURE__*/styled__default["default"].div.withConfig({
    displayName: "LumaChipstyles__ChipContainer",
    componentId: "sc-1mbzdrn-0"
  })(templateObject_1$a || (templateObject_1$a = __makeTemplateObject(["\n  display: flex;\n  font-family: ", ";\n  font-weight: 500;\n  gap: 0.375rem;\n  flex-direction: ", ";\n  align-items: ", ";\n"], ["\n  display: flex;\n  font-family: ", ";\n  font-weight: 500;\n  gap: 0.375rem;\n  flex-direction: ", ";\n  align-items: ", ";\n"])), LumaFont.DEFAULT.REGULAR, function (props) {
    var _a;

    return ((_a = props.error) === null || _a === void 0 ? void 0 : _a.position) === 'side' ? 'row' : 'column';
  }, function (props) {
    var _a;

    return ((_a = props.error) === null || _a === void 0 ? void 0 : _a.position) === 'side' ? 'center' : 'flex-start';
  });
  var Chip = /*#__PURE__*/styled__default["default"].div.withConfig({
    displayName: "LumaChipstyles__Chip",
    componentId: "sc-1mbzdrn-1"
  })(templateObject_2$7 || (templateObject_2$7 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  ", "\n"], ["\n  display: flex;\n  align-items: center;\n  ", "\n"])), function (props) {
    return "\n    height: ".concat(DIMENSION_MAP$1[props.sizeVariant].height, ";\n    fontSize: ").concat(DIMENSION_MAP$1[props.sizeVariant].fontSize, ";\n  ");
  });
  var LabelPart = /*#__PURE__*/styled__default["default"].div.withConfig({
    displayName: "LumaChipstyles__LabelPart",
    componentId: "sc-1mbzdrn-2"
  })(templateObject_3$6 || (templateObject_3$6 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  border-style: solid;\n  cursor: default;\n  gap: 0.25rem;\n  ", "\n"], ["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  border-style: solid;\n  cursor: default;\n  gap: 0.25rem;\n  ", "\n"])), function (props) {
    return "\n    border-radius: ".concat(props.entry ? '8px 0 0 8px' : '8px', ";\n    border-width: ").concat(DIMENSION_MAP$1[props.sizeVariant].borderWidth, ";\n    padding: ").concat(DIMENSION_MAP$1[props.sizeVariant].padding, ";\n    border-color: ").concat(VARIANT_MAP$2[props.variant].borderColor, ";\n    background-color: ").concat(VARIANT_MAP$2[props.variant].backgroundColor, ";\n    font-size: ").concat(DIMENSION_MAP$1[props.sizeVariant].fontSize, ";\n    color: ").concat(VARIANT_MAP$2[props.variant].color, ";\n  ");
  });
  var RemoveIcon = /*#__PURE__*/styled__default["default"].div.withConfig({
    displayName: "LumaChipstyles__RemoveIcon",
    componentId: "sc-1mbzdrn-3"
  })(templateObject_4$2 || (templateObject_4$2 = __makeTemplateObject(["\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.6875rem;\n  font-weight: bold;\n  cursor: pointer;\n"], ["\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.6875rem;\n  font-weight: bold;\n  cursor: pointer;\n"])));
  var EntryPart = /*#__PURE__*/styled__default["default"].label.withConfig({
    displayName: "LumaChipstyles__EntryPart",
    componentId: "sc-1mbzdrn-4"
  })(templateObject_5$1 || (templateObject_5$1 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  min-width: 3rem;\n  background-color: white;\n  border-radius: 0 8px 8px 0;\n  border-style: solid;\n  border-left: none;\n  padding: 0;\n  ", "\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  min-width: 3rem;\n  background-color: white;\n  border-radius: 0 8px 8px 0;\n  border-style: solid;\n  border-left: none;\n  padding: 0;\n  ", "\n"])), function (props) {
    var _a;

    return "\n    cursor: ".concat(props.state === 'locked' ? 'default' : 'text', ";\n    border-width: ").concat(DIMENSION_MAP$1[props.sizeVariant].borderWidth, ";\n    border-color: ").concat(VARIANT_MAP$2[props.variant].borderColor, ";\n    color: ").concat(((_a = props.error) === null || _a === void 0 ? void 0 : _a.hasError) ? LumaColor.NEGATIVE_60 : LumaColor.NEUTRAL_80, ";\n    ").concat(props.disabled && "\n        color: ".concat(LumaColor.NEUTRAL_40, ";\n        cursor: default;\n      "), "\n  ");
  });
  var Input = /*#__PURE__*/styled__default["default"].input.withConfig({
    displayName: "LumaChipstyles__Input",
    componentId: "sc-1mbzdrn-5"
  })(templateObject_6$1 || (templateObject_6$1 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  height: 100%;\n  background: transparent;\n  outline: 0;\n  border: none;\n  padding: 0;\n  text-align: right;\n  color: inherit;\n  cursor: inherit;\n  font-family: inherit;\n  &:focus {\n    outline: none;\n  }\n\n  ::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n\n  ::-webkit-outer-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n\n  ", "\n"], ["\n  display: flex;\n  align-items: center;\n  height: 100%;\n  background: transparent;\n  outline: 0;\n  border: none;\n  padding: 0;\n  text-align: right;\n  color: inherit;\n  cursor: inherit;\n  font-family: inherit;\n  &:focus {\n    outline: none;\n  }\n\n  ::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n\n  ::-webkit-outer-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n\n  ", "\n"])), function (props) {
    return "\n    font-size: ".concat(DIMENSION_MAP$1[props.sizeVariant].fontSize, ";\n  ");
  });
  var Unit = /*#__PURE__*/styled__default["default"].label.withConfig({
    displayName: "LumaChipstyles__Unit",
    componentId: "sc-1mbzdrn-6"
  })(templateObject_7$1 || (templateObject_7$1 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  height: 100%;\n  width: 1rem;\n  cursor: inherit;\n  ", "\n"], ["\n  display: flex;\n  align-items: center;\n  height: 100%;\n  width: 1rem;\n  cursor: inherit;\n  ", "\n"])), function (props) {
    return "\n    font-size: ".concat(DIMENSION_MAP$1[props.sizeVariant].fontSize, ";\n  ");
  });
  var ErrorMessage = /*#__PURE__*/styled__default["default"].div.withConfig({
    displayName: "LumaChipstyles__ErrorMessage",
    componentId: "sc-1mbzdrn-7"
  })(templateObject_8$1 || (templateObject_8$1 = __makeTemplateObject(["\n  color: ", ";\n"], ["\n  color: ", ";\n"])), LumaColor.NEGATIVE_60);
  var Icon = /*#__PURE__*/styled__default["default"].div.withConfig({
    displayName: "LumaChipstyles__Icon",
    componentId: "sc-1mbzdrn-8"
  })(templateObject_9$1 || (templateObject_9$1 = __makeTemplateObject(["\n  font-size: 0.375rem;\n"], ["\n  font-size: 0.375rem;\n"])));
  var templateObject_1$a, templateObject_2$7, templateObject_3$6, templateObject_4$2, templateObject_5$1, templateObject_6$1, templateObject_7$1, templateObject_8$1, templateObject_9$1;

  var LumaChip = function LumaChip(_a) {
    var children = _a.children,
        _b = _a.variant,
        variant = _b === void 0 ? 'primary' : _b,
        _c = _a.state,
        state = _c === void 0 ? "locked"
    /* locked */
    : _c,
        _d = _a.disabled,
        disabled = _d === void 0 ? false : _d,
        _e = _a.sizeVariant,
        sizeVariant = _e === void 0 ? 'regular' : _e,
        _f = _a.entry,
        entry = _f === void 0 ? false : _f,
        iconCode = _a.iconCode,
        onRemove = _a.onRemove,
        onChange = _a.onChange,
        onBlur = _a.onBlur,
        value = _a.value,
        _g = _a.unit,
        unit = _g === void 0 ? '%' : _g,
        _h = _a.error,
        error = _h === void 0 ? {
      hasError: false
    } : _h,
        _j = _a.entryMaxLength,
        entryMaxLength = _j === void 0 ? 3 : _j;

    var _k = React.useState(''),
        inputValue = _k[0],
        setInputValue = _k[1];

    React.useEffect(function () {
      var _a;

      setInputValue((_a = value === null || value === void 0 ? void 0 : value.toString()) !== null && _a !== void 0 ? _a : '');
    }, [value]);

    var handleChange = function handleChange(e) {
      var inputValue = e.target.value;
      var inputPatternRegex = /^[0-9\b]+$/;

      if (inputValue === '' || inputPatternRegex.test(inputValue)) {
        setInputValue(inputValue);

        if (onChange) {
          onChange(e);
        }
      }
    };

    var calculateInputWidth = function calculateInputWidth(inputValue) {
      var inputLength = inputValue.length;
      return "".concat(inputLength !== 0 ? inputLength + 1 : 2, "ch");
    };

    return jsxRuntime.jsxs(ChipContainer, __assign({
      error: error
    }, {
      children: [jsxRuntime.jsxs(Chip, __assign({
        sizeVariant: sizeVariant
      }, {
        children: [jsxRuntime.jsxs(LabelPart, __assign({
          sizeVariant: sizeVariant,
          variant: variant,
          entry: entry
        }, {
          children: [state === "removable"
          /* removable */
          && jsxRuntime.jsx(RemoveIcon, __assign({
            onClick: onRemove,
            "data-testid": "chip-remove"
          }, {
            children: jsxRuntime.jsx(LumaIcon, {
              iconCode: "times"
            }, void 0)
          }), void 0), children, iconCode && jsxRuntime.jsx(Icon, {
            children: jsxRuntime.jsx(LumaIcon, {
              iconCode: iconCode
            }, void 0)
          }, void 0)]
        }), void 0), entry && jsxRuntime.jsxs(EntryPart, __assign({
          sizeVariant: sizeVariant,
          error: error,
          variant: variant,
          disabled: disabled,
          state: state
        }, {
          children: [jsxRuntime.jsx(Input, {
            type: "text",
            maxLength: entryMaxLength,
            sizeVariant: sizeVariant,
            value: inputValue,
            error: error,
            onChange: handleChange,
            onBlur: onBlur,
            style: {
              width: calculateInputWidth(inputValue)
            },
            disabled: disabled || state === "locked"
            /* locked */
            ,
            "data-testid": "chip-entry"
          }, void 0), jsxRuntime.jsx(Unit, __assign({
            sizeVariant: sizeVariant
          }, {
            children: inputValue.toString().length > 0 && unit
          }), void 0)]
        }), void 0)]
      }), void 0), (error === null || error === void 0 ? void 0 : error.hasError) && (error === null || error === void 0 ? void 0 : error.errorMessage) && jsxRuntime.jsx(ErrorMessage, {
        children: error.errorMessage
      }, void 0)]
    }), void 0);
  };

  var AgGridWrapper = /*#__PURE__*/styled__default["default"].div.withConfig({
    displayName: "LumaAgGridstyles__AgGridWrapper",
    componentId: "sc-1yw3ccy-0"
  })(templateObject_1$9 || (templateObject_1$9 = __makeTemplateObject(["\n  --ag-border-color: ", ";\n  --ag-border-radius: 8px;\n\n  & .ag-root-wrapper,\n  & .ag-root {\n    border-radius: 8px;\n  }\n  & .ag-header {\n    border-radius: 8px 8px 0 0;\n  }\n  & .ag-header-cell {\n    &:first-child {\n      border-radius: 8px 0 0 0;\n    }\n    &:last-child {\n      border-radius: 0 8px 0 0;\n    }\n  }\n  & .ag-cell {\n    display: flex;\n    text-align: left;\n    align-items: center;\n  }\n\n  ", "\n"], ["\n  --ag-border-color: ", ";\n  --ag-border-radius: 8px;\n\n  & .ag-root-wrapper,\n  & .ag-root {\n    border-radius: 8px;\n  }\n  & .ag-header {\n    border-radius: 8px 8px 0 0;\n  }\n  & .ag-header-cell {\n    &:first-child {\n      border-radius: 8px 0 0 0;\n    }\n    &:last-child {\n      border-radius: 0 8px 0 0;\n    }\n  }\n  & .ag-cell {\n    display: flex;\n    text-align: left;\n    align-items: center;\n  }\n\n  ", "\n"])), LumaColor.NEUTRAL_30, function (props) {
    return props.additionalStyles;
  });
  var rowStyle = {};
  var templateObject_1$9;

  function LumaAgGrid(_a) {
    var gridOptions = _a.gridOptions,
        gridStyles = _a.gridStyles,
        _b = _a.additionalStyles,
        additionalStyles = _b === void 0 ? '' : _b;
    return jsxRuntime.jsx(AgGridWrapper, __assign({
      additionalStyles: additionalStyles,
      style: __assign({}, gridStyles),
      className: "ag-theme-alpine"
    }, {
      children: jsxRuntime.jsx(agGridReact.AgGridReact, {
        rowStyle: rowStyle,
        gridOptions: __assign({}, gridOptions)
      }, void 0)
    }), void 0);
  }

  var rotate360 = /*#__PURE__*/styled.keyframes(templateObject_1$8 || (templateObject_1$8 = __makeTemplateObject(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"], ["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"])));
  var LoadingSpinner = /*#__PURE__*/styled__default["default"].div.withConfig({
    displayName: "Spinnerstyle__LoadingSpinner",
    componentId: "sc-exun2d-0"
  })(templateObject_2$6 || (templateObject_2$6 = __makeTemplateObject(["\n  animation: ", " 1s linear infinite;\n  border-top: 0.125rem solid ", ";\n  border-right: 0.125rem solid ", ";\n  border-bottom: 0.125rem solid ", ";\n  border-left: 0.125rem solid transparent;\n  background: transparent;\n  width: 3.5rem;\n  height: 3.5rem;\n  border-radius: 50%;\n"], ["\n  animation: ", " 1s linear infinite;\n  border-top: 0.125rem solid ", ";\n  border-right: 0.125rem solid ", ";\n  border-bottom: 0.125rem solid ", ";\n  border-left: 0.125rem solid transparent;\n  background: transparent;\n  width: 3.5rem;\n  height: 3.5rem;\n  border-radius: 50%;\n"])), rotate360, colors.primary80Daintree, colors.primary80Daintree, colors.primary80Daintree);
  var LoadingSpinnerContainer = /*#__PURE__*/styled__default["default"].div.withConfig({
    displayName: "Spinnerstyle__LoadingSpinnerContainer",
    componentId: "sc-exun2d-1"
  })(templateObject_3$5 || (templateObject_3$5 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n"], ["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n"])));
  var templateObject_1$8, templateObject_2$6, templateObject_3$5;

  var Spinner = function Spinner() {
    return jsxRuntime.jsx(LoadingSpinnerContainer, {
      children: jsxRuntime.jsx(LoadingSpinner, {}, void 0)
    }, void 0);
  };

  var MaxLengthValue = 15;

  var LumaMultiDropDownOption = function LumaMultiDropDownOption(_a) {
    var _b = _a.selectedItems,
        selectedItems = _b === void 0 ? [] : _b,
        _c = _a.item,
        item = _c === void 0 ? {} : _c,
        disabled = _a.disabled;
    var isChecked = !!selectedItems.find(function (_a) {
      var value = _a.value;
      return value === item.value;
    });
    return jsxRuntime.jsxs(DropDownItemWrapper, __assign({
      variant: "multi"
    }, {
      children: [jsxRuntime.jsx(StyledCheckbox$1, __assign({
        disabled: disabled,
        isChecked: isChecked
      }, {
        children: isChecked && jsxRuntime.jsx(LumaIcon, {
          iconCode: "check"
        }, void 0)
      }), void 0), jsxRuntime.jsx(DropDownText, __assign({
        disabled: item.isDisabled,
        className: "DropDownText"
      }, {
        children: item.label
      }), void 0)]
    }), void 0);
  };

  var inputDisplayValue = function inputDisplayValue(selectedDropdownItems) {
    var valueSelected = selectedDropdownItems.map(function (item) {
      return item === null || item === void 0 ? void 0 : item.label;
    });
    var firstSelected = valueSelected[0] || '';

    if (firstSelected.length > MaxLengthValue) {
      firstSelected = firstSelected.substring(0, MaxLengthValue) + '...';
    }

    return selectedDropdownItems.length > 1 ? "".concat(firstSelected, ", +").concat(selectedDropdownItems.length - 1) : "".concat(firstSelected);
  };

  var LumaMultiDropDown = function LumaMultiDropDown(_a) {
    _a.name;
        var id = _a.id,
        placeholder = _a.placeholder,
        error = _a.error,
        _b = _a.readOnly,
        readOnly = _b === void 0 ? true : _b,
        disabled = _a.disabled,
        fullWidth = _a.fullWidth,
        helperText = _a.helperText,
        _c = _a.size,
        size = _c === void 0 ? 'medium' : _c,
        _d = _a.items,
        items = _d === void 0 ? [] : _d,
        defaultSelectedItems = _a.defaultSelectedItems,
        onChange = _a.onChange;
        _a.handleBlur;
        var rest = __rest(_a, ["name", "id", "placeholder", "error", "readOnly", "disabled", "fullWidth", "helperText", "size", "items", "defaultSelectedItems", "onChange", "handleBlur"]);

    var _e = React.useState(defaultSelectedItems || []),
        allItems = _e[0],
        setAllItems = _e[1];

    var _f = downshift.useCombobox({
      items: items,
      itemToString: function (item) {
        var _a;

        return (_a = item === null || item === void 0 ? void 0 : item.label) !== null && _a !== void 0 ? _a : '';
      },
      selectedItem: null,
      stateReducer: function (state, actionAndChanges) {
        var changes = actionAndChanges.changes,
            type = actionAndChanges.type;

        switch (type) {
          case downshift.useCombobox.stateChangeTypes.InputKeyDownEnter:
          case downshift.useCombobox.stateChangeTypes.ItemClick:
          case downshift.useCombobox.stateChangeTypes.InputBlur:
            return __assign(__assign({}, changes), {
              isOpen: !!changes.selectedItem
            });
        }

        return changes;
      },
      onStateChange: function (_a) {
        var type = _a.type,
            selectedItem = _a.selectedItem;
        var newItems = [];

        switch (type) {
          case downshift.useCombobox.stateChangeTypes.InputKeyDownEnter:
          case downshift.useCombobox.stateChangeTypes.ItemClick:
            if (selectedItem) {
              var index = allItems.findIndex(function (_a) {
                var value = _a.value;
                return value === selectedItem.value;
              });

              if (index > 0) {
                newItems = __spreadArray(__spreadArray([], allItems.slice(0, index), true), allItems.slice(index + 1), true);
              } else if (index === 0) {
                newItems = __spreadArray([], allItems.slice(1), true);
              } else {
                newItems = __spreadArray(__spreadArray([], allItems, true), [selectedItem], false);
              }

              setAllItems(newItems);
            }

            break;
        }
      }
    }),
        isOpen = _f.isOpen,
        getMenuProps = _f.getMenuProps,
        highlightedIndex = _f.highlightedIndex,
        getItemProps = _f.getItemProps,
        getInputProps = _f.getInputProps,
        getComboboxProps = _f.getComboboxProps,
        openMenu = _f.openMenu,
        closeMenu = _f.closeMenu;

    React.useEffect(function () {
      onChange === null || onChange === void 0 ? void 0 : onChange(allItems);
    }, [allItems, onChange]);
    return jsxRuntime.jsxs(Root$2, __assign({
      size: size,
      error: error,
      fullWidth: fullWidth
    }, getComboboxProps(), {
      children: [jsxRuntime.jsx(LumaTextEntry, __assign({}, getInputProps(), {
        label: placeholder,
        disabled: disabled,
        readOnly: readOnly,
        value: inputDisplayValue(allItems),
        icon: jsxRuntime.jsx(LumaIcon, {
          onClick: isOpen ? closeMenu : openMenu,
          iconCode: isOpen ? 'angle-up' : 'angle-down'
        }, void 0),
        fullWidth: fullWidth,
        helperText: helperText,
        sizeVariant: size,
        error: error,
        useByDropdown: true,
        onClick: function () {
          if (!isOpen) openMenu();else closeMenu();
        }
      }, rest), void 0), !readOnly ? jsxRuntime.jsx(LumaDropDownBox, {
        size: size,
        isOpen: isOpen,
        items: items,
        selectedItems: allItems,
        getMenuProps: getMenuProps,
        highlightedIndex: highlightedIndex,
        getItemProps: getItemProps,
        renderComponent: jsxRuntime.jsx(LumaMultiDropDownOption, {}, void 0),
        id: id
      }, void 0) : null]
    }), void 0);
  };

  var LumaSingleDropDown = function LumaSingleDropDown(_a) {
    _a.name;
        var id = _a.id,
        placeholder = _a.placeholder,
        error = _a.error,
        _b = _a.readOnly,
        readOnly = _b === void 0 ? true : _b,
        disabled = _a.disabled,
        fullWidth = _a.fullWidth,
        helperText = _a.helperText,
        _c = _a.size,
        size = _c === void 0 ? 'medium' : _c,
        _d = _a.items,
        items = _d === void 0 ? [] : _d,
        defaultSelectedItem = _a.defaultSelectedItem,
        onChange = _a.onChange;
        _a.handleBlur;
        var _e = _a.className,
        className = _e === void 0 ? '' : _e,
        dropDownIcon = _a.dropDownIcon,
        dropDownIconType = _a.dropDownIconType,
        rest = __rest(_a, ["name", "id", "placeholder", "error", "readOnly", "disabled", "fullWidth", "helperText", "size", "items", "defaultSelectedItem", "onChange", "handleBlur", "className", "dropDownIcon", "dropDownIconType"]);

    var _f = React.useState((defaultSelectedItem === null || defaultSelectedItem === void 0 ? void 0 : defaultSelectedItem.label) || ''),
        inputValue = _f[0],
        setInputValue = _f[1];

    React.useEffect(function () {
      setInputValue(defaultSelectedItem === null || defaultSelectedItem === void 0 ? void 0 : defaultSelectedItem.label);
    }, [defaultSelectedItem]);

    var _g = downshift.useCombobox({
      inputValue: inputValue,
      itemToString: function (item) {
        var _a;

        return (_a = item === null || item === void 0 ? void 0 : item.label) !== null && _a !== void 0 ? _a : '';
      },
      items: items,
      onSelectedItemChange: function (_a) {
        var selectedItem = _a.selectedItem;
        setInputValue((selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.label) || '');
        onChange === null || onChange === void 0 ? void 0 : onChange(selectedItem !== null && selectedItem !== void 0 ? selectedItem : null);
      },
      onInputValueChange: function (_a) {
        var inputValue = _a.inputValue;

        if (inputValue === '') {
          reset();
        }

        setInputValue(inputValue || '');
      }
    }),
        isOpen = _g.isOpen,
        openMenu = _g.openMenu,
        closeMenu = _g.closeMenu,
        getMenuProps = _g.getMenuProps,
        getInputProps = _g.getInputProps,
        getComboboxProps = _g.getComboboxProps,
        getItemProps = _g.getItemProps,
        highlightedIndex = _g.highlightedIndex,
        selectedItem = _g.selectedItem,
        reset = _g.reset;

    return jsxRuntime.jsxs(Root$2, __assign({
      size: size,
      error: error,
      fullWidth: fullWidth,
      className: className
    }, getComboboxProps({
      readOnly: readOnly,
      disabled: disabled
    }), {
      children: [jsxRuntime.jsx(LumaTextEntry, __assign({}, getInputProps({
        label: placeholder,
        disabled: disabled,
        readOnly: readOnly
      }), {
        value: inputValue,
        icon: dropDownIcon ? jsxRuntime.jsx(LumaIcon, {
          onClick: isOpen ? closeMenu : openMenu,
          iconCode: dropDownIcon,
          type: dropDownIconType
        }, void 0) : jsxRuntime.jsx(LumaIcon, {
          onClick: isOpen ? closeMenu : openMenu,
          iconCode: isOpen ? 'angle-up' : 'angle-down'
        }, void 0),
        fullWidth: fullWidth,
        helperText: helperText,
        sizeVariant: size,
        error: error,
        useByDropdown: true,
        onClick: function () {
          if (!isOpen) openMenu();else closeMenu();
        }
      }, rest), void 0), jsxRuntime.jsx(LumaDropDownBox, {
        size: size,
        isOpen: isOpen,
        items: items,
        getMenuProps: getMenuProps,
        highlightedIndex: highlightedIndex,
        getItemProps: getItemProps,
        renderComponent: jsxRuntime.jsx(LumaSingleDropDownOption, {}, void 0),
        selectedItem: selectedItem || defaultSelectedItem,
        id: id
      }, void 0)]
    }), void 0);
  };

  var ValidUntilInput = /*#__PURE__*/styled__default["default"].input.withConfig({
    displayName: "LumaValidUntilstyles__ValidUntilInput",
    componentId: "sc-14dgw5-0"
  })(templateObject_1$7 || (templateObject_1$7 = __makeTemplateObject(["\n  padding: 0.5rem;\n  border-radius: 8px;\n  border: 1px solid ", ";\n"], ["\n  padding: 0.5rem;\n  border-radius: 8px;\n  border: 1px solid ", ";\n"])), LumaColor.NEUTRAL_40);
  var ValidUntilButton = /*#__PURE__*/styled__default["default"].button.withConfig({
    displayName: "LumaValidUntilstyles__ValidUntilButton",
    componentId: "sc-14dgw5-1"
  })(templateObject_2$5 || (templateObject_2$5 = __makeTemplateObject(["\n  background-color: ", ";\n  font-size: 0.75rem;\n  font-weight: 500;\n  color: inherit;\n  padding: 0.5rem 2.625rem;\n  border: 1px solid ", ";\n  border-radius: 8px;\n  cursor: pointer;\n  min-height: 1.875rem;\n"], ["\n  background-color: ", ";\n  font-size: 0.75rem;\n  font-weight: 500;\n  color: inherit;\n  padding: 0.5rem 2.625rem;\n  border: 1px solid ", ";\n  border-radius: 8px;\n  cursor: pointer;\n  min-height: 1.875rem;\n"])), LumaColor.NEUTRAL_00_WHITE, LumaColor.NEUTRAL_40);
  var templateObject_1$7, templateObject_2$5;

  function LumaValidUntil(_a) {
    var onChange = _a.onChange,
        _b = _a.inputDataTestId,
        inputDataTestId = _b === void 0 ? 'input-valid_until' : _b,
        _c = _a.buttonDataTestId,
        buttonDataTestId = _c === void 0 ? 'button-valid_until' : _c;

    var _d = React.useState(false),
        focus = _d[0],
        setFocus = _d[1];

    var _e = React.useState(null),
        validUntil = _e[0],
        setValidUntil = _e[1];

    var inputRef = React.useRef(document.createElement('input'));
    return focus ? jsxRuntime.jsx(ValidUntilInput, {
      type: "number",
      ref: inputRef,
      "data-testid": inputDataTestId,
      value: validUntil !== null && validUntil !== void 0 ? validUntil : '',
      min: "0",
      onFocus: function () {
        return setFocus(true);
      },
      onBlur: function () {
        return setFocus(false);
      },
      onKeyDown: function (event) {
        if (event.key === 'Enter') {
          var value = inputRef.current.value;
          setValidUntil(value ? Number(value) : null);
          onChange(value ? Number(value) : undefined);
          setFocus(false);
        }
      },
      onChange: function (event) {
        var value = event.target.value;
        setValidUntil(value ? Number(value) : null);
        onChange(value ? Number(value) : undefined);
      }
    }, void 0) : jsxRuntime.jsx(ValidUntilButton, __assign({
      "data-testid": buttonDataTestId,
      onClick: function () {
        setFocus(true);
        setTimeout(function () {
          var _a;

          return (_a = inputRef === null || inputRef === void 0 ? void 0 : inputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
        }, 0);
      }
    }, {
      children: (validUntil || validUntil === 0) && jsxRuntime.jsxs("span", {
        children: [validUntil, " minutes"]
      }, void 0)
    }), void 0);
  }

  var CenteredContainer = /*#__PURE__*/styled__default["default"].div.withConfig({
    displayName: "LumaNotFoundstyles__CenteredContainer",
    componentId: "sc-145ta4w-0"
  })(templateObject_1$6 || (templateObject_1$6 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 80vh;\n"], ["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 80vh;\n"])));
  var IconWrapper$1 = /*#__PURE__*/styled__default["default"](LumaIcon).withConfig({
    displayName: "LumaNotFoundstyles__IconWrapper",
    componentId: "sc-145ta4w-1"
  })(templateObject_2$4 || (templateObject_2$4 = __makeTemplateObject(["\n  margin-bottom: 2rem;\n"], ["\n  margin-bottom: 2rem;\n"])));
  var NotFoundText = /*#__PURE__*/styled__default["default"].span.withConfig({
    displayName: "LumaNotFoundstyles__NotFoundText",
    componentId: "sc-145ta4w-2"
  })(templateObject_3$4 || (templateObject_3$4 = __makeTemplateObject(["\n  font-weight: 600;\n  margin-bottom: 1rem;\n"], ["\n  font-weight: 600;\n  margin-bottom: 1rem;\n"])));
  var LinkText = /*#__PURE__*/styled__default["default"].span.withConfig({
    displayName: "LumaNotFoundstyles__LinkText",
    componentId: "sc-145ta4w-3"
  })(templateObject_4$1 || (templateObject_4$1 = __makeTemplateObject(["\n  color: ", ";\n  font-weight: 600;\n"], ["\n  color: ", ";\n  font-weight: 600;\n"])), LumaColor.PRIMARY_50);
  var IconStyles = {
    fontSize: '4.25rem',
    color: LumaColor.PRIMARY_50
  };
  var templateObject_1$6, templateObject_2$4, templateObject_3$4, templateObject_4$1;

  var defaultProps = {
    returnUrl: 'dashboard'
  };
  function LumaNotFound(props) {
    props = __assign(__assign({}, defaultProps), props);
    return jsxRuntime.jsxs(CenteredContainer, {
      children: [jsxRuntime.jsx(IconWrapper$1, {
        iconCode: "exclamation-circle",
        type: "solid",
        style: IconStyles
      }, void 0), jsxRuntime.jsx(NotFoundText, {
        children: "Page not found"
      }, void 0), jsxRuntime.jsxs("div", {
        children: ["Return to your", ' ', jsxRuntime.jsx(reactRouterDom.Link, __assign({
          to: props.returnUrl
        }, {
          children: jsxRuntime.jsx(LinkText, {
            children: "Dashboard"
          }, void 0)
        }), void 0)]
      }, void 0)]
    }, void 0);
  }

  var Root = /*#__PURE__*/styled__default["default"].div.withConfig({
    displayName: "LumaDatePickerstyles__Root",
    componentId: "sc-cnjgiw-0"
  })(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject(["\n  width: 100%;\n  position: relative;\n\n  ", "\n\n  .TextEntry--container {\n    width: 100%;\n    max-width: 100%;\n  }\n  input {\n    color: ", ";\n    ", "\n    &::-webkit-datetime-edit-year-field:not([aria-valuenow]),\n    &::-webkit-datetime-edit-month-field:not([aria-valuenow]),\n    &::-webkit-datetime-edit-day-field:not([aria-valuenow]),\n    &::-webkit-datetime-edit {\n      color: transparent;\n      user-select: none;\n      font-family: ", ";\n      font-weight: 500;\n    }\n    &::before {\n      width: 100%;\n      content: '';\n    }\n    ", "\n  }\n  .text-entry--outlined {\n    box-sizing: border-box;\n    outline: 0;\n    position: relative;\n    width: 100%;\n  }\n"], ["\n  width: 100%;\n  position: relative;\n\n  ", "\n\n  .TextEntry--container {\n    width: 100%;\n    max-width: 100%;\n  }\n  input {\n    color: ", ";\n    ", "\n    &::-webkit-datetime-edit-year-field:not([aria-valuenow]),\n    &::-webkit-datetime-edit-month-field:not([aria-valuenow]),\n    &::-webkit-datetime-edit-day-field:not([aria-valuenow]),\n    &::-webkit-datetime-edit {\n      color: transparent;\n      user-select: none;\n      font-family: ", ";\n      font-weight: 500;\n    }\n    &::before {\n      width: 100%;\n      content: '';\n    }\n    ", "\n  }\n  .text-entry--outlined {\n    box-sizing: border-box;\n    outline: 0;\n    position: relative;\n    width: 100%;\n  }\n"])), function (props) {
    return props.fullWidth ? "width: 100%; max-width: 100%;" : '';
  }, LumaColor.NEUTRAL_80, function (props) {
    return props.disabled ? "color: ".concat(LumaColor.NEUTRAL_40, ";") : '';
  }, LumaFont.DEFAULT.REGULAR, function (props) {
    return props.value ? " &::before {\n            width: 0%;\n            content: '';\n          }" : '';
  });
  var RootDropdown = /*#__PURE__*/styled__default["default"].div.withConfig({
    displayName: "LumaDatePickerstyles__RootDropdown",
    componentId: "sc-cnjgiw-1"
  })(templateObject_2$3 || (templateObject_2$3 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  width: 18.5rem;\n  border-radius: 8px;\n  box-shadow: 0 0 4px 0 rgba(47, 51, 54, 0.32);\n  border: 1px solid ", ";\n  top: ", ";\n  height: fit-content;\n  position: absolute;\n  z-index: 2;\n  background-color: ", ";\n  overflow: hidden;\n"], ["\n  display: flex;\n  flex-direction: column;\n  width: 18.5rem;\n  border-radius: 8px;\n  box-shadow: 0 0 4px 0 rgba(47, 51, 54, 0.32);\n  border: 1px solid ", ";\n  top: ", ";\n  height: fit-content;\n  position: absolute;\n  z-index: 2;\n  background-color: ", ";\n  overflow: hidden;\n"])), LumaColor.NEUTRAL_80, function (props) {
    return "calc(".concat(props.size ? Number(SIZE_MAP$1[props.size].height + 0.5) : 3, "rem)");
  }, LumaColor.NEUTRAL_00_WHITE);
  var DatePickerHeaderButton = /*#__PURE__*/styled__default["default"].button.withConfig({
    displayName: "LumaDatePickerstyles__DatePickerHeaderButton",
    componentId: "sc-cnjgiw-2"
  })(templateObject_3$3 || (templateObject_3$3 = __makeTemplateObject(["\n  background-color: transparent;\n  border: 1px solid transparent;\n  outline: none;\n  padding: 0 0.3125rem;\n  cursor: pointer;\n  line-height: initial;\n"], ["\n  background-color: transparent;\n  border: 1px solid transparent;\n  outline: none;\n  padding: 0 0.3125rem;\n  cursor: pointer;\n  line-height: initial;\n"])));
  var DatePickerHeader = /*#__PURE__*/styled__default["default"].div.withConfig({
    displayName: "LumaDatePickerstyles__DatePickerHeader",
    componentId: "sc-cnjgiw-3"
  })(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: relative;\n  padding: 1rem 0.5625rem 1.5rem;\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 0.875rem;\n"], ["\n  position: relative;\n  padding: 1rem 0.5625rem 1.5rem;\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 0.875rem;\n"])));
  var DatePickerHeaderMonth = /*#__PURE__*/styled__default["default"].span.withConfig({
    displayName: "LumaDatePickerstyles__DatePickerHeaderMonth",
    componentId: "sc-cnjgiw-4"
  })(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  font-family: ", ";\n  font-size: 0.875rem;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  vertical-align: middle;\n  min-width: 4.5rem;\n  text-align: center;\n"], ["\n  font-family: ", ";\n  font-size: 0.875rem;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  vertical-align: middle;\n  min-width: 4.5rem;\n  text-align: center;\n"])), LumaFont.DEFAULT.BOLD);
  var DatePickerDayHeader = /*#__PURE__*/styled__default["default"].div.withConfig({
    displayName: "LumaDatePickerstyles__DatePickerDayHeader",
    componentId: "sc-cnjgiw-5"
  })(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  position: relative;\n  padding-right: 1rem;\n  padding-left: 1rem;\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  padding-bottom: 0.1875rem;\n  border-bottom: 1px solid ", ";\n"], ["\n  position: relative;\n  padding-right: 1rem;\n  padding-left: 1rem;\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  padding-bottom: 0.1875rem;\n  border-bottom: 1px solid ", ";\n"])), LumaColor.NEUTRAL_20);
  var DatePickerDayHeaderitem = /*#__PURE__*/styled__default["default"].div.withConfig({
    displayName: "LumaDatePickerstyles__DatePickerDayHeaderitem",
    componentId: "sc-cnjgiw-6"
  })(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  font-family: ", ";\n  font-size: 0.6875rem;\n  line-height: normal;\n  letter-spacing: normal;\n  text-align: center;\n  color: ", ";\n  width: 1.5rem;\n"], ["\n  font-family: ", ";\n  font-size: 0.6875rem;\n  line-height: normal;\n  letter-spacing: normal;\n  text-align: center;\n  color: ", ";\n  width: 1.5rem;\n"])), LumaFont.DEFAULT.REGULAR, LumaColor.NEUTRAL_60);
  var DatePickerWrapper = /*#__PURE__*/styled__default["default"].div.withConfig({
    displayName: "LumaDatePickerstyles__DatePickerWrapper",
    componentId: "sc-cnjgiw-7"
  })(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  flex: auto;\n  flex-wrap: wrap;\n  padding-top: 1.1875rem;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  width: 100%;\n  padding-bottom: 1.6875rem;\n"], ["\n  display: flex;\n  flex-direction: column;\n  flex: auto;\n  flex-wrap: wrap;\n  padding-top: 1.1875rem;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  width: 100%;\n  padding-bottom: 1.6875rem;\n"])));
  var DatePickerDayBody = /*#__PURE__*/styled__default["default"].div.withConfig({
    displayName: "LumaDatePickerstyles__DatePickerDayBody",
    componentId: "sc-cnjgiw-8"
  })(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  flex-basis: 13%;\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  justify-content: center;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 1rem;\n"], ["\n  flex-basis: 13%;\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  justify-content: center;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 1rem;\n"])));
  var DatePickerDayBodyItem = /*#__PURE__*/styled__default["default"].div.withConfig({
    displayName: "LumaDatePickerstyles__DatePickerDayBodyItem",
    componentId: "sc-cnjgiw-9"
  })(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  position: relative;\n  height: 0;\n  margin-bottom: 1.25rem;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.6875rem;\n"], ["\n  position: relative;\n  height: 0;\n  margin-bottom: 1.25rem;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.6875rem;\n"])));
  var DatePickerDate = /*#__PURE__*/styled__default["default"].div.withConfig({
    displayName: "LumaDatePickerstyles__DatePickerDate",
    componentId: "sc-cnjgiw-10"
  })(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  padding-top: 0.1875rem;\n  height: 1.5rem;\n  border-radius: 8px;\n  font-size: 0.6875rem;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  text-align: center;\n  color: ", ";\n  font-family: ", ";\n  border: solid 1px transparent;\n  transition: all 300ms ease-in-out;\n  cursor: pointer;\n  background-color: transparent;\n  margin-bottom: 1rem;\n  justify-content: center;\n  align-items: center;\n  width: 1.5rem;\n  &:hover {\n    border: solid 1px ", ";\n    background-color: ", ";\n  }\n  ", "\n  ", "\n  ", "\n"], ["\n  padding-top: 0.1875rem;\n  height: 1.5rem;\n  border-radius: 8px;\n  font-size: 0.6875rem;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  text-align: center;\n  color: ", ";\n  font-family: ", ";\n  border: solid 1px transparent;\n  transition: all 300ms ease-in-out;\n  cursor: pointer;\n  background-color: transparent;\n  margin-bottom: 1rem;\n  justify-content: center;\n  align-items: center;\n  width: 1.5rem;\n  &:hover {\n    border: solid 1px ", ";\n    background-color: ", ";\n  }\n  ", "\n  ", "\n  ", "\n"])), LumaColor.PRIMARY_80_DAINTREE, LumaFont.DEFAULT.REGULAR, LumaColor.NEUTRAL_60, LumaColor.NEUTRAL_00_WHITE, function (props) {
    return props.isToday ? "border: solid 1px ".concat(LumaColor.NEUTRAL_20, "; background-color: ").concat(LumaColor.NEUTRAL_20, ";") : '';
  }, function (props) {
    return props.isSelected ? "border: solid 1px ".concat(LumaColor.NEUTRAL_40, "; background-color: ").concat(LumaColor.NEUTRAL_40, ";") : '';
  }, function (props) {
    return props.isActive ? "color: ".concat(LumaColor.NEUTRAL_60, ";") : '';
  });
  var templateObject_1$5, templateObject_2$3, templateObject_3$3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11;

  var CalendarDropDownHeader = function CalendarDropDownHeader(_a) {
    var month = _a.month,
        onChangeMonth = _a.onChangeMonth,
        onChangeYear = _a.onChangeYear;
    return jsxRuntime.jsxs(DatePickerHeader, {
      children: [jsxRuntime.jsx(DatePickerHeaderButton, __assign({
        "data-testid": "button-prev_year",
        onClick: function () {
          onChangeYear(ChangeDirections.previous);
        }
      }, {
        children: jsxRuntime.jsx(LumaIcon, {
          iconCode: "angle-double-left",
          style: {
            verticalAlign: 'middle'
          }
        }, void 0)
      }), void 0), jsxRuntime.jsx(DatePickerHeaderButton, __assign({
        "data-testid": "button-prev_month",
        onClick: function () {
          onChangeMonth(ChangeDirections.previous);
        }
      }, {
        children: jsxRuntime.jsx(LumaIcon, {
          iconCode: "angle-left",
          style: {
            verticalAlign: 'middle'
          }
        }, void 0)
      }), void 0), jsxRuntime.jsx(DatePickerHeaderMonth, {
        children: utility.DateFormatter.formatLocalDate(month, 'MMMM yyyy')
      }, void 0), jsxRuntime.jsx(DatePickerHeaderButton, __assign({
        "data-testid": "button-next_month",
        onClick: function () {
          onChangeMonth(ChangeDirections.next);
        }
      }, {
        children: jsxRuntime.jsx(LumaIcon, {
          iconCode: "angle-right",
          style: {
            verticalAlign: 'middle'
          }
        }, void 0)
      }), void 0), jsxRuntime.jsx(DatePickerHeaderButton, __assign({
        "data-testid": "button-next_year",
        onClick: function () {
          onChangeYear(ChangeDirections.next);
        }
      }, {
        children: jsxRuntime.jsx(LumaIcon, {
          iconCode: "angle-double-right",
          style: {
            verticalAlign: 'middle'
          }
        }, void 0)
      }), void 0)]
    }, void 0);
  };

  var CalendarWeek = function CalendarWeek() {
    return jsxRuntime.jsx(DatePickerDayHeader, {
      children: weekDays.map(function (day, key) {
        return jsxRuntime.jsx(DatePickerDayHeaderitem, {
          children: day
        }, key);
      })
    }, void 0);
  };
  var weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  var CalendarBody = function CalendarBody(_a) {
    var selected = _a.selected,
        onChangeCurrentDate = _a.onChangeCurrentDate,
        month = _a.month;
    var days = allDaysInMonthExtendedToFullWeeks(month);
    var now = new Date();
    return jsxRuntime.jsx(DatePickerWrapper, {
      children: jsxRuntime.jsx(DatePickerDayBody, {
        children: days.map(function (day, key) {
          return jsxRuntime.jsx(DatePickerDayBodyItem, {
            children: jsxRuntime.jsx(DatePickerDate, __assign({
              onClick: function () {
                return onChangeCurrentDate(day);
              },
              onKeyDown: function () {
                return onChangeCurrentDate(day);
              },
              isActive: !dateFns.isSameMonth(month, day),
              isToday: dateFns.isSameDay(now, day),
              isSelected: selected && dateFns.isSameDay(selected, day),
              className: 'DatePicker--date'
            }, {
              children: dateFns.format(day, 'd')
            }), void 0)
          }, key);
        })
      }, void 0)
    }, void 0);
  };

  var allDaysInMonthExtendedToFullWeeks = function allDaysInMonthExtendedToFullWeeks(someDayInTheMonth) {
    return dateFns.eachDayOfInterval({
      start: dateFns.startOfWeek(dateFns.startOfMonth(someDayInTheMonth)),
      end: dateFns.endOfWeek(dateFns.endOfMonth(someDayInTheMonth))
    });
  };

  var ChangeDirections;

  (function (ChangeDirections) {
    ChangeDirections["previous"] = "previous";
    ChangeDirections["next"] = "next";
  })(ChangeDirections || (ChangeDirections = {}));

  var DatePickerDropDown = function DatePickerDropDown(_a) {
    var onChangeHandler = _a.onChangeHandler,
        _b = _a.size,
        size = _b === void 0 ? 'medium' : _b,
        onDropdownClose = _a.onDropdownClose,
        _c = _a.selected,
        selected = _c === void 0 ? undefined : _c;

    var _d = React.useState(dateFns.startOfMonth(selected !== null && selected !== void 0 ? selected : new Date())),
        currentMonth = _d[0],
        setCurrentMonth = _d[1];

    var onChangeMonth = function onChangeMonth(change) {
      setCurrentMonth(change === ChangeDirections.next ? dateFns.addMonths(currentMonth, 1) : dateFns.subMonths(currentMonth, 1));
    };

    var onChangeYear = function onChangeYear(change) {
      setCurrentMonth(change === ChangeDirections.next ? dateFns.addYears(currentMonth, 1) : dateFns.subYears(currentMonth, 1));
    };

    var onDateSelected = function onDateSelected(selectedDate) {
      onChangeHandler(selectedDate);

      if (onDropdownClose) {
        onDropdownClose();
      }
    };

    return jsxRuntime.jsxs(RootDropdown, __assign({
      size: size
    }, {
      children: [jsxRuntime.jsx(CalendarDropDownHeader, {
        month: currentMonth,
        onChangeMonth: onChangeMonth,
        onChangeYear: onChangeYear
      }, void 0), jsxRuntime.jsx(CalendarWeek, {}, void 0), jsxRuntime.jsx(CalendarBody, {
        onChangeCurrentDate: onDateSelected,
        selected: selected,
        month: currentMonth
      }, void 0)]
    }), void 0);
  };

  var LumaDatePicker = function LumaDatePicker(_a) {
    _a.id;
        var onChange = _a.onChange,
        onBlur = _a.onBlur,
        defaultValue = _a.defaultValue,
        label = _a.label,
        error = _a.error,
        helperText = _a.helperText,
        fullWidth = _a.fullWidth,
        disabled = _a.disabled,
        _b = _a.size,
        size = _b === void 0 ? 'medium' : _b,
        _c = _a.variant,
        variant = _c === void 0 ? 'date' : _c,
        _d = _a.inputFormat,
        inputFormat = _d === void 0 ? undefined : _d,
        _e = _a.isOpen,
        isOpen = _e === void 0 ? false : _e,
        rest = __rest(_a, ["id", "onChange", "onBlur", "defaultValue", "label", "error", "helperText", "fullWidth", "disabled", "size", "variant", "inputFormat", "isOpen"]);

    var _f = React__namespace.useState(defaultValue),
        dateValue = _f[0],
        setDateValue = _f[1];

    var _g = React__namespace.useState(isOpen),
        isDropdownOpen = _g[0],
        setIsDropdownOpen = _g[1];

    React.useEffect(function () {
      setDateValue(defaultValue);
    }, [defaultValue]);
    var formattedDateValue = dateValue !== undefined ? inputFormat !== undefined ? utility.DateFormatter.formatLocalDate(dateValue, inputFormat) : dateValue.toLocaleDateString() : undefined;

    var onChangeHandler = function onChangeHandler(newValue) {
      setDateValue(newValue);
      setIsDropdownOpen(false);
      onChange === null || onChange === void 0 ? void 0 : onChange(newValue);
    };

    var styleCalendarIcon = {
      fontSize: '0.5rem'
    };
    return jsxRuntime.jsx(Root, __assign({
      size: size,
      value: formattedDateValue,
      fullWidth: fullWidth,
      disabled: disabled
    }, {
      children: jsxRuntime.jsxs(OutsideClickHandler__default["default"], __assign({
        onOutsideClick: function () {
          return setIsDropdownOpen(false);
        }
      }, {
        children: [jsxRuntime.jsx(LumaTextEntry, __assign({
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
          onFocus: function () {
            return setIsDropdownOpen(true);
          },
          icon: jsxRuntime.jsx(LumaIcon, {
            type: "regular",
            iconCode: "calendar",
            style: styleCalendarIcon
          }, void 0),
          useByDropdown: true
        }, rest), void 0), isDropdownOpen ? jsxRuntime.jsx(DatePickerDropDown, {
          onChangeHandler: onChangeHandler,
          variant: variant,
          isOpen: isDropdownOpen,
          size: size,
          selected: dateValue
        }, void 0) : null]
      }), void 0)
    }), void 0);
  };

  var VARIANT_MAP$1 = {
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
  var DIMENSIONS_MAP = {
    buttons: {
      gap: '0.75rem',
      fontFamily: LumaFont.DEFAULT.BOLD
    },
    links: {
      gap: '1.5rem',
      fontFamily: LumaFont.DEFAULT.MEDIUM
    }
  };
  var TabsContainer = /*#__PURE__*/styled__default["default"].div.withConfig({
    displayName: "LumaTabsstyles__TabsContainer",
    componentId: "sc-1doptis-0"
  })(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n  font-size: 1rem;\n  font-family: ", ";\n  gap: ", ";\n"], ["\n  display: flex;\n  flex-direction: row;\n  font-size: 1rem;\n  font-family: ", ";\n  gap: ", ";\n"])), function (props) {
    return DIMENSIONS_MAP[props.variant].fontFamily;
  }, function (props) {
    return DIMENSIONS_MAP[props.variant].gap;
  });
  var Indicator = /*#__PURE__*/styled__default["default"].div.withConfig({
    displayName: "LumaTabsstyles__Indicator",
    componentId: "sc-1doptis-1"
  })(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n  width: 100%;\n  height: 0.1875rem;\n  background-color: ", ";\n  margin-top: 0.375rem;\n"], ["\n  width: 100%;\n  height: 0.1875rem;\n  background-color: ", ";\n  margin-top: 0.375rem;\n"])), LumaColor.PRIMARY_50);
  var Link = /*#__PURE__*/styled__default["default"].a.withConfig({
    displayName: "LumaTabsstyles__Link",
    componentId: "sc-1doptis-2"
  })(templateObject_3$2 || (templateObject_3$2 = __makeTemplateObject(["\n  cursor: pointer;\n  color: ", ";\n  &:hover {\n    color: ", ";\n  }\n  ", "\n"], ["\n  cursor: pointer;\n  color: ", ";\n  &:hover {\n    color: ", ";\n  }\n  ", "\n"])), VARIANT_MAP$1['unselected'].color, VARIANT_MAP$1['unselected'].hoverColor, function (props) {
    return "\n    ".concat(props.active && "color: ".concat(VARIANT_MAP$1['active'].color, ";"), ";\n    ").concat(props.disabled && "\n      pointer-events: none;\n      color: ".concat(VARIANT_MAP$1['disabled'].color, ";"), ";\n  ");
  });
  var templateObject_1$4, templateObject_2$2, templateObject_3$2;

  var LumaTabs = function LumaTabs(_a) {
    var _b = _a.variant,
        variant = _b === void 0 ? 'buttons' : _b,
        _c = _a.activeValue,
        activeValue = _c === void 0 ? '' : _c,
        fieldValues = _a.fieldValues,
        onClick = _a.onClick,
        buttonIconCode = _a.buttonIconCode;
    return jsxRuntime.jsx(TabsContainer, __assign({
      variant: variant
    }, {
      children: fieldValues.map(function (_a) {
        var label = _a.label,
            paramName = _a.paramName,
            isDisabled = _a.isDisabled;

        var onButtonClick = function onButtonClick() {
          onClick(paramName);
        };

        var isActive = paramName === activeValue;

        if (variant === "links"
        /* links */
        ) {
          return jsxRuntime.jsxs(Link, __assign({
            active: isActive,
            disabled: isDisabled !== null && isDisabled !== void 0 ? isDisabled : false,
            onClick: onButtonClick
          }, {
            children: [label, isActive && jsxRuntime.jsx(Indicator, {}, void 0)]
          }), paramName);
        } else {
          return jsxRuntime.jsx(LumaButton, __assign({
            variant: isActive ? 'tabs_active' : 'tabs_inactive',
            size: "tab",
            icon: {
              iconComponent: jsxRuntime.jsx(LumaIcon, {
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

  var ToggleButtonContainer = /*#__PURE__*/styled__default["default"].div.withConfig({
    displayName: "LumaToggleButtonstyles__ToggleButtonContainer",
    componentId: "sc-1q0pai3-0"
  })(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  button:not(:first-child) {\n    margin-left: 0.625rem;\n  }\n"], ["\n  button:not(:first-child) {\n    margin-left: 0.625rem;\n  }\n"])));
  var Title = /*#__PURE__*/styled__default["default"].div.withConfig({
    displayName: "LumaToggleButtonstyles__Title",
    componentId: "sc-1q0pai3-1"
  })(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n  margin: 0 4.75rem 0.625rem 0;\n  font-size: 0.6875rem;\n  color: ", ";\n  font-family: ", ";\n"], ["\n  margin: 0 4.75rem 0.625rem 0;\n  font-size: 0.6875rem;\n  color: ", ";\n  font-family: ", ";\n"])), LumaColor.NEUTRAL_60, LumaFont.DEFAULT.REGULAR);
  var ButtonWrapper = /*#__PURE__*/styled__default["default"].div.withConfig({
    displayName: "LumaToggleButtonstyles__ButtonWrapper",
    componentId: "sc-1q0pai3-2"
  })(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n  gap: 0.5rem;\n"], ["\n  display: flex;\n  flex-direction: row;\n  gap: 0.5rem;\n"])));
  var templateObject_1$3, templateObject_2$1, templateObject_3$1;

  var LumaToggleButton = function LumaToggleButton(_a) {
    var activeValue = _a.activeValue,
        fieldValues = _a.fieldValues,
        title = _a.title,
        _b = _a.size,
        size = _b === void 0 ? 'toggle_medium' : _b,
        onClick = _a.onClick;
    return jsxRuntime.jsxs(ToggleButtonContainer, {
      children: [title && jsxRuntime.jsx(Title, {
        children: title
      }, void 0), jsxRuntime.jsx(ButtonWrapper, {
        children: fieldValues.map(function (_a) {
          var label = _a.label,
              paramName = _a.paramName,
              isDisabled = _a.isDisabled;

          var onButtonClick = function onButtonClick() {
            onClick(paramName);
          };

          var isActive = paramName === activeValue;
          return jsxRuntime.jsx(LumaButton, __assign({
            variant: isActive ? 'toggle_active' : 'toggle_inactive',
            size: size,
            disabled: isDisabled || false,
            onClick: onButtonClick
          }, {
            children: label
          }), paramName);
        })
      }, void 0)]
    }, void 0);
  };

  var VARIANT_MAP = {
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
  var DIMENSION_MAP = {
    medium: {
      fontSize: '0.875rem',
      iconSize: '1rem'
    },
    small: {
      fontSize: '0.75rem',
      iconSize: '0.875rem'
    }
  };
  var IconLinkContainer = /*#__PURE__*/styled__default["default"].a.withConfig({
    displayName: "LumaIconLinkstyles__IconLinkContainer",
    componentId: "sc-12iijw5-0"
  })(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n  gap: 0.5rem;\n  color: ", ";\n  cursor: ", ";\n  pointer-events: ", ";\n  &:hover:not([disabled]) {\n    color: ", ";\n  }\n"], ["\n  display: flex;\n  flex-direction: row;\n  gap: 0.5rem;\n  color: ", ";\n  cursor: ", ";\n  pointer-events: ", ";\n  &:hover:not([disabled]) {\n    color: ", ";\n  }\n"])), function (props) {
    return props.disabled ? VARIANT_MAP['disabled'].color : VARIANT_MAP['default'].color;
  }, function (props) {
    return props.disabled ? VARIANT_MAP['disabled'].cursor : VARIANT_MAP['default'].cursor;
  }, function (props) {
    return props.disabled ? 'none' : '';
  }, VARIANT_MAP['disabled'].color);
  var Label = /*#__PURE__*/styled__default["default"].div.withConfig({
    displayName: "LumaIconLinkstyles__Label",
    componentId: "sc-12iijw5-1"
  })(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-family: ", ";\n  ", ";\n"], ["\n  font-family: ", ";\n  ", ";\n"])), LumaFont.DEFAULT.MEDIUM, function (props) {
    return "font-size: ".concat(DIMENSION_MAP[props.sizeVariant].fontSize, ";");
  });
  var IconWrapper = /*#__PURE__*/styled__default["default"].div.withConfig({
    displayName: "LumaIconLinkstyles__IconWrapper",
    componentId: "sc-12iijw5-2"
  })(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  ", ";\n"], ["\n  display: flex;\n  align-items: center;\n  ", ";\n"])), function (props) {
    return "font-size: ".concat(DIMENSION_MAP[props.sizeVariant].fontSize, ";");
  });
  var templateObject_1$2, templateObject_2, templateObject_3;

  var LumaIconLink = function LumaIconLink(_a) {
    var iconCode = _a.iconCode,
        label = _a.label,
        sizeVariant = _a.sizeVariant,
        _b = _a.disabled,
        disabled = _b === void 0 ? false : _b,
        rest = __rest(_a, ["iconCode", "label", "sizeVariant", "disabled"]);

    return jsxRuntime.jsxs(IconLinkContainer, __assign({
      disabled: disabled
    }, rest, {
      children: [jsxRuntime.jsx(IconWrapper, __assign({
        sizeVariant: sizeVariant
      }, {
        children: jsxRuntime.jsx(LumaIcon, {
          iconCode: iconCode
        }, void 0)
      }), void 0), jsxRuntime.jsx(Label, __assign({
        sizeVariant: sizeVariant
      }, {
        children: label
      }), void 0)]
    }), void 0);
  };

  var img$1 = "data:image/svg+xml,%3csvg width='69' height='80' viewBox='0 0 69 80' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='m34.55 60.043 7.08 6.998a4.189 4.189 0 0 1 0 5.961L34.55 80l-7.081-6.998a4.189 4.189 0 0 1 0-5.961l7.08-6.998zm-20.28-40 7.08 6.998a4.189 4.189 0 0 1 0 5.961L14.27 40l7.08 6.998c1.66 1.641 4.37 1.641 6.031 0l7.036-6.956-7.036-6.953a4.189 4.189 0 0 1 0-5.962l7.08-6.997 7.081 6.997c1.66 1.642 4.37 1.642 6.031 0l7.08-6.997.016.014.018.019.06.058c.671.665 4.918 4.862 10.046 9.93 5.595 5.357 5.595 14.341.088 19.87L54.654 60.044l-7.08-6.998a4.189 4.189 0 0 1 0-5.96l7.08-6.999-7.08-6.997c-1.661-1.642-4.371-1.642-6.032 0l-7.037 6.954 7.037 6.955a4.189 4.189 0 0 1 0 5.961l-7.08 6.998-7.08-6.998c-1.661-1.642-4.371-1.642-6.032 0l-7.08 6.998-.06-.06-10.08-9.962c-5.507-5.443-5.507-14.427 0-19.87l10.14-10.022zM41.542 6.998a4.189 4.189 0 0 1 0 5.961l-7.08 6.998-7.08-6.998a4.189 4.189 0 0 1 0-5.961L34.461 0l7.08 6.998z' fill='%2300263E' fill-rule='nonzero'/%3e%3c/svg%3e";

  var LogoContainer$1 = /*#__PURE__*/styled__default["default"].div.withConfig({
    displayName: "LumaFlamestyles__LogoContainer",
    componentId: "sc-ghsz2t-0"
  })(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 4.375rem;\n  width: 4.375rem;\n"], ["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 4.375rem;\n  width: 4.375rem;\n"])));
  var templateObject_1$1;

  var LumaFlame = function LumaFlame() {
    return jsxRuntime.jsx(LogoContainer$1, {
      children: jsxRuntime.jsx(Logo, {
        imageSource: img$1
      }, void 0)
    }, void 0);
  };

  var img = "data:image/svg+xml,%3csvg width='69' height='80' viewBox='0 0 69 80' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='m34.55 60.043 7.08 6.998a4.189 4.189 0 0 1 0 5.961L34.55 80l-7.081-6.998a4.189 4.189 0 0 1 0-5.961l7.08-6.998zm-20.28-40 7.08 6.998a4.189 4.189 0 0 1 0 5.961L14.27 40l7.08 6.998c1.66 1.641 4.37 1.641 6.031 0l7.036-6.956-7.036-6.953a4.189 4.189 0 0 1 0-5.962l7.08-6.997 7.081 6.997c1.66 1.642 4.37 1.642 6.031 0l7.08-6.997.016.014.018.019.06.058c.671.665 4.918 4.862 10.046 9.93 5.595 5.357 5.595 14.341.088 19.87L54.654 60.044l-7.08-6.998a4.189 4.189 0 0 1 0-5.96l7.08-6.999-7.08-6.997c-1.661-1.642-4.371-1.642-6.032 0l-7.037 6.954 7.037 6.955a4.189 4.189 0 0 1 0 5.961l-7.08 6.998-7.08-6.998c-1.661-1.642-4.371-1.642-6.032 0l-7.08 6.998-.06-.06-10.08-9.962c-5.507-5.443-5.507-14.427 0-19.87l10.14-10.022zM41.542 6.998a4.189 4.189 0 0 1 0 5.961l-7.08 6.998-7.08-6.998a4.189 4.189 0 0 1 0-5.961L34.461 0l7.08 6.998z' fill='%23858f93' fill-rule='nonzero'/%3e%3c/svg%3e";

  var LogoContainer = /*#__PURE__*/styled__default["default"].div.withConfig({
    displayName: "LumaFlameNeutralstyles__LogoContainer",
    componentId: "sc-jxhyeg-0"
  })(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 4.375rem;\n  width: 4.375rem;\n"], ["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 4.375rem;\n  width: 4.375rem;\n"])));
  var templateObject_1;

  var LumaFlameNeutral = function LumaFlameNeutral() {
    return jsxRuntime.jsx(LogoContainer, {
      children: jsxRuntime.jsx(Logo, {
        imageSource: img
      }, void 0)
    }, void 0);
  };

  exports.ADMIN_TABS = ADMIN_TABS;
  exports.AppHeader = AppHeader;
  exports.Button = Button$2;
  exports.ButtonRoot = Root$8;
  exports.Card = Card;
  exports.Drawer = Drawer;
  exports.Dropdown = Dropdown;
  exports.DropdownBaseMenuItem = MenuItem;
  exports.DropdownIcon = DropdownIcon$3;
  exports.GlobalNav = GlobalNav;
  exports.GlobalNavContainer = GlobalNavContainer;
  exports.GlobalStyle = GlobalStyle;
  exports.Icon = Icon$1;
  exports.Input = Input$5;
  exports.Logo = Logo;
  exports.LumaAgGrid = LumaAgGrid;
  exports.LumaButton = LumaButton;
  exports.LumaButtonDropdown = LumaButtonDropdown;
  exports.LumaCheckbox = LumaCheckbox;
  exports.LumaChip = LumaChip;
  exports.LumaColor = LumaColor;
  exports.LumaDatePicker = LumaDatePicker;
  exports.LumaDimensions = LumaDimensions;
  exports.LumaFlame = LumaFlame;
  exports.LumaFlameNeutral = LumaFlameNeutral;
  exports.LumaFont = LumaFont;
  exports.LumaFontsIBM = LumaFontsIBM;
  exports.LumaIcon = LumaIcon;
  exports.LumaIconLink = LumaIconLink;
  exports.LumaIconSwitch = LumaIconSwitch;
  exports.LumaModal = LumaModal;
  exports.LumaMultiDropDown = LumaMultiDropDown;
  exports.LumaNotFound = LumaNotFound;
  exports.LumaRadio = LumaRadio;
  exports.LumaSingleDropDown = LumaSingleDropDown;
  exports.LumaStatus = LumaStatus;
  exports.LumaTabs = LumaTabs;
  exports.LumaTextEntry = LumaTextEntry;
  exports.LumaTextSearch = LumaTextSearch;
  exports.LumaToggleButton = LumaToggleButton;
  exports.LumaToggleSwitch = LumaToggleSwitch;
  exports.LumaValidUntil = LumaValidUntil;
  exports.Menu = Menu;
  exports.Message = Message$1;
  exports.Modal = Modal;
  exports.MultiSelect = MultiSelect;
  exports.NAV_TABS = NAV_TABS;
  exports.Portal = Portal;
  exports.ROUTES = ROUTES;
  exports.RenderContent = RenderContent;
  exports.Search = Search;
  exports.SingleSelect = SingleSelect;
  exports.Spinner = Spinner;
  exports.StyledButton = StyledButton;
  exports.TableCellDropdown = TableCellDropdown;
  exports.TextEntryField = TextEntryField;
  exports.VARIANT_MAP = VARIANT_MAP$6;
  exports.breakpoints = breakpoints;
  exports.buildAdminOptions = buildAdminOptions;
  exports.buildHomeTab = buildHomeTab;
  exports.buildNavTabs = buildNavTabs;
  exports.colors = colors;
  exports.determineNavRouteOrUrl = determineNavRouteOrUrl;
  exports.filterNavTabs = filterNavTabs;
  exports.generateAppUrl = generateAppUrl;
  exports.getAngularLink = getAngularLink;
  exports.getColdFusionBaseUrl = getColdFusionBaseUrl;
  exports.getColdFusionLink = getColdFusionLink;
  exports.getColdFusionLinkAppVersion = getColdFusionLinkAppVersion;
  exports.isAnnuityOnly = isAnnuityOnly;
  exports.isDev = isDev;
  exports.isHigherEnvironment = isHigherEnvironment;
  exports.isProduction = isProduction;
  exports.isQA = isQA;
  exports.isStaging = isStaging;
  exports.isStructuredProductsOnly = isStructuredProductsOnly;
  exports.isTabDropdown = isTabDropdown;
  exports.isUAT = isUAT;
  exports.loadDefaultNavTabs = loadDefaultNavTabs;
  exports.screenSizes = screenSizes;
  exports.spacing = spacing;
  exports.userHasAccess = userHasAccess;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
