import{r as l,j as e}from"./index.85a07fc6.js";const f=({cursorRef:o,container:a})=>{const[p,r]=l.exports.useState([]);return l.exports.useEffect(()=>{const i=o.current;if(!i)return;const u=a.current;if(!u)return;const x=()=>{const s=window.getSelection();if(!s)return;if(console.log(s.type),s.type==="None"){r([]),i.style.cssText="";return}const n=s.getRangeAt(0).getClientRects();if(s.type==="Caret"){const c=Array.from(n)[0];i.style.cssText=`
          left: ${c.left}px;
          top:  ${c.top}px;
          height:  ${c.height}px;
        `,r([])}else i.style.cssText="",r(Array.from(n))},d=s=>{let t,n;document.caretRangeFromPoint?(t=document.caretRangeFromPoint(s.clientX,s.clientY),n=t==null?void 0:t.startContainer):document.caretPositionFromPoint&&(t=document.caretPositionFromPoint(s.clientX,s.clientY),n=t==null?void 0:t.offsetNode),(n==null?void 0:n.nodeType)===3&&setTimeout(()=>{const c=window.getSelection();!c||!(t instanceof Range)||c.addRange(t)})};return u.addEventListener("click",d),document.addEventListener("selectionchange",x),()=>{document.removeEventListener("selectionchange",x)}},[a,o]),p},m=({container:o})=>{const a=l.exports.useRef(null),p=f({cursorRef:a,container:o});return e.exports.jsxs(e.exports.Fragment,{children:[e.exports.jsx("div",{ref:a,className:"custom-cursor"}),p.map((r,i)=>e.exports.jsx("div",{className:"pointer-events-none absolute border border-red-500",style:{left:r.left,top:r.top,width:r.width,height:r.height}},i))]})},y=()=>{const o=l.exports.useRef(null);return e.exports.jsxs(e.exports.Fragment,{children:[e.exports.jsxs("div",{className:"text-h1 text-4xl",ref:o,children:[e.exports.jsxs("p",{children:[e.exports.jsx("span",{children:"ieryiuqe"}),e.exports.jsx("span",{children:"ieryiuqe"}),e.exports.jsx("span",{children:"uieryiuqe"}),e.exports.jsx("span",{children:"uieryiuqe"})]}),e.exports.jsxs("p",{children:[e.exports.jsx("span",{children:"rduieryiuqe"}),e.exports.jsx("span",{children:"rryiuqe"})]})]}),e.exports.jsx(m,{container:o})]})};export{y as default};