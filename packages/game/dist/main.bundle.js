(()=>{var t={7162:(t,e,r)=>{t.exports=r(5047)},3819:t=>{t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},1176:(t,e,r)=>{var n=r(5052);t.exports=function(t){if(!n(t))throw TypeError(String(t)+" is not an object");return t}},9540:(t,e,r)=>{var n=r(905),o=r(4237),i=r(3231),a=function(t){return function(e,r,a){var c,u=n(e),l=o(u.length),s=i(a,l);if(t&&r!=r){for(;l>s;)if((c=u[s++])!=c)return!0}else for(;l>s;s++)if((t||s in u)&&u[s]===r)return t||s||0;return!t&&-1}};t.exports={includes:a(!0),indexOf:a(!1)}},9996:(t,e,r)=>{var n=r(7636),o=r(9337),i=r(2991),a=r(4237),c=r(7501),u=[].push,l=function(t){var e=1==t,r=2==t,l=3==t,s=4==t,f=6==t,p=7==t,h=5==t||f;return function(d,v,y,g){for(var m,x,w=i(d),b=o(w),E=n(v,y,3),S=a(b.length),O=0,j=g||c,k=e?j(d,S):r||p?j(d,0):void 0;S>O;O++)if((h||O in b)&&(x=E(m=b[O],O,w),t))if(e)k[O]=x;else if(x)switch(t){case 3:return!0;case 5:return m;case 6:return O;case 2:u.call(k,m)}else switch(t){case 4:return!1;case 7:u.call(k,m)}return f?-1:l||s?s:k}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6),filterOut:l(7)}},1460:(t,e,r)=>{var n=r(4229),o=r(95),i=r(6358),a=o("species");t.exports=function(t){return i>=51||!n((function(){var e=[];return(e.constructor={})[a]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},7501:(t,e,r)=>{var n=r(5052),o=r(3718),i=r(95)("species");t.exports=function(t,e){var r;return o(t)&&("function"!=typeof(r=t.constructor)||r!==Array&&!o(r.prototype)?n(r)&&null===(r=r[i])&&(r=void 0):r=void 0),new(void 0===r?Array:r)(0===e?0:e)}},7079:t=>{var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},7081:(t,e,r)=>{var n=r(816),o=r(4826),i=r(7933),a=r(1787);t.exports=function(t,e){for(var r=o(e),c=a.f,u=i.f,l=0;l<r.length;l++){var s=r[l];n(t,s)||c(t,s,u(e,s))}}},5762:(t,e,r)=>{var n=r(7400),o=r(1787),i=r(5358);t.exports=n?function(t,e,r){return o.f(t,e,i(1,r))}:function(t,e,r){return t[e]=r,t}},5358:t=>{t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},7400:(t,e,r)=>{var n=r(4229);t.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},2635:(t,e,r)=>{var n=r(9859),o=r(5052),i=n.document,a=o(i)&&o(i.createElement);t.exports=function(t){return a?i.createElement(t):{}}},8801:(t,e,r)=>{var n=r(7079),o=r(9859);t.exports="process"==n(o.process)},598:(t,e,r)=>{var n=r(1333);t.exports=n("navigator","userAgent")||""},6358:(t,e,r)=>{var n,o,i=r(9859),a=r(598),c=i.process,u=c&&c.versions,l=u&&u.v8;l?o=(n=l.split("."))[0]+n[1]:a&&(!(n=a.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=a.match(/Chrome\/(\d+)/))&&(o=n[1]),t.exports=o&&+o},3837:t=>{t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},3103:(t,e,r)=>{var n=r(9859),o=r(7933).f,i=r(5762),a=r(7487),c=r(2079),u=r(7081),l=r(6541);t.exports=function(t,e){var r,s,f,p,h,d=t.target,v=t.global,y=t.stat;if(r=v?n:y?n[d]||c(d,{}):(n[d]||{}).prototype)for(s in e){if(p=e[s],f=t.noTargetGet?(h=o(r,s))&&h.value:r[s],!l(v?s:d+(y?".":"#")+s,t.forced)&&void 0!==f){if(typeof p==typeof f)continue;u(p,f)}(t.sham||f&&f.sham)&&i(p,"sham",!0),a(r,s,p,t)}}},4229:t=>{t.exports=function(t){try{return!!t()}catch(t){return!0}}},7636:(t,e,r)=>{var n=r(3819);t.exports=function(t,e,r){if(n(t),void 0===e)return t;switch(r){case 0:return function(){return t.call(e)};case 1:return function(r){return t.call(e,r)};case 2:return function(r,n){return t.call(e,r,n)};case 3:return function(r,n,o){return t.call(e,r,n,o)}}return function(){return t.apply(e,arguments)}}},1333:(t,e,r)=>{var n=r(9276),o=r(9859),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?i(n[t])||i(o[t]):n[t]&&n[t][e]||o[t]&&o[t][e]}},9859:(t,e,r)=>{var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof r.g&&r.g)||function(){return this}()||Function("return this")()},816:t=>{var e={}.hasOwnProperty;t.exports=function(t,r){return e.call(t,r)}},5977:t=>{t.exports={}},4394:(t,e,r)=>{var n=r(7400),o=r(4229),i=r(2635);t.exports=!n&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},9337:(t,e,r)=>{var n=r(4229),o=r(7079),i="".split;t.exports=n((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},8511:(t,e,r)=>{var n=r(5353),o=Function.toString;"function"!=typeof n.inspectSource&&(n.inspectSource=function(t){return o.call(t)}),t.exports=n.inspectSource},6407:(t,e,r)=>{var n,o,i,a=r(8694),c=r(9859),u=r(5052),l=r(5762),s=r(816),f=r(5353),p=r(4399),h=r(5977),d=c.WeakMap;if(a){var v=f.state||(f.state=new d),y=v.get,g=v.has,m=v.set;n=function(t,e){return e.facade=t,m.call(v,t,e),e},o=function(t){return y.call(v,t)||{}},i=function(t){return g.call(v,t)}}else{var x=p("state");h[x]=!0,n=function(t,e){return e.facade=t,l(t,x,e),e},o=function(t){return s(t,x)?t[x]:{}},i=function(t){return s(t,x)}}t.exports={set:n,get:o,has:i,enforce:function(t){return i(t)?o(t):n(t,{})},getterFor:function(t){return function(e){var r;if(!u(e)||(r=o(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return r}}}},3718:(t,e,r)=>{var n=r(7079);t.exports=Array.isArray||function(t){return"Array"==n(t)}},6541:(t,e,r)=>{var n=r(4229),o=/#|\.prototype\./,i=function(t,e){var r=c[a(t)];return r==l||r!=u&&("function"==typeof e?n(e):!!e)},a=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=i.data={},u=i.NATIVE="N",l=i.POLYFILL="P";t.exports=i},5052:t=>{t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},4231:t=>{t.exports=!1},3839:(t,e,r)=>{var n=r(8801),o=r(6358),i=r(4229);t.exports=!!Object.getOwnPropertySymbols&&!i((function(){return!Symbol.sham&&(n?38===o:o>37&&o<41)}))},8694:(t,e,r)=>{var n=r(9859),o=r(8511),i=n.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},6596:(t,e,r)=>{var n=r(9859),o=r(1017).trim,i=r(1647),a=n.parseInt,c=/^[+-]?0[Xx]/,u=8!==a(i+"08")||22!==a(i+"0x16");t.exports=u?function(t,e){var r=o(String(t));return a(r,e>>>0||(c.test(r)?16:10))}:a},1787:(t,e,r)=>{var n=r(7400),o=r(4394),i=r(1176),a=r(2066),c=Object.defineProperty;e.f=n?c:function(t,e,r){if(i(t),e=a(e,!0),i(r),o)try{return c(t,e,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[e]=r.value),t}},7933:(t,e,r)=>{var n=r(7400),o=r(9195),i=r(5358),a=r(905),c=r(2066),u=r(816),l=r(4394),s=Object.getOwnPropertyDescriptor;e.f=n?s:function(t,e){if(t=a(t),e=c(e,!0),l)try{return s(t,e)}catch(t){}if(u(t,e))return i(!o.f.call(t,e),t[e])}},8151:(t,e,r)=>{var n=r(140),o=r(3837).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,o)}},894:(t,e)=>{e.f=Object.getOwnPropertySymbols},140:(t,e,r)=>{var n=r(816),o=r(905),i=r(9540).indexOf,a=r(5977);t.exports=function(t,e){var r,c=o(t),u=0,l=[];for(r in c)!n(a,r)&&n(c,r)&&l.push(r);for(;e.length>u;)n(c,r=e[u++])&&(~i(l,r)||l.push(r));return l}},5632:(t,e,r)=>{var n=r(140),o=r(3837);t.exports=Object.keys||function(t){return n(t,o)}},9195:(t,e)=>{"use strict";var r={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,o=n&&!r.call({1:2},1);e.f=o?function(t){var e=n(this,t);return!!e&&e.enumerable}:r},4826:(t,e,r)=>{var n=r(1333),o=r(8151),i=r(894),a=r(1176);t.exports=n("Reflect","ownKeys")||function(t){var e=o.f(a(t)),r=i.f;return r?e.concat(r(t)):e}},9276:(t,e,r)=>{var n=r(9859);t.exports=n},7487:(t,e,r)=>{var n=r(9859),o=r(5762),i=r(816),a=r(2079),c=r(8511),u=r(6407),l=u.get,s=u.enforce,f=String(String).split("String");(t.exports=function(t,e,r,c){var u,l=!!c&&!!c.unsafe,p=!!c&&!!c.enumerable,h=!!c&&!!c.noTargetGet;"function"==typeof r&&("string"!=typeof e||i(r,"name")||o(r,"name",e),(u=s(r)).source||(u.source=f.join("string"==typeof e?e:""))),t!==n?(l?!h&&t[e]&&(p=!0):delete t[e],p?t[e]=r:o(t,e,r)):p?t[e]=r:a(e,r)})(Function.prototype,"toString",(function(){return"function"==typeof this&&l(this).source||c(this)}))},8885:t=>{t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},2079:(t,e,r)=>{var n=r(9859),o=r(5762);t.exports=function(t,e){try{o(n,t,e)}catch(r){n[t]=e}return e}},4399:(t,e,r)=>{var n=r(3036),o=r(1441),i=n("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},5353:(t,e,r)=>{var n=r(9859),o=r(2079),i="__core-js_shared__",a=n[i]||o(i,{});t.exports=a},3036:(t,e,r)=>{var n=r(4231),o=r(5353);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.9.1",mode:n?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},1017:(t,e,r)=>{var n=r(8885),o="["+r(1647)+"]",i=RegExp("^"+o+o+"*"),a=RegExp(o+o+"*$"),c=function(t){return function(e){var r=String(n(e));return 1&t&&(r=r.replace(i,"")),2&t&&(r=r.replace(a,"")),r}};t.exports={start:c(1),end:c(2),trim:c(3)}},3231:(t,e,r)=>{var n=r(6051),o=Math.max,i=Math.min;t.exports=function(t,e){var r=n(t);return r<0?o(r+e,0):i(r,e)}},905:(t,e,r)=>{var n=r(9337),o=r(8885);t.exports=function(t){return n(o(t))}},6051:t=>{var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},4237:(t,e,r)=>{var n=r(6051),o=Math.min;t.exports=function(t){return t>0?o(n(t),9007199254740991):0}},2991:(t,e,r)=>{var n=r(8885);t.exports=function(t){return Object(n(t))}},2066:(t,e,r)=>{var n=r(5052);t.exports=function(t,e){if(!n(t))return t;var r,o;if(e&&"function"==typeof(r=t.toString)&&!n(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!n(o=r.call(t)))return o;if(!e&&"function"==typeof(r=t.toString)&&!n(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},1441:t=>{var e=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++e+r).toString(36)}},6969:(t,e,r)=>{var n=r(3839);t.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},95:(t,e,r)=>{var n=r(9859),o=r(3036),i=r(816),a=r(1441),c=r(3839),u=r(6969),l=o("wks"),s=n.Symbol,f=u?s:s&&s.withoutSetter||a;t.exports=function(t){return i(l,t)&&(c||"string"==typeof l[t])||(c&&i(s,t)?l[t]=s[t]:l[t]=f("Symbol."+t)),l[t]}},1647:t=>{t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},3450:(t,e,r)=>{"use strict";var n=r(3103),o=r(9996).map;n({target:"Array",proto:!0,forced:!r(1460)("map")},{map:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},9120:(t,e,r)=>{var n=r(7487),o=Date.prototype,i="Invalid Date",a="toString",c=o.toString,u=o.getTime;new Date(NaN)+""!=i&&n(o,a,(function(){var t=u.call(this);return t==t?c.call(this):i}))},6936:(t,e,r)=>{var n=r(7400),o=r(1787).f,i=Function.prototype,a=i.toString,c=/^\s*function ([^ (]*)/,u="name";n&&!(u in i)&&o(i,u,{configurable:!0,get:function(){try{return a.call(this).match(c)[1]}catch(t){return""}}})},4769:(t,e,r)=>{var n=r(3103),o=r(2991),i=r(5632);n({target:"Object",stat:!0,forced:r(4229)((function(){i(1)}))},{keys:function(t){return i(o(t))}})},8995:(t,e,r)=>{var n=r(3103),o=r(6596);n({global:!0,forced:parseInt!=o},{parseInt:o})},5047:t=>{var e=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof y?e:y,i=Object.create(o.prototype),a=new L(n||[]);return i._invoke=function(t,e,r){var n=f;return function(o,i){if(n===h)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw i;return _()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=j(a,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var u=s(t,e,r);if("normal"===u.type){if(n=r.done?d:p,u.arg===v)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=d,r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var f="suspendedStart",p="suspendedYield",h="executing",d="completed",v={};function y(){}function g(){}function m(){}var x={};x[i]=function(){return this};var w=Object.getPrototypeOf,b=w&&w(w(C([])));b&&b!==r&&n.call(b,i)&&(x=b);var E=m.prototype=y.prototype=Object.create(x);function S(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function r(o,i,a,c){var u=s(t[o],t,i);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(f).then((function(t){l.value=t,a(l)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function j(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,j(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=s(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function I(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function C(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:_}}function _(){return{value:e,done:!0}}return g.prototype=E.constructor=m,m.constructor=g,g.displayName=u(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,c,"GeneratorFunction")),t.prototype=Object.create(E),t},t.awrap=function(t){return{__await:t}},S(O.prototype),O.prototype[a]=function(){return this},t.AsyncIterator=O,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new O(l(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},S(E),u(E,c,"Generator"),E[i]=function(){return this},E.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=C,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(I),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(u&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),I(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;I(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:C(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=e}catch(t){Function("r","regeneratorRuntime = r")(e)}}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,r),i.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{var t;r.g.importScripts&&(t=r.g.location+"");var e=r.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var n=e.getElementsByTagName("script");n.length&&(t=n[n.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=t})();var n={};(()=>{"use strict";r.r(n),r.d(n,{default:()=>j});const t=require("react");var e=r.n(t);function o(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function i(t){return function(){var e=this,r=arguments;return new Promise((function(n,i){var a=t.apply(e,r);function c(t){o(a,n,i,c,u,"next",t)}function u(t){o(a,n,i,c,u,"throw",t)}c(void 0)}))}}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,o=!1,i=void 0;try{for(var a,c=t[Symbol.iterator]();!(n=(a=c.next()).done)&&(r.push(a.value),!e||r.length!==e);n=!0);}catch(t){o=!0,i=t}finally{try{n||null==c.return||c.return()}finally{if(o)throw i}}return r}}(t,e)||function(t,e){if(t){if("string"==typeof t)return a(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(){return(u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function l(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var s=r(7162),f=r.n(s);r(4769),r(8995),r(3450),r(6936),r(9120);const p=require("styled-components");var h=r.n(p);const d=require("@prifina/hooks"),v=r.p+"b58362f824e7a943215b12c26c1211a2.mp3";var y=h().div.withConfig({displayName:"Container__StyledWrapper",componentId:"wjks8j-0"})(["width:400px;display:flex;justify-content:flex-end;flex-direction:row;"]),g=h().div.withConfig({displayName:"Container__StyledClose",componentId:"wjks8j-1"})(['width:32px;height:32px;opacity:0.3;&:hover{opacity:1;cursor:pointer;}::before,::after{position:absolute;top:6px;content:" ";height:33px;width:2px;background-color:#333;}::before{transform:rotate(45deg);}::after{transform:rotate(-45deg);}']),m=h().div.withConfig({displayName:"Container__StyledBox",componentId:"wjks8j-2"})(["width:400px;height:600px;position:relative;top:0px;border:1px solid;"]),x=h().div.withConfig({displayName:"Container__StyledSquare",componentId:"wjks8j-3"})(["background-color:",";border-right:",";border-top:",";border-bottom:",";width:30px;height:30px;text-align:center;line-height:30px;cursor:pointer;"],(function(t){return 0===t.status?"white":1===t.status?"red":"black"}),(function(t){return 10===t.colIndex?"":"1px solid black"}),(function(t){return 0===t.colIndex||0===t.rowIndex?"":"1px solid black"}),(function(t){return 10===t.rowIndex?"1px solid black":null})),w=h().div.withConfig({displayName:"Container__StyledArea",componentId:"wjks8j-4"})(["width:300px;height:330px;border:1px solid;margin-top:15px;margin-left:50px;"]),b=h().div.withConfig({displayName:"Container__WaitingList",componentId:"wjks8j-5"})(["width:400px;height:500px;overflow-y:scroll;overflow-x:hidden;"]),E=(0,t.forwardRef)((function(t,r){var n=t.children,o=t.game,i=void 0!==o&&o,a=l(t,["children","game"]),c=0;return"X"===n?c=1:"O"===n&&(c=2),e().createElement(x,u({ref:r,status:i?0:c},a),n)})),S="gameWidget",O=function(){var r=(0,d.usePrifina)(),n=r.Prifina,o=r.registerRemoteClient,a=r.onUpdate,u=r.currentUser,l=(r.subscriptionTest,r.unSubscribe,new n({appId:S}));console.log("PRIFINA ",l);for(var s=new Array(11),p=0;p<11;p++)s[p]=new Array(11);s[0]=["","A","B","C","D","E","F","G","H","I","J"];for(var h=1;h<11;h++)for(var x=0;x<11;x++)s[h][x]=0===x?h-1:"";console.log(s);var O=(0,t.useRef)(s),j=(0,t.useRef)([]),k=(0,t.useRef)([]),I=c((0,t.useState)(-1),2),L=I[0],C=I[1],_=c((0,t.useState)(0),2),P=_[0],T=_[1],N=(0,t.useRef)(),A=(0,t.useRef)([]),R=(0,t.useRef)(),F=(0,t.useRef)(0),M=c((0,t.useState)(0),2),G=M[0],W=M[1],D=(0,t.useRef)(0),q=function(t){console.log("UPDATE TEST ",t,Object.keys(t)),t.hasOwnProperty("data")?t.data.hasOwnProperty("Waiting"):(A.current.push(t),T(A.current.length))};(0,t.useEffect)(i(f().mark((function t(){var e;return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return R.current=a(S,q),t.next=3,l.core.queries.getWaitingList();case 3:e=t.sent,console.log("Waiting ",e),A.current=e.data.listWaiting.items,T(A.current.length),C(0);case 8:case"end":return t.stop()}}),t)}))),[]);var B=(0,t.useCallback)((function(t){console.log("CLICK ",t),console.log("CLICK ",t.target.dataset),t.target.style.backgroundColor="black";var e=parseInt(t.target.dataset.rowIndex),r=parseInt(t.target.dataset.colIndex);O.current[e][r]="O",F.current++}),[]),$=(0,t.useCallback)((function(t){var e=parseInt(t.target.dataset.rowIndex),r=parseInt(t.target.dataset.colIndex);"O"==O.current[e][r]?(t.target.style.backgroundColor="red",D.current++,W(D.current)):t.target.style.backgroundColor="gray"}),[]),z=(0,t.useCallback)((function(t){console.log("CLICK ",t.target.dataset);var e=parseInt(t.target.dataset.waitingIndex);console.log("CLIENT ",A.current[e]),o(A.current[e].endpoint,A.current[e].region)}),[]);return console.log("NEW RENDER "),e().createElement(e().Fragment,null,0===P&&e().createElement(b,null,e().createElement("div",{style:{marginTop:"20px",textAlign:"center"}},"No games available..."),e().createElement("div",{style:{height:"100px",width:"400px",textAlign:"center",borderTop:"1px solid"}},"Name: ",e().createElement("input",{id:"player",name:"player"}),e().createElement("button",{style:{marginTop:"10px",marginLeft:"10px"},onClick:i(f().mark((function t(){var e;return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=document.getElementById("player").value,t.next=3,l.core.mutations.addWaiting({name:e,key:"battleship",endpoint:u.endpoint,region:u.region});case 3:C(1);case 4:case"end":return t.stop()}}),t)})))},"New Game"))),0===L&&P>0&&e().createElement(e().Fragment,null,e().createElement(b,null,e().createElement("ul",null,A.current.map((function(t,r){return console.log("WAITING ....",t.name),e().createElement("li",{style:{cursor:"pointer"},key:"waiting-"+r,"data-waiting-index":r,onClick:z},t.name,e().createElement("span",{style:{fontSize:"0.75rem",color:"gray"}}," ","- ",new Date(t.createdAt).toLocaleString()))})))),e().createElement("div",{style:{height:"100px",width:"400px",textAlign:"center",borderTop:"1px solid"}},"Name: ",e().createElement("input",{id:"player",name:"player"}),e().createElement("button",{style:{marginTop:"10px",marginLeft:"10px"},onClick:i(f().mark((function t(){var e;return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=document.getElementById("player").value,t.next=3,l.core.mutations.addWaiting({name:e,key:"battleship",endpoint:u.endpoint,region:u.region});case 3:C(1);case 4:case"end":return t.stop()}}),t)})))},"New Game"))),1===L&&e().createElement(m,null,e().createElement(y,null,e().createElement(g,{onClick:function(){}})),e().createElement(w,null,O.current.map((function(t,r){return e().createElement("div",{key:"grid-row-"+r,style:{width:"100%",display:"flex"}},t.map((function(t,n){return e().createElement(E,{onClick:B,key:"col-"+n,rowIndex:r,colIndex:n,"data-col-index":n,"data-row-index":r,ref:function(t){null!==t&&k.current.push(t)}},t)})))}))),e().createElement("div",{style:{overflow:"hidden",clear:"both"}}),e().createElement("button",{onClick:function(){j.current=s,C(2)}},"Ready"),e().createElement("button",{onClick:function(){clearInterval(N.current)}},"Stop")),2===L&&e().createElement(m,null,e().createElement(w,null,j.current.map((function(t,r){return e().createElement("div",{key:"game-grid-row-"+r,style:{width:"100%",display:"flex"}},t.map((function(t,n){return e().createElement(E,{onClick:$,key:"game-col-"+n,rowIndex:r,colIndex:n,"data-col-index":n,"data-row-index":r,game:!0},t)})))}))),e().createElement("div",{style:{overflow:"hidden",clear:"both"}},e().createElement("div",null,"Hits:",G),e().createElement("div",null,"Total:",F.current)),e().createElement("button",{onClick:function(){console.log("STOP PLAYING...")}},"Stop")),e().createElement("audio",{id:"cannon"},e().createElement("source",{src:v,type:"audio/mpeg"})))};const j=function(t){return e().createElement("div",{className:"App"},e().createElement(O,null))}})();var o=exports;for(var i in n)o[i]=n[i];n.__esModule&&Object.defineProperty(o,"__esModule",{value:!0})})();