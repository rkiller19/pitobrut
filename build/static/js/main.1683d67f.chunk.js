(this.webpackJsonpido=this.webpackJsonpido||[]).push([[0],{267:function(t){t.exports=JSON.parse('[{"constant":false,"inputs":[{"name":"beneficiary","type":"address"}],"name":"buyTokens","outputs":[],"payable":true,"type":"function","stateMutability":"payable"},{"constant":false,"inputs":[],"name":"finalize","outputs":[],"payable":false,"type":"function","stateMutability":"nonpayable"},{"constant":false,"inputs":[],"name":"pause","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function","stateMutability":"nonpayable"},{"constant":false,"inputs":[{"name":"info","type":"string"}],"name":"setContactInformation","outputs":[],"payable":false,"type":"function","stateMutability":"nonpayable"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"type":"function","stateMutability":"nonpayable"},{"constant":false,"inputs":[],"name":"unpause","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function","stateMutability":"nonpayable"},{"inputs":[{"name":"_wallet","type":"address"},{"name":"_cap","type":"uint256"},{"name":"_rate","type":"uint256"}],"payable":false,"type":"constructor","stateMutability":"nonpayable"},{"payable":true,"type":"fallback","stateMutability":"payable"},{"anonymous":false,"inputs":[{"indexed":true,"name":"purchaser","type":"address"},{"indexed":true,"name":"beneficiary","type":"address"},{"indexed":false,"name":"value","type":"uint256"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"TokenPurchase","type":"event"},{"anonymous":false,"inputs":[],"name":"Finalized","type":"event"},{"anonymous":false,"inputs":[],"name":"Pause","type":"event"},{"anonymous":false,"inputs":[],"name":"Unpause","type":"event"},{"constant":true,"inputs":[],"name":"cap","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function","stateMutability":"view"},{"constant":true,"inputs":[],"name":"contactInformation","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function","stateMutability":"view"},{"constant":true,"inputs":[],"name":"hasEnded","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function","stateMutability":"view"},{"constant":true,"inputs":[],"name":"isFinalized","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function","stateMutability":"view"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function","stateMutability":"view"},{"constant":true,"inputs":[],"name":"paused","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function","stateMutability":"view"},{"constant":true,"inputs":[],"name":"rate","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function","stateMutability":"view"},{"constant":true,"inputs":[],"name":"token","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function","stateMutability":"view"},{"constant":true,"inputs":[],"name":"wallet","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function","stateMutability":"view"},{"constant":true,"inputs":[],"name":"weiRaised","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function","stateMutability":"view"}]')},290:function(t,e,n){},292:function(t,e,n){},320:function(t,e){},323:function(t,e){},325:function(t,e){},329:function(t,e){},330:function(t,e){},355:function(t,e){},357:function(t,e){},366:function(t,e){},368:function(t,e){},378:function(t,e){},380:function(t,e){},396:function(t,e){},426:function(t,e){},427:function(t,e){},494:function(t,e){},496:function(t,e){},501:function(t,e){},503:function(t,e){},510:function(t,e){},511:function(t,e){},513:function(t,e){},525:function(t,e){},528:function(t,e){},532:function(t,e){},540:function(t,e){},547:function(t,e){},595:function(t,e){},622:function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/left.eef192e6.svg"},623:function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/right.a8ea67fd.png"},624:function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/logo.4decef1d.svg"},625:function(t,e,n){"use strict";n.r(e);var a,c=n(0),s=n.n(c),i=n(75),r=n.n(i),u=(n(290),n(12)),o=n.n(u),l=n(22),p=n(39),f=n(631),b=n(632),d=n(633),m=(n(292),n(30)),y=n(91),j=n(110),v=n(268),h=Object(v.a)({name:"toasts",initialState:{data:[]},reducers:{push:function(t,e){var n=e.payload,a=t.data.findIndex((function(t){return t.id===e.payload.id}));a>=0&&t.data.splice(a,1),t.data.unshift(n)},remove:function(t,e){var n=t.data.findIndex((function(t){return t.id===e.payload}));n>=0&&t.data.splice(n,1)},clear:function(t){t.data=[]}}}),O=h.actions,x=O.clear,g=O.remove,w=O.push,k=(h.reducer,"string"),C="string",N="string",M="string",I=n(60),E=n(261),S=n(262),_=n(263),B=n(264),P=n.n(B),T=["https://api.avax-test.network/ext/bc/C/rpc","https://api.avax-test.network/ext/bc/C/rpc","https://api.avax-test.network/ext/bc/C/rpc"],A=function(){var t=P()(0,T.length-1);return T[t]},D="injected",F="walletconnect",R="bsc",L=A(),U=parseInt("43113",10),W=new E.a({supportedChainIds:[U]}),z=new S.a({rpc:Object(I.a)({},U,L),bridge:"https://bridge.walletconnect.org",qrcode:!0,pollingInterval:12e3}),H=new _.BscConnector({supportedChainIds:[U]}),J=(a={},Object(I.a)(a,D,W),Object(I.a)(a,F,z),Object(I.a)(a,R,H),a),X=function(){var t=Object(l.a)(o.a.mark((function t(){var e,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e=window.ethereum)){t.next=15;break}return n=parseInt("43113",10),t.prev=3,t.next=6,e.request({method:"wallet_switchEthereumChain",params:[{chainId:"0x".concat(n.toString(16))}]});case 6:return t.abrupt("return",!0);case 9:return t.prev=9,t.t0=t.catch(3),console.error(t.t0),t.abrupt("return",!1);case 13:t.next=17;break;case 15:return console.error("Can't setup the BSC network on metamask because window.ethereum is undefined"),t.abrupt("return",!1);case 17:case"end":return t.stop()}}),t,null,[[3,9]])})));return function(){return t.apply(this,arguments)}}(),q=function(){var t=Object(m.c)(),e=t.activate,n=t.deactivate,a=function(){var t=Object(j.b)();return Object(c.useMemo)((function(){var e=function(e){return t(w(e))};return{toastError:function(t,n){return e({id:Object(y.kebabCase)(t),type:C,title:t,description:n})},toastInfo:function(t,n){return e({id:Object(y.kebabCase)(t),type:M,title:t,description:n})},toastSuccess:function(t,n){return e({id:Object(y.kebabCase)(t),type:k,title:t,description:n})},toastWarning:function(t,n){return e({id:Object(y.kebabCase)(t),type:N,title:t,description:n})},push:e,remove:function(e){return t(g(e))},clear:function(){return t(x())}}}),[t])}().toastError;return{login:Object(c.useCallback)((function(t){var n=J[t];n?e(n,function(){var t=Object(l.a)(o.a.mark((function t(c){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(c instanceof m.a)){t.next=7;break}return t.next=3,X();case 3:t.sent&&e(n),t.next=9;break;case 7:n.walletConnectProvider=void 0,a(c.name,c.message);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()):a("Can't find connector","The connector config is wrong")}),[]),logout:n}},V="bsc",Y=function(){var t=q().login;Object(c.useEffect)((function(){var e=window.localStorage.getItem("connectorId");e&&e!==V&&t(e)}),[t])},G=n(155),K=n(78),Q=n.n(K),Z=A(),$=new Q.a.providers.HttpProvider(Z,{timeout:1e4}),tt=new Q.a($),et=function(){return tt},nt=tt,at=n(267),ct=function(t,e){return function(t,e,n){return new(null!==n&&void 0!==n?n:nt).eth.Contract(t,e)}(at,t,e)},st=function(){var t=Object(m.c)().library,e=Object(c.useRef)(t),n=Object(c.useState)(t?new Q.a(t):et()),a=Object(p.a)(n,2),s=a[0],i=a[1];return Object(c.useEffect)((function(){t!==e.current&&(i(t?new Q.a(t):et()),e.current=t)}),[t]),s},it=n(9),rt={presaleAddress:"0x3297Ccd326b1606acC6cE49bDfcBC5Ea3E0B961B"},ut=n(79),ot=n.n(ut),lt=function(t,e){return new ot.a(e).dividedBy(t).multipliedBy(new ot.a(10).pow(18))},pt=function(){var t=Object(m.c)().account,e=st(),n=ct(rt.presaleAddress,e);return{buy:Object(c.useCallback)(function(){var e=Object(l.a)(o.a.mark((function e(a,c){var s,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=lt(c,a),e.next=3,n.methods.buyTokens(t).send({from:t,value:s}).on("transactionHash",(function(t){return t.transactionHash}));case 3:return i=e.sent,e.abrupt("return",i);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),[t,n])}};n(621);var ft=function(){Y();var t=pt().buy,e=q(),a=e.login,s=e.logout,i=Object(m.c)().account,r=Object(c.useState)(0),u=Object(p.a)(r,2),y=u[0],j=u[1],v=function(){var t=Object(l.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:s(),localStorage.setItem("connectorId","");case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),h=Object(c.useCallback)(function(){var e=Object(l.a)(o.a.mark((function e(n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),i){e.next=4;break}return G.b.error("Please Connect Your Wallet"),e.abrupt("return");case 4:return e.prev=4,e.next=7,t(y,1);case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(4),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[4,9]])})));return function(t){return e.apply(this,arguments)}}(),[t]);return Object(it.jsxs)(it.Fragment,{children:[Object(it.jsx)(G.a,{}),Object(it.jsxs)("div",{className:"root",children:[Object(it.jsx)("div",{className:"lefttree",children:Object(it.jsx)("img",{className:"img-fluid leftimg",src:n(622).default,alt:""})}),Object(it.jsx)("div",{className:"righttree",children:Object(it.jsx)("img",{className:"img-fluid rightimg",src:n(623).default,alt:""})}),Object(it.jsxs)(f.a,{children:[Object(it.jsxs)("div",{className:"cus-navb mt-3 d-flex justify-content-between align-items-center",children:[Object(it.jsx)("div",{className:"logo",children:Object(it.jsx)("img",{className:"img-fluid logo-img",src:n(624).default,alt:""})}),Object(it.jsx)("div",{className:"con-btn",children:i?Object(it.jsx)("button",{className:"cusbtn",onClick:v,children:"Disconnect"}):Object(it.jsx)("button",{className:"cusbtn",onClick:function(){localStorage.setItem("connectorId","injected"),i?s():a("injected")},children:"Connect Wallet"})})]}),Object(it.jsx)(b.a,{className:"mt-5 pt-5",children:Object(it.jsx)(d.a,{className:" d-flex justify-content-center align-items-center ",lg:"12",children:Object(it.jsxs)("div",{className:"",children:[Object(it.jsx)("div",{className:"button-mint d-flex justify-content-center",children:Object(it.jsx)("div",{className:"display-number d-flex justify-content-center align-items-center",children:Object(it.jsx)("input",{type:"text",value:y,onChange:function(t){return j(t.target.value)}})})}),Object(it.jsx)("div",{className:"mintnowdiv text-center mt-5",children:Object(it.jsx)("button",{className:"cusbtn",onClick:h,children:"Buy Now"})}),Object(it.jsx)("div",{className:"text-center mt-4"}),Object(it.jsx)("div",{className:"text-center mt-4",children:Object(it.jsxs)("h3",{className:"subtitle",children:[1," Tokens Per AVAX"]})}),Object(it.jsx)("div",{className:"text-center mt-5",children:Object(it.jsx)("img",{className:"img-fluid opensealogo",alt:""})})]})})})]})]})]})},bt=function(t){t&&t instanceof Function&&n.e(4).then(n.bind(null,834)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,s=e.getLCP,i=e.getTTFB;n(t),a(t),c(t),s(t),i(t)}))},dt=n(21),mt=n(90),yt=n(92),jt={},vt=Object(dt.b)({UserReducer:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:jt,e=arguments.length>1?arguments[1]:void 0,n=e.type,a=e.payload;switch(n){case"BALANCE":return Object(yt.a)(Object(yt.a)({},t),{},{balance:a});case"USER_REWARD":return Object(yt.a)(Object(yt.a)({},t),{},{reward:a});default:return t}}}),ht=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||dt.c,Ot=Object(dt.d)(vt,ht(Object(dt.a)(mt.a)));r.a.render(Object(it.jsx)(j.a,{store:Ot,children:Object(it.jsx)(m.b,{getLibrary:function(t){return t},children:Object(it.jsx)(s.a.StrictMode,{children:Object(it.jsx)(ft,{})})})}),document.getElementById("root")),bt()}},[[625,1,2]]]);
//# sourceMappingURL=main.1683d67f.chunk.js.map