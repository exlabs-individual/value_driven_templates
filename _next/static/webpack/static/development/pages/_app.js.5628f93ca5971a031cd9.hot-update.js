webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/ui/mobile-menu/menu-nav/menu-nav.component.tsx":
/*!************************************************************!*\
  !*** ./src/ui/mobile-menu/menu-nav/menu-nav.component.tsx ***!
  \************************************************************/
/*! exports provided: MenuNav */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuNav", function() { return MenuNav; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _menu_nav_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu-nav.styles */ "./src/ui/mobile-menu/menu-nav/menu-nav.styles.ts");
/* harmony import */ var _routing_app_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../routing/app-routes */ "./src/routing/app-routes.tsx");
/* harmony import */ var _hooks_use_mobile_menu_use_mobile_menu_hook__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../hooks/use-mobile-menu/use-mobile-menu.hook */ "./src/hooks/use-mobile-menu/use-mobile-menu.hook.ts");
/* harmony import */ var _context_mobile_menu_mobile_menu_action_creators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../context/mobile-menu/mobile-menu.action-creators */ "./src/context/mobile-menu/mobile-menu.action-creators.ts");
var _jsxFileName = "/Users/mikolajwargowski/Documents/projects/value_driven_templates/src/ui/mobile-menu/menu-nav/menu-nav.component.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const MenuNav = () => {
  const {
    dispatch
  } = Object(_hooks_use_mobile_menu_use_mobile_menu_hook__WEBPACK_IMPORTED_MODULE_4__["useMobileMenuState"])();

  const onClick = () => dispatch(Object(_context_mobile_menu_mobile_menu_action_creators__WEBPACK_IMPORTED_MODULE_5__["toggleMenu"])());

  return __jsx(_menu_nav_styles__WEBPACK_IMPORTED_MODULE_2__["StyledNav"], {
    className: "menu-nav",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, __jsx(_menu_nav_styles__WEBPACK_IMPORTED_MODULE_2__["StyledList"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, _routing_app_routes__WEBPACK_IMPORTED_MODULE_3__["navigationData"].map(({
    label,
    link
  }) => __jsx(_menu_nav_styles__WEBPACK_IMPORTED_MODULE_2__["StyledListItem"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "".concat("").concat(link),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, __jsx(_menu_nav_styles__WEBPACK_IMPORTED_MODULE_2__["StyledLink"], {
    href: "".concat("").concat(link),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 15
    }
  }, label))))));
};

/***/ })

})
//# sourceMappingURL=_app.js.5628f93ca5971a031cd9.hot-update.js.map