(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){e.exports=a(33)},33:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(7),o=a.n(c),r=a(8),i=a(10),m=a(9),u=a(11),p=a(14),s=a(37),E=a(35),h=a(36),d=a(6),g=a.n(d),f=function(e){function t(e){var a;return Object(r.a)(this,t),a=Object(i.a)(this,Object(m.a)(t).call(this,e)),console.log("initial history is: ",JSON.stringify(a.history,null,2)),a.history.listen(function(e,t){console.log("The current URL is ".concat(e.pathname).concat(e.search).concat(e.hash)),console.log("The last navigation action was ".concat(t),JSON.stringify(a.history,null,2))}),a}return Object(u.a)(t,e),t}(s.a);function v(){return l.a.createElement("div",null,l.a.createElement("h2",null,"Home"))}function b(){return l.a.createElement("div",null,l.a.createElement("h2",null,"About"),l.a.createElement(p.Button,{variant:"light",onClick:function(){return alert("clicked")}},"Click Me"))}function w(e){var t=e.match;return l.a.createElement("div",null,l.a.createElement("h2",null,"Topics"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(E.a,{to:"".concat(t.url,"/rendering")},"Rendering with React")),l.a.createElement("li",null,l.a.createElement(E.a,{to:"".concat(t.url,"/components")},"Components")),l.a.createElement("li",null,l.a.createElement(E.a,{to:"".concat(t.url,"/props-v-state")},"Props v. State"))),l.a.createElement(h.a,{path:"".concat(t.path,"/:topicId"),component:A}),l.a.createElement(h.a,{exact:!0,path:t.path,render:function(){return l.a.createElement("h3",null,"Please select a topic.")}}))}function A(e){var t=e.match;return l.a.createElement("div",null,l.a.createElement("h3",null,t.params.topicId))}n.Component;var y=function(){return console.log(window.location),l.a.createElement(f,null,l.a.createElement(s.a,null,l.a.createElement("div",{className:g.a.App},l.a.createElement("div",{className:"AppHeader"},l.a.createElement("img",{className:"AppLogo",src:"https://embed.widencdn.net/img/masonite/d58nubyyup/205px/Masonite_Logo_Stacked_1c_White.png",alt:"Masonite, open to extraordinary"}),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(E.a,{to:"/"},l.a.createElement("span",{className:"AppLink"},"Home"))),l.a.createElement("li",{className:g.a.AppLink},l.a.createElement(E.a,{to:"/about"},"About")),l.a.createElement("li",{className:g.a.AppLink},l.a.createElement(E.a,{to:"/topics"},"Topics"))),l.a.createElement("hr",null),l.a.createElement(h.a,{exact:!0,path:"/",component:v}),l.a.createElement(h.a,{path:"/about",component:b}),l.a.createElement(h.a,{path:"/topics",component:w})))))};o.a.render(l.a.createElement(y,null),document.getElementById("root"))},6:function(e,t,a){e.exports={App:"App_App__3m8oc"}}},[[16,2,1]]]);
//# sourceMappingURL=main.9a828605.chunk.js.map