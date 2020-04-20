webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/ui/footer/footer.styles.ts":
/*!****************************************!*\
  !*** ./src/ui/footer/footer.styles.ts ***!
  \****************************************/
/*! exports provided: StyledFooter, AboutContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledFooter", function() { return StyledFooter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutContainer", function() { return AboutContainer; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

const StyledFooter = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].footer.attrs(({
  isMobile = false
}) => ({
  isMobile
})).withConfig({
  displayName: "footerstyles__StyledFooter",
  componentId: "th6fdd-0"
})(["background:linear-gradient(90deg,#044aaf,#022558);color:", ";padding:", ";display:flex;align-items:center;flex-direction:", ";justify-content:space-between;& > .copyright{font-size:14px;margin-top:5px;}"], ({
  theme
}) => theme.color.white, props => props.isMobile ? '15px 20px' : '20px 60px', props => props.isMobile ? 'column' : 'row');
const AboutContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "footerstyles__AboutContainer",
  componentId: "th6fdd-1"
})(["display:flex;align-items:center;font-size:17px;& > .title{flex:1;font-weight:700;margin-right:5px;}& > .link{margin-left:5px;color:", ";text-decoration:none;display:flex;align-items:center;& > .logo-img{margin-right:5px;}}"], ({
  theme
}) => theme.color.white);

/***/ })

})
//# sourceMappingURL=_app.js.3fbcc2fe082f8a2428aa.hot-update.js.map