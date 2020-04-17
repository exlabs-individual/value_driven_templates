webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/layout/layout.provider.tsx":
/*!****************************************!*\
  !*** ./src/layout/layout.provider.tsx ***!
  \****************************************/
/*! exports provided: LayoutProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutProvider", function() { return LayoutProvider; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layout_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout.styles */ "./src/layout/layout.styles.ts");
/* harmony import */ var _hooks_use_device_detect_use_device_detect_hook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/use-device-detect/use-device-detect.hook */ "./src/hooks/use-device-detect/use-device-detect.hook.ts");
/* harmony import */ var _app_home_mobile_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app/home/mobile-header/header.component */ "./src/app/home/mobile-header/header.component.tsx");
/* harmony import */ var _ui_mobile_menu_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui/mobile-menu/menu.component */ "./src/ui/mobile-menu/menu.component.tsx");
/* harmony import */ var _app_home_desktop_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app/home/desktop-header/header.component */ "./src/app/home/desktop-header/header.component.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _theme_theme_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../theme/theme.config */ "./src/theme/theme.config.ts");
/* harmony import */ var _hooks_use_mobile_menu_use_mobile_menu_hook__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../hooks/use-mobile-menu/use-mobile-menu.hook */ "./src/hooks/use-mobile-menu/use-mobile-menu.hook.ts");
var _jsxFileName = "/Users/mikolajwargowski/Documents/projects/value_driven_templates/src/layout/layout.provider.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









const LayoutProvider = ({
  children
}) => {
  const {
    isMobile
  } = Object(_hooks_use_device_detect_use_device_detect_hook__WEBPACK_IMPORTED_MODULE_3__["useDeviceDetect"])();
  const {
    state: {
      isVisible
    }
  } = Object(_hooks_use_mobile_menu_use_mobile_menu_hook__WEBPACK_IMPORTED_MODULE_9__["useMobileMenuState"])();
  return __jsx(_layout_styles__WEBPACK_IMPORTED_MODULE_2__["Layout"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "357464682",
    __self: undefined
  }, "html,body{margin:0;padding:0;font-family:'Montserrat',sans-serif;background-color:#f9f9f9;-webkit-overflow-scrolling:touch;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWtvbGFqd2FyZ293c2tpL0RvY3VtZW50cy9wcm9qZWN0cy92YWx1ZV9kcml2ZW5fdGVtcGxhdGVzL3NyYy9sYXlvdXQvbGF5b3V0LnByb3ZpZGVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQlMsQUFJc0IsU0FDQyxVQUMyQixvQ0FDWix5QkFDUSxpQ0FDbkMiLCJmaWxlIjoiL1VzZXJzL21pa29sYWp3YXJnb3dza2kvRG9jdW1lbnRzL3Byb2plY3RzL3ZhbHVlX2RyaXZlbl90ZW1wbGF0ZXMvc3JjL2xheW91dC9sYXlvdXQucHJvdmlkZXIudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExheW91dCB9IGZyb20gJy4vbGF5b3V0LnN0eWxlcyc7XG5pbXBvcnQgeyB1c2VEZXZpY2VEZXRlY3QgfSBmcm9tICcuLi9ob29rcy91c2UtZGV2aWNlLWRldGVjdC91c2UtZGV2aWNlLWRldGVjdC5ob29rJztcbmltcG9ydCB7IEhlYWRlciBhcyBNb2JpbGVIZWFkZXIgfSBmcm9tICcuLi9hcHAvaG9tZS9tb2JpbGUtaGVhZGVyL2hlYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTW9iaWxlTWVudVN0YXRlUHJvdmlkZXIgfSBmcm9tICcuLi9wcm92aWRlcnMvbW9iaWxlLW1lbnUucHJvdmlkZXInO1xuaW1wb3J0IHsgTWVudSB9IGZyb20gJy4uL3VpL21vYmlsZS1tZW51L21lbnUuY29tcG9uZW50JztcbmltcG9ydCB7IEhlYWRlciBhcyBEZXNrdG9wSGVhZGVyIH0gZnJvbSAnLi4vYXBwL2hvbWUvZGVza3RvcC1oZWFkZXIvaGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgdGhlbWUgfSBmcm9tICcuLi90aGVtZS90aGVtZS5jb25maWcnO1xuaW1wb3J0IHsgdXNlTW9iaWxlTWVudVN0YXRlIH0gZnJvbSAnLi4vaG9va3MvdXNlLW1vYmlsZS1tZW51L3VzZS1tb2JpbGUtbWVudS5ob29rJztcblxuZXhwb3J0IGNvbnN0IExheW91dFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlIH0pID0+IHtcbiAgY29uc3QgeyBpc01vYmlsZSB9ID0gdXNlRGV2aWNlRGV0ZWN0KCk7XG4gIGNvbnN0IHtcbiAgICBzdGF0ZTogeyBpc1Zpc2libGUgfSxcbiAgfSA9IHVzZU1vYmlsZU1lbnVTdGF0ZSgpO1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAgICB7YFxuICAgICAgICAgIGh0bWwsXG4gICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG4gICAgICAgICAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICB7aXNNb2JpbGUgPyAoXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgIDxNb2JpbGVIZWFkZXIgLz5cblxuICAgICAgICAgICAgICA8ZGl2PntjaGlsZHJlbn08L2Rpdj5cbiAgICAgICAgICAgICAgPE1lbnUgLz5cbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxEZXNrdG9wSGVhZGVyIC8+XG4gICAgICAgICAgICAgIDxkaXY+e2NoaWxkcmVufTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG4iXX0= */\n/*@ sourceURL=/Users/mikolajwargowski/Documents/projects/value_driven_templates/src/layout/layout.provider.tsx */"), __jsx(styled_components__WEBPACK_IMPORTED_MODULE_7__["ThemeProvider"], {
    theme: _theme_theme_config__WEBPACK_IMPORTED_MODULE_8__["theme"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, isMobile ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, __jsx(_app_home_mobile_header_header_component__WEBPACK_IMPORTED_MODULE_4__["Header"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 15
    }
  }), __jsx("div", {
    className: "jsx-357464682",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 15
    }
  }, children), __jsx(_ui_mobile_menu_menu_component__WEBPACK_IMPORTED_MODULE_5__["Menu"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 15
    }
  })) : __jsx("div", {
    className: "jsx-357464682",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, __jsx(_app_home_desktop_header_header_component__WEBPACK_IMPORTED_MODULE_6__["Header"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 15
    }
  }), __jsx("div", {
    className: "jsx-357464682",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 15
    }
  }, children)))));
};

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
/* harmony import */ var _menu_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.styles */ "./src/ui/mobile-menu/menu.styles.ts");
/* harmony import */ var _hooks_use_mobile_menu_use_mobile_menu_hook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/use-mobile-menu/use-mobile-menu.hook */ "./src/hooks/use-mobile-menu/use-mobile-menu.hook.ts");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _context_mobile_menu_mobile_menu_action_creators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/mobile-menu/mobile-menu.action-creators */ "./src/context/mobile-menu/mobile-menu.action-creators.ts");
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
      lineNumber: 18,
      columnNumber: 5
    }
  }, isVisible && __jsx(_menu_styles__WEBPACK_IMPORTED_MODULE_1__["StyledNav"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, __jsx(_menu_styles__WEBPACK_IMPORTED_MODULE_1__["StyledList"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }, __jsx(_menu_styles__WEBPACK_IMPORTED_MODULE_1__["StyledListItem"], {
    onClick: onMenuItemClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 15
    }
  }, "Home")), __jsx(_menu_styles__WEBPACK_IMPORTED_MODULE_1__["StyledListItem"], {
    onClick: onMenuItemClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 15
    }
  }, "About the project")), __jsx(_menu_styles__WEBPACK_IMPORTED_MODULE_1__["StyledListItem"], {
    onClick: onMenuItemClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 15
    }
  }, "How to contribute?")))));
};

