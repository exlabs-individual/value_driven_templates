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
/* harmony import */ var _providers_mobile_menu_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../providers/mobile-menu.provider */ "./src/providers/mobile-menu.provider.tsx");
/* harmony import */ var _ui_mobile_menu_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ui/mobile-menu/menu.component */ "./src/ui/mobile-menu/menu.component.tsx");
/* harmony import */ var _app_home_desktop_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../app/home/desktop-header/header.component */ "./src/app/home/desktop-header/header.component.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _theme_theme_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../theme/theme.config */ "./src/theme/theme.config.ts");
var _jsxFileName = "/Users/mikolajwargowski/Documents/projects/value_driven_templates/src/layout/layout.provider.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









const LayoutProvider = ({
  children
}) => {
  const {
    isMobile
  } = Object(_hooks_use_device_detect_use_device_detect_hook__WEBPACK_IMPORTED_MODULE_3__["useDeviceDetect"])();
  return __jsx(_layout_styles__WEBPACK_IMPORTED_MODULE_2__["Layout"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "641749960",
    __self: undefined
  }, "html,body{margin:0;padding:0;font-family:'Montserrat',sans-serif;background-color:#f9f9f9;-webkit-overflow-scrolling:touch;overflow:hidden;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWtvbGFqd2FyZ293c2tpL0RvY3VtZW50cy9wcm9qZWN0cy92YWx1ZV9kcml2ZW5fdGVtcGxhdGVzL3NyYy9sYXlvdXQvbGF5b3V0LnByb3ZpZGVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQlMsQUFJc0IsU0FDQyxVQUMyQixvQ0FDWix5QkFDUSxpQ0FDakIsZ0JBQ2xCIiwiZmlsZSI6Ii9Vc2Vycy9taWtvbGFqd2FyZ293c2tpL0RvY3VtZW50cy9wcm9qZWN0cy92YWx1ZV9kcml2ZW5fdGVtcGxhdGVzL3NyYy9sYXlvdXQvbGF5b3V0LnByb3ZpZGVyLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tICcuL2xheW91dC5zdHlsZXMnO1xuaW1wb3J0IHsgdXNlRGV2aWNlRGV0ZWN0IH0gZnJvbSAnLi4vaG9va3MvdXNlLWRldmljZS1kZXRlY3QvdXNlLWRldmljZS1kZXRlY3QuaG9vayc7XG5pbXBvcnQgeyBIZWFkZXIgYXMgTW9iaWxlSGVhZGVyIH0gZnJvbSAnLi4vYXBwL2hvbWUvbW9iaWxlLWhlYWRlci9oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE1vYmlsZU1lbnVTdGF0ZVByb3ZpZGVyIH0gZnJvbSAnLi4vcHJvdmlkZXJzL21vYmlsZS1tZW51LnByb3ZpZGVyJztcbmltcG9ydCB7IE1lbnUgfSBmcm9tICcuLi91aS9tb2JpbGUtbWVudS9tZW51LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIZWFkZXIgYXMgRGVza3RvcEhlYWRlciB9IGZyb20gJy4uL2FwcC9ob21lL2Rlc2t0b3AtaGVhZGVyL2hlYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IHRoZW1lIH0gZnJvbSAnLi4vdGhlbWUvdGhlbWUuY29uZmlnJztcblxuZXhwb3J0IGNvbnN0IExheW91dFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlIH0pID0+IHtcbiAgY29uc3QgeyBpc01vYmlsZSB9ID0gdXNlRGV2aWNlRGV0ZWN0KCk7XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XG4gICAgICAgIHtgXG4gICAgICAgICAgaHRtbCxcbiAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcbiAgICAgICAgICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICB7aXNNb2JpbGUgPyAoXG4gICAgICAgICAgICA8TW9iaWxlTWVudVN0YXRlUHJvdmlkZXI+XG4gICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICA8TW9iaWxlSGVhZGVyIC8+XG4gICAgICAgICAgICAgICAgPE1lbnUgLz5cbiAgICAgICAgICAgICAgICA8ZGl2PntjaGlsZHJlbn08L2Rpdj5cbiAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgIDwvTW9iaWxlTWVudVN0YXRlUHJvdmlkZXI+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxEZXNrdG9wSGVhZGVyIC8+XG4gICAgICAgICAgICAgIDxkaXY+e2NoaWxkcmVufTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG4iXX0= */\n/*@ sourceURL=/Users/mikolajwargowski/Documents/projects/value_driven_templates/src/layout/layout.provider.tsx */"), __jsx(styled_components__WEBPACK_IMPORTED_MODULE_8__["ThemeProvider"], {
    theme: _theme_theme_config__WEBPACK_IMPORTED_MODULE_9__["theme"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, isMobile ? __jsx(_providers_mobile_menu_provider__WEBPACK_IMPORTED_MODULE_5__["MobileMenuStateProvider"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 15
    }
  }, __jsx(_app_home_mobile_header_header_component__WEBPACK_IMPORTED_MODULE_4__["Header"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }), __jsx(_ui_mobile_menu_menu_component__WEBPACK_IMPORTED_MODULE_6__["Menu"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "jsx-641749960",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  }, children))) : __jsx("div", {
    className: "jsx-641749960",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, __jsx(_app_home_desktop_header_header_component__WEBPACK_IMPORTED_MODULE_7__["Header"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 15
    }
  }), __jsx("div", {
    className: "jsx-641749960",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 15
    }
  }, children)))));
};

/***/ })

})
//# sourceMappingURL=_app.js.f9e403dc42989f36ec3d.hot-update.js.map