# filter-string

[![node](https://img.shields.io/node/v/filter-string.svg)](https://www.npmjs.com/package/filter-string)
[![npm](https://img.shields.io/npm/v/filter-string.svg)](https://www.npmjs.com/package/filter-string)
[![license](https://img.shields.io/npm/l/filter-string.svg)](https://github.com/kagawagao/filter-string/blob/master/LICENSE)
[![Build Status](https://travis-ci.org/kagawagao/filter-string.svg?branch=master)](https://travis-ci.org/kagawagao/filter-string)
[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](http://standardjs.com/)
[![bitHound Overall Score](https://www.bithound.io/github/kagawagao/filter-string/badges/score.svg)](https://www.bithound.io/github/kagawagao/filter-string)
[![bitHound Dependencies](https://www.bithound.io/github/kagawagao/filter-string/badges/dependencies.svg)](https://www.bithound.io/github/kagawagao/filter-string/master/dependencies/npm)
[![bitHound Dev Dependencies](https://www.bithound.io/github/kagawagao/filter-string/badges/devDependencies.svg)](https://www.bithound.io/github/kagawagao/filter-string/master/dependencies/npm)
[![Coveralls github](https://img.shields.io/coveralls/github/kagawagao/filter-string.svg)](https://coveralls.io/github/kagawagao/filter-string)

Parse and stringify RESTFul filter string

## Install

```bash
npm install filter-string
```

## Use

### Stringify

```javascript
import { stringify } from 'filter-string'

const filters = [{
  key: 'a',
  op: 'eq',
  value: 'xxx'
}, {
  key: 'b',
  op: 'gt',
  value: 'yyy'
}]

const $filter = stringify(filters, {
  op: 'and'
})

// output
// a eq xxx and b gt yyy
```

### Parse

```javascript
import { parse } from 'filter-string'

const $filter = 'a eq xxx and b gt yyy'

const filters = parse($filter)

// output
// [{
//   key: 'a',
//   op: 'eq',
//   value: 'xxx'
// }, {
//   key: 'b',
//   op: 'gt',
//   value: 'yyy'
// }]
```

### Needed polyfill

```javascript
Array.prototype.filter
```

```javascript
Array.prototype.find
```

> FYI: You should add polyfill by yourself if need

## Development

- Install packages

```bash
npm install
```

- Build for publish

```bash
npm run build
```

- Run test

```bash
npm run test
```
