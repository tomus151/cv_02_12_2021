(this.webpackJsonpcv_actual=this.webpackJsonpcv_actual||[]).push([[3],{27:function(t,n,e){},28:function(t,n,e){},29:function(t,n,e){"use strict";e.r(n);var r=e(9);function c(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var e=[],r=!0,c=!1,i=void 0;try{for(var a,o=t[Symbol.iterator]();!(r=(a=o.next()).done)&&(e.push(a.value),!n||e.length!==n);r=!0);}catch(u){c=!0,i=u}finally{try{r||null==o.return||o.return()}finally{if(c)throw i}}return e}}(t,n)||Object(r.a)(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var i=e(1),a=(e(27),e(0)),o=function(){var t=c(Object(i.useState)(0),2),n=t[0],e=t[1],r=c(Object(i.useState)([{id:"l0",nr:"0",isActive:!1},{id:"l1",nr:"1",isActive:!1},{id:"l2",nr:"2",isActive:!1},{id:"l3",nr:"3",isActive:!1},{id:"l4",nr:"4",isActive:!1}]),2),o=r[0],u=(r[1],null);Object(i.useEffect)((function(){return u=setTimeout((function(){e((function(t){return console.log(t),n<o.length-1?t+1:0}))}),300),function(){return clearTimeout(u)}}),[n]);var l=o.map((function(t,e){return Object(a.jsx)("div",{class:"load-circle load-circle-".concat(t.nr," ").concat(n===Number(t.nr)?"active":""),"data-id":"".concat(t.nr)},"aa".concat(e))}));return Object(a.jsx)("div",{className:"loader-container",children:l})};e(28),n.default=function(t){var n=t.url,e=c(Object(i.useState)(!1),2),r=e[0],u=e[1];return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"iframe-container",children:[r?null:Object(a.jsx)(o,{}),Object(a.jsx)("iframe",{src:n,loading:"lazy",onLoad:function(){u(!0)},title:"banner"})]})})}}}]);
//# sourceMappingURL=3.2356d2a9.chunk.js.map