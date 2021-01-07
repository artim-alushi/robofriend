(this.webpackJsonprobotfriends=this.webpackJsonprobotfriends||[]).push([[0],{26:function(e,t,n){},27:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(6),c=n.n(a),i=n(7),s=n(5),l=n(15),u=n(16),d=n(11),h="CHANGE_SEARCH_FIELD",b="REQUEST_ROBOTS_PENDING",f="REQUEST_ROBOTS_SUCCESS",p="REQUEST_ROBOTS_FAILED",g={searchField:""},m={isPending:!1,robots:[],error:""},v=Object(s.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case h:return Object(d.a)(Object(d.a)({},e),{},{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case b:return Object.assign({},e,{isPending:t.payload});case f:return Object.assign({},e,{robots:t.payload,isPending:!1});case p:return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}}),E=Object(l.createLogger)(),O=Object(s.d)(v,Object(s.a)(u.a,E)),y=(n(26),n(1)),w=n(2),j=n(4),C=n(3),R=function(e){var t=e.name,n=e.email,r=e.id;return o.a.createElement("div",{className:"bg-light-green tc dib br3 pa3 ma2 grow bw2 shadow-5"},o.a.createElement("img",{src:"https://robohash.org/".concat(r,"?size=200x200"),alt:"robots"}),o.a.createElement("div",null,o.a.createElement("h2",null,t),o.a.createElement("p",null,n," ")))},k=function(e){var t=e.robots.map((function(e){return o.a.createElement(R,{key:e.id,id:e.id,name:e.name,email:e.email})}));return o.a.createElement("div",null,t)},S=function(e){e.searchField;var t=e.searchChange;return o.a.createElement("input",{type:"search",placeholder:"Search Robots",onChange:t,className:"pa3 ba b--green bg-lightest-blue","aria-label":"Search Robots"})},N=function(e){return o.a.createElement("div",{style:{overflowY:"scroll",border:"5px solid black",height:"500px"}},e.children)},P=function(e){Object(j.a)(n,e);var t=Object(C.a)(n);function n(e){var r;return Object(y.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(w.a)(n,[{key:"componentDidCatch",value:function(e,t){console.log(e,t),this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?o.a.createElement("h1",null,"Oooops. That is not good."):this.props.children}}]),n}(r.Component),F=function(e){Object(j.a)(n,e);var t=Object(C.a)(n);function n(){var e;return Object(y.a)(this,n),(e=t.call(this)).updateCount=function(){e.setState((function(e){return{count:e.count+1}}))},e.state={count:0},e}return Object(w.a)(n,[{key:"render",value:function(){return o.a.createElement("button",{color:this.props.color,onClick:this.updateCount},"Count ",this.state.count)}}]),n}(r.PureComponent),T=function(e){Object(j.a)(n,e);var t=Object(C.a)(n);function n(){return Object(y.a)(this,n),t.apply(this,arguments)}return Object(w.a)(n,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h1",{className:"f1"},"Robot Friends"),o.a.createElement(F,{color:"red"}))}}]),n}(r.Component),A=(n(27),function(e){Object(j.a)(n,e);var t=Object(C.a)(n);function n(){return Object(y.a)(this,n),t.apply(this,arguments)}return Object(w.a)(n,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearchChange,r=e.robots,a=e.isPending,c=r.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return a?o.a.createElement("div",{className:"tc"},o.a.createElement("h1",{className:"f1"},"Loading..")):o.a.createElement("div",{className:"tc"},o.a.createElement(T,null),o.a.createElement(S,{searchChange:n}),o.a.createElement(N,null,o.a.createElement(P,null,o.a.createElement(k,{robots:c}))))}}]),n}(r.Component)),L=Object(i.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(t){return e((n=t.target.value,{type:h,payload:n}));var n},onRequestRobots:function(){return e((function(e){e({type:b,payload:!0}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:f,payload:t})})).catch((function(t){return e({type:p,payload:t})}))}))}}}))(A),W=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function _(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(28);c.a.render(o.a.createElement(i.a,{store:O},o.a.createElement(L,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/robofriend",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/robofriend","/service-worker.js");W?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):_(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):_(t,e)}))}}()}},[[29,1,2]]]);
//# sourceMappingURL=main.7271b9b6.chunk.js.map