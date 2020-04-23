webpackHotUpdate("static/development/pages/_app.js",{

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
  isSticky = false
}) => ({
  isSticky
})).withConfig({
  displayName: "headerstyles__HeaderContainer",
  componentId: "ffnmp5-0"
})(["background-color:", ";width:calc(100% - 40px);padding:15px 20px;display:flex;align-items:center;justify-content:space-between;color:#000;animation:none;", ""], ({
  theme,
  isSticky
}) => isSticky ? theme.color.primary : 'inherit', props => props.isSticky && "\n    border: 1px solid red;\n      position: fixed;\n      top: 0;\n      left: 0;\n      width: calc(100% - 40px);\n      z-index: 999;\n      animation: moveDown 0.2s ease-in-out;\n  ");
const MenuContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "headerstyles__MenuContainer",
  componentId: "ffnmp5-1"
})(["& > .menu-btn{background-color:inherit;border:0;outline:none;}"]);

/***/ })

})
//# sourceMappingURL=_app.js.19321f235513c83ad8a9.hot-update.js.map