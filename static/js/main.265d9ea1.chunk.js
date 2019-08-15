(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(t,e,n){t.exports=n(64)},43:function(t,e,n){},64:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),u=n(13),c=n(11),d=n(14),i={products:[{productId:1,name:"Apple",quantity:12,created:new Date},{productId:2,name:"Banana",quantity:35,created:new Date}],productsAlt:[],dirty:{isEditing:!1,productId:0,name:"",quantity:0,created:null},useApi:!1};var o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD":return Object.assign({},t,{products:t.products.concat(e.payload),dirty:{}});case"UPDATE":var n=t.products.slice(),a=n.findIndex(function(t){return t.productId===e.payload.productId});return n[a]=Object(d.a)({},n[a],e.payload),Object.assign({},t,{products:n,dirty:{}});case"DELETE":console.log(e.payload);var r=t.products.slice(),u=r.findIndex(function(t){return t.productId===e.payload.productId});return r.splice(u,1),Object.assign({},t,{products:r});case"EDIT":return Object.assign({},t,{dirty:e.payload});case"LOAD":return Object.assign({},t,{products:e.payload});case"API":var c=t.products.slice(),o=t.productsAlt.slice();return Object.assign({},t,{useApi:e.payload.useApi,products:o,productsAlt:c});default:return t}},l=n(30),s=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||c.c,p=Object(c.d)(o,s(Object(c.a)(l.a))),h=n(3),m=n(6),f=n(7),y=n(10),b=n(8),E=n(4),v=n(9),I=(n(43),n(12)),g=n(18),O=n.n(g),j=n(32),D=n(33),C=n.n(D).a.create({baseURL:"https://localhost:44328/api/"});function A(t){return{type:"ADD",payload:t}}function k(t){return{type:"UPDATE",payload:t}}function N(t){return{type:"DELETE",payload:t}}function q(t){return{type:"LOAD",payload:t}}function w(){return function(t,e){if(e().useApi)return C.get("products").then(function(t){return t.data}).then(function(e){return t(q(e))}).catch(function(t){console.error(t)});t(q(e().products))}}var U=function(t){function e(t){var n;return Object(m.a)(this,e),(n=Object(y.a)(this,Object(b.a)(e).call(this,t))).state={productId:0,name:"",quantity:0,created:null},n.handleChangeValue=n.handleChangeValue.bind(Object(E.a)(n)),n.handleCreate=n.handleCreate.bind(Object(E.a)(n)),n}return Object(v.a)(e,t),Object(f.a)(e,[{key:"componentDidUpdate",value:function(t){var e=t,n=this.props;n.isEditing&&e.productId!==n.productId&&e.name!==n.name?this.setState({productId:n.productId,name:n.name,quantity:n.quantity,created:n.created}):n.isEditing||e.productId===n.productId&&!n.productId||this.setState({productId:0,name:"",quantity:0,created:null})}},{key:"handleCreate",value:function(){var t=Object(j.a)(O.a.mark(function t(e){var n,a,r;return O.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),n=this.state.name,a=this.state.quantity,r={name:n,quantity:a},t.prev=4,t.next=7,this.props.doCreate(r);case 7:this.setState({productId:0,name:"",quantity:0,created:null}),t.next=12;break;case 10:t.prev=10,t.t0=t.catch(4);case 12:case"end":return t.stop()}},t,this,[[4,10]])}));return function(e){return t.apply(this,arguments)}}()},{key:"handleUpdate",value:function(t,e){t.preventDefault();var n=this.props.products.slice(),a=n.findIndex(function(t){return t.productId===e}),r=Object.assign({},n[a]),u={name:this.state.name,quantity:this.state.quantity};this.props.doUpdate(Object(d.a)({},r,u))}},{key:"handleChangeValue",value:function(t){"quantity"===t.target.id&&(Number.isNaN(t.target.value)||t.target.value<0||""===t.target.value)?this.setState(Object(I.a)({},t.target.id,0)):this.setState(Object(I.a)({},t.target.id,t.target.value))}},{key:"render",value:function(){var t=this;return r.a.createElement("div",{className:"padding-l content-center"},r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Name: "),r.a.createElement("input",{type:"text",id:"name",value:this.state.name,onChange:this.handleChangeValue})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Quantity:"),r.a.createElement("input",{type:"number",id:"quantity",value:this.state.quantity,onInput:this.handleChangeValue,onChange:this.handleChangeValue,min:"0"})),r.a.createElement("button",{className:"form-submit",onClick:this.state.productId?function(e){return t.handleUpdate(e,t.state.productId)}:this.handleCreate,disabled:!this.state.name.length},this.state.productId?"UPDATE":"ADD"),r.a.createElement("button",{className:"form-submit",onClick:this.state.productId?function(e){return t.handleUpdate(e,t.state.productId)}:this.handleCreate,hidden:!this.state.productId},"CANCEL")))}}]),e}(a.Component),V=Object(h.b)(function(t){return{products:t.products,isEditing:t.dirty.isEditing,productId:t.dirty.productId,name:t.dirty.name,quantity:t.dirty.quantity,created:t.dirty.created}},function(t){return{doCreate:function(e){return t((a=e,function(t,e){if(e().useApi)return C.post("product/add",a).then(function(t){return t.data}).then(function(e){return t(A(e))}).catch(function(t){throw console.error(t),new Error(t)});var r=n(29)();a.productId=r,t(A(a))}));var a},doUpdate:function(e){return t((n=e,function(t,e){if(e().useApi)return C.put("product/update",n).then(function(t){return t.data}).then(function(e){return t(k(e))}).catch(function(t){console.error(t)});t(k(n))}));var n}}})(U),x=function(t){function e(){return Object(m.a)(this,e),Object(y.a)(this,Object(b.a)(e).apply(this,arguments))}return Object(v.a)(e,t),Object(f.a)(e,[{key:"componentDidMount",value:function(){this.props.doRead()}},{key:"handleEdit",value:function(t,e){t.preventDefault(),this.props.doEdit({productId:e.productId,name:e.name,quantity:e.quantity,isEditing:!0})}},{key:"handleDelete",value:function(t,e){t.preventDefault(),window.confirm("Delete "+e.name+"?")&&this.props.doDelete({productId:e.productId})}},{key:"render",value:function(){var t=this,e=n(29);return r.a.createElement("div",{className:"padding-m content-center"},r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Quantity"),r.a.createElement("th",null,"Actions"))),r.a.createElement("tbody",null,this.props.products.map(function(n,a){return r.a.createElement("tr",{key:e()},r.a.createElement("td",null,n.name),r.a.createElement("td",null,n.quantity),r.a.createElement("td",null,r.a.createElement("button",{className:"action-btn",onClick:function(e){return t.handleEdit(e,n)},disabled:t.props.productId===n.productId},"Edit"),r.a.createElement("button",{className:"action-btn",onClick:function(e){return t.handleDelete(e,n)},disabled:t.props.productId===n.productId},"Delete")))}))))}}]),e}(a.Component),T=Object(h.b)(function(t){return{products:t.products,productId:t.dirty.productId,useApi:t.api}},function(t){return{doRead:function(){return t(w())},doEdit:function(e){return t(function(t){return{type:"EDIT",payload:t}}(e))},doDelete:function(e){return t(function(t){return function(e,n){if(n().useApi)return C.delete("product/delete?productId="+t.productId).then(function(){return e(N(t))}).catch(function(t){console.error(t)});e(N(t))}}(e))}}})(x),P=function(t){function e(t){var n;return Object(m.a)(this,e),(n=Object(y.a)(this,Object(b.a)(e).call(this,t))).handleChangeValue=n.handleChangeValue.bind(Object(E.a)(n)),n}return Object(v.a)(e,t),Object(f.a)(e,[{key:"handleChangeValue",value:function(t){this.props.useApi({useApi:t.target.checked}),this.props.doRead()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("div",{className:"settings"},r.a.createElement("h3",{className:"display-ib"},"Use API"),r.a.createElement("label",{className:"switch"},r.a.createElement("input",{type:"checkbox",onChange:this.handleChangeValue}),r.a.createElement("span",{className:"slider round"}))),r.a.createElement("div",{className:"content-center"},r.a.createElement("h1",{className:"display-ib"},"Products"))),r.a.createElement(V,null),r.a.createElement(T,null))}}]),e}(r.a.Component),S=Object(h.b)(null,{doRead:w,useApi:function(t){return{type:"API",payload:t}}})(P);Object(u.render)(r.a.createElement(h.a,{store:p},r.a.createElement(S,null)),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.265d9ea1.chunk.js.map