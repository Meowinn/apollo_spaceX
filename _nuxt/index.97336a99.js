import{g as T,V as g,a as h,b as L,c as F,d as q,e as B,f as S,h as y}from"./VRow.e03bfa15.js";import{r as C,a as k,b as Y,w as A,e as N,f as R,o as i,c as p,h as e,i as a,V as j,u as v,j as E,k as M,l as O,F as U,m as $,p as c,t as o,q as _,s as I,v as x}from"./entry.fe98439a.js";const Q=d=>{const l=C(null),r=k(()=>l.value===null||l.value===""?d.value:d.value.filter(n=>new Date(n.launch_date_local).getFullYear()===l.value));return{selectedYear:l,filteredLaunches:r}},X={class:"text-justify"},z=Y({__name:"LaunchCard",async setup(d){let l,r;const n=C(null),V=()=>{n.value==="Ascending"?m.value.sort((u,s)=>new Date(u.launch_date_local).getTime()-new Date(s.launch_date_local).getTime()):n.value==="Descending"&&m.value.sort((u,s)=>new Date(s.launch_date_local).getTime()-new Date(u.launch_date_local).getTime())};A(n,()=>{V()});const w=T`
query getLaunches {
launches {
  mission_name
  launch_date_local
  id
  launch_site {
    site_name
  }
rocket {
    rocket_name
  }
  details
  links {
    mission_patch
    flickr_images
  }
}
}
`,{data:D}=([l,r]=N(()=>R(w)),l=await l,r(),l),m=k(()=>{var u;return((u=D.value)==null?void 0:u.launches)??[]}),{selectedYear:f,filteredLaunches:b}=Q(m);return(u,s)=>(i(),p(y,{fluid:"",class:"bg-surface-variant"},{default:e(()=>[a(g,null,{default:e(()=>[a(h,{cols:"12",md:"4"},{default:e(()=>[a(j,{modelValue:v(f),"onUpdate:modelValue":s[0]||(s[0]=t=>E(f)?f.value=t:null),modelModifiers:{number:!0},label:"Filter by year",type:"text",min:"2000",max:"2023",outlined:""},null,8,["modelValue"])]),_:1}),a(h,null,{default:e(()=>[a(M,{modelValue:n.value,"onUpdate:modelValue":s[1]||(s[1]=t=>n.value=t),items:["Ascending","Descending"],label:"Sort Order"},null,8,["modelValue"])]),_:1})]),_:1}),a(g,{dense:""},{default:e(()=>[(i(!0),O(U,null,$(v(b),t=>(i(),p(h,{key:t.id,cols:"12",md:"4"},{default:e(()=>[a(L,{class:"ma-2 pa-3",height:"500px"},{default:e(()=>[a(F,null,{default:e(()=>[a(q,null,{default:e(()=>[c("h3",null,"Mission: "+o(t.mission_name),1)]),_:2},1024),a(B,null,{default:e(()=>[_("Launch Date: "+o(t.launch_date_local.split("T")[0]),1)]),_:2},1024),c("h4",null,o(t.launch_site),1)]),_:2},1024),a(S,null,{default:e(()=>[c("h4",null,"Rocket: "+o(t.rocket.rocket_name),1),c("p",X,o(t.details),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1}))}}),G={},H={class:"my-5"};function J(d,l){const r=z;return i(),p(y,null,{default:e(()=>[c("h3",H,[_(" Example Vuetify "),a(x,{color:"blue"},{default:e(()=>[_("SimpleTable")]),_:1}),a(x,{color:"orange"},{default:e(()=>[_("Data from spaceX graphql")]),_:1})]),a(r)]),_:1})}const W=I(G,[["render",J]]);export{W as default};
