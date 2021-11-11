var t=Object.defineProperty,e=Object.defineProperties,n=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,o=(e,n,r)=>n in e?t(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,u=(t,e)=>{for(var n in e||(e={}))a.call(e,n)&&o(t,n,e[n]);if(r)for(var n of r(e))i.call(e,n)&&o(t,n,e[n]);return t};"undefined"!=typeof require&&require;import{c as s}from"./vendor.5affd582.js";import l from"./Index.04a1bb1e.js";import{S as c}from"./Index.e1b4f19b.js";import{n as p}from"./index.943c0929.js";import{S as f}from"./Index.8adda435.js";var d={exports:{}};d.exports=function(t){function e(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,e),a.l=!0,a.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p=".",e(e.s=9)}([function(t,e,n){e.a={prefix:"",suffix:"",thousands:",",decimal:".",precision:2}},function(t,e,n){var r=n(2),a=n(5),i=n(0);e.a=function(t,e){if(e.value){var o=n.i(a.a)(i.a,e.value);if("INPUT"!==t.tagName.toLocaleUpperCase()){var u=t.getElementsByTagName("input");1!==u.length||(t=u[0])}t.oninput=function(){var e=t.value.length-t.selectionEnd;t.value=n.i(r.a)(t.value,o),e=Math.max(e,o.suffix.length),e=t.value.length-e,e=Math.max(e,o.prefix.length+1),n.i(r.b)(t,e),t.dispatchEvent(n.i(r.c)("change"))},t.onfocus=function(){n.i(r.b)(t,t.value.length-o.suffix.length)},t.oninput(),t.dispatchEvent(n.i(r.c)("input"))}}},function(t,e,n){function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:v.a;"number"==typeof t&&(t=t.toFixed(o(e.precision)));var n=t.indexOf("-")>=0?"-":"",r=p(s(i(t),e.precision)).split("."),a=r[0],u=r[1];return a=l(a,e.thousands),e.prefix+n+c(a,u,e.decimal)+e.suffix}function a(t,e){var n=t.indexOf("-")>=0?-1:1,r=s(i(t),e);return parseFloat(r)*n}function i(t){return p(t).replace(/\D+/g,"")||"0"}function o(t){return u(0,t,20)}function u(t,e,n){return Math.max(t,Math.min(e,n))}function s(t,e){var n=Math.pow(10,e);return(parseFloat(t)/n).toFixed(o(e))}function l(t,e){return t.replace(/(\d)(?=(?:\d{3})+\b)/gm,"$1"+e)}function c(t,e,n){return e?t+n+e:t}function p(t){return t?t.toString():""}function f(t,e){var n=function(){t.setSelectionRange(e,e)};t===document.activeElement&&(n(),setTimeout(n,1))}function d(t){var e=document.createEvent("Event");return e.initEvent(t,!0,!0),e}var v=n(0);n.d(e,"a",(function(){return r})),n.d(e,"d",(function(){return a})),n.d(e,"b",(function(){return f})),n.d(e,"c",(function(){return d}))},function(t,e,n){function r(t,e){e&&Object.keys(e).map((function(t){u.a[t]=e[t]})),t.directive("money",o.a),t.component("money",i.a)}Object.defineProperty(e,"__esModule",{value:!0});var a=n(6),i=n.n(a),o=n(1),u=n(0);n.d(e,"Money",(function(){return i.a})),n.d(e,"VMoney",(function(){return o.a})),n.d(e,"options",(function(){return u.a})),n.d(e,"VERSION",(function(){return s}));var s="0.8.1";e.default=r,"undefined"!=typeof window&&window.Vue&&window.Vue.use(r)},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=n(1),a=n(0),i=n(2);e.default={name:"Money",props:{value:{required:!0,type:[Number,String],default:0},masked:{type:Boolean,default:!1},precision:{type:Number,default:function(){return a.a.precision}},decimal:{type:String,default:function(){return a.a.decimal}},thousands:{type:String,default:function(){return a.a.thousands}},prefix:{type:String,default:function(){return a.a.prefix}},suffix:{type:String,default:function(){return a.a.suffix}}},directives:{money:r.a},data:function(){return{formattedValue:""}},watch:{value:{immediate:!0,handler:function(t,e){var r=n.i(i.a)(t,this.$props);r!==this.formattedValue&&(this.formattedValue=r)}}},methods:{change:function(t){this.$emit("input",this.masked?t.target.value:n.i(i.d)(t.target.value,this.precision))}}}},function(t,e,n){e.a=function(t,e){return t=t||{},e=e||{},Object.keys(t).concat(Object.keys(e)).reduce((function(n,r){return n[r]=void 0===e[r]?t[r]:e[r],n}),{})}},function(t,e,n){var r=n(7)(n(4),n(8),null,null);t.exports=r.exports},function(t,e){t.exports=function(t,e,n,r){var a,i=t=t||{},o=typeof t.default;"object"!==o&&"function"!==o||(a=t,i=t.default);var u="function"==typeof i?i.options:i;if(e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns),n&&(u._scopeId=n),r){var s=u.computed||(u.computed={});Object.keys(r).forEach((function(t){var e=r[t];s[t]=function(){return e}}))}return{esModule:a,exports:i,options:u}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("input",{directives:[{name:"money",rawName:"v-money",value:{precision:t.precision,decimal:t.decimal,thousands:t.thousands,prefix:t.prefix,suffix:t.suffix},expression:"{precision, decimal, thousands, prefix, suffix}"}],staticClass:"v-money",attrs:{type:"tel"},domProps:{value:t.formattedValue},on:{change:t.change}})},staticRenderFns:[]}},function(t,e,n){t.exports=n(3)}]);var v={exports:{}};v.exports=function(t){function e(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,e),a.l=!0,a.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p=".",e(e.s=10)}([function(t,e){t.exports={"#":{pattern:/\d/},X:{pattern:/[0-9a-zA-Z]/},S:{pattern:/[a-zA-Z]/},A:{pattern:/[a-zA-Z]/,transform:function(t){return t.toLocaleUpperCase()}},a:{pattern:/[a-zA-Z]/,transform:function(t){return t.toLocaleLowerCase()}},"!":{escape:!0}}},function(t,e,n){function r(t){var e=document.createEvent("Event");return e.initEvent(t,!0,!0),e}var a=n(2),i=n(0),o=n.n(i);e.a=function(t,e){var i=e.value;if((Array.isArray(i)||"string"==typeof i)&&(i={mask:i,tokens:o.a}),"INPUT"!==t.tagName.toLocaleUpperCase()){var u=t.getElementsByTagName("input");if(1!==u.length)throw new Error("v-mask directive requires 1 input, found "+u.length);t=u[0]}t.oninput=function(e){if(e.isTrusted){var o=t.selectionEnd,u=t.value[o-1];for(t.value=n.i(a.a)(t.value,i.mask,!0,i.tokens);o<t.value.length&&t.value.charAt(o-1)!==u;)o++;t===document.activeElement&&(t.setSelectionRange(o,o),setTimeout((function(){t.setSelectionRange(o,o)}),0)),t.dispatchEvent(r("input"))}};var s=n.i(a.a)(t.value,i.mask,!0,i.tokens);s!==t.value&&(t.value=s,t.dispatchEvent(r("input")))}},function(t,e,n){var r=n(6),a=n(5);e.a=function(t,e){var i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],o=arguments[3];return Array.isArray(e)?n.i(a.a)(r.a,e,o)(t,e,i,o):n.i(r.a)(t,e,i,o)}},function(t,e,n){function r(t){t.component(s.a.name,s.a),t.directive("mask",o.a)}Object.defineProperty(e,"__esModule",{value:!0});var a=n(0),i=n.n(a),o=n(1),u=n(7),s=n.n(u);n.d(e,"TheMask",(function(){return s.a})),n.d(e,"mask",(function(){return o.a})),n.d(e,"tokens",(function(){return i.a})),n.d(e,"version",(function(){return l}));var l="0.11.1";e.default=r,"undefined"!=typeof window&&window.Vue&&window.Vue.use(r)},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=n(1),a=n(0),i=n.n(a),o=n(2);e.default={name:"TheMask",props:{value:[String,Number],mask:{type:[String,Array],required:!0},masked:{type:Boolean,default:!1},tokens:{type:Object,default:function(){return i.a}}},directives:{mask:r.a},data:function(){return{lastValue:null,display:this.value}},watch:{value:function(t){t!==this.lastValue&&(this.display=t)},masked:function(){this.refresh(this.display)}},computed:{config:function(){return{mask:this.mask,tokens:this.tokens,masked:this.masked}}},methods:{onInput:function(t){t.isTrusted||this.refresh(t.target.value)},refresh:function(t){this.display=t,(t=n.i(o.a)(t,this.mask,this.masked,this.tokens))!==this.lastValue&&(this.lastValue=t,this.$emit("input",t))}}}},function(t,e,n){function r(t,e,n){return e=e.sort((function(t,e){return t.length-e.length})),function(r,a){for(var i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],o=0;o<e.length;){var u=e[o];o++;var s=e[o];if(!(s&&t(r,s,!0,n).length>u.length))return t(r,u,i,n)}return""}}e.a=r},function(t,e,n){function r(t,e){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=arguments[3];t=t||"",e=e||"";for(var a=0,i=0,o="";a<e.length&&i<t.length;){var u=r[c=e[a]],s=t[i];u&&!u.escape?(u.pattern.test(s)&&(o+=u.transform?u.transform(s):s,a++),i++):(u&&u.escape&&(c=e[++a]),n&&(o+=c),s===c&&i++,a++)}for(var l="";a<e.length&&n;){var c;if(r[c=e[a]]){l="";break}l+=c,a++}return o+l}e.a=r},function(t,e,n){var r=n(8)(n(4),n(9),null,null);t.exports=r.exports},function(t,e){t.exports=function(t,e,n,r){var a,i=t=t||{},o=typeof t.default;"object"!==o&&"function"!==o||(a=t,i=t.default);var u="function"==typeof i?i.options:i;if(e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns),n&&(u._scopeId=n),r){var s=u.computed||(u.computed={});Object.keys(r).forEach((function(t){var e=r[t];s[t]=function(){return e}}))}return{esModule:a,exports:i,options:u}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("input",{directives:[{name:"mask",rawName:"v-mask",value:t.config,expression:"config"}],attrs:{type:"text"},domProps:{value:t.display},on:{input:t.onInput}})},staticRenderFns:[]}},function(t,e,n){t.exports=n(3)}]);var m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("s-input-container",t._b({class:t.sInputClasses,attrs:{validation:t.validation}},"s-input-container",t.$attrs,!1),[t.icon?n("s-icon",{staticClass:"left-icon",attrs:{icon:t.icon}}):t._e(),n(t.componentType,t._g(t._b({directives:[{name:"mask",rawName:"v-mask",value:t.mask,expression:"mask"}],key:t.id,ref:"input",tag:"component",class:t.inputClasses,attrs:{value:t.value,placeholder:t.floatLabel?"":t.placeholder},domProps:{innerHTML:t._s(t.textArea&&t.value)}},"component",t.inputAttrs,!1),t.listeners)),t.rightIcon?n("s-icon",{staticClass:"right-icon",attrs:{icon:t.rightIcon}}):t._e()],1)},h=[];const y={name:"SInput",components:{SInputContainer:c,SIcon:l,Money:d.exports.Money},directives:{mask(t,e){var n;if((null==e?void 0:e.value)&&(null==(n=null==e?void 0:e.value)?void 0:n.length))return v.exports.mask(t,e)}},props:{small:Boolean,icon:String,rightIcon:String,iconColor:String,round:Boolean,disabled:Boolean,textArea:Boolean,validation:String,placeholder:String,value:[String,Number,Object],isMoney:Boolean,floatLabel:Boolean,moneyMask:{type:Object,default:()=>({prefix:"R$ ",decimal:",",thousands:"."})},mask:{type:[String,Array],default:""},raw:Boolean,positiveOnly:Boolean},data:()=>({id:0}),watch:{value(t,e){e&&!t&&this.id++}},computed:{sInputClasses(){return["s-input",{"--small":this.small,"--has-icon":this.icon,"--is-money":this.isMoney,"--is-not-empty":!!this.value,"--is-textarea":this.textArea,"--is-disabled":this.disabled,"--is-float-label":this.floatLabel}]},inputClasses(){return["input",{"--has-icon":this.icon,"--is-rounded":this.round,"--is-textarea":this.textArea,"--has-right-icon":this.rightIcon}]},componentType(){return this.isMoney?"money":this.textArea?"textarea":"input"},listeners(){return t=u({},this.$listeners),e(t,n({input:t=>{var e;const n=null==(e=null==t?void 0:t.target)?void 0:e.value;this.$emit("input",this.isMoney?t:this.raw?n.replace(/[^\w\s]/gi,"").replace(/\s/g,""):n)},focus:t=>{this.$emit("focus",t)},blur:t=>{this.$emit("blur",t)}}));var t},inputAttrs(){return u(u({},this.$attrs),this.isMoney?this.moneyMask:{})}}},g={};var b=p(y,m,h,!1,x,null,null,null);function x(t){for(let e in g)this[e]=g[e]}const k={};var M=p({components:{SInput:function(){return b.exports}(),SButton:f},data:()=>({inputMask:"",inputMoney:"",inputRounded:"",inputSearch:"",inputDataError:"",inputTeste:"",inputFloatLabel:""}),methods:{onInputMoney(t){this.inputMoney=t}}},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"s-input-example"},[n("s-input",{attrs:{raw:"",label:"mask",mask:["####-####"],value:t.inputMask},on:{input:function(e){return t.inputMask=e}}}),n("s-input",{attrs:{label:"money","is-money":"",value:t.inputMoney},on:{input:t.onInputMoney}}),n("s-input",{attrs:{label:"rounded",round:"",value:t.inputRounded},on:{input:function(e){return t.inputRounded=e}}}),n("s-input",{attrs:{round:"",icon:"sdz-eye-off",value:t.inputSearch,placeholder:"Search"},on:{input:function(e){return t.inputSearch=e}}}),n("s-input",{attrs:{label:"small",small:""}}),n("s-input",{attrs:{label:"disabled",disabled:""}}),n("s-button",{on:{click:function(e){t.inputDataError=""}}},[t._v("reset")]),n("s-input",{attrs:{label:"error",validation:t.inputDataError?"":"error msg",value:t.inputDataError},on:{input:function(e){return t.inputDataError=e}}}),n("s-button",{on:{click:function(e){t.inputTeste=""}}},[t._v("reset")]),n("s-input",{attrs:{label:"teste",value:t.inputTeste,placeholder:"ex: Teste"},on:{input:function(e){return t.inputTeste=e}}}),n("input",{attrs:{label:"teste",placeholder:"ex: Teste"},domProps:{value:t.inputTeste},on:{input:function(e){return t.e=e.target.value}}}),n("s-input",{attrs:{label:"is float label","float-label":"",value:t.inputFloatLabel},on:{input:function(e){return t.inputFloatLabel=e}}})],1)}),[],!1,w,null,null,null);function w(t){for(let e in k)this[e]=k[e]}var S=function(){return M.exports}();export{S as default};
