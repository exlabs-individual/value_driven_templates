webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/ui/container/container.styles.ts":
/*!**********************************************!*\
  !*** ./src/ui/container/container.styles.ts ***!
  \**********************************************/
/*! exports provided: Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

const Container = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "containerstyles__Container",
  componentId: "sc-16wrb8n-0"
})(["max-width:1440px;"]);

/***/ }),

/***/ "./src/ui/desktop-navigation/desktop-navigation.component.tsx":
/*!********************************************************************!*\
  !*** ./src/ui/desktop-navigation/desktop-navigation.component.tsx ***!
  \********************************************************************/
/*! exports provided: DesktopNavigation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesktopNavigation", function() { return DesktopNavigation; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _desktop_navigation_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./desktop-navigation.styles */ "./src/ui/desktop-navigation/desktop-navigation.styles.ts");
/* harmony import */ var _logo_logo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../logo/logo.component */ "./src/ui/logo/logo.component.tsx");
/* harmony import */ var _routing_app_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../routing/app-routes */ "./src/routing/app-routes.tsx");
/* harmony import */ var _special_link_special_link_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../special-link/special-link.component */ "./src/ui/special-link/special-link.component.tsx");
/* harmony import */ var _ui_container_container_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/container/container.styles */ "./src/ui/container/container.styles.ts");
var _jsxFileName = "/Users/mikolajwargowski/Documents/projects/value_driven_templates/src/ui/desktop-navigation/desktop-navigation.component.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const DesktopNavigation = ({
  theme = 'primary',
  isSticky = false
}) => {
  return __jsx(_desktop_navigation_styles__WEBPACK_IMPORTED_MODULE_2__["NavigationContainer"], {
    className: "navigation",
    themeType: theme,
    isSticky: isSticky,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, __jsx(_ui_container_container_styles__WEBPACK_IMPORTED_MODULE_6__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, __jsx(_logo_logo_component__WEBPACK_IMPORTED_MODULE_3__["Logo"], {
    theme: theme,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }), __jsx(_desktop_navigation_styles__WEBPACK_IMPORTED_MODULE_2__["StyledNav"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, __jsx(_desktop_navigation_styles__WEBPACK_IMPORTED_MODULE_2__["StyledList"], {
    themeType: theme,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, __jsx("li", {
    className: "nav-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: _routing_app_routes__WEBPACK_IMPORTED_MODULE_4__["AppRoute"].ABOUT,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 15
    }
  }, __jsx("a", {
    className: "nav-item__link",
    href: _routing_app_routes__WEBPACK_IMPORTED_MODULE_4__["AppRoute"].ABOUT,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  }, "About"))), __jsx("li", {
    className: "nav-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: _routing_app_routes__WEBPACK_IMPORTED_MODULE_4__["AppRoute"].HOW_TO_CONTRIBUTE,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 15
    }
  }, __jsx("a", {
    className: "nav-item__link",
    href: _routing_app_routes__WEBPACK_IMPORTED_MODULE_4__["AppRoute"].HOW_TO_CONTRIBUTE,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }
  }, "How to contribute?"))), __jsx("li", {
    className: "nav-item nav-item--primary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, __jsx(_special_link_special_link_component__WEBPACK_IMPORTED_MODULE_5__["SpecialLink"], {
    href: "https://exlabs.com",
    label: "Get in touch",
    target: "blank",
    color: "red",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 15
    }
  }))))));
};

/***/ })

})
//# sourceMappingURL=_app.js.5d185bb1506f4f2fa4fd.hot-update.js.map