(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"/0+H":function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n("q1tI")),i=n("lwAK");function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,i=e.hasQuery;return n||o&&(void 0!==i&&i)}t.isInAmpMode=a,t.useAmp=function(){return a(o.default.useContext(i.AmpStateContext))}},0:function(e,t,n){n("GcxT"),e.exports=n("nOHt")},"1iz9":function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("ODXe"),o=n("vgmO"),i=n.n(o),a=n("q1tI"),s=n.n(a),u=function(){var e=function(){return{width:i.a.innerWidth,height:i.a.innerHeight}},t=s.a.useState(e),n=Object(r.a)(t,2),o=n[0],a=n[1],u=s.a.useState({isMobile:!1,isDesktop:!1,isTablet:!1}),c=Object(r.a)(u,2),l=c[0],f=c[1];return s.a.useEffect((function(){function t(){a(e())}return i.a.addEventListener("resize",t),function(){return i.a.removeEventListener("resize",t)}}),[]),s.a.useEffect((function(){o.width<=768?f({isMobile:!0,isDesktop:!1,isTablet:!1}):o.width>=768&&o.width<=1100?f({isMobile:!1,isDesktop:!1,isTablet:!0}):f({isMobile:!1,isDesktop:!0,isTablet:!1})}),[o.width]),l}},"3niX":function(e,t,n){"use strict";t.__esModule=!0,t.flush=function(){var e=i.cssRules();return i.flush(),e},t.default=void 0;var r,o=n("q1tI");var i=new(((r=n("SevZ"))&&r.__esModule?r:{default:r}).default),a=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).prevProps={},n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.dynamic=function(e){return e.map((function(e){var t=e[0],n=e[1];return i.computeId(t,n)})).join(" ")};var o=r.prototype;return o.shouldComponentUpdate=function(e){return this.props.id!==e.id||String(this.props.dynamic)!==String(e.dynamic)},o.componentWillUnmount=function(){i.remove(this.props)},o.render=function(){return this.shouldComponentUpdate(this.prevProps)&&(this.prevProps.id&&i.remove(this.prevProps),i.add(this.props),this.prevProps=this.props),null},r}(o.Component);t.default=a},"8Bbg":function(e,t,n){e.exports=n("B5Ud")},"8Kt/":function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n("q1tI")),i=r(n("Xuae")),a=n("lwAK"),s=n("FYa8"),u=n("/0+H");function c(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function l(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}t.defaultHead=c;var f=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(l,[]).reverse().concat(c(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var i=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var a=o.key.slice(o.key.indexOf("$")+1);e.has(a)?i=!1:e.add(a)}switch(o.type){case"title":case"base":t.has(o.type)?i=!1:t.add(o.type);break;case"meta":for(var s=0,u=f.length;s<u;s++){var c=f[s];if(o.props.hasOwnProperty(c))if("charSet"===c)n.has(c)?i=!1:n.add(c);else{var l=o.props[c],p=r[c]||new Set;p.has(l)?i=!1:(p.add(l),r[c]=p)}}}return i}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}var d=i.default();function h(e){var t=e.children;return o.default.createElement(a.AmpStateContext.Consumer,null,(function(e){return o.default.createElement(s.HeadManagerContext.Consumer,null,(function(n){return o.default.createElement(d,{reduceComponentsToState:p,handleStateChange:n,inAmpMode:u.isInAmpMode(e)},t)}))}))}h.rewind=d.rewind,t.default=h},"9kyW":function(e,t,n){"use strict";e.exports=function(e){for(var t=5381,n=e.length;n;)t=33*t^e.charCodeAt(--n);return t>>>0}},B5Ud:function(e,t,n){"use strict";var r=n("lwsE"),o=n("W8MJ"),i=n("7W2i"),a=n("a1gu"),s=n("Nsbk"),u=n("o0o1");function c(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var l=n("TqRt");t.__esModule=!0,t.Container=function(e){0;return e.children},t.createUrl=m,t.default=void 0;var f=l(n("q1tI")),p=n("g/15");function d(e){var t,n,r;return u.async((function(o){for(;;)switch(o.prev=o.next){case 0:return t=e.Component,n=e.ctx,o.next=3,u.awrap((0,p.loadGetInitialProps)(t,n));case 3:return r=o.sent,o.abrupt("return",{pageProps:r});case 5:case"end":return o.stop()}}),null,null,null,Promise)}t.AppInitialProps=p.AppInitialProps;var h=function(e){i(u,e);var t,n=(t=u,function(){var e,n=s(t);if(c()){var r=s(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return a(this,e)});function u(){return r(this,u),n.apply(this,arguments)}return o(u,[{key:"componentDidCatch",value:function(e,t){throw e}},{key:"render",value:function(){var e=this.props,t=e.router,n=e.Component,r=e.pageProps,o=e.__N_SSG,i=e.__N_SSP;return f.default.createElement(n,Object.assign({},r,o||i?{}:{url:m(t)}))}}]),u}(f.default.Component);function m(e){var t=e.pathname,n=e.asPath,r=e.query;return{get query(){return r},get pathname(){return t},get asPath(){return n},back:function(){e.back()},push:function(t,n){return e.push(t,n)},pushTo:function(t,n){var r=n?t:"",o=n||t;return e.push(r,o)},replace:function(t,n){return e.replace(t,n)},replaceTo:function(t,n){var r=n?t:"",o=n||t;return e.replace(r,o)}}}t.default=h,h.origGetInitialProps=d,h.getInitialProps=d},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},EbDI:function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n("q1tI"));t.HeadManagerContext=o.createContext(null)},GcxT:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("IlR1")}])},Ijbi:function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},IlR1:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e){return(a="function"===typeof Symbol&&"symbol"===i(Symbol.iterator)?function(e){return i(e)}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":i(e)})(e)}function s(e,t){return!t||"object"!==a(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.r(t),n.d(t,"default",(function(){return he}));var c=n("q1tI"),l=n.n(c),f=n("8Bbg"),p=n.n(f),d=n("8Kt/"),h=n.n(d),m=n("MX0m"),y=n.n(m),v=n("m7j5"),g=n("1iz9"),b=n("vOnD"),_=b.b.div.attrs((function(e){var t=e.isSticky;return{isSticky:void 0!==t&&t}})).withConfig({displayName:"headerstyles__HeaderContainer",componentId:"ffnmp5-0"})(["background-color:",";width:calc(100% - 40px);padding:15px 20px;display:flex;align-items:center;justify-content:space-between;color:#000;animation:none;",""],(function(e){var t=e.theme;return e.isSticky?t.color.primary:"inherit"}),(function(e){return e.isSticky&&"\n      position: fixed;\n      top: 0;\n      left: 0;\n      width: calc(100% - 40px);\n      z-index: 999;\n  "})),w=b.b.div.withConfig({displayName:"headerstyles__MenuContainer",componentId:"ffnmp5-1"})(["& > .menu-btn{background-color:inherit;border:0;outline:none;}"]),S={isVisible:!1},x=l.a.createContext(S),k=function(){var e=l.a.useContext(x);if(!e)throw new Error("useMobileMenuState should be used within on MobileMenuContext");return e},O=n("rePB");function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var j,R=function(e,t){switch(t.type){case"mobile-menu/toggle":return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach((function(t){Object(O.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{isVisible:!e.isVisible});default:return e}},I=n("YFqc"),N=n.n(I),T=b.b.a.attrs((function(e){var t=e.themeType;return{themeType:void 0===t?"primary":t}})).withConfig({displayName:"logostyles__LogoLink",componentId:"ui1tly-0"})(["display:flex;align-items:center;text-decoration:none;& > .logo-img{width:30px;height:30px;}& > .logo-separator{width:2px;height:32px;background-color:",";margin:0 10px;}& > .logo-text{font-size:21px;margin:0;color:",";font-weight:700;}"],(function(e){var t=e.theme;return"primary"===e.themeType?t.color.white:t.color.black}),(function(e){var t=e.theme;return"primary"===e.themeType?t.color.white:t.color.black}));!function(e){e.HOME="/",e.ABOUT="/about",e.HOW_TO_CONTRIBUTE="/how-to-contribute"}(j||(j={}));var E,P=[{link:j.HOME,label:"Home"},{link:j.ABOUT,label:"About"},{link:j.HOW_TO_CONTRIBUTE,label:"How to contribute?"}],M=l.a.createElement,A=function(e){var t=e.theme,n=void 0===t?"primary":t;return M(N.a,{href:j.HOME},M(T,{className:"logo-link",href:j.HOME,themeType:n},M("img",{className:"logo-img",src:"".concat("/value_driven_templates","/").concat("primary"===n?"logo-small":"logo-small-black",".svg"),alt:"Logo"}),M("span",{className:"logo-separator"}),M("h1",{className:"logo-text"},"value reader.")))},F=b.b.button.attrs((function(e){var t=e.open,n=void 0!==t&&t,r=e.themeType;return{open:n,themeType:void 0===r?"primary":r}})).withConfig({displayName:"hamburgerstyles__StyledBurger",componentId:"sc-1suem20-0"})(["background-color:inherit;border:none;outline:none;padding:0;width:2rem;height:2rem;display:flex;flex-direction:column;justify-content:space-around;transform-origin:1px;cursor:pointer;& > div{width:32px;height:4px;background-color:",";border-radius:10px;transition:transform 0.3s ease,opacity 0.3s ease;position:relative;transform-origin:1px;&:first-child{transform:",";}&:nth-child(2){opacity:",";transform:",";}&:nth-child(3){transform:",";}}"],(function(e){var t=e.theme;return"primary"===e.themeType?t.color.white:t.color.black}),(function(e){return e.open?"rotate(45deg)":"rotate(0)"}),(function(e){return e.open?"0":"1"}),(function(e){return e.open?"translateX(20px)":"translateX(0)"}),(function(e){return e.open?"rotate(-45deg)":"rotate(0)"})),z=l.a.createElement,D=function(e){var t=e.isOpen,n=e.onClick,r=e.theme;return z(F,{open:t,onClick:n,themeType:void 0===r?"primary":r},z("div",null),z("div",null),z("div",null))},B=l.a.createElement,U=function(e){var t=e.isSticky,n=void 0!==t&&t,r=k(),o=r.state.isVisible,i=r.dispatch;return B(_,{isSticky:n},B(A,{theme:n?"primary":"secondary"}),B(w,null,B(D,{isOpen:o,onClick:function(){return i({type:"mobile-menu/toggle"})},theme:n?"primary":"secondary"})))},q=b.b.nav.withConfig({displayName:"menustyles__StyledNav",componentId:"sc-1amfo06-0"})(["width:100%;height:calc(100vh - 63px);border-top:1px solid #ededed;background-color:",";position:sticky;position:-webkit-sticky;top:62px;z-index:999;overflow:hidden;"],(function(e){return e.theme.color.primary})),L=b.b.ul.withConfig({displayName:"menustyles__StyledList",componentId:"sc-1amfo06-1"})(["list-style:none;padding:10px 20px;& > li:last-child{margin-bottom:0;}"]),W=b.b.li.withConfig({displayName:"menustyles__StyledListItem",componentId:"sc-1amfo06-2"})(["border-bottom:1px solid #ffffff;margin-bottom:30px;font-size:19px;padding-bottom:10px;& > a{color:",";text-decoration:none;}"],(function(e){return e.theme.color.white})),H=b.b.li.withConfig({displayName:"menustyles__SpecialListItem",componentId:"sc-1amfo06-3"})(["display:flex;justify-content:center;align-items:center;& > a{padding:10px 20px;background-color:",";color:",";text-decoration:none;border-radius:4px;transition:background-color 0.2s ease;&:hover{background-color:",";}}"],(function(e){return e.theme.color.red}),(function(e){return e.theme.color.white}),(function(e){return e.theme.color["dark-red"]})),X=l.a.createElement,Y=function(){var e=k(),t=e.dispatch,n=e.state.isVisible,r=function(){t({type:"mobile-menu/toggle"})};return X(l.a.Fragment,null,n&&X(q,null,X(L,null,P.map((function(e){return X(W,{onClick:r,key:e.link},X(N.a,{href:e.link},X("a",{href:e.link},e.label)))})),X(H,{onClick:r},X(N.a,{href:"https://exlabs.com"},X("a",{rel:"noopener noreferrer",target:"_blank",href:"https://exlabs.com"},"Get in touch"))))))},V=n("vXWQ"),J=n("QsUe"),K=b.b.footer.attrs((function(e){var t=e.isMobile;return{isMobile:void 0!==t&&t}})).withConfig({displayName:"footerstyles__StyledFooter",componentId:"th6fdd-0"})(["background:linear-gradient(90deg,#044aaf,#022558);color:",";padding:",";& > .about-container{font-size:",";}& > .copyright{font-size:",";margin-top:5px;}"],(function(e){return e.theme.color.white}),(function(e){return e.isMobile?"15px 20px":"20px 60px"}),(function(e){return e.isMobile?"15px":"19px"}),(function(e){return e.isMobile?"13px":"15px"})),G=Object(b.b)(J.a).withConfig({displayName:"footerstyles__StyledContainer",componentId:"th6fdd-1"})(["display:flex;justify-content:space-between;align-items:center;@media (max-width:","){flex-direction:column;& > .copyright{margin-top:10px;}}"],(function(e){return e.theme.deviceBreakpoint.desktop})),Q=b.b.div.withConfig({displayName:"footerstyles__AboutContainer",componentId:"th6fdd-2"})(["display:flex;align-items:center;& > .title{font-weight:700;margin-right:5px;}& > .link{margin-left:5px;color:",";text-decoration:none;display:flex;align-items:center;& > .logo-img{margin-right:5px;}}"],(function(e){return e.theme.color.white})),Z=l.a.createElement,$=function(){var e=Object(g.a)().isMobile;return Z(K,{isMobile:e},Z(G,null,Z(Q,{className:"about-container"},Z("span",{className:"title"},"Value Driven Engineering")," by",Z("a",{href:"https://exlabs.com",className:"link",rel:"noopener noreferrer",target:"_blank"},Z("img",{className:"logo-img",src:"".concat("/value_driven_templates","/logo-small.svg"),alt:"Logo"}),"exlabs")),Z("div",{className:"copyright"},"Copyright \xa9 2020 EXLABS Ltd.")))},ee=b.b.header.attrs((function(e){var t=e.themeType,n=void 0===t?"primary":t,r=e.isSticky;return{themeType:n,isSticky:void 0!==r&&r}})).withConfig({displayName:"desktop-navigationstyles__NavigationContainer",componentId:"sc-1cr38vd-0"})(["background-color:",";padding:10px ",";animation:moveUp 0.3s ease-in-out;"," @keyframes moveUp{from{transform:translateY(-5rem);}to{transform:translateY(0rem);}}@keyframes moveDown{from{transform:translateY(-5rem);}to{transform:translateY(0rem);}}"],(function(e){var t=e.theme;return"primary"===e.themeType?t.color.primary:"inherit"}),(function(e){return e.theme.padding.small}),(function(e){return e.isSticky&&"\n      position: fixed;\n      top: 0;\n      left: 0;\n      width: calc(100% - 40px);\n      z-index: 999;\n      animation: moveDown 0.5s ease-in-out;\n  "})),te=Object(b.b)(J.a).withConfig({displayName:"desktop-navigationstyles__StyledContainer",componentId:"sc-1cr38vd-1"})(["display:flex;justify-content:space-between;"]),ne=b.b.nav.withConfig({displayName:"desktop-navigationstyles__StyledNav",componentId:"sc-1cr38vd-2"})([""]),re=b.b.ul.attrs((function(e){var t=e.themeType;return{themeType:void 0===t?"primary":t}})).withConfig({displayName:"desktop-navigationstyles__StyledList",componentId:"sc-1cr38vd-3"})(["list-style:none;display:flex;& .nav-item{margin-right:20px;&__link{color:",";text-decoration:none;font-size:",";font-weight:700;}}& > .nav-item:last-child{margin-right:0;}"],(function(e){var t=e.theme;return"primary"===e.themeType?t.color.white:t.color.black}),(function(e){return e.theme.fontSize.medium})),oe=n("ng6f"),ie=l.a.createElement,ae=function(e){var t=e.theme,n=void 0===t?"primary":t,r=e.isSticky;return ie(ee,{className:"navigation",themeType:n,isSticky:void 0!==r&&r},ie(te,null,ie(A,{theme:n}),ie(ne,null,ie(re,{themeType:n},ie("li",{className:"nav-item"},ie(N.a,{href:j.ABOUT},ie("a",{className:"nav-item__link",href:j.ABOUT},"About"))),ie("li",{className:"nav-item"},ie(N.a,{href:j.HOW_TO_CONTRIBUTE},ie("a",{className:"nav-item__link",href:j.HOW_TO_CONTRIBUTE},"How to contribute?"))),ie("li",{className:"nav-item nav-item--primary"},ie(oe.a,{href:"https://exlabs.com",label:"Get in touch",target:"blank",color:"red"}))))))},se=n("ODXe");!function(e){e.UP="up",e.DOWN="down"}(E||(E={}));var ue=l.a.createElement,ce=function(e){var t=e.children,n=Object(g.a)().isMobile,r=k().state.isVisible,o=l.a.useRef(null),i=function(e){var t=e.initialDirection,n=void 0===t?E.DOWN:t,r=e.thresholdPixels,o=e.stickyRef,i=l.a.useState(n),a=Object(se.a)(i,2),s=a[0],u=a[1],c=l.a.useState(!1),f=Object(se.a)(c,2),p=f[0],d=f[1];return l.a.useEffect((function(){var e=null!==r&&void 0!==r?r:0,t=0,n=!1,i=function(){Math.abs(window.pageYOffset-t)<e?n=!1:(u(window.pageYOffset>t?E.DOWN:E.UP),d(!!(o.current&&window.pageYOffset>o.current.getBoundingClientRect().top)),t=window.pageYOffset>0?window.pageYOffset:0,n=!1)},a=function(){n||(window.requestAnimationFrame(i),n=!0)};return window.addEventListener("scroll",a),function(){window.removeEventListener("scroll",a)}}),[n,r,o]),s===E.UP&&p}({stickyRef:o});return ue(v.b,null,ue(y.a,{id:"2400830014"},["html,body{margin:0;padding:0;font-family:'Montserrat','Open Sans',sans-serif;background-color:#f9f9f9;-webkit-overflow-scrolling:touch;}"]),ue(b.a,{theme:V.a},ue(l.a.Fragment,null,ue(v.a,null,n?ue(l.a.Fragment,null,i&&ue("div",{style:{width:"100%",height:"62px"},className:"jsx-2400830014"}),ue(U,{isSticky:!!r||i}),ue("div",{ref:o,className:"jsx-2400830014"},r&&ue(Y,null),ue("div",{className:"jsx-2400830014"},t))):ue("div",{className:"jsx-2400830014"},i&&ue("div",{style:{width:"100%",height:"72px"},className:"jsx-2400830014"}),ue(ae,{theme:i?"primary":"secondary",isSticky:i}),ue("div",{ref:o,className:"jsx-2400830014"},t))),ue($,null))))},le=l.a.createElement,fe=function(e){var t=e.children,n=l.a.useReducer(R,S),r=Object(se.a)(n,2),o=r[0],i=r[1];return le(x.Provider,{value:{dispatch:i,state:o}},t)},pe=l.a.createElement;function de(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var he=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}(f,e);var t,n,i,a,c=(t=f,function(){var e,n=u(t);if(de()){var r=u(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return s(this,e)});function f(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,f),c.apply(this,arguments)}return n=f,(i=[{key:"componentDidMount",value:function(){var e=document.querySelector("#jss-server-side");e&&e.parentNode.removeChild(e)}},{key:"render",value:function(){var e=this.props,t=e.Component,n=e.pageProps;return pe(l.a.Fragment,null,pe(h.a,null,pe("title",null,"Exlabs | Value Driven Engineering")),pe(fe,null,pe(ce,null,pe(t,n))))}}])&&r(n.prototype,i),a&&r(n,a),f}(p.a)},MX0m:function(e,t,n){e.exports=n("3niX")},ODXe:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(u){o=!0,i=u}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}return n}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.d(t,"a",(function(){return r}))},QsUe:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=n("vOnD").b.div.withConfig({displayName:"containerstyles__Container",componentId:"sc-16wrb8n-0"})(["max-width:1440px;margin:0 auto;"])},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),i=n("Bnag");e.exports=function(e){return r(e)||o(e)||i()}},SevZ:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var r=i(n("9kyW")),o=i(n("bVZc"));function i(e){return e&&e.__esModule?e:{default:e}}var a=function(){function e(e){var t=void 0===e?{}:e,n=t.styleSheet,r=void 0===n?null:n,i=t.optimizeForSpeed,a=void 0!==i&&i,s=t.isBrowser,u=void 0===s?"undefined"!==typeof window:s;this._sheet=r||new o.default({name:"styled-jsx",optimizeForSpeed:a}),this._sheet.inject(),r&&"boolean"===typeof a&&(this._sheet.setOptimizeForSpeed(a),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=u,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce((function(e,t){return e[t]=0,e}),{}));var n=this.getIdAndRules(e),r=n.styleId,o=n.rules;if(r in this._instancesCounts)this._instancesCounts[r]+=1;else{var i=o.map((function(e){return t._sheet.insertRule(e)})).filter((function(e){return-1!==e}));this._indices[r]=i,this._instancesCounts[r]=1}},t.remove=function(e){var t=this,n=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}(n in this._instancesCounts,"styleId: `"+n+"` not found"),this._instancesCounts[n]-=1,this._instancesCounts[n]<1){var r=this._fromServer&&this._fromServer[n];r?(r.parentNode.removeChild(r),delete this._fromServer[n]):(this._indices[n].forEach((function(e){return t._sheet.deleteRule(e)})),delete this._indices[n]),delete this._instancesCounts[n]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map((function(t){return[t,e._fromServer[t]]})):[],n=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map((function(t){return[t,e._indices[t].map((function(e){return n[e].cssText})).join(e._optimizeForSpeed?"":"\n")]})).filter((function(e){return Boolean(e[1])})))},t.createComputeId=function(){var e={};return function(t,n){if(!n)return"jsx-"+t;var o=String(n),i=t+o;return e[i]||(e[i]="jsx-"+(0,r.default)(t+"-"+o)),e[i]}},t.createComputeSelector=function(e){void 0===e&&(e=/__jsx-style-dynamic-selector/g);var t={};return function(n,r){this._isBrowser||(r=r.replace(/\/style/gi,"\\/style"));var o=n+r;return t[o]||(t[o]=r.replace(e,n)),t[o]}},t.getIdAndRules=function(e){var t=this,n=e.children,r=e.dynamic,o=e.id;if(r){var i=this.computeId(o,r);return{styleId:i,rules:Array.isArray(n)?n.map((function(e){return t.computeSelector(i,e)})):[this.computeSelector(i,n)]}}return{styleId:this.computeId(o),rules:Array.isArray(n)?n:[n]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce((function(e,t){return e[t.id.slice(2)]=t,e}),{})},e}();t.default=a},Xuae:function(e,t,n){"use strict";var r=n("lwsE"),o=n("PJYZ"),i=n("W8MJ"),a=n("7W2i"),s=n("a1gu"),u=n("Nsbk"),c=n("RIqP");function l(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}Object.defineProperty(t,"__esModule",{value:!0});var f=n("q1tI"),p=!1;t.default=function(){var e,t=new Set;function n(n){e=n.props.reduceComponentsToState(c(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return function(c){a(h,c);var f,d=(f=h,function(){var e,t=u(f);if(l()){var n=u(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return s(this,e)});function h(e){var i;return r(this,h),i=d.call(this,e),p&&(t.add(o(i)),n(o(i))),i}return i(h,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),i(h,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),h}(f.Component)}},YFqc:function(e,t,n){e.exports=n("cTJO")},bVZc:function(e,t,n){"use strict";(function(e){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}t.__esModule=!0,t.default=void 0;var r="undefined"!==typeof e&&e.env&&!0,o=function(e){return"[object String]"===Object.prototype.toString.call(e)},i=function(){function e(e){var t=void 0===e?{}:e,n=t.name,i=void 0===n?"stylesheet":n,s=t.optimizeForSpeed,u=void 0===s?r:s,c=t.isBrowser,l=void 0===c?"undefined"!==typeof window:c;a(o(i),"`name` must be a string"),this._name=i,this._deletedRulePlaceholder="#"+i+"-deleted-rule____{}",a("boolean"===typeof u,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=u,this._isBrowser=l,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var f=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=f?f.getAttribute("content"):null}var t,i,s,u=e.prototype;return u.setOptimizeForSpeed=function(e){a("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),a(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},u.isOptimizeForSpeed=function(){return this._optimizeForSpeed},u.inject=function(){var e=this;if(a(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(r||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,n){return"number"===typeof n?e._serverSheet.cssRules[n]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),n},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},u.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},u.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},u.insertRule=function(e,t){if(a(o(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!==typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var n=this.getSheet();"number"!==typeof t&&(t=n.cssRules.length);try{n.insertRule(e,t)}catch(s){return r||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var i=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,i))}return this._rulesCount++},u.replaceRule=function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var n=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!n.cssRules[e])return e;n.deleteRule(e);try{n.insertRule(t,e)}catch(i){r||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),n.insertRule(this._deletedRulePlaceholder,e)}}else{var o=this._tags[e];a(o,"old rule at index `"+e+"` not found"),o.textContent=t}return e},u.deleteRule=function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];a(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)},u.flush=function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach((function(e){return e&&e.parentNode.removeChild(e)})),this._tags=[]):this._serverSheet.cssRules=[]},u.cssRules=function(){var e=this;return this._isBrowser?this._tags.reduce((function(t,n){return n?t=t.concat(Array.prototype.map.call(e.getSheetForTag(n).cssRules,(function(t){return t.cssText===e._deletedRulePlaceholder?null:t}))):t.push(null),t}),[]):this._serverSheet.cssRules},u.makeStyleTag=function(e,t,n){t&&a(o(t),"makeStyleTag acceps only strings as second parameter");var r=document.createElement("style");this._nonce&&r.setAttribute("nonce",this._nonce),r.type="text/css",r.setAttribute("data-"+e,""),t&&r.appendChild(document.createTextNode(t));var i=document.head||document.getElementsByTagName("head")[0];return n?i.insertBefore(r,n):i.appendChild(r),r},t=e,(i=[{key:"length",get:function(){return this._rulesCount}}])&&n(t.prototype,i),s&&n(t,s),e}();function a(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}t.default=i}).call(this,n("8oxB"))},cTJO:function(e,t,n){"use strict";var r=n("lwsE"),o=n("W8MJ"),i=n("7W2i"),a=n("a1gu"),s=n("Nsbk");function u(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var c=n("TqRt"),l=n("284h");t.__esModule=!0,t.default=void 0;var f,p=l(n("q1tI")),d=n("QmWs"),h=n("g/15"),m=c(n("nOHt"));function y(e){return e&&"object"===typeof e?(0,h.formatWithValidation)(e):e}var v=new Map,g=window.IntersectionObserver,b={};function _(){return f||(g?f=new g((function(e){e.forEach((function(e){if(v.has(e.target)){var t=v.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(e.target),v.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var w=function(e){i(c,e);var t,n=(t=c,function(){var e,n=s(t);if(u()){var r=s(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return a(this,e)});function c(e){var t;return r(this,c),(t=n.call(this,e)).p=void 0,t.cleanUpListeners=function(){},t.formatUrls=function(e){var t=null,n=null,r=null;return function(o,i){if(r&&o===t&&i===n)return r;var a=e(o,i);return t=o,n=i,r=a,a}}((function(e,t){return{href:y(e),as:t?y(t):t}})),t.linkClicked=function(e){var n=e.currentTarget,r=n.nodeName,o=n.target;if("A"!==r||!(o&&"_self"!==o||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var i=t.formatUrls(t.props.href,t.props.as),a=i.href,s=i.as;if(function(e){var t=(0,d.parse)(e,!1,!0),n=(0,d.parse)((0,h.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(a)){var u=window.location.pathname;a=(0,d.resolve)(u,a),s=s?(0,d.resolve)(u,s):a,e.preventDefault();var c=t.props.scroll;null==c&&(c=s.indexOf("#")<0),m.default[t.props.replace?"replace":"push"](a,s,{shallow:t.props.shallow}).then((function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())}))}}},t.p=!1!==e.prefetch,t}return o(c,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),n=t.href,r=t.as,o=(0,d.resolve)(e,n);return[o,r?(0,d.resolve)(e,r):o]}},{key:"handleRef",value:function(e){var t=this;this.p&&g&&e&&e.tagName&&(this.cleanUpListeners(),b[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,t){var n=_();return n?(n.observe(e),v.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}v.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths();m.default.prefetch(t[0],t[1],e).catch((function(e){0})),b[t.join("%")]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,o=n.as;"string"===typeof t&&(t=p.default.createElement("a",null,t));var i=p.Children.only(t),a={ref:function(t){e.handleRef(t),i&&"object"===typeof i&&i.ref&&("function"===typeof i.ref?i.ref(t):"object"===typeof i.ref&&(i.ref.current=t))},onMouseEnter:function(t){i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(a.href=o||r),p.default.cloneElement(i,a)}}]),c}(p.Component);t.default=w},lwAK:function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n("q1tI"));t.AmpStateContext=o.createContext({})},m7j5:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return a}));var r=n("vOnD"),o=r.b.div.withConfig({displayName:"layoutstyles__Layout",componentId:"j1hzp4-0"})(["width:100%;height:100%;min-height:100vh;display:flex;flex-direction:column;justify-content:space-between;"]),i=r.b.div.withConfig({displayName:"layoutstyles__BodyContainer",componentId:"j1hzp4-1"})([""]),a=r.b.div.attrs((function(e){var t=e.isMobile,n=void 0!==t&&t,r=e.isDesktop;return{isMobile:n,isDesktop:void 0!==r&&r}})).withConfig({displayName:"layoutstyles__LayoutBody",componentId:"j1hzp4-2"})(["padding:",";position:relative;& > .titled-content{position:",";bottom:80px;width:100%;overflow:scroll;height:100%;}"],(function(e){return e.isMobile?"20px 10px":"20px 40px"}),(function(e){return e.isDesktop?"relative":"initial"}))},ng6f:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n("q1tI"),o=n.n(r),i=n("YFqc"),a=n.n(i),s=n("vOnD"),u=n("vXWQ"),c={primary:u.a.color.primary,red:u.a.color.red},l={primary:u.a.color["dark-primary"],red:u.a.color["dark-red"]},f=s.b.a.attrs((function(e){var t=e.color;return{color:void 0===t?"primary":t}})).withConfig({displayName:"special-linkstyles__StyledLink",componentId:"rjluy4-0"})(["background-color:",";color:",";text-decoration:none;padding:10px 20px;font-size:",";font-weight:500;border-radius:",";transition:",";&:hover{background-color:",";}"],(function(e){return c[e.color]}),(function(e){return e.theme.color.white}),(function(e){return e.theme.fontSize.medium}),(function(e){return e.theme.defaultRadius}),(function(e){return e.theme.transitionValue("background-color")}),(function(e){return l[e.color]})),p=o.a.createElement,d=function(e){var t=e.color,n=void 0===t?"primary":t,r=e.target,i=void 0===r?"self":r,s=e.label,u=e.href;return p(a.a,{href:u},p(o.a.Fragment,null,"self"===i&&p(f,{className:"special-link",color:n,href:u},s),"blank"===i&&p(f,{className:"special-link",color:n,href:u,target:"_blank",rel:"noopener noreferrer"},s)))}},rePB:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},vXWQ:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={color:{primary:"#044aaf","dark-primary":"#03399e",red:"#ff3e5b",white:"#ffffff","dark-red":"#ee2d4a",black:"#3D3B3C"},fontFamily:{primary:"Montserrat",secondary:"Open Sans"},padding:{small:"20px",medium:"40px",big:"60px"},fontSize:{big:"31px",medium:"17px",small:"14px"},deviceBreakpoint:{mobile:"768px",tablet:"1100px",desktop:"1200px"},defaultRadius:"4px",transitionValue:function(e){return"".concat(e," 0.3s ease")}}},vgmO:function(e,t,n){(function(t){var n;n="undefined"!==typeof window?window:"undefined"!==typeof t?t:"undefined"!==typeof self?self:{},e.exports=n}).call(this,n("yLpj"))},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}e.exports=n}},[[0,0,1,2,3]]]);