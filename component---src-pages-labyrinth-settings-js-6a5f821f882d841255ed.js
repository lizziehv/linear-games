(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"1Mdp":function(t,e,n){n("eM6i"),n("hHhE"),n("2Spj"),n("V+eJ"),n("a1Th"),n("h7Nl"),n("Btvt"),n("91GP"),n("HAE/"),Object.defineProperty(e,"__esModule",{value:!0});var o=n("q1tI");function i(){return(i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}var r=o.createElement("svg",{viewBox:"-2 -5 14 20",height:"100%",width:"100%",style:{position:"absolute",top:0}},o.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"})),s=o.createElement("svg",{height:"100%",width:"100%",viewBox:"-2 -5 17 21",style:{position:"absolute",top:0}},o.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}));function a(t){if(7===t.length)return t;for(var e="#",n=1;n<4;n+=1)e+=t[n]+t[n];return e}function l(t,e,n,o,i){return function(t,e,n,o,i){var r=(t-n)/(e-n);if(0===r)return o;if(1===r)return i;for(var s="#",a=1;a<6;a+=2){var l=parseInt(o.substr(a,2),16),c=parseInt(i.substr(a,2),16),h=Math.round((1-r)*l+r*c).toString(16);1===h.length&&(h="0"+h),s+=h}return s}(t,e,n,a(o),a(i))}var c=function(t){function e(e){t.call(this,e);var n=e.height,o=e.width,i=e.checked;this.t=e.handleDiameter||n-2,this.i=Math.max(o-n,o-(n+this.t)/2),this.o=Math.max(0,(n-this.t)/2),this.state={s:i?this.i:this.o},this.n=0,this.e=0,this.h=this.h.bind(this),this.r=this.r.bind(this),this.a=this.a.bind(this),this.c=this.c.bind(this),this.l=this.l.bind(this),this.u=this.u.bind(this),this.f=this.f.bind(this),this.p=this.p.bind(this),this.b=this.b.bind(this),this.g=this.g.bind(this),this.v=this.v.bind(this),this.w=this.w.bind(this)}return t&&(e.__proto__=t),((e.prototype=Object.create(t&&t.prototype)).constructor=e).prototype.componentDidUpdate=function(t){t.checked!==this.props.checked&&this.setState({s:this.props.checked?this.i:this.o})},e.prototype.k=function(t){this.y.focus(),this.setState({C:t,M:!0,m:Date.now()})},e.prototype.x=function(t){var e=this.state,n=e.C,o=e.s,i=(this.props.checked?this.i:this.o)+t-n;e.R||t===n||this.setState({R:!0});var r=Math.min(this.i,Math.max(this.o,i));r!==o&&this.setState({s:r})},e.prototype.S=function(t){var e=this.state,n=e.s,o=e.R,i=e.m,r=this.props.checked,s=(this.i+this.o)/2,a=Date.now()-i;!o||a<250?this.T(t):r?s<n?this.setState({s:this.i}):this.T(t):n<s?this.setState({s:this.o}):this.T(t),this.setState({R:!1,M:!1}),this.n=Date.now()},e.prototype.h=function(t){t.preventDefault(),"number"==typeof t.button&&0!==t.button||(this.k(t.clientX),window.addEventListener("mousemove",this.r),window.addEventListener("mouseup",this.a))},e.prototype.r=function(t){t.preventDefault(),this.x(t.clientX)},e.prototype.a=function(t){this.S(t),window.removeEventListener("mousemove",this.r),window.removeEventListener("mouseup",this.a)},e.prototype.c=function(t){this.$=null,this.k(t.touches[0].clientX)},e.prototype.l=function(t){this.x(t.touches[0].clientX)},e.prototype.u=function(t){t.preventDefault(),this.S(t)},e.prototype.p=function(t){50<Date.now()-this.n&&(this.T(t),50<Date.now()-this.e&&this.setState({M:!1}))},e.prototype.b=function(){this.e=Date.now()},e.prototype.g=function(){this.setState({M:!0})},e.prototype.v=function(){this.setState({M:!1})},e.prototype.w=function(t){this.y=t},e.prototype.f=function(t){t.preventDefault(),this.y.focus(),this.T(t),this.setState({M:!1})},e.prototype.T=function(t){var e=this.props;(0,e.onChange)(!e.checked,t,e.id)},e.prototype.render=function(){var t=this.props,e=t.disabled,n=t.className,r=t.offColor,s=t.onColor,a=t.offHandleColor,c=t.onHandleColor,h=t.checkedIcon,u=t.uncheckedIcon,p=t.boxShadow,f=t.activeBoxShadow,d=t.height,v=t.width,m=function(t,e){var n={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&-1===e.indexOf(o)&&(n[o]=t[o]);return n}(t,["disabled","className","offColor","onColor","offHandleColor","onHandleColor","checkedIcon","uncheckedIcon","boxShadow","activeBoxShadow","height","width","handleDiameter"]),b=this.state,y=b.s,g=b.R,w=b.M,k={position:"relative",display:"inline-block",textAlign:"left",opacity:e?.5:1,direction:"ltr",borderRadius:d/2,WebkitTransition:"opacity 0.25s",MozTransition:"opacity 0.25s",transition:"opacity 0.25s",touchAction:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none",userSelect:"none"},E={height:d,width:v,margin:Math.max(0,(this.t-d)/2),position:"relative",background:l(y,this.i,this.o,r,s),borderRadius:d/2,cursor:e?"default":"pointer",WebkitTransition:g?null:"background 0.25s",MozTransition:g?null:"background 0.25s",transition:g?null:"background 0.25s"},O={height:d,width:Math.min(1.5*d,v-(this.t+d)/2+1),position:"relative",opacity:(y-this.o)/(this.i-this.o),pointerEvents:"none",WebkitTransition:g?null:"opacity 0.25s",MozTransition:g?null:"opacity 0.25s",transition:g?null:"opacity 0.25s"},x={height:d,width:Math.min(1.5*d,v-(this.t+d)/2+1),position:"absolute",opacity:1-(y-this.o)/(this.i-this.o),right:0,top:0,pointerEvents:"none",WebkitTransition:g?null:"opacity 0.25s",MozTransition:g?null:"opacity 0.25s",transition:g?null:"opacity 0.25s"},S={height:this.t,width:this.t,background:l(y,this.i,this.o,a,c),display:"inline-block",cursor:e?"default":"pointer",borderRadius:"50%",position:"absolute",transform:"translateX("+y+"px)",top:Math.max(0,(d-this.t)/2),outline:0,boxShadow:w?f:p,border:0,WebkitTransition:g?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",MozTransition:g?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",transition:g?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s"};return o.createElement("div",{className:n,style:k},o.createElement("div",{className:"react-switch-bg",style:E,onClick:e?null:this.f,onMouseDown:function(t){return t.preventDefault()}},h&&o.createElement("div",{style:O},h),u&&o.createElement("div",{style:x},u)),o.createElement("div",{className:"react-switch-handle",style:S,onClick:function(t){return t.preventDefault()},onMouseDown:e?null:this.h,onTouchStart:e?null:this.c,onTouchMove:e?null:this.l,onTouchEnd:e?null:this.u,onTouchCancel:e?null:this.v}),o.createElement("input",i({},{type:"checkbox",role:"switch",disabled:e,style:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",width:1}},m,{ref:this.w,onFocus:this.g,onBlur:this.v,onKeyUp:this.b,onChange:this.p})))},e}(o.Component);c.defaultProps={disabled:!1,offColor:"#888",onColor:"#080",offHandleColor:"#fff",onHandleColor:"#fff",uncheckedIcon:r,checkedIcon:s,boxShadow:null,activeBoxShadow:"0 0 2px 3px #3bf",height:28,width:56},e.default=c},"7Q45":function(t,e,n){t.exports=n.p+"static/pop-8569fc12ee46706977c18319936e0e16.png"},"HAE/":function(t,e,n){var o=n("XKFU");o(o.S+o.F*!n("nh4g"),"Object",{defineProperty:n("hswa").f})},h7Nl:function(t,e,n){var o=Date.prototype,i=o.toString,r=o.getTime;new Date(NaN)+""!="Invalid Date"&&n("KroJ")(o,"toString",(function(){var t=r.call(this);return t==t?i.call(this):"Invalid Date"}))},jK1R:function(t,e,n){"use strict";n.r(e);var o=n("q1tI"),i=n.n(o),r=(n("q4sD"),n("blG6"),n("JI6e")),s=n("3Z9Z"),a=n("ohBo"),l=n.n(a),c=function(t){var e=t.handleChange,n=t.checked,o=t.style;return i.a.createElement(l.a,{checked:n,onChange:e,handleDiameter:28,offColor:o.sliderOff,onColor:o.sliderOn,height:40,width:70,className:"react-switch"})},h=n("Wbzz"),u=n("IC3a"),p=n("sNfu");n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("V+eJ"),n("ioFf"),n("91GP");function f(){return(f=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function d(t,e){if(null==t)return{};var n,o,i=function(t,e){if(null==t)return{};var n,o,i={},r=Object.keys(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var v=Object(o.forwardRef)((function(t,e){var n=t.color,o=void 0===n?"currentColor":n,r=t.size,s=void 0===r?24:r,a=d(t,["color","size"]);return i.a.createElement("svg",f({ref:e,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),i.a.createElement("circle",{cx:"12",cy:"12",r:"10"}),i.a.createElement("polyline",{points:"12 6 12 12 16 14"}))}));v.displayName="Clock";var m=v;function b(){return(b=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function y(t,e){if(null==t)return{};var n,o,i=function(t,e){if(null==t)return{};var n,o,i={},r=Object.keys(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var g=Object(o.forwardRef)((function(t,e){var n=t.color,o=void 0===n?"currentColor":n,r=t.size,s=void 0===r?24:r,a=y(t,["color","size"]);return i.a.createElement("svg",b({ref:e,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),i.a.createElement("polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5"}),i.a.createElement("path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"}))}));g.displayName="Volume2";var w=g;e.default=function(t){var e=Object(o.useState)(u.a),a=e[0],l=e[1],f=Object(o.useState)(!0),d=f[0],v=f[1],b=Object(o.useState)(!0),y=b[0],g=b[1],k=function(){window.scrollY<100?l(u.a):window.scrollY<500?l(u.b):l(u.c)};Object(o.useEffect)((function(){return window.addEventListener("scroll",k),function(){window.removeEventListener("scroll",k)}}),[]);var E=function(){return i.a.createElement("img",{src:n("7Q45"),alt:"",className:"pop-up"})},O=a===u.c?"fixed pacman-font":"fixed";return i.a.createElement("div",{className:"settings-page"},i.a.createElement("div",{className:O,style:a===u.c?a.background2:a.background},i.a.createElement("div",{className:"home"},i.a.createElement("a",{href:"https://linear-math-games.herokuapp.com/"},i.a.createElement(p.a,{size:60,style:a.icon}))),i.a.createElement("div",{className:"content-container"},i.a.createElement("h1",{style:a.h1},"MATRIX LABYRINTH"),i.a.createElement("div",{className:"settings-div",style:a.settingsDiv},i.a.createElement("div",{className:"across setting-box"},i.a.createElement(m,{size:60,style:a.icon}),i.a.createElement("h2",{className:"setting-text",style:a.h2},"timer"),i.a.createElement(c,{handleChange:function(){return v((function(t){return!t}))},checked:d,style:a})),i.a.createElement("div",{className:"across setting-box"},i.a.createElement(w,{size:60,style:a.icon}),i.a.createElement("h2",{className:"setting-text",style:a.h2},"sound"),i.a.createElement(c,{handleChange:function(){return g((function(t){return!t}))},checked:y,style:a}))),i.a.createElement(s.a,null,i.a.createElement(r.a,{sm:{span:3,offset:3},xs:{span:10,offset:1}},i.a.createElement("button",{className:"general",style:a.button,onClick:function(t){t.preventDefault(),Object(h.navigate)("/labyrinth/tutorial/",{state:{style:a}})}},"TUTORIAL")),i.a.createElement(r.a,{sm:{span:3,offset:0},xs:{span:10,offset:1}},i.a.createElement("button",{className:"general",style:a.button,onClick:function(t){t.preventDefault(),Object(h.navigate)("/labyrinth/game/",{state:{style:a,timerOn:d,soundOn:y}})}},"START")))),a===u.a&&i.a.createElement(E,null)))}},ohBo:function(t,e,n){t.exports=n("1Mdp")},sNfu:function(t,e,n){"use strict";n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("V+eJ"),n("ioFf"),n("91GP");var o=n("q1tI"),i=n.n(o);function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function s(t,e){if(null==t)return{};var n,o,i=function(t,e){if(null==t)return{};var n,o,i={},r=Object.keys(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var a=Object(o.forwardRef)((function(t,e){var n=t.color,o=void 0===n?"currentColor":n,a=t.size,l=void 0===a?24:a,c=s(t,["color","size"]);return i.a.createElement("svg",r({ref:e,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),i.a.createElement("path",{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),i.a.createElement("polyline",{points:"9 22 9 12 15 12 15 22"}))}));a.displayName="Home",e.a=a}}]);
//# sourceMappingURL=component---src-pages-labyrinth-settings-js-6a5f821f882d841255ed.js.map