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
    id: "1287066916",
    __self: undefined
  }, "html,body{margin:0;padding:0;font-family:'Montserrat',sans-serif;background-color:#f9f9f9;position:fixed;width:100%;top:0px;min-height:100%;height:100%;overflow:hidden;-webkit-overflow-scrolling:touch;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWtvbGFqd2FyZ293c2tpL0RvY3VtZW50cy9wcm9qZWN0cy92YWx1ZV9kcml2ZW5fdGVtcGxhdGVzL3NyYy9sYXlvdXQvbGF5b3V0LnByb3ZpZGVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQlMsQUFJc0IsU0FDQyxVQUMyQixvQ0FDWix5QkFDVixlQUNKLFdBQ0gsUUFDUSxnQkFDSixZQUNJLGdCQUNpQixpQ0FDbkMiLCJmaWxlIjoiL1VzZXJzL21pa29sYWp3YXJnb3dza2kvRG9jdW1lbnRzL3Byb2plY3RzL3ZhbHVlX2RyaXZlbl90ZW1wbGF0ZXMvc3JjL2xheW91dC9sYXlvdXQucHJvdmlkZXIudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExheW91dCB9IGZyb20gJy4vbGF5b3V0LnN0eWxlcyc7XG5pbXBvcnQgeyB1c2VEZXZpY2VEZXRlY3QgfSBmcm9tICcuLi9ob29rcy91c2UtZGV2aWNlLWRldGVjdC91c2UtZGV2aWNlLWRldGVjdC5ob29rJztcbmltcG9ydCB7IEhlYWRlciBhcyBNb2JpbGVIZWFkZXIgfSBmcm9tICcuLi9hcHAvaG9tZS9tb2JpbGUtaGVhZGVyL2hlYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTW9iaWxlTWVudVN0YXRlUHJvdmlkZXIgfSBmcm9tICcuLi9wcm92aWRlcnMvbW9iaWxlLW1lbnUucHJvdmlkZXInO1xuaW1wb3J0IHsgTWVudSB9IGZyb20gJy4uL3VpL21vYmlsZS1tZW51L21lbnUuY29tcG9uZW50JztcbmltcG9ydCB7IEhlYWRlciBhcyBEZXNrdG9wSGVhZGVyIH0gZnJvbSAnLi4vYXBwL2hvbWUvZGVza3RvcC1oZWFkZXIvaGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgdGhlbWUgfSBmcm9tICcuLi90aGVtZS90aGVtZS5jb25maWcnO1xuXG5leHBvcnQgY29uc3QgTGF5b3V0UHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9OiB7IGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGUgfSkgPT4ge1xuICBjb25zdCB7IGlzTW9iaWxlIH0gPSB1c2VEZXZpY2VEZXRlY3QoKTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD5cbiAgICAgICAge2BcbiAgICAgICAgICBodG1sLFxuICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAge2lzTW9iaWxlID8gKFxuICAgICAgICAgICAgPE1vYmlsZU1lbnVTdGF0ZVByb3ZpZGVyPlxuICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgPE1vYmlsZUhlYWRlciAvPlxuICAgICAgICAgICAgICAgIDxNZW51IC8+XG4gICAgICAgICAgICAgICAgPGRpdj57Y2hpbGRyZW59PC9kaXY+XG4gICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICA8L01vYmlsZU1lbnVTdGF0ZVByb3ZpZGVyPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8RGVza3RvcEhlYWRlciAvPlxuICAgICAgICAgICAgICA8ZGl2PntjaGlsZHJlbn08L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuIl19 */\n/*@ sourceURL=/Users/mikolajwargowski/Documents/projects/value_driven_templates/src/layout/layout.provider.tsx */"), __jsx(styled_components__WEBPACK_IMPORTED_MODULE_8__["ThemeProvider"], {
    theme: _theme_theme_config__WEBPACK_IMPORTED_MODULE_9__["theme"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, isMobile ? __jsx(_providers_mobile_menu_provider__WEBPACK_IMPORTED_MODULE_5__["MobileMenuStateProvider"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 15
    }
  }, __jsx(_app_home_mobile_header_header_component__WEBPACK_IMPORTED_MODULE_4__["Header"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }), __jsx(_ui_mobile_menu_menu_component__WEBPACK_IMPORTED_MODULE_6__["Menu"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "jsx-1287066916",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }, children))) : __jsx("div", {
    className: "jsx-1287066916",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, __jsx(_app_home_desktop_header_header_component__WEBPACK_IMPORTED_MODULE_7__["Header"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 15
    }
  }), __jsx("div", {
    className: "jsx-1287066916",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 15
    }
  }, children)))));
};

/***/ })

})
//# sourceMappingURL=_app.js.867fb64f71e52a227e98.hot-update.js.map