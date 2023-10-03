'use client'

import React from 'react'
// @ts-ignore
import { lexer } from 'css-tree'
import './MatchGraph.css'

type Elements = HTMLElement | SVGElement

function setupElement (el: Elements, attrs: any, children: any) {
  if (typeof attrs === 'string') {
    attrs = {
      class: attrs
    }
  }

  for (let attrName in attrs) {
    if (attrName.startsWith('on')) {
      el.addEventListener(attrName.substring(2), attrs[attrName])
    } else {
      el.setAttribute(attrName, attrs[attrName])
    }
  }

  if (Array.isArray(children)) {
    children.forEach(child => el.appendChild(child && child.nodeType ? child : createText(child)))
  } else if (typeof children === 'string') {
    el.innerHTML = children
  }

  return el
}

const getNodeValue = (node: any) => {
  switch (node?.type) {
    case 'Type':
    case 'Property':
    case 'Keyword':
    case 'Function':
      return node.name
    case 'Token':
    case 'String':
      return node.value
    case 'Comma':
      return ','
  }
}

const fixedValue = (value: string, syntax: any, isFunction: boolean) => {
  if (isFunction) {
    return `${syntax.terms[0].name}(${value})`
  }
  return value
}

function createElement (tag: string, attrs: any, children?: any) {
  return setupElement(document.createElement(tag), attrs, children) // FIXME: documentを使用しないようにリファクタリングする
}

function createSvgElement (tag: string, attrs: any, children?: any) {
  return setupElement(document.createElementNS('http://www.w3.org/2000/svg', tag), attrs, children)
}

function createText (text: string) {
  return document.createTextNode(String(text))
}

const MatchGraphConnectionMarker = () => (
  <svg style={{ position: 'absolute', zIndex: -1, width: 0, height: 0 }}>
    <marker
      id="match-graph-connection-marker"
      className={'match-graph-connection-end'}
      viewBox="0 0 5 10"
      refX="0"
      refY="5"
      markerUnits="strokeWidth"
      markerWidth="6"
      markerHeight="4"
      orient="auto"
    >
      <path d="M 0 0 L 10 5 L 0 10 z"></path>
    </marker>
  </svg>
)

const SYNTAX_URL = 'https://csstree.github.io/docs/syntax/'

type MatchNode = {
  type: string
  match: any
  name: string | boolean
  value: boolean
  map: any
  then: any
  else: any
  syntax: any
}

type Props = {
  name: string
  value?: string
}

