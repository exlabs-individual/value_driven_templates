webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/app/home/article-list/article-list.component.tsx":
/*!**************************************************************!*\
  !*** ./src/app/home/article-list/article-list.component.tsx ***!
  \**************************************************************/
/*! exports provided: ArticleList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleList", function() { return ArticleList; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _article_thumbnail_article_thumbnail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../article-thumbnail/article-thumbnail.component */ "./src/app/home/article-thumbnail/article-thumbnail.component.tsx");
/* harmony import */ var _hooks_use_device_detect_use_device_detect_hook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hooks/use-device-detect/use-device-detect.hook */ "./src/hooks/use-device-detect/use-device-detect.hook.ts");
/* harmony import */ var _article_list_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./article-list.styles */ "./src/app/home/article-list/article-list.styles.ts");

var _jsxFileName = "/Users/mikolajwargowski/Documents/projects/value_driven_templates/src/app/home/article-list/article-list.component.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const ArticleList = ({
  articles
}) => {
  const articleList = __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, articles.map((article, index) => __jsx(_article_thumbnail_article_thumbnail_component__WEBPACK_IMPORTED_MODULE_2__["ArticleThumbnail"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    key: "article-".concat(index)
  }, article, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }))));

  const {
    isMobile
  } = Object(_hooks_use_device_detect_use_device_detect_hook__WEBPACK_IMPORTED_MODULE_3__["useDeviceDetect"])();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, isMobile ? __jsx(_article_list_styles__WEBPACK_IMPORTED_MODULE_4__["MobileList"], {
    className: "article-list",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, articleList) : __jsx(_article_list_styles__WEBPACK_IMPORTED_MODULE_4__["DesktopList"], {
    className: "article-list",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, articleList));
};

/***/ })

})
//# sourceMappingURL=index.js.f290812b5e167a7e7568.hot-update.js.map