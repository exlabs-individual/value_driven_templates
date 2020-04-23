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
/* harmony import */ var _article_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./article.styles */ "./src/app/article/article.styles.ts");
/* harmony import */ var _ui_author_author_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/author/author.component */ "./src/ui/author/author.component.tsx");
var _jsxFileName = "/Users/mikolajwargowski/Documents/projects/value_driven_templates/src/app/article/article.component.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Article = ({
  title,
  imageUrl,
  publishDate,
  content
}) => {
  return __jsx(_article_styles__WEBPACK_IMPORTED_MODULE_2__["StyledArticle"], {
    className: "article",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  }, __jsx(_article_styles__WEBPACK_IMPORTED_MODULE_2__["PaddingContainer"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, __jsx(_article_styles__WEBPACK_IMPORTED_MODULE_2__["StyledHeader"], {
    style: {
      backgroundImage: "url(\"".concat(imageUrl, "\")")
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: "article-title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  }, title)), __jsx(_article_styles__WEBPACK_IMPORTED_MODULE_2__["InformationContainer"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, __jsx(_ui_author_author_component__WEBPACK_IMPORTED_MODULE_3__["Author"], {
    img: "https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    name: "John Doe",
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
      lineNumber: 41,
      columnNumber: 11
    }
  }, publishDate.toTimeString())), __jsx(_article_styles__WEBPACK_IMPORTED_MODULE_2__["ContentSection"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_1___default.a, {
    source: content,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  })), __jsx(_article_styles__WEBPACK_IMPORTED_MODULE_2__["StyledFooter"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, __jsx(_ui_author_author_component__WEBPACK_IMPORTED_MODULE_3__["Author"], {
    img: "https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    name: "John Doe",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }))));
};

/***/ })

})
//# sourceMappingURL=[id].js.ad98074961fd76583304.hot-update.js.map