const MatchGraph = (props: Props) => {

  const { name, value } = props
  const data = lexer.getProperty(name) ?? lexer.getType(name)
  if (data === null) return null

  const syntax = data.syntax.terms[0]
  const isFunction = syntax.type === 'Function'
  const match = value ? lexer.match(data, fixedValue(value, data.syntax, isFunction)) : null
  const matchStack = match?.matched?.match ?? []

  const walk = (node: MatchNode, container: Elements, depth: number = 0): boolean | never => {
    if (node.type === 'MatchGraph') {
      return walk(node.match, container)
    }

    let complex = false
    let el
    let contentEl
    let mainEl

    el = createElement('div', 'node-wrapper', [
      contentEl = createElement('div', 'node-content', [
        mainEl = createElement('div', 'node')
      ])
    ])

    if (visited.has(node)) {
      mainEl.classList.add('node_recursive')
      mainEl.innerHTML = 'Recursive'
      container.appendChild(el)
      return true
    }

    if (node.type === 'If') {
      visited.set(node, node.value)
      ifStack.push(node)
    }

    elByNode.set(node, {
      root: el,
      content: contentEl,
      main: mainEl
    })

    switch (node.type) {
      case 'Match': {
        mainEl.classList.add('node_match')
        mainEl.innerHTML = node.type

        let toNode = null
        for (let i = ifStack.length - 1, prev = node; i >= 0; i--) {
          const ifStackItem = ifStack[i]

          if (prev === ifStackItem.then) {
            toNode = ifStackItem.then
            break
          }

          prev = ifStackItem
        }

        if (toNode !== null) {
          laterConnections.push({
            from: mainEl,
            to: toNode,
            num: 0,
            total: { count: 0 }
          })
        }
        break
      }

      case 'Mismatch': {
        mainEl.classList.add('node_mismatch')
        mainEl.innerHTML = node.type

        let toNode = null
        for (let i = ifStack.length - 1, prev = node; i >= 0; i--) {
          const ifStackItem = ifStack[i]

          if (prev === ifStackItem.then) {
            toNode = ifStackItem.else
            break
          }

          prev = ifStackItem
        }

        if (toNode !== null) {
          laterConnections.push({
            from: mainEl,
            to: toNode,
            num: 0,
            total: { count: 0 }
          })
        }
        break
      }

      case 'DisallowEmpty':
        mainEl.classList.add('node_disallow-empty')
        mainEl.innerHTML = node.type
        break

      case 'Type':
      case 'Property':
      case 'Keyword':
      case 'Function':
      case 'Token':
      case 'String':
      case 'Comma': {
        if (!node.match) {
          let key: string | boolean = false

          switch (node.type) {
            case 'Type':
              key = `<a href="${SYNTAX_URL}#Type:` + node.name + '" target="_blank">&lt;' + node.name + '&gt;</a>'
              break
            case 'Property':
              key = `<a href="${SYNTAX_URL}#Property:` + node.name + '" target="_blank">&lt;\'' + node.name + '\'&gt;</a>'
              break
            case 'Function':
            case 'Keyword':
              key = node.name
              break
            case 'Token':
            case 'String':
              key = node.value
              break
            case 'Comma':
              key = ','
              break
          }

          let isMatched = false
          const stackValue = getNodeValue(matchStack?.[0]?.syntax)
          const nodeValue = getNodeValue(node.syntax)
          if (stackValue && nodeValue && stackValue === nodeValue && isParentMatch) {
            matchStack.shift()
            isMatched = true
          }
          mainEl.classList.add('node_check')
          mainEl.innerHTML =
            `<span class="node__label${isMatched ? ' match' : ''}">` + node.type + '</span>' +
            `<span class="node__key${isMatched ? ' match' : ''}">` + key + '</span>'
        }
        break
      }

      default: {
        mainEl.classList.add('node_default')

        const nestedEl = el.appendChild(createElement('div', 'nested nested_labeled'))

        mainEl.appendChild(createElement('div', 'node__type', node.type))
        complex = true

        let nestedSimpleEl = nestedEl
        const values = node.type === 'Enum' ? node.map : node
        const nestedOffset = {
          count: 0
        }
        for (const key in values) {
          if (values === node && key === 'syntax' || key === 'type') {
            continue
          }

          const value = values[key]
          const isNested = value && typeof value === 'object'
          const field = mainEl.appendChild(
            createElement(
              'div',
              'node-field',
              '<span class="node-field-label">' +
              key +
              '</span>' +
              '<span>' +
              (isNested
                  ? '<span class="connection-dot"></span>'
                  : typeof value === 'function' ? '[function]' : JSON.stringify(value)
              ) +
              '</span>'
            )
          )

          const stackValue = getNodeValue(matchStack?.[0]?.syntax)
          const nodeValue = getNodeValue(value.syntax)
          if (key === 'match' && stackValue && nodeValue && stackValue !== nodeValue) {
            if (unMatchedDepth === null) {
              unMatchedDepth = depth
              isParentMatch = false
            }
          }

          if (key === 'else' && unMatchedDepth === depth) {
            unMatchedDepth = null
            isParentMatch = true
          }

          if (isNested) {
            if (walk(value, nestedEl, depth + 1)) {
              // complex
              nestedSimpleEl = elByNode.get(value)
            } else {
              // simple
              if (nestedEl !== nestedSimpleEl) {
                // @ts-ignore
                nestedSimpleEl.content.appendChild(elByNode.get(value).root)
              }
            }

            connections.push({
              from: field.lastChild?.lastChild,
              to: elByNode.get(value)?.main,
              num: nestedOffset.count++,
              total: nestedOffset
            })
          }
        }
      }
    }

    container.appendChild(el)

    if (node.type === 'If') {
      ifStack.pop()
    }

    return complex
  }

  const visited = new Map()
  const elByNode = new Map()
  const ifStack: MatchNode[] = []
  const laterConnections = []
  let unMatchedDepth: null | number = null
  let isParentMatch = true
  type Connections = { from: ChildNode | null | undefined; to: any; num: number; total: { count: number } }
  const connections: Connections[] = []

  const matchTreeEl = createElement('div', 'graph')
  let matchTreeConnectionsEl: Elements

  walk(data.match, matchTreeEl)

  matchTreeConnectionsEl = createSvgElement('svg', 'connections-canvas')

  // build connections
  setTimeout(() => {
    const baseBox = matchTreeEl.getBoundingClientRect()

    connections
      .map(function (connection) {
        // @ts-ignore
        const from = connection.from?.getBoundingClientRect()
        const to = connection.to.getBoundingClientRect()
        const back = from.right > to.left

        const x1 = from.right - baseBox.left
        const y1 = from.top - baseBox.top + from.height / 2
        const x2 = (back ? to.right + 1 : to.left - 1) - baseBox.left - 7
        const y2 = to.top - baseBox.top + 10
        const midX = back ? 16 : 12 + Math.abs(connection.num - connection.total.count) * 5

        if (y1 === y2) {
          return [
            'M', x1, y1,
            'H', x2
          ].join(' ')
        }

        const arc = Math.abs(y1 - y2) > 16 ? 8 : 0
        const arcY = y2 < y1 ? -arc : arc

        return [
          'M', x1, y1,
          'h', midX - arc,
          'q', [arc, 0], [arc, arcY],
          'V', y2 - arcY,
          'q', [0, arcY], [back ? -arc : arc, arcY],
          'H', x2
        ].join(' ')
      })
      .forEach(function (path) {
        matchTreeConnectionsEl.appendChild(
          createSvgElement('path', {
            class: 'connection',
            d: path
          })
        )
      })
  }, 100)

  return <div className="view-match-graph">
    <MatchGraphConnectionMarker />
    <div
      className="canvas"
      ref={ref => {
        if (ref?.childElementCount === 0) {
          ref.append(matchTreeConnectionsEl, matchTreeEl)
        }
      }}
    />
  </div>
}

export default MatchGraph
