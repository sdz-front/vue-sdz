import{n as s,c as t,S as a}from"./index.78b82f7f.js";import{S as e}from"./box.c9997a17.js";import"./vendor.97cc0df3.js";const o={};var r=s({components:{SInput:t,SBox:e,STitle:a},data:()=>({inputDataError:"",inputTeste:""}),methods:{onInputMoney(s){this.inputMoney=s}}},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"s-input-example"},[a("s-title",{attrs:{"class-title":"h1",title:"Password"}}),a("p",{staticClass:"subtitle"},[s._v(" Input Password tem como objetivo permitir que a pessoa usuária coloque e/ou cadastre uma senha dentro do sistema. Possui uma máscara que por default fica habilitada, mas a pessoa usuária pode desabilitar para consegui ver os caracteres. ")]),a("p",{staticClass:"subtitle"},[s._v(" Utilizar o Input Password em fluxos de login ou de cadastro de senha e perfil. ")]),a("p",{staticClass:"subtitle"},[s._v(" Utilizar mensagens de erro que ajudam a pessoa usuário a solucionar o problema. ")]),a("p",{staticClass:"subtitle"},[s._v(" Considerar Input Password sem label em casos específicos, mas com a utilização obrigatório do placehold como texto orientador. ")]),a("s-title",{attrs:{"class-title":"h2",title:"Default"}}),a("s-box",[a("s-input",{attrs:{label:"Password",type:"password"}})],1),a("s-title",{attrs:{"class-title":"h2",title:"Error"}}),a("s-box",[a("s-input",{attrs:{label:"Password Error",validation:s.inputDataError?"":"error msg",value:s.inputDataError,type:"password"},on:{input:function(t){return s.inputDataError=t}}})],1),a("s-title",{attrs:{"class-title":"h2",title:"Disabled"}}),a("s-box",[a("s-input",{attrs:{placeholder:"Disabled input",disabled:"disabled",type:"password",value:"1234",label:"Password Disabled"}}),a("s-input",{attrs:{placeholder:"Password disabled readonly",readonly:"readonly",type:"password"}})],1)],1)}),[],!1,i,null,null,null);function i(s){for(let t in o)this[t]=o[t]}var l=function(){return r.exports}();export{l as default};
