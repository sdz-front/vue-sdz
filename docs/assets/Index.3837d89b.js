import{n as l,_ as u}from"./index.7254144d.js";import"./vendor.0f0055ec.js";var v=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"s-breadcrumb"},[e("ul",{class:["list",t.color]},t._l(t.items,function(n,s){var a=n.text,o=n.current,_=n.to,c=n.external;return e("li",{key:s,staticClass:"item"},[o?e("span",[t._v(t._s(a))]):e("a",{staticClass:"parent",attrs:{href:_,target:c?"_blank":"_self"}},[t._v(" "+t._s(a)+" ")]),t.isLast(s)?t._e():e("s-icon",{attrs:{icon:"sdz-chevron-right",size:"14"}})],1)}),0)])},d=[];const m={name:"SBreadcrumb",components:{SIcon:()=>u(()=>import("./index.7254144d.js").then(function(t){return t.h}),["assets/index.7254144d.js","assets/index.1f3379a2.css","assets/vendor.0f0055ec.js"]).then(t=>t.default)},props:{color:{type:String,validator:function(t){return["light","dark"].indexOf(t)!==-1}},items:{type:Array,required:!0}},methods:{isLast(t){return this.items.length-1===t}}},i={};var p=l(m,v,d,!1,f,null,null,null);function f(t){for(let r in i)this[r]=i[r]}var y=function(){return p.exports}();export{y as default};
