import o from"./Index.b356537a.js";import{n as l,S as r,a as c,P as d}from"./index.077a4272.js";import n from"./Index.1168f2b2.js";import"./vendor.0f0055ec.js";import"./Index.606fa9ba.js";import"./Index.fc047e67.js";var u=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"s-switch-example"},[e("s-title",{attrs:{size:"title-1"}},[t._v("Switch")]),e("p",{staticClass:"subtitle"},[t._v(' Switch tem como objetivo possibilitar a pessoa usu\xE1ria habilitar ou desabilitar algo como um alternador bin\xE1rio de "on/off". ')]),e("s-title",{attrs:{size:"title-2"}},[t._v("Regras de aplica\xE7\xE3o")]),e("p",{staticClass:"subtitle"},[t._v(' Podem ser utilizados para habilitar ou desabilitar configura\xE7\xF5es como "receber ou n\xE3o" push notifications; ')]),e("p",{staticClass:"subtitle"},[t._v(" N\xE3o deve ser usado em cen\xE1rios onde \xE9 interessante a pessoa usu\xE1ria conseguir confirmar as op\xE7\xF5es selecionadas antes das a\xE7\xF5es serem aplicadas. Nesses casos deve-se utilizar o checkbox. ")]),e("source-code",{attrs:{file:"SSwitchExample",comp:"SSwitch"}}),e("s-title",{attrs:{size:"title-2"}},[t._v("Default")]),e("s-box",[e("s-switch",{attrs:{label:"Default Switch"},model:{value:t.data0,callback:function(s){t.data0=s},expression:"data0"}}),e("br"),e("s-switch",{attrs:{label:"Checked Switch"},model:{value:t.data2,callback:function(s){t.data2=s},expression:"data2"}})],1),e("pre-code",{attrs:{code:t.code1}}),e("s-title",{attrs:{size:"title-2"}},[t._v("Disabled")]),e("s-box",[e("s-switch",{attrs:{label:"disabled",disabled:""}})],1),e("pre-code",{attrs:{code:t.code2}})],1)},b=[];const m={components:{SSwitch:o,SBox:r,STitle:c,SourceCode:n,PreCode:d},data(){return{data0:!1,data1:!0,data2:!0,data3:!0,code1:`<s-switch label="Default Switch" v-model="data0" />
<s-switch label="Checked Switch" v-model="data2" />`,code2:'<s-switch label="disabled" disabled />'}}},i={};var p=l(m,u,b,!1,_,null,null,null);function _(t){for(let a in i)this[a]=i[a]}var C=function(){return p.exports}();export{C as default};
