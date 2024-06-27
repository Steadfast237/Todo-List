(()=>{"use strict";var t={365:(t,e,n)=>{n.d(e,{A:()=>s});var r=n(601),a=n.n(r),o=n(314),i=n.n(o)()(a());i.push([t.id,"@import url(https://fonts.googleapis.com/css2?family=Rakkas&display=swap);"]),i.push([t.id,"@import url(https://fonts.googleapis.com/css2?family=Vollkorn:ital,wght@0,400..900;1,400..900&display=swap);"]),i.push([t.id,"* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  height: 100vh;\n  font-family: 'Vollkorn', serif;\n  font-optical-sizing: auto;\n  font-weight: 400;\n  font-style: normal;\n}\n\n.container {\n  max-width: 1200px;\n  height: 100%;\n  margin: 0 auto;\n\n  display: flex;\n  flex-direction: column;\n  row-gap: 8px;\n}\n\n.header {\n  outline: 1px solid;\n\n  h1 {\n    font-family: 'Rakkas', serif;\n    font-size: 4rem;\n    font-weight: 400;\n  }\n}\n\n.main {\n  flex-grow: 1;\n  display: grid;\n  grid-template-columns: 240px auto;\n  column-gap: 32px;\n\n  ul {\n    list-style-type: none;\n    margin-bottom: 16px;\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n  }\n\n  button {\n    width: 100%;\n    font-size: 100%;\n    font-family: inherit;\n    font-weight: 700;\n    border: 0;\n    background-color: inherit;\n    cursor: pointer;\n    padding: 8px;\n    display: flex;\n    column-gap: 8px;\n  }\n\n  input {\n    border: 0;\n    font-size: 100%;\n    font-weight: 700;\n    font-family: inherit;\n    width: 100%;\n  }\n\n  input:read-only {\n    outline: 0;\n    background-color: inherit;\n  }\n\n  input:focus {\n    width: 100% !important;\n  }\n\n  form {\n    input {\n      padding: 4px 8px;\n      margin-bottom: 16px;\n      outline: 1px solid;\n    }\n\n    div.form-actions {\n      display: flex;\n      gap: 8px;\n\n      button {\n        outline: 1px solid;\n        justify-content: center;\n      }\n    }\n  }\n\n  .hidden {\n    display: none;\n  }\n\n  aside {\n    grid-column: 1/2;\n    padding: 8px;\n    outline: 1px solid;\n    display: grid;\n    grid-template-rows: auto 1fr;\n    row-gap: 32px;\n\n    .active {\n      background-color: gray;\n      font-weight: 900;\n    }\n\n    ul.default-projects {\n      li {\n        button {\n          text-align: left;\n        }\n      }\n    }\n\n    .dynamic-projects-container {\n      input {\n        width: 100%;\n      }\n\n      ul.dynamic-projects {\n        li button i:last-child {\n          margin-left: auto;\n        }\n      }\n\n      ul + button {\n        margin-bottom: 16px;\n      }\n    }\n  }\n\n  .content {\n    grid-column: 2/3;\n    padding: 8px;\n    outline: 1px solid;\n\n    h2 {\n      font-size: 2rem;\n      font-weight: 900;\n      text-transform: capitalize;\n    }\n\n    ul {\n      li {\n        button {\n          align-items: center;\n        }\n      }\n    }\n\n    form {\n      input[type='text'] {\n        width: 100%;\n      }\n    }\n  }\n}\n\n.footer {\n  outline: 1px solid;\n  padding: 8px;\n  text-align: center;\n}\n",""]);const s=i},314:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,a,o){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var u=0;u<t.length;u++){var d=[].concat(t[u]);r&&i[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),e.push(d))}},e}},601:t=>{t.exports=function(t){return t[1]}},72:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var o={},i=[],s=0;s<t.length;s++){var c=t[s],u=r.base?c[0]+r.base:c[0],d=o[u]||0,l="".concat(u," ").concat(d);o[u]=d+1;var h=n(l),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==h)e[h].references++,e[h].updater(m);else{var f=a(m,r);r.byIndex=s,e.splice(s,0,{identifier:l,updater:f,references:1})}i.push(l)}return i}function a(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,a){var o=r(t=t||[],a=a||{});return function(t){t=t||[];for(var i=0;i<o.length;i++){var s=n(o[i]);e[s].references--}for(var c=r(t,a),u=0;u<o.length;u++){var d=n(o[u]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}o=c}}},659:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},56:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},825:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},113:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={id:r,exports:{}};return t[r](o,o.exports,n),o.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0;const r=class{name=void 0;taskList=[];constructor(t){this.name=t}get name(){return this.name}set name(t){this.name=t}get taskList(){return this.taskList}addTask=t=>{this.taskList.push(t)};getTask=t=>this.taskList[t];updateTask=(t,e,n)=>{this.taskList[t][e]=n};deleteTask(t){this.taskList=this.taskList.filter(((e,n)=>n!==t))}},a=new class{#t=[new r("inbox"),new r("today"),new r("week")];#e=void 0;constructor(){this.#e=this.#t[0]}get activeProject(){return this.#e}set activeProject(t){this.#e=this.#t[t]}get projectList(){return this.#t}addProject=t=>{this.#t.push(t)};getProject=t=>this.#t[t];updateProject=(t,e,n)=>{this.#t[t][e]=n};deleteProject=t=>{this.#t=this.#t.filter(((e,n)=>n!==t))}},o={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function i(t){return(e={})=>{const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const s={date:i({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:i({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:i({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},c={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function u(t){return(e,n)=>{let r;if("formatting"===(n?.context?String(n.context):"standalone")&&t.formattingValues){const e=t.defaultFormattingWidth||t.defaultWidth,a=n?.width?String(n.width):e;r=t.formattingValues[a]||t.formattingValues[e]}else{const e=t.defaultWidth,a=n?.width?String(n.width):t.defaultWidth;r=t.values[a]||t.values[e]}return r[t.argumentCallback?t.argumentCallback(e):e]}}const d={ordinalNumber:(t,e)=>{const n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:u({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:u({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:t=>t-1}),month:u({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:u({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:u({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};function l(t){return(e,n={})=>{const r=n.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],o=e.match(a);if(!o)return null;const i=o[0],s=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],c=Array.isArray(s)?function(t,e){for(let e=0;e<t.length;e++)if(t[e].test(i))return e}(s):function(t,e){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e)&&t[e].test(i))return e}(s);let u;return u=t.valueCallback?t.valueCallback(c):c,u=n.valueCallback?n.valueCallback(u):u,{value:u,rest:e.slice(i.length)}}}const h={ordinalNumber:(m={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:t=>parseInt(t,10)},(t,e={})=>{const n=t.match(m.matchPattern);if(!n)return null;const r=n[0],a=t.match(m.parsePattern);if(!a)return null;let o=m.valueCallback?m.valueCallback(a[0]):a[0];return o=e.valueCallback?e.valueCallback(o):o,{value:o,rest:t.slice(r.length)}}),era:l({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:l({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:t=>t+1}),month:l({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:l({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:l({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})};var m;const f={code:"en-US",formatDistance:(t,e,n)=>{let r;const a=o[t];return r="string"==typeof a?a:1===e?a.one:a.other.replace("{{count}}",e.toString()),n?.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:s,formatRelative:(t,e,n,r)=>c[t],localize:d,match:h,options:{weekStartsOn:0,firstWeekContainsDate:1}};let g={};function p(){return g}Math.pow(10,8);const w=6048e5,y=864e5;function v(t){const e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new t.constructor(+t):"number"==typeof t||"[object Number]"===e||"string"==typeof t||"[object String]"===e?new Date(t):new Date(NaN)}function b(t){const e=v(t);return e.setHours(0,0,0,0),e}function P(t){const e=v(t),n=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return n.setUTCFullYear(e.getFullYear()),+t-+n}function k(t,e){return t instanceof Date?new t.constructor(e):new Date(e)}function x(t){const e=v(t);return function(t,e){const n=b(t),r=b(e),a=+n-P(n),o=+r-P(r);return Math.round((a-o)/y)}(e,function(t){const e=v(t),n=k(t,0);return n.setFullYear(e.getFullYear(),0,1),n.setHours(0,0,0,0),n}(e))+1}function j(t,e){const n=p(),r=e?.weekStartsOn??e?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,a=v(t),o=a.getDay(),i=(o<r?7:0)+o-r;return a.setDate(a.getDate()-i),a.setHours(0,0,0,0),a}function M(t){return j(t,{weekStartsOn:1})}function L(t){const e=v(t),n=e.getFullYear(),r=k(t,0);r.setFullYear(n+1,0,4),r.setHours(0,0,0,0);const a=M(r),o=k(t,0);o.setFullYear(n,0,4),o.setHours(0,0,0,0);const i=M(o);return e.getTime()>=a.getTime()?n+1:e.getTime()>=i.getTime()?n:n-1}function T(t){const e=v(t),n=+M(e)-+function(t){const e=L(t),n=k(t,0);return n.setFullYear(e,0,4),n.setHours(0,0,0,0),M(n)}(e);return Math.round(n/w)+1}function S(t,e){const n=v(t),r=n.getFullYear(),a=p(),o=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??a.firstWeekContainsDate??a.locale?.options?.firstWeekContainsDate??1,i=k(t,0);i.setFullYear(r+1,0,o),i.setHours(0,0,0,0);const s=j(i,e),c=k(t,0);c.setFullYear(r,0,o),c.setHours(0,0,0,0);const u=j(c,e);return n.getTime()>=s.getTime()?r+1:n.getTime()>=u.getTime()?r:r-1}function N(t,e){const n=v(t),r=+j(n,e)-+function(t,e){const n=p(),r=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??n.firstWeekContainsDate??n.locale?.options?.firstWeekContainsDate??1,a=S(t,e),o=k(t,0);return o.setFullYear(a,0,r),o.setHours(0,0,0,0),j(o,e)}(n,e);return Math.round(r/w)+1}function D(t,e){return(t<0?"-":"")+Math.abs(t).toString().padStart(e,"0")}const E={y(t,e){const n=t.getFullYear(),r=n>0?n:1-n;return D("yy"===e?r%100:r,e.length)},M(t,e){const n=t.getMonth();return"M"===e?String(n+1):D(n+1,2)},d:(t,e)=>D(t.getDate(),e.length),a(t,e){const n=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];default:return"am"===n?"a.m.":"p.m."}},h:(t,e)=>D(t.getHours()%12||12,e.length),H:(t,e)=>D(t.getHours(),e.length),m:(t,e)=>D(t.getMinutes(),e.length),s:(t,e)=>D(t.getSeconds(),e.length),S(t,e){const n=e.length,r=t.getMilliseconds();return D(Math.trunc(r*Math.pow(10,n-3)),e.length)}},C={G:function(t,e,n){const r=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){const e=t.getFullYear(),r=e>0?e:1-e;return n.ordinalNumber(r,{unit:"year"})}return E.y(t,e)},Y:function(t,e,n,r){const a=S(t,r),o=a>0?a:1-a;return"YY"===e?D(o%100,2):"Yo"===e?n.ordinalNumber(o,{unit:"year"}):D(o,e.length)},R:function(t,e){return D(L(t),e.length)},u:function(t,e){return D(t.getFullYear(),e.length)},Q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return D(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return D(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){const r=t.getMonth();switch(e){case"M":case"MM":return E.M(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){const r=t.getMonth();switch(e){case"L":return String(r+1);case"LL":return D(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){const a=N(t,r);return"wo"===e?n.ordinalNumber(a,{unit:"week"}):D(a,e.length)},I:function(t,e,n){const r=T(t);return"Io"===e?n.ordinalNumber(r,{unit:"week"}):D(r,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getDate(),{unit:"date"}):E.d(t,e)},D:function(t,e,n){const r=x(t);return"Do"===e?n.ordinalNumber(r,{unit:"dayOfYear"}):D(r,e.length)},E:function(t,e,n){const r=t.getDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){const a=t.getDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return D(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){const a=t.getDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return D(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){const r=t.getDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return D(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){const r=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){const r=t.getHours();let a;switch(a=12===r?"noon":0===r?"midnight":r/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(t,e,n){const r=t.getHours();let a;switch(a=r>=17?"evening":r>=12?"afternoon":r>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){let e=t.getHours()%12;return 0===e&&(e=12),n.ordinalNumber(e,{unit:"hour"})}return E.h(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getHours(),{unit:"hour"}):E.H(t,e)},K:function(t,e,n){const r=t.getHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):D(r,e.length)},k:function(t,e,n){let r=t.getHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):D(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getMinutes(),{unit:"minute"}):E.m(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getSeconds(),{unit:"second"}):E.s(t,e)},S:function(t,e){return E.S(t,e)},X:function(t,e,n){const r=t.getTimezoneOffset();if(0===r)return"Z";switch(e){case"X":return q(r);case"XXXX":case"XX":return O(r);default:return O(r,":")}},x:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"x":return q(r);case"xxxx":case"xx":return O(r);default:return O(r,":")}},O:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+W(r,":");default:return"GMT"+O(r,":")}},z:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+W(r,":");default:return"GMT"+O(r,":")}},t:function(t,e,n){return D(Math.trunc(t.getTime()/1e3),e.length)},T:function(t,e,n){return D(t.getTime(),e.length)}};function W(t,e=""){const n=t>0?"-":"+",r=Math.abs(t),a=Math.trunc(r/60),o=r%60;return 0===o?n+String(a):n+String(a)+e+D(o,2)}function q(t,e){return t%60==0?(t>0?"-":"+")+D(Math.abs(t)/60,2):O(t,e)}function O(t,e=""){const n=t>0?"-":"+",r=Math.abs(t);return n+D(Math.trunc(r/60),2)+e+D(r%60,2)}const A=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},Y=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},F={p:Y,P:(t,e)=>{const n=t.match(/(P+)(p+)?/)||[],r=n[1],a=n[2];if(!a)return A(t,e);let o;switch(r){case"P":o=e.dateTime({width:"short"});break;case"PP":o=e.dateTime({width:"medium"});break;case"PPP":o=e.dateTime({width:"long"});break;default:o=e.dateTime({width:"full"})}return o.replace("{{date}}",A(r,e)).replace("{{time}}",Y(a,e))}},H=/^D+$/,z=/^Y+$/,I=["D","DD","YY","YYYY"];function Q(t){if(!(e=t,e instanceof Date||"object"==typeof e&&"[object Date]"===Object.prototype.toString.call(e)||"number"==typeof t))return!1;var e;const n=v(t);return!isNaN(Number(n))}const B=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,$=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,G=/^'([^]*?)'?$/,X=/''/g,U=/[a-zA-Z]/;function R(t){const e=t.match(G);return e?e[1].replace(X,"'"):t}const J=class{title=void 0;dueDate=void 0;constructor(t,e){this.title=t,this.dueDate=e}get title(){return this.title}set title(t){this.title=t}get dueDate(){return this.dueDate}set dueDate(t){this.dueDate=t}};function _(){(function(t){let e;try{e=window.localStorage;const t="__storage_test__";return e.setItem(t,t),e.removeItem(t),!0}catch(t){return t instanceof DOMException&&("QuotaExceededError"===t.name||"NS_ERROR_DOM_QUOTA_REACHED"===t.name)&&e&&0!==e.length}})()&&localStorage.setItem("projects",JSON.stringify(a.projectList))}function V(t,e,n){n.classList.toggle("hidden"),t.classList.toggle("hidden"),e.value=""}const K=class{#e=void 0;#n=document.querySelector(".content h2");#r=document.querySelector(".task-list");#a=document.querySelector(".content form");#o=document.querySelector(".content .form-container");constructor(t){this.#e=t,this.updateProjectName(this.#e),this.updateProjectTaskList(this.#e),this.#a.addEventListener("submit",this.addTaskToProject),this.#o.addEventListener("click",(t=>{"BUTTON"===t.target.tagName&&"button"===t.target.type&&(V(document.querySelector(".content .form-container > button"),this.#a.elements[0],this.#a),this.#a.elements[0].value="")})),this.#r.addEventListener("click",(t=>{this.deleteTaskFromList(t),this.changeTask(t)}))}updateActiveProject=t=>{if(!t)return this.#n.textContent="",this.#r.innerHTML="",void document.querySelector(".content .form-container > button").classList.add("hidden");this.#e=t,this.updateProjectName(this.#e),this.updateProjectTaskList(this.#e)};updateProjectName=t=>{this.#n.textContent="",this.#n.textContent=t.name};updateProjectTaskList=t=>{let e="";t.taskList.forEach(((t,n)=>{e+=`\n        <li>\n          <button data-index=${n}>\n            <input\n              type="text"\n              name="${t.title}"\n              id="${n}"\n              value="${t.title}"\n              readonly\n            />\n\n            <input type="date" value="${t.dueDate}" readonly>\n\n            <i class="las la-trash"></i>\n          </button>\n        </li>`})),this.#r.innerHTML=e};addTaskToProject=t=>{t.preventDefault(),this.#e.addTask(new J(t.target.elements[0].value,function(t,e,n){const r=p(),a=n?.locale??r.locale??f,o=n?.firstWeekContainsDate??n?.locale?.options?.firstWeekContainsDate??r.firstWeekContainsDate??r.locale?.options?.firstWeekContainsDate??1,i=n?.weekStartsOn??n?.locale?.options?.weekStartsOn??r.weekStartsOn??r.locale?.options?.weekStartsOn??0,s=v(t);if(!Q(s))throw new RangeError("Invalid time value");let c=e.match($).map((t=>{const e=t[0];return"p"===e||"P"===e?(0,F[e])(t,a.formatLong):t})).join("").match(B).map((t=>{if("''"===t)return{isToken:!1,value:"'"};const e=t[0];if("'"===e)return{isToken:!1,value:R(t)};if(C[e])return{isToken:!0,value:t};if(e.match(U))throw new RangeError("Format string contains an unescaped latin alphabet character `"+e+"`");return{isToken:!1,value:t}}));a.localize.preprocessor&&(c=a.localize.preprocessor(s,c));const u={firstWeekContainsDate:o,weekStartsOn:i,locale:a};return c.map((r=>{if(!r.isToken)return r.value;const o=r.value;return(!n?.useAdditionalWeekYearTokens&&function(t){return z.test(t)}(o)||!n?.useAdditionalDayOfYearTokens&&function(t){return H.test(t)}(o))&&function(t,e,n){const r=function(t,e,n){const r="Y"===t[0]?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}(t,e,n);if(console.warn(r),I.includes(t))throw new RangeError(r)}(o,e,String(t)),(0,C[o[0]])(s,o,a.localize,u)})).join("")}(Date.now(),"yyyy-MM-dd"))),this.updateProjectTaskList(this.#e),t.target.elements[0].value="",_()};deleteTaskFromList=t=>{"I"===t.target.tagName&&t.target.classList.contains("la-trash")&&(this.#e.deleteTask(Number(t.target.parentElement.dataset.index)),this.updateProjectTaskList(this.#e),_())};changeTask=t=>{if("INPUT"!==t.target.tagName)return;const e=t.target;e.removeAttribute("readonly"),e.addEventListener("keydown",(t=>{"Enter"===t.key&&("text"===e.type&&this.#e.updateTask(Number(e.id),"title",e.value),"date"===e.type&&this.#e.updateTask(Number(e.id),"dueDate",e.value),e.setAttribute("readonly","readonly"),_())}))}},Z=class{#i=void 0;#s=void 0;#a=document.querySelector("aside form");#o=document.querySelector("aside .form-container");#e=document.querySelector(".active");#c=document.querySelector(".default-projects");#u=document.querySelector(".dynamic-projects");constructor(t){this.#i=t,this.#s=new K(this.#i.activeProject),this.updateProjectList(this.#i.projectList),this.#a.addEventListener("submit",this.addProjectToList),this.#o.addEventListener("click",(t=>{"BUTTON"===t.target.tagName&&"button"===t.target.type&&V(document.querySelector("aside .form-container > button"),this.#a.elements[0],this.#a)})),this.#c.addEventListener("click",(t=>{const e=t.target;this.updateActiveProject(t),"BUTTON"!==e.tagName||"1"!==e.dataset.index&&"2"!==e.dataset.index||(document.querySelector(".content .form-container > button").classList.add("hidden"),console.log("logic not yet implemented smile :)"))})),this.#u.addEventListener("click",(t=>{this.updateActiveProject(t),this.deleteProjectFromList(t),this.changeProjectName(t)}))}updateActiveProject=t=>{var e,n,r;"BUTTON"===t.target.tagName&&(this.#i.activeProject=Number(t.target.dataset.index),this.#s.updateActiveProject(this.#i.activeProject),this.#e.classList.remove("active"),this.#e=t.target,this.#e.classList.add("active"),e=document.querySelector(".content .form-container > button"),n=document.querySelector(".content form").elements[0],r=document.querySelector(".content form"),e.classList.remove("hidden"),r.classList.add("hidden"),n.value="")};addProjectToList=t=>{t.preventDefault(),this.#i.addProject(new r(this.#a.elements[0].value)),this.updateProjectList(this.#i.projectList),this.#a.elements[0].value="",_()};updateProjectList=t=>{let e="";t.filter(((t,e)=>e>2)).forEach(((t,n)=>{e+=`\n        <li>\n          <button data-index=${n+3}>\n            <i class="las la-tasks"></i>\n\n            <input\n              type="text"\n              name="${t.name}"\n              id="${n+3}"\n              value="${t.name}"\n              readonly\n            />\n\n            <i class="las la-trash"></i>\n          </button>\n        </li>`})),this.#u.innerHTML=e,function(t){t.forEach((t=>{t.style.width=t.value.length+"ch"}))}(document.querySelectorAll(".dynamic-projects input"))};deleteProjectFromList=t=>{"I"===t.target.tagName&&t.target.classList.contains("la-trash")&&(this.#i.deleteProject(Number(t.target.parentElement.dataset.index)),t.target.parentElement.classList.contains("active")&&this.#s.updateActiveProject(void 0),this.updateProjectList(this.#i.projectList),_())};changeProjectName=t=>{if("INPUT"!==t.target.tagName)return;const e=t.target;e.removeAttribute("readonly"),e.addEventListener("keydown",(t=>{"Enter"===t.key&&(this.#i.updateProject(Number(e.id),"name",e.value),e.parentElement.classList.contains("active")&&this.#s.updateActiveProject(this.#i.activeProject),e.setAttribute("readonly","readonly"),_())}))}};var tt=n(72),et=n.n(tt),nt=n(825),rt=n.n(nt),at=n(659),ot=n.n(at),it=n(56),st=n.n(it),ct=n(540),ut=n.n(ct),dt=n(113),lt=n.n(dt),ht=n(365),mt={};mt.styleTagTransform=lt(),mt.setAttributes=st(),mt.insert=ot().bind(null,"head"),mt.domAPI=rt(),mt.insertStyleElement=ut(),et()(ht.A,mt),ht.A&&ht.A.locals&&ht.A.locals,document.addEventListener("DOMContentLoaded",(()=>{(function(){if(!localStorage.getItem("projects"))return;const t=JSON.parse(localStorage.getItem("projects"));t.filter(((t,e)=>e>2)).forEach((t=>{a.addProject(new r(t.name))})),t.forEach(((t,e)=>{t.taskList.forEach((t=>{a.getProject(e).addTask(new J(t.title,t.dueDate))}))}))})(),new Z(a)}))})();