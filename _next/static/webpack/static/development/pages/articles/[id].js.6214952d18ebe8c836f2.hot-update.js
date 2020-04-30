webpackHotUpdate("static/development/pages/articles/[id].js",{

/***/ "./src/app/article/article.component.tsx":
/*!***********************************************!*\
  !*** ./src/app/article/article.component.tsx ***!
  \***********************************************/
/*! exports provided: Article */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Article", function() { return Article; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ui_md_components_image_image_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/md-components/image/image.component */ "./src/ui/md-components/image/image.component.tsx");
/* harmony import */ var _ui_md_components_heading_heading_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/md-components/heading/heading.component */ "./src/ui/md-components/heading/heading.component.tsx");
/* harmony import */ var _article_aside_article_aside_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./article-aside/article-aside.component */ "./src/app/article/article-aside/article-aside.component.tsx");
/* harmony import */ var _hooks_use_device_detect_use_device_detect_hook__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/use-device-detect/use-device-detect.hook */ "./src/hooks/use-device-detect/use-device-detect.hook.ts");
/* harmony import */ var _ui_author_author_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/author/author.component */ "./src/ui/author/author.component.tsx");
/* harmony import */ var _article_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./article.styles */ "./src/app/article/article.styles.ts");
var _jsxFileName = "/Users/mikolajwargowski/Documents/projects/value_driven_templates/src/app/article/article.component.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const Article = ({
  title,
  imageUrl,
  publishDate,
  content
}) => {
  const {
    isMobile
  } = Object(_hooks_use_device_detect_use_device_detect_hook__WEBPACK_IMPORTED_MODULE_5__["useDeviceDetect"])();
  return __jsx(_article_styles__WEBPACK_IMPORTED_MODULE_7__["StyledArticle"], {
    className: "article",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }
  }, __jsx(_article_styles__WEBPACK_IMPORTED_MODULE_7__["StyledHeader"], {
    style: {
      backgroundImage: "url(\"".concat(imageUrl, "\")")
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, __jsx("p", {
    className: "category",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, "Development"), __jsx("h2", {
    className: "title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, title), __jsx(_article_styles__WEBPACK_IMPORTED_MODULE_7__["InformationContainer"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, __jsx(_ui_author_author_component__WEBPACK_IMPORTED_MODULE_6__["Author"], {
    img: "",
    name: "By John Doe",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }), __jsx("p", {
    className: "publish-date",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }, new Date().toDateString()))), __jsx(_article_styles__WEBPACK_IMPORTED_MODULE_7__["StyledContent"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }, __jsx(_article_styles__WEBPACK_IMPORTED_MODULE_7__["MarkdownContainer"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_1___default.a, {
    source: content,
    renderers: {
      image: _ui_md_components_image_image_component__WEBPACK_IMPORTED_MODULE_2__["Image"],
      header: _ui_md_components_heading_heading_component__WEBPACK_IMPORTED_MODULE_3__["Heading"]
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  })), !isMobile && __jsx(_article_aside_article_aside_component__WEBPACK_IMPORTED_MODULE_4__["ArticleAside"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 23
    }
  })), isMobile && __jsx(_article_aside_article_aside_component__WEBPACK_IMPORTED_MODULE_4__["ArticleAside"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 20
    }
  }));
};

/***/ }),

/***/ "./src/ui/md-components/heading/heading.component.tsx":
/*!************************************************************!*\
  !*** ./src/ui/md-components/heading/heading.component.tsx ***!
  \************************************************************/
/*! exports provided: Heading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Heading", function() { return Heading; });
const Heading = props => {
  console.log(props);
  return null;
};

/***/ })

})
//# sourceMappingURL=[id].js.6214952d18ebe8c836f2.hot-update.js.map