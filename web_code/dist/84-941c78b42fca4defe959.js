(window["webpackJsonp_/@project/web_code"]=window["webpackJsonp_/@project/web_code"]||[]).push([[84],{D3RZ:function(e,t,n){},I5HF:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return d}));var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("n-tree",{ref:"nodeTree",staticClass:"node-tree",attrs:{data:e.data,"node-key":"elementId","expand-on-click-node":!1,"auto-expand-parent":!1,"default-expanded-all":!1,"default-expanded-keys":e.defaultExpandedKeys,"highlight-current":"",draggable:!1,"icon-class":"icon-right"},on:{"node-expand":e.handleNodeExpand,"node-collapse":e.handleNodeCollapse,"node-click":e.handleClick},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.data;return n("div",{staticClass:"tree-node",class:e.nodeClass(i),attrs:{"data-zone":i.elementId+"_"+i.elementType+"_tree}"}},[n("div",{staticClass:"node-name"},[n("div",{staticClass:"node-icon",style:"background-image: url("+e.$getImgPrefix(e.iconMap[i.elementType])+")"}),e._v(" "),n("span",[e._v(e._s(i.elementName))])]),e._v(" "),["page","dialog-container","slot","timer-container"].includes(i.elementType)||e.isInDynamicContainer(i)?e._e():n("i",{staticClass:"node-hide iconfont icon-kai",on:{click:function(t){return t.stopPropagation(),e.toggleVisible(i)}}})])}}])})},d=[]},Kyde:function(e,t,n){var i=n("D3RZ");i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,n("SZ7m").default)("ec151d24",i,!0,{})},ehZu:function(e,t,n){"use strict";n.r(t);var i=n("I5HF"),d=n("gq7x");for(var a in d)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return d[e]}))}(a);n("lbkR");var o=n("KHd+"),s=Object(o.a)(d.default,i.a,i.b,!1,null,"951b8844",null);t.default=s.exports},gq7x:function(e,t,n){"use strict";n.r(t);var i=n("sDII"),d=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(a);t.default=d.a},lbkR:function(e,t,n){"use strict";n("Kyde")},sDII:function(e,t,n){"use strict";var i=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var d=i(n("KQm4")),a=n("0O+R"),o=n("ZDQs"),s=n("cCei"),r=i(n("YLtl")),l=n("7C5+"),c={name:"TreePanel",components:{},inject:["dndOptions"].concat((0,d.default)(l.pageInject)),props:{data:{type:Array,required:!0}},data:function(){return{iconMap:o.iconMap,defaultExpandedKeys:[]}},computed:{isDragging:function(){return!!this.dndOptions.draggingWidget}},watch:{"dndOptions.selectedId":function(e){this.$refs.nodeTree.setCurrentKey(e)}},methods:{handleClick:function(e){["dialog-container","timer-container"].includes(e.elementType)||(this.dndOptions.selectedId=e.elementId)},isHover:function(e){return this.dndOptions.hoverId===e.elementId},isBefore:function(e){return["top","left"].includes(this.dndOptions.placement)&&this.dndOptions.dropZoneId===e.elementId&&!o.ignoreDragTypes.includes(e.elementType)},isAfter:function(e){return["bottom","right"].includes(this.dndOptions.placement)&&this.dndOptions.dropZoneId===e.elementId&&!o.ignoreDragTypes.includes(e.elementType)},isDropTarget:function(e){return this.dndOptions.dropZoneId===e.elementId},isSelected:function(e){return this.dndOptions.selectedId===e.elementId},isSelf:function(e){var t;return(null===(t=this.dndOptions.draggingWidget)||void 0===t?void 0:t.elementId)===e.elementId},isHide:function(e){return!1===this.getElementPropsById(e.elementId).isVisible},toggleVisible:function(e){this._storeCommit(s.TOGGLE_LAYOUT_VISIBLE,{elementId:e.elementId})},isAcceptDrop:function(e){return![].concat((0,d.default)(o.dialogTypes),["timer","dialog-container","timer-container"]).includes(e.elementType)},isAcceptDrag:function(e){return![].concat((0,d.default)(o.ignoreDragTypes),(0,d.default)(o.dialogTypes),["timer"]).includes(e.elementType)},isInDynamicContainer:function(e){var t=(0,a.getParentNodeByElementId)(this.getStore().layoutData.children,e.elementId);return t&&["dynamic-container"].includes(t.elementType)},updateExpandKeys:function(){var e=[];a.treeUtil.forEach(this.data,(function(t){[].concat((0,d.default)(o.dialogTypes),["timer-container","dialog-container"]).includes(t.elementType)||e.push(t.elementId)})),this.defaultExpandedKeys=e},handleNodeExpand:function(e){var t=r.default.uniq([].concat((0,d.default)(this.defaultExpandedKeys),[e.elementId]));this.defaultExpandedKeys=t},handleNodeCollapse:function(e){this.defaultExpandedKeys=this.defaultExpandedKeys.filter((function(t){return t!==e.elementId}))},getElementPropsById:function(e){var t="app"===e?this.getStore().layoutData.elementId:e;return this.getStore().dynamicProps[t]||{}},nodeClass:function(e){return{"drop-zone":this.isAcceptDrop(e),"is-accept-drag":this.isAcceptDrag(e),"is-selected":this.isSelected(e),"is-self":this.isSelf(e),"is-hide":this.isHide(e)}}},created:function(){this.updateExpandKeys()}};t.default=c}}]);
//# sourceMappingURL=/@project/web_code/84-941c78b42fca4defe959.js.map