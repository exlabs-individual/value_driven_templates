webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/hooks/use-scroll-direction/use-scroll-direction.hook.ts":
/*!*********************************************************************!*\
  !*** ./src/hooks/use-scroll-direction/use-scroll-direction.hook.ts ***!
  \*********************************************************************/
/*! exports provided: ScrollDirection, useScrollDirection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollDirection", function() { return ScrollDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useScrollDirection", function() { return useScrollDirection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

let ScrollDirection;

(function (ScrollDirection) {
  ScrollDirection["UP"] = "up";
  ScrollDirection["DOWN"] = "down";
})(ScrollDirection || (ScrollDirection = {}));

const useScrollDirection = ({
  initialDirection = ScrollDirection.DOWN,
  thresholdPixels
}) => {
  const [scrollDirection, setScrollDirection] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(initialDirection);
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    const threshold = thresholdPixels !== null && thresholdPixels !== void 0 ? thresholdPixels : 0;
    let lastScrollPositon = 0;
    let ticking = false;

    const updateScrollDirection = () => {
      if (Math.abs(window.pageYOffset - lastScrollPositon) < threshold) {
        ticking = false;
        return;
      }

      setScrollDirection(window.pageYOffset > lastScrollPositon ? ScrollDirection.DOWN : ScrollDirection.UP);
      lastScrollPositon = window.pageYOffset > 0 ? window.pageYOffset : 0;
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDirection);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [initialDirection, thresholdPixels]);
  return scrollDirection;
};

/***/ }),

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
  const [isSticky, setSticky] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false);
  const scrollDirection = Object(_hooks_use_scroll_direction_use_scroll_direction_hook__WEBPACK_IMPORTED_MODULE_11__["useScrollDirection"])();
  console.log(scrollDirection);
  const stickyRef = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef(null);

  const handleScroll = () => {
    if (stickyRef.current && window.pageYOffset > stickyRef.current.getBoundingClientRect().top) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);
  return __jsx(_layout_styles__WEBPACK_IMPORTED_MODULE_2__["Layout"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    }
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2400830014",
    __self: undefined
  }, "html,body{margin:0;padding:0;font-family:'Montserrat','Open Sans',sans-serif;background-color:#f9f9f9;-webkit-overflow-scrolling:touch;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWtvbGFqd2FyZ293c2tpL0RvY3VtZW50cy9wcm9qZWN0cy92YWx1ZV9kcml2ZW5fdGVtcGxhdGVzL3NyYy9sYXlvdXQvbGF5b3V0LnByb3ZpZGVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnRFMsQUFJc0IsU0FDQyxVQUN3QyxnREFDekIseUJBQ1EsaUNBQ25DIiwiZmlsZSI6Ii9Vc2Vycy9taWtvbGFqd2FyZ293c2tpL0RvY3VtZW50cy9wcm9qZWN0cy92YWx1ZV9kcml2ZW5fdGVtcGxhdGVzL3NyYy9sYXlvdXQvbGF5b3V0LnByb3ZpZGVyLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMYXlvdXQsIEJvZHlDb250YWluZXIgfSBmcm9tICcuL2xheW91dC5zdHlsZXMnO1xuaW1wb3J0IHsgdXNlRGV2aWNlRGV0ZWN0IH0gZnJvbSAnLi4vaG9va3MvdXNlLWRldmljZS1kZXRlY3QvdXNlLWRldmljZS1kZXRlY3QuaG9vayc7XG5pbXBvcnQgeyBIZWFkZXIgYXMgTW9iaWxlSGVhZGVyIH0gZnJvbSAnLi4vdWkvbW9iaWxlLWhlYWRlci9oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE1lbnUgfSBmcm9tICcuLi91aS9tb2JpbGUtbWVudS9tZW51LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgdGhlbWUgfSBmcm9tICcuLi90aGVtZS90aGVtZS5jb25maWcnO1xuaW1wb3J0IHsgdXNlTW9iaWxlTWVudVN0YXRlIH0gZnJvbSAnLi4vaG9va3MvdXNlLW1vYmlsZS1tZW51L3VzZS1tb2JpbGUtbWVudS5ob29rJztcbmltcG9ydCB7IEZvb3RlciB9IGZyb20gJy4uL3VpL2Zvb3Rlci9mb290ZXInO1xuaW1wb3J0IHsgRGVza3RvcE5hdmlnYXRpb24gfSBmcm9tICcuLi91aS9kZXNrdG9wLW5hdmlnYXRpb24vZGVza3RvcC1uYXZpZ2F0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyB1c2VTY3JvbGxEaXJlY3Rpb24gfSBmcm9tICcuLi9ob29rcy91c2Utc2Nyb2xsLWRpcmVjdGlvbi91c2Utc2Nyb2xsLWRpcmVjdGlvbi5ob29rJztcblxuZXhwb3J0IGNvbnN0IExheW91dFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlIH0pID0+IHtcbiAgY29uc3QgeyBpc01vYmlsZSB9ID0gdXNlRGV2aWNlRGV0ZWN0KCk7XG4gIGNvbnN0IHtcbiAgICBzdGF0ZTogeyBpc1Zpc2libGUgfSxcbiAgfSA9IHVzZU1vYmlsZU1lbnVTdGF0ZSgpO1xuXG4gIGNvbnN0IFtpc1N0aWNreSwgc2V0U3RpY2t5XSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBzY3JvbGxEaXJlY3Rpb24gPSB1c2VTY3JvbGxEaXJlY3Rpb24oKTtcblxuICBjb25zb2xlLmxvZyhzY3JvbGxEaXJlY3Rpb24pO1xuXG4gIGNvbnN0IHN0aWNreVJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcblxuICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XG4gICAgaWYgKFxuICAgICAgc3RpY2t5UmVmLmN1cnJlbnQgJiZcbiAgICAgIHdpbmRvdy5wYWdlWU9mZnNldCA+IHN0aWNreVJlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcFxuICAgICkge1xuICAgICAgc2V0U3RpY2t5KHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRTdGlja3koZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiBoYW5kbGVTY3JvbGwpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD5cbiAgICAgICAge2BcbiAgICAgICAgICBodG1sLFxuICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcbiAgICAgICAgICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgIDxCb2R5Q29udGFpbmVyPlxuICAgICAgICAgICAge2lzTW9iaWxlID8gKFxuICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgPE1vYmlsZUhlYWRlciAvPlxuICAgICAgICAgICAgICAgIHtpc1Zpc2libGUgJiYgPE1lbnUgLz59XG4gICAgICAgICAgICAgICAgPGRpdj57Y2hpbGRyZW59PC9kaXY+XG4gICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxEZXNrdG9wTmF2aWdhdGlvbiBpc1N0aWNreT17aXNTdGlja3l9IC8+XG4gICAgICAgICAgICAgICAgPGRpdiByZWY9e3N0aWNreVJlZn0+e2NoaWxkcmVufTwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9Cb2R5Q29udGFpbmVyPlxuICAgICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG4iXX0= */\n/*@ sourceURL=/Users/mikolajwargowski/Documents/projects/value_driven_templates/src/layout/layout.provider.tsx */"), __jsx(styled_components__WEBPACK_IMPORTED_MODULE_6__["ThemeProvider"], {
    theme: _theme_theme_config__WEBPACK_IMPORTED_MODULE_7__["theme"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }, __jsx(_layout_styles__WEBPACK_IMPORTED_MODULE_2__["BodyContainer"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 11
    }
  }, isMobile ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 15
    }
  }, __jsx(_ui_mobile_header_header_component__WEBPACK_IMPORTED_MODULE_4__["Header"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 17
    }
  }), isVisible && __jsx(_ui_mobile_menu_menu_component__WEBPACK_IMPORTED_MODULE_5__["Menu"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 31
    }
  }), __jsx("div", {
    className: "jsx-2400830014",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 17
    }
  }, children)) : __jsx("div", {
    className: "jsx-2400830014",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 15
    }
  }, __jsx(_ui_desktop_navigation_desktop_navigation_component__WEBPACK_IMPORTED_MODULE_10__["DesktopNavigation"], {
    isSticky: isSticky,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 17
    }
  }), __jsx("div", {
    ref: stickyRef,
    className: "jsx-2400830014",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 17
    }
  }, children))), __jsx(_ui_footer_footer__WEBPACK_IMPORTED_MODULE_9__["Footer"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 11
    }
  }))));
};

/***/ })

})
//# sourceMappingURL=_app.js.5000cd95ad4849785b6a.hot-update.js.map