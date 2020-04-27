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
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/index.js");
/* harmony import */ var _fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fullpage/react-fullpage */ "./node_modules/@fullpage/react-fullpage/dist/react-fullpage.js");
/* harmony import */ var _fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "/Users/mikolajwargowski/Documents/projects/value_driven_templates/src/app/about/about-container.component.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




const Animate = (_ref) => {
  let {
    transitionIn,
    transition = 'fade'
  } = _ref,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["transitionIn", "transition"]);

  return __jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_3__["CSSTransition"], {
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

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_4___default.a, {
    scrollOverflow: true,
    sectionsColor: ['orange', 'purple', 'green'],
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
        className: "section section1",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 15
        }
      }, __jsx("h3", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 17
        }
      }, "Section 1"), __jsx("p", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 17
        }
      }, "\"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...\" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum, urna id tincidunt fermentum, sem ex accumsan libero, non fringilla risus nibh a enim. Curabitur sagittis erat id magna congue, non ultricies risus rutrum. Nulla in dolor et metus eleifend dictum non ac arcu. Fusce sodales magna quis lacus finibus vehicula. Mauris ut lacus volutpat, interdum odio eu, feugiat sem. Praesent sed ultricies libero, at semper turpis. Quisque imperdiet libero at libero congue suscipit. Phasellus sollicitudin finibus ex vel placerat. Maecenas a magna eget massa fermentum sodales quis nec risus. Ut posuere nibh quis est tristique semper. Sed lacinia convallis magna, sollicitudin viverra quam hendrerit eget. Nullam ac sollicitudin orci. Fusce fringilla scelerisque efficitur. Proin quis massa mi. Nullam efficitur eleifend urna, vel viverra nunc aliquet nec. Ut consequat convallis malesuada. Vestibulum vel faucibus ipsum, et molestie diam. Curabitur porttitor, ipsum in consequat ullamcorper, velit neque egestas massa, in gravida diam magna vel dolor. Vivamus maximus, velit et bibendum porta, felis nibh sagittis risus, vel mattis erat augue vitae ligula. Aliquam ullamcorper, urna quis imperdiet tincidunt, ex odio mollis est, eu maximus nibh ex vel eros. Sed ut felis pretium, sagittis libero ut, suscipit diam. Donec rutrum, quam id commodo porttitor, nibh lacus eleifend nibh, non ullamcorper elit velit eu magna. Nulla sagittis dui non augue ornare rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis commodo enim et eros vulputate consectetur. Donec venenatis, lectus vitae lobortis porttitor, sapien libero rutrum magna, eget tempor tortor neque eu quam. Nullam nisl mi, efficitur nec euismod vitae, tincidunt ac mi. Nunc at quam porta, tincidunt nibh sit amet, elementum lectus. Maecenas a eros vitae mauris sodales hendrerit. Maecenas suscipit nulla sed ex pellentesque sagittis. Nullam suscipit quis tellus vel semper. Duis dictum feugiat ipsum nec hendrerit. Integer auctor at nulla ac tristique. Integer eu lectus luctus, fringilla tellus vel, dapibus risus. Nunc purus nisi, scelerisque non erat eget, efficitur iaculis tortor. Mauris scelerisque massa tincidunt velit consequat aliquam. Proin ullamcorper, arcu eget facilisis pellentesque, turpis ligula consectetur turpis, sit amet cursus sapien leo sit amet ante. Cras elementum nisl at nulla cursus semper. Etiam consectetur magna at turpis accumsan placerat. Aenean euismod tristique pretium. Nulla ipsum ante, pharetra id neque sit amet, feugiat aliquet ex. Duis malesuada in risus non viverra. Integer imperdiet, est quis ornare convallis, arcu justo luctus felis, vitae consequat massa nisl vitae sapien. Ut at velit dignissim, placerat diam ac, interdum elit. Sed lobortis fringilla posuere. Morbi bibendum sed quam et mollis. Duis at tortor tellus. Phasellus venenatis at mauris vitae hendrerit. Aenean ac magna porttitor, rhoncus sem nec, luctus orci. Donec placerat fringilla aliquam. Praesent turpis turpis, vehicula nec nisl in, euismod accumsan nulla. Nulla facilisi. Praesent pharetra magna at lobortis fringilla. Duis euismod nisl vel diam fringilla, sit amet condimentum eros malesuada. Integer at lectus eu dui faucibus ultricies. Praesent et turpis lacinia, auctor magna sed, suscipit enim. Nam eros magna, viverra finibus justo nec, dictum pharetra velit. Sed eget augue lacinia, tincidunt tellus non, malesuada eros. Morbi suscipit metus in lectus sodales pulvinar. Donec aliquet mauris sed dui dictum, non ultrices enim maximus. Pellentesque elementum semper turpis in lacinia. Ut rhoncus erat ante, et fermentum felis volutpat ut. Ut at est eget metus cursus egestas. Pellentesque dignissim libero id purus interdum placerat. \"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...\" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum, urna id tincidunt fermentum, sem ex accumsan libero, non fringilla risus nibh a enim. Curabitur sagittis erat id magna congue, non ultricies risus rutrum. Nulla in dolor et metus eleifend dictum non ac arcu. Fusce sodales magna quis lacus finibus vehicula. Mauris ut lacus volutpat, interdum odio eu, feugiat sem. Praesent sed ultricies libero, at semper turpis. Quisque imperdiet libero at libero congue suscipit. Phasellus sollicitudin finibus ex vel placerat. Maecenas a magna eget massa fermentum sodales quis nec risus. Ut posuere nibh quis est tristique semper. Sed lacinia convallis magna, sollicitudin viverra quam hendrerit eget. Nullam ac sollicitudin orci. Fusce fringilla scelerisque efficitur. Proin quis massa mi. Nullam efficitur eleifend urna, vel viverra nunc aliquet nec. Ut consequat convallis malesuada. Vestibulum vel faucibus ipsum, et molestie diam. Curabitur porttitor, ipsum in consequat ullamcorper, velit neque egestas massa, in gravida diam magna vel dolor. Vivamus maximus, velit et bibendum porta, felis nibh sagittis risus, vel mattis erat augue vitae ligula. Aliquam ullamcorper, urna quis imperdiet tincidunt, ex odio mollis est, eu maximus nibh ex vel eros. Sed ut felis pretium, sagittis libero ut, suscipit diam. Donec rutrum, quam id commodo porttitor, nibh lacus eleifend nibh, non ullamcorper elit velit eu magna. Nulla sagittis dui non augue ornare rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis commodo enim et eros vulputate consectetur. Donec venenatis, lectus vitae lobortis porttitor, sapien libero rutrum magna, eget tempor tortor neque eu quam. Nullam nisl mi, efficitur nec euismod vitae, tincidunt ac mi. Nunc at quam porta, tincidunt nibh sit amet, elementum lectus. Maecenas a eros vitae mauris sodales hendrerit. Maecenas suscipit nulla sed ex pellentesque sagittis. Nullam suscipit quis tellus vel semper. Duis dictum feugiat ipsum nec hendrerit. Integer auctor at nulla ac tristique. Integer eu lectus luctus, fringilla tellus vel, dapibus risus. Nunc purus nisi, scelerisque non erat eget, efficitur iaculis tortor. Mauris scelerisque massa tincidunt velit consequat aliquam. Proin ullamcorper, arcu eget facilisis pellentesque, turpis ligula consectetur turpis, sit amet cursus sapien leo sit amet ante. Cras elementum nisl at nulla cursus semper. Etiam consectetur magna at turpis accumsan placerat. Aenean euismod tristique pretium. Nulla ipsum ante, pharetra id neque sit amet, feugiat aliquet ex. Duis malesuada in risus non viverra. Integer imperdiet, est quis ornare convallis, arcu justo luctus felis, vitae consequat massa nisl vitae sapien. Ut at velit dignissim, placerat diam ac, interdum elit. Sed lobortis fringilla posuere. Morbi bibendum sed quam et mollis. Duis at tortor tellus. Phasellus venenatis at mauris vitae hendrerit. Aenean ac magna porttitor, rhoncus sem nec, luctus orci. Donec placerat fringilla aliquam. Praesent turpis turpis, vehicula nec nisl in, euismod accumsan nulla. Nulla facilisi. Praesent pharetra magna at lobortis fringilla. Duis euismod nisl vel diam fringilla, sit amet condimentum eros malesuada. Integer at lectus eu dui faucibus ultricies. Praesent et turpis lacinia, auctor magna sed, suscipit enim. Nam eros magna, viverra finibus justo nec, dictum pharetra velit. Sed eget augue lacinia, tincidunt tellus non, malesuada eros. Morbi suscipit metus in lectus sodales pulvinar. Donec aliquet mauris sed dui dictum, non ultrices enim maximus. Pellentesque elementum semper turpis in lacinia. Ut rhoncus erat ante, et fermentum felis volutpat ut. Ut at est eget metus cursus egestas. Pellentesque dignissim libero id purus interdum placerat. There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...\" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum, urna id tincidunt fermentum, sem ex accumsan libero, non fringilla risus nibh a enim. Curabitur sagittis erat id magna congue, non ultricies risus rutrum. Nulla in dolor et metus eleifend dictum non ac arcu. Fusce sodales magna quis lacus finibus vehicula. Mauris ut lacus volutpat, interdum odio eu, feugiat sem. Praesent sed ultricies libero, at semper turpis. Quisque imperdiet libero at libero congue suscipit. Phasellus sollicitudin finibus ex vel placerat. Maecenas a magna eget massa fermentum sodales quis nec risus. Ut posuere nibh quis est tristique semper. Sed lacinia convallis magna, sollicitudin viverra quam hendrerit eget. Nullam ac sollicitudin orci. Fusce fringilla scelerisque efficitur. Proin quis massa mi. Nullam efficitur eleifend urna, vel viverra nunc aliquet nec. Ut consequat convallis malesuada. Vestibulum vel faucibus ipsum, et molestie diam. Curabitur porttitor, ipsum in consequat ullamcorper, velit neque egestas massa, in gravida diam magna vel dolor. Vivamus maximus, velit et bibendum porta, felis nibh sagittis risus, vel mattis erat augue vitae ligula. Aliquam ullamcorper, urna quis imperdiet tincidunt, ex odio mollis est, eu maximus nibh ex vel eros. Sed ut felis pretium, sagittis libero ut, suscipit diam. Donec rutrum, quam id commodo porttitor, nibh lacus eleifend nibh, non ullamcorper elit velit eu magna. Nulla sagittis dui non augue ornare rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis commodo enim et eros vulputate consectetur. Donec venenatis, lectus vitae lobortis porttitor, sapien libero rutrum magna, eget tempor tortor neque eu quam. Nullam nisl mi, efficitur nec euismod vitae, tincidunt ac mi. Nunc at quam porta, tincidunt nibh sit amet, elementum lectus. Maecenas a eros vitae mauris sodales hendrerit. Maecenas suscipit nulla sed ex pellentesque sagittis. Nullam suscipit quis tellus vel semper. Duis dictum feugiat ipsum nec hendrerit. Integer auctor at nulla ac tristique. Integer eu lectus luctus, fringilla tellus vel, dapibus risus. Nunc purus nisi, scelerisque non erat eget, efficitur iaculis tortor. Mauris scelerisque massa tincidunt velit consequat aliquam. Proin ullamcorper, arcu eget facilisis pellentesque, turpis ligula consectetur turpis, sit amet cursus sapien leo sit amet ante. Cras elementum nisl at nulla cursus semper. Etiam consectetur magna at turpis accumsan placerat. Aenean euismod tristique pretium. Nulla ipsum ante, pharetra id neque sit amet, feugiat aliquet ex. Duis malesuada in risus non viverra. Integer imperdiet, est quis ornare convallis, arcu justo luctus felis, vitae consequat massa nisl vitae sapien. Ut at velit dignissim, placerat diam ac, interdum elit. Sed lobortis fringilla posuere. Morbi bibendum sed quam et mollis. Duis at tortor tellus. Phasellus venenatis at mauris vitae hendrerit. Aenean ac magna porttitor, rhoncus sem nec, luctus orci. Donec placerat fringilla aliquam. Praesent turpis turpis, vehicula nec nisl in, euismod accumsan nulla. Nulla facilisi. Praesent pharetra magna at lobortis fringilla. Duis euismod nisl vel diam fringilla, sit amet condimentum eros malesuada. Integer at lectus eu dui faucibus ultricies. Praesent et turpis lacinia, auctor magna sed, suscipit enim. Nam eros magna, viverra finibus justo nec, dictum pharetra velit. Sed eget augue lacinia, tincidunt tellus non, malesuada eros. Morbi suscipit metus in lectus sodales pulvinar. Donec aliquet mauris sed dui dictum, non ultrices enim maximus. Pellentesque elementum semper turpis in lacinia. Ut rhoncus erat ante, et fermentum felis volutpat ut. Ut at est eget metus cursus egestas. Pellentesque dignissim libero id purus interdum placerat. \"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...\" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum, urna id tincidunt fermentum, sem ex accumsan libero, non fringilla risus nibh a enim. Curabitur sagittis erat id magna congue, non ultricies risus rutrum. Nulla in dolor et metus eleifend dictum non ac arcu. Fusce sodales magna quis lacus finibus vehicula. Mauris ut lacus volutpat, interdum odio eu, feugiat sem. Praesent sed ultricies libero, at semper turpis. Quisque imperdiet libero at libero congue suscipit. Phasellus sollicitudin finibus ex vel placerat. Maecenas a magna eget massa fermentum sodales quis nec risus. Ut posuere nibh quis est tristique semper. Sed lacinia convallis magna, sollicitudin viverra quam hendrerit eget. Nullam ac sollicitudin orci. Fusce fringilla scelerisque efficitur. Proin quis massa mi. Nullam efficitur eleifend urna, vel viverra nunc aliquet nec. Ut consequat convallis malesuada. Vestibulum vel faucibus ipsum, et molestie diam. Curabitur porttitor, ipsum in consequat ullamcorper, velit neque egestas massa, in gravida diam magna vel dolor. Vivamus maximus, velit et bibendum porta, felis nibh sagittis risus, vel mattis erat augue vitae ligula. Aliquam ullamcorper, urna quis imperdiet tincidunt, ex odio mollis est, eu maximus nibh ex vel eros. Sed ut felis pretium, sagittis libero ut, suscipit diam. Donec rutrum, quam id commodo porttitor, nibh lacus eleifend nibh, non ullamcorper elit velit eu magna. Nulla sagittis dui non augue ornare rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis commodo enim et eros vulputate consectetur. Donec venenatis, lectus vitae lobortis porttitor, sapien libero rutrum magna, eget tempor tortor neque eu quam. Nullam nisl mi, efficitur nec euismod vitae, tincidunt ac mi. Nunc at quam porta, tincidunt nibh sit amet, elementum lectus. Maecenas a eros vitae mauris sodales hendrerit. Maecenas suscipit nulla sed ex pellentesque sagittis. Nullam suscipit quis tellus vel semper. Duis dictum feugiat ipsum nec hendrerit. Integer auctor at nulla ac tristique. Integer eu lectus luctus, fringilla tellus vel, dapibus risus. Nunc purus nisi, scelerisque non erat eget, efficitur iaculis tortor. Mauris scelerisque massa tincidunt velit consequat aliquam. Proin ullamcorper, arcu eget facilisis pellentesque, turpis ligula consectetur turpis, sit amet cursus sapien leo sit amet ante. Cras elementum nisl at nulla cursus semper. Etiam consectetur magna at turpis accumsan placerat. Aenean euismod tristique pretium. Nulla ipsum ante, pharetra id neque sit amet, feugiat aliquet ex. Duis malesuada in risus non viverra. Integer imperdiet, est quis ornare convallis, arcu justo luctus felis, vitae consequat massa nisl vitae sapien. Ut at velit dignissim, placerat diam ac, interdum elit. Sed lobortis fringilla posuere. Morbi bibendum sed quam et mollis. Duis at tortor tellus. Phasellus venenatis at mauris vitae hendrerit. Aenean ac magna porttitor, rhoncus sem nec, luctus orci. Donec placerat fringilla aliquam. Praesent turpis turpis, vehicula nec nisl in, euismod accumsan nulla. Nulla facilisi. Praesent pharetra magna at lobortis fringilla. Duis euismod nisl vel diam fringilla, sit amet condimentum eros malesuada. Integer at lectus eu dui faucibus ultricies. Praesent et turpis lacinia, auctor magna sed, suscipit enim. Nam eros magna, viverra finibus justo nec, dictum pharetra velit. Sed eget augue lacinia, tincidunt tellus non, malesuada eros. Morbi suscipit metus in lectus sodales pulvinar. Donec aliquet mauris sed dui dictum, non ultrices enim maximus. Pellentesque elementum semper turpis in lacinia. Ut rhoncus erat ante, et fermentum felis volutpat ut. Ut at est eget metus cursus egestas. Pellentesque dignissim libero id purus interdum placerat.")), __jsx("div", {
        className: "section",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 316,
          columnNumber: 15
        }
      }, __jsx("div", {
        className: "slide",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 317,
          columnNumber: 17
        }
      }, __jsx("h3", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 318,
          columnNumber: 19
        }
      }, "Slide 2.1")), __jsx("div", {
        className: "slide",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 320,
          columnNumber: 17
        }
      }, __jsx("h3", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 321,
          columnNumber: 19
        }
      }, "Slide 2.2")), __jsx("div", {
        className: "slide",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 323,
          columnNumber: 17
        }
      }, __jsx("h3", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 324,
          columnNumber: 19
        }
      }, "Slide 2.3"))), __jsx("div", {
        className: "section",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 327,
          columnNumber: 15
        }
      }, __jsx("h3", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 328,
          columnNumber: 17
        }
      }, "Section 3"), __jsx("button", {
        onClick: () => fullpageApi.moveTo(1, 0),
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 329,
          columnNumber: 17
        }
      }, "Move top")));
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "header" // style={{ positon: "sticky", left: 0, top: "0", zIndex: 9999 }}
    ,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337,
      columnNumber: 7
    }
  }, "Some header"));
};

/***/ })

})
//# sourceMappingURL=about.js.2bcfc228a7144480839d.hot-update.js.map