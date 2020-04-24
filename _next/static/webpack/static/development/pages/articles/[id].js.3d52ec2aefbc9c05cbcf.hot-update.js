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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ui_author_author_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/author/author.component */ "./src/ui/author/author.component.tsx");
/* harmony import */ var _article_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./article.styles */ "./src/app/article/article.styles.ts");
/* harmony import */ var _ui_md_components_image_image_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/md-components/image/image.component */ "./src/ui/md-components/image/image.component.tsx");

var _jsxFileName = "/Users/mikolajwargowski/Documents/projects/value_driven_templates/src/app/article/article.component.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var _StyledReactMarkdown = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(react_markdown__WEBPACK_IMPORTED_MODULE_2___default.a).withConfig({
  displayName: "articlecomponent___StyledReactMarkdown",
  componentId: "sc-19cm8x5-0"
})({
  padding: '20px 60px'
});

const Article = ({
  title,
  imageUrl,
  publishDate,
  content
}) => {
  return __jsx(_article_styles__WEBPACK_IMPORTED_MODULE_4__["StyledArticle"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  }, __jsx(_article_styles__WEBPACK_IMPORTED_MODULE_4__["StyledHeader"], {
    style: {
      backgroundImage: "url(\"".concat(imageUrl, "\")")
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, __jsx("p", {
    className: "category",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, "Development"), __jsx("h2", {
    className: "title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, title), __jsx(_article_styles__WEBPACK_IMPORTED_MODULE_4__["InformationContainer"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, __jsx(_ui_author_author_component__WEBPACK_IMPORTED_MODULE_3__["Author"], {
    img: "",
    name: "By John Doe",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }), __jsx("p", {
    className: "publish-date",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, new Date().toDateString()))), __jsx(_article_styles__WEBPACK_IMPORTED_MODULE_4__["StyledContent"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, __jsx(_StyledReactMarkdown, {
    source: content,
    renderers: {
      image: _ui_md_components_image_image_component__WEBPACK_IMPORTED_MODULE_5__["Image"]
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  })));
};

/***/ }),

/***/ "./src/app/article/article.styles.ts":
/*!*******************************************!*\
  !*** ./src/app/article/article.styles.ts ***!
  \*******************************************/
/*! exports provided: StyledArticle, StyledHeader, InformationContainer, StyledContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledArticle", function() { return StyledArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledHeader", function() { return StyledHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformationContainer", function() { return InformationContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledContent", function() { return StyledContent; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

const StyledArticle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].article.withConfig({
  displayName: "articlestyles__StyledArticle",
  componentId: "sc-1tz3zm3-0"
})(["display:flex;flex-direction:column;"]);
const StyledHeader = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].header.withConfig({
  displayName: "articlestyles__StyledHeader",
  componentId: "sc-1tz3zm3-1"
})(["height:300px;background-position:center;background-size:cover;display:flex;flex-direction:column;justify-content:flex-end;box-shadow:inset 0px 340px 0px rgba(4,74,175,0.6);color:", ";padding:0 0 40px 60px;& > .category{font-size:", ";}& > .title{font-size:39px;font-weight:700;margin:15px 0;}"], ({
  theme
}) => theme.color.white, ({
  theme
}) => theme.fontSize.medium);
const InformationContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "articlestyles__InformationContainer",
  componentId: "sc-1tz3zm3-2"
})(["display:flex;align-items:center;& .author__img{width:40px;height:40px;margin-right:10px;}& .author__name{font-size:", ";}& > .publish-date{margin-left:20px;font-size:", ";}"], ({
  theme
}) => theme.fontSize.medium, ({
  theme
}) => theme.fontSize.medium);
const StyledContent = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].section.withConfig({
  displayName: "articlestyles__StyledContent",
  componentId: "sc-1tz3zm3-3"
})(["background-color:#fff;"]);

/***/ })

})
//# sourceMappingURL=[id].js.3d52ec2aefbc9c05cbcf.hot-update.js.map