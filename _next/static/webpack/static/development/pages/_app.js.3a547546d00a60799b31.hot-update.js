webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/ui/desktop-navigation/desktop-navigation.styles.ts":
/*!****************************************************************!*\
  !*** ./src/ui/desktop-navigation/desktop-navigation.styles.ts ***!
  \****************************************************************/
/*! exports provided: NavigationContainer, StyledContainer, StyledNav, StyledList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationContainer", function() { return NavigationContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledContainer", function() { return StyledContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledNav", function() { return StyledNav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledList", function() { return StyledList; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _container_container_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../container/container.styles */ "./src/ui/container/container.styles.ts");


const NavigationContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].header.attrs(({
  themeType = 'primary',
  isSticky = false
}) => ({
  themeType,
  isSticky
})).withConfig({
  displayName: "desktop-navigationstyles__NavigationContainer",
  componentId: "sc-1cr38vd-0"
})(["background-color:", ";padding:20px ", ";animation:moveUp 0.3s ease-in-out;", " @keyframes moveUp{from{transform:translateY(-5rem);}to{transform:translateY(0rem);}}@keyframes moveDown{from{transform:translateY(-5rem);}to{transform:translateY(0rem);}}"], ({
  theme,
  themeType
}) => themeType === 'primary' ? theme.color.primary : 'inherit', ({
  theme
}) => theme.padding.small, props => props.isSticky && "\n      position: fixed;\n      top: 0;\n      left: 0;\n      width: calc(100% - 40px);\n      z-index: 999;\n      animation: moveDown 0.5s ease-in-out;\n  ");
const StyledContainer = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(_container_container_styles__WEBPACK_IMPORTED_MODULE_1__["Container"]).withConfig({
  displayName: "desktop-navigationstyles__StyledContainer",
  componentId: "sc-1cr38vd-1"
})(["display:flex;justify-content:space-between;"]);
const StyledNav = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].nav.withConfig({
  displayName: "desktop-navigationstyles__StyledNav",
  componentId: "sc-1cr38vd-2"
})([""]);
const StyledList = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].ul.attrs(({
  themeType = 'primary'
}) => ({
  themeType
})).withConfig({
  displayName: "desktop-navigationstyles__StyledList",
  componentId: "sc-1cr38vd-3"
})(["list-style:none;display:flex;align-items:center;& .nav-item{margin-right:20px;&__link{color:", ";text-decoration:none;font-size:", ";font-weight:700;}}& > .nav-item:last-child{margin-right:0;}"], ({
  theme,
  themeType
}) => themeType === 'primary' ? theme.color.white : theme.color.black, ({
  theme
}) => theme.fontSize.medium);

/***/ })

})
//# sourceMappingURL=_app.js.3a547546d00a60799b31.hot-update.js.map