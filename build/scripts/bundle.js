!function(){var t={1223:function(t,e,n){var r=n(5112),o=n(30),i=n(3070),c=r("unscopables"),u=Array.prototype;null==u[c]&&i.f(u,c,{configurable:!0,value:o(null)}),t.exports=function(t){u[c][t]=!0}},9670:function(t,e,n){var r=n(111);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},1318:function(t,e,n){var r=n(5656),o=n(7466),i=n(1400),c=function(t){return function(e,n,c){var u,a=r(e),f=o(a.length),s=i(c,f);if(t&&n!=n){for(;f>s;)if((u=a[s++])!=u)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===n)return t||s||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},1194:function(t,e,n){var r=n(7293),o=n(5112),i=n(7392),c=o("species");t.exports=function(t){return i>=51||!r((function(){var e=[];return(e.constructor={})[c]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},9207:function(t,e,n){var r=n(9781),o=n(7293),i=n(6656),c=Object.defineProperty,u={},a=function(t){throw t};t.exports=function(t,e){if(i(u,t))return u[t];e||(e={});var n=[][t],f=!!i(e,"ACCESSORS")&&e.ACCESSORS,s=i(e,0)?e[0]:a,l=i(e,1)?e[1]:void 0;return u[t]=!!n&&!o((function(){if(f&&!r)return!0;var t={length:-1};f?c(t,1,{enumerable:!0,get:a}):t[1]=1,n.call(t,s,l)}))}},4326:function(t){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},9920:function(t,e,n){var r=n(6656),o=n(3887),i=n(1236),c=n(3070);t.exports=function(t,e){for(var n=o(e),u=c.f,a=i.f,f=0;f<n.length;f++){var s=n[f];r(t,s)||u(t,s,a(e,s))}}},4964:function(t,e,n){var r=n(5112)("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[r]=!1,"/./"[t](e)}catch(t){}}return!1}},8880:function(t,e,n){var r=n(9781),o=n(3070),i=n(9114);t.exports=r?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},9114:function(t){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},6135:function(t,e,n){"use strict";var r=n(7593),o=n(3070),i=n(9114);t.exports=function(t,e,n){var c=r(e);c in t?o.f(t,c,i(0,n)):t[c]=n}},9781:function(t,e,n){var r=n(7293);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:function(t,e,n){var r=n(7854),o=n(111),i=r.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},8113:function(t,e,n){var r=n(5005);t.exports=r("navigator","userAgent")||""},7392:function(t,e,n){var r,o,i=n(7854),c=n(8113),u=i.process,a=u&&u.versions,f=a&&a.v8;f?o=(r=f.split("."))[0]+r[1]:c&&(!(r=c.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=c.match(/Chrome\/(\d+)/))&&(o=r[1]),t.exports=o&&+o},748:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:function(t,e,n){var r=n(7854),o=n(1236).f,i=n(8880),c=n(1320),u=n(3505),a=n(9920),f=n(4705);t.exports=function(t,e){var n,s,l,p,d,y=t.target,v=t.global,m=t.stat;if(n=v?r:m?r[y]||u(y,{}):(r[y]||{}).prototype)for(s in e){if(p=e[s],l=t.noTargetGet?(d=o(n,s))&&d.value:n[s],!f(v?s:y+(m?".":"#")+s,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;a(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),c(n,s,p,t)}}},7293:function(t){t.exports=function(t){try{return!!t()}catch(t){return!0}}},5005:function(t,e,n){var r=n(857),o=n(7854),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][e]||o[t]&&o[t][e]}},7854:function(t,e,n){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},6656:function(t){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},3501:function(t){t.exports={}},490:function(t,e,n){var r=n(5005);t.exports=r("document","documentElement")},4664:function(t,e,n){var r=n(9781),o=n(7293),i=n(317);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:function(t,e,n){var r=n(7293),o=n(4326),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},2788:function(t,e,n){var r=n(5465),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return o.call(t)}),t.exports=r.inspectSource},9909:function(t,e,n){var r,o,i,c=n(8536),u=n(7854),a=n(111),f=n(8880),s=n(6656),l=n(5465),p=n(6200),d=n(3501),y=u.WeakMap;if(c){var v=l.state||(l.state=new y),m=v.get,g=v.has,h=v.set;r=function(t,e){return e.facade=t,h.call(v,t,e),e},o=function(t){return m.call(v,t)||{}},i=function(t){return g.call(v,t)}}else{var x=p("state");d[x]=!0,r=function(t,e){return e.facade=t,f(t,x,e),e},o=function(t){return s(t,x)?t[x]:{}},i=function(t){return s(t,x)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(e){var n;if(!a(e)||(n=o(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}}},3157:function(t,e,n){var r=n(4326);t.exports=Array.isArray||function(t){return"Array"==r(t)}},4705:function(t,e,n){var r=n(7293),o=/#|\.prototype\./,i=function(t,e){var n=u[c(t)];return n==f||n!=a&&("function"==typeof e?r(e):!!e)},c=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},u=i.data={},a=i.NATIVE="N",f=i.POLYFILL="P";t.exports=i},111:function(t){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},1913:function(t){t.exports=!1},7850:function(t,e,n){var r=n(111),o=n(4326),i=n(5112)("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[i])?!!e:"RegExp"==o(t))}},4310:function(t){t.exports=Math.sign||function(t){return 0==(t=+t)||t!=t?t:t<0?-1:1}},133:function(t,e,n){var r=n(7293);t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},8536:function(t,e,n){var r=n(7854),o=n(2788),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},3929:function(t,e,n){var r=n(7850);t.exports=function(t){if(r(t))throw TypeError("The method doesn't accept regular expressions");return t}},30:function(t,e,n){var r,o=n(9670),i=n(6048),c=n(748),u=n(3501),a=n(490),f=n(317),s=n(6200)("IE_PROTO"),l=function(){},p=function(t){return"<script>"+t+"<\/script>"},d=function(){try{r=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,e;d=r?function(t){t.write(p("")),t.close();var e=t.parentWindow.Object;return t=null,e}(r):((e=f("iframe")).style.display="none",a.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(p("document.F=Object")),t.close(),t.F);for(var n=c.length;n--;)delete d.prototype[c[n]];return d()};u[s]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(l.prototype=o(t),n=new l,l.prototype=null,n[s]=t):n=d(),void 0===e?n:i(n,e)}},6048:function(t,e,n){var r=n(9781),o=n(3070),i=n(9670),c=n(1956);t.exports=r?Object.defineProperties:function(t,e){i(t);for(var n,r=c(e),u=r.length,a=0;u>a;)o.f(t,n=r[a++],e[n]);return t}},3070:function(t,e,n){var r=n(9781),o=n(4664),i=n(9670),c=n(7593),u=Object.defineProperty;e.f=r?u:function(t,e,n){if(i(t),e=c(e,!0),i(n),o)try{return u(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},1236:function(t,e,n){var r=n(9781),o=n(5296),i=n(9114),c=n(5656),u=n(7593),a=n(6656),f=n(4664),s=Object.getOwnPropertyDescriptor;e.f=r?s:function(t,e){if(t=c(t),e=u(e,!0),f)try{return s(t,e)}catch(t){}if(a(t,e))return i(!o.f.call(t,e),t[e])}},8006:function(t,e,n){var r=n(6324),o=n(748).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},5181:function(t,e){e.f=Object.getOwnPropertySymbols},6324:function(t,e,n){var r=n(6656),o=n(5656),i=n(1318).indexOf,c=n(3501);t.exports=function(t,e){var n,u=o(t),a=0,f=[];for(n in u)!r(c,n)&&r(u,n)&&f.push(n);for(;e.length>a;)r(u,n=e[a++])&&(~i(f,n)||f.push(n));return f}},1956:function(t,e,n){var r=n(6324),o=n(748);t.exports=Object.keys||function(t){return r(t,o)}},5296:function(t,e){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,o=r&&!n.call({1:2},1);e.f=o?function(t){var e=r(this,t);return!!e&&e.enumerable}:n},3887:function(t,e,n){var r=n(5005),o=n(8006),i=n(5181),c=n(9670);t.exports=r("Reflect","ownKeys")||function(t){var e=o.f(c(t)),n=i.f;return n?e.concat(n(t)):e}},857:function(t,e,n){var r=n(7854);t.exports=r},1320:function(t,e,n){var r=n(7854),o=n(8880),i=n(6656),c=n(3505),u=n(2788),a=n(9909),f=a.get,s=a.enforce,l=String(String).split("String");(t.exports=function(t,e,n,u){var a,f=!!u&&!!u.unsafe,p=!!u&&!!u.enumerable,d=!!u&&!!u.noTargetGet;"function"==typeof n&&("string"!=typeof e||i(n,"name")||o(n,"name",e),(a=s(n)).source||(a.source=l.join("string"==typeof e?e:""))),t!==r?(f?!d&&t[e]&&(p=!0):delete t[e],p?t[e]=n:o(t,e,n)):p?t[e]=n:c(e,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&f(this).source||u(this)}))},4488:function(t){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},3505:function(t,e,n){var r=n(7854),o=n(8880);t.exports=function(t,e){try{o(r,t,e)}catch(n){r[t]=e}return e}},6200:function(t,e,n){var r=n(2309),o=n(9711),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},5465:function(t,e,n){var r=n(7854),o=n(3505),i="__core-js_shared__",c=r[i]||o(i,{});t.exports=c},2309:function(t,e,n){var r=n(1913),o=n(5465);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.8.1",mode:r?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},8415:function(t,e,n){"use strict";var r=n(9958),o=n(4488);t.exports="".repeat||function(t){var e=String(o(this)),n="",i=r(t);if(i<0||i==1/0)throw RangeError("Wrong number of repetitions");for(;i>0;(i>>>=1)&&(e+=e))1&i&&(n+=e);return n}},863:function(t,e,n){var r=n(4326);t.exports=function(t){if("number"!=typeof t&&"Number"!=r(t))throw TypeError("Incorrect invocation");return+t}},1400:function(t,e,n){var r=n(9958),o=Math.max,i=Math.min;t.exports=function(t,e){var n=r(t);return n<0?o(n+e,0):i(n,e)}},5656:function(t,e,n){var r=n(8361),o=n(4488);t.exports=function(t){return r(o(t))}},9958:function(t){var e=Math.ceil,n=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?n:e)(t)}},7466:function(t,e,n){var r=n(9958),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},7593:function(t,e,n){var r=n(111);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},9711:function(t){var e=0,n=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++e+n).toString(36)}},3307:function(t,e,n){var r=n(133);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},5112:function(t,e,n){var r=n(7854),o=n(2309),i=n(6656),c=n(9711),u=n(133),a=n(3307),f=o("wks"),s=r.Symbol,l=a?s:s&&s.withoutSetter||c;t.exports=function(t){return i(f,t)||(u&&i(s,t)?f[t]=s[t]:f[t]=l("Symbol."+t)),f[t]}},6699:function(t,e,n){"use strict";var r=n(2109),o=n(1318).includes,i=n(1223);r({target:"Array",proto:!0,forced:!n(9207)("indexOf",{ACCESSORS:!0,1:0})},{includes:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),i("includes")},7042:function(t,e,n){"use strict";var r=n(2109),o=n(111),i=n(3157),c=n(1400),u=n(7466),a=n(5656),f=n(6135),s=n(5112),l=n(1194),p=n(9207),d=l("slice"),y=p("slice",{ACCESSORS:!0,0:0,1:2}),v=s("species"),m=[].slice,g=Math.max;r({target:"Array",proto:!0,forced:!d||!y},{slice:function(t,e){var n,r,s,l=a(this),p=u(l.length),d=c(t,p),y=c(void 0===e?p:e,p);if(i(l)&&("function"!=typeof(n=l.constructor)||n!==Array&&!i(n.prototype)?o(n)&&null===(n=n[v])&&(n=void 0):n=void 0,n===Array||void 0===n))return m.call(l,d,y);for(r=new(void 0===n?Array:n)(g(y-d,0)),s=0;d<y;d++,s++)d in l&&f(r,s,l[d]);return r.length=s,r}})},2420:function(t,e,n){n(2109)({target:"Math",stat:!0},{sign:n(4310)})},6977:function(t,e,n){"use strict";var r=n(2109),o=n(9958),i=n(863),c=n(8415),u=n(7293),a=1..toFixed,f=Math.floor,s=function(t,e,n){return 0===e?n:e%2==1?s(t,e-1,n*t):s(t*t,e/2,n)};r({target:"Number",proto:!0,forced:a&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!u((function(){a.call({})}))},{toFixed:function(t){var e,n,r,u,a=i(this),l=o(t),p=[0,0,0,0,0,0],d="",y="0",v=function(t,e){for(var n=-1,r=e;++n<6;)r+=t*p[n],p[n]=r%1e7,r=f(r/1e7)},m=function(t){for(var e=6,n=0;--e>=0;)n+=p[e],p[e]=f(n/t),n=n%t*1e7},g=function(){for(var t=6,e="";--t>=0;)if(""!==e||0===t||0!==p[t]){var n=String(p[t]);e=""===e?n:e+c.call("0",7-n.length)+n}return e};if(l<0||l>20)throw RangeError("Incorrect fraction digits");if(a!=a)return"NaN";if(a<=-1e21||a>=1e21)return String(a);if(a<0&&(d="-",a=-a),a>1e-21)if(n=(e=function(t){for(var e=0,n=t;n>=4096;)e+=12,n/=4096;for(;n>=2;)e+=1,n/=2;return e}(a*s(2,69,1))-69)<0?a*s(2,-e,1):a/s(2,e,1),n*=4503599627370496,(e=52-e)>0){for(v(0,n),r=l;r>=7;)v(1e7,0),r-=7;for(v(s(10,r,1),0),r=e-1;r>=23;)m(1<<23),r-=23;m(1<<r),v(1,1),m(2),y=g()}else v(0,n),v(1<<-e,0),y=g()+c.call("0",l);return l>0?d+((u=y.length)<=l?"0."+c.call("0",l-u)+y:y.slice(0,u-l)+"."+y.slice(u-l)):d+y}})},2023:function(t,e,n){"use strict";var r=n(2109),o=n(3929),i=n(4488);r({target:"String",proto:!0,forced:!n(4964)("includes")},{includes:function(t){return!!~String(i(this)).indexOf(o(t),arguments.length>1?arguments[1]:void 0)}})}},e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={exports:{}};return t[r](o,o.exports,n),o.exports}n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,{a:e}),e},n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){"use strict";function t(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}n(6699),n(7042),n(2420),n(6977),n(2023);var e=document.getElementById("mobile-nav"),r=document.getElementById("body"),o=document.getElementById("backdrop"),i=document.getElementById("navi-toggle"),c=document.getElementById("navbar"),u=document.getElementById("phone-bezel-div"),a=document.getElementById("bg-img-1"),f=document.getElementById("accompany-1"),s=document.getElementById("spacefiller-1"),l=(document.getElementById("bg-img-2"),document.getElementById("accompany-2"),document.getElementById("spacefiller-2"),document.getElementById("bg-img-3"),document.getElementById("accompany-3"),document.getElementById("spacefiller-3"),document.getElementById("bg-img-4")),p=document.getElementById("accompany-4"),d=document.getElementById("spacefiller-4"),y=null,v=null,m=null,g=0,h=0,x=0,b=function(){var t=document.getElementById("navi-toggle-displayed").getBoundingClientRect();y=document.body.getBoundingClientRect(),g=+(40+t.width).toFixed(2),h=+(y.width-g).toFixed(2),e.style.width=h+"px",c.style.transform="translateX(".concat(r.offsetLeft,"px)"),c.previousElementSibling.style.transform="translateX(".concat(r.offsetLeft,"px)"),document.body.style.setProperty("--vw",y.width/100+"px"),document.body.style.setProperty("--side-drawer-width",h+"px"),m=null,v=0;var n=function(){j(),m=requestAnimationFrame(n),v>=10&&(cancelAnimationFrame(m),m=null,v=null,n=null),v++};m=requestAnimationFrame(n)},w=function(t){var e=1e3*t.time,n=Date.now()+e;!function r(){var o=Date.now(),i=n-o;if(i<30)return t.backward?t.run(1):t.run(0),t.onComplete?t.onComplete():null;var c=t.backward?Math.pow(Math.cos(i/e),3):1-Math.pow(Math.cos(i/e),3);t.run(c),requestAnimationFrame(r)}()},S=function(){o.classList.remove("backdrop-display"),r.style.removeProperty("width"),c.style.removeProperty("transform"),c.previousElementSibling.style.removeProperty("transform")},E=null,O=function t(e){var n=e.changedTouches[0].clientX-E,u=Math.sign(n);(u>0&&x>.25||u<0&&x>=.75)&&(i.checked=!0,w({time:.5*(1-x),run:function(t){x=r.offsetLeft/h,r.style.width=t*(r.clientWidth-g)+g+"px",c.style.transform="translateX(".concat(r.offsetLeft,"px)"),c.previousElementSibling.style.transform="translateX(".concat(r.offsetLeft,"px)"),o.style.opacity=1*x}})),(u<0&&x<.75||u>0&&x<=.25)&&(i.checked=!1,w({time:.5*x,run:function(t){x=r.offsetLeft/h,r.style.width=y.width-t*r.offsetLeft+"px",c.style.transform="translateX(".concat(r.offsetLeft,"px)"),c.previousElementSibling.style.transform="translateX(".concat(r.offsetLeft,"px)"),o.style.opacity=1*x},onComplete:S})),E=null,window.removeEventListener("touchmove",P),window.removeEventListener("touchend",t)},P=function(e){var n,u=e.changedTouches[0].clientX-E,a=Math.sign(u),f=Math.abs(u),s=null;if(!(f>h)){if(a>0&&!i.checked&&((n=o.classList,function(e){if(Array.isArray(e))return t(e)}(n)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(n)||function(e,n){if(e){if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).includes("backdrop-display")||o.classList.add("backdrop-display"),x=f/h,s=y.width-f,c.style.transform="translateX(".concat(f,"px)"),c.previousElementSibling.style.transform="translateX(".concat(f,"px)")),a<0&&i.checked){var l=h-f;x=l/h,s=g+f,c.style.transform="translateX(".concat(l,"px)"),c.previousElementSibling.style.transform="translateX(".concat(l,"px)")}(a>0&&!i.checked||a<0&&i.checked)&&(r.style.width=s+"px",o.style.opacity=1*x)}},j=function(){var t=+window.getComputedStyle(u,"::before").getPropertyValue("height").slice(0,-2),e=u.getBoundingClientRect(),n=r.scrollTop,o=e.height-2*t,i=e.width,c=(e.x,r.offsetLeft,e.y+t+n),y=(e.top,e.bottom,e.left,r.offsetLeft,e.right-r.offsetLeft);document.body.style.setProperty("--unit",o/100+"px"),a.style.setProperty("--pos-top",c+.45*o+"px"),a.style.setProperty("--pos-left",y-.5*i+"px"),f.style.setProperty("--pos-top",c+.1*o+"px"),f.style.setProperty("--pos-left",y-.8*i+"px"),s.style.setProperty("--pos-top",c+.7*o+"px"),s.style.setProperty("--pos-left",y-.2*i+"px"),l.style.setProperty("--pos-top",c+.4*o+"px"),l.style.setProperty("--pos-left",y-.65*i+"px"),p.style.setProperty("--pos-top",c+.25*o+"px"),p.style.setProperty("--pos-left",y-.7*i+"px"),d.style.setProperty("--pos-top",c+.75*o+"px"),d.style.setProperty("--pos-left",y-0*i+"px")};r.addEventListener("scroll",(function(){var t=r.scrollTop;c.style.backgroundColor="rgba(254, 205, 26,"+.007*t+")",7e-4*t<=.1&&(c.style.boxShadow="0 0 1rem rgba(0, 0, 0,"+7e-4*t+")")})),i.addEventListener("change",(function(){i.checked?(o.classList.add("backdrop-display"),w({time:.5,run:function(t){x=1-t,r.style.width=t*h+g+"px",c.style.transform="translateX(".concat(r.offsetLeft,"px)"),c.previousElementSibling.style.transform="translateX(".concat(r.offsetLeft,"px)"),o.style.opacity=1*x}})):w({time:.5,run:function(t){x=1-t,r.style.width=t*h+g+"px",c.style.transform="translateX(".concat(r.offsetLeft,"px)"),c.previousElementSibling.style.transform="translateX(".concat(r.offsetLeft,"px)"),o.style.opacity=1*x},backward:!0,onComplete:S})})),window.addEventListener("touchstart",(function(t){E=t.changedTouches[0].clientX,window.addEventListener("touchmove",P),window.addEventListener("touchend",O)}),!1),window.onload=b,window.addEventListener("resize",b)}()}();