(this["webpackJsonp2.6-2.11"]=this["webpackJsonp2.6-2.11"]||[]).push([[0],{38:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var c=t(2),r=t(14),u=t.n(r),o=t(3),a=t(0),i=function(e){var n=e.person,t=e.deleteNumber;return Object(a.jsx)("div",{children:Object(a.jsxs)("li",{children:[n.name," ",n.number," ",Object(a.jsx)("button",{onClick:function(){return t(n.id)},value:n.id,children:"delete"})]})})},s=function(e){var n=e.persons,t=e.search,c=e.deleteNumber;console.log(n);var r=n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())||e.number.includes(t)}));return Object(a.jsx)("div",{children:r.map((function(e){return Object(a.jsx)(i,{person:e,deleteNumber:c},e.name)}))})},d=function(e){return Object(a.jsxs)("form",{onSubmit:e.addPerson,children:[Object(a.jsxs)("div",{children:["name: ",Object(a.jsx)("input",{value:e.newName,onChange:e.addName})]}),Object(a.jsxs)("div",{children:["number: ",Object(a.jsx)("input",{value:e.newNumber,onChange:e.addNumber})]}),Object(a.jsx)("div",{children:Object(a.jsx)("button",{type:"submit",children:"add"})})]})},l=function(e){var n=e.search,t=e.addSearch;return Object(a.jsxs)("div",{children:["search: ",Object(a.jsx)("input",{value:n,onChange:t})]})},b=t(4),j=t.n(b),f="https://frozen-tundra-20015.herokuapp.com/api/persons",m=function(){return j.a.get(f).then((function(e){return e.data}))},h=function(e){return j.a.post(f,e).then((function(e){return e.data}))},O=function(e,n){return j.a.put("".concat(f,"/").concat(e),n).then((function(e){return e.data}))},p=function(e){return j.a.delete("".concat(f,"/").concat(e)).then((function(e){return e.data}))},v=function(e){var n=e.message,t=e.color;return null===n?null:Object(a.jsx)("div",{className:t,children:n})},x=function(){var e=Object(c.useState)([]),n=Object(o.a)(e,2),t=n[0],r=n[1],u=Object(c.useState)(""),i=Object(o.a)(u,2),b=i[0],j=i[1],f=Object(c.useState)(""),x=Object(o.a)(f,2),g=x[0],w=x[1],N=Object(c.useState)(""),S=Object(o.a)(N,2),y=S[0],k=S[1],C=Object(c.useState)(null),D=Object(o.a)(C,2),P=D[0],T=D[1],E=Object(c.useState)("error"),J=Object(o.a)(E,2),L=J[0],z=J[1];Object(c.useEffect)((function(){console.log("effect"),m().then((function(e){console.log("promise fulfilled"),r(e),console.log("promise fulfilled")}))}),[]);return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Phonebook"}),Object(a.jsx)(v,{message:P,color:L}),Object(a.jsx)(l,{search:y,addSearch:function(e){k(e.target.value)}}),Object(a.jsx)("h2",{children:"Add new contact"}),Object(a.jsx)(d,{addName:function(e){j(e.target.value)},addNumber:function(e){w(e.target.value)},addPerson:function(e){if(e.preventDefault(),console.log("name",b,"number",g),t.map((function(e){return e.name})).includes(b))window.confirm("".concat(b," is already in your phonebook. Do you want to update the number?"))&&function(){var e={id:t.filter((function(e){return e.name===b}))[0].id,name:b,number:g};O(e.id,e).then((function(n){r(t.map((function(t){return t.id!==e.id?t:n}))),z("success"),T("".concat(e.name," was updated!")),setTimeout((function(){T(null)}),5e3)}))}();else{var n={id:Math.max(t.map((function(e){return e.id})))+1,name:b,number:g};h(n).then((function(e){r(t.concat(n)),j(""),w(""),console.log("name",b,"number",g),z("success"),T("".concat(n.name," was added!")),setTimeout((function(){T(null)}),5e3)}))}},newName:b,newNumber:g}),Object(a.jsx)("h2",{children:"Numbers"}),Object(a.jsx)(s,{persons:t,search:y,deleteNumber:function(e){window.confirm("Do you really want to delete this number??")&&(console.log(e),p(e).then((function(n){console.log(n),r(t.filter((function(n){return n.id!==e})))})).catch((function(){var n=t.find((function(n){return n.id===e}));z("error"),T("".concat(n.name," was already deleted!")),r(t.filter((function(n){return n.id!==e}))),setTimeout((function(){T(null)}),5e3)})))}})]})};t(38);u.a.render(Object(a.jsx)(x,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.db799eee.chunk.js.map