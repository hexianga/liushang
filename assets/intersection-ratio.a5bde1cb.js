let u;const A=()=>{const t={id:0};return{rafX:t,autoScrollX:(n,o,c=100)=>{const e=o.getBoundingClientRect(),i=()=>{if(n-e.left<c){const a=(c-(n-e.left))/10;o.scrollLeft-=a,t.id=requestAnimationFrame(i)}if(e.right-n<c){const a=(c-(e.right-n))/10;o.scrollLeft+=a,t.id=requestAnimationFrame(i)}};cancelAnimationFrame(t==null?void 0:t.id),t.id=requestAnimationFrame(i)}}},F=()=>{const t={id:0};return{rafY:t,autoScrollY:({y:n,container:o,threshold:c=100,offset:e})=>{var m,d;const i=o.getBoundingClientRect(),s=c+((m=e==null?void 0:e.top)!=null?m:0),a=c+((d=e==null?void 0:e.bottom)!=null?d:0),r=()=>{if(n-i.top<s){const p=(s-(n-i.top))/10;o.scrollTop-=p,t.id=requestAnimationFrame(r)}if(i.bottom-n<a){const p=(c-(i.bottom-n))/10;o.scrollTop+=p,t.id=requestAnimationFrame(r)}};cancelAnimationFrame(t.id),t.id=requestAnimationFrame(r)}}},S=({y:t,container:l,threshold:n=100,offset:o})=>{var a,r;const c=l.getBoundingClientRect(),e=n+((a=o==null?void 0:o.top)!=null?a:0),i=n+((r=o==null?void 0:o.bottom)!=null?r:0),s=()=>{if(t-c.top<e){const d=(e-(t-c.top))/10;l.scrollTop-=d,u=requestAnimationFrame(s)}if(c.bottom-t<i){const d=(n-(c.bottom-t))/10;l.scrollTop+=d,u=requestAnimationFrame(s)}};cancelAnimationFrame(u),u=requestAnimationFrame(s)},T=(t,l)=>{const n=Math.max(l.top,t.top),o=Math.max(l.left,t.left),c=Math.min(l.left+l.width,t.left+t.width),e=Math.min(l.top+l.height,t.top+t.height),i=c-o,s=e-n;if(o<c&&n<e){const a=l.width*l.height,m=i*s/a;return Number(m.toFixed(4))}return 0};export{S as a,F as b,T as g,u as r,A as u};
