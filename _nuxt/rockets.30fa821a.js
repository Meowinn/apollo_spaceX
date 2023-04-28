import{g as m,V as _,h,a as g,b as p,c as V,d as C,e as y,f as x}from"./VRow.e03bfa15.js";import{b as k,e as v,a as w,o as r,c as o,h as t,i as l,l as B,m as b,u as q,F,f as R,p as a,t as s}from"./entry.fe98439a.js";const S={class:"text-justify"},j=k({__name:"rockets",async setup(A){let n,u;const f=m`
  query Rockets {
  rockets {
    name
    description
    first_flight
    height {
      meters
    }
    diameter {
      feet
    }
    mass {
      kg
    }
    stages
  }
}
  `,{data:c}=([n,u]=v(()=>R(f)),n=await n,u(),n),d=w(()=>{var i;return((i=c.value)==null?void 0:i.rockets)??[]});return console.log(d),(i,D)=>(r(),o(h,{fluid:"",class:"fill-height"},{default:t(()=>[l(_,{dense:""},{default:t(()=>[(r(!0),B(F,null,b(q(d),e=>(r(),o(g,{key:e.name},{default:t(()=>[l(p,{class:"ma-2 pa-3",height:"550px"},{default:t(()=>[l(V,null,{default:t(()=>[l(C,null,{default:t(()=>[a("h3",null,s(e.name),1)]),_:2},1024),l(y,null,{default:t(()=>[a("div",null,"Height: "+s(e.height.meters)+"m",1),a("div",null,"Diameter: "+s(e.diameter.feet)+"ft",1),a("div",null,"Mass: "+s(e.mass.kg)+"kg",1)]),_:2},1024),a("h4",null,"First-flight: "+s(e.first_flight),1)]),_:2},1024),l(x,null,{default:t(()=>[a("h4",null,"Stages: "+s(e.stages),1),a("p",S,s(e.description),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1}))}});export{j as default};
