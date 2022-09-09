var $=Object.defineProperty;var u=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var L=(o,t,e)=>t in o?$(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,v=(o,t)=>{for(var e in t||(t={}))E.call(t,e)&&L(o,e,t[e]);if(u)for(var e of u(t))j.call(t,e)&&L(o,e,t[e]);return o};var y=(o,t)=>{var e={};for(var a in o)E.call(o,a)&&t.indexOf(a)<0&&(e[a]=o[a]);if(o!=null&&u)for(var a of u(o))t.indexOf(a)<0&&j.call(o,a)&&(e[a]=o[a]);return e};import{p as A,_ as x,a1 as O,e as r,b as Y,ag as H,aj as R,h as V,ak as N,al as q,am as K,F as C,an as M,R as B}from"./calendar.bb17f51b.js";import{R as m,S as k,H as G,B as J}from"./docs-page.062d04c8.js";import{_ as f}from"./canvas.83214122.js";import{N as Q}from"./faker.edf269b7.js";import"./lodash.49e6853f.js";const Z=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function e(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerpolicy&&(n.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?n.credentials="include":i.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(i){if(i.ep)return;i.ep=!0;const n=e(i);fetch(i.href,n)}};Z();const tt=()=>{const[o,t]=A(""),e=x(null),a=O(i=>{const h=i,{value:n,autoFocus:s=!0,className:l,onEnter:c,onEsc:p,onKeyDown:d}=h,g=y(h,["value","autoFocus","className","onEnter","onEsc","onKeyDown"]);return r("input",v({type:"text",value:n,ref:e,placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9",autoFocus:s,className:Y("border p-1 focus-visible:outline-none",l),onInput:w=>{t(w.target.value)},onKeyDown:w=>{f("enter")(w)?c==null||c(w):f("esc")(w)&&(p==null||p(w)),d==null||d(w)}},g))},[]);return{value:o,setValue:t,inputRef:e,Input:a}},et=()=>{const[o,t]=A(""),e=x(null),a=O(i=>{const h=i,{value:n,autoFocus:s=!0,className:l,onEnter:c,onEsc:p,onKeyDown:d}=h,g=y(h,["value","autoFocus","className","onEnter","onEsc","onKeyDown"]);return r("textarea",v({type:"text",value:n,placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9",ref:e,autoFocus:s,className:Y("resize-none border p-1 focus-visible:outline-none",l),onInput:w=>{t(w.target.value)},onKeyDown:w=>{f("enter")(w)?c==null||c(w):f("esc")(w)&&(p==null||p(w)),d==null||d(w)}},g))},[]);return{value:o,setValue:t,inputRef:e,TextArea:a}},rt=o=>{const t={},e=[],a=[];return new Array(o).fill(1).map((i,n)=>{const s=H(),l={id:s,index:n+1,content:Q.lorem.sentences()};a.push(l),e.push(s),t[s]=l}),{idList:e,dataList:a,dataMap:t}},ot=100,{dataList:b}=rt(6),at=()=>{const[o,t]=A(b.length),e=x(null),a=x(null),{width:i}=R(e),{width:n}=R(a);V(()=>{const l=a==null?void 0:a.current,c=e.current;if(!l||!c)return;const p=c.clientWidth,d=window.getComputedStyle(l),g=parseInt(d.paddingLeft,10),h=parseInt(d.paddingRight,10),_=l.clientWidth-g-h-ot;if(p<_){t(b.length);return}let I=0,X=0;Array.from(c.children).reverse().find(U=>(I++,X+=U.clientWidth,p-X<_)),t(Math.max(b.length-I,1))},[o,i,n]);const s=b.slice(0,o);return r("div",{className:"relative mt-4 w-4/5 border p-2",ref:a,children:[r("div",{className:"flex ",children:[s.map(l=>r("div",{className:"mr-1 max-w-[160px] overflow-hidden text-ellipsis whitespace-nowrap border",children:l.content},l.id)),o!==b.length&&r("div",{className:"whitespace-nowrap",children:[b.length-o,"\u66F4\u591A"]})]}),r("div",{className:"absolute mt-4 flex opacity-0",ref:e,children:b.map(l=>r("div",{className:"mr-1 max-w-[160px] overflow-hidden text-ellipsis whitespace-nowrap border",children:l.content},l.id))})]})},z=()=>r("div",{children:[r("h2",{className:"mb-2",children:"\u81EA\u52A8\u5BBD\u5EA6 input"}),r(T,{}),r("h2",{className:"my-2",children:"\u81EA\u52A8\u5BBD\u5EA6\u548C\u9AD8\u5EA6\u7684 textarea"}),r(D,{className:"w-[200px]"}),r(at,{})]}),T=()=>{const{Input:o,value:t}=tt();return r("div",{className:"relative inline-block min-w-[100px] ",children:[r("span",{className:"inline-block h-full w-full whitespace-pre-wrap break-all border border-transparent p-1 opacity-0",children:[t,"\xA0"]}),r(o,{value:t,className:"absolute left-0 top-0 h-full w-full"})]})},D=({className:o})=>{const{TextArea:t,value:e}=et();return r("div",{className:Y("relative inline-block border",o),children:[r("span",{className:"inline-block h-full w-full whitespace-pre-wrap break-all p-1 opacity-0",children:[e,"\xA0"]}),r(t,{value:e,className:"absolute left-0 top-0 h-full w-full break-all border-none bg-transparent"})]})};var ft=Object.freeze(Object.defineProperty({__proto__:null,AutoWidthInput:T,AutoWidthHeightInput:D,default:z},Symbol.toStringTag,{value:"Module"}));const it="modulepreload",F={},nt="/liushang/",S=function(t,e){return!e||e.length===0?t():Promise.all(e.map(a=>{if(a=`${nt}${a}`,a in F)return;F[a]=!0;const i=a.endsWith(".css"),n=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${n}`))return;const s=document.createElement("link");if(s.rel=i?"stylesheet":it,i||(s.as="script",s.crossOrigin=""),s.href=a,document.head.appendChild(s),i)return new Promise((l,c)=>{s.addEventListener("load",l),s.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${a}`)))})})).then(()=>t())},st=N(()=>S(()=>import("./swagger.2c06d682.js"),["assets/swagger.2c06d682.js","assets/swagger.82dd7edd.css","assets/docs-page.062d04c8.js","assets/docs-page.2793a279.css","assets/calendar.bb17f51b.js","assets/lodash.49e6853f.js","assets/pdf.51108673.js","assets/pdf.b64e38d4.css","assets/canvas.83214122.js","assets/canvas.59a2f78f.css"])),lt=N(()=>S(()=>import("./docs-page.062d04c8.js").then(function(o){return o.i}),["assets/docs-page.062d04c8.js","assets/docs-page.2793a279.css","assets/calendar.bb17f51b.js","assets/lodash.49e6853f.js"])),wt=N(()=>S(()=>import("./index.7e6c9ea3.js"),["assets/index.7e6c9ea3.js","assets/calendar.bb17f51b.js","assets/lodash.49e6853f.js","assets/docs-page.062d04c8.js","assets/docs-page.2793a279.css","assets/canvas.83214122.js","assets/canvas.59a2f78f.css","assets/faker.edf269b7.js"])),ct=()=>r("div",{className:"fixed top-0 left-0 flex h-full w-full items-center justify-center",children:"Loading..."}),pt=[{path:"/swagger",Component:st},{path:"/note",Component:lt},{path:"/",Component:wt,loading:r(ct,{})}],W=()=>r(k,{children:pt.map(({Component:o,path:t,loading:e})=>r(m,{path:t,render:()=>r(q,{fallback:e!=null?e:r("div",{}),children:r(o,{})})},t))}),dt=()=>"github-pages".includes("github-pages")?r(B.StrictMode,{children:r(C,{store:M,children:r(G,{children:r(k,{children:[r(m,{path:"/auto-input",component:z}),r(m,{path:"/",component:W})]})})})}):r(B.StrictMode,{children:r(C,{store:M,children:r(J,{children:r(k,{children:[r(m,{path:"/auto-input",component:z}),r(m,{path:"/",component:W})]})})})}),P=document.getElementById("root");P&&K(r(dt,{}),P);export{D as A,S as _,ft as a};
