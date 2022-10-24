(self.webpackChunkmatch_graph=self.webpackChunkmatch_graph||[]).push([[179],{"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/MatchGraph/MatchGraph.css":function(module,__webpack_exports__,__webpack_require__){"use strict";var _node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/cssWithMappingToString.js"),_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".view-match-graph {\n    position: relative;\n    white-space: pre;\n    line-height: 12px;;\n}\n\n.view-match-graph .node-count::after {\n    content: ' node(s)';\n}\n\n.view-match-graph .canvas {\n    position: relative;\n    display: inline-block;\n    min-width: 100%;\n}\n.view-match-graph .connections-canvas {\n    position: absolute;\n    height: 0;\n    min-height: 100%;\n    min-width: 100%;\n    background: rgba(100, 150, 200, .05);\n    background-size: 15px 15px;\n    background-image: linear-gradient(-45deg, transparent 8px, rgba(180, 180, 180, 0.2) 8px , rgba(180, 180, 180, 0.2) 9px, transparent 0);\n}\n.view-match-graph .connections-canvas .connection {\n    stroke: rgba(153, 153, 153, 0.5);\n    stroke-width: 2;\n    fill: transparent;\n    stroke-linejoin: round;\n    marker-end: url(#match-graph-connection-marker);\n    pointer-events: all;\n}\n\n.view-match-graph .graph {\n    position: relative;\n    padding: 20px;\n}\n\n.view-match-graph .node-wrapper {\n    display: flex;\n    align-items: flex-start;\n    border: solid transparent;\n    border-width: 1px 2px;\n}\n.view-match-graph .node-content > .node-wrapper {\n    border-width: 2px 0 0;\n}\n.view-match-graph .node {\n    vertical-align: top;\n    display: inline-block;\n    color: black;\n    background: rgba(220, 220, 220, .5);\n    font-size: 12px;\n}\n.view-match-graph .nested {\n    display: inline-block;\n    padding-left: 40px;\n}\n.view-match-graph .nested_labeled {\n    padding-top: 21px;\n}\n.view-match-graph .node_default {\n    border-radius: 3px;\n    box-shadow: inset 0 0 2px rgba(0, 0, 0, .05);\n}\n.view-match-graph .node_check {\n    background: rgba(150, 200, 255, .35);\n    padding: 0;\n    border-radius: 3px;\n}\n.view-match-graph .node_check a {\n    color: var(--discovery-color);\n    opacity: .8;\n    text-decoration-color: currentColor;\n}\n.view-match-graph .node_check a:hover {\n    opacity: 1;\n}\n.view-match-graph .node__label {\n    display: inline-block;\n    padding: 4px;\n    font-size: 10px;\n    text-transform: uppercase;\n    color: var(--discovery-color);\n    background-color: rgba(0, 0, 0, .1);\n    border-radius: 3px 0 0 3px;\n}\n.view-match-graph .node__key {\n    display: inline-block;\n    color: var(--discovery-color);\n    padding: 3px 8px;\n    font-size: 12px;\n}\n.view-match-graph .node__type {\n    background: rgba(0, 0, 0, .2);\n    padding: 4px 4px;\n    text-transform: uppercase;\n    font-size: 10px;\n    text-align: center;\n    border-radius: 3px 3px 0 0;\n}\n.view-match-graph .node-field {\n    position: relative;\n    padding: 5px 4px;\n    font-size: 12px;\n}\n.view-match-graph .node-field-label {\n    padding: 0 4px;\n}\n.view-match-graph .node_match,\n.view-match-graph .node_mismatch,\n.view-match-graph .node_disallow-empty,\n.view-match-graph .node_recursive {\n    opacity: .75;\n    background: #0A0;\n    padding: 4px;\n    color: white;\n    font-size: 10px;\n    text-transform: uppercase;\n    border-radius: 3px;\n    box-shadow: none;\n}\n.view-match-graph .node_mismatch {\n    background: #D00;\n}\n.view-match-graph .node_disallow-empty {\n    background: orange;\n}\n.view-match-graph .node_recursive {\n    visibility: hidden;\n}\n.view-match-graph .connection-dot {\n    position: absolute;\n    right: -3px;\n    top: 50%;\n    margin-top: -3px;\n    display: inline-block;\n    width: 8px;\n    height: 8px;\n    border-radius: 50%;\n    background: rgba(170, 170, 170, 0.6);\n}\n\n","",{version:3,sources:["webpack://./src/components/MatchGraph/MatchGraph.css"],names:[],mappings:"AAAA;IACI,kBAAkB;IAClB,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,qBAAqB;IACrB,eAAe;AACnB;AACA;IACI,kBAAkB;IAClB,SAAS;IACT,gBAAgB;IAChB,eAAe;IACf,oCAAoC;IACpC,0BAA0B;IAC1B,sIAAsI;AAC1I;AACA;IACI,gCAAgC;IAChC,eAAe;IACf,iBAAiB;IACjB,sBAAsB;IACtB,+CAA+C;IAC/C,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,yBAAyB;IACzB,qBAAqB;AACzB;AACA;IACI,qBAAqB;AACzB;AACA;IACI,mBAAmB;IACnB,qBAAqB;IACrB,YAAY;IACZ,mCAAmC;IACnC,eAAe;AACnB;AACA;IACI,qBAAqB;IACrB,kBAAkB;AACtB;AACA;IACI,iBAAiB;AACrB;AACA;IACI,kBAAkB;IAClB,4CAA4C;AAChD;AACA;IACI,oCAAoC;IACpC,UAAU;IACV,kBAAkB;AACtB;AACA;IACI,6BAA6B;IAC7B,WAAW;IACX,mCAAmC;AACvC;AACA;IACI,UAAU;AACd;AACA;IACI,qBAAqB;IACrB,YAAY;IACZ,eAAe;IACf,yBAAyB;IACzB,6BAA6B;IAC7B,mCAAmC;IACnC,0BAA0B;AAC9B;AACA;IACI,qBAAqB;IACrB,6BAA6B;IAC7B,gBAAgB;IAChB,eAAe;AACnB;AACA;IACI,6BAA6B;IAC7B,gBAAgB;IAChB,yBAAyB;IACzB,eAAe;IACf,kBAAkB;IAClB,0BAA0B;AAC9B;AACA;IACI,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;AACnB;AACA;IACI,cAAc;AAClB;AACA;;;;IAII,YAAY;IACZ,gBAAgB;IAChB,YAAY;IACZ,YAAY;IACZ,eAAe;IACf,yBAAyB;IACzB,kBAAkB;IAClB,gBAAgB;AACpB;AACA;IACI,gBAAgB;AACpB;AACA;IACI,kBAAkB;AACtB;AACA;IACI,kBAAkB;AACtB;AACA;IACI,kBAAkB;IAClB,WAAW;IACX,QAAQ;IACR,gBAAgB;IAChB,qBAAqB;IACrB,UAAU;IACV,WAAW;IACX,kBAAkB;IAClB,oCAAoC;AACxC",sourcesContent:[".view-match-graph {\n    position: relative;\n    white-space: pre;\n    line-height: 12px;;\n}\n\n.view-match-graph .node-count::after {\n    content: ' node(s)';\n}\n\n.view-match-graph .canvas {\n    position: relative;\n    display: inline-block;\n    min-width: 100%;\n}\n.view-match-graph .connections-canvas {\n    position: absolute;\n    height: 0;\n    min-height: 100%;\n    min-width: 100%;\n    background: rgba(100, 150, 200, .05);\n    background-size: 15px 15px;\n    background-image: linear-gradient(-45deg, transparent 8px, rgba(180, 180, 180, 0.2) 8px , rgba(180, 180, 180, 0.2) 9px, transparent 0);\n}\n.view-match-graph .connections-canvas .connection {\n    stroke: rgba(153, 153, 153, 0.5);\n    stroke-width: 2;\n    fill: transparent;\n    stroke-linejoin: round;\n    marker-end: url(#match-graph-connection-marker);\n    pointer-events: all;\n}\n\n.view-match-graph .graph {\n    position: relative;\n    padding: 20px;\n}\n\n.view-match-graph .node-wrapper {\n    display: flex;\n    align-items: flex-start;\n    border: solid transparent;\n    border-width: 1px 2px;\n}\n.view-match-graph .node-content > .node-wrapper {\n    border-width: 2px 0 0;\n}\n.view-match-graph .node {\n    vertical-align: top;\n    display: inline-block;\n    color: black;\n    background: rgba(220, 220, 220, .5);\n    font-size: 12px;\n}\n.view-match-graph .nested {\n    display: inline-block;\n    padding-left: 40px;\n}\n.view-match-graph .nested_labeled {\n    padding-top: 21px;\n}\n.view-match-graph .node_default {\n    border-radius: 3px;\n    box-shadow: inset 0 0 2px rgba(0, 0, 0, .05);\n}\n.view-match-graph .node_check {\n    background: rgba(150, 200, 255, .35);\n    padding: 0;\n    border-radius: 3px;\n}\n.view-match-graph .node_check a {\n    color: var(--discovery-color);\n    opacity: .8;\n    text-decoration-color: currentColor;\n}\n.view-match-graph .node_check a:hover {\n    opacity: 1;\n}\n.view-match-graph .node__label {\n    display: inline-block;\n    padding: 4px;\n    font-size: 10px;\n    text-transform: uppercase;\n    color: var(--discovery-color);\n    background-color: rgba(0, 0, 0, .1);\n    border-radius: 3px 0 0 3px;\n}\n.view-match-graph .node__key {\n    display: inline-block;\n    color: var(--discovery-color);\n    padding: 3px 8px;\n    font-size: 12px;\n}\n.view-match-graph .node__type {\n    background: rgba(0, 0, 0, .2);\n    padding: 4px 4px;\n    text-transform: uppercase;\n    font-size: 10px;\n    text-align: center;\n    border-radius: 3px 3px 0 0;\n}\n.view-match-graph .node-field {\n    position: relative;\n    padding: 5px 4px;\n    font-size: 12px;\n}\n.view-match-graph .node-field-label {\n    padding: 0 4px;\n}\n.view-match-graph .node_match,\n.view-match-graph .node_mismatch,\n.view-match-graph .node_disallow-empty,\n.view-match-graph .node_recursive {\n    opacity: .75;\n    background: #0A0;\n    padding: 4px;\n    color: white;\n    font-size: 10px;\n    text-transform: uppercase;\n    border-radius: 3px;\n    box-shadow: none;\n}\n.view-match-graph .node_mismatch {\n    background: #D00;\n}\n.view-match-graph .node_disallow-empty {\n    background: orange;\n}\n.view-match-graph .node_recursive {\n    visibility: hidden;\n}\n.view-match-graph .connection-dot {\n    position: absolute;\n    right: -3px;\n    top: 50%;\n    margin-top: -3px;\n    display: inline-block;\n    width: 8px;\n    height: 8px;\n    border-radius: 50%;\n    background: rgba(170, 170, 170, 0.6);\n}\n\n"],sourceRoot:""}]),__webpack_exports__.Z=___CSS_LOADER_EXPORT___},"./.storybook/preview.js-generated-config-entry.js":function(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__){"use strict";var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,{__namedExportsOrder:function(){return __namedExportsOrder},parameters:function(){return parameters}});__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}},__namedExportsOrder=["parameters"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":return(0,ClientApi.uc)(value);case"argTypes":return(0,ClientApi.v9)(value);case"decorators":return value.forEach((function(decorator){return(0,ClientApi.$9)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return(0,ClientApi.HZ)(loader,!1)}));case"parameters":return(0,ClientApi.h1)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return(0,ClientApi.My)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return(0,ClientApi._C)(enhancer)}));case"render":return(0,ClientApi.$P)(value);case"globals":case"globalTypes":var v={};return v[key]=value,(0,ClientApi.h1)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./src/stories/MatchGraph.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Border:function(){return Border},BorderRadius:function(){return BorderRadius},LinearGradient:function(){return LinearGradient},Width:function(){return Width},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return MatchGraph_stories}});__webpack_require__("./node_modules/core-js/modules/es.object.assign.js");var react=__webpack_require__("./node_modules/react/index.js"),lib=(__webpack_require__("./node_modules/core-js/modules/es.string.starts-with.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.string.match.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.exec.js"),__webpack_require__("./node_modules/core-js/modules/es.array.map.js"),__webpack_require__("./node_modules/core-js/modules/es.map.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js"),__webpack_require__("./node_modules/css-tree/lib/index.js")),injectStylesIntoStyleTag=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),MatchGraph=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/MatchGraph/MatchGraph.css"),options={insert:"head",singleton:!1},jsx_runtime=(injectStylesIntoStyleTag_default()(MatchGraph.Z,options),MatchGraph.Z.locals,__webpack_require__("./node_modules/react/jsx-runtime.js"));function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function setupElement(el,attrs,children){for(var attrName in"string"==typeof attrs&&(attrs={class:attrs}),attrs)attrName.startsWith("on")?el.addEventListener(attrName.substring(2),attrs[attrName]):el.setAttribute(attrName,attrs[attrName]);return Array.isArray(children)?children.forEach((function(child){return el.appendChild(child&&child.nodeType?child:function createText(text){return document.createTextNode(String(text))}(child))})):"string"==typeof children&&(el.innerHTML=children),el}function createElement(tag,attrs,children){return setupElement(document.createElement(tag),attrs,children)}function createSvgElement(tag,attrs,children){return setupElement(document.createElementNS("http://www.w3.org/2000/svg",tag),attrs,children)}var SYNTAX_URL="https://csstree.github.io/docs/syntax/",MatchGraph_MatchGraph_MatchGraph=function MatchGraph(props){var _csstree$lexer$getPro,_useState2=_slicedToArray((0,react.useState)(!1),2),onShow=_useState2[0],setOnShow=_useState2[1];if((0,react.useEffect)((function(){setOnShow(!0)}),[]),!onShow||"undefined"==typeof window)return null;var name=props.name,match=null!==(_csstree$lexer$getPro=lib.cV.getProperty(name))&&void 0!==_csstree$lexer$getPro?_csstree$lexer$getPro:lib.cV.getType(name);if(null===match)return null;var matchTreeConnectionsEl,visited=new Map,elByNode=new Map,ifStack=[],laterConnections=[],connections=[],matchTreeEl=createElement("div","graph");return function walk(node,container){if("MatchGraph"===node.type)return walk(node.match,container);var el,contentEl,mainEl,complex=!1;if(el=createElement("div","node-wrapper",[contentEl=createElement("div","node-content",[mainEl=createElement("div","node")])]),visited.has(node))return mainEl.classList.add("node_recursive"),mainEl.innerHTML="Recursive",container.appendChild(el),!0;switch("If"===node.type&&(visited.set(node,node.value),ifStack.push(node)),elByNode.set(node,{root:el,content:contentEl,main:mainEl}),node.type){case"Match":mainEl.classList.add("node_match"),mainEl.innerHTML=node.type;for(var toNode=null,i=ifStack.length-1,prev=node;i>=0;i--){var ifStackItem=ifStack[i];if(prev===ifStackItem.then){toNode=ifStackItem.then;break}prev=ifStackItem}null!==toNode&&laterConnections.push({from:mainEl,to:toNode,num:0,total:{count:0}});break;case"Mismatch":mainEl.classList.add("node_mismatch"),mainEl.innerHTML=node.type;for(var _toNode=null,_i2=ifStack.length-1,_prev=node;_i2>=0;_i2--){var _ifStackItem=ifStack[_i2];if(_prev===_ifStackItem.then){_toNode=_ifStackItem.else;break}_prev=_ifStackItem}null!==_toNode&&laterConnections.push({from:mainEl,to:_toNode,num:0,total:{count:0}});break;case"DisallowEmpty":mainEl.classList.add("node_disallow-empty"),mainEl.innerHTML=node.type;break;case"Type":case"Property":case"Keyword":case"Function":case"Token":case"String":case"Comma":if(!node.match){var key=!1;switch(node.type){case"Type":key='<a href="'+SYNTAX_URL+"#Type:"+node.name+'" target="_blank">&lt;'+node.name+"&gt;</a>";break;case"Property":key='<a href="'+SYNTAX_URL+"#Property:"+node.name+'" target="_blank">&lt;\''+node.name+"'&gt;</a>";break;case"Function":case"Keyword":key=node.name;break;case"Token":case"String":key=node.value;break;case"Comma":key=","}mainEl.classList.add("node_check"),mainEl.innerHTML='<span class="node__label">'+node.type+'</span><span class="node__key">'+key+"</span>"}break;default:mainEl.classList.add("node_default");var nestedEl=el.appendChild(createElement("div","nested nested_labeled"));mainEl.appendChild(createElement("div","node__type",node.type)),complex=!0;var nestedSimpleEl=nestedEl,values="Enum"===node.type?node.map:node,nestedOffset={count:0};for(var _key in values)if((values!==node||"syntax"!==_key)&&"type"!==_key){var _field$lastChild,_elByNode$get,value=values[_key],isNested=value&&"object"==typeof value,field=mainEl.appendChild(createElement("div","node-field",'<span class="node-field-label">'+_key+"</span><span>"+(isNested?'<span class="connection-dot"></span>':"function"==typeof value?"[function]":JSON.stringify(value))+"</span>"));if(isNested)walk(value,nestedEl)?nestedSimpleEl=elByNode.get(value):nestedEl!==nestedSimpleEl&&nestedSimpleEl.content.appendChild(elByNode.get(value).root),connections.push({from:null===(_field$lastChild=field.lastChild)||void 0===_field$lastChild?void 0:_field$lastChild.lastChild,to:null===(_elByNode$get=elByNode.get(value))||void 0===_elByNode$get?void 0:_elByNode$get.main,num:nestedOffset.count++,total:nestedOffset})}}return container.appendChild(el),"If"===node.type&&ifStack.pop(),complex}(match.match,matchTreeEl),matchTreeConnectionsEl=createSvgElement("svg","connections-canvas"),setTimeout((function(){var baseBox=matchTreeEl.getBoundingClientRect();connections.map((function(connection){var _connection$from,from=null===(_connection$from=connection.from)||void 0===_connection$from?void 0:_connection$from.getBoundingClientRect(),to=connection.to.getBoundingClientRect(),back=from.right>to.left,x1=from.right-baseBox.left,y1=from.top-baseBox.top+from.height/2,x2=(back?to.right+1:to.left-1)-baseBox.left-7,y2=to.top-baseBox.top+10,midX=back?16:12+5*Math.abs(connection.num-connection.total.count);if(y1===y2)return["M",x1,y1,"H",x2].join(" ");var arc=Math.abs(y1-y2)>16?8:0,arcY=y2<y1?-arc:arc;return["M",x1,y1,"h",midX-arc,"q",[arc,0],[arc,arcY],"V",y2-arcY,"q",[0,arcY],[back?-arc:arc,arcY],"H",x2].join(" ")})).forEach((function(path){matchTreeConnectionsEl.appendChild(createSvgElement("path",{class:"connection",d:path}))}))}),0),(0,jsx_runtime.jsxs)("div",{className:"view-match-graph",children:[(0,jsx_runtime.jsx)(MatchGraphConnectionMarker,{}),(0,jsx_runtime.jsx)("div",{className:"canvas",ref:function ref(_ref){0===(null==_ref?void 0:_ref.childElementCount)&&_ref.append(matchTreeConnectionsEl,matchTreeEl)}})]})};MatchGraph_MatchGraph_MatchGraph.displayName="MatchGraph";var MatchGraphConnectionMarker=function MatchGraphConnectionMarker(){return(0,jsx_runtime.jsx)("svg",{style:{position:"absolute",zIndex:-1,width:0,height:0},children:(0,jsx_runtime.jsx)("marker",{id:"match-graph-connection-marker",viewBox:"0 0 5 10",refX:"0",refY:"5",markerUnits:"strokeWidth",markerWidth:"6",markerHeight:"4",orient:"auto",children:(0,jsx_runtime.jsx)("path",{d:"M 0 0 L 10 5 L 0 10 z",fill:"rgba(160, 160, 160, 0.65)"})})})};MatchGraphConnectionMarker.displayName="MatchGraphConnectionMarker";var components_MatchGraph_MatchGraph=(0,react.memo)(MatchGraph_MatchGraph_MatchGraph);try{MatchGraph_MatchGraph_MatchGraph.displayName="MatchGraph",MatchGraph_MatchGraph_MatchGraph.__docgenInfo={description:"",displayName:"MatchGraph",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/MatchGraph/MatchGraph.tsx#MatchGraph"]={docgenInfo:MatchGraph_MatchGraph_MatchGraph.__docgenInfo,name:"MatchGraph",path:"src/components/MatchGraph/MatchGraph.tsx#MatchGraph"})}catch(__react_docgen_typescript_loader_error){}var MatchGraph_stories={title:"Example/MatchGraph",component:components_MatchGraph_MatchGraph,argTypes:{}},Template=function Template(args){return(0,jsx_runtime.jsx)(components_MatchGraph_MatchGraph,Object.assign({},args))};Template.displayName="Template";var Border=Template.bind({});Border.args={name:"border"};var LinearGradient=Template.bind({});LinearGradient.args={name:"linear-gradient()"};var BorderRadius=Template.bind({});BorderRadius.args={name:"border-radius"};var Width=Template.bind({});Width.args={name:"width"},Border.parameters=Object.assign({storySource:{source:"(args) => <MatchGraph {...args} />"}},Border.parameters),LinearGradient.parameters=Object.assign({storySource:{source:"(args) => <MatchGraph {...args} />"}},LinearGradient.parameters),BorderRadius.parameters=Object.assign({storySource:{source:"(args) => <MatchGraph {...args} />"}},BorderRadius.parameters),Width.parameters=Object.assign({storySource:{source:"(args) => <MatchGraph {...args} />"}},Width.parameters);var __namedExportsOrder=["Border","LinearGradient","BorderRadius","Width"]},"./storybook-init-framework-entry.js":function(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__){"use strict";__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},"./src/stories/Introduction.stories.mdx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:function(){return __namedExportsOrder},__page:function(){return __page},default:function(){return Introduction_stories}});__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/react/index.js");var esm=__webpack_require__("./node_modules/@mdx-js/react/dist/esm.js"),dist_esm=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js"),code_brackets_namespaceObject=__webpack_require__.p+"static/media/code-brackets.2e1112d7.svg",colors_namespaceObject=__webpack_require__.p+"static/media/colors.a4bd0486.svg",comments_namespaceObject=__webpack_require__.p+"static/media/comments.a3859089.svg",direction_namespaceObject=__webpack_require__.p+"static/media/direction.b770f9af.svg",flow_namespaceObject=__webpack_require__.p+"static/media/flow.edad2ac1.svg",plugin_namespaceObject=__webpack_require__.p+"static/media/plugin.d494b228.svg",repo_namespaceObject=__webpack_require__.p+"static/media/repo.6d496322.svg",stackalt_namespaceObject=__webpack_require__.p+"static/media/stackalt.dba9fbb3.svg",_excluded=["components"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var layoutProps={};function MDXContent(_ref){var components=_ref.components,props=_objectWithoutProperties(_ref,_excluded);return(0,esm.kt)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,esm.kt)(dist_esm.h_,{title:"Example/Introduction",mdxType:"Meta"}),(0,esm.kt)("style",null,"\n    .subheading {\n      --mediumdark: '#999999';\n      font-weight: 900;\n      font-size: 13px;\n      color: #999;\n      letter-spacing: 6px;\n      line-height: 24px;\n      text-transform: uppercase;\n      margin-bottom: 12px;\n      margin-top: 40px;\n    }\n\n    .link-list {\n      display: grid;\n      grid-template-columns: 1fr;\n      grid-template-rows: 1fr 1fr;\n      row-gap: 10px;\n    }\n\n    @media (min-width: 620px) {\n      .link-list {\n        row-gap: 20px;\n        column-gap: 20px;\n        grid-template-columns: 1fr 1fr;\n      }\n    }\n\n    @media all and (-ms-high-contrast:none) {\n    .link-list {\n        display: -ms-grid;\n        -ms-grid-columns: 1fr 1fr;\n        -ms-grid-rows: 1fr 1fr;\n      }\n    }\n\n    .link-item {\n      display: block;\n      padding: 20px 30px 20px 15px;\n      border: 1px solid #00000010;\n      border-radius: 5px;\n      transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;\n      color: #333333;\n      display: flex;\n      align-items: flex-start;\n    }\n\n    .link-item:hover {\n      border-color: #1EA7FD50;\n      transform: translate3d(0, -3px, 0);\n      box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;\n    }\n\n    .link-item:active {\n      border-color: #1EA7FD;\n      transform: translate3d(0, 0, 0);\n    }\n\n    .link-item strong {\n      font-weight: 700;\n      display: block;\n      margin-bottom: 2px;\n    }\n\n    .link-item img {\n      height: 40px;\n      width: 40px;\n      margin-right: 15px;\n      flex: none;\n    }\n\n    .link-item span {\n      font-size: 14px;\n      line-height: 20px;\n    }\n\n    .tip {\n      display: inline-block;\n      border-radius: 1em;\n      font-size: 11px;\n      line-height: 12px;\n      font-weight: 700;\n      background: #E7FDD8;\n      color: #66BF3C;\n      padding: 4px 12px;\n      margin-right: 10px;\n      vertical-align: top;\n    }\n\n    .tip-wrapper {\n      font-size: 13px;\n      line-height: 20px;\n      margin-top: 40px;\n      margin-bottom: 40px;\n    }\n\n    .tip-wrapper code {\n      font-size: 12px;\n      display: inline-block;\n    }\n  "),(0,esm.kt)("h1",{id:"welcome-to-storybook"},"Welcome to Storybook"),(0,esm.kt)("p",null,"Storybook helps you build UI components in isolation from your app's business logic, data, and context.\nThat makes it easy to develop hard-to-reach states. Save these UI states as ",(0,esm.kt)("strong",{parentName:"p"},"stories")," to revisit during development, testing, or QA."),(0,esm.kt)("p",null,"Browse example stories now by navigating to them in the sidebar.\nView their code in the ",(0,esm.kt)("inlineCode",{parentName:"p"},"stories")," directory to learn how they work.\nWe recommend building UIs with a ",(0,esm.kt)("a",{parentName:"p",href:"https://componentdriven.org",target:"_blank",rel:"nofollow noopener noreferrer"},(0,esm.kt)("strong",{parentName:"a"},"component-driven"))," process starting with atomic components and ending with pages."),(0,esm.kt)("div",{className:"subheading"},"Configure"),(0,esm.kt)("div",{className:"link-list"},(0,esm.kt)("a",{className:"link-item",href:"https://storybook.js.org/docs/react/addons/addon-types",target:"_blank"},(0,esm.kt)("img",{src:plugin_namespaceObject,alt:"plugin"}),(0,esm.kt)("span",null,(0,esm.kt)("strong",null,"Presets for popular tools"),"Easy setup for TypeScript, SCSS and more.")),(0,esm.kt)("a",{className:"link-item",href:"https://storybook.js.org/docs/react/configure/webpack",target:"_blank"},(0,esm.kt)("img",{src:stackalt_namespaceObject,alt:"Build"}),(0,esm.kt)("span",null,(0,esm.kt)("strong",null,"Build configuration"),"How to customize webpack and Babel")),(0,esm.kt)("a",{className:"link-item",href:"https://storybook.js.org/docs/react/configure/styling-and-css",target:"_blank"},(0,esm.kt)("img",{src:colors_namespaceObject,alt:"colors"}),(0,esm.kt)("span",null,(0,esm.kt)("strong",null,"Styling"),"How to load and configure CSS libraries")),(0,esm.kt)("a",{className:"link-item",href:"https://storybook.js.org/docs/react/get-started/setup#configure-storybook-for-your-stack",target:"_blank"},(0,esm.kt)("img",{src:flow_namespaceObject,alt:"flow"}),(0,esm.kt)("span",null,(0,esm.kt)("strong",null,"Data"),"Providers and mocking for data libraries"))),(0,esm.kt)("div",{className:"subheading"},"Learn"),(0,esm.kt)("div",{className:"link-list"},(0,esm.kt)("a",{className:"link-item",href:"https://storybook.js.org/docs",target:"_blank"},(0,esm.kt)("img",{src:repo_namespaceObject,alt:"repo"}),(0,esm.kt)("span",null,(0,esm.kt)("strong",null,"Storybook documentation"),"Configure, customize, and extend")),(0,esm.kt)("a",{className:"link-item",href:"https://storybook.js.org/tutorials/",target:"_blank"},(0,esm.kt)("img",{src:direction_namespaceObject,alt:"direction"}),(0,esm.kt)("span",null,(0,esm.kt)("strong",null,"In-depth guides"),"Best practices from leading teams")),(0,esm.kt)("a",{className:"link-item",href:"https://github.com/storybookjs/storybook",target:"_blank"},(0,esm.kt)("img",{src:code_brackets_namespaceObject,alt:"code"}),(0,esm.kt)("span",null,(0,esm.kt)("strong",null,"GitHub project"),"View the source and add issues")),(0,esm.kt)("a",{className:"link-item",href:"https://discord.gg/storybook",target:"_blank"},(0,esm.kt)("img",{src:comments_namespaceObject,alt:"comments"}),(0,esm.kt)("span",null,(0,esm.kt)("strong",null,"Discord chat"),"Chat with maintainers and the community"))),(0,esm.kt)("div",{className:"tip-wrapper"},(0,esm.kt)("span",{className:"tip"},"Tip"),"Edit the Markdown in"," ",(0,esm.kt)("code",null,"stories/Introduction.stories.mdx")))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;var __page=function __page(){throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};var componentMeta={title:"Example/Introduction",includeStories:["__page"]},mdxStoryNameToKey={};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs=Object.assign({},componentMeta.parameters.docs||{},{page:function page(){return(0,esm.kt)(dist_esm.aT,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},(0,esm.kt)(MDXContent,null))}});var Introduction_stories=componentMeta,__namedExportsOrder=["__page"]},"./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$":function(module,__unused_webpack_exports,__webpack_require__){var map={"./stories/MatchGraph.stories.tsx":"./src/stories/MatchGraph.stories.tsx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$"},"./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$":function(module,__unused_webpack_exports,__webpack_require__){var map={"./stories/Introduction.stories.mdx":"./src/stories/Introduction.stories.mdx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$"},"?4f7e":function(){},"./generated-stories-entry.cjs":function(module,__unused_webpack_exports,__webpack_require__){"use strict";module=__webpack_require__.nmd(module),(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),__webpack_require__("./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$")],module,!1)}},function(__webpack_require__){var __webpack_exec__=function(moduleId){return __webpack_require__(__webpack_require__.s=moduleId)};__webpack_require__.O(0,[59],(function(){return __webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_exec__("./storybook-init-framework-entry.js"),__webpack_exec__("./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-links/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-interactions/preview.js-generated-config-entry.js"),__webpack_exec__("./.storybook/preview.js-generated-config-entry.js"),__webpack_exec__("./generated-stories-entry.cjs")}));__webpack_require__.O()}]);