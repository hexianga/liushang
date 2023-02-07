import{_ as c,h as f,e,an as o,p as w,b as L,ao as h}from"./calendar-c06bd7ad.js";import{_ as n}from"./index-23b6c834.js";import{L as C,S as R,R as v}from"./docs-page-0244a375.js";import{c as x}from"./lodash-6a49fb5a.js";import"./visual-list-19e7ed3c.js";import"./canvas-a9b0b7c8.js";import"./faker-75f62213.js";const P=()=>{const t=c(null);return f(()=>{const a=t.current;if(!a)return;const l=i=>{i.preventDefault();const{deltaX:r,deltaY:s,deltaZ:m,deltaMode:d}=i;console.log(r,s,m,d)};a.addEventListener("wheel",l)},[]),e("div",{className:"relative h-[400px] w-[400px]",ref:t,children:e("div",{className:"absolute h-full w-full bg-green-100"})})},g=o(()=>n(()=>import("./calendar-c06bd7ad.js").then(t=>t.ar),["assets/calendar-c06bd7ad.js","assets/lodash-6a49fb5a.js"])),V=o(()=>n(()=>import("./canvas-a9b0b7c8.js").then(t=>t.f),["assets/canvas-a9b0b7c8.js","assets/calendar-c06bd7ad.js","assets/lodash-6a49fb5a.js","assets/canvas-02aa090f.css"])),D=o(()=>n(()=>import("./pdf-800cd449.js").then(t=>t.i),["assets/pdf-800cd449.js","assets/calendar-c06bd7ad.js","assets/lodash-6a49fb5a.js","assets/canvas-a9b0b7c8.js","assets/canvas-02aa090f.css","assets/pdf-4e4374e0.css"])),T=o(()=>n(()=>import("./timeline-78f07db8.js"),["assets/timeline-78f07db8.js","assets/calendar-c06bd7ad.js","assets/lodash-6a49fb5a.js","assets/pdf-800cd449.js","assets/canvas-a9b0b7c8.js","assets/canvas-02aa090f.css","assets/pdf-4e4374e0.css","assets/index-08cf5628.css"])),A=o(()=>n(()=>import("./index-63141c48.js"),["assets/index-63141c48.js","assets/calendar-c06bd7ad.js","assets/lodash-6a49fb5a.js","assets/index-23b6c834.js","assets/docs-page-0244a375.js","assets/docs-page-1d6ef17c.css","assets/visual-list-19e7ed3c.js","assets/canvas-a9b0b7c8.js","assets/canvas-02aa090f.css","assets/faker-75f62213.js","assets/index-5f1fb065.css"])),I=o(()=>n(()=>import("./index-e7855404.js"),["assets/index-e7855404.js","assets/calendar-c06bd7ad.js","assets/lodash-6a49fb5a.js","assets/index-5651a802.css"])),O=o(()=>n(()=>import("./index-3fab2eb7.js"),["assets/index-3fab2eb7.js","assets/calendar-c06bd7ad.js","assets/lodash-6a49fb5a.js","assets/index-ad6eb8d1.css"])),b=o(()=>n(()=>import("./video-player-c9c4a00c.js"),["assets/video-player-c9c4a00c.js","assets/calendar-c06bd7ad.js","assets/lodash-6a49fb5a.js","assets/pdf-800cd449.js","assets/canvas-a9b0b7c8.js","assets/canvas-02aa090f.css","assets/pdf-4e4374e0.css","assets/docs-page-0244a375.js","assets/docs-page-1d6ef17c.css","assets/index-a5a1a190.css"])),N=o(()=>n(()=>import("./index-592b4a3c.js"),["assets/index-592b4a3c.js","assets/calendar-c06bd7ad.js","assets/lodash-6a49fb5a.js","assets/index-986cbf8e.css"])),y=o(()=>n(()=>import("./request-1fb8d824.js"),["assets/request-1fb8d824.js","assets/calendar-c06bd7ad.js","assets/lodash-6a49fb5a.js"])),B=o(()=>n(()=>import("./visual-list-19e7ed3c.js").then(t=>t.i),["assets/visual-list-19e7ed3c.js","assets/calendar-c06bd7ad.js","assets/lodash-6a49fb5a.js","assets/canvas-a9b0b7c8.js","assets/canvas-02aa090f.css","assets/faker-75f62213.js"])),k=o(()=>n(()=>import("./index-0b9dde70.js"),["assets/index-0b9dde70.js","assets/calendar-c06bd7ad.js","assets/lodash-6a49fb5a.js"])),p=[{path:"imagepreview",Component:k},{path:"calendar",Component:g},{path:"request",Component:y},{path:"wheel",Component:P},{path:"little-com",Component:I},{path:"animate",Component:O},{path:"5W1H",Component:A},{path:"pdf",Component:D},{path:"timeline",Component:T},{path:"canvas",Component:V},{path:"visualList",Component:B},{path:"video",Component:b},{path:"editor",Component:N}],M=()=>{const[t,a]=w(!0),l=c(null),i=c(null);return f(()=>{const r=i.current,s=l.current;if(!r||!s)return;const m=d=>{d.preventDefault(),d.stopPropagation();const u=E=>{s.style.width=`${x(E.clientX,80,400)}px`},_=()=>{document.removeEventListener("mousemove",u),document.removeEventListener("mouseup",_),r.style.transform="none"};document.addEventListener("mousemove",u),document.addEventListener("mouseup",_)};r.addEventListener("mousedown",m)},[]),e("div",{ref:l,className:L("relative z-50 border-r bg-white",!t&&"hidden"),style:{width:80},children:[e("div",{className:"h-full overflow-auto",children:[e("button",{className:"h-10 w-full rounded-md border-none px-2 text-sm",onClick:()=>a(!t)}),t&&e("div",{className:"flex flex-col pt-2",children:p.map(r=>e(C,{to:`/example/${r.path}`,className:"flex h-10 w-full items-center px-2 hover:bg-gray-100",children:r.path},r.path))})]}),e("div",{className:"group absolute top-0 -right-1.5 h-full w-2 cursor-col-resize",ref:i,children:[e("div",{className:"h-full w-1 group-hover:bg-gray-400"}),"111"]})]})},F=()=>e("div",{className:"relative flex h-screen overflow-hidden",children:[e(M,{}),e("div",{className:"flex-1 overflow-auto p-4",children:e(R,{children:[p.map(({Component:t,path:a})=>e(v,{path:`/example/${a}`,render:()=>e(h,{fallback:e("div",{children:"loading"}),children:e(t,{})})},a)),e(v,{path:"/",render:()=>{const t=p[0].Component;return e(h,{fallback:e("div",{children:"loading"}),children:e(t,{})})}})]})})]});export{F as default};
