(window["webpackJsonp_/@project/web_code"]=window["webpackJsonp_/@project/web_code"]||[]).push([[74],{"/sDi":function(e,t,n){"use strict";var r=n("TqRt"),o=n("cDf5");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n("Ff2n")),a=r(n("rePB")),l=r(n("KQm4")),s=r(n("i7/w")),u=r(n("KFu/")),c=n("0O+R"),f=n("tgb1"),p=r(n("YLtl")),d=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};var n=y(t);if(n&&n.has(e))return n.get(e);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var l=i?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(r,a,l):r[a]=e[a]}r.default=e,n&&n.set(e,r);return r}(n("ZQwl")),m=n("vu0G"),g=n("7C5+"),h=["pushHistory","callback"];function y(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(y=function(e){return e?n:t})(e)}function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){(0,a.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var P={name:"PropsPanel",components:{ConfigWrapper:u.default},inject:["dndOptions"].concat((0,l.default)(g.pageInject)),data:function(){return{activeCollapses:["basic","dataConfig","formConfig","slotConfig","layoutConfig","widgetConfig","dataColumn","paginationConfig","switch","verification","pageVariable","exportFunctions","slotRules"],collapses:[{name:"basic",title:"基本属性"},{name:"dataConfig",title:"数据配置"},{name:"slotRules",title:"渲染规则配置"},{name:"dataColumn",title:"数据列"},{name:"formConfig",title:"表单配置"},{name:"slotConfig",title:"数据配置"},{name:"layoutConfig",title:"布局配置"},{name:"widgetConfig",title:"组件配置"},{name:"paginationConfig",title:"分页配置"},{name:"sortConfig",title:"排序配置"},{name:"mergeCells",title:"合并单元格配置"},{name:"switch",title:"更多配置"},{name:"verification",title:"验证配置"},{name:"pageVariable",title:"页面变量配置"},{name:"exportFunctions",title:"页面暴露函数"}],elementProps:{}}},computed:{layoutData:{get:function(){return this.getStore().layoutData}},current:function(){var e=this.dndOptions.selectedId,t=this.layoutData;return(0,c.getNodeByElementId)(t,e)||t},isInSlot:function(){var e=(0,c.getParentNodeByElementId)(this.layoutData,this.elementProps.elementId);return e&&["slot"].includes(e.elementType)&&["data"].includes(this.getElementPropsById(e.elementId).slotType)},isTableController:function(){var e=this.getElementPropsById(this.elementProps.elementId),t=(0,c.getParentNodeByElementId)(this.layoutData,this.elementProps.elementId)||{};return"slot"===e.elementType&&"操作列"===this.elementProps.elementName&&"controller"===e.slotName&&t&&"table"===t.elementType},isDataSlot:function(){var e=this.elementProps.slotType;return["data"].includes(e)},isInForm:function(){var e=(0,c.getParentNodeListByElementId)(this.layoutData,this.elementProps.elementId);return e&&e.some((function(e){return["form-container"].includes(e.elementType)}))}},watch:{"current.elementId":{immediate:!0,handler:function(){this.initProps()}}},methods:{configList:function(){var e=this.current,t=e.elementType,n=e.elementVersion;return(0,f.getPropsConfig)({elementType:t,elementVersion:n})},initProps:function(){var e=this.current,t=e.elementId,n=e.elementType,r=e.elementVersion,o=b(b({},this.current),this.getElementPropsById(t));this.$delete(o,"children"),this.elementProps=p.default.cloneDeep(b(b({},f.getPropsValues.call(this,{elementType:n,elementVersion:r})),o))},update:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.pushHistory,o=void 0===r||r,a=n.callback,l=void 0===a?function(){}:a,u=(0,i.default)(n,h);Object.keys(e).forEach((function(n){s.default.set(t.elementProps,n,e[n])})),d.globalEmit.call(this,m.PROPS,{elementId:this.current.elementId,data:e,extra:u,pushHistory:o,callback:l})},getCoolapseConfigs:function(e){return this.configList().reduce((function(t,n){return n.groupbelong===e.name?t.concat(n):t}),[])||[]},isShowConfig:function(e){switch(e.name){case"slotConfig":return this.isInSlot;case"formConfig":return this.isInForm;case"slotRules":return this.isDataSlot||this.isTableController;default:return!0}},getElementPropsById:function(e){var t="app"===e?this.getStore().layoutData.elementId:e;return this.getStore().dynamicProps[t]||{}}},mounted:function(){var e=this;d.default.$on(m.BIND_PROPS,(function(){e.initProps()}))},beforeDestroy:function(){d.default.$off(m.BIND_PROPS)}};t.default=P},"3vJ0":function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}));var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("n-form",{staticClass:"props-panel",attrs:{size:"mini",inline:"","label-position":"left"},nativeOn:{submit:function(e){e.preventDefault()}}},[n("el-collapse",{model:{value:e.activeCollapses,callback:function(t){e.activeCollapses=t},expression:"activeCollapses"}},[e._l(e.collapses,(function(t){return[e.getCoolapseConfigs(t).length&&e.isShowConfig(t)?n("el-collapse-item",{key:t.name,attrs:{title:t.title,name:t.name}},[e._l(e.getCoolapseConfigs(t),(function(t){return[t.splitline?n("div",{key:t.propKey,staticClass:"config-dot-line",style:t.splitlinestlye}):e._e(),e._v(" "),n("config-wrapper",e._b({key:t.propKey,attrs:{"default-value":t.default,"element-props":e.elementProps,elementId:e.current.elementId},on:{update:e.update}},"config-wrapper",t,!1))]}))],2):e._e()]}))],2)],1)},o=[]},"5xAl":function(e,t,n){var r=n("kuRN");r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n("SZ7m").default)("0edb0e62",r,!0,{})},"6NRf":function(e,t,n){"use strict";n.r(t);var r=n("uPo8"),o=n.n(r);for(var i in r)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(i);t.default=o.a},Go7R:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}));var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"config-wrapper"},[n(e.currentElement,e._b({tag:"component",on:{update:e.updateElementProps}},"component",Object.assign({},e.$props,{elementProps:e.compoentProps}),!1))],1)},o=[]},"KFu/":function(e,t,n){"use strict";n.r(t);var r=n("Go7R"),o=n("6NRf");for(var i in o)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(i);var a=n("KHd+"),l=Object(a.a)(o.default,r.a,r.b,!1,null,"85bbed3c",null);t.default=l.exports},"bo/m":function(e,t,n){"use strict";n.r(t);var r=n("3vJ0"),o=n("rAXC");for(var i in o)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(i);n("d09i");var a=n("KHd+"),l=Object(a.a)(o.default,r.a,r.b,!1,null,"164b7c86",null);t.default=l.exports},d09i:function(e,t,n){"use strict";n("5xAl")},kuRN:function(e,t,n){},rAXC:function(e,t,n){"use strict";n.r(t);var r=n("/sDi"),o=n.n(r);for(var i in r)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(i);t.default=o.a},uPo8:function(e,t,n){"use strict";var r=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n("Ff2n")),i=r(n("Nco5")),a=r(n("YLtl")),l=["showIds"],s={name:"ConfigWrapper",props:{propKey:{type:String},defaultValue:{type:[Object,String,Number]},name:{type:String},placeholder:{type:String,default:""},tip:{type:String},vue:{type:String},elementId:{type:String},elementProps:{type:Object,default:function(){return{}}},optionkey:{type:String},options:{type:Object}},data:function(){return{compoentProps:{},watchFn:null,extra:{}}},computed:{currentElement:function(){return this.vue&&!i.default[this.vue]&&alert("组件丢失: "+this.vue),this.name?i.default[this.vue]:null}},methods:{updateElementProps:function(e,t){this.compoentProps=e,this.extra=t}},watch:{elementProps:{immediate:!0,deep:!0,handler:function(e){var t=this;this.compoentProps=a.default.cloneDeep(e),this.extra=void 0,"function"==typeof this.watchFn&&this.watchFn(),this.watchFn=this.$watch("compoentProps",(function(e){if(!a.default.isEqual(t.elementProps,e)||t.extra){e.showIds;var n=(0,o.default)(e,l);t.$emit("update",n,t.extra),t.extra=void 0}}),{deep:!0})}}}};t.default=s}}]);
//# sourceMappingURL=/@project/web_code/74-941c78b42fca4defe959.js.map