/***/ }),

/***/ "./src/ui/mobile-menu/menu.styles.ts":
/*!*******************************************!*\
  !*** ./src/ui/mobile-menu/menu.styles.ts ***!
  \*******************************************/
/*! exports provided: StyledNav, StyledList, StyledListItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledNav", function() { return StyledNav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledList", function() { return StyledList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledListItem", function() { return StyledListItem; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

const StyledNav = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].nav.withConfig({
  displayName: "menustyles__StyledNav",
  componentId: "sc-1amfo06-0"
})(["width:100%;height:calc(100vh - 63px);border-top:1px solid #ededed;background-color:", ";position:sticky;position:-webkit-sticky;top:62px;z-index:999;overflow:hidden;-webkit-overflow-scrolling:auto;"], ({
  theme
}) => theme.color.primary);
const StyledList = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].ul.withConfig({
  displayName: "menustyles__StyledList",
  componentId: "sc-1amfo06-1"
})(["list-style:none;padding:10px 20px;& > li:last-child{margin-bottom:0;}"]);
const StyledListItem = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].li.withConfig({
  displayName: "menustyles__StyledListItem",
  componentId: "sc-1amfo06-2"
})(["border-bottom:1px solid #ffffff;margin-bottom:30px;font-size:19px;padding-bottom:10px;& > a{color:", ";text-decoration:none;}"], ({
  theme
}) => theme.color.white);

/***/ })

})
//# sourceMappingURL=_app.js.dfcb385c097d49eaa5ce.hot-update.js.map