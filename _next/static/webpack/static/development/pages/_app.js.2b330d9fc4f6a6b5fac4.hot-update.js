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
/* harmony import */ var _context_mobile_menu_mobile_menu_action_creators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/mobile-menu/mobile-menu.action-creators */ "./src/context/mobile-menu/mobile-menu.action-creators.ts");
/* harmony import */ var _mobile_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mobile-header/header.component */ "./src/ui/mobile-header/header.component.tsx");
/* harmony import */ var _menu_nav_menu_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu-nav/menu-nav.component */ "./src/ui/mobile-menu/menu-nav/menu-nav.component.tsx");
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
    dispatch(Object(_context_mobile_menu_mobile_menu_action_creators__WEBPACK_IMPORTED_MODULE_3__["toggleMenu"])());
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  }, isVisible && __jsx(_menu_styles__WEBPACK_IMPORTED_MODULE_1__["MenuContainer"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, __jsx(_mobile_header_header_component__WEBPACK_IMPORTED_MODULE_4__["Header"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }), __jsx(_menu_nav_menu_nav_component__WEBPACK_IMPORTED_MODULE_5__["MenuNav"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  })));
};

/***/ }),

/***/ "./src/ui/mobile-menu/menu.styles.ts":
/*!*******************************************!*\
  !*** ./src/ui/mobile-menu/menu.styles.ts ***!
  \*******************************************/
/*! exports provided: MenuContainer, StyledNav, StyledList, StyledListItem, SpecialListItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuContainer", function() { return MenuContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledNav", function() { return StyledNav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledList", function() { return StyledList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledListItem", function() { return StyledListItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecialListItem", function() { return SpecialListItem; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

const MenuContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].section.withConfig({
  displayName: "menustyles__MenuContainer",
  componentId: "sc-1amfo06-0"
})([""]);
const StyledNav = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].nav.withConfig({
  displayName: "menustyles__StyledNav",
  componentId: "sc-1amfo06-1"
})(["width:100%;height:100vh;border-top:1px solid #ededed;background-color:", ";position:fixed;position:-webkit-sticky;top:0;z-index:999;overflow:hidden;"], ({
  theme
}) => theme.color.primary);
const StyledList = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].ul.withConfig({
  displayName: "menustyles__StyledList",
  componentId: "sc-1amfo06-2"
})(["list-style:none;padding:10px 20px;& > li:last-child{margin-bottom:0;}"]);
const StyledListItem = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].li.withConfig({
  displayName: "menustyles__StyledListItem",
  componentId: "sc-1amfo06-3"
})(["border-bottom:1px solid #ffffff;margin-bottom:30px;font-size:19px;padding-bottom:10px;& > a{color:", ";text-decoration:none;}"], ({
  theme
}) => theme.color.white);
const SpecialListItem = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].li.withConfig({
  displayName: "menustyles__SpecialListItem",
  componentId: "sc-1amfo06-4"
})(["display:flex;justify-content:center;align-items:center;& > a{padding:10px 20px;background-color:", ";color:", ";text-decoration:none;border-radius:4px;transition:background-color 0.2s ease;&:hover{background-color:", ";}}"], ({
  theme
}) => theme.color.red, ({
  theme
}) => theme.color.white, ({
  theme
}) => theme.color['dark-red']);

/***/ })

})
//# sourceMappingURL=_app.js.2b330d9fc4f6a6b5fac4.hot-update.js.map