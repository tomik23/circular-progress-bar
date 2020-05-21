!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.CircularProgressBar=e():t.CircularProgressBar=e()}(window,(function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}n.r(e);var r=function(){function t(e){var n=e.pieName;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.pieName=n,this.pieElement=document.querySelectorAll(".".concat(n)),this.onChange(this.pieElement),this.svg="http://www.w3.org/2000/svg",this.xmlns="http://www.w3.org/2000/xmlns/",this.xlink="http://www.w3.org/1999/xlink"}var e,n,r;return e=t,(n=[{key:"onChange",value:function(t){var e=this;if("IntersectionObserver"in window)for(var n=new IntersectionObserver((function(i){return i.forEach((function(i){if(i.intersectionRatio>.75){for(var r=0;r<t.length;r++)t[r].dataset===i.target.dataset&&e.createSvg(i.target,r);n.unobserve(i.target)}}))}),{root:null,rootMargin:"0px",threshold:0}),i=0;i<t.length;i++)n.observe(t[i]);else for(var r=0;r<t.length;r++)this.createSvg(t[r],r)}},{key:"hexTorgb",value:function(t){var e=t.substring(1,7);return"".concat(parseInt(e.substring(0,2),16),", ").concat(parseInt(e.substring(2,4),16),", ").concat(parseInt(e.substring(4,6),16))}},{key:"circularBar",value:function(t){var e=this,n=document.querySelector(".".concat(this.pieName,"-circle-").concat(this.index)),i={colorSlice:this.colorSlice,strokeWidth:this.strokeWidth,end:this.end,time:this.time,round:this.round,percent:this.percent,number:this.number,index:this.index};i.number&&t.appendChild(this.percentElement());for(var r=function(t){setTimeout((function(){if(!(t>i.percent)){i.number&&e.percentElementUpdate(t,i.index);var r=2.64*t;n.setAttribute("style","fill: transparent; stroke-width: ".concat(i.strokeWidth,"; stroke-dashoffset: 66; stroke-dasharray: ").concat(r," ").concat(i.end-r,"; ").concat(i.round))}}),t*i.time)},o=0;o<=i.end;o++)r(o);n.setAttribute("stroke",this.lineargradient?"url(#linear)":this.colorSlice);var s=this.colorCircle?"":"border-radius: 50%; box-shadow: inset 0px 0px ".concat(this.strokeWidth,"px ").concat(this.strokeWidth,"px rgba(").concat(this.hexTorgb(this.colorSlice),", ").concat(this.opacity,")");this.pieElement[i.index].setAttribute("style","width: ".concat(this.size,"px; height: ").concat(this.size,"px;  position: relative; ").concat(s))}},{key:"percentElement",value:function(){var t=document.createElementNS(this.svg,"text");return t.id="".concat(this.pieName,"-percent-").concat(this.index),t.setAttributeNS(null,"x","50%"),t.setAttributeNS(null,"y","50%"),t.setAttributeNS(null,"font-size","".concat(this.fontSize)),t.setAttributeNS(null,"font-weight","".concat(this.fontWeight)),t.setAttributeNS(null,"fill","".concat(this.fontColor)),t.setAttributeNS(null,"dy",".3em"),t.setAttributeNS(null,"text-anchor","middle"),t}},{key:"percentElementUpdate",value:function(t,e){var n=document.getElementById("".concat(this.pieName,"-percent-").concat(e));return n.textContent="".concat(t,"%"),n}},{key:"createSvg",value:function(t,e){var n=JSON.parse(t.dataset.pie),i=n.lineargradient,r=n.round,o=n.percent,s=n.colorSlice,c=n.strokeWidth,l=n.opacity,a=n.number,u=n.colorCircle,h=n.size,d=n.fontSize,f=n.fontWeight,p=n.fontColor,b=n.time;this.index=e,this.percent=o||65,this.round=r?"stroke-linecap: round;":"",this.colorSlice=s||"#00a1ff",this.strokeWidth=c||10,this.opacity=l||.1,this.number=void 0===a,this.colorCircle=u,this.size=h||200,this.fontSize=d||"1.6rem",this.fontWeight=f||700,this.fontColor=p||"#365b74",this.time=b||30,this.end=264,this.lineargradient=i;var v=document.createElementNS(this.svg,"svg"),m=this.circleSvg(),g=this.circleSvg();m.setAttributeNS(null,"class","".concat(this.pieName,"-circle-").concat(this.index)),this.colorCircle&&(g.setAttributeNS(null,"fill","transparent"),g.setAttributeNS(null,"style","fill: transparent; stroke: ".concat(this.colorCircle,"; stroke-width: ").concat(this.strokeWidth,"px;")),v.appendChild(g)),v.setAttributeNS(null,"width",this.size),v.setAttributeNS(null,"height",this.size),v.setAttributeNS(null,"viewBox","0 0 100 100"),v.setAttributeNS(this.xmlns,"xmlns:xlink",this.xlink),this.lineargradient&&v.appendChild(this.linearGradient()),v.appendChild(m),this.pieElement[this.index].appendChild(v),this.circularBar(v)}},{key:"linearGradient",value:function(){var t=document.createElementNS(this.svg,"defs"),e=document.createElementNS(this.svg,"linearGradient");e.id="linear";var n=[].slice.call(this.lineargradient);t.appendChild(e);for(var i=0,r=0;r<n.length;r++){var o=document.createElementNS(this.svg,"stop");o.setAttributeNS(null,"offset","".concat(i,"%")),o.setAttribute("style","stop-color: ".concat(n[r],";")),e.appendChild(o),i+=100/(n.length-1)}return t}},{key:"circleSvg",value:function(){var t=document.createElementNS(this.svg,"circle");return t.setAttributeNS(null,"cx",50),t.setAttributeNS(null,"cy",50),t.setAttributeNS(null,"r",42),t}}])&&i(e.prototype,n),r&&i(e,r),t}();e.default=r}]).default}));