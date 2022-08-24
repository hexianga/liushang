var _=Object.defineProperty,q=Object.defineProperties;var Q=Object.getOwnPropertyDescriptors;var G=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable;var Y=(a,e,h)=>e in a?_(a,e,{enumerable:!0,configurable:!0,writable:!0,value:h}):a[e]=h,R=(a,e)=>{for(var h in e||(e={}))V.call(e,h)&&Y(a,h,e[h]);if(G)for(var h of G(e))Z.call(e,h)&&Y(a,h,e[h]);return a},A=(a,e)=>q(a,Q(e));import{r as L,j as v}from"./index.7adf6b61.js";import{p as tt,d as k,a as U,b as D,c as I,e as et,u as st,f as F,g as K,h as B,i as X,j as it}from"./draw-line.0a846d7f.js";import{c as nt}from"./index.5729db34.js";import{_ as T}from"./index.28d32a59.js";import"./hasIn.d3012ea1.js";import"./_arrayPush.17db8b7a.js";import"./_commonjsHelpers.294d03c4.js";import"./index.563d4b32.js";var p=(a=>(a.POLYGON="polygon",a.RECTANGLE="rectangle",a.CIRCLE="circle",a.LINE="line",a.ARROW="arrow",a.ERASER="eraser",a))(p||{}),w=(a=>(a.GREEN="green",a.BLUE="blue",a.YELLOW="yellow",a.RED="red",a))(w||{}),P=(a=>(a.ADD="add",a.UPDATE="update",a.DELETE="delete",a))(P||{});const W=(a,e)=>{const h=a.getContext("2d");!h||(h.save(),h.beginPath(),h.globalCompositeOperation="destination-out",h.arc(e.x,e.y,5,0,2*Math.PI),h.clip(),h.clearRect(0,0,a.width,a.height),h.restore())},z=(a,e,h)=>{const o=a.getContext("2d");if(!o)return;const{x,y:f}=e,{x:t,y:s}=h,n=5*Math.sin(Math.atan((s-f)/(t-x))),i=5*Math.cos(Math.atan((s-f)/(t-x))),c=x+n,l=f-i,g=x-n,u=f+i,d=t+n,E=s-i,y=t-n,S=s+i;W(a,h),o.save(),o.beginPath(),o.globalCompositeOperation="destination-out",o.moveTo(c,l),o.lineTo(d,E),o.lineTo(y,S),o.lineTo(g,u),o.closePath(),o.clip(),o.clearRect(0,0,a.width,a.height),o.restore()},at=(a,e,h)=>{var d;const o=a.getContext("2d");if(!o)return;const x=e[0],f=e[1],{x:t,y:s}=x,{x:n,y:i}=f,c=Math.abs(n-t),l=Math.abs(i-s),g=Math.min(n,t)+c/2,u=Math.min(i,s)+l/2;o.lineWidth=Math.max(8,(d=h==null?void 0:h.lineWidth)!=null?d:0),o.beginPath(),o.ellipse(g,u,c/2,l/2,0,0,2*Math.PI),o.closePath()},ht=(a,e,h)=>{var d;const o=a.getContext("2d");if(!o)return;const x=e[0],f=e[1],{x:t,y:s}=x,{x:n,y:i}=f,c=Math.abs(n-t),l=Math.abs(i-s),g=Math.min(n,t),u=Math.min(i,s);o.lineWidth=Math.max(8,(d=h==null?void 0:h.lineWidth)!=null?d:0),o.beginPath(),o.rect(g,u,c,l)},rt=(a,e,h)=>{var x;const o=a.getContext("2d");!o||(o.lineWidth=Math.max(8,(x=h==null?void 0:h.lineWidth)!=null?x:0),o.beginPath(),e.forEach((f,t)=>{t===0?o.moveTo(f.x,f.y):o.lineTo(f.x,f.y)}),h.closePath&&o.closePath())};class ot{constructor(e){this.canvasBoard=e,this.delay=1e3,this.maxStack=100,this.userOnly=!1,this.lastRecorded=0,this.redoStack=[],this.undoStack=[]}record(e,h){const o=this.inverse(e,h);o&&this.undoStack.push(o)}inverse(e,h){switch(e.type){case P.ADD:return{type:P.DELETE,uuid:e.uuid};case P.DELETE:return{type:P.ADD,uuid:e.uuid};case P.UPDATE:{if(!e.patch)return;const o=tt(h,Object.keys(e.patch));return{type:P.UPDATE,uuid:e.uuid,patch:o}}}}redo(){if(this.redoStack.length===0)return;const e=this.redoStack.pop();if(!e)return;const h=this.inverse(e,this.canvasBoard.allShape[e==null?void 0:e.uuid]);h&&(this.undoStack.push(h),this.undoStack.length>this.maxStack&&this.undoStack.shift()),this.canvasBoard.applyOP(e)}undo(){var o;if(this.undoStack.length===0)return;const e=this.undoStack.pop();if(!e)return;const h=this.inverse(e,this.canvasBoard.allShape[(o=e==null?void 0:e.uuid)!=null?o:""]);h&&(this.redoStack.push(h),this.redoStack.length>this.maxStack&&this.redoStack.shift()),this.canvasBoard.applyOP(e)}clear(){this.redoStack=[],this.undoStack=[]}}class ct{constructor(e,h,o=2,x="#000"){this.canvas=e,this.drawType=h,this.lineWidth=o,this.color=x,this.pathStack={redo:[],undo:[]},this.allShape={},this.drawingPath=[],this.isMoving=!1,this.isPolygonDrawing=!1,this.oldShape=[],this.memoCanvas=document.createElement("canvas"),this.initContext=()=>{const t=B();if(this.canvas.width=Math.floor(this.canvas.clientWidth*t),this.canvas.height=Math.floor(this.canvas.clientHeight*t),this.ctx=this.canvas.getContext("2d"),!this.ctx)return;this.ctx.fillStyle=this.color,this.ctx.strokeStyle=this.color,this.ctx.lineWidth=this.lineWidth,this.ctx.scale(t,t),this.setBackground();const s=i=>{i.forEach(c=>{c.target===this.canvas&&this.updateCtx()})};new ResizeObserver(s).observe(this.canvas)},this.updateCtx=()=>{const t=B();this.canvas.width=Math.floor(this.canvas.clientWidth*t),this.canvas.height=Math.floor(this.canvas.clientHeight*t),this.ctx=this.canvas.getContext("2d"),this.ctx&&(this.ctx.fillStyle=this.color,this.ctx.strokeStyle=this.color,this.ctx.lineWidth=this.lineWidth,this.ctx.scale(t,t),this.refresh())},this.bindEvent=()=>{const t=n=>{if(this.hoverShape){this.moveShape(n);return}if(this.drawType===p.POLYGON){this.drawPolygon(n);return}if(this.drawType===p.RECTANGLE){this.drawRectangle(n);return}if(this.drawType===p.CIRCLE){this.drawCircle(n);return}if(this.drawType===p.ARROW){this.dragArrow(n);return}(this.drawType===p.LINE||this.drawType===p.ERASER)&&this.drawLineAndEraser(n)},s=n=>{var i,c;T("esc")(n)?this.drawType===p.POLYGON&&this.closePolygon():T("Backspace")(n)&&this.activeShape&&(this.allShape[(i=this.activeShape)==null?void 0:i.uuid].live=!1,(c=this.history)==null||c.record({type:P.DELETE,uuid:this.activeShape.uuid}),this.refresh())};window.addEventListener("keydown",s),this.canvas.addEventListener("mousedown",t),this.canvas.addEventListener("mousemove",this.detectShape)},this.refresh=()=>{!this.ctx||(this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),Object.values(this.allShape).forEach(({live:t,type:s,strokeStyle:n,path:i,lineWidth:c})=>{!this.ctx||!t||(s===p.POLYGON?k(this.ctx,i,{lineWidth:c,strokeStyle:n,closePath:!0}):s===p.RECTANGLE?U(this.canvas,i[0],i[1],{lineWidth:c,strokeStyle:n}):s===p.LINE?k(this.ctx,i,{lineWidth:c,strokeStyle:n,lineCap:"round",lineJoin:"round"}):s===p.CIRCLE?D(this.canvas,i[0],i[1],{lineWidth:c,strokeStyle:n}):s===p.ERASER?i.forEach((l,g)=>{g!==i.length-1&&(g===0?W(this.canvas,l):z(this.canvas,l,i[g+1]))}):s===p.ARROW&&I(this.canvas,i[0],i[1],{lineWidth:c,strokeStyle:n}))}))},this.moveShape=t=>{this.isMoving=!0;const s=this.getPoint(t),n=c=>{var E;if(!this.hoverShape)return;const l=this.getPoint(c),g=l.x-s.x,u=l.y-s.y,d=this.hoverShape.path.map(y=>({x:y.x+g,y:y.y+u}));this.allShape[(E=this.hoverShape)==null?void 0:E.uuid].path=d,this.refresh()},i=()=>{var c,l;if(document.removeEventListener("mousemove",n),document.removeEventListener("mouseup",i),this.hoverShape){if(!this.ctx)return;const g=this.allShape[(c=this.hoverShape)==null?void 0:c.uuid];if(!g)return;const{path:u}=g;(l=this.history)==null||l.record({type:P.UPDATE,uuid:this.hoverShape.uuid,patch:{path:u}},this.hoverShape);const d=X(u);this.ctx.save(),this.ctx.lineWidth=2,this.ctx.strokeStyle="rgba(0,255,0,0.5)",this.ctx.strokeRect(d.left,d.top,d.width,d.height),this.ctx.restore(),this.activeShape=g}this.isMoving=!1,this.hoverShape=void 0};document.addEventListener("mousemove",n),document.addEventListener("mouseup",i)},this.getPoint=t=>{const s=this.canvas.getBoundingClientRect();return{x:t.clientX-s.x,y:t.clientY-s.y}},this.drawLineAndEraser=t=>{let s=this.getPoint(t);this.drawingPath.push(s),this.drawType===p.ERASER&&W(this.canvas,s);const n=c=>{if(!this.ctx)return;const l=this.getPoint(c);this.drawingPath.push(l),this.drawType===p.LINE?k(this.ctx,[s,l],{lineCap:"round",lineJoin:"round"}):z(this.canvas,s,l),s=l},i=()=>{document.removeEventListener("mousemove",n),document.removeEventListener("mouseup",i),this.ctx&&(this.addShape(),this.drawingPath=[])};document.addEventListener("mousemove",n),document.addEventListener("mouseup",i)},this.drawPolygon=t=>{var n;if(!this.ctx)return;if(!this.isPolygonDrawing){this.isPolygonDrawing=!0;const i=l=>{if(!this.isPolygonDrawing){document.removeEventListener("keydown",c),document.removeEventListener("mousemove",i);return}if(!this.ctx)return;this.drawingPath=this.drawingPath.filter(d=>!d.isTemp);const g=this.getPoint(l),u=this.drawingPath[0];this.drawingPath.length>2&&Math.abs(u.x-g.x)<8&&Math.abs(u.y-g.y)<8?this.drawingPath.push(A(R({},u),{isTemp:!0})):this.drawingPath.push(A(R({},g),{isTemp:!0})),this.refresh(),this.drawingPath.length!==1&&k(this.ctx,this.drawingPath,{lineCap:"round",joinShape:"round"})},c=l=>{if(!!this.isPolygonDrawing){if(T("mod+z")(l)){const g=this.pathStack.undo.pop();if(g){this.pathStack.redo.push([...this.drawingPath.filter(d=>!d.isTemp)]);const u=this.drawingPath.find(d=>d.isTemp);if(this.drawingPath=u?g.concat(u):g,this.ctx){if(this.refresh(),this.drawingPath.length===1)return;k(this.ctx,this.drawingPath,{lineCap:"round",joinShape:"round"})}}}if(T("mod+shift+z")(l)){const g=this.pathStack.redo.pop();if(g){this.pathStack.undo.push([...this.drawingPath.filter(d=>!d.isTemp)]);const u=this.drawingPath.find(d=>d.isTemp);if(this.drawingPath=u?g.concat(u):g,this.ctx){if(this.refresh(),this.drawingPath.length===1)return;k(this.ctx,this.drawingPath,{lineCap:"round",joinShape:"round"})}}}}};document.addEventListener("keydown",c),document.addEventListener("mousemove",i)}if(this.drawingPath.length>3){const i=this.drawingPath[0],c=this.drawingPath[this.drawingPath.length-1];if(i.x===c.x&&i.y===c.y){this.closePolygon();return}}const s=this.getPoint(t);et(this.canvas,s),this.pathStack.undo.push([...this.drawingPath.filter(i=>!i.isTemp)]),this.drawingPath.push(s),(n=this.onPenPointChange)==null||n.call(this,this.drawingPath)},this.drawCircle=t=>{let s=!1;this.drawingPath.push(this.getPoint(t));const n=u=>{if(!this.ctx)return;this.drawingPath.length>1&&this.drawingPath.pop();const d=this.getPoint(u);this.drawingPath.push(d),this.refresh();const E=s?i(this.drawingPath[0],d):d;D(this.canvas,this.drawingPath[0],E)},i=(u,d)=>{const E=d.x-u.x,y=d.y-u.y,S=Math.max(Math.abs(E),Math.abs(y));return{x:E>0?u.x+S:u.x-S,y:y>0?u.y+S:u.y-S}},c=()=>{document.removeEventListener("mousemove",n),document.removeEventListener("mouseup",c),document.removeEventListener("keydown",l),document.removeEventListener("keyup",g),this.ctx&&(this.drawingPath.length>1&&(s&&(this.drawingPath[1]=i(this.drawingPath[0],this.drawingPath[1])),this.addShape()),this.drawingPath=[])},l=u=>{if(u.shiftKey){s=!0,this.refresh();const d=i(this.drawingPath[0],this.drawingPath[1]);D(this.canvas,this.drawingPath[0],d)}},g=()=>{s=!1,this.refresh(),D(this.canvas,this.drawingPath[0],this.drawingPath[1])};document.addEventListener("mousemove",n),document.addEventListener("mouseup",c),document.addEventListener("keydown",l),document.addEventListener("keyup",g)},this.drawRectangle=t=>{this.drawingPath.push(this.getPoint(t));const s=i=>{!this.ctx||(this.drawingPath.length>1&&this.drawingPath.pop(),this.drawingPath.push(this.getPoint(i)),this.refresh(),U(this.canvas,this.drawingPath[0],this.drawingPath[1]))},n=()=>{document.removeEventListener("mousemove",s),document.removeEventListener("mouseup",n),this.ctx&&(this.drawingPath.length>1&&this.addShape(),this.drawingPath=[])};document.addEventListener("mousemove",s),document.addEventListener("mouseup",n)},this.dragArrow=t=>{if(!this.ctx)return;this.drawingPath.push(this.getPoint(t));const s=i=>{!this.ctx||(this.drawingPath.length>1&&this.drawingPath.pop(),this.drawingPath.push(this.getPoint(i)),this.refresh(),console.log(this.ctx.lineWidth),I(this.canvas,this.drawingPath[0],this.drawingPath[1]))},n=()=>{!this.ctx||(this.drawingPath.length>1&&this.addShape(),this.drawingPath=[],document.removeEventListener("mousemove",s),document.removeEventListener("mouseup",n))};document.addEventListener("mousemove",s),document.addEventListener("mouseup",n)},this.addShape=()=>{var s;if(!this.ctx)return;const t={lineWidth:this.ctx.lineWidth,strokeStyle:this.ctx.strokeStyle,uuid:st(),type:this.drawType,path:this.drawingPath,live:!0};this.allShape[t.uuid]=t,(s=this.history)==null||s.record({type:P.ADD,uuid:t.uuid})},this.detectShape=t=>{if(this.isMoving||!this.ctx)return;const s=this.canvas.getBoundingClientRect();for(const n of Object.values(this.allShape)){if(!this.ctx)return;const{path:i,type:c,lineWidth:l,live:g}=n;if(!g)return;this.ctx.save(),c===p.CIRCLE?at(this.canvas,i,{lineWidth:l}):c===p.RECTANGLE?ht(this.canvas,i,{lineWidth:l}):rt(this.canvas,i,{lineWidth:l,closePath:c===p.POLYGON});const u=t.clientX-s.x,d=t.clientY-s.y;if(this.ctx.isPointInStroke(F(u),F(d))){this.hoverShape=R({},n),this.canvas.classList.add("grab"),this.ctx.restore();return}this.ctx.restore()}this.hoverShape=void 0,this.canvas.classList.remove("grab")},this.setBackground=t=>{!this.ctx||(this.ctx.fillStyle=t!=null?t:"white",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height))},this.setDrawType=t=>{this.drawType===p.POLYGON&&this.closePolygon(),this.canvas.classList.remove(p.POLYGON,p.ERASER),(t===p.POLYGON||t===p.ERASER)&&this.canvas.classList.add(t),this.drawType=t},this.setColor=t=>{!this.ctx||(this.color=t,this.ctx.strokeStyle=this.color,this.ctx.fillStyle=this.color)},this.setLineWidth=t=>{!this.ctx||(this.lineWidth=t,this.ctx.lineWidth=this.lineWidth)},this.closePolygon=()=>{!this.ctx||(this.drawingPath.pop(),this.addShape(),this.isPolygonDrawing=!1,this.pathStack={redo:[],undo:[]},this.drawingPath=[],this.refresh())},this.clearBoard=()=>{!this.ctx||(this.allShape={},this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height))},this.downloadBoard=()=>{const t=this.canvas.toDataURL();K(t)},this.redo=()=>{var t;(t=this.history)==null||t.redo()},this.undo=()=>{var t;(t=this.history)==null||t.undo()},this.applyOP=t=>{switch(t.type){case P.ADD:{this.allShape[t.uuid].live=!0;break}case P.DELETE:{this.allShape[t==null?void 0:t.uuid].live=!1;break}case P.UPDATE:if(!t.patch)return;this.allShape[t.uuid]=R(R({},this.allShape[t.uuid]),t.patch)}this.refresh()},window.drawingPath=this,this.initContext(),this.bindEvent(),this.history=new ot(this),this.memoCanvas.width=e.width,this.memoCanvas.height=e.height,this.memoCanvas.style.width=`${e.clientWidth}px`,this.memoCanvas.style.height=`${e.clientHeight}px`;const f=this.memoCanvas.getContext("2d");!f||(f.scale(2,2),window.canvasBoard=this)}}let N=[];const dt=[{type:p.ERASER,name:"\u6A61\u76AE"},{type:p.LINE,name:"\u94C5\u7B14"},{type:p.CIRCLE,name:"\u5706"},{type:p.RECTANGLE,name:"\u77E9\u5F62"},{type:p.POLYGON,name:"\u94A2\u7B14"},{type:p.ARROW,name:"\u7BAD\u5934"}],ut=()=>{const a=L.exports.useRef(null),e=L.exports.useRef(),[h,o]=L.exports.useState(p.POLYGON),[x,f]=L.exports.useState(),[t,s]=L.exports.useState(2),[n,i]=L.exports.useState(!1);L.exports.useEffect(()=>{const r=a.current;if(!r)return;const m=e.current=new ct(r,h,t,x);m.onPenPointChange=C=>{N=C,i(C.length>2)}},[]);const c=()=>{var r;return(r=e.current)==null?void 0:r.clearBoard()},l=()=>{var r;return(r=e.current)==null?void 0:r.downloadBoard()},g=r=>{var m;(m=e.current)==null||m.setDrawType(r),o(r),a.current},u=r=>{var m;(m=e.current)==null||m.setColor(r),f(r)},d=r=>{var m;(m=e.current)==null||m.setLineWidth(r),s(r)},E=async()=>{const r=a.current;if(!r)return;const m=r.getContext("2d");if(!m)return;const{left:C,top:b,width:O,height:$}=X(N),M=B(),J=m.getImageData(C*M,b*M,O*M,$*M),j=await it(J,N);j&&K(j)},y=[w.RED,w.GREEN,w.BLUE,w.YELLOW].map(r=>({name:v.exports.jsx("span",{className:"inline-block h-[18px] w-[18px] rounded-full",style:{backgroundColor:r}}),onClick:()=>u(r),selected:x===r})),S=dt.map(r=>({name:r.name,onClick:()=>g(r.type),selected:h===r.type})),H=[{name:"\u6E05\u9664",onClick:c},{name:"\u4E0B\u8F7D",onClick:l},...S,...y,{name:"\u64A4\u9500",onClick:()=>{var r;return(r=e.current)==null?void 0:r.undo()}},{name:"\u91CD\u505A",onClick:()=>{var r;return(r=e.current)==null?void 0:r.redo()}},{name:v.exports.jsx("input",{type:"color",className:"h-5 border-0 bg-transparent",onChange:r=>{const m=r==null?void 0:r.target.value;u(m)}}),onClick:()=>{},selected:![w.RED,w.GREEN,w.BLUE,w.YELLOW].find(r=>x===r)},{name:v.exports.jsxs(v.exports.Fragment,{children:[v.exports.jsx("span",{children:"0"}),v.exports.jsxs("div",{className:"relative flex items-center",children:[v.exports.jsx("span",{className:"absolute -top-1.5 text-xs",style:{left:`${t}px`},children:t}),v.exports.jsx("input",{type:"range",value:t,className:"h-6 w-[116px] border-0 bg-transparent",onChange:r=>{const m=r==null?void 0:r.target.value;Number(m)<1||d(Number(m))}})]}),v.exports.jsx("span",{children:"100"})]}),onClick:()=>{},selected:![w.RED,w.GREEN,w.BLUE,w.YELLOW].find(r=>x===r)},{name:"\u4E0B\u8F7D\u94A2\u7B14\u533A\u57DF",onClick:E,disabled:!n}];return v.exports.jsxs("section",{className:"pt-2",children:[v.exports.jsx("h1",{className:"mb-4 border-b text-2xl",children:"\u767D\u677F"}),v.exports.jsx("div",{className:"mt-2 flex flex-wrap",children:H.map(({onClick:r,name:m,selected:C,disabled:b},O)=>v.exports.jsx("button",{onClick:r,disabled:b,className:nt("relative ml-2 mb-2 flex items-center rounded border py-1 px-4 text-sm ",C&&"border-blue-500",b&&"opacity-30"),children:m},O))}),v.exports.jsx("canvas",{ref:a,style:{width:"100%",height:600},className:"mt-2 border"})]})},Et=()=>v.exports.jsx(v.exports.Fragment,{children:v.exports.jsx(ut,{})});export{Et as default};
