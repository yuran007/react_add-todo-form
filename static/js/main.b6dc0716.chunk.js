(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{15:function(e,u,t){},17:function(e,u,t){},18:function(e,u,t){"use strict";t.r(u);var a=t(4),r=t.n(a),n=t(8),i=t(5),s=t(6),o=t(10),D=t(9),c=t(3),l=t(1),d=t.n(l),m=(t(15),t(0)),F=function(e){var u=e.todo;return Object(m.jsx)(m.Fragment,{children:"".concat(u.title," - ").concat(u.completed)})},h=function(e){var u=e.user;return Object(m.jsx)(m.Fragment,{children:u&&Object(m.jsx)("span",{children:"".concat(u.name," - ").concat(u.email)})})},C=(t(17),function(e){var u=e.prepared;return Object(m.jsx)("ul",{className:"todo",children:u.map((function(e){return Object(m.jsxs)("li",{className:"todo--item",children:[Object(m.jsx)(F,{todo:e}),e.user&&Object(m.jsx)("span",{children:" - "}),Object(m.jsx)(h,{user:e.user})]},e.id)}))})}),A=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",address:{street:"Kulas Light",suite:"Apt. 556",city:"Gwenborough",zipcode:"92998-3874",geo:{lat:"-37.3159",lng:"81.1496"}},phone:"1-770-736-8031 x56442",website:"hildegard.org",company:{name:"Romaguera-Crona",catchPhrase:"Multi-layered client-server neural-net",bs:"harness real-time e-markets"}},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",address:{street:"Victor Plains",suite:"Suite 879",city:"Wisokyburgh",zipcode:"90566-7771",geo:{lat:"-43.9509",lng:"-34.4618"}},phone:"010-692-6593 x09125",website:"anastasia.net",company:{name:"Deckow-Crist",catchPhrase:"Proactive didactic contingency",bs:"synergize scalable supply-chains"}},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",address:{street:"Douglas Extension",suite:"Suite 847",city:"McKenziehaven",zipcode:"59590-4157",geo:{lat:"-68.6102",lng:"-47.0653"}},phone:"1-463-123-4447",website:"ramiro.info",company:{name:"Romaguera-Jacobson",catchPhrase:"Face to face bifurcated interface",bs:"e-enable strategic applications"}},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",address:{street:"Hoeger Mall",suite:"Apt. 692",city:"South Elvis",zipcode:"53919-4257",geo:{lat:"29.4572",lng:"-164.2990"}},phone:"493-170-9623 x156",website:"kale.biz",company:{name:"Robel-Corkery",catchPhrase:"Multi-tiered zero tolerance productivity",bs:"transition cutting-edge web services"}},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",address:{street:"Skiles Walks",suite:"Suite 351",city:"Roscoeview",zipcode:"33263",geo:{lat:"-31.8129",lng:"62.5342"}},phone:"(254)954-1289",website:"demarco.info",company:{name:"Keebler LLC",catchPhrase:"User-centric fault-tolerant solution",bs:"revolutionize end-to-end systems"}},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",address:{street:"Norberto Crossing",suite:"Apt. 950",city:"South Christy",zipcode:"23505-1337",geo:{lat:"-71.4197",lng:"71.7478"}},phone:"1-477-935-8478 x6430",website:"ola.org",company:{name:"Considine-Lockman",catchPhrase:"Synchronised bottom-line interface",bs:"e-enable innovative applications"}},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",address:{street:"Rex Trail",suite:"Suite 280",city:"Howemouth",zipcode:"58804-1099",geo:{lat:"24.8918",lng:"21.8984"}},phone:"210.067.6132",website:"elvis.io",company:{name:"Johns Group",catchPhrase:"Configurable multimedia task-force",bs:"generate enterprise e-tailers"}},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",address:{street:"Ellsworth Summit",suite:"Suite 729",city:"Aliyaview",zipcode:"45169",geo:{lat:"-14.3990",lng:"-120.7677"}},phone:"586.493.6943 x140",website:"jacynthe.com",company:{name:"Abernathy Group",catchPhrase:"Implemented secondary concept",bs:"e-enable extensible e-tailers"}},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",address:{street:"Dayna Park",suite:"Suite 449",city:"Bartholomebury",zipcode:"76495-3109",geo:{lat:"24.6463",lng:"-168.8889"}},phone:"(775)976-6794 x41206",website:"conrad.com",company:{name:"Yost and Sons",catchPhrase:"Switchable contextually-based project",bs:"aggregate real-time technologies"}},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",address:{street:"Kattie Turnpike",suite:"Suite 198",city:"Lebsackbury",zipcode:"31428-2261",geo:{lat:"-38.2386",lng:"57.2232"}},phone:"024-648-3804",website:"ambrose.net",company:{name:"Hoeger LLC",catchPhrase:"Centralized empowering task-force",bs:"target end-to-end models"}}],b=[{userId:1,id:1,title:"delectus aut autem",completed:!1},{userId:1,id:2,title:"quis ut nam facilis et officia qui",completed:!1}].map((function(e){return Object(c.a)(Object(c.a)({},e),{},{user:A.find((function(u){return u.id===e.userId}))})})),E=function(e){Object(o.a)(t,e);var u=Object(D.a)(t);function t(){var e;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=u.call.apply(u,[this].concat(r))).validForm=!0,e.state={todosArr:b,userId:0,title:"",userIdErrorMessage:"",titleErrorMessage:""},e.handleSelectChange=function(u){e.setState({userId:Number(u.target.value),userIdErrorMessage:""})},e.handleInputChange=function(u){e.setState({title:u.target.value,titleErrorMessage:""})},e.validateTitle=function(u){var t=!0;if(""===u)return e.setState({titleErrorMessage:"Title todo should be not empty"}),t=!1,e.validForm;var a=Array.from(u.matchAll(/(?:[ 0-9A-Za-z\xA0\xAA\xB2\xB3\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02B8\u02E0-\u02E4\u0400-\u0484\u0487-\u052F\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u09F4-\u09F9\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0B72-\u0B77\u0BE6-\u0BF2\u0C66-\u0C6F\u0C78-\u0C7E\u0CE6-\u0CEF\u0D58-\u0D5E\u0D66-\u0D78\u0DE6-\u0DEF\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F33\u1040-\u1049\u1090-\u1099\u1369-\u137C\u1680\u16EE-\u16F0\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1946-\u194F\u19D0-\u19DA\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\u1C80-\u1C88\u1D00-\u1D25\u1D2B-\u1D5C\u1D62-\u1D65\u1D6B-\u1DBE\u1E00-\u1EFF\u2000-\u200A\u202F\u205F\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u212A\u212B\u2132\u214E\u2160-\u2189\u2150-\u2182\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2C60-\u2C7F\u2CFD\u2DE0-\u2DFF\u3000\u3007\u3021-\u3029\u3038-\u303A\u3192-\u3195\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\uA620-\uA629\uA640-\uA69F\uA6E6-\uA6EF\uA722-\uA787\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA7FF\uA830-\uA835\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uA9F0-\uA9F9\uAA50-\uAA59\uAB30-\uAB5A\uAB5C-\uAB64\uAB66-\uAB69\uABF0-\uABF9\uFB00-\uFB06\uFE2E\uFE2F\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A]|\uD800[\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDEE1-\uDEFB\uDF20-\uDF23\uDF41\uDF4A\uDFD1-\uDFD5]|\uD801[\uDCA0-\uDCA9\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC58-\uDC5F\uDC79-\uDC7F\uDCA7-\uDCAF\uDCFB-\uDCFF\uDD16-\uDD1B\uDDBC\uDDBD\uDDC0-\uDDCF\uDDD2-\uDDFF\uDE40-\uDE48\uDE7D\uDE7E\uDE9D-\uDE9F\uDEEB-\uDEEF\uDF58-\uDF5F\uDF78-\uDF7F\uDFA9-\uDFAF]|\uD803[\uDCFA-\uDCFF\uDD30-\uDD39\uDE60-\uDE7E\uDF1D-\uDF26\uDF51-\uDF54\uDFC5-\uDFCB]|\uD804[\uDC52-\uDC6F\uDCF0-\uDCF9\uDD36-\uDD3F\uDDD0-\uDDD9\uDDE1-\uDDF4\uDEF0-\uDEF9]|\uD805[\uDC50-\uDC59\uDCD0-\uDCD9\uDE50-\uDE59\uDEC0-\uDEC9\uDF30-\uDF3B]|\uD806[\uDCE0-\uDCF2\uDD50-\uDD59]|\uD807[\uDC50-\uDC6C\uDD50-\uDD59\uDDA0-\uDDA9\uDFC0-\uDFD4]|\uD809[\uDC00-\uDC6E]|\uD81A[\uDE60-\uDE69\uDEC0-\uDEC9\uDF50-\uDF59\uDF5B-\uDF61]|\uD81B[\uDE80-\uDE96]|\uD834[\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDFCE-\uDFFF]|\uD837[\uDF00-\uDF1E]|\uD838[\uDD40-\uDD49\uDEF0-\uDEF9]|\uD83A[\uDCC7-\uDCCF\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9])/g)).join("");if(u===a)e.setState({titleErrorMessage:""}),t=!0;else{var r=Array.from(u).filter((function(e){return!a.includes(e)})).join("");e.setState({title:a,titleErrorMessage:"This characters ".concat(r," are invalid")}),t=!1}return t},e.validateUser=function(u){var t=!0;return 0===u?(e.setState({userIdErrorMessage:"Please choose a user"}),t=!1):(e.setState({userIdErrorMessage:""}),t=!0),t},e.addTodo=function(u,t){e.setState((function(a){var r={userId:Number(t),id:e.state.todosArr.length+1,title:u,completed:!1,user:A.find((function(e){return e.id===t}))};return{todosArr:[].concat(Object(n.a)(a.todosArr),[r])}}))},e.handleSubmit=function(u){u.preventDefault();var t=e.state,a=t.title,r=t.userId;e.validateTitle(a)&&e.validateUser(r)&&e.addTodo(a,r)},e}return Object(s.a)(t,[{key:"render",value:function(){var e=this.state,u=e.todosArr,t=e.userId,a=e.title,r=e.userIdErrorMessage,n=e.titleErrorMessage;return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(C,{prepared:u}),Object(m.jsx)("h1",{children:"Add todo form"}),Object(m.jsxs)("form",{onSubmit:this.handleSubmit,className:"todo-list",children:[Object(m.jsxs)("div",{className:"todo__item",children:[Object(m.jsx)("input",{type:"text",name:"title",placeholder:"Enter a title",value:a,onChange:this.handleInputChange,className:"todo__item input"}),n&&Object(m.jsx)("div",{className:"error",children:n})]}),Object(m.jsxs)("div",{className:"todo__item",children:[Object(m.jsxs)("select",{title:"user",id:"user",name:"user",value:t,onChange:this.handleSelectChange,className:"todo__item select",children:[Object(m.jsx)("option",{value:"",className:"todo__item option",children:"Choose a user"}),A.map((function(e){return Object(m.jsx)("option",{className:"todo__item option",value:e.id,children:e.name},e.id)}))]}),r&&Object(m.jsx)("div",{className:"error",children:r})]}),Object(m.jsx)("div",{className:"todo__item",children:Object(m.jsx)("button",{type:"submit",name:"submit",className:"todo__item button",children:"Add todo"})})]})]})}}]),t}(d.a.Component),p=E;r.a.render(Object(m.jsx)(p,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.b6dc0716.chunk.js.map