webpackHotUpdate("static/development/pages/how-to-contribute.js",{

/***/ "./src/app/home/desktop-header/header.component.tsx":
false,

/***/ "./src/app/home/desktop-header/header.styles.ts":
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
/* harmony import */ var _layout_layout_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layout/layout.styles */ "./src/layout/layout.styles.ts");
/* harmony import */ var _ui_desktop_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/desktop-header/header.component */ "./src/ui/desktop-header/header.component.tsx");
/* harmony import */ var _ui_titled_content_titled_content_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/titled-content/titled-content.component */ "./src/ui/titled-content/titled-content.component.tsx");
var _jsxFileName = "/Users/mikolajwargowski/Documents/projects/value_driven_templates/src/pages/how-to-contribute.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const About = () => {
  const {
    isMobile,
    isDesktop
  } = Object(_hooks_use_device_detect_use_device_detect_hook__WEBPACK_IMPORTED_MODULE_1__["useDeviceDetect"])();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, !isMobile && __jsx(_ui_desktop_header_header_component__WEBPACK_IMPORTED_MODULE_3__["Header"], {
    image: "how-to-contribute",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 21
    }
  }), __jsx(_layout_layout_styles__WEBPACK_IMPORTED_MODULE_2__["LayoutBody"], {
    isMobile: isMobile,
    isDesktop: isDesktop,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, __jsx(_ui_titled_content_titled_content_component__WEBPACK_IMPORTED_MODULE_4__["TitledContent"], {
    title: "How to contribute?",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rutrum blandit ultricies. Morbi interdum commodo cursus. Maecenas a tellus a arcu finibus tristique. Morbi venenatis faucibus massa. Mauris ac faucibus lectus. Praesent cursus, ligula in aliquet volutpat, purus metus pharetra quam, ut feugiat ex diam vehicula diam. Aliquam dui turpis, tempor accumsan ultrices varius, pulvinar ut metus. Mauris porttitor egestas lacinia. Curabitur elementum congue risus ut sodales. Phasellus augue risus, finibus ut erat ac, tristique finibus nibh. Phasellus vitae velit quis elit porta lacinia. Fusce at nisi nibh. Mauris et ultricies diam, in condimentum neque. Nullam dictum, tellus lobortis condimentum sagittis, metus eros dapibus nibh, at faucibus eros eros vitae diam. Duis placerat lorem nulla, eu imperdiet velit suscipit a. Morbi consequat dictum est, eu imperdiet nisl convallis sit amet. Nullam imperdiet tempor libero et elementum. Duis a ex id felis euismod faucibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi libero augue, sollicitudin ac fringilla in, laoreet non quam. Proin finibus turpis auctor magna faucibus, sit amet varius nunc euismod. Pellentesque ornare risus leo, sit amet rhoncus felis venenatis at.")));
};

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./src/ui/desktop-header/header.component.tsx":
/*!****************************************************!*\
  !*** ./src/ui/desktop-header/header.component.tsx ***!
  \****************************************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _header_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.styles */ "./src/ui/desktop-header/header.styles.ts");
/* harmony import */ var _logo_logo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../logo/logo.component */ "./src/ui/logo/logo.component.tsx");
/* harmony import */ var _hooks_use_device_detect_use_device_detect_hook__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/use-device-detect/use-device-detect.hook */ "./src/hooks/use-device-detect/use-device-detect.hook.ts");
/* harmony import */ var _routing_app_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../routing/app-routes */ "./src/routing/app-routes.tsx");
var _jsxFileName = "/Users/mikolajwargowski/Documents/projects/value_driven_templates/src/ui/desktop-header/header.component.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const Header = ({
  image
}) => {
  const {
    isDesktop
  } = Object(_hooks_use_device_detect_use_device_detect_hook__WEBPACK_IMPORTED_MODULE_4__["useDeviceDetect"])();
  return __jsx(_header_styles__WEBPACK_IMPORTED_MODULE_2__["StyledHeader"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, __jsx(_header_styles__WEBPACK_IMPORTED_MODULE_2__["Background"], {
    style: {
      height: isDesktop ? '75%' : '100%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }), __jsx(_header_styles__WEBPACK_IMPORTED_MODULE_2__["HeaderTopbar"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, __jsx(_logo_logo_component__WEBPACK_IMPORTED_MODULE_3__["Logo"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }), __jsx(_header_styles__WEBPACK_IMPORTED_MODULE_2__["StyledNav"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, __jsx("ul", {
    className: "nav-list",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }, __jsx("li", {
    className: "nav-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: _routing_app_routes__WEBPACK_IMPORTED_MODULE_5__["AppRoute"].ABOUT,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 15
    }
  }, __jsx("a", {
    href: _routing_app_routes__WEBPACK_IMPORTED_MODULE_5__["AppRoute"].ABOUT,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  }, "About"))), __jsx("li", {
    className: "nav-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: _routing_app_routes__WEBPACK_IMPORTED_MODULE_5__["AppRoute"].HOW_TO_CONTRIBUTE,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 15
    }
  }, __jsx("a", {
    href: _routing_app_routes__WEBPACK_IMPORTED_MODULE_5__["AppRoute"].HOW_TO_CONTRIBUTE,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  }, "How to contribute?"))), __jsx("li", {
    className: "nav-item nav-item--primary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "https://exlabs.com",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 15
    }
  }, __jsx("a", {
    rel: "noopener noreferrer",
    target: "_blank",
    href: "https://exlabs.com",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }
  }, "Get in touch")))))), __jsx(_header_styles__WEBPACK_IMPORTED_MODULE_2__["HeaderContent"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }, __jsx(_header_styles__WEBPACK_IMPORTED_MODULE_2__["TitleContainer"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: "title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }, "Value Driven Engineering"), __jsx("h3", {
    className: "sub-title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  }, "Powered by Exlabs"), __jsx("div", {
    className: "about-company",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  }, "We deliver high-level consultancy & flexible, complex data-driven software solutions for the companies of the future.")), isDesktop && __jsx(_header_styles__WEBPACK_IMPORTED_MODULE_2__["HeaderImage"], {
    src: "".concat("", "/").concat(image, ".svg"),
    alt: "Header",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 11
    }
  })));
};

