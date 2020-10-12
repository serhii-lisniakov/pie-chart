(this.webpackJsonpzapaleanazimu=this.webpackJsonpzapaleanazimu||[]).push([[0],{32:function(n,e,t){n.exports=t(46)},37:function(n,e,t){},43:function(n,e,t){},44:function(n,e,t){},46:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),i=t(16),o=t.n(i),c=(t(37),t(15)),l=t(2),u=t(4),s=t(5),f=t(22),p=t(9);function d(){var n=Object(u.a)(["\n    width: 100px;\n    height: 40px;\n    color: #fff;\n    background: none;\n    border: 2px solid #ffffff40;\n    transition: .3s;\n    letter-spacing: 2px;\n    font-weight: 400;\n    cursor: pointer;\n    outline: none;\n    &:hover {\n        color: #000;\n        background: #fff;\n    }\n    position: absolute;\n    right: 0;\n    &::after {\n        position: absolute;\n        content: '';\n        width: 8px;\n        height: 8px;\n        right: -10px;\n        top: 50%;\n        transform: translateY(-50%) rotate(45deg);\n        border-top: 1px solid #ffffff;\n        border-right: 1px solid #ffffff;\n    }\n    @media (max-width: 1024px) {\n        position: relative;\n        &::after {\n            right: 50%;\n            top: 100%;\n            transform: translateX(50%) rotate(135deg);\n        }\n    }\n"]);return d=function(){return n},n}function m(){var n=Object(u.a)(["\n    width: 100%;\n    margin: 3px 0 10px;\n    height: 35px;\n    border: 1px solid #ffffff40;\n    color: #fff;\n    background: none;\n    outline: none;\n    font-size: 20px;\n    border-radius: 5px;\n    padding: 0 20px;\n    &::-webkit-outer-spin-button, ::-webkit-inner-spin-button {\n        -webkit-appearance: none;\n    }\n    -moz-appearance: textfield;\n"]);return m=function(){return n},n}function h(){var n=Object(u.a)(["\n    width: 50%;\n    padding: 15px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items:center;\n    color: #fff;\n    position: relative;\n    & label {\n        display: flex;\n        flex-direction: column;\n        width: 50%;\n        text-transform: uppercase;\n        letter-spacing: 2px;\n        font-size: 13px;\n    }\n    @media (max-width: 1024px) {\n        width: 100%;\n        label {\n            width: 70%;\n        }\n    }\n    @media (max-width: 475px) {\n        label {\n            width: 100%;\n        }\n    }\n"]);return h=function(){return n},n}var x=s.a.form(h()),b=s.a.input(m()),g=s.a.button(d()),v=function(){var n=Object(a.useState)(""),e=Object(f.a)(n,2),t=e[0],i=e[1],o=Object(a.useState)(""),c=Object(f.a)(o,2),l=c[0],u=c[1],s=Object(p.b)();return r.a.createElement(r.a.Fragment,null,r.a.createElement(x,{onSubmit:function(n){if(n.preventDefault(),0!==t.trim().length){var e={name:t,value:l,id:Date.now()};t.length&&l>0&&s({type:"ADD_ITEM",payload:e}),i(""),u("")}}},r.a.createElement("label",null,"Item",r.a.createElement(b,{type:"text",value:t,onChange:function(n){return i(n.target.value)}})),r.a.createElement("label",null,"Value",r.a.createElement(b,{type:"number",value:l,onChange:function(n){return u(+n.target.value)}})),r.a.createElement(g,{type:"submit"},"ADD")))};function E(){var n=Object(u.a)(["\n    width: 50%;\n    padding: 15px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items:center;\n    color: #fff;\n    & ul {\n        list-style: none;\n        padding: 0;\n        width: 70%;\n        & li {\n            display: grid;\n            grid-template-columns: 1fr 100px 10px;\n            padding: 3px 15px;\n            margin: 3px;\n            border-bottom: 1px solid #ffffff40;\n            & span:first-child {\n                text-transform: capitalize;\n                letter-spacing: 1px;\n            }\n            & span:last-child {\n                color: #ff000091;\n                cursor: pointer;\n                transition: .3s;\n                &:hover {\n                    color:#ff0000;\n                }\n            }\n        }\n    }\n    @media (max-width: 1024px) {\n        width: 100%;\n    }\n    @media (max-width: 475px) {\n        font-size: 12px;\n        ul {\n            width: 100%;\n        }\n    }\n"]);return E=function(){return n},n}var w=s.a.div(E()),y=function(){var n=Object(p.c)((function(n){return n.items})),e=Object(p.b)();return Object(a.useEffect)((function(){localStorage.setItem("items",JSON.stringify(n))}),[n]),n.length?r.a.createElement(w,null,r.a.createElement("ul",null,n.map((function(n){return r.a.createElement("li",{key:n.id},r.a.createElement("span",null,n.name),r.a.createElement("span",null,n.value),r.a.createElement("span",{onClick:function(){return e({type:"DELETE_ITEM",payload:n.id})}},"x"))})))):r.a.createElement(w,null,"No items")};function k(){var n=Object(u.a)(["\n    background: #182246;\n    height: 80vh;\n    min-height: 600px;\n    border-bottom-left-radius: 10px;\n    border-bottom-right-radius: 10px;\n    transition: .3s;\n    display: flex;\n    @media (max-width: 1024px) {\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n    }\n"]);return k=function(){return n},n}var j=s.a.div(k()),O=function(){return r.a.createElement(j,null,r.a.createElement(v,null),r.a.createElement(y,null))};t(43);function D(){var n=Object(u.a)(["\n    display: flex;\n    list-style: none;\n    padding: 0;\n    max-width: 70%;\n    flex-wrap: wrap;\n    & li {\n        display: flex;\n        align-items: center;\n        margin: 3px 10px;\n        font-size: 16px;\n        letter-spacing:1px;\n        color: #fff;\n        text-transform: capitalize;\n    }\n    & span {\n        width: 20px;\n        height: 20px;\n        margin-right: 20px;\n        border: 1px solid #fff;\n        border-radius: 50%;\n    }\n"]);return D=function(){return n},n}function N(){var n=Object(u.a)(["\n    cursor: pointer;\n    width: 60vh;\n    background: #ffffff00;\n    border-radius: 50%;\n    transform: rotate(-90deg);\n    filter: drop-shadow(0 0 0.5rem rgba(0, 0, 0, 0.5));\n    & circle {\n        fill: none;\n        stroke-width: ","; \n        cursor: pointer;\n        transition: .2s;\n        &:hover {\n            stroke-width: ",";\n        }\n    }\n    @media (max-width: 475px) {\n        width: 44vh;\n    }\n"]);return N=function(){return n},n}var z=s.a.svg(N(),17,19),S=s.a.ul(D()),I=function(){var n,e=Object(p.c)((function(n){return n.items})),t=[],a=[],i=[0],o=0,c=0;!function(){for(var n in e)c+=e[n].value;e.forEach((function(n){return t.push("#"+(Math.random().toString(16)+"000000").substring(2,8))})),e.forEach((function(n){return a.push(100*n.value/c)})),e.forEach((function(n,e){return i.push(o-=a[e])})),i.pop()}();return 0===e.length?r.a.createElement("p",{style:{color:"white"}},"No items"):r.a.createElement(r.a.Fragment,null,r.a.createElement(z,{viewBox:"0 0 60 60",className:"pie"},e.map((function(e,o){return r.a.createElement("circle",{key:e.id,"data-tip":"".concat(e.name,"<br/>").concat(e.value,": ").concat(a[o].toFixed(2),"%"),r:"25%",cx:"50%",cy:"50%",style:{strokeDasharray:"".concat(a[o]," 100"),strokeDashoffset:"".concat(i[o]),stroke:"".concat(t[o])},onMouseEnter:function(e){return function(e){(n=document.createElement("div")).className="tip",n.innerHTML=e.target.dataset.tip,document.body.append(n),n.style.left=e.clientX+10+"px",n.style.top=e.clientY+10+"px"}(e)},onMouseLeave:function(){return n.remove()}})}))),r.a.createElement(S,null,e.map((function(n,e){return r.a.createElement("li",{key:n.id},r.a.createElement("span",{style:{background:"".concat(t[e])}}),n.name)}))))};function M(){var n=Object(u.a)(["\n    background: #182246;\n    height: 80vh;\n    min-height: 600px;\n    border-bottom-left-radius: 10px;\n    border-bottom-right-radius: 10px;\n    transition: .3s;\n    display: flex;\n    flex-direction: column-reverse;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n"]);return M=function(){return n},n}var T=s.a.div(M()),C=function(){return r.a.createElement(T,null,r.a.createElement(I,null))},_=(t(44),function(){return r.a.createElement("div",{className:"header"},r.a.createElement(c.b,{to:"/home",activeClassName:"header-link_active",className:"header-link"},"Form"),r.a.createElement(c.b,{to:"/chart",activeClassName:"header-link_active",className:"header-link"},"Chart"))});var F=function(){return r.a.createElement("div",{className:"container"},r.a.createElement(c.a,{basename:"/pie-chart"},r.a.createElement(_,null),r.a.createElement(l.b,{exact:!0,path:"/",render:function(){return r.a.createElement(l.a,{to:"/home"})}}),r.a.createElement(l.b,{path:"/home",render:function(){return r.a.createElement(O,null)}}),r.a.createElement(l.b,{path:"/chart",render:function(){return r.a.createElement(C,null)}})))},J=t(12),L=t(31),A={items:JSON.parse(localStorage.getItem("items"))||[]},B=t(30),W=Object(J.combineReducers)({items:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD_ITEM":return[].concat(Object(L.a)(n),[e.payload]);case"DELETE_ITEM":return n.filter((function(n){return n.id!==+e.payload}));default:return n.items}}}),X=Object(J.createStore)(W,Object(B.composeWithDevTools)());Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(p.a,{store:X},r.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.cbd349be.chunk.js.map