import{n as t}from"./index.4a9116a0.js";import"./vendor.5affd582.js";const n={name:"SLink",props:{to:{type:[String,Object],default:()=>null},link:Boolean,external:{type:Boolean,default:!1},nuxt:{type:Boolean,default:!1}},computed:{type(){return this.link?"a":this.to?this.external?"a":this.nuxt?"nuxt-link":"router-link":"button"}}},e={};var l=t(n,(function(){var t=this,n=t.$createElement;return(t._self._c||n)(t.type,t._g(t._b({tag:"component",staticClass:"c-link",attrs:{to:t.to||null,href:t.external&&t.to,target:t.external&&"_blank"}},"component",t.$attrs,!1),t.$listeners),[t._t("default")],2)}),[],!1,a,null,null,null);function a(t){for(let n in e)this[n]=e[n]}var o=function(){return l.exports}();export{o as default};
