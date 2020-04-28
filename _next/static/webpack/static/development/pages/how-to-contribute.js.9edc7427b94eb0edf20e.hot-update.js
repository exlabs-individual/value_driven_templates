webpackHotUpdate("static/development/pages/how-to-contribute.js",{

/***/ "./src/app/how-to-contribute/header/how-to-contribute-header.component.tsx":
/*!*********************************************************************************!*\
  !*** ./src/app/how-to-contribute/header/how-to-contribute-header.component.tsx ***!
  \*********************************************************************************/
/*! exports provided: HowToContributeHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HowToContributeHeader", function() { return HowToContributeHeader; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-anchor-link-smooth-scroll */ "./node_modules/react-anchor-link-smooth-scroll/lib/anchor-link.js");
/* harmony import */ var react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ui_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/header/header.component */ "./src/ui/header/header.component.tsx");
/* harmony import */ var _ui_header_header_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/header/header.styles */ "./src/ui/header/header.styles.ts");
/* harmony import */ var _ui_special_link_special_link_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/special-link/special-link.component */ "./src/ui/special-link/special-link.component.tsx");
var _jsxFileName = "/Users/mikolajwargowski/Documents/projects/value_driven_templates/src/app/how-to-contribute/header/how-to-contribute-header.component.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const HowToContributeHeader = () => {
  const {
    isMobile
  } = useDeviceDetect();
  return __jsx(_ui_header_header_component__WEBPACK_IMPORTED_MODULE_2__["Header"], {
    imageUrl: "".concat("", "/about/header.svg"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, __jsx(_ui_header_header_styles__WEBPACK_IMPORTED_MODULE_3__["HeaderTitle"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, "Hello, We are Exlabs."), isMobile && __jsx(_ui_header_header_styles__WEBPACK_IMPORTED_MODULE_3__["HeaderImage"], {
    alt: "Header",
    src: "".concat("", "/about/header.svg"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }), __jsx(_ui_header_header_styles__WEBPACK_IMPORTED_MODULE_3__["HeaderSubtitle"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, "We deliver high-level consultancy & flexible, complex data-driven software solutions for the companies of the future."), __jsx(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_1___default.a, {
    offset: "100",
    href: "#about-content",
    style: {
      textDecoration: 'none'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, __jsx(_ui_special_link_special_link_component__WEBPACK_IMPORTED_MODULE_4__["SpecialLink"], {
    href: "#about-content",
    label: "Read about Value Driven Engineering",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  })));
};

/***/ }),

/***/ "./src/app/how-to-contribute/how-to-contribute-container.component.tsx":
/*!*****************************************************************************!*\
  !*** ./src/app/how-to-contribute/how-to-contribute-container.component.tsx ***!
  \*****************************************************************************/
/*! exports provided: HowToContributeContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HowToContributeContainer", function() { return HowToContributeContainer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _header_how_to_contribute_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/how-to-contribute-header.component */ "./src/app/how-to-contribute/header/how-to-contribute-header.component.tsx");
var _jsxFileName = "/Users/mikolajwargowski/Documents/projects/value_driven_templates/src/app/how-to-contribute/how-to-contribute-container.component.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const HowToContributeContainer = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_header_how_to_contribute_header_component__WEBPACK_IMPORTED_MODULE_1__["HowToContributeHeader"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }));
};

/***/ }),

/***/ "./src/layout/layout.styles.ts":
false,

/***/ "./src/pages/how-to-contribute.tsx":
/*!*****************************************!*\
  !*** ./src/pages/how-to-contribute.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_use_device_detect_use_device_detect_hook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/use-device-detect/use-device-detect.hook */ "./src/hooks/use-device-detect/use-device-detect.hook.ts");
/* harmony import */ var _app_how_to_contribute_how_to_contribute_container_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/how-to-contribute/how-to-contribute-container.component */ "./src/app/how-to-contribute/how-to-contribute-container.component.tsx");
var _jsxFileName = "/Users/mikolajwargowski/Documents/projects/value_driven_templates/src/pages/how-to-contribute.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const About = () => {
  // TODO: Finish the page
  const {
    isMobile,
    isDesktop
  } = Object(_hooks_use_device_detect_use_device_detect_hook__WEBPACK_IMPORTED_MODULE_1__["useDeviceDetect"])();
  return __jsx(_app_how_to_contribute_how_to_contribute_container_component__WEBPACK_IMPORTED_MODULE_2__["HowToContributeContainer"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 10
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ })

})
//# sourceMappingURL=how-to-contribute.js.9edc7427b94eb0edf20e.hot-update.js.map