import{S as t}from"./box.7e99e0b3.js";import{n as a,a as e,S as s}from"./index.c90c6057.js";import{S as i}from"./Index.4871a188.js";import"./vendor.8161f9ef.js";const n={};var o=a({name:"SPagination",components:{SIcon:e,SButton:i},props:{totalPage:{type:[String,Number],required:!0},page:{type:[Number,String],validator:t=>!!t,default:1},pagesLimit:{type:[Number,String],validator:t=>t>3}},computed:{pages(){return Array.from({length:this.totalPage},((t,a)=>a+1===2&&this.page>3||a+1===this.totalPage-1&&this.page<=this.totalPage-3?"...":a+1))}},methods:{changePage(t,a){if("..."===t)return;if(1===this.page&&"previous"===a)return;if(this.page===+this.totalPage&&"next"===a)return;const e={set:t,next:this.page+1,previous:this.page-1};this.$emit("page",e[a])}}},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"s-pagination"},[t._t("pagination",(function(){return[e("div",{staticClass:"pages"},[e("s-icon",{staticClass:"previous",attrs:{icon:"sdz-chevron-up",disabled:1===t.page},nativeOn:{click:function(a){return t.changePage(t.page,"previous")}}}),t._l(t.pages,(function(a,s){return e("..."===a?"s-icon":"s-button",{key:s,tag:"component",class:["page",{"--is-active":a===t.page}],attrs:{icon:"..."===a?"sdz-info":""},on:{click:function(e){return t.changePage(a,"set")}}},[t._v(" "+t._s("..."===a?"":a)+" ")])})),e("s-icon",{staticClass:"next",attrs:{icon:"sdz-chevron-up",disabled:t.page===+t.totalPage},nativeOn:{click:function(a){return t.changePage(t.page,"next")}}})],2)]}),{pages:t.pages})],2)}),[],!1,r,null,null,null);function r(t){for(let a in n)this[a]=n[a]}const l={};var p=a({components:{SPagination:function(){return o.exports}(),SBox:t,STitle:s},data:()=>({page:1}),methods:{setPage(t){this.page=t}}},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"s-pagination-example"},[e("s-title",{staticClass:"h1",attrs:{title:"Pagination"}}),e("p",{staticClass:"subtitle"},[t._v(" É uma numeração ordinal das páginas, que geralmente está localizada na parte superior ou inferior das páginas de um site. ")]),e("p",{staticClass:"subtitle"},[t._v(' Use um elemento "<"nav">" de encapsulamento para identificá-lo como uma seção de navegação para leitores de tela e outras tecnologias de assistência. ')]),e("s-title",{staticClass:"h2",attrs:{title:"Como e onde utilizar"}}),e("p",{staticClass:"subtitle"},[t._v(" Utilizamos a paginação no formato tradicional principalmente em nossas páginas do Marketplace. ")]),e("p",{staticClass:"subtitle"},[t._v(" Para tabelas na área de gestão, utilizamos um formato que possibilite digitar o número da página em que deseja acessar. ")]),e("s-box",[e("s-pagination",{attrs:{"total-page":"10",page:t.page},on:{page:function(a){return t.page=a}}})],1)],1)}),[],!1,c,null,null,null);function c(t){for(let a in l)this[a]=l[a]}var u=function(){return p.exports}();export{u as default};
