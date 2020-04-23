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
/* harmony import */ var _ui_mobile_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/mobile-header/header.component */ "./src/ui/mobile-header/header.component.tsx");
/* harmony import */ var _ui_mobile_menu_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui/mobile-menu/menu.component */ "./src/ui/mobile-menu/menu.component.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _theme_theme_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../theme/theme.config */ "./src/theme/theme.config.ts");
/* harmony import */ var _hooks_use_mobile_menu_use_mobile_menu_hook__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../hooks/use-mobile-menu/use-mobile-menu.hook */ "./src/hooks/use-mobile-menu/use-mobile-menu.hook.ts");
/* harmony import */ var _ui_footer_footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ui/footer/footer */ "./src/ui/footer/footer.tsx");
/* harmony import */ var _ui_desktop_navigation_desktop_navigation_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../ui/desktop-navigation/desktop-navigation.component */ "./src/ui/desktop-navigation/desktop-navigation.component.tsx");
/* harmony import */ var _hooks_use_scroll_direction_use_scroll_direction_hook__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../hooks/use-scroll-direction/use-scroll-direction.hook */ "./src/hooks/use-scroll-direction/use-scroll-direction.hook.ts");
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
  } = Object(_hooks_use_mobile_menu_use_mobile_menu_hook__WEBPACK_IMPORTED_MODULE_8__["useMobileMenuState"])();
  const stickyRef = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef(null);
  const {
    isSticky,
    scrollDirection
  } = Object(_hooks_use_scroll_direction_use_scroll_direction_hook__WEBPACK_IMPORTED_MODULE_11__["useScrollDirection"])({
    stickyRef
  });
  const isStickyNav = isSticky && scrollDirection === _hooks_use_scroll_direction_use_scroll_direction_hook__WEBPACK_IMPORTED_MODULE_11__["ScrollDirection"].UP;
  return __jsx(_layout_styles__WEBPACK_IMPORTED_MODULE_2__["Layout"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2400830014",
    __self: undefined
  }, "html,body{margin:0;padding:0;font-family:'Montserrat','Open Sans',sans-serif;background-color:#f9f9f9;-webkit-overflow-scrolling:touch;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWtvbGFqd2FyZ293c2tpL0RvY3VtZW50cy9wcm9qZWN0cy92YWx1ZV9kcml2ZW5fdGVtcGxhdGVzL3NyYy9sYXlvdXQvbGF5b3V0LnByb3ZpZGVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2QlMsQUFJc0IsU0FDQyxVQUN3QyxnREFDekIseUJBQ1EsaUNBQ25DIiwiZmlsZSI6Ii9Vc2Vycy9taWtvbGFqd2FyZ293c2tpL0RvY3VtZW50cy9wcm9qZWN0cy92YWx1ZV9kcml2ZW5fdGVtcGxhdGVzL3NyYy9sYXlvdXQvbGF5b3V0LnByb3ZpZGVyLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMYXlvdXQsIEJvZHlDb250YWluZXIgfSBmcm9tICcuL2xheW91dC5zdHlsZXMnO1xuaW1wb3J0IHsgdXNlRGV2aWNlRGV0ZWN0IH0gZnJvbSAnLi4vaG9va3MvdXNlLWRldmljZS1kZXRlY3QvdXNlLWRldmljZS1kZXRlY3QuaG9vayc7XG5pbXBvcnQgeyBIZWFkZXIgYXMgTW9iaWxlSGVhZGVyIH0gZnJvbSAnLi4vdWkvbW9iaWxlLWhlYWRlci9oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE1lbnUgfSBmcm9tICcuLi91aS9tb2JpbGUtbWVudS9tZW51LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgdGhlbWUgfSBmcm9tICcuLi90aGVtZS90aGVtZS5jb25maWcnO1xuaW1wb3J0IHsgdXNlTW9iaWxlTWVudVN0YXRlIH0gZnJvbSAnLi4vaG9va3MvdXNlLW1vYmlsZS1tZW51L3VzZS1tb2JpbGUtbWVudS5ob29rJztcbmltcG9ydCB7IEZvb3RlciB9IGZyb20gJy4uL3VpL2Zvb3Rlci9mb290ZXInO1xuaW1wb3J0IHsgRGVza3RvcE5hdmlnYXRpb24gfSBmcm9tICcuLi91aS9kZXNrdG9wLW5hdmlnYXRpb24vZGVza3RvcC1uYXZpZ2F0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQge1xuICB1c2VTY3JvbGxEaXJlY3Rpb24sXG4gIFNjcm9sbERpcmVjdGlvbixcbn0gZnJvbSAnLi4vaG9va3MvdXNlLXNjcm9sbC1kaXJlY3Rpb24vdXNlLXNjcm9sbC1kaXJlY3Rpb24uaG9vayc7XG5cbmV4cG9ydCBjb25zdCBMYXlvdXRQcm92aWRlciA9ICh7IGNoaWxkcmVuIH06IHsgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZSB9KSA9PiB7XG4gIGNvbnN0IHsgaXNNb2JpbGUgfSA9IHVzZURldmljZURldGVjdCgpO1xuICBjb25zdCB7XG4gICAgc3RhdGU6IHsgaXNWaXNpYmxlIH0sXG4gIH0gPSB1c2VNb2JpbGVNZW51U3RhdGUoKTtcbiAgY29uc3Qgc3RpY2t5UmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xuXG4gIGNvbnN0IHsgaXNTdGlja3ksIHNjcm9sbERpcmVjdGlvbiB9ID0gdXNlU2Nyb2xsRGlyZWN0aW9uKHsgc3RpY2t5UmVmIH0pO1xuXG4gIGNvbnN0IGlzU3RpY2t5TmF2ID0gaXNTdGlja3kgJiYgc2Nyb2xsRGlyZWN0aW9uID09PSBTY3JvbGxEaXJlY3Rpb24uVVA7XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XG4gICAgICAgIHtgXG4gICAgICAgICAgaHRtbCxcbiAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG4gICAgICAgICAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICA8Qm9keUNvbnRhaW5lcj5cbiAgICAgICAgICAgIHtpc01vYmlsZSA/IChcbiAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgIDxNb2JpbGVIZWFkZXIgLz5cbiAgICAgICAgICAgICAgICB7aXNWaXNpYmxlICYmIDxNZW51IC8+fVxuICAgICAgICAgICAgICAgIDxkaXY+e2NoaWxkcmVufTwvZGl2PlxuICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICB7aXNTdGlja3lOYXYgJiYgKFxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICc3MnB4JyB9fT48L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDxEZXNrdG9wTmF2aWdhdGlvblxuICAgICAgICAgICAgICAgICAgdGhlbWU9e2lzU3RpY2t5TmF2ID8gJ3ByaW1hcnknIDogJ3NlY29uZGFyeSd9XG4gICAgICAgICAgICAgICAgICBpc1N0aWNreT17aXNTdGlja3lOYXZ9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8ZGl2IHJlZj17c3RpY2t5UmVmfT57Y2hpbGRyZW59PC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L0JvZHlDb250YWluZXI+XG4gICAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgPC9UaGVtZVByb3ZpZGVyPlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcbiJdfQ== */\n/*@ sourceURL=/Users/mikolajwargowski/Documents/projects/value_driven_templates/src/layout/layout.provider.tsx */"), __jsx(styled_components__WEBPACK_IMPORTED_MODULE_6__["ThemeProvider"], {
    theme: _theme_theme_config__WEBPACK_IMPORTED_MODULE_7__["theme"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, __jsx(_layout_styles__WEBPACK_IMPORTED_MODULE_2__["BodyContainer"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }, isMobile ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 15
    }
  }, __jsx(_ui_mobile_header_header_component__WEBPACK_IMPORTED_MODULE_4__["Header"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  }), isVisible && __jsx(_ui_mobile_menu_menu_component__WEBPACK_IMPORTED_MODULE_5__["Menu"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 31
    }
  }), __jsx("div", {
    className: "jsx-2400830014",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }
  }, children)) : __jsx("div", {
    className: "jsx-2400830014",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 15
    }
  }, isStickyNav && __jsx("div", {
    style: {
      width: '100%',
      height: '72px'
    },
    className: "jsx-2400830014",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 19
    }
  }), __jsx(_ui_desktop_navigation_desktop_navigation_component__WEBPACK_IMPORTED_MODULE_10__["DesktopNavigation"], {
    theme: isStickyNav ? 'primary' : 'secondary',
    isSticky: isStickyNav,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 17
    }
  }), __jsx("div", {
    ref: stickyRef,
    className: "jsx-2400830014",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 17
    }
  }, children))), __jsx(_ui_footer_footer__WEBPACK_IMPORTED_MODULE_9__["Footer"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 11
    }
  }))));
};

/***/ })

})
//# sourceMappingURL=_app.js.f98ea551c69a0c9446ab.hot-update.js.map