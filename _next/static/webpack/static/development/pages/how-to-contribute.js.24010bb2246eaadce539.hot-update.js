webpackHotUpdate("static/development/pages/how-to-contribute.js",{

/***/ "./src/layout/layout.styles.ts":
/*!*************************************!*\
  !*** ./src/layout/layout.styles.ts ***!
  \*************************************/
/*! exports provided: Layout, BodyContainer, LayoutBody */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Layout", function() { return Layout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BodyContainer", function() { return BodyContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutBody", function() { return LayoutBody; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

const Layout = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "layoutstyles__Layout",
  componentId: "j1hzp4-0"
})(["width:100%;height:100%;min-height:calc(100vh - 133px);display:flex;flex-direction:column;justify-content:space-between;"]);
const BodyContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "layoutstyles__BodyContainer",
  componentId: "j1hzp4-1"
})([""]);
const LayoutBody = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.attrs(({
  isMobile = false,
  isDesktop = false
}) => ({
  isMobile,
  isDesktop
})).withConfig({
  displayName: "layoutstyles__LayoutBody",
  componentId: "j1hzp4-2"
})(["padding:", ";position:relative;& > .titled-content{position:", ";bottom:80px;width:100%;overflow:scroll;height:100%;}"], props => props.isMobile ? '20px 10px' : '20px 40px', props => props.isDesktop ? 'relative' : 'initial');

/***/ })

})
//# sourceMappingURL=how-to-contribute.js.24010bb2246eaadce539.hot-update.js.map