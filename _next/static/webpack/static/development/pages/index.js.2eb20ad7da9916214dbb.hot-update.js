webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/app/home/article-thumbnail/article-thumbnail.component.tsx":
/*!************************************************************************!*\
  !*** ./src/app/home/article-thumbnail/article-thumbnail.component.tsx ***!
  \************************************************************************/
/*! exports provided: ArticleThumbnail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleThumbnail", function() { return ArticleThumbnail; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _article_thumbnail_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./article-thumbnail.styles */ "./src/app/home/article-thumbnail/article-thumbnail.styles.ts");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ui_author_author_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/author/author.component */ "./src/ui/author/author.component.tsx");
/* harmony import */ var _content_authors_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../content/authors.json */ "./src/content/authors.json");
var _content_authors_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../content/authors.json */ "./src/content/authors.json", 1);

var _jsxFileName = "/Users/mikolajwargowski/Documents/projects/value_driven_templates/src/app/home/article-thumbnail/article-thumbnail.component.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





const ArticleThumbnail = article => {
  const author = _content_authors_json__WEBPACK_IMPORTED_MODULE_5__.find(author => author.username === article.author);
  const {
    title,
    description,
    category,
    imageUrl,
    publishDate,
    url
  } = article;
  return __jsx(_article_thumbnail_styles__WEBPACK_IMPORTED_MODULE_2__["StyledArticleThumbnail"], {
    className: "article-thumbnail",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, __jsx(_article_thumbnail_styles__WEBPACK_IMPORTED_MODULE_2__["ThumbnailImage"], {
    style: {
      backgroundImage: "url(\"".concat("", "/").concat(imageUrl, "\")")
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "category",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, category)), __jsx(_article_thumbnail_styles__WEBPACK_IMPORTED_MODULE_2__["ThumbnailContent"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, __jsx("h3", {
    className: "article-title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, title), __jsx("div", {
    className: "article-date",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, publishDate.toDateString()), __jsx("p", {
    className: "article-description",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, description), __jsx(_article_thumbnail_styles__WEBPACK_IMPORTED_MODULE_2__["ThumbnailFooter"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, __jsx(_ui_author_author_component__WEBPACK_IMPORTED_MODULE_4__["Author"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, author, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: url,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }, __jsx(_article_thumbnail_styles__WEBPACK_IMPORTED_MODULE_2__["ThumbnailButton"], {
    href: url,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, "See details")))));
};

/***/ })

})
//# sourceMappingURL=index.js.2eb20ad7da9916214dbb.hot-update.js.map