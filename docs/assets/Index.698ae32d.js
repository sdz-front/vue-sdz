import{S as e}from"./Index.b8c5eb8a.js";import{n as t,a as n}from"./index.e405d8fe.js";import{S as s}from"./box.153119af.js";import"./vendor.ebec5519.js";const o={};var a=t({name:"SCollapsibleExample",components:{SButton:e,SCollapsible:n,SBox:s},data:()=>({isOpened:!0,content:"initial content!"}),methods:{increased(){this.content=this.content+"<br /> dynamic content..."}}},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"s-collapsible-example"},[n("h1",{staticClass:"h1"},[e._v("Collapse")]),n("s-box",{staticClass:"flex-inline flex-center"},[n("s-button",{attrs:{outlined:""},on:{click:function(t){return e.increased()}}},[e._v("increase content")]),n("s-collapsible",{attrs:{"is-opened":e.isOpened},on:{toggle:function(t){return e.isOpened=t}}},[n("s-button",{staticClass:"header",attrs:{slot:"header"},slot:"header"},[e._v("header toggle")]),n("div",{domProps:{innerHTML:e._s(e.content)}})],1)],1)],1)}),[],!1,i,null,null,null);function i(e){for(let t in o)this[t]=o[t]}var l=function(){return a.exports}();export{l as default};
