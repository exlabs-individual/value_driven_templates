webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_use_device_detect_use_device_detect_hook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/use-device-detect/use-device-detect.hook */ "./src/hooks/use-device-detect/use-device-detect.hook.ts");
/* harmony import */ var _layout_layout_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../layout/layout.styles */ "./src/layout/layout.styles.ts");
/* harmony import */ var _app_home_article_list_article_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app/home/article-list/article-list.component */ "./src/app/home/article-list/article-list.component.tsx");
/* harmony import */ var _content_articles_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../content/articles.json */ "./src/content/articles.json");
var _content_articles_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../content/articles.json */ "./src/content/articles.json", 1);


var _jsxFileName = "/Users/mikolajwargowski/Documents/projects/value_driven_templates/src/pages/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







const Home = () => {
  const {
    isMobile
  } = Object(_hooks_use_device_detect_use_device_detect_hook__WEBPACK_IMPORTED_MODULE_3__["useDeviceDetect"])();
  const allArticles = react__WEBPACK_IMPORTED_MODULE_2___default.a.useMemo(() => _content_articles_json__WEBPACK_IMPORTED_MODULE_6__.sort((a, b) => Number(new Date(b.updatedAt)) - Number(new Date(a.updatedAt))).map((_ref) => {
    let {
      updatedAt,
      fileName
    } = _ref,
        data = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["updatedAt", "fileName"]);

    return _objectSpread({}, data, {
      publishDate: new Date(updatedAt),
      url: "/articles/".concat(fileName)
    });
  }), []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_layout_layout_styles__WEBPACK_IMPORTED_MODULE_4__["LayoutBody"], {
    isMobile: isMobile,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, __jsx(_app_home_article_list_article_list_component__WEBPACK_IMPORTED_MODULE_5__["ArticleList"], {
    articles: allArticles,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/routing/app-routes.tsx":
false,

/***/ "./src/ui/desktop-header/header.component.tsx":
false,

/***/ "./src/ui/desktop-header/header.styles.ts":
false,

/***/ "./src/ui/logo/logo.component.tsx":
false,

/***/ "./src/ui/logo/logo.styles.ts":
false

})
//# sourceMappingURL=index.js.1771ce46bc376acca62b.hot-update.js.map