(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{10:function(t,o,e){"use strict";e.r(o);var n=e(3),c=e.n(n),s=e(1),d=(e(8),e(0));const a=t=>{let{goods:o}=t;return Object(d.jsx)("ul",{children:o.map((t=>Object(d.jsx)("li",{"data-cy":"good",style:{color:t.color},children:t.name},t.id)))})};function i(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((t=>t.json()))}const r=()=>{const[t,o]=Object(s.useState)([]),e=t=>{(t=>i().then((o=>o.sort(((t,o)=>t.name.localeCompare(o.name))).slice(0,t))))(t).then(o)},n=t=>{(t=>i().then((o=>o.filter((o=>o.color===t)))))(t).then(o)};return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"Dynamic list of Goods"}),Object(d.jsx)("button",{type:"button","data-cy":"all-button",onClick:()=>{i().then(o)},children:"Load all goods"}),Object(d.jsx)("button",{type:"button","data-cy":"first-five-button",onClick:()=>e(5),children:"Load 5 first goods"}),Object(d.jsx)("button",{type:"button","data-cy":"red-button",onClick:()=>n("red"),children:"Load red goods"}),t.length>0&&Object(d.jsx)(a,{goods:t})]})};c.a.render(Object(d.jsx)(r,{}),document.getElementById("root"))},8:function(t,o,e){}},[[10,1,2]]]);
//# sourceMappingURL=main.f85a2809.chunk.js.map