(function(t){function e(e){for(var r,i,o=e[0],c=e[1],l=e[2],d=0,p=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&p.push(s[i][0]),s[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(p.length)p.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],r=!0,o=1;o<a.length;o++){var c=a[o];0!==s[c]&&(r=!1)}r&&(n.splice(e--,1),t=i(i.s=a[0]))}return t}var r={},s={app:0},n=[];function i(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=r,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(a,r,function(e){return t[e]}.bind(null,r));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"09fb":function(t,e,a){t.exports=a.p+"img/5613308_R2.be903c6a.jpg"},"0d9e":function(t,e,a){"use strict";var r=a("8723"),s=a.n(r);s.a},4559:function(t,e,a){t.exports=a.p+"img/product.387b54a6.jpg"},"4c4a":function(t,e,a){t.exports=a.p+"img/banner.6fc33696.jpg"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),s=a("5f5b"),n=(a("f9e3"),a("2dd8"),a("ad3d")),i=a("b95c"),o=a.n(i),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex flex-column h-100",attrs:{id:"app"}},[a("router-view")],1)},l=[],u=(a("5c0b"),a("2877")),d={},p=Object(u["a"])(d,c,l,!1,null,null,null),b=p.exports,m=a("8c4f"),f=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home d-flex flex-column h-100"},[r("Top"),r("main",{staticClass:"flex-shrink-0 mb-4",attrs:{role:"main"}},[r("b-carousel",{staticClass:"mb-3",attrs:{id:"carousel-1",interval:4e3,controls:"",indicators:"",background:"#ababab","img-width":"1920","img-height":"997"}},[r("b-carousel-slide",{attrs:{"img-src":a("4c4a")}}),r("b-carousel-slide",{attrs:{caption:"Blank Image","img-blank":"","img-alt":"Blank image"}}),t._v("> ")],1),r("b-container",{staticClass:"bv-example-row"},[r("b-row",{staticClass:"text-center"},[r("b-col",{staticClass:"d-none d-md-block",attrs:{md:"3",lg:"2"}},[r("SideCategory")],1),r("b-col",[r("b-breadcrumb",{attrs:{items:t.breadcrumb}}),r("b-row",{attrs:{id:"product-table",cols:"2","cols-md":"3","cols-lg":"4"}},t._l(t.currentPageProducts,(function(t,e){return r("ProductComp",{key:e,attrs:{product:t}})})),1),t.currentPageProducts.length>t.perPage?r("b-pagination",{attrs:{"total-rows":t.rows,"per-page":t.perPage,"aria-controls":"product-table",align:"center"},on:{change:t.setCurrentProduct},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}}):t._e()],1)],1)],1)],1),r("StickyFooter")],1)},v=[],g=(a("fb6a"),a("5530")),h=a("2f62"),_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header p-2 pb-4"},[a("HeaderTop"),a("HeaderNav")],1)},C=[],x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",[a("b-row",{staticClass:"d-flex flex-row-reverse flex-md-column"},[a("b-col",{staticClass:"px-0",attrs:{cols:"4",md:"12",align:"right"}},[a("b-button",{attrs:{href:"/user/sign_in",size:"sm",variant:"outline-secondary"}},[a("font-awesome-icon",{attrs:{icon:"user"}}),a("span",{staticClass:"d-none d-md-inline-block pl-1"},[t._v("登入會員")])],1),a("b-button",{staticClass:"ml-1",attrs:{href:"#",size:"sm",variant:"outline-secondary"}},[a("font-awesome-icon",{attrs:{icon:"shopping-cart"}}),a("span",{staticClass:"d-none d-md-inline-block pl-1"},[t._v("購物車")])],1),a("b-button",{staticClass:"ml-1 d-none d-md-inline-block",attrs:{href:"#",size:"sm",variant:"outline-secondary"}},[a("font-awesome-icon",{attrs:{icon:"comment"}}),a("span",{staticClass:"d-none d-md-inline-block pl-1"},[t._v("聯絡我們")])],1)],1),a("b-col",{staticClass:"px-0 align-self-center",attrs:{cols:"5",md:"12",offset:"2","offset-md":"0",align:"center"}},[a("h5",{staticClass:"m-0 font-weight-normal"},[a("a",{staticClass:"d-block py-md-5",attrs:{href:"/"}},[t._v("天光水晶")])])])],1)],1)},y=[],k=a("ecee"),w=a("c074");k["c"].add(w["g"],w["f"],w["c"]);var P={},j=P,O=Object(u["a"])(j,x,y,!1,null,null,null),S=O.exports,E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",{staticClass:"d-none d-md-block"},[a("b-nav",{staticClass:"p-1 border-top nav-justified"},t._l(t.routes,(function(t,e){return a("HeaderNavItem",{key:e,attrs:{route:t}})})),1)],1)},$=[],T=[{path:"about",name:"關於天光"},{path:"direction",name:"方向指引",children:[{path:"tarot",name:"塔羅牌"},{path:"iching",name:"易經"}]},{path:"knowledge",name:"水晶知識",children:[{path:"basic",name:"基本入門"},{path:"advance",name:"進階學習"}]},{path:"purify",name:"磁場淨化",children:[{path:"analyze",name:"能量分析"},{path:"transfer",name:"能量轉換"}]},{path:"daily",name:"每日正能量"},{path:"contact",name:"聯絡我們"}],F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.isDropdown?a("b-nav-item-dropdown",{attrs:{text:t.route.name,"toggle-class":"text-secondary py-3",right:""}},t._l(t.route.children,(function(e,r){return a("b-dropdown-item",{key:r,attrs:{href:t.route.path+"/"+e.path}},[t._v(" "+t._s(e.name)+" ")])})),1):a("b-nav-item",{attrs:{href:t.route.path,"link-classes":"text-secondary py-3"}},[t._v(" "+t._s(t.route.name)+" ")])},D=[],N={props:{route:Object},data:function(){return{isDropdown:!1}},mounted:function(){this.isDropdown=this.route.children&&this.route.children.length>0}},z=N,R=Object(u["a"])(z,F,D,!1,null,null,null),H=R.exports,q={name:"HeaderNav",components:{HeaderNavItem:H},data:function(){return{routes:T}}},I=q,M=(a("58be"),Object(u["a"])(I,E,$,!1,null,"7d383066",null)),A=M.exports,U={name:"top",components:{HeaderTop:S,HeaderNav:A}},L=U,B=Object(u["a"])(L,_,C,!1,null,null,null),J=B.exports,G=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},K=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"footer mt-auto py-3 bg-dark text-white"},[a("div",{staticClass:"container"},[a("p",{staticClass:"text-center mb-0"},[a("i",{staticClass:"far fa-copyright"}),a("span",{staticClass:"d-inline-block"},[t._v("2020 天光水晶")]),a("span",{staticClass:"d-block d-md-inline-block pl-1"},[t._v("版權所有")])]),a("p",{staticClass:"text-center"},[t._v(" Address, 04-12345678 ")])])])}],Q={name:"StickyFooter"},V=Q,W=Object(u["a"])(V,G,K,!1,null,null,null),X=W.exports,Y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-none d-md-block",attrs:{role:"tablist"}},[a("b-button",{staticClass:"d-flex justify-content-between text-secondary",attrs:{block:"",href:"#",role:"tab",variant:"link"}},[a("span",{staticClass:"d-inline-block"},[t._v("All Products")]),a("span",{staticClass:"d-inline-block ml-2"},[t._v("99")])]),a("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-1",modifiers:{"accordion-1":!0}}],staticClass:"d-flex justify-content-between text-secondary mt-1",attrs:{block:"",href:"#",role:"tab",variant:"link"}},[a("span",{staticClass:"d-inline-block"},[t._v("On Sale")]),a("span",{staticClass:"d-inline-block ml-2"},[t._v("99")])]),a("b-collapse",{attrs:{id:"accordion-1",accordion:"on-sale",role:"tabpanel","is-nav":""}},[a("b-nav",{staticClass:"text-left",attrs:{vertical:""}},[a("b-nav-item",{attrs:{"link-classes":"text-secondary d-flex justify-content-between"}},[a("span",{staticClass:"d-inline-block"},[t._v("Category 1")]),a("span",{staticClass:"d-inline-block ml-2"},[t._v("99")])]),a("b-nav-item",{attrs:{"link-classes":"text-secondary d-flex justify-content-between"}},[a("span",{staticClass:"d-inline-block"},[t._v("Category 2")]),a("span",{staticClass:"d-inline-block ml-2"},[t._v("99")])])],1)],1),a("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-2",modifiers:{"accordion-2":!0}}],staticClass:"d-flex justify-content-between text-secondary mt-1",attrs:{block:"",href:"#",role:"tab",variant:"link"}},[a("span",{staticClass:"d-inline-block"},[t._v("Specialities")]),a("span",{staticClass:"d-inline-block ml-2"},[t._v("99")])]),a("b-collapse",{attrs:{id:"accordion-2",accordion:"specialities",role:"tabpanel"}},[a("b-nav",{staticClass:"text-left",attrs:{vertical:""}},[a("b-nav-item",{attrs:{"link-classes":"text-secondary d-flex justify-content-between"}},[a("span",{staticClass:"d-inline-block"},[t._v("Category 1")]),a("span",{staticClass:"d-inline-block ml-2"},[t._v("99")])]),a("b-nav-item",{attrs:{"link-classes":"text-secondary d-flex justify-content-between"}},[a("span",{staticClass:"d-inline-block"},[t._v("Category 2")]),a("span",{staticClass:"d-inline-block ml-2"},[t._v("99")])])],1)],1),a("b-button",{staticClass:"d-flex justify-content-between text-secondary mt-1",attrs:{block:"",href:"#",role:"tab",variant:"link"}},[a("span",{staticClass:"d-inline-block"},[t._v("Featured")]),a("span",{staticClass:"d-inline-block ml-2"},[t._v("99")])]),a("b-button",{staticClass:"d-flex justify-content-between text-secondary mt-1",attrs:{block:"",href:"#",role:"tab",variant:"link"}},[a("span",{staticClass:"d-inline-block"},[t._v("Degaussing")]),a("span",{staticClass:"d-inline-block ml-2"},[t._v("99")])])],1)},Z=[],tt={},et=tt,at=(a("864e"),Object(u["a"])(et,Y,Z,!1,null,"ed7efc5e",null)),rt=at.exports,st=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-col",{staticClass:"pb-4"},[r("b-card",{staticClass:"text-center",attrs:{"no-body":""}},[r("b-card-body",{staticClass:"pt-0"},[r("a",{staticClass:"d-block position-absolute w-100 h-100 product-link",attrs:{href:"/product/"+this.product.id}}),r("b-card-img",{attrs:{src:a("e81f")("./"+this.product.id+"_R.jpg")}}),r("b-card-title",{attrs:{title:t.product.name,"title-tag":"p"}}),r("b-card-text",[t._v(t._s(t.getPrice()))])],1)],1)],1)},nt=[],it={props:{product:Object},data:function(){return{}},methods:{getPrice:function(){return"NT $"+this.product.price},viewProduct:function(){location.assign()}}},ot=it,ct=(a("e6e0"),Object(u["a"])(ot,st,nt,!1,null,"f7cb5e48",null)),lt=ct.exports,ut={name:"Home",components:{Top:J,StickyFooter:X,SideCategory:rt,ProductComp:lt},data:function(){return{breadcrumb:[{text:"TODO::",href:"#"},{text:"Category",href:"#"},{text:"Filter",active:!0}],perPage:12,currentPage:1,currentPageProducts:[]}},computed:Object(g["a"])({},Object(h["b"])(["products"]),{rows:function(){return this.products.length}}),methods:{setCurrentProduct:function(){var t=(this.currentPage-1)*this.perPage,e=t+this.perPage;this.currentPageProducts=this.products.slice(t,e)}},watch:{currentPage:{immediate:!0,handler:function(){this.setCurrentProduct()}}},mounted:function(){this.setCurrentProduct()}},dt=ut,pt=Object(u["a"])(dt,f,v,!1,null,null,null),bt=pt.exports,mt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},ft=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about"},[a("h1",[t._v("關於天光")])])}],vt={name:"About"},gt=vt,ht=Object(u["a"])(gt,mt,ft,!1,null,null,null),_t=ht.exports,Ct=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},xt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"contact"},[a("h1",[t._v("聯絡我們")])])}],yt={},kt=Object(u["a"])(yt,Ct,xt,!1,null,null,null),wt=kt.exports,Pt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"product d-flex flex-column h-100"},[r("Top"),r("main",{staticClass:"flex-shrink-0 mb-4",attrs:{role:"main"}},[r("b-container",[r("b-row",{staticClass:"text-center"},[r("b-col",{staticClass:"d-none d-md-block",attrs:{md:"3",lg:"2"}},[r("SideCategory")],1),null!==t.currProduct?r("b-col",[r("b-breadcrumb",{attrs:{items:t.breadcrumb}}),r("b-row",{staticClass:"text-left mb-5"},[r("b-col",{attrs:{md:"5",sm:"12"}},[r("b-media-aside",{staticClass:"flex-column mr-2",staticStyle:{"max-width":"400px"}},[r("b-img",{staticClass:"w-100",attrs:{src:a("e81f")("./"+t.currProduct.id+"_R.jpg"),alt:t.currProduct.name}}),r("div",{staticClass:"d-flex align-items-center py-4"},[r("b-button",{attrs:{size:"sm"}},[r("font-awesome-icon",{attrs:{icon:"caret-left"}})],1),r("div",{staticClass:"d-inline-block text-nowrap px-1",attrs:{id:"thumbnail-wrapper"}},[r("ul",{staticClass:"list-inline position-relative m-0"},t._l(t.currProduct.thumbnails,(function(e,s){return r("li",{key:s,staticClass:"list-inline-item"},[r("b-img",{attrs:{thumbnail:"",src:a("710a")("./"+e+".jpg"),alt:t.currProduct.name}})],1)})),0)]),r("b-button",{attrs:{size:"sm"}},[r("font-awesome-icon",{attrs:{icon:"caret-right"}})],1)],1),r("h6",[t._v("分享到")]),r("ul",{staticClass:"list-inline"},[r("li",{staticClass:"list-inline-item"},[r("font-awesome-icon",{style:{color:"#00c300"},attrs:{icon:["fab","line"],size:"2x"}})],1),r("li",{staticClass:"list-inline-item"},[r("font-awesome-icon",{style:{color:"#3b5998"},attrs:{icon:["fab","facebook"],size:"2x"}})],1),r("li",{staticClass:"list-inline-item"},[r("font-awesome-icon",{style:{color:"#25d366"},attrs:{icon:["fab","whatsapp"],size:"2x"}})],1)])],1)],1),r("b-col",[r("b-media-body",{staticClass:"ml-3"},[r("h3",{staticClass:"mt-0 mb-3"},[t._v(t._s(t.currProduct.name))]),r("p",{staticClass:"short-desc border-left pl-1 mb-3"},t._l(t.currProduct.shortDescriptions,(function(e,a){return r("span",{key:a,staticClass:"d-block"},[t._v(t._s(e))])})),0),r("p",{staticClass:"price"},[t._v(t._s(t.getPrice()))]),r("b-form",[r("b-form-group",{attrs:{label:"數量","label-for":"input-small"}},[r("div",{staticClass:"row m-0"},[r("div",{staticClass:"col-6 p-0"},[r("b-button-group",{attrs:{size:"sm"}},[r("b-button",{attrs:{variant:"outline-secondary"}},[r("font-awesome-icon",{attrs:{icon:"minus"}})],1),r("b-form-input",{attrs:{id:"input-small",size:"sm",placeholder:"數量",value:"1"}}),r("b-button",{attrs:{variant:"outline-secondary"}},[r("font-awesome-icon",{attrs:{icon:"plus"}})],1)],1)],1),r("div",{staticClass:"col-6 p-0"},[r("b-button",{staticClass:"ml-1",attrs:{size:"sm",variant:"dark"}},[t._v("加入購物車")])],1)])])],1),r("b-button",{attrs:{variant:"outline-secondary",size:"sm"}},[r("font-awesome-icon",{attrs:{icon:["far","heart"]}}),t._v(" 加入追蹤清單 ")],1),r("h6",{staticClass:"mt-3"},[t._v("付款方式")]),r("div",{staticClass:"pl-4"},t._l(t.currProduct.payment,(function(e,a){return r("span",{key:a,class:0!==a?"pl-2 payment":""},[t._v(t._s(e))])})),0),r("h6",{staticClass:"mt-3"},[t._v("送貨方式")]),r("ul",t._l(t.currProduct.delivery,(function(e,a){return r("li",{key:a},[t._v(t._s(e))])})),0)],1)],1)],1),r("div",{staticClass:"details text-left",domProps:{innerHTML:t._s(t.currProduct.detail)}})],1):t._e()],1)],1)],1),r("StickyFooter")],1)},jt=[],Ot=a("b702"),St=a("f2d1");k["c"].add(w["d"],w["e"],w["a"],w["b"],Ot["a"],St["b"],St["a"],St["c"]);var Et={name:"Product",components:{Top:J,StickyFooter:X,SideCategory:rt},data:function(){return{breadcrumb:[{text:"TODO::",href:"#"},{text:"Category",href:"#"},{text:"Filter",active:!0}],currProduct:null}},computed:Object(g["a"])({},Object(h["b"])(["products"])),mounted:function(){for(var t=0;t<this.products.length;t++)if(this.products[t].id===this.$route.params.id){this.currProduct=this.products[t];break}},methods:{getProduct:function(){for(var t,e=0;e<this.products.length;e++)if(this.products[e].id===this.$route.params.id){t=this.products[e];break}return t},getPrice:function(){return"NT$"+this.currProduct.price}}},$t=Et,Tt=(a("0d9e"),Object(u["a"])($t,Pt,jt,!1,null,"2515c3e8",null)),Ft=Tt.exports,Dt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sign-in d-flex flex-column h-100"},[a("Top"),a("main",{staticClass:"flex-shrink-0 mb-4 bg-light",attrs:{role:"main"}},[a("b-container",{staticClass:"py-5",attrs:{fluid:""}},[a("b-row",[a("b-col",{attrs:{md:"6","offset-md":"3"}},[a("b-tabs",{staticClass:"bg-light border",attrs:{"content-class":"pt-3 bg-white",justified:""}},[a("b-tab",{attrs:{title:"Register",align:"center"}},[a("div",{staticClass:"p-2 px-3"},[a("div",{staticClass:"px-4"},[a("img",{directives:[{name:"holder",rawName:"v-holder",value:"img=100px40?auto=yes&theme=social&text=使用 Facebook 註冊",expression:"'img=100px40?auto=yes&theme=social&text=使用 Facebook 註冊'"}]})]),a("hr"),a("div",{staticClass:"px-4 pb-4"},[a("h5",{staticClass:"pb-2"},[t._v("註冊新會員")]),a("b-form",{on:{submit:function(t){t.stopPropagation(),t.preventDefault()}}},[a("b-form-group",{attrs:{id:"register-group-1","label-for":"register-userid"}},[a("b-form-input",{attrs:{id:"register-userid",required:"",placeholder:"使用者名稱"}})],1),a("b-form-group",{attrs:{id:"register-group-2","label-for":"register-mail"}},[a("b-form-input",{attrs:{id:"register-mail",type:"email",required:"",placeholder:"電子信箱"}})],1),a("b-form-group",{attrs:{id:"register-group-3","label-for":"input-password"}},[a("b-form-input",{attrs:{id:"register-password",type:"password",required:"",placeholder:"密碼",description:"至少8個字元"}})],1),a("b-form-group",{attrs:{id:"register-group-4","label-for":"register-gender"}},[a("b-form-select",{attrs:{id:"register-gender",required:""},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[a("b-form-select-option",{attrs:{value:null}},[t._v("Please select an option")]),a("b-form-select-option",{attrs:{value:"1"}},[t._v("男")]),a("b-form-select-option",{attrs:{value:"0"}},[t._v("女")])],1)],1),a("b-form-group",{staticClass:"text-left",attrs:{id:"register-group-5","label-for":"register-birth"}},[a("b-form-datepicker",{attrs:{id:"register-birth",placeholder:"生日","hide-header":"","date-format-options":{year:"numeric",month:"2-digit",day:"2-digit"}}})],1),a("b-form-group",{attrs:{id:"register-group-6","label-for":"register-mobile"}},[a("b-form-input",{attrs:{id:"register-mobile",required:"",placeholder:"行動電話"}})],1),a("p",{staticClass:"py-1 m-0 text-left other-info"},[t._v("商店資訊及優惠方案")]),a("b-form-group",{staticClass:"text-left other-info",attrs:{id:"register-group-7","label-for":"register-subsribe"}},[a("b-form-checkbox",{attrs:{id:"register-subsribe",value:"y"}},[t._v("訂閱電郵與簡訊")])],1),a("hr"),a("b-form-group",{staticClass:"text-left other-info",attrs:{id:"register-group-8","label-for":"register-agree"}},[a("b-form-checkbox",{attrs:{id:"register-agree",value:"y"}},[t._v(" 我同意"),a("a",{attrs:{href:"#"}},[t._v("網站服務條款")]),t._v("及"),a("a",{attrs:{href:"#"}},[t._v("隱私政策")])])],1),a("b-button",{staticClass:"w-100",attrs:{type:"submit",variant:"primary"}},[t._v("送出註冊")])],1)],1)])]),a("b-tab",{attrs:{title:"Sign In",active:"",align:"center"}},[a("div",{staticClass:"p-2 px-3"},[a("div",{staticClass:"px-4"},[a("img",{directives:[{name:"holder",rawName:"v-holder",value:"img=100px40?auto=yes&theme=social&text=使用 Facebook 登入",expression:"'img=100px40?auto=yes&theme=social&text=使用 Facebook 登入'"}]})]),a("hr"),a("div",{staticClass:"px-4 pb-4"},[a("h5",{staticClass:"pb-2"},[t._v("使用電子信箱登入")]),a("b-form",{on:{submit:function(t){t.stopPropagation(),t.preventDefault()}}},[a("b-form-group",{attrs:{id:"input-group-1","label-for":"input-mail"}},[a("b-form-input",{attrs:{id:"input-mail",type:"email",required:"",placeholder:"Enter email"}})],1),a("b-form-group",{attrs:{id:"input-group-2","label-for":"input-password"}},[a("b-form-input",{attrs:{id:"input-password",type:"password",required:"",placeholder:"Enter password"}})],1),a("div",{staticClass:"d-flex justify-content-between align-items-center mb-4 other-info"},[a("span",{staticClass:"text-danger"},[t._v("電子郵件或密碼輸入錯誤，請重新登入。")]),a("a",{staticClass:"text-muted",attrs:{href:"/user/password/new"}},[t._v("忘記密碼？")])]),a("b-button",{staticClass:"w-100",attrs:{type:"submit",variant:"success"}},[t._v("登入")])],1)],1)])])],1)],1)],1)],1)],1),a("StickyFooter")],1)},Nt=[],zt={name:"SignIn",components:{Top:J,StickyFooter:X},data:function(){return{selected:null}}},Rt=zt,Ht=(a("8c41"),Object(u["a"])(Rt,Dt,Nt,!1,null,"5d945a3c",null)),qt=Ht.exports,It=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sign-in d-flex flex-column h-100"},[a("Top"),a("main",{staticClass:"flex-shrink-0 mb-4 bg-light",attrs:{role:"main"}},[a("b-container",{staticClass:"py-5",attrs:{fluid:""}},[a("b-row",[a("b-col",{attrs:{md:"6","offset-md":"3"}},[a("div",{staticClass:"p-3 bg-white border"},[a("div",{staticClass:"px-4 pb-5"},[a("h5",{staticClass:"pb-3"},[t._v("忘記密碼")]),a("b-form",{on:{submit:function(t){t.stopPropagation(),t.preventDefault()}}},[a("b-form-group",{attrs:{id:"input-group-1","label-for":"input-mail"}},[a("b-form-input",{attrs:{id:"input-mail",type:"email",required:"",placeholder:"Enter email"}})],1),a("p",{staticClass:"text-left text-danger other-info"},[t._v(" 電子郵件輸入錯誤，請重新輸入。 ")]),a("b-button",{staticClass:"w-100",attrs:{type:"submit",variant:"success"}},[t._v("發送新密碼")]),a("div",{staticClass:"text-right other-info"},[a("a",{staticClass:"text-muted",attrs:{href:"/user/sign_in"}},[t._v("返回註冊與登入")])])],1)],1)])])],1)],1)],1),a("StickyFooter")],1)},Mt=[],At={name:"SignIn",components:{Top:J,StickyFooter:X},data:function(){return{selected:null}}},Ut=At,Lt=(a("6631"),Object(u["a"])(Ut,It,Mt,!1,null,"aa99729a",null)),Bt=Lt.exports;r["default"].use(m["a"]);var Jt=[{path:"/",name:"Home",component:bt},{path:"/about",name:"About",component:_t},{path:"/contact",name:"Contact",component:wt},{path:"/product/:id",name:"Product",component:Ft},{path:"/user/sign_in",name:"SignIn",component:qt},{path:"/user/password/new",name:"ForgetPassword",component:Bt}],Gt=new m["a"]({mode:"history",base:"/",routes:Jt}),Kt=Gt,Qt=[{id:"5613308",name:"天然烏拉圭頂級紫晶鎮",price:"5980",specialPrice:"2680",category:[30001],thumbnails:["5613308_R","5613308_R1","5613308_R2"],shortDescriptions:["開運招財 增進個人運勢","有助改善室內風水磁場","適擺放辦公桌，書桌，床頭櫃"],payment:["信用卡","貨到付款","超取付款","銀聯卡"],delivery:["超商取貨","宅配到府"],detail:'<p style="color: red;">我是測試文字</p><img src="https://img1.momoshop.com.tw/expertimg/0005/613/308/A0001.jpg" />'}],Vt={products:Qt},Wt={},Xt={},Yt={};r["default"].use(h["a"]);var Zt=new h["a"].Store({state:Vt,mutations:Wt,actions:Xt,modules:Yt});r["default"].use(s["a"]),r["default"].component("font-awesome-icon",n["a"]),r["default"].use(o.a),r["default"].config.productionTip=!1,new r["default"]({router:Kt,store:Zt,render:function(t){return t(b)}}).$mount("#app")},"58be":function(t,e,a){"use strict";var r=a("e325"),s=a.n(r);s.a},"5c0b":function(t,e,a){"use strict";var r=a("9c0c"),s=a.n(r);s.a},"655a":function(t,e,a){},6631:function(t,e,a){"use strict";var r=a("98b2"),s=a.n(r);s.a},"710a":function(t,e,a){var r={"./5613308_R.jpg":"fafe","./5613308_R1.jpg":"d0b8","./5613308_R2.jpg":"09fb","./banner.jpg":"4c4a","./product.jpg":"4559"};function s(t){var e=n(t);return a(e)}function n(t){if(!a.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}s.keys=function(){return Object.keys(r)},s.resolve=n,t.exports=s,s.id="710a"},"75a3":function(t,e,a){},"864e":function(t,e,a){"use strict";var r=a("c58f"),s=a.n(r);s.a},8723:function(t,e,a){},"8c41":function(t,e,a){"use strict";var r=a("75a3"),s=a.n(r);s.a},"98b2":function(t,e,a){},"9c0c":function(t,e,a){},c58f:function(t,e,a){},d0b8:function(t,e,a){t.exports=a.p+"img/5613308_R1.e7646568.jpg"},e325:function(t,e,a){},e6e0:function(t,e,a){"use strict";var r=a("655a"),s=a.n(r);s.a},e81f:function(t,e,a){var r={"./5613308_R.jpg":"fafe"};function s(t){var e=n(t);return a(e)}function n(t){if(!a.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}s.keys=function(){return Object.keys(r)},s.resolve=n,t.exports=s,s.id="e81f"},fafe:function(t,e,a){t.exports=a.p+"img/5613308_R.b56d2a49.jpg"}});
//# sourceMappingURL=app.2cf40532.js.map