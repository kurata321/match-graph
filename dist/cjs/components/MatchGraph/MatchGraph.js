"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
// @ts-ignore
const css_tree_1 = require("css-tree");
require("./MatchGraph.css");
function setupElement(el, attrs, children) {
    if (typeof attrs === 'string') {
        attrs = {
            class: attrs
        };
    }
    for (let attrName in attrs) {
        if (attrName.startsWith('on')) {
            el.addEventListener(attrName.substring(2), attrs[attrName]);
        }
        else {
            el.setAttribute(attrName, attrs[attrName]);
        }
    }
    if (Array.isArray(children)) {
        children.forEach(child => el.appendChild(child && child.nodeType ? child : createText(child)));
    }
    else if (typeof children === 'string') {
        el.innerHTML = children;
    }
    return el;
}
function createElement(tag, attrs, children) {
    return setupElement(document.createElement(tag), attrs, children); // FIXME: documentを使用しないようにリファクタリングする
}
function createSvgElement(tag, attrs, children) {
    return setupElement(document.createElementNS('http://www.w3.org/2000/svg', tag), attrs, children);
}
function createText(text) {
    return document.createTextNode(String(text));
}
const SYNTAX_URL = 'https://csstree.github.io/docs/syntax/';
const MatchGraph = (props) => {
    var _a;
    if (typeof window === 'undefined')
        return null;
    const { name } = props;
    const match = (_a = css_tree_1.lexer.getProperty(name)) !== null && _a !== void 0 ? _a : css_tree_1.lexer.getType(name); // FIXME: check property or type
    if (match === null)
        return null;
    const walk = (node, container) => {
        var _a, _b;
        if (node.type === 'MatchGraph') {
            return walk(node.match, container);
        }
        let complex = false;
        let el;
        let contentEl;
        let mainEl;
        el = createElement('div', 'node-wrapper', [
            contentEl = createElement('div', 'node-content', [
                mainEl = createElement('div', 'node')
            ])
        ]);
        if (visited.has(node)) {
            mainEl.classList.add('node_recursive');
            mainEl.innerHTML = 'Recursive';
            container.appendChild(el);
            return true;
        }
        if (node.type === 'If') {
            visited.set(node, node.value);
            ifStack.push(node);
        }
        elByNode.set(node, {
            root: el,
            content: contentEl,
            main: mainEl
        });
        switch (node.type) {
            case 'Match': {
                mainEl.classList.add('node_match');
                mainEl.innerHTML = node.type;
                let toNode = null;
                for (let i = ifStack.length - 1, prev = node; i >= 0; i--) {
                    const ifStackItem = ifStack[i];
                    if (prev === ifStackItem.then) {
                        toNode = ifStackItem.then;
                        break;
                    }
                    prev = ifStackItem;
                }
                if (toNode !== null) {
                    laterConnections.push({
                        from: mainEl,
                        to: toNode,
                        num: 0,
                        total: { count: 0 }
                    });
                }
                break;
            }
            case 'Mismatch': {
                mainEl.classList.add('node_mismatch');
                mainEl.innerHTML = node.type;
                let toNode = null;
                for (let i = ifStack.length - 1, prev = node; i >= 0; i--) {
                    const ifStackItem = ifStack[i];
                    if (prev === ifStackItem.then) {
                        toNode = ifStackItem.else;
                        break;
                    }
                    prev = ifStackItem;
                }
                if (toNode !== null) {
                    laterConnections.push({
                        from: mainEl,
                        to: toNode,
                        num: 0,
                        total: { count: 0 }
                    });
                }
                break;
            }
            case 'DisallowEmpty':
                mainEl.classList.add('node_disallow-empty');
                mainEl.innerHTML = node.type;
                break;
            case 'Type':
            case 'Property':
            case 'Keyword':
            case 'Function':
            case 'Token':
            case 'String':
            case 'Comma': {
                if (!node.match) {
                    let key = false;
                    switch (node.type) {
                        case 'Type':
                            key = `<a href="${SYNTAX_URL}#Type:` + node.name + '" target="_blank">&lt;' + node.name + '&gt;</a>';
                            break;
                        case 'Property':
                            key = `<a href="${SYNTAX_URL}#Property:` + node.name + '" target="_blank">&lt;\'' + node.name + '\'&gt;</a>';
                            break;
                        case 'Function':
                        case 'Keyword':
                            key = node.name;
                            break;
                        case 'Token':
                        case 'String':
                            key = node.value;
                            break;
                        case 'Comma':
                            key = ',';
                            break;
                    }
                    mainEl.classList.add('node_check');
                    mainEl.innerHTML =
                        '<span class="node__label">' + node.type + '</span>' +
                            '<span class="node__key">' + key + '</span>';
                }
                break;
            }
            default: {
                mainEl.classList.add('node_default');
                const nestedEl = el.appendChild(createElement('div', 'nested nested_labeled'));
                mainEl.appendChild(createElement('div', 'node__type', node.type));
                complex = true;
                let nestedSimpleEl = nestedEl;
                const values = node.type === 'Enum' ? node.map : node;
                const nestedOffset = {
                    count: 0
                };
                for (const key in values) {
                    if (values === node && key === 'syntax' || key === 'type') {
                        continue;
                    }
                    const value = values[key];
                    const isNested = value && typeof value === 'object';
                    const field = mainEl.appendChild(createElement('div', 'node-field', '<span class="node-field-label">' +
                        key +
                        '</span>' +
                        '<span>' +
                        (isNested
                            ? '<span class="connection-dot"></span>'
                            : typeof value === 'function' ? '[function]' : JSON.stringify(value)) +
                        '</span>'));
                    if (isNested) {
                        if (walk(value, nestedEl)) {
                            // complex
                            nestedSimpleEl = elByNode.get(value);
                        }
                        else {
                            // simple
                            if (nestedEl !== nestedSimpleEl) {
                                // @ts-ignore
                                nestedSimpleEl.content.appendChild(elByNode.get(value).root);
                            }
                        }
                        connections.push({
                            from: (_a = field.lastChild) === null || _a === void 0 ? void 0 : _a.lastChild,
                            to: (_b = elByNode.get(value)) === null || _b === void 0 ? void 0 : _b.main,
                            num: nestedOffset.count++,
                            total: nestedOffset
                        });
                    }
                }
            }
        }
        container.appendChild(el);
        if (node.type === 'If') {
            ifStack.pop();
        }
        return complex;
    };
    const visited = new Map();
    const elByNode = new Map();
    const ifStack = [];
    const laterConnections = [];
    const connections = [];
    const matchTreeEl = createElement('div', 'graph');
    let matchTreeConnectionsEl;
    walk(match.match, matchTreeEl);
    matchTreeConnectionsEl = createSvgElement('svg', 'connections-canvas');
    // build connections
    setTimeout(() => {
        const baseBox = matchTreeEl.getBoundingClientRect();
        connections
            .map(function (connection) {
            var _a;
            // @ts-ignore
            const from = (_a = connection.from) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
            const to = connection.to.getBoundingClientRect();
            const back = from.right > to.left;
            const x1 = from.right - baseBox.left;
            const y1 = from.top - baseBox.top + from.height / 2;
            const x2 = (back ? to.right + 1 : to.left - 1) - baseBox.left - 7;
            const y2 = to.top - baseBox.top + 10;
            const midX = back ? 16 : 12 + Math.abs(connection.num - connection.total.count) * 5;
            if (y1 === y2) {
                return [
                    'M', x1, y1,
                    'H', x2
                ].join(' ');
            }
            const arc = Math.abs(y1 - y2) > 16 ? 8 : 0;
            const arcY = y2 < y1 ? -arc : arc;
            return [
                'M', x1, y1,
                'h', midX - arc,
                'q', [arc, 0], [arc, arcY],
                'V', y2 - arcY,
                'q', [0, arcY], [back ? -arc : arc, arcY],
                'H', x2
            ].join(' ');
        })
            .forEach(function (path) {
            matchTreeConnectionsEl.appendChild(createSvgElement('path', {
                class: 'connection',
                d: path
            }));
        });
    }, 0);
    return react_1.default.createElement("div", { className: "view-match-graph" },
        react_1.default.createElement(MatchGraphConnectionMarker, null),
        react_1.default.createElement("div", { className: "canvas", ref: ref => {
                if ((ref === null || ref === void 0 ? void 0 : ref.childElementCount) === 0) {
                    ref.append(matchTreeConnectionsEl, matchTreeEl);
                }
            } }));
};
const MatchGraphConnectionMarker = () => (react_1.default.createElement("svg", { style: { position: 'absolute', zIndex: -1, width: 0, height: 0 } },
    react_1.default.createElement("marker", { id: "match-graph-connection-marker", viewBox: "0 0 5 10", refX: "0", refY: "5", markerUnits: "strokeWidth", markerWidth: "6", markerHeight: "4", orient: "auto" },
        react_1.default.createElement("path", { d: "M 0 0 L 10 5 L 0 10 z", fill: "rgba(160, 160, 160, 0.65)" }))));
exports.default = (0, react_1.memo)(MatchGraph);
//# sourceMappingURL=MatchGraph.js.map