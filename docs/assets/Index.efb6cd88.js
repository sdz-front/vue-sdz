import{n as o,_ as a}from"./index.7254144d.js";import"./vendor.0f0055ec.js";var c=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"s-stepper"},[t("ul",{staticClass:"stepper"},e._l(e.items,function(r,n){return t("li",{key:n,class:e.getClasses(r,n),on:{click:function(v){return e.$emit("select",r)}}},[t("div",{staticClass:"content"},[t("label",[e._v(e._s(r.label))]),r.icon?t("s-icon",e._b({attrs:{icon:r.icon}},"s-icon",e.$attrs,!1)):e._e()],1)])}),0)])},p=[];const l={name:"SStepper",components:{SIcon:()=>a(()=>import("./index.7254144d.js").then(function(e){return e.h}),["assets/index.7254144d.js","assets/index.1f3379a2.css","assets/vendor.0f0055ec.js"]).then(e=>e.default)},props:{step:Number,items:{type:Array,required:!0}},data(){return{progressiveStep:1}},watch:{step:"incrementStep",progressiveStep:{handler:"incrementStep",immediate:!0}},methods:{incrementStep(){setTimeout(()=>{this.progressiveStep<=this.step&&this.progressiveStep++},1200)},getClasses(e,s){const t=s<=this.progressiveStep-1;return["step",{"--is-active":t,"--is-disabled":e.disabled,"--is-current-step":t&&this.step===s}]}}},i={};var _=o(l,c,p,!1,u,null,null,null);function u(e){for(let s in i)this[s]=i[s]}var f=function(){return _.exports}();export{f as default};
