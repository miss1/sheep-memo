(this["webpackJsonpsheep-memo"]=this["webpackJsonpsheep-memo"]||[]).push([[0],{178:function(e,t,a){},188:function(e,t,a){},189:function(e,t,a){},190:function(e,t,a){},191:function(e,t,a){},193:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(130),s=a.n(r),i=a(58),l=a(21),o=a(8),j=(a(178),a(282)),u=a(274),b=a(92),d=a.n(b),O=a(264),x=a(20),p=a(31),h=a(278),m=a(277),f=a(287),v=a(205),g=a(1),y=Object(n.createContext)({showMessage:function(e,t){},hideMessage:function(){},showLoading:function(){},hideLoading:function(){},doRequest:function(){}});var C=function(e){var t=e.children,a=Object(n.useState)(!1),c=Object(o.a)(a,2),r=c[0],s=c[1],i=Object(n.useState)(!1),l=Object(o.a)(i,2),j=l[0],u=l[1],b=Object(n.useRef)(),d=Object(n.useRef)(),O=function(){var e=Object(p.a)(Object(x.a)().mark((function e(t,a,n){var c,r;return Object(x.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t,{method:a||"GET",mode:"cors",headers:{"Content-Type":"application/json"},body:n?JSON.stringify(n):null});case 3:if(c=e.sent,u(!1),!(r=c.headers.get("content-type"))||!r.includes("application/json")){e.next=10;break}return e.abrupt("return",c.json());case 10:return e.abrupt("return",c.text());case 11:e.next=20;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0),u(!1),b.current="error",d.current=e.t0.error,s(!0);case 20:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t,a,n){return e.apply(this,arguments)}}();return Object(g.jsxs)(y.Provider,{value:{showMessage:function(e,t){b.current=e,d.current=t,s(!0)},hideMessage:function(){s(!1)},showLoading:function(){u(!0)},hideLoading:function(){u(!1)},doRequest:function(e,t,a){return u(!0),O(e,t,a)}},children:[t,Object(g.jsx)(h.a,{anchorOrigin:{vertical:"top",horizontal:"center"},open:r,autoHideDuration:1e3,onClose:function(){return s(!1)},children:Object(g.jsx)(m.a,{onClose:function(){return s(!1)},severity:b.current,sx:{width:"100%"},children:d.current})},"topcenter"),Object(g.jsx)(v.a,{sx:{color:"#fff",zIndex:function(e){return e.zIndex.drawer+1}},open:j,children:Object(g.jsx)(f.a,{color:"inherit"})})]})};var w=function(){var e=Object(l.f)(),t=Object(n.useState)(""),a=Object(o.a)(t,2),c=(a[0],a[1]);return Object(n.useContext)(y),Object(g.jsx)("div",{className:"login-page",children:Object(g.jsxs)("div",{className:"login-panel",children:[Object(g.jsxs)("div",{className:"login-title",children:[Object(g.jsx)("span",{children:"Y"}),Object(g.jsx)(d.a,{className:"animate__animated animate__flip",sx:{color:O.a[500],fontSize:40}}),Object(g.jsx)("span",{children:"C"})]}),Object(g.jsx)(u.a,{variant:"outlined",label:"password",size:"small",type:"password",sx:{mb:2},onChange:function(e){return c(e.target.value)}}),Object(g.jsx)(j.a,{variant:"contained",onClick:function(){e.replace({pathname:"/home"})},children:"Login"})]})})},S=a(290),k=a(275),N=a(305),I=a(148),_=a(279),D=(a(188),a(136)),z=a.n(D),R=a(288),Y=[{value:"/home",label:"HOME"},{value:"/special",label:"SPECIAL DAY"},{value:"/plan",label:"PLAN"},{value:"/recipes",label:"RECIPES"}];var M=function(){var e=Object(l.f)(),t=Object(l.g)(),a=Object(n.useState)(null),c=Object(o.a)(a,2),r=c[0],s=c[1],i=Object(n.useState)("/home"),j=Object(o.a)(i,2),u=j[0],b=j[1];Object(n.useEffect)((function(){-1!==t.pathname.indexOf("plan-detail")?b("/plan"):b(t.pathname)}),[b,t]);var x=function(){s(null)};return Object(g.jsxs)("div",{className:"header",children:[Object(g.jsxs)(S.a,{sx:{justifyContent:"space-between",maxWidth:900,width:"100%",display:{xs:"none",md:"flex"}},children:[Object(g.jsx)("p",{className:"header-title",children:"Y&C"}),Object(g.jsx)(k.a,{value:u,onChange:function(t,a){e.push({pathname:a})},"aria-label":"nav tabs example",children:Y.map((function(e){return Object(g.jsx)(N.a,{value:e.value,label:e.label},e.value)}))})]}),Object(g.jsxs)(S.a,{sx:{justifyContent:"space-between",alignItems:"center",width:"100%",display:{xs:"flex",md:"none"}},children:[Object(g.jsx)(d.a,{sx:{color:O.a[500],fontSize:30}}),Object(g.jsx)("p",{className:"header-title",children:"Y&C"}),Object(g.jsx)(R.a,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){s(e.currentTarget)},color:"inherit",children:Object(g.jsx)(z.a,{})}),Object(g.jsx)(I.a,{id:"menu-appbar",anchorEl:r,anchorOrigin:{vertical:"bottom",horizontal:"left"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"left"},open:Boolean(r),onClose:x,sx:{display:{xs:"block",md:"none"}},children:Y.map((function(t){return Object(g.jsx)(_.a,{onClick:function(){return a=t.value,x(),void e.push({pathname:a});var a},children:t.label},t.value)}))})]})]})},q=a(137),E=a.n(q),P=a(152),A=a(269),L=a(291),F=a(283),H=a(53),T=a.n(H),W=a(267),B=a(308),U=a(306),J=a(307),G=a(268),X=a(64),K=a.n(X);function Q(e){var t=c.a.useState(!1),a=Object(o.a)(t,2),r=a[0],s=a[1],i=c.a.useState(""),l=Object(o.a)(i,2),u=l[0],b=l[1],d=c.a.useState(""),O=Object(o.a)(d,2),x=O[0],p=O[1];Object(n.useImperativeHandle)(e.onRef,(function(){return{openDialog:h}}));var h=function(e,t){t&&p(t),b(e),s(!0)},m=function(){s(!1)};return Object(g.jsxs)(W.a,{open:r,onClose:m,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(g.jsx)(G.a,{id:"alert-dialog-title",children:"\u5220\u9664"}),Object(g.jsx)(U.a,{children:Object(g.jsxs)(J.a,{id:"alert-dialog-description",sx:{display:"flex",alignItems:"center"},children:[Object(g.jsx)(K.a,{sx:{color:"#ef5350"}}),u]})}),Object(g.jsxs)(B.a,{children:[Object(g.jsx)(j.a,{onClick:m,children:"\u53d6\u6d88"}),Object(g.jsx)(j.a,{onClick:function(){e.doDelete(x),m()},autoFocus:!0,children:"\u786e\u5b9a"})]})]})}var V=a(17),Z=a.n(V);var $=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],r=(t[1],Object(n.useState)([])),s=Object(o.a)(r,2),i=s[0],j=(s[1],Object(n.useState)([])),u=Object(o.a)(j,2),b=u[0],d=(u[1],Object(n.useState)([])),O=Object(o.a)(d,2),x=O[0],p=(O[1],Object(n.useState)([])),h=Object(o.a)(p,2),m=h[0],f=(h[1],Object(n.useContext)(y),Object(l.f)()),v=c.a.createRef(),C=function(e,t){v.current.openDialog("\u786e\u5b9a\u4ece".concat(t,"\u4e2d\u5220\u9664\uff1a").concat(e.menu.name,"\uff1f"),e.objectId)};return Object(n.useEffect)((function(){}),[]),Object(g.jsxs)("div",{className:"page",children:[Object(g.jsx)(M,{}),Object(g.jsx)("div",{className:"content-page",children:Object(g.jsxs)("div",{className:"page-scroll",children:[Object(g.jsxs)("div",{className:"home-time animate__animated animate__fadeInDown",style:{display:"flex",alignItems:"center",marginBottom:"20px"},children:[Object(g.jsx)(E.a,{sx:{color:"#F19595"}}),Object(g.jsx)(P.a,{variant:"h5",color:"#F19595",children:Z()().format("YYYY-MM-DD")})]}),Object(g.jsx)(S.a,{children:Object(g.jsxs)(A.a,{spacing:2,children:[Object(g.jsx)(P.a,{variant:"subtitle1",color:"text.secondary",children:"\u6700\u8fd1\u7684\u8ba1\u5212"}),a.map((function(e){return Object(g.jsxs)(L.a,{className:"animate__animated animate__fadeInLeft",sx:{backgroundColor:"rgb(253, 237, 237)",borderRadius:"4px",padding:"15px"},onClick:function(){var t;(t=e.objectId)&&f.push({pathname:"/plan-detail/"+t})},children:[Object(g.jsx)(P.a,{variant:"subtitle2",sx:{mt:1},children:e.title}),Object(g.jsx)(P.a,{variant:"subtitle2",children:e.describe}),Object(g.jsx)(P.a,{variant:"subtitle2",children:e.time})]},e.objectId)})),Object(g.jsxs)("div",{className:"animate__animated animate__fadeInRight",style:{backgroundColor:"rgb(229, 246, 253)",borderRadius:"4px",padding:"15px"},children:[Object(g.jsx)(P.a,{variant:"subtitle1",color:"text.secondary",children:"\u4eca\u65e5\u83dc\u5355"}),Object(g.jsx)(P.a,{variant:"subtitle2",sx:{mt:2},children:"\u65e9\u9910"}),Object(g.jsx)("div",{style:{display:"flex",flexWrap:"wrap"},children:i.map((function(e){return Object(g.jsx)(F.a,{label:e.menu.name,onDelete:function(){return C(e,"\u65e9\u9910")},deleteIcon:Object(g.jsx)(T.a,{}),sx:{margin:"5px"}},e.objectId)}))}),Object(g.jsx)(P.a,{variant:"subtitle2",sx:{mt:2},children:"\u5348\u9910"}),Object(g.jsx)("div",{style:{display:"flex",flexWrap:"wrap"},children:b.map((function(e){return Object(g.jsx)(F.a,{label:e.menu.name,onDelete:function(){return C(e,"\u5348\u9910")},deleteIcon:Object(g.jsx)(T.a,{}),sx:{margin:"5px"}},e.objectId)}))}),Object(g.jsx)(P.a,{variant:"subtitle2",sx:{mt:2},children:"\u665a\u9910"}),Object(g.jsx)("div",{style:{display:"flex",flexWrap:"wrap"},children:x.map((function(e){return Object(g.jsx)(F.a,{label:e.menu.name,onDelete:function(){return C(e,"\u665a\u9910")},deleteIcon:Object(g.jsx)(T.a,{}),sx:{margin:"5px"}},e.objectId)}))})]})]})})]})}),Object(g.jsx)("div",{style:{position:"absolute",bottom:"20px",display:"flex",justifyContent:"center",width:"100%"},children:Object(g.jsx)(F.a,{className:"animate__animated animate__flipInX",label:m.name+" ("+m.time+")",sx:{margin:"5px",backgroundColor:"rgb(237, 247, 237)"}})}),Object(g.jsx)(Q,{onRef:v,doDelete:function(e){}})]})},ee=(a(189),a(296)),te=a(297),ae=a(298),ne=a(140),ce=a.n(ne),re=a(138),se=a.n(re),ie=a(292),le=a(284),oe=a(293),je=a(295),ue=a(270),be=a(294);var de=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],c=(t[1],Object(n.useState)([])),r=Object(o.a)(c,2),s=r[0],i=(r[1],Object(n.useState)(!0)),l=Object(o.a)(i,2),j=l[0],u=l[1];return Object(n.useContext)(y),Z.a.extend(se.a),Object(n.useEffect)((function(){}),[]),Object(g.jsxs)("div",{className:"page",children:[Object(g.jsx)(M,{}),Object(g.jsx)("div",{className:"content-page",children:j?Object(g.jsxs)("div",{className:"page-scroll special-timeline",children:[Object(g.jsx)(ie.a,{position:"alternate",className:"animate__animated animate__fadeIn",children:s.map((function(e){return Object(g.jsxs)(le.a,{children:[Object(g.jsxs)(oe.a,{children:[Object(g.jsx)(be.a,{color:"success"}),Object(g.jsx)(je.a,{})]}),Object(g.jsxs)(ue.a,{children:[e.name," (",e.time,")"]})]},e.objectId)}))}),Object(g.jsx)(P.a,{variant:"string",sx:{textAlign:"center"},children:"to be continued"})]}):Object(g.jsx)("div",{className:"page-scroll special-page",children:a.map((function(e){return Object(g.jsx)(ee.a,{className:"animate__animated animate__fadeInUp",sx:{width:{xs:"100%",md:"49%"},margin:"5px 0"},children:Object(g.jsxs)(te.a,{sx:{m:0,p:0},children:[Object(g.jsxs)("div",{className:1===e.type?"special-head-down":"special-head-up",children:[Object(g.jsx)("p",{children:e.name}),Object(g.jsx)("p",{children:1===e.type?"Arrives in":"Already"})]}),Object(g.jsx)("p",{className:"special-content",children:e.days}),Object(g.jsx)("p",{className:"special-sub-content",children:e.duration}),Object(g.jsx)("p",{className:"special-foot",children:e.time})]})},e.objectId)}))})}),Object(g.jsx)(ae.a,{className:"animate__animated animate__bounceIn",onClick:function(){u(!j)},color:j?"warning":"primary",sx:{position:"absolute",bottom:"5%",right:"10%"},children:Object(g.jsx)(ce.a,{})})]})},Oe=(a(190),a(300)),xe=a(286),pe=a(301),he=a(98),me=a.n(he),fe=a(48),ve=a(276),ge=a(285),ye=a(299),Ce=a(289),we=a(265),Se=a(273),ke=a(271),Ne=a(149);function Ie(e){var t=Object(n.useState)(!1),a=Object(o.a)(t,2),c=a[0],r=a[1],s=Object(n.useState)(""),i=Object(o.a)(s,2),l=i[0],b=i[1],d=Object(n.useState)(""),O=Object(o.a)(d,2),h=O[0],m=O[1],f=Object(n.useState)("info"),v=Object(o.a)(f,2),C=v[0],w=v[1],S=Object(n.useState)(Z()()),k=Object(o.a)(S,2),N=k[0],I=k[1],_=Object(n.useContext)(y);Object(n.useImperativeHandle)(e.onRef,(function(){return{openDialog:D}}));var D=function(){r(!0)},z=function(){r(!1)},R=function(){var t=Object(p.a)(Object(x.a)().mark((function t(){var a,n;return Object(x.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""!==l){t.next=2;break}return t.abrupt("return");case 2:return z(),a={describe:h,time:Z()(N).valueOf(),title:l,type:C},t.next=6,_.doRequest("https://createtrip-drmnut5neq-uc.a.run.app","PUT",a);case 6:n=t.sent,_.showMessage("success",n),e.refreshPage();case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(g.jsx)("div",{children:Object(g.jsxs)(W.a,{open:c,onClose:z,children:[Object(g.jsx)(G.a,{children:"Add a new Plan"}),Object(g.jsxs)(U.a,{children:[Object(g.jsxs)(Ce.a,{children:[Object(g.jsx)(we.a,{id:"demo-row-radio-buttons-group-label",children:"Plan type"}),Object(g.jsxs)(ge.a,{row:!0,"aria-labelledby":"demo-row-radio-buttons-group-label",name:"row-radio-buttons-group",value:C,onChange:function(e){w(e.target.value)},children:[Object(g.jsx)(ye.a,{value:"success",control:Object(g.jsx)(ve.a,{size:"small"}),label:"completed"}),Object(g.jsx)(ye.a,{value:"error",control:Object(g.jsx)(ve.a,{size:"small"}),label:"planned"})]})]}),Object(g.jsx)(u.a,{variant:"outlined",label:"plan name",size:"small",type:"text",sx:{mb:2,mt:1},error:""===l,onChange:function(e){return b(e.target.value)}}),Object(g.jsx)(u.a,{variant:"outlined",label:"describe",size:"small",type:"text",sx:{mb:2},onChange:function(e){return m(e.target.value)}}),Object(g.jsx)(Ne.a,{dateAdapter:ke.a,children:Object(g.jsx)(A.a,{spacing:1,children:Object(g.jsx)(Se.a,{label:"Start time",inputFormat:"YYYY-MM-DD",value:N,onChange:function(e){I(e)},renderInput:function(e){return Object(g.jsx)(u.a,Object(fe.a)(Object(fe.a)({},e),{},{size:"small"}))}})})})]}),Object(g.jsxs)(B.a,{children:[Object(g.jsx)(j.a,{onClick:z,children:"Cancel"}),Object(g.jsx)(j.a,{onClick:R,children:"Add"})]})]})})}var _e=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)([]),i=Object(o.a)(s,2),j=i[0],u=i[1],b=Object(l.f)(),d=c.a.createRef(),O=Object(n.useContext)(y),h=function(){var e=Object(p.a)(Object(x.a)().mark((function e(t){var n,c;return Object(x.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=void 0===t?a:t,e.next=3,O.doRequest("https://querytrips-drmnut5neq-uc.a.run.app?type=".concat(n));case 3:c=e.sent,u(c);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){h()}),[]),Object(g.jsxs)("div",{className:"page",children:[Object(g.jsx)(M,{}),Object(g.jsx)("div",{className:"content-page",children:Object(g.jsxs)("div",{className:"page-scroll",children:[Object(g.jsxs)(xe.a,{color:"primary",value:a,exclusive:!0,onChange:function(e,t){h(t),r(t)},sx:{mt:"5px"},"aria-label":"Platform",children:[Object(g.jsx)(Oe.a,{size:"small",value:"",children:"all"}),Object(g.jsx)(Oe.a,{size:"small",value:"success",children:"completed"}),Object(g.jsx)(Oe.a,{size:"small",value:"error",children:"planned"})]}),Object(g.jsx)("div",{className:"plan-content",children:j.map((function(e){return Object(g.jsx)(L.a,{className:"animate__animated animate__fadeInUp",sx:{mt:"10px"},onClick:function(){return t=e.id,void b.push({pathname:"/plan-detail/"+t});var t},children:Object(g.jsxs)(m.a,{severity:e.type,children:[Object(g.jsx)(pe.a,{children:e.title}),e.describe," -- ",Object(g.jsx)("strong",{children:Z()(e.time).format("MM/DD/YYYY")})]})},e.id)}))})]})}),Object(g.jsx)(ae.a,{onClick:function(){d.current.openDialog()},color:"primary",sx:{position:"absolute",bottom:"5%",right:"10%"},children:Object(g.jsx)(me.a,{})}),Object(g.jsx)(Ie,{onRef:d,refreshPage:h})]})},De=a(144),ze=a.n(De),Re=a(145),Ye=a.n(Re);function Me(e){var t=Object(n.useState)({}),a=Object(o.a)(t,2),r=a[0],s=a[1],i=Object(n.useState)(!1),b=Object(o.a)(i,2),d=b[0],O=b[1],h=Object(n.useState)(""),m=Object(o.a)(h,2),f=m[0],v=m[1],C=Object(n.useState)(""),w=Object(o.a)(C,2),S=w[0],k=w[1],N=Object(n.useState)("info"),I=Object(o.a)(N,2),_=I[0],D=I[1],z=Object(n.useState)(Z()()),R=Object(o.a)(z,2),Y=R[0],q=R[1],E=Object(n.useState)(Z()()),L=Object(o.a)(E,2),F=L[0],H=L[1],W=c.a.createRef(),B=Object(l.f)(),U=Object(n.useContext)(y),J=function(){var t=Object(p.a)(Object(x.a)().mark((function t(){var a;return Object(x.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,U.doRequest("https://querytrip-drmnut5neq-uc.a.run.app?id=".concat(e.match.params.id));case 2:a=t.sent,console.log(a),s(a),G(a);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),G=function(e){v(e.title),k(e.describe),D(e.type),q(e.time?Z()(e.time):Z()()),H(e.detail)},X=function(){var e=Object(p.a)(Object(x.a)().mark((function e(){var t,a;return Object(x.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==f){e.next=2;break}return e.abrupt("return");case 2:return t={describe:S,detail:F,time:Z()(Y).valueOf(),title:f,type:_},e.next=5,U.doRequest("https://updatetrip-drmnut5neq-uc.a.run.app?id=".concat(r.id),"POST",t);case 5:a=e.sent,U.showMessage("success",a),O(!1),J();case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),V=function(){var e=Object(p.a)(Object(x.a)().mark((function e(){var t;return Object(x.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.doRequest("https://deletetrip-drmnut5neq-uc.a.run.app?id=".concat(r.id),"DELETE");case 2:t=e.sent,U.showMessage("success",t),O(!1),B.go(-1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){J()}),[]),Object(g.jsxs)("div",{className:"page",children:[Object(g.jsx)(M,{}),Object(g.jsx)("div",{className:"content-page",children:Object(g.jsx)("div",{className:"page-scroll",children:d?Object(g.jsxs)("div",{className:"plan-detail-edit",style:{display:"flex",flexDirection:"column"},children:[Object(g.jsx)(u.a,{variant:"outlined",label:"plan name",size:"small",type:"text",sx:{mb:2,mt:1},value:f,error:""===f,onChange:function(e){return v(e.target.value)}}),Object(g.jsxs)(Ce.a,{children:[Object(g.jsx)(we.a,{id:"demo-row-radio-buttons-group-label",children:"Plan type"}),Object(g.jsxs)(ge.a,{row:!0,"aria-labelledby":"demo-row-radio-buttons-group-label",name:"row-radio-buttons-group",value:_,onChange:function(e){return D(e.target.value)},children:[Object(g.jsx)(ye.a,{value:"success",control:Object(g.jsx)(ve.a,{size:"small"}),label:"completed"}),Object(g.jsx)(ye.a,{value:"error",control:Object(g.jsx)(ve.a,{size:"small"}),label:"planned"})]})]}),Object(g.jsx)(u.a,{variant:"outlined",label:"describe",size:"small",type:"text",value:S,sx:{mb:2},onChange:function(e){return k(e.target.value)}}),Object(g.jsx)(Ne.a,{dateAdapter:ke.a,children:Object(g.jsx)(A.a,{spacing:1,children:Object(g.jsx)(Se.a,{label:"Start time",inputFormat:"YYYY-MM-DD",value:Y,onChange:function(e){return q(e)},renderInput:function(e){return Object(g.jsx)(u.a,Object(fe.a)(Object(fe.a)({},e),{},{size:"small"}))}})})}),Object(g.jsx)(u.a,{variant:"outlined",label:"Detail",size:"small",type:"text",value:F,fullWidth:!0,multiline:!0,rows:12,sx:{mb:2,mt:1},onChange:function(e){return H(e.target.value)}}),Object(g.jsxs)("div",{style:{display:"flex"},children:[Object(g.jsx)(j.a,{variant:"contained",onClick:X,sx:{width:"30%"},children:"\u4fdd\u5b58"}),Object(g.jsx)(j.a,{variant:"contained",color:"error",onClick:function(){W.current.openDialog("Are you sure you want to delete this data?")},sx:{width:"30%",margin:"0 5px"},children:"\u5220\u9664"})]})]}):Object(g.jsxs)("div",{className:"plan-detail-content",children:[Object(g.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(g.jsx)(P.a,{variant:"h6",children:r.title}),function(e){switch(e){case"success":return Object(g.jsx)(ze.a,{sx:{color:"#4caf50"}});case"error":return Object(g.jsx)(K.a,{sx:{color:"#ef5350"}});default:return Object(g.jsx)(K.a,{sx:{color:"#03a9f4"}})}}(r.type)]}),Object(g.jsx)(P.a,{variant:"subtitle1",children:r.describe}),Object(g.jsx)(P.a,{variant:"subtitle1",sx:{mt:2},children:"\u65f6\u95f4"}),Object(g.jsx)(P.a,{variant:"subtitle2",children:Z()(r.time).format("MM/DD/YYYY")}),Object(g.jsx)(P.a,{variant:"subtitle1",sx:{mt:2},children:"\u8ba1\u5212"}),Object(g.jsx)(P.a,{variant:"subtitle2",sx:{whiteSpace:"pre-line"},children:r.detail})]})})}),Object(g.jsx)(ae.a,{onClick:function(){d&&G(r),O(!d)},color:d?"warning":"primary",sx:{position:"absolute",bottom:"5%",right:"10%"},children:d?Object(g.jsx)(T.a,{}):Object(g.jsx)(Ye.a,{})}),Object(g.jsx)(Q,{onRef:W,doDelete:V})]})}var qe=a(302),Ee=a(303),Pe=a(304),Ae=a(146),Le=a.n(Ae),Fe=a.p+"static/media/cook-default.215755eb.jpg";function He(e){var t=Object(n.useState)(!1),a=Object(o.a)(t,2),c=a[0],r=a[1],s=Object(n.useState)(""),i=Object(o.a)(s,2),l=i[0],b=i[1],d=Object(n.useContext)(y);Object(n.useImperativeHandle)(e.onRef,(function(){return{openDialog:O}}));var O=function(){r(!0)},h=function(){r(!1)},m=function(){var t=Object(p.a)(Object(x.a)().mark((function t(){var a,n;return Object(x.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return h(),a={name:l,frequency:0},t.next=4,d.doRequest("https://createrecipe-drmnut5neq-uc.a.run.app","PUT",a);case 4:n=t.sent,d.showMessage("success",n),e.refreshPage();case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(g.jsx)("div",{children:Object(g.jsxs)(W.a,{open:c,onClose:h,children:[Object(g.jsx)(G.a,{children:"\u6dfb\u52a0\u65b0\u83dc"}),Object(g.jsxs)(U.a,{children:[Object(g.jsx)(J.a,{children:"\u6ca1\u6709\u627e\u5230\u4f60\u60f3\u5403\u7684\u83dc\u5417\uff1f\u544a\u8bc9\u6211\u4f60\u60f3\u5403\u5565\uff01"}),Object(g.jsx)(u.a,{autoFocus:!0,margin:"dense",label:"name",size:"small",type:"text",fullWidth:!0,variant:"outlined",onChange:function(e){return b(e.target.value)}})]}),Object(g.jsxs)(B.a,{children:[Object(g.jsx)(j.a,{onClick:h,children:"\u53d6\u6d88"}),Object(g.jsx)(j.a,{onClick:m,children:"\u63d0\u4ea4"})]})]})})}function Te(e){var t=Object(n.useState)(!1),a=Object(o.a)(t,2),c=a[0],r=a[1],s=Object(n.useState)("0"),i=Object(o.a)(s,2),l=i[0],b=i[1],d=Object(n.useState)(Z()()),O=Object(o.a)(d,2),x=O[0],p=O[1],h=Object(n.useState)(""),m=Object(o.a)(h,2),f=(m[0],m[1]),v=Object(n.useState)(""),C=Object(o.a)(v,2),w=C[0],S=C[1];Object(n.useContext)(y);Object(n.useImperativeHandle)(e.onRef,(function(){return{openDialog:N}}));var k=function(){r(!1)},N=function(e){f(e.id),S(e.name),r(!0),p(Z()()),b("0")};return Object(g.jsx)("div",{children:Object(g.jsxs)(W.a,{open:c,onClose:k,children:[Object(g.jsx)(G.a,{children:"\u70b9\u83dc"}),Object(g.jsxs)(U.a,{children:[Object(g.jsx)(P.a,{variant:"h6",children:w}),Object(g.jsxs)(Ce.a,{sx:{mb:1,mt:1},children:[Object(g.jsx)(we.a,{id:"time-radio-group-label",children:"\u65f6\u95f4"}),Object(g.jsxs)(ge.a,{row:!0,"aria-labelledby":"time-radio-group-label",name:"time-radio-buttons-group",value:l,onChange:function(e){b(e.target.value)},children:[Object(g.jsx)(ye.a,{value:"0",control:Object(g.jsx)(ve.a,{size:"small"}),label:"\u65e9\u9910"}),Object(g.jsx)(ye.a,{value:"1",control:Object(g.jsx)(ve.a,{size:"small"}),label:"\u5348\u9910"}),Object(g.jsx)(ye.a,{value:"2",control:Object(g.jsx)(ve.a,{size:"small"}),label:"\u665a\u9910"})]})]}),Object(g.jsx)(Ne.a,{dateAdapter:ke.a,children:Object(g.jsx)(A.a,{spacing:1,children:Object(g.jsx)(Se.a,{label:"\u65e5\u671f",inputFormat:"YYYY-MM-DD",value:x,onChange:function(e){p(e)},renderInput:function(e){return Object(g.jsx)(u.a,Object(fe.a)(Object(fe.a)({},e),{},{size:"small"}))}})})})]}),Object(g.jsxs)(B.a,{children:[Object(g.jsx)(j.a,{onClick:k,children:"\u53d6\u6d88"}),Object(g.jsx)(j.a,{onClick:function(){},children:"\u6dfb\u52a0"})]})]})})}var We=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)({}),i=Object(o.a)(s,2),l=i[0],u=i[1],b=Object(n.useState)(!1),d=Object(o.a)(b,2),O=d[0],h=d[1],m=Object(n.useContext)(y),f=c.a.createRef(),v=c.a.createRef(),C=function(){var e=Object(p.a)(Object(x.a)().mark((function e(){var t;return Object(x.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.doRequest("https://queryrecipes-drmnut5neq-uc.a.run.app");case 2:t=e.sent,r(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(e,t,a){e.stopPropagation(),v.current.openDialog({id:t,name:a})};return Object(n.useEffect)((function(){C()}),[]),Object(g.jsxs)("div",{className:"page",children:[Object(g.jsx)(M,{}),Object(g.jsx)("div",{className:"content-page",children:Object(g.jsx)("div",{className:"page-scroll",children:O?Object(g.jsxs)("div",{children:[Object(g.jsx)("img",{style:{width:"100%",maxHeight:300},src:l.img||Fe,alt:l.name,loading:"lazy"}),Object(g.jsx)(P.a,{variant:"h5",gutterBottom:!0,children:l.name}),Object(g.jsx)(P.a,{variant:"h6",children:"\u539f\u6750\u6599"}),Object(g.jsx)("p",{style:{whiteSpace:"pre-line",margin:"5px 0 20px"},children:l.ingredients}),Object(g.jsx)(P.a,{variant:"h6",children:"\u5236\u4f5c\u65b9\u6cd5"}),Object(g.jsx)("p",{style:{whiteSpace:"pre-line",margin:"5px 0 20px"},children:l.describe}),Object(g.jsx)(j.a,{variant:"contained",onClick:function(e){return w(e,l.objectId,l.name)},children:"\u4e0b\u5355"})]}):Object(g.jsx)(qe.a,{children:a.map((function(e){return Object(g.jsxs)(Ee.a,{onClick:function(){return function(e){u(e),h(!0)}(e)},children:[Object(g.jsx)("img",{src:e.img||Fe,alt:e.name,loading:"lazy"}),Object(g.jsx)(Pe.a,{title:e.name,subtitle:"\u5df2\u70b9\uff1a"+e.frequency,actionIcon:Object(g.jsx)(R.a,{sx:{color:"rgba(255, 255, 255, 0.54)"},"aria-label":"info about ".concat(e.name),onClick:function(t){return w(t,e.objectId,e.name)},children:Object(g.jsx)(Le.a,{})})})]},e.id)}))})})}),Object(g.jsx)(ae.a,{onClick:function(){O?h(!1):f.current.openDialog()},color:O?"warning":"primary",sx:{position:"absolute",bottom:"5%",right:"10%"},children:O?Object(g.jsx)(T.a,{}):Object(g.jsx)(me.a,{})}),Object(g.jsx)(He,{onRef:f,refreshPage:C}),Object(g.jsx)(Te,{onRef:v})]})};var Be=function(){return Object(g.jsx)(i.a,{children:Object(g.jsxs)(l.c,{children:[Object(g.jsx)(l.a,{path:"/home",component:$}),Object(g.jsx)(l.a,{path:"/special",component:de}),Object(g.jsx)(l.a,{path:"/plan",component:_e}),Object(g.jsx)(l.a,{path:"/plan-detail/:id",component:Me}),Object(g.jsx)(l.a,{path:"/recipes",component:We}),Object(g.jsx)(l.a,{path:"/",component:w})]})})},Ue=(a(191),a(192),a(272));s.a.createRoot(document.getElementById("root")).render(Object(g.jsxs)("div",{className:"yc",children:[Object(g.jsx)(Ue.a,{}),Object(g.jsx)(C,{children:Object(g.jsx)(Be,{})})]}))}},[[193,1,2]]]);
//# sourceMappingURL=main.165de887.chunk.js.map