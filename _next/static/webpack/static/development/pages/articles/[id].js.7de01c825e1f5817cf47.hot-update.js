webpackHotUpdate("static/development/pages/articles/[id].js",{

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

/***/ })

})
//# sourceMappingURL=[id].js.7de01c825e1f5817cf47.hot-update.js.map