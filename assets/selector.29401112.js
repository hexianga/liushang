var S=Object.defineProperty,I=Object.defineProperties;var $=Object.getOwnPropertyDescriptors;var R=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var Y=(r,t,e)=>t in r?S(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,L=(r,t)=>{for(var e in t||(t={}))j.call(t,e)&&Y(r,e,t[e]);if(R)for(var e of R(t))N.call(t,e)&&Y(r,e,t[e]);return r},T=(r,t)=>I(r,$(t));import{r as f,j as m}from"./index.ba99fdd1.js";import{a as X,r as A,g as P}from"./intersection-ratio.15c8905b.js";import{t as B}from"./throttle.d1fd25f5.js";import"./debounce.93a41e2d.js";import"./index.01f4a41d.js";import"./index.563d4b32.js";const J=()=>{const r=f.exports.useRef(null),t=f.exports.useRef(new Map),e=f.exports.useRef({x:0,y:0,scrollTop:0}),D=a=>{a.preventDefault();const s=r.current;if(!s)return;t.current=new Map,e.current={x:a.clientX,y:a.clientY,scrollTop:s.scrollTop};let p={x:a.clientX,y:a.clientY},h=!1;const o=document.createElement("div");o.style.position="fixed",o.style.background="rgba(0, 250, 0, 0.3)";const x=()=>{var E;const n=(E=s.firstElementChild)==null?void 0:E.getBoundingClientRect();if(!n)return;const i=s.querySelectorAll(".sub-node");for(const l of i){const c=l.dataset.uuid;if(!c||t.current.has(c))continue;const u=l.getBoundingClientRect(),C={left:u.left,width:u.width,height:u.height,offsetTop:u.top-n.top,node:l};t.current.set(c,C)}const d={left:parseInt(o.style.left),top:parseInt(o.style.top),width:parseInt(o.style.width),height:parseInt(o.style.height)},v=new Set;for(const[l,c]of t.current){const u=T(L({},c),{top:c.offsetTop+n.top});P(u,d)>0&&v.add(l)}for(const l of i){const c=l.dataset.uuid;!c||(v.has(c)?l.classList.add("selected-node"):l.classList.contains("selected-node")&&l.classList.remove("selected-node"))}},M=B(n=>{h||(h=!0,document.body.appendChild(o)),o.style.width=`${Math.max(Math.abs(n.clientX-e.current.x),1)}px`,o.style.left=`${Math.min(n.clientX,e.current.x)}px`;const i=s.scrollTop-e.current.scrollTop,d=e.current.y-i;o.style.top=`${Math.min(n.clientY,d)}px`,o.style.height=`${Math.abs(n.clientY-d)}px`,X({y:n.clientY,container:s}),p={x:n.clientX,y:n.clientY},x()},60),w=()=>{s.removeEventListener("scroll",b),document.removeEventListener("mousemove",M),document.removeEventListener("mouseup",w),cancelAnimationFrame(A),o.remove()},b=()=>{if(!h)return;const n=s.scrollTop-e.current.scrollTop,i=e.current.y-n;o.style.top=`${Math.min(p.y,i)}px`,o.style.height=`${Math.abs(p.y-i)}px`,x()};s.addEventListener("scroll",b),document.addEventListener("mousemove",M),document.addEventListener("mouseup",w)},y=1e5,g=40;return m.exports.jsx("div",{className:"h-full w-full overflow-auto",ref:r,children:m.exports.jsx("div",{onMouseDown:D,className:"border border-gray-200",style:{height:y},children:new Array(Math.floor(y/g)).fill(1).map((a,s)=>m.exports.jsx("div",{className:"sub-node border-b border-gray-200",style:{height:g},"data-uuid":s+1,children:s+1},s))})})};export{J as default};
