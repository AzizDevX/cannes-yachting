import{r as i,j as e,L as n}from"./index-Vt1w37u4.js";import{N as k}from"./footer-DGc9nGWG.js";/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),f=a=>a.replace(/^([A-Z])|[\s-_]+(\w)/g,(s,o,t)=>t?t.toUpperCase():o.toLowerCase()),h=a=>{const s=f(a);return s.charAt(0).toUpperCase()+s.slice(1)},m=(...a)=>a.filter((s,o,t)=>!!s&&s.trim()!==""&&t.indexOf(s)===o).join(" ").trim(),C=a=>{for(const s in a)if(s.startsWith("aria-")||s==="role"||s==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var y={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=i.forwardRef(({color:a="currentColor",size:s=24,strokeWidth:o=2,absoluteStrokeWidth:t,className:l="",children:r,iconNode:u,...d},p)=>i.createElement("svg",{ref:p,...y,width:s,height:s,stroke:a,strokeWidth:t?Number(o)*24/Number(s):o,className:m("lucide",l),...!r&&!C(d)&&{"aria-hidden":"true"},...d},[...u.map(([N,v])=>i.createElement(N,v)),...Array.isArray(r)?r:[r]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c=(a,s)=>{const o=i.forwardRef(({className:t,...l},r)=>i.createElement(w,{ref:r,iconNode:s,className:m(`lucide-${g(h(a))}`,`lucide-${a}`,t),...l}));return o.displayName=h(a),o};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],x=c("bell",A);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],b=c("globe",M);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=[["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 18h16",key:"19g7jn"}],["path",{d:"M4 6h16",key:"1o0s65"}]],_=c("menu",L);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],j=c("user",$);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],E=c("x",z),B=()=>{const[a,s]=i.useState(!1),o=()=>{s(!a)};return e.jsxs("nav",{className:"dashboard-navbar",children:[e.jsx("div",{className:"dashboard-navbar-container",children:e.jsxs("div",{className:"dashboard-navbar-content",children:[e.jsx("div",{className:"dashboard-logo",children:e.jsxs(n,{to:"/",children:[" ",e.jsx("img",{src:k,alt:"Logo",className:"dashboard-logo-image"})]})}),e.jsxs("ul",{className:"dashboard-nav-links",children:[e.jsx("li",{children:e.jsx(n,{to:"/annonces",children:"Annonces"})}),e.jsx("li",{children:e.jsx(n,{to:"/calendrier",children:"Calendrier"})}),e.jsx("li",{children:e.jsx(n,{to:"/reservation",children:"Réservation"})}),e.jsx("li",{children:e.jsx(n,{to:"/aide",children:"Aide"})})]}),e.jsxs("div",{className:"dashboard-right-icons",children:[e.jsx("button",{className:"dashboard-icon-button",title:"Language",children:e.jsx(b,{size:20})}),e.jsx("button",{className:"dashboard-icon-button",title:"Notifications",children:e.jsx(x,{size:20})}),e.jsx(n,{to:"/dashboard/profil",children:e.jsx("button",{className:"dashboard-icon-button",title:"Profile",children:e.jsx(j,{size:20})})})]}),e.jsx("button",{className:"dashboard-mobile-menu-button",onClick:o,children:a?e.jsx(E,{size:24}):e.jsx(_,{size:24})})]})}),e.jsxs("div",{className:`dashboard-mobile-menu ${a?"":"hidden"}`,children:[e.jsxs("ul",{className:"dashboard-mobile-nav-links",children:[e.jsx("li",{children:e.jsx(n,{to:"/annonces",onClick:()=>s(!1),children:"Annonces"})}),e.jsx("li",{children:e.jsx(n,{to:"/calendrier",onClick:()=>s(!1),children:"Calendrier"})}),e.jsx("li",{children:e.jsx(n,{to:"/reservation",onClick:()=>s(!1),children:"Réservation"})}),e.jsx("li",{children:e.jsx(n,{to:"/aide",onClick:()=>s(!1),children:"Aide"})})]}),e.jsx("div",{className:"dashboard-mobile-icons",children:e.jsxs("div",{className:"dashboard-mobile-icons-container",children:[e.jsx("button",{className:"dashboard-icon-button",title:"Language",children:e.jsx(b,{size:20})}),e.jsx("button",{className:"dashboard-icon-button",title:"Notifications",children:e.jsx(x,{size:20})}),e.jsx(n,{to:"/dashboard/profil",children:e.jsx("button",{className:"dashboard-icon-button",title:"Profile",children:e.jsx(j,{size:20})})})]})})]})]})};export{B as N};
