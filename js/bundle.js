"use strict";function _typeof(n){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}!function(n){"object"==("undefined"==typeof exports?"undefined":_typeof(exports))&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(void 0).anime=n()}(function(){var k={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},C={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},v=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],y={CSS:{},springs:{}};function B(n,e,t){return Math.min(Math.max(n,e),t)}function l(n,e){return-1<n.indexOf(e)}function o(n,e){return n.apply(null,e)}var O={arr:function(n){return Array.isArray(n)},obj:function(n){return l(Object.prototype.toString.call(n),"Object")},pth:function(n){return O.obj(n)&&n.hasOwnProperty("totalLength")},svg:function(n){return n instanceof SVGElement},inp:function(n){return n instanceof HTMLInputElement},dom:function(n){return n.nodeType||O.svg(n)},str:function(n){return"string"==typeof n},fnc:function(n){return"function"==typeof n},und:function(n){return void 0===n},hex:function(n){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(n)},rgb:function(n){return/^rgb/.test(n)},hsl:function(n){return/^hsl/.test(n)},col:function(n){return O.hex(n)||O.rgb(n)||O.hsl(n)},key:function(n){return!k.hasOwnProperty(n)&&!C.hasOwnProperty(n)&&"targets"!==n&&"keyframes"!==n}};function d(n){var e=/\(([^)]+)\)/.exec(n);return e?e[1].split(",").map(function(n){return parseFloat(n)}):[]}function u(a,t){var n=d(a),e=B(O.und(n[0])?1:n[0],.1,100),r=B(O.und(n[1])?100:n[1],.1,100),o=B(O.und(n[2])?10:n[2],.1,100),u=B(O.und(n[3])?0:n[3],.1,100),i=Math.sqrt(r/e),c=o/(2*Math.sqrt(r*e)),s=c<1?i*Math.sqrt(1-c*c):0,f=c<1?(c*i-u)/s:-u+i;function l(n){var e=t?t*n/1e3:n,e=c<1?Math.exp(-e*c*i)*(+Math.cos(s*e)+f*Math.sin(s*e)):(1+f*e)*Math.exp(-e*i);return 0===n||1===n?n:1-e}return t?l:function(){var n=y.springs[a];if(n)return n;for(var e=0,t=0;;)if(1===l(e+=1/6)){if(16<=++t)break}else t=0;var r=e*(1/6)*1e3;return y.springs[a]=r}}function i(e){return void 0===e&&(e=10),function(n){return Math.ceil(B(n,1e-6,1)*e)*(1/e)}}var e,t,c=function(o,e,u,t){if(0<=o&&o<=1&&0<=u&&u<=1){var i=new Float32Array(11);if(o!==e||u!==t)for(var n=0;n<11;++n)i[n]=f(.1*n,o,u);return function(n){return o===e&&u===t||0===n||1===n?n:f(function(n){for(var e=0,t=1;10!==t&&i[t]<=n;++t)e+=.1;var r=e+(n-i[--t])/(i[t+1]-i[t])*.1,a=p(r,o,u);return.001<=a?function(n,e,t,r){for(var a=0;a<4;++a){var o=p(e,t,r);if(0===o)return e;e-=(f(e,t,r)-n)/o}return e}(n,r,o,u):0===a?r:function(n,e,t,r,a){for(var o,u,i=0;0<(o=f(u=e+(t-e)/2,r,a)-n)?t=u:e=u,1e-7<Math.abs(o)&&++i<10;);return u}(n,e,e+.1,o,u)}(n),e,t)}}},s=(e={linear:function(){return function(n){return n}}},t={Sine:function(){return function(n){return 1-Math.cos(n*Math.PI/2)}},Circ:function(){return function(n){return 1-Math.sqrt(1-n*n)}},Back:function(){return function(n){return n*n*(3*n-2)}},Bounce:function(){return function(n){for(var e,t=4;n<((e=Math.pow(2,--t))-1)/11;);return 1/Math.pow(4,3-t)-7.5625*Math.pow((3*e-2)/22-n,2)}},Elastic:function(n,e){void 0===n&&(n=1),void 0===e&&(e=.5);var t=B(n,1,10),r=B(e,.1,2);return function(n){return 0===n||1===n?n:-t*Math.pow(2,10*(n-1))*Math.sin((n-1-r/(2*Math.PI)*Math.asin(1/t))*(2*Math.PI)/r)}}},["Quad","Cubic","Quart","Quint","Expo"].forEach(function(n,e){t[n]=function(){return function(n){return Math.pow(n,e+2)}}}),Object.keys(t).forEach(function(n){var r=t[n];e["easeIn"+n]=r,e["easeOut"+n]=function(e,t){return function(n){return 1-r(e,t)(1-n)}},e["easeInOut"+n]=function(e,t){return function(n){return n<.5?r(e,t)(2*n)/2:1-r(e,t)(-2*n+2)/2}}}),e);function r(n,e){return 1-3*e+3*n}function a(n,e){return 3*e-6*n}function f(n,e,t){return((r(e,t)*n+a(e,t))*n+3*e)*n}function p(n,e,t){return 3*r(e,t)*n*n+2*a(e,t)*n+3*e}function P(n,e){if(O.fnc(n))return n;var t=n.split("(")[0],r=s[t],a=d(n);switch(t){case"spring":return u(n,e);case"cubicBezier":return o(c,a);case"steps":return o(i,a);default:return o(r,a)}}function h(n){try{return document.querySelectorAll(n)}catch(n){return}}function I(n,e){for(var t,r=n.length,a=2<=arguments.length?e:void 0,o=[],u=0;u<r;u++){u in n&&(t=n[u],e.call(a,t,u,n)&&o.push(t))}return o}function g(n){return n.reduce(function(n,e){return n.concat(O.arr(e)?g(e):e)},[])}function m(n){return O.arr(n)?n:(O.str(n)&&(n=h(n)||n),n instanceof NodeList||n instanceof HTMLCollection?[].slice.call(n):[n])}function b(n,e){return n.some(function(n){return n===e})}function x(n){var e,t={};for(e in n)t[e]=n[e];return t}function T(n,e){var t,r=x(n);for(t in n)r[t]=e.hasOwnProperty(t)?e[t]:n[t];return r}function D(n,e){var t,r=x(n);for(t in e)r[t]=O.und(n[t])?e[t]:n[t];return r}function E(n){var e=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(n);if(e)return e[1]}function M(n,e){return O.fnc(n)?n(e.target,e.id,e.total):n}function w(n,e){return n.getAttribute(e)}function S(n,e,t){if(b([t,"deg","rad","turn"],E(e)))return e;var r=y.CSS[e+t];if(!O.und(r))return r;var a=document.createElement(n.tagName),o=n.parentNode&&n.parentNode!==document?n.parentNode:document.body;o.appendChild(a),a.style.position="absolute",a.style.width=100+t;var u=100/a.offsetWidth;o.removeChild(a);var i=u*parseFloat(e);return y.CSS[e+t]=i}function F(n,e,t){if(e in n.style){var r=e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),a=n.style[e]||getComputedStyle(n).getPropertyValue(r)||"0";return t?S(n,a,t):a}}function N(n,e){return O.dom(n)&&!O.inp(n)&&(w(n,e)||O.svg(n)&&n[e])?"attribute":O.dom(n)&&b(v,e)?"transform":O.dom(n)&&"transform"!==e&&F(n,e)?"css":null!=n[e]?"object":void 0}function A(n){if(O.dom(n)){for(var e,t=n.style.transform||"",r=/(\w+)\(([^)]*)\)/g,a=new Map;e=r.exec(t);)a.set(e[1],e[2]);return a}}function L(n,e,t,r){switch(N(n,e)){case"transform":return a=n,u=r,i=t,s=l(o=e,"scale")?1:0+(l(c=o,"translate")||"perspective"===c?"px":l(c,"rotate")||l(c,"skew")?"deg":void 0),f=A(a).get(o)||s,u&&(u.transforms.list.set(o,f),u.transforms.last=o),i?S(a,f,i):f;case"css":return F(n,e,t);case"attribute":return w(n,e);default:return n[e]||0}var a,o,u,i,c,s,f}function j(n,e){var t=/^(\*=|\+=|-=)/.exec(n);if(!t)return n;var r=E(n)||0,a=parseFloat(e),o=parseFloat(n.replace(t[0],""));switch(t[0][0]){case"+":return a+o+r;case"-":return a-o+r;case"*":return a*o+r}}function q(n,e){if(O.col(n))return r=n,O.rgb(r)?(v=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(C=r))?"rgba("+v[1]+",1)":C:O.hex(r)?(y=r.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(n,e,t,r){return e+e+t+t+r+r}),B=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(y),"rgba("+parseInt(B[1],16)+","+parseInt(B[2],16)+","+parseInt(B[3],16)+",1)"):O.hsl(r)?(f=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(a=r)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(a),l=parseInt(f[1],10)/360,d=parseInt(f[2],10)/100,p=parseInt(f[3],10)/100,h=f[4]||1,0==d?i=c=s=p:(i=t(u=2*p-(o=p<.5?p*(1+d):p+d-p*d),o,l+1/3),c=t(u,o,l),s=t(u,o,l-1/3)),"rgba("+255*i+","+255*c+","+255*s+","+h+")"):void 0;function t(n,e,t){return t<0&&(t+=1),1<t&&--t,t<1/6?n+6*(e-n)*t:t<.5?e:t<2/3?n+(e-n)*(2/3-t)*6:n}var r,a,o,u,i,c,s,f,l,d,p,h;if(/\s/g.test(n))return n;var g=E(n),m=g?n.substr(0,n.length-g.length):n;return e?m+e:m}function $(n,e){return Math.sqrt(Math.pow(e.x-n.x,2)+Math.pow(e.y-n.y,2))}function X(n){for(var e,t=n.points,r=0,a=0;a<t.numberOfItems;a++){var o=t.getItem(a);0<a&&(r+=$(e,o)),e=o}return r}function Y(n){if(n.getTotalLength)return n.getTotalLength();switch(n.tagName.toLowerCase()){case"circle":return 2*Math.PI*w(n,"r");case"rect":return 2*w(r=n,"width")+2*w(r,"height");case"line":return $({x:w(t=n,"x1"),y:w(t,"y1")},{x:w(t,"x2"),y:w(t,"y2")});case"polyline":return X(n);case"polygon":return e=n.points,X(n)+$(e.getItem(e.numberOfItems-1),e.getItem(0))}var e,t,r}function Z(e,n){var t=n||{},r=t.el||function(){for(var n=e.parentNode;O.svg(n)&&O.svg(n.parentNode);)n=n.parentNode;return n}(),a=r.getBoundingClientRect(),o=w(r,"viewBox"),u=a.width,i=a.height,c=t.viewBox||(o?o.split(" "):[0,0,u,i]);return{el:r,viewBox:c,x:+c[0],y:+c[1],w:u/c[2],h:i/c[3]}}function Q(n,e){var t=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,r=q(O.pth(n)?n.totalLength:n,e)+"";return{original:r,numbers:r.match(t)?r.match(t).map(Number):[0],strings:O.str(n)||e?r.split(t):[]}}function V(n){return I(n?g(O.arr(n)?n.map(m):m(n)):[],function(n,e,t){return t.indexOf(n)===e})}function _(n){var t=V(n);return t.map(function(n,e){return{target:n,id:e,total:t.length,transforms:{list:A(n)}}})}function z(n,e){var t,r=[],a=e.keyframes;for(t in a&&(e=D(function(e){for(var t=I(g(e.map(function(n){return Object.keys(n)})),function(n){return O.key(n)}).reduce(function(n,e){return n.indexOf(e)<0&&n.push(e),n},[]),a={},n=0;n<t.length;n++)!function(n){var r=t[n];a[r]=e.map(function(n){var e,t={};for(e in n)O.key(e)?e==r&&(t.value=n[e]):t[e]=n[e];return t})}(n);return a}(a),e)),e)O.key(t)&&r.push({name:t,tweens:function(n,r){var e,t=x(r);/^spring/.test(t.easing)&&(t.duration=u(t.easing)),O.arr(n)&&(2!==(e=n.length)||O.obj(n[0])?O.fnc(r.duration)||(t.duration=r.duration/e):n={value:n});var a=O.arr(n)?n:[n];return a.map(function(n,e){var t=O.obj(n)&&!O.pth(n)?n:{value:n};return O.und(t.delay)&&(t.delay=e?0:r.delay),O.und(t.endDelay)&&(t.endDelay=e===a.length-1?r.endDelay:0),t}).map(function(n){return D(n,t)})}(e[t],n)});return r}var H={css:function(n,e,t){return n.style[e]=t},attribute:function(n,e,t){return n.setAttribute(e,t)},object:function(n,e,t){return n[e]=t},transform:function(n,e,t,r,a){var o;r.list.set(e,t),e!==r.last&&!a||(o="",r.list.forEach(function(n,e){o+=e+"("+n+") "}),n.style.transform=o)}};function G(n,c){_(n).forEach(function(n){for(var e in c){var t=M(c[e],n),r=n.target,a=E(t),o=L(r,e,a,n),u=j(q(t,a||E(o)),o),i=N(r,e);H[i](r,e,u,n.transforms,!0)}})}function R(n,t){return I(g(n.map(function(e){return t.map(function(n){return function(n,e){var f,l,d,t=N(n.target,e.name);if(t){var r=(l=n,(f=e).tweens.map(function(n){var e=function(n,e){var t,r={};for(t in n){var a=M(n[t],e);O.arr(a)&&1===(a=a.map(function(n){return M(n,e)})).length&&(a=a[0]),r[t]=a}return r.duration=parseFloat(r.duration),r.delay=parseFloat(r.delay),r}(n,l),t=e.value,r=O.arr(t)?t[1]:t,a=E(r),o=L(l.target,f.name,a,l),u=d?d.to.original:o,i=O.arr(t)?t[0]:u,c=E(i)||E(o),s=a||c;return O.und(r)&&(r=u),e.from=Q(i,s),e.to=Q(j(r,i),s),e.start=d?d.end:0,e.end=e.start+e.delay+e.duration+e.endDelay,e.easing=P(e.easing,e.duration),e.isPath=O.pth(t),e.isColor=O.col(e.from.original),e.isColor&&(e.round=1),d=e})),a=r[r.length-1];return{type:t,property:e.name,animatable:n,tweens:r,duration:a.end,delay:r[0].delay,endDelay:a.endDelay}}}(e,n)})})),function(n){return!O.und(n)})}function W(n,e){function t(n){return n.timelineOffset?n.timelineOffset:0}var r=n.length,a={};return a.duration=r?Math.max.apply(Math,n.map(function(n){return t(n)+n.duration})):e.duration,a.delay=r?Math.min.apply(Math,n.map(function(n){return t(n)+n.delay})):e.delay,a.endDelay=r?a.duration-Math.max.apply(Math,n.map(function(n){return t(n)+n.duration-n.endDelay})):e.endDelay,a}var J,K=0,U=[],n=[],nn=en;function en(){J=requestAnimationFrame(tn)}function tn(n){var e=U.length;if(e){for(var t=0;t<e;){var r,a=U[t];a.paused?-1<(r=U.indexOf(a))&&(U.splice(r,1),e=U.length):a.tick(n),t++}en()}else J=cancelAnimationFrame(J)}function rn(n){void 0===n&&(n={});var o,u=0,i=0,c=0,s=0,f=null;function l(n){var e=window.Promise&&new Promise(function(n){return f=n});return n.finished=e}var e,t,r,a,d,p,h,g,O=(t=T(k,e=n),a=z(r=T(C,e),e),h=W(p=R(d=_(e.targets),a),r),g=K,K++,D(t,{id:g,children:[],animatables:d,animations:p,duration:h.duration,delay:h.delay,endDelay:h.endDelay}));function m(){var n=O.direction;"alternate"!==n&&(O.direction="normal"!==n?"normal":"reverse"),O.reversed=!O.reversed,o.forEach(function(n){return n.reversed=O.reversed})}function v(n){return O.reversed?O.duration-n:n}function y(){u=0,i=v(O.currentTime)*(1/rn.speed)}function b(n,e){e&&e.seek(n-e.timelineOffset)}function x(e){for(var n=0,t=O.animations,r=t.length;n<r;){var a=t[n],o=a.animatable,u=a.tweens,i=u.length-1,c=u[i];i&&(c=I(u,function(n){return e<n.end})[0]||c);for(var s=B(e-c.start-c.delay,0,c.duration)/c.duration,f=isNaN(s)?1:c.easing(s),l=c.to.strings,d=c.round,p=[],h=c.to.numbers.length,g=void 0,m=0;m<h;m++){var v=void 0,y=c.to.numbers[m],b=c.from.numbers[m]||0,v=c.isPath?function(t,r){function n(n){void 0===n&&(n=0);var e=1<=r+n?r+n:0;return t.el.getPointAtLength(e)}var e=Z(t.el,t.svg),a=n(),o=n(-1),u=n(1);switch(t.property){case"x":return(a.x-e.x)*e.w;case"y":return(a.y-e.y)*e.h;case"angle":return 180*Math.atan2(u.y-o.y,u.x-o.x)/Math.PI}}(c.value,f*y):b+f*(y-b);d&&(c.isColor&&2<m||(v=Math.round(v*d)/d)),p.push(v)}var x=l.length;if(x){g=l[0];for(var M=0;M<x;M++){l[M];var w=l[M+1],k=p[M];isNaN(k)||(g+=w?k+w:k+" ")}}else g=p[0];H[a.type](o.target,a.property,g,o.transforms),a.currentValue=g,n++}}function M(n){O[n]&&!O.passThrough&&O[n](O)}function w(n){var e=O.duration,t=O.delay,r=e-O.endDelay,a=v(n);O.progress=B(a/e*100,0,100),O.reversePlayback=a<O.currentTime,o&&function(n){if(O.reversePlayback)for(var e=s;e--;)b(n,o[e]);else for(var t=0;t<s;t++)b(n,o[t])}(a),!O.began&&0<O.currentTime&&(O.began=!0,M("begin")),!O.loopBegan&&0<O.currentTime&&(O.loopBegan=!0,M("loopBegin")),a<=t&&0!==O.currentTime&&x(0),(r<=a&&O.currentTime!==e||!e)&&x(e),t<a&&a<r?(O.changeBegan||(O.changeBegan=!0,O.changeCompleted=!1,M("changeBegin")),M("change"),x(a)):O.changeBegan&&(O.changeCompleted=!0,O.changeBegan=!1,M("changeComplete")),O.currentTime=B(a,0,e),O.began&&M("update"),e<=n&&(i=0,O.remaining&&!0!==O.remaining&&O.remaining--,O.remaining?(u=c,M("loopComplete"),O.loopBegan=!1,"alternate"===O.direction&&m()):(O.paused=!0,O.completed||(O.completed=!0,M("loopComplete"),M("complete"),!O.passThrough&&"Promise"in window&&(f(),l(O)))))}return l(O),O.reset=function(){var n=O.direction;O.passThrough=!1,O.currentTime=0,O.progress=0,O.paused=!0,O.began=!1,O.loopBegan=!1,O.changeBegan=!1,O.completed=!1,O.changeCompleted=!1,O.reversePlayback=!1,O.reversed="reverse"===n,O.remaining=O.loop,o=O.children;for(var e=s=o.length;e--;)O.children[e].reset();(O.reversed&&!0!==O.loop||"alternate"===n&&1===O.loop)&&O.remaining++,x(O.reversed?O.duration:0)},O.set=function(n,e){return G(n,e),O},O.tick=function(n){w(((c=n)+(i-(u=u||c)))*rn.speed)},O.seek=function(n){w(v(n))},O.pause=function(){O.paused=!0,y()},O.play=function(){O.paused&&(O.completed&&O.reset(),O.paused=!1,U.push(O),y(),J||nn())},O.reverse=function(){m(),O.completed=!O.reversed,y()},O.restart=function(){O.reset(),O.play()},O.reset(),O.autoplay&&O.play(),O}function an(n,e){for(var t=e.length;t--;)b(n,e[t].animatable.target)&&e.splice(t,1)}return"undefined"!=typeof document&&document.addEventListener("visibilitychange",function(){document.hidden?(U.forEach(function(n){return n.pause()}),n=U.slice(0),rn.running=U=[]):n.forEach(function(n){return n.play()})}),rn.version="3.2.0",rn.speed=1,rn.running=U,rn.remove=function(n){for(var e=V(n),t=U.length;t--;){var r=U[t],a=r.animations,o=r.children;an(e,a);for(var u=o.length;u--;){var i=o[u],c=i.animations;an(e,c),c.length||i.children.length||o.splice(u,1)}a.length||o.length||r.pause()}},rn.get=L,rn.set=G,rn.convertPx=S,rn.path=function(n,e){var t=O.str(n)?h(n)[0]:n,r=e||100;return function(n){return{property:n,el:t,svg:Z(t),totalLength:Y(t)*(r/100)}}},rn.setDashoffset=function(n){var e=Y(n);return n.setAttribute("stroke-dasharray",e),e},rn.stagger=function(n,e){void 0===e&&(e={});var s=e.direction||"normal",f=e.easing?P(e.easing):null,l=e.grid,d=e.axis,p=e.from||0,h="first"===p,g="center"===p,m="last"===p,v=O.arr(n),y=v?parseFloat(n[0]):parseFloat(n),b=v?parseFloat(n[1]):0,x=E(v?n[1]:n)||0,M=e.start||0+(v?y:0),w=[],k=0;return function(n,e,t){if(h&&(p=0),g&&(p=(t-1)/2),m&&(p=t-1),!w.length){for(var r,a,o,u,i,c=0;c<t;c++){l?(r=g?(l[0]-1)/2:p%l[0],a=g?(l[1]-1)/2:Math.floor(p/l[0]),o=r-c%l[0],u=a-Math.floor(c/l[0]),i=Math.sqrt(o*o+u*u),"x"===d&&(i=-o),"y"===d&&(i=-u),w.push(i)):w.push(Math.abs(p-c)),k=Math.max.apply(Math,w)}f&&(w=w.map(function(n){return f(n/k)*k})),"reverse"===s&&(w=w.map(function(n){return d?n<0?-1*n:-n:Math.abs(k-n)}))}return M+(v?(b-y)/k:y)*(Math.round(100*w[e])/100)+x}},rn.timeline=function(f){void 0===f&&(f={});var l=rn(f);return l.duration=0,l.add=function(n,e){var t=U.indexOf(l),r=l.children;function a(n){n.passThrough=!0}-1<t&&U.splice(t,1);for(var o=0;o<r.length;o++)a(r[o]);var u=D(n,T(C,f));u.targets=u.targets||f.targets;var i=l.duration;u.autoplay=!1,u.direction=l.direction,u.timelineOffset=O.und(e)?i:j(e,i),a(l),l.seek(u.timelineOffset);var c=rn(u);a(c),r.push(c);var s=W(r,f);return l.delay=s.delay,l.endDelay=s.endDelay,l.duration=s.duration,l.seek(0),l.reset(),l.autoplay&&l.play(),l},l},rn.easing=P,rn.penner=s,rn.random=function(n,e){return Math.floor(Math.random()*(e-n+1))+n},rn});