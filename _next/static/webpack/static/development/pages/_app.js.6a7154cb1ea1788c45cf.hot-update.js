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
var _jsxFileName = "/Users/mikolajwargowski/Documents/projects/value_driven_templates/src/ui/mobile-menu/menu-nav/menu-nav.component.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const MenuNav = () => {
  return __jsx(_menu_nav_styles__WEBPACK_IMPORTED_MODULE_2__["StyledNav"], {
    className: "menu-nav",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, __jsx(_menu_nav_styles__WEBPACK_IMPORTED_MODULE_2__["StyledList"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, _routing_app_routes__WEBPACK_IMPORTED_MODULE_3__["navigationData"].map(({
    label,
    link
  }) => __jsx(_menu_nav_styles__WEBPACK_IMPORTED_MODULE_2__["StyledListItem"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "".concat("").concat(link),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, __jsx(_menu_nav_styles__WEBPACK_IMPORTED_MODULE_2__["StyledLink"], {
    href: "".concat("").concat(link),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 15
    }
  }, label))))));
};

/***/ }),

/***/ "./src/ui/mobile-menu/menu-nav/menu-nav.styles.ts":
/*!********************************************************!*\
  !*** ./src/ui/mobile-menu/menu-nav/menu-nav.styles.ts ***!
  \********************************************************/
/*! exports provided: StyledNav, StyledList, StyledListItem, StyledLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledNav", function() { return StyledNav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledList", function() { return StyledList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledListItem", function() { return StyledListItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledLink", function() { return StyledLink; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

const StyledNav = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].nav.withConfig({
  displayName: "menu-navstyles__StyledNav",
  componentId: "edgee-0"
})([""]);
const StyledList = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].ul.withConfig({
  displayName: "menu-navstyles__StyledList",
  componentId: "edgee-1"
})([""]);
const StyledListItem = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].li.withConfig({
  displayName: "menu-navstyles__StyledListItem",
  componentId: "edgee-2"
})([""]);
const StyledLink = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].a.withConfig({
  displayName: "menu-navstyles__StyledLink",
  componentId: "edgee-3"
})([""]);

/***/ }),

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
/* harmony import */ var _hooks_use_mobile_menu_use_mobile_menu_hook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/use-mobile-menu/use-mobile-menu.hook */ "./src/hooks/use-mobile-menu/use-mobile-menu.hook.ts");
/* harmony import */ var _context_mobile_menu_mobile_menu_action_creators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/mobile-menu/mobile-menu.action-creators */ "./src/context/mobile-menu/mobile-menu.action-creators.ts");
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
  } = Object(_hooks_use_mobile_menu_use_mobile_menu_hook__WEBPACK_IMPORTED_MODULE_1__["useMobileMenuState"])();

  const onMenuItemClick = () => {
    dispatch(Object(_context_mobile_menu_mobile_menu_action_creators__WEBPACK_IMPORTED_MODULE_2__["toggleMenu"])());
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }, isVisible && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_mobile_header_header_component__WEBPACK_IMPORTED_MODULE_3__["Header"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }), __jsx(_menu_nav_menu_nav_component__WEBPACK_IMPORTED_MODULE_4__["MenuNav"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  })));
};

/***/ })

})
//# sourceMappingURL=_app.js.6a7154cb1ea1788c45cf.hot-update.js.map