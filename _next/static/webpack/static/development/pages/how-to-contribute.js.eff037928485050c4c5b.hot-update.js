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



const InformationSection = () => {
  const containerRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
  const [containerHeight, setContainerHeight] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(0);
  const [isActive, setActive] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const handleResize = react__WEBPACK_IMPORTED_MODULE_0___default.a.useCallback(() => {
    var _containerRef$current;

    setContainerHeight((_containerRef$current = containerRef.current) === null || _containerRef$current === void 0 ? void 0 : _containerRef$current.offsetHeight);
  }, [containerRef]);
  const handleScroll = react__WEBPACK_IMPORTED_MODULE_0___default.a.useCallback(() => {
    var _containerRef$current2;

    if (!isActive && window.pageYOffset > ((_containerRef$current2 = containerRef.current) === null || _containerRef$current2 === void 0 ? void 0 : _containerRef$current2.getBoundingClientRect().top)) {
      setActive(true);
    }
  }, [containerRef, isActive]);
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 5
    }
  }, __jsx(_information_section_styles__WEBPACK_IMPORTED_MODULE_1__["TextContainer"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }, __jsx(_information_section_styles__WEBPACK_IMPORTED_MODULE_1__["SectionTitle"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, "Create your workspace"), __jsx(_information_section_styles__WEBPACK_IMPORTED_MODULE_1__["SectionDescription"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi libero saepe quisquam porro sunt non nisi dolores voluptatum soluta aspernatur, nam et quo, corrupti, assumenda quia. Unde aperiam veniam illum. Corporis consequuntur molestias voluptates ratione recusandae dolores voluptatum illo, mollitia consequatur! Doloremque neque a aut doloribus expedita odit magnam assumenda laudantium, consequuntur molestias delectus sequi suscipit vitae sunt! Laboriosam quisquam quam est voluptatem placeat sunt repellat non nostrum, quidem id. Vitae veritatis minus at dolore, dolor minima eaque. Omnis, quasi libero. Placeat, ad tempora quae vel distinctio quia ratione quibusdam similique doloremque perferendis facere, praesentium voluptatibus hic vitae! Cupiditate, consequatur.")), __jsx(_information_section_styles__WEBPACK_IMPORTED_MODULE_1__["SectionNumber"], {
    active: isActive,
    containerHeight: containerHeight,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }
  }, "1"), __jsx(_about_section_section_styles__WEBPACK_IMPORTED_MODULE_2__["SectionImage"], {
    alt: "Section",
    src: "".concat("", "/how-to-contribute/workspace.svg"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }
  }));
};

/***/ })

})
//# sourceMappingURL=how-to-contribute.js.eff037928485050c4c5b.hot-update.js.map