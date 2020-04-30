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
/* harmony import */ var _mobile_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mobile-header/header.component */ "./src/ui/mobile-header/header.component.tsx");
/* harmony import */ var _menu_nav_menu_nav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu-nav/menu-nav.component */ "./src/ui/mobile-menu/menu-nav/menu-nav.component.tsx");
var _jsxFileName = "/Users/mikolajwargowski/Documents/projects/value_driven_templates/src/ui/mobile-menu/menu.component.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Menu = () => {
  const {
    dispatch,
    state: {
      isVisible
    }
  } = Object(_hooks_use_mobile_menu_use_mobile_menu_hook__WEBPACK_IMPORTED_MODULE_2__["useMobileMenuState"])();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, isVisible && __jsx(_menu_styles__WEBPACK_IMPORTED_MODULE_1__["MenuContainer"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, __jsx(_mobile_header_header_component__WEBPACK_IMPORTED_MODULE_3__["Header"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }), __jsx(_menu_nav_menu_nav_component__WEBPACK_IMPORTED_MODULE_4__["MenuNav"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  })));
};

/***/ })

})
//# sourceMappingURL=_app.js.2ac3b78c84a9d808f5d9.hot-update.js.map