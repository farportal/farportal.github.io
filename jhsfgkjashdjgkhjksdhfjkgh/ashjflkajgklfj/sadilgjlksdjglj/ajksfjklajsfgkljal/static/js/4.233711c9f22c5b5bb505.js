webpackJsonp([4],{"bT+k":function(t,e){},x4eD:function(t,e){},zIkb:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("Xxa5"),s=n.n(i),a=n("exGp"),l=n.n(a),r={data:function(){return{title:"设置",isShow:!1,currentMenu:"/",menus:[{title:"空投模块",submenus:[{path:"/mImport",title:"导入"},{path:"/mExport",title:"导出"}]},{title:"算力模块",submenus:[{path:"/mGetMinedEveryDay_power",title:"获取当日出矿量"},{path:"/mSetMinedEveryDay_power",title:"修改当日出矿量"},{path:"/mineInfo",title:"获取我的算力"}]},{title:"锁仓模块",submenus:[{path:"/mGetMinedEveryDay_lock",title:"获取每日出矿量"},{path:"/mSetMinedEveryDay_lock",title:"修改每日出矿量"},{path:"/mGetLockInfo",title:"获取锁仓信息"},{path:"/mSetLockInfo",title:"设置浮动信息"}]},{title:"质押模块",submenus:[{path:"/mGetPledgeInfo",title:"获取质押信息"},{path:"/mSetPledgeInfo",title:"设置质押信息"},{path:"/mSetMinedEveryDay_pledge",title:"设置每日出矿量"},{path:"/mGetMinedEveryDay_pledge",title:"获取每日出矿量"}]},{title:"关系模块",submenus:[{path:"/mGetTotalCount",title:"当前用户量"},{path:"/getChilds",title:"获取我直推"},{path:"/getTeamTotalPower",title:"获取团队总算力"}]}]}},methods:{close:function(t){t()},selectMenu:function(t){var e=this;this.isShow=!1,this.menus.forEach(function(n){n.submenus&&n.submenus.forEach(function(n){n.path!==t||(e.title=n.title)})})}},created:function(){var t=this;return l()(s.a.mark(function e(){var n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=window.location.href,t.currentMenu=n.split("#")[1],t.selectMenu(t.currentMenu);case 3:case"end":return e.stop()}},e,t)}))()}},o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"box"}},[n("el-container",[n("el-container",[n("el-header",{attrs:{height:"10vh"}},[n("section",{staticClass:"header"},[n("i",{staticClass:"el-icon-menu",on:{click:function(e){t.isShow=!0}}}),t._v(" "),n("span",[t._v(t._s(t.title))])])]),t._v(" "),n("el-main",{attrs:{height:"90vh"}},[n("router-view",{staticClass:"childs",on:{refresh:t.selectMenu}})],1)],1)],1),t._v(" "),n("el-drawer",{ref:"drawer",attrs:{title:"菜单",size:"200px","append-to-body":"",direction:"ltr","before-close":t.close,visible:t.isShow},on:{"update:visible":function(e){t.isShow=e}}},[n("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{router:"",mode:"vertical","default-active":t.currentMenu},on:{select:t.selectMenu}},t._l(t.menus,function(e,i){return n("span",{key:i},[e.submenus?n("el-submenu",{attrs:{index:e.title}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-setting"}),t._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.title))])]),t._v(" "),t._l(e.submenus,function(e,i){return n("el-menu-item",{key:i,attrs:{index:e.path}},[t._v(t._s(e.title))])})],2):n("el-menu-item",{attrs:{index:e.path}},[n("i",{staticClass:"el-icon-s-home"}),t._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.title))])])],1)}),0)],1)],1)},staticRenderFns:[]};var u=n("VU/8")(r,o,!1,function(t){n("x4eD"),n("bT+k")},"data-v-1262aaa8",null);e.default=u.exports}});