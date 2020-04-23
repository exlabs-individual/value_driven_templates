webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/ui/hamburger/hamburger.styles.ts":
/*!**********************************************!*\
  !*** ./src/ui/hamburger/hamburger.styles.ts ***!
  \**********************************************/
/*! exports provided: StyledBurger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledBurger", function() { return StyledBurger; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

const StyledBurger = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button.attrs(({
  open = false,
  themeType = 'primary'
}) => ({
  open,
  themeType
})).withConfig({
  displayName: "hamburgerstyles__StyledBurger",
  componentId: "sc-1suem20-0"
})(["background-color:inherit;border:none;outline:none;padding:0;width:2rem;height:2rem;display:flex;flex-direction:column;justify-content:space-around;transform-origin:1px;cursor:pointer;& > div{width:32px;height:4px;background-color:", ";border-radius:10px;transition:transform 0.3s ease,opacity 0.3s ease;position:relative;transform-origin:1px;&:first-child{transform:", ";}&:nth-child(2){opacity:", ";transform:", ";}&:nth-child(3){transform:", ";}}"], ({
  theme,
  themeType
}) => themeType === 'primary' ? theme.color.white : theme.color.black, ({
  open
}) => open ? 'rotate(45deg)' : 'rotate(0)', ({
  open
}) => open ? '0' : '1', ({
  open
}) => open ? 'translateX(20px)' : 'translateX(0)', ({
  open
}) => open ? 'rotate(-45deg)' : 'rotate(0)');

/***/ })

})
//# sourceMappingURL=_app.js.92bda4a12f440e9506ed.hot-update.js.map