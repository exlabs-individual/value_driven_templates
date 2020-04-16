webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/ui/layout/layout.provider.tsx":
/*!*******************************************!*\
  !*** ./src/ui/layout/layout.provider.tsx ***!
  \*******************************************/
/*! exports provided: LayoutProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutProvider", function() { return LayoutProvider; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layout_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout.styles */ "./src/ui/layout/layout.styles.ts");
/* harmony import */ var _hooks_use_device_detect_use_device_detect_hook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/use-device-detect/use-device-detect.hook */ "./src/hooks/use-device-detect/use-device-detect.hook.ts");
/* harmony import */ var _app_home_mobile_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app/home/mobile-header/header.component */ "./src/app/home/mobile-header/header.component.tsx");
/* harmony import */ var _providers_mobile_menu_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../providers/mobile-menu.provider */ "./src/providers/mobile-menu.provider.tsx");
/* harmony import */ var _mobile_menu_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../mobile-menu/menu.component */ "./src/ui/mobile-menu/menu.component.tsx");
/* harmony import */ var _app_home_desktop_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../app/home/desktop-header/header.component */ "./src/app/home/desktop-header/header.component.tsx");
var _jsxFileName = "/Users/mikolajwargowski/Documents/projects/value_driven_templates/src/ui/layout/layout.provider.tsx";

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
      lineNumber: 13,
      columnNumber: 5
    }
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1160521229",
    __self: undefined
  }, "html,body{margin:0;padding:0;font-family:'Montserrat',sans-serif;background-color:#f9f9f9;position:fixed;width:100%;top:0px;min-height:100%;height:100%;overflow:scroll;-webkit-overflow-scrolling:touch;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWtvbGFqd2FyZ293c2tpL0RvY3VtZW50cy9wcm9qZWN0cy92YWx1ZV9kcml2ZW5fdGVtcGxhdGVzL3NyYy91aS9sYXlvdXQvbGF5b3V0LnByb3ZpZGVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFjUyxBQUlzQixTQUNDLFVBQzJCLG9DQUNaLHlCQUNWLGVBQ0osV0FDSCxRQUNRLGdCQUNKLFlBQ0ksZ0JBQ2lCLGlDQUNuQyIsImZpbGUiOiIvVXNlcnMvbWlrb2xhandhcmdvd3NraS9Eb2N1bWVudHMvcHJvamVjdHMvdmFsdWVfZHJpdmVuX3RlbXBsYXRlcy9zcmMvdWkvbGF5b3V0L2xheW91dC5wcm92aWRlci50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSAnLi9sYXlvdXQuc3R5bGVzJztcbmltcG9ydCB7IHVzZURldmljZURldGVjdCB9IGZyb20gJy4uLy4uL2hvb2tzL3VzZS1kZXZpY2UtZGV0ZWN0L3VzZS1kZXZpY2UtZGV0ZWN0Lmhvb2snO1xuaW1wb3J0IHsgSGVhZGVyIGFzIE1vYmlsZUhlYWRlciB9IGZyb20gJy4uLy4uL2FwcC9ob21lL21vYmlsZS1oZWFkZXIvaGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNb2JpbGVNZW51U3RhdGVQcm92aWRlciB9IGZyb20gJy4uLy4uL3Byb3ZpZGVycy9tb2JpbGUtbWVudS5wcm92aWRlcic7XG5pbXBvcnQgeyBNZW51IH0gZnJvbSAnLi4vbW9iaWxlLW1lbnUvbWVudS5jb21wb25lbnQnO1xuaW1wb3J0IHsgSGVhZGVyIGFzIERlc2t0b3BIZWFkZXIgfSBmcm9tICcuLi8uLi9hcHAvaG9tZS9kZXNrdG9wLWhlYWRlci9oZWFkZXIuY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IExheW91dFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlIH0pID0+IHtcbiAgY29uc3QgeyBpc01vYmlsZSB9ID0gdXNlRGV2aWNlRGV0ZWN0KCk7XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XG4gICAgICAgIHtgXG4gICAgICAgICAgaHRtbCxcbiAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICAgICAgICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIHtpc01vYmlsZSA/IChcbiAgICAgICAgICA8TW9iaWxlTWVudVN0YXRlUHJvdmlkZXI+XG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgIDxNb2JpbGVIZWFkZXIgLz5cbiAgICAgICAgICAgICAgPE1lbnUgLz5cbiAgICAgICAgICAgICAgPGRpdj57Y2hpbGRyZW59PC9kaXY+XG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgIDwvTW9iaWxlTWVudVN0YXRlUHJvdmlkZXI+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxEZXNrdG9wSGVhZGVyIC8+XG4gICAgICAgICAgICA8ZGl2PntjaGlsZHJlbn08L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuIl19 */\n/*@ sourceURL=/Users/mikolajwargowski/Documents/projects/value_driven_templates/src/ui/layout/layout.provider.tsx */"), __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, isMobile ? __jsx(_providers_mobile_menu_provider__WEBPACK_IMPORTED_MODULE_5__["MobileMenuStateProvider"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, __jsx(_app_home_mobile_header_header_component__WEBPACK_IMPORTED_MODULE_4__["Header"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 15
    }
  }), __jsx(_mobile_menu_menu_component__WEBPACK_IMPORTED_MODULE_6__["Menu"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 15
    }
  }), __jsx("div", {
    className: "jsx-1160521229",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 15
    }
  }, children))) : __jsx("div", {
    className: "jsx-1160521229",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }, __jsx(_app_home_desktop_header_header_component__WEBPACK_IMPORTED_MODULE_7__["Header"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "jsx-1160521229",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, children))));
};

/***/ })

})
//# sourceMappingURL=index.js.3da4107950716041f075.hot-update.js.map