webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/ui/footer/footer.styles.ts":
/*!****************************************!*\
  !*** ./src/ui/footer/footer.styles.ts ***!
  \****************************************/
/*! exports provided: StyledFooter, StyledContainer, AboutContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledFooter", function() { return StyledFooter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledContainer", function() { return StyledContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutContainer", function() { return AboutContainer; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _container_container_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../container/container.styles */ "./src/ui/container/container.styles.ts");


const StyledFooter = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].footer.attrs(({
  isMobile = false
}) => ({
  isMobile
})).withConfig({
  displayName: "footerstyles__StyledFooter",
  componentId: "th6fdd-0"
})(["background:linear-gradient(90deg,#044aaf,#022558);color:", ";padding:", ";& > .about-container{font-size:", ";}& > .copyright{font-size:", ";margin-top:5px;}"], ({
  theme
}) => theme.color.white, props => props.isMobile ? '15px 20px' : '20px 60px', props => props.isMobile ? '15px' : '19px', props => props.isMobile ? '13px' : '15px');
const StyledContainer = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(_container_container_styles__WEBPACK_IMPORTED_MODULE_1__["Container"]).withConfig({
  displayName: "footerstyles__StyledContainer",
  componentId: "th6fdd-1"
})(["display:flex;justify-content:space-between;align-items:center;@media (max-width:", "){flex-direction:column;& > .copyright{margin-top:20px;}}"], ({
  theme
}) => theme.deviceBreakpoint.desktop);
const AboutContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "footerstyles__AboutContainer",
  componentId: "th6fdd-2"
})(["display:flex;align-items:center;& > .title{font-weight:700;margin-right:5px;}& > .link{margin-left:5px;color:", ";text-decoration:none;display:flex;align-items:center;& > .logo-img{margin-right:5px;}}"], ({
  theme
}) => theme.color.white);

/***/ })

})
//# sourceMappingURL=_app.js.ee6badfb33ed61402831.hot-update.js.map