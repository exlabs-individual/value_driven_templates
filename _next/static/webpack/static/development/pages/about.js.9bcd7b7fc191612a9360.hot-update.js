webpackHotUpdate("static/development/pages/about.js",{

/***/ "./src/ui/mobile-header/header.styles.ts":
/*!***********************************************!*\
  !*** ./src/ui/mobile-header/header.styles.ts ***!
  \***********************************************/
/*! exports provided: HeaderContainer, MenuContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderContainer", function() { return HeaderContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuContainer", function() { return MenuContainer; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

const HeaderContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.attrs(({
  isSticky = false,
  themeType
}) => ({
  isSticky,
  themeType
})).withConfig({
  displayName: "headerstyles__HeaderContainer",
  componentId: "ffnmp5-0"
})(["background-color:", ";width:calc(100% - 40px);padding:15px 20px;display:flex;align-items:center;justify-content:space-between;color:#000;animation:none;", ""], ({
  theme,
  themeType
}) => themeType === 'primary' ? theme.color.primary : 'inherit', props => props.isSticky && "\n      position: fixed;\n      top: 0;\n      left: 0;\n      width: calc(100% - 40px);\n      z-index: 999;\n  ");
const MenuContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "headerstyles__MenuContainer",
  componentId: "ffnmp5-1"
})(["& > .menu-btn{background-color:inherit;border:0;outline:none;}"]);

/***/ })

})
//# sourceMappingURL=about.js.9bcd7b7fc191612a9360.hot-update.js.map