(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"/EDR":function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i("QeBL")}])},QeBL:function(e,t,i){"use strict";function n(e){return function(e){if(Array.isArray(e)){for(var t=0,i=new Array(e.length);t<e.length;t++)i[t]=e[t];return i}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}i.r(t);var a=i("q1tI"),o=i.n(a),r=i("1iz9"),l=i("m7j5");function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}var s=i("vOnD"),p=s.b.article.withConfig({displayName:"article-thumbnailstyles__StyledArticleThumbnail",componentId:"sc-16swbc2-0"})(["display:flex;flex-direction:column;box-shadow:0px 3px 6px rgba(0,0,0,0.2);border-radius:4px;max-width:450px;"]),d=s.b.div.withConfig({displayName:"article-thumbnailstyles__ThumbnailContent",componentId:"sc-16swbc2-1"})(["padding:30px 10px 20px;& > .article-title{margin:0 0 10px;font-size:21px;text-transform:uppercase;}& > .article-date{font-size:14px;font-weight:300;}& > .article-description{font-size:17px;padding:0;margin:10px 0 20px;}"]),m=s.b.div.withConfig({displayName:"article-thumbnailstyles__ThumbnailImage",componentId:"sc-16swbc2-2"})(["background-size:cover;background-position:center;width:100%;min-height:200px;max-height:40%;border-top-left-radius:4px;border-top-right-radius:4px;position:relative;& > .category{position:absolute;left:50%;transform:translateX(-50%);bottom:-15px;background-color:rgba(4,74,175,0.9);color:",";padding:5px 20px;border-radius:4px;font-size:16px;}"],(function(e){return e.theme.color.white})),u=s.b.div.withConfig({displayName:"article-thumbnailstyles__ThumbnailFooter",componentId:"sc-16swbc2-3"})(["display:flex;justify-content:space-between;align-items:center;"]),h=s.b.button.withConfig({displayName:"article-thumbnailstyles__ThumbnailButton",componentId:"sc-16swbc2-4"})(["border:none;background-color:",";color:",";padding:7px 30px;font-size:14px;font-weight:500;border-radius:4px;box-shadow:0px 3px 6px rgba(0,0,0,0.2);outline:none;"],(function(e){return e.theme.color.red}),(function(e){return e.theme.color.white})),g=i("YFqc"),f=i.n(g),b=s.b.div.withConfig({displayName:"authorstyles__AuthorContainer",componentId:"sc-1f30oc4-0"})(["display:flex;align-items:center;& > .author__img{width:30px;height:30px;background-position:center;background-size:cover;border-radius:50%;background-color:",";}& > .author__name{margin-left:10px;font-weight:500;font-size:14px;}"],(function(e){return e.theme.color.primary})),x=o.a.createElement,y=function(e){var t=e.imageUrl;return x(b,null,x("div",{className:"author__img",style:{backgroundImage:'url("'.concat(t,'")')}}),x("div",{className:"author__name"},"John Doe"))},w=o.a.createElement,v=function(e){var t=e.title,i=e.description,n=e.category,a=e.publishDate,o=e.imageUrl,r=e.authorImgUrl;return w(p,{className:"article-thumbnail"},w(m,{style:{backgroundImage:'url("'.concat(o,'")')}},w("div",{className:"category"},n)),w(d,null,w("h3",{className:"article-title"},t),w("div",{className:"article-date"},a.toDateString()),w("p",{className:"article-description"},i),w(u,null,w(y,{imageUrl:r}),w(f.a,{href:"#"},w(h,null,"See details")))))},_=s.b.div.withConfig({displayName:"article-liststyles__MobileList",componentId:"sc-17o4md0-0"})(["display:flex;flex-direction:column;align-items:center;& > .article-thumbnail{max-width:90%;}& > .article-thumbnail{margin-bottom:20px;}& > .article-thumbnail:last-child{margin-bottom:0;}"]),N=s.b.div.withConfig({displayName:"article-liststyles__DesktopList",componentId:"sc-17o4md0-1"})(["display:flex;justify-content:space-between;flex-wrap:wrap;& > .article-thumbnail{min-width:49%;max-width:49%;margin-bottom:2%;}"]),k=o.a.createElement,I=function(e){var t=e.articles,i=k(o.a.Fragment,null,t.map((function(e,t){return k(v,c({key:"article-".concat(t)},e))}))),n=Object(r.a)().isMobile;return k(o.a.Fragment,null,k(n?_:N,null,i))},C=i("tZ2m"),z=o.a.createElement,D={title:"Architecture Decision Record",category:"Development",description:"Learn how to document important architectural decisions in your development team.",publishDate:new Date,imageUrl:"https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80",authorImgUrl:"https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"};t.default=function(){var e=Object(r.a)().isMobile;return z(o.a.Fragment,null,!e&&z(C.a,{imageUrl:"header-img.svg"}),z(l.c,{isMobile:e},z(I,{articles:n(new Array(7).fill(D))})))}},tZ2m:function(e,t,i){"use strict";i.d(t,"a",(function(){return x}));var n=i("q1tI"),a=i.n(n),o=i("YFqc"),r=i.n(o),l=i("vOnD"),c=l.b.header.withConfig({displayName:"headerstyles__StyledHeader",componentId:"ggkv62-0"})(["display:flex;flex-direction:column;position:relative;padding:20px 60px 40px;color:",";"],(function(e){return e.theme.color.white})),s=l.b.div.withConfig({displayName:"headerstyles__Background",componentId:"ggkv62-1"})(["background:linear-gradient(90deg,#044aaf,#022558);position:absolute;top:0;left:0;width:100%;z-index:0;"]),p=l.b.nav.withConfig({displayName:"headerstyles__StyledNav",componentId:"ggkv62-2"})(["& > .nav-list{list-style:none;display:flex;align-items:center;& > .nav-item{z-index:2;margin-left:30px;font-weight:700;font-size:14px;cursor:pointer;& > a{color:#ccc;text-decoration:none;transition:color 0.2s ease;&:hover{color:",";}}&--primary{background-color:",";padding:10px 30px;border-radius:4px;transition:background-color 0.2s ease;box-shadow:0px 3px 6px rgba(0,0,0,0.2);& > a{color:",";}&:hover{background-color:",";}}}& > .nav-item:first-child{margin-left:0px;}}"],(function(e){return e.theme.color.white}),(function(e){return e.theme.color.red}),(function(e){return e.theme.color.white}),(function(e){return e.theme.color["dark-red"]})),d=l.b.div.withConfig({displayName:"headerstyles__HeaderTopbar",componentId:"ggkv62-3"})(["display:flex;justify-content:space-between;& > .logo-container{z-index:2;& > .logo-img{width:35px;height:35px;}& > .logo-separator{height:37px;}& > .logo-text{font-size:24px;}}"]),m=l.b.div.withConfig({displayName:"headerstyles__HeaderContent",componentId:"ggkv62-4"})(["display:flex;justify-content:space-between;position:relative;align-items:flex-start;padding:0 50px;margin-top:30px;"]),u=l.b.div.withConfig({displayName:"headerstyles__TitleContainer",componentId:"ggkv62-5"})(["& > .title{font-size:37px;margin:0;}& > .sub-title{margin:0;font-size:21px;font-weight:500;margin-top:10px;}& > .about-company{margin-top:50px;max-width:90%;font-size:19px;display:flex;align-items:flex-start;padding:0;&::before{content:'';width:70px;height:2px;background-color:",";display:block;margin:7px 10px 0 0;}}"],(function(e){return e.theme.color.white})),h=l.b.img.withConfig({displayName:"headerstyles__HeaderImage",componentId:"ggkv62-6"})(["width:40%;"]),g=i("wBFK"),f=i("1iz9"),b=a.a.createElement,x=function(e){var t=e.imageUrl,i=Object(f.a)().isDesktop;return b(c,null,b(s,{style:{height:i?"75%":"100%"}}),b(d,null,b(g.a,null),b(p,null,b("ul",{className:"nav-list"},b("li",{className:"nav-item"},b(r.a,{href:"#"},"About")),b("li",{className:"nav-item"},b(r.a,{href:"#"},"How to contribute?")),b("li",{className:"nav-item nav-item--primary"},b(r.a,{href:"#"},"Get in touch"))))),b(m,null,b(u,null,b("h2",{className:"title"},"Value Driven Engineering"),b("h3",{className:"sub-title"},"Powered by Exlabs"),b("div",{className:"about-company"},"We deliver high-level consultancy & flexible, complex data-driven software solutions for the companies of the future.")),i&&b(h,{src:"".concat("/value_driven_templates","/").concat(t),alt:"Header"})))}}},[["/EDR",1,2,0,3]]]);