(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{15:function(e,t,c){e.exports={boxSelector:"projects_boxSelector__3CJiW"}},16:function(e,t,c){e.exports={columnsHeight:"about_columnsHeight__3do-r",addMargin:"about_addMargin__1LSKn"}},20:function(e,t,c){e.exports={square:"Outline_square__37HU_",leftSide:"Outline_leftSide__1CMZh",topSide:"Outline_topSide__2PVy2",rightSide:"Outline_rightSide__3U-hR",bottomSide:"Outline_bottomSide__tfS40"}},23:function(e,t,c){e.exports={containerWrapper:"Home_containerWrapper__1sE9n",nameTitle:"Home_nameTitle__33xjB",titlePortfolio:"Home_titlePortfolio__2ycBE"}},51:function(e,t,c){},53:function(e,t,c){},54:function(e,t,c){},55:function(e,t,c){"use strict";c.r(t);var s,a,i=c(0),r=c(1),n=c.n(r),l=c(28),o=c.n(l),j=c(5),d=c(7),b=c(3),u=c(8),m=c(11),h=c(2),x=c(29),O=c(4),f=c.n(O);var p=c(6),g=c.n(p),N="#ffe27a",v="#75ebb0",k="#8cddf3",y="#ffa27a",S=!1,_=function(e){var t=e.color,c=Object(d.g)(),n=Object(r.useState)(!1),l=Object(u.a)(n,2),o=l[0],b=l[1],O=Object(r.useState)(t),p=Object(u.a)(O,2),_=p[0],C=p[1],M=Object(r.useState)(null),w=Object(u.a)(M,2),I=w[0],z=w[1],E=Object(r.useState)("Click Menu"),T=Object(u.a)(E,2),L=T[0],R=T[1],P=Object(r.useRef)(null),H=Object(r.useRef)(null),F=Object(r.useRef)(null),V=Object(r.useRef)(null),q=Object(r.useRef)(null),D=Object(r.useRef)(null),B=Object(r.useRef)(null),G=function(){C("#000"),m.a.to(H.current,{backgroundColor:"white",ease:h.b.easeInOut}),m.a.to(F.current,1,{top:"15%",left:"15%",zIndex:1,ease:h.b.easeInOut}),m.a.to(V.current,1,{top:"85%",left:"15%",zIndex:1,ease:h.b.easeInOut}),m.a.to(q.current,1,{top:"15%",left:"85%",zIndex:1,ease:h.b.easeInOut}),m.a.to(D.current,1,{top:"85%",left:"85%",zIndex:1,ease:h.b.easeInOut}),m.a.to(B.current,1,{top:"25%",left:"50%",zIndex:1,ease:h.b.easeInOut,onComplete:function(){b(!0),R("Drag to Open")}})},A=Object(r.useCallback)((function(){m.a.to(F.current,1,{top:"50%",left:"50%",zIndex:-1,ease:h.b.easeInOut}),m.a.to(V.current,1,{top:"50%",left:"50%",zIndex:-1,ease:h.b.easeInOut}),m.a.to(q.current,1,{top:"50%",left:"50%",zIndex:-1,ease:h.b.easeInOut}),m.a.to(D.current,1,{top:"50%",left:"50%",zIndex:-1,ease:h.b.easeInOut}),m.a.to(B.current,1,{top:"50%",left:"50%",ease:h.b.easeInOut}),m.a.to(H.current,{backgroundColor:"black",ease:h.b.easeInOut,onComplete:function(){b(!1),C(t),R("Click Menu"),a&&a()}})}),[t]),W=Object(r.useCallback)((function(){if(S){var e=document.querySelectorAll(".circle-selector");e.forEach((function(e,t){e.addEventListener("dragstart",(function(e){z(t),R("Drop Here"),0===t?C(N):1===t?C(k):2===t?C(v):3===t&&C(y),e.dataTransfer.setData("text/plain",t),e.dataTransfer.effectAllowed="move"}))})),e.forEach((function(e){e.addEventListener("dragend",(function(){S&&(C("#000"),R("Drag to Open"),z(null))}))})),document.querySelector("#mainCircle").addEventListener("dragover",(function(e){document.querySelector("#mainCircle").style.border="5px dotted black",document.querySelector("#mainCircle").style.background="grey",e.preventDefault()})),document.querySelector(".svg-dropzone").addEventListener("dragover",(function(e){document.querySelector("#mainCircle").style.border="5px dotted black",document.querySelector("#mainCircle").style.background="grey",e.preventDefault()})),document.querySelector("body").addEventListener("dragleave",(function(){document.querySelector("#mainCircle").style.border="2px solid black",document.querySelector("#mainCircle").style.background="white"})),document.querySelector("#mainCircle").addEventListener("drop",(function(e){e.preventDefault();var t=e.dataTransfer.getData("text/plain");null!==I&&("0"!==I.toString()&&"0"!==t.toString()||(A(),c.push("/projects"))),null!==I&&("1"!==I.toString()&&"1"!==t.toString()||(A(),c.push("/skills"))),null!==I&&("2"!==I.toString()&&"2"!==t.toString()||(A(),c.push("/about"))),null!==I&&("3"!==I.toString()&&"3"!==t.toString()||(A(),c.push("/contact")))})),document.querySelector(".svg-dropzone").addEventListener("drop",(function(e){e.preventDefault();var t=e.dataTransfer.getData("text/plain");null!==I&&("0"!==I.toString()&&"0"!==t.toString()||(A(),c.push("/projects"))),null!==I&&("1"!==I.toString()&&"1"!==t.toString()||(A(),c.push("/skills"))),null!==I&&("2"!==I.toString()&&"2"!==t.toString()||(A(),c.push("/about"))),null!==I&&("3"!==I.toString()&&"3"!==t.toString()||(A(),c.push("/contact")))}))}}),[c,A,I]);s=G;var J=Object(r.useCallback)((function(){document.querySelectorAll(".circle-selector").forEach((function(e,c){e.addEventListener("click",(function(){R("Drop Here"),0===c?C(N):1===c?C(k):2===c?C(v):3===c&&C(y),setInterval((function(){R("Click Menu"),C(t)}),1500)}))}))}),[t]);return Object(r.useEffect)((function(){return S=!0,m.a.fromTo(P.current,1,{drawSVG:"0"},{drawSVG:"1"}),W(),C(t),J(),function(){S=!1}}),[W,t,J]),Object(i.jsxs)("div",{className:o?g.a.svgBackgroundContainer:"",children:[Object(i.jsx)("svg",{viewBox:"0 0 276 313",fill:"none",className:f()(g.a.menuSVG,"svg-dropzone"),xmlns:"http://www.w3.org/2000/svg",children:Object(i.jsxs)(x.a,{from:{svgDraw:0},to:{svgDraw:1},children:[Object(i.jsx)("path",{className:g.a.changeStrokeColor,d:"M13 300V50H263V300H13Z",style:{strokeWidth:25,stroke:_}}),Object(i.jsx)("path",{d:"M136.939 101.061C137.525 101.646 138.475 101.646 139.061 101.061L148.607 91.5147C149.192 90.9289 149.192 89.9792 148.607 89.3934C148.021 88.8076 147.071 88.8076 146.485 89.3934L138 97.8787L129.515 89.3934C128.929 88.8076 127.979 88.8076 127.393 89.3934C126.808 89.9792 126.808 90.9289 127.393 91.5147L136.939 101.061ZM136.5 0V100H139.5V0L136.5 0Z",fill:"black"})]})}),Object(i.jsx)("div",{ref:H,id:"mainCircle",className:f()(g.a.color,g.a.circle,g.a.mainCircle),onClick:G}),Object(i.jsxs)("div",{draggable:"true",ref:F,className:f()(g.a.circle,"circle-selector"),children:[Object(i.jsx)("div",{className:g.a.color,style:{background:N}}),o?Object(i.jsx)("p",{className:g.a.fieldTitle,children:"My Projects"}):Object(i.jsx)("span",{})]}),Object(i.jsxs)("div",{draggable:"true",ref:V,className:f()(g.a.circle,"circle-selector"),children:[Object(i.jsx)("div",{className:g.a.color,style:{background:k}}),o?Object(i.jsx)("p",{className:g.a.fieldTitle,children:"My Skills"}):Object(i.jsx)("span",{})]}),Object(i.jsxs)("div",{draggable:"true",ref:q,className:f()(g.a.circle,"circle-selector"),children:[Object(i.jsx)("div",{className:g.a.color,style:{background:v}}),o?Object(i.jsx)("p",{className:g.a.fieldTitle,children:"About Me"}):Object(i.jsx)("span",{})]}),Object(i.jsxs)("div",{draggable:"true",ref:D,className:f()(g.a.circle,"circle-selector"),children:[Object(i.jsx)("div",{className:g.a.color,style:{background:y}}),o?Object(i.jsx)("p",{className:g.a.fieldTitle,children:"Contact Me"}):Object(i.jsx)("span",{})]}),Object(i.jsx)("p",{className:f()(g.a.menu,"menu-selector"),children:L}),o?Object(i.jsx)(j.b,{to:"/",className:f()("is-size-6",g.a.backToHome),children:"Back to Home"}):Object(i.jsx)("span",{}),o?Object(i.jsx)("div",{ref:B,className:g.a.handleClose,onClick:A,children:Object(i.jsx)("h1",{onClick:A,children:"X"})}):Object(i.jsx)("span",{})]})},C=c(23),M=c.n(C),w=c(10),I=c(20),z=c.n(I),E=function(e){var t=e.color,c=e.setIsLoading,s=e.color1,a=e.color2,n=e.color3,l=e.color4,o=Object(r.useRef)(),j=Object(r.useRef)(),d=Object(r.useRef)(),b=Object(r.useRef)(),u=Object(r.useCallback)((function(){c(!0),w.a.fromTo(o.current,.3,{width:0,background:s||t,immediateRender:!1,autoRound:!1},{width:"100%",background:s||t}),w.a.fromTo(d.current,.3,{height:0,background:a||t,immediateRender:!1,autoRound:!1},{height:"100%",background:a||t,delay:.5}),w.a.fromTo(b.current,.3,{width:0,background:n||t,immediateRender:!1,autoRound:!1},{width:"100%",background:n||t,delay:.8}),w.a.fromTo(j.current,.3,{height:0,background:l||t,immediateRender:!1,autoRound:!1},{height:"100%",background:l||t,delay:1.1,onComplete:function(){c(!1)}})}),[t,c,s,a,n,l]);return Object(r.useEffect)((function(){u()}),[u]),Object(i.jsxs)("div",{className:z.a.square,children:[Object(i.jsx)("span",{ref:j,className:z.a.leftSide}),Object(i.jsx)("span",{ref:o,className:z.a.topSide}),Object(i.jsx)("span",{ref:d,className:z.a.rightSide}),Object(i.jsx)("span",{ref:b,className:z.a.bottomSide})]})},T=function(){var e=Object(r.useState)(!0),t=Object(u.a)(e,2),c=t[0],s=t[1];return Object(r.useEffect)((function(){s(!1)}),[]),Object(i.jsxs)(b.b.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5,ease:"linear"},className:M.a.containerWrapper,children:[Object(i.jsx)(E,{color:"#0af",color1:N,color2:v,color3:y,color4:k,setIsLoading:s}),!c&&Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(_,{color:"#000"}),Object(i.jsx)("p",{className:M.a.titlePortfolio,children:"Portfolio"}),Object(i.jsx)("p",{className:M.a.nameTitle,children:"Ferin Patel"})]})]})},L=function(e){var t=e.color;return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("div",{style:{backgroundColor:"white",zIndex:5},children:Object(i.jsx)(_,{color:t})})})},R=function(e){var t=e.color,c=e.title,n=Object(r.useState)(!1),l=Object(u.a)(n,2),o=l[0],d=l[1];return Object(r.useEffect)((function(){document.querySelector("#burger").addEventListener("click",(function(){d(!0),s(),a=d}))}),[]),Object(i.jsxs)(i.Fragment,{children:[!o&&Object(i.jsx)("nav",{className:"navbar is-hidden-desktop",style:{backgroundColor:t},role:"navigation","aria-label":"main navigation",children:Object(i.jsxs)("div",{className:"navbar-brand",children:[Object(i.jsx)(j.b,{className:"navbar-item is-size-4",to:"/",children:c}),Object(i.jsxs)("div",{className:"navbar-burger",id:"burger",children:[Object(i.jsx)("span",{"aria-hidden":"true"}),Object(i.jsx)("span",{"aria-hidden":"true"}),Object(i.jsx)("span",{"aria-hidden":"true"})]})]})}),o&&Object(i.jsx)("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,zIndex:50},children:Object(i.jsx)(_,{})})]})},P=c.p+"static/media/ielts-mockup.f01cb2aa.jpg",H=c.p+"static/media/cattle-stray-mockup.bcf6299f.jpg",F=c.p+"static/media/gravity-mockup.65499a35.jpg",V=c.p+"static/media/simulator-mockup.73692320.jpg",q=c.p+"static/media/techfest-mockup.0904ebc4.jpg",D=c.p+"static/media/covid-mockup.f470f15a.jpg",B=c.p+"static/media/sorting-mockup.71a6f5a3.jpg",G=c(15),A=c.n(G),W=N,J=function(){var e=Object(r.useRef)([]),t=Object(r.useState)(!0),c=Object(u.a)(t,2),s=c[0],a=c[1];return Object(i.jsxs)(b.b.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5,ease:"linear"},children:[Object(i.jsx)(R,{color:W,title:"My Projects"}),Object(i.jsx)("div",{className:"section",children:Object(i.jsxs)("div",{className:"container is-fluid",children:[Object(i.jsx)(E,{color:W,setIsLoading:a}),Object(i.jsxs)("div",{className:"columns",children:[!s&&Object(i.jsxs)("div",{className:"column",children:[Object(i.jsxs)("div",{"data-aos":"fade-up","data-aos-duration":"3000",ref:function(t){e.current[0]=t},className:f()("box",A.a.boxSelector),children:[Object(i.jsx)("figure",{className:"image ",children:Object(i.jsx)("img",{src:P,alt:"IELTS PREPS"})}),Object(i.jsx)("h1",{className:"subtitle mt-3",children:"IELTS PREPS "}),Object(i.jsxs)("div",{className:"tags",children:[Object(i.jsx)("span",{className:"tag is-info is-light",children:"React.js"}),Object(i.jsx)("span",{className:"tag is-info is-light",children:"Firebase"}),Object(i.jsx)("span",{className:"tag is-info is-light",children:"Socket.io"}),Object(i.jsx)("span",{className:"tag is-info is-light",children:"WebRTC"})]}),Object(i.jsxs)("footer",{className:"card-footer",children:[Object(i.jsx)("a",{href:"https://github.com/Ferin79/IELTS-PREPS",target:"_blank",rel:"noreferrer",className:"card-footer-item",children:"View on Github"}),Object(i.jsx)("a",{href:"https://ielts-video-call.herokuapp.com/",target:"_blank",rel:"noreferrer",className:"card-footer-item",children:"Live Project"})]})]}),Object(i.jsxs)("div",{"data-aos":"fade-up","data-aos-duration":"3000",ref:function(t){e.current[0]=t},className:f()("box",A.a.boxSelector),children:[Object(i.jsx)("figure",{className:"image ",children:Object(i.jsx)("img",{src:H,alt:"Cattle Stray"})}),Object(i.jsx)("h1",{className:"subtitle mt-3",children:"Cattle Stray"}),Object(i.jsxs)("div",{className:"tags",children:[Object(i.jsx)("span",{className:"tag is-info is-light",children:"React.js"}),Object(i.jsx)("span",{className:"tag is-info is-light",children:"Firebase"}),Object(i.jsx)("span",{className:"tag is-info is-light",children:"React-Native"}),Object(i.jsx)("span",{className:"tag is-info is-light",children:"Expo"})]}),Object(i.jsxs)("footer",{className:"card-footer",children:[Object(i.jsx)("a",{href:"https://github.com/Ferin79/Cattle-Stray",target:"_blank",rel:"noreferrer",className:"card-footer-item",children:"View on Github"}),Object(i.jsx)("a",{href:"https://drive.google.com/file/d/1kkF4HdrfCxnD7RVJFLUjuff9e1jgurEZ/view?usp=sharing",target:"_blank",rel:"noreferrer",className:"card-footer-item",children:"APK"})]})]}),Object(i.jsxs)("div",{"data-aos":"fade-up","data-aos-duration":"3000",ref:function(t){e.current[0]=t},className:f()("box",A.a.boxSelector),children:[Object(i.jsx)("figure",{className:"image ",children:Object(i.jsx)("img",{src:F,alt:"Gravity Educatin"})}),Object(i.jsx)("h1",{className:"subtitle mt-3",children:"Gravity Education"}),Object(i.jsxs)("div",{className:"tags",children:[Object(i.jsx)("span",{className:"tag is-info is-light",children:"React.js"}),Object(i.jsx)("span",{className:"tag is-info is-light",children:"PHP / Laravel"}),Object(i.jsx)("span",{className:"tag is-info is-light",children:"MySQL"}),Object(i.jsx)("span",{className:"tag is-info is-light",children:"React-Native"}),Object(i.jsx)("span",{className:"tag is-info is-light",children:"Expo"})]}),Object(i.jsxs)("footer",{className:"card-footer",children:[Object(i.jsx)("a",{href:"https://github.com/Ferin79/Online-Exam-MERN",target:"_blank",rel:"noreferrer",className:"card-footer-item",children:"View on Github"}),Object(i.jsx)("a",{href:"https://play.google.com/store/apps/details?id=com.ferinpatel.OnlineExam",target:"_blank",rel:"noreferrer",className:"card-footer-item",children:"Play Store"})]})]}),Object(i.jsxs)("div",{"data-aos":"fade-up","data-aos-duration":"3000",ref:function(t){e.current[0]=t},className:f()("box",A.a.boxSelector),children:[Object(i.jsx)("figure",{className:"image ",children:Object(i.jsx)("img",{src:V,alt:"Simulator 8085"})}),Object(i.jsx)("h1",{className:"subtitle mt-3",children:"Simulator 8085"}),Object(i.jsx)("div",{className:"tags",children:Object(i.jsx)("span",{className:"tag is-info is-light",children:"React.js"})}),Object(i.jsxs)("footer",{className:"card-footer",children:[Object(i.jsx)("a",{href:"https://github.com/Ferin79/Simulate8085",target:"_blank",rel:"noreferrer",className:"card-footer-item",children:"View on Github"}),Object(i.jsx)("a",{href:"https://ferin79.github.io/Simulate8085/",target:"_blank",rel:"noreferrer",className:"card-footer-item",children:"Live Project"})]})]})]}),Object(i.jsxs)("div",{className:"column  is-hidden-touch has-text-centered",children:[Object(i.jsx)(b.a,{children:!s&&Object(i.jsxs)(b.b.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5,ease:"linear"},style:{position:"fixed",top:"10%",left:"50%",transform:"translate(-50%,-10%)"},children:[Object(i.jsx)("h1",{className:"is-size-3-desktop",children:"My Projects"}),Object(i.jsx)(j.b,{to:"/",className:"is-size-6-desktop ",children:"Back to Home"})]})}),Object(i.jsx)(L,{color:W})]}),!s&&Object(i.jsxs)("div",{className:"column",children:[Object(i.jsxs)("div",{"data-aos":"fade-up","data-aos-duration":"3000",ref:function(t){e.current[0]=t},className:f()("box",A.a.boxSelector),children:[Object(i.jsx)("figure",{className:"image",children:Object(i.jsx)("img",{src:q,alt:"TechFest 2020"})}),Object(i.jsx)("h1",{className:"subtitle mt-3",children:"TechFest 2020"}),Object(i.jsxs)("div",{className:"tags",children:[Object(i.jsx)("span",{className:"tag is-info is-light",children:"HTML"}),Object(i.jsx)("span",{className:"tag is-info is-light",children:"CSS"}),Object(i.jsx)("span",{className:"tag is-info is-light",children:"JavaScript"})]}),Object(i.jsxs)("footer",{className:"card-footer",children:[Object(i.jsx)("a",{href:"https://github.com/Ferin79/TechFest2020",target:"_blank",rel:"noreferrer",className:"card-footer-item",children:"View on Github"}),Object(i.jsx)("a",{href:"https://ferin79.github.io/TechFest2020/",target:"_blank",rel:"noreferrer",className:"card-footer-item",children:"Live Project"})]})]}),Object(i.jsxs)("div",{"data-aos":"fade-up","data-aos-duration":"3000",ref:function(t){e.current[0]=t},className:f()("box",A.a.boxSelector),children:[Object(i.jsx)("figure",{className:"image",children:Object(i.jsx)("img",{src:D,alt:"COVID-19"})}),Object(i.jsx)("h1",{className:"subtitle mt-3",children:"COVID-19 Tracker"}),Object(i.jsxs)("div",{className:"tags",children:[Object(i.jsx)("span",{className:"tag is-info is-light",children:"HTML"}),Object(i.jsx)("span",{className:"tag is-info is-light",children:"CSS"}),Object(i.jsx)("span",{className:"tag is-info is-light",children:"JavaScript"})]}),Object(i.jsxs)("footer",{className:"card-footer",children:[Object(i.jsx)("a",{href:"https://github.com/Ferin79/COVID-19",target:"_blank",rel:"noreferrer",className:"card-footer-item",children:"View on Github"}),Object(i.jsx)("a",{href:"https://ferin79.github.io/COVID-19/",target:"_blank",rel:"noreferrer",className:"card-footer-item",children:"Live Project"})]})]}),Object(i.jsxs)("div",{"data-aos":"fade-up","data-aos-duration":"3000",ref:function(t){e.current[0]=t},className:f()("box",A.a.boxSelector),children:[Object(i.jsx)("figure",{className:"image",children:Object(i.jsx)("img",{src:B,alt:"Sorting Visualizer"})}),Object(i.jsx)("h1",{className:"subtitle mt-3",children:"Sorting Visualizer"}),Object(i.jsx)("div",{className:"tags",children:Object(i.jsx)("span",{className:"tag is-info is-light",children:"React.js"})}),Object(i.jsxs)("footer",{className:"card-footer",children:[Object(i.jsx)("a",{href:"https://github.com/Ferin79/sorting-visual",target:"_blank",rel:"noreferrer",className:"card-footer-item",children:"View on Github"}),Object(i.jsx)("a",{href:"https://ferin79.github.io/sorting-visual/",target:"_blank",rel:"noreferrer",className:"card-footer-item",children:"Live Project"})]})]})]})]})]})})]})},Z=c(16),U=c.n(Z),Y=c(18),K=function(){return Object(i.jsxs)("div",{className:"mt-5",children:[Object(i.jsx)("a",{href:"https://github.com/ferin79",target:"_blank",rel:"noreferrer",children:Object(i.jsx)(Y.b,{size:40,color:"#333",className:"ml-3"})}),Object(i.jsx)("a",{href:"https://www.instagram.com/ferin_patel_79/",target:"_blank",rel:"noreferrer",children:Object(i.jsx)(Y.c,{size:40,color:"#fb3958",className:"ml-3"})}),Object(i.jsx)("a",{href:"https://www.facebook.com/people/Ferin-Patel/100004905079172",target:"_blank",rel:"noreferrer",children:Object(i.jsx)(Y.a,{size:40,color:"#3b5998",className:"ml-3"})}),Object(i.jsx)("a",{href:"https://www.linkedin.com/in/ferin-patel-ba031b165/",target:"_blank",rel:"noreferrer",children:Object(i.jsx)(Y.d,{size:40,color:"#0e76a8",className:"ml-3"})}),Object(i.jsx)("a",{href:"https://twitter.com/FerinPatel79",target:"_blank",rel:"noreferrer",children:Object(i.jsx)(Y.f,{size:40,color:"#1da1f2",className:"ml-3"})}),Object(i.jsx)("a",{href:"mailto:ferinpatel79@gmail.com",target:"_blank",rel:"noreferrer",children:Object(i.jsx)(Y.e,{size:40,color:"#BB001B",className:"ml-3"})})]})},Q=c.p+"static/media/resume.b80cd758.pdf",X=v,$=function(){var e=Object(r.useState)(!0),t=Object(u.a)(e,2),c=t[0],s=t[1];return Object(i.jsxs)(b.b.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5,ease:"linear"},children:[Object(i.jsx)(R,{color:X,title:"About Me"}),Object(i.jsx)("div",{className:"section",children:Object(i.jsxs)("div",{className:"container ",children:[Object(i.jsx)(E,{color:X,setIsLoading:s}),Object(i.jsxs)("div",{className:f()("columns is-vcentered",U.a.columnsHeight),children:[!c&&Object(i.jsxs)("div",{className:"column",children:[Object(i.jsx)("h1",{className:"title is-2  is-spaced is-uppercase",children:"Ferin Patel"}),Object(i.jsx)("h1",{className:"subtitle is-4",children:"Full Stack Developer"}),Object(i.jsx)("p",{children:"I am a dedicated and efficient full stack developer and passionate about solving problems with my programming and logical thinking skills. Profuse experience of developing and maintaining web as well as mobile applications."}),Object(i.jsx)("a",{class:"button is-primary my-5",href:Q,target:"_blank",rel:"noreferrer",children:"My Resume"}),Object(i.jsx)(K,{})]}),Object(i.jsxs)("div",{className:"column is-hidden-touch has-text-centered",children:[Object(i.jsx)(b.a,{children:!c&&Object(i.jsxs)(b.b.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5,ease:"linear"},style:{position:"fixed",top:"10%",left:"50%",transform:"translate(-50%,-10%)"},children:[Object(i.jsx)("h1",{className:"is-size-3-desktop",children:"About Me"}),Object(i.jsx)(j.b,{to:"/",className:"is-size-6-desktop ",children:"Back to Home"})]})}),Object(i.jsx)(L,{color:X})]}),!c&&Object(i.jsxs)("div",{className:f()("column",U.a.addMargin),children:[Object(i.jsx)("h3",{class:"title",children:"My Education"}),Object(i.jsxs)("aside",{class:"menu",children:[Object(i.jsx)("p",{class:"menu-label",children:"Undergraduate"}),Object(i.jsxs)("ul",{class:"menu-list",children:[Object(i.jsx)("li",{children:"Bachelor of Engineering"}),Object(i.jsx)("li",{children:Object(i.jsxs)("ul",{children:[Object(i.jsx)("li",{className:"m-2 is-size-5",children:"Computer Engineering"}),Object(i.jsx)("li",{className:"m-2",children:"9.39 CGPA"}),Object(i.jsx)("li",{className:"m-2",children:"Gujarat Technological university"})]})})]}),Object(i.jsx)("p",{class:"menu-label mt-5",children:"School"}),Object(i.jsxs)("ul",{class:"menu-list",children:[Object(i.jsx)("li",{children:"H.S.C"}),Object(i.jsx)("li",{children:Object(i.jsxs)("ul",{children:[Object(i.jsx)("li",{className:"m-2 is-size-5",children:"Bhulka Vihar School"}),Object(i.jsx)("li",{className:"m-2",children:"80 Percent"})]})})]})]})]})]})]})})]})},ee=(c(51),k),te=["html","css","sass","javascript","typescript","react","vue","c","java","python","nodejs","php"],ce=["django","laravel","flutter","graphql","firebase","mysql","postgresql","docker","kubernetes","git"],se=function(){var e=Object(r.useState)(!0),t=Object(u.a)(e,2),c=t[0],s=t[1];return Object(i.jsxs)(b.b.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5,ease:"linear"},children:[Object(i.jsx)(R,{color:ee,title:"My Skills"}),Object(i.jsx)("div",{className:"section",children:Object(i.jsxs)("div",{className:"container is-fluid",children:[Object(i.jsx)(E,{color:ee,setIsLoading:s}),Object(i.jsxs)("div",{className:"columns",children:[!c&&Object(i.jsx)("div",{className:"column",children:Object(i.jsx)("div",{className:"wrapper",children:te.map((function(e,t){return Object(i.jsx)("div",{className:"box item is-clickable",children:Object(i.jsx)("figure",{class:"image is-128x128",children:Object(i.jsx)("img",{src:"https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/".concat(e,"/").concat(e,".png"),alt:e})})},t)}))})}),Object(i.jsxs)("div",{className:"column is-hidden-touch has-text-centered",children:[Object(i.jsx)(b.a,{children:!c&&Object(i.jsxs)(b.b.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5,ease:"linear"},style:{position:"fixed",top:"10%",left:"50%",transform:"translate(-50%,-10%)"},children:[Object(i.jsx)("h1",{className:"is-size-3-desktop",children:"My Skills"}),Object(i.jsx)(j.b,{to:"/",className:"is-size-6-desktop ",children:"Back to Home"})]})}),Object(i.jsx)(L,{color:ee})]}),!c&&Object(i.jsx)("div",{className:"column",children:Object(i.jsx)("div",{className:"wrapper",children:ce.map((function(e,t){return Object(i.jsx)("div",{className:"box item is-clickable",children:Object(i.jsx)("figure",{class:"image is-128x128",children:Object(i.jsx)("img",{src:"https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/".concat(e,"/").concat(e,".png"),alt:e})})},t)}))})})]})]})})]})},ae=c.p+"static/media/mail.009a806b.gif",ie=y,re=function(){var e=Object(r.useState)(!0),t=Object(u.a)(e,2),c=t[0],s=t[1];return Object(i.jsxs)(b.b.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5,ease:"linear"},children:[Object(i.jsx)(R,{color:ie,title:"Contact Me"}),Object(i.jsx)("div",{className:"section",children:Object(i.jsxs)("div",{className:"container is-fluid",children:[Object(i.jsx)(E,{color:ie,setIsLoading:s}),Object(i.jsxs)("div",{className:f()("columns is-vcentered",U.a.columnsHeight),children:[!c&&Object(i.jsxs)("div",{className:"column has-text-centered",children:[Object(i.jsx)("img",{src:ae,alt:"Send Mail"}),Object(i.jsx)("div",{className:"is-hidden-touch",children:Object(i.jsx)(K,{})})]}),Object(i.jsxs)("div",{className:"column is-hidden-touch has-text-centered",children:[Object(i.jsx)(b.a,{children:!c&&Object(i.jsxs)(b.b.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5,ease:"linear"},style:{position:"fixed",top:"10%",left:"50%",transform:"translate(-50%,-10%)"},children:[Object(i.jsx)("h1",{className:"is-size-3-desktop",children:"Contact Me"}),Object(i.jsx)(j.b,{to:"/",className:"is-size-6-desktop ",children:"Back to Home"})]})}),Object(i.jsx)(L,{color:ie})]}),!c&&Object(i.jsxs)("div",{className:"column ",children:[Object(i.jsx)("p",{className:"subtitle is-2",children:"Get In Touch"}),Object(i.jsx)("p",{className:"mb-5",children:"This Contact Form Actually Works"}),Object(i.jsx)("form",{action:"https://formspree.io/f/xoqpkpjd",method:"POST",children:Object(i.jsxs)("div",{className:"box",children:[Object(i.jsxs)("div",{class:"field",children:[Object(i.jsx)("label",{class:"label",children:"Full Name"}),Object(i.jsx)("div",{class:"control",children:Object(i.jsx)("input",{class:"input",type:"text",placeholder:"ex: Ferin Patel",name:"fullname",required:!0})})]}),Object(i.jsxs)("div",{class:"field",children:[Object(i.jsx)("label",{class:"label",children:"Email"}),Object(i.jsx)("div",{class:"control",children:Object(i.jsx)("input",{class:"input",type:"email",placeholder:"ex: ferinpatel@example.com",name:"email",required:!0})})]}),Object(i.jsxs)("div",{class:"field",children:[Object(i.jsx)("label",{class:"label",children:"Message"}),Object(i.jsx)("textarea",{class:"textarea",placeholder:"Type Your message",name:"message"})]}),Object(i.jsx)("button",{class:"button is-primary is-outlined",children:"Send"})]})}),Object(i.jsx)("div",{className:" is-hidden-desktop ",children:Object(i.jsx)(K,{})})]})]})]})})]})},ne=c.p+"static/media/404.56c951f5.gif",le="#000",oe=function(){var e=Object(r.useState)(!0),t=Object(u.a)(e,2),c=t[0],s=t[1];return Object(i.jsxs)(b.b.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5,ease:"linear"},children:[Object(i.jsx)(R,{color:le,title:"About Me"}),Object(i.jsx)("div",{className:"section",children:Object(i.jsxs)("div",{className:"container ",children:[Object(i.jsx)(E,{color:le,setIsLoading:s}),Object(i.jsxs)("div",{className:f()("columns is-vcentered",U.a.columnsHeight),children:[!c&&Object(i.jsx)("div",{className:"column",children:Object(i.jsx)("img",{src:ne,alt:"404 Page Not Found"})}),Object(i.jsxs)("div",{className:"column is-hidden-touch has-text-centered",children:[Object(i.jsx)(b.a,{children:!c&&Object(i.jsxs)(b.b.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5,ease:"linear"},style:{position:"fixed",top:"10%",left:"50%",transform:"translate(-50%,-10%)"},children:[Object(i.jsx)("h1",{className:"is-size-3-desktop",children:"Page Not Found"}),Object(i.jsx)(j.b,{to:"/",className:"is-size-6-desktop ",children:"Back to Home"})]})}),Object(i.jsx)(L,{color:le})]}),!c&&Object(i.jsxs)("div",{className:"column",children:[Object(i.jsx)("p",{className:"is-size-4",children:"Useful Links"}),Object(i.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"flex-start",margin:"5px"},children:[Object(i.jsx)(j.b,{className:"mt-2",to:"/",children:"Home"}),Object(i.jsx)(j.b,{className:"mt-2",to:"/projects",children:"My Projects"}),Object(i.jsx)(j.b,{className:"mt-2",to:"/skills",children:"My Skill"}),Object(i.jsx)(j.b,{className:"mt-2",to:"/about",children:"About Me"}),Object(i.jsx)(j.b,{className:"mt-2",to:"/contact",children:"Contact Me"})]})]})]})]})})]})},je=c(31),de=c.n(je),be=(c(52),c(53),function(){var e=Object(d.h)();return Object(r.useEffect)((function(){de.a.init()}),[]),Object(i.jsx)(b.a,{exitBeforeEnter:!0,children:Object(i.jsxs)(d.d,{location:e,children:[Object(i.jsx)(d.b,{path:"/",exact:!0,component:T}),Object(i.jsx)(d.b,{path:"/about",exact:!0,component:$}),Object(i.jsx)(d.b,{path:"/projects",exact:!0,component:J}),Object(i.jsx)(d.b,{path:"/skills",exact:!0,component:se}),Object(i.jsx)(d.b,{path:"/contact",exact:!0,component:re}),Object(i.jsx)(d.b,{path:"/404",exact:!0,component:oe}),Object(i.jsx)(d.a,{to:"/404"})]},e.key)})});c(54);o.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(j.a,{children:Object(i.jsx)(be,{})})}),document.getElementById("root"))},6:function(e,t,c){e.exports={svgBackgroundContainer:"Menu_svgBackgroundContainer__3vp_4",menuSVG:"Menu_menuSVG__3THfg",changeStrokeColor:"Menu_changeStrokeColor__b73DN",circle:"Menu_circle__31QcF",color:"Menu_color__1ZND4",mainCircle:"Menu_mainCircle__S_xfI",handleClose:"Menu_handleClose__1hhz6",backToHome:"Menu_backToHome__s9d_X",fieldTitle:"Menu_fieldTitle__1dYaY",menu:"Menu_menu__22vzR"}}},[[55,1,2]]]);
//# sourceMappingURL=main.bf7a196d.chunk.js.map