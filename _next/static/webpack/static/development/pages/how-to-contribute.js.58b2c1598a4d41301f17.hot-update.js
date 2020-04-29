webpackHotUpdate("static/development/pages/how-to-contribute.js",{

/***/ "./src/app/how-to-contribute/how-to-contribute-container.component.tsx":
/*!*****************************************************************************!*\
  !*** ./src/app/how-to-contribute/how-to-contribute-container.component.tsx ***!
  \*****************************************************************************/
/*! exports provided: HowToContributeContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HowToContributeContainer", function() { return HowToContributeContainer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _header_how_to_contribute_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/how-to-contribute-header.component */ "./src/app/how-to-contribute/header/how-to-contribute-header.component.tsx");
/* harmony import */ var _how_to_contribute_container_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./how-to-contribute-container.styles */ "./src/app/how-to-contribute/how-to-contribute-container.styles.ts");
/* harmony import */ var _information_section_information_section_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./information-section/information-section.component */ "./src/app/how-to-contribute/information-section/information-section.component.tsx");
var _jsxFileName = "/Users/mikolajwargowski/Documents/projects/value_driven_templates/src/app/how-to-contribute/how-to-contribute-container.component.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const HowToContributeContainer = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_header_how_to_contribute_header_component__WEBPACK_IMPORTED_MODULE_1__["HowToContributeHeader"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }), __jsx(_how_to_contribute_container_styles__WEBPACK_IMPORTED_MODULE_2__["StyledContainer"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx(_information_section_information_section_component__WEBPACK_IMPORTED_MODULE_3__["InformationSection"], {
    id: "how-to-contribute-content",
    title: "Create the content",
    description: "Inside src/content/articles directory create a new markdown file with the selected filename. Inside markdown file, You can write the content of Your article, remember article title, description, and image, will be added in the next step.",
    image: "workspace",
    sectionNumber: 1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }), __jsx(_information_section_information_section_component__WEBPACK_IMPORTED_MODULE_3__["InformationSection"], {
    title: "Add article metadata",
    description: "Go to src/content/articles.json and add a new object with proper metadata for Your article, where fileName is just a plain name without extension of Your article content markdown file, imageUrl is a static file taken from the public directory or dynamic URL. Lastly, add Your nickname in the author field.",
    image: "content",
    sectionNumber: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }), __jsx(_information_section_information_section_component__WEBPACK_IMPORTED_MODULE_3__["InformationSection"], {
    title: "Describe yourself",
    description: "If it is Your first time adding content, please go to src/content/authors.json and add new entry without Your username used in article metadata, Your full name, and URL to Your avatar image",
    image: "content",
    sectionNumber: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  })));
};

/***/ })

})
//# sourceMappingURL=how-to-contribute.js.58b2c1598a4d41301f17.hot-update.js.map