webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/app/home/header/header.styles.tsx":
/*!***********************************************!*\
  !*** ./src/app/home/header/header.styles.tsx ***!
  \***********************************************/
/*! exports provided: HeaderContainer, StyledContainer, TextContainer, HeaderImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderContainer", function() { return HeaderContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledContainer", function() { return StyledContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextContainer", function() { return TextContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderImage", function() { return HeaderImage; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _ui_container_container_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui/container/container.styles */ "./src/ui/container/container.styles.ts");


const HeaderContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].section.withConfig({
  displayName: "headerstyles__HeaderContainer",
  componentId: "c96k2x-0"
})(["padding:10px ", ";animation:showHeader 1s ease;@media (min-width:", "){height:calc(100vh - 112px);}@keyframes showHeader{from{opacity:0;}to{opacity:1;}}"], ({
  theme
}) => theme.padding.small, ({
  theme
}) => theme.deviceBreakpoint.desktop);
const StyledContainer = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(_ui_container_container_styles__WEBPACK_IMPORTED_MODULE_1__["Container"]).withConfig({
  displayName: "headerstyles__StyledContainer",
  componentId: "c96k2x-1"
})(["display:flex;justify-content:space-between;align-items:center;"]);
const TextContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "headerstyles__TextContainer",
  componentId: "c96k2x-2"
})(["width:40%;color:", ";& > .title{font-size:61px;margin:0;@media (max-width:", "){font-size:49px;}}& > .sub-title{margin:0;margin-top:5px;font-weight:500;font-size:21px;}& > .additional-info{display:block;margin:60px 0 50px;font-weight:500;max-width:85%;@media (max-width:", "){margin:40px 0 50px;}&::before{content:'';display:inline-block;margin-right:10px;height:2px;width:30px;background-color:", ";margin-bottom:5px;}}& > .special-link{display:inline-block;@media (min-width:", "){padding:15px 30px;}}"], ({
  theme
}) => theme.color.black, ({
  theme
}) => theme.deviceBreakpoint.tablet, ({
  theme
}) => theme.deviceBreakpoint.desktop, ({
  theme
}) => theme.color.black, ({
  theme
}) => theme.deviceBreakpoint.desktop);
const HeaderImage = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].img.withConfig({
  displayName: "headerstyles__HeaderImage",
  componentId: "c96k2x-3"
})(["width:60%;"]);

/***/ })

})
//# sourceMappingURL=index.js.6f3c18641534ead88c94.hot-update.js.map