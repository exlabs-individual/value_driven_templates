webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/ui/desktop-navigation/desktop-navigation.styles.ts":
/*!****************************************************************!*\
  !*** ./src/ui/desktop-navigation/desktop-navigation.styles.ts ***!
  \****************************************************************/
/*! exports provided: NavigationContainer, StyledNav, StyledList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationContainer", function() { return NavigationContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledNav", function() { return StyledNav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledList", function() { return StyledList; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

const NavigationContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.attrs(({
  themeType = 'primary',
  isSticky = false
}) => ({
  themeType,
  isSticky
})).withConfig({
  displayName: "desktop-navigationstyles__NavigationContainer",
  componentId: "sc-1cr38vd-0"
})(["background-color:", ";padding:10px ", ";display:flex;justify-content:space-between;"], ({
  theme,
  themeType
}) => themeType === 'primary' ? theme.color.primary : 'inherit', ({
  theme
}) => theme.padding.small);
const StyledNav = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].nav.withConfig({
  displayName: "desktop-navigationstyles__StyledNav",
  componentId: "sc-1cr38vd-1"
})([""]);
const StyledList = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].ul.attrs(({
  themeType = 'primary'
}) => ({
  themeType
})).withConfig({
  displayName: "desktop-navigationstyles__StyledList",
  componentId: "sc-1cr38vd-2"
})(["list-style:none;display:flex;& .nav-item{margin-right:20px;&__link{color:", ";text-decoration:none;font-size:", ";font-weight:700;}}& > .nav-item:last-child{margin-right:0;}"], ({
  theme,
  themeType
}) => themeType === 'primary' ? theme.color.white : theme.color.black, ({
  theme
}) => theme.fontSize.medium);

/***/ })

})
//# sourceMappingURL=_app.js.08fa0913119882e1adb3.hot-update.js.map