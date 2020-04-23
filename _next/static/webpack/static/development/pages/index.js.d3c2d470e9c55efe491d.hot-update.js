webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/ui/special-link/special-link.styles.ts":
/*!****************************************************!*\
  !*** ./src/ui/special-link/special-link.styles.ts ***!
  \****************************************************/
/*! exports provided: StyledLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledLink", function() { return StyledLink; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _theme_theme_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../theme/theme.config */ "./src/theme/theme.config.ts");


const linkColorMap = {
  primary: _theme_theme_config__WEBPACK_IMPORTED_MODULE_1__["theme"].color.primary,
  red: _theme_theme_config__WEBPACK_IMPORTED_MODULE_1__["theme"].color.red
};
const hoverLinkColorMap = {
  primary: _theme_theme_config__WEBPACK_IMPORTED_MODULE_1__["theme"].color['dark-primary'],
  red: _theme_theme_config__WEBPACK_IMPORTED_MODULE_1__["theme"].color['dark-red']
};
const StyledLink = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].a.attrs(({
  color = 'primary'
}) => ({
  color
})).withConfig({
  displayName: "special-linkstyles__StyledLink",
  componentId: "rjluy4-0"
})(["background-color:", ";color:", ";text-decoration:none;padding:10px 20px;font-size:", ";font-weight:500;border-radius:", ";transition:", ";&:hover{background-color:", ";}"], props => linkColorMap[props.color], ({
  theme
}) => theme.color.white, ({
  theme
}) => theme.fontSize.medium, ({
  theme
}) => theme.defaultRadius, ({
  theme
}) => theme.transitionValue('background-color'), props => hoverLinkColorMap[props.color]);

/***/ })

})
//# sourceMappingURL=index.js.d3c2d470e9c55efe491d.hot-update.js.map