webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/ui/mobile-menu/menu.component.tsx":
/*!***********************************************!*\
  !*** ./src/ui/mobile-menu/menu.component.tsx ***!
  \***********************************************/
/*! exports provided: Menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return Menu; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _menu_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.styles */ "./src/ui/mobile-menu/menu.styles.ts");
/* harmony import */ var _hooks_use_mobile_menu_use_mobile_menu_hook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/use-mobile-menu/use-mobile-menu.hook */ "./src/hooks/use-mobile-menu/use-mobile-menu.hook.ts");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _context_mobile_menu_mobile_menu_action_creators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/mobile-menu/mobile-menu.action-creators */ "./src/context/mobile-menu/mobile-menu.action-creators.ts");
/* harmony import */ var _routing_app_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../routing/app-routes */ "./src/routing/app-routes.tsx");
var _jsxFileName = "/Users/mikolajwargowski/Documents/projects/value_driven_templates/src/ui/mobile-menu/menu.component.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const Menu = () => {
  const {
    dispatch,
    state: {
      isVisible
    }
  } = Object(_hooks_use_mobile_menu_use_mobile_menu_hook__WEBPACK_IMPORTED_MODULE_2__["useMobileMenuState"])();

  const onMenuItemClick = () => {
    dispatch(Object(_context_mobile_menu_mobile_menu_action_creators__WEBPACK_IMPORTED_MODULE_4__["toggleMenu"])());
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, isVisible && __jsx(_menu_styles__WEBPACK_IMPORTED_MODULE_1__["StyledNav"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, __jsx(_menu_styles__WEBPACK_IMPORTED_MODULE_1__["StyledList"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }, _routing_app_routes__WEBPACK_IMPORTED_MODULE_5__["navigationData"].map(navigationItem => __jsx(_menu_styles__WEBPACK_IMPORTED_MODULE_1__["StyledListItem"], {
    onClick: onMenuItemClick,
    key: navigationItem.link,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "".concat("").concat(navigationItem.link),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "".concat("").concat(navigationItem.link),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 19
    }
  }, navigationItem.label)))), __jsx(_menu_styles__WEBPACK_IMPORTED_MODULE_1__["SpecialListItem"], {
    onClick: onMenuItemClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "https://exlabs.com",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 15
    }
  }, __jsx("a", {
    rel: "noopener noreferrer",
    target: "_blank",
    href: "https://exlabs.com",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  }, "Get in touch"))))));
};

/***/ })

})
//# sourceMappingURL=_app.js.a1ab356d7c731257b3b8.hot-update.js.map