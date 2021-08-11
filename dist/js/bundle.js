"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(e){"object"==("undefined"==typeof exports?"undefined":_typeof(exports))&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(void 0).anime=e()}(function(){var O={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},C={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},v=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],y={CSS:{},springs:{}};function B(e,n,t){return Math.min(Math.max(e,n),t)}function l(e,n){return-1<e.indexOf(n)}function o(e,n){return e.apply(null,n)}var k={arr:function(e){return Array.isArray(e)},obj:function(e){return l(Object.prototype.toString.call(e),"Object")},pth:function(e){return k.obj(e)&&e.hasOwnProperty("totalLength")},svg:function(e){return e instanceof SVGElement},inp:function(e){return e instanceof HTMLInputElement},dom:function(e){return e.nodeType||k.svg(e)},str:function(e){return"string"==typeof e},fnc:function(e){return"function"==typeof e},und:function(e){return void 0===e},hex:function(e){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e)},rgb:function(e){return/^rgb/.test(e)},hsl:function(e){return/^hsl/.test(e)},col:function(e){return k.hex(e)||k.rgb(e)||k.hsl(e)},key:function(e){return!O.hasOwnProperty(e)&&!C.hasOwnProperty(e)&&"targets"!==e&&"keyframes"!==e}};function d(e){var n=/\(([^)]+)\)/.exec(e);return n?n[1].split(",").map(function(e){return parseFloat(e)}):[]}function u(a,t){var e=d(a),n=B(k.und(e[0])?1:e[0],.1,100),r=B(k.und(e[1])?100:e[1],.1,100),o=B(k.und(e[2])?10:e[2],.1,100),u=B(k.und(e[3])?0:e[3],.1,100),i=Math.sqrt(r/n),c=o/(2*Math.sqrt(r*n)),s=c<1?i*Math.sqrt(1-c*c):0,f=c<1?(c*i-u)/s:-u+i;function l(e){var n=t?t*e/1e3:e,n=c<1?Math.exp(-n*c*i)*(+Math.cos(s*n)+f*Math.sin(s*n)):(1+f*n)*Math.exp(-n*i);return 0===e||1===e?e:1-n}return t?l:function(){var e=y.springs[a];if(e)return e;for(var n=0,t=0;;)if(1===l(n+=1/6)){if(16<=++t)break}else t=0;var r=n*(1/6)*1e3;return y.springs[a]=r}}function i(n){return void 0===n&&(n=10),function(e){return Math.ceil(B(e,1e-6,1)*n)*(1/n)}}var n,t,c=function(o,n,u,t){if(0<=o&&o<=1&&0<=u&&u<=1){var i=new Float32Array(11);if(o!==n||u!==t)for(var e=0;e<11;++e)i[e]=f(.1*e,o,u);return function(e){return o===n&&u===t||0===e||1===e?e:f(function(e){for(var n=0,t=1;10!==t&&i[t]<=e;++t)n+=.1;var r=n+(e-i[--t])/(i[t+1]-i[t])*.1,a=p(r,o,u);return.001<=a?function(e,n,t,r){for(var a=0;a<4;++a){var o=p(n,t,r);if(0===o)return n;n-=(f(n,t,r)-e)/o}return n}(e,r,o,u):0===a?r:function(e,n,t,r,a){for(var o,u,i=0;0<(o=f(u=n+(t-n)/2,r,a)-e)?t=u:n=u,1e-7<Math.abs(o)&&++i<10;);return u}(e,n,n+.1,o,u)}(e),n,t)}}},s=(n={linear:function(){return function(e){return e}}},t={Sine:function(){return function(e){return 1-Math.cos(e*Math.PI/2)}},Circ:function(){return function(e){return 1-Math.sqrt(1-e*e)}},Back:function(){return function(e){return e*e*(3*e-2)}},Bounce:function(){return function(e){for(var n,t=4;e<((n=Math.pow(2,--t))-1)/11;);return 1/Math.pow(4,3-t)-7.5625*Math.pow((3*n-2)/22-e,2)}},Elastic:function(e,n){void 0===e&&(e=1),void 0===n&&(n=.5);var t=B(e,1,10),r=B(n,.1,2);return function(e){return 0===e||1===e?e:-t*Math.pow(2,10*(e-1))*Math.sin((e-1-r/(2*Math.PI)*Math.asin(1/t))*(2*Math.PI)/r)}}},["Quad","Cubic","Quart","Quint","Expo"].forEach(function(e,n){t[e]=function(){return function(e){return Math.pow(e,n+2)}}}),Object.keys(t).forEach(function(e){var r=t[e];n["easeIn"+e]=r,n["easeOut"+e]=function(n,t){return function(e){return 1-r(n,t)(1-e)}},n["easeInOut"+e]=function(n,t){return function(e){return e<.5?r(n,t)(2*e)/2:1-r(n,t)(-2*e+2)/2}}}),n);function r(e,n){return 1-3*n+3*e}function a(e,n){return 3*n-6*e}function f(e,n,t){return((r(n,t)*e+a(n,t))*e+3*n)*e}function p(e,n,t){return 3*r(n,t)*e*e+2*a(n,t)*e+3*n}function E(e,n){if(k.fnc(e))return e;var t=e.split("(")[0],r=s[t],a=d(e);switch(t){case"spring":return u(e,n);case"cubicBezier":return o(c,a);case"steps":return o(i,a);default:return o(r,a)}}function h(e){try{return document.querySelectorAll(e)}catch(e){return}}function I(e,n){for(var t,r=e.length,a=2<=arguments.length?n:void 0,o=[],u=0;u<r;u++){u in e&&(t=e[u],n.call(a,t,u,e)&&o.push(t))}return o}function m(e){return e.reduce(function(e,n){return e.concat(k.arr(n)?m(n):n)},[])}function g(e){return k.arr(e)?e:(k.str(e)&&(e=h(e)||e),e instanceof NodeList||e instanceof HTMLCollection?[].slice.call(e):[e])}function b(e,n){return e.some(function(e){return e===n})}function x(e){var n,t={};for(n in e)t[n]=e[n];return t}function P(e,n){var t,r=x(e);for(t in e)r[t]=n.hasOwnProperty(t)?n[t]:e[t];return r}function T(e,n){var t,r=x(e);for(t in n)r[t]=k.und(e[t])?n[t]:e[t];return r}function D(e){var n=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(e);if(n)return n[1]}function M(e,n){return k.fnc(e)?e(n.target,n.id,n.total):e}function w(e,n){return e.getAttribute(n)}function S(e,n,t){if(b([t,"deg","rad","turn"],D(n)))return n;var r=y.CSS[n+t];if(!k.und(r))return r;var a=document.createElement(e.tagName),o=e.parentNode&&e.parentNode!==document?e.parentNode:document.body;o.appendChild(a),a.style.position="absolute",a.style.width=100+t;var u=100/a.offsetWidth;o.removeChild(a);var i=u*parseFloat(n);return y.CSS[n+t]=i}function L(e,n,t){if(n in e.style){var r=n.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),a=e.style[n]||getComputedStyle(e).getPropertyValue(r)||"0";return t?S(e,a,t):a}}function F(e,n){return k.dom(e)&&!k.inp(e)&&(w(e,n)||k.svg(e)&&e[n])?"attribute":k.dom(e)&&b(v,n)?"transform":k.dom(e)&&"transform"!==n&&L(e,n)?"css":null!=e[n]?"object":void 0}function N(e){if(k.dom(e)){for(var n,t=e.style.transform||"",r=/(\w+)\(([^)]*)\)/g,a=new Map;n=r.exec(t);)a.set(n[1],n[2]);return a}}function A(e,n,t,r){switch(F(e,n)){case"transform":return a=e,u=r,i=t,s=l(o=n,"scale")?1:0+(l(c=o,"translate")||"perspective"===c?"px":l(c,"rotate")||l(c,"skew")?"deg":void 0),f=N(a).get(o)||s,u&&(u.transforms.list.set(o,f),u.transforms.last=o),i?S(a,f,i):f;case"css":return L(e,n,t);case"attribute":return w(e,n);default:return e[n]||0}var a,o,u,i,c,s,f}function j(e,n){var t=/^(\*=|\+=|-=)/.exec(e);if(!t)return e;var r=D(e)||0,a=parseFloat(n),o=parseFloat(e.replace(t[0],""));switch(t[0][0]){case"+":return a+o+r;case"-":return a-o+r;case"*":return a*o+r}}function q(e,n){if(k.col(e))return r=e,k.rgb(r)?(v=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(C=r))?"rgba("+v[1]+",1)":C:k.hex(r)?(y=r.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(e,n,t,r){return n+n+t+t+r+r}),B=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(y),"rgba("+parseInt(B[1],16)+","+parseInt(B[2],16)+","+parseInt(B[3],16)+",1)"):k.hsl(r)?(f=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(a=r)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(a),l=parseInt(f[1],10)/360,d=parseInt(f[2],10)/100,p=parseInt(f[3],10)/100,h=f[4]||1,0==d?i=c=s=p:(i=t(u=2*p-(o=p<.5?p*(1+d):p+d-p*d),o,l+1/3),c=t(u,o,l),s=t(u,o,l-1/3)),"rgba("+255*i+","+255*c+","+255*s+","+h+")"):void 0;function t(e,n,t){return t<0&&(t+=1),1<t&&--t,t<1/6?e+6*(n-e)*t:t<.5?n:t<2/3?e+(n-e)*(2/3-t)*6:e}var r,a,o,u,i,c,s,f,l,d,p,h;if(/\s/g.test(e))return e;var m=D(e),g=m?e.substr(0,e.length-m.length):e;return n?g+n:g}function $(e,n){return Math.sqrt(Math.pow(n.x-e.x,2)+Math.pow(n.y-e.y,2))}function Y(e){for(var n,t=e.points,r=0,a=0;a<t.numberOfItems;a++){var o=t.getItem(a);0<a&&(r+=$(n,o)),n=o}return r}function H(e){if(e.getTotalLength)return e.getTotalLength();switch(e.tagName.toLowerCase()){case"circle":return 2*Math.PI*w(e,"r");case"rect":return 2*w(r=e,"width")+2*w(r,"height");case"line":return $({x:w(t=e,"x1"),y:w(t,"y1")},{x:w(t,"x2"),y:w(t,"y2")});case"polyline":return Y(e);case"polygon":return n=e.points,Y(e)+$(n.getItem(n.numberOfItems-1),n.getItem(0))}var n,t,r}function X(n,e){var t=e||{},r=t.el||function(){for(var e=n.parentNode;k.svg(e)&&k.svg(e.parentNode);)e=e.parentNode;return e}(),a=r.getBoundingClientRect(),o=w(r,"viewBox"),u=a.width,i=a.height,c=t.viewBox||(o?o.split(" "):[0,0,u,i]);return{el:r,viewBox:c,x:+c[0],y:+c[1],w:u/c[2],h:i/c[3]}}function Z(e,n){var t=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,r=q(k.pth(e)?e.totalLength:e,n)+"";return{original:r,numbers:r.match(t)?r.match(t).map(Number):[0],strings:k.str(e)||n?r.split(t):[]}}function Q(e){return I(e?m(k.arr(e)?e.map(g):g(e)):[],function(e,n,t){return t.indexOf(e)===n})}function V(e){var t=Q(e);return t.map(function(e,n){return{target:e,id:n,total:t.length,transforms:{list:N(e)}}})}function _(e,n){var t,r=[],a=n.keyframes;for(t in a&&(n=T(function(n){for(var t=I(m(n.map(function(e){return Object.keys(e)})),function(e){return k.key(e)}).reduce(function(e,n){return e.indexOf(n)<0&&e.push(n),e},[]),a={},e=0;e<t.length;e++)!function(e){var r=t[e];a[r]=n.map(function(e){var n,t={};for(n in e)k.key(n)?n==r&&(t.value=e[n]):t[n]=e[n];return t})}(e);return a}(a),n)),n)k.key(t)&&r.push({name:t,tweens:function(e,r){var n,t=x(r);/^spring/.test(t.easing)&&(t.duration=u(t.easing)),k.arr(e)&&(2!==(n=e.length)||k.obj(e[0])?k.fnc(r.duration)||(t.duration=r.duration/n):e={value:e});var a=k.arr(e)?e:[e];return a.map(function(e,n){var t=k.obj(e)&&!k.pth(e)?e:{value:e};return k.und(t.delay)&&(t.delay=n?0:r.delay),k.und(t.endDelay)&&(t.endDelay=n===a.length-1?r.endDelay:0),t}).map(function(e){return T(e,t)})}(n[t],e)});return r}var z={css:function(e,n,t){return e.style[n]=t},attribute:function(e,n,t){return e.setAttribute(n,t)},object:function(e,n,t){return e[n]=t},transform:function(e,n,t,r,a){var o;r.list.set(n,t),n!==r.last&&!a||(o="",r.list.forEach(function(e,n){o+=n+"("+e+") "}),e.style.transform=o)}};function G(e,c){V(e).forEach(function(e){for(var n in c){var t=M(c[n],e),r=e.target,a=D(t),o=A(r,n,a,e),u=j(q(t,a||D(o)),o),i=F(r,n);z[i](r,n,u,e.transforms,!0)}})}function R(e,t){return I(m(e.map(function(n){return t.map(function(e){return function(e,n){var f,l,d,t=F(e.target,n.name);if(t){var r=(l=e,(f=n).tweens.map(function(e){var n=function(e,n){var t,r={};for(t in e){var a=M(e[t],n);k.arr(a)&&1===(a=a.map(function(e){return M(e,n)})).length&&(a=a[0]),r[t]=a}return r.duration=parseFloat(r.duration),r.delay=parseFloat(r.delay),r}(e,l),t=n.value,r=k.arr(t)?t[1]:t,a=D(r),o=A(l.target,f.name,a,l),u=d?d.to.original:o,i=k.arr(t)?t[0]:u,c=D(i)||D(o),s=a||c;return k.und(r)&&(r=u),n.from=Z(i,s),n.to=Z(j(r,i),s),n.start=d?d.end:0,n.end=n.start+n.delay+n.duration+n.endDelay,n.easing=E(n.easing,n.duration),n.isPath=k.pth(t),n.isColor=k.col(n.from.original),n.isColor&&(n.round=1),d=n})),a=r[r.length-1];return{type:t,property:n.name,animatable:e,tweens:r,duration:a.end,delay:r[0].delay,endDelay:a.endDelay}}}(n,e)})})),function(e){return!k.und(e)})}function W(e,n){function t(e){return e.timelineOffset?e.timelineOffset:0}var r=e.length,a={};return a.duration=r?Math.max.apply(Math,e.map(function(e){return t(e)+e.duration})):n.duration,a.delay=r?Math.min.apply(Math,e.map(function(e){return t(e)+e.delay})):n.delay,a.endDelay=r?a.duration-Math.max.apply(Math,e.map(function(e){return t(e)+e.duration-e.endDelay})):n.endDelay,a}var J,K=0,U=[],e=[],ee=ne;function ne(){J=requestAnimationFrame(te)}function te(e){var n=U.length;if(n){for(var t=0;t<n;){var r,a=U[t];a.paused?-1<(r=U.indexOf(a))&&(U.splice(r,1),n=U.length):a.tick(e),t++}ne()}else J=cancelAnimationFrame(J)}function re(e){void 0===e&&(e={});var o,u=0,i=0,c=0,s=0,f=null;function l(e){var n=window.Promise&&new Promise(function(e){return f=e});return e.finished=n}var n,t,r,a,d,p,h,m,k=(t=P(O,n=e),a=_(r=P(C,n),n),h=W(p=R(d=V(n.targets),a),r),m=K,K++,T(t,{id:m,children:[],animatables:d,animations:p,duration:h.duration,delay:h.delay,endDelay:h.endDelay}));function g(){var e=k.direction;"alternate"!==e&&(k.direction="normal"!==e?"normal":"reverse"),k.reversed=!k.reversed,o.forEach(function(e){return e.reversed=k.reversed})}function v(e){return k.reversed?k.duration-e:e}function y(){u=0,i=v(k.currentTime)*(1/re.speed)}function b(e,n){n&&n.seek(e-n.timelineOffset)}function x(n){for(var e=0,t=k.animations,r=t.length;e<r;){var a=t[e],o=a.animatable,u=a.tweens,i=u.length-1,c=u[i];i&&(c=I(u,function(e){return n<e.end})[0]||c);for(var s=B(n-c.start-c.delay,0,c.duration)/c.duration,f=isNaN(s)?1:c.easing(s),l=c.to.strings,d=c.round,p=[],h=c.to.numbers.length,m=void 0,g=0;g<h;g++){var v=void 0,y=c.to.numbers[g],b=c.from.numbers[g]||0,v=c.isPath?function(t,r){function e(e){void 0===e&&(e=0);var n=1<=r+e?r+e:0;return t.el.getPointAtLength(n)}var n=X(t.el,t.svg),a=e(),o=e(-1),u=e(1);switch(t.property){case"x":return(a.x-n.x)*n.w;case"y":return(a.y-n.y)*n.h;case"angle":return 180*Math.atan2(u.y-o.y,u.x-o.x)/Math.PI}}(c.value,f*y):b+f*(y-b);d&&(c.isColor&&2<g||(v=Math.round(v*d)/d)),p.push(v)}var x=l.length;if(x){m=l[0];for(var M=0;M<x;M++){l[M];var w=l[M+1],O=p[M];isNaN(O)||(m+=w?O+w:O+" ")}}else m=p[0];z[a.type](o.target,a.property,m,o.transforms),a.currentValue=m,e++}}function M(e){k[e]&&!k.passThrough&&k[e](k)}function w(e){var n=k.duration,t=k.delay,r=n-k.endDelay,a=v(e);k.progress=B(a/n*100,0,100),k.reversePlayback=a<k.currentTime,o&&function(e){if(k.reversePlayback)for(var n=s;n--;)b(e,o[n]);else for(var t=0;t<s;t++)b(e,o[t])}(a),!k.began&&0<k.currentTime&&(k.began=!0,M("begin")),!k.loopBegan&&0<k.currentTime&&(k.loopBegan=!0,M("loopBegin")),a<=t&&0!==k.currentTime&&x(0),(r<=a&&k.currentTime!==n||!n)&&x(n),t<a&&a<r?(k.changeBegan||(k.changeBegan=!0,k.changeCompleted=!1,M("changeBegin")),M("change"),x(a)):k.changeBegan&&(k.changeCompleted=!0,k.changeBegan=!1,M("changeComplete")),k.currentTime=B(a,0,n),k.began&&M("update"),n<=e&&(i=0,k.remaining&&!0!==k.remaining&&k.remaining--,k.remaining?(u=c,M("loopComplete"),k.loopBegan=!1,"alternate"===k.direction&&g()):(k.paused=!0,k.completed||(k.completed=!0,M("loopComplete"),M("complete"),!k.passThrough&&"Promise"in window&&(f(),l(k)))))}return l(k),k.reset=function(){var e=k.direction;k.passThrough=!1,k.currentTime=0,k.progress=0,k.paused=!0,k.began=!1,k.loopBegan=!1,k.changeBegan=!1,k.completed=!1,k.changeCompleted=!1,k.reversePlayback=!1,k.reversed="reverse"===e,k.remaining=k.loop,o=k.children;for(var n=s=o.length;n--;)k.children[n].reset();(k.reversed&&!0!==k.loop||"alternate"===e&&1===k.loop)&&k.remaining++,x(k.reversed?k.duration:0)},k.set=function(e,n){return G(e,n),k},k.tick=function(e){w(((c=e)+(i-(u=u||c)))*re.speed)},k.seek=function(e){w(v(e))},k.pause=function(){k.paused=!0,y()},k.play=function(){k.paused&&(k.completed&&k.reset(),k.paused=!1,U.push(k),y(),J||ee())},k.reverse=function(){g(),k.completed=!k.reversed,y()},k.restart=function(){k.reset(),k.play()},k.reset(),k.autoplay&&k.play(),k}function ae(e,n){for(var t=n.length;t--;)b(e,n[t].animatable.target)&&n.splice(t,1)}return"undefined"!=typeof document&&document.addEventListener("visibilitychange",function(){document.hidden?(U.forEach(function(e){return e.pause()}),e=U.slice(0),re.running=U=[]):e.forEach(function(e){return e.play()})}),re.version="3.2.0",re.speed=1,re.running=U,re.remove=function(e){for(var n=Q(e),t=U.length;t--;){var r=U[t],a=r.animations,o=r.children;ae(n,a);for(var u=o.length;u--;){var i=o[u],c=i.animations;ae(n,c),c.length||i.children.length||o.splice(u,1)}a.length||o.length||r.pause()}},re.get=A,re.set=G,re.convertPx=S,re.path=function(e,n){var t=k.str(e)?h(e)[0]:e,r=n||100;return function(e){return{property:e,el:t,svg:X(t),totalLength:H(t)*(r/100)}}},re.setDashoffset=function(e){var n=H(e);return e.setAttribute("stroke-dasharray",n),n},re.stagger=function(e,n){void 0===n&&(n={});var s=n.direction||"normal",f=n.easing?E(n.easing):null,l=n.grid,d=n.axis,p=n.from||0,h="first"===p,m="center"===p,g="last"===p,v=k.arr(e),y=v?parseFloat(e[0]):parseFloat(e),b=v?parseFloat(e[1]):0,x=D(v?e[1]:e)||0,M=n.start||0+(v?y:0),w=[],O=0;return function(e,n,t){if(h&&(p=0),m&&(p=(t-1)/2),g&&(p=t-1),!w.length){for(var r,a,o,u,i,c=0;c<t;c++){l?(r=m?(l[0]-1)/2:p%l[0],a=m?(l[1]-1)/2:Math.floor(p/l[0]),o=r-c%l[0],u=a-Math.floor(c/l[0]),i=Math.sqrt(o*o+u*u),"x"===d&&(i=-o),"y"===d&&(i=-u),w.push(i)):w.push(Math.abs(p-c)),O=Math.max.apply(Math,w)}f&&(w=w.map(function(e){return f(e/O)*O})),"reverse"===s&&(w=w.map(function(e){return d?e<0?-1*e:-e:Math.abs(O-e)}))}return M+(v?(b-y)/O:y)*(Math.round(100*w[n])/100)+x}},re.timeline=function(f){void 0===f&&(f={});var l=re(f);return l.duration=0,l.add=function(e,n){var t=U.indexOf(l),r=l.children;function a(e){e.passThrough=!0}-1<t&&U.splice(t,1);for(var o=0;o<r.length;o++)a(r[o]);var u=T(e,P(C,f));u.targets=u.targets||f.targets;var i=l.duration;u.autoplay=!1,u.direction=l.direction,u.timelineOffset=k.und(n)?i:j(n,i),a(l),l.seek(u.timelineOffset);var c=re(u);a(c),r.push(c);var s=W(r,f);return l.delay=s.delay,l.endDelay=s.endDelay,l.duration=s.duration,l.seek(0),l.reset(),l.autoplay&&l.play(),l},l},re.easing=E,re.penner=s,re.random=function(e,n){return Math.floor(Math.random()*(n-e+1))+e},re});var header=document.getElementById("header");window.addEventListener("scroll",function(){window.scrollY||window.pageYOffset||40<document.body.scrollTop+(document.documentElement&&document.documentElement.scrollTop||0)?header.classList.add("fixedHeader"):header.classList.remove("fixedHeader"),scrollTopMenu()});