var t=require("html-to-image"),e=require("save-svg-as-png"),n=require("file-saver");function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function i(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0;return function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=t[Symbol.iterator]()).next.bind(n)}var u=/*#__PURE__*/"undefined"!=typeof Symbol?Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator")):"@@iterator";function a(t,e,n){if(!t.s){if(n instanceof l){if(!n.s)return void(n.o=a.bind(null,t,e));1&e&&(e=n.s),n=n.v}if(n&&n.then)return void n.then(a.bind(null,t,e),a.bind(null,t,2));t.s=e,t.v=n;var r=t.o;r&&r(t)}}var l=/*#__PURE__*/function(){function t(){}return t.prototype.then=function(e,n){var r=new t,o=this.s;if(o){var i=1&o?e:n;if(i){try{a(r,1,i(this.v))}catch(t){a(r,2,t)}return r}return this}return this.o=function(t){try{var o=t.v;1&t.s?a(r,1,e?e(o):o):n?a(r,1,n(o)):a(r,2,o)}catch(t){a(r,2,t)}},r},t}();function c(t){return t instanceof l&&1&t.s}var f={filename:"Image",forceFixText:!1,printDate:!0},h=function(t){var e=window.getComputedStyle(t);t.style.color=e.color},s=function(t){var e=window.getComputedStyle(t);t.style.width=e.width,t.style.height=e.height},d=function(t,e){void 0===e&&(e=["b","h1","h2","h3","h4","h5","h6","i","mark","p","small","strong"]);for(var n,r=i(t.querySelectorAll(e));!(n=r()).done;){var o=n.value;o.style.fontFamily=window.getComputedStyle(o).fontFamily,o.style.fontSize=window.getComputedStyle(o).fontSize,o.style.fontWeight=window.getComputedStyle(o).fontWeight,o.style.width=window.getComputedStyle(o).width}},v=function(t){return"hide-when-downloading"!==t.className},y=function(t,o,v,y){void 0===y&&(y="png");try{var g=function(){!function(t){for(var e,n=i(t.querySelectorAll([".remove-when-downloading"]));!(e=n()).done;){var r=e.value;r.style.display=r.getAttribute("original_display")}}(t),n.saveAs(p,function(t){if(t.printDate){var e=(new Date).toDateString();return t.filename+" ("+e+")"}return t.filename||"Image"}(m)+"."+y)},m=function(t){return r({},f,t)}(o||{}),p=null;(function(t,e){void 0===e&&(e=!1);var n=t.querySelectorAll("svg");!function(t){d(t,[".fixed-text"])}(t),e&&d(t);for(var r,o=i(n);!(r=o()).done;){var u=r.value;h(u),s(u)}})(t,m.forceFixText),function(t){for(var e,n=i(t.querySelectorAll([".remove-when-downloading"]));!(e=n()).done;){var r=e.value;r.setAttribute("original_display",window.getComputedStyle(r).display),r.style.display="none"}}(t);var w=function(t,e){try{var n=Promise.resolve(v()).then(function(t){p=t})}catch(t){return e()}return n&&n.then?n.then(void 0,e):n}(0,function(){return Promise.resolve(function(t){try{var n=t.querySelectorAll("svg"),r=[],o=function(t,e,n){if("function"==typeof t[u]){var r,o,i,f=t[u]();if(function t(n){try{for(;!(r=f.next()).done;)if((n=e(r.value))&&n.then){if(!c(n))return void n.then(t,i||(i=a.bind(null,o=new l,2)));n=n.v}o?a(o,1,n):o=n}catch(t){a(o||(o=new l),2,t)}}(),f.return){var h=function(t){try{r.done||f.return()}catch(t){}return t};if(o&&o.then)return o.then(h,function(t){throw h(t)});h()}return o}if(!("length"in t))throw new TypeError("Object is not iterable");for(var s=[],d=0;d<t.length;d++)s.push(t[d]);return function(t,e,n){var r,o,i=-1;return function n(u){try{for(;++i<t.length;)if((u=e(i))&&u.then){if(!c(u))return void u.then(n,o||(o=a.bind(null,r=new l,2)));u=u.v}r?a(r,1,u):r=u}catch(t){a(r||(r=new l),2,t)}}(),r}(s,function(t){return e(s[t])})}(n,function(t){function n(){u.dataset.icon=o,u.width=t.clientWidth,u.height=t.clientHeight,t.replaceWith(u)}var o=t.getAttribute("data-icon"),i=r.find(function(t){return t.dataIcon===o}),u=document.createElement("img"),a=function(){if(!i)return Promise.resolve(e.svgAsPngUri(t,"icon.png")).then(function(t){u.src=t,r.push({dataIcon:o,uri:t})});u.src=i.uri}();return a&&a.then?a.then(n):n()});return Promise.resolve(o&&o.then?o.then(function(){}):void 0)}catch(t){return Promise.reject(t)}}(t)).then(function(){return Promise.resolve(v()).then(function(){return Promise.resolve(v()).then(function(t){p=t})})})});return Promise.resolve(w&&w.then?w.then(g):g())}catch(t){return Promise.reject(t)}},g=function(t,e,n){void 0===n&&(n="png");var o=e.backgroundColor,i=e.quality,u=e.pixelRatio,a=e.style,l=r({},function(t,e){if(e.width&&e.height)return{width:e.width,height:e.height};var n=window.getComputedStyle(t),r=n.height;return{width:Number.parseInt(n.width.replace("px",""),10)+4,height:Number.parseInt(r.replace("px",""),10)+4}}(t,e),{pixelRatio:1});return a&&(l=r({},l,{style:a})),o&&(l=r({},l,{backgroundColor:o})),u&&u>0&&(l=r({},l,{pixelRatio:u})),i&&n.includes("jpeg")&&(l=r({},l,{quality:i>=0&&i<=1?i:1})),l||{}},m=function(e,n,o){void 0===n&&(n={}),void 0===o&&(o={});try{return Promise.resolve(y(e,n,function(){return t.toPng(e,r({filter:v},g(e,o,"png")))},"png")).then(function(){})}catch(t){return Promise.reject(t)}};exports.downloadDOM=function(t,e,n){void 0===e&&(e="Image"),void 0===n&&(n=!1);try{return Promise.resolve(m(t,{forceFixText:n,filename:e})).then(function(){})}catch(t){return Promise.reject(t)}},exports.saveAsJpeg=function(e,n,o){void 0===n&&(n={}),void 0===o&&(o={});try{return Promise.resolve(y(e,n,function(){return t.toJpeg(e,r({filter:v},g(e,o,"jpeg")))},"jpeg")).then(function(){})}catch(t){return Promise.reject(t)}},exports.saveAsPng=m;
//# sourceMappingURL=index.js.map
