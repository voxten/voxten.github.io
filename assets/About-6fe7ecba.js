import{r as n,j as c,F as p,a as e,s as o}from"./index-c6c651d0.js";import{S as x,m as i,t as h,f as l}from"./SectionWrapper-a3986a9b.js";import{q as f,c as u,f as v,g}from"./firebase-fb8ee69b.js";const y=({title:a,icon:r,index:t})=>e("div",{className:"xs:w-[100%] w-full",children:e(i.div,{variants:l("right","spring",.5*t,.75),className:"w-full p-[1px] rounded-[20px]",children:c("div",{options:{max:45,scale:1,speed:450},className:"bg-tertiary rounded-[20px] py-5 px-12 min-h-[150px] flex justify-evenly items-center flex-col",children:[e("img",{src:r,alt:a,className:"w-16 h-16 object-contain"}),e("h3",{className:"text-white text-[20px] font-bold text-center",children:a})]})})}),S=()=>{const[a,r]=n.useState([]);return n.useEffect(()=>{(async()=>{try{const s=f(u(v,"aboutServices")),m=(await g(s)).docs.map(d=>d.data());r(m)}catch(s){console.error("Error fetching services: ",s)}})()},[]),c(p,{children:[c(i.div,{variants:h(),children:[e("p",{className:o.sectionSubText,children:"Introduction"}),e("h2",{className:o.sectionHeadText,children:"About Me"})]}),e(i.p,{variants:l("","",.1,1),className:"mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]",children:"Creating games in Unity is something I aspire to do full-time, no matter what. Although it's not my primary occupation, I really enjoy coding web pages."}),e("div",{className:"mt-20 gap-5 flex flex-wrap",children:a.map((t,s)=>e(y,{index:s,...t},t.title))})]})},A=x(S,"about");export{A as default};