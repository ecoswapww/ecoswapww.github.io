webpackJsonp([3],{"49lF":function(t,e){},SNYD:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("Xxa5"),a=n.n(s),r=n("exGp"),c=n.n(r),i={data:function(){return{masterInput1:"",masterInput2:"",masterInput22:"",masterInput4:"",masterInput5:"",masterInput6:"",masterInput7:"",masterInput9:"",masterInput10:"",masterInput13:"",masterInput11:"",insuranceBalance:"",masterManagerLen:"",masterTotalRevenue:"00",masterTotalAccount:"00",masterNode1Length:"00",masterNode2Length:"00",masterNode3Length:"00",masterNode4Length:"00",masterGT5000ULen:"00",joinBurnRate:"0",isFloatingStaticRate:"",ticketsInput1:"",ticketsInput2:"",ticketsInput3:"",ticketsInput32:"",ticketsInput5:"",ticketsInput6:"",ticketsInput62:"",ticketsInput7:"",ticketManagerLen:"",ownerInput1:"",ownerInput2:"",ownerInput31:"",ownerInput32:"",ownerInput33:"",ownerInput41:"",ownerInput42:"",ownerInput43:"",ticketsE1Num:"00",ticketsE2Num:"00",ticketsE3Num:"00",ticketsE4Num:"00",ticketsE5Num:"00",ticketsESDNum:"00"}},created:function(){var t=this;return c()(a.a.mark(function e(){var n,s,r,c,i,o,u,l,v,p,_,d,h,m,k,w,f,C,x,g,I;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$onLaunched;case 2:return e.next=4,t.$contract.defaultAddress();case 4:return n=(n=e.sent).base58,e.next=8,t.$contract.masterManager(n);case 8:return s=e.sent,e.next=11,t.$contract.ticketsManager(n);case 11:return r=e.sent,e.next=14,t.$contract.getMasterOwner(n);case 14:return c=e.sent,e.next=17,t.$contract.getTicketsOwner(n);case 17:return i=e.sent,s=s.isManager,r=r.isManager,e.next=22,t.$contract.addressFromHex(c);case 22:return c=e.sent,e.next=25,t.$contract.addressFromHex(i);case 25:return i=e.sent,console.log("2 是不是管理员地址",s,r,c,i,n),console.log("3 :",c===n||i===n||s||r),c===n||i===n||s||r||t.$router.go(-1),e.next=31,t.$contract.masterMangersLen();case 31:return o=e.sent,t.masterManagerLen=t.$util.hexToDec(o._hex),console.log("this.masterManagerLen:",t.masterManagerLen),e.next=36,t.$contract.ticketMangersLen();case 36:return u=e.sent,t.ticketManagerLen=t.$util.hexToDec(u._hex),console.log("this.ticketManagerLen:",t.ticketManagerLen),e.next=41,t.$contract.getMasterTotalRevenue();case 41:return l=e.sent,console.log("res11:",l),t.masterTotalRevenue=t.$util.div10e6(t.$util.hexToDec(l._hex)),e.next=46,t.$contract.getMasterAccountId();case 46:return v=e.sent,console.log("res12:",v),t.masterTotalAccount=t.$util.hexToDec(v._hex),e.next=51,t.$contract.getMasterNodeLength(1);case 51:return p=e.sent,t.masterNode1Length=t.$util.hexToDec(p._hex),e.next=55,t.$contract.getMasterNodeLength(2);case 55:return _=e.sent,t.masterNode2Length=t.$util.hexToDec(_._hex),e.next=59,t.$contract.getMasterNodeLength(3);case 59:return d=e.sent,t.masterNode3Length=t.$util.hexToDec(d._hex),e.next=63,t.$contract.getMasterNodeLength(4);case 63:return h=e.sent,t.masterNode4Length=t.$util.hexToDec(h._hex),e.next=67,t.$contract.getRichmanLength();case 67:return m=e.sent,t.masterGT5000ULen=t.$util.hexToDec(m._hex),t.getJoinBurnRate(),e.next=72,t.$contract.isFloatingStaticRate();case 72:return k=e.sent,t.isFloatingStaticRate=k,e.next=76,t.$contract.getEIDNodesNum(1);case 76:return w=e.sent,console.log("ticketsE1Num:",w),t.ticketsE1Num=t.$util.hexToDec(w._hex),e.next=81,t.$contract.getEIDNodesNum(2);case 81:return f=e.sent,console.log("ticketsE2Num:",f),t.ticketsE2Num=t.$util.hexToDec(f._hex),e.next=86,t.$contract.getEIDNodesNum(3);case 86:return C=e.sent,console.log("ticketsE3Num:",C),t.ticketsE3Num=t.$util.hexToDec(C._hex),e.next=91,t.$contract.getEIDNodesNum(4);case 91:return x=e.sent,console.log("ticketsE4Num:",x),t.ticketsE4Num=t.$util.hexToDec(x._hex),e.next=96,t.$contract.getEIDNodesNum(5);case 96:return g=e.sent,console.log("ticketsE5Num:",g),t.ticketsE5Num=t.$util.hexToDec(g._hex),e.next=101,t.$contract.getEIDsNum();case 101:I=e.sent,console.log("ticketsEIDsNum:",I),t.ticketsESDNum=t.$util.hexToDec(I._hex);case 104:case"end":return e.stop()}},e,t)}))()},methods:{getJoinBurnRate:function(){var t=this;return c()(a.a.mark(function e(){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$contract.getJoinBurnRate();case 2:t.joinBurnRate=e.sent,t.joinBurnRate=t.$util.hexToDec(t.joinBurnRate._hex),console.log("this.joinBurnRate",t.joinBurnRate);case 5:case"end":return e.stop()}},e,t)}))()},getFloatingStaticFlag:function(){var t=this;return c()(a.a.mark(function e(){var n;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$contract.isFloatingStaticRate();case 2:n=e.sent,t.isFloatingStaticRate=n,console.log("this.isFloatingStaticRate:",t.isFloatingStaticRate);case 5:case"end":return e.stop()}},e,t)}))()},masterClick1:function(){var t=this;return c()(a.a.mark(function e(){var n,s;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!((n=t.masterInput1)<1||n>1e4)){e.next=4;break}return console.log("金额不符合要求"),e.abrupt("return");case 4:return console.log("点击了设置静态收益",t.masterInput1),e.next=7,t.$contract.setStaticRate(n);case 7:s=e.sent,console.log("点击了设置静态收益-返回值",s);case 9:case"end":return e.stop()}},e,t)}))()},masterClick2:function(){var t=this;return c()(a.a.mark(function e(){var n,s,r;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.masterInput2,s=t.masterInput22,!(n<0||n>49||s<1||s>1e3)){e.next=5;break}return console.log("金额不符合要求"),e.abrupt("return");case 5:return console.log("设置动态加速层数收益率",t.masterInput2,t.masterInput22),e.next=8,t.$contract.setDynamicRates(n,s);case 8:r=e.sent,console.log("设置动态加速层数收益率-返回值",r);case 10:case"end":return e.stop()}},e,t)}))()},masterClick3:function(){var t=this;return c()(a.a.mark(function e(){var n,s;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.masterInput10,e.next=3,t.$contract.activeInsurance(n);case 3:s=e.sent,console.log("激活保险池-返回值",s);case 5:case"end":return e.stop()}},e,t)}))()},masterClick13:function(){var t=this;return c()(a.a.mark(function e(){var n,s;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.masterInput13-1,e.next=3,t.$contract.insurance(n);case 3:s=e.sent,t.insuranceBalance=t.$util.div10e6(s),console.log(n,"号保险池余额:",s);case 6:case"end":return e.stop()}},e,t)}))()},masterClick4:function(){var t=this;return c()(a.a.mark(function e(){var n,s;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.masterInput4){e.next=4;break}return console.log("地址不符合要求"),e.abrupt("return");case 4:return e.next=6,t.$contract.activeSustainable(n);case 6:s=e.sent,console.log("划转永续池-返回值",s);case 8:case"end":return e.stop()}},e,t)}))()},masterClick5:function(){var t=this;return c()(a.a.mark(function e(){var n,s;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.masterInput5){e.next=4;break}return console.log("地址不符合要求"),e.abrupt("return");case 4:return e.next=6,t.$contract.takeFounder_master(n);case 6:s=e.sent,console.log("领取技术团队奖励-返回值",s);case 8:case"end":return e.stop()}},e,t)}))()},masterClick6:function(){var t=this;return c()(a.a.mark(function e(){var n,s;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.masterInput6){e.next=4;break}return console.log("地址不符合要求"),e.abrupt("return");case 4:return e.next=6,t.$contract.takeOperation(n);case 6:s=e.sent,console.log("领取拓展运营费用-返回值",s);case 8:case"end":return e.stop()}},e,t)}))()},masterClick7:function(){var t=this;return c()(a.a.mark(function e(){var n,s;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.masterInput7){e.next=4;break}return console.log("地址不符合要求"),e.abrupt("return");case 4:return e.next=6,t.$contract.takeDex(n);case 6:s=e.sent,console.log("领取做市资金-返回值",s);case 8:case"end":return e.stop()}},e,t)}))()},masterClick8:function(){var t=this;return c()(a.a.mark(function e(){var n;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$contract.setFloatingFlag();case 2:n=e.sent,console.log("设置浮动利率-返回值",n),setTimeout(c()(a.a.mark(function e(){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.getFloatingStaticFlag();case 1:case"end":return e.stop()}},e,t)})),2e3);case 5:case"end":return e.stop()}},e,t)}))()},masterClick9:function(){var t=this;return c()(a.a.mark(function e(){var n,s;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.masterInput9,n*=1,e.next=4,t.$contract.setMaxInvestAmount(n);case 4:s=e.sent,console.log("设置主合约的投资上限值-返回值",s);case 6:case"end":return e.stop()}},e,t)}))()},masterClick11:function(){var t=this;return c()(a.a.mark(function e(){var n,s;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.masterInput11,n*=1,e.next=4,t.$contract.setJoinBurnRate(n);case 4:s=e.sent,console.log("设置主合约的投资燃烧ECO的比例-返回值",s),setTimeout(c()(a.a.mark(function e(){var n;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$contract.getJoinBurnRate();case 2:n=e.sent,t.joinBurnRate=t.$util.hexToDec(n._hex),console.log("this.joinBurnRate:",t.joinBurnRate);case 5:case"end":return e.stop()}},e,t)})),2e3);case 7:case"end":return e.stop()}},e,t)}))()},ticketsClick1:function(){var t=this;return c()(a.a.mark(function e(){var n,s;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!((n=t.ticketsInput1)<1||n>1e3)){e.next=4;break}return console.log("金额不符合要求"),e.abrupt("return");case 4:return e.next=6,t.$contract.setReleaseRate(n);case 6:s=e.sent,console.log("设置EID矩阵释放率-返回值",t.ticketsInput1,s);case 8:case"end":return e.stop()}},e,t)}))()},ticketsClick2:function(){var t=this;return c()(a.a.mark(function e(){var n,s;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!((n=t.ticketsInput2)<1||n>1e3)){e.next=4;break}return console.log("金额不符合要求"),e.abrupt("return");case 4:return e.next=6,t.$contract.setMiningRate(n);case 6:s=e.sent,console.log("设置流动性挖矿解锁率-返回值",t.ticketsInput2,s);case 8:case"end":return e.stop()}},e,t)}))()},ticketsClick3:function(){var t=this;return c()(a.a.mark(function e(){var n,s,r;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.ticketsInput3,s=t.ticketsInput32,!(n<1||n>30||s<1||s>1e3)){e.next=5;break}return console.log("金额不符合要求"),e.abrupt("return");case 5:return e.next=7,t.$contract.setActiveEidFloorRates(n,s);case 7:r=e.sent,console.log("设置EID激活层数收益率-返回值",t.ticketsInput3,t.ticketsInput32,r);case 9:case"end":return e.stop()}},e,t)}))()},ticketsClick5:function(){var t=this;return c()(a.a.mark(function e(){var n,s;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.ticketsInput5,e.next=3,t.$contract.transferSalesVolume(n);case 3:s=e.sent,console.log("划转USDT到主合约80%-返回值",t.ticketsInput5,s);case 5:case"end":return e.stop()}},e,t)}))()},ticketsClick6:function(){var t=this;return c()(a.a.mark(function e(){var n,s,r;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.ticketsInput6,s=t.ticketsInput62,s=t.$util.mul10e18(s),e.next=5,t.$contract.geniusMint(n,s);case 5:r=e.sent,console.log("增发门票-返回值",t.ticketsInput6,t.ticketsInput62,r);case 7:case"end":return e.stop()}},e,t)}))()},ticketsClick7:function(){var t=this;return c()(a.a.mark(function e(){var n,s;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.ticketsInput7,n*=1,e.next=4,t.$contract.setMaxExEcoOnce(n);case 4:s=e.sent,console.log("单次共振ECO的上限值-返回值",s);case 6:case"end":return e.stop()}},e,t)}))()},ownerClick1:function(){var t=this;return c()(a.a.mark(function e(){var n,s;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.ownerInput1,e.next=3,t.$contract.changeOwnerMaster(n);case 3:s=e.sent,console.log("更换主合约owner-返回值",t.ownerInput1,s);case 5:case"end":return e.stop()}},e,t)}))()},ownerClick2:function(){var t=this;return c()(a.a.mark(function e(){var n,s;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.ownerInput2,e.next=3,t.$contract.changeOwnerTickets(n);case 3:s=e.sent,console.log("更换门票合约owner-返回值",t.ownerInput2,s);case 5:case"end":return e.stop()}},e,t)}))()},ownerClick3:function(){var t=this;return c()(a.a.mark(function e(){var n,s;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.ownerInput31,console.log(n),e.next=4,t.$contract.setMasterManagers(n);case 4:s=e.sent,console.log("设置主合约的一个管理者-返回值",s),setTimeout(c()(a.a.mark(function e(){var n;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$contract.masterMangersLen();case 2:n=e.sent,t.masterManagerLen=t.$util.hexToDec(n._hex),console.log("this.masterManagerLen:",t.masterManagerLen);case 5:case"end":return e.stop()}},e,t)})),2e3);case 7:case"end":return e.stop()}},e,t)}))()},ownerClick4:function(){var t=this;return c()(a.a.mark(function e(){var n,s;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.ownerInput41,console.log(n),e.next=4,t.$contract.setTicketsManagers(n);case 4:s=e.sent,console.log("设置门票合约的一个管理者-返回值",s),setTimeout(c()(a.a.mark(function e(){var n;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$contract.ticketMangersLen();case 2:n=e.sent,t.ticketManagerLen=t.$util.hexToDec(n._hex),console.log("this.ticketManagerLen:",t.ticketManagerLen);case 5:case"end":return e.stop()}},e,t)})),2e3);case 7:case"end":return e.stop()}},e,t)}))()}}},o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{"margin-top":"10px"}},[n("div",{staticClass:"owner-w"},[n("div",{staticClass:"owner-title"},[t._v("主合约")]),t._v(" "),n("div",{staticClass:"owner-head"},[t._v("设置静态收益率")]),t._v(" "),n("el-input",{staticClass:"owner-input",attrs:{placeholder:"请输入日化率,数字为1-10000"},model:{value:t.masterInput1,callback:function(e){t.masterInput1=e},expression:"masterInput1"}}),t._v(" "),n("el-button",{staticClass:"owner-btn",attrs:{type:"primary"},on:{click:function(e){return t.masterClick1()}}},[t._v("设置静态收益率")]),t._v(" "),n("div",{staticClass:"owner-hr"}),t._v(" "),n("div",{staticClass:"owner-head"},[t._v("设置动态加速层数收益率")]),t._v(" "),n("el-input",{staticClass:"owner-input",attrs:{placeholder:"请输入要修改的层数,数字为0-49"},model:{value:t.masterInput2,callback:function(e){t.masterInput2=e},expression:"masterInput2"}}),t._v(" "),n("el-input",{staticClass:"owner-input",attrs:{placeholder:"请输入收益率,数字为1-1000"},model:{value:t.masterInput22,callback:function(e){t.masterInput22=e},expression:"masterInput22"}}),t._v(" "),n("el-button",{staticClass:"owner-btn",attrs:{type:"primary"},on:{click:function(e){return t.masterClick2()}}},[t._v("设置动态加速层数收益率")]),t._v(" "),n("div",{staticClass:"owner-hr"}),t._v(" "),n("div",{staticClass:"owner-head"},[t._v("激活保险池(每次激活一个，共10个)")]),t._v(" "),n("el-input",{staticClass:"owner-input",attrs:{placeholder:"请输入开启的第几个保险池(总共10个，数字为1-10)"},model:{value:t.masterInput10,callback:function(e){t.masterInput10=e},expression:"masterInput10"}}),t._v(" "),n("el-button",{staticClass:"owner-btn",attrs:{type:"primary"},on:{click:function(e){return t.masterClick3()}}},[t._v("激活一个保险池")]),t._v(" "),n("div",{staticClass:"owner-hr"}),t._v(" "),n("div",{staticClass:"owner-head"},[t._v("查询一个保险池余额(共10个)")]),t._v(" "),n("el-input",{staticClass:"owner-input",attrs:{placeholder:"请输入查询的第几个保险池(总共10个，数字为1-10)"},model:{value:t.masterInput13,callback:function(e){t.masterInput13=e},expression:"masterInput13"}}),t._v(" "),n("el-button",{staticClass:"owner-btn",attrs:{type:"primary"},on:{click:function(e){return t.masterClick13()}}},[t._v("点击查询,查询的保险池当前余额为"+t._s(this.insuranceBalance))]),t._v(" "),n("div",{staticClass:"owner-hr"}),t._v(" "),n("div",{staticClass:"owner-head"},[t._v("划转永续池")]),t._v(" "),n("el-input",{staticClass:"owner-input",attrs:{placeholder:"请输入可掌控的地址"},model:{value:t.masterInput4,callback:function(e){t.masterInput4=e},expression:"masterInput4"}}),t._v(" "),n("el-button",{staticClass:"owner-btn",attrs:{type:"primary"},on:{click:function(e){return t.masterClick4()}}},[t._v("划转永续池")]),t._v(" "),n("div",{staticClass:"owner-hr"}),t._v(" "),n("div",{staticClass:"owner-head"},[t._v("领取技术团队奖励")]),t._v(" "),n("el-input",{staticClass:"owner-input",attrs:{placeholder:"请输入地址"},model:{value:t.masterInput5,callback:function(e){t.masterInput5=e},expression:"masterInput5"}}),t._v(" "),n("el-button",{staticClass:"owner-btn",attrs:{type:"primary"},on:{click:function(e){return t.masterClick5()}}},[t._v("领取技术团队奖励")]),t._v(" "),n("div",{staticClass:"owner-hr"}),t._v(" "),n("div",{staticClass:"owner-head"},[t._v("领取拓展运营费用")]),t._v(" "),n("el-input",{staticClass:"owner-input",attrs:{placeholder:"请输入地址"},model:{value:t.masterInput6,callback:function(e){t.masterInput6=e},expression:"masterInput6"}}),t._v(" "),n("el-button",{staticClass:"owner-btn",attrs:{type:"primary"},on:{click:function(e){return t.masterClick6()}}},[t._v("领取拓展运营费用")]),t._v(" "),n("div",{staticClass:"owner-hr"}),t._v(" "),n("div",{staticClass:"owner-head"},[t._v("领取做市资金")]),t._v(" "),n("el-input",{staticClass:"owner-input",attrs:{placeholder:"请输入地址"},model:{value:t.masterInput7,callback:function(e){t.masterInput7=e},expression:"masterInput7"}}),t._v(" "),n("el-button",{staticClass:"owner-btn",attrs:{type:"primary"},on:{click:function(e){return t.masterClick7()}}},[t._v("领取做市资金")]),t._v(" "),n("div",{staticClass:"owner-hr"}),t._v(" "),n("div",{staticClass:"owner-head"},[t._v("开关浮动利率")]),t._v(" "),n("el-button",{staticClass:"owner-btn",attrs:{type:"primary"},on:{click:function(e){return t.masterClick8()}}},[t._v("开关浮动利率 当前"+t._s(this.isFloatingStaticRate?"为开":"为关"))]),t._v(" "),n("div",{staticClass:"owner-hr"}),t._v(" "),n("div",{staticClass:"owner-head"},[t._v("设置投资的上限")]),t._v(" "),n("el-input",{staticClass:"owner-input",attrs:{placeholder:"请输入投资的上限值"},model:{value:t.masterInput9,callback:function(e){t.masterInput9=e},expression:"masterInput9"}}),t._v(" "),n("el-button",{staticClass:"owner-btn",attrs:{type:"primary"},on:{click:function(e){return t.masterClick9()}}},[t._v("设置投资的上限")]),t._v(" "),n("div",{staticClass:"owner-hr"}),t._v(" "),n("div",{staticClass:"owner-head"},[t._v("设置投资燃烧ECO的比例,当前投资燃烧ECO的比例为"+t._s(this.joinBurnRate)+"%")]),t._v(" "),n("el-input",{staticClass:"owner-input",attrs:{placeholder:"请输入投资的投资燃烧ECO比例 1-100"},model:{value:t.masterInput11,callback:function(e){t.masterInput11=e},expression:"masterInput11"}}),t._v(" "),n("el-button",{staticClass:"owner-btn",attrs:{type:"primary"},on:{click:function(e){return t.masterClick11()}}},[t._v("设置投资燃烧ECO的比例")]),t._v(" "),n("div",{staticClass:"owner-hr"})],1),t._v(" "),n("div",{staticClass:"owner-w"},[n("div",{staticClass:"owner-title"},[t._v("门票合约")]),t._v(" "),n("div",{staticClass:"owner-head"},[t._v("设置EID矩阵释放率")]),t._v(" "),n("el-input",{staticClass:"owner-input",attrs:{placeholder:"请输入日化率,数字为1-1000"},model:{value:t.ticketsInput1,callback:function(e){t.ticketsInput1=e},expression:"ticketsInput1"}}),t._v(" "),n("el-button",{staticClass:"owner-btn",attrs:{type:"primary"},on:{click:function(e){return t.ticketsClick1()}}},[t._v("设置EID矩阵释放率")]),t._v(" "),n("div",{staticClass:"owner-hr"}),t._v(" "),n("div",{staticClass:"owner-head"},[t._v("设置流动性挖矿解锁率")]),t._v(" "),n("el-input",{staticClass:"owner-input",attrs:{placeholder:"请输入日化率,数字为1-1000"},model:{value:t.ticketsInput2,callback:function(e){t.ticketsInput2=e},expression:"ticketsInput2"}}),t._v(" "),n("el-button",{staticClass:"owner-btn",attrs:{type:"primary"},on:{click:function(e){return t.ticketsClick2()}}},[t._v("设置流动性挖矿解锁率")]),t._v(" "),n("div",{staticClass:"owner-hr"}),t._v(" "),n("div",{staticClass:"owner-head"},[t._v("设置EID激活层数收益率")]),t._v(" "),n("el-input",{staticClass:"owner-input",attrs:{placeholder:"请输入要修改的层数,数字为1-30"},model:{value:t.ticketsInput3,callback:function(e){t.ticketsInput3=e},expression:"ticketsInput3"}}),t._v(" "),n("el-input",{staticClass:"owner-input",attrs:{placeholder:"请输入收益率,数字为1-1000"},model:{value:t.ticketsInput32,callback:function(e){t.ticketsInput32=e},expression:"ticketsInput32"}}),t._v(" "),n("el-button",{staticClass:"owner-btn",attrs:{type:"primary"},on:{click:function(e){return t.ticketsClick3()}}},[t._v("设置EID激活层数收益率")]),t._v(" "),n("div",{staticClass:"owner-hr"}),t._v(" "),n("div",{staticClass:"owner-head"},[t._v("划转USDT到接收地址")]),t._v(" "),n("el-input",{staticClass:"owner-input",attrs:{placeholder:"请输入接收地址"},model:{value:t.ticketsInput5,callback:function(e){t.ticketsInput5=e},expression:"ticketsInput5"}}),t._v(" "),n("el-button",{staticClass:"owner-btn",attrs:{type:"primary"},on:{click:function(e){return t.ticketsClick5()}}},[t._v("划转USDT到接收地址")]),t._v(" "),n("div",{staticClass:"owner-hr"}),t._v(" "),n("div",{staticClass:"owner-head"},[t._v("增发门票")]),t._v(" "),n("el-input",{staticClass:"owner-input",attrs:{placeholder:"请输入接收地址"},model:{value:t.ticketsInput6,callback:function(e){t.ticketsInput6=e},expression:"ticketsInput6"}}),t._v(" "),n("el-input",{staticClass:"owner-input",attrs:{placeholder:"请输入增发数量"},model:{value:t.ticketsInput62,callback:function(e){t.ticketsInput62=e},expression:"ticketsInput62"}}),t._v(" "),n("el-button",{staticClass:"owner-btn",attrs:{type:"primary"},on:{click:function(e){return t.ticketsClick6()}}},[t._v("增发门票")]),t._v(" "),n("div",{staticClass:"owner-hr"}),t._v(" "),n("div",{staticClass:"owner-head"},[t._v("设置单次共振ECO的上限")]),t._v(" "),n("el-input",{staticClass:"owner-input",attrs:{placeholder:"请输入单次共振ECO的上限值"},model:{value:t.ticketsInput7,callback:function(e){t.ticketsInput7=e},expression:"ticketsInput7"}}),t._v(" "),n("el-button",{staticClass:"owner-btn",attrs:{type:"primary"},on:{click:function(e){return t.ticketsClick7()}}},[t._v("设置单次共振ECO的上限值")]),t._v(" "),n("div",{staticClass:"owner-hr"})],1),t._v(" "),n("div",{staticClass:"owner-w"},[n("div",{staticClass:"owner-title"},[t._v("管理员相关方法")]),t._v(" "),n("div",{staticClass:"owner-head"},[t._v("更换主合约owner地址")]),t._v(" "),n("el-input",{staticClass:"owner-input",attrs:{placeholder:"请输入新的owner地址"},model:{value:t.ownerInput1,callback:function(e){t.ownerInput1=e},expression:"ownerInput1"}}),t._v(" "),n("el-button",{staticClass:"owner-btn",attrs:{type:"primary"},on:{click:function(e){return t.ownerClick1()}}},[t._v("更换主合约owner")]),t._v(" "),n("div",{staticClass:"owner-hr"}),t._v(" "),n("div",{staticClass:"owner-head"},[t._v("更换门票合约owner地址")]),t._v(" "),n("el-input",{staticClass:"owner-input",attrs:{placeholder:"请输入新的owner地址"},model:{value:t.ownerInput2,callback:function(e){t.ownerInput2=e},expression:"ownerInput2"}}),t._v(" "),n("el-button",{staticClass:"owner-btn",attrs:{type:"primary"},on:{click:function(e){return t.ownerClick2()}}},[t._v("更换门票合约owner")]),t._v(" "),n("div",{staticClass:"owner-hr"}),t._v(" "),n("div",{staticClass:"owner-head"},[t._v("设置主合约的一个管理者")]),t._v(" "),n("el-input",{staticClass:"owner-input",attrs:{placeholder:"请输入主合约管理者地址"},model:{value:t.ownerInput31,callback:function(e){t.ownerInput31=e},expression:"ownerInput31"}}),t._v(" "),n("el-button",{staticClass:"owner-btn",attrs:{type:"primary"},on:{click:function(e){return t.ownerClick3()}}},[t._v("设置主合约的一个管理者 (可设"+t._s(14-this.masterManagerLen)+"个)")]),t._v(" "),n("div",{staticClass:"owner-hr"}),t._v(" "),n("div",{staticClass:"owner-head"},[t._v("设置门票合约的一个管理者")]),t._v(" "),n("el-input",{staticClass:"owner-input",attrs:{placeholder:"请输入门票合约管理者地址"},model:{value:t.ownerInput41,callback:function(e){t.ownerInput41=e},expression:"ownerInput41"}}),t._v(" "),n("el-button",{staticClass:"owner-btn",attrs:{type:"primary"},on:{click:function(e){return t.ownerClick4()}}},[t._v("设置门票合约的一个管理者(可设"+t._s(9-this.ticketManagerLen)+"个)")]),t._v(" "),n("div",{staticClass:"owner-hr"}),t._v(" "),n("div",{staticClass:"all-w"},[n("div",{staticClass:"all-right-two"},[n("div",[t._v("主合约总投资额")]),t._v(" "),n("div",[t._v(t._s(this.masterTotalRevenue))])]),t._v(" "),n("div",{staticClass:"all-hr"}),t._v(" "),n("div",{staticClass:"all-right-two"},[n("div",[t._v("主合约总投资地址数")]),t._v(" "),n("div",[t._v(t._s(this.masterTotalAccount))])]),t._v(" "),n("div",{staticClass:"all-hr"}),t._v(" "),n("div",{staticClass:"all-right-two"},[n("div",[t._v("主合约轻节点数")]),t._v(" "),n("div",[t._v(t._s(this.masterNode1Length))])]),t._v(" "),n("div",{staticClass:"all-hr"}),t._v(" "),n("div",{staticClass:"all-right-two"},[n("div",[t._v("主合约中级节点数")]),t._v(" "),n("div",[t._v(t._s(this.masterNode2Length))])]),t._v(" "),n("div",{staticClass:"all-hr"}),t._v(" "),n("div",{staticClass:"all-right-two"},[n("div",[t._v("主合约超级节点数")]),t._v(" "),n("div",[t._v(t._s(this.masterNode3Length))])]),t._v(" "),n("div",{staticClass:"all-hr"}),t._v(" "),n("div",{staticClass:"all-right-two"},[n("div",[t._v("主合约创世节点数")]),t._v(" "),n("div",[t._v(t._s(this.masterNode4Length))])]),t._v(" "),n("div",{staticClass:"all-hr"}),t._v(" "),n("div",{staticClass:"all-right-two"},[n("div",[t._v("主合约投资超过5000U的人数")]),t._v(" "),n("div",[t._v(t._s(this.masterGT5000ULen))])]),t._v(" "),n("div",{staticClass:"all-hr"}),t._v(" "),n("div",{staticClass:"all-right-two"},[n("div",[t._v("门票合约E1人数")]),t._v(" "),n("div",[t._v(t._s(this.ticketsE1Num))])]),t._v(" "),n("div",{staticClass:"all-hr"}),t._v(" "),n("div",{staticClass:"all-right-two"},[n("div",[t._v("门票合约E2人数")]),t._v(" "),n("div",[t._v(t._s(this.ticketsE2Num))])]),t._v(" "),n("div",{staticClass:"all-hr"}),t._v(" "),n("div",{staticClass:"all-right-two"},[n("div",[t._v("门票合约E3人数")]),t._v(" "),n("div",[t._v(t._s(this.ticketsE3Num))])]),t._v(" "),n("div",{staticClass:"all-hr"}),t._v(" "),n("div",{staticClass:"all-right-two"},[n("div",[t._v("门票合约E4人数")]),t._v(" "),n("div",[t._v(t._s(this.ticketsE4Num))])]),t._v(" "),n("div",{staticClass:"all-hr"}),t._v(" "),n("div",{staticClass:"all-right-two"},[n("div",[t._v("门票合约E5人数")]),t._v(" "),n("div",[t._v(t._s(this.ticketsE5Num))])]),t._v(" "),n("div",{staticClass:"all-hr"}),t._v(" "),n("div",{staticClass:"all-right-two"},[n("div",[t._v("门票合约激活ESD的人数")]),t._v(" "),n("div",[t._v(t._s(this.ticketsESDNum))])]),t._v(" "),n("div",{staticClass:"all-hr"})])],1)])},staticRenderFns:[]};var u=n("VU/8")(i,o,!1,function(t){n("49lF")},null,null);e.default=u.exports}});
//# sourceMappingURL=3.96a3894ff263a5a23761.js.map