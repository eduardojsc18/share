import{toJpeg as t,toPng as e}from"html-to-image";import{svgAsPngUri as n}from"save-svg-as-png";import{saveAs as r}from"file-saver";function o(){return(o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function u(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0;return function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=t[Symbol.iterator]()).next.bind(n)}var a=/*#__PURE__*/"undefined"!=typeof Symbol?Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator")):"@@iterator";function l(t,e,n){if(!t.s){if(n instanceof c){if(!n.s)return void(n.o=l.bind(null,t,e));1&e&&(e=n.s),n=n.v}if(n&&n.then)return void n.then(l.bind(null,t,e),l.bind(null,t,2));t.s=e,t.v=n;var r=t.o;r&&r(t)}}var c=/*#__PURE__*/function(){function t(){}return t.prototype.then=function(e,n){var r=new t,o=this.s;if(o){var i=1&o?e:n;if(i){try{l(r,1,i(this.v))}catch(t){l(r,2,t)}return r}return this}return this.o=function(t){try{var o=t.v;1&t.s?l(r,1,e?e(o):o):n?l(r,1,n(o)):l(r,2,o)}catch(t){l(r,2,t)}},r},t}();function f(t){return t instanceof c&&1&t.s}var h={filename:"Image",forceFixText:!1,printDate:!0},d=function(t){var e=window.getComputedStyle(t);t.style.color=e.color},s=function(t){var e=window.getComputedStyle(t);t.style.width=e.width,t.style.height=e.height},v=function(t,e){void 0===e&&(e=["b","h1","h2","h3","h4","h5","h6","i","mark","p","small","strong"]);for(var n,r=u(t.querySelectorAll(e));!(n=r()).done;){var o=n.value;o.style.fontFamily=window.getComputedStyle(o).fontFamily,o.style.fontSize=window.getComputedStyle(o).fontSize,o.style.fontWeight=window.getComputedStyle(o).fontWeight,o.style.width=window.getComputedStyle(o).width}},y=function(t){return"hide-when-downloading"!==t.className},m=function(t,e,i,y){void 0===y&&(y="png");try{var m=function(){!function(t){for(var e,n=u(t.querySelectorAll([".remove-when-downloading"]));!(e=n()).done;){var r=e.value;r.style.display=r.getAttribute("original_display")}}(t),r(g,function(t){if(t.printDate){var e=(new Date).toDateString();return t.filename+" ("+e+")"}return t.filename||"Image"}(p)+"."+y)},p=function(t){return o({},h,t)}(e||{}),g=null;(function(t,e){void 0===e&&(e=!1);var n=t.querySelectorAll("svg");!function(t){v(t,[".fixed-text"])}(t),e&&v(t);for(var r,o=u(n);!(r=o()).done;){var i=r.value;d(i),s(i)}})(t,p.forceFixText),function(t){for(var e,n=u(t.querySelectorAll([".remove-when-downloading"]));!(e=n()).done;){var r=e.value;r.setAttribute("original_display",window.getComputedStyle(r).display),r.style.display="none"}}(t);var w=function(t,e){try{var n=Promise.resolve(i()).then(function(t){g=t})}catch(t){return e()}return n&&n.then?n.then(void 0,e):n}(0,function(){return Promise.resolve(function(t){try{var e=t.querySelectorAll("svg"),r=[],o=function(t,e,n){if("function"==typeof t[a]){var r,o,i,u=t[a]();if(function t(n){try{for(;!(r=u.next()).done;)if((n=e(r.value))&&n.then){if(!f(n))return void n.then(t,i||(i=l.bind(null,o=new c,2)));n=n.v}o?l(o,1,n):o=n}catch(t){l(o||(o=new c),2,t)}}(),u.return){var h=function(t){try{r.done||u.return()}catch(t){}return t};if(o&&o.then)return o.then(h,function(t){throw h(t)});h()}return o}if(!("length"in t))throw new TypeError("Object is not iterable");for(var d=[],s=0;s<t.length;s++)d.push(t[s]);return function(t,e,n){var r,o,i=-1;return function n(u){try{for(;++i<t.length;)if((u=e(i))&&u.then){if(!f(u))return void u.then(n,o||(o=l.bind(null,r=new c,2)));u=u.v}r?l(r,1,u):r=u}catch(t){l(r||(r=new c),2,t)}}(),r}(d,function(t){return e(d[t])})}(e,function(t){function e(){u.dataset.icon=o,u.width=t.clientWidth,u.height=t.clientHeight,t.replaceWith(u)}var o=t.getAttribute("data-icon"),i=r.find(function(t){return t.dataIcon===o}),u=document.createElement("img"),a=function(){if(!i)return Promise.resolve(n(t,"icon.png")).then(function(t){u.src=t,r.push({dataIcon:o,uri:t})});u.src=i.uri}();return a&&a.then?a.then(e):e()});return Promise.resolve(o&&o.then?o.then(function(){}):void 0)}catch(t){return Promise.reject(t)}}(t)).then(function(){return Promise.resolve(i()).then(function(){return Promise.resolve(i()).then(function(t){g=t})})})});return Promise.resolve(w&&w.then?w.then(m):m())}catch(t){return Promise.reject(t)}},p=function(t,e,n){void 0===n&&(n="png");var r=e.backgroundColor,i=e.quality,u=e.pixelRatio,a=e.style,l=o({},function(t,e){if(e.width&&e.height)return{width:e.width,height:e.height};var n=window.getComputedStyle(t),r=n.height;return{width:Number.parseInt(n.width.replace("px",""),10)+4,height:Number.parseInt(r.replace("px",""),10)+4}}(t,e),{pixelRatio:1});return a&&(l=o({},l,{style:a})),r&&(l=o({},l,{backgroundColor:r})),u&&u>0&&(l=o({},l,{pixelRatio:u})),i&&n.includes("jpeg")&&(l=o({},l,{quality:i>=0&&i<=1?i:1})),l||{}},g=function(e,n,r){void 0===n&&(n={}),void 0===r&&(r={});try{return Promise.resolve(m(e,n,function(){return t(e,o({filter:y},p(e,r,"jpeg")))},"jpeg")).then(function(){})}catch(t){return Promise.reject(t)}},w=function(t,n,r){void 0===n&&(n={}),void 0===r&&(r={});try{return Promise.resolve(m(t,n,function(){return e(t,o({filter:y},p(t,r,"png")))},"png")).then(function(){})}catch(t){return Promise.reject(t)}},b=function(t,e,n){void 0===e&&(e="Image"),void 0===n&&(n=!1);try{return Promise.resolve(w(t,{forceFixText:n,filename:e})).then(function(){})}catch(t){return Promise.reject(t)}};export{b as downloadDOM,g as saveAsJpeg,w as saveAsPng};
//# sourceMappingURL=index.modern.js.map