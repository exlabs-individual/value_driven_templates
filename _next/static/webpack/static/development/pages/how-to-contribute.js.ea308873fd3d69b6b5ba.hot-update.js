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
/* harmony import */ var _about_section_section_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../about/section/section.styles */ "./src/app/about/section/section.styles.ts");
var _jsxFileName = "/Users/mikolajwargowski/Documents/projects/value_driven_templates/src/app/how-to-contribute/information-section/information-section.component.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const InformationSection = ({
  title,
  description,
  image,
  sectionNumber,
  id,
  textPosition
}) => {
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
    textPostion: textPosition,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 5
    }
  }, __jsx(_information_section_styles__WEBPACK_IMPORTED_MODULE_1__["TextContainer"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }
  }, __jsx(_information_section_styles__WEBPACK_IMPORTED_MODULE_1__["SectionTitle"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  }, title), __jsx(_information_section_styles__WEBPACK_IMPORTED_MODULE_1__["SectionDescription"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }
  }, description)), __jsx(_information_section_styles__WEBPACK_IMPORTED_MODULE_1__["SectionNumber"], {
    active: isActive,
    containerHeight: containerHeight,
    className: "section-number",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }
  }, sectionNumber), __jsx(_about_section_section_styles__WEBPACK_IMPORTED_MODULE_2__["SectionImage"], {
    alt: "Section",
    src: "".concat("", "/how-to-contribute/").concat(image, ".svg"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }
  }));
};

/***/ })

})
//# sourceMappingURL=how-to-contribute.js.ea308873fd3d69b6b5ba.hot-update.js.map