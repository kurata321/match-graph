"use strict";(self.webpackChunkmatch_graph=self.webpackChunkmatch_graph||[]).push([[736],{"./src/stories/MatchGraph.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Border:function(){return Border},BorderRadius:function(){return BorderRadius},LinearGradient:function(){return LinearGradient},Width:function(){return Width},WidthFit:function(){return WidthFit},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return MatchGraph_stories}});__webpack_require__("../../node_modules/react/index.js");var lib=__webpack_require__("./node_modules/css-tree/lib/index.js"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),MatchGraph=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/MatchGraph/MatchGraph.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(MatchGraph.Z,options),MatchGraph.Z&&MatchGraph.Z.locals&&MatchGraph.Z.locals;var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");function setupElement(el,attrs,children){"string"==typeof attrs&&(attrs={class:attrs});for(let attrName in attrs)attrName.startsWith("on")?el.addEventListener(attrName.substring(2),attrs[attrName]):el.setAttribute(attrName,attrs[attrName]);return Array.isArray(children)?children.forEach((child=>el.appendChild(child&&child.nodeType?child:function createText(text){return document.createTextNode(String(text))}(child)))):"string"==typeof children&&(el.innerHTML=children),el}const getNodeValue=node=>{switch(node?.type){case"Type":case"Property":case"Keyword":case"Function":return node.name;case"Token":case"String":return node.value;case"Comma":return","}};function createElement(tag,attrs,children){return setupElement(document.createElement(tag),attrs,children)}function createSvgElement(tag,attrs,children){return setupElement(document.createElementNS("http://www.w3.org/2000/svg",tag),attrs,children)}const MatchGraphConnectionMarker=()=>(0,jsx_runtime.jsx)("svg",{style:{position:"absolute",zIndex:-1,width:0,height:0},children:(0,jsx_runtime.jsx)("marker",{id:"match-graph-connection-marker",className:"match-graph-connection-end",viewBox:"0 0 5 10",refX:"0",refY:"5",markerUnits:"strokeWidth",markerWidth:"6",markerHeight:"4",orient:"auto",children:(0,jsx_runtime.jsx)("path",{d:"M 0 0 L 10 5 L 0 10 z"})})});MatchGraphConnectionMarker.displayName="MatchGraphConnectionMarker";const SYNTAX_URL="https://csstree.github.io/docs/syntax/",MatchGraph_MatchGraph_MatchGraph=props=>{const{name:name,value:value}=props,data=lib.cV.getProperty(name)??lib.cV.getType(name);if(null===data)return null;const isFunction="Function"===data.syntax.terms[0].type,match=value?lib.cV.match(data,((value,syntax,isFunction)=>isFunction?`${syntax.terms[0].name}(${value})`:value)(value,data.syntax,isFunction)):null,matchStack=match?.matched?.match??[],walk=(node,container,depth=0)=>{if("MatchGraph"===node.type)return walk(node.match,container);let el,contentEl,mainEl,complex=!1;if(el=createElement("div","node-wrapper",[contentEl=createElement("div","node-content",[mainEl=createElement("div","node")])]),visited.has(node))return mainEl.classList.add("node_recursive"),mainEl.innerHTML="Recursive",container.appendChild(el),!0;switch("If"===node.type&&(visited.set(node,node.value),ifStack.push(node)),elByNode.set(node,{root:el,content:contentEl,main:mainEl}),node.type){case"Match":{mainEl.classList.add("node_match"),mainEl.innerHTML=node.type;let toNode=null;for(let i=ifStack.length-1,prev=node;i>=0;i--){const ifStackItem=ifStack[i];if(prev===ifStackItem.then){toNode=ifStackItem.then;break}prev=ifStackItem}null!==toNode&&laterConnections.push({from:mainEl,to:toNode,num:0,total:{count:0}});break}case"Mismatch":{mainEl.classList.add("node_mismatch"),mainEl.innerHTML=node.type;let toNode=null;for(let i=ifStack.length-1,prev=node;i>=0;i--){const ifStackItem=ifStack[i];if(prev===ifStackItem.then){toNode=ifStackItem.else;break}prev=ifStackItem}null!==toNode&&laterConnections.push({from:mainEl,to:toNode,num:0,total:{count:0}});break}case"DisallowEmpty":mainEl.classList.add("node_disallow-empty"),mainEl.innerHTML=node.type;break;case"Type":case"Property":case"Keyword":case"Function":case"Token":case"String":case"Comma":if(!node.match){let key=!1;switch(node.type){case"Type":key=`<a href="${SYNTAX_URL}#Type:`+node.name+'" target="_blank">&lt;'+node.name+"&gt;</a>";break;case"Property":key=`<a href="${SYNTAX_URL}#Property:`+node.name+'" target="_blank">&lt;\''+node.name+"'&gt;</a>";break;case"Function":case"Keyword":key=node.name;break;case"Token":case"String":key=node.value;break;case"Comma":key=","}let isMatched=!1;const stackValue=getNodeValue(matchStack?.[0]?.syntax),nodeValue=getNodeValue(node.syntax);stackValue&&nodeValue&&stackValue===nodeValue&&isParentMatch&&(matchStack.shift(),isMatched=!0),mainEl.classList.add("node_check"),mainEl.innerHTML=`<span class="node__label${isMatched?" match":""}">`+node.type+"</span>"+`<span class="node__key${isMatched?" match":""}">`+key+"</span>"}break;default:{mainEl.classList.add("node_default");const nestedEl=el.appendChild(createElement("div","nested nested_labeled"));mainEl.appendChild(createElement("div","node__type",node.type)),complex=!0;let nestedSimpleEl=nestedEl;const values="Enum"===node.type?node.map:node,nestedOffset={count:0};for(const key in values){if(values===node&&"syntax"===key||"type"===key)continue;const value=values[key],isNested=value&&"object"==typeof value,field=mainEl.appendChild(createElement("div","node-field",'<span class="node-field-label">'+key+"</span><span>"+(isNested?'<span class="connection-dot"></span>':"function"==typeof value?"[function]":JSON.stringify(value))+"</span>")),stackValue=getNodeValue(matchStack?.[0]?.syntax),nodeValue=getNodeValue(value.syntax);"match"===key&&stackValue&&nodeValue&&stackValue!==nodeValue&&null===unMatchedDepth&&(unMatchedDepth=depth,isParentMatch=!1),"else"===key&&unMatchedDepth===depth&&(unMatchedDepth=null,isParentMatch=!0),isNested&&(walk(value,nestedEl,depth+1)?nestedSimpleEl=elByNode.get(value):nestedEl!==nestedSimpleEl&&nestedSimpleEl.content.appendChild(elByNode.get(value).root),connections.push({from:field.lastChild?.lastChild,to:elByNode.get(value)?.main,num:nestedOffset.count++,total:nestedOffset}))}}}return container.appendChild(el),"If"===node.type&&ifStack.pop(),complex},visited=new Map,elByNode=new Map,ifStack=[],laterConnections=[];let unMatchedDepth=null,isParentMatch=!0;const connections=[],matchTreeEl=createElement("div","graph");let matchTreeConnectionsEl;return walk(data.match,matchTreeEl),matchTreeConnectionsEl=createSvgElement("svg","connections-canvas"),setTimeout((()=>{const baseBox=matchTreeEl.getBoundingClientRect();connections.map((function(connection){const from=connection.from?.getBoundingClientRect(),to=connection.to.getBoundingClientRect(),back=from.right>to.left,x1=from.right-baseBox.left,y1=from.top-baseBox.top+from.height/2,x2=(back?to.right+1:to.left-1)-baseBox.left-7,y2=to.top-baseBox.top+10,midX=back?16:12+5*Math.abs(connection.num-connection.total.count);if(y1===y2)return["M",x1,y1,"H",x2].join(" ");const arc=Math.abs(y1-y2)>16?8:0,arcY=y2<y1?-arc:arc;return["M",x1,y1,"h",midX-arc,"q",[arc,0],[arc,arcY],"V",y2-arcY,"q",[0,arcY],[back?-arc:arc,arcY],"H",x2].join(" ")})).forEach((function(path){matchTreeConnectionsEl.appendChild(createSvgElement("path",{class:"connection",d:path}))}))}),100),(0,jsx_runtime.jsxs)("div",{className:"view-match-graph",children:[(0,jsx_runtime.jsx)(MatchGraphConnectionMarker,{}),(0,jsx_runtime.jsx)("div",{className:"canvas",ref:ref=>{0===ref?.childElementCount&&ref.append(matchTreeConnectionsEl,matchTreeEl)}})]})};MatchGraph_MatchGraph_MatchGraph.displayName="MatchGraph";var components_MatchGraph_MatchGraph=MatchGraph_MatchGraph_MatchGraph;try{MatchGraph_MatchGraph_MatchGraph.displayName="MatchGraph",MatchGraph_MatchGraph_MatchGraph.__docgenInfo={description:"",displayName:"MatchGraph",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/MatchGraph/MatchGraph.tsx#MatchGraph"]={docgenInfo:MatchGraph_MatchGraph_MatchGraph.__docgenInfo,name:"MatchGraph",path:"src/components/MatchGraph/MatchGraph.tsx#MatchGraph"})}catch(__react_docgen_typescript_loader_error){}var MatchGraph_stories={title:"Example/MatchGraph",component:components_MatchGraph_MatchGraph,argTypes:{}};const Border={args:{name:"border",value:"1px solid red"}},LinearGradient={args:{name:"linear-gradient()",value:"red, blue"}},BorderRadius={args:{name:"border-radius"}},Width={args:{name:"width"}},WidthFit={args:{name:"width",value:"fit-content(30px)"}};Border.parameters={...Border.parameters,docs:{...Border.parameters?.docs,source:{originalSource:"{\n  args: {\n    name: 'border',\n    value: '1px solid red'\n  }\n}",...Border.parameters?.docs?.source}}},LinearGradient.parameters={...LinearGradient.parameters,docs:{...LinearGradient.parameters?.docs,source:{originalSource:"{\n  args: {\n    name: 'linear-gradient()',\n    value: 'red, blue'\n  }\n}",...LinearGradient.parameters?.docs?.source}}},BorderRadius.parameters={...BorderRadius.parameters,docs:{...BorderRadius.parameters?.docs,source:{originalSource:"{\n  args: {\n    name: 'border-radius'\n  }\n}",...BorderRadius.parameters?.docs?.source}}},Width.parameters={...Width.parameters,docs:{...Width.parameters?.docs,source:{originalSource:"{\n  args: {\n    name: 'width'\n  }\n}",...Width.parameters?.docs?.source}}},WidthFit.parameters={...WidthFit.parameters,docs:{...WidthFit.parameters?.docs,source:{originalSource:"{\n  args: {\n    name: 'width',\n    value: 'fit-content(30px)'\n  }\n}",...WidthFit.parameters?.docs?.source}}};const __namedExportsOrder=["Border","LinearGradient","BorderRadius","Width","WidthFit"]},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/MatchGraph/MatchGraph.css":function(module,__webpack_exports__,__webpack_require__){var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".view-match-graph {\n    position: relative;\n    white-space: pre;\n    line-height: 12px;\n    overflow: auto;\n}\n\n.view-match-graph .node-count::after {\n    content: ' node(s)';\n}\n\n.view-match-graph .canvas {\n    position: relative;\n    display: inline-block;\n    min-width: 100%;\n}\n.view-match-graph .connections-canvas {\n    position: absolute;\n    height: 0;\n    min-height: 100%;\n    min-width: 100%;\n    border-radius: 3px;\n    background: rgba(100, 150, 200, .05);\n    background-size: 15px 15px;\n    background-image: linear-gradient(-45deg, transparent 8px, rgba(180, 180, 180, 0.2) 8px , rgba(180, 180, 180, 0.2) 9px, transparent 0);\n}\n.dark .view-match-graph .connections-canvas {\n    background: rgba(100, 150, 200, .15);\n    background-size: 15px 15px;\n    background-image: linear-gradient(-45deg, transparent 8px, rgba(200, 200, 200, 0.2) 8px , rgba(200, 200, 200, 0.2) 9px, transparent 0);\n}\n.view-match-graph .connections-canvas .connection {\n    stroke: rgba(153, 153, 153, 0.5);\n    stroke-width: 2;\n    fill: transparent;\n    stroke-linejoin: round;\n    marker-end: url(#match-graph-connection-marker);\n    pointer-events: all;\n}\n.dark .view-match-graph .connections-canvas .connection {\n    stroke: rgb(190, 190, 190);\n}\n\n.view-match-graph .graph {\n    position: relative;\n    padding: 20px;\n}\n\n.view-match-graph .node-wrapper {\n    display: flex;\n    align-items: flex-start;\n    border: solid transparent;\n    border-width: 1px 2px;\n}\n.view-match-graph .node-content > .node-wrapper {\n    border-width: 2px 0 0;\n}\n.view-match-graph .node {\n    vertical-align: top;\n    display: inline-block;\n    color: black;\n    background: rgba(220, 220, 220, .5);\n    font-size: 12px;\n}\n.view-match-graph .nested {\n    display: inline-block;\n    padding-left: 40px;\n}\n.view-match-graph .nested_labeled {\n    padding-top: 21px;\n}\n.view-match-graph .node_default {\n    border-radius: 3px;\n    box-shadow: inset 0 0 2px rgba(0, 0, 0, .05);\n}\n.view-match-graph .node_check {\n    background: rgba(150, 200, 255, .35);\n    padding: 0;\n    border-radius: 3px;\n}\n.view-match-graph .node_check:has(.match) {\n    background-color: rgb(0 54 95);\n    font-weight: bold;\n    color: white;\n}\n.view-match-graph .node_check:has(.match) a {\n    color: white !important;\n    opacity: 1;\n}\n.dark .view-match-graph .node_check {\n    background: rgb(28 67 109);\n}\n.view-match-graph .node_check a {\n    color: var(--discovery-color);\n    opacity: .8;\n    text-decoration-color: currentColor;\n}\n.view-match-graph .node_check a:hover {\n    opacity: 1;\n}\n.view-match-graph .node__label {\n    display: inline-block;\n    padding: 4px;\n    font-size: 10px;\n    text-transform: uppercase;\n    color: var(--discovery-color);\n    background-color: rgba(0, 0, 0, .1);\n    border-radius: 3px 0 0 3px;\n}\n.view-match-graph .node__key {\n    display: inline-block;\n    color: var(--discovery-color);\n    padding: 3px 8px;\n    font-size: 12px;\n}\n.dark .view-match-graph :is(.node__key, .node__label) {\n    color: white;\n}\n.view-match-graph .node__label.match {\n    background-color: rgb(7 157 0);\n    color: white;\n    font-weight: bold;\n    text-decoration: underline;\n}\n.dark .view-match-graph .node__label {\n    background-color: rgba(0, 0, 0, .3);\n}\n.dark .view-match-graph .node__label.match {\n    background-color: rgb(182 255 0);\n    color: black;\n}\n\n.view-match-graph .node__type {\n    background: rgba(0, 0, 0, .2);\n    padding: 4px 4px;\n    text-transform: uppercase;\n    font-size: 10px;\n    text-align: center;\n    border-radius: 3px 3px 0 0;\n}\n.dark .view-match-graph .node__type {\n    background: rgba(0, 0, 0, .4);\n    color: white;\n}\n.view-match-graph .node-field {\n    position: relative;\n    padding: 5px 4px;\n    font-size: 12px;\n}\n.view-match-graph .node-field-label {\n    padding: 0 4px;\n}\n.view-match-graph .node_match,\n.view-match-graph .node_mismatch,\n.view-match-graph .node_disallow-empty,\n.view-match-graph .node_recursive {\n    opacity: .75;\n    background: #0A0;\n    padding: 4px;\n    color: white;\n    font-size: 10px;\n    text-transform: uppercase;\n    border-radius: 3px;\n    box-shadow: none;\n}\n.view-match-graph .node_mismatch {\n    background: #D00;\n}\n.view-match-graph .node_disallow-empty {\n    background: orange;\n}\n.view-match-graph .node_recursive {\n    visibility: hidden;\n}\n.view-match-graph .connection-dot {\n    position: absolute;\n    right: -3px;\n    top: 50%;\n    margin-top: -3px;\n    display: inline-block;\n    width: 8px;\n    height: 8px;\n    border-radius: 50%;\n    background: rgba(170, 170, 170, 0.6);\n}\n.dark .view-match-graph .connection-dot {\n    background: rgb(190, 190, 190);\n}\n.view-match-graph .match-graph-connection-end {\n    fill: rgba(160, 160, 160, 0.65);\n}\n.dark .view-match-graph .match-graph-connection-end {\n    fill: rgb(190, 190, 190);\n}\n\n","",{version:3,sources:["webpack://./src/components/MatchGraph/MatchGraph.css"],names:[],mappings:"AAAA;IACI,kBAAkB;IAClB,gBAAgB;IAChB,iBAAiB;IACjB,cAAc;AAClB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,qBAAqB;IACrB,eAAe;AACnB;AACA;IACI,kBAAkB;IAClB,SAAS;IACT,gBAAgB;IAChB,eAAe;IACf,kBAAkB;IAClB,oCAAoC;IACpC,0BAA0B;IAC1B,sIAAsI;AAC1I;AACA;IACI,oCAAoC;IACpC,0BAA0B;IAC1B,sIAAsI;AAC1I;AACA;IACI,gCAAgC;IAChC,eAAe;IACf,iBAAiB;IACjB,sBAAsB;IACtB,+CAA+C;IAC/C,mBAAmB;AACvB;AACA;IACI,0BAA0B;AAC9B;;AAEA;IACI,kBAAkB;IAClB,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,yBAAyB;IACzB,qBAAqB;AACzB;AACA;IACI,qBAAqB;AACzB;AACA;IACI,mBAAmB;IACnB,qBAAqB;IACrB,YAAY;IACZ,mCAAmC;IACnC,eAAe;AACnB;AACA;IACI,qBAAqB;IACrB,kBAAkB;AACtB;AACA;IACI,iBAAiB;AACrB;AACA;IACI,kBAAkB;IAClB,4CAA4C;AAChD;AACA;IACI,oCAAoC;IACpC,UAAU;IACV,kBAAkB;AACtB;AACA;IACI,8BAA8B;IAC9B,iBAAiB;IACjB,YAAY;AAChB;AACA;IACI,uBAAuB;IACvB,UAAU;AACd;AACA;IACI,0BAA0B;AAC9B;AACA;IACI,6BAA6B;IAC7B,WAAW;IACX,mCAAmC;AACvC;AACA;IACI,UAAU;AACd;AACA;IACI,qBAAqB;IACrB,YAAY;IACZ,eAAe;IACf,yBAAyB;IACzB,6BAA6B;IAC7B,mCAAmC;IACnC,0BAA0B;AAC9B;AACA;IACI,qBAAqB;IACrB,6BAA6B;IAC7B,gBAAgB;IAChB,eAAe;AACnB;AACA;IACI,YAAY;AAChB;AACA;IACI,8BAA8B;IAC9B,YAAY;IACZ,iBAAiB;IACjB,0BAA0B;AAC9B;AACA;IACI,mCAAmC;AACvC;AACA;IACI,gCAAgC;IAChC,YAAY;AAChB;;AAEA;IACI,6BAA6B;IAC7B,gBAAgB;IAChB,yBAAyB;IACzB,eAAe;IACf,kBAAkB;IAClB,0BAA0B;AAC9B;AACA;IACI,6BAA6B;IAC7B,YAAY;AAChB;AACA;IACI,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;AACnB;AACA;IACI,cAAc;AAClB;AACA;;;;IAII,YAAY;IACZ,gBAAgB;IAChB,YAAY;IACZ,YAAY;IACZ,eAAe;IACf,yBAAyB;IACzB,kBAAkB;IAClB,gBAAgB;AACpB;AACA;IACI,gBAAgB;AACpB;AACA;IACI,kBAAkB;AACtB;AACA;IACI,kBAAkB;AACtB;AACA;IACI,kBAAkB;IAClB,WAAW;IACX,QAAQ;IACR,gBAAgB;IAChB,qBAAqB;IACrB,UAAU;IACV,WAAW;IACX,kBAAkB;IAClB,oCAAoC;AACxC;AACA;IACI,8BAA8B;AAClC;AACA;IACI,+BAA+B;AACnC;AACA;IACI,wBAAwB;AAC5B",sourcesContent:[".view-match-graph {\n    position: relative;\n    white-space: pre;\n    line-height: 12px;\n    overflow: auto;\n}\n\n.view-match-graph .node-count::after {\n    content: ' node(s)';\n}\n\n.view-match-graph .canvas {\n    position: relative;\n    display: inline-block;\n    min-width: 100%;\n}\n.view-match-graph .connections-canvas {\n    position: absolute;\n    height: 0;\n    min-height: 100%;\n    min-width: 100%;\n    border-radius: 3px;\n    background: rgba(100, 150, 200, .05);\n    background-size: 15px 15px;\n    background-image: linear-gradient(-45deg, transparent 8px, rgba(180, 180, 180, 0.2) 8px , rgba(180, 180, 180, 0.2) 9px, transparent 0);\n}\n.dark .view-match-graph .connections-canvas {\n    background: rgba(100, 150, 200, .15);\n    background-size: 15px 15px;\n    background-image: linear-gradient(-45deg, transparent 8px, rgba(200, 200, 200, 0.2) 8px , rgba(200, 200, 200, 0.2) 9px, transparent 0);\n}\n.view-match-graph .connections-canvas .connection {\n    stroke: rgba(153, 153, 153, 0.5);\n    stroke-width: 2;\n    fill: transparent;\n    stroke-linejoin: round;\n    marker-end: url(#match-graph-connection-marker);\n    pointer-events: all;\n}\n.dark .view-match-graph .connections-canvas .connection {\n    stroke: rgb(190, 190, 190);\n}\n\n.view-match-graph .graph {\n    position: relative;\n    padding: 20px;\n}\n\n.view-match-graph .node-wrapper {\n    display: flex;\n    align-items: flex-start;\n    border: solid transparent;\n    border-width: 1px 2px;\n}\n.view-match-graph .node-content > .node-wrapper {\n    border-width: 2px 0 0;\n}\n.view-match-graph .node {\n    vertical-align: top;\n    display: inline-block;\n    color: black;\n    background: rgba(220, 220, 220, .5);\n    font-size: 12px;\n}\n.view-match-graph .nested {\n    display: inline-block;\n    padding-left: 40px;\n}\n.view-match-graph .nested_labeled {\n    padding-top: 21px;\n}\n.view-match-graph .node_default {\n    border-radius: 3px;\n    box-shadow: inset 0 0 2px rgba(0, 0, 0, .05);\n}\n.view-match-graph .node_check {\n    background: rgba(150, 200, 255, .35);\n    padding: 0;\n    border-radius: 3px;\n}\n.view-match-graph .node_check:has(.match) {\n    background-color: rgb(0 54 95);\n    font-weight: bold;\n    color: white;\n}\n.view-match-graph .node_check:has(.match) a {\n    color: white !important;\n    opacity: 1;\n}\n.dark .view-match-graph .node_check {\n    background: rgb(28 67 109);\n}\n.view-match-graph .node_check a {\n    color: var(--discovery-color);\n    opacity: .8;\n    text-decoration-color: currentColor;\n}\n.view-match-graph .node_check a:hover {\n    opacity: 1;\n}\n.view-match-graph .node__label {\n    display: inline-block;\n    padding: 4px;\n    font-size: 10px;\n    text-transform: uppercase;\n    color: var(--discovery-color);\n    background-color: rgba(0, 0, 0, .1);\n    border-radius: 3px 0 0 3px;\n}\n.view-match-graph .node__key {\n    display: inline-block;\n    color: var(--discovery-color);\n    padding: 3px 8px;\n    font-size: 12px;\n}\n.dark .view-match-graph :is(.node__key, .node__label) {\n    color: white;\n}\n.view-match-graph .node__label.match {\n    background-color: rgb(7 157 0);\n    color: white;\n    font-weight: bold;\n    text-decoration: underline;\n}\n.dark .view-match-graph .node__label {\n    background-color: rgba(0, 0, 0, .3);\n}\n.dark .view-match-graph .node__label.match {\n    background-color: rgb(182 255 0);\n    color: black;\n}\n\n.view-match-graph .node__type {\n    background: rgba(0, 0, 0, .2);\n    padding: 4px 4px;\n    text-transform: uppercase;\n    font-size: 10px;\n    text-align: center;\n    border-radius: 3px 3px 0 0;\n}\n.dark .view-match-graph .node__type {\n    background: rgba(0, 0, 0, .4);\n    color: white;\n}\n.view-match-graph .node-field {\n    position: relative;\n    padding: 5px 4px;\n    font-size: 12px;\n}\n.view-match-graph .node-field-label {\n    padding: 0 4px;\n}\n.view-match-graph .node_match,\n.view-match-graph .node_mismatch,\n.view-match-graph .node_disallow-empty,\n.view-match-graph .node_recursive {\n    opacity: .75;\n    background: #0A0;\n    padding: 4px;\n    color: white;\n    font-size: 10px;\n    text-transform: uppercase;\n    border-radius: 3px;\n    box-shadow: none;\n}\n.view-match-graph .node_mismatch {\n    background: #D00;\n}\n.view-match-graph .node_disallow-empty {\n    background: orange;\n}\n.view-match-graph .node_recursive {\n    visibility: hidden;\n}\n.view-match-graph .connection-dot {\n    position: absolute;\n    right: -3px;\n    top: 50%;\n    margin-top: -3px;\n    display: inline-block;\n    width: 8px;\n    height: 8px;\n    border-radius: 50%;\n    background: rgba(170, 170, 170, 0.6);\n}\n.dark .view-match-graph .connection-dot {\n    background: rgb(190, 190, 190);\n}\n.view-match-graph .match-graph-connection-end {\n    fill: rgba(160, 160, 160, 0.65);\n}\n.dark .view-match-graph .match-graph-connection-end {\n    fill: rgb(190, 190, 190);\n}\n\n"],sourceRoot:""}]),__webpack_exports__.Z=___CSS_LOADER_EXPORT___}}]);