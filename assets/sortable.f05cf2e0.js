var E=Object.defineProperty,b=Object.defineProperties;var M=Object.getOwnPropertyDescriptors;var w=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable;var g=(e,t,s)=>t in e?E(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,l=(e,t)=>{for(var s in t||(t={}))T.call(t,s)&&g(e,s,t[s]);if(w)for(var s of w(t))K.call(t,s)&&g(e,s,t[s]);return e},x=(e,t)=>b(e,M(t));import{j as i,r as y}from"./index.71e6e6b0.js";import{u as N,C as P,b as A,c as D,P as L,D as O,S as B,v as G,d as V,s as $,K as k,a as q}from"./sortable.esm.aa87f66e.js";import{c as z}from"./index.06721ba9.js";import{a as F}from"./mock.54c533d5.js";import"./index.563d4b32.js";import"./v4.90f1a8cc.js";function H(e,t,s){const o=l({},e);return t.top+e.y<=s.top?o.y=s.top-t.top:t.bottom+e.y>=s.top+s.height&&(o.y=s.top+s.height-t.bottom),t.left+e.x<=s.left?o.x=s.left-t.left:t.right+e.x>=s.left+s.width&&(o.x=s.left+s.width-t.right),o}const J=({containerNodeRect:e,draggingNodeRect:t,transform:s})=>!t||!e?s:H(s,t,e),Q=({transform:e})=>x(l({},e),{x:0}),U=e=>{const{id:t,index:s,renderItem:o}=e,{attributes:d,listeners:c,setNodeRef:p,transform:m,transition:h,isDragging:n,active:a}=N({id:t}),r={transform:P.Transform.toString(m),transition:h};return i.exports.jsx("div",x(l(l({ref:p,style:r},d),c),{children:o(s,n,a==null?void 0:a.id)}))},W=e=>{const{items:t,onDragEnd:s,renderItem:o,className:d,modifiers:c=[J,Q],strategy:p=G,collisionDetection:m=V}=e,h=A(D(L),D(k,{coordinateGetter:$})),n=y.exports.useMemo(()=>t.map(r=>typeof r=="string"?r:r.id),[t]),a=r=>{const{active:f,over:u}=r;if(!!u&&f.id!==u.id){const S=n.indexOf(f.id),v=n.indexOf(u.id),C=q(n,S,v);s(S,v,C,r)}};return i.exports.jsx("div",{className:z("h-fit max-h-[80vh] w-fit overflow-auto",d),children:i.exports.jsx(O,{sensors:h,modifiers:c,collisionDetection:m,onDragEnd:a,children:i.exports.jsx(B,{items:n,strategy:p,children:n.map((r,f)=>i.exports.jsx(U,{id:r,index:f,renderItem:o},r))})})})};function X(e){for(let t=0;t<Math.floor(e.length/2);t++){const s=e[t];e[t]=e[e.length-1-t],e[e.length-t-1]=s}return e}function Y(e,t,s){const o=e[t];return e[t]=e[s],e[s]=o,e}function I(e,t,s){const o=e.slice();return o.splice(s<0?o.length+s:s,0,o.splice(t,1)[0]),o}function Z(e){if(e.length===0)return 0;let t=0;for(let s=0;s<e.length;s++)e[t]!==e[s]&&(t++,e[t]=e[s]);return t+1}var j;window.fn=x(l({},(j=window.fn)!=null?j:{}),{arrayMove:I,arraySwap:Y,revert:X,removeRepeat:Z});const ne=()=>{const[e,t]=y.exports.useState(F(10));return i.exports.jsx(W,{items:e,className:"border p-2",onDragEnd:(s,o)=>{t(I(e,s,o))},renderItem:s=>{const o=e[s];return i.exports.jsx("div",{className:"mb-2 flex h-10 w-60 items-center border p-2",children:o.index})}})};export{ne as default};
