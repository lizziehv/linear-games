(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"0vs7":function(A,e,t){A.exports=t.p+"static/error-6ad85371858afc36e9f6a1b3a5bc7419.mp3"},"3Z9Z":function(A,e,t){"use strict";t("8+KV");var r=t("wx14"),V=t("zLVn"),o=t("TSYQ"),n=t.n(o),a=t("q1tI"),s=t.n(a),i=t("vUet"),l=["xl","lg","md","sm","xs"],c=s.a.forwardRef((function(A,e){var t=A.bsPrefix,o=A.className,a=A.noGutters,c=A.as,u=void 0===c?"div":c,f=Object(V.a)(A,["bsPrefix","className","noGutters","as"]),p=Object(i.a)(t,"row"),m=p+"-cols",v=[];return l.forEach((function(A){var e,t=f[A];delete f[A];var r="xs"!==A?"-"+A:"";null!=(e=null!=t&&"object"==typeof t?t.cols:t)&&v.push(""+m+r+"-"+e)})),s.a.createElement(u,Object(r.a)({ref:e},f,{className:n.a.apply(void 0,[o,p,a&&"no-gutters"].concat(v))}))}));c.displayName="Row",c.defaultProps={noGutters:!1},e.a=c},"6Vx4":function(A,e,t){"use strict";var r=t("q1tI"),V=t.n(r),o=t("y91Q"),n=t("k/Jx"),a=t("Cxad");var s=function(A){var e,t;function r(e){var t;(t=A.call(this,e)||this).setPressed=function(A,e){t.setState({pressedR:A,pressedC:e})},t.replacePressed=function(A){var e=t.state,r=e.pressedR,V=e.pressedC;return t.setState((function(e){return{board:e.board.map((function(e,t){return t===r?e.map((function(e,t){return t===V?A:e})):e}))}})),!0},t.multiplyLeft=function(A){var e=t.state,r=e.board,V=e.pressedR,o=e.pressedC;return-1!==V&&-1!==o&&t.replacePressed(Object(n.d)(A,r[V][o]))},t.multiplyRight=function(A){var e=t.state,r=e.board,V=e.pressedR,o=e.pressedC;return-1!==V&&-1!==o&&t.replacePressed(Object(n.d)(r[V][o],A))},t.movePlayerUp=function(){var A=t.state.player,e=A.mpos-2,r=A.mrow;if(e<0&&(e+=4,r-=1),-1===r)a.b.play();else if(t.state.board[r][A.mcol][e]>=2){var V={mrow:r,mcol:A.mcol,mpos:e};t.updatePosition(V,n.c.UP)}},t.movePlayerDown=function(){var A=t.state.player,e=A.mpos+2,r=A.mrow;if(e>3&&(e-=4,r+=1),6===r)a.b.play();else if(t.state.board[r][A.mcol][e]>=2){var V={mrow:r,mcol:A.mcol,mpos:e};t.updatePosition(V,n.c.DOWN)}},t.movePlayerLeft=function(){var A=t.state.player,e=A.mpos-1,r=A.mcol;if((e<0||1===e)&&(e+=2,r-=1),r<0)a.b.play();else if(t.state.board[A.mrow][r][e]>=2){var V={mrow:A.mrow,mcol:r,mpos:e};t.updatePosition(V,n.c.LEFT)}},t.movePlayerRight=function(){var A=t.state.player,e=A.mpos+1,r=A.mcol;if((e>3||2===e)&&(e-=2,r+=1),6===r)a.b.play();else if(t.state.board[A.mrow][r][e]>=2){var V={mrow:A.mrow,mcol:r,mpos:e};t.updatePosition(V,n.c.RIGHT)}},t.updatePosition=function(A,e){var r=A.mrow,V=A.mcol,o=A.mpos;3===t.state.board[r][V][o]?(t.setState((function(t){return{board:t.board.map((function(A,e){return e===r?A.map((function(A,e){return e===V?A.map((function(A,e){return e===o?2:A})):A})):A})),player:A,lastMove:e}})),t.props.newItem()):t.setState({player:A,lastMove:e})},t.renderRow=function(A){var e=t.state,r=e.board,n=e.pressedR,a=e.pressedC,s=e.player,i=e.lastMove,l=s.mrow,c=s.mcol,u=s.mpos;return V.a.createElement("div",{className:"across"},r[A].map((function(e,r){return V.a.createElement(o.a,{matrix:e,pressed:n===A&&a===r,setPressed:t.setPressed,r:A,c:r,player:{mrow:l,mcol:c,mpos:u},theme:t.props.theme,lastMove:i})})))};var r=Object(n.a)(6);return Object(n.e)(r,6),t.state={board:r,pressedR:-1,pressedC:-1,player:{mrow:5,mcol:5,mpos:3},lastMove:n.c.LEFT},t.renderRow=t.renderRow.bind(function(A){if(void 0===A)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return A}(t)),t}t=A,(e=r).prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t;var s=r.prototype;return s.componentDidMount=function(){this.props.gameUpdate()},s.render=function(){for(var A=[],e=0;e<6;e++)A.push(this.renderRow(e));return V.a.createElement("div",null,A)},r}(V.a.Component);e.a=s},"7pWL":function(A,e,t){"use strict";t("rGqo"),t("yt8O"),t("Btvt"),t("RW0V"),t("V+eJ"),t("ioFf"),t("91GP");var r=t("q1tI"),V=t.n(r);function o(){return(o=Object.assign||function(A){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(A[r]=t[r])}return A}).apply(this,arguments)}function n(A,e){if(null==A)return{};var t,r,V=function(A,e){if(null==A)return{};var t,r,V={},o=Object.keys(A);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(V[t]=A[t]);return V}(A,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(A);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(A,t)&&(V[t]=A[t])}return V}var a=Object(r.forwardRef)((function(A,e){var t=A.color,r=void 0===t?"currentColor":t,a=A.size,s=void 0===a?24:a,i=n(A,["color","size"]);return V.a.createElement("svg",o({ref:e,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},i),V.a.createElement("line",{x1:"12",y1:"19",x2:"12",y2:"5"}),V.a.createElement("polyline",{points:"5 12 12 5 19 12"}))}));a.displayName="ArrowUp",e.a=a},"7vrA":function(A,e,t){"use strict";var r=t("wx14"),V=t("zLVn"),o=t("TSYQ"),n=t.n(o),a=t("q1tI"),s=t.n(a),i=t("vUet"),l=s.a.forwardRef((function(A,e){var t=A.bsPrefix,o=A.fluid,a=A.as,l=void 0===a?"div":a,c=A.className,u=Object(V.a)(A,["bsPrefix","fluid","as","className"]),f=Object(i.a)(t,"container"),p="string"==typeof o?"-"+o:"-fluid";return s.a.createElement(l,Object(r.a)({ref:e},u,{className:n()(c,o?""+f+p:f)}))}));l.displayName="Container",l.defaultProps={fluid:!1},e.a=l},Cxad:function(A,e,t){"use strict";t.d(e,"b",(function(){return i})),t.d(e,"a",(function(){return l}));var r=t("qGF0"),V=t.n(r),o=t("0vs7"),n=t.n(o),a=t("uaJC"),s=t.n(a),i=new V.a(n.a,{volume:.3,throttleMs:100}),l=new V.a(s.a,{volume:.3,throttleMs:100})},G5e0:function(A,e,t){"use strict";t("rGqo"),t("yt8O"),t("Btvt"),t("RW0V"),t("V+eJ"),t("ioFf"),t("91GP");var r=t("q1tI"),V=t.n(r);function o(){return(o=Object.assign||function(A){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(A[r]=t[r])}return A}).apply(this,arguments)}function n(A,e){if(null==A)return{};var t,r,V=function(A,e){if(null==A)return{};var t,r,V={},o=Object.keys(A);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(V[t]=A[t]);return V}(A,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(A);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(A,t)&&(V[t]=A[t])}return V}var a=Object(r.forwardRef)((function(A,e){var t=A.color,r=void 0===t?"currentColor":t,a=A.size,s=void 0===a?24:a,i=n(A,["color","size"]);return V.a.createElement("svg",o({ref:e,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},i),V.a.createElement("line",{x1:"19",y1:"12",x2:"5",y2:"12"}),V.a.createElement("polyline",{points:"12 19 5 12 12 5"}))}));a.displayName="ArrowLeft",e.a=a},"HAE/":function(A,e,t){var r=t("XKFU");r(r.S+r.F*!t("nh4g"),"Object",{defineProperty:t("hswa").f})},JI6e:function(A,e,t){"use strict";t("8+KV");var r=t("wx14"),V=t("zLVn"),o=t("TSYQ"),n=t.n(o),a=t("q1tI"),s=t.n(a),i=t("vUet"),l=["xl","lg","md","sm","xs"],c=s.a.forwardRef((function(A,e){var t=A.bsPrefix,o=A.className,a=A.as,c=void 0===a?"div":a,u=Object(V.a)(A,["bsPrefix","className","as"]),f=Object(i.a)(t,"col"),p=[],m=[];return l.forEach((function(A){var e,t,r,V=u[A];if(delete u[A],null!=V&&"object"==typeof V){var o=V.span;e=void 0===o||o,t=V.offset,r=V.order}else e=V;var n="xs"!==A?"-"+A:"";null!=e&&p.push(!0===e?""+f+n:""+f+n+"-"+e),null!=r&&m.push("order"+n+"-"+r),null!=t&&m.push("offset"+n+"-"+t)})),p.length||p.push(f),s.a.createElement(c,Object(r.a)({},u,{ref:e,className:n.a.apply(void 0,[o].concat(p,m))}))}));c.displayName="Col",e.a=c},QA0p:function(A,e,t){"use strict";t("91GP"),t("f3/d"),e.__esModule=!0,e.default=function(A,e){var t=void 0===e?{}:e,r=t.propTypes,o=t.defaultProps,n=t.allowFallback,a=void 0!==n&&n,s=t.displayName,i=void 0===s?A.name||A.displayName:s,l=function(e,t){return A(e,t)};return Object.assign(V.default.forwardRef||!a?V.default.forwardRef(l):function(A){return l(A,null)},{displayName:i,propTypes:r,defaultProps:o})};var r,V=(r=t("q1tI"))&&r.__esModule?r:{default:r}},TSYQ:function(A,e,t){var r;t("LK8F"),function(){"use strict";var t={}.hasOwnProperty;function V(){for(var A=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var o=typeof r;if("string"===o||"number"===o)A.push(r);else if(Array.isArray(r)&&r.length){var n=V.apply(null,r);n&&A.push(n)}else if("object"===o)for(var a in r)t.call(r,a)&&r[a]&&A.push(a)}}return A.join(" ")}A.exports?(V.default=V,A.exports=V):void 0===(r=function(){return V}.apply(e,[]))||(A.exports=r)}()},dSoD:function(A,e,t){"use strict";t("rGqo"),t("yt8O"),t("Btvt"),t("RW0V"),t("V+eJ"),t("ioFf"),t("91GP");var r=t("q1tI"),V=t.n(r);function o(){return(o=Object.assign||function(A){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(A[r]=t[r])}return A}).apply(this,arguments)}function n(A,e){if(null==A)return{};var t,r,V=function(A,e){if(null==A)return{};var t,r,V={},o=Object.keys(A);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(V[t]=A[t]);return V}(A,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(A);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(A,t)&&(V[t]=A[t])}return V}var a=Object(r.forwardRef)((function(A,e){var t=A.color,r=void 0===t?"currentColor":t,a=A.size,s=void 0===a?24:a,i=n(A,["color","size"]);return V.a.createElement("svg",o({ref:e,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},i),V.a.createElement("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),V.a.createElement("polyline",{points:"19 12 12 19 5 12"}))}));a.displayName="ArrowDown",e.a=a},"k/Jx":function(A,e,t){"use strict";t.d(e,"c",(function(){return r})),t.d(e,"b",(function(){return o})),t.d(e,"a",(function(){return n})),t.d(e,"d",(function(){return a})),t.d(e,"e",(function(){return s}));var r={UP:38,DOWN:40,LEFT:37,RIGHT:39},V=function(){var A=Math.floor(21*Math.random());return A<5?0:A<10?1:2},o=function(){var A,e=[0,0,0,0],t=Math.floor(4*Math.random());do{A=Math.floor(4*Math.random())}while(A===t);for(var r=0;r<4;r++)r!==t&&r!==A&&(e[r]=2);do{e[t]=V(),e[A]=V()}while((e[0]*e[3]-e[1]*e[2])%3==0);return e},n=function(A){for(var e=new Array(A),t=0;t<A;t++){for(var r=new Array(A),V=0;V<A;V++)r[V]=t===A-1&&V===A-1?[2,2,2,2]:o();e[t]=r}return e},a=function(A,e){var t=[0,0,0,0];return t[0]=(A[0]*e[0]+A[1]*e[2])%3,t[1]=(A[0]*e[1]+A[1]*e[3])%3,t[2]=(A[2]*e[0]+A[3]*e[2])%3,t[3]=(A[2]*e[1]+A[3]*e[3])%3,t},s=function(A,e){for(var t=0;t<e;t++){var r=void 0;do{r=Math.floor(Math.random()*e)}while(t===e-1&&r===e-1);var V=void 0;do{V=Math.floor(4*Math.random())}while(2!==A[t][r][V]);A[t][r][V]=3}}},lHIJ:function(A,e,t){"use strict";t("rGqo"),t("yt8O"),t("Btvt"),t("RW0V"),t("V+eJ"),t("ioFf"),t("91GP");var r=t("q1tI"),V=t.n(r);function o(){return(o=Object.assign||function(A){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(A[r]=t[r])}return A}).apply(this,arguments)}function n(A,e){if(null==A)return{};var t,r,V=function(A,e){if(null==A)return{};var t,r,V={},o=Object.keys(A);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(V[t]=A[t]);return V}(A,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(A);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(A,t)&&(V[t]=A[t])}return V}var a=Object(r.forwardRef)((function(A,e){var t=A.color,r=void 0===t?"currentColor":t,a=A.size,s=void 0===a?24:a,i=n(A,["color","size"]);return V.a.createElement("svg",o({ref:e,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},i),V.a.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),V.a.createElement("polyline",{points:"12 5 19 12 12 19"}))}));a.displayName="ArrowRight",e.a=a},qGF0:function(A,e,t){"use strict";t("HAE/"),Object.defineProperty(e,"__esModule",{value:!0});var r=function(){var A=this;this.play=function(e){A.validateVolume(e);var t=new Audio(A.file);return t.load(),t.addEventListener("loadeddata",(function(){t.volume=e>=0&&e<=1?e:A.volume,t.play().then((function(){})).catch((function(e){console.log('UIfx says: "had a problem playing file: '+A.file+'"')}))})),A},this.setVolume=function(e){return A.validateVolume(e),A.volume=e,A}};e.default=function A(e,t){!function(A,e){if(!(A instanceof e))throw new TypeError("Cannot call a class as a function")}(this,A),r.call(this);var V,o,n,a=function(A){var e='"Volume" must be an number between 0.0 and 1.0';if(A&&"number"!=typeof A)throw Error(e);if(A<0||A>1)throw Error(e);return A||1},s=a(t&&t.volume),i=function(A){var e='"throttleMs" must be a number greater than zero';if(A&&"number"!=typeof A)throw Error(e);if(A<0)throw Error(e);return A||0}(t&&t.throttleMs);this.file=function(A){var e="uifx-"+function(A){var e=0;if(0===A.length)return e;for(var t=0;t<A.length;t++){e=(e<<5)-e+A.charCodeAt(t),e&=e}return Math.abs(e)}(A),t=document.createElement("audio");return t.id=e,t.src=A,t.preload="auto",document.body.appendChild(t),A}(function(A){if(A)return A;throw Error('Requires valid URI path for "file"')}(e)),this.volume=s,this.throttleMs=i,this.play=i>0?(V=this.play,o=i,n=0,function(){var A=(new Date).getTime();if(!(A-n<o))return n=A,V.apply(void 0,arguments)}):this.play,this.setVolume=this.setVolume,this.validateVolume=a}},uaJC:function(A,e){A.exports="data:audio/mpeg;base64,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zPhYEZAzKmlYkC0TEAASKNNmZ+LAI08OAESB4xwnM/yKsDF0YxAmWehwvVGWAxVgaoiqAZVAaSyCJlUGhoD2lsRgMEDCGDrFFNbz1yCpFbsNy0hAZNXK1i3Xms/ms8NZ4VsO1c9HCtacQGigdssRle0yNyeJqylSoOigUKeOCYl6vvEwnYEAhS+dGVQzDv2I7RU1Jbwm7D8mAYJAoEnkhUuhlxaOYjyunJZdHoERnEQQGLI0GAojgEIjF0FzNI+jseWjJcLB5UjGQDjCkESyDhv2zhw/hy006WR+YWMsM98tIQMYtGw0J16v88KxZY3GKOk2yL5hcQEQPZa6JUBRiMODwCiTzCEBAIJOuu2KzDjUjXpY5ZYBQoVzOQ1SFVsfF/p/Utp5ZRzLWYckGmdokCEAkAQMAgE0VdT/2dMxh4wCCw4OKifqAnKhtHlawoBTCAHbxnUaEIGMIgCzGGvmEBeYoAcea9k+t6anr1Wyqszam+tKdf9W9vdr6bLKmxrYkSXJDiNMfbT+xIGTWNSBVckJGmguFExtUlsWjVVveWuHqeUmZeVtF05Eq3UswioEAAAGwt0N47ewp3ra8n7auFWZJIjsQSGvFEuWhDl9RF1MgOpnMiMEBMaeMQfNI1NncMp5MpoOe1J3JwzBki5AAVaj9ALkwA6zgxh+olT2M7lPIXKeGJyCewty2VU87KZqXxWNTNjPVavYtY/ldzgZdqaSbagCr01VMmEu25rvTP/7smRAD/dPaLgx+jVyAAANIAAAAQAAAaQAAAAgAAA0gAAABNi1VvRqgiytqLxZ8iQGhGGgYmLjDDg0JErPBBJQWVXJ+W9jM1bpakuhmDJY70EyB3ojKKOl02EjUEiJUJPlPlO//+bNARNBaNScXaNXlejTTE0a2YSOtE49VaabH/9aKIEiSqIl/9lBoitMQU1FMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVQ=="},vUet:function(A,e,t){"use strict";t.d(e,"a",(function(){return n}));t("f3/d"),t("wx14"),t("QA0p");var r=t("q1tI"),V=t.n(r),o=V.a.createContext({});o.Consumer,o.Provider;function n(A,e){var t=Object(r.useContext)(o);return A||t[e]||e}},wHH0:function(A,e,t){"use strict";t("rGqo"),t("yt8O"),t("Btvt"),t("RW0V"),t("V+eJ"),t("ioFf"),t("91GP");var r=t("q1tI"),V=t.n(r);function o(){return(o=Object.assign||function(A){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(A[r]=t[r])}return A}).apply(this,arguments)}function n(A,e){if(null==A)return{};var t,r,V=function(A,e){if(null==A)return{};var t,r,V={},o=Object.keys(A);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(V[t]=A[t]);return V}(A,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(A);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(A,t)&&(V[t]=A[t])}return V}var a=Object(r.forwardRef)((function(A,e){var t=A.color,r=void 0===t?"currentColor":t,a=A.size,s=void 0===a?24:a,i=n(A,["color","size"]);return V.a.createElement("svg",o({ref:e,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},i),V.a.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),V.a.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"}))}));a.displayName="X",e.a=a},wx14:function(A,e,t){"use strict";function r(){return(r=Object.assign||function(A){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(A[r]=t[r])}return A}).apply(this,arguments)}t.d(e,"a",(function(){return r}))},y91Q:function(A,e,t){"use strict";var r=t("q1tI"),V=t.n(r),o=t("k/Jx"),n=function(A){var e=A.value,t=A.hasPlayer,r=A.theme,n=A.lastMove,a=null;1===e?a=r.blackField:e>=2&&(a=r.whiteField);return V.a.createElement("div",{className:"field",style:a},3===e&&V.a.createElement("img",{src:r.itemImg,alt:"",className:"icon"}),t&&function(){var A=r.playerImg;if(r.moveImg)switch(n){case o.c.UP:A=r.playerUp;break;case o.c.DOWN:A=r.playerDown;break;case o.c.RIGHT:A=r.playerRight;break;default:A=r.playerImg}return V.a.createElement("img",{src:A,alt:"",className:"icon"})}())};e.a=function(A){var e=A.matrix,t=A.pressed,r=A.setPressed,o=A.r,a=A.c,s=A.player,i=A.theme,l=A.lastMove,c=!e.every((function(A){return A<3})),u=-1!==a&&(s.mrow===o&&s.mcol===a);u&&t&&r(-1,-1);var f=!c&&!u||-1===a?function(){return r(o,a)}:function(){return r(-1,-1)},p=i.square;return c||u?p=i.squareBlocked:t&&-1===a?p=i.pressedControl:t&&(p=i.squarePressed),V.a.createElement("button",{className:"square",style:p,onClick:f},V.a.createElement("div",{className:"across"},V.a.createElement(n,{value:e[0],hasPlayer:u&&0===s.mpos,theme:i,lastMove:l}),V.a.createElement(n,{value:e[1],hasPlayer:u&&1===s.mpos,theme:i,lastMove:l})),V.a.createElement("div",{className:"across"},V.a.createElement(n,{value:e[2],hasPlayer:u&&2===s.mpos,theme:i,lastMove:l}),V.a.createElement(n,{value:e[3],hasPlayer:u&&3===s.mpos,theme:i,lastMove:l})))}},zLVn:function(A,e,t){"use strict";function r(A,e){if(null==A)return{};var t,r,V={},o=Object.keys(A);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(V[t]=A[t]);return V}t.d(e,"a",(function(){return r}))}}]);
//# sourceMappingURL=32839acba38da12fe93c6a2d6a3b8969f20b41f4-24bbef8bce0365b186c9.js.map