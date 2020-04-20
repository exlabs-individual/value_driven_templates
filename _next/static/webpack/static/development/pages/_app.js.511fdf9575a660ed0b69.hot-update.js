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
    id: "2400830014",
    __self: undefined
  }, "html,body{margin:0;padding:0;font-family:'Montserrat','Open Sans',sans-serif;background-color:#f9f9f9;-webkit-overflow-scrolling:touch;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWtvbGFqd2FyZ293c2tpL0RvY3VtZW50cy9wcm9qZWN0cy92YWx1ZV9kcml2ZW5fdGVtcGxhdGVzL3NyYy9sYXlvdXQvbGF5b3V0LnByb3ZpZGVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQlMsQUFJc0IsU0FDQyxVQUN3QyxnREFDekIseUJBQ1EsaUNBQ25DIiwiZmlsZSI6Ii9Vc2Vycy9taWtvbGFqd2FyZ293c2tpL0RvY3VtZW50cy9wcm9qZWN0cy92YWx1ZV9kcml2ZW5fdGVtcGxhdGVzL3NyYy9sYXlvdXQvbGF5b3V0LnByb3ZpZGVyLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tICcuL2xheW91dC5zdHlsZXMnO1xuaW1wb3J0IHsgdXNlRGV2aWNlRGV0ZWN0IH0gZnJvbSAnLi4vaG9va3MvdXNlLWRldmljZS1kZXRlY3QvdXNlLWRldmljZS1kZXRlY3QuaG9vayc7XG5pbXBvcnQgeyBIZWFkZXIgYXMgTW9iaWxlSGVhZGVyIH0gZnJvbSAnLi4vYXBwL2hvbWUvbW9iaWxlLWhlYWRlci9oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE1lbnUgfSBmcm9tICcuLi91aS9tb2JpbGUtbWVudS9tZW51LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIZWFkZXIgYXMgRGVza3RvcEhlYWRlciB9IGZyb20gJy4uL2FwcC9ob21lL2Rlc2t0b3AtaGVhZGVyL2hlYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IHRoZW1lIH0gZnJvbSAnLi4vdGhlbWUvdGhlbWUuY29uZmlnJztcbmltcG9ydCB7IHVzZU1vYmlsZU1lbnVTdGF0ZSB9IGZyb20gJy4uL2hvb2tzL3VzZS1tb2JpbGUtbWVudS91c2UtbW9iaWxlLW1lbnUuaG9vayc7XG5pbXBvcnQgeyBGb290ZXIgfSBmcm9tICcuLi91aS9mb290ZXIvZm9vdGVyJztcblxuZXhwb3J0IGNvbnN0IExheW91dFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlIH0pID0+IHtcbiAgY29uc3QgeyBpc01vYmlsZSB9ID0gdXNlRGV2aWNlRGV0ZWN0KCk7XG4gIGNvbnN0IHtcbiAgICBzdGF0ZTogeyBpc1Zpc2libGUgfSxcbiAgfSA9IHVzZU1vYmlsZU1lbnVTdGF0ZSgpO1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAgICB7YFxuICAgICAgICAgIGh0bWwsXG4gICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JywgJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xuICAgICAgICAgICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAge2lzTW9iaWxlID8gKFxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICA8TW9iaWxlSGVhZGVyIC8+XG4gICAgICAgICAgICAgIHtpc1Zpc2libGUgJiYgPE1lbnUgLz59XG4gICAgICAgICAgICAgIDxkaXY+e2NoaWxkcmVufTwvZGl2PlxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPERlc2t0b3BIZWFkZXIgLz5cbiAgICAgICAgICAgICAgPGRpdj57Y2hpbGRyZW59PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgPC9UaGVtZVByb3ZpZGVyPlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcbiJdfQ== */\n/*@ sourceURL=/Users/mikolajwargowski/Documents/projects/value_driven_templates/src/layout/layout.provider.tsx */"), __jsx(styled_components__WEBPACK_IMPORTED_MODULE_7__["ThemeProvider"], {
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
  }), isVisible && __jsx(_ui_mobile_menu_menu_component__WEBPACK_IMPORTED_MODULE_5__["Menu"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 29
    }
  }), __jsx("div", {
    className: "jsx-2400830014",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 15
    }
  }, children)) : __jsx("div", {
    className: "jsx-2400830014",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }, __jsx(_app_home_desktop_header_header_component__WEBPACK_IMPORTED_MODULE_6__["Header"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 15
    }
  }), __jsx("div", {
    className: "jsx-2400830014",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 15
    }
  }, children)))));
};

/***/ }),

/***/ "./src/ui/footer/footer.styles.ts":
false,

/***/ "./src/ui/footer/footer.tsx":
false

})
//# sourceMappingURL=_app.js.511fdf9575a660ed0b69.hot-update.js.map