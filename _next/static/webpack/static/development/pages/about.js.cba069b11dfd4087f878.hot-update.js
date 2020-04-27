webpackHotUpdate("static/development/pages/about.js",{

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
/* harmony import */ var _ui_mobile_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ui/mobile-header/header.component */ "./src/ui/mobile-header/header.component.tsx");
/* harmony import */ var _ui_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../ui/footer/footer.component */ "./src/ui/footer/footer.component.tsx");
/* harmony import */ var _hooks_use_sticky_nav_use_sticky_nav_hook__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../hooks/use-sticky-nav/use-sticky-nav.hook */ "./src/hooks/use-sticky-nav/use-sticky-nav.hook.ts");


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
    sectionPaddingTop: '62px',
    sectionPaddingBottom: '50px',
    arrowNavigation: true,
    scrollOverflow: true
  };
  const stickyRef = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef(null);
  const isStickyNav = Object(_hooks_use_sticky_nav_use_sticky_nav_hook__WEBPACK_IMPORTED_MODULE_10__["useStickyNav"])({
    stickyRef
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(react_fullpage__WEBPACK_IMPORTED_MODULE_7__["Header"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }, __jsx(_ui_mobile_header_header_component__WEBPACK_IMPORTED_MODULE_8__["Header"], {
    isSticky: isStickyNav,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  })), __jsx("div", {
    ref: stickyRef,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }, __jsx(react_fullpage__WEBPACK_IMPORTED_MODULE_7__["SectionsContainer"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, options, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }), __jsx(react_fullpage__WEBPACK_IMPORTED_MODULE_7__["Section"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }, __jsx(_about_vde_about_vde_component__WEBPACK_IMPORTED_MODULE_3__["AboutVDE"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  })), __jsx(react_fullpage__WEBPACK_IMPORTED_MODULE_7__["Section"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }, __jsx(_our_values_our_values_component__WEBPACK_IMPORTED_MODULE_4__["OurValues"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  })), __jsx(react_fullpage__WEBPACK_IMPORTED_MODULE_7__["Section"], {
    sectionPaddingBottom: "60px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }, __jsx(_sharing_sharing_component__WEBPACK_IMPORTED_MODULE_5__["Sharing"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }))), __jsx(_ui_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["Footer"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  })));
};

/***/ })

})
//# sourceMappingURL=about.js.cba069b11dfd4087f878.hot-update.js.map