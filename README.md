# filter-string

[![node](https://img.shields.io/node/v/filter-string.svg)](https://www.npmjs.com/package/filter-string)
[![npm](https://img.shields.io/npm/v/filter-string.svg)](https://www.npmjs.com/package/filter-string)
[![license](https://img.shields.io/npm/l/filter-string.svg)](https://github.com/kagawagao/filter-string/blob/master/LICENSE)
[![Build Status](https://travis-ci.org/kagawagao/filter-string.svg?branch=master)](https://travis-ci.org/kagawagao/filter-string)
[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](http://standardjs.com/)
[![Coverage Status](https://coveralls.io/repos/github/kagawagao/filter-string/badge.svg?branch=master)](https://coveralls.io/github/kagawagao/filter-string?branch=master)

Parse and stringify RESTFul filter string

## Install

```bash
npm install filter-string
```

## Use

### Stringify

```javascript
import { stringify } from 'filter-string'

const filters = [
  {
    key: 'a',
    op: 'eq',
    value: 'xxx',
  },
  {
    key: 'b',
    op: 'gt',
    value: 'yyy',
  },
]

const $filter = stringify(filters, {
  op: 'and',
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

- Installation

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
