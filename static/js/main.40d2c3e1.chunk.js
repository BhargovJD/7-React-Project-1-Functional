(this.webpackJsonpproject1=this.webpackJsonpproject1||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),i=c(7),r=c.n(i),j=(c(13),c(2)),l=c(8),a=c(5),b=c(0);function d(e){var t,c=e.newItem,n=e.setNewItem,i=e.submit,r=Object(s.useRef)();return Object(b.jsx)("div",{class:"text-center ",children:Object(b.jsx)("div",(t={class:"text-center"},Object(j.a)(t,"class","container"),Object(j.a)(t,"children",Object(b.jsxs)("div",{class:"row",children:[Object(b.jsx)("div",{class:"col-sm-2"}),Object(b.jsx)("div",{class:"col-sm-8 ",children:Object(b.jsxs)("form",{onSubmit:function(e){return i(e)},children:[Object(b.jsxs)("div",{class:"mb-3",children:[Object(b.jsx)("label",{for:"exampleInputEmail1",class:"form-label",children:"Add some item"}),Object(b.jsx)("input",{ref:r,type:"text",class:"form-control",value:c,onChange:function(e){return n(e.target.value)}})]}),Object(b.jsx)("button",{onClick:function(){r.current.focus()},type:"submit",class:"btn btn-success",children:"Add"})]})}),Object(b.jsx)("div",{class:"col-sm-2"})]})),t))})}function o(e){var t,c=e.setSearchTerm;return Object(b.jsx)("div",{class:"text-center ",children:Object(b.jsx)("div",(t={class:"text-center"},Object(j.a)(t,"class","container"),Object(j.a)(t,"children",Object(b.jsxs)("div",{class:"row",children:[Object(b.jsx)("div",{class:"col-sm-2"}),Object(b.jsx)("div",{class:"col-sm-8 ",children:Object(b.jsx)("input",{onChange:function(e){c(e.target.value)},type:"text",class:"form-control text-center",placeholder:"Search item","aria-label":"Username","aria-describedby":"basic-addon1"})}),Object(b.jsx)("div",{class:"col-sm-2"})]})),t))})}function O(){var e,t=Object(s.useState)([{id:1,name:"Rice"},{id:2,name:"Oil"},{id:3,name:"Juice"}]),c=Object(a.a)(t,2),n=c[0],i=c[1],r=Object(s.useState)(""),O=Object(a.a)(r,2),x=O[0],h=O[1],u=Object(s.useState)(""),m=Object(a.a)(u,2),v=m[0],f=m[1];return Object(b.jsx)("div",{children:Object(b.jsx)("div",{class:"text-center ",children:Object(b.jsx)("div",(e={class:"text-center"},Object(j.a)(e,"class","container"),Object(j.a)(e,"children",Object(b.jsxs)("div",{class:"row",children:[Object(b.jsx)("div",{class:"col-sm-2"}),Object(b.jsxs)("div",{class:"col-sm-8 ",children:[Object(b.jsx)("br",{}),Object(b.jsx)(d,{newItem:x,setNewItem:h,submit:function(e){e.preventDefault(),x&&(!function(e){var t={id:n.length?n[n.length-1].id+1:1,name:e},c=[].concat(Object(l.a)(n),[t]);console.log(c),i(c)}(x),h(""))}}),Object(b.jsx)("br",{}),Object(b.jsx)("h5",{children:"All items"}),Object(b.jsx)(o,{searchTerm:v,setSearchTerm:f}),Object(b.jsxs)("table",{class:"table",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"Id"}),Object(b.jsx)("th",{children:"Item name"}),Object(b.jsx)("th",{children:"Action"})]})}),Object(b.jsx)("tbody",{children:n.filter((function(e){return""===v||e.name.toLowerCase().includes(v.toLowerCase())?e:void 0})).map((function(e){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:e.id}),Object(b.jsx)("td",{children:e.name}),Object(b.jsxs)("td",{children:["  ",Object(b.jsx)("button",{onClick:function(){return function(e){var t=n.filter((function(t){return t.id!==e}));i(t)}(e.id)},type:"button",class:"btn btn-danger",children:"Delete"})]})]},e.id)}))})]})]}),Object(b.jsx)("div",{class:"col-sm-2"})]})),e))})})}function x(){var e;return Object(b.jsx)("div",{class:"text-center ",children:Object(b.jsx)("div",(e={class:"text-center"},Object(j.a)(e,"class","container"),Object(j.a)(e,"children",Object(b.jsxs)("div",{class:"row",children:[Object(b.jsx)("div",{class:"col-sm-2"}),Object(b.jsx)("div",{class:"col-sm-8 bg-danger text-white",children:Object(b.jsx)("h2",{children:"My Shopping List"})}),Object(b.jsx)("div",{class:"col-sm-2"})]})),e))})}var h=function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(x,{}),Object(b.jsx)("br",{}),Object(b.jsx)(O,{})]})},u=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,16)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,i=t.getLCP,r=t.getTTFB;c(e),s(e),n(e),i(e),r(e)}))};r.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(h,{})}),document.getElementById("root")),u()}},[[15,1,2]]]);
//# sourceMappingURL=main.40d2c3e1.chunk.js.map