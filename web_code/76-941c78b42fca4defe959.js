(window["webpackJsonp_/@project/web_code"]=window["webpackJsonp_/@project/web_code"]||[]).push([[76],{CQex:function(e,t,n){"use strict";var r=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n("KQm4")),i=n("0O+R"),o=n("7C5+"),u={name:"Breadcrumb",inject:(0,a.default)(o.pageInject),props:{elementId:{type:String}},computed:{nodeList:function(){var e=this.getStore().layoutData,t=this.elementId&&(0,i.getParentNodeListByElementId)(e,this.elementId)||[];return t.length>3?t.slice(-3).filter((function(e){return!["dialog-container"].includes(e.elementType)})):t.filter((function(e){return!["dialog-container"].includes(e.elementType)}))}},methods:{getNodeNameById:function(e){return this.getElementPropsById(e).elementName},getElementPropsById:function(e){var t="app"===e?this.getStore().layoutData.elementId:e;return this.getStore().dynamicProps[t]||{}}}};t.default=u},KVr3:function(e,t,n){"use strict";n.r(t);var r=n("CQex"),a=n.n(r);for(var i in r)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(i);t.default=a.a},Y1Bl:function(e,t,n){"use strict";n.r(t);var r=n("lZMk"),a=n("KVr3");for(var i in a)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(i);n("seti");var o=n("KHd+"),u=Object(o.a)(a.default,r.a,r.b,!1,null,"40ae1528",null);t.default=u.exports},"Z+P5":function(e,t,n){},l5Y8:function(e,t,n){var r=n("Z+P5");r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n("SZ7m").default)("b868869c",r,!0,{})},lZMk:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a}));var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("n-breadcrumb",{staticClass:"breadcrumb",attrs:{"separator-class":"el-icon-arrow-right"}},e._l(e.nodeList,(function(t,r){return n("n-breadcrumb-item",{key:t.elementId,staticClass:"breadcrumb-item no-hover",class:{last:r===e.nodeList.length-1},attrs:{"data-zone":t.elementId+"_"+t.elementType}},[e._v("\n    "+e._s(e.getNodeNameById(t.elementId))+"\n  ")])})),1)},a=[]},seti:function(e,t,n){"use strict";n("l5Y8")}}]);
//# sourceMappingURL=/@project/web_code/76-941c78b42fca4defe959.js.map