webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/hooks/use-sticky-nav/use-sticky-nav.hook.ts":
/*!*********************************************************!*\
  !*** ./src/hooks/use-sticky-nav/use-sticky-nav.hook.ts ***!
  \*********************************************************/
/*! exports provided: ScrollDirection, useStickyNav */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollDirection", function() { return ScrollDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStickyNav", function() { return useStickyNav; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

let ScrollDirection;

(function (ScrollDirection) {
  ScrollDirection["UP"] = "up";
  ScrollDirection["DOWN"] = "down";
})(ScrollDirection || (ScrollDirection = {}));

const useStickyNav = ({
  initialDirection = ScrollDirection.DOWN,
  thresholdPixels,
  stickyRef
}) => {
  const [scrollDirection, setScrollDirection] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(initialDirection);
  const [isSticky, setSticky] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
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
      setSticky(stickyRef.current && window.pageYOffset > stickyRef.current.getBoundingClientRect().top ? true : false);
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
  }, [initialDirection, thresholdPixels, stickyRef]);
  return scrollDirection === ScrollDirection.UP && isSticky;
};

/***/ })

})
//# sourceMappingURL=_app.js.189873ec20c9599b8f76.hot-update.js.map