webpackJsonp([1],{172:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app"}},173:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{dataInfo:{type:Object,required:!0}},data:function(){return{}}}},174:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(74),a=n.n(s),l=n(75),i=n.n(l);e.default={components:{HomeContent:a.a,Test:i.a},data:function(){return{activeIndex:"0"}},methods:{handleSelect:function(t,e){console.log("key, keyPath",t,e)}}}},175:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{gutter:{type:Number,default:0},span_l:{type:Number,default:12},span_r:{type:Number,default:12}},data:function(){return{}}}},176:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{collapseIcon:"el-icon-d-arrow-right",isCollapse:!0}},methods:{isCollapseFn:function(){this.isCollapse?this.collapseIcon="el-icon-d-arrow-left":this.collapseIcon="el-icon-d-arrow-right",this.isCollapse=!this.isCollapse},handleOpen:function(t,e){console.log(t,e)},handleClose:function(t,e){console.log(t,e)}}}},177:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(196),a=n.n(s);e.default={components:{Block:a.a},data:function(){return{blocks:[{items:[{title:"标题1",detail:"暂无详情",logoStyle:{background:"#d0e0f8"}},{title:"标题2",detail:"暂无详情",logoStyle:{background:"#ccc"}},{title:"标题3",detail:"暂无详情",logoStyle:{background:"blue"}},{title:"标题4",detail:"暂无详情",logoStyle:{background:"red"}}]},{items:[{title:"标题5",detail:"暂无详情",logoStyle:{background:"#d0e0f8"}},{title:"标题6",detail:"暂无详情",logoStyle:{background:"#ccc"}},{title:"标题7",detail:"暂无详情",logoStyle:{background:"blue"}},{title:"标题8",detail:"暂无详情",logoStyle:{background:"red"}}]}]}},methods:{}}},178:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(197),a=n.n(s);e.default={components:{Myheader:a.a}}},179:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(198),a=n.n(s);e.default={components:{Layout1:a.a},data:function(){return{}}}},180:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{person:{name:"张三",age:18}}},computed:{},mounted:function(){var t=this;this.$axios.post("http://www.mockapi.com").then(function(e){console.log("res",e),t.person.name=e.data.name,t.person.age=e.data.age})},methods:{}}},181:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(199),a=n.n(s);e.default={components:{leftNav:a.a},data:function(){return{}},methods:{}}},182:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(46),a=n(81),l=n.n(a),i=n(79),o=n(76),r=n.n(o),c=n(80),u=(n.n(c),n(78),n(77)),d=n.n(u);s.a.config.productionTip=!1,s.a.use(r.a),s.a.prototype.$axios=d.a,new s.a({el:"#app",router:i.a,template:"<App/>",components:{App:l.a}})},183:function(t,e){},184:function(t,e){},185:function(t,e){},186:function(t,e){},187:function(t,e){},188:function(t,e){},189:function(t,e){},190:function(t,e){},191:function(t,e){},192:function(t,e){},196:function(t,e,n){function s(t){n(189)}var a=n(4)(n(173),n(209),s,"data-v-6a6868ac",null);t.exports=a.exports},197:function(t,e,n){function s(t){n(191)}var a=n(4)(n(174),n(211),s,"data-v-a2443900",null);t.exports=a.exports},198:function(t,e,n){function s(t){n(186)}var a=n(4)(n(175),n(206),s,"data-v-53d64856",null);t.exports=a.exports},199:function(t,e,n){function s(t){n(183)}var a=n(4)(n(176),n(203),s,null,null);t.exports=a.exports},200:function(t,e,n){function s(t){n(190)}var a=n(4)(n(178),n(210),s,"data-v-9c6ecc54",null);t.exports=a.exports},201:function(t,e,n){function s(t){n(188)}var a=n(4)(n(179),n(208),s,"data-v-5b3b3f88",null);t.exports=a.exports},202:function(t,e,n){function s(t){n(187)}var a=n(4)(n(180),n(207),s,"data-v-56a9da30",null);t.exports=a.exports},203:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"box"},[n("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"1-4-1",collapse:t.isCollapse},on:{open:t.handleOpen,close:t.handleClose}},[n("el-menu-item",{attrs:{index:"0"},on:{click:t.isCollapseFn}},[[n("i",{class:t.collapseIcon})]],2),t._v(" "),n("el-submenu",{attrs:{index:"1"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-document"}),t._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("Element")])]),t._v(" "),n("el-menu-item",{attrs:{index:"1"}},[n("i",{staticClass:"el-icon-document"}),t._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("导航一")])]),t._v(" "),n("el-menu-item",{attrs:{index:"2"}},[n("i",{staticClass:"el-icon-menu"}),t._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("导航二")])]),t._v(" "),n("el-menu-item",{attrs:{index:"3",disabled:""}},[n("i",{staticClass:"el-icon-document"}),t._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("导航三")])]),t._v(" "),n("el-menu-item",{attrs:{index:"4",disabled:""}},[n("i",{staticClass:"el-icon-setting"}),t._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("导航四")])])],2),t._v(" "),n("el-submenu",{attrs:{index:"2"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-share"}),t._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("Vue")])]),t._v(" "),n("el-menu-item",{attrs:{index:"1"}},[n("i",{staticClass:"el-icon-document"}),t._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("导航一")])]),t._v(" "),n("el-menu-item",{attrs:{index:"2"}},[n("i",{staticClass:"el-icon-menu"}),t._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("导航二")])]),t._v(" "),n("el-menu-item",{attrs:{index:"3",disabled:""}},[n("i",{staticClass:"el-icon-document"}),t._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("导航三")])]),t._v(" "),n("el-menu-item",{attrs:{index:"4",disabled:""}},[n("i",{staticClass:"el-icon-setting"}),t._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("导航四")])])],2),t._v(" "),n("el-submenu",{attrs:{index:"3"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-edit"}),t._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("es6")])]),t._v(" "),n("el-menu-item",{attrs:{index:"1"}},[n("i",{staticClass:"el-icon-document"}),t._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("导航一")])]),t._v(" "),n("el-menu-item",{attrs:{index:"2"}},[n("i",{staticClass:"el-icon-menu"}),t._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("导航二")])]),t._v(" "),n("el-menu-item",{attrs:{index:"3",disabled:""}},[n("i",{staticClass:"el-icon-document"}),t._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("导航三")])]),t._v(" "),n("el-menu-item",{attrs:{index:"4",disabled:""}},[n("i",{staticClass:"el-icon-setting"}),t._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("导航四")])])],2),t._v(" "),n("el-submenu",{attrs:{index:"4"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-picture"}),t._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("css")])]),t._v(" "),n("el-menu-item",{attrs:{index:"1"}},[n("i",{staticClass:"el-icon-document"}),t._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("导航一")])]),t._v(" "),n("el-menu-item",{attrs:{index:"2"}},[n("i",{staticClass:"el-icon-menu"}),t._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("导航二")])]),t._v(" "),n("el-menu-item",{attrs:{index:"3",disabled:""}},[n("i",{staticClass:"el-icon-document"}),t._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("导航三")])]),t._v(" "),n("el-menu-item",{attrs:{index:"4",disabled:""}},[n("i",{staticClass:"el-icon-setting"}),t._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("导航四")])])],2)],1)],1)},staticRenderFns:[]}},204:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"box"},t._l(t.blocks,function(e){return n("el-row",{key:e.items.title,staticStyle:{"margin-top":"20px"}},t._l(e.items,function(t){return n("el-col",{key:t.title,attrs:{span:6}},[n("block",{staticClass:"block",attrs:{dataInfo:t}})],1)}))}))},staticRenderFns:[]}},205:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]}},206:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"box"},[n("div",{staticClass:"layout"},[n("el-row",{attrs:{gutter:t.gutter}},[n("el-col",{attrs:{span:t.span_l}},[t._t("layout_l")],2),t._v(" "),n("el-col",{attrs:{span:t.span_r}},[t._t("layout_r")],2)],1)],1)])},staticRenderFns:[]}},207:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"box"},[n("div",[t._v(t._s(t.person.name)+"  "+t._s(t.person.age))])])},staticRenderFns:[]}},208:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"box"},[n("layout1",[n("template",{slot:"layout_l"},[n("h1",[t._v("左边")])]),t._v(" "),n("template",{slot:"layout_r"},[n("h1",[t._v("右边")])])],2)],1)},staticRenderFns:[]}},209:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"box"}},[n("div",{staticClass:"block"},[n("div",{staticClass:"logo-container",style:t.dataInfo.logoStyle}),t._v(" "),n("div",{staticClass:"info-container"},[n("h3",{staticClass:"title"},[t._v(t._s(t.dataInfo.title))]),t._v(" "),n("p",{staticClass:"detail"},[t._v(t._s(t.dataInfo.detail))])])])])},staticRenderFns:[]}},210:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"box"},[n("myheader"),t._v(" "),n("router-view")],1)},staticRenderFns:[]}},211:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"box"},[n("el-menu",{attrs:{"default-active":t.activeIndex,mode:"horizontal",router:""},on:{select:t.handleSelect}},[n("el-menu-item",{attrs:{index:"0",route:{path:"/homeContent"}}},[t._v("首页")]),t._v(" "),n("el-submenu",{attrs:{index:"1"}},[n("template",{slot:"title"},[t._v("学习网站")]),t._v(" "),n("el-menu-item",{attrs:{index:"1-1"}},[n("a",{attrs:{href:"https://cn.vuejs.org/",target:"_blank"}},[t._v("Vue官网")])]),t._v(" "),n("el-menu-item",{attrs:{index:"1-2"}},[n("a",{attrs:{href:"http://element.eleme.io",target:"_blank"}},[t._v("Element-UI")])]),t._v(" "),n("el-menu-item",{attrs:{index:"1-3"}},[n("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html",target:"_blank"}},[t._v("Flex")])]),t._v(" "),n("el-menu-item",{attrs:{index:"1-4"}},[n("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2015/07/flex-examples.html",target:"_blank"}},[t._v("Flex实例")])])],2),t._v(" "),n("el-menu-item",{attrs:{index:"2",route:{path:"/test"}}},[t._v("测试")])],1)],1)},staticRenderFns:[]}},212:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"box"},[n("left-nav",{staticStyle:{"margin-top":"5px"}})],1)},staticRenderFns:[]}},74:function(t,e,n){function s(t){n(184)}var a=n(4)(n(177),n(204),s,"data-v-38890ac4",null);t.exports=a.exports},75:function(t,e,n){function s(t){n(192)}var a=n(4)(n(181),n(212),s,"data-v-bc536d84",null);t.exports=a.exports},78:function(t,e,n){"use strict";var s=n(194),a=n.n(s);a.a.mock("http://www.mockapi.com",{name:"@name","age|1-10":10})},79:function(t,e,n){"use strict";var s=n(46),a=n(213),l=n(200),i=n.n(l),o=n(74),r=n.n(o),c=n(201),u=n.n(c),d=n(75),v=n.n(d),p=n(202),m=n.n(p);s.a.use(a.a),e.a=new a.a({routes:[{path:"/",name:"index",component:i.a,children:[{path:"homeContent",name:"homeContent",component:r.a},{path:"layoutTest",name:"layoutTest",component:u.a},{path:"test",name:"test",component:v.a},{path:"mockTest",name:"mockTest",component:m.a}]}]})},80:function(t,e){},81:function(t,e,n){function s(t){n(185)}var a=n(4)(n(172),n(205),s,null,null);t.exports=a.exports}},[182]);
//# sourceMappingURL=app.f529ee1637937682dfd3.js.map