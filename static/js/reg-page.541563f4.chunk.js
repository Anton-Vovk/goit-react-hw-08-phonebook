(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[4],{111:function(e,t,a){e.exports={form:"RegisterForm_form__1XusJ",inputTitle:"RegisterForm_inputTitle__1AHGp",registrationLabel:"RegisterForm_registrationLabel__2qwoR",registrationInput:"RegisterForm_registrationInput__2yZ0r",registrationButton:"RegisterForm_registrationButton__27MBw"}},115:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return h}));var n=a(0),s=a(3),r=a(36),i=a(37),o=a(39),l=a(38),c=a(9),u=a(27),p=a(111),m=a.n(p),b=a(1),j=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={name:"",email:"",password:""},e.inputHandler=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(s.a)({},n,r))},e.SubmitHandler=function(t){t.preventDefault(),e.props.onRegister(e.state),e.setState({name:"",email:"",password:""})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.password,n=e.name;return Object(b.jsx)("div",{children:Object(b.jsxs)("form",{onSubmit:this.SubmitHandler,className:m.a.form,children:[Object(b.jsxs)("label",{className:m.a.registrationLabel,children:[Object(b.jsx)("span",{className:m.a.inputTitle,children:"Name"}),Object(b.jsx)("input",{className:m.a.registrationInput,type:"text",name:"name",value:n,onChange:this.inputHandler})]}),Object(b.jsxs)("label",{className:m.a.registrationLabel,children:[Object(b.jsx)("span",{className:m.a.inputTitle,children:"Email"}),Object(b.jsx)("input",{className:m.a.registrationInput,type:"email",name:"email",value:t,onChange:this.inputHandler})]}),Object(b.jsxs)("label",{className:m.a.registrationLabel,children:[Object(b.jsx)("span",{className:m.a.inputTitle,children:"Password"}),Object(b.jsx)("input",{className:m.a.registrationInput,type:"password",name:"password",value:a,onChange:this.inputHandler})]}),Object(b.jsx)("button",{className:m.a.registrationButton,type:"submit",children:"Register"})]})})}}]),a}(n.Component),d={onRegister:u.d},g=Object(c.b)(null,d)(j),h=function(){return Object(b.jsx)("div",{children:Object(b.jsx)(g,{})})}}}]);
//# sourceMappingURL=reg-page.541563f4.chunk.js.map