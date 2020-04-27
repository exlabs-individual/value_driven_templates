webpackHotUpdate("static/development/pages/about.js",{

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/construct.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
false,

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
false,

/***/ "./node_modules/function-bind/implementation.js":
false,

/***/ "./node_modules/function-bind/index.js":
false,

/***/ "./node_modules/has/src/index.js":
false,

/***/ "./node_modules/native-url/dist/index.js":
false,

/***/ "./node_modules/next/dist/build/polyfills/object.assign/index.js":
false,

/***/ "./node_modules/next/dist/client/link.js":
false,

/***/ "./node_modules/next/dist/client/router.js":
false,

/***/ "./node_modules/next/dist/client/with-router.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
false,

/***/ "./node_modules/next/link.js":
false,

/***/ "./node_modules/prop-types-exact/build/helpers/isPlainObject.js":
false,

/***/ "./node_modules/prop-types-exact/build/index.js":
false,

/***/ "./node_modules/querystring-es3/decode.js":
false,

/***/ "./node_modules/querystring-es3/encode.js":
false,

/***/ "./node_modules/querystring-es3/index.js":
false,

/***/ "./node_modules/regenerator-runtime/runtime.js":
false,

/***/ "./src/app/about/about-container.component.tsx":
/*!*****************************************************!*\
  !*** ./src/app/about/about-container.component.tsx ***!
  \*****************************************************/
/*! exports provided: AboutContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutContainer", function() { return AboutContainer; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _about_vde_about_vde_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about-vde/about-vde.component */ "./src/app/about/about-vde/about-vde.component.tsx");
/* harmony import */ var _our_values_our_values_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./our-values/our-values.component */ "./src/app/about/our-values/our-values.component.tsx");
/* harmony import */ var _sharing_sharing_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sharing/sharing.component */ "./src/app/about/sharing/sharing.component.tsx");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/index.js");
/* harmony import */ var react_fullpage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-fullpage */ "./node_modules/react-fullpage/index.js");
/* harmony import */ var react_fullpage__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_fullpage__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ui_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ui/footer/footer.component */ "./src/ui/footer/footer.component.tsx");


var _jsxFileName = "/Users/mikolajwargowski/Documents/projects/value_driven_templates/src/app/about/about-container.component.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;








const Animate = (_ref) => {
  let {
    transitionIn,
    transition = 'fade'
  } = _ref,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["transitionIn", "transition"]);

  return __jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_6__["CSSTransition"], {
    in: transitionIn,
    unmountOnExit: true,
    timeout: 2000,
    classNames: transition,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 3
    }
  }, __jsx("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: transition
  }, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  })));
};

const AboutContainer = () => {
  const options = {
    sectionClassName: 'section',
    anchors: ['about-vde', 'our-values', 'sharing'],
    scrollBar: false,
    navigation: false,
    verticalAlign: false,
    arrowNavigation: false,
    scrollOverflow: false
  };
  const [isScrollingTop, setScrollingTop] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false);
  const [lastScroll, setLastScroll] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(0);

  const onScroll = states => {
    setScrollingTop(lastScroll > states.activeSection);
    setLastScroll(states.activeSection);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(react_fullpage__WEBPACK_IMPORTED_MODULE_7__["SectionsContainer"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, options, {
    scrollCallback: onScroll,
    sectionPaddingTop: isScrollingTop && lastScroll > 0 ? '35px' : '0px',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }), __jsx(react_fullpage__WEBPACK_IMPORTED_MODULE_7__["Section"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, __jsx(_about_vde_about_vde_component__WEBPACK_IMPORTED_MODULE_3__["AboutVDE"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 11
    }
  })), __jsx(react_fullpage__WEBPACK_IMPORTED_MODULE_7__["Section"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, __jsx(_our_values_our_values_component__WEBPACK_IMPORTED_MODULE_4__["OurValues"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  })), __jsx(react_fullpage__WEBPACK_IMPORTED_MODULE_7__["Section"], {
    sectionPaddingBottom: "60px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, __jsx(_sharing_sharing_component__WEBPACK_IMPORTED_MODULE_5__["Sharing"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  })), __jsx(react_fullpage__WEBPACK_IMPORTED_MODULE_7__["Footer"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }, __jsx(_ui_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["Footer"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  }))));
};

/***/ }),

/***/ "./src/context/mobile-menu/mobile-menu.action-creators.ts":
false,

/***/ "./src/context/mobile-menu/mobile-menu.context.ts":
false,

/***/ "./src/context/mobile-menu/mobile-menu.reducer.ts":
false,

/***/ "./src/hooks/use-mobile-menu/use-mobile-menu.hook.ts":
false,

/***/ "./src/routing/app-routes.tsx":
false,

/***/ "./src/ui/hamburger/hamburger.component.tsx":
false,

/***/ "./src/ui/hamburger/hamburger.styles.ts":
false,

/***/ "./src/ui/logo/logo.component.tsx":
false,

/***/ "./src/ui/logo/logo.styles.ts":
false,

/***/ "./src/ui/mobile-header/header.component.tsx":
false,

/***/ "./src/ui/mobile-header/header.styles.ts":
false

})
//# sourceMappingURL=about.js.ff5552ee6c28ba7d9987.hot-update.js.map