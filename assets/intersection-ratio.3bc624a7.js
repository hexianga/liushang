let u;const A=()=>{const t={id:0};return{rafX:t,autoScrollX:(c,e,i=100)=>{const n=e.getBoundingClientRect(),l=()=>{if(c-n.left<i){const s=(i-(c-n.left))/10;e.scrollLeft-=s,t.id=requestAnimationFrame(l)}if(n.right-c<i){const s=(i-(n.right-c))/10;e.scrollLeft+=s,t.id=requestAnimationFrame(l)}};cancelAnimationFrame(t==null?void 0:t.id),t.id=requestAnimationFrame(l)}}},g=()=>{const t={id:0};return{rafY:t,autoScrollY:({y:c,container:e,threshold:i=100,offset:n})=>{var d,m;const l=e.getBoundingClientRect(),a=i+((d=n==null?void 0:n.top)!=null?d:0),s=i+((m=n==null?void 0:n.bottom)!=null?m:0),r=()=>{if(c-l.top<a){const p=(a-(c-l.top))/10;e.scrollTop-=p,t.id=requestAnimationFrame(r)}if(l.bottom-c<s){const p=(i-(l.bottom-c))/10;e.scrollTop+=p,t.id=requestAnimationFrame(r)}};cancelAnimationFrame(t.id),t.id=requestAnimationFrame(r)}}},F=({y:t,container:o,threshold:c=100,offset:e})=>{var s,r;const i=o.getBoundingClientRect(),n=c+((s=e==null?void 0:e.top)!=null?s:0),l=c+((r=e==null?void 0:e.bottom)!=null?r:0),a=()=>{if(t-i.top<n){const m=(n-(t-i.top))/10;o.scrollTop-=m,u=requestAnimationFrame(a)}if(i.bottom-t<l){const m=(c-(i.bottom-t))/10;o.scrollTop+=m,u=requestAnimationFrame(a)}};cancelAnimationFrame(u),u=requestAnimationFrame(a)},S=(t,o)=>{const c=Math.max(o.top,t.top),e=Math.max(o.left,t.left),i=Math.min(o.left+o.width,t.left+t.width),n=Math.min(o.top+o.height,t.top+t.height),l=i-e,a=n-c;if(e<i&&c<n){const s=o.width*o.height,d=l*a/s;return Number(d.toFixed(4))}return 0},q=t=>({x:t.left+t.width*.5,y:t.top+t.height*.5});function T(t,o){return Math.sqrt(Math.pow(t.x-o.x,2)+Math.pow(t.y-o.y,2))}export{F as a,S as b,q as c,T as d,A as e,g,u as r};