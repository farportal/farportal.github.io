webpackJsonp([8],{"6rW+":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("Xxa5"),a=n.n(r),s=n("exGp"),c=n.n(s),u={data:function(){return{types:["USDT","OKT","LP"],amounts:[0,0,0]}},created:function(){var e=this;return c()(a.a.mark(function t(){var n;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n=0;case 1:if(!(n<e.types.length)){t.next=7;break}return t.next=4,e.$contracts.PledgeMine.methods.mGetMinedEveryDay(n).call(function(t,r){e.amounts[n]=r.fromWei()});case 4:n++,t.next=1;break;case 7:e.$forceUpdate();case 8:case"end":return t.stop()}},t,e)}))()}},o={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"export"},e._l(e.types,function(t,r){return n("span",{key:r},[e._v(e._s(t)+"-每日出矿量:"+e._s(e.amounts[r]))])}),0)},staticRenderFns:[]};var i=n("VU/8")(u,o,!1,function(e){n("LUmT")},"data-v-6833ae60",null);t.default=i.exports},LUmT:function(e,t){}});