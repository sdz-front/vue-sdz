import{n}from"./index.c517d76c.js";var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("label",{class:e.classes},[s("input",{staticClass:"input",attrs:{type:"checkbox",disabled:e.disabled},domProps:{checked:e.value}}),s("span",{staticClass:"check",on:{click:e.emit}},[s("i",{staticClass:"icon sdz-check"})]),s("span",{staticClass:"text",on:{click:e.emit}},[e._v(e._s(e.label))])])},l=[];const c={name:"SCheckbox",props:{value:{type:Boolean,required:!0},label:String,negative:Boolean,disabled:Boolean},computed:{classes(){return["s-checkbox",{"--is-checked":this.value,"--is-negative":this.negative,"--is-disabled":this.disabled}]}},methods:{emit(){var e,t;(t=(e=this.$attrs).onInput)==null||t.call(e),this.$emit("input",!this.value)}}},a={};var o=n(c,i,l,!1,r,null,null,null);function r(e){for(let t in a)this[t]=a[t]}var _=function(){return o.exports}();export{_ as default};
