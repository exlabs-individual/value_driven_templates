webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/ui/hamburger/hamburger.component.tsx":
/*!**************************************************!*\
  !*** ./src/ui/hamburger/hamburger.component.tsx ***!
  \**************************************************/
/*! exports provided: Hambuerger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hambuerger", function() { return Hambuerger; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hamburger_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hamburger.styles */ "./src/ui/hamburger/hamburger.styles.ts");
var _jsxFileName = "/Users/mikolajwargowski/Documents/projects/value_driven_templates/src/ui/hamburger/hamburger.component.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Hambuerger = ({
  isOpen,
  onClick,
  theme = 'primary'
}) => {
  return __jsx(_hamburger_styles__WEBPACK_IMPORTED_MODULE_1__["StyledBurger"], {
    open: isOpen,
    onClick: onClick,
    themeType: theme,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }));
};

/***/ }),

/***/ "./src/ui/hamburger/hamburger.styles.ts":
/*!**********************************************!*\
  !*** ./src/ui/hamburger/hamburger.styles.ts ***!
  \**********************************************/
/*! exports provided: StyledBurger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledBurger", function() { return StyledBurger; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

const StyledBurger = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button.attrs(({
  open = false,
  themeType = 'primary'
}) => ({
  open,
  themeType
})).withConfig({
  displayName: "hamburgerstyles__StyledBurger",
  componentId: "sc-1suem20-0"
})(["background-color:none;border:none;outline:none;padding:0;width:2rem;height:2rem;display:flex;flex-direction:column;justify-content:space-around;transform-origin:1px;cursor:pointer;& > div{width:32px;height:4px;background-color:", ";border-radius:10px;transition:transform 0.3s ease,opacity 0.3s ease;position:relative;transform-origin:1px;&:first-child{transform:", ";}&:nth-child(2){opacity:", ";transform:", ";}&:nth-child(3){transform:", ";}}"], ({
  theme,
  themeType
}) => themeType === 'primary' ? theme.color.white : theme.color.black, ({
  open
}) => open ? 'rotate(45deg)' : 'rotate(0)', ({
  open
}) => open ? '0' : '1', ({
  open
}) => open ? 'translateX(20px)' : 'translateX(0)', ({
  open
}) => open ? 'rotate(-45deg)' : 'rotate(0)');

/***/ }),

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
/* harmony import */ var _hamburger_hamburger_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hamburger/hamburger.component */ "./src/ui/hamburger/hamburger.component.tsx");
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
      lineNumber: 21,
      columnNumber: 5
    }
  }, __jsx(_logo_logo_component__WEBPACK_IMPORTED_MODULE_4__["Logo"], {
    theme: isSticky ? 'primary' : 'secondary',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }), __jsx(_header_styles__WEBPACK_IMPORTED_MODULE_1__["MenuContainer"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, __jsx(_hamburger_hamburger_component__WEBPACK_IMPORTED_MODULE_5__["Hambuerger"], {
    isOpen: isMenuVisible,
    onClick: onMenuClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  })));
};

/***/ })

})
//# sourceMappingURL=_app.js.3e069e3f62383899ec4e.hot-update.js.map