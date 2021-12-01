var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,o=(t,n,r)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[n]=r,u=(e,t)=>{for(var n in t||(t={}))i.call(t,n)&&o(e,n,t[n]);if(r)for(var n of r(t))a.call(t,n)&&o(e,n,t[n]);return e};"undefined"!=typeof require&&require;import{c as s}from"./vendor.ebec5519.js";import{n as c,S as l}from"./index.e405d8fe.js";import{S as f}from"./Index.e4fc4e3d.js";var p={exports:{}};p.exports=function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p=".",t(t.s=9)}([function(e,t,n){t.a={prefix:"",suffix:"",thousands:",",decimal:".",precision:2}},function(e,t,n){var r=n(2),i=n(5),a=n(0);t.a=function(e,t){if(t.value){var o=n.i(i.a)(a.a,t.value);if("INPUT"!==e.tagName.toLocaleUpperCase()){var u=e.getElementsByTagName("input");1!==u.length||(e=u[0])}e.oninput=function(){var t=e.value.length-e.selectionEnd;e.value=n.i(r.a)(e.value,o),t=Math.max(t,o.suffix.length),t=e.value.length-t,t=Math.max(t,o.prefix.length+1),n.i(r.b)(e,t),e.dispatchEvent(n.i(r.c)("change"))},e.onfocus=function(){n.i(r.b)(e,e.value.length-o.suffix.length)},e.oninput(),e.dispatchEvent(n.i(r.c)("input"))}}},function(e,t,n){function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:v.a;"number"==typeof e&&(e=e.toFixed(o(t.precision)));var n=e.indexOf("-")>=0?"-":"",r=f(s(a(e),t.precision)).split("."),i=r[0],u=r[1];return i=c(i,t.thousands),t.prefix+n+l(i,u,t.decimal)+t.suffix}function i(e,t){var n=e.indexOf("-")>=0?-1:1,r=s(a(e),t);return parseFloat(r)*n}function a(e){return f(e).replace(/\D+/g,"")||"0"}function o(e){return u(0,e,20)}function u(e,t,n){return Math.max(e,Math.min(t,n))}function s(e,t){var n=Math.pow(10,t);return(parseFloat(e)/n).toFixed(o(t))}function c(e,t){return e.replace(/(\d)(?=(?:\d{3})+\b)/gm,"$1"+t)}function l(e,t,n){return t?e+n+t:e}function f(e){return e?e.toString():""}function p(e,t){var n=function(){e.setSelectionRange(t,t)};e===document.activeElement&&(n(),setTimeout(n,1))}function d(e){var t=document.createEvent("Event");return t.initEvent(e,!0,!0),t}var v=n(0);n.d(t,"a",(function(){return r})),n.d(t,"d",(function(){return i})),n.d(t,"b",(function(){return p})),n.d(t,"c",(function(){return d}))},function(e,t,n){function r(e,t){t&&Object.keys(t).map((function(e){u.a[e]=t[e]})),e.directive("money",o.a),e.component("money",a.a)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(6),a=n.n(i),o=n(1),u=n(0);n.d(t,"Money",(function(){return a.a})),n.d(t,"VMoney",(function(){return o.a})),n.d(t,"options",(function(){return u.a})),n.d(t,"VERSION",(function(){return s}));var s="0.8.1";t.default=r,"undefined"!=typeof window&&window.Vue&&window.Vue.use(r)},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=n(0),a=n(2);t.default={name:"Money",props:{value:{required:!0,type:[Number,String],default:0},masked:{type:Boolean,default:!1},precision:{type:Number,default:function(){return i.a.precision}},decimal:{type:String,default:function(){return i.a.decimal}},thousands:{type:String,default:function(){return i.a.thousands}},prefix:{type:String,default:function(){return i.a.prefix}},suffix:{type:String,default:function(){return i.a.suffix}}},directives:{money:r.a},data:function(){return{formattedValue:""}},watch:{value:{immediate:!0,handler:function(e,t){var r=n.i(a.a)(e,this.$props);r!==this.formattedValue&&(this.formattedValue=r)}}},methods:{change:function(e){this.$emit("input",this.masked?e.target.value:n.i(a.d)(e.target.value,this.precision))}}}},function(e,t,n){t.a=function(e,t){return e=e||{},t=t||{},Object.keys(e).concat(Object.keys(t)).reduce((function(n,r){return n[r]=void 0===t[r]?e[r]:t[r],n}),{})}},function(e,t,n){var r=n(7)(n(4),n(8),null,null);e.exports=r.exports},function(e,t){e.exports=function(e,t,n,r){var i,a=e=e||{},o=typeof e.default;"object"!==o&&"function"!==o||(i=e,a=e.default);var u="function"==typeof a?a.options:a;if(t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns),n&&(u._scopeId=n),r){var s=u.computed||(u.computed={});Object.keys(r).forEach((function(e){var t=r[e];s[e]=function(){return t}}))}return{esModule:i,exports:a,options:u}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("input",{directives:[{name:"money",rawName:"v-money",value:{precision:e.precision,decimal:e.decimal,thousands:e.thousands,prefix:e.prefix,suffix:e.suffix},expression:"{precision, decimal, thousands, prefix, suffix}"}],staticClass:"v-money",attrs:{type:"tel"},domProps:{value:e.formattedValue},on:{change:e.change}})},staticRenderFns:[]}},function(e,t,n){e.exports=n(3)}]);var d={exports:{}};d.exports=function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p=".",t(t.s=10)}([function(e,t){e.exports={"#":{pattern:/\d/},X:{pattern:/[0-9a-zA-Z]/},S:{pattern:/[a-zA-Z]/},A:{pattern:/[a-zA-Z]/,transform:function(e){return e.toLocaleUpperCase()}},a:{pattern:/[a-zA-Z]/,transform:function(e){return e.toLocaleLowerCase()}},"!":{escape:!0}}},function(e,t,n){function r(e){var t=document.createEvent("Event");return t.initEvent(e,!0,!0),t}var i=n(2),a=n(0),o=n.n(a);t.a=function(e,t){var a=t.value;if((Array.isArray(a)||"string"==typeof a)&&(a={mask:a,tokens:o.a}),"INPUT"!==e.tagName.toLocaleUpperCase()){var u=e.getElementsByTagName("input");if(1!==u.length)throw new Error("v-mask directive requires 1 input, found "+u.length);e=u[0]}e.oninput=function(t){if(t.isTrusted){var o=e.selectionEnd,u=e.value[o-1];for(e.value=n.i(i.a)(e.value,a.mask,!0,a.tokens);o<e.value.length&&e.value.charAt(o-1)!==u;)o++;e===document.activeElement&&(e.setSelectionRange(o,o),setTimeout((function(){e.setSelectionRange(o,o)}),0)),e.dispatchEvent(r("input"))}};var s=n.i(i.a)(e.value,a.mask,!0,a.tokens);s!==e.value&&(e.value=s,e.dispatchEvent(r("input")))}},function(e,t,n){var r=n(6),i=n(5);t.a=function(e,t){var a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],o=arguments[3];return Array.isArray(t)?n.i(i.a)(r.a,t,o)(e,t,a,o):n.i(r.a)(e,t,a,o)}},function(e,t,n){function r(e){e.component(s.a.name,s.a),e.directive("mask",o.a)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),a=n.n(i),o=n(1),u=n(7),s=n.n(u);n.d(t,"TheMask",(function(){return s.a})),n.d(t,"mask",(function(){return o.a})),n.d(t,"tokens",(function(){return a.a})),n.d(t,"version",(function(){return c}));var c="0.11.1";t.default=r,"undefined"!=typeof window&&window.Vue&&window.Vue.use(r)},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=n(0),a=n.n(i),o=n(2);t.default={name:"TheMask",props:{value:[String,Number],mask:{type:[String,Array],required:!0},masked:{type:Boolean,default:!1},tokens:{type:Object,default:function(){return a.a}}},directives:{mask:r.a},data:function(){return{lastValue:null,display:this.value}},watch:{value:function(e){e!==this.lastValue&&(this.display=e)},masked:function(){this.refresh(this.display)}},computed:{config:function(){return{mask:this.mask,tokens:this.tokens,masked:this.masked}}},methods:{onInput:function(e){e.isTrusted||this.refresh(e.target.value)},refresh:function(e){this.display=e,(e=n.i(o.a)(e,this.mask,this.masked,this.tokens))!==this.lastValue&&(this.lastValue=e,this.$emit("input",e))}}}},function(e,t,n){function r(e,t,n){return t=t.sort((function(e,t){return e.length-t.length})),function(r,i){for(var a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],o=0;o<t.length;){var u=t[o];o++;var s=t[o];if(!(s&&e(r,s,!0,n).length>u.length))return e(r,u,a,n)}return""}}t.a=r},function(e,t,n){function r(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=arguments[3];e=e||"",t=t||"";for(var i=0,a=0,o="";i<t.length&&a<e.length;){var u=r[l=t[i]],s=e[a];u&&!u.escape?(u.pattern.test(s)&&(o+=u.transform?u.transform(s):s,i++),a++):(u&&u.escape&&(l=t[++i]),n&&(o+=l),s===l&&a++,i++)}for(var c="";i<t.length&&n;){var l;if(r[l=t[i]]){c="";break}c+=l,i++}return o+c}t.a=r},function(e,t,n){var r=n(8)(n(4),n(9),null,null);e.exports=r.exports},function(e,t){e.exports=function(e,t,n,r){var i,a=e=e||{},o=typeof e.default;"object"!==o&&"function"!==o||(i=e,a=e.default);var u="function"==typeof a?a.options:a;if(t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns),n&&(u._scopeId=n),r){var s=u.computed||(u.computed={});Object.keys(r).forEach((function(e){var t=r[e];s[e]=function(){return t}}))}return{esModule:i,exports:a,options:u}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("input",{directives:[{name:"mask",rawName:"v-mask",value:e.config,expression:"config"}],attrs:{type:"text"},domProps:{value:e.display},on:{input:e.onInput}})},staticRenderFns:[]}},function(e,t,n){e.exports=n(3)}]);var v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("s-input-container",e._b({class:e.sInputClasses,attrs:{validation:e.validation}},"s-input-container",e.$attrs,!1),[e.icon?n("s-icon",{staticClass:"left-icon",attrs:{icon:e.icon}}):e._e(),n(e.componentType,e._g(e._b({directives:[{name:"mask",rawName:"v-mask",value:e.mask,expression:"mask"}],key:e.id,ref:"input",tag:"component",class:e.inputClasses,attrs:{value:e.value,disabled:e.disabled,placeholder:e.floatLabel?"":e.placeholder},domProps:{innerHTML:e._s(e.textArea&&e.value)}},"component",e.inputAttrs,!1),e.listeners)),e.rightIcon?n("s-icon",{staticClass:"right-icon",attrs:{icon:e.rightIcon}}):e._e()],1)},m=[];const h={name:"SInput",components:{SInputContainer:f,SIcon:l,Money:p.exports.Money},directives:{mask(e,t){var n;if((null==t?void 0:t.value)&&(null==(n=null==t?void 0:t.value)?void 0:n.length))return d.exports.mask(e,t)}},props:{small:Boolean,larger:Boolean,icon:String,disabled:Boolean,rightIcon:String,iconColor:String,round:Boolean,textArea:Boolean,validation:String,placeholder:String,value:[String,Number,Object],isMoney:Boolean,floatLabel:Boolean,moneyMask:{type:Object,default:()=>({prefix:"R$ ",decimal:",",thousands:"."})},mask:{type:[String,Array],default:""},raw:Boolean,positiveOnly:Boolean},data:()=>({id:0}),watch:{value(e,t){t&&!e&&this.id++}},computed:{sInputClasses(){return["s-input",{"--small":this.small,"--larger":this.larger,"--has-icon":this.icon,"--is-money":this.isMoney,"--is-not-empty":!!this.value,"--is-textarea":this.textArea,"--is-disabled":this.disabled,"--is-float-label":this.floatLabel}]},inputClasses(){return["input",{"--has-icon":this.icon,"--is-rounded":this.round,"--is-textarea":this.textArea,"--has-right-icon":this.rightIcon}]},componentType(){return this.isMoney?"money":this.textArea?"textarea":"input"},listeners(){return e=u({},this.$listeners),t(e,n({input:e=>{var t;const n=null==(t=null==e?void 0:e.target)?void 0:t.value;this.$emit("input",this.isMoney?e:this.raw?n.replace(/[^\w\s]/gi,"").replace(/\s/g,""):n)},focus:e=>{this.$emit("focus",e)},blur:e=>{this.$emit("blur",e)}}));var e},inputAttrs(){return u(u({},this.$attrs),this.isMoney?this.moneyMask:{})}}},y={};var g=c(h,v,m,!1,x,null,null,null);function x(e){for(let t in y)this[t]=y[t]}var b=function(){return g.exports}();export{b as S};
