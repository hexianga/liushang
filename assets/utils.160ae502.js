const l="\u4E00\u6708_\u4E8C\u6708_\u4E09\u6708_\u56DB\u6708_\u4E94\u6708_\u516D\u6708_\u4E03\u6708_\u516B\u6708_\u4E5D\u6708_\u5341\u6708_\u5341\u4E00\u6708_\u5341\u4E8C\u6708".split("_"),R="\u65E5_\u4E00_\u4E8C_\u4E09_\u56DB_\u4E94_\u516D".split("_"),O=60*1e3,f=15*O,S=4*f,h=24*S,H="YYYY/MM/DD HH:mm",T="YYYY/MM/DD";var Y=(t=>(t.PREV="prev",t.NEXT="next",t))(Y||{}),d=(t=>(t.MONTH="month",t.QUARTER="quarter",t.YEAR="year",t.BIWEEK="biWeek",t.WEEK="week",t.DAY="day",t.HOUR="hour",t))(d||{});const w=t=>t==="month"||t==="week"||t==="biWeek",g=({base:t=Date.now(),dir:e="next",length:s=100,includeBase:u=!1,zoomLevel:r="month"})=>{const a=[],D=e==="next";if(w(r)||r==="quarter"){let c=M(t);r==="quarter"&&(c-=new Date(t).getDay()*h);const E=r==="quarter"?h*7:h,i=u?s:s+1;for(let n=0;n<i;n++)if(!(!u&&n===0))if(D){const o=c+n*E;a.push(o)}else{const o=c-n*E;a.unshift(o)}}else if(r==="year"){const c=new Date(t),E=M(c.setDate(1));if(u)a.push(E);else{const i=new Date(E).getMonth();a.push(new Date(E).setMonth(D?i+1:i-1,1))}for(let i=0;i<s-1;i++)if(D){const n=a[a.length-1],o=new Date(n).getMonth();a.push(new Date(n).setMonth(o+1,1))}else{const n=a[0],o=new Date(n).getMonth();a.unshift(new Date(n).setMonth(o-1,1))}}else if(r==="day"||r==="hour"){const c=r==="day"?m(t):_(t),E=r==="day"?4*f:f,i=u?s:s+1;for(let n=0;n<i;n++)if(!(!u&&n===0))if(D){const o=c+n*E;a.push(o)}else{const o=c-n*E;a.unshift(o)}}return a},A=({zoomLevel:t,length:e,base:s})=>[...g({base:s,dir:"prev",zoomLevel:t,length:e}),...g({base:s,dir:"next",zoomLevel:t,length:e,includeBase:!0})],M=t=>new Date(new Date(t).toDateString()).getTime(),m=t=>new Date(t).setHours(new Date(t).getHours(),0,0,0),_=t=>{const e=m(t);return e+Math.floor((t-e)/f)*f},W=t=>{const e=new Date(t);return{year:e.getFullYear(),month:e.getMonth()+1,date:e.getDate(),day:e.getDay(),monthDesc:l[e.getMonth()],time:t}},N=[31,28,31,30,31,30,31,31,30,31,30,31],k=t=>{const e=new Date(t),s=e.getFullYear(),u=e.getMonth();return u===1?s%4===0&&s%100!==0||s%400===0?29:28:N[u]},x=(t,e,s,u)=>{const{needDateStart:r=!1,abs:a=!0}=u!=null?u:{};let D=0;return s==="hour"||s==="day"?D=(r?_(t)-_(e):t-e)/f:D=(r?M(t)-M(e):t-e)/h,a?Math.abs(D):D};export{H as D,S as O,R as W,d as Z,h as a,f as b,x as c,O as d,k as e,W as f,M as g,A as h,w as i,T as j,_ as k,g as l,Y as m};
