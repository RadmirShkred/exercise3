(this.webpackJsonpexercise3=this.webpackJsonpexercise3||[]).push([[0],{1:function(e,t,a){e.exports={app:"App_app__3Quvt",container:"App_container__1EK9l",number:"App_number__2W7a-",input:"App_input__3ikJw",button:"App_button__28Jcg",names:"App_names__1Q38G",name:"App_name__1yK0F"}},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),s=a.n(c),u=(a(14),a(8)),p=a(2),o=a(3),i=a(4),m=a(5),l=a(1),h=a.n(l),_=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).onClickChange=function(){var e=n.refInputChange.current.value;n.props.changeState(e),n.refInputChange.current.value=""},n.refInputChange=r.a.createRef(),n}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:h.a.container},r.a.createElement("span",{className:h.a.number},this.props.state.counter),r.a.createElement("input",{type:"text",ref:this.refInputChange,className:h.a.input}),r.a.createElement("button",{onClick:this.onClickChange,className:h.a.button},"\u0412\u0432\u0435\u0441\u0442\u0438"),r.a.createElement("div",{className:h.a.names},this.props.state.names.map((function(e){return r.a.createElement("div",{className:h.a.name},e)}))))}}]),a}(r.a.Component),f=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={counter:0,names:[]},e.changeState=function(t){var a=e.state.counter+1,n=[].concat(Object(u.a)(e.state.names),[t]);e.setState({counter:a,names:n})},e}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:h.a.app},r.a.createElement(_,{state:this.state,changeState:this.changeState}))}}]),a}(r.a.Component);s.a.render(r.a.createElement(f,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.939bf4a3.chunk.js.map