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
  const isStickyNav = isSticky && scrollDirection === _hooks_use_scroll_direction_use_scroll_direction_hook__WEBPACK_IMPORTED_MODULE_11__["ScrollDirection"].UP; // const [isSticky, setSticky] = React.useState(false);
  // const handleScroll = () => {
  //   if (
  //     stickyRef.current &&
  //     window.pageYOffset > stickyRef.current.getBoundingClientRect().top
  //   ) {
  //     setSticky(true);
  //   } else {
  //     setSticky(false);
  //   }
  // };
  // React.useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', () => handleScroll);
  //   };
  // }, []);

  return __jsx(_layout_styles__WEBPACK_IMPORTED_MODULE_2__["Layout"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 5
    }
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2400830014",
    __self: undefined
  }, "html,body{margin:0;padding:0;font-family:'Montserrat','Open Sans',sans-serif;background-color:#f9f9f9;-webkit-overflow-scrolling:touch;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWtvbGFqd2FyZ293c2tpL0RvY3VtZW50cy9wcm9qZWN0cy92YWx1ZV9kcml2ZW5fdGVtcGxhdGVzL3NyYy9sYXlvdXQvbGF5b3V0LnByb3ZpZGVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrRFMsQUFJc0IsU0FDQyxVQUN3QyxnREFDekIseUJBQ1EsaUNBQ25DIiwiZmlsZSI6Ii9Vc2Vycy9taWtvbGFqd2FyZ293c2tpL0RvY3VtZW50cy9wcm9qZWN0cy92YWx1ZV9kcml2ZW5fdGVtcGxhdGVzL3NyYy9sYXlvdXQvbGF5b3V0LnByb3ZpZGVyLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMYXlvdXQsIEJvZHlDb250YWluZXIgfSBmcm9tICcuL2xheW91dC5zdHlsZXMnO1xuaW1wb3J0IHsgdXNlRGV2aWNlRGV0ZWN0IH0gZnJvbSAnLi4vaG9va3MvdXNlLWRldmljZS1kZXRlY3QvdXNlLWRldmljZS1kZXRlY3QuaG9vayc7XG5pbXBvcnQgeyBIZWFkZXIgYXMgTW9iaWxlSGVhZGVyIH0gZnJvbSAnLi4vdWkvbW9iaWxlLWhlYWRlci9oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE1lbnUgfSBmcm9tICcuLi91aS9tb2JpbGUtbWVudS9tZW51LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgdGhlbWUgfSBmcm9tICcuLi90aGVtZS90aGVtZS5jb25maWcnO1xuaW1wb3J0IHsgdXNlTW9iaWxlTWVudVN0YXRlIH0gZnJvbSAnLi4vaG9va3MvdXNlLW1vYmlsZS1tZW51L3VzZS1tb2JpbGUtbWVudS5ob29rJztcbmltcG9ydCB7IEZvb3RlciB9IGZyb20gJy4uL3VpL2Zvb3Rlci9mb290ZXInO1xuaW1wb3J0IHsgRGVza3RvcE5hdmlnYXRpb24gfSBmcm9tICcuLi91aS9kZXNrdG9wLW5hdmlnYXRpb24vZGVza3RvcC1uYXZpZ2F0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQge1xuICB1c2VTY3JvbGxEaXJlY3Rpb24sXG4gIFNjcm9sbERpcmVjdGlvbixcbn0gZnJvbSAnLi4vaG9va3MvdXNlLXNjcm9sbC1kaXJlY3Rpb24vdXNlLXNjcm9sbC1kaXJlY3Rpb24uaG9vayc7XG5cbmV4cG9ydCBjb25zdCBMYXlvdXRQcm92aWRlciA9ICh7IGNoaWxkcmVuIH06IHsgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZSB9KSA9PiB7XG4gIGNvbnN0IHsgaXNNb2JpbGUgfSA9IHVzZURldmljZURldGVjdCgpO1xuICBjb25zdCB7XG4gICAgc3RhdGU6IHsgaXNWaXNpYmxlIH0sXG4gIH0gPSB1c2VNb2JpbGVNZW51U3RhdGUoKTtcbiAgY29uc3Qgc3RpY2t5UmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xuXG4gIGNvbnN0IHsgaXNTdGlja3ksIHNjcm9sbERpcmVjdGlvbiB9ID0gdXNlU2Nyb2xsRGlyZWN0aW9uKHsgc3RpY2t5UmVmIH0pO1xuXG4gIGNvbnN0IGlzU3RpY2t5TmF2ID0gaXNTdGlja3kgJiYgc2Nyb2xsRGlyZWN0aW9uID09PSBTY3JvbGxEaXJlY3Rpb24uVVA7XG5cbiAgLy8gY29uc3QgW2lzU3RpY2t5LCBzZXRTdGlja3ldID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuXG4gIC8vIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcbiAgLy8gICBpZiAoXG4gIC8vICAgICBzdGlja3lSZWYuY3VycmVudCAmJlxuICAvLyAgICAgd2luZG93LnBhZ2VZT2Zmc2V0ID4gc3RpY2t5UmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wXG4gIC8vICAgKSB7XG4gIC8vICAgICBzZXRTdGlja3kodHJ1ZSk7XG4gIC8vICAgfSBlbHNlIHtcbiAgLy8gICAgIHNldFN0aWNreShmYWxzZSk7XG4gIC8vICAgfVxuICAvLyB9O1xuXG4gIC8vIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XG5cbiAgLy8gICByZXR1cm4gKCkgPT4ge1xuICAvLyAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IGhhbmRsZVNjcm9sbCk7XG4gIC8vICAgfTtcbiAgLy8gfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAgICB7YFxuICAgICAgICAgIGh0bWwsXG4gICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JywgJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xuICAgICAgICAgICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgPEJvZHlDb250YWluZXI+XG4gICAgICAgICAgICB7aXNNb2JpbGUgPyAoXG4gICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICA8TW9iaWxlSGVhZGVyIC8+XG4gICAgICAgICAgICAgICAge2lzVmlzaWJsZSAmJiA8TWVudSAvPn1cbiAgICAgICAgICAgICAgICA8ZGl2PntjaGlsZHJlbn08L2Rpdj5cbiAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPERlc2t0b3BOYXZpZ2F0aW9uXG4gICAgICAgICAgICAgICAgICB0aGVtZT17aXNTdGlja3lOYXYgPyAncHJpbWFyeScgOiAnc2Vjb25kYXJ5J31cbiAgICAgICAgICAgICAgICAgIGlzU3RpY2t5PXtpc1N0aWNreU5hdn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxkaXYgcmVmPXtzdGlja3lSZWZ9PntjaGlsZHJlbn08L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvQm9keUNvbnRhaW5lcj5cbiAgICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuIl19 */\n/*@ sourceURL=/Users/mikolajwargowski/Documents/projects/value_driven_templates/src/layout/layout.provider.tsx */"), __jsx(styled_components__WEBPACK_IMPORTED_MODULE_6__["ThemeProvider"], {
    theme: _theme_theme_config__WEBPACK_IMPORTED_MODULE_7__["theme"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }, __jsx(_layout_styles__WEBPACK_IMPORTED_MODULE_2__["BodyContainer"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 11
    }
  }, isMobile ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 15
    }
  }, __jsx(_ui_mobile_header_header_component__WEBPACK_IMPORTED_MODULE_4__["Header"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 17
    }
  }), isVisible && __jsx(_ui_mobile_menu_menu_component__WEBPACK_IMPORTED_MODULE_5__["Menu"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 31
    }
  }), __jsx("div", {
    className: "jsx-2400830014",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 17
    }
  }, children)) : __jsx("div", {
    className: "jsx-2400830014",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 15
    }
  }, __jsx(_ui_desktop_navigation_desktop_navigation_component__WEBPACK_IMPORTED_MODULE_10__["DesktopNavigation"], {
    theme: isStickyNav ? 'primary' : 'secondary',
    isSticky: isStickyNav,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 17
    }
  }), __jsx("div", {
    ref: stickyRef,
    className: "jsx-2400830014",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 17
    }
  }, children))), __jsx(_ui_footer_footer__WEBPACK_IMPORTED_MODULE_9__["Footer"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 11
    }
  }))));
};

/***/ })

})
//# sourceMappingURL=_app.js.541ba1f831dfb4908c55.hot-update.js.map