/***/ }),

/***/ "./src/ui/desktop-header/header.styles.ts":
/*!************************************************!*\
  !*** ./src/ui/desktop-header/header.styles.ts ***!
  \************************************************/
/*! exports provided: StyledHeader, Background, StyledNav, HeaderTopbar, HeaderContent, TitleContainer, HeaderImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledHeader", function() { return StyledHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Background", function() { return Background; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledNav", function() { return StyledNav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderTopbar", function() { return HeaderTopbar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderContent", function() { return HeaderContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleContainer", function() { return TitleContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderImage", function() { return HeaderImage; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

const StyledHeader = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].header.withConfig({
  displayName: "headerstyles__StyledHeader",
  componentId: "sc-16wnop5-0"
})(["display:flex;flex-direction:column;position:relative;padding:20px 60px 40px;color:", ";"], ({
  theme
}) => theme.color.white);
const Background = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "headerstyles__Background",
  componentId: "sc-16wnop5-1"
})(["background:linear-gradient(90deg,#044aaf,#022558);position:absolute;top:0;left:0;width:100%;z-index:0;"]);
const StyledNav = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].nav.withConfig({
  displayName: "headerstyles__StyledNav",
  componentId: "sc-16wnop5-2"
})(["& > .nav-list{list-style:none;display:flex;align-items:center;& > .nav-item{z-index:2;margin-left:30px;font-weight:700;font-size:14px;cursor:pointer;& > a{color:#ccc;text-decoration:none;transition:color 0.2s ease;&:hover{color:", ";}}&--primary{background-color:", ";padding:10px 30px;border-radius:4px;transition:background-color 0.2s ease;box-shadow:0px 3px 6px rgba(0,0,0,0.2);& > a{color:", ";}&:hover{background-color:", ";}}}& > .nav-item:first-child{margin-left:0px;}}"], ({
  theme
}) => theme.color.white, ({
  theme
}) => theme.color.red, ({
  theme
}) => theme.color.white, ({
  theme
}) => theme.color['dark-red']);
const HeaderTopbar = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "headerstyles__HeaderTopbar",
  componentId: "sc-16wnop5-3"
})(["display:flex;justify-content:space-between;& > .logo-link{z-index:2;& > .logo-img{width:35px;height:35px;}& > .logo-separator{height:37px;}& > .logo-text{font-size:24px;}}"]);
const HeaderContent = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "headerstyles__HeaderContent",
  componentId: "sc-16wnop5-4"
})(["display:flex;justify-content:space-between;position:relative;align-items:flex-start;padding:0 50px;margin-top:30px;"]);
const TitleContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "headerstyles__TitleContainer",
  componentId: "sc-16wnop5-5"
})(["& > .title{font-size:37px;margin:0;}& > .sub-title{margin:0;font-size:21px;font-weight:500;margin-top:10px;}& > .about-company{margin-top:50px;max-width:90%;font-size:19px;display:flex;align-items:flex-start;padding:0;&::before{content:'';width:70px;height:2px;background-color:", ";display:block;margin:7px 10px 0 0;}}"], ({
  theme
}) => theme.color.white);
const HeaderImage = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].img.withConfig({
  displayName: "headerstyles__HeaderImage",
  componentId: "sc-16wnop5-6"
})(["width:40%;"]);

/***/ })

})
//# sourceMappingURL=how-to-contribute.js.cd04463a5ff26fb5c54c.hot-update.js.map