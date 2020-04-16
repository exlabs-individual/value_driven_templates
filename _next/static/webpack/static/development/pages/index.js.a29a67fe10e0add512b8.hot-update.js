webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/hooks/use-device-detect/use-device-detect.hook.ts":
/*!***************************************************************!*\
  !*** ./src/hooks/use-device-detect/use-device-detect.hook.ts ***!
  \***************************************************************/
/*! exports provided: useDeviceDetect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDeviceDetect", function() { return useDeviceDetect; });
/* harmony import */ var global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! global */ "./node_modules/global/window.js");
/* harmony import */ var global__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(global__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const useDeviceDetect = () => {
  const isClient = true;

  function getSize() {
    return {
      width: isClient ? global__WEBPACK_IMPORTED_MODULE_0___default.a.innerWidth : undefined,
      height: isClient ? global__WEBPACK_IMPORTED_MODULE_0___default.a.innerHeight : undefined
    };
  }

  const [windowSize, setWindowSize] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(getSize);
  const [deviceData, setDeviceData] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState({
    isDesktop: true,
    isMobile: false,
    isTablet: false
  });
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {
    if (!isClient) {
      return;
    }

    function handleResize() {
      setWindowSize(getSize());
    }

    global__WEBPACK_IMPORTED_MODULE_0___default.a.addEventListener('resize', handleResize);
    return () => global__WEBPACK_IMPORTED_MODULE_0___default.a.removeEventListener('resize', handleResize);
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  []);
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {
    console.log(windowSize.width);

    if (windowSize.width <= 768) {
      setDeviceData({
        isMobile: true,
        isDesktop: false,
        isTablet: false
      });
    } else if (windowSize.width >= 768 && windowSize.width <= 1100) {
      setDeviceData({
        isMobile: false,
        isDesktop: false,
        isTablet: true
      });
    } else {
      setDeviceData({
        isMobile: false,
        isDesktop: true,
        isTablet: false
      });
    }
  }, [windowSize.width]);
  return deviceData;
};

/***/ })

})
//# sourceMappingURL=index.js.a29a67fe10e0add512b8.hot-update.js.map