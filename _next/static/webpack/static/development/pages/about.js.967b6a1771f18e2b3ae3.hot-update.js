webpackHotUpdate("static/development/pages/about.js",{

/***/ "./src/app/about/header/about-header.component.tsx":
/*!*********************************************************!*\
  !*** ./src/app/about/header/about-header.component.tsx ***!
  \*********************************************************/
/*! exports provided: AboutHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutHeader", function() { return AboutHeader; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-anchor-link-smooth-scroll */ "./node_modules/react-anchor-link-smooth-scroll/lib/anchor-link.js");
/* harmony import */ var react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _about_header_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about-header.styles */ "./src/app/about/header/about-header.styles.ts");
/* harmony import */ var _ui_special_link_special_link_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/special-link/special-link.component */ "./src/ui/special-link/special-link.component.tsx");
/* harmony import */ var _hooks_use_device_detect_use_device_detect_hook__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../hooks/use-device-detect/use-device-detect.hook */ "./src/hooks/use-device-detect/use-device-detect.hook.ts");
/* harmony import */ var _ui_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ui/header/header.component */ "./src/ui/header/header.component.tsx");
var _jsxFileName = "/Users/mikolajwargowski/Documents/projects/value_driven_templates/src/app/about/header/about-header.component.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const AboutHeader = () => {
  const {
    isMobile
  } = Object(_hooks_use_device_detect_use_device_detect_hook__WEBPACK_IMPORTED_MODULE_4__["useDeviceDetect"])();
  return __jsx(_ui_header_header_component__WEBPACK_IMPORTED_MODULE_5__["Header"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, __jsx(_about_header_styles__WEBPACK_IMPORTED_MODULE_2__["HeaderTitle"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, "Hello, We are Exlabs."), isMobile && __jsx(HeaderImage, {
    src: "".concat("", "/about/header.svg"),
    alt: "About header",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }), __jsx(_about_header_styles__WEBPACK_IMPORTED_MODULE_2__["HeaderSubtitle"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
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
      lineNumber: 31,
      columnNumber: 7
    }
  }, __jsx(_ui_special_link_special_link_component__WEBPACK_IMPORTED_MODULE_3__["SpecialLink"], {
    href: "#about-content",
    label: "Read about Value Driven Engineering",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  })));
};

/***/ }),

/***/ "./src/ui/header/header.component.tsx":
/*!********************************************!*\
  !*** ./src/ui/header/header.component.tsx ***!
  \********************************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _header_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.styles */ "./src/ui/header/header.styles.ts");
var _jsxFileName = "/Users/mikolajwargowski/Documents/projects/value_driven_templates/src/ui/header/header.component.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Header = ({
  children,
  imageUrl
}) => {
  return __jsx(_header_styles__WEBPACK_IMPORTED_MODULE_1__["StyledHeader"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, __jsx(_header_styles__WEBPACK_IMPORTED_MODULE_1__["StyledContainer"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, __jsx(_header_styles__WEBPACK_IMPORTED_MODULE_1__["TextContainer"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, children), __jsx(_header_styles__WEBPACK_IMPORTED_MODULE_1__["HeaderImage"], {
    alt: "Header",
    src: imageUrl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  })));
};

/***/ }),

/***/ "./src/ui/header/header.styles.ts":
/*!****************************************!*\
  !*** ./src/ui/header/header.styles.ts ***!
  \****************************************/
/*! exports provided: StyledHeader, StyledContainer, HeaderTitle, HeaderSubtitle, TextContainer, HeaderImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledHeader", function() { return StyledHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledContainer", function() { return StyledContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderTitle", function() { return HeaderTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderSubtitle", function() { return HeaderSubtitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextContainer", function() { return TextContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderImage", function() { return HeaderImage; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _container_container_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../container/container.styles */ "./src/ui/container/container.styles.ts");


const StyledHeader = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].header.withConfig({
  displayName: "headerstyles__StyledHeader",
  componentId: "sc-1pir9d-0"
})([""]);
const StyledContainer = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(_container_container_styles__WEBPACK_IMPORTED_MODULE_1__["Container"]).withConfig({
  displayName: "headerstyles__StyledContainer",
  componentId: "sc-1pir9d-1"
})([""]);
const HeaderTitle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].h2.withConfig({
  displayName: "headerstyles__HeaderTitle",
  componentId: "sc-1pir9d-2"
})([""]);
const HeaderSubtitle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].h3.withConfig({
  displayName: "headerstyles__HeaderSubtitle",
  componentId: "sc-1pir9d-3"
})([""]);
const TextContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].section.withConfig({
  displayName: "headerstyles__TextContainer",
  componentId: "sc-1pir9d-4"
})([""]);
const HeaderImage = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].img.withConfig({
  displayName: "headerstyles__HeaderImage",
  componentId: "sc-1pir9d-5"
})([""]);

/***/ })

})
//# sourceMappingURL=about.js.967b6a1771f18e2b3ae3.hot-update.js.map