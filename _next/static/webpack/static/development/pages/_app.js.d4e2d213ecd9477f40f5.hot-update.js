webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/ui/mobile-header/header.component.tsx":
/*!***************************************************!*\
  !*** ./src/ui/mobile-header/header.component.tsx ***!
  \***************************************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _header_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.styles */ "./src/ui/mobile-header/header.styles.ts");
/* harmony import */ var _hooks_use_mobile_menu_use_mobile_menu_hook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/use-mobile-menu/use-mobile-menu.hook */ "./src/hooks/use-mobile-menu/use-mobile-menu.hook.ts");
/* harmony import */ var _context_mobile_menu_mobile_menu_action_creators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/mobile-menu/mobile-menu.action-creators */ "./src/context/mobile-menu/mobile-menu.action-creators.ts");
/* harmony import */ var _logo_logo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../logo/logo.component */ "./src/ui/logo/logo.component.tsx");
var _jsxFileName = "/Users/mikolajwargowski/Documents/projects/value_driven_templates/src/ui/mobile-header/header.component.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Header = ({
  isSticky = false
}) => {
  const {
    state: {
      isVisible: isMenuVisible
    },
    dispatch
  } = Object(_hooks_use_mobile_menu_use_mobile_menu_hook__WEBPACK_IMPORTED_MODULE_2__["useMobileMenuState"])();

  const onMenuClick = () => dispatch(Object(_context_mobile_menu_mobile_menu_action_creators__WEBPACK_IMPORTED_MODULE_3__["toggleMenu"])());

  return __jsx(_header_styles__WEBPACK_IMPORTED_MODULE_1__["HeaderContainer"], {
    isSticky: isSticky,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, __jsx(_logo_logo_component__WEBPACK_IMPORTED_MODULE_4__["Logo"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }), __jsx(_header_styles__WEBPACK_IMPORTED_MODULE_1__["MenuContainer"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, __jsx("button", {
    className: "menu-btn",
    onClick: onMenuClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: isMenuVisible ? "".concat("", "/close.svg") : "".concat("", "/hamburger.svg"),
    alt: "Hamburger menu",
    className: "hamburger-icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }))));
};

/***/ })

})
//# sourceMappingURL=_app.js.d4e2d213ecd9477f40f5.hot-update.js.map