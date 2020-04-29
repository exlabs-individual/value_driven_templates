webpackHotUpdate("static/development/pages/how-to-contribute.js",{

/***/ "./src/app/how-to-contribute/information-section/information-section.component.tsx":
/*!*****************************************************************************************!*\
  !*** ./src/app/how-to-contribute/information-section/information-section.component.tsx ***!
  \*****************************************************************************************/
/*! exports provided: InformationSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformationSection", function() { return InformationSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _information_section_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./information-section.styles */ "./src/app/how-to-contribute/information-section/information-section.styles.ts");
/* harmony import */ var _hooks_use_device_detect_use_device_detect_hook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hooks/use-device-detect/use-device-detect.hook */ "./src/hooks/use-device-detect/use-device-detect.hook.ts");
var _jsxFileName = "/Users/mikolajwargowski/Documents/projects/value_driven_templates/src/app/how-to-contribute/information-section/information-section.component.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const InformationSection = ({
  title,
  description,
  image,
  sectionNumber,
  id
}) => {
  const {
    isMobile
  } = Object(_hooks_use_device_detect_use_device_detect_hook__WEBPACK_IMPORTED_MODULE_2__["useDeviceDetect"])();
  const containerRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
  const [containerHeight, setContainerHeight] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(0);
  const [isActive, setActive] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const handleResize = react__WEBPACK_IMPORTED_MODULE_0___default.a.useCallback(() => {
    var _containerRef$current;

    setContainerHeight((_containerRef$current = containerRef.current) === null || _containerRef$current === void 0 ? void 0 : _containerRef$current.offsetHeight);
  }, [containerRef]);
  const handleScroll = react__WEBPACK_IMPORTED_MODULE_0___default.a.useCallback(() => {
    var _containerRef$current2;

    if (!isActive && window.pageYOffset - sectionNumber * (containerHeight / 2) > ((_containerRef$current2 = containerRef.current) === null || _containerRef$current2 === void 0 ? void 0 : _containerRef$current2.getBoundingClientRect().top)) {
      setActive(true);
    }
  }, [containerRef, isActive, containerHeight, sectionNumber]);
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    if (containerRef.current) {
      setContainerHeight(containerRef.current.offsetHeight);
    }
  }, [containerRef]);
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);
  return __jsx(_information_section_styles__WEBPACK_IMPORTED_MODULE_1__["StyledSection"], {
    ref: containerRef,
    className: "styled-section",
    id: id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 5
    }
  }, __jsx(_information_section_styles__WEBPACK_IMPORTED_MODULE_1__["TextContainer"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }
  }, __jsx(_information_section_styles__WEBPACK_IMPORTED_MODULE_1__["SectionTitle"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }, title), isMobile && __jsx(_information_section_styles__WEBPACK_IMPORTED_MODULE_1__["SectionImage"], {
    alt: "Section",
    src: "".concat("", "/how-to-contribute/").concat(image, ".svg"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 11
    }
  }), __jsx(_information_section_styles__WEBPACK_IMPORTED_MODULE_1__["SectionDescription"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }
  }, description)), __jsx(_information_section_styles__WEBPACK_IMPORTED_MODULE_1__["SectionNumber"], {
    active: isActive,
    containerHeight: containerHeight,
    className: "section-number",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }
  }, sectionNumber), !isMobile && __jsx(_information_section_styles__WEBPACK_IMPORTED_MODULE_1__["SectionImage"], {
    alt: "Section",
    src: "".concat("", "/how-to-contribute/").concat(image, ".svg"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 9
    }
  }));
};

/***/ })

})
//# sourceMappingURL=how-to-contribute.js.f1fee271db5ee0bc8540.hot-update.js.map