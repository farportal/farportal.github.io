(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["excitation"],{"06f9":function(t,n,e){},"177f":function(t,n,e){},"34ef":function(t,n,e){"use strict";e.r(n);var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"excitation"},[e("contentBg",{ref:"contentBg"}),e("contentTitle",[e("div",{staticClass:"text"},[e("span",[t._v(t._s(t.$t("zhu-li-farokexchain-sheng-tai-fa-zhan")))]),e("span",[t._v(t._s(t.$t("ying-qu-feng-hou-far-jiang-li")))])])]),e("div",{staticClass:"excitationContent"},[e("div",{staticClass:"myRecommend"},[e("div",[e("div",[e("span",[t._v(t._s(t.$t("nin-de-sheng-tai-tui-jian-ma")))]),e("span",[t._v(t._s(t.codeNumber))])]),e("div",[e("span",[t._v(t._s(t.$t("nin-de-yao-qing-lian-jie")))]),e("span",[t._v(t._s(t.link))])]),e("van-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.link,expression:"link",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopySuccess,expression:"onCopySuccess",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:t.onCopyError,expression:"onCopyError",arg:"error"}],nativeOn:{click:function(t){t.stopPropagation()}}},[t._v(t._s(t.$t("dian-ji-fu-zhi")))])],1),e("div",[e("div",[e("span",[t._v(t._s(t.$t("sheng-tai-tui-jian-ren-di-zhi")))]),e("span",[t._v(t._s(t.recommerShotCode))])]),t.isBind?e("van-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.recommerShotCode,expression:"recommerShotCode",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopySuccess,expression:"onCopySuccess",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:t.onCopyError,expression:"onCopyError",arg:"error"}],nativeOn:{click:function(t){t.stopPropagation()}}},[t._v(t._s(t.$t("dian-ji-fu-zhi")))]):e("van-button",{on:{click:function(n){t.show=!0}}},[t._v(t._s(t.$t("dian-ji-bang-ding")))])],1)]),e("div",{staticClass:"excitationContentBottom"},[e("div",{staticClass:"myRecommendData"},[e("div",[e("span",[t._v(t._s(t.networkPower)+" $")]),e("span",[t._v(t._s(t.$t("dang-qian-quan-wang-sheng-tai-ji-li-suan-li")))])]),e("div",[e("span",[t._v(t._s(t.myPower)+" $")]),e("span",[t._v(t._s(t.$t("dang-qian-nin-de-sheng-tai-ji-li-suan-li")))])]),e("div",[e("span",[t._v(t._s(t.getExcitation)+" FAR")]),e("span",[t._v(t._s(t.$t("nin-yi-huo-de-de-sheng-tai-ji-li")))])])]),e("redGreenBut",{class:"dn"==t.$i18n.locale||"rn"==t.$i18n.locale?"dn":"",nativeOn:{click:function(n){return t.doDrawMyTotalAwards(n)}}},[t._v(t._s(t.$t("ling-qu-sheng-tai-ji-li-jiang-li")))])],1)]),e("van-overlay",{attrs:{show:t.show},on:{click:function(n){t.show=!t.show}}},[e("div",{staticClass:"register",on:{click:function(t){t.stopPropagation()}}},[e("div",[e("div",[e("div",{staticClass:"title"},[t._v(" "+t._s(t.$t("sheng-tai-tui-jian-di-zhi-bang-ding"))+" ")]),e("div",{staticClass:"input"},[e("span",[t._v(t._s(t.$t("qing-shu-ru-xu-bang-ding-de-sheng-tai-tui-jian-ma-huo-dui-ying-di-zhi")))]),e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.other,expression:"other"}],attrs:{type:"text",placeholder:t.$t("sheng-tai-tui-jian-ma-huo-dui-ying-di-zhi")},domProps:{value:t.other},on:{input:[function(n){n.target.composing||(t.other=n.target.value)},function(n){t.other=t.other.replace(/[\W]/g,"")}]}})])]),e("p",[t._v(" "+t._s(t.$t("qing-que-ren-nin-shu-ru-de-sheng-tai-tui-jian-ma-zheng-que-wu-wu-dan-ge-di-zhi-zhi-neng-bang-ding-yi-ci-tui-jian-ma-tui-jian-di-zhi-bang-ding-hou-wu-fa-xiu-gai-qing-nin-zi-xi-que-ren"))+" ")])]),e("div",{staticClass:"but"},[e("redGreenBut",{nativeOn:{click:function(n){t.show=!t.show}}},[t._v(t._s(t.$t("qu-xiao")))]),e("redGreenBut",{class:"dn"==t.$i18n.locale?"dni":"",nativeOn:{click:function(n){return t.bind(n)}}},[t._v(t._s(t.$t("que-ren-wu-wu-bang-ding")))])],1)])])])],1)},a=[],o=e("6b75");function r(t){if(Array.isArray(t))return Object(o["a"])(t)}e("a4d3"),e("e01a"),e("d3b7"),e("d28b"),e("3ca3"),e("ddb0"),e("a630");function s(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}var c=e("06c5");function u(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function d(t){return r(t)||s(t)||Object(c["a"])(t)||u()}var l=e("1da1"),h=e("5530"),g=(e("96cf"),e("9911"),e("99af"),e("25f0"),e("a9e3"),{computed:Object(h["a"])({},Vuex.mapState(["balance"])),data:function(){return{show:!1,other:"",codeNumber:"******",recommerShotCode:"",isBind:!1,maxLength:8,myPower:0,drawed:0,networkPower:0,getExcitation:0,lockAmount:0,link:"******"}},watch:{show:function(){this.show||(this.other="")}},methods:{init:function(){var t=this;this.show=!1,this.$route.query.code&&(this.other=this.$route.query.code),this.$contracts.Relation.methods.recommendInfo().call({from:this.$address},(function(n,e){var i=t.$web3.utils.hexToString(e.shotCode);t.codeNumber=i.length?i:"******",t.link="".concat(window.location.origin,"/#/excitation?code=").concat(t.codeNumber);var a=t.$web3.utils.hexToString(e.recommerShotCode);t.recommerShotCode=a.length?a:t.$t("zan-wu"),t.isBind=Boolean(i.length)})),this.$contracts.PowerMine.methods.doDraw().call({from:this.$address},(function(n,e){t.getExcitation=parseInt(e.toString().fromWei()).toNum()})),this.$contracts.PowerMine.methods.mineInfo().call({from:this.$address},(function(n,e){t.myPower=parseInt(e.myPower.fromWei()).toNum(),t.networkPower=parseInt(e.networkPower.fromWei()).toNum()}))},bind:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function n(){var e,i,a,o,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!(t.balance.eth<=0)){n.next=2;break}return n.abrupt("return",t.$toast.fail("余额不足"));case 2:if(e=d("abcdefghijklmnopqrstuvwxyz0123456789"),i="",!(t.other.length>t.maxLength)||t.$web3.utils.isAddress(t.other)){n.next=8;break}return n.abrupt("return",t.$toast.fail("请输入正确的生态推荐人地址"));case 8:if(!(t.other.length<8)){n.next=10;break}return n.abrupt("return",t.$toast.fail("请输入正确的生态推荐码"));case 10:for(o=0;o<t.maxLength;o++)i+=e[t.randomNum()];if(t.other.length!=t.maxLength){n.next=19;break}return n.next=14,t.$contracts.Relation.methods.shortCodeToAddress(t.$web3.utils.stringToHex(t.other.toLocaleUpperCase())).call();case 14:if(a=n.sent,"0x0000000000000000000000000000000000000000"!=a){n.next=17;break}return n.abrupt("return",t.$toast.fail(t.$t("sheng-tai-tui-jian-ma-bu-cun-zai")));case 17:n.next=25;break;case 19:return a=t.other,n.next=22,t.$contracts.Relation.methods.addressToShortCode(a).call();case 22:if(r=n.sent,t.$web3.utils.hexToString(r).length){n.next=25;break}return n.abrupt("return",t.$toast.fail(t.$t("sheng-tai-tui-jian-ren-di-zhi-bu-cun-zai")));case 25:t.$contracts.Relation.methods.addRelationEx(a,t.$web3.utils.stringToHex(i.toLocaleUpperCase())).send({from:t.$address}).on("transactionHash",(function(n){t.$loading()})).on("receipt",(function(n){t.$loading(),t.$nextTick((function(){t.$toast.success(t.$t("bang-ding-cheng-gong")),t.init()}))})).on("error",console.error);case 26:case"end":return n.stop()}}),n)})))()},doDrawMyTotalAwards:function(){var t=this;if(!Number(this.getExcitation.fromNum()))return this.$toast.fail(this.$t("zan-wu-ke-ling-qu-de-sheng-tai-ji-li"));this.$contracts.PowerMine.methods.doDraw().send({from:this.$address}).on("transactionHash",(function(n){t.$loading()})).on("receipt",(function(n){t.$loading(),t.$nextTick((function(){t.$toast.success(t.$t("ling-qu-cheng-gong")),t.init()}))})).on("error",console.error)},randomNum:function(){return parseInt(36*Math.random()+0,10)},onCopySuccess:function(){this.$toast.fail(this.$t("fu-zhi-cheng-gong"))},onCopyError:function(){this.$toast.fail(this.$t("fu-zhi-shi-bai"))}},mounted:function(){this.$contracts&&this.init()}}),f=g,m=f,p=(e("ed2a"),e("be3b"),e("2877")),v=Object(p["a"])(m,i,a,!1,null,"54740e10",null);n["default"]=v.exports},"857a":function(t,n,e){var i=e("1d80"),a=/"/g;t.exports=function(t,n,e,o){var r=String(i(t)),s="<"+n;return""!==e&&(s+=" "+e+'="'+String(o).replace(a,"&quot;")+'"'),s+">"+r+"</"+n+">"}},9911:function(t,n,e){"use strict";var i=e("23e7"),a=e("857a"),o=e("af03");i({target:"String",proto:!0,forced:o("link")},{link:function(t){return a(this,"a","href",t)}})},af03:function(t,n,e){var i=e("d039");t.exports=function(t){return i((function(){var n=""[t]('"');return n!==n.toLowerCase()||n.split('"').length>3}))}},be3b:function(t,n,e){"use strict";e("177f")},ed2a:function(t,n,e){"use strict";e("06f9")}}]);