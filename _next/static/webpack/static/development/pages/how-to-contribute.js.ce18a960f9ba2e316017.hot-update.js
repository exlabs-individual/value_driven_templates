webpackHotUpdate("static/development/pages/how-to-contribute.js",{

/***/ "./src/app/how-to-contribute/information-section/information-section.styles.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/how-to-contribute/information-section/information-section.styles.ts ***!
  \*************************************************************************************/
/*! exports provided: StyledSection, TextContainer, SectionTitle, SectionDescription, SectionImage, SectionNumber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledSection", function() { return StyledSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextContainer", function() { return TextContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionTitle", function() { return SectionTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionDescription", function() { return SectionDescription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionImage", function() { return SectionImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionNumber", function() { return SectionNumber; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

const StyledSection = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].section.withConfig({
  displayName: "information-sectionstyles__StyledSection",
  componentId: "xkgp05-0"
})(["width:100%;display:flex;justify-content:space-between;min-height:100vh;"]);
const TextContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "information-sectionstyles__TextContainer",
  componentId: "xkgp05-1"
})(["flex:1;display:flex;flex-direction:column;justify-content:center;color:", ";@media (max-width:", "){flex:3;}"], ({
  theme
}) => theme.color.black, ({
  theme
}) => theme.deviceBreakpoint.tablet);
const SectionTitle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].h2.withConfig({
  displayName: "information-sectionstyles__SectionTitle",
  componentId: "xkgp05-2"
})(["font-size:49px;margin-bottom:20px;@media (max-width:", "){font-size:34px;}"], ({
  theme
}) => theme.deviceBreakpoint.tablet);
const SectionDescription = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].p.withConfig({
  displayName: "information-sectionstyles__SectionDescription",
  componentId: "xkgp05-3"
})(["font-size:21px;@media (max-width:", "){font-size:18px;}"], ({
  theme
}) => theme.deviceBreakpoint.tablet);
const SectionImage = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].img.withConfig({
  displayName: "information-sectionstyles__SectionImage",
  componentId: "xkgp05-4"
})(["width:50%;@media (max-width:", "){width:40%;}"], ({
  theme
}) => theme.deviceBreakpoint.tablet);
const SectionNumber = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].h3.attrs(({
  containerHeight,
  active = false
}) => ({
  containerHeight,
  active
})).withConfig({
  displayName: "information-sectionstyles__SectionNumber",
  componentId: "xkgp05-5"
})(["top:130px;min-width:100px;min-height:100px;max-width:100px;max-height:100px;text-align:center;line-height:100px;color:", ";background-color:", ";border-radius:50%;margin:0 20px;position:relative;font-size:37px;@media (max-width:", "){min-width:70px;min-height:70px;max-width:70px;max-height:70px;font-size:30px;line-height:70px;}", " @keyframes setColor{0%{background:#ebebeb;}100%{background:#044aaf;}}&::after{content:'';display:block;width:6px;height:", ";background-color:", ";position:absolute;top:100px;left:50%;transform:translateX(-50%);transition:height 2s ease;@media (max-width:", "){top:70px;}", "}"], ({
  theme
}) => theme.color.white, ({
  theme,
  active
}) => active ? theme.color.primary : '#EBEBEB', ({
  theme
}) => theme.deviceBreakpoint.tablet, props => props.active && "\n  animation: setColor 1.5s 1 0s linear;\n  ", props => "".concat(props.active ? props.containerHeight - 70 : 0, "px"), ({
  theme,
  active
}) => active ? theme.color.primary : '#EBEBEB', ({
  theme
}) => theme.deviceBreakpoint.tablet, props => props.active && "\n  animation: setColor 1.5s 1 0s linear;\n  ");

/***/ })

})
//# sourceMappingURL=how-to-contribute.js.ce18a960f9ba2e316017.hot-update.js.map