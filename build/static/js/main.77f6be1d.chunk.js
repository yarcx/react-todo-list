(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{14:function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),i=a(7),l=a.n(i),r=(a(6),a(8)),s=a(1),c=a(2),d=a(4),u=a(3),m=function(t){Object(d.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))).state={title:""},t.handleChange=function(e){t.setState({title:e.target.value})},t.handleSubmit=function(e){e.preventDefault(),t.props.addTodo(t.state.title),t.setState({title:""})},t}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"addTodo"},o.a.createElement("header",null,o.a.createElement("div",{className:"text"},o.a.createElement("h1",null,"To-Do App!"),o.a.createElement("p",null,"You've got ",this.props.list.length," items Todo")),o.a.createElement("form",{className:"form",onSubmit:this.handleSubmit},o.a.createElement("input",{type:"text",className:"todo-form",required:!0,value:this.state.title,onChange:this.handleChange}),o.a.createElement("button",{className:"btn",type:"submit"},"Add"))))}}]),a}(n.Component),p=function(t){Object(d.a)(a,t);var e=Object(u.a)(a);function a(){return Object(s.a)(this,a),e.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var t=this,e=this.props.list.map((function(e){return o.a.createElement("div",{className:"list",key:e.id},o.a.createElement("li",{contentEditable:e.edit},e.text),o.a.createElement("div",{className:"myBtns"},o.a.createElement("div",{className:"edit btn",onClick:function(){var a=e.edit=!e.edit;t.props.editTodo(a)}},"Edit"),o.a.createElement("div",{className:"delete btn",onClick:function(){t.props.deleteTodo(e.id)}},"Delete")))}));return o.a.createElement("div",null,e)}}]),a}(n.Component),h=function(t){Object(d.a)(a,t);var e=Object(u.a)(a);function a(){return Object(s.a)(this,a),e.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"todo-list"},o.a.createElement("h1",null,"Todo List"),this.props.list.length?o.a.createElement(p,{list:this.props.list,deleteTodo:this.props.deleteTodo,editTodo:this.props.editTodo}):o.a.createElement("div",{className:"list"},o.a.createElement("li",null,"Yay!!... You've got nothing left todo")))}}]),a}(n.Component),f=function(t){Object(d.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))).state={list:[]},t.addTodo=function(e){var a=Math.floor(1e3*Math.random()),n=[].concat(Object(r.a)(t.state.list),[{id:a,text:e}]);t.setState({list:n})},t.deleteTodo=function(e){var a=t.state.list.filter((function(t){return t.id!==e}));t.setState({list:a})},t.editTodo=function(e){t.state.list.map((function(t){return t.edit,t}))},t}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(m,{addTodo:this.addTodo,list:this.state.list}),o.a.createElement(h,{list:this.state.list,deleteTodo:this.deleteTodo,editTodo:this.editTodo}))}}]),a}(n.Component),v=document.getElementById("root");l.a.render(o.a.createElement(f,null),v)},6:function(t,e,a){},9:function(t,e,a){t.exports=a(14)}},[[9,1,2]]]);
//# sourceMappingURL=main.77f6be1d.chunk.js.map