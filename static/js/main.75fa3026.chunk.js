(this["webpackJsonpsnake-game"]=this["webpackJsonpsnake-game"]||[]).push([[0],{15:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(8),s=n.n(r),o=(n(4),n(2)),u=n(6),i=n(0),l=function(e){var t=e.snakes;return Object(i.jsx)("div",{children:t.map((function(e,t){var n={left:"".concat(e[0],"%"),top:"".concat(e[1],"%")};return Object(i.jsx)("div",{className:"snake-dot",style:n},t)}))})},b=function(e){var t=e.dot,n={left:"".concat(t[0],"%"),top:"".concat(t[1],"%")};return Object(i.jsx)("div",{className:"food-dot",style:n})};var f=function(){return[2*Math.floor((99*Math.random()+1)/2),2*Math.floor((99*Math.random()+1)/2)]},j=function(e){e.onAbort;var t=[[0,0],[2,0]],n=f(),a=Object(c.useState)(t),r=Object(o.a)(a,2),s=r[0],j=r[1],d=Object(c.useState)(n),h=Object(o.a)(d,2),O=h[0],v=h[1],m=Object(c.useState)("RIGHT"),x=Object(o.a)(m,2),p=x[0],k=x[1],g=Object(c.useState)(200),N=Object(o.a)(g,2),w=N[0],y=N[1];!function(e,t){var n=Object(c.useRef)();Object(c.useEffect)((function(){n.current=e}),[e]),Object(c.useEffect)((function(){if(null!==t){var e=setInterval((function(){n.current()}),t);return function(){return clearInterval(e)}}}),[t])}((function(){return E()}),w),Object(c.useEffect)((function(){S(),T(),I()}),[s]),Object(c.useEffect)((function(){var e=function(e){switch((e=e||window.event).keyCode){case 38:k("UP");break;case 40:k("DOWN");break;case 37:k("LEFT");break;case 39:k("RIGHT")}};return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}),[]);var E=function(){var e=Object(u.a)(s),t=e[e.length-1];switch(p){case"RIGHT":t=[t[0]+2,t[1]];break;case"LEFT":t=[t[0]-2,t[1]];break;case"DOWN":t=[t[0],t[1]+2];break;case"UP":t=[t[0],t[1]-2]}e.push(t),e.shift(),j(e)},S=function(){var e=s[s.length-1];(e[0]>=100||e[1]>=100||e[0]<0||e[1]<0)&&G()},T=function(){var e=Object(u.a)(s),t=e[e.length-1];e.pop(),e.forEach((function(e){t[0]===e[0]&&t[1]===e[1]&&G()}))},I=function(){var e=s[s.length-1],t=O;e[0]===t[0]&&e[1]===t[1]&&(v(f),C(),F())},C=function(){var e=Object(u.a)(s);e.unshift([]),j(e)},F=function(){w>10&&y(w-10)},G=function(){alert("Crossed boundary"),j(t),v(n),y(200),k("RIGHT")};return Object(i.jsxs)("div",{className:"game-area",children:[Object(i.jsx)(l,{snakes:s}),Object(i.jsx)(b,{dot:O})]})},d=function(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),n=t[0],a=t[1];return Object(i.jsx)("div",{className:"bg",children:n?Object(i.jsx)(j,{onAbort:function(){return a(!1)}}):Object(i.jsxs)("div",{className:"form-container",children:[Object(i.jsx)("p",{className:"header-font",children:"The Snake Game"}),Object(i.jsxs)("div",{className:"game-rules",children:[Object(i.jsx)("p",{className:"rule-text",children:"1. Use your cursor keys: up, left, right, and down."}),Object(i.jsx)("p",{className:"rule-text",children:"2. Don't run the snake into the wall, or his own tail: you die."}),Object(i.jsx)("p",{className:"rule-text",children:"3. Eat the colored fruit to gain points."}),Object(i.jsx)("p",{className:"rule-text",children:"4. Your will get each point for each fruit taken"}),Object(i.jsx)("p",{className:"rule-text",children:"5. Your score will be shown on the top right of your screen"})]}),Object(i.jsx)("button",{type:"button",className:"btn btn-success start-button",onClick:function(){return a(!0)},children:"Start Game"})]})})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};n(14);s.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(d,{})}),document.getElementById("root")),h()},4:function(e,t,n){}},[[15,1,2]]]);
//# sourceMappingURL=main.75fa3026.chunk.js.map