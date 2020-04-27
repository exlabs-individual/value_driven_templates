webpackHotUpdate("static/development/pages/about.js",{

/***/ "./src/app/about/about-container.component.tsx":
/*!*****************************************************!*\
  !*** ./src/app/about/about-container.component.tsx ***!
  \*****************************************************/
/*! exports provided: AboutContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutContainer", function() { return AboutContainer; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _about_vde_about_vde_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about-vde/about-vde.component */ "./src/app/about/about-vde/about-vde.component.tsx");
/* harmony import */ var _our_values_our_values_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./our-values/our-values.component */ "./src/app/about/our-values/our-values.component.tsx");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/index.js");
/* harmony import */ var _ui_mobile_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/mobile-header/header.component */ "./src/ui/mobile-header/header.component.tsx");
/* harmony import */ var _fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fullpage/react-fullpage */ "./node_modules/@fullpage/react-fullpage/dist/react-fullpage.js");
/* harmony import */ var _fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_7__);


var _jsxFileName = "/Users/mikolajwargowski/Documents/projects/value_driven_templates/src/app/about/about-container.component.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







const Animate = (_ref) => {
  let {
    transitionIn,
    transition = 'fade'
  } = _ref,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["transitionIn", "transition"]);

  return __jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_5__["CSSTransition"], {
    in: transitionIn,
    unmountOnExit: true,
    timeout: 2000,
    classNames: transition,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 3
    }
  }, __jsx("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: transition
  }, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  })));
};

const AboutContainer = () => {
  const options = {
    sectionClassName: 'section',
    anchors: ['about-vde', 'our-values', 'sharing'],
    scrollBar: false,
    navigation: false,
    verticalAlign: false,
    arrowNavigation: false,
    scrollOverflow: false
  };
  const [isScrollingTop, setScrollingTop] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false);
  const [lastScroll, setLastScroll] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(0);

  const onScroll = states => {
    setScrollingTop(lastScroll > states.activeSection);
    setLastScroll(states.activeSection);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_ui_mobile_header_header_component__WEBPACK_IMPORTED_MODULE_6__["Header"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }), __jsx(_fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_7___default.a, {
    scrollOverflow: true,
    render: ({
      state,
      fullpageApi
    }) => {
      return __jsx("div", {
        id: "fullpage-wrapper",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "section",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 15
        }
      }, __jsx(_about_vde_about_vde_component__WEBPACK_IMPORTED_MODULE_3__["AboutVDE"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 17
        }
      })), __jsx("div", {
        className: "section",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 15
        }
      }, __jsx(_our_values_our_values_component__WEBPACK_IMPORTED_MODULE_4__["OurValues"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 17
        }
      })), __jsx("div", {
        className: "section",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 15
        }
      }, __jsx("h3", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 17
        }
      }, "Section 3"), __jsx("button", {
        onClick: () => fullpageApi.moveTo(1, 0),
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 17
        }
      }, "Move top")));
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }));
};

/***/ }),

/***/ "./src/ui/hamburger/hamburger.component.tsx":
/*!**************************************************!*\
  !*** ./src/ui/hamburger/hamburger.component.tsx ***!
  \**************************************************/
/*! exports provided: Hambuerger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hambuerger", function() { return Hambuerger; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hamburger_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hamburger.styles */ "./src/ui/hamburger/hamburger.styles.ts");
var _jsxFileName = "/Users/mikolajwargowski/Documents/projects/value_driven_templates/src/ui/hamburger/hamburger.component.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Hambuerger = ({
  isOpen,
  onClick,
  theme = 'primary'
}) => {
  return __jsx(_hamburger_styles__WEBPACK_IMPORTED_MODULE_1__["StyledBurger"], {
    name: "menu-button",
    open: isOpen,
    onClick: onClick,
    themeType: theme,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }));
};

/***/ }),

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

/***/ }),

/***/ "./src/ui/mobile-header/header.component.tsx":
/*!***************************************************!*\
  !*** ./src/ui/mobile-header/header.component.tsx ***!
  \***************************************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _header_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.styles */ "./src/ui/mobile-header/header.styles.ts");
/* harmony import */ var _hooks_use_mobile_menu_use_mobile_menu_hook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/use-mobile-menu/use-mobile-menu.hook */ "./src/hooks/use-mobile-menu/use-mobile-menu.hook.ts");
/* harmony import */ var _context_mobile_menu_mobile_menu_action_creators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/mobile-menu/mobile-menu.action-creators */ "./src/context/mobile-menu/mobile-menu.action-creators.ts");
/* harmony import */ var _logo_logo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../logo/logo.component */ "./src/ui/logo/logo.component.tsx");
/* harmony import */ var _hamburger_hamburger_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hamburger/hamburger.component */ "./src/ui/hamburger/hamburger.component.tsx");
var _jsxFileName = "/Users/mikolajwargowski/Documents/projects/value_driven_templates/src/ui/mobile-header/header.component.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const Header = ({
  isSticky = false
}) => {
  const {
    state: {
      isVisible: isMenuVisible
    },
    dispatch
  } = Object(_hooks_use_mobile_menu_use_mobile_menu_hook__WEBPACK_IMPORTED_MODULE_2__["useMobileMenuState"])();

  const onMenuClick = () => dispatch(Object(_context_mobile_menu_mobile_menu_action_creators__WEBPACK_IMPORTED_MODULE_3__["toggleMenu"])());

  return __jsx(_header_styles__WEBPACK_IMPORTED_MODULE_1__["HeaderContainer"], {
    isSticky: isSticky,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, __jsx(_logo_logo_component__WEBPACK_IMPORTED_MODULE_4__["Logo"], {
    theme: isSticky ? 'primary' : 'secondary',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }), __jsx(_header_styles__WEBPACK_IMPORTED_MODULE_1__["MenuContainer"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, __jsx(_hamburger_hamburger_component__WEBPACK_IMPORTED_MODULE_5__["Hambuerger"], {
    isOpen: isMenuVisible,
    onClick: onMenuClick,
    theme: isSticky ? 'primary' : 'secondary',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  })));
};

/***/ }),

/***/ "./src/ui/mobile-header/header.styles.ts":
/*!***********************************************!*\
  !*** ./src/ui/mobile-header/header.styles.ts ***!
  \***********************************************/
/*! exports provided: HeaderContainer, MenuContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderContainer", function() { return HeaderContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuContainer", function() { return MenuContainer; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

const HeaderContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.attrs(({
  isSticky = false
}) => ({
  isSticky
})).withConfig({
  displayName: "headerstyles__HeaderContainer",
  componentId: "ffnmp5-0"
})(["background-color:", ";width:calc(100% - 40px);padding:15px 20px;display:flex;align-items:center;justify-content:space-between;color:#000;animation:none;", ""], ({
  theme,
  isSticky
}) => isSticky ? theme.color.primary : 'inherit', props => props.isSticky && "\n      position: fixed;\n      top: 0;\n      left: 0;\n      width: calc(100% - 40px);\n      z-index: 999;\n  ");
const MenuContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "headerstyles__MenuContainer",
  componentId: "ffnmp5-1"
})(["& > .menu-btn{background-color:inherit;border:0;outline:none;}"]);

/***/ })

})
//# sourceMappingURL=about.js.1d3128fc16d002ca6ab9.hot-update.js.map