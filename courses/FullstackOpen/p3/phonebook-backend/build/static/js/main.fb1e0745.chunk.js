(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{19:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var c=t(1),r=t(14),a=t.n(r),o=(t(19),t(3)),i=t(0),u=function(e){var n=e.search,t=e.onSearch;return Object(i.jsx)("form",{children:Object(i.jsxs)("div",{children:["filter shown with",Object(i.jsx)("input",{value:n,onChange:t})]})})},s=function(e){var n=e.name,t=e.number,c=e.nameChange,r=e.numberChange,a=e.personChange;return Object(i.jsxs)("form",{children:[Object(i.jsxs)("div",{children:["name: ",Object(i.jsx)("input",{value:n,onChange:c})]}),Object(i.jsxs)("div",{children:["number: ",Object(i.jsx)("input",{value:t,onChange:r})]}),Object(i.jsx)("div",{children:Object(i.jsx)("button",{onClick:a,children:"add"})})]})},d=function(e){var n=e.persons,t=e.search,c=e.handleDelete;return Object(i.jsx)("div",{children:n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})).map((function(e){return Object(i.jsxs)("div",{children:[e.name,"  ",e.number,Object(i.jsx)("button",{onClick:function(){return c(e.id)},children:"delete"})]},e.name)}))})},h=t(4),j=t.n(h),l="api/persons",f=function(){return j.a.get(l).then((function(e){return e.data}))},b=function(e){return j.a.post(l,e).then((function(e){return e.data}))},m=function(e,n){return j.a.put("".concat(l,"/").concat(e),n).then((function(e){return e.data}))},O=function(e){return j.a.delete("".concat(l,"/").concat(e)).then((function(e){return e.data}))},p=function(e){var n=e.notification;return null===n?null:Object(i.jsx)("div",{className:n.type,children:n.message})},v=function(){var e=Object(c.useState)([]),n=Object(o.a)(e,2),t=n[0],r=n[1],a=Object(c.useState)(""),h=Object(o.a)(a,2),j=h[0],l=h[1],v=Object(c.useState)(""),x=Object(o.a)(v,2),g=x[0],w=x[1],C=Object(c.useState)(""),k=Object(o.a)(C,2),S=k[0],y=k[1],D=Object(c.useState)(null),A=Object(o.a)(D,2),E=A[0],I=A[1];Object(c.useEffect)((function(){f().then((function(e){r(e)}))}),[]);var J=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"success";I({message:e,type:n}),setTimeout((function(){I(null)}),5e3)};return Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:"Phonebook"}),Object(i.jsx)(p,{notification:E}),Object(i.jsx)(u,{search:S,onSearch:function(e){y(e.target.value)}}),Object(i.jsx)("h3",{children:"Add a new"}),Object(i.jsx)(s,{name:j,number:g,nameChange:function(e){l(e.target.value)},numberChange:function(e){w(e.target.value)},personChange:function(e){e.preventDefault();var n={name:j,number:g},c=t.find((function(e){return e.name===j}));c?window.confirm("".concat(j," is already added to phonebook, replace the old number with a new one?"))&&m(c.id,n).then((function(e){r(t.map((function(n){return n.id===e.id?e:n}))),l(""),w(""),J("Updated ".concat(e.name))})).catch((function(e){console.log(e.response.data.error),J("Information of '".concat(j,"' was already removed from server"),"error")})):b(n).then((function(e){r(t.concat(e)),l(""),w(""),J("Added ".concat(e.name))})).catch((function(e){console.log(e.response.data.error),J("".concat(e.response.data.error),"error")}))}}),Object(i.jsx)("h3",{children:"Numbers"}),Object(i.jsx)(d,{persons:t,search:S,handleDelete:function(e){var n=t.find((function(n){return n.id===e}));window.confirm("Delete ".concat(n.name,"?"))&&O(e).then((function(c){r(t.filter((function(n){return n.id!==e}))),J("Deleted ".concat(n.name))})).catch((function(){r(t.filter((function(n){return n.id!==e}))),J("".concat(n.name," has already been removed"),"error")}))}})]})};a.a.render(Object(i.jsx)(v,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.fb1e0745.chunk.js.map