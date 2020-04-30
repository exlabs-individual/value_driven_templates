webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/ui/mobile-menu/menu.styles.ts":
/*!*******************************************!*\
  !*** ./src/ui/mobile-menu/menu.styles.ts ***!
  \*******************************************/
/*! exports provided: MenuContainer, StyledNav, StyledList, StyledListItem, SpecialListItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuContainer", function() { return MenuContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledNav", function() { return StyledNav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledList", function() { return StyledList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledListItem", function() { return StyledListItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecialListItem", function() { return SpecialListItem; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

const MenuContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].section.withConfig({
  displayName: "menustyles__MenuContainer",
  componentId: "sc-1amfo06-0"
})(["border:1px solid red;"]);
const StyledNav = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].nav.withConfig({
  displayName: "menustyles__StyledNav",
  componentId: "sc-1amfo06-1"
})(["width:100%;height:100vh;border-top:1px solid #ededed;background-color:", ";position:fixed;position:-webkit-sticky;top:0;z-index:999;overflow:hidden;"], ({
  theme
}) => theme.color.primary);
const StyledList = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].ul.withConfig({
  displayName: "menustyles__StyledList",
  componentId: "sc-1amfo06-2"
})(["list-style:none;padding:10px 20px;& > li:last-child{margin-bottom:0;}"]);
const StyledListItem = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].li.withConfig({
  displayName: "menustyles__StyledListItem",
  componentId: "sc-1amfo06-3"
})(["border-bottom:1px solid #ffffff;margin-bottom:30px;font-size:19px;padding-bottom:10px;& > a{color:", ";text-decoration:none;}"], ({
  theme
}) => theme.color.white);
const SpecialListItem = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].li.withConfig({
  displayName: "menustyles__SpecialListItem",
  componentId: "sc-1amfo06-4"
})(["display:flex;justify-content:center;align-items:center;& > a{padding:10px 20px;background-color:", ";color:", ";text-decoration:none;border-radius:4px;transition:background-color 0.2s ease;&:hover{background-color:", ";}}"], ({
  theme
}) => theme.color.red, ({
  theme
}) => theme.color.white, ({
  theme
}) => theme.color['dark-red']);

/***/ })

})
//# sourceMappingURL=_app.js.308c2eec97f9db39062f.hot-update.js.map